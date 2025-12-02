import {
  SiGithub,
  SiLinkedin,
  SiInstagram,
  SiFacebook,
  SiWhatsapp,
  SiGmail,
} from "react-icons/si";

export default function Contatti() {
  const contacts = [
    {
      icon: <SiGmail />,
      label: "Email",
      value: "agnellogiulio@yahoo.com",
      href: "mailto:agnellogiulio@yahoo.com",
    },
    {
      icon: <SiWhatsapp />,
      label: "WhatsApp",
      value: "+39 3271208496",
      href: "https://wa.me/393271208496",
    },
    {
      icon: <SiGithub />,
      label: "GitHub",
      value: "@GiulioAgnello",
      href: "https://github.com/GiulioAgnello",
    },
    {
      icon: <SiLinkedin />,
      label: "LinkedIn",
      value: "Giulio Agnello",
      href: "https://www.linkedin.com/in/giulio-agnello/",
    },
    {
      icon: <SiInstagram />,
      label: "Instagram",
      value: "@giulioagnello",
      href: "https://www.instagram.com/giulioagnello?igsh=d2R1aWZ6aHd0bTUw&utm_source=qr",
    },
    {
      icon: <SiFacebook />,
      label: "Facebook",
      value: "@giulio.agnello.1",
      href: "https://www.facebook.com/giulio.agnello.1/",
    },
  ];

  return (
    <div className="container py-5" id="contact">
      <div className="row text-center m-5">
        <h1 className="fw-bold">I miei contatti</h1>
        <p className="text-muted">
          Sono disponibile per collaborazioni, freelance e opportunità
          full-time. Scrivimi o raggiungimi sui social.
        </p>
      </div>

      <div className="row g-4">
        {contacts.map((c) => (
          <div key={c.label} className="col-12 col-md-6 col-lg-4">
            <a
              href={c.href}
              target={c.href?.startsWith("http") ? "_blank" : undefined}
              rel={
                c.href?.startsWith("http") ? "noreferrer noopener" : undefined
              }
              className="text-decoration-none"
            >
              <div className="cardProject p-4 h-100 d-flex align-items-center gap-3">
                <div className="fs-2 text-primary d-flex align-items-center">
                  {c.icon}
                </div>
                <div className="flex-grow-1">
                  <h5 className="mb-1 text-dark">{c.label}</h5>
                  <span className="text-muted">{c.value}</span>
                </div>
              </div>
            </a>
          </div>
        ))}
      </div>

      <div className="row mt-5">
        <div className="col-12 text-center">
          <p className="mb-2 text-muted">Tecnologie e interessi</p>
          <ul className="listTech d-inline-block">
            <li>React</li>
            <li>JavaScript</li>
            <li>UI/UX</li>
            <li>Frontend</li>
            <li>Freelance</li>
            <li>Remote</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
