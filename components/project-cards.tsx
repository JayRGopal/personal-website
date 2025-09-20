"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, ArrowRight } from "lucide-react"
import Image from "next/image"
import { fadeInUp, staggerContainer, hoverScale } from "@/lib/motion"

interface ProjectCardProps {
  title: string
  role: string
  description: string
  highlights: string[]
  outcomes: string[]
  imageUrl: string
  websiteUrl: string
  delay?: number
}

function ProjectCard({
  title,
  role,
  description,
  highlights,
  outcomes,
  imageUrl,
  websiteUrl,
  delay = 0,
}: ProjectCardProps) {
  return (
    <motion.div
      variants={fadeInUp}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, amount: 0.3 }}
      transition={{ delay }}
      className="group"
    >
      <Card className="overflow-hidden bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/30 transition-all duration-500 h-full">
        {/* Image Header */}
        <div className="relative h-64 overflow-hidden">
          <Image
            src={imageUrl || "/placeholder.svg"}
            alt={title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />

          {/* Floating Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: delay + 0.3 }}
            className="absolute top-4 left-4"
          >
            <span className="px-3 py-1 bg-primary/90 text-primary-foreground text-sm font-medium rounded-full backdrop-blur-sm">
              {role}
            </span>
          </motion.div>
        </div>

        <div className="p-6 space-y-6">
          {/* Title and Description */}
          <div className="space-y-3">
            <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">{title}</h3>
            <p className="text-muted-foreground leading-relaxed">{description}</p>
          </div>

          {/* Highlights */}
          <div className="space-y-3">
            <h4 className="text-sm font-semibold text-foreground uppercase tracking-wide">Key Features</h4>
            <ul className="space-y-2">
              {highlights.map((highlight, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: delay + 0.1 * index }}
                  className="flex items-start gap-2 text-sm text-muted-foreground"
                >
                  <ArrowRight size={16} className="text-primary mt-0.5 flex-shrink-0" />
                  {highlight}
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Outcomes */}
          <div className="space-y-3">
            <h4 className="text-sm font-semibold text-foreground uppercase tracking-wide">Impact</h4>
            <div className="flex flex-wrap gap-2">
              {outcomes.map((outcome, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: delay + 0.1 * index }}
                  className="px-3 py-1 bg-secondary/50 text-secondary-foreground text-xs rounded-full border border-border/50"
                >
                  {outcome}
                </motion.span>
              ))}
            </div>
          </div>

          {/* CTA Button */}
          <motion.div whileHover={hoverScale.whileHover} whileTap={hoverScale.whileTap}>
            <Button
              asChild
              variant="outline"
              className="w-full border-primary/50 text-foreground hover:bg-primary/10 group-hover:border-primary transition-all bg-transparent"
            >
              <a
                href={websiteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2"
              >
                Visit Company Website
                <ExternalLink size={16} />
              </a>
            </Button>
          </motion.div>
        </div>
      </Card>
    </motion.div>
  )
}

export function ProjectCards() {
  const projects = [
    {
      title: "Kyron Medical",
      role: "CEO & Founder",
      description:
        "AI voice agents for eligibility, benefits, claim status & denial follow-up; reducing admin burden for providers.",
      highlights: [
        "Automated insurance eligibility verification",
        "Real-time benefits inquiry processing",
        "Intelligent claim status tracking",
        "AI-powered denial management workflows",
      ],
      outcomes: [
        "100+ Companies Impacted",
        "50% Reduction in Admin Time",
        "Enterprise-Ready Platform",
        "HIPAA Compliant",
      ],
      imageUrl: "/abstract-ai-neural-network-medical-technology.jpg",
      websiteUrl: "https://kyronmedical.com",
    },
    {
      title: "Ainsley Advisory Group",
      role: "COO & Partner",
      description:
        "Advising health systems, providers, and healthcare technology startups on AI strategy and operational deployment.",
      highlights: [
        "AI strategy development for health systems",
        "Operational deployment consulting",
        "Healthcare technology assessment",
        "Provider workflow optimization",
      ],
      outcomes: ["Strategic Partnerships", "Operational Excellence", "Technology Integration", "Workflow Optimization"],
      imageUrl: "/healthcare-advisory-consulting.jpg",
      websiteUrl: "https://aagadvisory.com",
    },
  ]

  return (
    <section id="work" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">My Work</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Building the future of healthcare through AI-powered solutions that reduce administrative burden and improve
            patient outcomes.
          </p>
        </motion.div>

        {/* Project Grid */}
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
        >
          {projects.map((project, index) => (
            <ProjectCard key={project.title} {...project} delay={index * 0.2} />
          ))}
        </motion.div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="bg-secondary/20 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-foreground mb-4">Transforming Healthcare Operations</h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Through Kyron Medical and Ainsley Advisory Group, I'm working to eliminate the administrative friction
              that prevents healthcare providers from focusing on what matters most: patient care.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <span className="px-4 py-2 bg-primary/10 text-primary rounded-full border border-primary/20">
                Voice AI Technology
              </span>
              <span className="px-4 py-2 bg-primary/10 text-primary rounded-full border border-primary/20">
                Revenue Cycle Management
              </span>
              <span className="px-4 py-2 bg-primary/10 text-primary rounded-full border border-primary/20">
                Healthcare Strategy
              </span>
              <span className="px-4 py-2 bg-primary/10 text-primary rounded-full border border-primary/20">
                Operational Excellence
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
