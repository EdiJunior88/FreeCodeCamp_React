class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'freeCodeCamp'
    }
  }
  render() {
    return (
      <div>
        { /* Altere o código abaixo desta linha */ }
        <h1>{this.state.name}</h1>
        { /* Altere o código acima desta linha */ }
      </div>
    );
  }
};