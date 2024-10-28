import type { TerminalData } from "~/types";

const terminal: TerminalData[] = [
  {
    id: "about",
    title: "about",
    type: "folder",
    children: [
      {
        id: "about-bio",
        title: "bio.txt",
        type: "file",
        content: (
          <div className="py-1">
            <div>
              Hello, my name's David Morgade, I'm a software developer from Spain. I'm
              currently working as a Microcomputer technician at the Spanish Navy.
            </div>
          </div>
        )
      },
      {
        id: "about-interests",
        title: "interests.txt",
        type: "file",
        content: "Full Stack Development / IA Development / Multimodal Learning"
      },
      {
        id: "about-who-cares",
        title: "who-cares.txt",
        type: "file",
        content:
          "I'm loogin for a job as a software developer, if you are interested in my profile, please contact me."
      },
      {
        id: "about-contact",
        title: "contact.txt",
        type: "file",
        content: (
          <ul className="list-disc ml-6">
            <li>
              Email:{" "}
              <a
                className="text-blue-300"
                href="mailto:davidmorgadegil@gmail.com"
                target="_blank"
                rel="noreferrer"
              >
                davidmorgadegil@gmail.com
              </a>
            </li>
            <li>
              Github:{" "}
              <a
                className="text-blue-300"
                href="https://github.com/DavidMorgade"
                target="_blank"
                rel="noreferrer"
              >
                @DavidMorgade
              </a>
            </li>
            <li>
              Linkedin:{" "}
              <a
                className="text-blue-300"
                href="https://www.linkedin.com/in/DavidMorgade"
                target="_blank"
                rel="noreferrer"
              >
                David Morgade
              </a>
            </li>
            <li>
              Personal Blog:{" "}
              <a
                className="text-blue-300"
                href="https://www.codigomorga.es/blog"
                target="_blank"
                rel="noreferrer"
              >
                https://www.codigomorga.es/blog
              </a>
            </li>
            <li>
              X :{" "}
              <a
                className="text-blue-300"
                href="https://x.com/MeSabeAgridulce"
                target="_blank"
                rel="noreferrer"
              >
                https://x.com/MeSabeAgridulce
              </a>
            </li>
          </ul>
        )
      }
    ]
  },
  {
    id: "about-dream",
    title: "my-dream.c",
    type: "file",
    content: (
      <div className="py-1">
        <div>
          <span className="text-yellow-400">while</span>(
          <span className="text-blue-400">sleeping</span>) <span>{"{"}</span>
        </div>
        <div>
          <span className="text-blue-400 ml-9">money</span>
          <span className="text-yellow-400">++</span>;
        </div>
        <div>
          <span>{"}"}</span>
        </div>
      </div>
    )
  }
];

export default terminal;
