import { Hero } from "../components/Hero"
import { Partners } from "../components/Partners"
import { About } from "../components/About"
import { Footer } from "../components/Footer"
import { CTA } from "../components/CTA"

export function Homepage() {

    return (
        <>
            <Hero />
            <Partners />
            <About />
            <CTA />
            <Footer />
        </>
    )
}