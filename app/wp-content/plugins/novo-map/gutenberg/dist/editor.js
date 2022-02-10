/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/blocks/novo-map/edit.js":
/*!*************************************!*\
  !*** ./src/blocks/novo-map/edit.js ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _stores_novo_map_gmap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../stores/novo-map-gmap */ "./src/stores/novo-map-gmap/index.js");
/* harmony import */ var _components_gmap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/gmap */ "./src/components/gmap/index.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var _jsxFileName = "/home/bluisier/Documents/websites/novo-map-2/web/app/plugins/novo-map/gutenberg/src/blocks/novo-map/edit.js";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









var Edit = /*#__PURE__*/function (_Component) {
  _inherits(Edit, _Component);

  var _super = _createSuper(Edit);

  function Edit(props) {
    var _this;

    _classCallCheck(this, Edit);

    _this = _super.apply(this, arguments);

    _defineProperty(_assertThisInitialized(_this), "displayMap", function (id) {
      _this.props.setAttributes({
        currentMapId: parseInt(id)
      });
    });

    _defineProperty(_assertThisInitialized(_this), "onChangeWidth", function (width) {
      //check if it's any number followed by "px" or "%"
      if (/\d*(?:px|%)/i.test(width)) {
        var map = _this.state.currentMap;
        map.width = width;

        _this.props.setAttributes({
          width: width
        });

        _this.setState({
          currentMap: map
        });
      }
    });

    _defineProperty(_assertThisInitialized(_this), "onChangeHeight", function (height) {
      //check if it's any number followed by "px" or "%"
      if (/\d*px/i.test(height)) {
        var map = _this.state.currentMap;
        map.height = height;

        _this.props.setAttributes({
          height: height
        });

        _this.setState({
          currentMap: map
        });
      }
    });

    _defineProperty(_assertThisInitialized(_this), "onChangeZoom", function (zoom) {
      if (zoom) {
        var map = _this.state.currentMap;
        map.zoom = zoom;

        _this.props.setAttributes({
          zoom: parseInt(zoom)
        });

        _this.setState({
          currentMap: map
        });
      }
    });

    _defineProperty(_assertThisInitialized(_this), "onChangeLatitude", function (latitude) {
      if (latitude) {
        var map = _this.state.currentMap;
        map.latitude = latitude;

        _this.props.setAttributes({
          latitude: parseFloat(latitude)
        });

        _this.setState({
          currentMap: map
        });
      }
    });

    _defineProperty(_assertThisInitialized(_this), "onChangeLongitude", function (longitude) {
      if (longitude) {
        var map = _this.state.currentMap;
        map.longitude = longitude;

        _this.props.setAttributes({
          longitude: parseFloat(longitude)
        });

        _this.setState({
          currentMap: map
        });
      }
    });

    _defineProperty(_assertThisInitialized(_this), "onChangeTypeMenu", function (typeMenu) {
      var map = _this.state.currentMap;
      map.type_menu = typeMenu;

      _this.props.setAttributes({
        type_menu: typeMenu
      });

      _this.setState({
        currentMap: map
      });
    });

    _defineProperty(_assertThisInitialized(_this), "onChangeZoomButton", function (zoomButton) {
      var map = _this.state.currentMap;
      map.zoom_button = zoomButton;

      _this.props.setAttributes({
        zoom_button: zoomButton
      });

      _this.setState({
        currentMap: map
      });
    });

    var containerId = props.attributes.containerId; // set unique container ID on 1st load

    if (!containerId) {
      _this.props.setAttributes({
        containerId: Math.random().toString(36).substring(7)
      });
    }

    _this.state = {
      currentMap: {}
    };
    return _this;
  }

  _createClass(Edit, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (!Object.keys(prevProps.gmapList).length && Object.keys(this.props.gmapList).length) {
        this.setCurrentMap();
      }

      if (prevProps.attributes.currentMapId !== this.props.attributes.currentMapId) {
        this.setCurrentMap();
      }
    }
  }, {
    key: "setCurrentMap",
    value: function setCurrentMap() {
      var mapId = this.props.attributes.currentMapId;

      if (mapId > 0) {
        var gmapList = this.props.gmapList;
        var map = gmapList[mapId];
        var mapOptions = ['width', 'height', 'zoom', 'latitude', 'longitude', 'type_menu', 'zoom_button'];

        for (var atts in this.props.attributes) {
          if (mapOptions.includes(atts)) {
            map[atts] = this.props.attributes[atts];
          }
        }

        this.setState({
          currentMap: map
        });
      }
    }
  }, {
    key: "generateSelectOptions",
    value: function generateSelectOptions() {
      var gmapList = this.props.gmapList;
      var selectOptions = [{
        value: 0,
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Select a Novo-map', 'novo-map'),
        disabled: true
      }];

      for (var key in gmapList) {
        var gmap = gmapList[key];
        var option = {};
        option.value = gmap.id;
        option.label = gmap.name;
        selectOptions.push(option);
      }

      return selectOptions;
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          className = _this$props.className,
          attributes = _this$props.attributes,
          gmapList = _this$props.gmapList;
      var currentMapId = attributes.currentMapId,
          containerId = attributes.containerId; // return a Spinner while the maps are loading

      if (!Object.keys(gmapList).length) {
        return wp.element.createElement("div", {
          className: className,
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 168,
            columnNumber: 5
          }
        }, wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Spinner, {
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 169,
            columnNumber: 6
          }
        }), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Loading Maps', 'novo-map'));
      } // generate array of options for select menu


      var selectOptions = this.generateSelectOptions(); // display a map selector and a gmap if one is selected

      return wp.element.createElement(wp.element.Fragment, null, Object.keys(this.state.currentMap).length > 0 && wp.element.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__.InspectorControls, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 182,
          columnNumber: 6
        }
      }, wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
        title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Overwrite default map settings', 'novo-map'),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 183,
          columnNumber: 7
        }
      }, wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.TextControl, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Map width (in % or px)', 'novo-map'),
        placeholder: this.state.currentMap.width,
        onChange: this.onChangeWidth,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 189,
          columnNumber: 8
        }
      }), wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.TextControl, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Map height (in px)', 'novo-map'),
        placeholder: this.state.currentMap.height,
        onChange: this.onChangeHeight,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 197,
          columnNumber: 8
        }
      }), wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.RangeControl, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Map zoom', 'novo-map'),
        placeholder: this.state.currentMap.zoom,
        onChange: this.onChangeZoom,
        value: this.state.currentMap.zoom,
        min: 0,
        max: 20,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 202,
          columnNumber: 8
        }
      }), wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelRow, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 210,
          columnNumber: 8
        }
      }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Click on the map to prefill lat/long', 'novo-map')), wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.TextControl, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Center latitude', 'novo-map'),
        type: "number",
        step: "0.000001",
        id: 'novomap' + containerId + '-latitude',
        placeholder: this.state.currentMap.latitude,
        onChange: this.onChangeLatitude,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 216,
          columnNumber: 8
        }
      }), wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.TextControl, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Center longitude', 'novo-map'),
        type: "number",
        step: "0.000001",
        id: 'novomap' + containerId + '-longitude',
        placeholder: this.state.currentMap.longitude,
        onChange: this.onChangeLongitude,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 224,
          columnNumber: 8
        }
      }), wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.CheckboxControl, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Display Type control menu?', 'novo-map'),
        checked: this.state.currentMap.type_menu,
        onChange: this.onChangeTypeMenu,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 232,
          columnNumber: 8
        }
      }), wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.CheckboxControl, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Display Zoom button?', 'novo-map'),
        checked: this.state.currentMap.zoom_button,
        onChange: this.onChangeZoomButton,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 240,
          columnNumber: 8
        }
      }))), wp.element.createElement("div", {
        className: className,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 252,
          columnNumber: 5
        }
      }, wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.SelectControl, {
        value: currentMapId,
        onChange: this.displayMap,
        options: selectOptions,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 253,
          columnNumber: 6
        }
      }), Object.keys(this.state.currentMap).length > 0 && wp.element.createElement(_components_gmap__WEBPACK_IMPORTED_MODULE_6__.Gmap, {
        gmap: this.state.currentMap,
        containerId: containerId,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 259,
          columnNumber: 7
        }
      })));
    }
  }]);

  return Edit;
}(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Component);

