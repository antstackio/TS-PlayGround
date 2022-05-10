import "./App.css";
import "@hover-design/react/dist/style.css";

import React from "react";

import { StudentRecords } from "./student-record/StudentRecords";

function App() {
  return (
    <div className="App">
      <StudentRecords />
    </div>
  );
}

export default App;
