import {createSlice} from "@reduxjs/toolkit";


interface Model {
    id: number
    text: string
    complete: boolean
}
interface Item {
    items: Model[]
}

const initialState: Item = {
    items: []
}



const TodoSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        addTask: (state, action) => {
            const newTask = {id: Date.now(), text: action.payload, complete: false}
            state.items.push(newTask)
        },
        deleteTask: (state, action) => {
           state.items = state.items.filter((item) => item.id !== action.payload)
        },
        editTask: (state, {payload: {id, text}}) => {
          state.items =  state.items.map(item => item.id === id ? {...item, text}: item)
        },
        searchTask: (state, action) => {
            state.items.map((item) => item.text.includes(action.payload.text))
        },
    }
})

export const { addTask, deleteTask, editTask} = TodoSlice.actions
export default TodoSlice.reducer