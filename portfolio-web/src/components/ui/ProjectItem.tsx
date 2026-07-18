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
            <h3 className="text-subtitle font-semibold mb-1">{project.title}</h3>
            <p className="text-text-secondary text-body mb-4 text-wrap">{project.description}</p>
            <div className="flex flex-wrap gap-x-3">
            {project.tags.map((tag: string, index: number) => (
                <span key={index} className="w-max text-text-muted text-extra-small uppercase tracking-wide font-semibold">
                    {tag}
                </span>
                ))}
            </div>
        </div>
    </div>
  )
}
