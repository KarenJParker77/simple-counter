import React, { Component } from "react";

class App extends Component {
  state = { count: 0 };
  // setState function tells React that we want to mutate the state. SetState function always takes an object - what we want to change and new value
  onAdd = () => {
    this.setState({ count: this.state.count + 1 });
  };

  onRemove = () => {
    this.setState({ count: this.state.count - 1 });
  };
  //Render method returns the html
  render() {
    return (
      <div>
        <button onClick={this.onAdd}>Add</button>
        <p>{this.state.count}</p>
        <button onClick={this.onRemove}>Remove</button>
      </div>
    );
  }
}

export default App;