/* harmony default export */ __webpack_exports__["default"] = ((0,_wordpress_data__WEBPACK_IMPORTED_MODULE_2__.withSelect)(function (select) {
  return {
    gmapList: select(_stores_novo_map_gmap__WEBPACK_IMPORTED_MODULE_5__.STORE_NAME).getGmapList()
  };
})(Edit));

/***/ }),

/***/ "./src/blocks/novo-map/index.js":
/*!**************************************!*\
  !*** ./src/blocks/novo-map/index.js ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_editor_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.editor.scss */ "./src/blocks/novo-map/style.editor.scss");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./edit */ "./src/blocks/novo-map/edit.js");
var _jsxFileName = "/home/bluisier/Documents/websites/novo-map-2/web/app/plugins/novo-map/gutenberg/src/blocks/novo-map/index.js";




var atts = {
  containerId: {
    type: 'string',
    default: ''
  },
  currentMapId: {
    type: 'number',
    default: 0
  },
  width: {
    type: 'string'
  },
  height: {
    type: 'string'
  },
  zoom: {
    type: 'number'
  },
  latitude: {
    type: 'number'
  },
  longitude: {
    type: 'number'
  },
  type_menu: {
    type: 'boolean'
  },
  zoom_button: {
    type: 'boolean'
  }
};
(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__.registerBlockType)('novo-map-blocks/novo-map', {
  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Novo-map Block', 'novo-map'),
  description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Insert a map in your post', 'novo-map'),
  category: 'widgets',
  icon: wp.element.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 512 512",
    width: "20",
    height: "20",
    fill: "#fff",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 3
    }
  }, wp.element.createElement("path", {
    d: "M176.748 182.811h0l-.013-.028zm-70.406 138.92v.013l.094-.451zm103.464-90.712l.014-.061.087-.417zm26.455 155.117l.021-.068z",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 4
    }
  }), wp.element.createElement("path", {
    d: "M357.053 208.842c-22.333 0-40.421 18.095-40.421 40.421s18.089 40.421 40.421 40.421c22.326 0 40.421-18.095 40.421-40.421s-18.095-40.421-40.421-40.421zm0 60.632c-11.143 0-20.211-9.068-20.211-20.211s9.068-20.211 20.211-20.211 20.211 9.068 20.211 20.211-9.068 20.211-20.211 20.211zM256 0c-38.589 0-75.102 8.656-107.911 23.956A88.08 88.08 0 0 0 87.58 0C39.289 0 .001 38.535.001 85.895c0 17.812 10.907 40.26 24.367 61.238C8.806 180.183.001 217.047.001 255.999.001 397.379 114.601 512 256 512s255.999-114.621 255.999-255.999S397.4 0 256 0zM20.212 85.895c0-36.292 30.174-65.684 67.368-65.684 37.201 0 67.368 29.393 67.368 65.684 0 36.271-67.368 109.474-67.368 109.474S20.212 122.166 20.212 85.895zm-.002 170.101a234.3 234.3 0 0 1 17.631-89.293c14.801 20.13 29.527 36.547 34.87 42.348l14.868 16.162 14.868-16.162c12.146-13.191 72.71-81.132 72.71-123.156 0-16.855-5.045-32.546-13.628-45.824a234.16 234.16 0 0 1 51.301-15.839l-5.478 9.849c-2.647 4.796-3.632 9.943-3.658 15.023.055 6.393 1.549 12.84 5.524 18.513l-.013-.013 15.366 21.585c.842 1.145 1.967 3.509 2.702 6.137.754 2.627 1.179 5.558 1.172 7.842.007 1.037-.087 1.947-.202 2.594l.007-.021-3.989 21.733c-.215 1.449-1.482 4.291-3.354 6.649-1.819 2.398-4.257 4.331-5.605 4.904l-27.021 12.47c-8.643 4.021-13.703 12.564-13.703 21.477 0 3.267.694 6.649 2.162 9.836l11.406 24.831c.593 1.266 1.273 3.469 1.725 5.922a42.95 42.95 0 0 1 .707 7.619c0 2.162-.209 4.136-.499 5.389l-.134.546-3.106 13.488c-.33 1.623-1.786 4.675-3.793 7.249-1.967 2.614-4.541 4.803-6.016 5.544l-19.962 10.591c-1.024.58-3.348 1.192-5.807 1.166-2.971.047-6.056-.89-7.209-1.704l-16.33-10.516c-5.423-3.429-11.426-4.709-17.381-4.749-5.48.034-11.041 1.131-16.158 4.123l-16.354 9.679c-3.146 1.852-5.801 4.412-7.653 7.485-1.846 3.065-2.857 6.629-2.85 10.206-.027 5.376 2.264 10.665 6.09 14.599l-.013-.013 9.155 9.552c.829.835 2.054 2.768 2.87 5.039.829 2.256 1.287 4.837 1.273 6.77a10.41 10.41 0 0 1-.182 2.075l-1.826 8.745c-.404 2.069-1.846 5.706-3.759 8.974-1.867 3.288-4.299 6.36-5.881 7.747l-8.28 7.424c-5.51 4.966-12.632 12.396-17.711 18.384A234.79 234.79 0 0 1 20.21 255.996zm169.406 186.412l-10.576 36.413c-48.843-16.916-90.464-49.408-118.825-91.581l2.944-3.638c3.989-4.951 12.214-13.581 17.145-17.981l8.273-7.424c3.928-3.557 7.141-7.95 9.903-12.698 2.721-4.769 4.911-9.754 6.03-14.929l1.839-8.839c.41-2.028.593-4.069.593-6.117-.007-4.709-.922-9.331-2.513-13.716-1.617-4.372-3.866-8.515-7.249-12.073l-9.176-9.573-.357-.485.485-.397 16.385-9.688c.977-.627 3.354-1.321 5.841-1.294 2.695-.034 5.383.788 6.447 1.536l16.317 10.51c5.646 3.564 11.918 4.877 18.155 4.924 5.174-.027 10.381-.956 15.279-3.517l19.962-10.591c5.079-2.742 9.129-6.656 12.577-11.088 3.396-4.48 6.13-9.412 7.458-15.023l3.261-14.174c.701-3.186.977-6.44.984-9.782-.007-3.759-.364-7.585-1.051-11.298-.694-3.719-1.684-7.296-3.227-10.678l-11.432-24.886-.289-1.34c0-1.307.761-2.6 1.96-3.126l27.029-12.47c5.376-2.534 9.599-6.413 13.089-10.867 3.449-4.493 6.151-9.552 7.262-15.394l3.996-21.748c.378-2.069.525-4.136.533-6.198-.013-4.507-.714-9.041-1.96-13.399-1.266-4.359-3.012-8.529-5.673-12.295l-15.367-21.591c-.843-1.064-1.812-3.961-1.765-6.763-.021-2.209.552-4.265 1.105-5.194l12.753-22.919c6.036-.485 12.099-.809 18.244-.809 117.208 0 214.683 85.975 232.751 198.17l-9.027-5.019c-3.739-2.062-7.774-3.409-11.999-4.386-4.224-.956-8.569-1.489-12.827-1.495-2.317 0-4.601.155-6.892.559l-1.867.33c-17.055-31.763-50.577-53.422-89.085-53.422-55.72 0-101.052 45.332-101.052 101.052 0 34.055 33.435 83.28 59.203 116.163l-15.421 17.341c-.922 1.092-3.274 2.802-5.962 3.921-2.661 1.172-5.659 1.799-7.451 1.772l-.64-.021-29.461-2.27-.741-.162-.034-.013v-.101l.094-.606.027-.074 5.255-17.509a25.84 25.84 0 0 0 1.058-7.398c-.013-4.796-1.219-9.384-3.354-13.528-2.143-4.123-5.276-7.882-9.573-10.597l-11.816-7.383c-4.049-2.526-8.577-3.679-12.982-3.672-7.505.013-15.017 3.274-19.975 9.822l-35.819 47.758a23.51 23.51 0 0 0-4.703 14.114c-.007 7.12 3.241 14.255 9.418 18.896l13.103 9.822c.72.519 1.765 1.738 2.479 3.335.741 1.576 1.152 3.469 1.139 4.924a7.07 7.07 0 0 1-.235 1.877zm248.28-186.401c0 44.632-80.842 134.73-80.842 134.73s-80.842-90.099-80.842-134.73c0-44.665 36.19-80.843 80.842-80.843 44.645 0 80.842 36.177 80.842 80.843zM256 491.789c-19.86 0-39.154-2.5-57.593-7.148l10.624-36.615c.72-2.513 1.03-5.026 1.03-7.492-.013-4.696-1.077-9.216-2.999-13.393-1.933-4.157-4.722-8.031-8.711-11.041l-13.097-9.822c-.862-.64-1.321-1.631-1.327-2.721.007-.735.202-1.387.654-1.988l35.827-47.764c.66-.95 2.224-1.752 3.8-1.731.909 0 1.684.236 2.27.599l11.81 7.383c.694.418 1.657 1.408 2.351 2.762.701 1.34 1.098 2.971 1.085 4.224a5.68 5.68 0 0 1-.209 1.589l-5.234 17.462a22.17 22.17 0 0 0-.99 6.534c-.021 5.2 1.98 10.348 5.571 14.06 3.571 3.753 8.596 5.988 13.871 6.373l29.461 2.27c.735.055 1.462.081 2.19.081 5.416-.027 10.584-1.347 15.455-3.422 4.851-2.115 9.371-4.951 13.063-9.047l13.191-14.848c6.164 7.398 11.136 13.036 13.925 16.141l15.037 16.761 15.037-16.768c14.37-16.007 86.016-98.378 86.016-148.224 0-9.822-1.476-19.295-4.102-28.281.303-.007.573-.034.896-.034 2.5-.007 5.557.35 8.341.984 2.776.62 5.308 1.57 6.67 2.345l21.498 11.944c.242 4.325.384 8.664.384 13.036C491.79 386.013 386.014 491.789 256 491.789z",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 4
    }
  }), wp.element.createElement("path", {
    d: "M94.172 252.312l.011-.006.002-.001zM89.256 47.151c-18.614 0-33.677 15.07-33.677 33.684 0 18.607 15.064 33.684 33.678 33.684s33.69-15.077 33.69-33.684-15.077-33.684-33.691-33.684zm.001 47.157c-7.431.007-13.467-6.043-13.467-13.473s6.036-13.473 13.467-13.473c7.438 0 13.48 6.043 13.48 13.473a13.49 13.49 0 0 1-13.48 13.473z",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 4
    }
  })),
  keywords: [(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('map', 'novo-map'), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('novo-map', 'novo-map')],
  attributes: atts,
  edit: _edit__WEBPACK_IMPORTED_MODULE_3__.default,
  save: function save() {
    return null;
  }
});

