import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'
import {useState} from 'react'


function App() {
  const [showAddTask, setshowAddTask] = useState(false)

  const [tasks, settasks] = useState([
    {
        id: 1,
        text: 'Doctors Appointment',
        day: 'Feb 5th at 2:30 pm',
        reminder: true
    },
    {
        id: 2,
        text: 'Meeting at School',
        day: 'Feb 6th at 1:30 pm',
        reminder: true
    },
    {
        id: 3,
        text: 'Food Shopping',
        day: 'Feb 5th at 2:30 pm',
        reminder: false
    }
])

//Add Task
const addTask = (task) => {
  const id = Math.floor(Math.random() * 10000 + 1)
  const newTask = { id, ...task }
  settasks([...tasks, newTask])
}

//Delete task func
const deleteTask = (id) => {
  // console.log('delete', id)
  settasks(tasks.filter((task) => task.id !== id))
}

//Toggle reminders
const toggleReminder = (id) => {
  // console.log('delete',id);
  settasks(tasks.map((task) => task.id === id ? {...task, reminder: !task.reminder }: task))
}

  return (
    <div className="container">
      <Header onAdd={() => setshowAddTask(!showAddTask)} showAddTask={showAddTask} />
      { showAddTask && <AddTask onAdd={addTask} /> }
      { tasks.length > 0 ? 
        (<Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />) 
        : ('No Tasks To Show') 
      }
    </div>
  );
}

export default App;
