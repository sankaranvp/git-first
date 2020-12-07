import React, { Component } from "react";
import "./TodoApp.css"

class TodoApp extends Component {

	state = {
			input : "",
			items : []
	};

	handleChange=(event)=>{		
		this.setState({
			input : event.target.value
		});		
	};	

	storeItems=(event)=>{
		event.preventDefault();
		/*const allItems = this.state.items;    //Usual method
		allItems.push(this.state.input);        //Usual method */

		this.setState({
			/*items : allItems      //Usual method */
			items : [...this.state.items, this.state.input],   //Advanced method using Spread Operator
			input : ""
		});
	};

	deleteItem=(id)=>{
		/*const allItems = this.state.items; //Usual method
		allItems.splice(index, 1);         //Usual method */

		this.setState({
			/*items : allItems          //Usual method */
			items : this.state.items.filter((data, index) => index !== id) //Advanced method using filter
		})
	};

	editItem=(id)=>{
		alert("Edit here...");
	};

	render (){

		const { input, items } = this.state;

		return(
			<div className="todo-container">	
				<form className="input-section" onSubmit={this.storeItems} >
					<h1>Todo App</h1>
					<input type="text" value={input} onChange={this.handleChange} placeholder="Enter item here..." />
				</form>
				<ul>
					{items.map( (data, index)=>(
						<li key={index}>
							{data}
							<span className="del" onClick={() => this.editItem(index)}>Edit</span>
							<span className="del" onClick={() => this.deleteItem(index)}>Delete</span> 
						</li>
					) )}
				</ul>
			</div>
		);
	}

}
export default TodoApp;