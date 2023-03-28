import React, { useState } from "react";

const Completed = ({ tasks }) => {
  const [filter, setFilter] = useState("");
  return (
    <div className="col col-lg-auto me-5">
      <br></br>
      <div class="form-check">
        <input
          class="form-check-input me-3"
          type="checkbox"
          value=""
          id="flexCheckChecked-green"
          checked
        />
        <label class="form-check-label" for="flexCheckChecked">
          <h1>Completed</h1>
        </label>
      </div>
      <input
        id="search"
        type="text"
        placeholder="SEARCH"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      />
      <br></br>
      {tasks
        .filter((item) =>
          item.title.toLowerCase().includes(filter.toLowerCase())
        )
        .map((item) => (
          <ul className="container list-unstyled">
            <div
              key={item.id}
              className={item.isCompleted && "green"}
              id="item"
            >
              <input
                class="form-check-input me-3 mb-2"
                type="checkbox"
                value=""
                id="flexCheckChecked-completed"
                checked
              />
              <li style={{ display: "inline" }}>{item.title}</li>
            </div>
          </ul>
        ))}
    </div>
  );
};
export default Completed;
