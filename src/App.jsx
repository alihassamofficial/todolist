import { Fragment } from "react";
import MyTodo from "./components/MyTodoList";
import { useState } from "react";
const App = () => {
  //const lists = ["Eggs", "Bananas", "Oil"];
  const [lists, setLists] = useState([]);
  let userInput = "";
  const handleInputChange = (e) => {
    userInput = e.target.value;
  };
  const handleAddClick = () => {
    //products.push(userInput);
    const newLists = [...lists, userInput];
    setLists(newLists);
    userInput = "";
  };
  return (
    <Fragment>
      <input
        type="text"
        placeholder="Enter The Value"
        onChange={handleInputChange}
      />
      <button onClick={handleAddClick}>Add Todo List</button>
      {lists.map((list, index) => {
        return <MyTodo key={index} name={list} />;
      })}
      {/* <MyTodo name="Egss" />
      <MyTodo name="Bananas" />
      <MyTodo name="Oil" /> */}
    </Fragment>
  );
};

export default App;
