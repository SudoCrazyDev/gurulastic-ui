import CreateTeacher from "./components/CreateTeacher";
import axios from "axios";
import { useEffect, useState } from "react";

export default function TeacherList() {
  const [teachers, setTeachers] = useState([]);

  const getTeachers = () => {
    axios.get('teacher/list')
    .then((res)=>{
      setTeachers(res.data)
    });
  }

  useEffect(()=>{
    getTeachers();
  },[]);

  return (
    <div className="card shadow" style={{ minHeight: "60vh" }}>
      <div className="card-body">
        <CreateTeacher setTeachers={setTeachers} />
        <div className="table-responsive">
          <table className="table table-striped gy-7 gs-7">
            <thead>
              <tr className="fw-bold fs-6 text-gray-800 border-bottom-2 border-gray-200">
                <th className="min-w-200px">Name</th>
                <th className="min-w-200px">Position</th>
                <th className="min-w-100px">Action</th>
              </tr>
            </thead>
            <tbody>
              {teachers && teachers.map((teacher)=>(
                <tr key={teacher.id}>
                  <td>{teacher.first_name} {teacher.last_name}</td>
                  <td>{teacher.subject_taught}</td>
                  <td>Edinburgh</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
