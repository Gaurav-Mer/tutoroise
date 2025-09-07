/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import Lottie, { LottieRefCurrentProps } from 'lottie-react';
import animationData from "../../../public/animation/online.json"

const AboutTutorSection = ({ activeColor }: { activeColor?: string }) => {
    const lottieRef = useRef<LottieRefCurrentProps | null>(null);

    // Enhanced Animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.2
            }
        }
    };

    const slideInLeft: any = {
        hidden: { x: -80, opacity: 0, scale: 0.9 },
        visible: {
            x: 0,
            opacity: 1,
            scale: 1,
            transition: {
                duration: 1,
                ease: [0.22, 1, 0.36, 1]
            }
        }
    };

    const fadeInRight: any = {
        hidden: { x: 60, opacity: 0, y: 20 },
        visible: {
            x: 0,
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1]
            }
        }
    };

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

    const staggerVariants: any = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    // SVG Icons
    const GraduationIcon = () => (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
            <path d="M6 12v5c3 3 9 3 12 0v-5" />
        </svg>
    );

    const StudentIcon = () => (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
            <circle cx="12" cy="7" r="4" />
        </svg>
    );

    const StarIcon = () => (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26" />
        </svg>
    );


    return (
        <motion.section
            id="C"
            className="h-full flex items-center justify-center relative z-10 px-6 "
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.4 }}
        >
            <div className="max-w-7xl mx-auto w-full">
                <motion.div
                    className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center"
                    variants={containerVariants}
                >
                    {/* Left Side - Enhanced Content */}
                    <motion.div
                        className="space-y-10 lg:pr-8"
                        variants={fadeInRight}
                    >
                        {/* Label with enhanced styling */}
                        <motion.div transition={{
                            duration: 0.8,
                            ease: [0.25, 0.46, 0.45, 0.94],
                            delay: 0.1
                        }} variants={fadeInUp} className="flex items-center space-x-3 ">
                            <div className="w-12 h-px bg-black"></div>
                            <span className="text-3xl font-medium text-black tracking-[0.2em] uppercase">
                                About Me
                            </span>
                        </motion.div>

                        {/* Enhanced Headline */}
                        <motion.h2
                            className="text-5xl lg:text-4xl xl:text-4xl font-bold text-gray-900 "
                            variants={fadeInUp}
                        >
                            Hi, I'm{" "}
                            <span className="relative inline-block px-12 py-1 rounded-tr-full rounded-bl-full mb-2" style={{ background: activeColor, color: "white" }}>
                                Sarah Chen
                                {/* <motion.div
                                    className="absolute -bottom-2 left-0 h-1 bg-black"
                                    initial={{ width: 0 }}
                                    whileInView={{ width: "100%" }}
                                    transition={{ delay: 1, duration: 0.8, ease: "easeOut" }}
                                    viewport={{ once: true }}
                                /> */}
                            </span>
                            <br />
                            Your Personal{" "}
                            <span className="italic font-light">Math Tutor</span>
                        </motion.h2>

                        {/* Enhanced Bio Paragraph */}
                        <motion.p
                            className="text-xl lg:text-2xl text-gray-600 leading-relaxed max-w-2xl font-light"
                            variants={fadeInUp}
                        >
                            I'm passionate about making math accessible and enjoyable for every student.
                            With over{" "}
                            <span className="font-bold text-gray-900 rounded-full px-2 py-1" >5 years</span> of teaching experience,
                            I specialize in breaking down complex concepts into simple, understandable steps.
                        </motion.p>

                        {/* Enhanced Credibility Highlights */}
                        <motion.div
                            className="grid grid-cols-1 sm:grid-cols-3 gap-8 pt-4"
                            variants={staggerVariants}
                        >
                            <motion.div
                                className="group"
                                variants={fadeInUp}
                                whileHover={{ scale: 1.05 }}
                                transition={{ type: "spring", stiffness: 300 }}
                            >
                                <div className="relative">
                                    <div style={{ color: "white", backgroundColor: activeColor }} className="w-16 h-16 bg-black rounded-2xl flex items-center justify-center text-white mb-4 group-hover:rotate-6 transition-transform duration-300">
                                        <GraduationIcon />
                                    </div>
                                    <h4 className="text-lg font-bold text-gray-900 mb-1">Master's Degree</h4>
                                    <p className="text-gray-600 text-sm leading-relaxed">Stanford University</p>
                                </div>
                            </motion.div>

                            <motion.div
                                className="group"
                                variants={fadeInUp}
                                whileHover={{ scale: 1.05 }}
                                transition={{ type: "spring", stiffness: 300 }}
                            >
                                <div className="relative">
                                    <div style={{ color: "white", backgroundColor: activeColor }} className="w-16 h-16 bg-black rounded-2xl flex items-center justify-center text-white mb-4 group-hover:rotate-6 transition-transform duration-300">
                                        <StudentIcon />
                                    </div>
                                    <h4 className="text-lg font-bold text-gray-900 mb-1">100+ Students</h4>
                                    <p className="text-gray-600 text-sm leading-relaxed">Successfully tutored</p>
                                </div>
                            </motion.div>

                            <motion.div
                                className="group"
                                variants={fadeInUp}
                                whileHover={{ scale: 1.05 }}
                                transition={{ type: "spring", stiffness: 300 }}
                            >
                                <div className="relative">
                                    <div style={{ color: "white", backgroundColor: activeColor }} className="w-16 h-16 bg-black rounded-2xl flex items-center justify-center text-white mb-4 group-hover:rotate-6 transition-transform duration-300">
                                        <StarIcon />
                                    </div>
                                    <h4 className="text-lg font-bold text-gray-900 mb-1">4.9/5 Rating</h4>
                                    <p className="text-gray-600 text-sm leading-relaxed">Student reviews</p>
                                </div>
                            </motion.div>
                        </motion.div>

                        {/* Enhanced CTA Button */}
                        <motion.div variants={fadeInUp} className="pt-4">
                            <motion.button
                                className="group relative bg-black text-white px-10 py-5 rounded-full font-semibold text-lg overflow-hidden"
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                                style={{ color: "white", backgroundColor: activeColor }}
                            >
                                <motion.div
                                    className="absolute inset-0 bg-gray-800"
                                    initial={{ x: "-100%" }}
                                    whileHover={{ x: 0 }}
                                    transition={{ type: "tween", ease: "easeInOut", duration: 0.3 }}
                                />
                                <span className="relative z-10 flex items-center space-x-2">
                                    <span>Book a Free Trial</span>
                                    <motion.svg
                                        width="20"
                                        height="20"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="group-hover:translate-x-1 transition-transform duration-300"
                                    >
                                        <path d="M5 12h14" />
                                        <path d="m12 5 7 7-7 7" />
                                    </motion.svg>
                                </span>
                            </motion.button>
                        </motion.div>
                    </motion.div>

                    {/* Right Side - Enhanced Lottie Animation */}
                    <motion.div
                        className="flex justify-center lg:justify-center order-first lg:order-last"
                        variants={slideInLeft}
                    >
                        <div className="relative">
                            {/* Glowing aura background */}
                            <motion.div
                                className="absolute inset-0 rounded-full blur-3xl"
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 0.8, scale: 1 }}
                                transition={{ duration: 1.2, ease: "easeOut" }}
                                style={{
                                    background: "radial-gradient(circle at center, rgba(255,255,255,0.9), rgba(255,255,255,0))",
                                }}
                            />

                            {/* Outline rings */}
                            <motion.div
                                className="absolute -inset-10 rounded-full border border-white/40"
                                initial={{ scale: 0.7, opacity: 0 }}
                                whileInView={{ scale: 1, opacity: 0.6 }}
                                transition={{ delay: 0.3, duration: 1 }}
                            />
                            <motion.div
                                className="absolute -inset-20 rounded-full border border-white/20"
                                initial={{ scale: 0.7, opacity: 0 }}
                                whileInView={{ scale: 1, opacity: 0.3 }}
                                transition={{ delay: 0.6, duration: 1 }}
                            />

                            {/* Main Lottie animation */}
                            <motion.div
                                className="relative z-10 drop-shadow-2xl"
                                whileHover={{ scale: 1.05, rotate: 1 }}
                                transition={{ type: "spring", stiffness: 250 }}
                            >
                                <Lottie
                                    lottieRef={lottieRef}
                                    animationData={animationData}
                                    loop
                                    autoplay
                                    className="w-96 h-96 lg:w-[28rem] lg:h-[28rem] xl:w-[32rem] xl:h-[32rem]"
                                />
                            </motion.div>
                        </div>
                    </motion.div>

                </motion.div>
            </div>

            {/* Enhanced floating orbs with better positioning and animations */}
            <motion.div
                className="absolute top-1/4 right-1/4 w-2 h-2 rounded-full bg-black opacity-30"
                animate={{
                    y: [0, -40, 0],
                    x: [0, 20, 0],
                    scale: [1, 1.5, 1],
                    opacity: [0.3, 0.6, 0.3]
                }}
                transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
            />
            <motion.div
                className="absolute bottom-1/3 left-1/4 w-1 h-1 rounded-full bg-black opacity-20"
                animate={{
                    y: [0, -30, 0],
                    x: [0, -15, 0],
                    rotate: [0, 180, 360]
                }}
                transition={{
                    duration: 12,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 3
                }}
            />
            <motion.div
                className="absolute top-1/2 left-1/6 w-3 h-3 rounded-full bg-black opacity-20"
                animate={{
                    scale: [1, 1.3, 1],
                    opacity: [0.2, 0.4, 0.2]
                }}
                transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1.5
                }}
            />
        </motion.section>
    );
};

export default AboutTutorSection;