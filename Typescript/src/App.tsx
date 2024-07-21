import { useState } from "react";
import "./App.css";
import InputField from "./components/InputField";
import { Todo } from "./model";
import Todolist from "./components/Todolist";

const App: React.FC = () => {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);

  const handlesubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (todo) {
      setTodos([...todos, { id: Date.now(), isDone: false, todo }]);
      setTodo("");
    }
    console.log(todos);
  };
  return (
    <>
      <div className="flex items-center justify-center flex-col">
        <div>Hello world</div>
        <InputField todo={todo} setTodo={setTodo} handlesubmit={handlesubmit} />
        <Todolist  setTodos={setTodos} todos={todos}/>
      </div>
    </>  );
};

export default App;
