import SectionWrapper from "../layout/SectionWrapper";
import { portfolioData } from "../../data/content";
import SkillPill from "../ui/SkillPill";


export default function SkillsGrid() {
  return (
    <SectionWrapper>
        <h3 className="text-section-label text-text-muted mb-4 tracking-widest uppercase">SKILLS</h3>
        <div className="flex flex-wrap gap-2">
            {
            portfolioData.skills.map((skill, index) => (
                <SkillPill key={index} skill={skill} />
            ))
            }
        </div>
    </SectionWrapper>
  )
}
