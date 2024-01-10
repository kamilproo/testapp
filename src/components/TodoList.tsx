import { useSelector} from "react-redux";
import { RootState} from "../redux/store";


import React from "react";
import TodoItem from "./TodoItem";


export const TodoList: React.FC = () => {
    const todo = useSelector((state: RootState) => state.todos.items)

   console.log(todo)

    return(
        <>
            {todo.map((item) => (
                <div key={item.id}>
                    <TodoItem id={item.id} text={item.text}></TodoItem>
                </div>

            ))}
        </>
    )
}
