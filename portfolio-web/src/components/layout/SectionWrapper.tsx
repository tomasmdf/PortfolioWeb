interface SectionWrapperProps {
  children: React.ReactNode;
  className?: string; // Permite agregar clases extra si una sección específica lo necesita
  id?: string;        // Útil para la navegación (ej: id="projects" para scrollear hasta ahí)
}

export default function SectionWrapper({ 
  children, 
  className = '', 
  id 
}: SectionWrapperProps) {
  return (
    <section
      id={id}
      className={`w-full h-max flex flex-col mb-16 px-5 ${className}`}
    >
      {children}
    </section>
  );
}