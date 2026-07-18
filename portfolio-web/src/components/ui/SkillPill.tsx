
export default function SkillPill({ skill }: { skill: string }) {
  return (
    <span className="w-max bg-surface text-text-secondary border border-text-muted px-3 py-1 rounded-full text-skill">
      {skill}
    </span>
  )
}
