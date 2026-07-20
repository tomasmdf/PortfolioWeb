export default function SecondaryButton({ text, onClick }: { text: string; onClick: () => void }) {
  return (
    <button onClick={onClick} className="bg-surface text-text-primary px-4 py-2 rounded-full text-small border-0 outline-none transition-colors duration-100 hover:bg-button-secondary-hover cursor-pointer ">
      {text}
    </button>
  )
}
