const Footer = () => {
  return (
    <footer className="justify-center text-center pb-8">
      <p className="font-worksans text-xl">
        © 2022 Made with
        <span className="text-red-500"> ❤ </span> by Shelby Hernandez
      </p>
      <br></br>
      <div className="md:flex justify-center text-center text-2xl">
      <a
        className="hover:opacity-50 hover:scale-110 transition duration-500 p-2"
        href="https://github.com/Shernandez927"
        target="_blank"
        rel="noreferrer"
      >
        <i class="fa-brands fa-github"></i>
      </a>
      <a
        className="hover:opacity-50 hover:scale-110 transition duration-500 p-2"
        href="https://www.linkedin.com/in/shelby-hernandez-801252220/"
        target="_blank"
        rel="noreferrer"
      >
        <i class="fa-brands fa-linkedin"></i>
      </a>
      <a
        className="hover:opacity-50 hover:scale-110 transition duration-500 p-2"
        href="https://stackoverflow.com/users/19430732/shernand927"
        target="_blank"
        rel="noreferrer"
      >
        <i class="fa-brands fa-stack-overflow"></i>
      </a>
      </div>
    </footer>
  );
};

export default Footer;
