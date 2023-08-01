class StopWatch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      timePassedInMilliseconds: 0
    }

    this.timer = null;

    this.start = this.start.bind(this);
    this.stop = this.stop.bind(this);
    this.reset = this.reset.bind(this);
  }

  start() {
    if (!this.timer) {
      let startTime = Date.now();
      this.timer = setInterval(() => {
        const stopTime = Date.now();
        // storing elapsed time in variable timePassedInMilliseconds
        const timePassedInMilliseconds = stopTime - startTime + this.state.timePassedInMilliseconds;

        this.setState({
          timePassedInMilliseconds,
        });
        
        startTime = stopTime;
      }, 250); // executed every 250 milliseconds
    }
  }

  stop() {
    window.clearInterval(this.timer);
    this.timer = null;
  }

  reset() {
    this.stop();
    this.setState({
      timePassedInMilliseconds: 0
    })
  }

  render() {
    return (
      <div>
        <h2 className="border px-3 py-4 rounded my-3 mx-auto text-center" style={{maxWidth: "300px"}}>
          {Math.floor(this.state.timePassedInMilliseconds)} s
        </h2>
        <div className="d-flex justify-content-center">
          <button className="btn btn-outline-primary mr-2" onClick={this.start}>
            start
          </button>
          <button className="btn btn-outline-danger mr-2" onClick={this.stop}>
            stop
          </button>
          <button className="btn btn-outline-warning" onClick={this.reset}>
            reset
          </button>
        </div>
      </div>
    )
  }

  render() {
    return (
      <div>
        <h2 className="border px-3 py-4 rounded my-3 mx-auto text-center" style={{maxWidth: "300px"}}>
          {Math.floor(this.state.timePassedInMilliseconds / 1000)} s
        </h2>
        <div className="d-flex justify-content-center">
          <button className="btn btn-outline-primary mr-2">
            start
          </button>
          <button className="btn btn-outline-danger mr-2">
            stop
          </button>
          <button className="btn btn-outline-warning">
            reset
          </button>
        </div>
      </div>
    )
  }
}

ReactDOM.render(
  <StopWatch />,
  document.getElementById('root')
);