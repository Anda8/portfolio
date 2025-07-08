import "../css/Services.css";
export default function Services() {
  return (
    ////////////////////////////////////////////// START SERVICES //////////////////////////////////////////////
    <section className="services text-center" id="services">
      <h6>My Services</h6>
      <h3>What I Offer</h3>
        <div className="row">
          <div className="col-md-6">
            <div className="web shadow p-4">
              <img src="/images/web.jpg" className="webImg" alt="WEB design" />
              <h5>Web Developer</h5>
              <p>Build more templates</p>
            </div>
          </div>
          <div className="col-md-6">
            <div className="ui shadow p-4">
             <img src="/images/ui.png" className="uiImg" alt="User Interface design" />
              <h5>UI/UX Designer</h5>
              <p>Design templates using xd</p>
            </div>
          </div>
        </div>
    </section>
    ////////////////////////////////////////////// END SERVICES  //////////////////////////////////////////////
  );
}
