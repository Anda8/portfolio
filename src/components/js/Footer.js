import "../css/Footer.css";

export default function Footer() {
  return (
    ////////////////////////////////////////////// START FOOTER //////////////////////////////////////////////
    <section className="footer">
      <div className="container d-flex justify-content-between">
        <p>
          Copy right @
          <a href="index.html"   target="_blank">
            Anda Beshr
          </a>
        </p>
        <div className="footerIcons">
          <a
            href="https://www.linkedin.com/in/anda-elaaser/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-linkedin"></i>
          </a>

          <a
            href="https://github.com/Anda8"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-github"></i>
          </a>
        </div>
      </div>
    </section>
    ////////////////////////////////////////////// END FOOTER //////////////////////////////////////////////
  );
}
