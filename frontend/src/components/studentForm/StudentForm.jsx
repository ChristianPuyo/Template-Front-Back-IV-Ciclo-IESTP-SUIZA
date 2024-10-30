import { useState } from "react";
import axios from 'axios';
import useStudentStore from "../../store/studentStore";

const StudentForm = ()=>{
    const {addStudent} = useStudentStore()
    const [studentData, setStudenteData] = useState({
        firstName:"",
        lastName:""  
    })

    console.log(studentData);

    const handleInputChange = (e)=>{
        const  {name, value} = e.target;
        setStudenteData({
            ...studentData,
            [name]:value
        })

    }

    const  handleSubmit = async(e)=>{
        e.preventDefault();
        addStudent(studentData)
        setStudenteData({
            firstName:"",
            lastName:""
        })
        alert("Student Added Successfully")

        
    }

    

    return(
        <div>
            <h1>Student Form</h1>
            <form  onSubmit={handleSubmit}>

                <input
                  type="text"
                  placeholder="Enter firstname"
                  required
                  name="firstName"
                  value={studentData.firstName}
                  onChange={handleInputChange}
                />
                <input
                  type="text"
                  placeholder="Enter lastname"
                  required
                  name="lastName"
                  value={studentData.lastName}
                  onChange={handleInputChange}
                />
                <button>Save</button>
            </form>
        </div>
    )
}

export default  StudentForm;
