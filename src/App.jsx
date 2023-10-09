import { useState, useEffect } from "react";
import {BrowserRouter as Router, Route,Routes} from 'react-router-dom';
import Header from "./components/Header";
import Tasks from "./components/tasks";
import Addtask from "./components/Addtask";
import Footer from "./components/footer";
import About from "./components/about";

function App() {
  const url = "http://localhost:5000/Tasks";
  const [showAddTask, setShowAddTask] = useState(true);
  const [tasks, setTasks] = useState([]);
  //add tasks
  const addtask = async (task) => {
    const res = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(task),
    });

    const data = await res.json();
    setTasks([...tasks, data]);

    // const id = Math.floor(Math.random() *10000+1)
    // const newTask = {id, ...task}
    // setTasks([...tasks,newTask])
  };
  useEffect(() => {
    const getTasks = async () => {
      const tasksFromServer = await fetchTasks();
      setTasks(tasksFromServer);
    };
    getTasks();
  }, []);
  //fetch tasks
  const fetchTasks = async () => {
    const res = await fetch(url);
    const data = await res.json();
    return data;
  };
  //fetchtask
  const fetchTask = async (id) => {
    const res = await fetch(`http://localhost:5000/Tasks/${id}`);
    const data = await res.json();
    return data;
  };

  //delete tasks
  const deleteTasks = async (id) => {
    await fetch(`${url}/${id}`, { method: "DELETE" });
    setTasks(tasks.filter((task) => task.id !== id));
  };
  //toggle reminder
  const toggleReminder = async (id) => {
    const taskTotoggle = await fetchTask(id);
    const updTask = { ...taskTotoggle, reminder: !taskTotoggle.reminder };
    const res = await fetch(`http://localhost:5000/Tasks/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updTask),
    });
    const data = await res.json();

    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: data.reminder } : task
      )
    );
  };
  return (
   
    <Router>
    <>
      <div className="container bg-zinc-800">
        <Header
          title="Task Tracker"
          onToggle={() => setShowAddTask(!showAddTask)}
          showAdd={showAddTask}
        />
       
     { /*eslint-disable-next-line no-unused-vars*/}
     <Routes>
      <Route path='/'  element={
        <>
 {showAddTask && <Addtask onAdd={addtask} />}
        {tasks.length > 0 ? (
          <Tasks
            tasks={tasks}
            onDelete={deleteTasks}
            onToggle={toggleReminder}
          />
        ) : (
          <h3>No Tasks To Show</h3>
        )}
        </>
      }/>
      <Route path='/about' element={<About/>}/>
      </Routes>
        <Footer/>
      </div>
    </>
    </Router>
  );
 
}

export default App;
