class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      display: true
    }
    this.toggleDisplay = this.toggleDisplay.bind(this);
  }
  toggleDisplay() {
    this.setState((state) => ({
      display: !state.display
    }));
  }
  render() {
    // Altere o código abaixo desta linha
    if(this.state.display === true) {
      return (
        <div>
          <button onClick={this.toggleDisplay}>Toggle Display</button>
        <h1>Displayed!</h1>
        </div>
      )
    } else {
      return (
        <div>
         <button>Toggle Display</button>
       </div>
      )
    }
    return (
       <div>
         <button>Toggle Display</button>
         <h1>Displayed!</h1>
       </div>
    );
  }
};