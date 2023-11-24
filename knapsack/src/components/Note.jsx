import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";

function Note(props) {
  function handleClick() {
    props.onDelete(props.id);
  }

  return (
    <li className="note" style={{ backgroundColor: props.selected ? '#2D9596' : '#fff', color: props.selected ? '#fff' : '#000' }}>
      <h1 >{props.name}</h1>
      <p>{props.weight} Kg</p>
      <div style={{display: 'flex', justifyContent: 'space-between'}}>
      <p>{props.value} $</p>
      <button onClick={handleClick}>
        <DeleteIcon />
      </button>
      </div>
    </li>
  );
}

export default Note;
