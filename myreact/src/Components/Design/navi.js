import React, { useState } from 'react';
import { Menu, X, Home, Archive } from 'lucide-react';
import { Button } from '@mui/material';

export default function Components() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <header className="bg-slate-50 text-slate-800 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <a href="/" className="text-xl font-semibold tracking-tight">
            <span className="text-slate-700">Subtle</span>
            <span className="text-slate-500">Design</span>
          </a>
          <nav className="hidden md:flex space-x-6">
            <a href="/" className="group flex items-center space-x-2 text-slate-600 hover:text-slate-900 transition-colors duration-200">
              <Home className="h-5 w-5" />
              <span className="font-medium">Home</span>
            </a>
            <a href="/archive" className="group flex items-center space-x-2 text-slate-600 hover:text-slate-900 transition-colors duration-200">
              <Archive className="h-5 w-5" />
              <span className="font-medium">Archive</span>
            </a>
          </nav>
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleMenu}
              aria-label="Toggle menu"
              className="text-slate-600 hover:text-slate-900 hover:bg-slate-200"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-slate-100">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <a
              href="/"
              className="block px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:text-slate-900 hover:bg-slate-200 transition-colors duration-200"
            >
              <div className="flex items-center space-x-2">
                <Home className="h-5 w-5" />
                <span>Home</span>
              </div>
            </a>
            <a
              href="/archive"
              className="block px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:text-slate-900 hover:bg-slate-200 transition-colors duration-200"
            >
              <div className="flex items-center space-x-2">
                <Archive className="h-5 w-5" />
                <span>Archive</span>
              </div>
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
