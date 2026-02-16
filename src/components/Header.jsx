import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { FiMoon } from "react-icons/fi";
import { IoSunny } from "react-icons/io5";

export default function Header() {
  const { isDarkMode, toggleTheme } = useContext(ThemeContext);

  const handleScroll = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <>
      <nav className="navBar navbar  navbar-expand-lg">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse align-items-center justify-content-center"
            id="navbarNavAltMarkup"
          >
            <div className=" d-flex align-items-center justify-content-between gap-4">
              <div className="navbar-nav gap-4">
                <NavLink className="nav-link" to="/">
                  Home
                </NavLink>
                <button
                  className="nav-link "
                  onClick={() => handleScroll("projects")}
                >
                  Projects
                </button>
                <button
                  className="nav-link "
                  onClick={() => handleScroll("story")}
                >
                  MyStory
                </button>
                <NavLink className="nav-link" to="/contatti">
                  Contatti
                </NavLink>
              </div>
              <button
                className="theme-toggle-btn"
                onClick={toggleTheme}
                title={isDarkMode ? "Attiva Light Mode" : "Attiva Dark Mode"}
              >
                {isDarkMode ? (
                  <IoSunny className="text-light" />
                ) : (
                  <FiMoon className="text-dark" />
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
