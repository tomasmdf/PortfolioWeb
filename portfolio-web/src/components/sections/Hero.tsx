import { portfolioData } from "../../data/content";
import SectionWrapper from "../layout/SectionWrapper";

export default function Hero() {
  return (
    <SectionWrapper className="gap-8 mt-10">
        <div>
          <div className="flex flex-row items-center gap-2 mb-4">
            <span className="w-2 h-2 bg-green-600 rounded-full animate-pulse "></span>
            <h4 className="text-skill text-text-muted uppercase tracking-widest">Avaliable for work</h4>
          </div>
          <h1 className="text-hero font-heading leading-none ">{portfolioData.hero.title}</h1>
        </div>
        <h3 className="text-body text-text-secondary">{portfolioData.hero.description}</h3>
        <button className="w-max bg-text-primary text-background px-6 py-2.5 rounded-full flex items-center gap-2 hover:bg-color-primaryDark transition-colors tracking-widest uppercase text-small group cursor-pointer">
            <i className="bi bi-arrow-down-short text-sm group-hover:translate-y-1 duration-100 ease-in-out"></i>
            Download CV
        </button>
    </SectionWrapper>
  )
}
