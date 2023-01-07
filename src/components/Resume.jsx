import { motion } from "framer-motion";
import pdf from "../assets/documents/resume.png";

const Resume = () => {

  return (
    <section id="resume" className="mt-20 pb-10">
      <h2 className="font-worksans text-center text-rose font-semibold text-4xl p-4">
        Resume
      </h2>
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
       <div className="justify-items-center gap-8 text-center">
        {/* Resume IMG Preview */}
        <img
        className="h-1/2 p-4 justify-items-center"
        src={pdf} 
        alt="resume">
        </img>

        {/* Download Resume Button */}
            <a href={pdf} rel="noreferrer" target="_blank">
            <button className="rounded-sm bg-gradient-purple mt-4 py-3 px-7 text-lg font-semibold text-deep-blue hover:text-white transition duration-500">
                Download CV
                <ion-icon name="download"></ion-icon>
            </button>
            </a>
        </div>
      </motion.div>
    </section>
  );
};

export default Resume;
