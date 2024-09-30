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
      <div className="border-2 border-gray-400 m-4 p-4 space-y-4">
        <h1 className="text-2xl font-bold">About</h1>
        <h2 className="text-lg font-bold">{count}</h2>
        <button
          className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 rounded"
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
