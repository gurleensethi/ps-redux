import React, { FunctionComponent } from "react";

const Spinner: FunctionComponent<React.HTMLAttributes<HTMLDivElement>> = (
  props
) => {
  return (
    <div
      style={{
        height: "28px",
        width: "28px",
        border: "3px solid #e1e1e1",
        borderRadius: "50%",
        borderBottom: "3px solid blue",
        animation: "spin 1s linear infinite",
        display: "inline-block",
      }}
      {...props}
    />
  );
};

export default Spinner;
