import React, { useState } from "react";
import AddIcon from "@material-ui/icons/Add";
import Fab from "@material-ui/core/Fab";

function CreateArea(props) {

  const [item, setItem] = useState({
    name: "",
    weight : "" , 
    value: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setItem(prevItem => {
      return {
        ...prevItem,
        [name]: name == 'name' ? value : Number(value)
      };
    });
  }

  function submitItem(event) {
    props.onAdd(item);
    setItem({
      name: "",
      weight : "" , 
      value: "",
    });
    event.preventDefault();
  }

  function expand() {
    setExpanded(true);
  }

  return (
    <div>
      <form className="create-note">
      <textarea
          name="name"
          onChange={handleChange}
          value={item.name}
          placeholder="Add a new element..."
          rows={1}
        />
        
        {
          <div style={{display:'flex', alignItems : 'center'}}>
          <input
            name="weight"
            onChange={handleChange}
            value={item.weight}
            placeholder="Poids"
          />
          <span style={{color : 'grey'}}>Kg</span>
          </div>
          }

        
        {
          <div style={{display:'flex', alignItems : 'center'}}>
          <input
            name="value"
            onChange={handleChange}
            value={item.value}
            placeholder="Valeur"
          />
          <span style={{color : 'grey'}}>$</span>
          </div>
        }
          <Fab variant="extended" onClick={submitItem}>
            <AddIcon />Add
          </Fab>
      </form>
    </div>
  );
}

export default CreateArea;
