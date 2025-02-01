/* eslint-disable react/no-unescaped-entities */
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import axios from "axios";
import BACKEND_URL from "../../service/helper";
import styles from "./Register.module.css";

const LoginForm = ({ handelSetTab }) => {
  const navigate = useNavigate();
  const { register, formState, getValues, watch, handleSubmit, reset } =
    useForm();
  const { errors } = formState;

  const [isLoading, setIsLoading] = useState(false);

  const handelClickSetTab = (e) => {
    e.preventDefault();
    handelSetTab("login");
  };

  const onSubmit = async (userData) => {
    setIsLoading(true);
    try {
      const { data } = await axios.post(
        `${BACKEND_URL}/api/auth/register`,
        userData
      );
      localStorage.removeItem("page");
      localStorage.setItem("details", JSON.stringify(data));
      toast.success("successfully registered");
      navigate("/");
    } catch (e) {
      console.log(e);
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
    <div className={styles.outer_div}>
      <div className={styles.inner_div}>
        <div className={styles.form_container}>
          <form
            onSubmit={handleSubmit(onSubmit, onError)}
            className={styles.form}
          >
            <p className={styles.form_title}>Create Account</p>

            <div className={styles.input_container}>
              <label htmlFor="name" className={styles.label}>
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                disabled={isLoading}
                className={`${styles.input} ${
                  errors?.name?.message ? styles.error : ""
                } ${isLoading ? styles.notAllowed : ""}`}
                placeholder={errors?.name?.message || ""}
                {...register("name", {
                  required: "This field is required",
                  minLength: {
                    value: 5,
                    message: "name length should be greater than 5",
                  },
                  maxLength: {
                    value: 20,
                    message: "firstname length should be lesser than 20",
                  },
                })}
              />
            </div>

            <div className={styles.input_container}>
              <label htmlFor="phone" className={styles.label}>
                Mobile
              </label>
              <input
                type="phone"
                id="phone"
                name="phone"
                disabled={isLoading}
                className={`${styles.input} ${
                  errors?.phone?.message ? styles.error : ""
                } ${isLoading ? styles.notAllowed : ""}`}
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

            <div className={styles.input_container}>
              <label htmlFor="email" className={styles.label}>
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                disabled={isLoading}
                className={`${styles.input} ${
                  errors?.email?.message ? styles.error : ""
                } ${isLoading ? styles.notAllowed : ""}`}
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

            <div className={styles.input_container}>
              <label htmlFor="password" className={styles.label}>
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                disabled={isLoading}
                className={`${styles.input} ${
                  errors?.password?.message ? styles.error : ""
                } ${isLoading ? styles.notAllowed : ""}`}
                placeholder={errors?.password?.message || ""}
                {...register("password", {
                  required: "This field is required",
                  minLength: {
                    value: 6,
                    message: "password should be minimum 6 character",
                  },
                  maxLength: {
                    value: 10,
                    message: "password should be maximum 10 character",
                  },
                })}
              />
            </div>

            <div className={styles.btn_container}>
              <button type="submit" className={styles.continue}>
                {isLoading ? "Loading..." : "Continue"}
              </button>
            </div>

            <p className={styles.term_condition}>
              By continuing, you agree to DSinnovtech privacy notice and
              conditions of use.
            </p>
          </form>
        </div>
      </div>
      <div className={styles.sign_in_msg}>
        <p>Already have an account?</p>
        <p className={styles.sign_in} onClick={(e) => handelClickSetTab(e)}>
          Sign in
        </p>
      </div>
    </div>
  );
};

export default LoginForm;
