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
          <a
            href="https://developer.mozilla.org/en-US/docs/Glossary/HTML5"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={html}
              alt="html5"
              className="hover:scale-110 ease-in-out duration-500"
            />
          </a>
          <a
            href="https://www.w3.org/TR/CSS/#css"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={css}
              alt="css3"
              className="hover:scale-110 ease-in-out duration-500"
            />
          </a>
          <a
            href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={js}
              alt="javascript"
              className="hover:scale-110 ease-in-out duration-500"
            />
          </a>
          <a
            href="https://bulma.io/documentation/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={bulma}
              alt="bulmacss"
              className="hover:scale-110 ease-in-out duration-500"
            />
          </a>
          <a
            href="https://tailwindcss.com/docs/installation"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={tailwind}
              alt="tailwindcss"
              className="hover:scale-110 ease-in-out duration-500"
            />
          </a>
          <a
            href="https://nodejs.org/en/docs/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={node}
              alt="nodejs"
              className="hover:scale-110 ease-in-out duration-500"
            />
          </a>
          <a href="https://dev.mysql.com/doc/" target="_blank" rel="noreferrer">
            <img
              src={sql}
              alt="mysql"
              className="hover:scale-110 ease-in-out duration-500"
            />
          </a>
          <a
            href="https://reactjs.org/docs/getting-started.html"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={react}
              alt="reactjs"
              className="hover:scale-110 ease-in-out duration-500"
            />
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default Skills;
