import SectionWrapper from '../layout/SectionWrapper'
import { portfolioData } from '../../data/content'
import ProjectItem from '../ui/ProjectItem'


export default function ProjectsSection() {
  return (
    <SectionWrapper>
        <h3 className="text-section-label text-text-muted mb-4 tracking-widest uppercase">PROJECTS</h3>
        <div className="flex flex-col gap-4">
            {
            portfolioData.projects.map((project, index) => (
                <ProjectItem key={index} project={project} />
            ))}   
        </div>
    </SectionWrapper>
  )
}
