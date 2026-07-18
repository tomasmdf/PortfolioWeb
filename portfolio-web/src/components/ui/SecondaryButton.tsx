export default function SecondaryButton({ text, onClick }: { text: string; onClick: () => void }) {
  return (
    <button onClick={onClick} className="bg-surface text-text-primary hover:bg-text-primary transition-colors duration-100 px-4 py-2 rounded-full text-small border-0 outline-none">
      {text}
    </button>
  )
}
