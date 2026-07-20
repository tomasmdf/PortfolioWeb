import { portfolioData } from "../../data/content";
import SectionWrapper from "../layout/SectionWrapper";
import PrimaryButton from "../ui/PrimaryButton";

export default function ContactSection() {
  return (
    <SectionWrapper>
      <h4 className="text-section-label text-text-muted mb-4 tracking-widest uppercase">{portfolioData.contact.title}</h4>
      <p className="text-text-muted mb-6">{portfolioData.contact.description}</p>
      <PrimaryButton text="Send Email" onClick={() => window.location.href = `mailto:${portfolioData.contact.email}`} />
    </SectionWrapper>
  )
}