"use strict";

exports.__esModule = true;
exports.default = void 0;

var _vue = require("vue");

var _utils = require("../utils");

var [name, bem] = (0, _utils.createNamespace)('badge');
var badgeProps = {
  dot: Boolean,
  max: _utils.numericProp,
  tag: (0, _utils.makeStringProp)('div'),
  color: String,
  offset: Array,
  content: _utils.numericProp,
  showZero: _utils.truthProp
};

var _default = (0, _vue.defineComponent)({
  name,
  props: badgeProps,

  setup(props, _ref) {
    var {
      slots
    } = _ref;

    var hasContent = () => {
      if (slots.content) {
        return true;
      }

      var {
        content,
        showZero
      } = props;
      return (0, _utils.isDef)(content) && content !== '' && (showZero || content !== 0);
    };

    var renderContent = () => {
      var {
        dot,
        max,
        content
      } = props;

      if (!dot && hasContent()) {
        if (slots.content) {
          return slots.content();
        }

        if ((0, _utils.isDef)(max) && (0, _utils.isNumeric)(content) && +content > max) {
          return max + "+";
        }

        return content;
      }
    };

    var style = (0, _vue.computed)(() => {
      var style = {
        background: props.color
      };

      if (props.offset) {
        var [x, y] = props.offset;

        if (slots.default) {
          style.top = (0, _utils.addUnit)(y);

          if (typeof x === 'number') {
            style.right = (0, _utils.addUnit)(-x);
          } else {
            style.right = x.startsWith('-') ? x.replace('-', '') : "-" + x;
          }
        } else {
          style.marginTop = (0, _utils.addUnit)(y);
          style.marginLeft = (0, _utils.addUnit)(x);
        }
      }

      return style;
    });

    var renderBadge = () => {
      if (hasContent() || props.dot) {
        return (0, _vue.createVNode)("div", {
          "class": bem({
            dot: props.dot,
            fixed: !!slots.default
          }),
          "style": style.value
        }, [renderContent()]);
      }
    };

    return () => {
      if (slots.default) {
        var {
          tag
        } = props;
        return (0, _vue.createVNode)(tag, {
          "class": bem('wrapper')
        }, {
          default: () => [slots.default(), renderBadge()]
        });
      }

      return renderBadge();
    };
  }

});

exports.default = _default;