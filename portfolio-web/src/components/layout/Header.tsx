import PrimaryButton from "../ui/PrimaryButton";
import SecondaryButton from "../ui/SecondaryButton";

export default function Header() {
  return (
    <header className="sticky w-full top-0 flex items-center justify-between p-4 bg-background text-text-primary z-50">
        <h1 className="text-body text-text-muted font-medium">t_mdf</h1>
        <div className="flex gap-4">
            <SecondaryButton text="Download CV" onClick={() => console.log("Download CV clicked")} />
            <PrimaryButton text="Send Email" onClick={() => console.log("Contact clicked")} />
        </div>
    </header>
  )
}
