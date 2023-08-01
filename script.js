var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var StopWatch = function (_React$Component) {
  _inherits(StopWatch, _React$Component);

  function StopWatch(props) {
    _classCallCheck(this, StopWatch);

    var _this = _possibleConstructorReturn(this, (StopWatch.__proto__ || Object.getPrototypeOf(StopWatch)).call(this, props));

    _this.state = {
      timePassedInMilliseconds: 0
    };
    return _this;
  }

  _createClass(StopWatch, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        null,
        React.createElement(
          "h2",
          { className: "border px-3 py-4 rounded my-3 mx-auto text-center", style: { maxWidth: "300px" } },
          Math.floor(this.state.timePassedInMilliseconds / 1000),
          " s"
        ),
        React.createElement(
          "div",
          { className: "d-flex justify-content-center" },
          React.createElement(
            "button",
            { className: "btn btn-outline-primary mr-2" },
            "start"
          ),
          React.createElement(
            "button",
            { className: "btn btn-outline-danger mr-2" },
            "stop"
          ),
          React.createElement(
            "button",
            { className: "btn btn-outline-warning" },
            "reset"
          )
        )
      );
    }
  }]);

  return StopWatch;
}(React.Component);

ReactDOM.render(React.createElement(StopWatch, null), document.getElementById('root'));