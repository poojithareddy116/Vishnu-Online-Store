import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
// import Shop from './Shop';
import './Style.css'
// import  cart from './UseContext';
import logo from '../Images/unnamed.jpg'
import axios from 'axios'


const Navbar = () => {
    // const {count} = useContext(cart)
    const [len,setLen] = useState(0)
    const [data,setData] = useState(0)


    const styles = ({isActive})=>{
        return{
            color : isActive ? 'skyblue' : 'white',
        }
    }
    useEffect(() => {
        axios.get("http://localhost:3002/cartdata").then((response) => {
          console.log(response.data)
        setLen(response.data.length);
        setData(response.data)
        });
        

    }, [data]);
    

    return (
        
        <div className='navbar'>
                <NavLink style={styles}  to = '/' className = "navlink" ><h4><img src={logo} width='70px' height='45px' alt='logo'/></h4></NavLink>
                <NavLink style={styles} to={'admin'} className='navlink'>Admin</NavLink>
                {/* <NavLink style={styles} to={'logout'} className='navlink'>Logout</NavLink> */}
                
                <NavLink style={styles} to={'cart'} className='navlink'><i
            className='fa fa-shopping-cart'
            aria-hidden='true'
          /> <span style={{color:"red",borderRadius:"50%"}}> <sup>{len}</sup></span>  </NavLink>             
        </div>
    );
};

export default Navbar;