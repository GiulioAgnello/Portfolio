import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

export default function CardsProjects({ projects }) {
  const { img, title, description, Tech, code, link } = projects;
  return (
    <div className="col-12 col-md-6 d-flex justify-content-center">
      <div className="cardProject card">
        <img src={img} className="cardImg card-img-top " alt={title} />
        <div className="card-body">
          <div className="d-flex gap-2">
            <h5 className="card-title">{title} </h5>
            <Link to={link}>
              {link ? <FontAwesomeIcon icon={faLink} href={link} /> : null}
            </Link>
          </div>

          <p className="card-text">{description}</p>
          <ul className="listTech">
            {Tech.map((tech, index) => (
              <li key={index}>{tech}</li>
            ))}
          </ul>
          <div className="d-flex justify-content-center">
            <Link to={code.frontend} className="btn ">
              <FontAwesomeIcon icon={faGithub} /> Git Frontend
            </Link>
            {code.backend && (
              <Link to={code.backend} className="btn ">
                Backend
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
