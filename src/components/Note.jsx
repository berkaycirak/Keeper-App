import DeleteIcon from "@mui/icons-material/Delete";
//Note component will take some properties.

function Note(props) {
  function handleClick() {
    //Since there is a onDelete property inside the Note component on App.jsx, we can catch the onDelete function when the delete button is clicked.

    //Since delete function takes an id parameter, we add it.
    props.onDelete(props.id);
  }

  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      {/* To be able to delete notes, we add functionality to this delete button. Therefore, when delete button is clicked it must trigger a function in the App.jsx   */}

      <button onClick={handleClick}>
        <DeleteIcon />
      </button>
    </div>
  );
}

export default Note;
