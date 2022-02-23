import { placements, createPopper } from '@popperjs/core';
import { ResizeObserver } from 'vue-resize';
import { resolveComponent, openBlock, createElementBlock, normalizeClass, withKeys, createElementVNode, Fragment, renderSlot, createBlock, createCommentVNode, mergeProps, withCtx, createVNode, toDisplayString, ref, createApp, h } from 'vue';

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);

    if (enumerableOnly) {
      symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
    }

    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function (obj) {
      return typeof obj;
    };
  } else {
    _typeof = function (obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

  return arr2;
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _createForOfIteratorHelper(o, allowArrayLike) {
  var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];

  if (!it) {
    if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
      if (it) o = it;
      var i = 0;

      var F = function () {};

      return {
        s: F,
        n: function () {
          if (i >= o.length) return {
            done: true
          };
          return {
            done: false,
            value: o[i++]
          };
        },
        e: function (e) {
          throw e;
        },
        f: F
      };
    }

    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  var normalCompletion = true,
      didErr = false,
      err;
  return {
    s: function () {
      it = it.call(o);
    },
    n: function () {
      var step = it.next();
      normalCompletion = step.done;
      return step;
    },
    e: function (e) {
      didErr = true;
      err = e;
    },
    f: function () {
      try {
        if (!normalCompletion && it.return != null) it.return();
      } finally {
        if (didErr) throw err;
      }
    }
  };
}

function assign(to, from) {
  for (var key in from) {
    if (Object.prototype.hasOwnProperty.call(from, key)) {
      if (_typeof(from[key]) === 'object' && to[key]) {
        assign(to[key], from[key]);
      } else {
        to[key] = from[key];
      }
    }
  }
}

var config = {
  // Disable popper components
  disabled: false,
  // Default position offset [skidding, distance] (px)
  offset: [0, 5],
  // Default container where the tooltip will be appended
  container: 'body',
  // Element used to compute position and size boundaries
  boundary: undefined,
  // Skip delay & CSS transitions when another popper is shown, so that the popper appear to instanly move to the new position.
  instantMove: false,
  // Auto destroy tooltip DOM nodes (ms)
  disposeTimeout: 5000,
  // Triggers on the popper itself
  popperTriggers: [],
  // Positioning strategy
  strategy: 'absolute',
  // Popperjs modifiers
  modifiers: [],
  // Other options passed to Popperjs constructor
  popperOptions: {},
  // Themes
  themes: {
    tooltip: {
      // Default tooltip placement relative to target element
      placement: 'top',
      // Default events that trigger the tooltip
      triggers: ['hover', 'focus', 'touch'],
      // Close tooltip on click on tooltip target
      hideTriggers: function hideTriggers(events) {
        return [].concat(_toConsumableArray(events), ['click']);
      },
      // Delay (ms)
      delay: {
        show: 200,
        hide: 0
      },
      // Update popper on content resize
      handleResize: false,
      // Enable HTML content in directive
      html: false,
      // Displayed when tooltip content is loading
      loadingContent: '...'
    },
    dropdown: {
      // Default dropdown placement relative to target element
      placement: 'bottom',
      // Default events that trigger the dropdown
      triggers: ['click'],
      // Delay (ms)
      delay: 0,
      // Update popper on content resize
      handleResize: true,
      // Hide on clock outside
      autoHide: true
    },
    menu: {
      $extend: 'dropdown',
      triggers: ['hover', 'focus'],
      popperTriggers: ['hover', 'focus'],
      delay: {
        show: 0,
        hide: 400
      }
    }
  }
};
/**
 * Get default config value depending on theme
 */

function getDefaultConfig(theme, key) {
  var themeConfig = config.themes[theme] || {};
  var value;

  do {
    value = themeConfig[key];

    if (typeof value === 'undefined') {
      // Support theme extend
      if (themeConfig.$extend) {
        themeConfig = config.themes[themeConfig.$extend] || {};
      } else {
        // Base config
        themeConfig = null;
        value = config[key];
      }
    } else {
      themeConfig = null;
    }
  } while (themeConfig);

  return value;
}
/**
 * Theme CSS inheritance
 */

function getThemeClasses(theme) {
  var result = [theme];
  var themeConfig = config.themes[theme] || {};

  do {
    // Support theme extend
    if (themeConfig.$extend && !themeConfig.$resetCss) {
      result.push(themeConfig.$extend);
      themeConfig = config.themes[themeConfig.$extend] || {};
    } else {
      themeConfig = null;
    }
  } while (themeConfig);

  return result.map(function (c) {
    return "v-popper--theme-".concat(c);
  });
}

var supportsPassive = false;

if (typeof window !== 'undefined') {
  supportsPassive = false;

  try {
    var opts = Object.defineProperty({}, 'passive', {
      get: function get() {
        supportsPassive = true;
      }
    });
    window.addEventListener('test', null, opts);
  } catch (e) {}
}

var isIOS = false;

if (typeof window !== 'undefined' && typeof navigator !== 'undefined') {
  isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
}

function applyModifier(modifiers, name, options) {
  var modifier = modifiers.find(function (m) {
    return m.name === name;
  });

  if (!modifier) {
    modifier = {
      name: name,
      options: {}
    };
    modifiers.push(modifier);
  } else if (!modifier.options) {
    modifier.options = {};
  }

  Object.assign(modifier.options, options);
}

var SHOW_EVENT_MAP = {
  hover: 'mouseenter',
  focus: 'focus',
  click: 'click',
  touch: 'touchstart'
};
var HIDE_EVENT_MAP = {
  hover: 'mouseleave',
  focus: 'blur',
  click: 'click',
  touch: 'touchend'
};

function removeFromArray(array, item) {
  var index = array.indexOf(item);

  if (index !== -1) {
    array.splice(index, 1);
  }
}

var shownPoppers = [];
var hidingPopper = null;

var Element = function Element() {};

if (typeof window !== 'undefined') {
  Element = window.Element;
}

var PrivatePopper = (function () {
  return {
    name: 'VPopper',
    props: {
      theme: {
        type: String,
        required: true
      },
      targetNodes: {
        type: Function,
        required: true
      },
      referenceNode: {
        type: Function,
        required: true
      },
      popperNode: {
        type: Function,
        required: true
      },
      arrowNode: {
        type: Function,
        default: null
      },
      shown: {
        type: Boolean,
        default: false
      },
      showGroup: {
        type: String,
        default: null
      },
      // eslint-disable-next-line vue/require-prop-types
      ariaId: {
        default: null
      },
      disabled: {
        type: Boolean,
        default: function _default(props) {
          return getDefaultConfig(props.theme, 'disabled');
        }
      },
      placement: {
        type: String,
        default: function _default(props) {
          return getDefaultConfig(props.theme, 'placement');
        },
        validator: function validator(value) {
          return placements.includes(value);
        }
      },
      delay: {
        type: [String, Number, Object],
        default: function _default(props) {
          return getDefaultConfig(props.theme, 'delay');
        }
      },
      offset: {
        type: [Array, Function],
        default: function _default(props) {
          return getDefaultConfig(props.theme, 'offset');
        }
      },
      triggers: {
        type: Array,
        default: function _default(props) {
          return getDefaultConfig(props.theme, 'triggers');
        }
      },
      showTriggers: {
        type: [Array, Function],
        default: function _default(props) {
          return getDefaultConfig(props.theme, 'showTriggers');
        }
      },
      hideTriggers: {
        type: [Array, Function],
        default: function _default(props) {
          return getDefaultConfig(props.theme, 'hideTriggers');
        }
      },
      popperTriggers: {
        type: Array,
        default: function _default(props) {
          return getDefaultConfig(props.theme, 'popperTriggers');
        }
      },
      popperShowTriggers: {
        type: [Array, Function],
        default: function _default(props) {
          return getDefaultConfig(props.theme, 'popperShowTriggers');
        }
      },
      popperHideTriggers: {
        type: [Array, Function],
        default: function _default(props) {
          return getDefaultConfig(props.theme, 'popperHideTriggers');
        }
      },
      container: {
        type: [String, Object, Element, Boolean],
        default: function _default(props) {
          return getDefaultConfig(props.theme, 'container');
        }
      },
      boundary: {
        type: [String, Element],
        default: function _default(props) {
          return getDefaultConfig(props.theme, 'boundary');
        }
      },
      strategy: {
        type: String,
        validator: function validator(value) {
          return ['absolute', 'fixed'].includes(value);
        },
        default: function _default(props) {
          return getDefaultConfig(props.theme, 'strategy');
        }
      },
      modifiers: {
        type: Array,
        default: function _default(props) {
          return getDefaultConfig(props.theme, 'modifiers');
        }
      },
      popperOptions: {
        type: Object,
        default: function _default(props) {
          return getDefaultConfig(props.theme, 'popperOptions');
        }
      },
      autoHide: {
        type: Boolean,
        default: function _default(props) {
          return getDefaultConfig(props.theme, 'autoHide');
        }
      },
      handleResize: {
        type: Boolean,
        default: function _default(props) {
          return getDefaultConfig(props.theme, 'handleResize');
        }
      },
      instantMove: {
        type: Boolean,
        default: function _default(props) {
          return getDefaultConfig(props.theme, 'instantMove');
        }
      },
      eagerMount: {
        type: Boolean,
        default: function _default(props) {
          return getDefaultConfig(props.theme, 'eagerMount');
        }
      }
    },
    emits: ['show', 'hide', 'update:shown', 'apply-show', 'apply-hide', 'close-group', 'close-directive', 'auto-hide', 'resize', 'dispose'],
    data: function data() {
      return {
        isShown: false,
        isMounted: false,
        skipTransition: false,
        classes: {
          showFrom: false,
          showTo: false,
          hideFrom: false,
          hideTo: true
        }
      };
    },
    computed: {
      popperId: function popperId() {
        return this.ariaId != null ? this.ariaId : this.randomId;
      },
      shouldMountContent: function shouldMountContent() {
        return this.eagerMount || this.isMounted;
      },
      slotData: function slotData() {
        return {
          popperId: this.popperId,
          isShown: this.isShown,
          shouldMountContent: this.shouldMountContent,
          skipTransition: this.skipTransition,
          autoHide: this.autoHide,
          hide: this.hide,
          handleResize: this.handleResize,
          onResize: this.onResize,
          classes: _objectSpread2({}, this.classes)
        };
      }
    },
    watch: {
      shown: '$_autoShowHide',
      disabled: function disabled(value) {
        if (value) {
          this.dispose();
        } else {
          this.init();
        }
      },
      container: function container() {
        var _this = this;

        return _asyncToGenerator(function* () {
          if (_this.isShown && _this.popperInstance) {
            _this.$_ensureContainer();

            yield _this.popperInstance.update();
          }
        })();
      },
      triggers: function triggers() {
        this.$_removeEventListeners();
        this.$_addEventListeners();
      },
      placement: '$_refreshPopperOptions',
      offset: '$_refreshPopperOptions',
      boundary: '$_refreshPopperOptions',
      strategy: '$_refreshPopperOptions',
      modifiers: '$_refreshPopperOptions',
      popperOptions: {
        handler: '$_refreshPopperOptions',
        deep: true
      }
    },
    created: function created() {
      this.randomId = "popper_".concat([Math.random(), Date.now()].map(function (n) {
        return n.toString(36).substr(2, 10);
      }).join('_'));
    },
    mounted: function mounted() {
      this.init();
    },
    activated: function activated() {
      this.$_autoShowHide();
    },
    deactivated: function deactivated() {
      this.hide();
    },
    beforeUnmount: function beforeUnmount() {
      this.dispose();
    },
    methods: {
      show: function show() {
        var _this2 = this;

        var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
            event = _ref.event,
            _ref$skipDelay = _ref.skipDelay,
            skipDelay = _ref$skipDelay === void 0 ? false : _ref$skipDelay,
            _ref$force = _ref.force,
            force = _ref$force === void 0 ? false : _ref$force;

        if (force || !this.disabled) {
          this.$_scheduleShow(event, skipDelay);
          this.$emit('show'); // Prevent hiding with global handler

          this.$_showFrameLocked = true;
          requestAnimationFrame(function () {
            _this2.$_showFrameLocked = false;
          });
        }

        this.$emit('update:shown', true);
      },
      hide: function hide() {
        var _ref2 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
            event = _ref2.event,
            _ref2$skipDelay = _ref2.skipDelay,
            skipDelay = _ref2$skipDelay === void 0 ? false : _ref2$skipDelay;

        this.$_scheduleHide(event, skipDelay);
        this.$emit('hide');
        this.$emit('update:shown', false);
      },
      init: function init() {
        this.$_isDisposed = false;
        this.isMounted = false;
        this.$_events = [];
        this.$_preventShow = false; // Nodes

        this.$_targetNodes = this.targetNodes().filter(function (e) {
          return e.nodeType === e.ELEMENT_NODE;
        });
        this.$_popperNode = this.popperNode();
        this.$_swapTargetAttrs('title', 'data-original-title');
        this.$_detachPopperNode();

        if (this.triggers.length) {
          this.$_addEventListeners();
        }

        if (this.shown) {
          this.show();
        }
      },
      dispose: function dispose() {
        this.$_isDisposed = true;
        this.$_removeEventListeners();
        this.hide({
          skipDelay: true
        });

        if (this.popperInstance) {
          this.popperInstance.destroy();
          this.$_detachPopperNode();
        }

        this.isMounted = false;
        this.popperInstance = null;
        this.isShown = false;
        this.$_swapTargetAttrs('data-original-title', 'title');
        this.$emit('dispose');
      },
      onResize: function onResize() {
        var _this3 = this;

        return _asyncToGenerator(function* () {
          if (_this3.isShown && _this3.popperInstance) {
            yield _this3.popperInstance.update();

            _this3.$emit('resize');
          }
        })();
      },
      $_getPopperOptions: function $_getPopperOptions() {
        var _this4 = this;

        var popperOptions = _objectSpread2(_objectSpread2({}, this.popperOptions), {}, {
          placement: this.placement,
          strategy: this.strategy,
          modifiers: this.modifiers,
          onFirstUpdate: function () {
            var _onFirstUpdate = _asyncToGenerator(function* (state) {
              if (_this4.popperOptions.onFirstUpdate) {
                _this4.popperOptions.onFirstUpdate(state);
              }

              yield _this4.$_applyShowEffect();
            });

            function onFirstUpdate(_x) {
              return _onFirstUpdate.apply(this, arguments);
            }

            return onFirstUpdate;
          }()
        });

        if (!popperOptions.modifiers) {
          popperOptions.modifiers = [];
        }

        applyModifier(popperOptions.modifiers, 'arrow', {
          element: this.arrowNode && this.arrowNode() || '[data-popper-arrow]'
        });

        if (this.offset) {
          applyModifier(popperOptions.modifiers, 'offset', {
            offset: this.offset
          });
        }

        if (this.boundary) {
          applyModifier(popperOptions.modifiers, 'preventOverflow', {
            boundary: this.boundary
          });
        }

        if (!this.isShown) {
          // Disable event listeners
          applyModifier(popperOptions.modifiers, 'eventListeners', {
            enabled: false
          });
        }

        return popperOptions;
      },
      $_refreshPopperOptions: function $_refreshPopperOptions() {
        var _this5 = this;

        return _asyncToGenerator(function* () {
          if (_this5.popperInstance) {
            yield _this5.popperInstance.setOptions(_this5.$_getPopperOptions());
          }
        })();
      },
      $_scheduleShow: function $_scheduleShow() {
        var skipDelay = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
        this.$_hideInProgress = false;
        clearTimeout(this.$_scheduleTimer);

        if (hidingPopper && this.instantMove && hidingPopper.instantMove) {
          hidingPopper.$_applyHide(true);
          this.$_applyShow(true);
          return;
        }

        if (skipDelay) {
          this.$_applyShow();
        } else {
          this.$_scheduleTimer = setTimeout(this.$_applyShow.bind(this), this.$_computeDelay('show'));
        }
      },
      $_scheduleHide: function $_scheduleHide() {
        var skipDelay = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
        this.$_hideInProgress = true;
        clearTimeout(this.$_scheduleTimer);

        if (this.isShown) {
          hidingPopper = this;
        }

        if (skipDelay) {
          this.$_applyHide();
        } else {
          this.$_scheduleTimer = setTimeout(this.$_applyHide.bind(this), this.$_computeDelay('hide'));
        }
      },
      $_computeDelay: function $_computeDelay(type) {
        var delay = this.delay;
        return parseInt(delay && delay[type] || delay || 0);
      },
      $_applyShow: function $_applyShow() {
        var _arguments = arguments,
            _this6 = this;

        return _asyncToGenerator(function* () {
          var skipTransition = _arguments.length > 0 && _arguments[0] !== undefined ? _arguments[0] : false;
          clearTimeout(_this6.$_disposeTimer);
          clearTimeout(_this6.$_scheduleTimer);
          _this6.skipTransition = skipTransition; // Already shown

          if (_this6.isShown) {
            return;
          }

          if (!_this6.isMounted) {
            _this6.$_ensureContainer();

            _this6.isMounted = true;
          }

          if (!_this6.popperInstance) {
            _this6.popperInstance = createPopper(_this6.referenceNode(), _this6.$_popperNode, _this6.$_getPopperOptions());
          } else {
            yield _this6.popperInstance.update(); // Enable event listeners

            yield _this6.$_refreshPopperOptions();
            yield _this6.$_applyShowEffect();
          }
        })();
      },
      $_applyShowEffect: function $_applyShowEffect() {
        var _this7 = this;

        return _asyncToGenerator(function* () {
          if (_this7.$_hideInProgress) return;
          _this7.isShown = true;

          _this7.$_applyAttrsToTarget({
            'aria-describedby': _this7.popperId,
            'data-popper-shown': ''
          });

          var showGroup = _this7.showGroup;

          if (showGroup) {
            var popover;

            for (var i = 0; i < shownPoppers.length; i++) {
              popover = shownPoppers[i];

              if (popover.showGroup !== showGroup) {
                popover.hide();
                popover.$emit('close-group');
              }
            }
          }

          shownPoppers.push(_this7);

          _this7.$emit('apply-show'); // Fix popper not applying the attribute on initial render :(


          _this7.$_popperNode.setAttribute('data-popper-placement', _this7.popperInstance.state.placement); // Advanced classes


          _this7.classes.showFrom = true;
          _this7.classes.showTo = false;
          _this7.classes.hideFrom = false;
          _this7.classes.hideTo = false;
          yield nextFrame();
          _this7.classes.showFrom = false;
          _this7.classes.showTo = true;
        })();
      },
      $_applyHide: function $_applyHide() {
        var _arguments2 = arguments,
            _this8 = this;

        return _asyncToGenerator(function* () {
          var skipTransition = _arguments2.length > 0 && _arguments2[0] !== undefined ? _arguments2[0] : false;
          clearTimeout(_this8.$_scheduleTimer); // Already hidden

          if (!_this8.isShown) {
            return;
          }

          _this8.skipTransition = skipTransition;
          removeFromArray(shownPoppers, _this8);

          if (hidingPopper === _this8) {
            hidingPopper = null;
          }

          _this8.isShown = false;

          if (_this8.popperInstance) {
            // Disable event listeners
            yield _this8.$_refreshPopperOptions();
          }

          _this8.$_applyAttrsToTarget({
            'aria-describedby': undefined,
            'data-popper-shown': undefined
          });

          clearTimeout(_this8.$_disposeTimer);
          var disposeTime = getDefaultConfig(_this8.theme, 'disposeTimeout');

          if (disposeTime !== null) {
            _this8.$_disposeTimer = setTimeout(function () {
              if (_this8.$_popperNode) {
                // Don't remove popper instance, just the HTML element
                _this8.$_detachPopperNode();

                _this8.isMounted = false;
              }
            }, disposeTime);
          }

          _this8.$emit('apply-hide'); // Advanced classes


          _this8.classes.showFrom = false;
          _this8.classes.showTo = false;
          _this8.classes.hideFrom = true;
          _this8.classes.hideTo = false;
          yield nextFrame();
          _this8.classes.hideFrom = false;
          _this8.classes.hideTo = true;
        })();
      },
      $_autoShowHide: function $_autoShowHide() {
        if (this.shown) {
          this.show();
        } else {
          this.hide();
        }
      },
      $_ensureContainer: function $_ensureContainer() {
        var container = this.container; // if container is a query, get the relative element

        if (typeof container === 'string') {
          container = window.document.querySelector(container);
        } else if (container === false) {
          // if container is `false`, set it to reference parent
          container = this.$_targetNodes[0].parentNode;
        }

        if (!container) {
          throw new Error('No container for popover: ' + this.container);
        }

        container.appendChild(this.$_popperNode);
      },
      $_addEventListeners: function $_addEventListeners() {
        var _this9 = this;

        var addEvents = function addEvents(targetNodes, eventMap, commonTriggers, customTrigger, handler) {
          var triggers = commonTriggers;

          if (customTrigger != null) {
            triggers = typeof customTrigger === 'function' ? customTrigger(triggers) : customTrigger;
          }

          triggers.forEach(function (trigger) {
            var eventType = eventMap[trigger];

            if (eventType) {
              _this9.$_events.push({
                targetNodes: targetNodes,
                eventType: eventType,
                handler: handler
              });

              targetNodes.forEach(function (node) {
                return node.addEventListener(eventType, handler);
              });
            }
          });
        }; // Add trigger show events


        var handleShow = function handleShow(event) {
          if (_this9.isShown && !_this9.$_hideInProgress) {
            return;
          }

          event.usedByTooltip = true; // Prevent open on mobile touch in global close

          !_this9.$_preventShow && _this9.show({
            event: event
          });
        };

        addEvents(this.$_targetNodes, SHOW_EVENT_MAP, this.triggers, this.showTriggers, handleShow);
        addEvents([this.$_popperNode], SHOW_EVENT_MAP, this.popperTriggers, this.popperShowTriggers, handleShow); // Add trigger hide events

        var handleHide = function handleHide(event) {
          if (event.usedByTooltip) {
            return;
          }

          _this9.hide({
            event: event
          });
        };

        addEvents(this.$_targetNodes, HIDE_EVENT_MAP, this.triggers, this.hideTriggers, handleHide);
        addEvents([this.$_popperNode], HIDE_EVENT_MAP, this.popperTriggers, this.popperHideTriggers, handleHide);
      },
      $_removeEventListeners: function $_removeEventListeners() {
        this.$_events.forEach(function (_ref3) {
          var targetNodes = _ref3.targetNodes,
              eventType = _ref3.eventType,
              handler = _ref3.handler;
          targetNodes.forEach(function (node) {
            return node.removeEventListener(eventType, handler);
          });
        });
        this.$_events = [];
      },
      $_handleGlobalClose: function $_handleGlobalClose(event) {
        var _this10 = this;

        var touch = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
        if (this.$_showFrameLocked) return;
        this.hide({
          event: event
        });

        if (event.closePopover) {
          this.$emit('close-directive');
        } else {
          this.$emit('auto-hide');
        }

        if (touch) {
          this.$_preventShow = true;
          setTimeout(function () {
            _this10.$_preventShow = false;
          }, 300);
        }
      },
      $_detachPopperNode: function $_detachPopperNode() {
        this.$_popperNode.parentNode && this.$_popperNode.parentNode.removeChild(this.$_popperNode);
      },
      $_swapTargetAttrs: function $_swapTargetAttrs(attrFrom, attrTo) {
        var _iterator = _createForOfIteratorHelper(this.$_targetNodes),
            _step;

        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var el = _step.value;
            var value = el.getAttribute(attrFrom);

            if (value) {
              el.removeAttribute(attrFrom);
              el.setAttribute(attrTo, value);
            }
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
      },
      $_applyAttrsToTarget: function $_applyAttrsToTarget(attrs) {
        var _iterator2 = _createForOfIteratorHelper(this.$_targetNodes),
            _step2;

        try {
          for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
            var el = _step2.value;

            for (var n in attrs) {
              var value = attrs[n];

              if (value == null) {
                el.removeAttribute(n);
              } else {
                el.setAttribute(n, value);
              }
            }
          }
        } catch (err) {
          _iterator2.e(err);
        } finally {
          _iterator2.f();
        }
      }
    },
    render: function render() {
      return this.$slots.default(this.slotData);
    }
  };
});

