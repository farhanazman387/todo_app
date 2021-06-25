//handle add, delete, done for todo
import React, { Component } from 'react';
import Todo from './todo';
import AddTodo from './addTodo';

class Todos extends Component {
    //fix value when run
    state = {
        addTodoValue: "",
        todos: [
            {
                id: 1,
                value: "todo 1",
                isDone: false,
            },
            
        ]
    }

    getTimeandDate(){
        let date = new Date();
        var current = date.getTime();
        return current;
    }

    //method called from todo component
    handleDelete = todo =>{
        const todos = this.state.todos.filter((t) => {
            return t.id !== todo;
        });
        this.setState({ todos });
    }

    handleDone = todo =>{
        const todos = [...this.state.todos];
        todos.map((t) => {
            if(t.id == todo.id){
                t.isDone = !t.isDone;
            }
            return t;
        });
        this.setState({todos});
    }

    //method called from addtodo component
    addNewTodo = value => {
        if(value){
            const todos = [...this.state.todos];
            todos.push(
                {
                    id: this.getTimeandDate(),
                    value: value,
                    isDone: false
                }
            );
            this.setState({addTodoValue: " ", todos});
        }
        else{
            console.log("Please add todo text.")
        }
    }

    render(){
        return(
            <table className="table">
                <tbody>
                    {
                        this.state.todos.map((todo, index) => (
                            <tr key={todo.id}>
                                <Todo index={index+1} todo={todo} fooDelete={this.handleDelete} fooDoneDone={this.handleDone}/>
                            </tr>
                        ))
                    }
                    <tr>
                        <td colSpan="4" className="text-center" style={{color:"white"}}>
                            <AddTodo fooAddTodo={this.addNewTodo} addTodoValue={this.state.addTodoValue}/>
                        </td>
                    </tr>
                </tbody>
            </table>
        );
    }
}

export default Todos;