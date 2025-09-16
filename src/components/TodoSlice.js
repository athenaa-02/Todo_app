import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos: [],
};

const todoSlice = createSlice(
    {
        name: 'todos',
        initialState,
        reducers:{
            addTodo:{
                reducer(state, action){
                    state.todos.push(action.payload);
                },
                prepare(text){
                    return {payload: {id:nanoid(), text}}
                }
                ,
                deleteTodo(state, action){
                    state.todos = state.todos.filter((td) => td.id !== action.payload)
                }      
            }
                     
            
        }
    }
)

export const {addTodo, deleteTodo } = todoSlice.actions
export default todoSlice.reducer;

