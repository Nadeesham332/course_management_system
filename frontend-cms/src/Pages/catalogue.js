import React, { useState } from "react";
import Navbar from "../Navigation/Navbar";

const Catalogue = () => {
  const [acadamicYr, setAcadamicYr] = useState("2022/2021");
  const [semester, setSemester] = useState("1");
  const [department, setDepartment] = useState("General");

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
    </>
  );
};

export default Catalogue;
