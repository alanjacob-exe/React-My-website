import React from "react";
import "./home.css";
import photo from "../../assets/alan2.jpg";

export default function Test(props) {
  return (
    <div>
      <div className="w-screen h-screen bg-black">
        <div className="bm-pl ">
          <div className="z-10 w-full h-full absolute">
            <div className=" flex h-full w-full">
              <div className="m-auto ">
              <img style={{borderRadius:"50%"}} src={photo} width={200} height={200} />

              </div>
            </div>{" "}
          </div>
          <div className="bm-pl__blob bm-pl__blob--r"></div>
          <div className="bm-pl__blob bm-pl__blob--g"></div>
          <div className="bm-pl__blob bm-pl__blob--b"></div>
        </div>
      </div>
    </div>
  );
}
