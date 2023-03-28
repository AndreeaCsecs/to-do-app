import React, { useState } from "react";
import { v4 as uuid } from "uuid";

const weekDays = [
  "MONDAY",
  "TUESDAY",
  "WEDNESDAY",
  "THURSDAY",
  "FRIDAY",
  "SATURDAY",
  "SUNDAY",
];

const NotCompleted = ({ tasks, setTasks, title, status }) => {
  const [newTask, setNewTask] = useState("");
  const [filter, setFilter] = useState("");
  const [day, setDay] = useState("Monday");

  const createTask = () => {
    setTasks((tasks) => [
      ...tasks,
      { title: newTask, id: uuid(), isCompleted: false, day, status },
    ]);
  };

  const deleteTask = (id) => {
    setTasks((tasks) => tasks.filter((item) => item.id !== id));
  };

  const handleStatus = (id) => {
    setTasks((tasks) => {
      const copyArr = [...tasks];
      for (let i = 0; i < copyArr.length; i++) {
        if (copyArr[i].id === id) {
          copyArr[i].isCompleted = true;
        }
      }
      return copyArr;
    });
  };

  const draggingOver = (e) => {
    e.preventDefault();
    console.log("dragin over");
  };

  const onDrop = (e) => {
    console.log("dropped");
    const id = e.dataTransfer.getData("id");
    console.log("id is", id);
    let copyData = [...tasks];
    console.log(copyData);
    for (let i = 0; i < copyData.length; i++) {
      if (copyData[i].id == id) {
        copyData[i].status = "inProgress";
      }
    }
    setTasks(copyData);
  };

  const onDragStart = (e, item) => {
    e.dataTransfer.setData("id", item.id);
  };

  return (
    <div className="col me-4 ms-4">
      <br></br>
      <div class="form-check">
        <input
          class="form-check-input me-3"
          type="checkbox"
          value=""
          id="flexCheckChecked"
          checked
        />
        <label class="form-check-label" for="flexCheckChecked">
          <h1>{title}</h1>
        </label>
      </div>

      <div className="pb-3">
        <input
          className=""
          id="search"
          type="text"
          placeholder="SEARCH"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        />
      </div>

      {tasks
        .filter((item) => item.status === status && item.isCompleted === false)
        .map((item) => (
          <div
            draggable
            droppable
            onDragStart={(e) => onDragStart(e, item)}
            onDragOver={(e) => draggingOver(e)}
            onDrop={(e) => onDrop(e)}
            className="list-item container pt-2"
          >
            <ul className="list-unstyled">
              <li className="list-container d-flex mb-3">
                <div className="align-self-center form-check form-check-inline">
                  <input
                    className="form-check-input"
                    id="btn-radio"
                    type="radio"
                    onClick={() => handleStatus(item.id)}
                  />

                  <label class="form-check-label" for="inlineRadio1"></label>
                </div>

                <span className="align-self-center text-start">
                  {item.title}
                </span>

                <span className="ms-auto p-1 btn btn-primary" id="btn-day">
                  {item.day}
                </span>

                <button
                  type="button"
                  onClick={() => deleteTask(item.id)}
                  class="align-self-center btn btn-close btn-close-white"
                  aria-label="Close"
                  id="btn-delete"
                ></button>
              </li>
            </ul>
          </div>
        ))}

      <div className="pt-2">
        <button
          type="button"
          class="btn btn-blue btn btn-outline-primary bi bi-plus blue-color"
          id="newTask"
          onClick={createTask}
          disabled={!newTask}
        ></button>

        <input
          id="new"
          type="text"
          placeholder="Create new task"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />

        <select
          className="btn btn-primary mb-1"
          id="select"
          value={day}
          onChange={(e) => setDay(e.target.value)}
        >
          {weekDays.map((item) => (
            <option value={item}>{item}</option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default NotCompleted;