if (typeof document !== 'undefined' && typeof window !== 'undefined') {
  if (isIOS) {
    document.addEventListener('touchend', handleGlobalTouchend, supportsPassive ? {
      passive: true,
      capture: true
    } : true);
  } else {
    window.addEventListener('click', handleGlobalClick, true);
  }
}

function handleGlobalClick(event) {
  handleGlobalClose(event);
}

function handleGlobalTouchend(event) {
  handleGlobalClose(event, true);
}

function handleGlobalClose(event) {
  var touch = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  var _loop = function _loop(i) {
    var popper = shownPoppers[i];
    var popperContent = popper.popperNode();
    var contains = popperContent.contains(event.target);
    requestAnimationFrame(function () {
      if (event.closeAllPopover || event.closePopover && contains || popper.autoHide && !contains) {
        popper.$_handleGlobalClose(event, touch);
      }
    });
  };

  // Delay so that close directive has time to set values
  for (var i = 0; i < shownPoppers.length; i++) {
    _loop(i);
  }
}

function nextFrame() {
  return new Promise(function (resolve) {
    return requestAnimationFrame(resolve);
  });
}

var PrivateThemeClass = {
  computed: {
    themeClass: function themeClass() {
      return getThemeClasses(this.theme);
    }
  }
};

var script$5 = {
  name: 'VPopperContent',
  components: {
    ResizeObserver: ResizeObserver
  },
  mixins: [PrivateThemeClass],
  props: {
    popperId: String,
    theme: String,
    shown: Boolean,
    mounted: Boolean,
    skipTransition: Boolean,
    autoHide: Boolean,
    handleResize: Boolean,
    classes: Object
  },
  emits: ['hide', 'resize']
};

