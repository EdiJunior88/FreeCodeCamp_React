class CampSite extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <Camper name="CamperBot"/>
      </div>
    );
  }
};
// Altere o código abaixo desta linha
const Camper = (props) => {
  return <p>{props.name}</p>

  Camper.propTypes = {
    name: PropTypes.string.isRequired
  }

  Camper.defaultProps = {
    name: "CamperBot"
  }
}