import React, { useState } from "react";
import Note from "./Note";
import CreateArea from "./CreateArea";

function Rating() {
  const [notes, setNotes] = useState([]);

  function addNote(newNote) {
    setNotes((prevNotes) => {
      return [...prevNotes, newNote];
    });
  }

  function deleteNote(id) {
    setNotes((prevNotes) => {
      return prevNotes.filter((noteItem, index) => {
        return index !== id;
      });
    });
  }
  const usernamesArray = [
    { username: "user1" },
    { username: "user2" },
    { username: "user3" },
    { username: "user4" },
    { username: "user5" },
    { username: "user6" },
    { username: "user7" },
    { username: "user8" },
    { username: "user9" },
    { username: "user10" },
  ];

  function getRandomUsername() {
    const randomIndex = Math.floor(Math.random() * usernamesArray.length);
    return usernamesArray[randomIndex].username;
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
