"use client"



import React, { useState } from 'react'
import Sidebar from '../_components/SideBar';
import DashboardNavbar from '../_components/NavBar';
import { useUser } from '@clerk/nextjs';


export default function DashboardLayout({ children }: { children: React.ReactNode }) {

   const [isCollapsed, setIsCollapsed] = useState(false);
   const user = useUser()
  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar isCollapsed={isCollapsed} setIsCollapsed={setIsCollapsed} />
      
      <div className="flex-1 flex flex-col overflow-hidden">
        <DashboardNavbar userName={user.user?.firstName as string} />
        
        <main className="flex-1 overflow-y-auto p-8">
          {children}
        </main>
      </div>
    </div>
  );
}
