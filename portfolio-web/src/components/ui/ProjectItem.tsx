import CategoryBadge from "./CategoryBadge";
import SkillPill from "./SkillPill";

export default function ProjectItem({ project }: { project: any }) {
  return (
    <div className="w-full h-max p-4 bg-background rounded-xl flex flex-row items-center gap-x-4 gap-y-3 flex-wrap duration-150 hover:bg-surface group ">
        {/*
            <i className="bi bi-code px-6 py-5 bg-surface text-lg text-text-muted rounded-full border border-text-muted"></i>
        */}
        <i className="px-4 py-4 bg-surface text-2xl text-text-muted rounded-2xl group-hover:bg-background/70 duration-150 cursor-pointer">
            <img src={project.iconUrl} alt={project.title} className="w-10 h-10 object-cover rounded-full bg-center" />
        </i>
        <div>
            {/*
            <div className="flex flex-wrap gap-3 mb-3">
            {project.tags.map((tag: string, index: number) => ( 
                <SkillPill key={index} skill={tag} />
                ))
            }
            </div>
            */}
            <CategoryBadge category={project.category} />
            <h3 className="text-3xl font-heading mb-3">{project.title}</h3>
            <p className="text-text-secondary text-body mb-4 text-wrap">{project.description}</p>
        </div>
    </div>
  )
}

 {/* <span key={index} className="w-max bg-surface text-text-secondary border border-text-muted px-3 py-1 rounded-full text-skill">{tag}</span> */}