System.register(["jimu-core","jimu-ui"], function(__WEBPACK_DYNAMIC_EXPORT__, __system_context__) {
	var __WEBPACK_EXTERNAL_MODULE_jimu_core__ = {};
	var __WEBPACK_EXTERNAL_MODULE_jimu_ui__ = {};
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_core__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_ui__, "__esModule", { value: true });
	return {
		setters: [
			function(module) {
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_jimu_core__[key] = module[key];
				});
			},
			function(module) {
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_jimu_ui__[key] = module[key];
				});
			}
		],
		execute: function() {
			__WEBPACK_DYNAMIC_EXPORT__(
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./your-extensions/widgets/web-token-button/src/config.ts":
/*!****************************************************************!*\
  !*** ./your-extensions/widgets/web-token-button/src/config.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   IconPosition: () => (/* binding */ IconPosition)
/* harmony export */ });
var IconPosition;
(function (IconPosition) {
    IconPosition["Left"] = "LEFT";
    IconPosition["Right"] = "RIGHT";
})(IconPosition || (IconPosition = {}));


/***/ }),

/***/ "./your-extensions/widgets/web-token-button/src/runtime/style.ts":
/*!***********************************************************************!*\
  !*** ./your-extensions/widgets/web-token-button/src/runtime/style.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getStyle: () => (/* binding */ getStyle)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");

function getStyle(theme) {
    return (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.css) `
    &>a {
      display: flex !important;
      justify-content: center;
    }

    .auto-size-icon {
      line-height: 1;
    }
    .widget-button-text{
        width: 100%;
        height: 100%;
    }
  `;
}


/***/ }),

/***/ "./your-extensions/widgets/web-token-button/src/version-manager.ts":
/*!*************************************************************************!*\
  !*** ./your-extensions/widgets/web-token-button/src/version-manager.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   versionManager: () => (/* binding */ versionManager)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var jimu_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jimu-ui */ "jimu-ui");


class VersionManager extends jimu_core__WEBPACK_IMPORTED_MODULE_0__.BaseVersionManager {
    constructor() {
        super(...arguments);
        this.versions = [{
                version: '1.0.0',
                description: 'The first release.',
                upgrader: (oldConfig) => {
                    let newConfig = oldConfig;
                    if (newConfig.getIn(['styleConfig', 'name'])) {
                        newConfig = newConfig.set('styleConfig', newConfig.styleConfig.without('name'));
                    }
                    if (newConfig.getIn(['styleConfig', 'customStyle'])) {
                        newConfig = newConfig.set('styleConfig', newConfig.styleConfig.without('customStyle'));
                    }
                    if (newConfig.getIn(['styleConfig', 'themeStyle', 'quickStyleType'])) {
                        newConfig = newConfig.setIn(['styleConfig', 'themeStyle'], { quickStyleType: newConfig.styleConfig.themeStyle.quickStyleType });
                    }
                    newConfig = newConfig.setIn(['styleConfig', 'useCustom'], false);
                    return newConfig;
                }
            }, {
                version: '1.1.0',
                description: '1.1.0',
                upgrader: (oldConfig) => {
                    let newConfig = oldConfig;
                    if (newConfig.getIn(['styleConfig', 'useCustom']) && newConfig.getIn(['styleConfig', 'customStyle', 'regular', 'border', 'width'])) {
                        newConfig = newConfig.setIn(['styleConfig', 'customStyle', 'regular', 'border', 'width'], jimu_ui__WEBPACK_IMPORTED_MODULE_1__.utils.stringOfLinearUnit(newConfig.getIn(['styleConfig', 'customStyle', 'regular', 'border', 'width'])));
                    }
                    if (newConfig.getIn(['styleConfig', 'useCustom']) && newConfig.getIn(['styleConfig', 'customStyle', 'hover', 'border', 'width'])) {
                        newConfig = newConfig.setIn(['styleConfig', 'customStyle', 'hover', 'border', 'width'], jimu_ui__WEBPACK_IMPORTED_MODULE_1__.utils.stringOfLinearUnit(newConfig.getIn(['styleConfig', 'customStyle', 'hover', 'border', 'width'])));
                    }
                    return newConfig;
                }
            }, {
                version: '1.12.0',
                description: 'fix icon picker config',
                upgrader: (oldConfig) => {
                    let newConfig = oldConfig;
                    if (newConfig.getIn(['functionConfig', 'icon', 'data'])) {
                        const iconResult = {
                            svg: newConfig.getIn(['functionConfig', 'icon', 'data']),
                            properties: {
                                filename: ''
                            }
                        };
                        newConfig = newConfig.setIn(['functionConfig', 'icon', 'data'], iconResult);
                    }
                    return newConfig;
                }
            }];
    }
}
const versionManager = new VersionManager();


/***/ }),

/***/ "jimu-core":
/*!****************************!*\
  !*** external "jimu-core" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_jimu_core__;

/***/ }),

/***/ "jimu-ui":
/*!**************************!*\
  !*** external "jimu-ui" ***!
  \**************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_jimu_ui__;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
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
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "";
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other entry modules.
(() => {
/*!******************************************!*\
  !*** ./jimu-core/lib/set-public-path.ts ***!
  \******************************************/
/**
 * Webpack will replace __webpack_public_path__ with __webpack_require__.p to set the public path dynamically.
 * The reason why we can't set the publicPath in webpack config is: we change the publicPath when download.
 * */
__webpack_require__.p = window.jimuConfig.baseUrl;

})();

// This entry needs to be wrapped in an IIFE because it needs to be in strict mode.
(() => {
"use strict";
/*!*************************************************************************!*\
  !*** ./your-extensions/widgets/web-token-button/src/runtime/widget.tsx ***!
  \*************************************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   __set_webpack_public_path__: () => (/* binding */ __set_webpack_public_path__),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var jimu_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jimu-ui */ "jimu-ui");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../config */ "./your-extensions/widgets/web-token-button/src/config.ts");
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style */ "./your-extensions/widgets/web-token-button/src/runtime/style.ts");
/* harmony import */ var _version_manager__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../version-manager */ "./your-extensions/widgets/web-token-button/src/version-manager.ts");
/** @jsx jsx */





class WebTokenButton extends jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.PureComponent {
    constructor(props) {
        var _a, _b, _c, _d, _e;
        super(props);
        this.lastClickTimestamp = null;
        this.getTextFromProps = () => {
            var _a, _b, _c, _d;
            return typeof ((_b = (_a = this.props.config) === null || _a === void 0 ? void 0 : _a.functionConfig) === null || _b === void 0 ? void 0 : _b.text) === 'string'
                ? (_d = (_c = this.props.config) === null || _c === void 0 ? void 0 : _c.functionConfig) === null || _d === void 0 ? void 0 : _d.text
                : this.props.intl.formatMessage({ id: 'variableButton', defaultMessage: jimu_ui__WEBPACK_IMPORTED_MODULE_1__.defaultMessages.variableButton });
        };
        this.getTipExpression = () => {
            var _a, _b;
            return (this.props.config && this.props.config.functionConfig && this.props.config.functionConfig.toolTipExpression &&
                this.props.config.functionConfig.toolTipExpression) ||
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.Immutable)({
                    name: '',
                    parts: [{ type: jimu_core__WEBPACK_IMPORTED_MODULE_0__.ExpressionPartType.String, exp: `"${((_b = (_a = this.props.config) === null || _a === void 0 ? void 0 : _a.functionConfig) === null || _b === void 0 ? void 0 : _b.toolTip) || ''}"` }]
                });
        };
        this.getTextExpression = () => {
            var _a, _b;
            return (this.props.config && this.props.config.functionConfig && this.props.config.functionConfig.textExpression &&
                this.props.config.functionConfig.textExpression) ||
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.Immutable)({
                    name: '',
                    parts: [{ type: jimu_core__WEBPACK_IMPORTED_MODULE_0__.ExpressionPartType.String, exp: `"${((_b = (_a = this.props.config) === null || _a === void 0 ? void 0 : _a.functionConfig) === null || _b === void 0 ? void 0 : _b.text) || this.getTextFromProps()}"` }]
                });
        };
        this.getUrlExpression = () => {
            const expression = this.props.config && this.props.config.functionConfig && this.props.config.functionConfig.linkParam &&
                this.props.config.functionConfig.linkParam && this.props.config.functionConfig.linkParam.expression;
            return expression || null;
        };
        this.onTextExpResolveChange = result => {
            if (result.isSuccessful) {
                this.setState({ text: result.value });
            }
            else {
                let res = '';
                const errorCode = result.value;
                if (errorCode === jimu_core__WEBPACK_IMPORTED_MODULE_0__.ExpressionResolverErrorCode.Failed) {
                    res = this.state.textExpression && this.state.textExpression.name;
                }
                this.setState({ text: res });
            }
        };
        this.onTipExpResolveChange = result => {
            if (result.isSuccessful) {
                this.setState({ toolTip: result.value });
            }
            else {
                this.setState({ toolTip: '' });
            }
        };
        this.onUrlExpResolveChange = result => {
            if (result.isSuccessful) {
                this.setState({ url: result.value });
            }
            else {
                let res = '';
                const errorCode = result.value;
                if (errorCode === jimu_core__WEBPACK_IMPORTED_MODULE_0__.ExpressionResolverErrorCode.Failed) {
                    res = this.state.urlExpression && this.state.urlExpression.name;
                }
                this.setState({ url: res });
            }
        };
        this.getWhetherUseQuickStyle = (config) => {
            return !!(config && config.styleConfig && config.styleConfig.themeStyle && config.styleConfig.themeStyle.quickStyleType);
        };
        this.getIconStyle = (regularIconProps, hoverIconProps) => {
            const r = regularIconProps || {};
            const h = hoverIconProps || {};
            return (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.css) `
      & img, & svg{
        color: ${r.color};
        fill: ${r.color};
        width: ${r.size}${jimu_ui__WEBPACK_IMPORTED_MODULE_1__.DistanceUnits.PIXEL};
        height: ${r.size}${jimu_ui__WEBPACK_IMPORTED_MODULE_1__.DistanceUnits.PIXEL};
      }
      &:hover{
        img, svg{
          color: ${h.color};
          fill: ${h.color};
          width: ${h.size}${jimu_ui__WEBPACK_IMPORTED_MODULE_1__.DistanceUnits.PIXEL};
          height: ${h.size}${jimu_ui__WEBPACK_IMPORTED_MODULE_1__.DistanceUnits.PIXEL};
        }
      }
    `;
        };
        this.removeUndefinedStyle = (style) => {
            if (!style) {
                return style;
            }
            const removedUndefinedStyle = {};
            Object.keys(style).forEach(styleName => {
                if ((typeof style[styleName] === 'string' && !style[styleName].includes('undefined')) ||
                    typeof style[styleName] === 'number') {
                    removedUndefinedStyle[styleName] = style[styleName];
                }
            });
            return removedUndefinedStyle;
        };
        this.getLinkComponent = () => {
            var _a, _b, _c;
            const config = this.props.config;
            const linkParam = config.functionConfig.linkParam;
            const text = this.state.text;
            const title = this.state.toolTip;
            const iconProperty = (_c = (_b = (_a = config.functionConfig) === null || _a === void 0 ? void 0 : _a.icon) === null || _b === void 0 ? void 0 : _b.data) === null || _c === void 0 ? void 0 : _c.properties;
            const iconName = (iconProperty === null || iconProperty === void 0 ? void 0 : iconProperty.isUploaded) ? iconProperty === null || iconProperty === void 0 ? void 0 : iconProperty.originalName : iconProperty === null || iconProperty === void 0 ? void 0 : iconProperty.filename;
            let accessibilityLabel = this.state.toolTip || text || iconName;
            let customStyle;
            let iconStyle;
            if (config.styleConfig && config.styleConfig.customStyle) {
                const regular = config.styleConfig.customStyle.regular;
                const hover = config.styleConfig.customStyle.hover;
                if (config.styleConfig.useCustom) {
                    const style = jimu_ui__WEBPACK_IMPORTED_MODULE_1__.styleUtils.toCSSStyle(regular && regular.without('iconProps').asMutable({ deep: true }));
                    const originalHoverStyle = jimu_ui__WEBPACK_IMPORTED_MODULE_1__.styleUtils.toCSSStyle(hover && hover.without('iconProps').asMutable({ deep: true }));
                    const hoverStyle = Object.assign(Object.assign({}, style), originalHoverStyle);
                    if (this.props.active && this.props.appMode !== jimu_core__WEBPACK_IMPORTED_MODULE_0__.AppMode.Run) {
                        const widgetState = (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.getAppStore)().getState().widgetsState[this.props.id] || (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.Immutable)({});
                        customStyle = {
                            style: widgetState.isConfiguringHover
                                ? Object.assign(Object.assign({}, this.removeUndefinedStyle(style)), this.removeUndefinedStyle(hoverStyle)) : style,
                            hoverStyle
                        };
                        iconStyle = this.getIconStyle(widgetState.isConfiguringHover ? Object.assign(Object.assign({}, regular === null || regular === void 0 ? void 0 : regular.iconProps), hover === null || hover === void 0 ? void 0 : hover.iconProps) : regular === null || regular === void 0 ? void 0 : regular.iconProps, hover === null || hover === void 0 ? void 0 : hover.iconProps);
                    }
                    else {
                        customStyle = {
                            style,
                            hoverStyle
                        };
                        iconStyle = this.getIconStyle(regular && regular.iconProps, hover && hover.iconProps);
                    }
                }
            }
            const useQuickStyle = this.getWhetherUseQuickStyle(config);
            const themeStyle = useQuickStyle
                ? {
                    type: config.styleConfig.themeStyle.quickStyleType
                }
                : {
                    type: 'default'
                };
            const basicClassNames = 'widget-button-link text-truncate w-100 h-100 p-0 d-flex align-items-center justify-content-center';
            let queryObject;
            let target;
            let linkTo;
            if (linkParam && linkParam.linkType) {
                target = linkParam.openType;
                linkTo = {
                    linkType: linkParam.linkType
                };
                if (linkParam.linkType === jimu_core__WEBPACK_IMPORTED_MODULE_0__.LinkType.WebAddress) {
                    linkTo.value = this.state.url;
                }
                else {
                    linkTo.value = linkParam.value;
                    queryObject = this.props.queryObject;
                }
            }
            const icon = config.functionConfig.icon;
            const isRTL = this.props.isRTL;
            const leftIcon = icon && (!icon.position || icon.position === _config__WEBPACK_IMPORTED_MODULE_2__.IconPosition.Left) && (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Icon, { icon: icon.data.svg, className: (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.classNames)({ 'mr-2 ml-0': !!text && !isRTL, 'ml-2 mr-0': !!text && isRTL, 'mx-0': !text }), "aria-hidden": true });
            const rightIcon = icon && icon.position && icon.position === _config__WEBPACK_IMPORTED_MODULE_2__.IconPosition.Right && (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Icon, { icon: icon.data.svg, className: (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.classNames)({ 'ml-2 mr-0': !!text && !isRTL, 'mr-2 ml-0': !!text && isRTL, 'mx-0': !text }), "aria-hidden": true });
            if (target === '_blank') {
                accessibilityLabel = `${accessibilityLabel}, ${this.props.intl.formatMessage({ id: 'openInNewWindow' })}`;
            }
            const autoSize = this.props.autoWidth && this.props.autoHeight;
            const isIcon = icon && !text;
            return (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Link, Object.assign({ to: linkTo, target: target, queryObject: queryObject, title: title, className: basicClassNames, role: 'button', customStyle: customStyle }, themeStyle, { css: iconStyle, "aria-label": accessibilityLabel }),
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { className: (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.classNames)('widget-button-text d-flex align-items-center justify-content-center', { 'auto-size-icon': autoSize && isIcon }) },
                    isRTL ? rightIcon : leftIcon,
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { className: 'text-truncate' }, text),
                    isRTL ? leftIcon : rightIcon));
        };
        this.onClick = e => {
            const timestamp = (new Date()).getTime();
            // in case that both click and touchend be triggered in iOS
            if (this.lastClickTimestamp && timestamp - this.lastClickTimestamp < 200)
                return;
            this.lastClickTimestamp = timestamp;
            e.exbEventType = 'linkClick';
            jimu_core__WEBPACK_IMPORTED_MODULE_0__.MessageManager.getInstance().publishMessage(new jimu_core__WEBPACK_IMPORTED_MODULE_0__.ButtonClickMessage(this.props.id));
        };
        this.state = {
            text: this.getTextFromProps(),
            toolTip: ((_b = (_a = this.props.config) === null || _a === void 0 ? void 0 : _a.functionConfig) === null || _b === void 0 ? void 0 : _b.toolTip) || '',
            url: ((_e = (_d = (_c = this.props.config) === null || _c === void 0 ? void 0 : _c.functionConfig) === null || _d === void 0 ? void 0 : _d.linkParam) === null || _e === void 0 ? void 0 : _e.value) || '',
            textExpression: this.props.useDataSourcesEnabled && this.getTextExpression(),
            tipExpression: this.props.useDataSourcesEnabled && this.getTipExpression(),
            urlExpression: this.props.useDataSourcesEnabled && this.getUrlExpression()
        };
        this.domNode = jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createRef();
    }
    componentDidUpdate(prevProps, prevState) {
        if (!this.props.useDataSourcesEnabled &&
            (this.props.config !== prevProps.config || prevProps.useDataSourcesEnabled)) {
            this.setState({
                text: this.getTextFromProps(),
                toolTip: this.props.config && this.props.config.functionConfig && this.props.config.functionConfig.toolTip,
                url: this.props.config && this.props.config.functionConfig && this.props.config.functionConfig.linkParam && this.props.config.functionConfig.linkParam.value
            });
        }
        if (this.props.useDataSourcesEnabled &&
            (this.props.config !== prevProps.config || !prevProps.useDataSourcesEnabled)) {
            this.setState({
                textExpression: this.getTextExpression(),
                tipExpression: this.getTipExpression(),
                urlExpression: this.getUrlExpression()
            });
        }
    }
    render() {
        const isDataSourceUsed = this.props.useDataSourcesEnabled;
        const LinkComponent = this.getLinkComponent();
        return ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: "jimu-widget widget-button w-100 h-100", css: (0,_style__WEBPACK_IMPORTED_MODULE_3__.getStyle)(this.props.theme), ref: this.domNode, onClick: this.onClick, onTouchEnd: this.onClick, onKeyUp: evt => {
                if (evt.key === ' ' || evt.key === 'Enter') {
                    this.onClick(evt);
                }
            } },
            LinkComponent,
            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { style: { display: 'none' } }, isDataSourceUsed &&
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", null,
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_core__WEBPACK_IMPORTED_MODULE_0__.ExpressionResolverComponent, { useDataSources: this.props.useDataSources, expression: this.state.textExpression, onChange: this.onTextExpResolveChange, widgetId: this.props.id }),
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_core__WEBPACK_IMPORTED_MODULE_0__.ExpressionResolverComponent, { useDataSources: this.props.useDataSources, expression: this.state.tipExpression, onChange: this.onTipExpResolveChange, widgetId: this.props.id }),
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_core__WEBPACK_IMPORTED_MODULE_0__.ExpressionResolverComponent, { useDataSources: this.props.useDataSources, expression: this.state.urlExpression, onChange: this.onUrlExpResolveChange, widgetId: this.props.id })))));
    }
}
WebTokenButton.mapExtraStateProps = (state, ownProps) => {
    var _a;
    let selected = false;
    const selection = state.appRuntimeInfo.selection;
    if (selection && state.appConfig.layouts[selection.layoutId]) {
        const layoutItem = state.appConfig.layouts[selection.layoutId].content[selection.layoutItemId];
        selected = layoutItem && layoutItem.widgetId === ownProps.id;
    }
    const isInBuilder = state.appContext.isInBuilder;
    const active = isInBuilder && selected;
    return {
        active,
        appMode: state.appRuntimeInfo.appMode,
        queryObject: state.queryObject,
        isRTL: state.appContext.isRTL,
        browserSizeMode: state.browserSizeMode,
        uri: (_a = state.appConfig.widgets[ownProps.id]) === null || _a === void 0 ? void 0 : _a.uri
    };
};
WebTokenButton.versionManager = _version_manager__WEBPACK_IMPORTED_MODULE_4__.versionManager;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (WebTokenButton);
function __set_webpack_public_path__(url) { __webpack_require__.p = url; }

})();

