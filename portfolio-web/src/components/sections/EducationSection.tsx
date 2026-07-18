import SectionWrapper from "../layout/SectionWrapper";
import { portfolioData } from "../../data/content";


export default function SkillsGrid() {
  return (
    <SectionWrapper>
        <h3 className="text-section-label text-text-muted mb-4 tracking-widest uppercase">EDUCATION</h3>
        
        <div className="flex flex-col gap-4">
            {
            portfolioData.education.map((education, index) => (
                <div key={index} className="w-full h-max bg-background rounded-lg p-6 flex flex-row items-center gap-x-10 gap-y-3 flex-wrap duration-150">
                    <div>
                        <h4 className="text-extra-small font-semibold text-text-muted">{education.year}</h4>
                        <h3 className="text-subtitle font-semibold">{education.degree}</h3>
                        <p className="text-text-muted text-text-body">{education.institution}</p>
                    </div>
                </div>
            ))}
        </div>  
    </SectionWrapper>
  )
}