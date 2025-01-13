import { FaCode } from "react-icons/fa";

const works = [
  {
    id: 1,
    img: "./assets/project-one.jpeg",
    link: "https://github.com/monasubedi/youtube_clone",
  },
  {
    id: 2,
    img: "./assets/project-two.jpg",
    link: "https://github.com/monasubedi/movie-app-typescript",
  },
  {
    id: 3,
    img: "./assets/project-three.jpg",
    link: "https://github.com/monasubedi/quiz-app-typescript",
  },
  {
    id: 4,
    img: "./assets/project-four.jpg",
    link: "https://github.com/monasubedi/todo-typescript",
  },
  {
    id: 5,
    img: "./assets/project-five.jpg",
    link: "https://github.com/monasubedi/next-app",
  },
  // {
  //   id: 6,
  //   img: "./assets/project-two.jpg",
  //   link:""
  // },
];

const goToGithub = (link: string) => {
  window.location.href = link;
};

const Work = () => {
  return (
    <section id="portfolio" className="myWork">
      <h1>My latest Work</h1>
      <div className="project">
        {works.map((work) => {
          return (
            <div className="image-container">
              <img
                className="mywork-img"
                src={work.img}
                key={work.id}
                alt={`${work.id}`}
              />
              <div className="project-hover">
                <FaCode
                  onClick={() => goToGithub(work.link)}
                  className="github"
                  size={30}
                />

                {/* <FaEye
                  onClick={() => console.log(alert("hi"))}
                  className="github"
                  size={35}
                /> */}
              </div>
            </div>
          );
        })}
      </div>
      {/* <div className="showMore">
        <p>Show More</p>
        <FaArrowRight />
      </div> */}
    </section>
  );
};

export default Work;
