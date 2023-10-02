import React, { useState } from "react";
import { Rating } from "primereact/rating";

function CreateArea(props) {
  const [note, setNote] = useState({
    userName: "",
    rating: "",
    content: "",
  });
  const [commentCount, setCommentCount] = useState(0); // Initialize comment count to 0

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

    // Update comment count
    setCommentCount((prevCount) => prevCount + 1);

    // Print comment count in console.log
    console.log("Total Comments Published:", commentCount + 1);

    event.preventDefault();
  }

  return (
    <div>
      <div className="card flex justify-content-center">
        <h2>Average Rating</h2>
      </div>

      <div className="card flex justify-content-center">
        <Rating value={4} cancel={false} />
      </div>
      <form className="forms">
        <Rating
          name="rating"
          value={note.rating}
          onChange={handleChange}
          cancel={false}
        />
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
