import React, { useEffect, useState } from "react";
import DisplayGun from "./DisplayGun/DisplayGun";

const LoadGun = () => {
  const [guns, setGuns] = useState([]);
  useEffect(() => {
    fetch("https://raw.githubusercontent.com/mir-hussain/guns/main/data.json")
      .then((res) => res.json())
      .then((data) => setGuns(data));
  });
  return (
    <div>
      {guns.map((gun) => (
        <DisplayGun allGun={gun}></DisplayGun>
      ))}
    </div>
  );
};

export default LoadGun;
