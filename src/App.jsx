import Tod from "./components/Tod";
import AddTod from "./components/AddTod";
import "./App.css"
import Todoitems from "./components/Todoitems";
function App() {
  const todoit =[{
    names:"Buy Milk",
    DueDate:"4/10/2023",
  },
  {
    names:"Go to collage",
    DueDate:"4/10/2023",
  },
  {
    names:"Liked the video",
    DueDate:"Now",
  }
]
  return (
    <>
      <center className="todo-container">
    <Tod></Tod>
      <AddTod></AddTod>
      <Todoitems todoit={todoit}></Todoitems>
      
      </center>
    </>
  );
}

export default App;
