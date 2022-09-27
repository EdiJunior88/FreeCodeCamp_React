class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visibility: false
    };
    // Altere o código abaixo desta linha
    this.toggleVisibility = this.toggleVisibility.bind(this)
    // Altere o código acima desta linha
  }
  // Altere o código abaixo desta linha
  toggleVisibility() {
    this.setState(state => {
      if(state.visibility === false){
        return {visibility: true}
      } else {
        return {visibility: false}
      }
    });
  }
  // Altere o código acima desta linha
  render() {
    if (this.state.visibility) {
      return (
        <div>
          <button onClick={this.toggleVisibility}>Click Me</button>
          <h1>Now you see me!</h1>
        </div>
      );
    } else {
      return (
        <div>
          <button onClick={this.toggleVisibility}>Click Me</button>
        </div>
      );
    }
  }
}