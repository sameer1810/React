import {createContext, useContext} from "react"


//Defining the context
export const TodoContext = createContext({
    todos: [
        {
            id: 1,
            todo: " Todo msg",
            completed: false,
        }
    ],
    addTodo: (todo) => {},
    updateTodo: (id, todo) => {},
    deleteTodo: (id) => {},
    toggleComplete: (id) => {}
})


// CUSTOM HOOK -> to use context
export const useTodo = () => {
    return useContext(TodoContext)
}

export const TodoProvider = TodoContext.Provider