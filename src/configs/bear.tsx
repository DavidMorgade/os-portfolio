import type { BearData } from "~/types";

const bear: BearData[] = [
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
      }
    ]
  }
];

export default bear;
