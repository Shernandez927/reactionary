
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import eventeasyscreenshot from "../assets/images/event-easyscreenshot.jpg";
import gypsy from "../assets/images/gypsy.jpg"
import fanpage from "../assets/images/fanpage.jpg"

const Projects = () => {

  const settings = {
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slideToScroll: 1,
  };
  return (
    <section id="projects" className="justify-center">
      <h2 className="font-worksans text-center text-rose font-semibold text-4xl mb-5">
        Projects
      </h2>
      <Slider {...settings}>
        <div>
        <img src={eventeasyscreenshot} alt="project1"/>
        </div>
        <div>
        <img src={gypsy} alt="project2"/>
        </div>
        <div>
        <img src={fanpage} alt="project1"/>
        </div>
      </Slider>
    </section>
  );
    
};

export default Projects;
