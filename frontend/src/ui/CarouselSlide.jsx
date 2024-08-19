import { Link } from "react-router-dom";
import Slider from "react-slick";
import styles from "./CarouselSlider.module.css";

const projects = [
  {
    to: "/technology/BESAI",
    image: "./BESAI_1.jpg",
    title: "BESAI",
    description: `  DSinnovtech introduces BESAi - an AI-Powered SaaS platform for
    agile and accelerated design and development of state-of-the-art and next generation of electric battery packs for EVs. BESAi is aligned with the new developments in simulation & advance computations; materials science & design concepts in Liion battery technology.`,
  },
  {
    to: "/technology/AI-ML",
    image: "./project_2.jpg",
    title: "AI/Machine Learning",
    description: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt
              quisquam qui, itaque minima aliquid eveniet asperiores voluptatum
              in. Minima ipsam, nesciunt fugit unde reprehenderit distinctio
              veritatis nihil porro! Illum, provident!`,
  },
  {
    to: "/technology/Multiphysics-and-Advanced-computing",
    image: "./BESAI_2.jpg",
    title: " Multiphysics and Advanced Computing",
    description: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt
              quisquam qui, itaque minima aliquid eveniet asperiores voluptatum
              in. Minima ipsam, nesciunt fugit unde reprehenderit distinctio
              veritatis nihil porro! Illum, provident!`,
  },
];

const CarouselSlide = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    pauseOnHover: true,
    autoplay: true,
    autoplaySpeed: 5000,
    speed: 1000,
  };
  return (
    <div>
      <Slider {...settings}>
        {projects.map((project, i) => (
          <Link to={project.to} className={styles.img_container} key={i}>
            <img src={project.image} alt={project.title} />
            <div className={styles.title_des}>
              <h3 className={styles.sub}>{project.title}</h3>
              <p className={styles.des}>{project.description}</p>
            </div>
          </Link>
        ))}
      </Slider>
    </div>
  );
};

export default CarouselSlide;
