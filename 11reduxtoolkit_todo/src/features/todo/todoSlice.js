import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos : [{ id: 1, text : "hello"}]
}

//slice is bigger than reducer , reducer is a method
export const todoSlice = createSlice({

    name: 'todo',
    initialState,                        //comes from above
    reducers: {                          //reducers contain properties and method
        addTodo : (state,action)=> {     // basic syntax =>state gives the acces of initial state, action give the val from input
            const todo ={
                id: nanoid(),            //genrate unique id
                text : action.payload    //give jnput text
            }
            state.todos.push(todo)      //adding todo in state that is in list of todo
        },
        
        removeTodo: (state,action)=>{
            state.todos = state.todos.filter((todo)=> todo.id!==action.payload)
        }
    }
})

export const {addTodo, removeTodo} = todoSlice.actions  //exporting individual functionality=>w ill be used in componenets

export default todoSlice.reducer
