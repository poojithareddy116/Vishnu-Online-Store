import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Admin from './Pages/Admin';
import CartItems from './Pages/CartItems';
import Edit from './Pages/Edit';
import Home from './Pages/Home';
import Login from './Pages/Login';
import Logout from './Pages/Logout';
import Navbar from './Pages/Navbar';
import PageNotFound from './Pages/PageNotFound';
import Shop from './Pages/Shop';
import Signup from './Pages/Signup';
import Pay from './Pages/Pay';

const App = () => {
    // const [count,setCount] = useState(0)
    // function increment(){
    //     setCount(count+1)
    // }
    return (
        <div>
           {/* <myCart.Provider value={{count,increment}}>
                <Navbar/>
            </myCart.Provider> */}
            <Navbar/>
           
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='login' element={<Login/>}/>
                <Route path='signup' element={<Signup/>}/>
                <Route path='logout' element={<Logout/>}/>
                <Route path='shop' element={<Shop/>}/>
                <Route path='edit' element={<Edit/>}/>
                <Route path='admin' element={<Admin/>}/>
                <Route path='cart' element={<CartItems/>} />
                <Route path='pay' element={<Pay/>} />
                <Route path='page-not-found' element={<PageNotFound/>}/>
            </Routes>
        </div>
    );
};

export default App;

