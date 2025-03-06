import Slider from "react-slick";
import BESAICarousel from "../ui/BESAICarousel";
import styles from "./BESAi.module.css";

const images = [
  `/carouselContent/img1.jpg`,
  `/carouselContent/img2.png`,
  `/carouselContent/img3.png`,
  `/carouselContent/img4.png`,
  `/carouselContent/img5.png`,
  `/carouselContent/img6.png`,
];

const Beasi = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: true,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 1000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          dots: true,
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
    <div className={styles.hero_sec}>
      <section className={styles.details}>
        <div className={styles.img_container}>
          <p>
            <span className={styles.coloredPart}>BES</span>Ai
          </p>
          {/* <img src="/BESAI_1.jpg" alt="besai" loading="lazy" /> */}
          <section className={styles.carousel_container}>
            <Slider {...settings}>
              {images.map((img, i) => (
                <div className={styles.img} key={i}>
                  <img src={img} alt={`pic-${i + 1}`} loading="lazy" />
                </div>
              ))}
            </Slider>
          </section>
        </div>
        <div className={styles.about_container}>
          <p>
            <span className={styles.coloredPart}>DS</span>innovtech introduces
            BESAi - an AI-Powered software platform for accelerated design and
            development of state-of-the-art and next generation of electric
            battery packs for EVs and stationary storage. BESAi empowers
            designers with the next generation of product development tools
            based on Multiphysics and AI-machine learning/data science methods
            for faster design of optimal pack configurations.
          </p>
          {/* <p>
            DSinnovtech collaborates with electric vehicle, renewable energy,
            and cell/pack/stack manufacturing industries to accelerate product
            development, addressing their continuously evolving market demand
            for electrifications.
          </p> */}
        </div>
      </section>

      <BESAICarousel />

      <ul className={styles.outer_container}>
        <li className={styles.container}>
          <h2 className={styles["card-title"]}>Novelty</h2>
          <ul className={`${styles.grid} ${styles.block}`}>
            <li className={styles["grid-item"]}>
              Software uses state-of-the-art Battery and AI/Data Science
              Technologies for design, analysis and development of electric
              battery for EVs and Energy storage.
            </li>
            <li className={styles["grid-item"]}>
              End-to-End platform with digitization & automation for efficient
              design and analysis workflow.
            </li>
            <li className={styles["grid-item"]}>
              Uses AI/Machine Learning algorithms for design optimization along
              with high-fidelity multi-physics/CFD simulation model.
            </li>
            <li className={styles["grid-item"]}>
              First in market product that empower battery design engineer with
              AI-enabled tools for predictive analysis and generative design.
            </li>
          </ul>
        </li>

        <li className={styles.container}>
          <h2 className={styles["card-title"]}>Solution</h2>
          <ul className={`${styles.grid} ${styles.block}`}>
            <li className={styles["grid-item"]}>
              Dedicated cloud-based battery modeling and design software
              platform.
            </li>
            <li className={styles["grid-item"]}>
              Easy and less time-consuming model preparation steps with few
              clicks of data inputs for parameters and variables.
            </li>
            <li className={styles["grid-item"]}>
              Easy selection of battery chemistries and packing needs. Faster
              computations to perform large number of iterations in reaching
              targeted optimum design.
            </li>
            <li className={styles["grid-item"]}>
              Automation in the integration of duty cycles and drive cycles.
            </li>
          </ul>
        </li>

        <li className={styles.container}>
          <h2 className={styles["card-title"]}>
            Improved Productivity and Efficiency
          </h2>
          <ul className={`${styles.grid} ${styles.block}`}>
            <li className={styles["grid-item"]}>
              Achieve 10-20X speed up in design workflow.
            </li>
            <li className={styles["grid-item"]}>
              Accelerate the design cycle with reduced prototype iterations.
            </li>
            <li className={styles["grid-item"]}>Enable faster go-to-market.</li>
          </ul>
        </li>
      </ul>
    </div>
  );
};

export default Beasi;
