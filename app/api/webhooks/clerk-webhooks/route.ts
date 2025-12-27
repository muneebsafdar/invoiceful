// app/api/webhooks/clerk/route.ts
import { Webhook } from 'svix';
import { headers } from 'next/headers';
import { WebhookEvent } from '@clerk/nextjs/server';
import connectDB from '@/config/db/db';
import User from "@/models/user";


export async function POST(req: Request) {
  const WEBHOOK_SECRET = process.env.CLERK_WEBHOOK_SECRET;

  console.log('🚀 ~ file: route.ts:10 ~ POST ~ WEBHOOK_SECRET:', WEBHOOK_SECRET);

  if (!WEBHOOK_SECRET) {
    throw new Error('Please add CLERK_WEBHOOK_SECRET to .env');
  }

  // Get headers
  const headerPayload : any= await headers();
  const svix_id = headerPayload.get('svix-id');
  const svix_timestamp = headerPayload.get('svix-timestamp');
  const svix_signature = headerPayload.get('svix-signature');

  if (!svix_id || !svix_timestamp || !svix_signature) {
    return new Response('Missing svix headers', { status: 400 });
  }

  // Get body
  const payload = await req.json();
  const body = JSON.stringify(payload);

  // Verify webhook
  const wh = new Webhook(WEBHOOK_SECRET);
  let evt: WebhookEvent;

  try {
    evt = wh.verify(body, {
      'svix-id': svix_id,
      'svix-timestamp': svix_timestamp,
      'svix-signature': svix_signature,
    }) as WebhookEvent;
  } catch (err) {
    console.error('Webhook verification failed:', err);
    return new Response('Invalid signature', { status: 400 });
  }

  // Handle the webhook
  const eventType = evt.type;

  if (eventType === 'user.created') {
    const { id, email_addresses, first_name, last_name, image_url } = evt.data;

    console.log('User created in Clerk:', id,email_addresses, first_name, last_name, image_url);
    try {
       await connectDB();
      
      await User.create({
        clerkId: id,
        email: email_addresses[0]?.email_address,
        firstName: first_name,
        lastName: last_name,
        imageUrl: image_url,
    });

      console.log('User created in MongoDB:', id);
    } catch (error) {
      console.error('Error creating user in MongoDB:', error);
      return new Response('Database error', { status: 500 });
    }
  }

  if (eventType === 'user.updated') {
    const { id, email_addresses, first_name, last_name, image_url } = evt.data;

    try {
      await connectDB();
      
      await User.updateOne(
        { clerkId: id },
        {
          $set: {
            email: email_addresses[0]?.email_address,
            firstName: first_name,
            lastName: last_name,
            imageUrl: image_url,
            updatedAt: new Date(),
          },
        }
      );

      console.log('User updated in MongoDB:', id);
    } catch (error) {
      console.error('Error updating user in MongoDB:', error);
      return new Response('Database error', { status: 500 });
    }
  }

  if (eventType === 'user.deleted') {
    const { id } = evt.data;

    try {
     await connectDB();
      
      await User.deleteOne({ clerkId: id });

      console.log('User deleted from MongoDB:', id);
    } catch (error) {
      console.error('Error deleting user from MongoDB:', error);
      return new Response('Database error', { status: 500 });
    }
  }

  return new Response('Webhook processed', { status: 200 });
}