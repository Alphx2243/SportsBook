'use client'

import "./globals.css";
import Sidebar from "@/lib/Sidebar";
import React, { useState, useEffect } from 'react'
import { Menu, Facebook, Twitter, Instagram, Youtube } from 'lucide-react'
import QRSection from '../lib/QRSection'
import FeaturesSection from '../lib/FeaturesSection'
import TestimonialsSection from '../lib/TestimonialsSection'

function AuthPopup({ onClose = () => {} }) {
  const [activeForm, setActiveForm] = useState('signin')

  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = ''
    }
  }, [])

  const handleOverlayClick = () => onClose()
  const stopPropagation = (e) => e.stopPropagation()
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', activeForm)
    onClose()
  }

  const renderForm = () => {
    switch (activeForm) {
      case 'signin':
        return (
          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            <div>
              <span className="inline-block bg-[#0af5fd] text-black text-xs font-medium px-2 py-1 rounded-full">
                Welcome Back
              </span>
              <h2 className="text-xl text-white font-semibold mt-3">
                Sign in to your account
              </h2>
            </div>
            <div className="flex flex-col">
              <label htmlFor="signin-email" className="text-sm text-gray-300 mb-1">
                Email
              </label>
              <input
                id="signin-email"
                type="email"
                required
                className="bg-[#333] text-white border border-gray-700 rounded px-3 py-2 focus:outline-none"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="signin-password" className="text-sm text-gray-300 mb-1">
                Password
              </label>
              <input
                id="signin-password"
                type="password"
                required
                className="bg-[#333] text-white border border-gray-700 rounded px-3 py-2 focus:outline-none"
              />
            </div>
            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center text-gray-200 gap-1 select-none">
                <input type="checkbox" className="accent-[#0af5fd]" /> Remember me
              </label>
              <button
                type="button"
                onClick={() => setActiveForm('forgot')}
                className="text-[#0af5fd] hover:underline"
              >
                Forgot password?
              </button>
            </div>
            <button
              type="submit"
              className="bg-[#0af5fd] text-black font-medium rounded py-2 hover:opacity-90 transition"
            >
              Sign In
            </button>
          </form>
        )
      case 'signup':
        return (
          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            <div>
              <span className="inline-block bg-[#0af5fd] text-black text-xs font-medium px-2 py-1 rounded-full">
                Create Account
              </span>
              <h2 className="text-xl text-white font-semibold mt-3">
                Join SportsBook today
              </h2>
            </div>
            <div className="flex flex-col">
              <label htmlFor="signup-name" className="text-sm text-gray-300 mb-1">
                Full Name
              </label>
              <input
                id="signup-name"
                type="text"
                required
                className="bg-[#333] text-white border border-gray-700 rounded px-3 py-2 focus:outline-none"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="signup-email" className="text-sm text-gray-300 mb-1">
                Email
              </label>
              <input
                id="signup-email"
                type="email"
                required
                className="bg-[#333] text-white border border-gray-700 rounded px-3 py-2 focus:outline-none"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="signup-password" className="text-sm text-gray-300 mb-1">
                Password
              </label>
              <input
                id="signup-password"
                type="password"
                required
                className="bg-[#333] text-white border border-gray-700 rounded px-3 py-2 focus:outline-none"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="signup-confirm-password" className="text-sm text-gray-300 mb-1">
                Confirm Password
              </label>
              <input
                id="signup-confirm-password"
                type="password"
                required
                className="bg-[#333] text-white border border-gray-700 rounded px-3 py-2 focus:outline-none"
              />
            </div>
            <label className="flex items-start gap-2 text-gray-200 text-sm">
              <input type="checkbox" required className="mt-1 accent-[#0af5fd]" />
              <span>
                I agree to the{' '}
                <a href="#" className="text-[#0af5fd] hover:underline">
                  Terms of Service
                </a>{' '}
                and{' '}
                <a href="#" className="text-[#0af5fd] hover:underline">
                  Privacy Policy
                </a>
              </span>
            </label>
            <button
              type="submit"
              className="bg-[#0af5fd] text-black font-medium rounded py-2 hover:opacity-90 transition"
            >
              Create Account
            </button>
          </form>
        )
      case 'forgot':
        return (
          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            <div>
              <span className="inline-block bg-[#0af5fd] text-black text-xs font-medium px-2 py-1 rounded-full">
                Reset Password
              </span>
              <h2 className="text-xl text-white font-semibold mt-3">
                Recover your account
              </h2>
              <p className="text-sm text-gray-400 mt-1">
                Enter your email and we'll send you a link to reset your password
              </p>
            </div>
            <div className="flex flex-col">
              <label htmlFor="forgot-email" className="text-sm text-gray-300 mb-1">
                Email
              </label>
              <input
                id="forgot-email"
                type="email"
                required
                className="bg-[#333] text-white border border-gray-700 rounded px-3 py-2 focus:outline-none"
              />
            </div>
            <button
              type="submit"
              className="bg-[#0af5fd] text-black font-medium rounded py-2 hover:opacity-90 transition"
            >
              Send Reset Link
            </button>
            <button
              type="button"
              onClick={() => setActiveForm('signin')}
              className="text-sm text-[#0af5fd] hover:underline self-start"
            >
              Back to Sign In
            </button>
          </form>
        )
      default:
        return null
    }
  }

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 z-[9999] flex items-center justify-center"
      onClick={handleOverlayClick}
    >
      <div
        className="bg-[#1e1e1e] w-full max-w-sm p-6 rounded-md relative text-white"
        onClick={stopPropagation}
      >
        {/* Close Button */}
        <button
          className="absolute top-4 right-4 text-gray-300 text-2xl hover:text-white"
          onClick={onClose}
        >
          &times;
        </button>

        {/* Tabs (Hidden in 'forgot' mode) */}
        {activeForm !== 'forgot' && (
          <div className="flex mb-4 border-b border-gray-700">
            <button
              className={`flex-1 py-2 text-center text-sm font-medium ${
                activeForm === 'signin'
                  ? 'text-[#0af5fd] border-b-2 border-[#0af5fd]'
                  : 'text-gray-400'
              }`}
              onClick={() => setActiveForm('signin')}
            >
              Sign In
            </button>
            <button
              className={`flex-1 py-2 text-center text-sm font-medium ${
                activeForm === 'signup'
                  ? 'text-[#0af5fd] border-b-2 border-[#0af5fd]'
                  : 'text-gray-400'
              }`}
              onClick={() => setActiveForm('signup')}
            >
              Sign Up
            </button>
          </div>
        )}

        {/* Active Form */}
        {renderForm()}
      </div>
    </div>
  )
}


