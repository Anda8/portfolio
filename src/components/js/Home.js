import { useEffect, useState } from "react";
import "../css/Home.css";

export default function Home() {
  const [activeSection, setActiveSection] = useState("home");

  const navItems = [
    { id: "home", label: "Home", icon: "fa-house-chimney" },
    { id: "skills", label: "Skills", icon: "fa-screwdriver-wrench" },
    { id: "services", label: "Services", icon: "fa-table-cells" },
    { id: "portifolio", label: "Portifolio", icon: "fa-image" },
    { id: "contact", label: "Contact", icon: "fa-phone" },
  ];
  // on scroll active it's section
 useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;

      for (let item of navItems) {
        const section = document.getElementById(item.id);
        if (section) {
          const offsetTop = section.offsetTop;
          const offsetHeight = section.offsetHeight;

          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(item.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    ////////////////////////////////////////////// START HOME //////////////////////////////////////////////
    <section className="banner d-flex align-items-center" id="home">
       <div className="overlay"></div>
      <div className="container">
        <div className="row g-0 mb-2">
         <div className="col-md-2 d-none d-lg-block">
            <div className="portifolioLinks position-fixed">
              <ul className="navbar-nav mb-2 mb-lg-0">
                {navItems.map((item) => (
                  <li className="nav-item" key={item.id}>
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
          <div className="col-md-7 ">
            <div className="portifoliContent1">
              <small>hello,</small>
              <h1 className="title">
                I'm <span>Anda Beshr</span>
              </h1>
              <h6>Front end developer</h6>
              <p>
                This is my portfolio website to show all details and work
                experiences in the web development
              </p>
              <a
                href="/images/Anda Beshr front-end.pdf"
                download
                className="p-3 rounded"
              >
                Download CV
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
    ////////////////////////////////////////////// START HOME //////////////////////////////////////////////
  );
}
