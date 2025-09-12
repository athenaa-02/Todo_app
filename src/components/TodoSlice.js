import { createSlice } from "@reduxjs/toolkit";

const InitialState = {
    todos: [],
};

const todoSLice = createSlice(
    {
        name: 'todos',
        InitialState,
        reducers:{
            
        }
    }
)