/******/ 	return __webpack_exports__;
/******/ })()

			);
		}
	};
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy93ZWItdG9rZW4tYnV0dG9uL2Rpc3QvcnVudGltZS93aWRnZXQuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXdCQSxJQUFZLFlBR1g7QUFIRCxXQUFZLFlBQVk7SUFDdEIsNkJBQWE7SUFDYiwrQkFBZTtBQUNqQixDQUFDLEVBSFcsWUFBWSxLQUFaLFlBQVksUUFHdkI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDM0I0RTtBQUV0RSxTQUFTLFFBQVEsQ0FBRSxLQUF1QjtJQUMvQyxPQUFPLDhDQUFHOzs7Ozs7Ozs7Ozs7O0dBYVQ7QUFDSCxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqQjhEO0FBQ3JCO0FBRTFDLE1BQU0sY0FBZSxTQUFRLHlEQUFrQjtJQUEvQzs7UUFDRSxhQUFRLEdBQUcsQ0FBQztnQkFDVixPQUFPLEVBQUUsT0FBTztnQkFDaEIsV0FBVyxFQUFFLG9CQUFvQjtnQkFDakMsUUFBUSxFQUFFLENBQUMsU0FBUyxFQUFFLEVBQUU7b0JBQ3RCLElBQUksU0FBUyxHQUFHLFNBQVM7b0JBRXpCLElBQUksU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDLGFBQWEsRUFBRSxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUM7d0JBQzdDLFNBQVMsR0FBRyxTQUFTLENBQUMsR0FBRyxDQUFDLGFBQWEsRUFBRSxTQUFTLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQztvQkFDakYsQ0FBQztvQkFFRCxJQUFJLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxhQUFhLEVBQUUsYUFBYSxDQUFDLENBQUMsRUFBRSxDQUFDO3dCQUNwRCxTQUFTLEdBQUcsU0FBUyxDQUFDLEdBQUcsQ0FBQyxhQUFhLEVBQUUsU0FBUyxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLENBQUM7b0JBQ3hGLENBQUM7b0JBRUQsSUFBSSxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUMsYUFBYSxFQUFFLFlBQVksRUFBRSxnQkFBZ0IsQ0FBQyxDQUFDLEVBQUUsQ0FBQzt3QkFDckUsU0FBUyxHQUFHLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxhQUFhLEVBQUUsWUFBWSxDQUFDLEVBQUUsRUFBRSxjQUFjLEVBQUUsU0FBUyxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUMsY0FBYyxFQUFFLENBQUM7b0JBQ2pJLENBQUM7b0JBRUQsU0FBUyxHQUFHLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxhQUFhLEVBQUUsV0FBVyxDQUFDLEVBQUUsS0FBSyxDQUFDO29CQUVoRSxPQUFPLFNBQVM7Z0JBQ2xCLENBQUM7YUFDRixFQUFFO2dCQUNELE9BQU8sRUFBRSxPQUFPO2dCQUNoQixXQUFXLEVBQUUsT0FBTztnQkFDcEIsUUFBUSxFQUFFLENBQUMsU0FBUyxFQUFFLEVBQUU7b0JBQ3RCLElBQUksU0FBUyxHQUFHLFNBQVM7b0JBRXpCLElBQUksU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDLGFBQWEsRUFBRSxXQUFXLENBQUMsQ0FBQyxJQUFJLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxhQUFhLEVBQUUsYUFBYSxFQUFFLFNBQVMsRUFBRSxRQUFRLEVBQUUsT0FBTyxDQUFDLENBQUMsRUFBRSxDQUFDO3dCQUNuSSxTQUFTLEdBQUcsU0FBUyxDQUFDLEtBQUssQ0FDekIsQ0FBQyxhQUFhLEVBQUUsYUFBYSxFQUFFLFNBQVMsRUFBRSxRQUFRLEVBQUUsT0FBTyxDQUFDLEVBQzVELDBDQUFPLENBQUMsa0JBQWtCLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDLGFBQWEsRUFBRSxhQUFhLEVBQUUsU0FBUyxFQUFFLFFBQVEsRUFBRSxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQzFHO29CQUNILENBQUM7b0JBRUQsSUFBSSxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUMsYUFBYSxFQUFFLFdBQVcsQ0FBQyxDQUFDLElBQUksU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDLGFBQWEsRUFBRSxhQUFhLEVBQUUsT0FBTyxFQUFFLFFBQVEsRUFBRSxPQUFPLENBQUMsQ0FBQyxFQUFFLENBQUM7d0JBQ2pJLFNBQVMsR0FBRyxTQUFTLENBQUMsS0FBSyxDQUN6QixDQUFDLGFBQWEsRUFBRSxhQUFhLEVBQUUsT0FBTyxFQUFFLFFBQVEsRUFBRSxPQUFPLENBQUMsRUFDMUQsMENBQU8sQ0FBQyxrQkFBa0IsQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUMsYUFBYSxFQUFFLGFBQWEsRUFBRSxPQUFPLEVBQUUsUUFBUSxFQUFFLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FDeEc7b0JBQ0gsQ0FBQztvQkFFRCxPQUFPLFNBQVM7Z0JBQ2xCLENBQUM7YUFDRixFQUFFO2dCQUNELE9BQU8sRUFBRSxRQUFRO2dCQUNqQixXQUFXLEVBQUUsd0JBQXdCO2dCQUNyQyxRQUFRLEVBQUUsQ0FBQyxTQUFTLEVBQUUsRUFBRTtvQkFDdEIsSUFBSSxTQUFTLEdBQUcsU0FBUztvQkFFekIsSUFBSSxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUMsZ0JBQWdCLEVBQUUsTUFBTSxFQUFFLE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQzt3QkFDeEQsTUFBTSxVQUFVLEdBQWU7NEJBQzdCLEdBQUcsRUFBRSxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUMsZ0JBQWdCLEVBQUUsTUFBTSxFQUFFLE1BQU0sQ0FBQyxDQUFDOzRCQUN4RCxVQUFVLEVBQUU7Z0NBQ1YsUUFBUSxFQUFFLEVBQUU7NkJBQ2I7eUJBQ0Y7d0JBQ0QsU0FBUyxHQUFHLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxnQkFBZ0IsRUFBRSxNQUFNLEVBQUUsTUFBTSxDQUFDLEVBQUUsVUFBVSxDQUFDO29CQUM3RSxDQUFDO29CQUVELE9BQU8sU0FBUztnQkFDbEIsQ0FBQzthQUNGLENBQUM7SUFDSixDQUFDO0NBQUE7QUFFTSxNQUFNLGNBQWMsR0FBRyxJQUFJLGNBQWMsRUFBRTs7Ozs7Ozs7Ozs7O0FDckVsRDs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7O1VDQUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7Ozs7Ozs7Ozs7QUNBQTs7O0tBR0s7QUFDTCxxQkFBdUIsR0FBRyxNQUFNLENBQUMsVUFBVSxDQUFDLE9BQU87Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDSm5ELGVBQWU7QUFLRztBQUN5RztBQUNoRDtBQUN6QztBQUNpQjtBQW9CbkQsTUFBcUIsY0FBZSxTQUFRLDRDQUFLLENBQUMsYUFBMkQ7SUFJM0csWUFBYSxLQUFLOztRQUNoQixLQUFLLENBQUMsS0FBSyxDQUFDO1FBSGQsdUJBQWtCLEdBQVcsSUFBSTtRQStEakMscUJBQWdCLEdBQUcsR0FBVyxFQUFFOztZQUM5QixPQUFPLE9BQU8saUJBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSwwQ0FBRSxjQUFjLDBDQUFFLElBQUksTUFBSyxRQUFRO2dCQUNoRSxDQUFDLENBQUMsZ0JBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSwwQ0FBRSxjQUFjLDBDQUFFLElBQUk7Z0JBQ3pDLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsRUFBRSxFQUFFLEVBQUUsZ0JBQWdCLEVBQUUsY0FBYyxFQUFFLG9EQUFxQixDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ25ILENBQUM7UUFFRCxxQkFBZ0IsR0FBRyxHQUFpQixFQUFFOztZQUNwQyxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsY0FBYyxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLGNBQWMsQ0FBQyxpQkFBaUI7Z0JBQ2pILElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLGNBQWMsQ0FBQyxpQkFBaUIsQ0FBQztnQkFDbkQsb0RBQVMsQ0FBQztvQkFDUixJQUFJLEVBQUUsRUFBRTtvQkFDUixLQUFLLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSx5REFBa0IsQ0FBQyxNQUFNLEVBQUUsR0FBRyxFQUFFLElBQUksaUJBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSwwQ0FBRSxjQUFjLDBDQUFFLE9BQU8sS0FBSSxFQUFFLEdBQUcsRUFBRSxDQUFDO2lCQUMzRyxDQUFDO1FBQ04sQ0FBQztRQUVELHNCQUFpQixHQUFHLEdBQWlCLEVBQUU7O1lBQ3JDLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxjQUFjLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsY0FBYyxDQUFDLGNBQWM7Z0JBQzlHLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLGNBQWMsQ0FBQyxjQUFjLENBQUM7Z0JBQ2hELG9EQUFTLENBQUM7b0JBQ1IsSUFBSSxFQUFFLEVBQUU7b0JBQ1IsS0FBSyxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUseURBQWtCLENBQUMsTUFBTSxFQUFFLEdBQUcsRUFBRSxJQUFJLGlCQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sMENBQUUsY0FBYywwQ0FBRSxJQUFJLEtBQUksSUFBSSxDQUFDLGdCQUFnQixFQUFFLEdBQUcsRUFBRSxDQUFDO2lCQUM3SCxDQUFDO1FBQ04sQ0FBQztRQUVELHFCQUFnQixHQUFHLEdBQWlCLEVBQUU7WUFDcEMsTUFBTSxVQUFVLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsY0FBYyxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLGNBQWMsQ0FBQyxTQUFTO2dCQUNwSCxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxjQUFjLENBQUMsU0FBUyxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLGNBQWMsQ0FBQyxTQUFTLENBQUMsVUFBVTtZQUVyRyxPQUFPLFVBQVUsSUFBSSxJQUFJO1FBQzNCLENBQUM7UUFFRCwyQkFBc0IsR0FBRyxNQUFNLENBQUMsRUFBRTtZQUNoQyxJQUFJLE1BQU0sQ0FBQyxZQUFZLEVBQUUsQ0FBQztnQkFDeEIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFFLElBQUksRUFBRSxNQUFNLENBQUMsS0FBSyxFQUFFLENBQUM7WUFDdkMsQ0FBQztpQkFBTSxDQUFDO2dCQUNOLElBQUksR0FBRyxHQUFXLEVBQUU7Z0JBQ3BCLE1BQU0sU0FBUyxHQUFHLE1BQU0sQ0FBQyxLQUFLO2dCQUM5QixJQUFJLFNBQVMsS0FBSyxrRUFBMkIsQ0FBQyxNQUFNLEVBQUUsQ0FBQztvQkFDckQsR0FBRyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsY0FBYyxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsY0FBYyxDQUFDLElBQUk7Z0JBQ25FLENBQUM7Z0JBRUQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsQ0FBQztZQUM5QixDQUFDO1FBQ0gsQ0FBQztRQUVELDBCQUFxQixHQUFHLE1BQU0sQ0FBQyxFQUFFO1lBQy9CLElBQUksTUFBTSxDQUFDLFlBQVksRUFBRSxDQUFDO2dCQUN4QixJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUUsT0FBTyxFQUFFLE1BQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQztZQUMxQyxDQUFDO2lCQUFNLENBQUM7Z0JBQ04sSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFFLE9BQU8sRUFBRSxFQUFFLEVBQUUsQ0FBQztZQUNoQyxDQUFDO1FBQ0gsQ0FBQztRQUVELDBCQUFxQixHQUFHLE1BQU0sQ0FBQyxFQUFFO1lBQy9CLElBQUksTUFBTSxDQUFDLFlBQVksRUFBRSxDQUFDO2dCQUN4QixJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUUsR0FBRyxFQUFFLE1BQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQztZQUN0QyxDQUFDO2lCQUFNLENBQUM7Z0JBQ04sSUFBSSxHQUFHLEdBQVcsRUFBRTtnQkFDcEIsTUFBTSxTQUFTLEdBQUcsTUFBTSxDQUFDLEtBQUs7Z0JBQzlCLElBQUksU0FBUyxLQUFLLGtFQUEyQixDQUFDLE1BQU0sRUFBRSxDQUFDO29CQUNyRCxHQUFHLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxhQUFhLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxhQUFhLENBQUMsSUFBSTtnQkFDakUsQ0FBQztnQkFFRCxJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxDQUFDO1lBQzdCLENBQUM7UUFDSCxDQUFDO1FBRUQsNEJBQXVCLEdBQUcsQ0FBQyxNQUFnQixFQUFXLEVBQUU7WUFDdEQsT0FBTyxDQUFDLENBQUMsQ0FBQyxNQUFNLElBQUksTUFBTSxDQUFDLFdBQVcsSUFBSSxNQUFNLENBQUMsV0FBVyxDQUFDLFVBQVUsSUFBSSxNQUFNLENBQUMsV0FBVyxDQUFDLFVBQVUsQ0FBQyxjQUFjLENBQUM7UUFDMUgsQ0FBQztRQUVELGlCQUFZLEdBQUcsQ0FBQyxnQkFBNkIsRUFBRSxjQUEyQixFQUFvQixFQUFFO1lBQzlGLE1BQU0sQ0FBQyxHQUFHLGdCQUFnQixJQUFLLEVBQWtCO1lBQ2pELE1BQU0sQ0FBQyxHQUFHLGNBQWMsSUFBSyxFQUFrQjtZQUUvQyxPQUFPLDhDQUFHOztpQkFFRyxDQUFDLENBQUMsS0FBSztnQkFDUixDQUFDLENBQUMsS0FBSztpQkFDTixDQUFDLENBQUMsSUFBSSxHQUFHLGtEQUFhLENBQUMsS0FBSztrQkFDM0IsQ0FBQyxDQUFDLElBQUksR0FBRyxrREFBYSxDQUFDLEtBQUs7Ozs7bUJBSTNCLENBQUMsQ0FBQyxLQUFLO2tCQUNSLENBQUMsQ0FBQyxLQUFLO21CQUNOLENBQUMsQ0FBQyxJQUFJLEdBQUcsa0RBQWEsQ0FBQyxLQUFLO29CQUMzQixDQUFDLENBQUMsSUFBSSxHQUFHLGtEQUFhLENBQUMsS0FBSzs7O0tBRzNDO1FBQ0gsQ0FBQztRQUVELHlCQUFvQixHQUFHLENBQUMsS0FBMEIsRUFBdUIsRUFBRTtZQUN6RSxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7Z0JBQ1gsT0FBTyxLQUFLO1lBQ2QsQ0FBQztZQUNELE1BQU0scUJBQXFCLEdBQUcsRUFBRTtZQUNoQyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsRUFBRTtnQkFDckMsSUFBSSxDQUFDLE9BQU8sS0FBSyxDQUFDLFNBQVMsQ0FBQyxLQUFLLFFBQVEsSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLENBQUM7b0JBQ25GLE9BQU8sS0FBSyxDQUFDLFNBQVMsQ0FBQyxLQUFLLFFBQVEsRUFBRSxDQUFDO29CQUN2QyxxQkFBcUIsQ0FBQyxTQUFTLENBQUMsR0FBRyxLQUFLLENBQUMsU0FBUyxDQUFDO2dCQUNyRCxDQUFDO1lBQ0gsQ0FBQyxDQUFDO1lBQ0YsT0FBTyxxQkFBcUI7UUFDOUIsQ0FBQztRQUVELHFCQUFnQixHQUFHLEdBQUcsRUFBRTs7WUFDdEIsTUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNO1lBQ2hDLE1BQU0sU0FBUyxHQUFHLE1BQU0sQ0FBQyxjQUFjLENBQUMsU0FBUztZQUNqRCxNQUFNLElBQUksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUk7WUFDNUIsTUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPO1lBQ2hDLE1BQU0sWUFBWSxHQUFHLHdCQUFNLENBQUMsY0FBYywwQ0FBRSxJQUFJLDBDQUFFLElBQUksMENBQUUsVUFBVTtZQUNsRSxNQUFNLFFBQVEsR0FBRyxhQUFZLGFBQVosWUFBWSx1QkFBWixZQUFZLENBQUUsVUFBVSxFQUFDLENBQUMsQ0FBQyxZQUFZLGFBQVosWUFBWSx1QkFBWixZQUFZLENBQUUsWUFBWSxDQUFDLENBQUMsQ0FBQyxZQUFZLGFBQVosWUFBWSx1QkFBWixZQUFZLENBQUUsUUFBUTtZQUMvRixJQUFJLGtCQUFrQixHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxJQUFJLElBQUksSUFBSSxRQUFRO1lBRS9ELElBQUksV0FBVztZQUNmLElBQUksU0FBUztZQUNiLElBQUksTUFBTSxDQUFDLFdBQVcsSUFBSSxNQUFNLENBQUMsV0FBVyxDQUFDLFdBQVcsRUFBRSxDQUFDO2dCQUN6RCxNQUFNLE9BQU8sR0FBRyxNQUFNLENBQUMsV0FBVyxDQUFDLFdBQVcsQ0FBQyxPQUFPO2dCQUN0RCxNQUFNLEtBQUssR0FBRyxNQUFNLENBQUMsV0FBVyxDQUFDLFdBQVcsQ0FBQyxLQUFLO2dCQUNsRCxJQUFJLE1BQU0sQ0FBQyxXQUFXLENBQUMsU0FBUyxFQUFFLENBQUM7b0JBQ2pDLE1BQU0sS0FBSyxHQUFHLCtDQUFVLENBQUMsVUFBVSxDQUFDLE9BQU8sSUFBSSxPQUFPLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUF3QjtvQkFDN0gsTUFBTSxrQkFBa0IsR0FBRywrQ0FBVSxDQUFDLFVBQVUsQ0FBQyxLQUFLLElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsQ0FBQyxTQUFTLENBQUMsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBd0I7b0JBQ3RJLE1BQU0sVUFBVSxtQ0FBUSxLQUFLLEdBQUssa0JBQWtCLENBQUU7b0JBQ3RELElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLEtBQUssOENBQU8sQ0FBQyxHQUFHLEVBQUUsQ0FBQzt3QkFDNUQsTUFBTSxXQUFXLEdBQWtCLHNEQUFXLEVBQUUsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsSUFBSSxvREFBUyxDQUFDLEVBQUUsQ0FBQzt3QkFDeEcsV0FBVyxHQUFHOzRCQUNaLEtBQUssRUFBRSxXQUFXLENBQUMsa0JBQWtCO2dDQUNuQyxDQUFDLGlDQUFNLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxLQUFLLENBQUMsR0FBSyxJQUFJLENBQUMsb0JBQW9CLENBQUMsVUFBVSxDQUFDLEVBQ2pGLENBQUMsQ0FBQyxLQUFLOzRCQUNULFVBQVU7eUJBQ1g7d0JBQ0QsU0FBUyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQzNCLFdBQVcsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLGlDQUFNLE9BQU8sYUFBUCxPQUFPLHVCQUFQLE9BQU8sQ0FBRSxTQUFTLEdBQUssS0FBSyxhQUFMLEtBQUssdUJBQUwsS0FBSyxDQUFFLFNBQVMsRUFBRyxDQUFDLENBQUMsT0FBTyxhQUFQLE9BQU8sdUJBQVAsT0FBTyxDQUFFLFNBQVMsRUFDcEcsS0FBSyxhQUFMLEtBQUssdUJBQUwsS0FBSyxDQUFFLFNBQVMsQ0FDakI7b0JBQ0gsQ0FBQzt5QkFBTSxDQUFDO3dCQUNOLFdBQVcsR0FBRzs0QkFDWixLQUFLOzRCQUNMLFVBQVU7eUJBQ1g7d0JBQ0QsU0FBUyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxJQUFJLE9BQU8sQ0FBQyxTQUFTLEVBQUUsS0FBSyxJQUFJLEtBQUssQ0FBQyxTQUFTLENBQUM7b0JBQ3ZGLENBQUM7Z0JBQ0gsQ0FBQztZQUNILENBQUM7WUFFRCxNQUFNLGFBQWEsR0FBRyxJQUFJLENBQUMsdUJBQXVCLENBQUMsTUFBTSxDQUFDO1lBQzFELE1BQU0sVUFBVSxHQUFnQixhQUFhO2dCQUMzQyxDQUFDLENBQUM7b0JBQ0UsSUFBSSxFQUFFLE1BQU0sQ0FBQyxXQUFXLENBQUMsVUFBVSxDQUFDLGNBQWM7aUJBQ25EO2dCQUNILENBQUMsQ0FBQztvQkFDRSxJQUFJLEVBQUUsU0FBUztpQkFDaEI7WUFFTCxNQUFNLGVBQWUsR0FBRyxtR0FBbUc7WUFFM0gsSUFBSSxXQUFXO1lBQ2YsSUFBSSxNQUFrQjtZQUN0QixJQUFJLE1BQWtCO1lBQ3RCLElBQUksU0FBUyxJQUFJLFNBQVMsQ0FBQyxRQUFRLEVBQUUsQ0FBQztnQkFDcEMsTUFBTSxHQUFHLFNBQVMsQ0FBQyxRQUFRO2dCQUMzQixNQUFNLEdBQUc7b0JBQ1AsUUFBUSxFQUFFLFNBQVMsQ0FBQyxRQUFRO2lCQUNmO2dCQUVmLElBQUksU0FBUyxDQUFDLFFBQVEsS0FBSywrQ0FBUSxDQUFDLFVBQVUsRUFBRSxDQUFDO29CQUMvQyxNQUFNLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRztnQkFDL0IsQ0FBQztxQkFBTSxDQUFDO29CQUNOLE1BQU0sQ0FBQyxLQUFLLEdBQUcsU0FBUyxDQUFDLEtBQUs7b0JBQzlCLFdBQVcsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFdBQVc7Z0JBQ3RDLENBQUM7WUFDSCxDQUFDO1lBRUQsTUFBTSxJQUFJLEdBQUcsTUFBTSxDQUFDLGNBQWMsQ0FBQyxJQUFJO1lBQ3ZDLE1BQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSztZQUM5QixNQUFNLFFBQVEsR0FBRyxJQUFJLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLElBQUksSUFBSSxDQUFDLFFBQVEsS0FBSyxpREFBWSxDQUFDLElBQUksQ0FBQyxJQUFJLCtDQUFDLHlDQUFJLElBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLFNBQVMsRUFBRSxxREFBVSxDQUFDLEVBQUUsV0FBVyxFQUFFLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxLQUFLLEVBQUUsV0FBVyxFQUFFLENBQUMsQ0FBQyxJQUFJLElBQUksS0FBSyxFQUFFLE1BQU0sRUFBRSxDQUFDLElBQUksRUFBRSxDQUFDLGlCQUFlLElBQUksR0FBSTtZQUMzTyxNQUFNLFNBQVMsR0FBRyxJQUFJLElBQUksSUFBSSxDQUFDLFFBQVEsSUFBSSxJQUFJLENBQUMsUUFBUSxLQUFLLGlEQUFZLENBQUMsS0FBSyxJQUFJLCtDQUFDLHlDQUFJLElBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLFNBQVMsRUFBRSxxREFBVSxDQUFDLEVBQUUsV0FBVyxFQUFFLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxLQUFLLEVBQUUsV0FBVyxFQUFFLENBQUMsQ0FBQyxJQUFJLElBQUksS0FBSyxFQUFFLE1BQU0sRUFBRSxDQUFDLElBQUksRUFBRSxDQUFDLGlCQUFlLElBQUksR0FBSTtZQUUxTyxJQUFJLE1BQU0sS0FBSyxRQUFRLEVBQUUsQ0FBQztnQkFDeEIsa0JBQWtCLEdBQUcsR0FBRyxrQkFBa0IsS0FBSyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsRUFBRSxFQUFFLEVBQUUsaUJBQWlCLEVBQUUsQ0FBQyxFQUFFO1lBQzNHLENBQUM7WUFFRCxNQUFNLFFBQVEsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVU7WUFDOUQsTUFBTSxNQUFNLEdBQUcsSUFBSSxJQUFJLENBQUMsSUFBSTtZQUU1QixPQUFPLCtDQUFDLHlDQUFJLGtCQUFDLEVBQUUsRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUUsV0FBVyxFQUMvRCxLQUFLLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRSxlQUFlLEVBQUUsSUFBSSxFQUFDLFFBQVEsRUFDdkQsV0FBVyxFQUFFLFdBQVcsSUFBTSxVQUFVLElBQUUsR0FBRyxFQUFFLFNBQVMsZ0JBQzVDLGtCQUFrQjtnQkFFOUIseURBQU0sU0FBUyxFQUFFLHFEQUFVLENBQUMscUVBQXFFLEVBQUUsRUFBRSxnQkFBZ0IsRUFBRSxRQUFRLElBQUksTUFBTSxFQUFFLENBQUM7b0JBRXhJLEtBQUssQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxRQUFRO29CQUU5Qix5REFBTSxTQUFTLEVBQUMsZUFBZSxJQUFFLElBQUksQ0FBUTtvQkFFM0MsS0FBSyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FFekIsQ0FDRjtRQUNULENBQUM7UUFFRCxZQUFPLEdBQUcsQ0FBQyxDQUFDLEVBQUU7WUFDWixNQUFNLFNBQVMsR0FBRyxDQUFDLElBQUksSUFBSSxFQUFFLENBQUMsQ0FBQyxPQUFPLEVBQUU7WUFDeEMsMkRBQTJEO1lBQzNELElBQUksSUFBSSxDQUFDLGtCQUFrQixJQUFJLFNBQVMsR0FBRyxJQUFJLENBQUMsa0JBQWtCLEdBQUcsR0FBRztnQkFBRSxPQUFNO1lBQ2hGLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxTQUFTO1lBQ25DLENBQUMsQ0FBQyxZQUFZLEdBQUcsV0FBVztZQUM1QixxREFBYyxDQUFDLFdBQVcsRUFBRSxDQUFDLGNBQWMsQ0FDekMsSUFBSSx5REFBa0IsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUN0QztRQUNILENBQUM7UUFoUkMsSUFBSSxDQUFDLEtBQUssR0FBRztZQUNYLElBQUksRUFBRSxJQUFJLENBQUMsZ0JBQWdCLEVBQUU7WUFDN0IsT0FBTyxFQUFFLGlCQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sMENBQUUsY0FBYywwQ0FBRSxPQUFPLEtBQUksRUFBRTtZQUN6RCxHQUFHLEVBQUUsdUJBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSwwQ0FBRSxjQUFjLDBDQUFFLFNBQVMsMENBQUUsS0FBSyxLQUFJLEVBQUU7WUFDOUQsY0FBYyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMscUJBQXFCLElBQUksSUFBSSxDQUFDLGlCQUFpQixFQUFFO1lBQzVFLGFBQWEsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLHFCQUFxQixJQUFJLElBQUksQ0FBQyxnQkFBZ0IsRUFBRTtZQUMxRSxhQUFhLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxxQkFBcUIsSUFBSSxJQUFJLENBQUMsZ0JBQWdCLEVBQUU7U0FDM0U7UUFDRCxJQUFJLENBQUMsT0FBTyxHQUFHLDRDQUFLLENBQUMsU0FBUyxFQUFFO0lBQ2xDLENBQUM7SUF3QkQsa0JBQWtCLENBQUUsU0FBZ0QsRUFBRSxTQUFnQjtRQUNwRixJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxxQkFBcUI7WUFDbkMsQ0FDRSxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sS0FBSyxTQUFTLENBQUMsTUFBTSxJQUFJLFNBQVMsQ0FBQyxxQkFBcUIsQ0FDMUUsRUFDRCxDQUFDO1lBQ0QsSUFBSSxDQUFDLFFBQVEsQ0FBQztnQkFDWixJQUFJLEVBQUUsSUFBSSxDQUFDLGdCQUFnQixFQUFFO2dCQUM3QixPQUFPLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsY0FBYyxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLGNBQWMsQ0FBQyxPQUFPO2dCQUMxRyxHQUFHLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsY0FBYyxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLGNBQWMsQ0FBQyxTQUFTLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsY0FBYyxDQUFDLFNBQVMsQ0FBQyxLQUFLO2FBQzdKLENBQUM7UUFDSixDQUFDO1FBRUQsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLHFCQUFxQjtZQUNsQyxDQUNFLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxLQUFLLFNBQVMsQ0FBQyxNQUFNLElBQUksQ0FBQyxTQUFTLENBQUMscUJBQXFCLENBQzNFLEVBQ0QsQ0FBQztZQUNELElBQUksQ0FBQyxRQUFRLENBQUM7Z0JBQ1osY0FBYyxFQUFFLElBQUksQ0FBQyxpQkFBaUIsRUFBRTtnQkFDeEMsYUFBYSxFQUFFLElBQUksQ0FBQyxnQkFBZ0IsRUFBRTtnQkFDdEMsYUFBYSxFQUFFLElBQUksQ0FBQyxnQkFBZ0IsRUFBRTthQUN2QyxDQUFDO1FBQ0osQ0FBQztJQUNILENBQUM7SUF5TkQsTUFBTTtRQUNKLE1BQU0sZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxxQkFBcUI7UUFFekQsTUFBTSxhQUFhLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixFQUFFO1FBRTdDLE9BQU8sQ0FDTCx3REFDRSxTQUFTLEVBQUMsdUNBQXVDLEVBQ2pELEdBQUcsRUFBRSxnREFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLEVBQUUsR0FBRyxFQUFFLElBQUksQ0FBQyxPQUFPLEVBQ2xELE9BQU8sRUFBRSxJQUFJLENBQUMsT0FBTyxFQUNyQixVQUFVLEVBQUUsSUFBSSxDQUFDLE9BQU8sRUFDeEIsT0FBTyxFQUFFLEdBQUcsQ0FBQyxFQUFFO2dCQUNiLElBQUksR0FBRyxDQUFDLEdBQUcsS0FBSyxHQUFHLElBQUksR0FBRyxDQUFDLEdBQUcsS0FBSyxPQUFPLEVBQUUsQ0FBQztvQkFDM0MsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUM7Z0JBQ25CLENBQUM7WUFDSCxDQUFDO1lBRUEsYUFBYTtZQUNkLHdEQUFLLEtBQUssRUFBRSxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsSUFFM0IsZ0JBQWdCO2dCQUNoQjtvQkFDRSwrQ0FBQyxrRUFBMkIsSUFBQyxjQUFjLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxjQUFjLEVBQUUsVUFBVSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsY0FBYyxFQUMzRyxRQUFRLEVBQUUsSUFBSSxDQUFDLHNCQUFzQixFQUFFLFFBQVEsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUUsR0FDOUQ7b0JBQ0YsK0NBQUMsa0VBQTJCLElBQUMsY0FBYyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsY0FBYyxFQUFFLFVBQVUsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLGFBQWEsRUFDMUcsUUFBUSxFQUFFLElBQUksQ0FBQyxxQkFBcUIsRUFBRSxRQUFRLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFLEdBQzdEO29CQUNGLCtDQUFDLGtFQUEyQixJQUFDLGNBQWMsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLGNBQWMsRUFBRSxVQUFVLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxhQUFhLEVBQzFHLFFBQVEsRUFBRSxJQUFJLENBQUMscUJBQXFCLEVBQUUsUUFBUSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRSxHQUM3RCxDQUNFLENBRUosQ0FDRixDQUNQO0lBQ0gsQ0FBQzs7QUEzU00saUNBQWtCLEdBQUcsQ0FBQyxLQUFjLEVBQUUsUUFBa0MsRUFBYyxFQUFFOztJQUM3RixJQUFJLFFBQVEsR0FBRyxLQUFLO0lBQ3BCLE1BQU0sU0FBUyxHQUFHLEtBQUssQ0FBQyxjQUFjLENBQUMsU0FBUztJQUNoRCxJQUFJLFNBQVMsSUFBSSxLQUFLLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQztRQUM3RCxNQUFNLFVBQVUsR0FBRyxLQUFLLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxZQUFZLENBQUM7UUFDOUYsUUFBUSxHQUFHLFVBQVUsSUFBSSxVQUFVLENBQUMsUUFBUSxLQUFLLFFBQVEsQ0FBQyxFQUFFO0lBQzlELENBQUM7SUFDRCxNQUFNLFdBQVcsR0FBRyxLQUFLLENBQUMsVUFBVSxDQUFDLFdBQVc7SUFDaEQsTUFBTSxNQUFNLEdBQUcsV0FBVyxJQUFJLFFBQVE7SUFFdEMsT0FBTztRQUNMLE1BQU07UUFDTixPQUFPLEVBQUUsS0FBSyxDQUFDLGNBQWMsQ0FBQyxPQUFPO1FBQ3JDLFdBQVcsRUFBRSxLQUFLLENBQUMsV0FBVztRQUM5QixLQUFLLEVBQUUsS0FBSyxDQUFDLFVBQVUsQ0FBQyxLQUFLO1FBQzdCLGVBQWUsRUFBRSxLQUFLLENBQUMsZUFBZTtRQUN0QyxHQUFHLEVBQUUsV0FBSyxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQywwQ0FBRSxHQUFHO0tBQy9DO0FBQ0gsQ0FBQztBQUVNLDZCQUFjLEdBQUcsNERBQWM7aUVBckNuQixjQUFjO0FBK1QzQixTQUFTLDJCQUEyQixDQUFDLEdBQUcsSUFBSSxxQkFBdUIsR0FBRyxHQUFHLEVBQUMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2V4Yi1jbGllbnQvLi95b3VyLWV4dGVuc2lvbnMvd2lkZ2V0cy93ZWItdG9rZW4tYnV0dG9uL3NyYy9jb25maWcudHMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL3lvdXItZXh0ZW5zaW9ucy93aWRnZXRzL3dlYi10b2tlbi1idXR0b24vc3JjL3J1bnRpbWUvc3R5bGUudHMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL3lvdXItZXh0ZW5zaW9ucy93aWRnZXRzL3dlYi10b2tlbi1idXR0b24vc3JjL3ZlcnNpb24tbWFuYWdlci50cyIsIndlYnBhY2s6Ly9leGItY2xpZW50L2V4dGVybmFsIHN5c3RlbSBcImppbXUtY29yZVwiIiwid2VicGFjazovL2V4Yi1jbGllbnQvZXh0ZXJuYWwgc3lzdGVtIFwiamltdS11aVwiIiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9qaW11LWNvcmUvbGliL3NldC1wdWJsaWMtcGF0aC50cyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4veW91ci1leHRlbnNpb25zL3dpZGdldHMvd2ViLXRva2VuLWJ1dHRvbi9zcmMvcnVudGltZS93aWRnZXQudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0eXBlIHsgSW1tdXRhYmxlT2JqZWN0LCBFeHByZXNzaW9uLCBUaGVtZUJ1dHRvblR5cGUsIEljb25Qcm9wcywgSWNvblJlc3VsdCwgIExpbmtQYXJhbSB9IGZyb20gJ2ppbXUtY29yZSdcclxuaW1wb3J0IHR5cGUgeyBTdHlsZVNldHRpbmdzIH0gZnJvbSAnamltdS11aSdcclxuXHJcbmV4cG9ydCB0eXBlIElNQ29uZmlnID0gSW1tdXRhYmxlT2JqZWN0PENvbmZpZz5cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgQ29uZmlnIHtcclxuICBmdW5jdGlvbkNvbmZpZzogRnVuY3Rpb25Db25maWdcclxuICBzdHlsZUNvbmZpZz86IFN0eWxlQ29uZmlnXHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgRnVuY3Rpb25Db25maWcge1xyXG4gIHRvb2xUaXA/OiBzdHJpbmdcclxuICB0ZXh0Pzogc3RyaW5nXHJcbiAgaWNvbj86IEljb25Db25maWdcclxuICAvKipcclxuICAgKiBjdXN0b21JY29ucyBpcyB1c2VkIGZvciBkZXZlbG9wZXJzIHRvIHNldCBjZXJ0YWluIGljb25zIGFzIHByZXNldCBpY29ucywgaXQgY291bGQgbm90IGJlIHVwbG9hZGVkIGluIHRoZSBidWlsZGVyLlxyXG4gICAqIFRoZXNlIGN1c3RvbSBpY29ucyBjYW4ndCBiZSBkZWxldGUuXHJcbiAgICovXHJcbiAgY3VzdG9tSWNvbnM/OiBJY29uUmVzdWx0W11cclxuICB0ZXh0RXhwcmVzc2lvbj86IEV4cHJlc3Npb25cclxuICB0b29sVGlwRXhwcmVzc2lvbj86IEV4cHJlc3Npb25cclxuICBsaW5rUGFyYW0/OiBMaW5rUGFyYW1cclxufVxyXG5cclxuZXhwb3J0IGVudW0gSWNvblBvc2l0aW9uIHtcclxuICBMZWZ0ID0gJ0xFRlQnLFxyXG4gIFJpZ2h0ID0gJ1JJR0hUJ1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEljb25Db25maWcge1xyXG4gIGRhdGE6IEljb25SZXN1bHRcclxuICBwb3NpdGlvbjogSWNvblBvc2l0aW9uXHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgU3R5bGVDb25maWcge1xyXG4gIHVzZUN1c3RvbTogYm9vbGVhblxyXG4gIHRoZW1lU3R5bGU/OiBUaGVtZVN0eWxlXHJcbiAgY3VzdG9tU3R5bGU/OiBDdXN0b21TdHlsZVxyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFRoZW1lU3R5bGUge1xyXG4gIHF1aWNrU3R5bGVUeXBlOiBUaGVtZUJ1dHRvblR5cGVcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBDdXN0b21TdHlsZSB7XHJcbiAgcmVndWxhcjogQWR2YW5jZVN0eWxlU2V0dGluZ3NcclxuICBob3ZlcjogQWR2YW5jZVN0eWxlU2V0dGluZ3NcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBBZHZhbmNlU3R5bGVTZXR0aW5ncyBleHRlbmRzIFN0eWxlU2V0dGluZ3Mge1xyXG4gIGljb25Qcm9wcz86IEljb25Qcm9wc1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFdpZGdldFN0YXRlIHtcclxuICBpc0NvbmZpZ3VyaW5nSG92ZXI/OiBib29sZWFuXHJcbn1cclxuXHJcbmV4cG9ydCB0eXBlIElNQWR2YW5jZVN0eWxlU2V0dGluZ3MgPSBJbW11dGFibGVPYmplY3Q8QWR2YW5jZVN0eWxlU2V0dGluZ3M+XHJcblxyXG5leHBvcnQgdHlwZSBJTUljb25Qcm9wcyA9IEltbXV0YWJsZU9iamVjdDxJY29uUHJvcHM+XHJcblxyXG5leHBvcnQgdHlwZSBJTUN1c3RvbVN0eWxlID0gSW1tdXRhYmxlT2JqZWN0PEN1c3RvbVN0eWxlPlxyXG5cclxuZXhwb3J0IHR5cGUgSU1UaGVtZVN0eWxlID0gSW1tdXRhYmxlT2JqZWN0PFRoZW1lU3R5bGU+XHJcblxyXG5leHBvcnQgdHlwZSBJTVN0eWxlQ29uZmlnID0gSW1tdXRhYmxlT2JqZWN0PFN0eWxlQ29uZmlnPlxyXG5cclxuZXhwb3J0IHR5cGUgSU1JY29uUG9zaXRpb24gPSBJbW11dGFibGVPYmplY3Q8SWNvblBvc2l0aW9uPlxyXG5cclxuZXhwb3J0IHR5cGUgSU1JY29uQ29uZmlnID0gSW1tdXRhYmxlT2JqZWN0PEljb25Db25maWc+XHJcblxyXG5leHBvcnQgdHlwZSBJTVdpZGdldFN0YXRlID0gSW1tdXRhYmxlT2JqZWN0PFdpZGdldFN0YXRlPlxyXG4iLCJpbXBvcnQgeyB0eXBlIElNVGhlbWVWYXJpYWJsZXMsIGNzcywgdHlwZSBTZXJpYWxpemVkU3R5bGVzIH0gZnJvbSAnamltdS1jb3JlJ1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldFN0eWxlICh0aGVtZTogSU1UaGVtZVZhcmlhYmxlcyk6IFNlcmlhbGl6ZWRTdHlsZXMge1xyXG4gIHJldHVybiBjc3NgXHJcbiAgICAmPmEge1xyXG4gICAgICBkaXNwbGF5OiBmbGV4ICFpbXBvcnRhbnQ7XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgfVxyXG5cclxuICAgIC5hdXRvLXNpemUtaWNvbiB7XHJcbiAgICAgIGxpbmUtaGVpZ2h0OiAxO1xyXG4gICAgfVxyXG4gICAgLndpZGdldC1idXR0b24tdGV4dHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB9XHJcbiAgYFxyXG59XHJcbiIsImltcG9ydCB7IEJhc2VWZXJzaW9uTWFuYWdlciwgdHlwZSBJY29uUmVzdWx0IH0gZnJvbSAnamltdS1jb3JlJ1xyXG5pbXBvcnQgeyB1dGlscyBhcyB1aVV0aWxzIH0gZnJvbSAnamltdS11aSdcclxuXHJcbmNsYXNzIFZlcnNpb25NYW5hZ2VyIGV4dGVuZHMgQmFzZVZlcnNpb25NYW5hZ2VyIHtcclxuICB2ZXJzaW9ucyA9IFt7XHJcbiAgICB2ZXJzaW9uOiAnMS4wLjAnLFxyXG4gICAgZGVzY3JpcHRpb246ICdUaGUgZmlyc3QgcmVsZWFzZS4nLFxyXG4gICAgdXBncmFkZXI6IChvbGRDb25maWcpID0+IHtcclxuICAgICAgbGV0IG5ld0NvbmZpZyA9IG9sZENvbmZpZ1xyXG5cclxuICAgICAgaWYgKG5ld0NvbmZpZy5nZXRJbihbJ3N0eWxlQ29uZmlnJywgJ25hbWUnXSkpIHtcclxuICAgICAgICBuZXdDb25maWcgPSBuZXdDb25maWcuc2V0KCdzdHlsZUNvbmZpZycsIG5ld0NvbmZpZy5zdHlsZUNvbmZpZy53aXRob3V0KCduYW1lJykpXHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmIChuZXdDb25maWcuZ2V0SW4oWydzdHlsZUNvbmZpZycsICdjdXN0b21TdHlsZSddKSkge1xyXG4gICAgICAgIG5ld0NvbmZpZyA9IG5ld0NvbmZpZy5zZXQoJ3N0eWxlQ29uZmlnJywgbmV3Q29uZmlnLnN0eWxlQ29uZmlnLndpdGhvdXQoJ2N1c3RvbVN0eWxlJykpXHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmIChuZXdDb25maWcuZ2V0SW4oWydzdHlsZUNvbmZpZycsICd0aGVtZVN0eWxlJywgJ3F1aWNrU3R5bGVUeXBlJ10pKSB7XHJcbiAgICAgICAgbmV3Q29uZmlnID0gbmV3Q29uZmlnLnNldEluKFsnc3R5bGVDb25maWcnLCAndGhlbWVTdHlsZSddLCB7IHF1aWNrU3R5bGVUeXBlOiBuZXdDb25maWcuc3R5bGVDb25maWcudGhlbWVTdHlsZS5xdWlja1N0eWxlVHlwZSB9KVxyXG4gICAgICB9XHJcblxyXG4gICAgICBuZXdDb25maWcgPSBuZXdDb25maWcuc2V0SW4oWydzdHlsZUNvbmZpZycsICd1c2VDdXN0b20nXSwgZmFsc2UpXHJcblxyXG4gICAgICByZXR1cm4gbmV3Q29uZmlnXHJcbiAgICB9XHJcbiAgfSwge1xyXG4gICAgdmVyc2lvbjogJzEuMS4wJyxcclxuICAgIGRlc2NyaXB0aW9uOiAnMS4xLjAnLFxyXG4gICAgdXBncmFkZXI6IChvbGRDb25maWcpID0+IHtcclxuICAgICAgbGV0IG5ld0NvbmZpZyA9IG9sZENvbmZpZ1xyXG5cclxuICAgICAgaWYgKG5ld0NvbmZpZy5nZXRJbihbJ3N0eWxlQ29uZmlnJywgJ3VzZUN1c3RvbSddKSAmJiBuZXdDb25maWcuZ2V0SW4oWydzdHlsZUNvbmZpZycsICdjdXN0b21TdHlsZScsICdyZWd1bGFyJywgJ2JvcmRlcicsICd3aWR0aCddKSkge1xyXG4gICAgICAgIG5ld0NvbmZpZyA9IG5ld0NvbmZpZy5zZXRJbihcclxuICAgICAgICAgIFsnc3R5bGVDb25maWcnLCAnY3VzdG9tU3R5bGUnLCAncmVndWxhcicsICdib3JkZXInLCAnd2lkdGgnXSxcclxuICAgICAgICAgIHVpVXRpbHMuc3RyaW5nT2ZMaW5lYXJVbml0KG5ld0NvbmZpZy5nZXRJbihbJ3N0eWxlQ29uZmlnJywgJ2N1c3RvbVN0eWxlJywgJ3JlZ3VsYXInLCAnYm9yZGVyJywgJ3dpZHRoJ10pKVxyXG4gICAgICAgIClcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKG5ld0NvbmZpZy5nZXRJbihbJ3N0eWxlQ29uZmlnJywgJ3VzZUN1c3RvbSddKSAmJiBuZXdDb25maWcuZ2V0SW4oWydzdHlsZUNvbmZpZycsICdjdXN0b21TdHlsZScsICdob3ZlcicsICdib3JkZXInLCAnd2lkdGgnXSkpIHtcclxuICAgICAgICBuZXdDb25maWcgPSBuZXdDb25maWcuc2V0SW4oXHJcbiAgICAgICAgICBbJ3N0eWxlQ29uZmlnJywgJ2N1c3RvbVN0eWxlJywgJ2hvdmVyJywgJ2JvcmRlcicsICd3aWR0aCddLFxyXG4gICAgICAgICAgdWlVdGlscy5zdHJpbmdPZkxpbmVhclVuaXQobmV3Q29uZmlnLmdldEluKFsnc3R5bGVDb25maWcnLCAnY3VzdG9tU3R5bGUnLCAnaG92ZXInLCAnYm9yZGVyJywgJ3dpZHRoJ10pKVxyXG4gICAgICAgIClcclxuICAgICAgfVxyXG5cclxuICAgICAgcmV0dXJuIG5ld0NvbmZpZ1xyXG4gICAgfVxyXG4gIH0sIHtcclxuICAgIHZlcnNpb246ICcxLjEyLjAnLFxyXG4gICAgZGVzY3JpcHRpb246ICdmaXggaWNvbiBwaWNrZXIgY29uZmlnJyxcclxuICAgIHVwZ3JhZGVyOiAob2xkQ29uZmlnKSA9PiB7XHJcbiAgICAgIGxldCBuZXdDb25maWcgPSBvbGRDb25maWdcclxuXHJcbiAgICAgIGlmIChuZXdDb25maWcuZ2V0SW4oWydmdW5jdGlvbkNvbmZpZycsICdpY29uJywgJ2RhdGEnXSkpIHtcclxuICAgICAgICBjb25zdCBpY29uUmVzdWx0OiBJY29uUmVzdWx0ID0ge1xyXG4gICAgICAgICAgc3ZnOiBuZXdDb25maWcuZ2V0SW4oWydmdW5jdGlvbkNvbmZpZycsICdpY29uJywgJ2RhdGEnXSksXHJcbiAgICAgICAgICBwcm9wZXJ0aWVzOiB7XHJcbiAgICAgICAgICAgIGZpbGVuYW1lOiAnJ1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBuZXdDb25maWcgPSBuZXdDb25maWcuc2V0SW4oWydmdW5jdGlvbkNvbmZpZycsICdpY29uJywgJ2RhdGEnXSwgaWNvblJlc3VsdClcclxuICAgICAgfVxyXG5cclxuICAgICAgcmV0dXJuIG5ld0NvbmZpZ1xyXG4gICAgfVxyXG4gIH1dXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCB2ZXJzaW9uTWFuYWdlciA9IG5ldyBWZXJzaW9uTWFuYWdlcigpXHJcbiIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9qaW11X2NvcmVfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfamltdV91aV9fOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjsiLCIvKipcclxuICogV2VicGFjayB3aWxsIHJlcGxhY2UgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gd2l0aCBfX3dlYnBhY2tfcmVxdWlyZV9fLnAgdG8gc2V0IHRoZSBwdWJsaWMgcGF0aCBkeW5hbWljYWxseS5cclxuICogVGhlIHJlYXNvbiB3aHkgd2UgY2FuJ3Qgc2V0IHRoZSBwdWJsaWNQYXRoIGluIHdlYnBhY2sgY29uZmlnIGlzOiB3ZSBjaGFuZ2UgdGhlIHB1YmxpY1BhdGggd2hlbiBkb3dubG9hZC5cclxuICogKi9cclxuX193ZWJwYWNrX3B1YmxpY19wYXRoX18gPSB3aW5kb3cuamltdUNvbmZpZy5iYXNlVXJsXHJcbiIsIi8qKiBAanN4IGpzeCAqL1xyXG5pbXBvcnQge1xyXG4gIFJlYWN0LCBMaW5rVHlwZSwgdHlwZSBBbGxXaWRnZXRQcm9wcywgRXhwcmVzc2lvblBhcnRUeXBlLCBFeHByZXNzaW9uUmVzb2x2ZXJFcnJvckNvZGUsIHR5cGUgTGlua1Jlc3VsdCwgY2xhc3NOYW1lcyxcclxuICB0eXBlIElNRXhwcmVzc2lvbiwganN4LCBFeHByZXNzaW9uUmVzb2x2ZXJDb21wb25lbnQsIEltbXV0YWJsZSwgdHlwZSBJTVN0YXRlLCBBcHBNb2RlLCBjc3MsIHR5cGUgSU1JY29uUHJvcHMsIHR5cGUgU2VyaWFsaXplZFN0eWxlcyxcclxuICBnZXRBcHBTdG9yZSwgdHlwZSBJTVVybFBhcmFtZXRlcnMsIHR5cGUgQnJvd3NlclNpemVNb2RlLCBNZXNzYWdlTWFuYWdlciwgQnV0dG9uQ2xpY2tNZXNzYWdlLCB0eXBlIExpbmtUYXJnZXRcclxufSBmcm9tICdqaW11LWNvcmUnXHJcbmltcG9ydCB7IHN0eWxlVXRpbHMsIExpbmssIHR5cGUgQnV0dG9uUHJvcHMsIEljb24sIERpc3RhbmNlVW5pdHMsIGRlZmF1bHRNZXNzYWdlcyBhcyBqaW11VWlEZWZhdWx0TWVzc2FnZXMgfSBmcm9tICdqaW11LXVpJ1xyXG5pbXBvcnQgeyB0eXBlIElNQ29uZmlnLCBJY29uUG9zaXRpb24sIHR5cGUgSU1XaWRnZXRTdGF0ZSB9IGZyb20gJy4uL2NvbmZpZydcclxuaW1wb3J0IHsgZ2V0U3R5bGUgfSBmcm9tICcuL3N0eWxlJ1xyXG5pbXBvcnQgeyB2ZXJzaW9uTWFuYWdlciB9IGZyb20gJy4uL3ZlcnNpb24tbWFuYWdlcidcclxuXHJcbmludGVyZmFjZSBTdGF0ZSB7XHJcbiAgdGV4dDogc3RyaW5nXHJcbiAgdG9vbFRpcDogc3RyaW5nXHJcbiAgdXJsOiBzdHJpbmdcclxuICB0ZXh0RXhwcmVzc2lvbjogSU1FeHByZXNzaW9uXHJcbiAgdGlwRXhwcmVzc2lvbjogSU1FeHByZXNzaW9uXHJcbiAgdXJsRXhwcmVzc2lvbjogSU1FeHByZXNzaW9uXHJcbn1cclxuXHJcbmludGVyZmFjZSBFeHRyYVByb3BzIHtcclxuICBhY3RpdmU6IGJvb2xlYW5cclxuICBhcHBNb2RlOiBBcHBNb2RlXHJcbiAgcXVlcnlPYmplY3Q6IElNVXJsUGFyYW1ldGVyc1xyXG4gIGlzUlRMOiBib29sZWFuXHJcbiAgYnJvd3NlclNpemVNb2RlOiBCcm93c2VyU2l6ZU1vZGVcclxuICB1cmk6IHN0cmluZ1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBXZWJUb2tlbkJ1dHRvbiBleHRlbmRzIFJlYWN0LlB1cmVDb21wb25lbnQ8QWxsV2lkZ2V0UHJvcHM8SU1Db25maWc+ICYgRXh0cmFQcm9wcywgU3RhdGU+IHtcclxuICBkb21Ob2RlOiBSZWFjdC5SZWZPYmplY3Q8SFRNTERpdkVsZW1lbnQ+XHJcbiAgbGFzdENsaWNrVGltZXN0YW1wOiBudW1iZXIgPSBudWxsXHJcblxyXG4gIGNvbnN0cnVjdG9yIChwcm9wcykge1xyXG4gICAgc3VwZXIocHJvcHMpXHJcbiAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICB0ZXh0OiB0aGlzLmdldFRleHRGcm9tUHJvcHMoKSxcclxuICAgICAgdG9vbFRpcDogdGhpcy5wcm9wcy5jb25maWc/LmZ1bmN0aW9uQ29uZmlnPy50b29sVGlwIHx8ICcnLFxyXG4gICAgICB1cmw6IHRoaXMucHJvcHMuY29uZmlnPy5mdW5jdGlvbkNvbmZpZz8ubGlua1BhcmFtPy52YWx1ZSB8fCAnJyxcclxuICAgICAgdGV4dEV4cHJlc3Npb246IHRoaXMucHJvcHMudXNlRGF0YVNvdXJjZXNFbmFibGVkICYmIHRoaXMuZ2V0VGV4dEV4cHJlc3Npb24oKSxcclxuICAgICAgdGlwRXhwcmVzc2lvbjogdGhpcy5wcm9wcy51c2VEYXRhU291cmNlc0VuYWJsZWQgJiYgdGhpcy5nZXRUaXBFeHByZXNzaW9uKCksXHJcbiAgICAgIHVybEV4cHJlc3Npb246IHRoaXMucHJvcHMudXNlRGF0YVNvdXJjZXNFbmFibGVkICYmIHRoaXMuZ2V0VXJsRXhwcmVzc2lvbigpXHJcbiAgICB9XHJcbiAgICB0aGlzLmRvbU5vZGUgPSBSZWFjdC5jcmVhdGVSZWYoKVxyXG4gIH1cclxuXHJcbiAgc3RhdGljIG1hcEV4dHJhU3RhdGVQcm9wcyA9IChzdGF0ZTogSU1TdGF0ZSwgb3duUHJvcHM6IEFsbFdpZGdldFByb3BzPElNQ29uZmlnPik6IEV4dHJhUHJvcHMgPT4ge1xyXG4gICAgbGV0IHNlbGVjdGVkID0gZmFsc2VcclxuICAgIGNvbnN0IHNlbGVjdGlvbiA9IHN0YXRlLmFwcFJ1bnRpbWVJbmZvLnNlbGVjdGlvblxyXG4gICAgaWYgKHNlbGVjdGlvbiAmJiBzdGF0ZS5hcHBDb25maWcubGF5b3V0c1tzZWxlY3Rpb24ubGF5b3V0SWRdKSB7XHJcbiAgICAgIGNvbnN0IGxheW91dEl0ZW0gPSBzdGF0ZS5hcHBDb25maWcubGF5b3V0c1tzZWxlY3Rpb24ubGF5b3V0SWRdLmNvbnRlbnRbc2VsZWN0aW9uLmxheW91dEl0ZW1JZF1cclxuICAgICAgc2VsZWN0ZWQgPSBsYXlvdXRJdGVtICYmIGxheW91dEl0ZW0ud2lkZ2V0SWQgPT09IG93blByb3BzLmlkXHJcbiAgICB9XHJcbiAgICBjb25zdCBpc0luQnVpbGRlciA9IHN0YXRlLmFwcENvbnRleHQuaXNJbkJ1aWxkZXJcclxuICAgIGNvbnN0IGFjdGl2ZSA9IGlzSW5CdWlsZGVyICYmIHNlbGVjdGVkXHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgYWN0aXZlLFxyXG4gICAgICBhcHBNb2RlOiBzdGF0ZS5hcHBSdW50aW1lSW5mby5hcHBNb2RlLFxyXG4gICAgICBxdWVyeU9iamVjdDogc3RhdGUucXVlcnlPYmplY3QsXHJcbiAgICAgIGlzUlRMOiBzdGF0ZS5hcHBDb250ZXh0LmlzUlRMLFxyXG4gICAgICBicm93c2VyU2l6ZU1vZGU6IHN0YXRlLmJyb3dzZXJTaXplTW9kZSxcclxuICAgICAgdXJpOiBzdGF0ZS5hcHBDb25maWcud2lkZ2V0c1tvd25Qcm9wcy5pZF0/LnVyaVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgc3RhdGljIHZlcnNpb25NYW5hZ2VyID0gdmVyc2lvbk1hbmFnZXJcclxuXHJcbiAgY29tcG9uZW50RGlkVXBkYXRlIChwcmV2UHJvcHM6IEFsbFdpZGdldFByb3BzPElNQ29uZmlnPiAmIEV4dHJhUHJvcHMsIHByZXZTdGF0ZTogU3RhdGUpIHtcclxuICAgIGlmICghdGhpcy5wcm9wcy51c2VEYXRhU291cmNlc0VuYWJsZWQgJiZcclxuICAgICAgKFxyXG4gICAgICAgIHRoaXMucHJvcHMuY29uZmlnICE9PSBwcmV2UHJvcHMuY29uZmlnIHx8IHByZXZQcm9wcy51c2VEYXRhU291cmNlc0VuYWJsZWRcclxuICAgICAgKVxyXG4gICAgKSB7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgIHRleHQ6IHRoaXMuZ2V0VGV4dEZyb21Qcm9wcygpLFxyXG4gICAgICAgIHRvb2xUaXA6IHRoaXMucHJvcHMuY29uZmlnICYmIHRoaXMucHJvcHMuY29uZmlnLmZ1bmN0aW9uQ29uZmlnICYmIHRoaXMucHJvcHMuY29uZmlnLmZ1bmN0aW9uQ29uZmlnLnRvb2xUaXAsXHJcbiAgICAgICAgdXJsOiB0aGlzLnByb3BzLmNvbmZpZyAmJiB0aGlzLnByb3BzLmNvbmZpZy5mdW5jdGlvbkNvbmZpZyAmJiB0aGlzLnByb3BzLmNvbmZpZy5mdW5jdGlvbkNvbmZpZy5saW5rUGFyYW0gJiYgdGhpcy5wcm9wcy5jb25maWcuZnVuY3Rpb25Db25maWcubGlua1BhcmFtLnZhbHVlXHJcbiAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHRoaXMucHJvcHMudXNlRGF0YVNvdXJjZXNFbmFibGVkICYmXHJcbiAgICAgIChcclxuICAgICAgICB0aGlzLnByb3BzLmNvbmZpZyAhPT0gcHJldlByb3BzLmNvbmZpZyB8fCAhcHJldlByb3BzLnVzZURhdGFTb3VyY2VzRW5hYmxlZFxyXG4gICAgICApXHJcbiAgICApIHtcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgdGV4dEV4cHJlc3Npb246IHRoaXMuZ2V0VGV4dEV4cHJlc3Npb24oKSxcclxuICAgICAgICB0aXBFeHByZXNzaW9uOiB0aGlzLmdldFRpcEV4cHJlc3Npb24oKSxcclxuICAgICAgICB1cmxFeHByZXNzaW9uOiB0aGlzLmdldFVybEV4cHJlc3Npb24oKVxyXG4gICAgICB9KVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZ2V0VGV4dEZyb21Qcm9wcyA9ICgpOiBzdHJpbmcgPT4ge1xyXG4gICAgcmV0dXJuIHR5cGVvZiB0aGlzLnByb3BzLmNvbmZpZz8uZnVuY3Rpb25Db25maWc/LnRleHQgPT09ICdzdHJpbmcnXHJcbiAgICAgID8gdGhpcy5wcm9wcy5jb25maWc/LmZ1bmN0aW9uQ29uZmlnPy50ZXh0XHJcbiAgICAgIDogdGhpcy5wcm9wcy5pbnRsLmZvcm1hdE1lc3NhZ2UoeyBpZDogJ3ZhcmlhYmxlQnV0dG9uJywgZGVmYXVsdE1lc3NhZ2U6IGppbXVVaURlZmF1bHRNZXNzYWdlcy52YXJpYWJsZUJ1dHRvbiB9KVxyXG4gIH1cclxuXHJcbiAgZ2V0VGlwRXhwcmVzc2lvbiA9ICgpOiBJTUV4cHJlc3Npb24gPT4ge1xyXG4gICAgcmV0dXJuICh0aGlzLnByb3BzLmNvbmZpZyAmJiB0aGlzLnByb3BzLmNvbmZpZy5mdW5jdGlvbkNvbmZpZyAmJiB0aGlzLnByb3BzLmNvbmZpZy5mdW5jdGlvbkNvbmZpZy50b29sVGlwRXhwcmVzc2lvbiAmJlxyXG4gICAgICB0aGlzLnByb3BzLmNvbmZpZy5mdW5jdGlvbkNvbmZpZy50b29sVGlwRXhwcmVzc2lvbikgfHxcclxuICAgICAgSW1tdXRhYmxlKHtcclxuICAgICAgICBuYW1lOiAnJyxcclxuICAgICAgICBwYXJ0czogW3sgdHlwZTogRXhwcmVzc2lvblBhcnRUeXBlLlN0cmluZywgZXhwOiBgXCIke3RoaXMucHJvcHMuY29uZmlnPy5mdW5jdGlvbkNvbmZpZz8udG9vbFRpcCB8fCAnJ31cImAgfV1cclxuICAgICAgfSlcclxuICB9XHJcblxyXG4gIGdldFRleHRFeHByZXNzaW9uID0gKCk6IElNRXhwcmVzc2lvbiA9PiB7XHJcbiAgICByZXR1cm4gKHRoaXMucHJvcHMuY29uZmlnICYmIHRoaXMucHJvcHMuY29uZmlnLmZ1bmN0aW9uQ29uZmlnICYmIHRoaXMucHJvcHMuY29uZmlnLmZ1bmN0aW9uQ29uZmlnLnRleHRFeHByZXNzaW9uICYmXHJcbiAgICAgIHRoaXMucHJvcHMuY29uZmlnLmZ1bmN0aW9uQ29uZmlnLnRleHRFeHByZXNzaW9uKSB8fFxyXG4gICAgICBJbW11dGFibGUoe1xyXG4gICAgICAgIG5hbWU6ICcnLFxyXG4gICAgICAgIHBhcnRzOiBbeyB0eXBlOiBFeHByZXNzaW9uUGFydFR5cGUuU3RyaW5nLCBleHA6IGBcIiR7dGhpcy5wcm9wcy5jb25maWc/LmZ1bmN0aW9uQ29uZmlnPy50ZXh0IHx8IHRoaXMuZ2V0VGV4dEZyb21Qcm9wcygpfVwiYCB9XVxyXG4gICAgICB9KVxyXG4gIH1cclxuXHJcbiAgZ2V0VXJsRXhwcmVzc2lvbiA9ICgpOiBJTUV4cHJlc3Npb24gPT4ge1xyXG4gICAgY29uc3QgZXhwcmVzc2lvbiA9IHRoaXMucHJvcHMuY29uZmlnICYmIHRoaXMucHJvcHMuY29uZmlnLmZ1bmN0aW9uQ29uZmlnICYmIHRoaXMucHJvcHMuY29uZmlnLmZ1bmN0aW9uQ29uZmlnLmxpbmtQYXJhbSAmJlxyXG4gICAgICB0aGlzLnByb3BzLmNvbmZpZy5mdW5jdGlvbkNvbmZpZy5saW5rUGFyYW0gJiYgdGhpcy5wcm9wcy5jb25maWcuZnVuY3Rpb25Db25maWcubGlua1BhcmFtLmV4cHJlc3Npb25cclxuXHJcbiAgICByZXR1cm4gZXhwcmVzc2lvbiB8fCBudWxsXHJcbiAgfVxyXG5cclxuICBvblRleHRFeHBSZXNvbHZlQ2hhbmdlID0gcmVzdWx0ID0+IHtcclxuICAgIGlmIChyZXN1bHQuaXNTdWNjZXNzZnVsKSB7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyB0ZXh0OiByZXN1bHQudmFsdWUgfSlcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGxldCByZXM6IHN0cmluZyA9ICcnXHJcbiAgICAgIGNvbnN0IGVycm9yQ29kZSA9IHJlc3VsdC52YWx1ZVxyXG4gICAgICBpZiAoZXJyb3JDb2RlID09PSBFeHByZXNzaW9uUmVzb2x2ZXJFcnJvckNvZGUuRmFpbGVkKSB7XHJcbiAgICAgICAgcmVzID0gdGhpcy5zdGF0ZS50ZXh0RXhwcmVzc2lvbiAmJiB0aGlzLnN0YXRlLnRleHRFeHByZXNzaW9uLm5hbWVcclxuICAgICAgfVxyXG5cclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7IHRleHQ6IHJlcyB9KVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgb25UaXBFeHBSZXNvbHZlQ2hhbmdlID0gcmVzdWx0ID0+IHtcclxuICAgIGlmIChyZXN1bHQuaXNTdWNjZXNzZnVsKSB7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyB0b29sVGlwOiByZXN1bHQudmFsdWUgfSlcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyB0b29sVGlwOiAnJyB9KVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgb25VcmxFeHBSZXNvbHZlQ2hhbmdlID0gcmVzdWx0ID0+IHtcclxuICAgIGlmIChyZXN1bHQuaXNTdWNjZXNzZnVsKSB7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyB1cmw6IHJlc3VsdC52YWx1ZSB9KVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgbGV0IHJlczogc3RyaW5nID0gJydcclxuICAgICAgY29uc3QgZXJyb3JDb2RlID0gcmVzdWx0LnZhbHVlXHJcbiAgICAgIGlmIChlcnJvckNvZGUgPT09IEV4cHJlc3Npb25SZXNvbHZlckVycm9yQ29kZS5GYWlsZWQpIHtcclxuICAgICAgICByZXMgPSB0aGlzLnN0YXRlLnVybEV4cHJlc3Npb24gJiYgdGhpcy5zdGF0ZS51cmxFeHByZXNzaW9uLm5hbWVcclxuICAgICAgfVxyXG5cclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7IHVybDogcmVzIH0pXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBnZXRXaGV0aGVyVXNlUXVpY2tTdHlsZSA9IChjb25maWc6IElNQ29uZmlnKTogYm9vbGVhbiA9PiB7XHJcbiAgICByZXR1cm4gISEoY29uZmlnICYmIGNvbmZpZy5zdHlsZUNvbmZpZyAmJiBjb25maWcuc3R5bGVDb25maWcudGhlbWVTdHlsZSAmJiBjb25maWcuc3R5bGVDb25maWcudGhlbWVTdHlsZS5xdWlja1N0eWxlVHlwZSlcclxuICB9XHJcblxyXG4gIGdldEljb25TdHlsZSA9IChyZWd1bGFySWNvblByb3BzOiBJTUljb25Qcm9wcywgaG92ZXJJY29uUHJvcHM6IElNSWNvblByb3BzKTogU2VyaWFsaXplZFN0eWxlcyA9PiB7XHJcbiAgICBjb25zdCByID0gcmVndWxhckljb25Qcm9wcyB8fCAoe30gYXMgSU1JY29uUHJvcHMpXHJcbiAgICBjb25zdCBoID0gaG92ZXJJY29uUHJvcHMgfHwgKHt9IGFzIElNSWNvblByb3BzKVxyXG5cclxuICAgIHJldHVybiBjc3NgXHJcbiAgICAgICYgaW1nLCAmIHN2Z3tcclxuICAgICAgICBjb2xvcjogJHtyLmNvbG9yfTtcclxuICAgICAgICBmaWxsOiAke3IuY29sb3J9O1xyXG4gICAgICAgIHdpZHRoOiAke3Iuc2l6ZX0ke0Rpc3RhbmNlVW5pdHMuUElYRUx9O1xyXG4gICAgICAgIGhlaWdodDogJHtyLnNpemV9JHtEaXN0YW5jZVVuaXRzLlBJWEVMfTtcclxuICAgICAgfVxyXG4gICAgICAmOmhvdmVye1xyXG4gICAgICAgIGltZywgc3Zne1xyXG4gICAgICAgICAgY29sb3I6ICR7aC5jb2xvcn07XHJcbiAgICAgICAgICBmaWxsOiAke2guY29sb3J9O1xyXG4gICAgICAgICAgd2lkdGg6ICR7aC5zaXplfSR7RGlzdGFuY2VVbml0cy5QSVhFTH07XHJcbiAgICAgICAgICBoZWlnaHQ6ICR7aC5zaXplfSR7RGlzdGFuY2VVbml0cy5QSVhFTH07XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICBgXHJcbiAgfVxyXG5cclxuICByZW1vdmVVbmRlZmluZWRTdHlsZSA9IChzdHlsZTogUmVhY3QuQ1NTUHJvcGVydGllcyk6IFJlYWN0LkNTU1Byb3BlcnRpZXMgPT4ge1xyXG4gICAgaWYgKCFzdHlsZSkge1xyXG4gICAgICByZXR1cm4gc3R5bGVcclxuICAgIH1cclxuICAgIGNvbnN0IHJlbW92ZWRVbmRlZmluZWRTdHlsZSA9IHt9XHJcbiAgICBPYmplY3Qua2V5cyhzdHlsZSkuZm9yRWFjaChzdHlsZU5hbWUgPT4ge1xyXG4gICAgICBpZiAoKHR5cGVvZiBzdHlsZVtzdHlsZU5hbWVdID09PSAnc3RyaW5nJyAmJiAhc3R5bGVbc3R5bGVOYW1lXS5pbmNsdWRlcygndW5kZWZpbmVkJykpIHx8XHJcbiAgICAgICAgdHlwZW9mIHN0eWxlW3N0eWxlTmFtZV0gPT09ICdudW1iZXInKSB7XHJcbiAgICAgICAgcmVtb3ZlZFVuZGVmaW5lZFN0eWxlW3N0eWxlTmFtZV0gPSBzdHlsZVtzdHlsZU5hbWVdXHJcbiAgICAgIH1cclxuICAgIH0pXHJcbiAgICByZXR1cm4gcmVtb3ZlZFVuZGVmaW5lZFN0eWxlXHJcbiAgfVxyXG5cclxuICBnZXRMaW5rQ29tcG9uZW50ID0gKCkgPT4ge1xyXG4gICAgY29uc3QgY29uZmlnID0gdGhpcy5wcm9wcy5jb25maWdcclxuICAgIGNvbnN0IGxpbmtQYXJhbSA9IGNvbmZpZy5mdW5jdGlvbkNvbmZpZy5saW5rUGFyYW1cclxuICAgIGNvbnN0IHRleHQgPSB0aGlzLnN0YXRlLnRleHRcclxuICAgIGNvbnN0IHRpdGxlID0gdGhpcy5zdGF0ZS50b29sVGlwXHJcbiAgICBjb25zdCBpY29uUHJvcGVydHkgPSBjb25maWcuZnVuY3Rpb25Db25maWc/Lmljb24/LmRhdGE/LnByb3BlcnRpZXNcclxuICAgIGNvbnN0IGljb25OYW1lID0gaWNvblByb3BlcnR5Py5pc1VwbG9hZGVkID8gaWNvblByb3BlcnR5Py5vcmlnaW5hbE5hbWUgOiBpY29uUHJvcGVydHk/LmZpbGVuYW1lXHJcbiAgICBsZXQgYWNjZXNzaWJpbGl0eUxhYmVsID0gdGhpcy5zdGF0ZS50b29sVGlwIHx8IHRleHQgfHwgaWNvbk5hbWVcclxuXHJcbiAgICBsZXQgY3VzdG9tU3R5bGVcclxuICAgIGxldCBpY29uU3R5bGVcclxuICAgIGlmIChjb25maWcuc3R5bGVDb25maWcgJiYgY29uZmlnLnN0eWxlQ29uZmlnLmN1c3RvbVN0eWxlKSB7XHJcbiAgICAgIGNvbnN0IHJlZ3VsYXIgPSBjb25maWcuc3R5bGVDb25maWcuY3VzdG9tU3R5bGUucmVndWxhclxyXG4gICAgICBjb25zdCBob3ZlciA9IGNvbmZpZy5zdHlsZUNvbmZpZy5jdXN0b21TdHlsZS5ob3ZlclxyXG4gICAgICBpZiAoY29uZmlnLnN0eWxlQ29uZmlnLnVzZUN1c3RvbSkge1xyXG4gICAgICAgIGNvbnN0IHN0eWxlID0gc3R5bGVVdGlscy50b0NTU1N0eWxlKHJlZ3VsYXIgJiYgcmVndWxhci53aXRob3V0KCdpY29uUHJvcHMnKS5hc011dGFibGUoeyBkZWVwOiB0cnVlIH0pKSBhcyBSZWFjdC5DU1NQcm9wZXJ0aWVzXHJcbiAgICAgICAgY29uc3Qgb3JpZ2luYWxIb3ZlclN0eWxlID0gc3R5bGVVdGlscy50b0NTU1N0eWxlKGhvdmVyICYmIGhvdmVyLndpdGhvdXQoJ2ljb25Qcm9wcycpLmFzTXV0YWJsZSh7IGRlZXA6IHRydWUgfSkpIGFzIFJlYWN0LkNTU1Byb3BlcnRpZXNcclxuICAgICAgICBjb25zdCBob3ZlclN0eWxlID0geyAuLi5zdHlsZSwgLi4ub3JpZ2luYWxIb3ZlclN0eWxlIH1cclxuICAgICAgICBpZiAodGhpcy5wcm9wcy5hY3RpdmUgJiYgdGhpcy5wcm9wcy5hcHBNb2RlICE9PSBBcHBNb2RlLlJ1bikge1xyXG4gICAgICAgICAgY29uc3Qgd2lkZ2V0U3RhdGU6IElNV2lkZ2V0U3RhdGUgPSBnZXRBcHBTdG9yZSgpLmdldFN0YXRlKCkud2lkZ2V0c1N0YXRlW3RoaXMucHJvcHMuaWRdIHx8IEltbXV0YWJsZSh7fSlcclxuICAgICAgICAgIGN1c3RvbVN0eWxlID0ge1xyXG4gICAgICAgICAgICBzdHlsZTogd2lkZ2V0U3RhdGUuaXNDb25maWd1cmluZ0hvdmVyXHJcbiAgICAgICAgICAgICAgPyB7IC4uLnRoaXMucmVtb3ZlVW5kZWZpbmVkU3R5bGUoc3R5bGUpLCAuLi50aGlzLnJlbW92ZVVuZGVmaW5lZFN0eWxlKGhvdmVyU3R5bGUpIH1cclxuICAgICAgICAgICAgICA6IHN0eWxlLFxyXG4gICAgICAgICAgICBob3ZlclN0eWxlXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBpY29uU3R5bGUgPSB0aGlzLmdldEljb25TdHlsZShcclxuICAgICAgICAgICAgd2lkZ2V0U3RhdGUuaXNDb25maWd1cmluZ0hvdmVyID8geyAuLi5yZWd1bGFyPy5pY29uUHJvcHMsIC4uLmhvdmVyPy5pY29uUHJvcHMgfSA6IHJlZ3VsYXI/Lmljb25Qcm9wcyxcclxuICAgICAgICAgICAgaG92ZXI/Lmljb25Qcm9wc1xyXG4gICAgICAgICAgKVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBjdXN0b21TdHlsZSA9IHtcclxuICAgICAgICAgICAgc3R5bGUsXHJcbiAgICAgICAgICAgIGhvdmVyU3R5bGVcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGljb25TdHlsZSA9IHRoaXMuZ2V0SWNvblN0eWxlKHJlZ3VsYXIgJiYgcmVndWxhci5pY29uUHJvcHMsIGhvdmVyICYmIGhvdmVyLmljb25Qcm9wcylcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjb25zdCB1c2VRdWlja1N0eWxlID0gdGhpcy5nZXRXaGV0aGVyVXNlUXVpY2tTdHlsZShjb25maWcpXHJcbiAgICBjb25zdCB0aGVtZVN0eWxlOiBCdXR0b25Qcm9wcyA9IHVzZVF1aWNrU3R5bGVcclxuICAgICAgPyB7XHJcbiAgICAgICAgICB0eXBlOiBjb25maWcuc3R5bGVDb25maWcudGhlbWVTdHlsZS5xdWlja1N0eWxlVHlwZVxyXG4gICAgICAgIH1cclxuICAgICAgOiB7XHJcbiAgICAgICAgICB0eXBlOiAnZGVmYXVsdCdcclxuICAgICAgICB9XHJcblxyXG4gICAgY29uc3QgYmFzaWNDbGFzc05hbWVzID0gJ3dpZGdldC1idXR0b24tbGluayB0ZXh0LXRydW5jYXRlIHctMTAwIGgtMTAwIHAtMCBkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyIGp1c3RpZnktY29udGVudC1jZW50ZXInXHJcblxyXG4gICAgbGV0IHF1ZXJ5T2JqZWN0XHJcbiAgICBsZXQgdGFyZ2V0OiBMaW5rVGFyZ2V0XHJcbiAgICBsZXQgbGlua1RvOiBMaW5rUmVzdWx0XHJcbiAgICBpZiAobGlua1BhcmFtICYmIGxpbmtQYXJhbS5saW5rVHlwZSkge1xyXG4gICAgICB0YXJnZXQgPSBsaW5rUGFyYW0ub3BlblR5cGVcclxuICAgICAgbGlua1RvID0ge1xyXG4gICAgICAgIGxpbmtUeXBlOiBsaW5rUGFyYW0ubGlua1R5cGVcclxuICAgICAgfSBhcyBMaW5rUmVzdWx0XHJcblxyXG4gICAgICBpZiAobGlua1BhcmFtLmxpbmtUeXBlID09PSBMaW5rVHlwZS5XZWJBZGRyZXNzKSB7XHJcbiAgICAgICAgbGlua1RvLnZhbHVlID0gdGhpcy5zdGF0ZS51cmxcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBsaW5rVG8udmFsdWUgPSBsaW5rUGFyYW0udmFsdWVcclxuICAgICAgICBxdWVyeU9iamVjdCA9IHRoaXMucHJvcHMucXVlcnlPYmplY3RcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGljb24gPSBjb25maWcuZnVuY3Rpb25Db25maWcuaWNvblxyXG4gICAgY29uc3QgaXNSVEwgPSB0aGlzLnByb3BzLmlzUlRMXHJcbiAgICBjb25zdCBsZWZ0SWNvbiA9IGljb24gJiYgKCFpY29uLnBvc2l0aW9uIHx8IGljb24ucG9zaXRpb24gPT09IEljb25Qb3NpdGlvbi5MZWZ0KSAmJiA8SWNvbiBpY29uPXtpY29uLmRhdGEuc3ZnfSBjbGFzc05hbWU9e2NsYXNzTmFtZXMoeyAnbXItMiBtbC0wJzogISF0ZXh0ICYmICFpc1JUTCwgJ21sLTIgbXItMCc6ICEhdGV4dCAmJiBpc1JUTCwgJ214LTAnOiAhdGV4dCB9KX0gYXJpYS1oaWRkZW49e3RydWV9IC8+XHJcbiAgICBjb25zdCByaWdodEljb24gPSBpY29uICYmIGljb24ucG9zaXRpb24gJiYgaWNvbi5wb3NpdGlvbiA9PT0gSWNvblBvc2l0aW9uLlJpZ2h0ICYmIDxJY29uIGljb249e2ljb24uZGF0YS5zdmd9IGNsYXNzTmFtZT17Y2xhc3NOYW1lcyh7ICdtbC0yIG1yLTAnOiAhIXRleHQgJiYgIWlzUlRMLCAnbXItMiBtbC0wJzogISF0ZXh0ICYmIGlzUlRMLCAnbXgtMCc6ICF0ZXh0IH0pfSBhcmlhLWhpZGRlbj17dHJ1ZX0gLz5cclxuXHJcbiAgICBpZiAodGFyZ2V0ID09PSAnX2JsYW5rJykge1xyXG4gICAgICBhY2Nlc3NpYmlsaXR5TGFiZWwgPSBgJHthY2Nlc3NpYmlsaXR5TGFiZWx9LCAke3RoaXMucHJvcHMuaW50bC5mb3JtYXRNZXNzYWdlKHsgaWQ6ICdvcGVuSW5OZXdXaW5kb3cnIH0pfWBcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBhdXRvU2l6ZSA9IHRoaXMucHJvcHMuYXV0b1dpZHRoICYmIHRoaXMucHJvcHMuYXV0b0hlaWdodFxyXG4gICAgY29uc3QgaXNJY29uID0gaWNvbiAmJiAhdGV4dFxyXG5cclxuICAgIHJldHVybiA8TGluayB0bz17bGlua1RvfSB0YXJnZXQ9e3RhcmdldH0gcXVlcnlPYmplY3Q9e3F1ZXJ5T2JqZWN0fVxyXG4gICAgICB0aXRsZT17dGl0bGV9IGNsYXNzTmFtZT17YmFzaWNDbGFzc05hbWVzfSByb2xlPSdidXR0b24nXHJcbiAgICAgIGN1c3RvbVN0eWxlPXtjdXN0b21TdHlsZX0gey4uLnRoZW1lU3R5bGV9IGNzcz17aWNvblN0eWxlfVxyXG4gICAgICBhcmlhLWxhYmVsPXthY2Nlc3NpYmlsaXR5TGFiZWx9XHJcbiAgICA+XHJcbiAgICAgIDxzcGFuIGNsYXNzTmFtZT17Y2xhc3NOYW1lcygnd2lkZ2V0LWJ1dHRvbi10ZXh0IGQtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXIganVzdGlmeS1jb250ZW50LWNlbnRlcicsIHsgJ2F1dG8tc2l6ZS1pY29uJzogYXV0b1NpemUgJiYgaXNJY29uIH0pfSA+XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgaXNSVEwgPyByaWdodEljb24gOiBsZWZ0SWNvblxyXG4gICAgICAgIH1cclxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9J3RleHQtdHJ1bmNhdGUnPnt0ZXh0fTwvc3Bhbj5cclxuICAgICAgICB7XHJcbiAgICAgICAgICBpc1JUTCA/IGxlZnRJY29uIDogcmlnaHRJY29uXHJcbiAgICAgICAgfVxyXG4gICAgICA8L3NwYW4+XHJcbiAgICA8L0xpbms+XHJcbiAgfVxyXG5cclxuICBvbkNsaWNrID0gZSA9PiB7XHJcbiAgICBjb25zdCB0aW1lc3RhbXAgPSAobmV3IERhdGUoKSkuZ2V0VGltZSgpXHJcbiAgICAvLyBpbiBjYXNlIHRoYXQgYm90aCBjbGljayBhbmQgdG91Y2hlbmQgYmUgdHJpZ2dlcmVkIGluIGlPU1xyXG4gICAgaWYgKHRoaXMubGFzdENsaWNrVGltZXN0YW1wICYmIHRpbWVzdGFtcCAtIHRoaXMubGFzdENsaWNrVGltZXN0YW1wIDwgMjAwKSByZXR1cm5cclxuICAgIHRoaXMubGFzdENsaWNrVGltZXN0YW1wID0gdGltZXN0YW1wXHJcbiAgICBlLmV4YkV2ZW50VHlwZSA9ICdsaW5rQ2xpY2snXHJcbiAgICBNZXNzYWdlTWFuYWdlci5nZXRJbnN0YW5jZSgpLnB1Ymxpc2hNZXNzYWdlKFxyXG4gICAgICBuZXcgQnV0dG9uQ2xpY2tNZXNzYWdlKHRoaXMucHJvcHMuaWQpXHJcbiAgICApXHJcbiAgfVxyXG5cclxuICByZW5kZXIgKCkge1xyXG4gICAgY29uc3QgaXNEYXRhU291cmNlVXNlZCA9IHRoaXMucHJvcHMudXNlRGF0YVNvdXJjZXNFbmFibGVkXHJcblxyXG4gICAgY29uc3QgTGlua0NvbXBvbmVudCA9IHRoaXMuZ2V0TGlua0NvbXBvbmVudCgpXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdlxyXG4gICAgICAgIGNsYXNzTmFtZT1cImppbXUtd2lkZ2V0IHdpZGdldC1idXR0b24gdy0xMDAgaC0xMDBcIlxyXG4gICAgICAgIGNzcz17Z2V0U3R5bGUodGhpcy5wcm9wcy50aGVtZSl9IHJlZj17dGhpcy5kb21Ob2RlfVxyXG4gICAgICAgIG9uQ2xpY2s9e3RoaXMub25DbGlja31cclxuICAgICAgICBvblRvdWNoRW5kPXt0aGlzLm9uQ2xpY2t9XHJcbiAgICAgICAgb25LZXlVcD17ZXZ0ID0+IHtcclxuICAgICAgICAgIGlmIChldnQua2V5ID09PSAnICcgfHwgZXZ0LmtleSA9PT0gJ0VudGVyJykge1xyXG4gICAgICAgICAgICB0aGlzLm9uQ2xpY2soZXZ0KVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH19XHJcbiAgICAgID5cclxuICAgICAgICB7TGlua0NvbXBvbmVudH1cclxuICAgICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6ICdub25lJyB9fT5cclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgaXNEYXRhU291cmNlVXNlZCAmJlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgIDxFeHByZXNzaW9uUmVzb2x2ZXJDb21wb25lbnQgdXNlRGF0YVNvdXJjZXM9e3RoaXMucHJvcHMudXNlRGF0YVNvdXJjZXN9IGV4cHJlc3Npb249e3RoaXMuc3RhdGUudGV4dEV4cHJlc3Npb259XHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5vblRleHRFeHBSZXNvbHZlQ2hhbmdlfSB3aWRnZXRJZD17dGhpcy5wcm9wcy5pZH1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDxFeHByZXNzaW9uUmVzb2x2ZXJDb21wb25lbnQgdXNlRGF0YVNvdXJjZXM9e3RoaXMucHJvcHMudXNlRGF0YVNvdXJjZXN9IGV4cHJlc3Npb249e3RoaXMuc3RhdGUudGlwRXhwcmVzc2lvbn1cclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLm9uVGlwRXhwUmVzb2x2ZUNoYW5nZX0gd2lkZ2V0SWQ9e3RoaXMucHJvcHMuaWR9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8RXhwcmVzc2lvblJlc29sdmVyQ29tcG9uZW50IHVzZURhdGFTb3VyY2VzPXt0aGlzLnByb3BzLnVzZURhdGFTb3VyY2VzfSBleHByZXNzaW9uPXt0aGlzLnN0YXRlLnVybEV4cHJlc3Npb259XHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5vblVybEV4cFJlc29sdmVDaGFuZ2V9IHdpZGdldElkPXt0aGlzLnByb3BzLmlkfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIClcclxuICB9XHJcbn1cclxuXG4gZXhwb3J0IGZ1bmN0aW9uIF9fc2V0X3dlYnBhY2tfcHVibGljX3BhdGhfXyh1cmwpIHsgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gPSB1cmwgfSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==