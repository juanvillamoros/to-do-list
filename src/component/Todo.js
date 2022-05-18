import { useState } from "react";
import {AiOutlineDelete, AiOutlineEdit} from 'react-icons/ai'
import {MdUpdate} from 'react-icons/md'
import "./todoApp.css";

export default function Todo({ item, onUpdate, onComplete, onDelete }) {
    const [isEdit, setIsEdit] = useState(false);
    const [value, setValue] = useState(item.title ?? "");
  
    function handleChange(e) {
      setValue(e.target.value);
    }
  
    function handleUpdate() {
      onUpdate(item.id, value);
      setIsEdit(false);
    }
  
    function handleSubmit(e) {
      e.preventDefault();
      onUpdate(item.id, value);
      setIsEdit(false);
    }
  
    function handleCheckboxChange(e) {
      onComplete(item.id, e.target.checked);
    }
  
    return (
      <div className="todo">
        {isEdit ? (
          <form onSubmit={handleSubmit} className="todoUpdateForm">
            <input
              className="todoInput"
              type="text"
              value={value}
              onChange={handleChange}
            />
            <button className="buttonUpdate" onClick={handleUpdate}>
              Update <MdUpdate />
            </button>
          </form>
        ) : (
          <div className="todoInfo">
            <input

              type={"checkbox"}
              onChange={handleCheckboxChange}
              checked={item.checked}
            />
            <span
              className="todoTitle"
              style={{
                color: item.completed ? "#ccc" : "",
                textDecoration: item.completed ? "line-through" : "",
              }}
            >
              {item.title}
            </span>
            <button className="button" onClick={() => setIsEdit(true)}>
              Edit <AiOutlineEdit />
            </button>
            <button className="buttonDelete" onClick={() => onDelete(item.id)}>
              Delete <AiOutlineDelete />
            </button>
          </div>
        )}
      </div>
    );
  }