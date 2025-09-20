"use client"

import { useEffect, useState, useRef } from "react"
import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { fadeInUp, staggerContainer } from "@/lib/motion"

interface MetricCardProps {
  value: string
  label: string
  description: string
  delay?: number
}

function MetricCard({ value, label, description, delay = 0 }: MetricCardProps) {
  const [isVisible, setIsVisible] = useState(false)
  const [displayValue, setDisplayValue] = useState("0")
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (isVisible) {
      // Animate the value if it contains numbers
      const numericValue = value.match(/\d+/)
      if (numericValue) {
        const target = Number.parseInt(numericValue[0])
        const suffix = value.replace(numericValue[0], "")
        let current = 0
        const increment = target / 30
        const timer = setInterval(() => {
          current += increment
          if (current >= target) {
            setDisplayValue(value)
            clearInterval(timer)
          } else {
            setDisplayValue(Math.floor(current) + suffix)
          }
        }, 50)
        return () => clearInterval(timer)
      } else {
        setDisplayValue(value)
      }
    }
  }, [isVisible, value])

  return (
    <motion.div
      ref={ref}
      variants={fadeInUp}
      initial="initial"
      animate={isVisible ? "animate" : "initial"}
      transition={{ delay }}
      whileHover={{
        scale: 1.05,
        boxShadow: "0 20px 40px rgba(112, 179, 255, 0.1)",
      }}
    >
      <Card className="p-6 bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/30 transition-all duration-300">
        <div className="text-center space-y-2">
          <motion.div
            className="text-3xl md:text-4xl font-bold text-primary"
            animate={isVisible ? { scale: [1, 1.1, 1] } : {}}
            transition={{ duration: 0.6, delay: delay + 0.3 }}
          >
            {displayValue}
          </motion.div>
          <div className="text-lg font-semibold text-foreground">{label}</div>
          <div className="text-sm text-muted-foreground">{description}</div>
        </div>
      </Card>
    </motion.div>
  )
}

export function MetricCards() {
  return (
    <section id="highlights" className="py-20 bg-background/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          <MetricCard
            value="100+"
            label="Companies Impacted"
            description="Healthcare technology companies transformed"
            delay={0}
          />
          <MetricCard
            value="National"
            label="Press Coverage"
            description="Featured in major healthcare publications"
            delay={0.1}
          />
          <MetricCard
            value="Enterprise"
            label="Ready Platform"
            description="Scalable AI infrastructure for healthcare"
            delay={0.2}
          />
        </motion.div>

        {/* About Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-20 text-center max-w-4xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Transforming Healthcare with AI</h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            CEO of Kyron Medical, building voice AI agents that resolve insurance workflows so clinicians can focus on
            care. COO & Partner at Ainsley Advisory Group. Medical student at The Warren Alpert Medical School of Brown
            University.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
            <span className="px-3 py-1 bg-primary/10 rounded-full">AI Voice Agents</span>
            <span className="px-3 py-1 bg-primary/10 rounded-full">Revenue Recovery</span>
            <span className="px-3 py-1 bg-primary/10 rounded-full">Healthcare Advisory</span>
            <span className="px-3 py-1 bg-primary/10 rounded-full">Medical Technology</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
