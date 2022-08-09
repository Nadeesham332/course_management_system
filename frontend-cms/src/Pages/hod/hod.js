import Navbar from "../../Navigation/Loggedin_Navbar";
import Footer from "../../Footer/Footer.js";
import { useState } from "react";
import { useEffect } from "react";
import '../../styles/dean.css'


const Hod = () => {
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
        <h3>Department of</h3><hr/>
        <button>Pending Courses</button>   &nbsp; &nbsp;
        <button>Add a new course</button>   &nbsp; &nbsp;
        <button>Add Course Schedule To New Semester</button>   &nbsp; &nbsp;
        <button>Edit course schedule</button>
<hr/>
      </section>
      
      <Footer />
    </>
  );
};

export default Hod;
