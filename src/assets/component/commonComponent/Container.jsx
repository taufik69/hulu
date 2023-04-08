import React from "react";

const Container = (props) => {
  return (
    <>
      <div className={props.container}>{props.children}</div>
    </>
  );
};

export default Container;
