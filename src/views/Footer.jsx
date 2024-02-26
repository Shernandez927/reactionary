const Footer = () => {
  return (
    <footer className="justify-center text-center mt-10 pb-8">
      <p className="text-xl">
        © 2022 Made with
        <span className="text-red-500"> ❤ </span> by Shelby Hernandez
      </p>

      <div className="md:flex justify-center text-center text-xl mb-2">
      <a
        className="md:hover:opacity-75 md:hover:scale-110 transition duration-500 p-2"
        href="https://github.com/Shernandez927"
        target="_blank"
        rel="noreferrer"
      >
        <i className="fa-brands fa-github"></i>
      </a>
      <a
        className="hover:opacity-75 hover:scale-110 transition duration-500 p-2"
        href="https://www.linkedin.com/in/shelby-hernandez-801252220/"
        target="_blank"
        rel="noreferrer"
      >
        <i className="fa-brands fa-linkedin"></i>
      </a>
      </div>
    </footer>
  );
};

export default Footer;