var _hoisted_1$1 = ["id", "aria-hidden", "tabindex"];
var _hoisted_2$1 = {
  class: "v-popper__wrapper"
};
var _hoisted_3 = {
  ref: "inner",
  class: "v-popper__inner"
};
var _hoisted_4 = {
  ref: "arrow",
  class: "v-popper__arrow-container"
};

var _hoisted_5 = /*#__PURE__*/createElementVNode("div", {
  class: "v-popper__arrow"
}, null, -1
/* HOISTED */
);

var _hoisted_6 = [_hoisted_5];
function render$2(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_ResizeObserver = resolveComponent("ResizeObserver");

  return openBlock(), createElementBlock("div", {
    id: $props.popperId,
    ref: "popover",
    class: normalizeClass(["v-popper__popper", [_ctx.themeClass, {
      'v-popper__popper--shown': $props.shown,
      'v-popper__popper--hidden': !$props.shown,
      'v-popper__popper--show-from': $props.classes.showFrom,
      'v-popper__popper--show-to': $props.classes.showTo,
      'v-popper__popper--hide-from': $props.classes.hideFrom,
      'v-popper__popper--hide-to': $props.classes.hideTo,
      'v-popper__popper--skip-transition': $props.skipTransition
    }]]),
    "aria-hidden": $props.shown ? 'false' : 'true',
    tabindex: $props.autoHide ? 0 : undefined,
    onKeyup: _cache[1] || (_cache[1] = withKeys(function ($event) {
      return $props.autoHide && _ctx.$emit('hide');
    }, ["esc"]))
  }, [createElementVNode("div", _hoisted_2$1, [createElementVNode("div", _hoisted_3, [$props.mounted ? (openBlock(), createElementBlock(Fragment, {
    key: 0
  }, [createElementVNode("div", null, [renderSlot(_ctx.$slots, "default")]), $props.handleResize ? (openBlock(), createBlock(_component_ResizeObserver, {
    key: 0,
    onNotify: _cache[0] || (_cache[0] = function ($event) {
      return _ctx.$emit('resize', $event);
    })
  })) : createCommentVNode("v-if", true)], 64
  /* STABLE_FRAGMENT */
  )) : createCommentVNode("v-if", true)], 512
  /* NEED_PATCH */
  ), createElementVNode("div", _hoisted_4, _hoisted_6, 512
  /* NEED_PATCH */
  )])], 42
  /* CLASS, PROPS, HYDRATE_EVENTS */
  , _hoisted_1$1);
}

