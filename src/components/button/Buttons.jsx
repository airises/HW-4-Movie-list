import React from "react";

function Buttons({ children, ...otherProps }) {
  return (
    <div>
      <button className="btn" {...otherProps}>
        {children}
      </button>
    </div>
  );
}

export default Buttons;
