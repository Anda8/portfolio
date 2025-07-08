import "../css/Skills.css";

const skills = [
  "HTML", "HTML5", "CSS", "CSS3", "Javascript", "JQuery", "Sass", "Bootstrap",
  "Tailwind", "Angular", "React", "Primeng", "RXJS", "SSR", "SEO", "Git", "Github", "Figma"
];
export default function Skills() {
    
  return (
    ////////////////////////////////////////////// START SKILLS //////////////////////////////////////////////
    <section className="skills mt-5" id="skills">
      <div className="container">
        <h3 className="text-center">My Skills</h3>
        <div className="shadow p-5 mt-4 rounded">
          <div className="row g-0">
            {skills.map((skill, index) => (
              <div className="col-md-3 col-sm-6" key={index}>
                <div className="shadow-sm p-3 m-3 rounded text-center">{skill}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
    ////////////////////////////////////////////// END SKILLS //////////////////////////////////////////////
  );
}
