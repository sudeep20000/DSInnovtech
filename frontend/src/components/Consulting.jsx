import styles from "./Consulting.module.css";

const list_items = [
  "Battery Pack Analysis, Design & Development.",
  "Battery Thermal Heat Management and Cooling systems.",
  "AI-Machine learning methods and Data Sciences.",
  "AI/ML - based Battery Performance Optimization & Thermal Runaway prediction and mitigation.",
  "AI-Generative Design for Engineering and Business products and Applications.",
  "AI-ML with Edge Device for Battery Performance Monitoring and Battery Management System (BMS).",
  "Battery Charging Strategy and Algorithms.",
  "Battery Degradation and Aging Analysis.",
  "Life Cycle Assessment with Accelerated Testing Model for Battery.",
  "Analysis, Design and Development of Fuel Cell Power Generation System.",
  "Design Analysis with CFD & Multiphysics Simulations.",
];

const Consulting = () => {
  return (
    <div className={styles.hero_sec}>
      <p className={styles.heading}>Consulting and R&D Services</p>
      <ul className={styles.list}>
        {list_items.map((content, i) => (
          <li key={i}>{content}</li>
        ))}
      </ul>
    </div>
  );
};

export default Consulting;
