import React from "react";
import Project from "../layouts/Project";
import GitHubCalendar from "react-github-calendar";

import {
  projects,
  miscellaneous,
  section3Title,
  section4Title,
} from "../../profile";

const Works = () => {
  const colourTheme = {
    background: "transparent",
    text: "#ffffff",
    grade4: "#8400b8",
    grade3: "#b22ff4",
    grade2: "#b265f6",
    grade1: "#c084f5",
    grade0: "#ecd9fc",
  };
  return (
    <>
      <div data-aos="zoom-in-up" data-aos-once="true" className="third">
        <>
          <div className="pp-head-line mx-auto text-center">
            <h1 id="Projects" className="red-line pp-head">
              {section3Title}
            </h1>
          </div>
        </>
        <div className="row">
          {projects &&
            projects.map((x) => (
              <Project
                key={x.id}
                id={x.id}
                url={x.url}
                name={x.name}
                skills={x.skills}
              />
            ))}
        </div>
      </div>

      <div className="third">
        <>
          <div className="pp-head-line mx-auto text-center">
            <h1 id="Projects" className="red-line pp-head">
              {section4Title}
            </h1>
          </div>
        </>
        <div className="row">
          {miscellaneous &&
            miscellaneous.map((x) => (
              <Project key={x.id} id={x.id} url={x.url} name={x.name} />
            ))}
        </div>
      </div>
      <div className="third">
        <>
          <div className="pp-head-line mx-auto text-center">
            <h1 id="Projects" className="red-line pp-head">
              Days I Code
            </h1>
          </div>
        </>
        <div className="row">
          <GitHubCalendar
            username="surya-2811"
            blockSize={15}
            year={2021}
            blockMargin={5}
            theme={colourTheme}
            fontSize={16}
          />
        </div>
      </div>
    </>
  );
};

export default Works;
