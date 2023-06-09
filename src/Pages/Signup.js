import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Signup = () => {
    const navigate=useNavigate()
    const initialize = {
        Name :"",
        Register_number :"",
        Emailid: "",
        Password:"",
        Hostel_name:"",
        Roomno:"",
    };
    const [data,setData] = useState(initialize);
    const handling = (e) => {
        const name1 = e.target.name;
        const value1 = e.target.value;
        setData(
            { ...data,[name1] : value1}
        )
    }
    const submission =(e) => {
        e.preventDefault()
        
        toast.success('Submitted Successfully!', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
        navigate('/login')
        console.log(data)
    }
    return (
        <div className='panel2' >
        <div className="container my-5" style={{ backgroundColor:'white'}}>
            <form onSubmit={submission} >
                {/* <div className="card"> */}
                    <div className="card-header">
                    Create New Account
                    </div>
                    {/* <div><span class="badge bg-success">Create New Account</span></div> */}
                    <div className="form-group">
                        
                        <label for=""> Name </label>
                        <input type="text" className="form-control "  name="Name" value={data.Name} onChange={handling} placeholder='Name of the student' />
                    </div>
                    <div className="form-group">
                        <label for="">Register number </label>
                        <input type="text" className="form-control"  name="Register_number" value={data.Register_number} onChange={handling}  placeholder='Register Number' />
                    </div>
                    <div className="form-group">
                        <label for="">Email id </label>
                        <input type="text" className="form-control"  name="Emailid" value={data.Emailid} onChange={handling}  placeholder='Email id' />
                    </div>
                    <div className="form-group">
                        <label for="">Password </label>
                        <input type="password" className="form-control"  name="Password" value={data.Password} onChange={handling} placeholder='Password' />
                    </div>
                    <div className="form-group">
                        <label for="">Hostel Name </label>
                        <input type="text" className="form-control"  name="Hostel_name" value={data.Hostel_name} onChange={handling}  placeholder='Hostel Name' />
                    </div>
                    <div className="form-group">
                        <label for="">Room Number </label>
                        <input type="text" className="form-control"  name="Roomno" value={data.Roomno} onChange={handling}  placeholder='Room Number' />
                    </div>
                    <br />
                    <button class="btn btn-primary " style={{width:"150px"}} >Submit</button>
                    <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            />
            </form>
        </div>
        
        </div>
    );
};

export default Signup;