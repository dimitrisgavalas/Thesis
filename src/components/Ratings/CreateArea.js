import React, { useState } from "react";
import { Rating } from "primereact/rating";

function CreateArea(props) {
  const [note, setNote] = useState({
    userName: "",
    rating: "",
    content: "",
  });
  const [value, setValue] = useState(null);

  function handleChange(event) {
    const { name, value } = event.target;

    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value,
      };
    });
  }

  function submitComment(event) {
    props.onAdd(note);
    setNote({
      userName: "",
      rating: "",
      content: "",
    });
    event.preventDefault();
  }

  return (
    <div>
      <div className="card flex justify-content-center">
        <h2>Average Rating</h2>
      </div>

      <div className="card flex justify-content-center">
        {/* <br></br> */}
        <Rating value={4} cancel={false} />
      </div>
      <form className="forms">
        {/* <input
          name="userName"
          onChange={handleChange}
          value={note.userName}
          placeholder="Username"
        /> */}
        {/* <div className="card flex justify-content"> */}
        <Rating
          name="rating"
          value={note.rating}
          onChange={handleChange}
          //   onClick={handleChange}
          cancel={false}
        />
        {/* </div> */}
        <textarea
          name="content"
          onChange={handleChange}
          value={note.content}
          placeholder="Make a Comment..."
          rows="3"
        />
        <button onClick={submitComment}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
