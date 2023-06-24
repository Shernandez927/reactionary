import { motion } from "framer-motion";
import eventeasyscreenshot from "../assets/images/event-easy.png";
import gypsy from "../assets/images/gypsy.jpg";
import deadCoder from "../assets/images/deadCoder.png";
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
      link: "https://project-gypsy-63a683d8f4f7.herokuapp.com",
      repo: "https://github.com/Shernandez927/Projection"
    },
    { name: "deadCoder",
      description: "Vintage Game Application",
      image: deadCoder,
      link: "https://deadcoder-db1047388a9e.herokuapp.com ",
      repo: "https://github.com/Shernandez927/deadCoder_"
    },
    { name: "Rain-Man",
      description: "OpenWeather API Weather Dashboard",
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
        <div className="w-full flex-auto grid justify-items-center grid-cols-1 md:grid-cols-3 gap-8 text-center py-10 px-12 sm:px-0">
          {ProjectInfo.map((project) => (
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
            <div className="relative rounded-lg border-solid border-4 border-lavender" key={project.name}>
            <img className="rounded-t" src={project.image} alt={project.name} />
            <div className="p-6">
                <h5 className="text-xl font-medium">{project.name}</h5>
              <p>{project.description}</p>
              <div className="justify-items-center px-2 mt-3">
              <a
               href={project.repo}
               className=" text-4xl hover:text-gray transition duration-500"
               target="_blank"
               rel="noreferrer"
              >
              <i className="fa-brands fa-square-github px-2"></i>
              </a>
              <a
               href={project.link}
               className="text-4xl hover:text-gray transition duration-500"
               target="_blank"
               rel="noreferrer"
              >
              <i class="fa-solid fa-rocket px-2"></i>
              </a>
              </div>
            </div>
          </div>
          </motion.div>
          ))}
        </div>
    </section>
  );
};

export default Projects;
