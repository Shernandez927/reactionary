import { motion } from "framer-motion";
import { Skillsdata } from "../assets/Skillsdata";


const Skills = () => {
  return (
    <section id="skills" className="pt-5 pb-10 justify-items-center text-center">
      <h2 className="text-autumn-gold p-2 font-semibold xs:text-3xl sm:text-5xl text-shadow">Technical Skills</h2>
        <div className="w-full mx-auto mt-8 justify-items-center grid xs:grid-cols-3 md:grid-cols-8 gap-0">
          {Skillsdata.map((skill) => (
            <motion.div
            key={skill.name}
            initial="hidden"
            whileInView="visible"
            transition={{ type: "spring"}}
            variants={{
              hidden: { opacity: 1, y: 80 },
              visible: { opacity: 1, y: 0 },
              }}
              >
              <div className="md:scale-110 p-5 m-6 bg-mauve/40 rounded-full md:hover:duration-700 md:hover:ease-in-out md:hover:cursor-pointer md:hover:scale-125" >
                <a
                  href={skill.link}
                  target="_blank"
                  rel="noreferrer"
                >
                <img
                className="w-16"
                src={skill.img}
                alt={skill.alt}
                />
                </a>
              </div>
              <p className="text-md">{skill.name}</p>
            </motion.div>
          ))}
        </div>


    </section>
  );
};

export default Skills;
