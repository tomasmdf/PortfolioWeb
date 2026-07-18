export default function ProjectItem({ project }: { project: any }) {
  return (
    <div className="w-full h-max bg-background rounded-lg p-6 flex flex-row justify-center items-center gap-x-10 gap-y-3 flex-wrap duration-150">
        <div className="aspect-video bg-surface rounded-lg mb-4">
            <img src={project.imgUrl} alt={project.title} className="w-full h-full object-cover rounded-lg bg-center" />
        </div>
        <div>
            <div className="flex flex-wrap gap-x-3">
            {project.tags.map((tag: string, index: number) => (
                <span key={index} className="w-max text-text-muted text-extra-small uppercase tracking-wide font-semibold">
                    {tag}
                </span>
                ))}
            </div>
            <h3 className="text-project font-semibold mb-3">{project.title}</h3>
            <p className="text-text-secondary text-body">{project.description}</p>
        </div>
    </div>
  )
}
