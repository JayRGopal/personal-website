"use client"

import { motion } from "framer-motion"
import Image from "next/image"

const logos = [
  { name: "Boston Globe", src: "/boston-globe-logo.jpg" },
  { name: "NBC10", src: "/nbc10-news-logo.jpg" },
  { name: "Brown Daily Herald", src: "/brown-daily-herald-logo.jpg" },
  { name: "American Heart Association", src: "/american-heart-association-logo.jpg" },
  { name: "MIT", src: "/mit-logo-generic.png" },
  { name: "Warren Alpert Medical School", src: "/warren-alpert-medical-school-logo.jpg" },
]

export function LogoTicker() {
  return (
    <section className="py-16 bg-secondary/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h3 className="text-lg text-muted-foreground">Featured In & Speaking At</h3>
        </motion.div>

        <div className="relative overflow-hidden">
          <motion.div
            animate={{ x: [0, -100 * logos.length] }}
            transition={{
              x: {
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "loop",
                duration: 20,
                ease: "linear",
              },
            }}
            className="flex space-x-16 items-center"
            style={{ width: `${200 * logos.length}%` }}
          >
            {[...logos, ...logos].map((logo, index) => (
              <motion.div
                key={`${logo.name}-${index}`}
                whileHover={{ scale: 1.1, pause: true }}
                className="flex-shrink-0 grayscale hover:grayscale-0 transition-all duration-300"
              >
                <Image
                  src={logo.src || "/placeholder.svg"}
                  alt={logo.name}
                  width={120}
                  height={60}
                  className="h-12 w-auto object-contain opacity-60 hover:opacity-100 transition-opacity"
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
