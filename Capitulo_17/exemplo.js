class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        {/* Altere o código abaixo desta linha */}
        <Welcome name='Edivaldo Junior' />
        {/* Altere o código acima desta linha */}
      </div>
    );
  }
}

class Welcome extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        {/* Altere o código abaixo desta linha */}
        <p>
          Hello, <strong>{this.props.name}</strong>!
        </p>
        {/* Altere o código acima desta linha */}
      </div>
    );
  }
}
