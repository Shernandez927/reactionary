// import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from "framer-motion";
import html from "../assets/images/html.png";
import css from "../assets/images/css.png";
import js from "../assets/images/js.png";
import node from "../assets/images/node.png";
import bulma from "../assets/images/bulma.png";
import sql from "../assets/images/sql.png";
import tailwind from "../assets/images/tailwind.png";
import react from "../assets/images/react.png";

const Skills = () => {
return (
    <section id="skills" className="pt-10 pb-24">
         <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
       <p className="font-worksans text-center font-semibold text-4xl mb-5">
            Techincal <span className="text-rose">Skills</span>
          </p>
        <div className="w-full grid justify-items-center grid-cols-2 md:grid-cols-4 gap-8 text-center py-10 px-12 sm:px-0">
            <img src={html} alt="html" className="hover:scale-110 ease-in-out duration-500"/>
            <img src={css} alt="html" className="hover:scale-110 ease-in-out duration-500"/>
            <img src={js} alt="html" className="hover:scale-110 ease-in-out duration-500"/>
            <img src={bulma} alt="html" className="hover:scale-110 ease-in-out duration-500"/>
            <img src={tailwind} alt="html" className="hover:scale-110 ease-in-out duration-500"/>
            <img src={node} alt="html" className="hover:scale-110 ease-in-out duration-500"/>
            <img src={sql} alt="html" className="hover:scale-110 ease-in-out duration-500"/>
            <img src={react} alt="html" className="hover:scale-110 ease-in-out duration-500"/>

        </div>
        </motion.div>
    </section>
)
}

export default Skills;