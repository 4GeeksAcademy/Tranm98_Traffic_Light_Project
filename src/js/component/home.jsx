import React, {useState} from "react";

//include images into your bundle
//import rigoImage from "../../img/rigo-baby.jpg";


const TrafficLight = () => {
  const [active, setActiveLight] = useState(null);

  return (
    <div className="traffic-light">
      <div className="handle"></div>
      <div className="container">
        <div
          className={active === "red" ? "circle red active" : "circle red"}
          onClick={() => setActiveLight("red")}
        ></div>
        <div
          className={
            active === "yellow" ? "circle yellow active" : "circle yellow"
          }
          onClick={() => setActiveLight("yellow")}
        ></div>
        <div
          className={
            active === "green" ? "circle green active" : "circle green"
          }
          onClick={() => setActiveLight("green")}
        ></div>
      </div>
    </div>
  );
};

export default TrafficLight;
