/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'

import { Button } from '@/components/ui/button'
import { Book, Menu, X } from 'lucide-react'
import React, { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence, } from 'motion/react'

export default function Navbar({ activeColor }: { activeColor?: any }) {
  const [activeItem, setActiveItem] = useState("HOME")
  const [isHovering, setIsHovering] = useState<null | string>(null)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  const navBarList = [{
    name: "Home",
    value: "HOME",
    sectionId: "A"
  }, {
    name: "About",
    value: "ABOUT",
    sectionId: "C"
  }, {
    name: "Expertise",
    value: "SUBJECTS",
    sectionId: "E"
  }, {
    name: "Pricing",
    value: "PRICING",
    sectionId: "F"
  }, {
    name: "Testimonials",
    value: "TESTIMONIALS",
    sectionId: "B"
  }, {
    name: "Contact",
    value: "CONTACTS",
    sectionId: "section-f"
  }]

  // Smooth scroll to section
  const scrollToSection = useCallback((sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const navbarHeight = 100 // Adjust based on your navbar height
      const elementPosition = element.offsetTop - navbarHeight

      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      })
    }
  }, [])

  // Handle navigation click
  const handleNavClick = useCallback((item: any) => {
    setActiveItem(item.value)
    scrollToSection(item.sectionId)
    setIsMobileMenuOpen(false)

    // Store active item in localStorage for persistence
    localStorage.setItem('activeNavItem', item.value)
  }, [scrollToSection])

  // Intersection Observer to detect which section is in view
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -80% 0px',
      threshold: 0
    }

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const sectionId = entry.target.id
          const navItem = navBarList.find(item => item.sectionId === sectionId)
          if (navItem) {
            setActiveItem(navItem.value)
            localStorage.setItem('activeNavItem', navItem.value)
          }
        }
      })
    }

    const observer = new IntersectionObserver(observerCallback, observerOptions)

    // Observe all sections
    navBarList.forEach(item => {
      const element = document.getElementById(item.sectionId)
      if (element) {
        observer.observe(element)
      }
    })

    return () => {
      observer.disconnect()
    }
  }, [])

  // Load active item from localStorage on component mount
  useEffect(() => {
    const savedActiveItem = localStorage.getItem('activeNavItem')
    if (savedActiveItem) {
      setActiveItem(savedActiveItem)
    }
  }, [])

  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Handle hash navigation on page load (for direct links)
  useEffect(() => {
    const hash = window.location.hash
    if (hash) {
      const sectionId = hash.substring(1) // Remove the #
      const navItem = navBarList.find(item => item.sectionId === sectionId)
      if (navItem) {
        setActiveItem(navItem.value)
        // Delay scroll to ensure page is fully loaded
        setTimeout(() => {
          scrollToSection(sectionId)
        }, 100)
      }
    }
  }, [scrollToSection])

  return (
    <>
      <motion.nav
        className="fixed top-0 left-1/2 transform -translate-x-1/2 z-50 w-[95%] max-w-6xl mt-6"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          type: "spring",
          stiffness: 200,
          damping: 30,
          duration: 1
        }}
      >
        <motion.div
          className="w-full rounded-2xl flex items-center justify-between px-8 py-4 relative overflow-hidden"
          style={{
            backdropFilter: `blur(${scrolled ? 20 : 12}px)`,
            borderColor: `${activeColor}30`,
            background: "white"
          }}
          animate={{
            borderColor: `${activeColor}${scrolled ? '40' : '30'}`,
            padding: scrolled ? "12px 32px" : "12px 32px",
            background: "white"
          }}
        // transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          {/* Animated border glow */}
          <motion.div
            className="absolute inset-0 rounded-2xl pointer-events-none"
            style={{
              background: `linear-gradient(135deg, ${activeColor}20 0%, transparent 30%, ${activeColor}10 100%)`,
              filter: 'blur(1px)'
            }}
            animate={{
              opacity: scrolled ? 0.6 : 0.4
            }}
            transition={{ duration: 0.4 }}
          />

          {/* Logo Section */}
          <motion.div
            className='flex items-center gap-3 relative z-10'
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <motion.div
              className='flex items-center gap-3 cursor-pointer group'
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => handleNavClick(navBarList[0])} // Navigate to home on logo click
            >
              <motion.div
                className="p-2.5 rounded-xl border border-white/10 backdrop-blur-sm"
                style={{
                  backgroundColor: `${activeColor}15`,
                  borderColor: `${activeColor}30`
                }}
                animate={{
                  backgroundColor: `${activeColor}${scrolled ? '15' : '15'}`,
                  borderColor: `${activeColor}${scrolled ? '30' : '30'}`,
                  rotate: [0, 8, -8, 0]
                }}
                transition={{
                  backgroundColor: { duration: 0.4 },
                  borderColor: { duration: 0.4 },
                  rotate: {
                    duration: 4,
                    repeat: Infinity,
                    repeatType: "loop",
                    repeatDelay: 5
                  }
                }}
                whileHover={{
                  rotate: [0, 12, -12, 0],
                  scale: 1.05,
                  transition: { duration: 0.6 }
                }}
              >
                <Book size={scrolled ? 18 : 18} color={activeColor} />
              </motion.div>
              <motion.div className="flex flex-col">
                <motion.h1
                  className="font-bold text-white tracking-tight leading-none"
                  animate={{
                    fontSize: scrolled ? "20px" : "20px",
                    color: activeColor
                  }}
                  transition={{ duration: 0.4 }}
                >
                  TutorWine
                </motion.h1>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Desktop Navigation Menu */}
          <motion.div
            className='hidden lg:flex items-center gap-2 relative z-10'
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            {navBarList?.map((item, index) => {
              const isActive = activeItem === item.value
              const isHovered = isHovering === item.value

              return (
                <motion.div
                  className='cursor-pointer relative'
                  key={item.name}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: 0.5 + (index * 0.06),
                    duration: 0.4,
                    ease: [0.25, 0.46, 0.45, 0.94]
                  }}
                  onMouseEnter={() => setIsHovering(item?.value || "")}
                  onMouseLeave={() => setIsHovering(null)}
                  onClick={() => handleNavClick(item)}
                  whileHover={{ y: -1 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <motion.div
                    className="px-4 py-2.5 rounded-xl relative overflow-hidden backdrop-blur-sm"
                    animate={{
                      backgroundColor: isActive
                        ? `${activeColor}20`
                        : isHovered
                          ? `${activeColor}`
                          : 'transparent',
                    }}
                    style={{
                      border: '1px solid transparent'
                    }}
                    transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
                  >
                    <motion.span
                      className="relative z-10 font-medium text-sm tracking-wide"
                      animate={{
                        color: isActive
                          ? activeColor
                          : isHovered
                            ? '#f1f5f9'
                            : '#94a3b8',
                        fontWeight: isActive ? 500 : 500
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      {item.name}
                    </motion.span>

                    {/* Active indicator */}
                    {/* <AnimatePresence>
                      {isActive && (
                        <motion.div
                          className='absolute bottom-1 left-1/2 w-1 h-1 rounded-full'
                          style={{ backgroundColor: activeColor }}
                          initial={{ scale: 0, x: "-50%" }}
                          animate={{ scale: 1, opacity: 1 }}
                          exit={{ scale: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
                          layoutId="activeIndicator"
                        />
                      )}
                    </AnimatePresence> */}

                    {/* Hover glow */}
                    <AnimatePresence>
                      {isHovered && !isActive && (
                        <motion.div
                          className="absolute inset-0 rounded-xl pointer-events-none"
                          style={{
                            background: `radial-gradient(circle at center, ${activeColor}15 0%, transparent 70%)`
                          }}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.2 }}
                        />
                      )}
                    </AnimatePresence>
                  </motion.div>
                </motion.div>
              )
            })}
          </motion.div>

          {/* CTA Button */}
          <motion.div
            className="hidden lg:block relative z-10"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6, duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <motion.div
              whileHover={{
                scale: 1.02,
                y: -1,
              }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
              animate={{
                boxShadow: `0 0 ${scrolled ? '20px' : '25px'} ${activeColor}20`,
                borderColor: activeColor
              }}
            >
              <Button
                className='rounded-xl font-medium relative overflow-hidden group border backdrop-blur-sm'
                style={{
                  backgroundColor: 'transparent',
                  borderColor: activeColor,
                  color: activeColor,
                  height: scrolled ? '40px' : '40px',
                  fontSize: '14px',
                  paddingLeft: '24px',
                  paddingRight: '24px',
                }}
                onClick={() => handleNavClick(navBarList[5])} // Navigate to contact section
              >
                <span className='relative z-10'>Schedule Meeting</span>

                {/* Hover fill effect */}
                <motion.div
                  className='absolute inset-0 rounded-xl'
                  style={{ backgroundColor: activeColor }}
                  initial={{ scale: 0, opacity: 0 }}
                  whileHover={{
                    scale: 1,
                    opacity: 1
                  }}
                  transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
                />

                {/* Hover text color change */}
                <motion.span
                  className='absolute inset-0 flex items-center justify-center font-medium text-black opacity-0 z-20'
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  Schedule Meeting
                </motion.span>
              </Button>
            </motion.div>
          </motion.div>

          {/* Mobile Menu Button */}
          <motion.button
            className="lg:hidden relative z-10 p-3 rounded-xl backdrop-blur-sm border border-white/10"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            style={{
              backgroundColor: `${activeColor}15`,
              borderColor: `${activeColor}30`
            }}
          >
            <AnimatePresence mode="wait">
              {isMobileMenuOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X size={18} color={activeColor} />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu size={18} color={activeColor} />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </motion.div>

        {/* Floating particles */}
        <motion.div
          className='absolute -top-1 left-1/4 w-1.5 h-1.5 rounded-full opacity-50 pointer-events-none'
          style={{ backgroundColor: activeColor }}
          animate={{
            y: [0, -6, 0],
            opacity: [0.5, 0.8, 0.5],
            scale: [1, 1.3, 1]
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />

        <motion.div
          className='absolute -bottom-0.5 right-1/3 w-1 h-1 rounded-full opacity-40 pointer-events-none'
          style={{ backgroundColor: activeColor }}
          animate={{
            y: [0, 4, 0],
            opacity: [0.4, 0.7, 0.4],
            rotate: [0, 180, 360]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            repeatType: "reverse",
            delay: 1.5
          }}
        />
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="fixed inset-0 z-40 lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {/* Backdrop */}
            <motion.div
              className="absolute inset-0 backdrop-blur-md"
              style={{ backgroundColor: 'rgba(15, 15, 35, 0.8)' }}
              onClick={() => setIsMobileMenuOpen(false)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />

            {/* Menu Content */}
            <motion.div
              className="absolute top-24 left-1/2 transform -translate-x-1/2 w-[90%] max-w-md backdrop-blur-xl rounded-2xl p-6 shadow-2xl border border-white/10"
              style={{ backgroundColor: 'rgba(15, 15, 35, 0.95)' }}
              initial={{ opacity: 0, y: -50, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -50, scale: 0.9 }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 25,
                duration: 0.4
              }}
            >
              <div className="space-y-3">
                {navBarList?.map((item, index) => (
                  <motion.div
                    key={item.name}
                    className="cursor-pointer p-4 rounded-xl backdrop-blur-sm border border-white/5"
                    style={{
                      backgroundColor: activeItem === item.value
                        ? `${activeColor}20`
                        : 'rgba(255, 255, 255, 0.02)'
                    }}
                    onClick={() => handleNavClick(item)}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.3 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <span
                      className="font-medium"
                      style={{
                        color: activeItem === item.value ? activeColor : '#e2e8f0'
                      }}
                    >
                      {item.name}
                    </span>
                  </motion.div>
                ))}

                <motion.div
                  className="pt-4 border-t border-white/10"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6, duration: 0.3 }}
                >
                  <Button
                    className='w-full rounded-xl font-medium h-12 border backdrop-blur-sm'
                    style={{
                      backgroundColor: 'transparent',
                      borderColor: activeColor,
                      color: activeColor
                    }}
                    onClick={() => handleNavClick(navBarList[5])} // Navigate to contact section
                  >
                    Schedule Meeting
                  </Button>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}