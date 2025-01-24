import { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import axios from "axios";
// import { FaPhoneAlt } from "react-icons/fa";
import { IoMailOpenSharp } from "react-icons/io5";
// import { FaLocationDot } from "react-icons/fa6";
import BACKEND_URL from "../../service/helper";
import styles from "./Contact.module.css";

const Contact = () => {
  const { register, formState, handleSubmit, reset } = useForm();
  const { errors } = formState;

  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = (data) => {
    const saveDetails = async () => {
      try {
        setIsLoading(true);
        await axios.post(`${BACKEND_URL}/api/user/send-mail`, data);
        toast.success("Thank you for reaching out to us.");
      } catch (error) {
        console.log(error);
        toast.error(error.message || "An error occurred");
      } finally {
        setIsLoading(false);
        reset();
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
            {/* <li className={styles.list}>
              <div className={styles.icon}>
                <FaLocationDot size={25} />
              </div>
              <div className={styles.info}>
                <h3>Address</h3>
                <p>1234 Street Name, City, State</p>
              </div>
            </li> */}

            {/* <li className={styles.list}>
              <div className={styles.icon}>
                <FaPhoneAlt size={25} />
              </div>
              <div className={styles.info}>
                <h3>Phone</h3>
                <p>(123) 456-7890</p>
              </div>
            </li> */}

            <li className={styles.list}>
              <div className={styles.icon}>
                <IoMailOpenSharp size={25} />
              </div>
              <div className={styles.info}>
                <h3>E-mail</h3>
                <p>info@dsinnovtech.com</p>
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
                disabled={isLoading}
                className={`${errors?.name?.message ? styles.error : ""} ${
                  isLoading ? styles.notAllowed : ""
                }`}
                placeholder={errors?.name?.message || "Enter your name..."}
                {...register("name", {
                  required: "This field is required",
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
                disabled={isLoading}
                className={`${errors?.email?.message ? styles.error : ""} ${
                  isLoading ? styles.notAllowed : ""
                }`}
                placeholder={errors?.email?.message || "Enter your email..."}
                {...register("email", {
                  required: "This field is required",
                  pattern: {
                    value: /\S+@\S+\.\S+/,
                    message: "Please provide a valid email address",
                  },
                })}
              />
            </div>

            <div className={styles["form-group"]}>
              <label htmlFor="phone">Phone</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                disabled={isLoading}
                className={`${errors?.phone?.message ? styles.error : ""} ${
                  isLoading ? styles.notAllowed : ""
                }`}
                placeholder={
                  errors?.phone?.message || "Enter your phone number..."
                }
                {...register("phone", {
                  required: "This field is required",
                  minLength: {
                    value: 10,
                    message: "Password needs a minimum of 10 characters",
                  },
                  maxLength: {
                    value: 10,
                    message: "Password needs a maximum of 10 characters",
                  },
                })}
              />
            </div>

            <div className={styles["form-group"]}>
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                disabled={isLoading}
                className={`${errors?.message?.message ? styles.error : ""} ${
                  isLoading ? styles.notAllowed : ""
                }`}
                placeholder={errors?.message?.message || "Enter message..."}
                {...register("message", { required: "This field is required" })}
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className={isLoading ? styles.notAllowed : ""}
            >
              {isLoading ? "Loading..." : "Submit"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
