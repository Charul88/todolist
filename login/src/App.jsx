import React from 'react' 
import Login from './Components/Login'
import Title from './Components/Title'
import AddTodo from './Components/AddTodo'
import TodoList from './Components/TodoList'

export default function App() {
  return (
    <>
      <div className='shadow p-3 mb-5 bg-body-tertiary rounded container'>
        <center>
        <Title/>
        <AddTodo/>
        <TodoList/>
        </center>

       </div> 
    </>
  )
}
