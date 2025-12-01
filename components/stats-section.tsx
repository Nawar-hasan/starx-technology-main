"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"

const stats = [
  { value: 150, suffix: "+", label: "مشروع منجز" },
  { value: 50, suffix: "+", label: "عميل راضٍ" },
  { value: 10, suffix: "+", label: "سنوات خبرة" },
  { value: 98, suffix: "%", label: "نسبة النجاح" },
]

function CountUp({ end, duration = 2000 }: { end: number; duration?: number }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    let startTime: number
    let animationFrame: number

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime
      const progress = Math.min((currentTime - startTime) / duration, 1)

      setCount(Math.floor(progress * end))

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate)
      }
    }

    animationFrame = requestAnimationFrame(animate)

    return () => cancelAnimationFrame(animationFrame)
  }, [end, duration])

  return <span>{count}</span>
}

export function StatsSection() {
  return (
    <section className="relative py-20 px-4 bg-card/50">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="text-4xl lg:text-5xl font-bold text-primary mb-2">
                <CountUp end={stat.value} />
                {stat.suffix}
              </div>
              <div className="text-sm lg:text-base text-muted-foreground">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
