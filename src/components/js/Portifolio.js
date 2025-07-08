import "../css/Portifolio.css";

const projects = [
  {
    title: "Kanban",
    image: "/images/teams/Kanban .PNG",
    demo: "https://ng-kanban-board.vercel.app/",
    github: "https://github.com/Anda8/ng-Kanban-Board",
  },
  {
    title: "Woodex",
    image: "/images/teams/Woodex.PNG",
    demo: "https://ng-e-commerce.vercel.app/auth/register",
    github: "https://github.com/Anda8/ng-E-Commerce",
  },
  {
    title: "Market",
    image: "/images/exercise/Market.PNG",
    demo: "https://product-list-with-cart-sandy-ten.vercel.app/",
    github: "https://github.com/Anda8/Product-list-with-cart",
  },
  {
    title: "Movie Design",
    image: "/images/exercise/Movie.PNG",
    demo: "https://app-movies-beta-seven.vercel.app/auth/login",
    github: "https://github.com/Anda8/Frontend-Projects/tree/main/appMovies",
  },
  {
    title: "Audiophile",
    image: "/images/exercise/Audiophile.PNG",
    demo: "https://audiophile-nine-pi.vercel.app/",
    github: "https://github.com/Anda8/Frontend-Projects/tree/main/audiophile",
  },
];

function ProjectCard({ title, image, demo, github }) {
  return (
    <div className="col-lg-4 col-md-6">
      <div className="portifolioContent shadow p-3">
        <div className="portifolioImg">
          <img src={image} alt={title} />
        </div>
        <div className="portifolioDemoandGit d-flex align-items-center justify-content-between pt-3">
          <a href={demo} target="_blank" rel="noopener noreferrer">
            Demo <i className="fa-solid fa-arrow-right ps-2"></i>
          </a>
          <a href={github} target="_blank" rel="noopener noreferrer">
            <i className="fa-brands fa-github"></i>
          </a>
        </div>
      </div>
    </div>
  );
}

export default function Portifolio() {
  return (
    <section className="portifolio" id="portifolio">
      <h6 className="text-center">Freelance Works</h6>
      <h3 className="text-center mb-4">Work with Team</h3>

      <div className="row g-0 align-items-center">
        {projects.slice(0, 2).map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>

      <hr className="hr my-4" />

      <h6 className="text-center">Practice Projects</h6>
      <h3 className="text-center mb-4">Personal Work</h3>

      <div className="row g-0 align-items-center">
        {projects.slice(2).map((project, index) => (
          <ProjectCard key={index + 2} {...project} />
        ))}
      </div>
    </section>
  );
}
