import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import axios from "axios";
import BACKEND_URL from "../../service/helper";
import styles from "./Login.module.css";

const Login = ({ handelSetTab }) => {
  const navigate = useNavigate();
  const { register, formState, handleSubmit, reset } = useForm();
  const { errors } = formState;

  const [isLoading, setIsLoading] = useState(false);

  const handelClickSetTab = (e) => {
    e.preventDefault();
    handelSetTab("register");
  };

  const validateEmailOrMobile = (value) => {
    // Basic email regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Simple mobile number validation (adjust based on your requirements)
    const mobileRegex = /^[0-9]{10,15}$/; // Accepts 10-15 digits

    if (emailRegex.test(value) || mobileRegex.test(value)) {
      return true;
    }
    return "Please enter a valid email or mobile number";
  };

  const onSubmit = async (userData) => {
    setIsLoading(true);
    try {
      const { data } = await axios.post(
        `${BACKEND_URL}/api/auth/login`,
        userData
      );
      localStorage.removeItem("page");
      localStorage.setItem("details", JSON.stringify(data));
      toast.success("successfully logged in");
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
            className={styles.form}
            onSubmit={handleSubmit(onSubmit, onError)}
          >
            <p className={styles.form_title}>Sign in</p>

            <div className={styles.input_container}>
              <label htmlFor="logInID" className={styles.label}>
                Enter your email or mobile number
              </label>
              <input
                type="text"
                id="logInID"
                name="logInID"
                disabled={isLoading}
                className={`${styles.input} ${
                  errors?.logInID?.message ? styles.error : ""
                } ${isLoading ? styles.notAllowed : ""}`}
                placeholder={errors?.logInID?.message || ""}
                {...register("logInID", {
                  required: "This field is required",
                  validate: validateEmailOrMobile,
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
              By continuing, you agree to DSInnovtech privacy notice and
              conditions of use
            </p>
          </form>
        </div>
      </div>

      <div className={styles.para}>
        <div className={styles.empty}></div>
        <p>New to DSinnovtech?</p>
        <div className={styles.empty}></div>
      </div>

      <button
        onClick={(e) => handelClickSetTab(e)}
        className={styles.goto_register}
      >
        Create your account
      </button>
    </div>
  );
};

export default Login;
