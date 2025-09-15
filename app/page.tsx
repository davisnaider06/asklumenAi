"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ThemeToggle } from "@/components/theme-toggle"
import { ContactForm } from "@/components/contact-form"
import {
  ArrowRight,
  Globe,
  Users,
  TrendingUp,
  Brain,
  Target,
  Star,
  ChevronRight,
  Mail,
  Phone,
  Download,
} from "lucide-react"
import Image from "next/image"

export default function HomePage() {
  const [isContactFormOpen, setIsContactFormOpen] = useState(false)

  const handleContactClick = () => {
    const whatsappUrl = `https://wa.me/919303215072?text=${encodeURIComponent("Hello! I'm interested in learning more about AskLumen.ai investment opportunities.")}`
    window.open(whatsappUrl, "_blank")
  }

  const handlePitchDeckDownload = () => {
    const link = document.createElement("a")
    link.href = "/Asklumenai-pitchdeck.pdf"
    link.download = "AskLumenai-pitchdeck.pdf"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <div className="min-h-screen bg-background relative">
      <video
      autoPlay
      muted
      loop
      playsInline
      className="fixed inset-0 w-full h-full object-cover z-0"
      src="/background-video.mp4"
      />

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <Brain className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="font-mono text-xl font-bold text-foreground">AskLumen.ai</span>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a href="#about" className="text-muted-foreground hover:text-foreground transition-colors">
              About
            </a>
            <a href="#platform" className="text-muted-foreground hover:text-foreground transition-colors">
              Platform
            </a>
            <a href="#market" className="text-muted-foreground hover:text-foreground transition-colors">
              Market
            </a>
            <a href="#team" className="text-muted-foreground hover:text-foreground transition-colors">
              Team
            </a>
            <ThemeToggle />
            <Button onClick={handleContactClick} className="bg-primary hover:bg-primary/90">
              Contact Us
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden z-10">
        <div className="relative z-10 container mx-auto px-4 text-center">
          <Badge className="mb-6 bg-accent/20 text-accent-foreground border-accent/30">
            Seed Round Open - $1M Target
          </Badge>
          <h1 className="font-mono text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 text-balance">
            Join Us in Building the <span className="text-accent">Future of Learning</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-4xl mx-auto text-pretty">
            "AskLumen.ai isn't just a product — it's the foundation for how humans learn and work in the AI age"
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button
              onClick={handlePitchDeckDownload}
              size="lg"
              className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-4 text-lg"
            >
              View Investment Deck
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button
              onClick={() => setIsContactFormOpen(true)}
              size="lg"
              variant="outline"
              className="border-white/30 text-white hover:bg-white/10 px-8 py-4 text-lg bg-transparent"
            >
              Schedule Demo
            </Button>
          </div>
          <p className="text-white/80 text-lg font-medium">Ready to turn this trillion-dollar vision into reality?</p>
        </div>
      </section>

      {/* The Big Problem & Vision */}
      <section className="py-20 relative z-10 bg-background/80 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-mono text-3xl md:text-4xl font-bold text-foreground mb-6">
                The Problem: Outdated Systems in an AI World
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                AI is reshaping the world, yet current systems are outdated, fragmented, and not built for the future.
                Students, professionals, and creators struggle with inefficient tools, static learning, and siloed
                platforms. Traditional operating systems were never designed for AI, AR/VR immersion, adaptive
                intelligence, or global collaboration — leaving a massive gap in productivity, skill-building, and
                innovation.
              </p>
            </div>
            <div className="bg-primary/5 border border-primary/20 rounded-lg p-8">
              <h2 className="font-mono text-3xl md:text-4xl font-bold text-primary mb-6">The Solution: An AI-Native OS</h2>
              <p className="text-lg text-primary/90 leading-relaxed">
                We’re creating the world’s first AI-native OS that unifies education, work, and innovation into one
                seamless ecosystem. This isn’t just another product; it’s a new infrastructure layer for the digital
                world that redefines how billions of people will live, learn, and create in the AI-first era.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Statement */}
      <section className="py-20 relative z-10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-mono text-3xl md:text-4xl font-bold text-card-foreground mb-6">
              The Learning & Productivity Crisis
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Current educational and productivity ecosystems face critical shortcomings
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-destructive/20">
              <CardHeader>
                <CardTitle className="text-destructive flex items-center gap-2">
                  <Target className="w-6 h-6" />
                  Fragmented Tools
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold text-destructive mb-2">2.5 billion</p>
                <p className="text-muted-foreground">
                  students and professionals struggle with numerical learning tools that exist in isolation
                </p>
              </CardContent>
            </Card>

            <Card className="border-destructive/20">
              <CardHeader>
                <CardTitle className="text-destructive flex items-center gap-2">
                  <TrendingUp className="w-6 h-6" />
                  Wasted Investment
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold text-destructive mb-2">$494 billion</p>
                <p className="text-muted-foreground">
                  wasted annually on ineffective training programmes that fail to deliver measurable results
                </p>
              </CardContent>
            </Card>

            <Card className="border-destructive/20">
              <CardHeader>
                <CardTitle className="text-destructive flex items-center gap-2">
                  <Users className="w-6 h-6" />
                  Poor Retention
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold text-destructive mb-2">87%</p>
                <p className="text-muted-foreground">
                  of learners report difficulty retaining information from traditional methods, creating significant
                  knowledge gaps
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Solution Overview */}
      <section id="about" className="py-20 relative z-10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-mono text-3xl md:text-4xl font-bold text-foreground mb-6">Experience AskLumen.ai</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">Your Adaptive AI Learning Companion</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card className="text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Brain className="w-8 h-8 text-primary" />
                </div>
                <CardTitle>AI Mentor Interaction</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Personalized real-time mentoring via chat, audio, video, and visual generation that evolves with your
                  learning journey
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="w-8 h-8 text-accent" />
                </div>
                <CardTitle>Gamified Learning Journey</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Badges, leaderboards, and challenges that boost retention by 75% and maintain continuous engagement
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Globe className="w-8 h-8 text-secondary" />
                </div>
                <CardTitle>AR Learning Environment</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Interactive 3D learning environments that transform abstract concepts into tangible experiences
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <Card className="inline-block bg-primary/5 border-primary/20">
              <CardContent className="p-8">
                <p className="text-2xl font-bold text-primary mb-2">
                  "Students achieve 3x faster skill acquisition with 85% retention rate"
                </p>
                <p className="text-muted-foreground">Scan QR code for full interactive demo</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Platform Strategy */}
      <section id="platform" className="py-20 relative z-10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-mono text-3xl md:text-4xl font-bold text-card-foreground mb-6">
              AskLumen OS: The Future Operating System
            </h2>
            <p className="text-xl text-accent mb-4">"The Windows of the AI Era" - a platform for 1B+ users</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <Badge className="w-fit mb-2">Phase 1</Badge>
                <CardTitle>Learning Platform</CardTitle>
                <CardDescription>Our current focus: Building the core AI learning capabilities</CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <Badge variant="outline" className="w-fit mb-2">
                  Phase 2
                </Badge>
                <CardTitle>Productivity Suite</CardTitle>
                <CardDescription>Expanding to workplace tools and creative workflows</CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <Badge variant="outline" className="w-fit mb-2">
                  Phase 3
                </Badge>
                <CardTitle>Complete AI OS</CardTitle>
                <CardDescription>Full operating system unifying all digital experiences</CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Market Opportunity */}
      <section id="market" className="py-20 relative z-10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-mono text-3xl md:text-4xl font-bold text-foreground mb-6">Massive & Growing Market</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card className="text-center">
              <CardHeader>
                <CardTitle className="text-4xl font-bold text-primary mb-2">$528B</CardTitle>
                <CardDescription className="text-lg">Total Addressable Market</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">AI software market growing to £1.8 trillion by 2030</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <CardTitle className="text-4xl font-bold text-accent mb-2">$178B</CardTitle>
                <CardDescription className="text-lg">Serviceable Available Market</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Combined EdTech ($87B) and productivity software ($45B) markets</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <CardTitle className="text-4xl font-bold text-secondary mb-2">$3.1B</CardTitle>
                <CardDescription className="text-lg">Serviceable Obtainable Market</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Our realistic capture potential in the next 5 years</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Revenue Model */}
      <section className="py-20 relative z-10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-mono text-3xl md:text-4xl font-bold text-card-foreground mb-6">
              Path to $100M+ Revenue
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-card-foreground mb-6">Key Metrics</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center p-4 bg-background rounded-lg">
                  <span className="font-medium">ARPU</span>
                  <span className="font-bold text-primary">$27.50</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-background rounded-lg">
                  <span className="font-medium">Monthly Churn</span>
                  <span className="font-bold text-accent">6%</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-background rounded-lg">
                  <span className="font-medium">LTV/CAC</span>
                  <span className="font-bold text-secondary">4.2x</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-background rounded-lg">
                  <span className="font-medium">Gross Margin</span>
                  <span className="font-bold text-primary">87%</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-background rounded-lg">
                  <span className="font-medium">Break-even</span>
                  <span className="font-bold text-accent">Month 18</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-background rounded-lg">
                  <span className="font-medium">Profitability</span>
                  <span className="font-bold text-secondary">Year 2</span>
                </div>
              </div>
            </div>

            <div>
              <p className="text-muted-foreground mb-8">
                Our financial model shows strong unit economics with premium users converting at 7.5% from freemium.
                Revenue diversity increases stability, with enterprise contracts accounting for 45% of revenue by Year
                3. AI OS licensing represents our highest-margin revenue stream with projected 92% gross margins at
                scale.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Investment Opportunity */}
      <section className="py-20 relative z-10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-mono text-3xl md:text-4xl font-bold text-foreground mb-6">
              $1M Seed Round to Capture the AI OS Opportunity
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <Card>
              <CardHeader>
                <CardTitle>Use of Funds</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-4 h-4 bg-primary rounded-full"></div>
                    <span className="font-medium">Product Development</span>
                    <span className="ml-auto text-muted-foreground">60%</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-4 h-4 bg-destructive rounded-full"></div>
                    <span className="font-medium">Team Expansion</span>
                    <span className="ml-auto text-muted-foreground">25%</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-4 h-4 bg-accent rounded-full"></div>
                    <span className="font-medium">Marketing</span>
                    <span className="ml-auto text-muted-foreground">15%</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Key Milestones</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <Badge className="bg-primary">Q0</Badge>
                    <div>
                      <p className="font-medium">MVP Launch with core AI features</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Badge variant="outline">Q1 2025</Badge>
                    <div>
                      <p className="font-medium">50K active users, 5K paying</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Badge variant="outline">Q2 2026</Badge>
                    <div>
                      <p className="font-medium">3 enterprise partnerships signed</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Badge variant="outline">Q3 2026</Badge>
                    <div>
                      <p className="font-medium">Series A (£20M+ valuation)</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Badge variant="outline">Q4 2028</Badge>
                    <div>
                      <p className="font-medium">Global expansion with the launch of the OS</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Team */}
      <section id="team" className="py-20 relative z-10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-mono text-3xl md:text-4xl font-bold text-card-foreground mb-6">
              Founders Built for This Mission
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            <Card>
              <CardContent className="p-8 text-center">
                <div className="w-32 h-32 rounded-full mx-auto mb-6 overflow-hidden">
                  <Image
                    src="/venkatesh-mishra-founder.jpg"
                    alt="Venkatesh Mishra - CEO & Founder"
                    width={128}
                    height={128}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-2xl font-bold text-card-foreground mb-2">Venkatesh Mishra</h3>
                <p className="text-accent font-medium mb-4">CEO & Founder</p>
                <p className="text-muted-foreground">
                  Venkatesh Mishra, founder of AskLumen.ai. I'm building the platform that makes every other AI obsolete
                  — the future operating system of humanity.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-8 text-center">
                <div className="w-32 h-32 rounded-full mx-auto mb-6 overflow-hidden">
                  <Image
                    src="/taiman-aamir-founder.jpg"
                    alt="Taiman Aamir - COO & Co-Founder"
                    width={128}
                    height={128}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-2xl font-bold text-card-foreground mb-2">Taiman Aamir</h3>
                <p className="text-secondary font-medium mb-4">COO & Co-Founder</p>
                <p className="text-muted-foreground">
                  Co-Founder of AskLumen.ai. My focus is building the systems and scale to transform fragmented AI tools
                  into a single operating system of intelligence.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <h4 className="text-xl font-bold text-card-foreground mb-2">Key Advisor:</h4>
            <p className="text-muted-foreground">Sarthak Pandey</p>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-20 relative z-10">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-mono text-3xl md:text-4xl font-bold text-foreground mb-6">Ready to Join the Future?</h2>
          <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
            Connect with us to learn more about investment opportunities and partnership possibilities.
          </p>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-12">
            <Card className="text-center">
              <CardContent className="p-6">
                <Mail className="w-8 h-8 text-primary mx-auto mb-4" />
                <p className="font-medium text-foreground">Email</p>
                <p className="text-muted-foreground">venkatesh.mishra@alumni.com</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-6">
                <Phone className="w-8 h-8 text-accent mx-auto mb-4" />
                <p className="font-medium text-foreground">Phone</p>
                <p className="text-muted-foreground">+91 93032 15072</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-6">
                <Globe className="w-8 h-8 text-secondary mx-auto mb-4" />
                <p className="font-medium text-foreground">Website</p>
                <p className="text-muted-foreground">www.asklumen.ai (Coming soon)</p>
              </CardContent>
            </Card>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={() => setIsContactFormOpen(true)}
              size="lg"
              className="bg-primary hover:bg-primary/90 px-8 py-4 text-lg"
            >
              Schedule Investment Call
              <ChevronRight className="ml-2 w-5 h-5" />
            </Button>
            <Button
              onClick={handlePitchDeckDownload}
              size="lg"
              variant="outline"
              className="px-8 py-4 text-lg bg-transparent"
            >
              Download Pitch Deck
              <Download className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-border relative z-10">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <Brain className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="font-mono text-xl font-bold text-card-foreground">AskLumen.ai</span>
            </div>
            <p className="text-muted-foreground text-center md:text-right">
              © 2025 AskLumen.ai. Building the World's First AI-Native Learning & Productivity Ecosystem.
            </p>
          </div>
        </div>
      </footer>

      <ContactForm isOpen={isContactFormOpen} onClose={() => setIsContactFormOpen(false)} />
    </div>
  )
}
