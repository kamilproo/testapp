import {useDispatch} from "react-redux";
import {deleteTask, editTask} from "../redux/features/TodoSlice";
import '../style/TodoItem.css'
import React, {useState} from "react";


type props = {
    id: number
    text: string
}

const TodoItem = ({id, text}: props) => {
    const dispatch = useDispatch()
    const [edit, setEdit] = useState<Boolean>(false)
    const [inputValue, setInputValue] = useState<string>()


    const handleAction = (id: number) => {
        dispatch(deleteTask(id))
    }

    const handleEditAction = () => {
        setEdit(true)
    }

    const handleEditChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value)
    }

    const handleRenameTaskAction = () => {
        dispatch(editTask({id: id, text: inputValue}))
        setEdit(false)
    }



    return (
        edit ?
            <div className="Container-todolist">
            <input value={inputValue} placeholder="edit task" onChange={handleEditChange}/>
                <button onClick={() => handleRenameTaskAction()}>Ok</button>
            </div>
            :
        <div className="Container-todolist">
            <p>{text}</p>
            <input type="checkbox" />
            <button onClick={() => handleAction(id)}>delete</button>
            <button onClick={() => handleEditAction()}>edit</button>
        </div>
    )
}

export default TodoItem;