import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMailOpenSharp } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";
import BASE_URL from "../../service/helper";
import styles from "./Contact.module.css";

const Contact = () => {
  const { register, handleSubmit, formState } = useForm();
  const { errors } = formState;

  const onSubmit = (data) => {
    const saveDetails = async () => {
      try {
        const { data: resData } = await axios.post(
          `${BASE_URL}/api/user/send-mail`,
          data
        );
        toast.success(resData.msg);
      } catch (error) {
        console.log(error);
        toast.error(error.message || "An error occurred");
      }
    };
    saveDetails();
  };

  const onError = (errors) => {
    console.log(errors);
  };

  return (
    <div className={styles.hero_sec}>
      <div className={styles["contact-container"]}>
        <div className={styles.contact_info_container}>
          <h1>Contact Information</h1>
          <ul className={styles["contact-list"]}>
            <li className={styles.list}>
              <div className={styles.icon}>
                <FaLocationDot size={25} />
              </div>
              <div className={styles.info}>
                <h3>Address</h3>
                <p>1234 Street Name, City, State</p>
              </div>
            </li>

            <li className={styles.list}>
              <div className={styles.icon}>
                <FaPhoneAlt size={25} />
              </div>
              <div className={styles.info}>
                <h3>Phone</h3>
                <p>(123) 456-7890</p>
              </div>
            </li>
            <li className={styles.list}>
              <div className={styles.icon}>
                <IoMailOpenSharp size={25} />
              </div>
              <div className={styles.info}>
                <h3>E-mail</h3>
                <p>contact@company.com</p>
              </div>
            </li>
          </ul>
        </div>

        <div className={styles["contact-form"]}>
          <h2>Contact Us</h2>
          <form
            onSubmit={handleSubmit(onSubmit, onError)}
            className={styles.form}
          >
            <div className={styles["form-group"]}>
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                className={errors.name ? styles.error : ""}
                placeholder={errors?.name?.message || "Enter your name..."}
                {...register("name", {
                  required: "required field*",
                  minLength: {
                    value: 4,
                    message: "name length should be greater than 4",
                  },
                })}
              />
            </div>

            <div className={styles["form-group"]}>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                className={errors.email ? styles.error : ""}
                placeholder={errors?.email?.message || "Enter your email..."}
                {...register("email", { required: "required field*" })}
              />
            </div>

            <div className={styles["form-group"]}>
              <label htmlFor="phone">Phone</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                className={errors.phone ? styles.error : ""}
                placeholder={
                  errors?.phone?.message || "Enter your phone number..."
                }
                {...register("phone", { required: "required field*" })}
              />
            </div>

            <div className={styles["form-group"]}>
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                className={errors.message ? styles.error : ""}
                placeholder={errors?.message?.message || "Enter message..."}
                {...register("message", { required: "required field*" })}
              ></textarea>
            </div>
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
