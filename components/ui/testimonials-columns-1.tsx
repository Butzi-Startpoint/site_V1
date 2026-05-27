"use client"

import React from "react"
import { motion } from "framer-motion"

export type Testimonial = {
  text: string
  image: string
  name: string
  role: string
}

export const TestimonialsColumn = (props: {
  className?: string
  testimonials: Testimonial[]
  duration?: number
}) => {
  return (
    <div className={props.className}>
      <motion.div
        animate={{ translateY: "-50%" }}
        transition={{
          duration: props.duration || 10,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
        }}
        className="flex flex-col gap-5 pb-5"
      >
        {[...new Array(2).fill(0).map((_, index) => (
          <React.Fragment key={index}>
            {props.testimonials.map(({ text, image, name, role }, i) => (
              <div
                key={i}
                className="p-6 rounded-2xl border border-[#1E172D]/8 bg-white shadow-sm shadow-[#A68AFF]/5 max-w-xs w-full"
              >
                <p className="text-[#1E172D]/75 text-sm leading-relaxed">&ldquo;{text}&rdquo;</p>
                <div className="flex items-center gap-3 mt-4">
                  <img
                    width={36}
                    height={36}
                    src={image}
                    alt={name}
                    className="h-9 w-9 rounded-full object-cover flex-shrink-0"
                  />
                  <div>
                    <div className="font-semibold text-[#1E172D] text-sm leading-snug"
                      style={{ fontFamily: 'var(--font-display)' }}>{name}</div>
                    <div className="text-[#1E172D]/45 text-xs leading-snug">{role}</div>
                  </div>
                </div>
              </div>
            ))}
          </React.Fragment>
        ))]}
      </motion.div>
    </div>
  )
}
