"use client"
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Sparkles,
  LayoutDashboard, FileStack, PlusCircle, 
  Building2,  LogOut, ChevronLeft, ChevronRight, 
  
} from 'lucide-react';
import { usePathname, useRouter } from 'next/navigation';
import { SignOutButton } from '@clerk/nextjs';



export default function Sidebar ({ isCollapsed, setIsCollapsed }: any) {
  const pathname = usePathname();
  const [activeItem, setActiveItem] = useState('');
  const router = useRouter();
  
  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', path: '/dashboard', icon: <LayoutDashboard className="w-5 h-5" /> },
    { id: 'invoices', label: 'Invoices', path: '/dashboard/invoices', icon: <FileStack className="w-5 h-5" /> },
    { id: 'create', label: 'Create Invoice', path: '/dashboard/create-invoices', icon: <PlusCircle className="w-5 h-5" /> },
    { id: 'business', label: 'Business Profile', path: '/dashboard/bussiness-profile', icon: <Building2 className="w-5 h-5" /> },
  ];

  // Update active item based on current pathname
  useEffect(() => {
    console.log(pathname)
    const currentItem = menuItems.find(item => 
      pathname === item.path || pathname.startsWith(`${item.path}`)
    );
    setActiveItem(currentItem?.id || '');
  }, [pathname]);

  return (
    <motion.aside
      className="bg-white border-r border-gray-200 h-screen flex flex-col relative"
      initial={{ x: -20, opacity: 0 }}
      animate={{ 
        x: 0, 
        opacity: 1,
        width: isCollapsed ? '80px' : '280px'
      }}
      transition={{ duration: 0.3 }}
    >
      {/* Logo Section */}
      <div className="p-6 border-b border-gray-200 flex items-center justify-between">
        <AnimatePresence mode="wait">
          {!isCollapsed && (
            <motion.div
              className="flex items-center gap-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-blue-600 rounded-lg flex items-center justify-center">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                PreciseBill
              </span>
            </motion.div>
          )}
        </AnimatePresence>
        
        {isCollapsed && (
          <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-blue-600 rounded-lg flex items-center justify-center mx-auto">
            <Sparkles className="w-6 h-6 text-white" />
          </div>
        )}
      </div>

      {/* Collapse Button */}
      <motion.button
        className="absolute -right-3 top-24 w-6 h-6 bg-white border-2 border-gray-200 rounded-full flex items-center justify-center shadow-md hover:bg-gray-50"
        onClick={() => setIsCollapsed(!isCollapsed)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        {isCollapsed ? <ChevronRight className="w-4 h-4" /> : <ChevronLeft className="w-4 h-4" />}
      </motion.button>

      {/* Menu Items */}
      <nav className="flex-1 p-4 space-y-2">
        {menuItems.map((item) => {
            const isActive = pathname === item.path && pathname.startsWith(`${item.path}`);
          
          return (
            <motion.button
              key={item.id}
              onClick={() => {
                // You can add navigation here if using Link component
                // For now, just set the active state
                router.push(item.path); 
                setActiveItem(item.id);
                // You might want to use router.push() here
              }}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
                isActive
                  ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg shadow-purple-500/30'
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
              whileHover={{ x: 4 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className={isCollapsed ? 'mx-auto' : ''}>
                {React.cloneElement(item.icon, {
                  className: `w-5 h-5 ${isActive ? 'text-white' : 'text-gray-600'}`
                })}
              </span>
              <AnimatePresence>
                {!isCollapsed && (
                  <motion.span
                    className="font-medium"
                    initial={{ opacity: 0, width: 0 }}
                    animate={{ opacity: 1, width: 'auto' }}
                    exit={{ opacity: 0, width: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    {item.label}
                  </motion.span>
                )}
              </AnimatePresence>
            </motion.button>
          );
        })}
      </nav>

      {/* Logout Button */}
      <div className="p-4 border-t border-gray-200">
        <SignOutButton>
        <motion.button
          className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-red-600 hover:bg-red-50 transition-all"
          whileHover={{ x: 4 }}
          whileTap={{ scale: 0.98 }}
        >
          <span className={isCollapsed ? 'mx-auto' : ''}>
            <LogOut className="w-5 h-5 text-red-600" />
          </span>
          <AnimatePresence>
            {!isCollapsed && (
              <motion.span

                className="font-medium text-red-600"
                initial={{ opacity: 0, width: 0 }}
                animate={{ opacity: 1, width: 'auto' }}
                exit={{ opacity: 0, width: 0 }}
                transition={{ duration: 0.2 }}
              >
                Logout
              </motion.span>
            )}
          </AnimatePresence>
        </motion.button>
        </SignOutButton>
      </div>
    </motion.aside>
  );
};