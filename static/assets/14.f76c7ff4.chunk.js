(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[14],{

/***/ "./node_modules/@deck.gl/layers/dist/esm/scatterplot-layer/scatterplot-layer-fragment.glsl.js":
/*!****************************************************************************************************!*\
  !*** ./node_modules/@deck.gl/layers/dist/esm/scatterplot-layer/scatterplot-layer-fragment.glsl.js ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"#define SHADER_NAME scatterplot-layer-fragment-shader\\n\\nprecision highp float;\\n\\nuniform bool filled;\\n\\nvarying vec4 vFillColor;\\nvarying vec4 vLineColor;\\nvarying vec2 unitPosition;\\nvarying float innerUnitRadius;\\n\\nvoid main(void) {\\n\\n  float distToCenter = length(unitPosition);\\n\\n  if (distToCenter > 1.0) {\\n    discard;\\n  } \\n  if (distToCenter > innerUnitRadius) {\\n    gl_FragColor = vLineColor;\\n  } else if (filled) {\\n    gl_FragColor = vFillColor;\\n  } else {\\n    discard;\\n  }\\n  gl_FragColor = picking_filterHighlightColor(gl_FragColor);\\n  gl_FragColor = picking_filterPickingColor(gl_FragColor);\\n}\\n\");\n//# sourceMappingURL=scatterplot-layer-fragment.glsl.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvQGRlY2suZ2wvbGF5ZXJzL2Rpc3QvZXNtL3NjYXR0ZXJwbG90LWxheWVyL3NjYXR0ZXJwbG90LWxheWVyLWZyYWdtZW50Lmdsc2wuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGRlY2suZ2wvbGF5ZXJzL2Rpc3QvZXNtL3NjYXR0ZXJwbG90LWxheWVyL3NjYXR0ZXJwbG90LWxheWVyLWZyYWdtZW50Lmdsc2wuanM/YWY4MSJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBcIiNkZWZpbmUgU0hBREVSX05BTUUgc2NhdHRlcnBsb3QtbGF5ZXItZnJhZ21lbnQtc2hhZGVyXFxuXFxucHJlY2lzaW9uIGhpZ2hwIGZsb2F0O1xcblxcbnVuaWZvcm0gYm9vbCBmaWxsZWQ7XFxuXFxudmFyeWluZyB2ZWM0IHZGaWxsQ29sb3I7XFxudmFyeWluZyB2ZWM0IHZMaW5lQ29sb3I7XFxudmFyeWluZyB2ZWMyIHVuaXRQb3NpdGlvbjtcXG52YXJ5aW5nIGZsb2F0IGlubmVyVW5pdFJhZGl1cztcXG5cXG52b2lkIG1haW4odm9pZCkge1xcblxcbiAgZmxvYXQgZGlzdFRvQ2VudGVyID0gbGVuZ3RoKHVuaXRQb3NpdGlvbik7XFxuXFxuICBpZiAoZGlzdFRvQ2VudGVyID4gMS4wKSB7XFxuICAgIGRpc2NhcmQ7XFxuICB9IFxcbiAgaWYgKGRpc3RUb0NlbnRlciA+IGlubmVyVW5pdFJhZGl1cykge1xcbiAgICBnbF9GcmFnQ29sb3IgPSB2TGluZUNvbG9yO1xcbiAgfSBlbHNlIGlmIChmaWxsZWQpIHtcXG4gICAgZ2xfRnJhZ0NvbG9yID0gdkZpbGxDb2xvcjtcXG4gIH0gZWxzZSB7XFxuICAgIGRpc2NhcmQ7XFxuICB9XFxuICBnbF9GcmFnQ29sb3IgPSBwaWNraW5nX2ZpbHRlckhpZ2hsaWdodENvbG9yKGdsX0ZyYWdDb2xvcik7XFxuICBnbF9GcmFnQ29sb3IgPSBwaWNraW5nX2ZpbHRlclBpY2tpbmdDb2xvcihnbF9GcmFnQ29sb3IpO1xcbn1cXG5cIjtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXNjYXR0ZXJwbG90LWxheWVyLWZyYWdtZW50Lmdsc2wuanMubWFwIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/@deck.gl/layers/dist/esm/scatterplot-layer/scatterplot-layer-fragment.glsl.js\n");

/***/ }),

