/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'

import React, { useState, useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Target, Clock, TrendingUp, BookOpen, ChevronRight, Quote } from 'lucide-react'

interface SectionBProps {
    activeColor?: string
    sectionTheme?: {
        bg: string
        accent: string
        text: string
        secondary: string
    }
}

export default function InteractiveScrollSection({
    activeColor = "#0000",
    sectionTheme = {
        bg: "#1a1a2e",
        accent: "#06b6d4",
        text: "#f1f5f9",
        secondary: "#0f172a"
    }
}: SectionBProps) {
    const [currentSlide, setCurrentSlide] = useState(0)
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setMousePosition({
                x: (e.clientX - window.innerWidth / 2) / 100,
                y: (e.clientY - window.innerHeight / 2) / 100
            })
        }
        window.addEventListener('mousemove', handleMouseMove)
        return () => window.removeEventListener('mousemove', handleMouseMove)
    }, [])

    // Auto-advance slides
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % testimonials.length)
        }, 4000)
        return () => clearInterval(interval)
    }, [])

    const testimonials = [
        {
            id: 1,
            name: "Sarah Chen",
            role: "High School Student",
            subject: "Mathematics",
            image: "https://media.istockphoto.com/id/1300972574/photo/millennial-male-team-leader-organize-virtual-workshop-with-employees-online.webp?s=1024x1024&w=is&k=20&c=4vOXvZRvhvchTRbYn9SknimKUNvKPZyJdGzHvtjqg_w=",
            quote: "My math grades improved from C+ to A- in just 6 weeks. The personalized approach made complex topics finally click for me.",
            improvement: "+2.5 GPA Points",
            duration: "6 Weeks",
            icon: TrendingUp,
            stats: { before: "C+", after: "A-", sessions: 24 }
        },
        {
            id: 2,
            name: "Marcus Johnson",
            role: "College Freshman",
            subject: "Physics",
            image: "https://media.istockphoto.com/id/1300972574/photo/millennial-male-team-leader-organize-virtual-workshop-with-employees-online.webp?s=1024x1024&w=is&k=20&c=4vOXvZRvhvchTRbYn9SknimKUNvKPZyJdGzHvtjqg_w=",
            quote: "The flexible scheduling allowed me to balance work and studies. Now physics makes sense instead of being intimidating.",
            improvement: "95% Test Score",
            duration: "3 Months",
            icon: Target,
            stats: { before: "D", after: "A", sessions: 36 }
        },
        {
            id: 3,
            name: "Emily Rodriguez",
            role: "Graduate Student",
            subject: "Chemistry",
            image: "https://media.istockphoto.com/id/1300972574/photo/millennial-male-team-leader-organize-virtual-workshop-with-employees-online.webp?s=1024x1024&w=is&k=20&c=4vOXvZRvhvchTRbYn9SknimKUNvKPZyJdGzHvtjqg_w=",
            quote: "The step-by-step homework help was a game-changer. I finally understood organic chemistry and passed my qualifier exam.",
            improvement: "Passed Qualifier",
            duration: "4 Months",
            icon: BookOpen,
            stats: { before: "Failing", after: "Passed", sessions: 48 }
        },
        {
            id: 4,
            name: "David Park",
            role: "High School Senior",
            subject: "Calculus",
            image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
            quote: "Time management and personalized lessons helped me ace my AP exam. Got into my dream college thanks to this support!",
            improvement: "AP Score: 5",
            duration: "8 Weeks",
            icon: Clock,
            stats: { before: "3", after: "5", sessions: 32 }
        }
    ]

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1 }
        }
    }

    const itemVariants: any = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { duration: 0.6, ease: [0.42, 0, 0.58, 1] } // cubic-bezier for easeInOut
        }
    }

    const current = testimonials[currentSlide]
    const IconComponent = current.icon

    return (
        <motion.section
            id="B"
            className="min-h-dvh flex items-center justify-center relative z-10 "
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.4 }}
        >
            {/* Subtle background elements */}
            <motion.div
                className="absolute top-20 left-20 w-32 h-32 rounded-full opacity-5 blur-3xl"
                style={{ backgroundColor: activeColor }}
                animate={{
                    scale: [1, 1.2, 1],
                    x: mousePosition.x * 2,
                    y: mousePosition.y * 2
                }}
                transition={{
                    scale: { duration: 8, repeat: Infinity, ease: "easeInOut" },
                    x: { duration: 0.5 },
                    y: { duration: 0.5 }
                }}
            />

            <motion.div
                className="absolute bottom-20 right-20 w-24 h-24 rounded-full opacity-5 blur-2xl"
                style={{ backgroundColor: activeColor }}
                animate={{
                    scale: [1.2, 1, 1.2],
                    x: mousePosition.x * -1,
                    y: mousePosition.y * -1
                }}
                transition={{
                    scale: { duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 },
                    x: { duration: 0.5 },
                    y: { duration: 0.5 }
                }}
            />

            {/* Floating particles */}
            {Array.from({ length: 8 }).map((_, i) => (
                <motion.div
                    key={i}
                    className="absolute w-1 h-1 rounded-full opacity-20"
                    style={{
                        backgroundColor: "black",
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`
                    }}
                    animate={{
                        y: [0, -50, 0],
                        opacity: [0.2, 0.6, 0.2],
                        scale: [1, 1.5, 1]
                    }}
                    transition={{
                        duration: 13 + Math.random() * 3,
                        repeat: Infinity,
                        delay: Math.random() * 2
                    }}
                />
            ))}

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
                {/* Label with enhanced styling */}
                <motion.div transition={{
                    duration: 0.8,
                    ease: [0.25, 0.46, 0.45, 0.94],
                    delay: 0.1
                }} variants={containerVariants} className="flex items-center space-x-3">
                    <div className="w-12 h-px bg-black"></div>

                    <span className="text-3xl font-medium text-black tracking-[0.2em] uppercase">Student Success Stories</span>
                </motion.div>
                <motion.div
                    className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                >
                    {/* Left Side - Image */}
                    <motion.div
                        className="relative"
                        variants={itemVariants}
                    >
                        {/* Main Image Container */}
                        <motion.div
                            className="relative w-full h-[500px] rounded-3xl overflow-hidden"
                            whileHover={{ scale: 1.02 }}
                            transition={{ duration: 0.6, ease: "easeOut" }}
                        >
                            {/* Image */}
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={current.id}
                                    className="w-full h-full relative"
                                    initial={{ scale: 1.1, opacity: 0 }}
                                    animate={{ scale: 1, opacity: 1 }}
                                    exit={{ scale: 0.9, opacity: 0 }}
                                    transition={{ duration: 0.8 }}
                                >
                                    <img
                                        src={current.image}
                                        alt={current.name}
                                        className="w-full h-full object-cover"
                                    />

                                    {/* Artistic overlay */}
                                    <div
                                        className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"
                                    />
                                </motion.div>
                            </AnimatePresence>

                            {/* Overlay gradient */}
                            {/* <motion.div
                                className="absolute inset-0 bg-black/20"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.3 }}
                            /> */}

                            {/* Floating info card */}
                            <motion.div
                                className="absolute bottom-6 left-6 p-4 rounded-2xl backdrop-blur-md bg-white"
                                style={{ backgroundColor: activeColor }}
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.5, duration: 0.6 }}
                                whileHover={{ scale: 1.05, y: -5 }}
                            >
                                <div className="flex items-center gap-3">
                                    <motion.div
                                        className="w-12 h-12 rounded-xl flex items-center justify-center  border border-white/30"
                                        style={{ backgroundColor: `${activeColor}20` }}
                                        whileHover={{ rotate: 360 }}
                                        transition={{ duration: 0.6 }}
                                    >
                                        <IconComponent size={20} color="white" />
                                    </motion.div>
                                    <div>
                                        <p className="text-white font-semibold text-sm">
                                            {current.subject}
                                        </p>
                                        <p className="text-white text-xs">
                                            {current.improvement}
                                        </p>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Progress indicator */}
                            <motion.div
                                className="absolute top-6 right-6 flex gap-2"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.7 }}
                            >
                                {testimonials.map((_, index) => (
                                    <motion.button
                                        key={index}
                                        className="w-2 h-2 rounded-full border border-white/40"
                                        style={{
                                            backgroundColor: index === currentSlide ? 'white' : 'transparent'
                                        }}
                                        onClick={() => setCurrentSlide(index)}
                                        whileHover={{ scale: 1.2 }}
                                        whileTap={{ scale: 0.9 }}
                                    />
                                ))}
                            </motion.div>
                        </motion.div>
                    </motion.div>

                    {/* Right Side - Content */}
                    <motion.div
                        className="space-y-8"
                        variants={itemVariants}
                    >
                        {/* Badge */}
                        {/* <motion.div
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border backdrop-blur-sm text-black"
                            style={{
                                backgroundColor: `${activeColor}15`,
                                borderColor: `${activeColor}30`,
                                // color: activeColor
                            }}
                            whileHover={{ scale: 1.05 }}
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ type: "spring", stiffness: 300, delay: 0.2 }}
                        >
                            <Quote size={14} style={{ color: activeColor }} />
                            <span style={{ color: activeColor }} className="font-medium text-sm ">Student Success Stories</span>
                        </motion.div> */}

                        {/* Main heading */}
                        <motion.div
                            key={`heading-${current.id}`}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <h2
                                className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4 text-black"
                            // style={{ color: sectionTheme.text }}
                            >
                                Real Results,{" "}
                                <motion.span
                                    style={{ color: activeColor }}
                                    animate={{
                                        textShadow: [
                                            `0 0 0px ${activeColor}00`,
                                            `0 0 0px ${activeColor}40`,
                                            `0 0 0px ${activeColor}00`
                                        ]
                                    }}
                                    transition={{
                                        duration: 3,
                                        repeat: Infinity,
                                        repeatType: "reverse"
                                    }}
                                >
                                    Real Students
                                </motion.span>
                            </h2>
                        </motion.div>

                        {/* Testimonial content */}
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={`content-${current.id}`}
                                className="space-y-6"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                            >
                                {/* Quote */}
                                <motion.blockquote
                                    className="text-xl md:text-2xl text-black leading-relaxed italic"
                                    whileHover={{ scale: 1.01 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    &quot;{current.quote}&quot;
                                </motion.blockquote>

                                {/* Student info */}
                                <motion.div
                                    className="flex items-center justify-between"
                                    whileHover={{ scale: 1.02 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <div>
                                        <h4
                                            className="text-lg font-semibold"
                                            style={{ color: activeColor }}
                                        >
                                            {current.name}
                                        </h4>
                                        <p className="text-black">{current.role}</p>
                                    </div>
                                    <motion.div
                                        className="text-right"
                                        whileHover={{ scale: 1.1 }}
                                    >
                                        <p
                                            className="font-semibold"
                                            style={{ color: activeColor }}
                                        >
                                            {current.duration}
                                        </p>
                                        <p className="text-black text-sm">Duration</p>
                                    </motion.div>
                                </motion.div>

                                {/* Stats */}
                                <motion.div
                                    className="grid grid-cols-3 gap-4 pt-6"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 0.5 }}
                                >
                                    <motion.div
                                        className="text-center p-4 rounded-xl border border-white/10"
                                        style={{ backgroundColor: `${sectionTheme.secondary}40` }}
                                        whileHover={{ scale: 1.05, borderColor: `${activeColor}40` }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <p className="text-black text-xs mb-1">Before</p>
                                        <p className="font-bold text-black">{current.stats.before}</p>
                                    </motion.div>
                                    <motion.div
                                        className="text-center p-4 rounded-xl border"
                                        style={{
                                            backgroundColor: `${activeColor}15`,
                                            borderColor: `${activeColor}30`
                                        }}
                                        whileHover={{ scale: 1.05 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <p className="text-black text-xs mb-1">After</p>
                                        <p className="font-bold" style={{ color: activeColor }}>
                                            {current.stats.after}
                                        </p>
                                    </motion.div>
                                    <motion.div
                                        className="text-center p-4 rounded-xl border border-white/10"
                                        style={{ backgroundColor: `${sectionTheme.secondary}40` }}
                                        whileHover={{ scale: 1.05, borderColor: `${activeColor}40` }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <p className="text-black text-xs mb-1">Sessions</p>
                                        <p className="font-bold text-black">{current.stats.sessions}</p>
                                    </motion.div>
                                </motion.div>

                                {/* CTA */}
                                <motion.button
                                    className="group flex items-center gap-3 mt-8 px-6 py-3 rounded-2xl border hover:bg-inherit border-white/20 transition-all duration-300"
                                    style={{ backgroundColor: activeColor, color: "white" }}
                                    whileHover={{
                                        scale: 1.02,
                                        backgroundColor: `${sectionTheme.secondary}80`,
                                        borderColor: `${activeColor}40`
                                    }}
                                    whileTap={{ scale: 0.98 }}

                                >

                                    <span
                                        className="font-semibold"

                                    >
                                        Start Your Success Story
                                    </span>
                                    <motion.div
                                        animate={{ x: [0, 5, 0] }}
                                        transition={{ duration: 2, repeat: Infinity }}
                                    >
                                        <ChevronRight
                                            size={18}
                                        />
                                    </motion.div>
                                </motion.button>
                            </motion.div>
                        </AnimatePresence>
                    </motion.div>
                </motion.div>
            </div>
        </motion.section >
    )
}