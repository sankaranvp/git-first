import React, { Component } from "react";
import "./TodoApp.css"

class TodoApp extends Component {

	state = {
			input    : "",
			items    : [],
			isEdit   : false,
			edId     : -1
	};

	/* Make input value */
	handleChange=(event)=>{		
		this.setState({
			input : event.target.value
		});		
	};	

	/* Store value when click enter */
	storeItems=(event)=>{
		event.preventDefault();	
		
		/* Update existing value */			
		if(this.state.isEdit){			 
			this.state.items.splice(this.state.edId, 1, this.state.input);
		    this.setState({ 
		    	items : [...this.state.items]
		    });
		 /* Add new value */
		}else{ 	
			/*const allItems = this.state.items;    //Usual method
			allItems.push(this.state.input);        //Usual method */
			this.setState({
				/*items : allItems      //Usual method */
				items : [...this.state.items, this.state.input]   //Advanced method using Spread Operator
			});
		}

		/* Reset the input & boolean value */
		this.setState({ 		    	
	    	input : "",
	    	isEdit : false
		});
	};

	/* Delete item */
	deleteItem=(id)=>{
		/*const allItems = this.state.items; //Usual method
		allItems.splice(index, 1);         //Usual method */
		this.setState({
			/*items : allItems          //Usual method */
			items : this.state.items.filter((data, index) => index !== id) //Advanced method using filter
		});
	};

	/* Edit value when click  */
	editItem=(id)=>{		
		this.setState({ 
			isEdit : true,
			edId   : id,
			input  : this.state.items[id]
		});		
	};	

	render (){

		const { input, items, edId } = this.state;		

		return(
			<div className="todo-container">	
				<form className="input-section" onSubmit={this.storeItems} >
					<h1>Todo App</h1>
					<input type="text" value={input} onChange={this.handleChange} placeholder="Enter item here..." />
					<input type="hidden" value={edId} readOnly />
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