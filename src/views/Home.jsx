import { motion } from "framer-motion";
// import { Link } from "react-router-dom";
import profile from "../assets/images/Profile.JPG";
import { contactLinks } from "../assets/Contactlinks";


const Home = () => {

  return (
    <section
      id="home"
      className="md:flex md:justify-around md:items-center md:h-full my-4 py-5 px-3 align-bottom"
    >
      {/* Image Section */}
      <div className="basis-2/5 z-10 mx-2 flex justify-center md:order-2">
          <img
            alt="profile"
            className="w-full max-w-[350px] md:max-w-[600px]"
            src={profile}
          />
      </div>
      {/* Intro & About Me Section */}
      <div className="z-30 basis-2/5 xs:mx-10 md:mx-0 mt-8 md:mt-30 text-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -25 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <h1 className="text-5xl md:text-6xl font-semibold">
            Shelby Hernandez
          </h1>
          <p className="mt-5 text-xl">
            Hi, I'm Shelby. 👋 I'm from Austin, TX and I'm currently cultivating
            my skills in web and software development through UT Austin's Coding
            BootCamp.
          </p>
        </motion.div>
       
        {/* Social Media Icon Links */}
        <motion.div
          className="flex mt-5 justify-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <div className="flex justify-center my-2 gap-2">
            {contactLinks.map((link) => (
              <div className="scale-100 p-4 m-1 bg-mauve/40 rounded-full md:hover:duration-700 md:hover:ease-in-out md:hover:cursor-pointer md:hover:scale-110">
              <a
                key={link.name}
                href={link.link}
                target="_blank"
                rel="noreferrer"
                
              >
                <img
                className="w-14"
                src={link.img} 
                alt={link.alt} />
              </a>
              </div>
            ))} 
    
            
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Home;
