import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from "framer-motion";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Home = ({setSelectedPage}) => {
    const isAboveLarge = useMediaQuery("(min-width: 1060px)");

    return (
        <section id="home" className="md:flex md:justify-between md:items-center md:h-full gap-16 py-10">
            {/* Image Section */}
            <div className="basis-3/5 z-10 mt-16 md:mt-32 flex justify-center md:order-2">
            {isAboveLarge ? (
                    <img 
                    alt="profile"
                    className="z-10 w-full max-w-[400px] md:max-w-[600px]"
                    src="./assets/images/profile.jpg"/>
                
            ): (
                    <img 
                    alt="profile"
                    className="z-10 w-full max-w-[400px] md:max-w-[600px]"
                    src="./assets/images/profile.jpg"/>
                   
            )}
            </div>
            {/* Main Section */}
            <div className="z-30 basis-2/5 mt-12 md:mt-32">
                {/* Headings */}
                <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5}}
                variants={{
                    hidden: { opacity: 0, x: -50 },
                    visible: { opacity: 1, x: 0 }
                }}
                >
                    <p className="text-6xl font-playfair z-10 text-center md:text-start">
                        Shelby {""}
                        <span className="xs:relative xs:text-white pxs:font-bold z-20">
                            Hernandez
                        </span>
                    </p>
                    <p className="mt-10 mb-7 text-sm text-center md:text-start">
                        Hi, I'm Shelby. 👋   I'm from Austin, TX and I'm currently cultivating my skills in web and software development
                        through UT Austin's Coding BootCamp.
                    </p>
                </motion.div>

                <motion.div
                className="flex mt-5 justify-center md:justify-start"
                 initial="hidden"
                 whileInView="visible"
                 viewport={{ once: true, amount: 0.5 }}
                 transition={{ duration: 0.5}}
                 variants={{
                     hidden: { opacity: 0, x: -50 },
                     visible: { opacity: 1, x: 0 }
                 }}
                >
                    <AnchorLink
                    className="bg-gradient-purple text-deep-blue rounded-sm py-3 px-7 font-semibold 
                    hover:bg-blue hover:text-white transition duration-500"
                    onClick={() => setSelectedPage("contact")}
                    href="contact"
                    >
                        Contact Me
                    </AnchorLink>
                    <AnchorLink
                    className="rounded-r-sm bg-gradient-purple py-0.5 pr-0.5"
                    onClick={() => setSelectedPage("contact")}
                    href="contact"
                    >
                        <div className="bg-deep-blue hover:text-lavender transition duration-500 w-full h-full flex 
                        items-center justify-center font-worksans px-10">
                        Let's Talk.
                        </div>
                    </AnchorLink>
                </motion.div>

            </div>
        </section>
    )
}

export default Home;