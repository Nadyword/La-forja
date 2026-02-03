import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Transparency } from "@/components/transparency"
import { Services } from "@/components/services"
import { Benefits } from "@/components/benefits"
import { Pricing } from "@/components/pricing"
import { CTA } from "@/components/cta"
import { Feedback } from "@/components/feedback"
import { Footer } from "@/components/footer"
import { IntroAnimation } from "@/components/intro-animation"
import { WhatsAppButton } from "@/components/whatsapp-button"

export default function Home() {
  return (
    <>
      <IntroAnimation />
      <Header />
      <main>
        <Hero />
        <About />
        <Transparency />
        <Services />
        <Benefits />
        <Pricing />
        <Feedback />
        <CTA />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
