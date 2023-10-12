// Manages user ratings and comments
import React, { useState, useEffect } from "react";
import Note from "./Note";
import CreateArea from "./CreateArea";

function Rating({ courseId }) {
  const [notes, setNotes] = useState([]);

  // loads the existing ratings and comments for the course from local storage based on
  // the courseId provided as a prop. It updates the notes state with this data when the component mounts.
  useEffect(() => {
    // Load ratings for the specific course based on courseId
    const storedNotes =
      JSON.parse(localStorage.getItem(`courseNotes-${courseId}`)) || [];
    setNotes(storedNotes);
  }, [courseId]);

  // This function is passed to the CreateArea component as the onAdd prop. It takes a new
  // note (rating and comment) as an argument and updates the notes state by adding the new
  // note to the existing array of notes. Additionally, it stores the updated notes in local
  // storage for the specific course.
  function addNote(newNote) {
    setNotes((prevNotes) => {
      const updatedNotes = [...prevNotes, newNote];
      // Store the updated notes in localStorage for the specific course
      localStorage.setItem(
        `courseNotes-${courseId}`,
        JSON.stringify(updatedNotes)
      );
      return updatedNotes;
    });
  }

  // This function is passed to the Note component as the onDelete prop. It takes the id of the
  // note to be deleted and updates the notes state by removing the note with the corresponding
  // index from the array of notes. Similar to addNote, it also stores the updated notes in
  // local storage for the specific course.
  function deleteNote(id) {
    setNotes((prevNotes) => {
      const updatedNotes = prevNotes.filter((noteItem, index) => index !== id);
      // Store the updated notes in localStorage for the specific course
      localStorage.setItem(
        `courseNotes-${courseId}`,
        JSON.stringify(updatedNotes)
      );
      return updatedNotes;
    });
  }

  return (
    <div>
      {/* componenet that allows users to add new ratings and comments */}
      <CreateArea onAdd={addNote} />
      {notes.map((noteItem, index) => {
        return (
          <Note
            key={index}
            id={index}
            // userName={getRandomUsername}
            rating={noteItem.rating}
            content={noteItem.content}
            onDelete={deleteNote}
          />
        );
      })}
    </div>
  );
}

export default Rating;
