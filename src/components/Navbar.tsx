import { useRef } from "react";
import { BiMenu } from "react-icons/bi";
import { CiBrightnessDown } from "react-icons/ci";
import { IoIosClose } from "react-icons/io";
import { MdBrightness2 } from "react-icons/md";
import { useThemeContext } from "../context/ThemeContext";

const Navbar = () => {
  const menuRef = useRef<HTMLDivElement>(null);
  const themeContext = useThemeContext();

  const handleShow = () => {
    if (menuRef.current) {
      menuRef.current.style.right = "0px";
    }
  };

  const handleClose = () => {
    if (menuRef.current) {
      menuRef.current.style.right = "-350px";
    }
  };

  return (
    <nav className="navbar">
      <div className="flex justify-between xs:p-4 w-full">
        <img src="./assets/logo.png" className="logo" alt="logo" />
        <div className="menu" onClick={handleShow}>
          <BiMenu size={45} />
        </div>
        <div className="navbar-wrapper">
          <ul className="navbar-items">
            <li>
              <a href="#hero">Home</a>
            </li>
            <li>
              <a href="#about">About me</a>
            </li>
            <li>
              <a href="#portfolio">Portfolio</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
          <div className="ml-5" onClick={() => themeContext.toggleTheme()}>
            {themeContext.theme === "dark" ? (
              <CiBrightnessDown
                className="icon"
                style={{ cursor: "pointer" }}
                size={35}
              />
            ) : (
              <MdBrightness2
                className="icon"
                style={{ cursor: "pointer" }}
                size={25}
              />
            )}
          </div>
          <div className="nav-connect">
            <a href="#contact">Connect with me</a>
          </div>
        </div>
      </div>

      <div ref={menuRef} className="nav-items-wrapper">
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            margin: "50px 0px",
          }}
        >
          {/* <img src="./assets/logo.png" className="logo" alt="logo" /> */}
        </div>

        <div onClick={handleClose} className="close">
          <IoIosClose color="#32323c" size={55} />
        </div>
        <ul className="navbar-items">
          <li>
            <a href="#hero">Home</a>
          </li>
          <li>
            <a href="#about">About me</a>
          </li>
          <li>
            <a href="#portfolio">Portfolio</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>

          <div
            className="ml-5 flex justify-center"
            onClick={() => themeContext.toggleTheme()}
          >
            {themeContext.theme === "dark" ? (
              <CiBrightnessDown
                className="icon"
                style={{ cursor: "pointer" }}
                size={35}
              />
            ) : (
              <MdBrightness2
                className="icon"
                style={{ cursor: "pointer" }}
                size={25}
              />
            )}
          </div>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
