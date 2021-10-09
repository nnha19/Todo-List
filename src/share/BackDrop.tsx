import React from "react";

const BackDrop = (props: { clicked: () => void; testId?: string }) => {
  return (
    <div
      data-testid={props.testId}
      onClick={props.clicked}
      className="h-screen w-screen inset-0 bg-black fixed"
    ></div>
  );
};

export default BackDrop;
