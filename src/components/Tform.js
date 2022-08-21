import React, { Component } from "react";

export class Form extends Component {
  
  constructor(props){
    super(props)
    this.state= {
      username:""
    }
  }

    handleUserName=(event) =>{
     this.setState({
      username: event.target.value
     })

    }
  
  render() {
    return (
      <form>
        <div>
          <lablel>Username</lablel>
          <input type="text" value={this.state.username} onChange={this.handleUserName}></input>
        </div>
      </form>
    );
  }
}

export default Form;