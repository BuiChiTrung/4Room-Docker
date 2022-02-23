import { createVNode as _createVNode } from "vue";
import { computed, defineComponent } from 'vue';
import { isDef, addUnit, isNumeric, truthProp, numericProp, makeStringProp, createNamespace } from '../utils';
var [name, bem] = createNamespace('badge');
var badgeProps = {
  dot: Boolean,
  max: numericProp,
  tag: makeStringProp('div'),
  color: String,
  offset: Array,
  content: numericProp,
  showZero: truthProp
};
export default defineComponent({
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
      return isDef(content) && content !== '' && (showZero || content !== 0);
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

        if (isDef(max) && isNumeric(content) && +content > max) {
          return max + "+";
        }

        return content;
      }
    };

    var style = computed(() => {
      var style = {
        background: props.color
      };

      if (props.offset) {
        var [x, y] = props.offset;

        if (slots.default) {
          style.top = addUnit(y);

          if (typeof x === 'number') {
            style.right = addUnit(-x);
          } else {
            style.right = x.startsWith('-') ? x.replace('-', '') : "-" + x;
          }
        } else {
          style.marginTop = addUnit(y);
          style.marginLeft = addUnit(x);
        }
      }

      return style;
    });

    var renderBadge = () => {
      if (hasContent() || props.dot) {
        return _createVNode("div", {
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
        return _createVNode(tag, {
          "class": bem('wrapper')
        }, {
          default: () => [slots.default(), renderBadge()]
        });
      }

      return renderBadge();
    };
  }

});