export default function RootLayout({ children }) {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false)
    const [showAuth, setShowAuth] = useState(false)
  return (
    <html lang="en">
      <body>

             <header className="bg-[#1a1a1a] border-b border-gray-700">
                <div className="mx-auto px-4 sm:px-6 lg:px-8">
                  <div className="flex items-center justify-between h-16">
                    <button
                      onClick={() => setIsSidebarOpen(true)}
                      className="bg-[#3fadab] text-white px-3 py-1 rounded text-sm hover:bg-blue-700 transition"
                    >
                      <Menu className="h-5 w-5" />
                    </button>
                    <div className="flex items-center">
                      <img src="/sblogo_bg.png" alt="Logo" className="h-8 w-auto" />
                      <span className="ml-2 text-white font-bold text-xl">SportsBook</span>
                    </div>
                    <button
                      onClick={() => setShowAuth(true)}
                      className="bg-[#3fadab] text-white px-4 py-1 rounded text-sm hover:bg-blue-700 transition"
                    >
                      LOGIN
                    </button>
                  </div>
                </div>
              </header>

              <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />

        {children}
        {/* Footer */}
        <footer className="bg-[#1a1a1a] pt-16 pb-8 text-[#e5e5e5]">
        <hr className="mx-8 relative bottom-6 opacity-20" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div>
              <h4 className="text-teal-400 font-semibold mb-4">Platform</h4>
              <ul className="space-y-2">
                <li>
                  <a href="./" className="hover:text-white transition">
                    Scan
                  </a>
                </li>
                <li>
                  <a href="./" className="hover:text-white transition">
                    Sports
                  </a>
                </li>
                <li>
                  <a href="./livescoring" className="hover:text-white transition">
                    Leaderboard
                  </a>
                </li>
                <li>
                  <a href="./livescoring" className="hover:text-white transition">
                    Live Scoring
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-teal-400 font-semibold mb-4">Features</h4>
              <ul className="space-y-2">
                <li>
                  <a href="./occupancy" className="hover:text-white transition">
                    Occupancy
                  </a>
                </li>
                <li>
                  <a href="./playersearch" className="hover:text-white transition">
                    Player Search
                  </a>
                </li>
                <li>
                  <a href="./bookingsystem" className="hover:text-white transition">
                    Booking
                  </a>
                </li>
                <li>
                  <a href="./others" className="hover:text-white transition">
                    Others
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-teal-400 font-semibold mb-4">Resources</h4>
              <ul className="space-y-2">
                <li>
                  <a href="./others" className="hover:text-white transition">
                    Help Center
                  </a>
                </li>
                <li>
                  <a href="./others" className="hover:text-white transition">
                    Community
                  </a>
                </li>
               
              </ul>
            </div>
            <div>
              <h4 className="text-teal-400 font-semibold mb-4">Company</h4>
              <ul className="space-y-2">
                <li>
                  <a href="./" className="hover:text-white transition">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    Contact
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-[#1e1e1e] pt-6 flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-[#999999]">&copy; 2025 SportsBook. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-[#999] hover:text-white transition">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-[#999] hover:text-white transition">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-[#999] hover:text-white transition">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-[#999] hover:text-white transition">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
        </footer>
      {showAuth && <AuthPopup onClose={() => setShowAuth(false)} />}

      </body>
    </html>
  );
}