/***/ "./node_modules/@deck.gl/layers/dist/esm/scatterplot-layer/scatterplot-layer-vertex.glsl.js":
/*!**************************************************************************************************!*\
  !*** ./node_modules/@deck.gl/layers/dist/esm/scatterplot-layer/scatterplot-layer-vertex.glsl.js ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"#define SHADER_NAME scatterplot-layer-vertex-shader\\n\\nattribute vec3 positions;\\n\\nattribute vec3 instancePositions;\\nattribute vec2 instancePositions64xyLow;\\nattribute float instanceRadius;\\nattribute float instanceLineWidths;\\nattribute vec4 instanceFillColors;\\nattribute vec4 instanceLineColors;\\nattribute vec3 instancePickingColors;\\n\\nuniform float opacity;\\nuniform float radiusScale;\\nuniform float radiusMinPixels;\\nuniform float radiusMaxPixels;\\nuniform float lineWidthScale;\\nuniform float lineWidthMinPixels;\\nuniform float lineWidthMaxPixels;\\nuniform float stroked;\\nuniform bool filled;\\n\\nvarying vec4 vFillColor;\\nvarying vec4 vLineColor;\\nvarying vec2 unitPosition;\\nvarying float innerUnitRadius;\\n\\nvoid main(void) {\\n  float outerRadiusPixels = clamp(\\n    project_size_to_pixel(radiusScale * instanceRadius),\\n    radiusMinPixels, radiusMaxPixels\\n  );\\n  float lineWidthPixels = clamp(\\n    project_size_to_pixel(lineWidthScale * instanceLineWidths),\\n    lineWidthMinPixels, lineWidthMaxPixels\\n  );\\n  outerRadiusPixels += stroked * lineWidthPixels / 2.0;\\n  unitPosition = positions.xy;\\n\\n  innerUnitRadius = 1.0 - stroked * lineWidthPixels / outerRadiusPixels;\\n  \\n  vec3 offset = positions * project_pixel_size(outerRadiusPixels);\\n  gl_Position = project_position_to_clipspace(instancePositions, instancePositions64xyLow, offset);\\n  vFillColor = vec4(instanceFillColors.rgb, instanceFillColors.a * opacity) / 255.;\\n  vLineColor = vec4(instanceLineColors.rgb, instanceLineColors.a * opacity) / 255.;\\n  picking_setPickingColor(instancePickingColors);\\n}\\n\");\n//# sourceMappingURL=scatterplot-layer-vertex.glsl.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvQGRlY2suZ2wvbGF5ZXJzL2Rpc3QvZXNtL3NjYXR0ZXJwbG90LWxheWVyL3NjYXR0ZXJwbG90LWxheWVyLXZlcnRleC5nbHNsLmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BkZWNrLmdsL2xheWVycy9kaXN0L2VzbS9zY2F0dGVycGxvdC1sYXllci9zY2F0dGVycGxvdC1sYXllci12ZXJ0ZXguZ2xzbC5qcz8yM2MxIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IFwiI2RlZmluZSBTSEFERVJfTkFNRSBzY2F0dGVycGxvdC1sYXllci12ZXJ0ZXgtc2hhZGVyXFxuXFxuYXR0cmlidXRlIHZlYzMgcG9zaXRpb25zO1xcblxcbmF0dHJpYnV0ZSB2ZWMzIGluc3RhbmNlUG9zaXRpb25zO1xcbmF0dHJpYnV0ZSB2ZWMyIGluc3RhbmNlUG9zaXRpb25zNjR4eUxvdztcXG5hdHRyaWJ1dGUgZmxvYXQgaW5zdGFuY2VSYWRpdXM7XFxuYXR0cmlidXRlIGZsb2F0IGluc3RhbmNlTGluZVdpZHRocztcXG5hdHRyaWJ1dGUgdmVjNCBpbnN0YW5jZUZpbGxDb2xvcnM7XFxuYXR0cmlidXRlIHZlYzQgaW5zdGFuY2VMaW5lQ29sb3JzO1xcbmF0dHJpYnV0ZSB2ZWMzIGluc3RhbmNlUGlja2luZ0NvbG9ycztcXG5cXG51bmlmb3JtIGZsb2F0IG9wYWNpdHk7XFxudW5pZm9ybSBmbG9hdCByYWRpdXNTY2FsZTtcXG51bmlmb3JtIGZsb2F0IHJhZGl1c01pblBpeGVscztcXG51bmlmb3JtIGZsb2F0IHJhZGl1c01heFBpeGVscztcXG51bmlmb3JtIGZsb2F0IGxpbmVXaWR0aFNjYWxlO1xcbnVuaWZvcm0gZmxvYXQgbGluZVdpZHRoTWluUGl4ZWxzO1xcbnVuaWZvcm0gZmxvYXQgbGluZVdpZHRoTWF4UGl4ZWxzO1xcbnVuaWZvcm0gZmxvYXQgc3Ryb2tlZDtcXG51bmlmb3JtIGJvb2wgZmlsbGVkO1xcblxcbnZhcnlpbmcgdmVjNCB2RmlsbENvbG9yO1xcbnZhcnlpbmcgdmVjNCB2TGluZUNvbG9yO1xcbnZhcnlpbmcgdmVjMiB1bml0UG9zaXRpb247XFxudmFyeWluZyBmbG9hdCBpbm5lclVuaXRSYWRpdXM7XFxuXFxudm9pZCBtYWluKHZvaWQpIHtcXG4gIGZsb2F0IG91dGVyUmFkaXVzUGl4ZWxzID0gY2xhbXAoXFxuICAgIHByb2plY3Rfc2l6ZV90b19waXhlbChyYWRpdXNTY2FsZSAqIGluc3RhbmNlUmFkaXVzKSxcXG4gICAgcmFkaXVzTWluUGl4ZWxzLCByYWRpdXNNYXhQaXhlbHNcXG4gICk7XFxuICBmbG9hdCBsaW5lV2lkdGhQaXhlbHMgPSBjbGFtcChcXG4gICAgcHJvamVjdF9zaXplX3RvX3BpeGVsKGxpbmVXaWR0aFNjYWxlICogaW5zdGFuY2VMaW5lV2lkdGhzKSxcXG4gICAgbGluZVdpZHRoTWluUGl4ZWxzLCBsaW5lV2lkdGhNYXhQaXhlbHNcXG4gICk7XFxuICBvdXRlclJhZGl1c1BpeGVscyArPSBzdHJva2VkICogbGluZVdpZHRoUGl4ZWxzIC8gMi4wO1xcbiAgdW5pdFBvc2l0aW9uID0gcG9zaXRpb25zLnh5O1xcblxcbiAgaW5uZXJVbml0UmFkaXVzID0gMS4wIC0gc3Ryb2tlZCAqIGxpbmVXaWR0aFBpeGVscyAvIG91dGVyUmFkaXVzUGl4ZWxzO1xcbiAgXFxuICB2ZWMzIG9mZnNldCA9IHBvc2l0aW9ucyAqIHByb2plY3RfcGl4ZWxfc2l6ZShvdXRlclJhZGl1c1BpeGVscyk7XFxuICBnbF9Qb3NpdGlvbiA9IHByb2plY3RfcG9zaXRpb25fdG9fY2xpcHNwYWNlKGluc3RhbmNlUG9zaXRpb25zLCBpbnN0YW5jZVBvc2l0aW9uczY0eHlMb3csIG9mZnNldCk7XFxuICB2RmlsbENvbG9yID0gdmVjNChpbnN0YW5jZUZpbGxDb2xvcnMucmdiLCBpbnN0YW5jZUZpbGxDb2xvcnMuYSAqIG9wYWNpdHkpIC8gMjU1LjtcXG4gIHZMaW5lQ29sb3IgPSB2ZWM0KGluc3RhbmNlTGluZUNvbG9ycy5yZ2IsIGluc3RhbmNlTGluZUNvbG9ycy5hICogb3BhY2l0eSkgLyAyNTUuO1xcbiAgcGlja2luZ19zZXRQaWNraW5nQ29sb3IoaW5zdGFuY2VQaWNraW5nQ29sb3JzKTtcXG59XFxuXCI7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1zY2F0dGVycGxvdC1sYXllci12ZXJ0ZXguZ2xzbC5qcy5tYXAiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/@deck.gl/layers/dist/esm/scatterplot-layer/scatterplot-layer-vertex.glsl.js\n");

/***/ }),

