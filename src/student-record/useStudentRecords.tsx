import { useState } from "react";

import { ISchoolStudentData, IStudentData } from "./studentRecord.types";

export const useStudentRecords = () => {
  const [name, setName] = useState<IStudentData["name"]>("");
  const [rollNo, setRollNo] = useState<IStudentData["rollNo"]>(0);
  const [school, setSchool] = useState<IStudentData["school"]>("Blue High");
  const [studentData, setStudentData] = useState<ISchoolStudentData>({
    "Blue High": [],
    "Red University": [],
    "Green Academy": []
  });
  const onSubmit = () => {
    if (school === "Blue High") {
      setStudentData({
        ...studentData,
        "Blue High": [...studentData["Blue High"], { name, rollNo, school }]
      });
    }
    if (school === "Green Academy") {
      setStudentData({
        ...studentData,
        "Green Academy": [
          ...studentData["Green Academy"],
          { name, rollNo, school }
        ]
      });
    }
    if (school === "Red University") {
      setStudentData({
        ...studentData,
        "Red University": [
          ...studentData["Red University"],
          { name, rollNo, school }
        ]
      });
    }
    setName("");
    setRollNo(0);
    setSchool("Blue High");
  };

  return {
    onSubmit,
    studentData,
    name,
    setName,
    rollNo,
    setRollNo,
    setSchool,
    school
  };
};
