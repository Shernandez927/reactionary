import { motion } from "framer-motion";
import eventeasyscreenshot from "../assets/images/event-easy.png";
import gypsy from "../assets/images/gypsy.jpg";
import fanpage from "../assets/images/fanpage.jpg";
import rainMan from "../assets/images/rain-man.png";
import quintessential from "../assets/images/quintessential.png";
import emendation from "../assets/images/emendation.png";

const Projects = () => {

  const ProjectInfo = [
    { name: "Event-Easy",
      description: "Event and Lodging Search Engine",
      image: eventeasyscreenshot,
      link: "https://shernandez927.github.io/Projectory/",
      repo: "https://github.com/Shernandez927/Projectory"
    },
    { name: "Gypsy",
      description: "Online PushPin Map",
      image: gypsy,
      link: "https://pure-peak-95833.herokuapp.com/",
      repo: "https://github.com/Shernandez927/Projection"
    },
    { name: "Fan Page",
      description: "First WebPage",
      image: fanpage,
      link: "https://shernandez927.github.io/big-fan/",
      repo: "https://github.com/Shernandez927/big-fan"
    },
    { name: "Rain-Man",
      description: "Weather Dashboard powered by OpenWeather API",
      image: rainMan,
      link: "https://shernandez927.github.io/rain-man/",
      repo: "https://github.com/Shernandez927/rain-man"
    },
    { name: "Quintessential",
      description: "Timed Quiz powered by JavaScript",
      image: quintessential,
      link: "https://shernandez927.github.io/quintessential/",
      repo: "https://github.com/Shernandez927/quintessential"
    },
    { name: "Emendation",
      description: "Text Editor with Offline Functionality",
      image: emendation,
      link: "https://emendation.herokuapp.com/",
      repo: "https://github.com/Shernandez927/Emendation"
    },
  ]
  return (
    <section id="projects" className="justify-center">
      <h2 className="font-worksans text-center text-rose font-semibold text-4xl mt-24 mb-5">
        Projects
      </h2>
      <motion.div
        className="mx-auto text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: -50 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <div className="w-full flex-auto grid justify-items-center grid-cols-2 md:grid-cols-3 gap-8 text-center py-10 px-12 sm:px-0">
          {ProjectInfo.map((project) => (
            <div className="relative" key={project.name}>
            <img src={project.image} alt="project" />
            <div className="object-contain absolute flex flex-col align-middle justify-center top-0 left-0 w-full h-full bg-overlay-black opacity-0 hover:opacity-100 ease-in-out duration-300 text-white-500">
              <a
                href={project.link}
                className="text-2xl font-bold hover:scale-110 transition duration-500"
                target="_blank"
                rel="noreferrer"
              >
                {project.name}
              </a>
              <p>{project.description}</p>
              <a
               href={project.repo}
               className="text-2xl font-bold hover:scale-110 transition duration-500"
               target="_blank"
               rel="noreferrer"
              >
              Repository <i className="fa-brands fa-square-github"></i>
              </a>
            </div>
          </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Projects;
