import React from 'react';

class TodoForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      title: "",
      body: "",
      done: false,
      id: 3
    };
    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    // this.handleTitle = this.handleTitle.bind(this);
    // this.handleBody = this.handleBody.bind(this);
  }
  handleInput(something){
    return (e) => {
        this.setState({[something]: e.target.value});
    };
  } 
  // handleTitle(e) {
  //   this.setState({title: e.target.value});
  // }
  // handleBody(e) {
  //   this.setState({body: e.target.value});
  // }
  handleSubmit(e) {
    e.preventDefault();
    this.props.receiveTodo(this.state);
    this.setState({
      title: "",
      body: "",
      done: false,
      id: this.state.id + 1
    });
  }
  render(){
    return(
      <div>
        <h2>create todo</h2>
        <form onSubmit={this.handleSubmit}>
          <label>
            <h4>Title:</h4>
            <input 
              onChange={this.handleInput('title')}
              type="text" 
              value={this.state.title} 
              placeholder="get milk"
              />
          </label>
          <br />
          <label>
            <h4>Description:</h4>
            <textarea
              onChange={this.handleInput('body')}
              value={this.state.body}>
            </textarea>
          </label>
          <br />
          <button value="Add Todo">Add Todo</button>
        </form>
      </div>
    );
  }
}
export default TodoForm;