import React from "react";
import './Style.css'

const Home = () => {
  return (
    <div>     
      <div>
        <div className="panel">      
          <div className="content">
            <div className="container-home">
              <div className="word"><h1 style={{fontFamily:"cursive",marginLeft:"180px"}}>Vishnu Store</h1></div>
              <div className="word"><h1 style={{fontFamily:"cursive",marginLeft:"180px"}}>Welcomes you</h1></div>
              <div className="word"><h1 style={{fontFamily:"cursive"}}>Enjoy Free Door Delivery...🤩</h1></div>
            </div>
            <br />
            <br />
          </div>        
          <div style={{width:"100px",display:"inline-block"}}>
          <button className="homebtn" style={{width:"130px",padding:"10px",backgroundColor:"darkseagreen",color:"white",fontWeight:"bolder"}}><a href="./login" style={{textDecoration:"none",color:"white"}}>Login</a></button>
          </div>
          <div style={{width:"100px",display:"inline-block",paddingLeft:"40px"}}>
            <button  style={{width:"130px",padding:"10px",backgroundColor:"darkseagreen",color:"white",fontWeight:"bolder"}}><a href="./signup"  className="homebtn"  style={{textDecoration:"none",color:"white"}}>Sign up</a></button>
          </div>
        </div>
  
      </div>
    </div>
  );
};

export default Home;
