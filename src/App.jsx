import Tod from "./components/Tod";
import AddTod from "./components/AddTod";
import Avai from "./components/Avail";
import Avai2 from "./components/Avail2";
import "./App.css"
function App() {
  return (
    <>
      <center className="todo-container">
    <Tod></Tod>
      <AddTod></AddTod>
        <Avai></Avai>
        <Avai2></Avai2>
      </center>
    </>
  );
}

export default App;
