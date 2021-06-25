import React, { Component } from 'react';

class AddTodo extends Component {
    state = {
        defaultValue: "",
        value: this.props.addTodoValue
    }

    handleChange = (e) => {
        this.setState({
            value: e.target.value
        });
    }

    clearInput = () => {
        document.getElementById("todoValue").value = "";
        
        this.setState({value:""});
    }

    addTodo = () => {
        this.props.fooAddTodo(this.state.value);
        this.clearInput();
    }

    render() {
        return (
            <div className="input-group mb-3">
                <input type="text" className="form-control" id="todoValue" placeholder="Write any task here..." onChange={this.handleChange} />
                <div className="input-group-append">
                    <button onClick={this.addTodo} className="btn btn-outline-secondary" style={{backgroundColor: "green", color: "white"}} type="button" id="button-addon2">Add Task</button>
                </div>
            </div>
        );
    }
}

export default AddTodo;