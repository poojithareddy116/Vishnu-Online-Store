import React, { useState } from "react";

const Login = () => {
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
    <div className="container my-5">
     

      <form onSubmit={submission}>
        {/* <div className="card"> */}
          <div className="card-header">STUDENT LOGIN</div>

          <div className="form-outline mb">
            <br />
            <label className="form-label">Regd No</label>
            <input
              type="text"
              className="form-control"
              name="username"
              value={data.username}
              onChange={handling}
            />
          </div>

          <div className="form-outline mb-4">
            <label className="form-label">Password</label>
            <input
              type="password"
              className="form-control"
              name="password"
              value={data.password}
              onChange={handling}
            />
          </div>

          <button type="button" class="btn btn-primary" style={{width:"120px"}}>
            <a href="/shop" style={{ textDecoration: "none", color: "white" }}>
              Log in
            </a>
            
          </button>

          <div className="text-center">
            <p>
              <br />
              Not have an account ? <a href="./Signup">Register</a>
            </p>
          </div>
        {/* </div> */}
      </form>
    </div>
  );
};

export default Login;
