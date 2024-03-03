import { motion } from "framer-motion";
import pdf from "../assets/documents/ResumeScreenshot.png";
import resumeDoc from "../assets/documents/ResumePDF.pdf"


const Resume = () => {


  return (
    <section id="resume" className="my-4 p-8 flex-items-center text-center">
      <h2 className=" text-autumn-gold font-semibold xs:text-4xl sm:text-5xl text-shadow">
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

        {/* Resume IMG Preview */}
        <img
        className="xs:scale-110 sm:scale-100 w-full xs:max-w-[375px] md:max-w-[600px] mx-auto my-10"
        src={pdf} 
        alt="resume">
        </img>

        {/* Download Resume Button */}
            <a href={resumeDoc} rel="noreferrer" target="_blank">
            <button className="rounded-lg bg-autumn-gold text-slate-900 mt-3 sm:mt-0 p-3 xs:text-xs md:text-lg font-semibold hover:scale-105 transition duration-300 shadow-solid-primary">
                Download CV
            </button>
            </a>
      </motion.div>
    </section>
  );
};

export default Resume;
