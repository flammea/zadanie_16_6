import React from 'react';
import style from './Todo.css';

const Todo = ({item, remove}) => {
    return (
        <li className={'style.Todo'}>
	        <a href={'#'} onClick={() => remove(item.id)} key={item.id}>
	        <i className={'fas fa-angle-double-right fa-fw'}></i> 
	        {item.text}
	        </a><br/>
	    </li>
	)
 }


export default Todo