script$5.render = render$2;
script$5.__file = "src/components/PopperContent.vue";

// @vue/component
var PrivatePopperMethods = {
  methods: {
    show: function show() {
      var _this$$refs$popper;

      return (_this$$refs$popper = this.$refs.popper).show.apply(_this$$refs$popper, arguments);
    },
    hide: function hide() {
      var _this$$refs$popper2;

      return (_this$$refs$popper2 = this.$refs.popper).hide.apply(_this$$refs$popper2, arguments);
    },
    dispose: function dispose() {
      var _this$$refs$popper3;

      return (_this$$refs$popper3 = this.$refs.popper).dispose.apply(_this$$refs$popper3, arguments);
    },
    onResize: function onResize() {
      var _this$$refs$popper4;

      return (_this$$refs$popper4 = this.$refs.popper).onResize.apply(_this$$refs$popper4, arguments);
    }
  }
};

var script$4 = {
  name: 'VPopperWrapper',
  components: {
    Popper: PrivatePopper(),
    PopperContent: script$5
  },
  mixins: [PrivatePopperMethods, PrivateThemeClass],
  inheritAttrs: false,
  props: {
    theme: {
      type: String,
      default: null
    }
  },
  computed: {
    finalTheme: function finalTheme() {
      var _this$theme;

      return (_this$theme = this.theme) !== null && _this$theme !== void 0 ? _this$theme : this.$options.vPopperTheme;
    }
  },
  methods: {
    getTargetNodes: function getTargetNodes() {
      var children = _toConsumableArray(this.$refs.reference.children);

      return children.slice(0, children.length - 1).filter(Boolean);
    }
  }
};

