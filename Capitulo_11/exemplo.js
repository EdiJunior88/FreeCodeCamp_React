class Fruits extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h2>Fruits:</h2>
        { /* Altere o código abaixo desta linha */ }
        <NonCitrus />
        <Citrus />
        { /* Altere o código acima desta linha */ }
      </div>
    );
  }
};

class TypesOfFood extends React.Component {
  constructor(props) {
     super(props);
  }
  render() {
    return (
      <div>
        <h1>Types of Food:</h1>
        { /* Altere o código abaixo desta linha */ }
        <Fruits />
        { /* Altere o código acima desta linha */ }
        <Vegetables />
      </div>
    );
  }
};