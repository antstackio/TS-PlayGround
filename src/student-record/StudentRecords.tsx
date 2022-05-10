import { Button } from "@hover-design/react";
import React from "react";

import { schoolNames } from "./constants";
import { ISchoolTypes } from "./studentRecord.types";
import { useStudentRecords } from "./useStudentRecords";

const StudentRecords = () => {
  const {
    onSubmit,
    studentData,
    name,
    setName,
    rollNo,
    setRollNo,
    school,
    setSchool
  } = useStudentRecords();
  return (
    <div>
      <h1>Student Records</h1>
      <div
        style={{
          display: "flex",
          gap: "12px",
          flexDirection: "column",
          margin: "12px 0"
        }}
      >
        <label>
          Name{" "}
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
          />
        </label>
        <label>
          Roll No{" "}
          <input
            value={rollNo}
            onChange={(e) => setRollNo(Number(e.target.value))}
            type="number"
          />
        </label>
        <label>
          School{" "}
          <select
            value={school}
            onChange={(e) => setSchool(e.target.value as ISchoolTypes)}
          >
            {schoolNames.map((schoolName) => (
              <option key={schoolName} value={schoolName}>
                {schoolName}
              </option>
            ))}
          </select>
        </label>
        <Button style={{ width: "120px", margin: "0 auto" }} onClick={onSubmit}>
          Add Student
        </Button>
      </div>
      {schoolNames.map((schoolName, idx) => (
        <div key={`${schoolName}-table`}>
          <h2>{schoolName}</h2>
          <table>
            <tr style={{ background: ["#DCF3FC", "#FFDCE4", "#E0F6E3"][idx] }}>
              <th>Name</th>
              <th>Roll.No</th>
            </tr>
            {studentData[schoolName].map((student) => (
              <tr key={student.name}>
                <td>{student.name}</td>
                <td>{student.rollNo}</td>
              </tr>
            ))}
          </table>
        </div>
      ))}
    </div>
  );
};

export { StudentRecords };
