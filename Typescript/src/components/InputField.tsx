import React from "react";

interface Props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handlesubmit: (e: React.FormEvent) => void;
}

const InputField = ({ todo, setTodo, handlesubmit }: Props) => {
  return (
    <form className="relative" onSubmit={handlesubmit}>
      <input
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        placeholder="Add"
        className="border outline-none rounded-xl pl-2 py-1 pr-8"
      />
      <button type="submit" className="absolute right-2 top-1 cursor-pointer">
        🔍
      </button>
    </form>
  );
};

export default InputField;
