import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";
import { useState } from "react"

function App() {

  const [addView, setAddView] = useState(false)
  const [tasks, setTasks] = useState(
    [
      {
        id: 1,
        text: 'Doctors Appointment',
        day: 'Feb 5th at 2:30',
        reminder: true,
      },
      {
        id: 2,
        text: 'Meeting at School',
        day: 'Feb 6th at 1:30pm',
        reminder: true,
      },
      {
        id: 3,
        text: 'Food Shopping',
        day: 'Feb 5th at 2:30',
        reminder: false,
      },
    ])
    
    const addTask = (task) => {
      const id = Math.floor(Math.random() * 10000) + 1
      const newTask = {id , ...task}
      setTasks([...tasks, newTask])
    }

  const deleteTask = (id) => {
    setTasks(tasks.filter(t => t.id !== id))
  }


  const toggleReminder = (id) =>{
    
    setTasks(tasks.map(t => t.id === id? {...t, reminder: !t.reminder} :t))
    console.log(tasks.find(t => t.id === id))
  } 

  return (
    <div className="container">
      <Header addViews={() => setAddView(!addView)} showAdd={addView}/>
      {addView? <AddTask onAdd={addTask}/> : ''}
      { tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} onDoubleClick={toggleReminder} /> : 'No tasks to show' }
    </div>
  );
}

export default App;
