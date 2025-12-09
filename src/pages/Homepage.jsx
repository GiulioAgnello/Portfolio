import RotatingText from "../components/RotatingText.jsx";
import CardsProjects from "../components/CardsProjects.jsx";
import projects from "../../db/projects.js";
import LogoLoop from "../components/LogoLoop";
import Weather from "../components/Weather.jsx";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiMysql,
  SiCss3,
  SiExpress,
  SiBootstrap,
  SiVite,
} from "react-icons/si";
import { useState, useEffect } from "react";

export default function Homepage() {
  const [coords, setCoords] = useState({
    latitude: 40.3548,
    longitude: 18.1724,
  });

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setCoords({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          });
        },
        (error) => {
          console.warn("Geolocation non disponibile:", error);
          // Mantiene le coordinate di default
        }
      );
    }
  }, []);

  const techLogos = [
    { node: <SiReact />, title: "React", href: "https://react.dev" },
    { node: <SiNextdotjs />, title: "Next.js", href: "https://nextjs.org" },
    {
      node: <SiTypescript />,
      title: "TypeScript",
      href: "https://www.typescriptlang.org",
    },
    {
      node: <SiMysql />,
      title: "MySQL",
      href: "https://www.mysql.com",
    },
    {
      node: <SiCss3 />,
      title: "CSS3",
      href: "https://www.w3.org/Style/CSS/",
    },
    {
      node: <SiExpress />,
      title: "Express",
      href: "https://expressjs.com",
    },
    {
      node: <SiBootstrap />,
      title: "Bootstrap",
      href: "https://getbootstrap.com",
    },
    {
      node: <SiVite />,
      title: "Vite",
      href: "https://vitejs.dev",
    },
  ];
  return (
    <>
      <div className="wrapperHome vh-100" id="about">
        <div className="container ">
          <div
            id="home"
            className="row pb-5 d-flex justify-content-between align-items-center g-5 mt-5"
          >
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
          <h2 className="text-center">
            Weather (Uso API Open-Meteo e Nominatim)
          </h2>
          <div className="d-flex justify-content-center my-4">
            <Weather latitude={coords.latitude} longitude={coords.longitude} />
          </div>
          <hr />
          <div className="row my-5" id="projects">
            <div className="col-12 d-flex justify-content-center my-5 fw-bold ">
              <h2>My Projects (link per codice su GitHub)</h2>
            </div>
            <div className="row g-4">
              {projects.map((project) => (
                <CardsProjects key={project.id} projects={project} />
              ))}
            </div>
          </div>
          <hr />
          <div className="row my-5" id="story">
            <h2 className="text-center mb-5">My Story</h2>

            <div className="row mb-5">
              <div className="col-12 col-md-8">
                <p className="text-center fs-6 px-3 fw-bold">
                  Dopo la laurea in Design Industriale, ho sentito l’esigenza di
                  unire le mie competenze visive e progettuali a un ambito più
                  tecnico e dinamico. Da qui è nato il mio percorso nel web
                  development, dove ho potuto coniugare logica e creatività,
                  struttura e libertà, estetica e funzionalità. Attraverso la
                  formazione con Boolean, ho consolidato le mie competenze su
                  tecnologie come JavaScript e React.js, e sull’integrazione di
                  database MySQL e server Express, progettando e realizzando
                  e-commerce completi, sia in team che individualmente. In ogni
                  progetto, ho cercato di mantenere un equilibrio tra una UX/UI
                  curata e una struttura efficiente e pulita. Oggi vedo il
                  codice non solo come uno strumento tecnico, ma come un mezzo
                  creativo per costruire esperienze. Tutto ciò che un tempo
                  utilizzavo da utente, ora sto imparando a realizzarlo da
                  sviluppatore — e questo processo mi entusiasma ogni giorno di
                  più.
                </p>
              </div>
              <div className="col-12 col-md-4 ">
                <div className="fotoArt"></div>
              </div>
            </div>
            <div
              style={{
                width: "100%",
                height: "150px",
                position: "relative",
                overflow: "hidden",
              }}
            >
              <LogoLoop
                logos={techLogos}
                speed={80}
                direction="left"
                logoHeight={64}
                gap={60}
                hoverSpeed={0}
                scaleOnHover
                fadeOut
                fadeOutColor="rgba(255, 255, 255, 0.01)"
                ariaLabel="Technology partners"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
