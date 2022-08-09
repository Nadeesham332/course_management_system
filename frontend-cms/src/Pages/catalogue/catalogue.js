import React, { useState , useEffect} from "react";
import Navbar from "../../Navigation/Navbar";
import { Button } from "react-bootstrap";
import axios from "axios";
import '../../styles/catalogue.css'

const Catalogue = () => {
  const [acadamicYr, setAcadamicYr] = useState("2020_2021");
  const [semester, setSemester] = useState("1");
  const [department, setDepartment] = useState("0");
  const [courses,setCourses]=useState([]);
  const [filter,setFilter]=useState(false);

  useEffect(() => {

    axios.get('http://localhost:3000/seduledCourse', {params: {
      academicYear:acadamicYr,
      semester:semester,
      department:department
    }}) 
      .then(res => {
        setCourses(res.data[0]);
      })
      .catch(
        (error) => {
          console.log('Database not connected!');
          // setConError(true);
        }
      );
  }, [filter])

  return (
    <>
      <Navbar />
      <br />
      <section className="text-center" style={{ justifyContent: "stretch" }}>
        <label>
          Acadamic Year:
          <select
            value={acadamicYr}
            onChange={(e) => setAcadamicYr(e.target.value)}
          >
            <option value="2020_2021">2020/2021</option>
            <option value="2019_2020">2019/2020</option>
            <option value="2018_2019">2018/2019</option>
            <option value="2017_2018">2017/2018</option>
          </select>
          &nbsp; &nbsp;
        </label>
        <label>
          Semester:
          <select
            value={semester}
            onChange={(e) => {
              setSemester(e.target.value);
              if (e.target.value < 4) setDepartment("0");
            }}
          >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
          </select>
          &nbsp; &nbsp;
        </label>
        {semester > 3 && (
          <label>
            Department:
            <select onChange={(e) => setDepartment(e.target.value)}>
              <option value="" disabled selected>
                Select your department
              </option>
              <option value="1">
                Civil and Environmental
              </option>
              <option value="3">
                Electrical and Electronic
              </option>
              <option value="2">
                Interdiciplinary Studies
              </option>
              <option value="4">Computing</option>
            </select>
            &nbsp; &nbsp;
          </label>
        )}

        <button
          disabled={semester > 3 && department === "0"}
          onClick={() => {
            console.log(acadamicYr, semester, department);
            setFilter(!filter);
            // useEffect();
          }}
        >
          Filter
        </button>
      </section>
      {/* <hr /> */}
      <section className="ftco-section hero" >
      <div className="row ">
            <div className="col-md-12 ">
              <div className=" table-responsive-sm  viewCoursesTabel">

                {courses.length!==0 && <table className="table table-bordered table-dark table-hover">
                  <thead className='text-center '>
                    <tr>

                      <th>#</th>
                      <th>Course Code</th>
                      <th>Course</th>
                      <th>Credits</th>
                      {/* <th>Prerequisite/s</th> */}
                      <th className="align-middle">See more</th>
                    </tr>
                  </thead>
                  <tbody>
                    {courses.map((result,i) => {
                      
                      // console.log("coures ====> ",result )
                      return (
                        <tr key={i}>
                          <td className='text-center'>{i+1}</td>
                          <td >{result.course_code}</td>
                          <td className='text-center'>{result.title}</td>
                          <td className='text-center'>{result.credits}</td>
                          {/* <td className='text-center'>{result.title}</td> */}
                          {/* <td className='text-center '>{result.credits}</td> */}
                          <td className='text-center'><Button type='button' id={i} onClick={(e)=>window.location.href=`/catalogue/${result.course_code}`} className='btn-success' ><i className="far fa-eye"></i></Button> </td>
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
};

export default Catalogue;
