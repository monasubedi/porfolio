const Footer = () => {
  return (
    <footer className="footer">
      {/* <div className="footer-div">
        <div className="footer-left">
          <p>
            I am a frontend developer from, USA with 10 years of experience in
            companies like Microsoft, Tesla and Apple.
          </p>
        </div>
        <div className="footer-right">
          <form className="footer-form">
            <div className="footer-email">
              <FaUser className="ml-5" />
              <input type="text" placeholder="Enter your email" />
            </div>
            <button type="submit" className="subscribe">
              Subscribe
            </button>
          </form>
        </div>
      </div> */}
      <hr />
      <div className="flex justify-between text-xs">
        <div className="down-left">
          &copy;2024 Hsu Hlaing Hnin.All rights reserved.
        </div>
        <div className="down-right">
          <p>Terms of services</p>
          <p>Privacy Policy</p>
          <p>Connect with me</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
