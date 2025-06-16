import { useState } from "react";
import "./App.css";

function App() {
  const [task, setTask] = useState([]);
  const [inputValue, setInputValue] = useState("");

  function addTask() {
    if (inputValue.trim()) {
      setTask([...task, inputValue]);
      setInputValue("");
    }
  }

  return (
    <>
      <div className="flex flex-col justify-center items-center m-20 font-sans">
        <h1 className="font-bold text-[40px] mb-4">To Do List</h1>
        <input
          className="border-[2px] border-bdbdbd rounded-[4px] p-2 w-[500px]"
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Enter new Task"
        />
        <button
          className="border border-black rounded-[4px] w-[100px] mt-2 mr-[400px] bg-neutral-100"
          onClick={addTask}
        >
          Add Task
        </button>

        <div className="bg-neutral-100 w-[500px] mt-5 p-3 border-none rounded-[4px]">
          <div className=" flex gap-[300px]">
            Work-1{" "}
            <span className="">
              <button className="bg-indigo-600 text-white rounded-[3px] w-[50px]">
                Edit
              </button>{" "}
              <button className="bg-indigo-600 text-white rounded-[3px] w-[70px]">
                Delete
              </button>{" "}
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
