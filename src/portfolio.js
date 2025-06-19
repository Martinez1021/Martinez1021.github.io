/* Cambia este archivo para personalizar tu Portfolio */

// Cambiar colores globales en _globalColor.scss

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation";

// Pantalla de presentación

const splashScreen = {
  enabled: true,
  animation: splashAnimation,
  duration: 2000
};

// Ilustración (animada o estática)

const illustration = {
  animated: true
};

// Saludo principal

const greeting = {
  username: "Ernesto Martínez Magraner",
  title: "Hola a todos, soy Ernesto Martínez",
  subTitle: emoji(
    "💻 Desarrollador Full Stack apasionado 🚀 con experiencia en la creación de aplicaciones web y móviles utilizando JavaScript, ReactJS, NodeJS y otras tecnologías modernas."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1ofFdKF_mqscH8WvXkSObnVvC9kK7Ldlu/view?usp=sharing",
  displayGreeting: true
};

// Redes sociales

const socialMediaLinks = {
  github: "https://github.com/Martinez1021",
  linkedin: "https://www.linkedin.com/in/ernesto-martínez-magraner-84714231a/",
  gmail: "martineztito717@gmail.com",
  display: true
};

// Habilidades

const skillsSection = {
  title: "Lo que hago",
  subTitle: "DESARROLLADOR FULL STACK APASIONADO POR EXPLORAR NUEVAS TECNOLOGÍAS",
  skills: [
    emoji("⚡ Desarrollo de interfaces de usuario modernas para aplicaciones web y móviles."),
    emoji("⚡ Creación de Aplicaciones Web Progresivas (PWA), tanto tradicionales como SPA."),
    emoji("⚡ Integración de APIs y servicios como Firebase, AWS y Digital Ocean.")
  ],
  softwareSkills: [
    {
      skillName: "HTML5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "CSS3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "ReactJS",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "NodeJS",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "Firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "SQL",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "Python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "Git",
      fontAwesomeClassname: "fab fa-git-alt"
    },
    {
      skillName: "NPM",
      fontAwesomeClassname: "fab fa-npm"
    }
  ],
  display: true
};

// Formación académica

const educationInfo = {
  display: true,
  schools: [
    {
      schoolName: "Florida Universitaria",
      logo: require("./assets/images/Florida.jpg"),
      subHeader: "Grado Medio en Sistemas Microinformáticos y Redes",
      duration: "Septiembre 2022 - Junio 2024",
      desc: "Graduado con una nota media de 8,27"
    },
    {
      schoolName: "Florida Universitaria",
      logo: require("./assets/images/Florida.jpg"),
      subHeader: "Grado Superior en Desarrollo de Aplicaciones Multiplataforma (DAM)",
      duration: "Septiembre 2024 - Junio 2026"
    }
  ]
};

// Tecnologías dominadas

const techStack = {
  viewSkillBars: true,
  experience: [
    {
      Stack: "Frontend / Diseño",
      progressPercentage: "90%"
    },
    {
      Stack: "Backend",
      progressPercentage: "60%"
    },
    {
      Stack: "Programación general",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false
};

// Experiencia laboral (puedes agregar prácticas futuras)

const workExperiences = {
  display: false,
  experience: []
};

// Repositorios destacados en GitHub

const openSource = {
  showGithubProfile: "true",
  display: true
};

// Proyectos grandes

const bigProjects = {
  title: "Proyectos personales",
  subtitle: "Proyectos académicos o personales en los que he trabajado",
  projects: [
    {
      image: require("./assets/images/titanes.jpg"),
      projectName: "App de gestión de gimnasio",
      projectDesc: "Aplicación para la gestión de reservas de clases, cuotas y ecommerce para un Gimnasio.",
      footerLink: [
        {
          name: "Ver proyecto",
          url: "https://github.com/Martinez1021/ImperioTitanes-APP"
        }
      ]
    }
  ],
  display: true
};

// Certificados y logros

const achievementSection = {
  title: emoji("Logros y Certificados 🏆"),
  subtitle: "Certificaciones y logros obtenidos durante mi formación",
  achievementsCards: [
    {
      title: "Certificación PWA",
      subtitle: "Curso de desarrollo de aplicaciones web progresivas",
      image: require("./assets/images/pwaLogo.webp"),
      imageAlt: "PWA Logo",
      footerLink: [
        { name: "Certificado", url: "https://tu-certificado.com" }
      ]
    }
  ],
  display: true
};

// Blogs

const blogSection = {
  title: "Blogs",
  subtitle: "Escribo sobre desarrollo, tecnología y aprendizaje continuo.",
  displayMediumBlogs: "false",
  blogs: [
    {
      url: "https://medium.com/@tuusuario/articulo-ejemplo",
      title: "Mi primer blog sobre ReactJS",
      description: "Introducción a ReactJS desde el punto de vista de un estudiante de DAM."
    }
  ],
  display: false
};

// Charlas y ponencias

const talkSection = {
  title: "Charlas",
  subtitle: emoji("¡Me gusta compartir lo que aprendo y participar en eventos! 🎤"),
  talks: [],
  display: false
};

// Podcast

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "Compartiendo mi experiencia aprendiendo desarrollo",
  podcast: [],
  display: false
};

// Currículum

const resumeSection = {
  title: "Currículum",
  subtitle: "Descarga mi currículum actualizado",
  display: true
};

// Contacto

const contactInfo = {
  title: emoji("Contáctame ☎️"),
  subtitle: "¿Tienes un proyecto o simplemente quieres saludar? ¡Estoy disponible!",
  number: "",
  email_address: "martineztito717@gmail.com"
};

// Twitter (opcional)

const twitterDetails = {
  userName: "tu_usuario", // Sin @
  display: false
};

// Estado de contratación

const isHireable = false;

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
