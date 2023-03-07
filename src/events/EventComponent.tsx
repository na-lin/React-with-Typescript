import React from "react";

const EventComponent: React.FC = () => {
  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event);
  };

  const onDragStart = () => {
    console.log("I'm being dragging");
  };
  return (
    <div>
      {/* <input onChange={(e)=>console.log(e)} /> */}
      <input onChange={onChange} />
      <h3>Drag event</h3>
      <div draggable onDragStart={onDragStart}>
        Drag me!
      </div>
    </div>
  );
};

export default EventComponent;
