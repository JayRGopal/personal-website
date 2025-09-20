"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { ExternalLink, BookOpen, Award, Globe } from "lucide-react"
import { hoverScale } from "@/lib/motion"

export function ScholarSection() {
  return (
    <section id="research" className="py-20 bg-background/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Research & Publications</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Advancing healthcare through peer-reviewed research and academic contributions
          </p>
        </motion.div>

        {/* Scholar Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <motion.div
            variants={hoverScale}
            whileHover="whileHover"
            whileTap="whileTap"
            className="group cursor-pointer"
          >
            <Card className="overflow-hidden bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/30 transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-primary/10">
              <div className="p-8 md:p-12">
                <div className="flex flex-col md:flex-row items-center gap-8">
                  {/* Icon Section */}
                  <div className="flex-shrink-0">
                    <motion.div
                      className="w-24 h-24 bg-primary/10 rounded-2xl flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300"
                      whileHover={{ rotate: 5 }}
                    >
                      <BookOpen size={40} className="text-primary" />
                    </motion.div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 text-center md:text-left space-y-4">
                    <h3 className="text-2xl md:text-3xl font-bold text-foreground group-hover:text-primary transition-colors">
                      Academic Publications
                    </h3>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      View my dozens of peer-reviewed papers, posters, and presentations that have been presented across
                      the globe. Explore research spanning healthcare AI, medical technology, and clinical applications.
                    </p>

                    {/* Stats */}
                    <div className="flex flex-wrap justify-center md:justify-start gap-6 pt-4">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Award size={16} className="text-primary" />
                        <span>Peer-Reviewed Papers</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Globe size={16} className="text-primary" />
                        <span>Global Presentations</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <BookOpen size={16} className="text-primary" />
                        <span>Research Posters</span>
                      </div>
                    </div>
                  </div>

                  {/* Arrow */}
                  <div className="flex-shrink-0">
                    <motion.div
                      className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300"
                      whileHover={{ x: 5 }}
                    >
                      <ExternalLink size={20} />
                    </motion.div>
                  </div>
                </div>
              </div>

              {/* Clickable overlay */}
              <a
                href="https://scholar.google.com/citations?user=uuT8adMAAAAJ&hl=en&inst=7213243471243491304&oi=ao"
                target="_blank"
                rel="noopener noreferrer"
                className="absolute inset-0 z-10"
                aria-label="View Google Scholar Profile"
              />
            </Card>
          </motion.div>
        </motion.div>

        {/* Additional Context */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-12 text-center"
        >
          <div className="max-w-2xl mx-auto">
            <p className="text-muted-foreground leading-relaxed">
              My research focuses on the intersection of artificial intelligence and healthcare, with particular
              emphasis on practical applications that improve patient outcomes and operational efficiency.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
