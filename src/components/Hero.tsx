const Hero = () => {
  return (
    <section
      id="hero"
      className="flex flex-col gap-7 items-center justify-center mb-32"
    >
      <img className="profile" src="./assets/hero.svg" alt="hero-img" />
      <h1 className="header-text">
        <span className="name">I'm Hsu Hlaing Hnin@Mona Subedi, </span>
        Frontend Developer based in USA.
      </h1>
      <p className="info">
        I am a frontend developer from Maharishi International University, USA
        with 4 years of experience in React and React Native developing
        eCommerce websites and mobile applications for one of the National Banks
        of Myanmar (AYA) and travel agency company (FLYMYA).
      </p>
      <div className="flex gap-4 items-center justify-center">
        <div className="connectMe">
          <a href="#contact">Connect with me</a>
        </div>
        <div className="myresume">
          <a
            href="./assets/Mona Subedi-Resume .pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            My resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