function render$1(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_PopperContent = resolveComponent("PopperContent");

  var _component_Popper = resolveComponent("Popper");

  return openBlock(), createBlock(_component_Popper, mergeProps({
    ref: "popper"
  }, _ctx.$attrs, {
    theme: $options.finalTheme,
    "target-nodes": $options.getTargetNodes,
    "reference-node": function referenceNode() {
      return _ctx.$refs.reference;
    },
    "popper-node": function popperNode() {
      return _ctx.$refs.popperContent.$el;
    },
    "arrow-node": function arrowNode() {
      return _ctx.$refs.popperContent.$refs.arrow;
    }
  }), {
    default: withCtx(function (_ref) {
      var popperId = _ref.popperId,
          isShown = _ref.isShown,
          shouldMountContent = _ref.shouldMountContent,
          skipTransition = _ref.skipTransition,
          autoHide = _ref.autoHide,
          hide = _ref.hide,
          handleResize = _ref.handleResize,
          onResize = _ref.onResize,
          classes = _ref.classes;
      return [createElementVNode("div", {
        ref: "reference",
        class: normalizeClass(["v-popper", [_ctx.themeClass, {
          'v-popper--shown': isShown
        }]])
      }, [renderSlot(_ctx.$slots, "default"), createVNode(_component_PopperContent, {
        ref: "popperContent",
        "popper-id": popperId,
        theme: $options.finalTheme,
        shown: isShown,
        mounted: shouldMountContent,
        "skip-transition": skipTransition,
        "auto-hide": autoHide,
        "handle-resize": handleResize,
        classes: classes,
        onHide: hide,
        onResize: onResize
      }, {
        default: withCtx(function () {
          return [renderSlot(_ctx.$slots, "popper", {
            shown: isShown
          })];
        }),
        _: 2
        /* DYNAMIC */

      }, 1032
      /* PROPS, DYNAMIC_SLOTS */
      , ["popper-id", "theme", "shown", "mounted", "skip-transition", "auto-hide", "handle-resize", "classes", "onHide", "onResize"])], 2
      /* CLASS */
      )];
    }),
    _: 3
    /* FORWARDED */

  }, 16
  /* FULL_PROPS */
  , ["theme", "target-nodes", "reference-node", "popper-node", "arrow-node"]);
}

