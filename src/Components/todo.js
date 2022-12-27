import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addToDo, deleteAll } from "../reducer/ToDoSlice";
import ListItems from "./listItems";

function Todo() {
  const [inputData, setInputData] = useState("");
  const dispatch = useDispatch();

  const addNewItem = () => {
    if (inputData === "") {
      alert("Enter something to the input box");
      return;
    }
    dispatch(addToDo({ data: inputData, id: new Date().getTime().toString() }));
    setInputData("");
  };
  return (
    <>
      <div className="main-div">
        <div className="child-div">
          <figure>
            <figcaption style={{ textAlign: "center", margin: "20px 0px" }}>
              Add Your List Here
            </figcaption>
          </figure>
          <div className="addItems">
            <input
              type="text"
              placeholder="Enter List Items"
              value={inputData}
              onChange={(e) => setInputData(e.target.value)}
            />
            <i className="fa fa-plus add-btn" onClick={addNewItem}></i>
          </div>
          <ListItems />
          <button class="btn" onClick={() => dispatch(deleteAll())}>
            Check List
          </button>
        </div>
      </div>
    </>
  );
}

export default Todo;
