import type { BearData } from "~/types";

const bearES: BearData[] = [
  {
    id: "profile",
    title: "Perfil",
    icon: "i-fa-solid:paw",
    md: [
      {
        id: "about-me",
        title: "Sobre Mi",
        file: "markdown/sobre-mi.md",
        icon: "i-la:dragon",
        excerpt: "Probablemente soy tu chico si buscas un desarrollador de software..."
      },
      {
        id: "github-stats",
        title: "Estadísticas de Github",
        file: "markdown/estadisticas-github.md",
        icon: "i-icon-park-outline:github",
        excerpt: "Aquí tienes algunas estadísticas sobre mi cuenta de github..."
      },
      {
        id: "about-site",
        title: "Sobre Este Sitio",
        file: "markdown/sobre-sitio.md",
        icon: "i-octicon:browser",
        excerpt: "Algo sobre este sitio web personal..."
      }
    ]
  },
  {
    id: "project",
    title: "Proyectos",
    icon: "i-octicon:repo",
    md: [
      {
        id: "url-shortener",
        title: "Acortador de URL",
        file: "https://raw.githubusercontent.com/DavidMorgade/urlshortener/main/readme.md",
        icon: "i-feather:link",
        excerpt: "Un simple acortador de URL construido con golang...",
        link: "https://github.com/DavidMorgade/urlshortener"
      },
      {
        id: "megapoly",
        title: "Megapoly",
        file: "https://raw.githubusercontent.com/DavidMorgade/megapoly/main/README.md",
        icon: "i-feather:package",
        excerpt: "Un clon de monopoly construido en Java usando Swing...",
        link: "https://github.com/DavidMorgade/megapoly"
      },
      {
        id: "whatsapp-bot",
        title: "Bot de Whatsapp",
        file: "https://raw.githubusercontent.com/DavidMorgade/whatsapp-leles/main/README.md",
        icon: "i-feather:message-circle",
        excerpt: "Un bot de whatsapp creado usando Golang",
        link: "https://github.com/DavidMorgade/whatsapp-leles"
      }
    ]
  }
];

const bearEN: BearData[] = [
  {
    id: "profile",
    title: "Profile",
    icon: "i-fa-solid:paw",
    md: [
      {
        id: "about-me",
        title: "About Me",
        file: "markdown/about-me.md",
        icon: "i-la:dragon",
        excerpt: "I'm probably your guy if you're looking for a software developer..."
      },
      {
        id: "github-stats",
        title: "Github Stats",
        file: "markdown/github-stats.md",
        icon: "i-icon-park-outline:github",
        excerpt: "Here are some status about my github account..."
      },
      {
        id: "about-site",
        title: "About This Site",
        file: "markdown/about-site.md",
        icon: "i-octicon:browser",
        excerpt: "Something about this personal portfolio site..."
      }
    ]
  },
  {
    id: "project",
    title: "Projects",
    icon: "i-octicon:repo",
    md: [
      {
        id: "url-shortener",
        title: "URL Shortener",
        file: "https://raw.githubusercontent.com/DavidMorgade/urlshortener/main/readme.md",
        icon: "i-feather:link",
        excerpt: "A simple URL shortener build with golang...",
        link: "https://github.com/DavidMorgade/urlshortener"
      },
      {
        id: "megapoly",
        title: "Megapoly",
        file: "https://raw.githubusercontent.com/DavidMorgade/megapoly/main/README.md",
        icon: "i-feather:package",
        excerpt: "A monopoly clone built in Java using Swing...",
        link: "https://github.com/DavidMorgade/megapoly"
      },
      {
        id: "whatsapp-bot",
        title: "Whatsapp Bot",
        file: "https://raw.githubusercontent.com/DavidMorgade/whatsapp-leles/main/README.md",
        icon: "i-feather:message-circle",
        excerpt: "A whatsapp bot created using Golang",
        link: "https://github.com/DavidMorgade/whatsapp-leles"
      }
    ]
  }
];

export { bearEN, bearES };
