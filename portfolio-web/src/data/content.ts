export const portfolioData = {
  hero: {
    // Título gigante en tipografía Serif
    title: "Hi, I'm Tomas De Faveri, i'm based in Argentina.", 
    // Párrafo de introducción en tipografía Sans-serif
    description: "Developer and student at UNCuyo. Passionate about building scalable applications, complex data architectures, and exploring formal logic applied to systems engineering.",
    resumeUrl: "/cv-tomas.pdf", // Ruta a tu PDF en la carpeta public
  },

  projects: [
    {
      id: "01",
      iconUrl: "https://fluentdeck.vercel.app/emoji/webp/animated/sun_behind_large_cloud_animated.webp",
      imgUrl: "/project-1.png", // Ruta a la imagen en la carpeta public
      title: "Weather App",
      category: "Web & Mobile Development",
      tags: ["React", "JavaScript", "ThreeJs", "React Three Fiber"],
      description: "Design and development of a mobile application for a mechanical workshop. Includes complete modules for registering new vehicles, service catalogs, and tracking the details of work orders.",
      link: "https://github.com/tu-usuario/repo-taller" // Opcional
    },
    {
      id: "02",
      iconUrl: "https://fluentdeck.vercel.app/emoji/webp/3D/magic_wand_3d.webp",
      imgUrl: "/project-1.png", 
      title: "Trie Vizualizer",
      category: "Algorithms & Data Structures",
      tags: ["Data Structures", "JavaScript", "React", "React Flow"],
      description: "Interactive visualization of a Trie data structure, allowing users to insert, search, and delete words while observing the underlying structure and operations in real-time.",
      link: "" 
    },
  ],

  skills: [
    // El diseño de la imagen usa "píldoras" (tags), esta lista plana es ideal para eso
    "React",
    "React Native", 
    "TypeScript", 
    "ThreeJs", 
    "Docker",  
    "React Three Fiber", 
    "Git", 
    "Data Structures", 
    "UI/UX Design",
    "Tailwind CSS",
  ],

  education: [
    {
      degree: "Licenciatura en Ciencias de la Computación",
      institution: "Universidad Nacional de Cuyo",
      year: "2023 - Now"
    }
  ],

  contact: {
    title: "Get in Touch",
    description: "Feel free to reach out for collaborations or just a friendly chat. I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.",
    email: "defaveritomas@gmail.com",
    socials: [
      {
        name: "LinkedIn",
        url: "https://linkedin.com/in/tomasmdf",
      },
      {
        name: "GitHub",
        url: "https://github.com/tomasmdf",
      }
    ]
  },

  footer: {
    email: "tu-correo@gmail.com",
    socials: [
      {
        name: "LinkedIn",
        url: "https://linkedin.com/in/tu-perfil",
      },
      {
        name: "GitHub",
        url: "https://github.com/tomasmdf",
      }
    ],
    copyright: "© 2026. All rights reserved."
  }
};