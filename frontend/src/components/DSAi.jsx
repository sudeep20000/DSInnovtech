import styles from "./DSAi.module.css";

const listContents = [
  `AI/Machine Learning Predictive Analysis.`,
  `AI-Generative Design.`,
];

const DASi = () => {
  return (
    <div className={styles.hero_sec}>
      <section className={styles.details}>
        <div className={styles.intro_container}>
          <div className={styles.intro_content}>
            <p className={styles.title}>
              <span className={styles.coloredPart}>DS</span>Ai
            </p>
            <p className={styles.sub_title}>
              AI/Machine Learning Application Development
            </p>
            <p className={styles.description}>
              Utilizes AI-algorithms including deep learning, neural networks
              and foundation models; unstructured database, vector search and
              retrievals; and digitization, automation and customization
              techniques.
            </p>
          </div>

          <div className={styles.img_container}>
            <img src="/project_2.jpg" alt="project_2" loading="lazy" />
            <img src="/aiml_img2.png" alt="aiml_2" loading="lazy" />
          </div>
        </div>
      </section>

      <section className={`${styles.solutions} ${styles.block}`}>
        <div className={styles.solution_sec_list}>
          <p className={styles.section_title}>Our Solutions</p>
          <ul className={styles.points}>
            {listContents.map((content, i) => (
              <li key={i} className={styles.point_content}>
                {content}
              </li>
            ))}
          </ul>
        </div>

        <img
          src="/aiml_img3.png"
          alt="aiml_img3"
          loading="lazy"
          className={styles.solution_sec_image}
        />
      </section>

      <section className={`${styles.prediction} ${styles.block}`}>
        <p className={styles.section_title}>
          <span className={styles.coloredPart}>AI-ML </span>
          Model for Predictive Analysis
        </p>

        <div className={styles.prediction_content}>
          <div className={styles.left_section}>
            <div className={styles.prediction_description}>
              <p className={styles.des_content}>
                In an AI-Machine learning model, a detection algorithm, referred
                as the <em>Trained ML Algorithm</em> is used to watch for the
                pattern in the incoming data and detects the targeted set or the
                <strong> anomalies</strong>.
              </p>
              <img src="/aiml_img4.png" alt="aiml_img4" loading="lazy" />
            </div>
          </div>

          <div className={styles.right_section}>
            <ul className={styles.unordered_list}>
              <li className={styles.list_item}>
                Uses Machine Learning analysis techniques to extract patterns,
                identify features and understand the concepts from large volume
                of data :
                <ul className={styles.inner_unordered_list}>
                  <li className={styles.inner_list_item}>
                    Data includes both historical and new data streamed.
                  </li>
                  <li className={styles.inner_list_item}>
                    Data generated using high-fidelity Simulation model.
                  </li>
                  <li className={styles.inner_list_item}>
                    Can detect patterns and learn to make predictions &
                    recommendations.
                  </li>
                </ul>
              </li>
              <li className={styles.list_item}>
                Capable of self-correction and improve predictions through
                iterations or <em>epochs</em> :
                <ul className={styles.inner_unordered_list}>
                  <li className={styles.inner_list_item}>
                    using new set of data and experiences, over periods.
                  </li>
                  <li className={styles.inner_list_item}>
                    Referred to as the <em>learning process</em>.
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className={`${styles.development} ${styles.block}`}>
        <div className={styles.development_left_section}>
          <p className={styles.section_title}>
            <span className={styles.coloredPart}>DS</span>
            AI - AI/ML Model Development
          </p>

          <ul className={styles.unordered_list}>
            <li className={styles.list_item}>
              DSAI - is developed based on /Machine Learning algorithms
              including neural network.
            </li>
            <li className={styles.list_item}>
              A general application development platform for many classes of
              engineering & science problems for predictive modelling such as EV
              battery pack, Wind Turbine, finance, Procurement & supply chain,
              Health monitoring & diagnostics, and IoT-based predictive
              maintenance.
            </li>
            <li className={styles.list_item}>
              Use historical data as well as real-time streaming data and data
              analysis techniques to watch for patterns.
              {/* <ul className={styles.inner_unordered_list}>
                <li className={styles.inner_list_item}>
                  Without modelling the complex phenomena involved in the
                  problem.
                </li>
              </ul> */}
            </li>
            <li className={styles.list_item}>
              The model platform and data modules and formatting are is easily
              customized based on applications.
            </li>
          </ul>
        </div>

        <div className={styles.development_right_section}>
          <img src="/aiml_img5.png" alt="aiml_img5" loading="lazy" />
        </div>
      </section>

      <section className={`${styles.analysis} ${styles.block}`}>
        <div className={styles.analysis_left_section}>
          <p className={styles.section_title}>
            <span className={styles.coloredPart}>DS</span>
            Ai - Model for Predictive Analysis of Li-ion Battery Pack
          </p>

          <ul className={styles.unordered_list}>
            <li className={styles.list_item}>
              <span>Prediction Model for Designing Battery Pack:</span>
              <p>
                DL/CNN model is used for selecting battery pack design
                parameters that lead to the targeted performance characteristics
              </p>

              <ul className={styles.inner_unordered_list}>
                <li className={styles.inner_list_item}>
                  Uses historical dataset based on Multi-physics experimental
                  data, and cell makers’ data set for different battery
                  chemistries.
                </li>
              </ul>
            </li>

            <li className={styles.list_item}>
              <span>Machine Learning Model for BMS/Edge Device:</span>
              <ul className={styles.inner_unordered_list}>
                <li className={styles.inner_list_item}>
                  Real time performance monitoring for controlling and keeping
                  performance at the optimum level.
                </li>
                <li className={styles.inner_list_item}>
                  Real-time monitoring of any anomalies that may lead to safety
                  concerns such as Thermal Runway.
                </li>
              </ul>
            </li>
          </ul>
        </div>

        <div className={styles.analysis_right_section}>
          <div className={styles.first}>
            <p className={styles.sec_title}>
              Historical data set for the <em>Training Model</em>
            </p>
            <div className={styles.imgs}>
              <div className={styles.first_img}>
                <img src="/aiml_img6.png" alt="aiml_img_6" loading="lazy" />
                <p>CTC or CTM Temperature variation within the battery pack</p>
              </div>
              <div className={styles.second_img}>
                <img src="/aiml_img7.png" alt="aiml_img_7" loading="lazy" />
                <p>
                  Cell performance characteristics : Voltage = f [Temp (T) ,
                  Current Density,(i), SOC or Time]
                </p>
              </div>
            </div>
          </div>

          <div className={styles.second}>
            <img src="/aiml_img8.png" alt="aiml_img_7" loading="lazy" />
          </div>
        </div>
      </section>

      <section className={`${styles.design} ${styles.block}`}>
        <div className={styles.design_left_section}>
          <p className={styles.section_title}>
            <span className={styles.coloredPart}>DS</span>
            AI - Generative Design
          </p>

          <ul className={styles.unordered_list}>
            <li className={styles.list_item}>
              Generative design models use AI-Deep learning network and
              algorithms
              <ul className={styles.inner_unordered_list}>
                <li className={styles.inner_list_item}>
                  can generate exhaustive number of design iterations, leading
                  to an optimize product design.
                </li>
              </ul>
            </li>
            <li className={styles.list_item}>
              AI-DL model learn automatically from the performances of previous
              product designs.
            </li>
            <li className={styles.list_item}>
              Involves training using historical database generated by running
              thousands of simulation runs over the range of parameters, and
              performance data from wind turbine manufacturers.
            </li>
            <li className={styles.list_item}>
              <span className={styles.coloredPart}>DS</span>AI – Generative
              Design Model can be customized based users’ applications.
            </li>
          </ul>
        </div>

        <div className={styles.design_right_section}>
          <p className={styles.sec_title}>
            <span className={styles.coloredPart}>Customized Example: </span>
            Wind Turbine Design
          </p>

          <div className={styles.design_first}>
            <img src="/aiml_img9.png" alt="aiml_img_9" loading="lazy" />
          </div>

          <div className={styles.design_second}>
            <div className={styles.des_imgs}>
              <div className={styles.des_first_img}>
                <div className={styles.container}>
                  <img src="/aiml_img10.png" alt="aiml_img_10" loading="lazy" />
                  <img src="/aiml_img11.png" alt="aiml_img_11" loading="lazy" />
                </div>
                <p>Pressure distribution</p>
              </div>

              <div className={styles.des_second_img}>
                <img src="/aiml_img12.png" alt="aiml_img_12" loading="lazy" />
                <p>Wind Turbine Performance Data from Manufacturer</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DASi;
