export const portfolioData = {
  hero: {
    // Título gigante en tipografía Serif
    title: "Hi, I'm Tomas De Faveri, i'm based in Argentina.", 
    // Párrafo de introducción en tipografía Sans-serif
    description: "Desarrollador y estudiante en la UNCuyo. Apasionado por construir aplicaciones escalables, arquitecturas de datos complejas y explorar la lógica formal aplicada a la ingeniería de sistemas.",
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
      description: "Diseño y desarrollo de una aplicación móvil para un taller mecánico. Incluye módulos completos para el registro de nuevos vehículos, catálogos de servicios y seguimiento del detalle de las órdenes de trabajo.",
      link: "https://github.com/tu-usuario/repo-taller" // Opcional
    },
    {
      id: "02",
      iconUrl: "https://fluentdeck.vercel.app/emoji/webp/3D/microscope_3d.webp",
      imgUrl: "/project-1.png", 
      title: "Trie Vizualizer",
      category: "Algorithms & Data Structures",
      tags: ["Data Structures", "JavaScript", "React", "React Flow"],
      description: "Desarrollo de un visualizador interactivo para estructuras de datos Trie, permitiendo la representación gráfica y la exploración de sus propiedades.",
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