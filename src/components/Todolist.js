import React, { useRef, useState } from "react";
import "./Todolist.scss";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Todo from "./Todo";
import { useSelector, useDispatch } from "react-redux";
import { addTodo } from "../actions";

const Todolist = () => {
  const dispatch = useDispatch();
  const todo = useSelector((state) => state);
  const [inpValue, setInpValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addTodo(inpValue));
    console.log(todo);
  };

  const handleChange = (e) => setInpValue(e.target.value);

  // const items = todo.map((item) => <li>{item.text}</li>);

  return (
    <div>
      <div className="box">
        <form onSubmit={handleSubmit} autoComplete="off">
          <TextField
            className="input"
            id="standard-basic"
            label="New Todo"
            onChange={handleChange}
            value={inpValue}
          />
          <Button type="submit" variant="contained" color="primary">
            Submit
          </Button>
        </form>
      </div>
      {todo.length > 0 && (
        <div className="todo">
          <Todo item={todo} />
        </div>
      )}
    </div>
  );
};

export default Todolist;
