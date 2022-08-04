import Navbar from "../../Navigation/Loggedin_Navbar";
import Footer from "../../Footer/Footer.js";
import { useState } from "react";
import { useEffect } from "react";
import  {Link, useParams} from 'react-router-dom';

const Dean = () => {
  const [userID, setUserId] = useState("");

  useEffect(() => {
    //get data in the session
    let data = localStorage.getItem("user");
    data = JSON.parse(data);
    console.log(data);
    if (data === null) window.location.href = `/not_found`;

    setUserId(data.User_id);
  }, []);
  return (
    <>
      <Navbar />
      {/* <br></br> */}
      <section className="hero text-center">
        <ul className="list-unstyled mb-0">
          <li>
            <a href="/dean/com">Computer Department</a>
            {/* <Link to="/users/com">Users</Link> */}
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