script$4.render = render$1;
script$4.__file = "src/components/PopperWrapper.vue";

var script$3 = _objectSpread2(_objectSpread2({}, script$4), {}, {
  name: 'VDropdown',
  vPopperTheme: 'dropdown'
});

script$3.__file = "src/components/Dropdown.vue";

var script$2 = _objectSpread2(_objectSpread2({}, script$4), {}, {
  name: 'VMenu',
  vPopperTheme: 'menu'
});

script$2.__file = "src/components/Menu.vue";

var script$1 = _objectSpread2(_objectSpread2({}, script$4), {}, {
  name: 'VTooltip',
  vPopperTheme: 'tooltip'
});

script$1.__file = "src/components/Tooltip.vue";

var script = {
  name: 'VTooltipDirective',
  components: {
    Popper: PrivatePopper(),
    PopperContent: script$5
  },
  mixins: [PrivatePopperMethods],
  inheritAttrs: false,
  props: {
    theme: {
      type: String,
      default: 'tooltip'
    },
    html: {
      type: Boolean,
      default: function _default(props) {
        return getDefaultConfig(props.theme, 'html');
      }
    },
    content: {
      type: [String, Number, Function],
      default: null
    },
    loadingContent: {
      type: String,
      default: function _default(props) {
        return getDefaultConfig(props.theme, 'loadingContent');
      }
    }
  },
  data: function data() {
    return {
      asyncContent: null
    };
  },
  computed: {
    isContentAsync: function isContentAsync() {
      return typeof this.content === 'function';
    },
    loading: function loading() {
      return this.isContentAsync && this.asyncContent == null;
    },
    finalContent: function finalContent() {
      if (this.isContentAsync) {
        return this.loading ? this.loadingContent : this.asyncContent;
      }

      return this.content;
    }
  },
  watch: {
    content: {
      handler: function handler() {
        this.fetchContent(true);
      },
      immediate: true
    },
    finalContent: function finalContent(value) {
      var _this = this;

      this.$nextTick(function () {
        _this.$refs.popper.onResize();
      });
    }
  },
  created: function created() {
    this.$_fetchId = 0;
  },
  methods: {
    fetchContent: function fetchContent(force) {
      var _this2 = this;

      if (typeof this.content === 'function' && this.$_isShown && (force || !this.$_loading && this.asyncContent == null)) {
        this.asyncContent = null;
        this.$_loading = true;
        var fetchId = ++this.$_fetchId;
        var result = this.content(this);

        if (result.then) {
          result.then(function (res) {
            return _this2.onResult(fetchId, res);
          });
        } else {
          this.onResult(fetchId, result);
        }
      }
    },
    onResult: function onResult(fetchId, result) {
      if (fetchId !== this.$_fetchId) return;
      this.$_loading = false;
      this.asyncContent = result;
    },
    onShow: function onShow() {
      this.$_isShown = true;
      this.fetchContent();
    },
    onHide: function onHide() {
      this.$_isShown = false;
    }
  }
};

