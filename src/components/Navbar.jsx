import { useState } from "react";
import { NavLink, Link } from "react-router-dom";

const Navbar = () => {
  let Links = [
    { name: "Home", link: "/" },
    { name: "Projects", link: "/projects" },
    { name: "Resume", link: "/resume" },
    { name: "Contact", link: "contact" },
  ];
  const [isMenuToggled, setIsMenuToggled] = useState(false);

  return (

    <nav className="z-40 w-full fixed top-0 left-0 right-0 bg-deep-blue">
      <div className="md:flex items-center justify-between bg-deep-blue py-4 md:px-10 px-7 ">
        <div className="font-playfair text-5xl mr-1 mt-2 font-bold">
          <Link to="home">
          <h2>SH</h2>
          </Link>
        </div>
        <div
          onClick={() => setIsMenuToggled(!isMenuToggled)}
          className="absolute right-8 top-6 cursor-pointer md:hidden"
        >
          <ion-icon className={isMenuToggled ? "close" : "menu"}></ion-icon>
        </div>
        <ul
          className={`md:flex md:items-center gap-16 md:pb-0 
           absolute md:static bg-deep-blue md:z-auto z-[-1] 
          left-0 w-full md:w-auto pl-9 transition-all 
          duration-500 ease-in ${isMenuToggled ? "top-20" : "top-[-500px]"}`}
        >
          {Links.map((link) => (
            <li
              key={link.name} 
              className="md:ml-10 font-worksans font-semibold text-xl md:my-0 my-7 
              hover:text-lavender transition duration-500"
            >
              <NavLink
              onClick={() => setIsMenuToggled(!isMenuToggled)}
              to={link.link}>
                {link.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </nav>

  );
};

export default Navbar;
