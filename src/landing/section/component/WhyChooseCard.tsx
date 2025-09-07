/* eslint-disable @typescript-eslint/no-explicit-any */
import { motion } from "framer-motion";
import React, { useState } from 'react';

const WhyChooseCard = () => {
    const [hoveredIndex, setHoveredIndex] = useState<null | number>(null);



    // Custom Black & White Illustrations
    const PersonalizedLessonIllustration = ({ className }: any) => (
        <svg className={className} viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Laptop */}
            <rect x="120" y="160" width="160" height="100" rx="8" stroke="currentColor" strokeWidth="2" fill="none" />
            <rect x="125" y="165" width="150" height="85" rx="4" fill="currentColor" opacity="0.05" />
            <line x1="140" y1="180" x2="260" y2="180" stroke="currentColor" strokeWidth="1.5" opacity="0.6" />
            <line x1="140" y1="190" x2="240" y2="190" stroke="currentColor" strokeWidth="1.5" opacity="0.6" />
            <line x1="140" y1="200" x2="220" y2="200" stroke="currentColor" strokeWidth="1.5" opacity="0.6" />

            {/* Student */}
            <circle cx="80" cy="120" r="20" stroke="currentColor" strokeWidth="2" fill="none" />
            <path d="M60 180c0-11 9-20 20-20s20 9 20 20v40h-40v-40z" stroke="currentColor" strokeWidth="2" fill="none" />
            <path d="M70 140c5-3 15-3 20 0" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />

            {/* Tutor */}
            <circle cx="320" cy="110" r="22" stroke="currentColor" strokeWidth="2" fill="none" />
            <path d="M298 170c0-12 10-22 22-22s22 10 22 22v50h-44v-50z" stroke="currentColor" strokeWidth="2" fill="none" />
            <path d="M305 135c7-4 18-4 25 0" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />

            {/* Connection line */}
            <path d="M100 140c20-10 40-10 60-5" stroke="currentColor" strokeWidth="2" strokeDasharray="5,5" opacity="0.7" />

            {/* Books */}
            <rect x="300" y="200" width="12" height="20" stroke="currentColor" strokeWidth="1.5" fill="none" />
            <rect x="315" y="195" width="12" height="25" stroke="currentColor" strokeWidth="1.5" fill="none" />
            <rect x="330" y="190" width="12" height="30" stroke="currentColor" strokeWidth="1.5" fill="none" />
        </svg>
    );

    const FlexibleScheduleIllustration = ({ className }: any) => (
        <svg className={className} viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Calendar */}
            <rect x="100" y="80" width="200" height="160" rx="12" stroke="currentColor" strokeWidth="2" fill="none" />
            <rect x="100" y="80" width="200" height="40" rx="12" fill="currentColor" opacity="0.1" />
            <line x1="100" y1="120" x2="300" y2="120" stroke="currentColor" strokeWidth="2" />

            {/* Calendar holes */}
            <circle cx="130" cy="100" r="4" fill="currentColor" opacity="0.3" />
            <circle cx="270" cy="100" r="4" fill="currentColor" opacity="0.3" />

            {/* Calendar grid */}
            <line x1="130" y1="140" x2="270" y2="140" stroke="currentColor" strokeWidth="1" opacity="0.3" />
            <line x1="130" y1="160" x2="270" y2="160" stroke="currentColor" strokeWidth="1" opacity="0.3" />
            <line x1="130" y1="180" x2="270" y2="180" stroke="currentColor" strokeWidth="1" opacity="0.3" />
            <line x1="130" y1="200" x2="270" y2="200" stroke="currentColor" strokeWidth="1" opacity="0.3" />

            <line x1="160" y1="120" x2="160" y2="220" stroke="currentColor" strokeWidth="1" opacity="0.3" />
            <line x1="190" y1="120" x2="190" y2="220" stroke="currentColor" strokeWidth="1" opacity="0.3" />
            <line x1="220" y1="120" x2="220" y2="220" stroke="currentColor" strokeWidth="1" opacity="0.3" />
            <line x1="250" y1="120" x2="250" y2="220" stroke="currentColor" strokeWidth="1" opacity="0.3" />

            {/* Selected dates */}
            <circle cx="145" cy="150" r="8" fill="currentColor" opacity="0.8" />
            <circle cx="205" cy="170" r="8" fill="currentColor" opacity="0.8" />
            <circle cx="235" cy="190" r="8" fill="currentColor" opacity="0.8" />

            {/* Clock */}
            <circle cx="340" cy="160" r="35" stroke="currentColor" strokeWidth="2" fill="none" />
            <circle cx="340" cy="160" r="3" fill="currentColor" />
            <line x1="340" y1="160" x2="340" y2="135" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
            <line x1="340" y1="160" x2="360" y2="160" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />

            {/* Small decorative elements */}
            <circle cx="60" cy="100" r="6" stroke="currentColor" strokeWidth="1.5" fill="none" />
            <circle cx="370" cy="100" r="4" fill="currentColor" opacity="0.6" />
            <circle cx="50" cy="180" r="3" fill="currentColor" opacity="0.4" />
        </svg>
    );

    const ProvenResultsIllustration = ({ className }: any) => (
        <svg className={className} viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Chart background */}
            <rect x="80" y="60" width="240" height="180" rx="8" stroke="currentColor" strokeWidth="2" fill="none" />

            {/* Grid lines */}
            <line x1="80" y1="100" x2="320" y2="100" stroke="currentColor" strokeWidth="1" opacity="0.2" />
            <line x1="80" y1="140" x2="320" y2="140" stroke="currentColor" strokeWidth="1" opacity="0.2" />
            <line x1="80" y1="180" x2="320" y2="180" stroke="currentColor" strokeWidth="1" opacity="0.2" />
            <line x1="80" y1="220" x2="320" y2="220" stroke="currentColor" strokeWidth="1" opacity="0.2" />

            <line x1="120" y1="60" x2="120" y2="240" stroke="currentColor" strokeWidth="1" opacity="0.2" />
            <line x1="160" y1="60" x2="160" y2="240" stroke="currentColor" strokeWidth="1" opacity="0.2" />
            <line x1="200" y1="60" x2="200" y2="240" stroke="currentColor" strokeWidth="1" opacity="0.2" />
            <line x1="240" y1="60" x2="240" y2="240" stroke="currentColor" strokeWidth="1" opacity="0.2" />
            <line x1="280" y1="60" x2="280" y2="240" stroke="currentColor" strokeWidth="1" opacity="0.2" />

            {/* Chart line */}
            <path d="M100 200 L140 180 L180 140 L220 100 L260 80 L300 60"
                stroke="currentColor" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round" />

            {/* Data points */}
            <circle cx="100" cy="200" r="4" fill="currentColor" />
            <circle cx="140" cy="180" r="4" fill="currentColor" />
            <circle cx="180" cy="140" r="4" fill="currentColor" />
            <circle cx="220" cy="100" r="4" fill="currentColor" />
            <circle cx="260" cy="80" r="4" fill="currentColor" />
            <circle cx="300" cy="60" r="4" fill="currentColor" />

            {/* Award/trophy */}
            <path d="M340 120c0-8 6-14 14-14s14 6 14 14v20h-28v-20z" stroke="currentColor" strokeWidth="2" fill="none" />
            <rect x="350" y="140" width="8" height="20" stroke="currentColor" strokeWidth="2" fill="none" />
            <rect x="346" y="160" width="16" height="8" rx="2" stroke="currentColor" strokeWidth="2" fill="none" />

            {/* Star */}
            <path d="M354 100l2 6h6l-5 4 2 6-5-4-5 4 2-6-5-4h6z" fill="currentColor" opacity="0.7" />

            {/* Percentage indicators */}
            <text x="340" y="200" fontSize="14" fill="currentColor" opacity="0.8">+95%</text>
            <text x="30" y="200" fontSize="12" fill="currentColor" opacity="0.6">Before</text>
            <text x="330" y="80" fontSize="12" fill="currentColor" opacity="0.6">After</text>
        </svg>
    );

    const HomeworkHelpIllustration = ({ className }: any) => (
        <svg className={className} viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Student figure */}
            <circle cx="120" cy="100" r="25" stroke="currentColor" strokeWidth="2" fill="none" />
            <path d="M95 160c0-14 11-25 25-25s25 11 25 25v60h-50v-60z" stroke="currentColor" strokeWidth="2" fill="none" />
            <path d="M105 125c8-5 22-5 30 0" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />

            {/* Book/notebook */}
            <rect x="180" y="140" width="120" height="80" rx="4" stroke="currentColor" strokeWidth="2" fill="none" />
            <line x1="180" y1="160" x2="300" y2="160" stroke="currentColor" strokeWidth="1" />

            {/* Book lines */}
            <line x1="190" y1="175" x2="290" y2="175" stroke="currentColor" strokeWidth="1" opacity="0.4" />
            <line x1="190" y1="185" x2="270" y2="185" stroke="currentColor" strokeWidth="1" opacity="0.4" />
            <line x1="190" y1="195" x2="280" y2="195" stroke="currentColor" strokeWidth="1" opacity="0.4" />
            <line x1="190" y1="205" x2="260" y2="205" stroke="currentColor" strokeWidth="1" opacity="0.4" />

            {/* Pencil */}
            <rect x="160" y="120" width="4" height="40" stroke="currentColor" strokeWidth="1.5" fill="none" />
            <path d="M160 120l-4-8h12l-4 8" stroke="currentColor" strokeWidth="1.5" fill="none" />
            <circle cx="162" cy="165" r="2" fill="currentColor" />

            {/* Math symbols floating */}
            <text x="320" y="100" fontSize="16" fill="currentColor" opacity="0.6">∑</text>
            <text x="340" y="130" fontSize="14" fill="currentColor" opacity="0.5">√</text>
            <text x="60" y="80" fontSize="12" fill="currentColor" opacity="0.4">π</text>
            <text x="350" y="180" fontSize="18" fill="currentColor" opacity="0.7">∞</text>

            {/* Question mark bubble */}
            <circle cx="80" cy="120" r="20" stroke="currentColor" strokeWidth="2" fill="none" opacity="0.6" />
            <text x="75" y="127" fontSize="20" fill="currentColor" opacity="0.6">?</text>

            {/* Light bulb (solution) */}
            <circle cx="320" cy="200" r="12" stroke="currentColor" strokeWidth="2" fill="none" />
            <rect x="315" y="212" width="10" height="8" rx="2" stroke="currentColor" strokeWidth="1.5" fill="none" />
            <path d="M310 190c0-6 4-10 10-10s10 4 10 10" stroke="currentColor" strokeWidth="1.5" opacity="0.6" />
        </svg>
    );

    const features = [
        {
            illustration: PersonalizedLessonIllustration,
            title: "Personalized Lessons",
            description: "Tailored sessions designed specifically for your learning style and goals.",
            color: "cyan"
        },
        {
            illustration: FlexibleScheduleIllustration,
            title: "Flexible Schedule",
            description: "Learn at your own pace, on your time, with sessions that fit your life."
        },
        {
            illustration: ProvenResultsIllustration,
            title: "Proven Results",
            description: "Boost your grades and confidence with our track record of success."
        },
        {
            illustration: HomeworkHelpIllustration,
            title: "Homework Help",
            description: "Step-by-step guidance to tackle assignments with confidence."
        }
    ];


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


    // animationVariants.ts
    const illustrationVariants: any = {
        hidden: {
            opacity: 0,
            scale: 0.6,
            y: 80,
            rotate: -10,
            filter: "blur(8px)",
        },
        visible: {
            opacity: 1,
            scale: 1.1,
            y: 0,
            rotate: 0,
            filter: "blur(0px)",
            transition: {
                type: "spring",
                stiffness: 120,
                damping: 18,
                delay: 0.2,
            },
        },
        hover: {
            scale: 1.15,
            y: -12,
            rotate: 2,
            transition: {
                type: "spring",
                stiffness: 160,
                damping: 12,
            },
        },
    };



    return (
        <section className="">
            {/* Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {features.map((feature, index) => {
                    const Illustration = feature.illustration;

                    return (
                        <motion.div
                            key={index}
                            className=" relative flex flex-col items-center text-center p-6 rounded-3xl bg-white shadow-md hover:shadow-xl transition-all duration-500"
                            onMouseEnter={() => setHoveredIndex(index)}
                            onMouseLeave={() => setHoveredIndex(null)}
                            variants={slideInLeft}
                        >
                            {/* Illustration Blob Background */}
                            <div className="relative w-32 h-32 mb-6">


                                {/* Illustration sits above blob */}
                                <motion.div variants={illustrationVariants}
                                    initial="hidden"
                                    animate="visible"
                                    whileHover="hover" className="relative flex items-center justify-center w-full h-full">
                                    <Illustration className="w-320 h-auto relative z-10 scale-200" />
                                </motion.div>
                            </div>

                            {/* Content */}
                            <motion.h3 variants={slideInLeft}
                                className="text-lg font-bold text-gray-900 mb-2">{feature.title}</motion.h3>
                            <motion.p variants={slideInLeft} className="text-gray-600 mb-4">{feature.description}</motion.p>

                        </motion.div>
                    );
                })}

            </div>

            {/* Bottom Section */}
            <div className="text-center mt-16">
                <div className="inline-flex items-center space-x-2 text-gray-500 text-sm">
                    <span>Trusted by 10,000+ students worldwide</span>
                    <div className="flex space-x-1">
                        {[...Array(5)].map((_, i) => (
                            <svg key={i} className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                        ))}
                    </div>
                </div>
            </div>
        </section >
    );
};

export default WhyChooseCard;