import React from 'react';
import uuid from 'uuid';
import style from './App.css';
import Title from '../components/Title.js'
import TodoList from '../components/TodoList.js'
import TodoForm from '../components/TodoForm.js'
import { hot } from 'react-hot-loader';


class App extends React.Component {
   constructor(props) {
        super(props);
        this.state = {
            data: [{
                id: 1,
                text: 'practice yoga'
                }, {
                id: 2,
                text: 'learn Angular'
                }, {
                id: 3,
                text: 'take a nap'
                }
            ]
        };
        this.removeTodo = this.removeTodo.bind(this);
        this.addTodo = this.addTodo.bind(this);
    }

    addTodo(val){
        const todo = {
            text: val,
            id: uuid.v4(),
        };
        const data = [...this.state.data, todo];
        this.setState({data});
    }

    removeTodo(id) {
    const remainder = this.state.data.filter(todo => todo.id !== id);
    this.setState({data: remainder});
    }

    render() {
        return (
            <div className={style.TodoApp}>
                <Title title={'To do App'} numberoftasks={this.state.data.length}/>
                <TodoForm add={this.addTodo}/>
                <TodoList list={this.state.data} remove={this.removeTodo}/>
            </div>
        );
    }
}

export default hot(module)(App);
