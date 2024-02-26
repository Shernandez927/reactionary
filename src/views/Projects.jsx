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
            <a
              href={project.repo}
              target="_blank"
              rel="noreferrer"
            >
            <img className="shadow-md md:hover:cursor-pointer" src={project.image} alt={project.name} />
            </a>
            <div className="my-2">
                <h5 className="text-2xl font-semibold mx-2">{project.name}</h5>
              <p>{project.description}</p>
            </div>
          </div>
          </motion.div>
          ))}
        </div>
    </section>
  );
};

export default Projects;
