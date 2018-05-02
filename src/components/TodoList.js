import React from 'react';
import style from './TodoList.css';


const TodoList = props => {
    const tasks = props.list.map((item) => {
        return (
        	<div>
            	<a href={'#'} onClick={() => props.remove(item.id)} key={item.id}>
            	<i className={'fas fa-angle-double-right fa-fw'}></i> 
                {item.text}
            	</a><br/>
            </div>
        )
    });

     return (
        <div className={style.TodoList}>
            <ul>{tasks}</ul>
        </div>
    )

}

export default TodoList;