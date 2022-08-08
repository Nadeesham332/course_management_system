import { useState } from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "../../Navigation/Loggedin_Navbar";
import axios from "axios";
import { Button } from "react-bootstrap";

function Department() {
  const [courses,setCourses]=useState([]);
  const { id } = useParams();
  useEffect(() => {
    let data = localStorage.getItem("user");
    data = JSON.parse(data);
    console.log(data);
    if (data === null) window.location.href = `/not_found`;
  }, []);

 
  // useEffect(() => {
  //   if (id === "com") {
  //     setDept("Computer Department");
  //   } else if (id === "mech") {
  //     setDept("Interdiciplinary Studies");
  //   } else if (id === "elec") {
  //     setDept("Electrical and Electonic Department");
  //   } else if (id === "civil") {
  //     setDept("Civil and Environmental Department");
  //   } else {
  //     window.location.href = "/not_found";
  //   }
  // }, [id]);





  let cnt = -1;
  useEffect(() => {

    let form = new FormData()
    form.append('department', id)

    axios.post('http://localhost/viewAllCourses', form)
      .then(res => {
        setCourses(res.data);
        // console.log(res.data);
      })
      .catch(
        (error) => {
          console.log('Database not connected!');
          // setConError(true);
        }
      );
      // setFilter(false)

  }, )

  return (
    <>
      <Navbar />
      <section className="greeting">
    
    <h5>Logged as Dean</h5>
    
    </section>
      <section className="ftco-section hero" >
      <h3 className="text-center">Courses of {id}</h3>
      <br></br>
      <div className="row ">
            <div className="col-md-12 ">
              <div className=" table-responsive-sm  viewCoursesTabel">

                {<table className="table table-bordered table-dark table-hover">
                  <thead className='text-center '>
                    <tr>

                      <th>#</th>
                      <th>Course Code</th>
                      <th>Course</th>
                      <th>Credits</th>
                      <th>Offer/Not</th>
                      <th className="align-middle">View/Edit</th>
                    </tr>
                  </thead>
                  <tbody>
                    {courses.map((result) => {
                      cnt = cnt + 1;
                      return (
                        <tr key={cnt}>
                          <td className='text-center '>{cnt}</td>
                          <td >{result.courseCode}</td>
                          <td className='text-center '>{result.course}</td>
                          <td className='text-center '>{result.credits}</td>
                          <td className='text-center '>{result.offer}</td>
                          <td className='text-center'><Button type='button' id={cnt} className='btn-primary' ><i className="fas fa-edit"></i></Button> </td>
                        </tr>
                      )
                    })}
                  </tbody>
                </table>}
              </div>
            </div>
          </div>
          </section>
    </>
  );
}

export default Department;
