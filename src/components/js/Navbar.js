import "../css/Navbar.css";

export default function Navbar() {
  return (
    ////////////////////////////////////////////// START NAVBAR //////////////////////////////////////////////

    <nav className="navbar navbar-expand-md navbar-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="index.html">
          Anda Beshr
        </a>
        <button
          className="navbar-toggler"
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
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
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
        </div>
      </div>
    </nav>
    ////////////////////////////////////////////// END SKILLS //////////////////////////////////////////////
  );
}
