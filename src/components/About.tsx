import { useState } from "react";

const About = () => {
  const [tab, setTab] = useState<string>("skills");

  const onTabChange = (tab: string) => {
    setTab(tab);
  };
  return (
    <section id="about" className="about">
      <div className="mb-10">
        <h1 className="text-6xl xs:text-5xl text-center font-medium">
          About me
        </h1>
        {/* <img src="" alt="logo" /> */}
      </div>
      <div className="flex gap-10 xs:flex-col md:flex-row">
        <img
          className="about-img"
          src="./assets/about-image.jpg"
          alt="about-me"
        />
        <div className="flex flex-col gap-10">
          <div className="flex flex-col gap-5">
            <p className="w-full xs:text-lg">
              I am an experienced Frontend Developer with 4 years of
              professional experience in the field. Throughout my career, I have
              had the privilege of collaborating with prestigeious
              organizations, contributing to their success and growth.
            </p>
            <p className="w-full xs:text-lg">
              My passion for frontend development is not only reflected in my
              extensive experience but also in the enthusiasm and dedication I
              bring to each project.
            </p>
          </div>
          <div className="tabs">
            <div className="tab-buttons">
              <div id="tab-one" className="tab-one active">
                <button
                  onClick={() => onTabChange("skills")}
                  className="tab-button active"
                  data-tab="skills"
                >
                  Skills
                </button>
                <div className="tab-pane">
                  {tab === "skills" && (
                    <div className="flex">
                      <ul>
                        <li>JavaScript </li>
                        <li>TypeScript</li>
                        <li>ReactJS</li>
                        <li>NextJS</li>
                      </ul>
                      <ul className="ml-10">
                        <li>SpringBoot</li>
                        <li>NodeJS</li>
                        <li>MongoDB</li>
                        <li>MySQL</li>
                      </ul>
                    </div>
                  )}
                </div>
              </div>
              <div id="tab-two" className="tab-two">
                <button
                  className="tab-button"
                  onClick={() => onTabChange("certifications")}
                  data-tab="certifications"
                >
                  Certificates
                </button>
                <div id="tab2" className="tab-pane">
                  {tab === "certifications" && (
                    <ul>
                      <li>TypeScript for Professionals - by Basarat</li>
                      <li>The Complete React Testing Course - by Mosh</li>
                    </ul>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="achievements">
        <div className="achievement">
          <h1>4</h1>
          <p>YEARS OF EXPERIENCE</p>
        </div>
        <hr />
        <div className="achievement">
          <h1>5+</h1>
          <p>PROJECTS COMPLETED</p>
        </div>
        <hr />
        <div className="achievement">
          <h1>6+</h1>
          <p>HAPPY CLIENTS</p>
        </div>
      </div>
    </section>
  );
};

export default About;
