'use client'

import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React from 'react'
import { motion } from 'motion/react'

export default function FirstSection() {
    return (
        <motion.div
            className='grid grid-cols-2 gap-12 items-center'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
        >
            {/* Left Column - Text Content */}
            <motion.div
                className='col-span-1 flex flex-col gap-4 leading-3'
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
            >
                {/* Badge */}
                <motion.p
                    className="bg-[var(--a2)] text-white rounded-full w-fit px-4 font-dmsa text-xs py-2 rounded-tl-3xl rounded-br-3xl"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    whileHover={{ scale: 1.05 }}
                >
                    1-on-1 Online Tutoring
                </motion.p>

                {/* Main Heading */}
                <motion.p
                    className='text-7xl font-bold'
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                >
                    Master{' '}
                    <motion.span
                        className='rounded-full text-[var(--a2)]'
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: 1.0 }}
                        whileHover={{
                            scale: 1.1,
                            textShadow: "0px 0px 8px var(--b2)"
                        }}
                    >
                        Math
                    </motion.span>{' '}
                    with Confidence
                </motion.p>

                {/* Subtitle */}
                <motion.p
                    className='text-3xl text-center font-semibold leading-12 font-mono'
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                >
                    Personalized lessons tailored to your learning style. Flexible scheduling and proven results.
                </motion.p>

                {/* CTA Button */}
                <motion.div
                    className='flex justify-center items-center'
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 1.2 }}
                >
                    <motion.div
                        whileHover={{
                            scale: 1.05,
                            boxShadow: "0 10px 30px rgba(0, 0, 0, 0.2)"
                        }}
                        whileTap={{ scale: 0.95 }}
                        transition={{ type: "spring", stiffness: 400, damping: 17 }}
                    >
                        <Button className='bg-black w-fit h-12 relative overflow-hidden group'>
                            <motion.span
                                className='h-2 w-2 rounded-full bg-white mr-2'
                                animate={{
                                    boxShadow: [
                                        "0 0 0 0 rgba(255, 255, 255, 0.7)",
                                        "0 0 0 10px rgba(255, 255, 255, 0)",
                                        "0 0 0 0 rgba(255, 255, 255, 0)"
                                    ]
                                }}
                                transition={{
                                    duration: 2,
                                    repeat: Infinity,
                                    repeatType: "loop"
                                }}
                            />
                            <span className='relative z-10'>Book a Free Trial</span>

                            {/* Button hover effect */}
                            <motion.div
                                className='absolute inset-0 bg-gradient-to-r from-gray-800 to-gray-900'
                                initial={{ x: "-100%" }}
                                whileHover={{ x: "0%" }}
                                transition={{ duration: 0.3 }}
                            />
                        </Button>
                    </motion.div>
                </motion.div>
            </motion.div>

            {/* Right Column - Image */}
            <motion.div
                className='col-span-1 text-end'
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
            >
                <motion.div
                    whileHover={{
                        scale: 1.02,
                        rotate: 1
                    }}
                    transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 10
                    }}
                >
                    <Image
                        width={12}
                        height={12}
                        className='w-full h-fit mt-24'
                        src="/icons/Maths.svg"
                        alt='first banner image'
                    />
                </motion.div>
            </motion.div>
        </motion.div>
    )
}