(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('vue')) :
  typeof define === 'function' && define.amd ? define(['exports', 'vue'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global["v-tooltip"] = {}, global.vue));
})(this, (function (exports, vue) { 'use strict';

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

  var top = 'top';
  var bottom = 'bottom';
  var right = 'right';
  var left = 'left';
  var auto = 'auto';
  var basePlacements = [top, bottom, right, left];
  var start = 'start';
  var end = 'end';
  var clippingParents = 'clippingParents';
  var viewport = 'viewport';
  var popper = 'popper';
  var reference = 'reference';
  var variationPlacements = /*#__PURE__*/basePlacements.reduce(function (acc, placement) {
    return acc.concat([placement + "-" + start, placement + "-" + end]);
  }, []);
  var placements = /*#__PURE__*/[].concat(basePlacements, [auto]).reduce(function (acc, placement) {
    return acc.concat([placement, placement + "-" + start, placement + "-" + end]);
  }, []); // modifiers that need to read the DOM

  var beforeRead = 'beforeRead';
  var read = 'read';
  var afterRead = 'afterRead'; // pure-logic modifiers

  var beforeMain = 'beforeMain';
  var main = 'main';
  var afterMain = 'afterMain'; // modifier with the purpose to write to the DOM (or write into a framework state)

  var beforeWrite = 'beforeWrite';
  var write = 'write';
  var afterWrite = 'afterWrite';
  var modifierPhases = [beforeRead, read, afterRead, beforeMain, main, afterMain, beforeWrite, write, afterWrite];

  function getNodeName(element) {
    return element ? (element.nodeName || '').toLowerCase() : null;
  }

  function getWindow(node) {
    if (node == null) {
      return window;
    }

    if (node.toString() !== '[object Window]') {
      var ownerDocument = node.ownerDocument;
      return ownerDocument ? ownerDocument.defaultView || window : window;
    }

    return node;
  }

  function isElement(node) {
    var OwnElement = getWindow(node).Element;
    return node instanceof OwnElement || node instanceof Element;
  }

  function isHTMLElement(node) {
    var OwnElement = getWindow(node).HTMLElement;
    return node instanceof OwnElement || node instanceof HTMLElement;
  }

  function isShadowRoot(node) {
    // IE 11 has no ShadowRoot
    if (typeof ShadowRoot === 'undefined') {
      return false;
    }

    var OwnElement = getWindow(node).ShadowRoot;
    return node instanceof OwnElement || node instanceof ShadowRoot;
  }

  // and applies them to the HTMLElements such as popper and arrow

  function applyStyles(_ref) {
    var state = _ref.state;
    Object.keys(state.elements).forEach(function (name) {
      var style = state.styles[name] || {};
      var attributes = state.attributes[name] || {};
      var element = state.elements[name]; // arrow is optional + virtual elements

      if (!isHTMLElement(element) || !getNodeName(element)) {
        return;
      } // Flow doesn't support to extend this property, but it's the most
      // effective way to apply styles to an HTMLElement
      // $FlowFixMe[cannot-write]


      Object.assign(element.style, style);
      Object.keys(attributes).forEach(function (name) {
        var value = attributes[name];

        if (value === false) {
          element.removeAttribute(name);
        } else {
          element.setAttribute(name, value === true ? '' : value);
        }
      });
    });
  }

  function effect$2(_ref2) {
    var state = _ref2.state;
    var initialStyles = {
      popper: {
        position: state.options.strategy,
        left: '0',
        top: '0',
        margin: '0'
      },
      arrow: {
        position: 'absolute'
      },
      reference: {}
    };
    Object.assign(state.elements.popper.style, initialStyles.popper);
    state.styles = initialStyles;

    if (state.elements.arrow) {
      Object.assign(state.elements.arrow.style, initialStyles.arrow);
    }

    return function () {
      Object.keys(state.elements).forEach(function (name) {
        var element = state.elements[name];
        var attributes = state.attributes[name] || {};
        var styleProperties = Object.keys(state.styles.hasOwnProperty(name) ? state.styles[name] : initialStyles[name]); // Set all values to an empty string to unset them

        var style = styleProperties.reduce(function (style, property) {
          style[property] = '';
          return style;
        }, {}); // arrow is optional + virtual elements

        if (!isHTMLElement(element) || !getNodeName(element)) {
          return;
        }

        Object.assign(element.style, style);
        Object.keys(attributes).forEach(function (attribute) {
          element.removeAttribute(attribute);
        });
      });
    };
  } // eslint-disable-next-line import/no-unused-modules


  var applyStyles$1 = {
    name: 'applyStyles',
    enabled: true,
    phase: 'write',
    fn: applyStyles,
    effect: effect$2,
    requires: ['computeStyles']
  };

  function getBasePlacement(placement) {
    return placement.split('-')[0];
  }

  // import { isHTMLElement } from './instanceOf';
  function getBoundingClientRect(element, // eslint-disable-next-line unused-imports/no-unused-vars
  includeScale) {

    var rect = element.getBoundingClientRect();
    var scaleX = 1;
    var scaleY = 1; // FIXME:
    // `offsetWidth` returns an integer while `getBoundingClientRect`
    // returns a float. This results in `scaleX` or `scaleY` being
    // non-1 when it should be for elements that aren't a full pixel in
    // width or height.
    // if (isHTMLElement(element) && includeScale) {
    //   const offsetHeight = element.offsetHeight;
    //   const offsetWidth = element.offsetWidth;
    //   // Do not attempt to divide by 0, otherwise we get `Infinity` as scale
    //   // Fallback to 1 in case both values are `0`
    //   if (offsetWidth > 0) {
    //     scaleX = rect.width / offsetWidth || 1;
    //   }
    //   if (offsetHeight > 0) {
    //     scaleY = rect.height / offsetHeight || 1;
    //   }
    // }

    return {
      width: rect.width / scaleX,
      height: rect.height / scaleY,
      top: rect.top / scaleY,
      right: rect.right / scaleX,
      bottom: rect.bottom / scaleY,
      left: rect.left / scaleX,
      x: rect.left / scaleX,
      y: rect.top / scaleY
    };
  }

  // means it doesn't take into account transforms.

  function getLayoutRect(element) {
    var clientRect = getBoundingClientRect(element); // Use the clientRect sizes if it's not been transformed.
    // Fixes https://github.com/popperjs/popper-core/issues/1223

    var width = element.offsetWidth;
    var height = element.offsetHeight;

    if (Math.abs(clientRect.width - width) <= 1) {
      width = clientRect.width;
    }

    if (Math.abs(clientRect.height - height) <= 1) {
      height = clientRect.height;
    }

    return {
      x: element.offsetLeft,
      y: element.offsetTop,
      width: width,
      height: height
    };
  }

  function contains(parent, child) {
    var rootNode = child.getRootNode && child.getRootNode(); // First, attempt with faster native method

    if (parent.contains(child)) {
      return true;
    } // then fallback to custom implementation with Shadow DOM support
    else if (rootNode && isShadowRoot(rootNode)) {
      var next = child;

      do {
        if (next && parent.isSameNode(next)) {
          return true;
        } // $FlowFixMe[prop-missing]: need a better way to handle this...


        next = next.parentNode || next.host;
      } while (next);
    } // Give up, the result is false


    return false;
  }

  function getComputedStyle(element) {
    return getWindow(element).getComputedStyle(element);
  }

  function isTableElement(element) {
    return ['table', 'td', 'th'].indexOf(getNodeName(element)) >= 0;
  }

  function getDocumentElement(element) {
    // $FlowFixMe[incompatible-return]: assume body is always available
    return ((isElement(element) ? element.ownerDocument : // $FlowFixMe[prop-missing]
    element.document) || window.document).documentElement;
  }

  function getParentNode(element) {
    if (getNodeName(element) === 'html') {
      return element;
    }

    return (// this is a quicker (but less type safe) way to save quite some bytes from the bundle
      // $FlowFixMe[incompatible-return]
      // $FlowFixMe[prop-missing]
      element.assignedSlot || // step into the shadow DOM of the parent of a slotted node
      element.parentNode || ( // DOM Element detected
      isShadowRoot(element) ? element.host : null) || // ShadowRoot detected
      // $FlowFixMe[incompatible-call]: HTMLElement is a Node
      getDocumentElement(element) // fallback

    );
  }

  function getTrueOffsetParent(element) {
    if (!isHTMLElement(element) || // https://github.com/popperjs/popper-core/issues/837
    getComputedStyle(element).position === 'fixed') {
      return null;
    }

    return element.offsetParent;
  } // `.offsetParent` reports `null` for fixed elements, while absolute elements
  // return the containing block


  function getContainingBlock(element) {
    var isFirefox = navigator.userAgent.toLowerCase().indexOf('firefox') !== -1;
    var isIE = navigator.userAgent.indexOf('Trident') !== -1;

    if (isIE && isHTMLElement(element)) {
      // In IE 9, 10 and 11 fixed elements containing block is always established by the viewport
      var elementCss = getComputedStyle(element);

      if (elementCss.position === 'fixed') {
        return null;
      }
    }

    var currentNode = getParentNode(element);

    while (isHTMLElement(currentNode) && ['html', 'body'].indexOf(getNodeName(currentNode)) < 0) {
      var css = getComputedStyle(currentNode); // This is non-exhaustive but covers the most common CSS properties that
      // create a containing block.
      // https://developer.mozilla.org/en-US/docs/Web/CSS/Containing_block#identifying_the_containing_block

      if (css.transform !== 'none' || css.perspective !== 'none' || css.contain === 'paint' || ['transform', 'perspective'].indexOf(css.willChange) !== -1 || isFirefox && css.willChange === 'filter' || isFirefox && css.filter && css.filter !== 'none') {
        return currentNode;
      } else {
        currentNode = currentNode.parentNode;
      }
    }

    return null;
  } // Gets the closest ancestor positioned element. Handles some edge cases,
  // such as table ancestors and cross browser bugs.


  function getOffsetParent(element) {
    var window = getWindow(element);
    var offsetParent = getTrueOffsetParent(element);

    while (offsetParent && isTableElement(offsetParent) && getComputedStyle(offsetParent).position === 'static') {
      offsetParent = getTrueOffsetParent(offsetParent);
    }

    if (offsetParent && (getNodeName(offsetParent) === 'html' || getNodeName(offsetParent) === 'body' && getComputedStyle(offsetParent).position === 'static')) {
      return window;
    }

    return offsetParent || getContainingBlock(element) || window;
  }

  function getMainAxisFromPlacement(placement) {
    return ['top', 'bottom'].indexOf(placement) >= 0 ? 'x' : 'y';
  }

  var max = Math.max;
  var min = Math.min;
  var round = Math.round;

  function within(min$1, value, max$1) {
    return max(min$1, min(value, max$1));
  }

  function getFreshSideObject() {
    return {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0
    };
  }

  function mergePaddingObject(paddingObject) {
    return Object.assign({}, getFreshSideObject(), paddingObject);
  }

  function expandToHashMap(value, keys) {
    return keys.reduce(function (hashMap, key) {
      hashMap[key] = value;
      return hashMap;
    }, {});
  }

  var toPaddingObject = function toPaddingObject(padding, state) {
    padding = typeof padding === 'function' ? padding(Object.assign({}, state.rects, {
      placement: state.placement
    })) : padding;
    return mergePaddingObject(typeof padding !== 'number' ? padding : expandToHashMap(padding, basePlacements));
  };

  function arrow(_ref) {
    var _state$modifiersData$;

    var state = _ref.state,
        name = _ref.name,
        options = _ref.options;
    var arrowElement = state.elements.arrow;
    var popperOffsets = state.modifiersData.popperOffsets;
    var basePlacement = getBasePlacement(state.placement);
    var axis = getMainAxisFromPlacement(basePlacement);
    var isVertical = [left, right].indexOf(basePlacement) >= 0;
    var len = isVertical ? 'height' : 'width';

    if (!arrowElement || !popperOffsets) {
      return;
    }

    var paddingObject = toPaddingObject(options.padding, state);
    var arrowRect = getLayoutRect(arrowElement);
    var minProp = axis === 'y' ? top : left;
    var maxProp = axis === 'y' ? bottom : right;
    var endDiff = state.rects.reference[len] + state.rects.reference[axis] - popperOffsets[axis] - state.rects.popper[len];
    var startDiff = popperOffsets[axis] - state.rects.reference[axis];
    var arrowOffsetParent = getOffsetParent(arrowElement);
    var clientSize = arrowOffsetParent ? axis === 'y' ? arrowOffsetParent.clientHeight || 0 : arrowOffsetParent.clientWidth || 0 : 0;
    var centerToReference = endDiff / 2 - startDiff / 2; // Make sure the arrow doesn't overflow the popper if the center point is
    // outside of the popper bounds

    var min = paddingObject[minProp];
    var max = clientSize - arrowRect[len] - paddingObject[maxProp];
    var center = clientSize / 2 - arrowRect[len] / 2 + centerToReference;
    var offset = within(min, center, max); // Prevents breaking syntax highlighting...

    var axisProp = axis;
    state.modifiersData[name] = (_state$modifiersData$ = {}, _state$modifiersData$[axisProp] = offset, _state$modifiersData$.centerOffset = offset - center, _state$modifiersData$);
  }

  function effect$1(_ref2) {
    var state = _ref2.state,
        options = _ref2.options;
    var _options$element = options.element,
        arrowElement = _options$element === void 0 ? '[data-popper-arrow]' : _options$element;

    if (arrowElement == null) {
      return;
    } // CSS selector


    if (typeof arrowElement === 'string') {
      arrowElement = state.elements.popper.querySelector(arrowElement);

      if (!arrowElement) {
        return;
      }
    }

    if (process.env.NODE_ENV !== "production") {
      if (!isHTMLElement(arrowElement)) {
        console.error(['Popper: "arrow" element must be an HTMLElement (not an SVGElement).', 'To use an SVG arrow, wrap it in an HTMLElement that will be used as', 'the arrow.'].join(' '));
      }
    }

    if (!contains(state.elements.popper, arrowElement)) {
      if (process.env.NODE_ENV !== "production") {
        console.error(['Popper: "arrow" modifier\'s `element` must be a child of the popper', 'element.'].join(' '));
      }

      return;
    }

    state.elements.arrow = arrowElement;
  } // eslint-disable-next-line import/no-unused-modules


  var arrow$1 = {
    name: 'arrow',
    enabled: true,
    phase: 'main',
    fn: arrow,
    effect: effect$1,
    requires: ['popperOffsets'],
    requiresIfExists: ['preventOverflow']
  };

  function getVariation(placement) {
    return placement.split('-')[1];
  }

  var unsetSides = {
    top: 'auto',
    right: 'auto',
    bottom: 'auto',
    left: 'auto'
  }; // Round the offsets to the nearest suitable subpixel based on the DPR.
  // Zooming can change the DPR, but it seems to report a value that will
  // cleanly divide the values into the appropriate subpixels.

  function roundOffsetsByDPR(_ref) {
    var x = _ref.x,
        y = _ref.y;
    var win = window;
    var dpr = win.devicePixelRatio || 1;
    return {
      x: round(round(x * dpr) / dpr) || 0,
      y: round(round(y * dpr) / dpr) || 0
    };
  }

  function mapToStyles(_ref2) {
    var _Object$assign2;

    var popper = _ref2.popper,
        popperRect = _ref2.popperRect,
        placement = _ref2.placement,
        variation = _ref2.variation,
        offsets = _ref2.offsets,
        position = _ref2.position,
        gpuAcceleration = _ref2.gpuAcceleration,
        adaptive = _ref2.adaptive,
        roundOffsets = _ref2.roundOffsets;

    var _ref3 = roundOffsets === true ? roundOffsetsByDPR(offsets) : typeof roundOffsets === 'function' ? roundOffsets(offsets) : offsets,
        _ref3$x = _ref3.x,
        x = _ref3$x === void 0 ? 0 : _ref3$x,
        _ref3$y = _ref3.y,
        y = _ref3$y === void 0 ? 0 : _ref3$y;

    var hasX = offsets.hasOwnProperty('x');
    var hasY = offsets.hasOwnProperty('y');
    var sideX = left;
    var sideY = top;
    var win = window;

    if (adaptive) {
      var offsetParent = getOffsetParent(popper);
      var heightProp = 'clientHeight';
      var widthProp = 'clientWidth';

      if (offsetParent === getWindow(popper)) {
        offsetParent = getDocumentElement(popper);

        if (getComputedStyle(offsetParent).position !== 'static' && position === 'absolute') {
          heightProp = 'scrollHeight';
          widthProp = 'scrollWidth';
        }
      } // $FlowFixMe[incompatible-cast]: force type refinement, we compare offsetParent with window above, but Flow doesn't detect it


      offsetParent = offsetParent;

      if (placement === top || (placement === left || placement === right) && variation === end) {
        sideY = bottom; // $FlowFixMe[prop-missing]

        y -= offsetParent[heightProp] - popperRect.height;
        y *= gpuAcceleration ? 1 : -1;
      }

      if (placement === left || (placement === top || placement === bottom) && variation === end) {
        sideX = right; // $FlowFixMe[prop-missing]

        x -= offsetParent[widthProp] - popperRect.width;
        x *= gpuAcceleration ? 1 : -1;
      }
    }

    var commonStyles = Object.assign({
      position: position
    }, adaptive && unsetSides);

    if (gpuAcceleration) {
      var _Object$assign;

      return Object.assign({}, commonStyles, (_Object$assign = {}, _Object$assign[sideY] = hasY ? '0' : '', _Object$assign[sideX] = hasX ? '0' : '', _Object$assign.transform = (win.devicePixelRatio || 1) <= 1 ? "translate(" + x + "px, " + y + "px)" : "translate3d(" + x + "px, " + y + "px, 0)", _Object$assign));
    }

    return Object.assign({}, commonStyles, (_Object$assign2 = {}, _Object$assign2[sideY] = hasY ? y + "px" : '', _Object$assign2[sideX] = hasX ? x + "px" : '', _Object$assign2.transform = '', _Object$assign2));
  }

  function computeStyles(_ref4) {
    var state = _ref4.state,
        options = _ref4.options;
    var _options$gpuAccelerat = options.gpuAcceleration,
        gpuAcceleration = _options$gpuAccelerat === void 0 ? true : _options$gpuAccelerat,
        _options$adaptive = options.adaptive,
        adaptive = _options$adaptive === void 0 ? true : _options$adaptive,
        _options$roundOffsets = options.roundOffsets,
        roundOffsets = _options$roundOffsets === void 0 ? true : _options$roundOffsets;

    if (process.env.NODE_ENV !== "production") {
      var transitionProperty = getComputedStyle(state.elements.popper).transitionProperty || '';

      if (adaptive && ['transform', 'top', 'right', 'bottom', 'left'].some(function (property) {
        return transitionProperty.indexOf(property) >= 0;
      })) {
        console.warn(['Popper: Detected CSS transitions on at least one of the following', 'CSS properties: "transform", "top", "right", "bottom", "left".', '\n\n', 'Disable the "computeStyles" modifier\'s `adaptive` option to allow', 'for smooth transitions, or remove these properties from the CSS', 'transition declaration on the popper element if only transitioning', 'opacity or background-color for example.', '\n\n', 'We recommend using the popper element as a wrapper around an inner', 'element that can have any CSS property transitioned for animations.'].join(' '));
      }
    }

    var commonStyles = {
      placement: getBasePlacement(state.placement),
      variation: getVariation(state.placement),
      popper: state.elements.popper,
      popperRect: state.rects.popper,
      gpuAcceleration: gpuAcceleration
    };

    if (state.modifiersData.popperOffsets != null) {
      state.styles.popper = Object.assign({}, state.styles.popper, mapToStyles(Object.assign({}, commonStyles, {
        offsets: state.modifiersData.popperOffsets,
        position: state.options.strategy,
        adaptive: adaptive,
        roundOffsets: roundOffsets
      })));
    }

    if (state.modifiersData.arrow != null) {
      state.styles.arrow = Object.assign({}, state.styles.arrow, mapToStyles(Object.assign({}, commonStyles, {
        offsets: state.modifiersData.arrow,
        position: 'absolute',
        adaptive: false,
        roundOffsets: roundOffsets
      })));
    }

    state.attributes.popper = Object.assign({}, state.attributes.popper, {
      'data-popper-placement': state.placement
    });
  } // eslint-disable-next-line import/no-unused-modules


  var computeStyles$1 = {
    name: 'computeStyles',
    enabled: true,
    phase: 'beforeWrite',
    fn: computeStyles,
    data: {}
  };

  var passive = {
    passive: true
  };

  function effect(_ref) {
    var state = _ref.state,
        instance = _ref.instance,
        options = _ref.options;
    var _options$scroll = options.scroll,
        scroll = _options$scroll === void 0 ? true : _options$scroll,
        _options$resize = options.resize,
        resize = _options$resize === void 0 ? true : _options$resize;
    var window = getWindow(state.elements.popper);
    var scrollParents = [].concat(state.scrollParents.reference, state.scrollParents.popper);

    if (scroll) {
      scrollParents.forEach(function (scrollParent) {
        scrollParent.addEventListener('scroll', instance.update, passive);
      });
    }

    if (resize) {
      window.addEventListener('resize', instance.update, passive);
    }

    return function () {
      if (scroll) {
        scrollParents.forEach(function (scrollParent) {
          scrollParent.removeEventListener('scroll', instance.update, passive);
        });
      }

      if (resize) {
        window.removeEventListener('resize', instance.update, passive);
      }
    };
  } // eslint-disable-next-line import/no-unused-modules


  var eventListeners = {
    name: 'eventListeners',
    enabled: true,
    phase: 'write',
    fn: function fn() {},
    effect: effect,
    data: {}
  };

  var hash$1 = {
    left: 'right',
    right: 'left',
    bottom: 'top',
    top: 'bottom'
  };
  function getOppositePlacement(placement) {
    return placement.replace(/left|right|bottom|top/g, function (matched) {
      return hash$1[matched];
    });
  }

  var hash = {
    start: 'end',
    end: 'start'
  };
  function getOppositeVariationPlacement(placement) {
    return placement.replace(/start|end/g, function (matched) {
      return hash[matched];
    });
  }

  function getWindowScroll(node) {
    var win = getWindow(node);
    var scrollLeft = win.pageXOffset;
    var scrollTop = win.pageYOffset;
    return {
      scrollLeft: scrollLeft,
      scrollTop: scrollTop
    };
  }

  function getWindowScrollBarX(element) {
    // If <html> has a CSS width greater than the viewport, then this will be
    // incorrect for RTL.
    // Popper 1 is broken in this case and never had a bug report so let's assume
    // it's not an issue. I don't think anyone ever specifies width on <html>
    // anyway.
    // Browsers where the left scrollbar doesn't cause an issue report `0` for
    // this (e.g. Edge 2019, IE11, Safari)
    return getBoundingClientRect(getDocumentElement(element)).left + getWindowScroll(element).scrollLeft;
  }

  function getViewportRect(element) {
    var win = getWindow(element);
    var html = getDocumentElement(element);
    var visualViewport = win.visualViewport;
    var width = html.clientWidth;
    var height = html.clientHeight;
    var x = 0;
    var y = 0; // NB: This isn't supported on iOS <= 12. If the keyboard is open, the popper
    // can be obscured underneath it.
    // Also, `html.clientHeight` adds the bottom bar height in Safari iOS, even
    // if it isn't open, so if this isn't available, the popper will be detected
    // to overflow the bottom of the screen too early.

    if (visualViewport) {
      width = visualViewport.width;
      height = visualViewport.height; // Uses Layout Viewport (like Chrome; Safari does not currently)
      // In Chrome, it returns a value very close to 0 (+/-) but contains rounding
      // errors due to floating point numbers, so we need to check precision.
      // Safari returns a number <= 0, usually < -1 when pinch-zoomed
      // Feature detection fails in mobile emulation mode in Chrome.
      // Math.abs(win.innerWidth / visualViewport.scale - visualViewport.width) <
      // 0.001
      // Fallback here: "Not Safari" userAgent

      if (!/^((?!chrome|android).)*safari/i.test(navigator.userAgent)) {
        x = visualViewport.offsetLeft;
        y = visualViewport.offsetTop;
      }
    }

    return {
      width: width,
      height: height,
      x: x + getWindowScrollBarX(element),
      y: y
    };
  }

  // of the `<html>` and `<body>` rect bounds if horizontally scrollable

  function getDocumentRect(element) {
    var _element$ownerDocumen;

    var html = getDocumentElement(element);
    var winScroll = getWindowScroll(element);
    var body = (_element$ownerDocumen = element.ownerDocument) == null ? void 0 : _element$ownerDocumen.body;
    var width = max(html.scrollWidth, html.clientWidth, body ? body.scrollWidth : 0, body ? body.clientWidth : 0);
    var height = max(html.scrollHeight, html.clientHeight, body ? body.scrollHeight : 0, body ? body.clientHeight : 0);
    var x = -winScroll.scrollLeft + getWindowScrollBarX(element);
    var y = -winScroll.scrollTop;

    if (getComputedStyle(body || html).direction === 'rtl') {
      x += max(html.clientWidth, body ? body.clientWidth : 0) - width;
    }

    return {
      width: width,
      height: height,
      x: x,
      y: y
    };
  }

  function isScrollParent(element) {
    // Firefox wants us to check `-x` and `-y` variations as well
    var _getComputedStyle = getComputedStyle(element),
        overflow = _getComputedStyle.overflow,
        overflowX = _getComputedStyle.overflowX,
        overflowY = _getComputedStyle.overflowY;

    return /auto|scroll|overlay|hidden/.test(overflow + overflowY + overflowX);
  }

  function getScrollParent(node) {
    if (['html', 'body', '#document'].indexOf(getNodeName(node)) >= 0) {
      // $FlowFixMe[incompatible-return]: assume body is always available
      return node.ownerDocument.body;
    }

    if (isHTMLElement(node) && isScrollParent(node)) {
      return node;
    }

    return getScrollParent(getParentNode(node));
  }

  /*
  given a DOM element, return the list of all scroll parents, up the list of ancesors
  until we get to the top window object. This list is what we attach scroll listeners
  to, because if any of these parent elements scroll, we'll need to re-calculate the
  reference element's position.
  */

  function listScrollParents(element, list) {
    var _element$ownerDocumen;

    if (list === void 0) {
      list = [];
    }

    var scrollParent = getScrollParent(element);
    var isBody = scrollParent === ((_element$ownerDocumen = element.ownerDocument) == null ? void 0 : _element$ownerDocumen.body);
    var win = getWindow(scrollParent);
    var target = isBody ? [win].concat(win.visualViewport || [], isScrollParent(scrollParent) ? scrollParent : []) : scrollParent;
    var updatedList = list.concat(target);
    return isBody ? updatedList : // $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
    updatedList.concat(listScrollParents(getParentNode(target)));
  }

  function rectToClientRect(rect) {
    return Object.assign({}, rect, {
      left: rect.x,
      top: rect.y,
      right: rect.x + rect.width,
      bottom: rect.y + rect.height
    });
  }

  function getInnerBoundingClientRect(element) {
    var rect = getBoundingClientRect(element);
    rect.top = rect.top + element.clientTop;
    rect.left = rect.left + element.clientLeft;
    rect.bottom = rect.top + element.clientHeight;
    rect.right = rect.left + element.clientWidth;
    rect.width = element.clientWidth;
    rect.height = element.clientHeight;
    rect.x = rect.left;
    rect.y = rect.top;
    return rect;
  }

  function getClientRectFromMixedType(element, clippingParent) {
    return clippingParent === viewport ? rectToClientRect(getViewportRect(element)) : isHTMLElement(clippingParent) ? getInnerBoundingClientRect(clippingParent) : rectToClientRect(getDocumentRect(getDocumentElement(element)));
  } // A "clipping parent" is an overflowable container with the characteristic of
  // clipping (or hiding) overflowing elements with a position different from
  // `initial`


  function getClippingParents(element) {
    var clippingParents = listScrollParents(getParentNode(element));
    var canEscapeClipping = ['absolute', 'fixed'].indexOf(getComputedStyle(element).position) >= 0;
    var clipperElement = canEscapeClipping && isHTMLElement(element) ? getOffsetParent(element) : element;

    if (!isElement(clipperElement)) {
      return [];
    } // $FlowFixMe[incompatible-return]: https://github.com/facebook/flow/issues/1414


    return clippingParents.filter(function (clippingParent) {
      return isElement(clippingParent) && contains(clippingParent, clipperElement) && getNodeName(clippingParent) !== 'body';
    });
  } // Gets the maximum area that the element is visible in due to any number of
  // clipping parents


  function getClippingRect(element, boundary, rootBoundary) {
    var mainClippingParents = boundary === 'clippingParents' ? getClippingParents(element) : [].concat(boundary);
    var clippingParents = [].concat(mainClippingParents, [rootBoundary]);
    var firstClippingParent = clippingParents[0];
    var clippingRect = clippingParents.reduce(function (accRect, clippingParent) {
      var rect = getClientRectFromMixedType(element, clippingParent);
      accRect.top = max(rect.top, accRect.top);
      accRect.right = min(rect.right, accRect.right);
      accRect.bottom = min(rect.bottom, accRect.bottom);
      accRect.left = max(rect.left, accRect.left);
      return accRect;
    }, getClientRectFromMixedType(element, firstClippingParent));
    clippingRect.width = clippingRect.right - clippingRect.left;
    clippingRect.height = clippingRect.bottom - clippingRect.top;
    clippingRect.x = clippingRect.left;
    clippingRect.y = clippingRect.top;
    return clippingRect;
  }

  function computeOffsets(_ref) {
    var reference = _ref.reference,
        element = _ref.element,
        placement = _ref.placement;
    var basePlacement = placement ? getBasePlacement(placement) : null;
    var variation = placement ? getVariation(placement) : null;
    var commonX = reference.x + reference.width / 2 - element.width / 2;
    var commonY = reference.y + reference.height / 2 - element.height / 2;
    var offsets;

    switch (basePlacement) {
      case top:
        offsets = {
          x: commonX,
          y: reference.y - element.height
        };
        break;

      case bottom:
        offsets = {
          x: commonX,
          y: reference.y + reference.height
        };
        break;

      case right:
        offsets = {
          x: reference.x + reference.width,
          y: commonY
        };
        break;

      case left:
        offsets = {
          x: reference.x - element.width,
          y: commonY
        };
        break;

      default:
        offsets = {
          x: reference.x,
          y: reference.y
        };
    }

    var mainAxis = basePlacement ? getMainAxisFromPlacement(basePlacement) : null;

    if (mainAxis != null) {
      var len = mainAxis === 'y' ? 'height' : 'width';

      switch (variation) {
        case start:
          offsets[mainAxis] = offsets[mainAxis] - (reference[len] / 2 - element[len] / 2);
          break;

        case end:
          offsets[mainAxis] = offsets[mainAxis] + (reference[len] / 2 - element[len] / 2);
          break;
      }
    }

    return offsets;
  }

  function detectOverflow(state, options) {
    if (options === void 0) {
      options = {};
    }

    var _options = options,
        _options$placement = _options.placement,
        placement = _options$placement === void 0 ? state.placement : _options$placement,
        _options$boundary = _options.boundary,
        boundary = _options$boundary === void 0 ? clippingParents : _options$boundary,
        _options$rootBoundary = _options.rootBoundary,
        rootBoundary = _options$rootBoundary === void 0 ? viewport : _options$rootBoundary,
        _options$elementConte = _options.elementContext,
        elementContext = _options$elementConte === void 0 ? popper : _options$elementConte,
        _options$altBoundary = _options.altBoundary,
        altBoundary = _options$altBoundary === void 0 ? false : _options$altBoundary,
        _options$padding = _options.padding,
        padding = _options$padding === void 0 ? 0 : _options$padding;
    var paddingObject = mergePaddingObject(typeof padding !== 'number' ? padding : expandToHashMap(padding, basePlacements));
    var altContext = elementContext === popper ? reference : popper;
    var popperRect = state.rects.popper;
    var element = state.elements[altBoundary ? altContext : elementContext];
    var clippingClientRect = getClippingRect(isElement(element) ? element : element.contextElement || getDocumentElement(state.elements.popper), boundary, rootBoundary);
    var referenceClientRect = getBoundingClientRect(state.elements.reference);
    var popperOffsets = computeOffsets({
      reference: referenceClientRect,
      element: popperRect,
      strategy: 'absolute',
      placement: placement
    });
    var popperClientRect = rectToClientRect(Object.assign({}, popperRect, popperOffsets));
    var elementClientRect = elementContext === popper ? popperClientRect : referenceClientRect; // positive = overflowing the clipping rect
    // 0 or negative = within the clipping rect

    var overflowOffsets = {
      top: clippingClientRect.top - elementClientRect.top + paddingObject.top,
      bottom: elementClientRect.bottom - clippingClientRect.bottom + paddingObject.bottom,
      left: clippingClientRect.left - elementClientRect.left + paddingObject.left,
      right: elementClientRect.right - clippingClientRect.right + paddingObject.right
    };
    var offsetData = state.modifiersData.offset; // Offsets can be applied only to the popper element

    if (elementContext === popper && offsetData) {
      var offset = offsetData[placement];
      Object.keys(overflowOffsets).forEach(function (key) {
        var multiply = [right, bottom].indexOf(key) >= 0 ? 1 : -1;
        var axis = [top, bottom].indexOf(key) >= 0 ? 'y' : 'x';
        overflowOffsets[key] += offset[axis] * multiply;
      });
    }

    return overflowOffsets;
  }

  function computeAutoPlacement(state, options) {
    if (options === void 0) {
      options = {};
    }

    var _options = options,
        placement = _options.placement,
        boundary = _options.boundary,
        rootBoundary = _options.rootBoundary,
        padding = _options.padding,
        flipVariations = _options.flipVariations,
        _options$allowedAutoP = _options.allowedAutoPlacements,
        allowedAutoPlacements = _options$allowedAutoP === void 0 ? placements : _options$allowedAutoP;
    var variation = getVariation(placement);
    var placements$1 = variation ? flipVariations ? variationPlacements : variationPlacements.filter(function (placement) {
      return getVariation(placement) === variation;
    }) : basePlacements;
    var allowedPlacements = placements$1.filter(function (placement) {
      return allowedAutoPlacements.indexOf(placement) >= 0;
    });

    if (allowedPlacements.length === 0) {
      allowedPlacements = placements$1;

      if (process.env.NODE_ENV !== "production") {
        console.error(['Popper: The `allowedAutoPlacements` option did not allow any', 'placements. Ensure the `placement` option matches the variation', 'of the allowed placements.', 'For example, "auto" cannot be used to allow "bottom-start".', 'Use "auto-start" instead.'].join(' '));
      }
    } // $FlowFixMe[incompatible-type]: Flow seems to have problems with two array unions...


    var overflows = allowedPlacements.reduce(function (acc, placement) {
      acc[placement] = detectOverflow(state, {
        placement: placement,
        boundary: boundary,
        rootBoundary: rootBoundary,
        padding: padding
      })[getBasePlacement(placement)];
      return acc;
    }, {});
    return Object.keys(overflows).sort(function (a, b) {
      return overflows[a] - overflows[b];
    });
  }

  function getExpandedFallbackPlacements(placement) {
    if (getBasePlacement(placement) === auto) {
      return [];
    }

    var oppositePlacement = getOppositePlacement(placement);
    return [getOppositeVariationPlacement(placement), oppositePlacement, getOppositeVariationPlacement(oppositePlacement)];
  }

  function flip(_ref) {
    var state = _ref.state,
        options = _ref.options,
        name = _ref.name;

    if (state.modifiersData[name]._skip) {
      return;
    }

    var _options$mainAxis = options.mainAxis,
        checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis,
        _options$altAxis = options.altAxis,
        checkAltAxis = _options$altAxis === void 0 ? true : _options$altAxis,
        specifiedFallbackPlacements = options.fallbackPlacements,
        padding = options.padding,
        boundary = options.boundary,
        rootBoundary = options.rootBoundary,
        altBoundary = options.altBoundary,
        _options$flipVariatio = options.flipVariations,
        flipVariations = _options$flipVariatio === void 0 ? true : _options$flipVariatio,
        allowedAutoPlacements = options.allowedAutoPlacements;
    var preferredPlacement = state.options.placement;
    var basePlacement = getBasePlacement(preferredPlacement);
    var isBasePlacement = basePlacement === preferredPlacement;
    var fallbackPlacements = specifiedFallbackPlacements || (isBasePlacement || !flipVariations ? [getOppositePlacement(preferredPlacement)] : getExpandedFallbackPlacements(preferredPlacement));
    var placements = [preferredPlacement].concat(fallbackPlacements).reduce(function (acc, placement) {
      return acc.concat(getBasePlacement(placement) === auto ? computeAutoPlacement(state, {
        placement: placement,
        boundary: boundary,
        rootBoundary: rootBoundary,
        padding: padding,
        flipVariations: flipVariations,
        allowedAutoPlacements: allowedAutoPlacements
      }) : placement);
    }, []);
    var referenceRect = state.rects.reference;
    var popperRect = state.rects.popper;
    var checksMap = new Map();
    var makeFallbackChecks = true;
    var firstFittingPlacement = placements[0];

    for (var i = 0; i < placements.length; i++) {
      var placement = placements[i];

      var _basePlacement = getBasePlacement(placement);

      var isStartVariation = getVariation(placement) === start;
      var isVertical = [top, bottom].indexOf(_basePlacement) >= 0;
      var len = isVertical ? 'width' : 'height';
      var overflow = detectOverflow(state, {
        placement: placement,
        boundary: boundary,
        rootBoundary: rootBoundary,
        altBoundary: altBoundary,
        padding: padding
      });
      var mainVariationSide = isVertical ? isStartVariation ? right : left : isStartVariation ? bottom : top;

      if (referenceRect[len] > popperRect[len]) {
        mainVariationSide = getOppositePlacement(mainVariationSide);
      }

      var altVariationSide = getOppositePlacement(mainVariationSide);
      var checks = [];

      if (checkMainAxis) {
        checks.push(overflow[_basePlacement] <= 0);
      }

      if (checkAltAxis) {
        checks.push(overflow[mainVariationSide] <= 0, overflow[altVariationSide] <= 0);
      }

      if (checks.every(function (check) {
        return check;
      })) {
        firstFittingPlacement = placement;
        makeFallbackChecks = false;
        break;
      }

      checksMap.set(placement, checks);
    }

    if (makeFallbackChecks) {
      // `2` may be desired in some cases – research later
      var numberOfChecks = flipVariations ? 3 : 1;

      var _loop = function _loop(_i) {
        var fittingPlacement = placements.find(function (placement) {
          var checks = checksMap.get(placement);

          if (checks) {
            return checks.slice(0, _i).every(function (check) {
              return check;
            });
          }
        });

        if (fittingPlacement) {
          firstFittingPlacement = fittingPlacement;
          return "break";
        }
      };

      for (var _i = numberOfChecks; _i > 0; _i--) {
        var _ret = _loop(_i);

        if (_ret === "break") break;
      }
    }

    if (state.placement !== firstFittingPlacement) {
      state.modifiersData[name]._skip = true;
      state.placement = firstFittingPlacement;
      state.reset = true;
    }
  } // eslint-disable-next-line import/no-unused-modules


  var flip$1 = {
    name: 'flip',
    enabled: true,
    phase: 'main',
    fn: flip,
    requiresIfExists: ['offset'],
    data: {
      _skip: false
    }
  };

  function getSideOffsets(overflow, rect, preventedOffsets) {
    if (preventedOffsets === void 0) {
      preventedOffsets = {
        x: 0,
        y: 0
      };
    }

    return {
      top: overflow.top - rect.height - preventedOffsets.y,
      right: overflow.right - rect.width + preventedOffsets.x,
      bottom: overflow.bottom - rect.height + preventedOffsets.y,
      left: overflow.left - rect.width - preventedOffsets.x
    };
  }

  function isAnySideFullyClipped(overflow) {
    return [top, right, bottom, left].some(function (side) {
      return overflow[side] >= 0;
    });
  }

  function hide(_ref) {
    var state = _ref.state,
        name = _ref.name;
    var referenceRect = state.rects.reference;
    var popperRect = state.rects.popper;
    var preventedOffsets = state.modifiersData.preventOverflow;
    var referenceOverflow = detectOverflow(state, {
      elementContext: 'reference'
    });
    var popperAltOverflow = detectOverflow(state, {
      altBoundary: true
    });
    var referenceClippingOffsets = getSideOffsets(referenceOverflow, referenceRect);
    var popperEscapeOffsets = getSideOffsets(popperAltOverflow, popperRect, preventedOffsets);
    var isReferenceHidden = isAnySideFullyClipped(referenceClippingOffsets);
    var hasPopperEscaped = isAnySideFullyClipped(popperEscapeOffsets);
    state.modifiersData[name] = {
      referenceClippingOffsets: referenceClippingOffsets,
      popperEscapeOffsets: popperEscapeOffsets,
      isReferenceHidden: isReferenceHidden,
      hasPopperEscaped: hasPopperEscaped
    };
    state.attributes.popper = Object.assign({}, state.attributes.popper, {
      'data-popper-reference-hidden': isReferenceHidden,
      'data-popper-escaped': hasPopperEscaped
    });
  } // eslint-disable-next-line import/no-unused-modules


  var hide$1 = {
    name: 'hide',
    enabled: true,
    phase: 'main',
    requiresIfExists: ['preventOverflow'],
    fn: hide
  };

  function distanceAndSkiddingToXY(placement, rects, offset) {
    var basePlacement = getBasePlacement(placement);
    var invertDistance = [left, top].indexOf(basePlacement) >= 0 ? -1 : 1;

    var _ref = typeof offset === 'function' ? offset(Object.assign({}, rects, {
      placement: placement
    })) : offset,
        skidding = _ref[0],
        distance = _ref[1];

    skidding = skidding || 0;
    distance = (distance || 0) * invertDistance;
    return [left, right].indexOf(basePlacement) >= 0 ? {
      x: distance,
      y: skidding
    } : {
      x: skidding,
      y: distance
    };
  }

  function offset(_ref2) {
    var state = _ref2.state,
        options = _ref2.options,
        name = _ref2.name;
    var _options$offset = options.offset,
        offset = _options$offset === void 0 ? [0, 0] : _options$offset;
    var data = placements.reduce(function (acc, placement) {
      acc[placement] = distanceAndSkiddingToXY(placement, state.rects, offset);
      return acc;
    }, {});
    var _data$state$placement = data[state.placement],
        x = _data$state$placement.x,
        y = _data$state$placement.y;

    if (state.modifiersData.popperOffsets != null) {
      state.modifiersData.popperOffsets.x += x;
      state.modifiersData.popperOffsets.y += y;
    }

    state.modifiersData[name] = data;
  } // eslint-disable-next-line import/no-unused-modules


  var offset$1 = {
    name: 'offset',
    enabled: true,
    phase: 'main',
    requires: ['popperOffsets'],
    fn: offset
  };

  function popperOffsets(_ref) {
    var state = _ref.state,
        name = _ref.name; // Offsets are the actual position the popper needs to have to be
    // properly positioned near its reference element
    // This is the most basic placement, and will be adjusted by
    // the modifiers in the next step

    state.modifiersData[name] = computeOffsets({
      reference: state.rects.reference,
      element: state.rects.popper,
      strategy: 'absolute',
      placement: state.placement
    });
  } // eslint-disable-next-line import/no-unused-modules


  var popperOffsets$1 = {
    name: 'popperOffsets',
    enabled: true,
    phase: 'read',
    fn: popperOffsets,
    data: {}
  };

  function getAltAxis(axis) {
    return axis === 'x' ? 'y' : 'x';
  }

  function preventOverflow(_ref) {
    var state = _ref.state,
        options = _ref.options,
        name = _ref.name;
    var _options$mainAxis = options.mainAxis,
        checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis,
        _options$altAxis = options.altAxis,
        checkAltAxis = _options$altAxis === void 0 ? false : _options$altAxis,
        boundary = options.boundary,
        rootBoundary = options.rootBoundary,
        altBoundary = options.altBoundary,
        padding = options.padding,
        _options$tether = options.tether,
        tether = _options$tether === void 0 ? true : _options$tether,
        _options$tetherOffset = options.tetherOffset,
        tetherOffset = _options$tetherOffset === void 0 ? 0 : _options$tetherOffset;
    var overflow = detectOverflow(state, {
      boundary: boundary,
      rootBoundary: rootBoundary,
      padding: padding,
      altBoundary: altBoundary
    });
    var basePlacement = getBasePlacement(state.placement);
    var variation = getVariation(state.placement);
    var isBasePlacement = !variation;
    var mainAxis = getMainAxisFromPlacement(basePlacement);
    var altAxis = getAltAxis(mainAxis);
    var popperOffsets = state.modifiersData.popperOffsets;
    var referenceRect = state.rects.reference;
    var popperRect = state.rects.popper;
    var tetherOffsetValue = typeof tetherOffset === 'function' ? tetherOffset(Object.assign({}, state.rects, {
      placement: state.placement
    })) : tetherOffset;
    var data = {
      x: 0,
      y: 0
    };

    if (!popperOffsets) {
      return;
    }

    if (checkMainAxis || checkAltAxis) {
      var mainSide = mainAxis === 'y' ? top : left;
      var altSide = mainAxis === 'y' ? bottom : right;
      var len = mainAxis === 'y' ? 'height' : 'width';
      var offset = popperOffsets[mainAxis];
      var min$1 = popperOffsets[mainAxis] + overflow[mainSide];
      var max$1 = popperOffsets[mainAxis] - overflow[altSide];
      var additive = tether ? -popperRect[len] / 2 : 0;
      var minLen = variation === start ? referenceRect[len] : popperRect[len];
      var maxLen = variation === start ? -popperRect[len] : -referenceRect[len]; // We need to include the arrow in the calculation so the arrow doesn't go
      // outside the reference bounds

      var arrowElement = state.elements.arrow;
      var arrowRect = tether && arrowElement ? getLayoutRect(arrowElement) : {
        width: 0,
        height: 0
      };
      var arrowPaddingObject = state.modifiersData['arrow#persistent'] ? state.modifiersData['arrow#persistent'].padding : getFreshSideObject();
      var arrowPaddingMin = arrowPaddingObject[mainSide];
      var arrowPaddingMax = arrowPaddingObject[altSide]; // If the reference length is smaller than the arrow length, we don't want
      // to include its full size in the calculation. If the reference is small
      // and near the edge of a boundary, the popper can overflow even if the
      // reference is not overflowing as well (e.g. virtual elements with no
      // width or height)

      var arrowLen = within(0, referenceRect[len], arrowRect[len]);
      var minOffset = isBasePlacement ? referenceRect[len] / 2 - additive - arrowLen - arrowPaddingMin - tetherOffsetValue : minLen - arrowLen - arrowPaddingMin - tetherOffsetValue;
      var maxOffset = isBasePlacement ? -referenceRect[len] / 2 + additive + arrowLen + arrowPaddingMax + tetherOffsetValue : maxLen + arrowLen + arrowPaddingMax + tetherOffsetValue;
      var arrowOffsetParent = state.elements.arrow && getOffsetParent(state.elements.arrow);
      var clientOffset = arrowOffsetParent ? mainAxis === 'y' ? arrowOffsetParent.clientTop || 0 : arrowOffsetParent.clientLeft || 0 : 0;
      var offsetModifierValue = state.modifiersData.offset ? state.modifiersData.offset[state.placement][mainAxis] : 0;
      var tetherMin = popperOffsets[mainAxis] + minOffset - offsetModifierValue - clientOffset;
      var tetherMax = popperOffsets[mainAxis] + maxOffset - offsetModifierValue;

      if (checkMainAxis) {
        var preventedOffset = within(tether ? min(min$1, tetherMin) : min$1, offset, tether ? max(max$1, tetherMax) : max$1);
        popperOffsets[mainAxis] = preventedOffset;
        data[mainAxis] = preventedOffset - offset;
      }

      if (checkAltAxis) {
        var _mainSide = mainAxis === 'x' ? top : left;

        var _altSide = mainAxis === 'x' ? bottom : right;

        var _offset = popperOffsets[altAxis];

        var _min = _offset + overflow[_mainSide];

        var _max = _offset - overflow[_altSide];

        var _preventedOffset = within(tether ? min(_min, tetherMin) : _min, _offset, tether ? max(_max, tetherMax) : _max);

        popperOffsets[altAxis] = _preventedOffset;
        data[altAxis] = _preventedOffset - _offset;
      }
    }

    state.modifiersData[name] = data;
  } // eslint-disable-next-line import/no-unused-modules


  var preventOverflow$1 = {
    name: 'preventOverflow',
    enabled: true,
    phase: 'main',
    fn: preventOverflow,
    requiresIfExists: ['offset']
  };

  function getHTMLElementScroll(element) {
    return {
      scrollLeft: element.scrollLeft,
      scrollTop: element.scrollTop
    };
  }

  function getNodeScroll(node) {
    if (node === getWindow(node) || !isHTMLElement(node)) {
      return getWindowScroll(node);
    } else {
      return getHTMLElementScroll(node);
    }
  }

  function isElementScaled(element) {
    var rect = element.getBoundingClientRect();
    var scaleX = rect.width / element.offsetWidth || 1;
    var scaleY = rect.height / element.offsetHeight || 1;
    return scaleX !== 1 || scaleY !== 1;
  } // Returns the composite rect of an element relative to its offsetParent.
  // Composite means it takes into account transforms as well as layout.


  function getCompositeRect(elementOrVirtualElement, offsetParent, isFixed) {
    if (isFixed === void 0) {
      isFixed = false;
    }

    var isOffsetParentAnElement = isHTMLElement(offsetParent);
    isHTMLElement(offsetParent) && isElementScaled(offsetParent);
    var documentElement = getDocumentElement(offsetParent);
    var rect = getBoundingClientRect(elementOrVirtualElement);
    var scroll = {
      scrollLeft: 0,
      scrollTop: 0
    };
    var offsets = {
      x: 0,
      y: 0
    };

    if (isOffsetParentAnElement || !isOffsetParentAnElement && !isFixed) {
      if (getNodeName(offsetParent) !== 'body' || // https://github.com/popperjs/popper-core/issues/1078
      isScrollParent(documentElement)) {
        scroll = getNodeScroll(offsetParent);
      }

      if (isHTMLElement(offsetParent)) {
        offsets = getBoundingClientRect(offsetParent);
        offsets.x += offsetParent.clientLeft;
        offsets.y += offsetParent.clientTop;
      } else if (documentElement) {
        offsets.x = getWindowScrollBarX(documentElement);
      }
    }

    return {
      x: rect.left + scroll.scrollLeft - offsets.x,
      y: rect.top + scroll.scrollTop - offsets.y,
      width: rect.width,
      height: rect.height
    };
  }

  function order(modifiers) {
    var map = new Map();
    var visited = new Set();
    var result = [];
    modifiers.forEach(function (modifier) {
      map.set(modifier.name, modifier);
    }); // On visiting object, check for its dependencies and visit them recursively

    function sort(modifier) {
      visited.add(modifier.name);
      var requires = [].concat(modifier.requires || [], modifier.requiresIfExists || []);
      requires.forEach(function (dep) {
        if (!visited.has(dep)) {
          var depModifier = map.get(dep);

          if (depModifier) {
            sort(depModifier);
          }
        }
      });
      result.push(modifier);
    }

    modifiers.forEach(function (modifier) {
      if (!visited.has(modifier.name)) {
        // check for visited object
        sort(modifier);
      }
    });
    return result;
  }

  function orderModifiers(modifiers) {
    // order based on dependencies
    var orderedModifiers = order(modifiers); // order based on phase

    return modifierPhases.reduce(function (acc, phase) {
      return acc.concat(orderedModifiers.filter(function (modifier) {
        return modifier.phase === phase;
      }));
    }, []);
  }

  function debounce(fn) {
    var pending;
    return function () {
      if (!pending) {
        pending = new Promise(function (resolve) {
          Promise.resolve().then(function () {
            pending = undefined;
            resolve(fn());
          });
        });
      }

      return pending;
    };
  }

  function format(str) {
    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    return [].concat(args).reduce(function (p, c) {
      return p.replace(/%s/, c);
    }, str);
  }

  var INVALID_MODIFIER_ERROR = 'Popper: modifier "%s" provided an invalid %s property, expected %s but got %s';
  var MISSING_DEPENDENCY_ERROR = 'Popper: modifier "%s" requires "%s", but "%s" modifier is not available';
  var VALID_PROPERTIES = ['name', 'enabled', 'phase', 'fn', 'effect', 'requires', 'options'];
  function validateModifiers(modifiers) {
    modifiers.forEach(function (modifier) {
      [].concat(Object.keys(modifier), VALID_PROPERTIES) // IE11-compatible replacement for `new Set(iterable)`
      .filter(function (value, index, self) {
        return self.indexOf(value) === index;
      }).forEach(function (key) {
        switch (key) {
          case 'name':
            if (typeof modifier.name !== 'string') {
              console.error(format(INVALID_MODIFIER_ERROR, String(modifier.name), '"name"', '"string"', "\"" + String(modifier.name) + "\""));
            }

            break;

          case 'enabled':
            if (typeof modifier.enabled !== 'boolean') {
              console.error(format(INVALID_MODIFIER_ERROR, modifier.name, '"enabled"', '"boolean"', "\"" + String(modifier.enabled) + "\""));
            }

            break;

          case 'phase':
            if (modifierPhases.indexOf(modifier.phase) < 0) {
              console.error(format(INVALID_MODIFIER_ERROR, modifier.name, '"phase"', "either " + modifierPhases.join(', '), "\"" + String(modifier.phase) + "\""));
            }

            break;

          case 'fn':
            if (typeof modifier.fn !== 'function') {
              console.error(format(INVALID_MODIFIER_ERROR, modifier.name, '"fn"', '"function"', "\"" + String(modifier.fn) + "\""));
            }

            break;

          case 'effect':
            if (modifier.effect != null && typeof modifier.effect !== 'function') {
              console.error(format(INVALID_MODIFIER_ERROR, modifier.name, '"effect"', '"function"', "\"" + String(modifier.fn) + "\""));
            }

            break;

          case 'requires':
            if (modifier.requires != null && !Array.isArray(modifier.requires)) {
              console.error(format(INVALID_MODIFIER_ERROR, modifier.name, '"requires"', '"array"', "\"" + String(modifier.requires) + "\""));
            }

            break;

          case 'requiresIfExists':
            if (!Array.isArray(modifier.requiresIfExists)) {
              console.error(format(INVALID_MODIFIER_ERROR, modifier.name, '"requiresIfExists"', '"array"', "\"" + String(modifier.requiresIfExists) + "\""));
            }

            break;

          case 'options':
          case 'data':
            break;

          default:
            console.error("PopperJS: an invalid property has been provided to the \"" + modifier.name + "\" modifier, valid properties are " + VALID_PROPERTIES.map(function (s) {
              return "\"" + s + "\"";
            }).join(', ') + "; but \"" + key + "\" was provided.");
        }

        modifier.requires && modifier.requires.forEach(function (requirement) {
          if (modifiers.find(function (mod) {
            return mod.name === requirement;
          }) == null) {
            console.error(format(MISSING_DEPENDENCY_ERROR, String(modifier.name), requirement, requirement));
          }
        });
      });
    });
  }

  function uniqueBy(arr, fn) {
    var identifiers = new Set();
    return arr.filter(function (item) {
      var identifier = fn(item);

      if (!identifiers.has(identifier)) {
        identifiers.add(identifier);
        return true;
      }
    });
  }

  function mergeByName(modifiers) {
    var merged = modifiers.reduce(function (merged, current) {
      var existing = merged[current.name];
      merged[current.name] = existing ? Object.assign({}, existing, current, {
        options: Object.assign({}, existing.options, current.options),
        data: Object.assign({}, existing.data, current.data)
      }) : current;
      return merged;
    }, {}); // IE11 does not support Object.values

    return Object.keys(merged).map(function (key) {
      return merged[key];
    });
  }

  var INVALID_ELEMENT_ERROR = 'Popper: Invalid reference or popper argument provided. They must be either a DOM element or virtual element.';
  var INFINITE_LOOP_ERROR = 'Popper: An infinite loop in the modifiers cycle has been detected! The cycle has been interrupted to prevent a browser crash.';
  var DEFAULT_OPTIONS = {
    placement: 'bottom',
    modifiers: [],
    strategy: 'absolute'
  };

  function areValidElements() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return !args.some(function (element) {
      return !(element && typeof element.getBoundingClientRect === 'function');
    });
  }

  function popperGenerator(generatorOptions) {
    if (generatorOptions === void 0) {
      generatorOptions = {};
    }

    var _generatorOptions = generatorOptions,
        _generatorOptions$def = _generatorOptions.defaultModifiers,
        defaultModifiers = _generatorOptions$def === void 0 ? [] : _generatorOptions$def,
        _generatorOptions$def2 = _generatorOptions.defaultOptions,
        defaultOptions = _generatorOptions$def2 === void 0 ? DEFAULT_OPTIONS : _generatorOptions$def2;
    return function createPopper(reference, popper, options) {
      if (options === void 0) {
        options = defaultOptions;
      }

      var state = {
        placement: 'bottom',
        orderedModifiers: [],
        options: Object.assign({}, DEFAULT_OPTIONS, defaultOptions),
        modifiersData: {},
        elements: {
          reference: reference,
          popper: popper
        },
        attributes: {},
        styles: {}
      };
      var effectCleanupFns = [];
      var isDestroyed = false;
      var instance = {
        state: state,
        setOptions: function setOptions(setOptionsAction) {
          var options = typeof setOptionsAction === 'function' ? setOptionsAction(state.options) : setOptionsAction;
          cleanupModifierEffects();
          state.options = Object.assign({}, defaultOptions, state.options, options);
          state.scrollParents = {
            reference: isElement(reference) ? listScrollParents(reference) : reference.contextElement ? listScrollParents(reference.contextElement) : [],
            popper: listScrollParents(popper)
          }; // Orders the modifiers based on their dependencies and `phase`
          // properties

          var orderedModifiers = orderModifiers(mergeByName([].concat(defaultModifiers, state.options.modifiers))); // Strip out disabled modifiers

          state.orderedModifiers = orderedModifiers.filter(function (m) {
            return m.enabled;
          }); // Validate the provided modifiers so that the consumer will get warned
          // if one of the modifiers is invalid for any reason

          if (process.env.NODE_ENV !== "production") {
            var modifiers = uniqueBy([].concat(orderedModifiers, state.options.modifiers), function (_ref) {
              var name = _ref.name;
              return name;
            });
            validateModifiers(modifiers);

            if (getBasePlacement(state.options.placement) === auto) {
              var flipModifier = state.orderedModifiers.find(function (_ref2) {
                var name = _ref2.name;
                return name === 'flip';
              });

              if (!flipModifier) {
                console.error(['Popper: "auto" placements require the "flip" modifier be', 'present and enabled to work.'].join(' '));
              }
            }

            var _getComputedStyle = getComputedStyle(popper),
                marginTop = _getComputedStyle.marginTop,
                marginRight = _getComputedStyle.marginRight,
                marginBottom = _getComputedStyle.marginBottom,
                marginLeft = _getComputedStyle.marginLeft; // We no longer take into account `margins` on the popper, and it can
            // cause bugs with positioning, so we'll warn the consumer


            if ([marginTop, marginRight, marginBottom, marginLeft].some(function (margin) {
              return parseFloat(margin);
            })) {
              console.warn(['Popper: CSS "margin" styles cannot be used to apply padding', 'between the popper and its reference element or boundary.', 'To replicate margin, use the `offset` modifier, as well as', 'the `padding` option in the `preventOverflow` and `flip`', 'modifiers.'].join(' '));
            }
          }

          runModifierEffects();
          return instance.update();
        },
        // Sync update – it will always be executed, even if not necessary. This
        // is useful for low frequency updates where sync behavior simplifies the
        // logic.
        // For high frequency updates (e.g. `resize` and `scroll` events), always
        // prefer the async Popper#update method
        forceUpdate: function forceUpdate() {
          if (isDestroyed) {
            return;
          }

          var _state$elements = state.elements,
              reference = _state$elements.reference,
              popper = _state$elements.popper; // Don't proceed if `reference` or `popper` are not valid elements
          // anymore

          if (!areValidElements(reference, popper)) {
            if (process.env.NODE_ENV !== "production") {
              console.error(INVALID_ELEMENT_ERROR);
            }

            return;
          } // Store the reference and popper rects to be read by modifiers


          state.rects = {
            reference: getCompositeRect(reference, getOffsetParent(popper), state.options.strategy === 'fixed'),
            popper: getLayoutRect(popper)
          }; // Modifiers have the ability to reset the current update cycle. The
          // most common use case for this is the `flip` modifier changing the
          // placement, which then needs to re-run all the modifiers, because the
          // logic was previously ran for the previous placement and is therefore
          // stale/incorrect

          state.reset = false;
          state.placement = state.options.placement; // On each update cycle, the `modifiersData` property for each modifier
          // is filled with the initial data specified by the modifier. This means
          // it doesn't persist and is fresh on each update.
          // To ensure persistent data, use `${name}#persistent`

          state.orderedModifiers.forEach(function (modifier) {
            return state.modifiersData[modifier.name] = Object.assign({}, modifier.data);
          });
          var __debug_loops__ = 0;

          for (var index = 0; index < state.orderedModifiers.length; index++) {
            if (process.env.NODE_ENV !== "production") {
              __debug_loops__ += 1;

              if (__debug_loops__ > 100) {
                console.error(INFINITE_LOOP_ERROR);
                break;
              }
            }

            if (state.reset === true) {
              state.reset = false;
              index = -1;
              continue;
            }

            var _state$orderedModifie = state.orderedModifiers[index],
                fn = _state$orderedModifie.fn,
                _state$orderedModifie2 = _state$orderedModifie.options,
                _options = _state$orderedModifie2 === void 0 ? {} : _state$orderedModifie2,
                name = _state$orderedModifie.name;

            if (typeof fn === 'function') {
              state = fn({
                state: state,
                options: _options,
                name: name,
                instance: instance
              }) || state;
            }
          }
        },
        // Async and optimistically optimized update – it will not be executed if
        // not necessary (debounced to run at most once-per-tick)
        update: debounce(function () {
          return new Promise(function (resolve) {
            instance.forceUpdate();
            resolve(state);
          });
        }),
        destroy: function destroy() {
          cleanupModifierEffects();
          isDestroyed = true;
        }
      };

      if (!areValidElements(reference, popper)) {
        if (process.env.NODE_ENV !== "production") {
          console.error(INVALID_ELEMENT_ERROR);
        }

        return instance;
      }

      instance.setOptions(options).then(function (state) {
        if (!isDestroyed && options.onFirstUpdate) {
          options.onFirstUpdate(state);
        }
      }); // Modifiers have the ability to execute arbitrary code before the first
      // update cycle runs. They will be executed in the same order as the update
      // cycle. This is useful when a modifier adds some persistent data that
      // other modifiers need to use, but the modifier is run after the dependent
      // one.

      function runModifierEffects() {
        state.orderedModifiers.forEach(function (_ref3) {
          var name = _ref3.name,
              _ref3$options = _ref3.options,
              options = _ref3$options === void 0 ? {} : _ref3$options,
              effect = _ref3.effect;

          if (typeof effect === 'function') {
            var cleanupFn = effect({
              state: state,
              name: name,
              instance: instance,
              options: options
            });

            var noopFn = function noopFn() {};

            effectCleanupFns.push(cleanupFn || noopFn);
          }
        });
      }

      function cleanupModifierEffects() {
        effectCleanupFns.forEach(function (fn) {
          return fn();
        });
        effectCleanupFns = [];
      }

      return instance;
    };
  }

  var defaultModifiers = [eventListeners, popperOffsets$1, computeStyles$1, applyStyles$1, offset$1, flip$1, preventOverflow$1, arrow$1, hide$1];
  var createPopper = /*#__PURE__*/popperGenerator({
    defaultModifiers: defaultModifiers
  }); // eslint-disable-next-line import/no-unused-modules

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

  var Element$1 = function Element() {};

  if (typeof window !== 'undefined') {
    Element$1 = window.Element;
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
          type: [String, Object, Element$1, Boolean],
          default: function _default(props) {
            return getDefaultConfig(props.theme, 'container');
          }
        },
        boundary: {
          type: [String, Element$1],
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

  function getInternetExplorerVersion() {
    var ua = window.navigator.userAgent;
    var msie = ua.indexOf('MSIE ');

    if (msie > 0) {
      // IE 10 or older => return version number
      return parseInt(ua.substring(msie + 5, ua.indexOf('.', msie)), 10);
    }

    var trident = ua.indexOf('Trident/');

    if (trident > 0) {
      // IE 11 => return version number
      var rv = ua.indexOf('rv:');
      return parseInt(ua.substring(rv + 3, ua.indexOf('.', rv)), 10);
    }

    var edge = ua.indexOf('Edge/');

    if (edge > 0) {
      // Edge (IE 12+) => return version number
      return parseInt(ua.substring(edge + 5, ua.indexOf('.', edge)), 10);
    } // other browser


    return -1;
  }

  var isIE;

  function initCompat() {
    if (!initCompat.init) {
      initCompat.init = true;
      isIE = getInternetExplorerVersion() !== -1;
    }
  }

  var script$6 = {
    name: 'ResizeObserver',
    props: {
      emitOnMount: {
        type: Boolean,
        default: false
      },
      ignoreWidth: {
        type: Boolean,
        default: false
      },
      ignoreHeight: {
        type: Boolean,
        default: false
      }
    },
    emits: ['notify'],
    mounted: function mounted() {
      var _this = this;

      initCompat();
      vue.nextTick(function () {
        _this._w = _this.$el.offsetWidth;
        _this._h = _this.$el.offsetHeight;

        if (_this.emitOnMount) {
          _this.emitSize();
        }
      });
      var object = document.createElement('object');
      this._resizeObject = object;
      object.setAttribute('aria-hidden', 'true');
      object.setAttribute('tabindex', -1);
      object.onload = this.addResizeHandlers;
      object.type = 'text/html';

      if (isIE) {
        this.$el.appendChild(object);
      }

      object.data = 'about:blank';

      if (!isIE) {
        this.$el.appendChild(object);
      }
    },
    beforeUnmount: function beforeUnmount() {
      this.removeResizeHandlers();
    },
    methods: {
      compareAndNotify: function compareAndNotify() {
        if (!this.ignoreWidth && this._w !== this.$el.offsetWidth || !this.ignoreHeight && this._h !== this.$el.offsetHeight) {
          this._w = this.$el.offsetWidth;
          this._h = this.$el.offsetHeight;
          this.emitSize();
        }
      },
      emitSize: function emitSize() {
        this.$emit('notify', {
          width: this._w,
          height: this._h
        });
      },
      addResizeHandlers: function addResizeHandlers() {
        this._resizeObject.contentDocument.defaultView.addEventListener('resize', this.compareAndNotify);

        this.compareAndNotify();
      },
      removeResizeHandlers: function removeResizeHandlers() {
        if (this._resizeObject && this._resizeObject.onload) {
          if (!isIE && this._resizeObject.contentDocument) {
            this._resizeObject.contentDocument.defaultView.removeEventListener('resize', this.compareAndNotify);
          }

          this.$el.removeChild(this._resizeObject);
          this._resizeObject.onload = null;
          this._resizeObject = null;
        }
      }
    }
  };

  var _withId = /*#__PURE__*/vue.withScopeId("data-v-b329ee4c");

  vue.pushScopeId("data-v-b329ee4c");
  var _hoisted_1$2 = {
    class: "resize-observer",
    tabindex: "-1"
  };
  vue.popScopeId();

  var render$3 = /*#__PURE__*/_withId(function (_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createBlock("div", _hoisted_1$2);
  });

  script$6.render = render$3;
  script$6.__scopeId = "data-v-b329ee4c";
  script$6.__file = "src/components/ResizeObserver.vue";

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
      ResizeObserver: script$6
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

  var _hoisted_5 = /*#__PURE__*/vue.createElementVNode("div", {
    class: "v-popper__arrow"
  }, null, -1
  /* HOISTED */
  );

  var _hoisted_6 = [_hoisted_5];
  function render$2(_ctx, _cache, $props, $setup, $data, $options) {
    var _component_ResizeObserver = vue.resolveComponent("ResizeObserver");

    return vue.openBlock(), vue.createElementBlock("div", {
      id: $props.popperId,
      ref: "popover",
      class: vue.normalizeClass(["v-popper__popper", [_ctx.themeClass, {
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
      onKeyup: _cache[1] || (_cache[1] = vue.withKeys(function ($event) {
        return $props.autoHide && _ctx.$emit('hide');
      }, ["esc"]))
    }, [vue.createElementVNode("div", _hoisted_2$1, [vue.createElementVNode("div", _hoisted_3, [$props.mounted ? (vue.openBlock(), vue.createElementBlock(vue.Fragment, {
      key: 0
    }, [vue.createElementVNode("div", null, [vue.renderSlot(_ctx.$slots, "default")]), $props.handleResize ? (vue.openBlock(), vue.createBlock(_component_ResizeObserver, {
      key: 0,
      onNotify: _cache[0] || (_cache[0] = function ($event) {
        return _ctx.$emit('resize', $event);
      })
    })) : vue.createCommentVNode("v-if", true)], 64
    /* STABLE_FRAGMENT */
    )) : vue.createCommentVNode("v-if", true)], 512
    /* NEED_PATCH */
    ), vue.createElementVNode("div", _hoisted_4, _hoisted_6, 512
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
    var _component_PopperContent = vue.resolveComponent("PopperContent");

    var _component_Popper = vue.resolveComponent("Popper");

    return vue.openBlock(), vue.createBlock(_component_Popper, vue.mergeProps({
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
      default: vue.withCtx(function (_ref) {
        var popperId = _ref.popperId,
            isShown = _ref.isShown,
            shouldMountContent = _ref.shouldMountContent,
            skipTransition = _ref.skipTransition,
            autoHide = _ref.autoHide,
            hide = _ref.hide,
            handleResize = _ref.handleResize,
            onResize = _ref.onResize,
            classes = _ref.classes;
        return [vue.createElementVNode("div", {
          ref: "reference",
          class: vue.normalizeClass(["v-popper", [_ctx.themeClass, {
            'v-popper--shown': isShown
          }]])
        }, [vue.renderSlot(_ctx.$slots, "default"), vue.createVNode(_component_PopperContent, {
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
          default: vue.withCtx(function () {
            return [vue.renderSlot(_ctx.$slots, "popper", {
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
    var _component_PopperContent = vue.resolveComponent("PopperContent");

    var _component_Popper = vue.resolveComponent("Popper");

    return vue.openBlock(), vue.createBlock(_component_Popper, vue.mergeProps({
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
      default: vue.withCtx(function (_ref) {
        var popperId = _ref.popperId,
            isShown = _ref.isShown,
            shouldMountContent = _ref.shouldMountContent,
            skipTransition = _ref.skipTransition,
            autoHide = _ref.autoHide,
            hide = _ref.hide,
            handleResize = _ref.handleResize,
            onResize = _ref.onResize,
            classes = _ref.classes;
        return [vue.createVNode(_component_PopperContent, {
          ref: "popperContent",
          class: vue.normalizeClass({
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
          default: vue.withCtx(function () {
            return [$props.html ? (vue.openBlock(), vue.createElementBlock("div", {
              key: 0,
              innerHTML: $options.finalContent
            }, null, 8
            /* PROPS */
            , _hoisted_1)) : (vue.openBlock(), vue.createElementBlock("div", {
              key: 1,
              textContent: vue.toDisplayString($options.finalContent)
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
    var options = vue.ref(getOptions(el, value, modifiers));
    var component = vue.ref();
    var tooltipApp = vue.createApp({
      name: 'VTooltipDirective',
      setup: function setup() {
        return {
          options: options,
          tooltip: component
        };
      },
      render: function render() {
        return vue.h(script, _objectSpread2(_objectSpread2({}, this.options), {}, {
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

  exports.Dropdown = Dropdown;
  exports.Menu = Menu;
  exports.Popper = Popper;
  exports.PopperContent = PopperContent;
  exports.PopperMethods = PopperMethods;
  exports.PopperWrapper = PopperWrapper;
  exports.ThemeClass = ThemeClass;
  exports.Tooltip = Tooltip;
  exports.TooltipDirective = TooltipDirective;
  exports.VClosePopper = VClosePopper;
  exports.VTooltip = VTooltip;
  exports.createTooltip = createTooltip;
  exports["default"] = plugin;
  exports.destroyTooltip = destroyTooltip;
  exports.install = install;
  exports.options = options;

  Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=v-tooltip.umd.js.map
