import { useState } from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "../../Navigation/Navbar";
import axios from "axios";
import Footer from "../../Footer/Footer"

function CourseDetails() {
 
  const { id } = useParams();  //id-course code
  const cnt=-1;
  const [courseDetaiils, setCourseDetails] = useState([]);
  const [syllabus, setSyllabus] = useState([]);
  const [prerequisite,setPrerequisite]= useState([]);
  const [references,serReferences]= useState([]);
  const [evaluation,setEvaluation]= useState([]);
  const [learningOutcomes,setLearningOutcomes]= useState([]);

    useEffect(() => {

        axios.get('http://localhost:3000/courseData', {params: {
          courseCode:id
        }})
          .then(res => {
            setCourseDetails(res.data);
            setSyllabus(res.data.sysllabus)
            setPrerequisite(res.data.prerequisites)
            serReferences(res.data.textReference)
            setEvaluation(res.data.evaluationDetails)
            setLearningOutcomes(res.data.learning_outcomes.split(";"))
          })
          .catch(
            (error) => {
              console.log('Database not connected!');
            }
          );
    
      }, [])

    
  return (
    <>
      <Navbar />
      <br />
      <div className="container" id="app-root" >

<div className="row justify-content-center">
    <div>
      <h5 className="text-left mb-3">Course Code: {id}</h5>

      <h5 className="text-left mb-3">Course: {courseDetaiils.title}</h5>
    {/* </div>
    <div> */}

      <h5 className="text-left mb-3">Credits: {courseDetaiils.credits}</h5>
      <h5 className="text-left mb-3">Prerequisite/s: {prerequisite.length===0? 'No':courseDetaiils.prerequisites.toString()}</h5>
      
      <h5>Intended Learning Outcomes:</h5> 
      {/* <li className="text-left mb-3">{courseDetaiils.learning_outcomes}</li> */}
      {learningOutcomes.map((result,i) => {
                      
             
                      return (
                        
                    <li key={i}>{result}</li>
                      )
                    })}
      <hr>
      </hr>

    </div>
</div>
<hr />
<h5 className="text-center mb-3">Syllabus Outline</h5>
<div className="row ">
  <div className="col-md-12 ">
    <div className=" table-responsive-sm  viewCoursesTabel">

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

           {syllabus.map((result,i) => {
      
            return (
              <tr key={i}>
                <td >{i+1}</td>
                <td><b>{result.topic}</b><br/>{result.discription}</td>
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
{evaluation.map((result) => {
    
            return (
                <li className="text-left mb-3">{result.assessment_method}: {result.percentage}</li>         
            )
          })}
<hr/>
<h5 className="text-left mb-3">References</h5>

{references.map((result,i) => {
                      
             
                      return (
                        
                    <li key={i}>{result}</li>
                      )
                    })}
<br/>
</div>
<Footer/>
    </>
  );
}

export default CourseDetails;
