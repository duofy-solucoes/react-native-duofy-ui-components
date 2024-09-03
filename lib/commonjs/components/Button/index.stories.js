"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.TransparentLoading = exports.TransparentDisabled = exports.Transparent = exports.SecondaryLoading = exports.SecondaryDisabled = exports.Secondary = exports.OutlineLoading = exports.OutlineDisabled = exports.Outline = exports.Disabled = exports.DefaultLoading = exports.Default = exports.CardWithDifferentContentLoading = exports.CardWithDifferentContent = exports.CardLoading = exports.Card = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactNative = require("react-native");
var _ = _interopRequireDefault(require("."));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var _default = {
  title: 'Button',
  component: _.default,
  args: {
    onClick: {
      action: 'clicked'
    }
  }
};
exports.default = _default;
const Default = {
  args: {
    text: 'primary'
  }
};
exports.Default = Default;
const Disabled = {
  args: {
    text: 'primary',
    disabled: true
  }
};
exports.Disabled = Disabled;
const DefaultLoading = {
  args: {
    text: 'primary',
    loading: true
  }
};
exports.DefaultLoading = DefaultLoading;
const Secondary = {
  args: {
    text: 'button secondary',
    variant: 'secondary'
  }
};
exports.Secondary = Secondary;
const SecondaryDisabled = {
  args: {
    text: 'button secondary',
    variant: 'secondary',
    disabled: true
  }
};
exports.SecondaryDisabled = SecondaryDisabled;
const SecondaryLoading = {
  args: {
    text: 'button secondary',
    variant: 'secondary',
    loading: true
  }
};
exports.SecondaryLoading = SecondaryLoading;
const Outline = {
  args: {
    text: 'button outline',
    variant: 'outline'
  }
};
exports.Outline = Outline;
const OutlineDisabled = {
  args: {
    text: 'button outline',
    variant: 'outline',
    disabled: true
  }
};
exports.OutlineDisabled = OutlineDisabled;
const OutlineLoading = {
  args: {
    text: 'button outline',
    variant: 'outline',
    loading: true
  }
};
exports.OutlineLoading = OutlineLoading;
const Transparent = {
  args: {
    text: 'button transparent',
    variant: 'transparent'
  }
};
exports.Transparent = Transparent;
const TransparentDisabled = {
  args: {
    text: 'button transparent',
    variant: 'transparent',
    disabled: true
  }
};
exports.TransparentDisabled = TransparentDisabled;
const TransparentLoading = {
  args: {
    text: 'button transparent',
    variant: 'transparent',
    loading: true
  }
};
exports.TransparentLoading = TransparentLoading;
const Card = {
  args: {
    text: 'card button',
    variant: 'card'
  }
};
exports.Card = Card;
const CardLoading = {
  args: {
    text: 'card button',
    variant: 'card',
    loading: true
  }
};
exports.CardLoading = CardLoading;
const CardWithDifferentContent = {
  args: {
    variant: 'card',
    customTw: 'flex-col bg-brand-primary h-[120px] w-[320px] p-0',
    children: /*#__PURE__*/_react.default.createElement(_reactNative.View, null, /*#__PURE__*/_react.default.createElement(_reactNative.Image, {
      source: {
        uri: 'https://www.google.com/images/branding/googlelogo/2x/googlelogo_light_color_272x92dp.png',
        width: 272,
        height: 92
      }
    }))
  }
};
exports.CardWithDifferentContent = CardWithDifferentContent;
const CardWithDifferentContentLoading = {
  args: {
    variant: 'card',
    customTw: 'flex-col bg-brand-primary h-[120px] w-[320px] p-0',
    loading: true,
    children: /*#__PURE__*/_react.default.createElement(_reactNative.View, null, /*#__PURE__*/_react.default.createElement(_reactNative.Image, {
      source: {
        uri: 'https://www.google.com/images/branding/googlelogo/2x/googlelogo_light_color_272x92dp.png',
        width: 272,
        height: 92
      }
    }))
  }
};
exports.CardWithDifferentContentLoading = CardWithDifferentContentLoading;
//# sourceMappingURL=index.stories.js.map