import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Pay = () => {
    const navigate=useNavigate()
    const go=()=>{
        navigate('/')
        toast("😎Hello Whatsapp....!!!", {
            position: "top-center",
            autoClose: false,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
          toast.dismiss()
        

    }
    return (
        <div>
            <h1>Successfully Delivered...</h1>
           <button onClick={go} className="btn btn-info">Logout</button>
           <ToastContainer
                position="top-center"
                autoClose={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
            />
        </div>
    );
};

export default Pay;