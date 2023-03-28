import React, { useState } from "react";
import "./App.css";
import NotCompleted from "./components/NotCompleted";
import Completed from "./components/Completed";
import Calendar from "./components/Calendar";
import Footer from "./components/Footer";

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "save the world",
      day: "MONDAY",
      status: "notStarted",
      isCompleted: false,
    },
    {
      id: 2,
      title: "drink lemonade",
      day: "SUNDAY",
      status: "inProgress",
      isCompleted: false,
    },
    {
      id: 3,
      title: "drink water twice a day",
      day: "SATURDAY",
      status: "completed",
      isCompleted: true,
    },
    {
      id: 4,
      title: "eat vegetables",
      day: "WEDNESDAY",
      status: "notStarted",
      isCompleted: false,
    },
    {
      id: 5,
      title: "walk the dog",
      day: "THURSDAY",
      status: "inProgress",
      isCompleted: false,
    },
    {
      id: 6,
      title: "wash the car on Tuesday",
      day: "FRIDAY",
      status: "completed",
      isCompleted: true,
    },
    {
      id: 7,
      title: "buy groceries",
      day: "SUNDAY",
      status: "inProgress",
      isCompleted: false,
    },
    {
      id: 8,
      title: "exercise 30 min",
      day: "SATURDAY",
      status: "notStarted",
      isCompleted: false,
    },
    {
      id: 9,
      title: "read 40 pages a day",
      day: "MONDAY",
      status: "completed",
      isCompleted: true,
    },
    {
      id: 10,
      title: "visit grandma",
      day: "TUESDAY",
      status: "notStarted",
      isCompleted: false,
    },
    {
      id: 11,
      title: "write a journal",
      day: "WEDNESDAY",
      status: "inProgress",
      isCompleted: false,
    },
    {
      id: 12,
      title: "make a to do list",
      day: "THURSDAY",
      status: "completed",
      isCompleted: true,
    },
    {
      id: 13,
      title: "wake up early",
      day: "FRIDAY",
      status: "notStarted",
      isCompleted: false,
    },
    {
      id: 14,
      title: "meditate twice",
      day: "SATURDAY",
      status: "inProgress",
      isCompleted: false,
    },
    {
      id: 15,
      title: "take dance classes",
      day: "SUNDAY",
      status: "completed",
      isCompleted: true,
    },
    {
      id: 16,
      title: "sleep 8 hours",
      day: "SUNDAY",
      status: "inProgress",
      isCompleted: false,
    },
    {
      id: 17,
      title: "take a shower",
      day: "FRIDAY",
      status: "notStarted",
      isCompleted: false,
    },
    {
      id: 18,
      title: "check dentist appointment",
      day: "MONDAY",
      status: "completed",
      isCompleted: true,
    },
    {
      id: 19,
      title: "finish to-do app today",
      day: "MONDAY",
      status: "completed",
      isCompleted: true,
    },
  ]);

  return (
    <div className="container">
      <Calendar />
      <div className="row">
        <NotCompleted
          className="notStarted"
          title={"Not started"}
          status="notStarted"
          tasks={tasks}
          setTasks={setTasks}
        />
        <NotCompleted
          className="inProgress"
          title={"In progress"}
          status="inProgress"
          tasks={tasks}
          setTasks={setTasks}
        />
        <Completed
          className="completed"
          tasks={tasks.filter((item) => item.isCompleted === true)}
          setTasks={setTasks}
        />
      </div>

      <Footer />
    </div>
  );
}

export default App;
