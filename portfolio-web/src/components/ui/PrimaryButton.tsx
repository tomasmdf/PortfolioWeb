export default function PrimaryButton({ text, onClick }: { text: string; onClick: () => void }) {
  return (
    <button onClick={onClick} className="w-max bg-text-primary text-surface hover:bg-text-secondary transition-colors duration-100 px-4 py-2 rounded-full text-small border-0 outline-none">
      {text}
    </button>
  )
}
