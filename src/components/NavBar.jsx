import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import logo from "../assets/logo.png";

export const NavBar = () => {
  return (
    <nav className="flex w-full p-2 items-center justify-between">
      <span className="flex flex-shrink-0">
        <img src={logo} width={120} height={120} alt="" />
      </span>{" "}
      <div className="flex items-center justify-between gap-5 text-2xl">
        <a
          href="https://github.com/PinielMcquotes/palladiumHelpers"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/piniel-makotose-984a67325?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://www.facebook.com/piniel.makotose?mibextid=ZbWKwL"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFacebook />
        </a>
      </div>
    </nav>
  );
};
