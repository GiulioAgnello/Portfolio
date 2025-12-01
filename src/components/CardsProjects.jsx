export default function CardsProjects({ projects }) {
  const { img, title, description, Tech, code } = projects;
  return (
    <div className="col-12 col-md-6 d-flex justify-content-center">
      <div className="card" style={{ width: "18rem" }}>
        <img src={img} className="card-img-top" alt={title} />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <a href={code} className="btn btn-primary">
            Vai al Codice su GitHub
          </a>
        </div>
      </div>
    </div>
  );
}
