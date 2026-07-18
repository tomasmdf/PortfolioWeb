import { portfolioData } from "../../data/content";
import SectionWrapper from "../layout/SectionWrapper";

export default function Hero() {
  return (
    <SectionWrapper className="gap-8 mt-10">
        <div>
          <div className="flex flex-row items-center gap-2 mb-4">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
            <h4 className="text-skill text-text-muted font-semibold uppercase tracking-widest">Avaliable for work</h4>
          </div>
          <h1 className="text-hero font-bold leading-none">{portfolioData.hero.title}</h1>
        </div>
        <h3 className="text-body text-text-secondary">{portfolioData.hero.description}</h3>
        <button className="w-max bg-text-primary text-background px-6 py-2.5 rounded-full flex items-center gap-2 hover:bg-color-primaryDark transition-colors tracking-widest uppercase text-small">
            <i className="bi bi-download text-xs"></i>
            Download CV
        </button>
    </SectionWrapper>
  )
}