var _hoisted_1 = ["innerHTML"];
var _hoisted_2 = ["textContent"];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_PopperContent = resolveComponent("PopperContent");

  var _component_Popper = resolveComponent("Popper");

  return openBlock(), createBlock(_component_Popper, mergeProps({
    ref: "popper"
  }, _ctx.$attrs, {
    theme: $props.theme,
    "popper-node": function popperNode() {
      return _ctx.$refs.popperContent.$el;
    },
    "arrow-node": function arrowNode() {
      return _ctx.$refs.popperContent.$refs.arrow;
    },
    onApplyShow: $options.onShow,
    onApplyHide: $options.onHide
  }), {
    default: withCtx(function (_ref) {
      var popperId = _ref.popperId,
          isShown = _ref.isShown,
          shouldMountContent = _ref.shouldMountContent,
          skipTransition = _ref.skipTransition,
          autoHide = _ref.autoHide,
          hide = _ref.hide,
          handleResize = _ref.handleResize,
          onResize = _ref.onResize,
          classes = _ref.classes;
      return [createVNode(_component_PopperContent, {
        ref: "popperContent",
        class: normalizeClass({
          'v-popper--tooltip-loading': $options.loading
        }),
        "popper-id": popperId,
        theme: $props.theme,
        shown: isShown,
        mounted: shouldMountContent,
        "skip-transition": skipTransition,
        "auto-hide": autoHide,
        "handle-resize": handleResize,
        classes: classes,
        onHide: hide,
        onResize: onResize
      }, {
        default: withCtx(function () {
          return [$props.html ? (openBlock(), createElementBlock("div", {
            key: 0,
            innerHTML: $options.finalContent
          }, null, 8
          /* PROPS */
          , _hoisted_1)) : (openBlock(), createElementBlock("div", {
            key: 1,
            textContent: toDisplayString($options.finalContent)
          }, null, 8
          /* PROPS */
          , _hoisted_2))];
        }),
        _: 2
        /* DYNAMIC */

      }, 1032
      /* PROPS, DYNAMIC_SLOTS */
      , ["class", "popper-id", "theme", "shown", "mounted", "skip-transition", "auto-hide", "handle-resize", "classes", "onHide", "onResize"])];
    }),
    _: 1
    /* STABLE */

  }, 16
  /* FULL_PROPS */
  , ["theme", "popper-node", "arrow-node", "onApplyShow", "onApplyHide"]);
}

script.render = render;
script.__file = "src/components/TooltipDirective.vue";

var TARGET_CLASS = 'v-popper--has-tooltip';
/**
 * Support placement as directive modifier
 */