/***/ }),

/***/ "./src/components/gmap/index.js":
/*!**************************************!*\
  !*** ./src/components/gmap/index.js ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Gmap": function() { return /* binding */ Gmap; }
/* harmony export */ });
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/api-fetch */ "@wordpress/api-fetch");
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/home/bluisier/Documents/websites/novo-map-2/web/app/plugins/novo-map/gutenberg/src/components/gmap/index.js";



function createScript(containerId, scriptContent) {
  var s = document.createElement('script');
  s.type = 'text/javascript';
  s.id = containerId;
  s.async = true;
  s.innerHTML = scriptContent;
  document.body.appendChild(s);
}

function creatStyle(containerId, styleContent) {
  var s = document.createElement('style');
  s.id = containerId;
  s.innerHTML = styleContent;
  document.body.appendChild(s);
}

function createApiPath(gmap, containerId) {
  var apiPath = '/novo-map/v1/gmap-script-css/';
  apiPath += gmap.id + '/';
  apiPath += containerId + '/';
  apiPath += gmap.zoom + '/';
  apiPath += gmap.latitude + '/';
  apiPath += gmap.longitude + '/';
  apiPath += gmap.type_menu + '/';
  apiPath += gmap.zoom_button;
  return apiPath;
}

function addGmapScriptCss(gmap, containerId) {
  var apiPath = createApiPath(gmap, containerId);
  _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_0___default()({
    path: apiPath
  }).then(function (gmapScriptCss) {
    var gmapInitName = 'initialize_novomap' + containerId;
    var scriptId = containerId + '-script';
    var gmapInit = window[gmapInitName]; //add all necessary style for the infoboxes

    gmapScriptCss.css.forEach(function (style, index) {
      var styleId = containerId + '-style-' + index;

      if (!!document.getElementById(styleId)) {
        document.getElementById(styleId).remove();
        creatStyle(styleId, style);
      } else {
        creatStyle(styleId, style);
      }
    }); //add the gmap script

    if (typeof gmapInit === 'undefined') {
      createScript(scriptId, gmapScriptCss.script);
      gmapInit = window[gmapInitName];
      gmapInit();
    } else {
      document.getElementById(scriptId).remove(); //console.log( gmapScriptCss.script );

      createScript(scriptId, gmapScriptCss.script);
      gmapInit = window[gmapInitName];
      gmapInit();
    }
  }).catch(function (error) {
    console.log('error', error);
  });
}

