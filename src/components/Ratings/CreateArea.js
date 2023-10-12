import React, { useState, useEffect } from "react";
import { Rating } from "primereact/rating";

function CreateArea(props) {
  // object that represents a comment/rating entry. It contains userName, rating, and content
  const [note, setNote] = useState({
    userName: "",
    rating: "",
    content: "",
  });
  const [commentCount, setCommentCount] = useState(0);
  const [totalRating, setTotalRating] = useState(0);

  // Calculates the averageRating based on the total rating and comment count.
  const averageRating = commentCount === 0 ? 0 : totalRating / commentCount;

  // Load comments and total rating from local storage on component mount
  useEffect(() => {
    // array of saved comments or an empty array if none exist.
    const savedComments = JSON.parse(localStorage.getItem("comments")) || [];
    // total rating saved in local storage or 0 if not found.
    const savedTotalRating =
      parseFloat(localStorage.getItem("totalRating")) || 0;

    // updates the component's commentCount and totalRating states based on the retrieved data.
    setCommentCount(savedComments.length);
    setTotalRating(savedTotalRating);
  }, []);

  // Handles input changes in the form fields (rating and content) and updates the note state accordingly.
  function handleChange(event) {
    const { name, value } = event.target;

    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value,
      };
    });
  }

  // Handles the submission of a new comment/rating.
  function submitComment(event) {
    // adds the comment to the list of comments.
    props.onAdd(note);

    // parses the note.rating to an integer, add it to the totalRating, and saves it in local storage.

    const rating = parseInt(note.rating) || 0;
    setTotalRating((prevTotal) => prevTotal + rating);

    // Save comment to local storage
    const savedComments = JSON.parse(localStorage.getItem("comments")) || [];
    savedComments.push(note);
    localStorage.setItem("comments", JSON.stringify(savedComments));

    // Save total rating to local storage
    localStorage.setItem("totalRating", totalRating + rating);

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
// localStorage.clear(); //

export default CreateArea;
