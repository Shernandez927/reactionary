
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Home = () => {

  return (
    <section
      id="home"
      className="xs:mx-auto max-w-7xl md:flex md:justify-between md:items-center md:h-full gap-16 py-10"
    >
      {/* Image Section */}
      <div className="basis-2/5 z-10 mt-16 md:mt-32 flex justify-center md:order-2">
          <img
            alt="profile"
            className="w-full max-w-[350px] md:max-w-[600px]"
            src="./assets/images/profile.jpg"
          />
      </div>
      {/* Main Section */}
      <div className="z-30 basis-2/5 mt-12 md:mt-32">
        {/* Headings */}
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
          <h1 className="text-6xl font-worksans font-semibold z-10 text-center md:text-start">
            Shelby {""}
            <span className="xs:relative xs:text-white pxs:font-bold z-20">
              Hernandez
            </span>
          </h1>
          <p className="mt-10 mb-7 text-xl text-center md:text-start">
            Hi, I'm Shelby. 👋 I'm from Austin, TX and I'm currently cultivating
            my skills in web and software development through UT Austin's Coding
            BootCamp.
          </p>
        </motion.div>
       
        {/* Social Media Icon Links */}
        <motion.div
          className="flex mt-5 justify-center md:justify-start"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <div className="flex justify-center md:justify-start my-2 mx-10 gap-7">
            <a
              className="text-6xl hover:opacity-50 hover:scale-110 transition duration-500"
              href="https://github.com/Shernandez927"
              target="_blank"
              rel="noreferrer"
            >
              <ion-icon name="logo-github"></ion-icon>
            </a>
            <a
              className="text-6xl hover:opacity-50 hover:scale-110 transition duration-500"
              href="https://www.linkedin.com/in/shelby-hernandez-801252220/"
              target="_blank"
              rel="noreferrer"
            >
              <ion-icon name="logo-linkedin"></ion-icon>
            </a>
            <Link className="text-6xl hover:opacity-50 hover:scale-110 transition duration-500"
            to="contact"
            >
              <ion-icon name="send"></ion-icon>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Home;
