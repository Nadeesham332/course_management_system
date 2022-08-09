import Navbar from "./Loggedin_Navbar";
import Footer from "./Footer.js";
import { useState } from "react";
import { useEffect } from "react";
import './dean.css'

const HOD = () => {
  const [userID, setUserId] = useState("");

  useEffect(() => {
    let data = localStorage.getItem("user");
    data = JSON.parse(data);
    console.log(data);
    if (data === null) window.location.href = `/not_found`;

    setUserId(data.User_id);
     }, [])

  return (
     <>
      <Navbar />
      <h3> </h3>

      <div className="HOD-form">
      <div className="HOD-page-container">
      <div className="HOD-page-content">
      <form action="/" method="get">
        <h4 className="HOD-form-title">HEAD OF THE DEPARTMENT</h4>
        <h3> </h3>
        <section className="greeting">
          <h5>Hi, Dr. {userID}</h5> 
        </section>
        <h3> </h3>
        <h3> </h3>
          <label htmlFor="header-search">
              <span>Enter the Course code: </span>
          </label>
          <h3> </h3>
          <input
              type="text"
              id="header-search"
              placeholder="Search blog posts"
              name="s" 
          />
          <h3> </h3>
          <button className="button" type="submit">Search</button>
      </form>
      </div>
      </div>
      </div>
      <h1> </h1>
      <Footer />
     </>
  )
}

export default HOD;