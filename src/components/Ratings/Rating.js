import React, { useState, useEffect } from "react";
import Note from "./Note";
import CreateArea from "./CreateArea";

function Rating({ courseId }) {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    // Load ratings for the specific course based on courseId
    const storedNotes =
      JSON.parse(localStorage.getItem(`courseNotes-${courseId}`)) || [];
    setNotes(storedNotes);
  }, [courseId]);

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

  const usernamesArray = [
    // ... (your usernamesArray)
  ];

  function getRandomUsername() {
    // ... (your getRandomUsername function)
  }

  return (
    <div>
      <CreateArea onAdd={addNote} />
      {notes.map((noteItem, index) => {
        return (
          <Note
            key={index}
            id={index}
            userName={getRandomUsername}
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
