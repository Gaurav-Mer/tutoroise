/* eslint-disable @typescript-eslint/no-explicit-any */
import { motion } from 'framer-motion';
import React from 'react';
import WhyChooseCard from './component/WhyChooseCard';

const WhyChooseMe = ({ activeColor, isInView = true }: { activeColor?: string, isInView?: boolean }) => {


    // Animation variants for Framer Motion-style animations
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                duration: 0.6,
                staggerChildren: 0.15
            }
        }
    };

    // Custom Black & White Illustrations with animation paths
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
            id="D"
            className="h-full flex items-center justify-center relative z-10 px-6 "
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.4 }} variants={containerVariants}
        >
            {/* Animated background elements */}
            <motion.div variants={containerVariants} className="absolute inset-0 overflow-hidden pointer-events-none">
                <div
                    className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-50 to-purple-50 rounded-full blur-3xl opacity-10"
                    style={{
                        transform: isInView ? 'scale(1) rotate(0deg)' : 'scale(0.5) rotate(-180deg)',
                        transition: 'transform 3s ease-out 0.5s'
                    }}
                ></div>
                <div
                    className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-green-50 to-teal-50 rounded-full blur-3xl opacity-10"
                    style={{
                        transform: isInView ? 'scale(1) rotate(0deg)' : 'scale(0.5) rotate(180deg)',
                        transition: 'transform 3s ease-out 1s'
                    }}
                ></div>
            </motion.div>

            {/* Decorative lines */}
            <motion.div className="absolute  top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent opacity-10"
                style={{
                    scaleX: isInView ? 1 : 0,
                    transition: 'transform 1.5s ease-out 0.2s'
                }}></motion.div>
            <motion.div className="absolute  opacity-10 bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"
                style={{
                    scaleX: isInView ? 1 : 0,
                    transition: 'transform 1.5s ease-out 0.4s'
                }}></motion.div>

            <div className="max-w-7xl mx-auto  w-full z-10">
                {/* Label with enhanced styling */}
                <motion.div transition={{
                    duration: 0.8,
                    ease: [0.25, 0.46, 0.45, 0.94],
                    delay: 0.1
                }} variants={fadeInUp} className="flex items-center space-x-3 ">
                    <div className="w-12 h-px bg-black"></div>
                    <span className="text-3xl font-medium text-black tracking-[0.2em] uppercase">
                        Why Choose US
                    </span>
                </motion.div>

                <div>
                    {/* Section Header with Framer-style animations */}
                    <motion.div className="text-center mb-20" variants={fadeInUp}>
                        <motion.h2
                            className="text-5xl md:text-7xl font-bold text-gray-900 mb-8"
                            style={{
                                opacity: isInView ? 1 : 0,
                                transform: isInView ? 'translateY(0) scale(1)' : 'translateY(50px) scale(0.9)',
                                transition: 'all 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.4s'
                            }}
                        >
                            Learn Smarter,{' '}
                            <motion.span
                                className="block"
                                style={{
                                    opacity: isInView ? 1 : 0,
                                    transform: isInView ? 'translateX(0)' : 'translateX(-50px)',
                                    transition: 'all 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.8s'
                                }}
                            >
                                Not Harder
                            </motion.span>
                        </motion.h2>
                    </motion.div>

                    <WhyChooseCard />


                    {/* Enhanced Call to Action */}
                    <div
                        className="text-center mt-20"
                        style={{
                            opacity: isInView ? 1 : 0,
                            transform: isInView ? 'translateY(0) scale(1)' : 'translateY(40px) scale(0.9)',
                            transition: 'all 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) 1.5s'
                        }}
                    >
                        <button className="group relative inline-flex items-center justify-center px-12 py-5 text-lg font-semibold text-white  rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 overflow-hidden bg-black">
                            {/* Animated background */}
                            {/* Button content */}
                            <span className="relative z-10 mr-3">Start Learning Today</span>
                            <svg className="relative z-10 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>

                            {/* Ripple effect on hover */}
                            <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-500">
                                <div className="absolute inset-0 rounded-2xl bg-white animate-ping"></div>
                            </div>
                        </button>
                    </div>
                </div>
            </div>

            {/* Subtle grid pattern */}
            <motion.div
                className="absolute inset-0 pointer-events-none"
                style={{
                    backgroundImage: `
      linear-gradient(white 1px, transparent 1px),
      linear-gradient(90deg, white 1px, transparent 1px)
    `,
                    backgroundSize: '60px 60px',
                    opacity: 0.3, // lighter overall
                    WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 20%, black 80%, transparent)',
                    WebkitMaskRepeat: 'no-repeat',
                    WebkitMaskSize: '100% 100%',
                    maskImage: 'linear-gradient(to bottom, transparent, black 20%, black 80%, transparent)',
                    maskRepeat: 'no-repeat',
                    maskSize: '100% 100%',
                }}
                animate={{
                    backgroundPosition: ['0px 0px', '60px 60px'],
                }}
                transition={{
                    duration: 30,
                    repeat: Infinity,
                    ease: "linear",
                }}
            />

            {/* Corner accents */}
            <motion.div
                className="absolute top-8 right-8 w-20 h-20 border-t-2 border-r-2 opacity-10"
                style={{ borderColor: "white" }}
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                transition={{ duration: 1.5, delay: 0.3 }}
                viewport={{ once: false }}
            />
            <motion.div
                className="absolute bottom-8 left-8 w-20 h-20 border-b-2 border-l-2 opacity-10"
                style={{ borderColor: "white" }}
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                transition={{ duration: 1.5, delay: 0.5 }}
                viewport={{ once: false }}
            />
            {/* CSS Keyframes for custom animations */}
            <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-10px) rotate(5deg); }
        }
        
        @keyframes bounce {
          0%, 100% { transform: translateY(0px) scale(1); }
          50% { transform: translateY(-8px) scale(1.1); }
        }
        
        @keyframes pulse {
          0%, 100% { opacity: 0.6; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.2); }
        }
        
        @keyframes wiggle {
          0%, 100% { transform: rotate(0deg); }
          25% { transform: rotate(1deg); }
          75% { transform: rotate(-1deg); }
        }
        
        .group:hover .animate-wiggle {
          animation: wiggle 0.5s ease-in-out;
        }
        
        /* Smooth scroll behavior */
        .smooth-reveal {
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }
        
        .smooth-reveal.revealed {
          opacity: 1;
          transform: translateY(0);
        }
        
        /* Enhanced hover effects */
        .feature-card {
          transition: all 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }
        
        .feature-card:hover {
          transform: translateY(-12px) scale(1.02);
        }
        
        /* Staggered animation delays */
        .stagger-1 { transition-delay: 0.1s; }
        .stagger-2 { transition-delay: 0.2s; }
        .stagger-3 { transition-delay: 0.3s; }
        .stagger-4 { transition-delay: 0.4s; }
        
        /* Glowing effect */
        .glow-on-hover:hover {
          box-shadow: 0 0 30px rgba(59, 130, 246, 0.3);
        }
        
        /* Background animation */
        .bg-animate {
          background: linear-gradient(-45deg, #f0f9ff, #f8fafc, #f0f9ff, #f8fafc);
          background-size: 400% 400%;
          animation: gradientShift 8s ease infinite;
        }
        
        @keyframes gradientShift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        
        /* Text reveal animation */
        .text-reveal {
          overflow: hidden;
          position: relative;
        }
        
        .text-reveal::after {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: white;
          transform: translateX(-100%);
          transition: transform 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }
        
        .text-reveal.revealed::after {
          transform: translateX(100%);
        }
        
        /* Magnetic hover effect */
        .magnetic {
          transition: transform 0.2s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }
        
        /* SVG draw animation */
        .draw-svg {
          stroke-dasharray: 1000;
          stroke-dashoffset: 1000;
          animation: draw 2s ease-out forwards;
        }
        
        @keyframes draw {
          to {
            stroke-dashoffset: 0;
          }
        }
        
        /* Particle animation */
        .particle {
          position: absolute;
          width: 4px;
          height: 4px;
          background: radial-gradient(circle, rgba(59,130,246,0.8), transparent);
          border-radius: 50%;
          pointer-events: none;
        }
        
        .particle-1 {
          animation: particleFloat1 6s ease-in-out infinite;
        }
        
        .particle-2 {
          animation: particleFloat2 8s ease-in-out infinite reverse;
        }
        
        .particle-3 {
          animation: particleFloat3 10s ease-in-out infinite;
        }
        
        @keyframes particleFloat1 {
          0%, 100% { 
            transform: translate(0, 0) rotate(0deg);
            opacity: 0;
          }
          10%, 90% {
            opacity: 1;
          }
          50% { 
            transform: translate(100px, -50px) rotate(180deg);
          }
        }
        
        @keyframes particleFloat2 {
          0%, 100% { 
            transform: translate(0, 0) rotate(0deg);
            opacity: 0;
          }
          10%, 90% {
            opacity: 0.7;
          }
          50% { 
            transform: translate(-80px, -80px) rotate(-180deg);
          }
        }
        
        @keyframes particleFloat3 {
          0%, 100% { 
            transform: translate(0, 0) scale(1);
            opacity: 0;
          }
          10%, 90% {
            opacity: 0.5;
          }
          50% { 
            transform: translate(60px, 100px) scale(1.5);
          }
        }
      `}</style>
        </motion.section >
    );
};

export default WhyChooseMe;