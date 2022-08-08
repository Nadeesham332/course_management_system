import Navbar from "../../Navigation/Loggedin_Navbar";
import Footer from "../../Footer/Footer.js";
import { useState } from "react";
import { useEffect } from "react";
import '../../styles/dean.css'

const Dean = () => {
  const [userID, setUserId] = useState("");

  useEffect(() => {
    let data = localStorage.getItem("user");
    data = JSON.parse(data);
    console.log(data);
    if (data === null) window.location.href = `/not_found`;

    setUserId(data.User_id);
  }, []);


  
  return (
    <>
      <Navbar />
  


      <section className="greeting">
    
      <h5>Hi, Dr. {userID}</h5>
      </section>
  
      <section className="dept">
        
        <ul className="list-unstyled">
     
          <li>
            <a href="/dean/com">Computer Department</a>
          </li>
          <li>
            <a href="/dean/civil">Civil and Environmental Department</a>
          </li>
          <li>
            <a href="/dean/elec">Electrical and Electonic Department</a>
          </li>
          <li>
            <a href="/dean/mech">Interdiciplinary Studies</a>
          </li>
        </ul>
      </section>
      
      <Footer />
    </>
  );
};

export default Dean;
