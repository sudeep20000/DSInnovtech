import Carousel from "react-bootstrap/Carousel";
import styles from "./BESAICarousel.module.css";

const images = [
  "/slide/Slide2.JPG",
  "/slide/Slide3.JPG",
  "/slide/Slide4.JPG",
  "/slide/Slide5.JPG",
  "/slide/Slide6.JPG",
  "/slide/Slide7.JPG",
  "/slide/Slide8.JPG",
];

const BESAICarousel = () => {
  return (
    <section className={styles.carouselContainer}>
      <Carousel>
        {images.map((img, i) => (
          <Carousel.Item key={img}>
            <img className={styles.img} src={img} alt={`slide-${i}`} />
          </Carousel.Item>
        ))}
      </Carousel>
    </section>
  );
};

export default BESAICarousel;
