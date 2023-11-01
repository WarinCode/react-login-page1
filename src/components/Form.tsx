import { JSX, useState, useEffect } from "react";
import Btn from "./Btn";
import facebook from "../assets/facebook.svg";
import google from "../assets/google.svg";
import ios from "../assets/ios-apple.svg";
import "../App.css";

const Form = (): JSX.Element => {
  const [eye, setEye] = useState<boolean>(false);
  const [type, setType] = useState<string>("password");

  useEffect((): void => {
    const isOpen: boolean = eye;
    isOpen ? setType("text") : setType("password");
  }, [eye]);

  const handleClick = (): void => {
    setEye((b: boolean): boolean => !b);
  };

  return (
    <form className="container">
      <header>Let's sign you in</header>
      <div className="item">
        <input
          type="email"
          id="email"
          placeholder="Enter your email"
          required
        />
      </div>
      <div className="item">
        <input
          type={type}
          id="password"
          placeholder="Enter your password"
          minLength={8}
          maxLength={30}
          required
        />
        <span className="bi-group" onClick={handleClick}>
          {eye ? (
            <i className="bi bi-eye-fill"></i>
          ) : (
            <i className="bi bi-eye-slash"></i>
          )}
        </span>
      </div>
      <a
        href="#"
        target="_blank"
        className="fotgot_password"
        rel="noopener noreferrer"
      >
        Forgot password?
      </a>
      <button className="btn-login" type="submit">
        Login
      </button>
      <Btn
        text="Sign In with Facebook"
        logo={facebook}
        alt={facebook.toString()}
      />
      <Btn text="Sign In with Google" logo={google} alt={google.toString()} />
      <Btn text="Sign In with IOS" logo={ios} alt={ios.toString()} />
      <footer>
        <p>Create an Acccount ?</p>
        <a href="#" target="_blank" rel="noopener noreferrer">
          Register
        </a>
      </footer>
    </form>
  );
};

export default Form;