/***/ "./node_modules/@deck.gl/layers/dist/esm/scatterplot-layer/scatterplot-layer.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/@deck.gl/layers/dist/esm/scatterplot-layer/scatterplot-layer.js ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return ScatterplotLayer; });\n/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ \"./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ \"./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_get__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/get */ \"./node_modules/@babel/runtime/helpers/esm/get.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ \"./node_modules/@babel/runtime/helpers/esm/inherits.js\");\n/* harmony import */ var _deck_gl_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @deck.gl/core */ \"./node_modules/@deck.gl/core/dist/esm/utils/iterable-utils.js\");\n/* harmony import */ var _deck_gl_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @deck.gl/core */ \"./node_modules/@deck.gl/core/dist/esm/lib/layer.js\");\n/* harmony import */ var _luma_gl_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @luma.gl/core */ \"./node_modules/@luma.gl/shadertools/dist/esm/modules/fp64/fp64.js\");\n/* harmony import */ var _luma_gl_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @luma.gl/core */ \"./node_modules/@luma.gl/core/dist/esm/lib/model.js\");\n/* harmony import */ var _luma_gl_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @luma.gl/core */ \"./node_modules/@luma.gl/core/dist/esm/geometry/geometry.js\");\n/* harmony import */ var _scatterplot_layer_vertex_glsl__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./scatterplot-layer-vertex.glsl */ \"./node_modules/@deck.gl/layers/dist/esm/scatterplot-layer/scatterplot-layer-vertex.glsl.js\");\n/* harmony import */ var _scatterplot_layer_fragment_glsl__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./scatterplot-layer-fragment.glsl */ \"./node_modules/@deck.gl/layers/dist/esm/scatterplot-layer/scatterplot-layer-fragment.glsl.js\");\n\n\n\n\n\n\n\n\nvar fp64LowPart = _luma_gl_core__WEBPACK_IMPORTED_MODULE_8__[\"default\"].fp64LowPart;\n\n\nvar DEFAULT_COLOR = [0, 0, 0, 255];\nvar defaultProps = {\n  radiusScale: {\n    type: 'number',\n    min: 0,\n    value: 1\n  },\n  radiusMinPixels: {\n    type: 'number',\n    min: 0,\n    value: 0\n  },\n  radiusMaxPixels: {\n    type: 'number',\n    min: 0,\n    value: Number.MAX_SAFE_INTEGER\n  },\n  lineWidthUnits: 'meters',\n  lineWidthScale: {\n    type: 'number',\n    min: 0,\n    value: 1\n  },\n  lineWidthMinPixels: {\n    type: 'number',\n    min: 0,\n    value: 0\n  },\n  lineWidthMaxPixels: {\n    type: 'number',\n    min: 0,\n    value: Number.MAX_SAFE_INTEGER\n  },\n  stroked: false,\n  fp64: false,\n  filled: true,\n  getPosition: {\n    type: 'accessor',\n    value: function value(x) {\n      return x.position;\n    }\n  },\n  getRadius: {\n    type: 'accessor',\n    value: 1\n  },\n  getFillColor: {\n    type: 'accessor',\n    value: DEFAULT_COLOR\n  },\n  getLineColor: {\n    type: 'accessor',\n    value: DEFAULT_COLOR\n  },\n  getLineWidth: {\n    type: 'accessor',\n    value: 1\n  },\n  strokeWidth: {\n    deprecatedFor: 'getLineWidth'\n  },\n  outline: {\n    deprecatedFor: 'stroked'\n  },\n  getColor: {\n    deprecatedFor: ['getFillColor', 'getLineColor']\n  }\n};\n\nvar ScatterplotLayer = function (_Layer) {\n  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(ScatterplotLayer, _Layer);\n\n  function ScatterplotLayer() {\n    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, ScatterplotLayer);\n\n    return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(this, Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(ScatterplotLayer).apply(this, arguments));\n  }\n\n  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(ScatterplotLayer, [{\n    key: \"getShaders\",\n    value: function getShaders(id) {\n      var projectModule = this.use64bitProjection() ? 'project64' : 'project32';\n      return {\n        vs: _scatterplot_layer_vertex_glsl__WEBPACK_IMPORTED_MODULE_11__[\"default\"],\n        fs: _scatterplot_layer_fragment_glsl__WEBPACK_IMPORTED_MODULE_12__[\"default\"],\n        modules: [projectModule, 'picking']\n      };\n    }\n  }, {\n    key: \"initializeState\",\n    value: function initializeState() {\n      this.getAttributeManager().addInstanced({\n        instancePositions: {\n          size: 3,\n          transition: true,\n          accessor: 'getPosition'\n        },\n        instancePositions64xyLow: {\n          size: 2,\n          accessor: 'getPosition',\n          update: this.calculateInstancePositions64xyLow\n        },\n        instanceRadius: {\n          size: 1,\n          transition: true,\n          accessor: 'getRadius',\n          defaultValue: 1\n        },\n        instanceFillColors: {\n          size: 4,\n          transition: true,\n          type: 5121,\n          accessor: 'getFillColor',\n          defaultValue: [0, 0, 0, 255]\n        },\n        instanceLineColors: {\n          size: 4,\n          transition: true,\n          type: 5121,\n          accessor: 'getLineColor',\n          defaultValue: [0, 0, 0, 255]\n        },\n        instanceLineWidths: {\n          size: 1,\n          transition: true,\n          accessor: 'getLineWidth',\n          defaultValue: 1\n        }\n      });\n    }\n  }, {\n    key: \"updateState\",\n    value: function updateState(_ref) {\n      var props = _ref.props,\n          oldProps = _ref.oldProps,\n          changeFlags = _ref.changeFlags;\n\n      Object(_babel_runtime_helpers_esm_get__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(ScatterplotLayer.prototype), \"updateState\", this).call(this, {\n        props: props,\n        oldProps: oldProps,\n        changeFlags: changeFlags\n      });\n\n      if (props.fp64 !== oldProps.fp64) {\n        var gl = this.context.gl;\n\n        if (this.state.model) {\n          this.state.model.delete();\n        }\n\n        this.setState({\n          model: this._getModel(gl)\n        });\n        this.getAttributeManager().invalidateAll();\n      }\n    }\n  }, {\n    key: \"draw\",\n    value: function draw(_ref2) {\n      var uniforms = _ref2.uniforms;\n      var viewport = this.context.viewport;\n      var _this$props = this.props,\n          radiusScale = _this$props.radiusScale,\n          radiusMinPixels = _this$props.radiusMinPixels,\n          radiusMaxPixels = _this$props.radiusMaxPixels,\n          stroked = _this$props.stroked,\n          filled = _this$props.filled,\n          lineWidthUnits = _this$props.lineWidthUnits,\n          lineWidthScale = _this$props.lineWidthScale,\n          lineWidthMinPixels = _this$props.lineWidthMinPixels,\n          lineWidthMaxPixels = _this$props.lineWidthMaxPixels;\n      var widthMultiplier = lineWidthUnits === 'pixels' ? viewport.distanceScales.metersPerPixel[2] : 1;\n      this.state.model.setUniforms(Object.assign({}, uniforms, {\n        stroked: stroked ? 1 : 0,\n        filled: filled,\n        radiusScale: radiusScale,\n        radiusMinPixels: radiusMinPixels,\n        radiusMaxPixels: radiusMaxPixels,\n        lineWidthScale: lineWidthScale * widthMultiplier,\n        lineWidthMinPixels: lineWidthMinPixels,\n        lineWidthMaxPixels: lineWidthMaxPixels\n      })).draw();\n    }\n  }, {\n    key: \"_getModel\",\n    value: function _getModel(gl) {\n      var positions = [-1, -1, 0, -1, 1, 0, 1, 1, 0, 1, -1, 0];\n      return new _luma_gl_core__WEBPACK_IMPORTED_MODULE_9__[\"default\"](gl, Object.assign(this.getShaders(), {\n        id: this.props.id,\n        geometry: new _luma_gl_core__WEBPACK_IMPORTED_MODULE_10__[\"default\"]({\n          drawMode: 6,\n          vertexCount: 4,\n          attributes: {\n            positions: {\n              size: 3,\n              value: new Float32Array(positions)\n            }\n          }\n        }),\n        isInstanced: true,\n        shaderCache: this.context.shaderCache\n      }));\n    }\n  }, {\n    key: \"calculateInstancePositions64xyLow\",\n    value: function calculateInstancePositions64xyLow(attribute, _ref3) {\n      var startRow = _ref3.startRow,\n          endRow = _ref3.endRow;\n      var isFP64 = this.use64bitPositions();\n      attribute.constant = !isFP64;\n\n      if (!isFP64) {\n        attribute.value = new Float32Array(2);\n        return;\n      }\n\n      var _this$props2 = this.props,\n          data = _this$props2.data,\n          getPosition = _this$props2.getPosition;\n      var value = attribute.value,\n          size = attribute.size;\n      var i = startRow * size;\n\n      var _createIterable = Object(_deck_gl_core__WEBPACK_IMPORTED_MODULE_6__[\"createIterable\"])(data, startRow, endRow),\n          iterable = _createIterable.iterable,\n          objectInfo = _createIterable.objectInfo;\n\n      var _iteratorNormalCompletion = true;\n      var _didIteratorError = false;\n      var _iteratorError = undefined;\n\n      try {\n        for (var _iterator = iterable[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {\n          var object = _step.value;\n          objectInfo.index++;\n          var position = getPosition(object, objectInfo);\n          value[i++] = fp64LowPart(position[0]);\n          value[i++] = fp64LowPart(position[1]);\n        }\n      } catch (err) {\n        _didIteratorError = true;\n        _iteratorError = err;\n      } finally {\n        try {\n          if (!_iteratorNormalCompletion && _iterator.return != null) {\n            _iterator.return();\n          }\n        } finally {\n          if (_didIteratorError) {\n            throw _iteratorError;\n          }\n        }\n      }\n    }\n  }]);\n\n  return ScatterplotLayer;\n}(_deck_gl_core__WEBPACK_IMPORTED_MODULE_7__[\"default\"]);\n\n\nScatterplotLayer.layerName = 'ScatterplotLayer';\nScatterplotLayer.defaultProps = defaultProps;\n//# sourceMappingURL=scatterplot-layer.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvQGRlY2suZ2wvbGF5ZXJzL2Rpc3QvZXNtL3NjYXR0ZXJwbG90LWxheWVyL3NjYXR0ZXJwbG90LWxheWVyLmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BkZWNrLmdsL2xheWVycy9kaXN0L2VzbS9zY2F0dGVycGxvdC1sYXllci9zY2F0dGVycGxvdC1sYXllci5qcz9mYmJiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBfY2xhc3NDYWxsQ2hlY2sgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2NsYXNzQ2FsbENoZWNrXCI7XG5pbXBvcnQgX2NyZWF0ZUNsYXNzIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9jcmVhdGVDbGFzc1wiO1xuaW1wb3J0IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuXCI7XG5pbXBvcnQgX2dldFByb3RvdHlwZU9mIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9nZXRQcm90b3R5cGVPZlwiO1xuaW1wb3J0IF9nZXQgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2dldFwiO1xuaW1wb3J0IF9pbmhlcml0cyBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vaW5oZXJpdHNcIjtcbmltcG9ydCB7IExheWVyLCBjcmVhdGVJdGVyYWJsZSB9IGZyb20gJ0BkZWNrLmdsL2NvcmUnO1xuaW1wb3J0IHsgTW9kZWwsIEdlb21ldHJ5LCBmcDY0IH0gZnJvbSAnQGx1bWEuZ2wvY29yZSc7XG52YXIgZnA2NExvd1BhcnQgPSBmcDY0LmZwNjRMb3dQYXJ0O1xuaW1wb3J0IHZzIGZyb20gJy4vc2NhdHRlcnBsb3QtbGF5ZXItdmVydGV4Lmdsc2wnO1xuaW1wb3J0IGZzIGZyb20gJy4vc2NhdHRlcnBsb3QtbGF5ZXItZnJhZ21lbnQuZ2xzbCc7XG52YXIgREVGQVVMVF9DT0xPUiA9IFswLCAwLCAwLCAyNTVdO1xudmFyIGRlZmF1bHRQcm9wcyA9IHtcbiAgcmFkaXVzU2NhbGU6IHtcbiAgICB0eXBlOiAnbnVtYmVyJyxcbiAgICBtaW46IDAsXG4gICAgdmFsdWU6IDFcbiAgfSxcbiAgcmFkaXVzTWluUGl4ZWxzOiB7XG4gICAgdHlwZTogJ251bWJlcicsXG4gICAgbWluOiAwLFxuICAgIHZhbHVlOiAwXG4gIH0sXG4gIHJhZGl1c01heFBpeGVsczoge1xuICAgIHR5cGU6ICdudW1iZXInLFxuICAgIG1pbjogMCxcbiAgICB2YWx1ZTogTnVtYmVyLk1BWF9TQUZFX0lOVEVHRVJcbiAgfSxcbiAgbGluZVdpZHRoVW5pdHM6ICdtZXRlcnMnLFxuICBsaW5lV2lkdGhTY2FsZToge1xuICAgIHR5cGU6ICdudW1iZXInLFxuICAgIG1pbjogMCxcbiAgICB2YWx1ZTogMVxuICB9LFxuICBsaW5lV2lkdGhNaW5QaXhlbHM6IHtcbiAgICB0eXBlOiAnbnVtYmVyJyxcbiAgICBtaW46IDAsXG4gICAgdmFsdWU6IDBcbiAgfSxcbiAgbGluZVdpZHRoTWF4UGl4ZWxzOiB7XG4gICAgdHlwZTogJ251bWJlcicsXG4gICAgbWluOiAwLFxuICAgIHZhbHVlOiBOdW1iZXIuTUFYX1NBRkVfSU5URUdFUlxuICB9LFxuICBzdHJva2VkOiBmYWxzZSxcbiAgZnA2NDogZmFsc2UsXG4gIGZpbGxlZDogdHJ1ZSxcbiAgZ2V0UG9zaXRpb246IHtcbiAgICB0eXBlOiAnYWNjZXNzb3InLFxuICAgIHZhbHVlOiBmdW5jdGlvbiB2YWx1ZSh4KSB7XG4gICAgICByZXR1cm4geC5wb3NpdGlvbjtcbiAgICB9XG4gIH0sXG4gIGdldFJhZGl1czoge1xuICAgIHR5cGU6ICdhY2Nlc3NvcicsXG4gICAgdmFsdWU6IDFcbiAgfSxcbiAgZ2V0RmlsbENvbG9yOiB7XG4gICAgdHlwZTogJ2FjY2Vzc29yJyxcbiAgICB2YWx1ZTogREVGQVVMVF9DT0xPUlxuICB9LFxuICBnZXRMaW5lQ29sb3I6IHtcbiAgICB0eXBlOiAnYWNjZXNzb3InLFxuICAgIHZhbHVlOiBERUZBVUxUX0NPTE9SXG4gIH0sXG4gIGdldExpbmVXaWR0aDoge1xuICAgIHR5cGU6ICdhY2Nlc3NvcicsXG4gICAgdmFsdWU6IDFcbiAgfSxcbiAgc3Ryb2tlV2lkdGg6IHtcbiAgICBkZXByZWNhdGVkRm9yOiAnZ2V0TGluZVdpZHRoJ1xuICB9LFxuICBvdXRsaW5lOiB7XG4gICAgZGVwcmVjYXRlZEZvcjogJ3N0cm9rZWQnXG4gIH0sXG4gIGdldENvbG9yOiB7XG4gICAgZGVwcmVjYXRlZEZvcjogWydnZXRGaWxsQ29sb3InLCAnZ2V0TGluZUNvbG9yJ11cbiAgfVxufTtcblxudmFyIFNjYXR0ZXJwbG90TGF5ZXIgPSBmdW5jdGlvbiAoX0xheWVyKSB7XG4gIF9pbmhlcml0cyhTY2F0dGVycGxvdExheWVyLCBfTGF5ZXIpO1xuXG4gIGZ1bmN0aW9uIFNjYXR0ZXJwbG90TGF5ZXIoKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFNjYXR0ZXJwbG90TGF5ZXIpO1xuXG4gICAgcmV0dXJuIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIF9nZXRQcm90b3R5cGVPZihTY2F0dGVycGxvdExheWVyKS5hcHBseSh0aGlzLCBhcmd1bWVudHMpKTtcbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhTY2F0dGVycGxvdExheWVyLCBbe1xuICAgIGtleTogXCJnZXRTaGFkZXJzXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldFNoYWRlcnMoaWQpIHtcbiAgICAgIHZhciBwcm9qZWN0TW9kdWxlID0gdGhpcy51c2U2NGJpdFByb2plY3Rpb24oKSA/ICdwcm9qZWN0NjQnIDogJ3Byb2plY3QzMic7XG4gICAgICByZXR1cm4ge1xuICAgICAgICB2czogdnMsXG4gICAgICAgIGZzOiBmcyxcbiAgICAgICAgbW9kdWxlczogW3Byb2plY3RNb2R1bGUsICdwaWNraW5nJ11cbiAgICAgIH07XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImluaXRpYWxpemVTdGF0ZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBpbml0aWFsaXplU3RhdGUoKSB7XG4gICAgICB0aGlzLmdldEF0dHJpYnV0ZU1hbmFnZXIoKS5hZGRJbnN0YW5jZWQoe1xuICAgICAgICBpbnN0YW5jZVBvc2l0aW9uczoge1xuICAgICAgICAgIHNpemU6IDMsXG4gICAgICAgICAgdHJhbnNpdGlvbjogdHJ1ZSxcbiAgICAgICAgICBhY2Nlc3NvcjogJ2dldFBvc2l0aW9uJ1xuICAgICAgICB9LFxuICAgICAgICBpbnN0YW5jZVBvc2l0aW9uczY0eHlMb3c6IHtcbiAgICAgICAgICBzaXplOiAyLFxuICAgICAgICAgIGFjY2Vzc29yOiAnZ2V0UG9zaXRpb24nLFxuICAgICAgICAgIHVwZGF0ZTogdGhpcy5jYWxjdWxhdGVJbnN0YW5jZVBvc2l0aW9uczY0eHlMb3dcbiAgICAgICAgfSxcbiAgICAgICAgaW5zdGFuY2VSYWRpdXM6IHtcbiAgICAgICAgICBzaXplOiAxLFxuICAgICAgICAgIHRyYW5zaXRpb246IHRydWUsXG4gICAgICAgICAgYWNjZXNzb3I6ICdnZXRSYWRpdXMnLFxuICAgICAgICAgIGRlZmF1bHRWYWx1ZTogMVxuICAgICAgICB9LFxuICAgICAgICBpbnN0YW5jZUZpbGxDb2xvcnM6IHtcbiAgICAgICAgICBzaXplOiA0LFxuICAgICAgICAgIHRyYW5zaXRpb246IHRydWUsXG4gICAgICAgICAgdHlwZTogNTEyMSxcbiAgICAgICAgICBhY2Nlc3NvcjogJ2dldEZpbGxDb2xvcicsXG4gICAgICAgICAgZGVmYXVsdFZhbHVlOiBbMCwgMCwgMCwgMjU1XVxuICAgICAgICB9LFxuICAgICAgICBpbnN0YW5jZUxpbmVDb2xvcnM6IHtcbiAgICAgICAgICBzaXplOiA0LFxuICAgICAgICAgIHRyYW5zaXRpb246IHRydWUsXG4gICAgICAgICAgdHlwZTogNTEyMSxcbiAgICAgICAgICBhY2Nlc3NvcjogJ2dldExpbmVDb2xvcicsXG4gICAgICAgICAgZGVmYXVsdFZhbHVlOiBbMCwgMCwgMCwgMjU1XVxuICAgICAgICB9LFxuICAgICAgICBpbnN0YW5jZUxpbmVXaWR0aHM6IHtcbiAgICAgICAgICBzaXplOiAxLFxuICAgICAgICAgIHRyYW5zaXRpb246IHRydWUsXG4gICAgICAgICAgYWNjZXNzb3I6ICdnZXRMaW5lV2lkdGgnLFxuICAgICAgICAgIGRlZmF1bHRWYWx1ZTogMVxuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwidXBkYXRlU3RhdGVcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gdXBkYXRlU3RhdGUoX3JlZikge1xuICAgICAgdmFyIHByb3BzID0gX3JlZi5wcm9wcyxcbiAgICAgICAgICBvbGRQcm9wcyA9IF9yZWYub2xkUHJvcHMsXG4gICAgICAgICAgY2hhbmdlRmxhZ3MgPSBfcmVmLmNoYW5nZUZsYWdzO1xuXG4gICAgICBfZ2V0KF9nZXRQcm90b3R5cGVPZihTY2F0dGVycGxvdExheWVyLnByb3RvdHlwZSksIFwidXBkYXRlU3RhdGVcIiwgdGhpcykuY2FsbCh0aGlzLCB7XG4gICAgICAgIHByb3BzOiBwcm9wcyxcbiAgICAgICAgb2xkUHJvcHM6IG9sZFByb3BzLFxuICAgICAgICBjaGFuZ2VGbGFnczogY2hhbmdlRmxhZ3NcbiAgICAgIH0pO1xuXG4gICAgICBpZiAocHJvcHMuZnA2NCAhPT0gb2xkUHJvcHMuZnA2NCkge1xuICAgICAgICB2YXIgZ2wgPSB0aGlzLmNvbnRleHQuZ2w7XG5cbiAgICAgICAgaWYgKHRoaXMuc3RhdGUubW9kZWwpIHtcbiAgICAgICAgICB0aGlzLnN0YXRlLm1vZGVsLmRlbGV0ZSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgbW9kZWw6IHRoaXMuX2dldE1vZGVsKGdsKVxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5nZXRBdHRyaWJ1dGVNYW5hZ2VyKCkuaW52YWxpZGF0ZUFsbCgpO1xuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJkcmF3XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGRyYXcoX3JlZjIpIHtcbiAgICAgIHZhciB1bmlmb3JtcyA9IF9yZWYyLnVuaWZvcm1zO1xuICAgICAgdmFyIHZpZXdwb3J0ID0gdGhpcy5jb250ZXh0LnZpZXdwb3J0O1xuICAgICAgdmFyIF90aGlzJHByb3BzID0gdGhpcy5wcm9wcyxcbiAgICAgICAgICByYWRpdXNTY2FsZSA9IF90aGlzJHByb3BzLnJhZGl1c1NjYWxlLFxuICAgICAgICAgIHJhZGl1c01pblBpeGVscyA9IF90aGlzJHByb3BzLnJhZGl1c01pblBpeGVscyxcbiAgICAgICAgICByYWRpdXNNYXhQaXhlbHMgPSBfdGhpcyRwcm9wcy5yYWRpdXNNYXhQaXhlbHMsXG4gICAgICAgICAgc3Ryb2tlZCA9IF90aGlzJHByb3BzLnN0cm9rZWQsXG4gICAgICAgICAgZmlsbGVkID0gX3RoaXMkcHJvcHMuZmlsbGVkLFxuICAgICAgICAgIGxpbmVXaWR0aFVuaXRzID0gX3RoaXMkcHJvcHMubGluZVdpZHRoVW5pdHMsXG4gICAgICAgICAgbGluZVdpZHRoU2NhbGUgPSBfdGhpcyRwcm9wcy5saW5lV2lkdGhTY2FsZSxcbiAgICAgICAgICBsaW5lV2lkdGhNaW5QaXhlbHMgPSBfdGhpcyRwcm9wcy5saW5lV2lkdGhNaW5QaXhlbHMsXG4gICAgICAgICAgbGluZVdpZHRoTWF4UGl4ZWxzID0gX3RoaXMkcHJvcHMubGluZVdpZHRoTWF4UGl4ZWxzO1xuICAgICAgdmFyIHdpZHRoTXVsdGlwbGllciA9IGxpbmVXaWR0aFVuaXRzID09PSAncGl4ZWxzJyA/IHZpZXdwb3J0LmRpc3RhbmNlU2NhbGVzLm1ldGVyc1BlclBpeGVsWzJdIDogMTtcbiAgICAgIHRoaXMuc3RhdGUubW9kZWwuc2V0VW5pZm9ybXMoT2JqZWN0LmFzc2lnbih7fSwgdW5pZm9ybXMsIHtcbiAgICAgICAgc3Ryb2tlZDogc3Ryb2tlZCA/IDEgOiAwLFxuICAgICAgICBmaWxsZWQ6IGZpbGxlZCxcbiAgICAgICAgcmFkaXVzU2NhbGU6IHJhZGl1c1NjYWxlLFxuICAgICAgICByYWRpdXNNaW5QaXhlbHM6IHJhZGl1c01pblBpeGVscyxcbiAgICAgICAgcmFkaXVzTWF4UGl4ZWxzOiByYWRpdXNNYXhQaXhlbHMsXG4gICAgICAgIGxpbmVXaWR0aFNjYWxlOiBsaW5lV2lkdGhTY2FsZSAqIHdpZHRoTXVsdGlwbGllcixcbiAgICAgICAgbGluZVdpZHRoTWluUGl4ZWxzOiBsaW5lV2lkdGhNaW5QaXhlbHMsXG4gICAgICAgIGxpbmVXaWR0aE1heFBpeGVsczogbGluZVdpZHRoTWF4UGl4ZWxzXG4gICAgICB9KSkuZHJhdygpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJfZ2V0TW9kZWxcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gX2dldE1vZGVsKGdsKSB7XG4gICAgICB2YXIgcG9zaXRpb25zID0gWy0xLCAtMSwgMCwgLTEsIDEsIDAsIDEsIDEsIDAsIDEsIC0xLCAwXTtcbiAgICAgIHJldHVybiBuZXcgTW9kZWwoZ2wsIE9iamVjdC5hc3NpZ24odGhpcy5nZXRTaGFkZXJzKCksIHtcbiAgICAgICAgaWQ6IHRoaXMucHJvcHMuaWQsXG4gICAgICAgIGdlb21ldHJ5OiBuZXcgR2VvbWV0cnkoe1xuICAgICAgICAgIGRyYXdNb2RlOiA2LFxuICAgICAgICAgIHZlcnRleENvdW50OiA0LFxuICAgICAgICAgIGF0dHJpYnV0ZXM6IHtcbiAgICAgICAgICAgIHBvc2l0aW9uczoge1xuICAgICAgICAgICAgICBzaXplOiAzLFxuICAgICAgICAgICAgICB2YWx1ZTogbmV3IEZsb2F0MzJBcnJheShwb3NpdGlvbnMpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9KSxcbiAgICAgICAgaXNJbnN0YW5jZWQ6IHRydWUsXG4gICAgICAgIHNoYWRlckNhY2hlOiB0aGlzLmNvbnRleHQuc2hhZGVyQ2FjaGVcbiAgICAgIH0pKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiY2FsY3VsYXRlSW5zdGFuY2VQb3NpdGlvbnM2NHh5TG93XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNhbGN1bGF0ZUluc3RhbmNlUG9zaXRpb25zNjR4eUxvdyhhdHRyaWJ1dGUsIF9yZWYzKSB7XG4gICAgICB2YXIgc3RhcnRSb3cgPSBfcmVmMy5zdGFydFJvdyxcbiAgICAgICAgICBlbmRSb3cgPSBfcmVmMy5lbmRSb3c7XG4gICAgICB2YXIgaXNGUDY0ID0gdGhpcy51c2U2NGJpdFBvc2l0aW9ucygpO1xuICAgICAgYXR0cmlidXRlLmNvbnN0YW50ID0gIWlzRlA2NDtcblxuICAgICAgaWYgKCFpc0ZQNjQpIHtcbiAgICAgICAgYXR0cmlidXRlLnZhbHVlID0gbmV3IEZsb2F0MzJBcnJheSgyKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB2YXIgX3RoaXMkcHJvcHMyID0gdGhpcy5wcm9wcyxcbiAgICAgICAgICBkYXRhID0gX3RoaXMkcHJvcHMyLmRhdGEsXG4gICAgICAgICAgZ2V0UG9zaXRpb24gPSBfdGhpcyRwcm9wczIuZ2V0UG9zaXRpb247XG4gICAgICB2YXIgdmFsdWUgPSBhdHRyaWJ1dGUudmFsdWUsXG4gICAgICAgICAgc2l6ZSA9IGF0dHJpYnV0ZS5zaXplO1xuICAgICAgdmFyIGkgPSBzdGFydFJvdyAqIHNpemU7XG5cbiAgICAgIHZhciBfY3JlYXRlSXRlcmFibGUgPSBjcmVhdGVJdGVyYWJsZShkYXRhLCBzdGFydFJvdywgZW5kUm93KSxcbiAgICAgICAgICBpdGVyYWJsZSA9IF9jcmVhdGVJdGVyYWJsZS5pdGVyYWJsZSxcbiAgICAgICAgICBvYmplY3RJbmZvID0gX2NyZWF0ZUl0ZXJhYmxlLm9iamVjdEluZm87XG5cbiAgICAgIHZhciBfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uID0gdHJ1ZTtcbiAgICAgIHZhciBfZGlkSXRlcmF0b3JFcnJvciA9IGZhbHNlO1xuICAgICAgdmFyIF9pdGVyYXRvckVycm9yID0gdW5kZWZpbmVkO1xuXG4gICAgICB0cnkge1xuICAgICAgICBmb3IgKHZhciBfaXRlcmF0b3IgPSBpdGVyYWJsZVtTeW1ib2wuaXRlcmF0b3JdKCksIF9zdGVwOyAhKF9pdGVyYXRvck5vcm1hbENvbXBsZXRpb24gPSAoX3N0ZXAgPSBfaXRlcmF0b3IubmV4dCgpKS5kb25lKTsgX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbiA9IHRydWUpIHtcbiAgICAgICAgICB2YXIgb2JqZWN0ID0gX3N0ZXAudmFsdWU7XG4gICAgICAgICAgb2JqZWN0SW5mby5pbmRleCsrO1xuICAgICAgICAgIHZhciBwb3NpdGlvbiA9IGdldFBvc2l0aW9uKG9iamVjdCwgb2JqZWN0SW5mbyk7XG4gICAgICAgICAgdmFsdWVbaSsrXSA9IGZwNjRMb3dQYXJ0KHBvc2l0aW9uWzBdKTtcbiAgICAgICAgICB2YWx1ZVtpKytdID0gZnA2NExvd1BhcnQocG9zaXRpb25bMV0pO1xuICAgICAgICB9XG4gICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgX2RpZEl0ZXJhdG9yRXJyb3IgPSB0cnVlO1xuICAgICAgICBfaXRlcmF0b3JFcnJvciA9IGVycjtcbiAgICAgIH0gZmluYWxseSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgaWYgKCFfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uICYmIF9pdGVyYXRvci5yZXR1cm4gIT0gbnVsbCkge1xuICAgICAgICAgICAgX2l0ZXJhdG9yLnJldHVybigpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgICBpZiAoX2RpZEl0ZXJhdG9yRXJyb3IpIHtcbiAgICAgICAgICAgIHRocm93IF9pdGVyYXRvckVycm9yO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBTY2F0dGVycGxvdExheWVyO1xufShMYXllcik7XG5cbmV4cG9ydCB7IFNjYXR0ZXJwbG90TGF5ZXIgYXMgZGVmYXVsdCB9O1xuU2NhdHRlcnBsb3RMYXllci5sYXllck5hbWUgPSAnU2NhdHRlcnBsb3RMYXllcic7XG5TY2F0dGVycGxvdExheWVyLmRlZmF1bHRQcm9wcyA9IGRlZmF1bHRQcm9wcztcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXNjYXR0ZXJwbG90LWxheWVyLmpzLm1hcCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/@deck.gl/layers/dist/esm/scatterplot-layer/scatterplot-layer.js\n");

/***/ })

}]);