function getPlacement(options, modifiers) {
  var result = options.placement;

  if (!result && modifiers) {
    var _iterator = _createForOfIteratorHelper(placements),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var pos = _step.value;

        if (modifiers[pos]) {
          result = pos;
        }
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
  }

  if (!result) {
    result = getDefaultConfig(options.theme || 'tooltip', 'placement');
  }

  return result;
}
function getOptions(el, value, modifiers) {
  var options;

  var type = _typeof(value);

  if (type === 'string') {
    options = {
      content: value
    };
  } else if (value && type === 'object') {
    options = value;
  } else {
    options = {
      content: false
    };
  }

  options.placement = getPlacement(options, modifiers);

  options.targetNodes = function () {
    return [el];
  };

  options.referenceNode = function () {
    return el;
  };

  return options;
}
function createTooltip(el, value, modifiers) {
  var options = ref(getOptions(el, value, modifiers));
  var component = ref();
  var tooltipApp = createApp({
    name: 'VTooltipDirective',
    setup: function setup() {
      return {
        options: options,
        tooltip: component
      };
    },
    render: function render() {
      return h(script, _objectSpread2(_objectSpread2({}, this.options), {}, {
        ref: 'tooltip'
      }));
    },
    devtools: {
      hide: true
    }
  });
  var mountTarget = document.createElement('div');
  document.body.appendChild(mountTarget);
  tooltipApp.mount(mountTarget);
  el.$_popperMountTarget = mountTarget; // Class on target

  if (el.classList) {
    el.classList.add(TARGET_CLASS);
  }

  var result = el.$_popper = {
    app: tooltipApp,
    options: options,
    component: component,
    show: function show() {
      component.value.show();
    },
    hide: function hide() {
      component.value.hide();
    }
  };
  return result;
}
function destroyTooltip(el) {
  if (el.$_popper) {
    el.$_popper.app.unmount();

    if (el.$_popperMountTarget.parentElement) {
      el.$_popperMountTarget.parentElement.removeChild(el.$_popperMountTarget);
    }

    delete el.$_popper;
    delete el.$_popperOldShown;
    delete el.$_popperMountTarget;
  }

  if (el.classList) {
    el.classList.remove(TARGET_CLASS);
  }
}
function bind(el, _ref) {
  var value = _ref.value,
      modifiers = _ref.modifiers;
  var options = getOptions(el, value, modifiers);

  if (!options.content || getDefaultConfig(options.theme || 'tooltip', 'disabled')) {
    destroyTooltip(el);
  } else {
    var tooltipApp;

    if (el.$_popper) {
      tooltipApp = el.$_popper;
      tooltipApp.options.value = options;
    } else {
      tooltipApp = createTooltip(el, value, modifiers);
    } // Manual show


    if (typeof value.shown !== 'undefined' && value.shown !== el.$_popperOldShown) {
      el.$_popperOldShown = value.shown;
      value.shown ? tooltipApp.show() : tooltipApp.hide();
    }
  }
}
var PrivateVTooltip = {
  beforeMount: bind,
  updated: bind,
  beforeUnmount: function beforeUnmount(el) {
    destroyTooltip(el);
  }
};

function addListeners(el) {
  el.addEventListener('click', onClick);
  el.addEventListener('touchstart', onTouchStart, supportsPassive ? {
    passive: true
  } : false);
}

function removeListeners(el) {
  el.removeEventListener('click', onClick);
  el.removeEventListener('touchstart', onTouchStart);
  el.removeEventListener('touchend', onTouchEnd);
  el.removeEventListener('touchcancel', onTouchCancel);
}

function onClick(event) {
  var el = event.currentTarget;
  event.closePopover = !el.$_vclosepopover_touch;
  event.closeAllPopover = el.$_closePopoverModifiers && !!el.$_closePopoverModifiers.all;
}

function onTouchStart(event) {
  if (event.changedTouches.length === 1) {
    var el = event.currentTarget;
    el.$_vclosepopover_touch = true;
    var touch = event.changedTouches[0];
    el.$_vclosepopover_touchPoint = touch;
    el.addEventListener('touchend', onTouchEnd);
    el.addEventListener('touchcancel', onTouchCancel);
  }
}

function onTouchEnd(event) {
  var el = event.currentTarget;
  el.$_vclosepopover_touch = false;

  if (event.changedTouches.length === 1) {
    var touch = event.changedTouches[0];
    var firstTouch = el.$_vclosepopover_touchPoint;
    event.closePopover = Math.abs(touch.screenY - firstTouch.screenY) < 20 && Math.abs(touch.screenX - firstTouch.screenX) < 20;
    event.closeAllPopover = el.$_closePopoverModifiers && !!el.$_closePopoverModifiers.all;
  }
}

function onTouchCancel(event) {
  var el = event.currentTarget;
  el.$_vclosepopover_touch = false;
}

var PrivateVClosePopper = {
  beforeMount: function beforeMount(el, _ref) {
    var value = _ref.value,
        modifiers = _ref.modifiers;
    el.$_closePopoverModifiers = modifiers;

    if (typeof value === 'undefined' || value) {
      addListeners(el);
    }
  },
  updated: function updated(el, _ref2) {
    var value = _ref2.value,
        oldValue = _ref2.oldValue,
        modifiers = _ref2.modifiers;
    el.$_closePopoverModifiers = modifiers;

    if (value !== oldValue) {
      if (typeof value === 'undefined' || value) {
        addListeners(el);
      } else {
        removeListeners(el);
      }
    }
  },
  beforeUnmount: function beforeUnmount(el) {
    removeListeners(el);
  }
};

/* Exports */

var options = config; // Directive

var VTooltip = PrivateVTooltip;
var VClosePopper = PrivateVClosePopper; // Components

var Dropdown = script$3;
var Menu = script$2;
var Popper = PrivatePopper;
var PopperContent = script$5;
var PopperMethods = PrivatePopperMethods;
var PopperWrapper = script$4;
var ThemeClass = PrivateThemeClass;
var Tooltip = script$1;
var TooltipDirective = script;
/* Vue plugin */

function install(app) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  if (app.$_vTooltipInstalled) return;
  app.$_vTooltipInstalled = true;
  assign(config, options); // Directive

  app.directive('tooltip', PrivateVTooltip);
  app.directive('close-popper', PrivateVClosePopper); // Components
  // eslint-disable-next-line vue/component-definition-name-casing

  app.component('v-tooltip', script$1);
  app.component('VTooltip', script$1); // eslint-disable-next-line vue/component-definition-name-casing

  app.component('v-dropdown', script$3);
  app.component('VDropdown', script$3); // eslint-disable-next-line vue/component-definition-name-casing

  app.component('v-menu', script$2);
  app.component('VMenu', script$2);
}
var plugin = {
  // eslint-disable-next-line no-undef
  version: "4.0.0-beta.2",
  install: install,
  options: config
};

export { Dropdown, Menu, Popper, PopperContent, PopperMethods, PopperWrapper, ThemeClass, Tooltip, TooltipDirective, VClosePopper, VTooltip, createTooltip, plugin as default, destroyTooltip, install, options };
//# sourceMappingURL=v-tooltip.esm.js.map
