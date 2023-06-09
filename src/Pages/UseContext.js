import React, { useState } from 'react';
import Navbar from './Navbar';
import Shop from './Shop';

export const cart = React.createContext();
const UseContext = () => {
    const [count, setCount] = useState(0);
    function increment(){
        setCount(count + 1)
    }
    return (
        <div>
            <cart.Provider value={{count,increment}}>
                <Shop/>
                <Navbar/>
            </cart.Provider>
        </div>
    );
};

export default UseContext;