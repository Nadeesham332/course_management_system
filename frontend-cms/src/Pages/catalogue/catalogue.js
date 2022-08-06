import React, { useState , useEffect} from "react";
import Navbar from "../../Navigation/Navbar";
import { Button } from "react-bootstrap";
import axios from "axios";
import '../../styles/catalogue.css'

const Catalogue = () => {
  const [acadamicYr, setAcadamicYr] = useState("2022/2021");
  const [semester, setSemester] = useState("1");
  const [department, setDepartment] = useState("General");
  const [courses,setCourses]=useState([])
  let cnt = -1;
  useEffect(() => {

    let form = new FormData()
    form.append('acadamicYear', acadamicYr)
    form.append('semster',semester)
    form.append('department', department)

    axios.post('http://localhost/viewCourse', form)
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

  }, [])

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
            <option value="2022/2021">2022/2021</option>
            <option value="2021/2020">2021/2020</option>
            <option value="2020/2019">2020/2019</option>
            <option value="2019/2018">2019/2018</option>
          </select>
          &nbsp; &nbsp;
        </label>
        <label>
          Semester:
          <select
            value={semester}
            onChange={(e) => {
              setSemester(e.target.value);
              if (e.target.value < 4) setDepartment("General");
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
              <option value="Civil and Environmental">
                Civil and Environmental
              </option>
              <option value="Electrical and Electronic">
                Electrical and Electronic
              </option>
              <option value="Interdiciplinary Studies">
                Interdiciplinary Studies
              </option>
              <option value="Computing">Computing</option>
            </select>
            &nbsp; &nbsp;
          </label>
        )}

        <button
          disabled={semester > 3 && department === "General"}
          onClick={() => {
            console.log(acadamicYr, semester, department);
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
                      <th className="align-middle">See more</th>
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
                          <td className='text-center'><Button type='button' id={cnt} className='btn-success' ><i className="far fa-eye"></i></Button> </td>
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
