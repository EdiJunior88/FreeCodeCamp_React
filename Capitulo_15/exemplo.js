const List = (props) => {
  {
    /* Altere o código abaixo desta linha */
  }
  return <p>{props.tasks.join(", ")}</p>;
  {
    /* Altere o código acima desta linha */
  }
};

class ToDo extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>To Do Lists</h1>
        <h2>Today</h2>
        {/* Altere o código abaixo desta linha */}
        <List tasks={["play video-game", "ride a bike"]} />
        <h2>Tomorrow</h2>
        <List
          tasks={["eat pizza", "watch youtube", "marathon netflix series"]}
        />
        {/* Altere o código acima desta linha */}
      </div>
    );
  }
}