function Gmap(_ref) {
  var _ref$gmap = _ref.gmap,
      gmap = _ref$gmap === void 0 ? null : _ref$gmap,
      containerId = _ref.containerId;
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    addGmapScriptCss(gmap, containerId);
  }, [gmap.id, gmap.zoom, gmap.latitude, gmap.longitude, gmap.type_menu, gmap.zoom_button]);
  return wp.element.createElement("div", {
    className: "novo-map-container-admin",
    id: 'novomap' + containerId,
    style: {
      width: gmap.width,
      height: gmap.height
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 3
    }
  });
}



/***/ }),

/***/ "./src/editor.js":
/*!***********************!*\
  !*** ./src/editor.js ***!
  \***********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _blocks_novo_map__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./blocks/novo-map */ "./src/blocks/novo-map/index.js");


/***/ }),

/***/ "./src/stores/novo-map-gmap/index.js":
/*!*******************************************!*\
  !*** ./src/stores/novo-map-gmap/index.js ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "STORE_NAME": function() { return /* binding */ STORE_NAME; }
/* harmony export */ });
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/api-fetch */ "@wordpress/api-fetch");
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_1__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



var DEFAULT_STATE = {
  gmapList: {}
};
var STORE_NAME = 'novo-map-blocks/gmap';
var actions = {
  setGmapList: function setGmapList(gmapList) {
    return {
      type: 'SET_GMAP_LIST',
      gmapList: gmapList
    };
  },
  getGmapList: function getGmapList(path) {
    return {
      type: 'GET_GMAP_LIST',
      path: path
    };
  }
};

