import { useRef, useState, useEffect } from "react";
import Navbar from "../Navigation/Navbar";
import Footer from "../Footer/Footer";
const Login = () => {
  const userRef = useRef();
  const errorRef = useRef();

  const [user_ID, setUser_ID] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    setErrorMessage("");
  }, [user_ID, password]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password === "1234" && user_ID === "1234@e.com") {
      let user = {
        User_id: user_ID,
      };
      localStorage.setItem("user", JSON.stringify(user));
      console.log(user);
      window.location.href = "/dean";
    } else if (password === "5678" && user_ID === "5678@e.com") {
      let user = {
        User_id: user_ID,
      };
      localStorage.setItem("user", JSON.stringify(user));
      console.log(user);
      window.location.href = "/hod";
    } else {
      alert("Login Failed!");
    }

    setUser_ID("");
    setPassword("");
  };

  return (
    <>
      <Navbar></Navbar>
      <section className="hero text-center">
        <p
          ref={errorRef}
          className={errorMessage ? "errorMessage" : "offscreen"}
          aria-live="assertive"
        >
          {" "}
          {errorMessage}{" "}
        </p>
        <h1>Sign In</h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor="userID">e-mail:</label>
          <input
            type="email"
            id="userID"
            ref={userRef}
            autoComplete="off"
            onChange={(e) => setUser_ID(e.target.value)}
            value={user_ID}
            required
          />
          <div />
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            required
          />
          <div />
          <button>Sign In</button>
        </form>
      </section>
      <Footer />
    </>
  );
};

export default Login;
