import RotatingText from "../components/RotatingText.jsx";
import CardsProjects from "../components/CardsProjects.jsx";
import projects from "../../db/projects.js";
export default function Homepage() {
  return (
    <>
      <div className="wrapperHome vh-100">
        <div className="container ">
          <div className="row py-5 d-flex justify-content-between align-items-center g-5 mt-5">
            <div className="col-12 col-md-4 mb-4 d-flex justify-content-center">
              <div className="fotoHome"></div>
            </div>
            <div className="col-12 col-md-8 mb-4 d-flex justify-content-center">
              <div className="d-flex flex-column gap-3 justify-content-center align-items-center">
                <div className="d-flex gap-2 justify-content-center align-items-center fs-1 sm:fs-4 md:fs-5">
                  <p className="m-0 fw-bold text-dark">Giulio</p>
                  <RotatingText
                    texts={[
                      "Agnello",
                      "Developer",
                      "Design",
                      "React",
                      "JavaScript",
                    ]}
                    mainClassName="divRoll px-2 sm:px-2 md:px-3  text-light overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-lg d-flex align-items-center"
                    staggerFrom={"last"}
                    initial={{ y: "100%" }}
                    animate={{ y: 0 }}
                    exit={{ y: "-120%" }}
                    staggerDuration={0.025}
                    splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
                    transition={{ type: "spring", damping: 30, stiffness: 400 }}
                    rotationInterval={2000}
                  />
                </div>
                <div className="descriptionHome">
                  <p>
                    💻| FullStack Dev | Front-End Developer | 🎨 UI/UX
                    Enthusiast | 🚀 Curious Mind Passionate about building
                    clean, intuitive and elegant digital experiences. Amo
                    progettare interfacce che parlano da sole, combinando
                    design, logica e performance. Dopo una laurea in Industrial
                    Design, ho ampliato le mie competenze nel mondo del web
                    development con Boolean, creando progetti sempre più
                    complessi e connessi.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <hr />
          <div className="row">
            <div className="col-12 d-flex justify-content-center my-5 fw-bold ">
              <h2>My Projects</h2>
            </div>
            <div className="row g-4">
              {projects.map((project) => (
                <CardsProjects key={project.id} projects={project} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
