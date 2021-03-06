'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactSvg = require('react-svg');

var _reactSvg2 = _interopRequireDefault(_reactSvg);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/* Just a wrapper around ReactSVG to disable re rendering it */
var SVGLoader = function (_React$Component) {
  _inherits(SVGLoader, _React$Component);

  function SVGLoader(props) {
    _classCallCheck(this, SVGLoader);

    return _possibleConstructorReturn(this, (SVGLoader.__proto__ || Object.getPrototypeOf(SVGLoader)).call(this, props));
  }

  _createClass(SVGLoader, [{
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps) {
      return nextProps.path !== this.props.path;
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(_reactSvg2.default, {
        className: this.props.className,
        style: this.props.style,
        path: this.props.path,
        callback: this.props.onSVGReady
      });
    }
  }]);

  return SVGLoader;
}(_react2.default.Component);

SVGLoader.propTypes = {
  path: _propTypes2.default.string.isRequired,
  onSVGReady: _propTypes2.default.func
};

SVGLoader.defaultProps = {
  onSVGReady: function onSVGReady() {}
};

exports.default = SVGLoader;