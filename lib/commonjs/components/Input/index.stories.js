"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.withLabel = exports.withCaptionAndLabelOnError = exports.withCaptionAndLabel = exports.withCaption = exports.onError = exports.newVariante = exports.default = exports.WithPlaceholder = exports.TypeTel = exports.TypeSearchCustomIcon = exports.TypeSearch = exports.TypePassword = exports.TypeNumber = exports.TypeMoney = exports.TypeEmail = exports.Default = void 0;
var _react = _interopRequireDefault(require("react"));
var _ = _interopRequireDefault(require("."));
var _outline = require("react-native-heroicons/outline");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var _default = {
  title: 'Input',
  component: _.default,
  args: {}
};
exports.default = _default;
const Default = {};
exports.Default = Default;
const WithPlaceholder = {
  args: {
    placeholder: 'Whith placeholder'
  }
};
exports.WithPlaceholder = WithPlaceholder;
const newVariante = {
  args: {
    onError: false,
    placeholder: 'Variante line',
    styleInput: {
      borderColor: 'none'
    }
  }
};
exports.newVariante = newVariante;
const onError = {
  args: {
    onError: true
  }
};
exports.onError = onError;
const withLabel = {
  args: {
    label: 'Text label'
  }
};
exports.withLabel = withLabel;
const withCaption = {
  args: {
    caption: 'Text caption'
  }
};
exports.withCaption = withCaption;
const withCaptionAndLabel = {
  args: {
    label: 'Text label',
    caption: 'Text caption'
  }
};
exports.withCaptionAndLabel = withCaptionAndLabel;
const withCaptionAndLabelOnError = {
  args: {
    label: 'Text label',
    caption: 'Error message',
    onError: true
  }
};
exports.withCaptionAndLabelOnError = withCaptionAndLabelOnError;
const TypeMoney = {
  args: {
    type: 'money',
    value: 55.23
  }
};
exports.TypeMoney = TypeMoney;
const TypePassword = {
  args: {
    type: 'password'
  }
};
exports.TypePassword = TypePassword;
const TypeSearch = {
  args: {
    type: 'search'
  }
};
exports.TypeSearch = TypeSearch;
const TypeSearchCustomIcon = {
  args: {
    type: 'search',
    customIcon: /*#__PURE__*/_react.default.createElement(_outline.QrCodeIcon, {
      color: "black"
    })
  }
};
exports.TypeSearchCustomIcon = TypeSearchCustomIcon;
const TypeEmail = {
  args: {
    type: 'email'
  }
};
exports.TypeEmail = TypeEmail;
const TypeTel = {
  args: {
    type: 'tel'
  }
};
exports.TypeTel = TypeTel;
const TypeNumber = {
  args: {
    type: 'numeric'
  }
};
exports.TypeNumber = TypeNumber;
//# sourceMappingURL=index.stories.js.map