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
  {
    to: "/technology/IoT-AI",
    content: `IoT/AI Remote Patient Monitoring – RPMAi`,
  },
  { to: "/technology/IoT-Edge", content: `IoT/Edge devices` },
];

const slideContent = [
  `DSinnovtech empowers designers with the next generation of product
          development tools based on AI-machine learning/generative design
          methods.`,
  `Utilizes digitization, automation, and customization
          techniques to enhance efficiency and productivity in the simulation
          workflow and accelerates the design and development cycles.`,
  `DSinnovtech collaborates with electric vehicle, renewable energy, and
          cell/pack/stack manufacturing industries to accelerate product
          development, addressing their continuously evolving market demand.`,
];

const Home = () => {
  return (
    <div className={styles.hero_sec}>
      <p className={styles.title}>DSinnovtech</p>
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
      <div className={styles.solutions}>
        <p>Our Solutions</p>
        <div className={styles.solution_sec}>
          <img src="./sec2.png" alt="solution" loading="lazy" />
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
      </div>
      <CarouselSlide />
    </div>
  );
};

export default Home;
