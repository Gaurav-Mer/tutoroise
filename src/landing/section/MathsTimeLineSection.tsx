/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState, } from 'react';
import { motion, } from 'framer-motion';

const MathTimelineSection = ({ activeColor }: { activeColor?: string }) => {

    const mathTopics = [
        {
            id: 1,
            title: "Algebra",
            subtitle: "Foundation & Variables",
            description: "Master equations, inequalities, and algebraic expressions to build your mathematical foundation.",
            mainSvg: (
                <motion.svg viewBox="0 0 200 200" fill={"transparent"} className="w-full h-full">
                    <defs>
                        <linearGradient id="algebraGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="white" />
                            <stop offset="100%" stopColor="white" />
                        </linearGradient>
                    </defs>

                    {/* Animated equation background */}
                    <motion.g
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 0.05 }}
                        transition={{ duration: 0.3 }}
                    >
                        <text x="20" y="40" fontSize="16" fill="url(#algebraGradient)" opacity="0.3">2x + 5 = 13</text>
                        <text x="120" y="70" fontSize="14" fill="url(#algebraGradient)" opacity="0.2">y = mx + b</text>
                        <text x="30" y="160" fontSize="12" fill="url(#algebraGradient)" opacity="0.25">x² - 4x + 3</text>
                    </motion.g>

                    {/* Main algebraic symbols */}
                    <motion.circle
                        cx="100" cy="100" r="60"
                        fill="none"
                        stroke="url(#algebraGradient)"
                        strokeWidth="3"
                        strokeDasharray="10,5"
                        initial={{ pathLength: 0, rotate: 0 }}
                        animate={{
                            pathLength: 1,
                            rotate: 0
                        }}
                        transition={{
                            pathLength: { duration: 2, ease: "easeInOut" },
                            rotate: { duration: 2, ease: "easeInOut" }
                        }}
                    />

                    <motion.g
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 0.5, duration: 0.8 }}
                    >
                        <text x="85" y="85" fontSize="24" fill="url(#algebraGradient)" fontWeight="bold">x</text>
                        <text x="105" y="105" fontSize="18" fill="url(#algebraGradient)">+</text>
                        <text x="120" y="125" fontSize="20" fill="url(#algebraGradient)">5</text>
                    </motion.g>

                    {/* Floating particles */}
                    {[...Array(6)].map((_, i) => (
                        <motion.circle
                            key={i}
                            cx={50 + i * 25}
                            cy={50 + Math.sin(i) * 30}
                            r="2"
                            fill="url(#algebraGradient)"
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{
                                opacity: [0, 1, 0],
                                scale: [0, 1, 0],
                                y: [0, -20, 0]
                            }}
                            transition={{
                                duration: 3,
                                delay: i * 0.2,
                                repeat: Infinity,
                                repeatDelay: 2
                            }}
                        />
                    ))}
                </motion.svg>
            ),
            color: "blue",
            level: "Foundation",
            topics: [
                "Linear Equations",
                "Quadratic Functions",
                "Polynomials",
                "Systems of Equations",
                "Inequalities",
                "Exponential Functions"
            ],
            formula: "ax² + bx + c = 0"
        },
        {
            id: 2,
            title: "Geometry",
            subtitle: "Shapes & Spatial Reasoning",
            description: "Explore spatial relationships, angles, and geometric proofs in 2D and 3D spaces.",
            mainSvg: (
                <motion.svg viewBox="0 0 200 200" fill={"transparent"} className="w-full h-full">
                    <defs>
                        <linearGradient fill='transparent' id="geometryGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="white" />
                            <stop offset="100%" stopColor="white" />
                        </linearGradient>
                        <filter id="glow">
                            <feGaussianBlur stdDeviation="3" result="coloredBlur" />
                            <feMerge>
                                <feMergeNode in="coloredBlur" />
                                <feMergeNode in="SourceGraphic" />
                            </feMerge>
                        </filter>
                    </defs>

                    {/* Sacred geometry pattern background */}
                    <motion.g
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 0.1, scale: 1 }}
                        transition={{ duration: 1.5 }}
                    >
                        <circle cx="100" cy="100" r="80" fill="none" stroke="url(#geometryGradient)" strokeWidth="1" opacity="0.3" />
                        <circle cx="100" cy="100" r="60" fill="none" stroke="url(#geometryGradient)" strokeWidth="1" opacity="0.3" />
                        <circle cx="100" cy="100" r="40" fill="none" stroke="url(#geometryGradient)" strokeWidth="1" opacity="0.3" />
                    </motion.g>

                    {/* Animated geometric shapes */}
                    <motion.polygon
                        points="100,40 140,120 60,120"
                        fill="none"
                        stroke="url(#geometryGradient)"
                        strokeWidth="3"
                        filter="url(#glow)"
                        initial={{ pathLength: 0, rotate: 0 }}
                        animate={{
                            pathLength: 1,
                            rotate: 0
                        }}
                        transition={{
                            pathLength: { duration: 1.5, ease: "easeInOut" },
                            rotate: { duration: 2, ease: "easeInOut" }
                        }}
                    />

                    <motion.rect
                        x="130" y="60" width="40" height="40"
                        fill="none"
                        stroke="url(#geometryGradient)"
                        strokeWidth="3"
                        initial={{ pathLength: 0, rotate: 0 }}
                        animate={{
                            pathLength: 1,
                            rotate: 0
                        }}
                        transition={{
                            pathLength: { duration: 1.2, delay: 0.3 },
                            rotate: { duration: 2, ease: "easeInOut" }
                        }}
                    />

                    <motion.circle
                        cx="40" cy="80" r="25"
                        fill="none"
                        stroke="url(#geometryGradient)"
                        strokeWidth="3"
                        initial={{ pathLength: 0, scale: 0 }}
                        animate={{
                            pathLength: 1,
                            scale: 1
                        }}
                        transition={{
                            pathLength: { duration: 1, delay: 0.6 },
                            scale: { duration: 0.8, delay: 0.6 }
                        }}
                    />

                    {/* Golden ratio spiral */}
                    <motion.path
                        d="M100 100 Q120 80 140 100 Q140 120 120 140 Q100 140 80 120 Q80 100 100 100"
                        fill="none"
                        stroke="url(#geometryGradient)"
                        strokeWidth="2"
                        opacity="0.6"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 3, delay: 1 }}
                    />
                    {/* Floating particles */}
                    {[...Array(6)].map((_, i) => (
                        <motion.circle
                            key={i}
                            cx={50 + i * 25}
                            cy={50 + Math.sin(i) * 30}
                            r="2"
                            fill="url(#algebraGradient)"
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{
                                opacity: [0, 1, 0],
                                scale: [0, 1, 0],
                                y: [0, -20, 0]
                            }}
                            transition={{
                                duration: 3,
                                delay: i * 0.2,
                                repeat: Infinity,
                                repeatDelay: 2
                            }}
                        />
                    ))}
                </motion.svg>
            ),
            color: "green",
            level: "Spatial",
            topics: [
                "Euclidean Geometry",
                "Trigonometric Ratios",
                "Circle Theorems",
                "Area & Volume",
                "Coordinate Geometry",
                "Transformations"
            ],
            formula: "A = πr²"
        },
        {
            id: 3,
            title: "Trigonometry",
            subtitle: "Waves & Oscillations",
            description: "Understand sine, cosine, tangent, and their applications in real-world problems.",
            mainSvg: (
                <motion.svg fill={"transparent"} viewBox="0 0 200 200" className="w-full h-full">
                    <defs>
                        <linearGradient id="trigGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="white" />
                            <stop offset="100%" stopColor="white" />
                        </linearGradient>
                    </defs>

                    {/* Grid background */}
                    <motion.g
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 0.1 }}
                        transition={{
                            duration: 3,
                            delay: 0.2,
                            repeat: Infinity,
                            repeatDelay: 2
                        }}
                    >
                        {[...Array(9)].map((_, i) => (
                            <g key={i}>
                                <line x1={20 + i * 20} y1="20" x2={20 + i * 20} y2="180" stroke="url(#trigGradient)" strokeWidth="0.5" opacity="0.3" />
                                <line x1="20" y1={20 + i * 20} x2="180" y2={20 + i * 20} stroke="url(#trigGradient)" strokeWidth="0.5" opacity="0.3" />
                            </g>
                        ))}
                    </motion.g>


                    {/* Sine wave */}
                    <motion.path
                        d="M20 100 Q40 60 60 100 Q80 140 100 100 Q120 60 140 100 Q160 140 180 100"
                        fill="none"
                        stroke="url(#trigGradient)"
                        strokeWidth="4"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{
                            duration: 3,
                            delay: 0.2,
                            repeat: Infinity,
                            repeatDelay: 2
                        }}
                    />

                    {/* Cosine wave */}
                    <motion.path
                        d="M20 80 Q40 120 60 80 Q80 40 100 80 Q120 120 140 80 Q160 40 180 80"
                        fill="none"
                        stroke="url(#trigGradient)"
                        strokeWidth="3"
                        opacity="0.7"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 4, delay: 0.3, ease: "circInOut", repeat: Infinity }}
                    />

                    {/* Unit circle */}
                    <motion.circle
                        cx="50" cy="150" r="25"
                        fill="none"
                        stroke="url(#trigGradient)"
                        strokeWidth="2"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 3, delay: 1, repeat: Infinity, ease: "anticipate" }}
                    />

                    {/* Animated radius */}
                    <motion.line
                        x1="50" y1="150" x2="75" y2="125"
                        stroke="url(#trigGradient)"
                        strokeWidth="2"
                        initial={{ pathLength: 0 }}
                        animate={{
                            pathLength: 1,
                            rotate: 0
                        }}
                        transition={{
                            pathLength: { duration: 1, delay: 1.5 },
                            rotate: { duration: 4, ease: "linear", repeat: Infinity }
                        }}
                    />

                    {/* Function labels */}
                    <motion.text
                        x="25" y="195" fontSize="12" fill="url(#trigGradient)" fontWeight="bold"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 2 }}
                    >
                        sin θ
                    </motion.text>
                    <motion.text
                        x="85" y="195" fontSize="12" fill="url(#trigGradient)" fontWeight="bold"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 2.2 }}
                    >
                        cos θ
                    </motion.text>
                </motion.svg>
            ),
            color: "purple",
            level: "Analytical",
            topics: [
                "Unit Circle",
                "Trigonometric Functions",
                "Inverse Functions",
                "Identities & Equations",
                "Law of Sines & Cosines",
                "Periodic Functions"
            ],
            formula: "sin²θ + cos²θ = 1"
        },
        {
            id: 4,
            title: "Calculus",
            subtitle: "Rates & Accumulation",
            description: "Dive into advanced mathematics with derivatives, integrals, and limit theory.",
            mainSvg: (
                <motion.svg fill={"transparent"} viewBox="0 0 200 200" className="w-full h-full">
                    <defs>
                        <linearGradient id="calculusGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="white" />
                            <stop offset="100%" stopColor="white" />
                        </linearGradient>
                    </defs>

                    {/* Complex mathematical curve */}
                    <motion.path
                        d="M20 160 Q50 40 80 100 Q110 160 140 80 Q170 40 180 120"
                        fill="none"
                        stroke="url(#calculusGradient)"
                        strokeWidth="4"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 3, ease: "easeInOut" }}
                    />

                    {/* Area under curve */}
                    <motion.path
                        d="M20 160 Q50 40 80 100 Q110 160 140 80 Q170 40 180 120 L180 160 L20 160 Z"
                        fill="url(#calculusGradient)"
                        opacity="0.2"
                        initial={{ opacity: 0, scaleY: 0 }}
                        animate={{ opacity: 0.2, scaleY: 1 }}
                        transition={{ duration: 3, delay: 1, repeat: Infinity }}
                    />

                    {/* Tangent lines */}
                    {[60, 100, 140].map((x, i) => (
                        <motion.line
                            key={i}
                            x1={x - 20} y1={80 + i * 20} x2={x + 20} y2={100 + i * 10}
                            stroke="url(#calculusGradient)"
                            strokeWidth="2"
                            opacity="0.6"
                            strokeDasharray="5,5"
                            initial={{ pathLength: 0 }}
                            animate={{ pathLength: 1 }}
                            transition={{ duration: 3, delay: 2 + i * 0.3, repeat: Infinity }}
                        />
                    ))}

                    {/* Integral symbol */}
                    <motion.text
                        x="30" y="50" fontSize="48" fill="url(#calculusGradient)" fontWeight="bold"
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 0.8, scale: 1 }}
                        transition={{ delay: 3, duration: 0.8, }}
                    >
                        ∫
                    </motion.text>

                    {/* dx notation */}
                    <motion.text
                        x="65" y="65" fontSize="14" fill="url(#calculusGradient)"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 3.5 }}
                    >
                        f(x)dx
                    </motion.text>

                    {/* Derivative notation */}
                    <motion.text
                        x="140" y="40" fontSize="16" fill="url(#calculusGradient)" fontWeight="bold"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 0.8 }}
                        transition={{ delay: 4 }}
                    >
                        dy/dx
                    </motion.text>

                    {/* Animated particles following the curve */}
                    {[...Array(4)].map((_, i) => (
                        <motion.circle
                            key={i}
                            r="3"
                            fill="url(#calculusGradient)"
                            initial={{ offsetDistance: "0%" }}
                            animate={{ offsetDistance: "100%" }}
                            transition={{
                                duration: 4,
                                delay: i * 0.5,
                                repeat: Infinity,
                                ease: "linear"
                            }}
                            style={{
                                offsetPath: "path('M20 160 Q50 40 80 100 Q110 160 140 80 Q170 40 180 120')"
                            }}
                        />
                    ))}
                </motion.svg>
            ),
            color: "red",
            level: "Advanced",
            topics: [
                "Limits & Continuity",
                "Derivatives",
                "Integration",
                "Applications of Calculus",
                "Differential Equations",
                "Multivariable Calculus"
            ],
            formula: "∫ f(x)dx"
        }
    ];


    const itemVariants: any = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { duration: 0.6, ease: [0.42, 0, 0.58, 1] } // cubic-bezier for easeInOut
        }
    }


    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1 }
        }
    }

    const fadeInUp: any = {
        hidden: { y: 30, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.6,
                ease: [0.22, 1, 0.36, 1]
            }
        }
    };


    return (
        <motion.section
            id="E"
            className="min-h-dvh flex items-center justify-center relative z-10 "
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.4 }}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                <div className='flex flex-col'>
                    {/* Label with enhanced styling */}
                    <motion.div transition={{
                        duration: 0.8,
                        ease: [0.25, 0.46, 0.45, 0.94],
                        delay: 0.1
                    }} variants={containerVariants} className="flex items-center space-x-3">
                        <div className="w-12 h-px bg-black"></div>

                        <span className="text-3xl font-medium text-black tracking-[0.2em] uppercase">Experties</span>
                    </motion.div>
                    <motion.div className="text-center mb-15" variants={fadeInUp}>
                        <motion.h2
                            className="text-5xl md:text-7xl font-bold text-gray-900 mb-8"
                            style={{
                                opacity: 1,
                                transition: 'all 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.4s'
                            }}
                        >
                            Learn Smarter,{' '}
                            <motion.span
                                className="block"
                                style={{
                                    transition: 'all 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.8s'
                                }}
                            >
                                Not Harder
                            </motion.span>
                        </motion.h2>
                    </motion.div>
                </div>

                <motion.div className='grid grid-cols-1 md:grid-cols-2 gap-12 w-full' variants={itemVariants}>
                    {mathTopics.map((item => {
                        return (
                            <motion.div key={item.id} style={{ background: activeColor, color: activeColor ? "white" : "" }} className='col-span-1 border rounded-3xl w-full p-8 bg-white h-[400px] relative overflow-hidden'>
                                <motion.div className='opacity-30  top-1/2  transform translate-x-1/2  translate-y-1/2'>
                                    <div className='absolute h-120 w-120 inset-0'>
                                        {item.mainSvg}
                                    </div>
                                </motion.div>
                                <motion.p className='text-5xl font-bold'>{item.title}</motion.p>
                                <motion.p className='my-2'>{item.description}</motion.p>
                                <motion.div className='flex items-center flex-col mx-12 gap-4'>
                                    {item.topics.map(text => {
                                        return (

                                            <motion.p className='font-semibold' key={text}>{text}</motion.p>
                                        )
                                    })}
                                </motion.div>
                            </motion.div>
                        )
                    }))}
                </motion.div>
            </div>
        </motion.section>
    );
};

export default MathTimelineSection;