import styles from "./Context.module.css";

const Context = () => {
  return (
    <div className={styles.hero_sec}>
      <h3 className={styles.heading}>Context</h3>
      <p className={styles.intro}>
        The electric energy storage market is growing at a fast pace to enable
        the global goal in energy and mobility transition. In electric mobility,
        OEMs have a daunting task to address the fast-emerging market demand for
        electrification while meeting performance, price & warranty targets.
        DSinnovtech was incorporated in the USA by battery and AI technology
        experts with a mission to assist OEMs in energy & EV companies for
        fast-track development of best-in-class battery pack.
      </p>
    </div>
  );
};

export default Context;
