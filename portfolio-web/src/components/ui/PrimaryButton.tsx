export default function PrimaryButton({ text, onClick }: { text: string; onClick: () => void }) {
  return (
    <button onClick={onClick} className="w-max bg-text-primary text-surface px-4 py-2 rounded-full text-small border-0 outline-none transition-colors duration-100 hover:bg-color-button-primary-hover cursor-pointer ">
      {text}
    </button>
  )
}
