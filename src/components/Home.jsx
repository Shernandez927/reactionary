import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import profile from "../assets/images/Profile.JPG";

const Home = () => {

  return (
    <section
      id="home"
      className="md:flex md:justify-around md:items-center md:h-full py-5 px-3 align-bottom bg-antique-violet/75 box-shadow-lg rounded-lg"
    >
      {/* Image Section */}
      <div className="basis-2/5 z-10 mx-2 flex justify-center md:order-2">
          <img
            alt="profile"
            className="w-full max-w-[350px] md:max-w-[600px]"
            src={profile}
          />
      </div>
      {/* Main Section */}
      <div className="z-30 basis-2/5 md:mx-10 mt-8 md:mt-30 text-center">
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
          <div className="flex justify-center my-2 gap-7 text-5xl md:text-6xl">
            <a
              className="hover:opacity-50 hover:scale-110 transition duration-500"
              href="https://github.com/Shernandez927"
              target="_blank"
              rel="noreferrer"
            >
              <i class="fa-brands fa-github"></i>
            </a>
            <a
              className="hover:opacity-50 hover:scale-110 transition duration-500"
              href="https://www.linkedin.com/in/shelby-hernandez-801252220/"
              target="_blank"
              rel="noreferrer"
            >
              <i class="fa-brands fa-linkedin"></i>
            </a>
            <Link className="hover:opacity-50 hover:scale-110 transition duration-500"
            to="contact"
            >
              <i class="fa-solid fa-paper-plane"></i>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Home;
