import { NavLink } from "react-router-dom";

export default function Header() {
  const handleScroll = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg position-fixed w-100 top-0 mt-1 z-3">
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
            <div className="navBar d-flex justify-content-center align-items-center px-3 py-2">
              <div className="navbar-nav">
                <NavLink className="nav-link" to="/">
                  Home
                </NavLink>
                <button
                  className="nav-link btn btn-link p-1"
                  onClick={() => handleScroll("projects")}
                >
                  Projects
                </button>
                <button
                  className="nav-link btn btn-link p-1"
                  onClick={() => handleScroll("story")}
                >
                  MyStory
                </button>
                <NavLink className="nav-link" to="/contatti">
                  Contatti
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
