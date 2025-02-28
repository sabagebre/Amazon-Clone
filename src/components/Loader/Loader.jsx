import React from "react";
import { BounceLoader } from "react-spinners";

const Loader = () => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "50vh",
      }}
    >
      <BounceLoader color="green" />
     
    </div>
  );
};

export default Loader;
