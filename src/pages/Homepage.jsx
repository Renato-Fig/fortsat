import { HeroSection } from "../components/HeroSection"
import { BlogSection } from "../components/BlogSection"
import { AboutSection } from "../components/AboutSection"
import { CompaniesSection } from "../components/CompaniesSection"
import { PartnersSection } from "../components/PartnersSection"
import { EcosystemSection } from "../components/EcosystemSection"
import { MetricsSection } from "../components/MetricsSection"
import { FooterSection } from "../components/FooterSection"

export function Homepage() {

    return (
        <>
            <HeroSection />
            <MetricsSection />
            <AboutSection />
            <CompaniesSection />
            <EcosystemSection />
            <PartnersSection />
            <BlogSection />
            <FooterSection />
        </>
    )
}