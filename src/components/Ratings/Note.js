import React from "react";
import "./styles.css";
import { Rating } from "primereact/rating";

function Note(props) {
  // function is invoked when the "Del" button is clicked.
  // Calls the onDelete callback function provided via props
  // and passes the id of the comment to be deleted.
  function handleClick() {
    props.onDelete(props.id);
  }

  return (
    <div className="noteComment">
      <h1>user</h1>
      {/* <div>{props.rating}</div> */}
      <Rating value={props.rating} cancel={false} />
      {/* content of the comment. */}
      <p>{props.content}</p>
      <button onClick={handleClick}>Del</button>
    </div>
  );
}

export default Note;
