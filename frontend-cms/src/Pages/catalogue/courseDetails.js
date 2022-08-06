import { useState } from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "../../Navigation/Navbar";

function CourseDetails() {
 
  const { id } = useParams();
  const [course, setCourse] = useState("");
    setCourse(id);

  return (
    <>
      <Navbar />
      <br />
      <h3 className="text-center">Courses of {course}</h3>
    </>
  );
}

export default CourseDetails;
