import React, { Component } from 'react';
import './App.css';


function makeToggleable(Clickable){
  return class extends Component{
    constructor(){
      super();
      this.toggle = this.toggle.bind(this);
      this.state = {
        show: false,
      };
    }

    toggle(){
      this.setState({show: !this.state.show});
    }

    render(){
      return(
        <div className="togglable">
          <Clickable
            {...this.props}
            onClick={this.toggle}
          />
          {this.state.show && this.props.children}
        </div>
      );
    }
  }
}




@makeToggleable
class ToggleableMenu extends Component{
  render(){
    return (<div onClick={this.props.onClick}>
      <h1>{this.props.title}</h1>
    </div>)
  }
}


class App extends Component {
  render() {
    return (
      <div className="App">
        <ToggleableMenu title='first'>
          <p>more</p>
        </ToggleableMenu>
      </div>
    );
  }
}

export default App;
