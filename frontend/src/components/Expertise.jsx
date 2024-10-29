/* eslint-disable react/no-unescaped-entities */
import styles from "./Expertise.module.css";

const Expertise = () => {
  return (
    <div className={styles.hero_sec}>
      <h3 className={styles.heading}>
        <span className={styles.coloredPart}>E</span>xpertise
      </h3>
      <p className={styles.intro}>
        With the 30+ years of research experience & knowledge in Li-ion battery
        technology, advanced computations, AI-Machine Learning methods, data
        sciences and software engineering, DSinnovtech collaborates with OEMs
        with a portfolio of product & services to accelerate battery
        development, addressing battery performance and safety. DSinnovtech's
        core expertise includes battery technologies, High-fidelity
        multi-physics & computational fluid dynamics analysis, AI/Machine
        learning methods, Data sciences and state-of-the-art software
        engineering and development tools.
      </p>
      <p className={styles.intro}>
        To fast-track battery design & development, DSinnovtech is developing
        AI/ML based software (BESAI) leveraging materials chemistry, historical
        databases including vendors for battery and pack materials, fundamental
        principles and modeling & simulation, and software. DSinnovtech helps
        engineers in fast tracking the design cycles, addressing all constraints
        & application requirements.
      </p>
    </div>
  );
};

export default Expertise;
