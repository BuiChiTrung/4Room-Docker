"use strict";

exports.__esModule = true;
exports.default = exports.SWIPE_KEY = void 0;

var _vue = require("vue");

var _utils = require("../utils");

var _use = require("@vant/use");

var _useTouch = require("../composables/use-touch");

var _useExpose = require("../composables/use-expose");

var _onPopupReopen = require("../composables/on-popup-reopen");

// Utils
// Composables
var [name, bem] = (0, _utils.createNamespace)('swipe');
var swipeProps = {
  loop: _utils.truthProp,
  width: _utils.numericProp,
  height: _utils.numericProp,
  vertical: Boolean,
  autoplay: (0, _utils.makeNumericProp)(0),
  duration: (0, _utils.makeNumericProp)(500),
  touchable: _utils.truthProp,
  lazyRender: Boolean,
  initialSwipe: (0, _utils.makeNumericProp)(0),
  indicatorColor: String,
  showIndicators: _utils.truthProp,
  stopPropagation: _utils.truthProp
};
var SWIPE_KEY = Symbol(name);
exports.SWIPE_KEY = SWIPE_KEY;

var _default = (0, _vue.defineComponent)({
  name,
  props: swipeProps,
  emits: ['change'],

  setup(props, _ref) {
    var {
      emit,
      slots
    } = _ref;
    var root = (0, _vue.ref)();
    var state = (0, _vue.reactive)({
      rect: null,
      width: 0,
      height: 0,
      offset: 0,
      active: 0,
      swiping: false
    });
    var touch = (0, _useTouch.useTouch)();
    var {
      children,
      linkChildren
    } = (0, _use.useChildren)(SWIPE_KEY);
    var count = (0, _vue.computed)(() => children.length);
    var size = (0, _vue.computed)(() => state[props.vertical ? 'height' : 'width']);
    var delta = (0, _vue.computed)(() => props.vertical ? touch.deltaY.value : touch.deltaX.value);
    var minOffset = (0, _vue.computed)(() => {
      if (state.rect) {
        var base = props.vertical ? state.rect.height : state.rect.width;
        return base - size.value * count.value;
      }

      return 0;
    });
    var maxCount = (0, _vue.computed)(() => Math.ceil(Math.abs(minOffset.value) / size.value));
    var trackSize = (0, _vue.computed)(() => count.value * size.value);
    var activeIndicator = (0, _vue.computed)(() => (state.active + count.value) % count.value);
    var isCorrectDirection = (0, _vue.computed)(() => {
      var expect = props.vertical ? 'vertical' : 'horizontal';
      return touch.direction.value === expect;
    });
    var trackStyle = (0, _vue.computed)(() => {
      var style = {
        transitionDuration: (state.swiping ? 0 : props.duration) + "ms",
        transform: "translate" + (props.vertical ? 'Y' : 'X') + "(" + state.offset + "px)"
      };

      if (size.value) {
        var mainAxis = props.vertical ? 'height' : 'width';
        var crossAxis = props.vertical ? 'width' : 'height';
        style[mainAxis] = trackSize.value + "px";
        style[crossAxis] = props[crossAxis] ? props[crossAxis] + "px" : '';
      }

      return style;
    });

    var getTargetActive = pace => {
      var {
        active
      } = state;

      if (pace) {
        if (props.loop) {
          return (0, _utils.clamp)(active + pace, -1, count.value);
        }

        return (0, _utils.clamp)(active + pace, 0, maxCount.value);
      }

      return active;
    };

    var getTargetOffset = function (targetActive, offset) {
      if (offset === void 0) {
        offset = 0;
      }

      var currentPosition = targetActive * size.value;

      if (!props.loop) {
        currentPosition = Math.min(currentPosition, -minOffset.value);
      }

      var targetOffset = offset - currentPosition;

      if (!props.loop) {
        targetOffset = (0, _utils.clamp)(targetOffset, minOffset.value, 0);
      }

      return targetOffset;
    };

    var move = _ref2 => {
      var {
        pace = 0,
        offset = 0,
        emitChange
      } = _ref2;

      if (count.value <= 1) {
        return;
      }

      var {
        active
      } = state;
      var targetActive = getTargetActive(pace);
      var targetOffset = getTargetOffset(targetActive, offset); // auto move first and last swipe in loop mode

      if (props.loop) {
        if (children[0] && targetOffset !== minOffset.value) {
          var outRightBound = targetOffset < minOffset.value;
          children[0].setOffset(outRightBound ? trackSize.value : 0);
        }

        if (children[count.value - 1] && targetOffset !== 0) {
          var outLeftBound = targetOffset > 0;
          children[count.value - 1].setOffset(outLeftBound ? -trackSize.value : 0);
        }
      }

      state.active = targetActive;
      state.offset = targetOffset;

      if (emitChange && targetActive !== active) {
        emit('change', activeIndicator.value);
      }
    };

    var correctPosition = () => {
      state.swiping = true;

      if (state.active <= -1) {
        move({
          pace: count.value
        });
      } else if (state.active >= count.value) {
        move({
          pace: -count.value
        });
      }
    }; // swipe to prev item


    var prev = () => {
      correctPosition();
      touch.reset();
      (0, _use.doubleRaf)(() => {
        state.swiping = false;
        move({
          pace: -1,
          emitChange: true
        });
      });
    }; // swipe to next item


    var next = () => {
      correctPosition();
      touch.reset();
      (0, _use.doubleRaf)(() => {
        state.swiping = false;
        move({
          pace: 1,
          emitChange: true
        });
      });
    };

    var autoplayTimer;

    var stopAutoplay = () => clearTimeout(autoplayTimer);

    var autoplay = () => {
      stopAutoplay();

      if (props.autoplay > 0 && count.value > 1) {
        autoplayTimer = setTimeout(() => {
          next();
          autoplay();
        }, +props.autoplay);
      }
    }; // initialize swipe position


    var initialize = function (active) {
      if (active === void 0) {
        active = +props.initialSwipe;
      }

      if (!root.value) {
        return;
      }

      if (!(0, _utils.isHidden)(root)) {
        var _props$width, _props$height;

        var rect = {
          width: root.value.offsetWidth,
          height: root.value.offsetHeight
        };
        state.rect = rect;
        state.width = +((_props$width = props.width) != null ? _props$width : rect.width);
        state.height = +((_props$height = props.height) != null ? _props$height : rect.height);
      }

      if (count.value) {
        active = Math.min(count.value - 1, active);
      }

      state.active = active;
      state.swiping = true;
      state.offset = getTargetOffset(active);
      children.forEach(swipe => {
        swipe.setOffset(0);
      });
      autoplay();
    };

    var resize = () => initialize(state.active);

    var touchStartTime;

    var onTouchStart = event => {
      if (!props.touchable) return;
      touch.start(event);
      touchStartTime = Date.now();
      stopAutoplay();
      correctPosition();
    };

    var onTouchMove = event => {
      if (props.touchable && state.swiping) {
        touch.move(event); // if user starting to touchmove, prevent the event bubbling to
        // avoid affecting the parent components

        var shouldPrevent = isCorrectDirection.value || touch.offsetY.value > touch.offsetX.value === props.vertical;

        if (shouldPrevent) {
          (0, _utils.preventDefault)(event, props.stopPropagation);
        }

        if (isCorrectDirection.value) {
          move({
            offset: delta.value
          });
        }
      }
    };

    var onTouchEnd = () => {
      if (!props.touchable || !state.swiping) {
        return;
      }

      var duration = Date.now() - touchStartTime;
      var speed = delta.value / duration;
      var shouldSwipe = Math.abs(speed) > 0.25 || Math.abs(delta.value) > size.value / 2;

      if (shouldSwipe && isCorrectDirection.value) {
        var offset = props.vertical ? touch.offsetY.value : touch.offsetX.value;
        var pace = 0;

        if (props.loop) {
          pace = offset > 0 ? delta.value > 0 ? -1 : 1 : 0;
        } else {
          pace = -Math[delta.value > 0 ? 'ceil' : 'floor'](delta.value / size.value);
        }

        move({
          pace,
          emitChange: true
        });
      } else if (delta.value) {
        move({
          pace: 0
        });
      }

      state.swiping = false;
      autoplay();
    };

    var swipeTo = function (index, options) {
      if (options === void 0) {
        options = {};
      }

      correctPosition();
      touch.reset();
      (0, _use.doubleRaf)(() => {
        var targetIndex;

        if (props.loop && index === count.value) {
          targetIndex = state.active === 0 ? 0 : index;
        } else {
          targetIndex = index % count.value;
        }

        if (options.immediate) {
          (0, _use.doubleRaf)(() => {
            state.swiping = false;
          });
        } else {
          state.swiping = false;
        }

        move({
          pace: targetIndex - state.active,
          emitChange: true
        });
      });
    };

    var renderDot = (_, index) => {
      var active = index === activeIndicator.value;
      var style = active ? {
        backgroundColor: props.indicatorColor
      } : undefined;
      return (0, _vue.createVNode)("i", {
        "style": style,
        "class": bem('indicator', {
          active
        })
      }, null);
    };

    var renderIndicator = () => {
      if (slots.indicator) {
        return slots.indicator({
          active: activeIndicator.value
        });
      }

      if (props.showIndicators && count.value > 1) {
        return (0, _vue.createVNode)("div", {
          "class": bem('indicators', {
            vertical: props.vertical
          })
        }, [Array(count.value).fill('').map(renderDot)]);
      }
    };

    (0, _useExpose.useExpose)({
      prev,
      next,
      state,
      resize,
      swipeTo
    });
    linkChildren({
      size,
      props,
      count,
      activeIndicator
    });
    (0, _vue.watch)(() => props.initialSwipe, value => initialize(+value));
    (0, _vue.watch)(count, () => initialize(state.active));
    (0, _vue.watch)(() => props.autoplay, autoplay);
    (0, _vue.watch)([_utils.windowWidth, _utils.windowHeight], resize);
    (0, _vue.watch)((0, _use.usePageVisibility)(), visible => {
      if (visible === 'visible') {
        autoplay();
      } else {
        stopAutoplay();
      }
    });
    (0, _vue.onMounted)(initialize);
    (0, _vue.onActivated)(() => initialize(state.active));
    (0, _onPopupReopen.onPopupReopen)(() => initialize(state.active));
    (0, _vue.onDeactivated)(stopAutoplay);
    (0, _vue.onBeforeUnmount)(stopAutoplay);
    return () => (0, _vue.createVNode)("div", {
      "ref": root,
      "class": bem()
    }, [(0, _vue.createVNode)("div", {
      "style": trackStyle.value,
      "class": bem('track', {
        vertical: props.vertical
      }),
      "onTouchstart": onTouchStart,
      "onTouchmove": onTouchMove,
      "onTouchend": onTouchEnd,
      "onTouchcancel": onTouchEnd
    }, [slots.default == null ? void 0 : slots.default()]), renderIndicator()]);
  }

});

exports.default = _default;