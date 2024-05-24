import Avail from "./Todoitem";


function Todoitems({todoit})
{
  return<>
  {todoit.map((item) => (<Avail todo={item.names} date={item.DueDate}></Avail>)
      )}
  </>;
}



export default Todoitems;