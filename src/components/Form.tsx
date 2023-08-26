import { JSX, useState, useEffect , useRef } from "react";
import Btn from "./Btn";
import facebook from "../assets/facebook.svg";
import google from "../assets/google.svg";
import ios from "../assets/ios-apple.svg";
import "../App.css";

interface User {
  email: string;
  password: string;
}

const Form = (): JSX.Element => {
  const [eye, setEye] = useState<boolean>(false);
  const [type, setType] = useState<string>("password");
  const [user, setUser] = useState<User>({ email: "", password: "" });
  const [email , setEmail] = useState<string>("");
  const [password , setPassword] = useState<string>("");
  const pwdRef = useRef(null);
  const emlRef = useRef(null);

  useEffect((): void => {
    const isOpen: boolean = eye;
    isOpen ? setType("text") : setType("password");
  }, [eye]);

  const handleClick = (): void => {
    setEye((b: boolean): boolean => !b);
  };

  const submitForm = (): void => {
    event?.preventDefault();
    if (email === "" || password === "") {
      alert("เกิดข้อผิดพลาดขึ้นโปรดใส่รหัสผ่านและอีเมลก่อน login ใช้งาน");
    } else if (pwdRef?.current?.value?.length < pwdRef.current?.minLength) {
      alert(
        "รหัสผ่านของคุณนั้นต้องมีความยาวอย่างน้อย 8 คำถึงจะใช้เป็นรหัสผ่านได้"
      );
    } else {
      try {
        setUser({
          email: email,
          password: password,
        });
      } catch (err) {
        console.error(err);
      } finally {
        console.log(user);
        alert("บันทึกข้อมูลผู้ใช้งานเรียบร้อย!");
        emlRef.current.value = "";
        pwdRef.current.value = "";
      }
    }
  };
  return (
    <form className="container">
      <header>Let's sign you in</header>
      <div className="item">
        <input
          type="email"
          id="email"
          placeholder="Enter your email"
          onChange={(e:Event):void => { setEmail(e?.target?.value) }}
          required
          ref={emlRef}
        />
      </div>
      <div className="item">
        <input
          type={type}
          id="password"
          placeholder="Enter your password"
          onChange={(e:Event):void => { setPassword(e?.target?.value) }}
          minLength={8}
          maxLength={30}
          required
          ref={pwdRef}
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
      <button className="btn-login" type="submit" onClick={submitForm}>
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
