import React, { useEffect, useState } from 'react';
// import { getDetails } from "./StoresData";
import axios from 'axios'

// export const cartlen =React.createContext(cartlen)

const CartItems = () => {
    // const data = getDetails();
    const [dbdata, setData] = useState([]);
    const [total,setTotal] = useState(0)
    // const [len,setLen]=useState(0)

    const getTotal=()=>{
      axios.get("http://localhost:3002/total").then((response) => {        
        setTotal(response.data[0].sum);       
        });
    }
    useEffect(() => {
        axios.get("http://localhost:3002/cartdata").then((response) => {
          // console.log(response.data)
        setData(response.data);
        // setLen(response.data.length)
        });
        getTotal()
        

    }, [dbdata]);

    const removecart=(event)=>{
      axios
      .post("http://localhost:3002/removecart", {
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

    
  return (
    <div>
      {dbdata.map((item) => {
        return (
          <div  style={{width:"350px",marginLeft:"100px"}} >
              <div style={{display:"inline-block"}}>
              <img
                className="storeimg"
                src={item.img}
                height="100px"
                width="100px"
                alt="shop"
              />
              </div>
              <div className="card-title"  style={{display:"inline-block",marginLeft:"30px",fontSize:"12px"}}>{item.name}
                 <p>
                   <i class="fa fa-inr"> {item.price}</i>
                 </p>
                   <button className="btn btn-danger btn-sm text-center" id={item.id} onClick={removecart} style={{width:"90px"}}>Remove</button>
                   <br />

              </div>
              <hr />

          </div>
         
        
        );
      })}
     
      <div style={{display:"inline-block",marginLeft:"280px"}}>Total
                 <p>
                   <i class="fa fa-inr"> {total}</i>
                 </p>
                 <br />

            </div>
            <div>
              <button className='btn btn-info' style={{marginLeft:"280px"}}> <a href="./Pay" style={{textDecoration:"none",color:"white"}}>Checkout & Pay</a> </button>
              </div>
    </div>
    
  );
};

export default CartItems;