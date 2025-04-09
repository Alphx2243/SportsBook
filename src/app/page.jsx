'use client'
import React, { useState, useEffect } from 'react'
import { Menu, Facebook, Twitter, Instagram, Youtube } from 'lucide-react'
import Sidebar from '../lib/Sidebar'
import QRSection from '../lib/QRSection'
import FeaturesSection from '../lib/FeaturesSection'
import TestimonialsSection from '../lib/TestimonialsSection'

// Main App Component
function App() {

  return (
    <div className="min-h-screen bg-[#121212] text-white">
      <main>
        <QRSection />
        <FeaturesSection />
        <TestimonialsSection />
      </main>
    </div>
  )
}

export default App
