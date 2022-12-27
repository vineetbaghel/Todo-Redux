import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteTodo } from "../reducer/ToDoSlice";

function ListItems() {
  const { todoList } = useSelector((state) => state.todo);
  const dispatch = useDispatch();
  const deleteItem = (id) => {
    dispatch(deleteTodo(id));
  };
  return (
    <div className="list">
      {todoList.length > 0 &&
        todoList.map((item) => {
          return (
            <div
              key={item.id}
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <p className="list-items">{item.data}</p>
              <i
                className="fa fa-trash add-btn"
                onClick={() => deleteItem(item.id)}
              ></i>
            </div>
          );
        })}
    </div>
  );
}

export default ListItems;