var reducer = function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : DEFAULT_STATE;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case 'SET_GMAP_LIST':
      {
        return _objectSpread(_objectSpread({}, state), {}, {
          gmapList: action.gmapList
        });
      }

    default:
      {
        return state;
      }
  }
};

var selectors = {
  getGmapList: function getGmapList(state) {
    var gmapList = state.gmapList;
    return gmapList;
  }
};
var controls = {
  GET_GMAP_LIST: function GET_GMAP_LIST(action) {
    return _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_0___default()({
      path: action.path
    });
  }
};
var resolvers = {
  getGmapList: /*#__PURE__*/regeneratorRuntime.mark(function getGmapList() {
    var gmapList;
    return regeneratorRuntime.wrap(function getGmapList$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return actions.getGmapList('/novo-map/v1/gmap-list/');

          case 2:
            gmapList = _context.sent;
            return _context.abrupt("return", actions.setGmapList(gmapList));

          case 4:
          case "end":
            return _context.stop();
        }
      }
    }, getGmapList);
  })
};
var storeConfig = {
  reducer: reducer,
  controls: controls,
  selectors: selectors,
  resolvers: resolvers,
  actions: actions
};
(0,_wordpress_data__WEBPACK_IMPORTED_MODULE_1__.registerStore)(STORE_NAME, storeConfig);


/***/ }),

/***/ "./src/blocks/novo-map/style.editor.scss":
/*!***********************************************!*\
  !*** ./src/blocks/novo-map/style.editor.scss ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "@wordpress/api-fetch":
/*!**********************************!*\
  !*** external ["wp","apiFetch"] ***!
  \**********************************/
/***/ (function(module) {

module.exports = wp.apiFetch;

/***/ }),

/***/ "@wordpress/block-editor":
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
/***/ (function(module) {

module.exports = wp.blockEditor;

/***/ }),

/***/ "@wordpress/blocks":
/*!********************************!*\
  !*** external ["wp","blocks"] ***!
  \********************************/
/***/ (function(module) {

module.exports = wp.blocks;

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/***/ (function(module) {

module.exports = wp.components;

/***/ }),

/***/ "@wordpress/data":
/*!******************************!*\
  !*** external ["wp","data"] ***!
  \******************************/
/***/ (function(module) {

module.exports = wp.data;

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/***/ (function(module) {

module.exports = wp.element;

/***/ }),

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/***/ (function(module) {

module.exports = wp.i18n;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/editor.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;
//# sourceMappingURL=editor.js.map