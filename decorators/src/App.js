import React, { Component } from 'react';
import './App.css';

//HOC's are Higher order components
//basically they are functions which takes
//a component as an argument and return a new component


function makeToggleable(Clickable){
  return class extends Component{
    constructor(){
      super();
      this.state = {
        show:false
      };
      this.toggle = this.toggle.bind(this);
    }
    toggle(){
      this.setState({show:!this.state.show})
    }
    render(){
      return(
        <div>
          <Clickable
            {...this.props}
            onClick={this.toggle}
          />
          {(this.state.show)?this.props.children:''}
        </div>
      );
    }
  }
}

@makeToggleable
class Toggle extends Component{
  render(){
    return(
      <div onClick={this.props.onClick}>
        <h1>
          {this.props.title}
        </h1>
      </div>
    );
  }
}









class Tog extends Component {
  constructor(){
    super();
    this.togle = this.togle.bind(this);
    this.state = {
      show:false,
    };
  }
  togle(){
    this.setState({show: !this.state.show})
  }
  render(){
    return this.props.children(this.state.show, this.togle);
  }
}

const TogleMenu = props => (
    <Tog>
      {(show,onClick)=>(
        <div>
          <div onClick={onClick}>
            <h2>{props.title}</h2>
          </div>
          { (show) ? <p>{props.children}</p>:''}
        </div>
      )}
    </Tog>
  );


// function makeToggleable(Clickable){
//   return class extends Component{
//     constructor(){
//       super();
//       this.toggle = this.toggle.bind(this);
//       this.state = {
//         show: false,
//       };
//     }
//
//     toggle(){
//       this.setState({show: !this.state.show});
//     }
//
//     render(){
//       return(
//         <div className="togglable">
//           <Clickable
//             {...this.props}
//             onClick={this.toggle}
//           />
//           {this.state.show && this.props.children}
//         </div>
//       );
//     }
//   }
// }
//
//
//
//
// @makeToggleable
// class ToggleableMenu extends Component{
//   render(){
//     return (<div onClick={this.props.onClick}>
//       <h1>{this.props.title}</h1>
//     </div>)
//   }
// }




class App extends Component {
  render() {
    return (
      <div className="App">

        <Toggle title='first'>
          <p>more</p>
        </Toggle>

        <h1>HI</h1>

        <TogleMenu title='do'>
          <p>dochizimore</p>
        </TogleMenu>

      </div>
    );
  }
}

export default App;
