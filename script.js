var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _React = React,
    useState = _React.useState,
    useEffect = _React.useEffect,
    useRef = _React.useRef;


var StopWatch = function StopWatch() {
  // useState hook 
  var _useState = useState(0),
      _useState2 = _slicedToArray(_useState, 2),
      timePassedInMilliSeconds = _useState2[0],

  // state setter method (updates the state) - second value returned by useState()
  setTimePassed = _useState2[1];

  // state variable initialized to null with useRef hook


  var timer = useRef(null);

  // state methods
  var start = function start() {
    // use .current to access timer value via timer object created using useRef
    if (!timer.current) {
      var startTime = Date.now();
      timer.current = setInterval(function () {
        console.log("timePassedInMillisecondsHALLOOOO:", timePassedInMilliSeconds);
        var stopTime = Date.now();

        // use a callback in setState to get latest state value (bc dynamic, vs stale state)
        setTimePassed(function (timePassedInMilliSeconds) {
          return stopTime - startTime + timePassedInMilliSeconds;
        });
      }, 250);
    }
  };

  var stop = function stop() {
    console.log("stop", timer.current);
    window.clearInterval(timer.current);
    timer.current = null;
  };

  var reset = function reset() {
    stop();
    setTimePassed(0);
  };

  return React.createElement(
    "div",
    null,
    React.createElement(
      "h2",
      { className: "border px-3 py-4 rounded my-3 mx-auto text-center", style: { maxWidth: "300px" } },
      Math.floor(timePassedInMilliSeconds / 1000),
      " s"
    ),
    React.createElement(
      "div",
      { className: "d-flex justify-content-center" },
      React.createElement(
        "button",
        { className: "btn btn-outline-primary mr-2", onClick: start },
        "start"
      ),
      React.createElement(
        "button",
        { className: "btn btn-outline-danger mr-2", onClick: stop },
        "stop"
      ),
      React.createElement(
        "button",
        { className: "btn btn-outline-warning", onClick: reset },
        "reset"
      )
    )
  );
};

ReactDOM.render(React.createElement(StopWatch, null), document.getElementById('root'));