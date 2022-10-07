class Results extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <h1>
      {this.props.fiftyFifty ? "You Win!" : "You Lose!"}
      </h1>
    )
  };
};

class GameOfChance extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 1
    }
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState({
      counter: this.state.counter + 1 // Altere o código aqui
    });
  }
  render() {
    const expression = Math.random() >= 0.5 ? true : false
    return (
      <div>
        <button onClick={this.handleClick}>Play Again</button>
        { /* Altere o código abaixo desta linha */ }
        <Results fiftyFifty={expression} />
        { /* Altere o código acima desta linha */ }
        <p>{'Turn: ' + this.state.counter}</p>
      </div>
    );
  }
};