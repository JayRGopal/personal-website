import { AnimatedNavbar } from "@/components/animated-navbar"
import { VideoHero } from "@/components/video-hero"
import { MetricCards } from "@/components/metric-cards"
import { LogoTicker } from "@/components/logo-ticker"
import { ProjectCards } from "@/components/project-cards"
import { SpeakingTimeline } from "@/components/speaking-timeline"
import { ScholarSection } from "@/components/scholar-section"

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background">
      <AnimatedNavbar />
      <VideoHero />
      <MetricCards />
      <LogoTicker />
      <ProjectCards />
      <ScholarSection />
      <SpeakingTimeline />
    </main>
  )
}
