import { useState } from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "../../Navigation/Navbar";
import axios from "axios";

function CourseDetails() {
 
  const { id } = useParams();  //id-course code
  const cnt=-1;
//   console.log(id)
  const [courseDetaiils, setCourseDetails] = useState([]);
    // setCourse(id);
    useEffect(() => {

        let form = new FormData()
        form.append('courseCode', id)
    
        axios.post('http://localhost/viewCourseDetails', form)
          .then(res => {
            setCourseDetails(res.data);
            // console.log(res.data);
          })
          .catch(
            (error) => {
              console.log('Database not connected!');
              // setConError(true);
            }
          );
    
      }, [])
    
  return (
    <>
      <Navbar />
      <br />
      {/* <h3 className="text-center">Courses of {id}</h3> */}
      <div className="container" id="app-root" >

<div className="row justify-content-center">
  {/* <div className="text-center mb-5">
    <h2 className="heading-section">{id} {courseDetaiils.course}</h2>
  </div> */}
  {/* <div className="iname" display="table"> */}
    <div>
      <h5 className="text-left mb-3">Course Code: {id}</h5>
      <h5 className="text-left mb-3">Course: {courseDetaiils.course}</h5>
    {/* </div>
    <div> */}

      <h5 className="text-left mb-3">Credits: {courseDetaiils.credits}</h5>
      <h5 className="text-left mb-3">Prerequisite/s: {courseDetaiils.prerequisite}</h5>
      <br></br>
      <h5>Intended Learning Outcomes</h5> <br></br>
      <h5 className="text-left mb-3">{courseDetaiils.outcomes}</h5>
      <hr>
      </hr>
    
      {/* <h5 className="text-left mb-3">{courseDetaiils.outcomes}</h5> */}
    </div>
  {/* </div> */}

</div>

<hr />
<h5 className="text-center mb-3">Syllabus Outline</h5>
<div className="row ">
  <div className="col-md-12 ">
    <div className=" table-responsive-sm  crudAssessTabel">

      {<table className="table table-bordered table-dark table-hover">
        <thead className='text-center '>
          <tr>

            <th >#</th>
            <th className="align-middle">Content</th>
            <th className="align-middle">L</th>
            <th className="align-middle">T</th>
            <th className="align-middle">L/F</th>
            <th>A</th>
        
          </tr>
        </thead>
        <tbody>
          {courseDetaiils.map((result) => {
            cnt = cnt + 1;
            return (
              <tr key={result.syllabusOutline.topic}>
                <td >{cnt}</td>
                <td>{result.syllabusOutline.topic}<br/>{result.syllabusOutline.discription}</td>
                <td >{result.l_h}</td>
                <td>{result.t_h}</td>
                <td>{result.l_f_h}</td>
                <td>{result.a_h}</td>
              
              </tr>
            )
          })}
        </tbody>
      </table>}
    </div>

  </div>
</div>

<hr />
<h5 className="text-left mb-3">Assessment/ Evaluation Details </h5>
{courseDetaiils.map((result) => {
    
            return (
                <h4 className="text-left mb-3">{result.assignment.asignmnetMethod}: {result.assignment.percentage}</h4>         
            )
          })}
<hr/>
<h5 className="text-left mb-3">References</h5>
<br>
</br>
<h4>{courseDetaiils.references}</h4>
</div>
    </>
  );
}

export default CourseDetails;
