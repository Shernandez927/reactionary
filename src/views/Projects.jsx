import { motion } from "framer-motion";
import { ProjectInfo } from "../assets/Projectdata.js";

const Projects = () => {

  return (
    <section id="projects" className="justify-center text-center">
      <h2 className=" text-autumn-gold font-semibold text-shadow text-4xl">
        Projects
      </h2>
        <div className="w-full flex-auto grid justify-items-center grid-cols-1 md:grid-cols-3 gap-8 text-center py-10 px-12 sm:px-0">
          {ProjectInfo.map((project) => (
                  <motion.div
                  key={project.name}
                  className="mx-auto"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.5 }}
                  variants={{
                    hidden: { opacity: 0, y: -50 },
                    visible: { opacity: 1, y: 0 },
                  }}
                >
            <div className="relative p-4 bg-antique-violet rounded-lg shadow-xl" >
            <img className="shadow-md" src={project.image} alt={project.name} />
            <div className="p-6">
                <h5 className="text-2xl font-semibold">{project.name}</h5>
              <p>{project.description}</p>
              <div className="justify-items-center px-2 mt-3">
              <a
               href={project.repo}
               className=" text-4xl hover:text-gray transition duration-500"
               target="_blank"
               rel="noreferrer"
              >
              <i className="scale-90 fa-brands fa-square-github px-2"></i>
              </a>
              <a
               href={project.link}
               className="text-4xl hover:text-gray transition duration-500"
               target="_blank"
               rel="noreferrer"
              >
              <i className="scale-90 fa-regular fa-window-restore px-2"></i>
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
