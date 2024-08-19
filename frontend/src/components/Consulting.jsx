import styles from "./Consulting.module.css";

const Consulting = () => {
  return (
    <div className={styles.hero_sec}>
      <p className={styles.heading}>Consulting and R&D Services</p>
      <ul className={styles.list}>
        <li>Battery Analysis, Design & Development</li>
        <li>Battery Packaging and Thermal heat Management</li>
        <li>
          AI/ML-based performance optimization & Thermal Runaway prediction and
          mitigation
        </li>
        <li>AI-Edge Device –based Battery Management System (BMS) </li>
        <li>Battery Charging Strategy and Algorithms</li>
        <li>Battery Degradation and Aging Analysis</li>
        <li>
          Life Cycle Assessment with Accelerated Testing Model for Battery{" "}
        </li>
        <li>
          Analysis, Design and Development of Fuel Cell Power Generation System{" "}
        </li>
        <li>Design Analysis with CFD & Multiphysics Simulations</li>
      </ul>
    </div>
  );
};

export default Consulting;
