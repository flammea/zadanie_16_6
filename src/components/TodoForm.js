import React from 'react';
import style from './TodoForm.css';

class TodoForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			value: ''
		}
	}

	handleChange(event) {
    	this.setState({value: event.target.value});
  		};

  	handleSubmit(event) {
  		console.log(this.state.value);
    	this.props.add(this.state.value);
    	event.preventDefault();
    	this.state.value = '';
  		};

  	render() {

	return (
		<form className={style.TodoForm} onSubmit={event => this.handleSubmit(event)}>
            <section>
	            <input
	              type="text"
	              id="addText"
	              autoComplete="off"
	              placeholder="Add new task"
	              onChange={event => this.handleChange(event)}
	              value={this.state.value}/>
				<button>
					<i className={"fas fa-angle-double-right"}></i>
				</button>	            
	        </section>
          </form>
		)
	}
}

export default TodoForm;
