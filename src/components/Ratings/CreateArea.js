import React, { useState } from "react";
import { Rating } from "primereact/rating";

function CreateArea(props) {
  const [note, setNote] = useState({
    userName: "",
    rating: "",
    content: "",
  });
  const [commentCount, setCommentCount] = useState(0);
  const [totalRating, setTotalRating] = useState(0);

  // Declare averageRating here
  const averageRating = commentCount === 0 ? 0 : totalRating / commentCount;

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

    const rating = parseInt(note.rating) || 0;
    setTotalRating((prevTotal) => prevTotal + rating);

    setNote({
      userName: "",
      rating: "",
      content: "",
    });

    setCommentCount((prevCount) => prevCount + 1);

    // Calculate averageRating here
    const averageRating = commentCount === 0 ? 0 : totalRating / commentCount;

    // Print comment count, total rating, and average rating in console.log
    console.log("Total Comments Published:", commentCount + 1);
    console.log("Total Star Rating:", totalRating + rating);
    console.log("Average Rating:", averageRating);

    event.preventDefault();
  }

  return (
    <div>
      <div className="card flex justify-content-center">
        <h2>Average Rating</h2>
      </div>

      <div className="card flex justify-content-center">
        <Rating value={averageRating} cancel={false} />
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
