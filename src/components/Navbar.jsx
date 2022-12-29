import { useState } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import useMediaQuery from "../hooks/useMediaQuery";

const Link = ({ page, selectedPage, setSelectedPage }) => {
  const lowerCasePage = page.toLowerCase();
  return (
    <AnchorLink
      className={`${
        selectedPage === lowerCasePage ? "text-lavender" : ""
      } hover:text-lavender transition duration-500`}
      href={`#${lowerCasePage}`}
      onClick={() => setSelectedPage(lowerCasePage)}
    >
      {page}
    </AnchorLink>
  );
};

const Navbar = ({ selectedPage, setSelectedPage }) => {
  const [isMenuToggled, setIsMenuToggled] = useState(false);
  const isAboveSmallScreens = useMediaQuery("(min-width: 768px)");

  return (
    <nav className={`z-40 w-full fixed top-0 py-6`}>
      <div className="flex items-center justify-between mx-auto w-5/6">
        <h4 className="font-playfair text-3xl font-bold">SH</h4>
        {/* Desktop Navbar */}
        {isAboveSmallScreens ? (
          <div className="flex justify-between gap-16 font-worksans text-sm font-semibold">
            <Link 
            page ="Home"
            selectedPage={selectedPage}
            setSelectedPage={setSelectedPage}
            />
            <Link 
            page ="Skills"
            selectedPage={selectedPage}
            setSelectedPage={setSelectedPage}
            />
            <Link 
            page ="Projects"
            selectedPage={selectedPage}
            setSelectedPage={setSelectedPage}
            />
            <Link 
            page ="Resume"
            selectedPage={selectedPage}
            setSelectedPage={setSelectedPage}
            />
            <Link 
            page ="Contact"
            selectedPage={selectedPage}
            setSelectedPage={setSelectedPage}
            />
          </div>
        ) : (
          <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          </button>
        )}
        {/* Mobile Navbar Menu */}
        {!isAboveSmallScreens && isMenuToggled && (
            <div className="text-3xl absolute right-8 top-6 cursor-pointer">
                {/* Close Icon */}
                <div className="flex justify-end p-5">
                    <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    </button>
                </div>
                {/* Menu Icons */}
                <div className="md:flex md:items-center">
                  <li className="md:ml-8 text-xl md:my-0 my-7">
                    <Link 
                    page ="Home"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                    />
                    <Link 
                    page ="Skills"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                    />
                    <Link 
                    page ="Projects"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                    />
                    <Link 
                    page ="Resume"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                    />
                    <Link 
                    page ="Contact"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                    />
                    </li>
                </div>
            </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;