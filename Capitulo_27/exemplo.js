class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
    // Altere o código abaixo desta linha
    this.increment = this.increment.bind(this)
    this.decrement = this.decrement.bind(this)
    // Altere o código acima desta linha
  }
  // Altere o código abaixo desta linha
  increment = () => {
    this.setState({count: this.state.count + 1})
  }

  decrement = () => {
    this.setState({count: this.state.count - 1})
  }

  reset = () => {
    this.setState({count: this.state.count = 0})
  }
  // Altere o código acima desta linha
  render() {
    return (
      <div>
        <button className='inc' onClick={this.increment}>Increment!</button>
        <button className='dec' onClick={this.decrement}>Decrement!</button>
        <button className='reset' onClick={this.reset}>Reset</button>
        <h1>Current Count: {this.state.count}</h1>
      </div>
    );
  }
};