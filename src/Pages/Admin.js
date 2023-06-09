import React, { useState } from 'react';

const Admin = () => {
    const initialize = {
        username: "",
        password: "",
      };
      const [data, setData] = useState(initialize);
      const handling = (e) => {
        const name1 = e.target.name;
        const value1 = e.target.value;
        setData({ ...data, [name1]: value1 });
      };
      const submission = (e) => {
        e.preventDefault();
        console.log(data);
      };
      return (
        <div className='panel2' >
        <div className="container my-5" style={{ backgroundColor:'white'}}>
            <form onSubmit={submission} >
                {/* <div className="card"> */}
                    <div className="card-header">
                    Admin 
                    </div>
                    <br />
                    {/* <div><span class="badge bg-success">Create New Account</span></div> */}
                    <div className="form-outline mb">
                <label className="form-label">Username</label>
                <input
                  type="text"
                  className="form-control"
                  name="username"
                  value={data.username}
                  onChange={handling}
                />
              </div>
                    <div className="form-outline">
             <label className="form-label">Password</label>
              <input
                   type="password"
                className="form-control"
                   name="password"
                  value={data.password}
                  onChange={handling}
                />
              </div>
             
                    
                    <br />
                    <button type="button" class="btn btn-primary">
            <a href="/edit" style={{ textDecoration: "none", color: "white" }}>
                Log in
               </a>
                
             </button>                   
            </form>
        </div>
        </div>
      );
};

export default Admin;