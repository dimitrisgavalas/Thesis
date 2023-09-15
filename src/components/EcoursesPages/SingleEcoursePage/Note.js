import React from "react";

function Note(props) {
  return (
    <div className="m-2 pt-5 pb-5 justify-content-center border-2 surface-border border-round p-2 ">
      <h3>{props.title}</h3>
      <p>{props.content}</p>
    </div>
  );
}

export default Note;
