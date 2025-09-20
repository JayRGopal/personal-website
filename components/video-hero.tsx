"use client"

import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ExternalLink, ChevronDown } from "lucide-react"
import { fadeInUp, staggerContainer } from "@/lib/motion"

export function VideoHero() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isVideoLoaded, setIsVideoLoaded] = useState(false)

  useEffect(() => {
    const video = videoRef.current
    if (video) {
      video.addEventListener("loadeddata", () => setIsVideoLoaded(true))
      // Ensure video plays on mobile
      video.play().catch(() => {
        // Fallback for browsers that don't allow autoplay
        console.log("Autoplay prevented")
      })
    }
  }, [])

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover opacity-30"
          poster="/abstract-ai-neural-network-medical-technology.jpg"
        >
          <source src="/videos/hero-ai.mp4" type="video/mp4" />
          <source src="/videos/hero-medicine.mp4" type="video/mp4" />
        </video>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-background/90 via-background/70 to-background/90" />

        {/* Animated Grid Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(112,179,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(112,179,255,0.1)_1px,transparent_1px)] bg-[size:50px_50px] animate-pulse" />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div variants={staggerContainer} initial="initial" animate="animate" className="space-y-8">
          {/* Main Headline */}
          <motion.div variants={fadeInUp} className="space-y-4">
            <motion.h1
              className="text-6xl md:text-8xl lg:text-9xl font-bold text-foreground tracking-tight pt-16 md:pt-0"
              style={{
                background: "linear-gradient(135deg, #ffffff 0%, #70b3ff 50%, #ffffff 100%)",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundSize: "200% 200%",
              }}
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{
                duration: 8,
                repeat: Number.POSITIVE_INFINITY,
                ease: "linear",
              }}
            >
              Jay Gopal
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="text-xl md:text-2xl lg:text-3xl text-muted-foreground font-light tracking-wide"
            >
              Founder • Healthcare AI • Venture Capital
            </motion.p>
          </motion.div>

          {/* Subtitle */}
          <motion.p
            variants={fadeInUp}
            className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
          >
            CEO, Kyron Medical. Building voice AI for revenue recovery in healthcare.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <motion.div
              whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(112, 179, 255, 0.4)" }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                asChild
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg font-semibold rounded-xl"
              >
                <a
                  href="https://www.linkedin.com/in/jay-gopal/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  Connect on LinkedIn
                  <ExternalLink size={20} />
                </a>
              </Button>
            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                variant="outline"
                size="lg"
                asChild
                className="border-primary/50 text-foreground hover:bg-primary/10 px-8 py-6 text-lg rounded-xl bg-transparent"
              >
                <a
                  href="https://kyronmedical.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  Visit Company Website
                  <ExternalLink size={16} />
                </a>
              </Button>
            </motion.div>
          </motion.div>

          {/* Floating Elements */}
          <motion.div variants={fadeInUp} className="flex justify-center items-center space-x-8 mt-16">
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
              className="w-2 h-2 bg-primary rounded-full opacity-60"
            />
            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 0.5 }}
              className="w-3 h-3 bg-primary/80 rounded-full opacity-40"
            />
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 3.5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 1 }}
              className="w-2 h-2 bg-primary rounded-full opacity-60"
            />
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.a
          href="#highlights"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
          className="flex flex-col items-center text-muted-foreground hover:text-foreground transition-colors"
        >
          <span className="text-sm mb-2">Scroll to explore</span>
          <ChevronDown size={24} />
        </motion.a>
      </motion.div>
    </section>
  )
}
