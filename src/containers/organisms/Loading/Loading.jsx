import React from "react";
import { Spinner } from "reactstrap";

const LoadingScreen = (props) => {
  return (
    <div>
      <Spinner style={{ width: "3rem", height: "3rem" }} />
    </div>
  );
};

export default LoadingScreen;
