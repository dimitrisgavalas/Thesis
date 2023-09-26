import React from "react";
import "./styles.css";
import { Rating } from "primereact/rating";

function Note(props) {
  function handleClick() {
    props.onDelete(props.id);
  }

  return (
    <div className="noteComment">
      <h1>user</h1>
      {/* <div>{props.rating}</div> */}
      <Rating value={props.rating} cancel={false} />
      <p>{props.content}</p>
      <button onClick={handleClick}>DELETE</button>
    </div>
  );
}

export default Note;
// Εξαιρετικό! Είναι ένα ολοκληρωμένο πρόγραμμα για να μάθει κανείς React
// Περίμενα παραπάνω για το κόστος του προγράμματος
// είναι εξαιρετικό! Είναι ένας εξαιρετικός τρόπος να μάθετε React.js και να αναπτύξετε τις επαγγελματικές δεξιότητες στην ανάπτυξη εφαρμογών. Συνιστώ ανεπιφύλακτα!
// Χρειάζεται ενημέρωση το υλικό. Έχει βγει η καινούρια έκδοση της Reactjs και δεν ισχύουν πολλά απο αυτά που αναφέρονται.
