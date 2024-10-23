import { useState } from "react";
import axios from 'axios'

const StudentForm = ()=>{
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
        try {
            const response = await axios.post("http://localhost:3001/student", studentData)
            console.log("Response:",response.data);
        } catch (error) {
            console.log("Error:",error)
        }
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
