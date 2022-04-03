import { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import Fab from "@mui/material/Fab";
import Zoom from "@mui/material/Zoom";

// We pass a props inside the function since we defined a property inside the App.jsx
function CreateArea(props) {
  //In order to track the input and content, we used State function. Beginning value of note is an javascript object taking title and content.
  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  //In order to add functionality to input
  const [isExpanded, setIsExpanded] = useState(false);

  // In order to pass a function when change is detected inside the input and textarea, we create a function taking event.
  // Note that, if there is an event handler such as onChange, onClick or etc. There will be an event. We can use this event and pass through the our function to see its value or etc.
  function handleChange(event) {
    //Since event.target turns an DOM Object, we can destruct it according to our desired properties. That property names must be matched with object's property names.
    const { name, value } = event.target;

    //Here we use a setNote function where we create it inside the useState function. This function helps us to change the note values with new ones.

    // In order to get previous values inside the note object, we pass an arrow function taking one parameter(prevNote) inside to our setNote function, and this arrow function returns a new object taking prevNote object and new value of the name.

    // We use a spread operator(...) to add values inside the prevNote object to our new object.

    // The reason why we pass name inside the [] is to get a actual name. If we write name without [], it will add a new name property inside the object.
    setNote(prevNote => {
      return {
        ...prevNote,
        [name]: value,
      };
    });
  }
  //In order to handle click function, we create a submitNote function. This helps us to add our title and content to screen.
  // Normally, when we submit a form, browser refreshs itself. To avoid that functionality, we use preventDefaul function. This helps us to prevent another action of the form after submiting.
  function submitNote(event) {
    // Remember, we define a prop (onAdd) inside the CreateArea. We can call it function by typing props.onAdd(). Also we pass the note parameter where we define inside the useState function.
    props.onAdd(note);
    setNote({ title: "", content: "" });
    event.preventDefault();
  }
  // In order to expand rows
  const [rows, setRows] = useState("1");
  function handleClick() {
    setRows("5");
  }

  // In order to add functionality to our input, button and textarea
  function expand() {
    setIsExpanded(true);
  }

  return (
    <div>
      <form className="create-note">
        {/* When input detects a change, we should keep track it by using onChange property taking a function. Also, we add a value which takes the note title. */}

        <input
          onClick={expand}
          onChange={handleChange}
          name="title"
          value={note.title}
          placeholder="Title"
        />
        {isExpanded ? (
          <textarea
            onClick={handleClick}
            onChange={handleChange}
            name="content"
            value={note.content}
            placeholder="Take a note..."
            rows={rows}
          />
        ) : null}
        {isExpanded && (
          <Zoom in={true}>
            <Fab onClick={submitNote}>
              <AddIcon />
            </Fab>
          </Zoom>
        )}
      </form>
      {isExpanded ? null : <h4>Click the title to start writing</h4>}
    </div>
  );
}

export default CreateArea;
