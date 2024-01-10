import {useDispatch} from "react-redux";
import {AppDispatch} from "../redux/store";
import {useEffect, useState} from "react";
import React from "react";
import {addTask} from "../redux/features/TodoSlice";

export const AddTodo: React.FC = () => {
    const dispatch: AppDispatch = useDispatch()
    const [inputValue, setInputValue] = useState('')

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value)
    }

    const handleClickAction = () => {
        if(inputValue.trim()) {
            dispatch(addTask(inputValue))
            setInputValue("")
        }
    }

    return(
        <div>
        <input value={inputValue} placeholder={"new task"} onChange={handleChange}/>
        <button type="submit" onClick={handleClickAction}>Add</button>
        </div>
    )
}