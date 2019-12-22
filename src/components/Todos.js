import React, { Component } from 'react';
import TodoItem from './TodoItem';
import PropTypes from 'prop-types';
import 'tachyons';

class Todos extends Component {

	render () {
		return (
	  	<div>
		  	{
		    	this.props.todos.map((todo) => {
			    		return(<TodoItem key={todo.id} todo={todo} 
		    			markComplete={this.props.markComplete}
		    			delTodo={this.props.delTodo}/>)
		    	})
		    }
	    </div>
  	)
	}
}

Todos.propTypes = {
	todos: PropTypes.array.isRequired
}

export default Todos;