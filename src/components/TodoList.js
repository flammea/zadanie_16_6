import React from 'react';
import style from './TodoList.css';
import Todo from './Todo.js';


const TodoList = ({list, remove}) => {
    const tasks = list.map((data) => {
        return <Todo key={data.id} remove={remove} item={data}/>
    });

     return (
        <div className={style.TodoList}>
            <ul>{tasks}</ul>
        </div>
    )
}

export default TodoList;