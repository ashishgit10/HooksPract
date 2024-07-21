import React from "react";
import { Todo } from "../model";

interface Props {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const Todolist = ({ todos, setTodos }: Props) => {
  return (
    <div>
      {todos.map((todos) => (
        <li>{todos.todo}</li>
      ))}
    </div>
  );
};

export default Todolist;
