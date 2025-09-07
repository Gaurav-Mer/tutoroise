/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { twMerge } from "tailwind-merge";

const pricingPlans = [
    {
        title: "Single Session",
        price: "$15",
        highlightColor: "bg-blue-100 text-blue-700",
        description: "Perfect for a quick help session.",
        features: [
            "1-on-1 tutoring",
            "Flexible scheduling",
            "Concept clarity focus",
        ],
    },
    {
        title: "5 Sessions Pack",
        price: "$65",
        highlightColor: "bg-green-100 text-green-700",
        description: "Great for weekly learners.",
        features: [
            "5 personalized sessions",
            "Homework & doubt support",
            "Progress tracking",
        ],
    },
    {
        title: "10 Sessions Pack",
        price: "$120",
        highlightColor: "bg-orange-100 text-orange-700",
        description: "Best for exam preparation.",
        features: [
            "10 sessions included",
            "Priority scheduling",
            "Weekly reports",
            "Extra practice materials",
        ],
    },
    {
        title: "Unlimited Monthly",
        price: "$250",
        highlightColor: "bg-pink-100 text-pink-700",
        description: "Unlimited support for serious learners.",
        features: [
            "Unlimited sessions",
            "24/7 doubt clearance",
            "Full syllabus coverage",
            "Premium support",
        ],
    },
];

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


export default function PricingSection({ activeColor }: any) {
    return (
        <motion.section
            id="F"
            className="min-h-dvh flex items-center justify-center relative z-10 "
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.4 }}
        >
            <div className="max-w-7xl mx-auto px-6">
                <div className='flex flex-col'>
                    {/* Label with enhanced styling */}
                    <motion.div transition={{
                        duration: 0.8,
                        ease: [0.25, 0.46, 0.45, 0.94],
                        delay: 0.1
                    }} variants={containerVariants} className="flex items-center space-x-3">
                        <div className="w-12 h-px bg-black"></div>

                        <span className="text-3xl font-medium text-black tracking-[0.2em] uppercase">PLAN & Pricing</span>
                    </motion.div>
                    <motion.div className="text-center mb-15" variants={fadeInUp}>
                        <motion.h2
                            className="text-5xl md:text-7xl font-bold text-gray-900 mb-8"
                            style={{
                                opacity: 1,
                                transition: 'all 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.4s'
                            }}
                        >
                            Choose Your
                            <motion.span
                                className="block"
                                style={{
                                    transition: 'all 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.8s'
                                }}
                            >
                                Tutoring Plan
                            </motion.span>
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ delay: 0.2, duration: 0.6 }}
                            className="text-gray-600  max-w-2xl mx-auto"
                        >
                            Pay session-wise or pick a package that suits your learning style.
                        </motion.p>
                    </motion.div>
                </div>

                {/* Pricing Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0">
                    {pricingPlans.map((plan, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * .2, duration: 4 }}
                            className={twMerge("flex flex-col justify-between   border-gray-200 shadow-sm p-8 bg-white hover:shadow-md transition", idx === 0 && "rounded-l-4xl", idx === pricingPlans?.length - 1 && "rounded-r-3xl")}
                        >
                            {/* Plan Title */}
                            <h3 className="text-2xl font-semibold text-gray-800">
                                {plan.title}
                            </h3>

                            {/* Price */}
                            <div
                                className={` mt-4 mb-6 px-3 py-1 text-2xl font-semibold  rounded-full  text-center justify-center flex  ${plan.highlightColor}`}
                            >
                                {plan.price}
                            </div>

                            {/* Description */}
                            <p className="text-gray-600 text-sm mb-6">{plan.description}</p>

                            {/* Features */}
                            <ul className="space-y-3 mb-8 flex-1">
                                {plan.features.map((feature, i) => (
                                    <li key={i} className="flex items-center gap-2 text-gray-700">
                                        <Check className="w-5 h-5 text-indigo-500" />
                                        {feature}
                                    </li>
                                ))}
                            </ul>

                            {/* CTA */}
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                style={{ background: activeColor, color: "white" }}
                                className="w-full py-3  border-black  text-indigo-600 rounded-xl font-semibold hover:bg-indigo-600 hover:text-white transition"
                            >
                                Book A Demo
                            </motion.button>
                        </motion.div>
                    ))}
                </div>
            </div>
        </motion.section>
    );
}
