import './App.css';
import React, { Component } from 'react';
import Moment from 'moment';
import Todos from './components/todos';


class App extends Component{
  constructor() {
    super();
    this.state = {
      date : Moment(Date().toString()).format("dddd Do MMMM, YYYY"),
    }
  }
  render(){
    return (
      <div className="App">
        <div className="App-header">
          <p>
            My Todo App with Reactjs (only class Component)
          </p>
          <br/>
          <p>
            - {this.state.date} -
          </p>
        </div>
        <div className="App-body">
          <Todos />
        </div>
      </div>
    );
  }
}

export default App;
