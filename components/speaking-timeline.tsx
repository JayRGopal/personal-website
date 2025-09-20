"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin, Users, Mic } from "lucide-react"
import { fadeInUp, staggerContainer } from "@/lib/motion"

const speakingEvents = [
  {
    title: "The Future of AI in Healthcare",
    event: "MIT Healthcare Innovation Summit",
    date: "April 2024",
    location: "Cambridge, MA",
    type: "Keynote",
    audience: "500+ attendees",
    description:
      "Exploring the transformative potential of artificial intelligence in modern healthcare delivery and patient outcomes.",
    topics: ["AI in Medicine", "Healthcare Innovation", "Digital Transformation"],
    status: "upcoming",
  },
  {
    title: "Building Healthcare Startups: Lessons Learned",
    event: "Brown Entrepreneurship Conference",
    date: "March 2024",
    location: "Providence, RI",
    type: "Panel Discussion",
    audience: "300+ students",
    description: "Sharing insights on founding and scaling healthcare technology companies with fellow Brown alumni.",
    topics: ["Entrepreneurship", "Healthcare Tech", "Startup Strategy"],
    status: "completed",
  },
  {
    title: "Digital Health Innovation in Emergency Medicine",
    event: "American College of Emergency Physicians Annual Meeting",
    date: "October 2023",
    location: "Philadelphia, PA",
    type: "Technical Presentation",
    audience: "1000+ physicians",
    description: "Presenting research on AI-driven predictive analytics for emergency department optimization.",
    topics: ["Emergency Medicine", "Predictive Analytics", "Clinical AI"],
    status: "completed",
  },
  {
    title: "The Intersection of Technology and Patient Care",
    event: "Healthcare Technology Summit",
    date: "September 2023",
    location: "Boston, MA",
    type: "Fireside Chat",
    audience: "400+ professionals",
    description: "Discussion on balancing technological innovation with human-centered healthcare delivery.",
    topics: ["Patient Care", "Healthcare Technology", "Innovation"],
    status: "completed",
  },
  {
    title: "Young Leaders in Healthcare Innovation",
    event: "Forbes Under 30 Healthcare Summit",
    date: "June 2023",
    location: "New York, NY",
    type: "Panel Discussion",
    audience: "250+ leaders",
    description: "Joining fellow young innovators to discuss the future of healthcare technology and entrepreneurship.",
    topics: ["Leadership", "Innovation", "Healthcare Future"],
    status: "completed",
  },
]

export function SpeakingTimeline() {
  return (
    <section className="py-24 bg-muted/30">
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
            <h2 className="text-4xl md:text-5xl font-bold text-foreground text-balance">Speaking & Events</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              Sharing insights on healthcare AI, entrepreneurship, and medical technology innovation at conferences and
              events worldwide.
            </p>
          </motion.div>

          {/* Timeline */}
          <motion.div variants={fadeInUp} className="relative">
            {/* Timeline Line */}
            <div className="absolute left-4 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-px bg-border"></div>

            <div className="space-y-12">
              {speakingEvents.map((event, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  } flex-col md:gap-8`}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 w-3 h-3 bg-primary rounded-full border-4 border-background z-10"></div>

                  {/* Content Card */}
                  <div className={`w-full md:w-1/2 ml-12 md:ml-0 ${index % 2 === 0 ? "md:pr-8" : "md:pl-8"}`}>
                    <motion.div whileHover={{ y: -5 }} transition={{ duration: 0.2 }}>
                      <Card className="border-border/50 bg-card/80 backdrop-blur-sm hover:border-primary/20 transition-colors">
                        <CardContent className="p-6 space-y-4">
                          {/* Event Header */}
                          <div className="space-y-2">
                            <div className="flex items-center gap-2 flex-wrap">
                              <Badge
                                variant={event.status === "upcoming" ? "default" : "secondary"}
                                className="text-xs"
                              >
                                {event.status === "upcoming" ? "Upcoming" : "Completed"}
                              </Badge>
                              <Badge variant="outline" className="text-xs">
                                <Mic className="h-3 w-3 mr-1" />
                                {event.type}
                              </Badge>
                            </div>
                            <h3 className="text-xl font-semibold text-foreground text-balance">{event.title}</h3>
                            <p className="text-primary font-medium">{event.event}</p>
                          </div>

                          {/* Event Details */}
                          <div className="space-y-2 text-sm text-muted-foreground">
                            <div className="flex items-center gap-2">
                              <Calendar className="h-4 w-4" />
                              <span>{event.date}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <MapPin className="h-4 w-4" />
                              <span>{event.location}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <Users className="h-4 w-4" />
                              <span>{event.audience}</span>
                            </div>
                          </div>

                          {/* Description */}
                          <p className="text-muted-foreground text-pretty">{event.description}</p>

                          {/* Topics */}
                          <div className="flex flex-wrap gap-2">
                            {event.topics.map((topic, topicIndex) => (
                              <Badge key={topicIndex} variant="outline" className="text-xs">
                                {topic}
                              </Badge>
                            ))}
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Call to Action */}
          <motion.div variants={fadeInUp} className="text-center space-y-6">
            <div className="space-y-2">
              <h3 className="text-2xl font-semibold text-foreground">Interested in having me speak at your event?</h3>
              <p className="text-muted-foreground">
                I'm always excited to share insights on healthcare AI, entrepreneurship, and medical innovation.
              </p>
            </div>
            <a 
              href="https://www.linkedin.com/in/jay-gopal/" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors"
              >
                <Mic className="h-4 w-4" />
                Get in Touch
              </motion.button>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
