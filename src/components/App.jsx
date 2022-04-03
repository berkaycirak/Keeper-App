import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";
import { useState } from "react";

function App() {
  //Since we want to add notes inside an array, we create a react hook. Initial value for notes is an empty array.
  const [notes, setNotes] = useState([]);

  //In order to add the notes on the screen, we create a function which takes note parameter.
  function addNote(note) {
    setNotes(prevNotes => {
      return [...prevNotes, note];
    });
  }

  //We create a function to be able to delete notes. Inside the function, we should have an id to recognize which notes will be deleted.
  // This function will pass over to each of notes that gets rendered.
  function deleteNote(id) {
    //We want to loop through the notes and filter it according to their id.
    // Note that, filter function takes a function as a parameter and this function can have up to 3 parameters. Second parameter will always give the index of the items inside the array.
    setNotes(prevNotes => {
      return prevNotes.filter((noteItem, index) => {
        // arrow function will return the items which have different id value from the clicked one.
        return index !== id;
      });
    });
  }
  return (
    <div>
      <Header />
      {/* Inside the CreateArea, we define a property which is called onAdd, and this property will call the addNote function */}
      <CreateArea onAdd={addNote} />
      {/* map function will loop through the notes array, and inside the map function we also define an arrow function which takes a noteItem as a parameter. This function will return Note component.  */}
      {/* Since this is a JS codes, we should write it into curly braces */}
      {notes.map((noteItem, index) => {
        {
          /* map function also allow us to see index value of the noteItem as like filter function*/
        }
        {
          /* We define a onDelete prop to be able to call the deleteFunction */
        }

        return (
          <Note
            key={index}
            id={index}
            title={noteItem.title}
            content={noteItem.content}
            onDelete={deleteNote}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;
