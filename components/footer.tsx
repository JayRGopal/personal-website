"use client"

import { motion } from "framer-motion"
import { Linkedin, Twitter, Github, Mail, Heart } from "lucide-react"
import { fadeInUp } from "@/lib/motion"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-muted/30 border-t border-border/50">
      <div className="container mx-auto px-4 py-12">
        <motion.div
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="space-y-8"
        >
          {/* Main Footer Content */}
          <div className="grid md:grid-cols-3 gap-8">
            {/* Brand Section */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-foreground">Jay Gopal</h3>
              <p className="text-muted-foreground text-pretty">
                Healthcare AI entrepreneur and researcher, building the future of medicine through innovative technology
                solutions.
              </p>
              <div className="flex gap-4">
                <motion.a
                  href="https://linkedin.com/in/jaygopal"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center text-primary hover:bg-primary/20 transition-colors"
                >
                  <Linkedin className="h-4 w-4" />
                </motion.a>
                <motion.a
                  href="https://twitter.com/jaygopal"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center text-primary hover:bg-primary/20 transition-colors"
                >
                  <Twitter className="h-4 w-4" />
                </motion.a>
                <motion.a
                  href="https://github.com/jaygopal"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center text-primary hover:bg-primary/20 transition-colors"
                >
                  <Github className="h-4 w-4" />
                </motion.a>
                <motion.a
                  href="mailto:jay@kyronmedical.com"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center text-primary hover:bg-primary/20 transition-colors"
                >
                  <Mail className="h-4 w-4" />
                </motion.a>
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h4 className="font-semibold text-foreground">Quick Links</h4>
              <nav className="space-y-2">
                <a href="#work" className="block text-muted-foreground hover:text-primary transition-colors">
                  Work
                </a>
                <a href="#research" className="block text-muted-foreground hover:text-primary transition-colors">
                  Research & Press
                </a>
                <a href="#speaking" className="block text-muted-foreground hover:text-primary transition-colors">
                  Speaking
                </a>
                <a href="#contact" className="block text-muted-foreground hover:text-primary transition-colors">
                  Contact
                </a>
              </nav>
            </div>

            {/* Companies */}
            <div className="space-y-4">
              <h4 className="font-semibold text-foreground">Companies</h4>
              <div className="space-y-2">
                <a
                  href="https://kyronmedical.com"
                  className="block text-muted-foreground hover:text-primary transition-colors"
                >
                  Kyron Medical
                </a>
                <a
                  href="https://ainsleyadvisory.com"
                  className="block text-muted-foreground hover:text-primary transition-colors"
                >
                  Ainsley Advisory Group
                </a>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="pt-8 border-t border-border/50">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-sm text-muted-foreground">© {currentYear} Jay Gopal. All rights reserved.</p>
              <div className="flex items-center gap-1 text-sm text-muted-foreground">
                <span>Made with</span>
                <Heart className="h-4 w-4 text-red-500 fill-current" />
                <span>in Boston</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
