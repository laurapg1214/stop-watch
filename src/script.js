const { useState, useEffect, useRef } = React;

const StopWatch = () => {
  // useState hook 
  const [
    // state variable (current state of timePassedInMilliseconds) - first value returned by useState()
    timePassedInMilliSeconds, 
    // state setter method (updates the state) - second value returned by useState()
    setTimePassed
  ] = useState(0);
  
  // state variable initialized to null with useRef hook
  const timer = useRef(null);
  
  // state methods
  const start = () => {
    // use .current to access timer value via timer object created using useRef
    if (!timer.current) {
      let startTime = Date.now();
      timer.current = setInterval(() => {
        console.log("timePassedInMillisecondsHALLOOOO:", timePassedInMilliSeconds);
        const stopTime = Date.now();

        // use a callback in setState to get latest state value (bc dynamic, vs stale state)
        setTimePassed(timePassedInMilliSeconds => stopTime - startTime + timePassedInMilliSeconds);
      }, 250);
    }
  };
  
  const stop = () => {
    console.log("stop", timer.current);
    window.clearInterval(timer.current);
    timer.current = null;
  };
  
  const reset = () => {
    stop();
    setTimePassed(0);
  };

  return (
    <div>
      <h2 className="border px-3 py-4 rounded my-3 mx-auto text-center" style={{maxWidth: "300px"}}>
        { Math.floor(timePassedInMilliSeconds / 1000) } s
      </h2>
      <div className="d-flex justify-content-center">
        <button className="btn btn-outline-primary mr-2" onClick={ start }>
          start
        </button>
        <button className="btn btn-outline-danger mr-2" onClick={ stop }>
          stop
        </button>
        <button className="btn btn-outline-warning" onClick={ reset }>
          reset
        </button>
      </div>
    </div>
  )
}

ReactDOM.render(
  <StopWatch />,
  document.getElementById('root')
);