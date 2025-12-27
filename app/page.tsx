"use client"

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Zap, FileText, DollarSign, Clock, Shield, Sparkles } from 'lucide-react';

const PreciseBillLanding = () => {
  const [billingCycle, setBillingCycle] = useState('monthly');

  const features = [
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Lightning Fast",
      description: "Generate professional invoices in seconds with AI-powered automation"
    },
    {
      icon: <FileText className="w-8 h-8" />,
      title: "Smart Templates",
      description: "AI learns your style and creates perfectly formatted invoices every time"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Secure & Reliable",
      description: "Bank-level security to keep your financial data safe and protected"
    }
  ];

  const pricingPlans = [
    {
      name: "Starter",
      monthlyPrice: 9,
      annualPrice: 90,
      features: ["50 invoices/month", "Basic templates", "Email support", "PDF export"],
      popular: false
    },
    {
      name: "Professional",
      monthlyPrice: 29,
      annualPrice: 290,
      features: ["Unlimited invoices", "AI-powered templates", "Priority support", "Advanced analytics", "Custom branding"],
      popular: true
    },
    {
      name: "Enterprise",
      monthlyPrice: 99,
      annualPrice: 990,
      features: ["Everything in Pro", "Multi-user accounts", "API access", "Dedicated manager", "Custom integrations"],
      popular: false
    }
  ];

  return (
    <div className="min-h-screen bg-white text-gray-900 overflow-hidden">
      {/* Animated Background Bubbles */}
      

      {/* Navigation */}
      <nav className="relative z-10 px-6 py-4 flex items-center justify-between border-b border-gray-200 bg-white/80 backdrop-blur-sm">
        <div className="flex items-center gap-8">
          <motion.div 
            className="flex items-center gap-2"
            whileHover={{ scale: 1.05 }}
          >
            <div className="w-10 h-10 bg-linear-to-br from-purple-600 to-blue-600 rounded-lg flex items-center justify-center">
              <Sparkles className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-bold bg-linear-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              PreciseBill
            </span>
          </motion.div>
          <div className="hidden md:flex gap-6">
            <motion.a 
              href="#features" 
              className="text-gray-600 hover:text-purple-600 font-medium"
              whileHover={{ y: -2 }}
            >
              Features
            </motion.a>
            <motion.a 
              href="#pricing" 
              className="text-gray-600 hover:text-purple-600 font-medium"
              whileHover={{ y: -2 }}
            >
              Pricing
            </motion.a>
          </div>
        </div>
        <div className="flex gap-3">
          <motion.button
            className="px-6 py-2 text-gray-700 font-medium hover:text-purple-600"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Sign In
          </motion.button>
          <motion.button
            className="px-6 py-2 bg-linear-to-r from-purple-600 to-blue-600 text-white rounded-lg font-medium shadow-lg shadow-purple-500/30"
            whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(147, 51, 234, 0.4)" }}
            whileTap={{ scale: 0.95 }}
          >
            Get Started
          </motion.button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative z-10 px-6 py-20 md:py-18">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-2 bg-linear-to-r from-purple-100 to-blue-100 rounded-full mb-6"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <Sparkles className="w-4 h-4 text-purple-600" />
              <span className="text-sm font-semibold bg-linear-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                AI Powered Platform
              </span>
            </motion.div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Create Perfect{' '}
              <span className="bg-linear-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                Invoices
              </span>{' '}
              in Seconds
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Transform your billing process with AI-powered invoice generation. Professional, accurate, and lightning fast.
            </p>
            <div className="flex gap-4">
              <motion.button
                className="px-8 py-4 bg-linear-to-r from-purple-600 to-blue-600 text-white rounded-lg font-semibold shadow-xl shadow-purple-500/30"
                whileHover={{ scale: 1.05, boxShadow: "0 25px 50px rgba(147, 51, 234, 0.4)" }}
                whileTap={{ scale: 0.95 }}
              >
                Start Free Trial
              </motion.button>
              <motion.button
                className="px-8 py-4 border-2 border-gray-300 text-gray-700 rounded-lg font-semibold hover:border-purple-600 hover:text-purple-600"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Watch Demo
              </motion.button>
            </div>
          </motion.div>
          
      
      <div className="w-[420px] bg-white rounded-xl shadow-lg p-6">

        {/* Header */}
        <div className="flex justify-between items-start mb-6">
          <div>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-blue-600 text-white flex items-center justify-center rounded-md font-bold">
                AI
              </div>
              <h2 className="font-semibold text-gray-800">Acme Corporation</h2>
            </div>
            <p className="text-sm text-gray-400 mt-1">
              GST: 27AAAPL1234C1ZV
            </p>
          </div>

          <div className="text-right">
            <p className="text-sm font-semibold text-gray-700">#INV-1024</p>
            <span className="text-xs bg-green-100 text-green-600 px-2 py-1 rounded-md">
              Paid
            </span>
          </div>
        </div>

        {/* Items */}
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <p className="text-gray-600">Website Design & Development</p>
            <p className="font-medium text-gray-800">₹15,000</p>
          </div>

          <div className="flex justify-between items-center">
            <p className="text-gray-600">Consultation (2 hours)</p>
            <p className="font-medium text-gray-800">₹3,000</p>
          </div>

          <div className="flex justify-between items-center">
            <p className="text-gray-600">Premium Hosting Setup</p>
            <p className="font-medium text-gray-800">₹2,500</p>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-200 my-5"></div>

        {/* Summary */}
        <div className="space-y-2 text-sm">
          <div className="flex justify-between">
            <p className="text-gray-500">Subtotal</p>
            <p className="text-gray-700">₹20,500</p>
          </div>

          <div className="flex justify-between">
            <p className="text-gray-500">GST (18%)</p>
            <p className="text-gray-700">₹3,240</p>
          </div>
        </div>

        {/* Total */}
        <div className="flex justify-between items-center mt-4">
          <p className="font-semibold text-gray-800">Total Amount</p>
          <p className="text-blue-600 font-bold text-lg">₹23,740</p>
        </div>

        {/* Buttons */}
        <div className="flex gap-3 mt-6">
          <button className="w-full border border-gray-300 rounded-lg py-2 text-gray-700 hover:bg-gray-100 transition">
            Preview
          </button>

          <button className="w-full bg-blue-600 text-white rounded-lg py-2 hover:bg-blue-700 transition">
            Send Invoice
          </button>
        </div>

        {/* Tooltip */}
        <div className="mt-4 text-xs bg-gray-100 p-3 rounded-md text-gray-600">
          <span className="font-medium text-green-600">AI</span> parsed from:
          <br />
          "Invoice for web design — ₹15,000..."
        </div>

      </div>
    
  
          
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="relative z-10 px-6 py-20 bg-white/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-2 bg-linear-to-r from-purple-100 to-blue-100 rounded-full mb-4"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
            >
              <Sparkles className="w-4 h-4 text-purple-600" />
              <span className="text-sm font-semibold bg-linear-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                Features
              </span>
            </motion.div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Everything You Need to{' '}
              <span className="bg-linear-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                Scale
              </span>
            </h2>
            <p className="text-xl text-gray-600">
              Powerful features designed to streamline your invoicing workflow
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, idx) => (
              <motion.div
                key={idx}
                className="relative group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2 }}
              >
                <div className="absolute inset-0 bg-linear-to-br from-purple-600/20 to-blue-600/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all" />
                <motion.div
                  className="relative bg-white/80 backdrop-blur-sm p-8 rounded-2xl border border-gray-200 h-full"
                  whileHover={{ y: -5, boxShadow: "0 25px 50px rgba(147, 51, 234, 0.15)" }}
                >
                  <motion.div
                    className="w-16 h-16 bg-linear-to-br from-purple-600 to-blue-600 rounded-xl flex items-center justify-center mb-6 text-white"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    {feature.icon}
                  </motion.div>
                  <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="relative z-10 px-6 py-20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-2 bg-linear-to-r from-purple-100 to-blue-100 rounded-full mb-4"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
            >
              <DollarSign className="w-4 h-4 text-purple-600" />
              <span className="text-sm font-semibold bg-linear-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                Pricing
              </span>
            </motion.div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Simple, Transparent{' '}
              <span className="bg-linear-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                Pricing
              </span>
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Choose the perfect plan for your business needs
            </p>
            
            <div className="inline-flex items-center gap-3 p-1 bg-gray-100 rounded-full">
              <motion.button
                className={`px-6 py-2 rounded-full font-medium transition-all ${
                  billingCycle === 'monthly'
                    ? 'bg-white text-purple-600 shadow-md'
                    : 'text-gray-600'
                }`}
                onClick={() => setBillingCycle('monthly')}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Monthly
              </motion.button>
              <motion.button
                className={`px-6 py-2 rounded-full font-medium transition-all ${
                  billingCycle === 'annual'
                    ? 'bg-white text-purple-600 shadow-md'
                    : 'text-gray-600'
                }`}
                onClick={() => setBillingCycle('annual')}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Annual <span className="text-sm text-green-600 ml-1">(Save 17%)</span>
              </motion.button>
            </div>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, idx) => (
              <motion.div
                key={idx}
                className={`relative ${plan.popular ? 'md:-mt-4' : ''}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                {plan.popular && (
                  <div className="absolute -top-8 left-1/2 -translate-x-1/2 px-4 py-1 bg-linear-to-r from-purple-600 to-blue-600 text-white text-sm font-semibold rounded-full">
                    Most Popular
                  </div>
                )}
                <motion.div
                  className={`relative bg-white/80 backdrop-blur-sm p-8 rounded-2xl border-2 h-full ${
                    plan.popular
                      ? 'border-purple-600 shadow-2xl shadow-purple-500/20'
                      : 'border-gray-200'
                  }`}
                  whileHover={{ y: -5, boxShadow: plan.popular ? "0 30px 60px rgba(147, 51, 234, 0.25)" : "0 20px 40px rgba(0, 0, 0, 0.1)" }}
                >
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <div className="flex items-baseline mb-6">
                    <span className="text-5xl font-bold bg-linear-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                      ${billingCycle === 'monthly' ? plan.monthlyPrice : plan.annualPrice}
                    </span>
                    <span className="text-gray-600 ml-2">
                      /{billingCycle === 'monthly' ? 'month' : 'year'}
                    </span>
                  </div>
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-3">
                        <div className="w-5 h-5 rounded-full bg-linear-to-br from-purple-600 to-blue-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <motion.button
                    className={`w-full py-4 rounded-lg font-semibold ${
                      plan.popular
                        ? 'bg-linear-to-r from-purple-600 to-blue-600 text-white shadow-lg shadow-purple-500/30'
                        : 'border-2 border-gray-300 text-gray-700 hover:border-purple-600 hover:text-purple-600'
                    }`}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Get Started
                  </motion.button>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 px-6 py-12 border-t border-gray-200 bg-white/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-linear-to-br from-purple-600 to-blue-600 rounded-lg flex items-center justify-center">
                  <Sparkles className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold bg-linear-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                  PreciseBill
                </span>
              </div>
              <p className="text-gray-600">
                AI-powered invoice generation for modern businesses
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-gray-600">
                <li><a href="#" className="hover:text-purple-600">Features</a></li>
                <li><a href="#" className="hover:text-purple-600">Pricing</a></li>
                <li><a href="#" className="hover:text-purple-600">Templates</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-600">
                <li><a href="#" className="hover:text-purple-600">About</a></li>
                <li><a href="#" className="hover:text-purple-600">Blog</a></li>
                <li><a href="#" className="hover:text-purple-600">Careers</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-gray-600">
                <li><a href="#" className="hover:text-purple-600">Privacy</a></li>
                <li><a href="#" className="hover:text-purple-600">Terms</a></li>
                <li><a href="#" className="hover:text-purple-600">Security</a></li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-gray-200 text-center text-gray-600">
            <p>&copy; 2024 PreciseBill. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default PreciseBillLanding;