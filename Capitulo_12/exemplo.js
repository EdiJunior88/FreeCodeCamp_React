class TypesOfFood extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>Types of Food:</h1>
        {/* Altere o código abaixo desta linha */}
        <Fruits />
        <Vegetables />
        {/* Altere o código acima desta linha */}
      </div>
    );
  }
}

// Altere o código abaixo desta linha
ReactDOM.render(<TypesOfFood />, document.getElementById("challenge-node"));
