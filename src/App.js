import Header from './components/Header'
import Tasks from './components/Tasks'
import {useState} from 'react'

function App() {
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

//Delete task func
const deleteTask = (id) => {
  // console.log('delete', id)
  settasks(tasks.filter((task) => task.id !== id))
}

  return (
    <div className="container">
      <Header />
      { tasks.length > 0 ? (<Tasks tasks={tasks} onDelete={deleteTask} />) : ('No Tasks To Show') }
    </div>
  );
}

export default App;
