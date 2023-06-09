import React, { useEffect, useState } from "react";
import axios from 'axios'
// import { getDetails } from "./StoresData";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

const Edit = () => {
//   const data = getDetails();
  const [dbdata, setData] = useState([]);
  const navigate=useNavigate()
        useEffect(() => {
            axios.get("http://localhost:3002/admin").then((response) => {
            // console.log(dbdata)
            setData(response.data);
            });
        }, [dbdata]);
        const remove = (event)=>{
          toast.warn('Removed from Products...', {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            });
            axios
            .post("http://localhost:3002/outofstock", {
            input:event.target.id,
            })
            .then((response) => {
            alert("deleted");
            console.log(response);
            })
            .catch((err) => {
            console.log(err);
            });
        }

        const update=(event)=>{
          toast.success('Available Now...', {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            });
            axios
            .post("http://localhost:3002/update", {
            input:event.target.id,
            })
            .then((response) => {
            alert("updated");
            console.log(response);
            })
            .catch((err) => {
            console.log(err);
            });
        }

        const go=()=>{
          navigate('/')
        }
  return (
    <div>
      
      <div>
      {dbdata.map((item) => {
        return (
        
          <div  style={{marginLeft:"40px",display:"inline-block",outline:"1px solid black",borderRadius:"5px",marginTop:"20px"}} >
              <div style={{display:"inline-block"}}>
                <div style={{textAlign:"center"}}><b> {item.name}</b></div>
              <img
                className="storeimg"
                src={item.img}
                height="200px"
                width="200px"
                alt="product"
                style={{borderRadius:"50%",padding:"15px",justifyContent:"center"}}
              />
              </div>
              <div className="card-title"  style={{display:"inline-block",marginLeft:"20px",padding:"15px"}}>
                 <p>
                   <i class="fa fa-inr"> {item.price}</i>
                 </p>
                   <button style={{width:"120px"}} className="btn btn-outline-success btn-sm" id={item.id} onClick={update}>Available</button>
                   <br />
                   <br />
                   <button id={item.id} className="btn btn-outline-danger btn-sm" onClick={remove}>Out of Stock</button>
              </div>
          </div>         
        );
      })}
      </div>
      <div>
      <button className="btn btn-primary" style={{float:"right",marginBottom:"50px",marginRight:"50px"}} onClick={go}>Log out</button>
      </div>
      <ToastContainer
position="top-right"
autoClose={3000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
/>
    </div>
  );
};

export default Edit;
