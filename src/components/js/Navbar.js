import { useEffect, useState } from "react";
import "../css/Navbar.css";

export default function Navbar() {
   const [activeSection, setActiveSection] = useState("home");

  const navItems = [
    { id: "home", label: "Home", icon: "fa-house-chimney" },
    { id: "skills", label: "Skills", icon: "fa-screwdriver-wrench" },
    { id: "services", label: "Services", icon: "fa-table-cells" },
    { id: "portifolio", label: "Portifolio", icon: "fa-image" },
    { id: "contact", label: "Contact", icon: "fa-phone" },
  ];

  return (
    ////////////////////////////////////////////// START NAVBAR //////////////////////////////////////////////

    <nav className="navbar navbar-expand-md navbar-light">
      <div className="container">
        <a className="navbar-brand" href="index.html">
          Anda Beshr
        </a>
        <button
          className="navbar-toggler border-0"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i className="fa-solid fa-bars"></i>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 d-none d-md-flex flex-row gap-3">
            <li className="nav-item">
              <a
                className="nav-link"
                href="https://www.linkedin.com/in/anda-elaaser/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa-brands fa-linkedin"></i>
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="https://github.com/Anda8"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa-brands fa-github"></i>
              </a>
            </li>
          </ul>
          <ul className="navbar-nav mb-2 mb-lg-0  d-block d-md-none">
                {navItems.map((item) => (
                  <li className="nav-item sidebar" key={item.id}>
                    <a
                      href={`#${item.id}`}
                      className={`nav-link ${
                        activeSection === item.id ? "active" : ""
                      }`}
                      onClick={() => setActiveSection(item.id)}
                    >
                      <i className={`fa-solid ${item.icon} pe-2`}></i>
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
        </div>
      </div>
    </nav>
    ////////////////////////////////////////////// END SKILLS //////////////////////////////////////////////
  );
}
