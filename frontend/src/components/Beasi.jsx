import BESAICarousel from "../ui/BESAICarousel";
import styles from "./Beasi.module.css";

const Beasi = () => {
  return (
    <div className={styles.hero_sec}>
      <BESAICarousel />
      <p className={styles.intro}>
        DSinnovtech introduces BESAi - an AI-Powered software platform for
        accelerated design and development of state-of-the-art and next
        generation of electric battery packs for EVs and stationary storage.
        BESAi empowers designers with the next generation of product development
        tools based on multiphysics and AI-machine learning/data science methods
        for faster design of optimal pack configurations. Utilizes digitization,
        automation, and customization techniques to enhance efficiency and
        productivity in the simulation workflow and accelerates the design and
        development cycles.
      </p>
      <ul className={styles.outer_container}>
        <li className={styles.container}>
          <h2 className={styles["card-title"]}>Novelty</h2>
          <ul className={styles.grid}>
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
          <ul className={styles.grid}>
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
          <ul className={styles.grid}>
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
