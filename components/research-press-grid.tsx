"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, FileText, Award, Users } from "lucide-react"
import { fadeInUp, staggerContainer } from "@/lib/motion"

const researchPapers = [
  {
    title: "AI-Driven Predictive Analytics in Emergency Medicine",
    journal: "Journal of Medical AI",
    year: "2024",
    type: "Research Paper",
    description: "Novel machine learning approaches for predicting patient outcomes in emergency departments.",
    link: "#",
    impact: "Cited 47 times",
  },
  {
    title: "Blockchain Applications in Healthcare Data Security",
    journal: "Healthcare Technology Review",
    year: "2023",
    type: "Research Paper",
    description: "Comprehensive analysis of blockchain implementation for secure medical data management.",
    link: "#",
    impact: "Featured Article",
  },
  {
    title: "The Future of Telemedicine: Post-Pandemic Insights",
    journal: "Digital Health Quarterly",
    year: "2023",
    type: "Review Article",
    description: "Analysis of telemedicine adoption trends and future healthcare delivery models.",
    link: "#",
    impact: "Editor's Choice",
  },
]

const pressArticles = [
  {
    title: "Young Entrepreneur Revolutionizes Healthcare AI",
    publication: "Boston Globe",
    date: "March 2024",
    type: "Feature Story",
    description: "Profile on Jay Gopal's journey from Brown University to founding Kyron Medical.",
    link: "#",
    image: "/boston-globe-logo.jpg",
  },
  {
    title: "The Next Generation of Medical Technology Leaders",
    publication: "NBC10 Boston",
    date: "February 2024",
    type: "TV Interview",
    description: "Discussion on AI innovation in healthcare and entrepreneurship.",
    link: "#",
    image: "/nbc10-news-logo.jpg",
  },
  {
    title: "Brown Alumni Making Waves in Healthcare Tech",
    publication: "Brown Daily Herald",
    date: "January 2024",
    type: "Alumni Spotlight",
    description: "Feature on successful Brown graduates in the healthcare technology sector.",
    link: "#",
    image: "/brown-daily-herald-logo.jpg",
  },
  {
    title: "Rising Stars in Digital Health Innovation",
    publication: "American Heart Association News",
    date: "December 2023",
    type: "Industry Recognition",
    description: "Recognition for contributions to cardiovascular health technology.",
    link: "#",
    image: "/american-heart-association-logo.jpg",
  },
]

export function ResearchPressGrid() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="space-y-16"
        >
          {/* Section Header */}
          <motion.div variants={fadeInUp} className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground text-balance">Research & Press</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              Published research, media coverage, and thought leadership in healthcare AI and medical technology
              innovation.
            </p>
          </motion.div>

          {/* Research Papers Section */}
          <motion.div variants={fadeInUp} className="space-y-8">
            <div className="flex items-center gap-3">
              <FileText className="h-6 w-6 text-primary" />
              <h3 className="text-2xl font-semibold text-foreground">Published Research</h3>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {researchPapers.map((paper, index) => (
                <motion.div key={index} variants={fadeInUp} whileHover={{ y: -5 }} transition={{ duration: 0.2 }}>
                  <Card className="h-full border-border/50 bg-card/50 backdrop-blur-sm hover:border-primary/20 transition-colors">
                    <CardContent className="p-6 space-y-4">
                      <div className="space-y-2">
                        <Badge variant="secondary" className="text-xs">
                          {paper.type}
                        </Badge>
                        <h4 className="font-semibold text-foreground leading-tight text-balance">{paper.title}</h4>
                      </div>

                      <div className="space-y-2 text-sm text-muted-foreground">
                        <p className="font-medium">
                          {paper.journal} • {paper.year}
                        </p>
                        <p className="text-pretty">{paper.description}</p>
                      </div>

                      <div className="flex items-center justify-between pt-2">
                        <Badge variant="outline" className="text-xs">
                          <Award className="h-3 w-3 mr-1" />
                          {paper.impact}
                        </Badge>
                        <motion.a
                          href={paper.link}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="text-primary hover:text-primary/80 transition-colors"
                        >
                          <ExternalLink className="h-4 w-4" />
                        </motion.a>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Press Coverage Section */}
          <motion.div variants={fadeInUp} className="space-y-8">
            <div className="flex items-center gap-3">
              <Users className="h-6 w-6 text-primary" />
              <h3 className="text-2xl font-semibold text-foreground">Press Coverage</h3>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {pressArticles.map((article, index) => (
                <motion.div key={index} variants={fadeInUp} whileHover={{ y: -5 }} transition={{ duration: 0.2 }}>
                  <Card className="h-full border-border/50 bg-card/50 backdrop-blur-sm hover:border-primary/20 transition-colors">
                    <CardContent className="p-6 space-y-4">
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0">
                          <img
                            src={article.image || "/placeholder.svg"}
                            alt={article.publication}
                            className="w-12 h-12 rounded-lg object-cover"
                          />
                        </div>
                        <div className="space-y-2 flex-1">
                          <Badge variant="secondary" className="text-xs">
                            {article.type}
                          </Badge>
                          <h4 className="font-semibold text-foreground leading-tight text-balance">{article.title}</h4>
                        </div>
                      </div>

                      <div className="space-y-2 text-sm text-muted-foreground">
                        <p className="font-medium">
                          {article.publication} • {article.date}
                        </p>
                        <p className="text-pretty">{article.description}</p>
                      </div>

                      <div className="flex justify-end pt-2">
                        <motion.a
                          href={article.link}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="text-primary hover:text-primary/80 transition-colors"
                        >
                          <ExternalLink className="h-4 w-4" />
                        </motion.a>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
