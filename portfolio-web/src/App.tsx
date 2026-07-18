import './App.css'
import Header from './components/layout/Header'
import SectionWrapper from './components/layout/SectionWrapper'
import EducationSection from './components/sections/EducationSection'
import Hero from './components/sections/Hero'
import ProjectsSection from './components/sections/ProjectsSection'
import SkillsGrid from './components/sections/SkillsGrid'

function App() {

  return (
      <div className="bg-color-background text-text-primary min-h-screen w-3/6">
        <Header/>
        <Hero/>
        <ProjectsSection/>
        <SkillsGrid/>
        <EducationSection/>
        <SectionWrapper>
          <img src="https://framerusercontent.com/images/fmq54vhn9uNuvr2HWCxIuwBj6WA.webp?width=4200&height=2055" alt="" className="w-full h-full object-cover rounded-xl" />
        </SectionWrapper>

        <div 
          className="
            w-full
            sticky bottom-0 
            h-32 
            bg-linear-to-t from-background/70 to-transparent 
            backdrop-blur-md 
            mask-[linear-gradient(to_top,black,transparent)]
            z-10
          "
        />
      </div>
  )
}

export default App
