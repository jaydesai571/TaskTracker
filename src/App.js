import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'
import {useState, useEffect} from 'react'


function App() {
  const [showAddTask, setshowAddTask] = useState(false)

  const [tasks, settasks] = useState([])

  useEffect(() => {
    const getTasks = async () => {
      const tasksFromServer = await fetchTasks()
      settasks(tasksFromServer)
    }
    getTasks()
  }, [])

// Fetch Data
const fetchTasks = async () =>{
  const res = await fetch('http://localhost:5000/tasks')
  const data = await res.json()
  console.log(data)
  return data
}

const fetchTask = async (id) =>{
  const res = await fetch(`http://localhost:5000/tasks/${id}`)
  const data = await res.json()
  return data
}

//Add Task
const addTask = async (task) => {
  // const id = Math.floor(Math.random() * 10000 + 1)
  // const newTask = { id, ...task }
  // settasks([...tasks, newTask])

  const res = await fetch('http://localhost:5000/tasks', {
    method: 'POST',
    headers: {
      'Content-type': 'application/json'

    },
    body: JSON.stringify(task)
  })

  const data = await res.json()
  settasks([...tasks, data])
}

//Delete task func
const deleteTask = async (id) => {
  // console.log('delete', id)
  await fetch(`http://localhost:5000/tasks/${id}`, {
    method: 'DELETE',
  })
  settasks(tasks.filter((task) => task.id !== id))
}

//Toggle reminders
const toggleReminder = async (id) => {
  // console.log('delete',id);
  const taskToToggle = await fetchTask(id)
  const updateTask = { ...taskToToggle, reminder: !taskToToggle.reminder }
  const res = await fetch(`http://localhost:5000/tasks/${id}`, {
    method: 'PUT',
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify(updateTask)
  })

  const data = await res.json()

  settasks(tasks.map((task) => 
    task.id === id ? 
    {...task, reminder: !data.reminder }: 
    task
    ))
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
