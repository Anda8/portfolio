import "../css/Contact.css";

export default function Contact() {
  return (
    ////////////////////////////////////////////// START CONTACT //////////////////////////////////////////////
    <section className="contact text-center" id="contact">
      <h6>Get in touch</h6>
      <h3>Contact Me</h3>
      <div className="row">
        <div className="col-md-6">
          <div className="email shadow p-4">
            <a href="mailto:andaelaaser@gmail.com" className="contactIcon">
              <i className="fa-solid fa-envelope"></i>
            </a>
            <h5>Email</h5>
            <a href="mailto:andaelaaser@gmail.com">
              andaelaaser@gmail.com
            </a>
            <div className="write">
              <a href="mailto:andaelaaser@gmail.com">
                Write me
                <i className="fa-solid fa-arrow-right ps-2"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="whatsapp shadow p-4">
            <a
              href="https://wa.me/+201066365594"
              target="_blank"
              rel="noopener noreferrer"
              className="contactIcon"
            >
              <i className="fa-brands fa-whatsapp"></i>
            </a>
            <h5>Whatsapp</h5>
            <a
              href="https://wa.me/+201066365594"
              target="_blank"
              rel="noopener noreferrer"
            >
              +201 066 365 594
            </a>
            <div className="write">
              <a
                href="https://wa.me/+201066365594"
                target="_blank"
                rel="noopener noreferrer"
              >
                Write me
                <i className="fa-solid fa-arrow-right ps-2"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
    ////////////////////////////////////////////// END CONTACT //////////////////////////////////////////////
  );
}
