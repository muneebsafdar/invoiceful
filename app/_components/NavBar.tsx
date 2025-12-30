"use client"


import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Zap, FileText, DollarSign, Shield, Sparkles, 
  Menu, X, LayoutDashboard, FileStack, PlusCircle, 
  Building2, User, LogOut, ChevronLeft, ChevronRight 
} from 'lucide-react';


export default function DashboardNavbar ({ userName = "John Doe" }) {
  return (
    <motion.nav 
      className="bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between"
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
    >
      <div className="flex items-center gap-3">
        <h2 className="text-2xl font-bold text-gray-800">
          Welcome, <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">{userName}</span>
        </h2>
      </div>
      
      <div className="flex items-center gap-4">
        <motion.button
          className="flex items-center gap-2 px-6 py-2.5 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg font-semibold shadow-lg shadow-purple-500/30"
          whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(147, 51, 234, 0.4)" }}
          whileTap={{ scale: 0.95 }}
        >
          <PlusCircle className="w-5 h-5" />
          Create
        </motion.button>
        
        {/* Clerk User Button Placeholder */}
        <motion.div
          className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center text-white font-semibold cursor-pointer"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          {userName.split(' ').map(n => n[0]).join('')}
        </motion.div>
      </div>
    </motion.nav>
  );
};