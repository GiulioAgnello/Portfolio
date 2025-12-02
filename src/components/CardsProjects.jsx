import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

export default function CardsProjects({ projects }) {
  const { img, title, description, Tech, code, link } = projects;
  return (
    <div className="col-12 col-md-6 d-flex justify-content-center">
      <div className="card">
        <img src={img} className="card-img-top h-100" alt={title} />
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
          <Link to={code.frontend} className="btn btn-primary">
            <FontAwesomeIcon icon={faGithub} /> Git Frontend
          </Link>
          {code.backend && (
            <Link to={code.backend} className="btn btn-primary">
              <FontAwesomeIcon icon={faGithub} /> Git Backend
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
