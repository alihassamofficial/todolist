import { Fragment } from "react";

const MyTodo = (props) => {
  return (
    <Fragment>
      <h1>{props.name}</h1>
      <button>Done</button>
      <button>Undo</button>
    </Fragment>
  );
};

export default MyTodo;
