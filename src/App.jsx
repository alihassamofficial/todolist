import { Fragment } from "react";
import MyTodo from "./components/MyTodoList";
import { useState } from "react";
const App = () => {
  //const lists = ["Eggs", "Bananas", "Oil"];
  const [lists, setLists] = useState([]);
  const [inputValue, setInputValue] = useState("");
  //let userInput = "";
  const handleInputChange = (e) => {
    //userInput = e.target.value;
    setInputValue(e.target.value);
  };
  const handleAddClick = () => {
    //products.push(userInput);
    const newListID = parseInt(Math.random() * 14378671369);
    const newLists = [...lists, { id: newListID, name: inputValue }];
    setLists(newLists);
    setInputValue("");
  };

  const handleDeleteList = (id) => {
    console.log("Delete", { id });
    const newLists = lists.filter((element, index) => {
      if (element.id !== id) {
        return true;
      } else {
        return false;
      }
    });
    setLists(newLists);
  };

  return (
    <Fragment>
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-md">
          <h1 className="text-2xl font-bold text-center mb-4">Todo List</h1>
          <input
            value={inputValue}
            type="text"
            placeholder="Add a new task..."
            onChange={handleInputChange}
            className="border border-gray-300 rounded p-2 w-full mb-4"
          />
          <button
            onClick={handleAddClick}
            className="bg-blue-500 text-white rounded p-2 w-full hover:bg-blue-600"
          >
            Add Todo
          </button>
          <div className="mt-4">
            {lists.map((list) => (
              <MyTodo
                key={list.id}
                id={list.id}
                name={list.name}
                handleDelete={handleDeleteList}
              />
            ))}
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default App;
