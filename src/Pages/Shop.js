import React, {  useEffect, useState } from 'react';
// import {getDetails} from './StoresData'
import axios from 'axios'
import './Style.css'
// import cart from './UseContext';

const Shop = () => {
    // const {increment} = useContext(cart)
     const [dbdata, setData] = useState([]);
        useEffect(() => {
            axios.get("http://localhost:3002/shop").then((response) => {
            // console.log(dbdata)
            setData(response.data);
            });
        }, [dbdata]);

        const add=(e)=>{
            axios
            .post("http://localhost:3002/insert", {
                name:e.target.name,
                price:e.target.id,
                img:e.target.value
            })
            .then(function(response){
                console.log(response)
                
            })
            .catch((error) => {
                console.log(error);       
            });
        }
    return (
        <div>
           {
                dbdata.map((item)=>{
                    return(
                            <div className="outline" key={item.id}>
                             <div className="card text-center">
                                <img className="storeimg" src={item.img} height="200px" width="200px" alt="product" />
                                <div className="card-body">
                                <div className="card-title">{item.name}</div>
                                <p><i class="fa fa-inr"> {item.price}</i></p>
                                <button className="btn btn-outline-primary btn-sm" value={item.img} name={item.name} id={item.price} onClick={add}>Add to Cart</button>
                            </div>
                            </div>
                        </div>
                    )
                })
           } 
        </div>
    );
};

export default Shop;