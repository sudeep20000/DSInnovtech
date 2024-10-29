import styles from "./CoreTechnology.module.css";

const CoreTechnology = () => {
  return (
    <div className={styles.hero_sec}>
      <h3 className={styles.heading}>
        <span className={styles.coloredPart}>C</span>ore Technology
      </h3>
      <p className={styles.intro}>
        DSinnovtech was incorporated in the USA with a mission to empower
        engineers and scientists with the next generation of product development
        tools based on AI-machine learning/generative design methods. Utilizes
        digitization, automation, and customization techniques to enhance
        efficiency and productivity in the development workflow and accelerates
        the design and development cycles.
      </p>
    </div>
  );
};

export default CoreTechnology;
