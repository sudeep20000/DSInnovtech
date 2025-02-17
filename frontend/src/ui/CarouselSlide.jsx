import { Link } from "react-router-dom";
import Slider from "react-slick";
import styles from "./CarouselSlider.module.css";

const projects = [
  {
    to: "/technology/BESAi",
    image: "./BESAI_1.jpg",
    title: "BESAi",
    description: `DSinnovtech introduces BESAi - an AI-Powered SaaS platform for
    agile and accelerated design and development of state-of-the-art and next generation of electric battery packs for EVs.`,
  },
  {
    to: "/technology/DSAi",
    image: "./project_2.jpg",
    title: "DSAi",
    description: `An AI-Powered predictive analysis and generative design software for solving and developing applications in a wide  range of challenging and complex problems to enhance efficiency and productivity in the workflow and accelerates the design and development cycles.`,
  },
  // {
  //   to: "/technology/Multiphysics-and-Advanced-computing",
  //   image: "./BESAI_2.jpg",
  //   title: " Multiphysics and Advanced Computing",
  //   description: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt
  //             quisquam qui, itaque minima aliquid eveniet asperiores voluptatum
  //             in. Minima ipsam, nesciunt fugit unde reprehenderit distinctio
  //             veritatis nihil porro! Illum, provident!`,
  // },
];

const CarouselSlide = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    pauseOnHover: true,
    autoplay: true,
    autoplaySpeed: 10000,
    speed: 1000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          dots: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          dots: true,
        },
      },
    ],
  };
  return (
    <section>
      <Slider {...settings}>
        {projects.map((project, i) => (
          <Link to={project.to} className={styles.card} key={i}>
            <img src={project.image} alt={project.title} />
            <div className={styles.title_des}>
              <h3 className={styles.sub}>{project.title}</h3>
              <p className={styles.des}>{project.description}</p>
            </div>
          </Link>
        ))}
      </Slider>
    </section>
  );
};

export default CarouselSlide;
