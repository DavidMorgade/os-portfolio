import { appBarHeight } from "~/utils";
import type { AppsData } from "~/types";

const apps: AppsData[] = [
  {
    id: "launchpad",
    title: "Launchpad",
    desktop: false,
    img: "img/icons/launchpad.png"
  },
  {
    id: "bear",
    title: "Bear",
    desktop: true,
    width: 860,
    height: 600,
    show: true,
    y: -40,
    img: "img/icons/bear.png",
    content: <Bear />
  },
  {
    id: "gmail",
    title: "Gmail",
    desktop: true,
    width: 860,
    height: 600,
    y: -20,
    x: 20,
    img: "img/icons/gmail.png",
    content: <Gmail />
  },
  {
    id: "openai",
    title: "AI Assistant",
    desktop: true,
    width: 860,
    height: 600,
    y: 0,
    x: 0,
    img: "img/icons/openai.png",
    content: <OpenAI />
  },
  {
    id: "vscode",
    title: "VSCode",
    desktop: true,
    width: 900,
    height: 600,
    y: 0,

    img: "img/icons/vscode.png",
    content: <VSCode />
  },
  {
    id: "safari",
    title: "Safari",
    desktop: true,
    width: 900,
    height: 600,
    x: 40,
    y: -20,
    img: "img/icons/safari.png",
    content: <Safari />
  },
  {
    id: "terminal",
    title: "Terminal",
    desktop: true,
    img: "img/icons/terminal.png",
    content: <Terminal />
  },
  {
    id: "github",
    title: "Github",
    desktop: false,
    img: "img/icons/github.png",
    link: "https://github.com/DavidMorgade"
  }
];

export default apps;
