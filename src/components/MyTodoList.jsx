import { Fragment, useState } from "react";

const MyTodo = (props) => {
  const [isDone, setIsDone] = useState(false);

  const handleToggleDone = () => {
    setIsDone(!isDone);
  };

  return (
    <Fragment>
      <div className="flex items-center justify-between border-b border-gray-300 py-2">
        <h1
          className={`text-lg ${
            isDone ? "line-through text-gray-500" : "text-black"
          }`}
        >
          {props.name}
        </h1>
        <div>
          {isDone ? (
            <button
              onClick={handleToggleDone}
              className="bg-green-500 text-white rounded px-2 py-1"
            >
              Undo
            </button>
          ) : (
            <button
              onClick={handleToggleDone}
              className="bg-blue-500 text-white rounded px-2 py-1"
            >
              Done
            </button>
          )}
          <button
            onClick={() => {
              props.handleDelete(props.id);
            }}
            className="bg-red-500 text-white rounded px-2 py-1 ml-2"
          >
            Remove
          </button>
        </div>
      </div>
    </Fragment>
  );
};

export default MyTodo;
