import { motion } from "framer-motion";
import eventeasyscreenshot from "../assets/images/event-easyscreenshot.jpg";
import gypsy from "../assets/images/gypsy.jpg"
import fanpage from "../assets/images/fanpage.jpg"

const Projects = () => {

  return (
    <section id="projects" className="justify-center">
      <h2 className="font-worksans text-center text-rose font-semibold text-4xl mb-5">
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

        <img src={eventeasyscreenshot} alt="project1"/>


        <img src={gypsy} alt="project2"/>


        <img src={fanpage} alt="project1"/>

        </div>
    </motion.div>
    </section>
  );
    
};

export default Projects;
