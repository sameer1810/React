import { useState, useEffect } from 'react'
import {TodoProvider} from './context'
import './App.css'
import TodoForm from './components/TodoForm'
import TodoItem from './components/TodoItem'

function App() {
  const [todos, setTodos] = useState([])//todos is array containing all todo, setTodos is a method

  const addTodo = (todo) => {//here todo comes from form
    setTodos((prev) => [{id: Date.now(), ...todo}, ...prev] )//...prev spread previous value
  }//...todo: The spread operator (...) is used to include all the properties of the todo object passed to the addTodo function. For example, if todo is { task: "Learn React" }, the new todo object becomes { id: 1629472815783, task: "Learn React" }.

  const updateTodo = (id, todo) => {//loop for finding the id 
    setTodos((prev) => prev.map((prevTodo) => (prevTodo.id === id ? todo : prevTodo )))     
  }

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id))
  }

  const toggleComplete = (id) => {
    //console.log(id);
    setTodos((prev) => 
    prev.map((prevTodo) => 
      prevTodo.id === id ? { ...prevTodo, 
        completed: !prevTodo.completed } : prevTodo))
  }

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"))

    if (todos && todos.length > 0) {
      setTodos(todos)
    }
  }, [])
  /*
  Purpose 
Initialization: This effect is used to initialize the state of the todos from local storage when the component first mounts. This way, the todos persist even after the user refreshes the page or closes and reopens the browser.
 */

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])
  /*
  Purpose
Synchronization: This effect ensures that the local storage is kept in sync with the current state of the todos. Whenever the todos state changes, the new state is saved to local storage, maintaining the persistence of the todos across page reloads and browser sessions.
  */
  
  



  return (
    <TodoProvider value={{todos, addTodo, updateTodo, deleteTodo, toggleComplete}}> {/* outer curly used in jsx for using js, inner reperesents object*/}
      <div className="bg-[#172842] min-h-screen py-8">
                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
                    <div className="mb-4">
                        {/* Todo form goes here */} 
                        <TodoForm />
                    </div>
                    <div className="flex flex-wrap gap-y-3">
                        {/*Loop and Add TodoItem here */}
                        {todos.map((todo) => (
                          <div key={todo.id}
                          className='w-full'
                          >
                            <TodoItem todo={todo} />
                          </div>
                        ))}
                    </div>
                </div>
            </div>
    </TodoProvider>
  )
}

export default App