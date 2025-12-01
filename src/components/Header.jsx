import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <>
      <nav className="navbar navbar-expand-lg position-sticky w-100 top-0 mt-5 z-3">
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
              <div className=" navbar-nav">
                <NavLink className="nav-link active" aria-current="page" to="/">
                  Home
                </NavLink>
                <NavLink className="nav-link" to="#">
                  Projects
                </NavLink>
                <NavLink className="nav-link" to="#">
                  MyStory
                </NavLink>
                <NavLink className="nav-link" to="#">
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
