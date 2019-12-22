import React, { Component } from 'react';
import PropTypes from 'prop-types'
import 'tachyons';

class TodoItem extends Component {
	
	getSpanStyle = () => {
		return {
			lineHeight: '2rem',
			fontSize: '2rem',
			textDecoration: this.props.todo.completed ? 'line-through' : 'none'
		}
	}  

	getDivStyle = () => {
		return {
			backgroundColor: '#f4f4f4',
			padding: '10px',
			border: '1px #ccc dotted'
  	}
  }

  render () {
  	const {id,title} = this.props.todo
  	return (
  		// tychyons unnecessary but works ok in combination with style
			<div style={this.getDivStyle()}  className='br3'> 
				<div style={container}>
					<p style={pStyle}>
							<input style={inputStyle} type="checkbox" onChange={this.props.markComplete.bind(this,id)}/> 
							<span style={this.getSpanStyle()}> {title} </span>
					</p> 
					<button style={btnStyle} onClick={this.props.delTodo.bind(this, id)}> X </button> 
				</div>
			</div>
		)
  }
}

TodoItem.PropType = {
	todo: PropTypes.object.isRequired
}

const pStyle = {
	flex: '1', 
	height: '2rem',
	display: 'flex',
	alignItem: 'center',
}

const inputStyle = {
	height: '1rem',
	width: '1rem',
	zoom: '2',
	// transform: 'scale(1.5)',
	marginLeft: '10px',
	marginRight: '10px'
}

const container = {
	height: '8vh',
	display: "flex",
	alignItems: 'center'
}

const btnStyle = {
  	backgroundColor: '#ff0000',
  	color: '#fff',
  	// textAlign: 'center',
  	// float: 'right',
  	width: '8vh',
  	minWidth: '3rem',
  	height: '8vh',
  	minHeight: '3rem',
  	// lineHeight: '3rem',
  	fontSize: '2rem',
  	borderRadius: '50%',
  	border: 'none',
  	cursor: 'pointer'
}

export default TodoItem;