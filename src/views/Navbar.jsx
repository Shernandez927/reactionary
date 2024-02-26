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
    <nav className="z-40 w-full fixed top-0 left-0 right-0">
      <div className="flex items-center justify-between bg-eggplant md:bg-eggplant/80 md:backdrop-blur-sm py-4 md:px-10 px-7">
        <div className="text-5xl font-playfair font-extrabold">
          <Link to="home">
            <h2 className=" text-autumn-gold text-shadow">SH</h2>
          </Link>
        </div>
        <div
          onClick={() => setIsMenuToggled(!isMenuToggled)}
          className="absolute right-8 top-6 cursor-pointer md:hidden text-4xl"
        >
          <i
            className={isMenuToggled ? "fa-solid fa-xmark" : "fa-solid fa-bars"}
          ></i>
        </div>
        <ul
          className={`md:flex md:items-center gap-16 md:pb-0
           absolute md:static bg-eggplant md:bg-transparent md:z-auto z-[-1]
          left-0 w-full md:w-auto pl-9 transition-all 
          duration-700 ease-in ${isMenuToggled ? "top-16" : "top-[-400px]"}`}
        >
          {Links.map((link) => (
            <li
              key={link.name}
              className="md:ml-10 font-worksans font-semibold text-xl md:my-0 my-5
                hover:scale-110 transition duration-700"
            >
              <NavLink
                onClick={() => setIsMenuToggled(!isMenuToggled)}
                to={link.link}
                key={link.name}
              >
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
