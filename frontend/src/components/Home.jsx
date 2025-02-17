import { Link } from "react-router-dom";
import CarouselSlide from "../ui/CarouselSlide";
import Carousel from "react-bootstrap/Carousel";
import styles from "./Home.module.css";

const listContents = [
  {
    to: "/technology/BESAI",
    content: `AI-Enabled Battery Design & Analysis Software - BESAi`,
  },
  {
    to: "/technology/AI-ML",
    content: `AI/Machine Learning Application developments – DSAi`,
  },
  { to: "/technology/MAAC", content: `Multiphysics and Advanced Computing` },
  // {
  //   to: "/technology/IoT-AI",
  //   content: `IoT/AI Remote Patient Monitoring – RPMAi`,
  // },
  // { to: "/technology/IoT-Edge", content: `IoT/Edge devices` },
];

const slideContent = [
  `DSinnovtech empowers engineers and scientists with the next generation of product development tools based on AI-machine learning/generative design methods.`,

  `Utilizes digitization, automation, and customization techniques to enhance efficiency and productivity in the development workflow and accelerates the design and development cycles.`,

  `DSinnovtech’s core expertise includes battery technologies, multi-physics high-fidelity computations, AI-Machine Learning, Data sciences and Software developments.`,
];

const Home = () => {
  return (
    <div className={styles.hero_sec}>
      <section className={styles.intro_sec}>
        <p className={styles.title}>
          <span className={styles.coloredPart}>DS</span>
          innovtech
        </p>
        <div className={styles.intro_container}>
          <p>
            Providing Solutions with AI-Based Software and Advanced Computing.
          </p>
          <Carousel>
            {slideContent.map((content, i) => (
              <Carousel.Item key={i}>
                <div className={styles.carousel_content}>
                  <p>{content}</p>
                </div>
              </Carousel.Item>
            ))}
          </Carousel>
        </div>
      </section>

      <section className={styles.solutions}>
        <div className={styles.titleSection}>
          <p className={styles.titleSection_title}>Our Solutions</p>
        </div>

        <div className={styles.contentSection}>
          <div className={`${styles.solution_sec_list} ${styles.block}`}>
            <ul className={styles.points}>
              {listContents.map((obj, i) => (
                <li key={i}>
                  <Link to={obj.to} className={styles.project_link}>
                    {obj.content}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.imageContainer}>
            <img
              src="./sec2.png"
              alt="solution"
              loading="lazy"
              className={`${styles.solution_sec_image} ${styles.block}`}
            />
          </div>
        </div>
      </section>

      <CarouselSlide />
    </div>
  );
};

export default Home;
