import { Component } from "react";

class About extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 10,
    };
    console.log("Constructor is callled");
  }

  componentDidMount() {
    console.log("Comonent did mount");
  }

  render() {
    console.log("Rendered is called");
    const { count } = this.state;

    return (
      <div>
        {" "}
        <h1>About</h1>
        <h2>{count}</h2>
        <button
          onClick={() => {
            this.setState({
              count: count + 1,
            });
          }}
        >
          Counter
        </button>
      </div>
    );
  }
}

export default About;
