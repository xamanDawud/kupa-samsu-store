import React from "react";

const DisplayGun = (props) => {
  const { name, bullet, capacity, img, action } = props.allGun;
  //   console.log(props.allGun);
  //   console.log(name, bullet, capacity);
  return (
    <div>
      <div>
        <div className="card w-96 bg-base-100 shadow-xl bg-pink-400 ">
          <figure>
            <img src={img} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              {name}
              <div className="badge badge-secondary">NEW</div>
            </h2>
            <p>{action}</p>
            <div className="card-actions justify-end">
              <div className="badge badge-outline">Fashion</div>
              <div className="badge badge-outline">Products</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DisplayGun;
