import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import axios from "axios";
import { Country, State } from "country-state-city";
// import { FaPhoneAlt } from "react-icons/fa";
import { IoMailOpenSharp } from "react-icons/io5";
// import { FaLocationDot } from "react-icons/fa6";
import BACKEND_URL from "../../service/helper";
import styles from "./Contact.module.css";

let countries = Country.getAllCountries();

const sortedCountries = countries.sort((a, b) => a.name.localeCompare(b.name));

const Contact = () => {
  const { register, formState, getValues, watch, handleSubmit, reset } =
    useForm();
  const { errors } = formState;
  const selectedCountry = watch("country") || "";

  const states = State.getStatesOfCountry(selectedCountry);

  const [isLoading, setIsLoading] = useState(false);
  const [isTokenPresent, setIsTokenPresent] = useState(false);

  useEffect(() => {
    const details = JSON.parse(localStorage.getItem("details"));
    if (!details) return;
    if (details.token) setIsTokenPresent(true);
  }, []);

  const onSubmit = async (contactData) => {
    const details = JSON.parse(localStorage.getItem("details"));

    if (!details) {
      toast.error("token is not present");
      return;
    }

    const headers = {
      Authorization: `Bearer ${details.token}`,
    };

    try {
      setIsLoading(true);
      const {
        data: { msg },
      } = await axios.post(`${BACKEND_URL}/api/public/send-mail`, contactData, {
        headers,
      });
      toast.success(msg);
    } catch (e) {
      toast.error(e.message || "An error occurred");
    } finally {
      reset();
      setIsLoading(false);
    }
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
              <label htmlFor="firstName">First Name</label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                disabled={isLoading}
                className={`${errors?.firstName?.message ? styles.error : ""} ${
                  isLoading ? styles.notAllowed : ""
                }`}
                placeholder={errors?.firstName?.message || ""}
                {...register("firstName", {
                  required: "This field is required",
                  minLength: {
                    value: 1,
                    message: "firstname length should be greater than 1",
                  },
                  maxLength: {
                    value: 20,
                    message: "firstname length should be lesser than 20",
                  },
                })}
              />
            </div>

            <div className={styles["form-group"]}>
              <label htmlFor="lastName">Last Name</label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                disabled={isLoading}
                className={`${errors?.lastName?.message ? styles.error : ""} ${
                  isLoading ? styles.notAllowed : ""
                }`}
                placeholder={errors?.lastName?.message || ""}
                {...register("lastName", {
                  required: "This field is required",
                  minLength: {
                    value: 1,
                    message: "lastname length should be greater than 1",
                  },
                  maxLength: {
                    value: 30,
                    message: "lastname length should be lesser than 30",
                  },
                })}
              />
            </div>

            <div className={styles["form-group"]}>
              <label htmlFor="organization">Organization</label>
              <input
                type="text"
                id="organization"
                name="organization"
                disabled={isLoading}
                className={`${
                  errors?.organization?.message ? styles.error : ""
                } ${isLoading ? styles.notAllowed : ""}`}
                placeholder={errors?.organization?.message || ""}
                {...register("organization", {
                  required: "This field is required",
                  minLength: {
                    value: 1,
                    message: "organization length should be greater than 1",
                  },
                  maxLength: {
                    value: 30,
                    message: "organization length should be lesser than 30",
                  },
                })}
              />
            </div>

            <div className={styles["form-group"]}>
              <label htmlFor="jobTitle">Job Title</label>
              <input
                type="text"
                id="jobTitle"
                name="jobTitle"
                disabled={isLoading}
                className={`${errors?.jobTitle?.message ? styles.error : ""} ${
                  isLoading ? styles.notAllowed : ""
                }`}
                placeholder={errors?.jobTitle?.message || ""}
                {...register("jobTitle", {
                  required: "This field is required",
                  minLength: {
                    value: 1,
                    message: "job title length should be greater than 1",
                  },
                  maxLength: {
                    value: 20,
                    message: "job title length should be lesser than 20",
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
                placeholder={errors?.email?.message || ""}
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
                placeholder={errors?.phone?.message || ""}
                {...register("phone", {
                  required: "This field is required",
                  minLength: {
                    value: 10,
                    message: "Phone number needs a minimum of 10 numbers",
                  },
                  maxLength: {
                    value: 10,
                    message: "Phone number needs a maximum of 10 numbers",
                  },
                })}
              />
            </div>

            <div className={styles["form-group"]}>
              <label htmlFor="country">Country</label>
              <select
                name="country"
                id="country"
                disabled={isLoading}
                className={`${styles.select} ${
                  errors?.country?.message ? styles.error : ""
                } ${isLoading ? styles.notAllowed : ""}`}
                {...register("country", {
                  required: "This field is required",
                })}
              >
                <option value="">--select your country--</option>
                {sortedCountries.map((country) => (
                  <option key={country.isoCode} value={country.isoCode}>
                    {country.name}
                  </option>
                ))}
              </select>
            </div>

            {states.length > 0 && (
              <div className={styles["form-group"]}>
                <label htmlFor="state">State</label>
                <select
                  name="state"
                  id="state"
                  disabled={isLoading}
                  className={`${styles.select} ${
                    errors?.state?.message ? styles.error : ""
                  } ${isLoading ? styles.notAllowed : ""}`}
                  {...register("state", {
                    required: "This field is required",
                  })}
                >
                  <option value="">--select your state--</option>
                  {states.map((state) => (
                    <option key={state.isoCode} value={state.name}>
                      {state.name}
                    </option>
                  ))}
                </select>
              </div>
            )}

            <div className={`${styles.message} ${styles["form-group"]}`}>
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                disabled={isLoading}
                className={`${errors?.message?.message ? styles.error : ""} ${
                  isLoading ? styles.notAllowed : ""
                }`}
                placeholder={errors?.message?.message || ""}
                {...register("message", { required: "This field is required" })}
              />
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className={`${styles.submitBtn} ${
                isLoading ? styles.notAllowed : ""
              }`}
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
