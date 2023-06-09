import React from "react";
import { getDetails } from "./StoresData";
import "./Style.css";

const Stores = () => {
    const data = getDetails();
  const List = data.map((x) => {
    return (
      < >
        <div className="outline" key={x.id}>
            <div className="card text-center">
              <img className="storeimg" src={x.img} height="200px" width="200px" alt="shop" />
              <div className="card-body">
                <div className="card-title">{x.name}</div>
                <button className="btn btn-primary btn-sm"><a href={x.href} style={{color:"white",textDecoration:"none"}}> Shop Now</a></button>
              </div>
            </div>
        </div>
      </>
    );
  });
  return List;
};

export default Stores;
