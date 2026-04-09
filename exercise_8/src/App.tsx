import { use, useState } from 'react'
import './App.css'

 
interface User {
  username : string
  email: string
}

interface Todo {
  id: number
  task: string
  done: boolean
}
function App() {
  // 1 
  const [count, setCount] = useState <number>(0)

  // 2
  const [user , setUser] = useState <User | null>(null)
 
// 3
const [todo , setTodo] = useState<Todo[]>([])
  return (
   <>
   <h2>1</h2>
 <button onClick={() => setCount(count + 1 )} >increament</button>
 <button onClick={() => setCount(count - 1 )} disabled={count === 0}>decreament</button>
 <p>{count}</p>
 
 <h2>2 User</h2>
  <button onClick={() => setUser( { ...user, username: 'MAXAMED' , email: 'md@gmail.com'})}>user</button>
  <button onClick={() => setUser(null)}>user</button>
{user  && <p>{user.username}  : {user.email}</p>}

<h2>3 Todo</h2>
    <button onClick={() => setTodo([...todo , {id:13 , task:'task2', done:false}])}>Todo</button>

    {todo.map((task )=> (
      <div key={task.id}>
         <p>{task.task}</p>
         <p>{task.done ? 'true' : 'false'}</p>
      </div>
    ))}
   </>
  

  )
}

export default App
