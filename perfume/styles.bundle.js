webpackJsonp(["styles"],{

/***/ "../../../../../src/assets/DancingScript-Regular-webfont.eot":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "DancingScript-Regular-webfont.c3731d39f98e91f06c3a.eot";

/***/ }),

/***/ "../../../../../src/assets/DancingScript-Regular-webfont.svg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "DancingScript-Regular-webfont.2841803be3f68371d9a7.svg";

/***/ }),

/***/ "../../../../../src/assets/DancingScript-Regular-webfont.ttf":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "DancingScript-Regular-webfont.845b9abec19cbc5c6e21.ttf";

/***/ }),

/***/ "../../../../../src/assets/DancingScript-Regular-webfont.woff":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "DancingScript-Regular-webfont.d9aaa3c73a720a252f71.woff";

/***/ }),

/***/ "../../../../../src/styles.css":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("../../../../css-loader/index.js?{\"sourceMap\":false,\"importLoaders\":1}!../../../../postcss-loader/lib/index.js?{\"ident\":\"postcss\",\"sourceMap\":false}!../../../../../src/styles.css");
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__("../../../../style-loader/addStyles.js")(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../node_modules/css-loader/index.js??ref--7-1!../node_modules/postcss-loader/lib/index.js??postcss!./styles.css", function() {
			var newContent = require("!!../node_modules/css-loader/index.js??ref--7-1!../node_modules/postcss-loader/lib/index.js??postcss!./styles.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "../../../../css-loader/index.js?{\"sourceMap\":false,\"importLoaders\":1}!../../../../postcss-loader/lib/index.js?{\"ident\":\"postcss\",\"sourceMap\":false}!../../../../../src/styles.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "body {\n  background-color: #FDFBFA;\n  color: #141414;\n  margin: 0;\n  padding: 0;\n  text-align: center;\n  font-family: 'Open Sans', sans-serif;\n  font-size: 17px;\n  font-weight: 300;\n  line-height: 1.6;\n}\n\n@font-face {\n  font-family: 'DancingScript';\n  src: url(" + __webpack_require__("../../../../../src/assets/DancingScript-Regular-webfont.eot") + ");\n  src: url(" + __webpack_require__("../../../../../src/assets/DancingScript-Regular-webfont.eot") + "?#iefix) format('embedded-opentype'),\n       url(" + __webpack_require__("../../../../../src/assets/DancingScript-Regular-webfont.woff") + ") format('woff'),\n       url(" + __webpack_require__("../../../../../src/assets/DancingScript-Regular-webfont.ttf") + ") format('truetype'),\n       url(" + __webpack_require__("../../../../../src/assets/DancingScript-Regular-webfont.svg") + "#DancingScriptOTRegular) format('svg');\n  font-weight: normal;\n  font-style: normal;\n}\n\na {\n  color: #366fd1;\n  text-decoration: none;\n}\n\na:hover {\n  text-decoration: underline;\n}\n\nh1, h2, h3, h4, h5, h6 {\n  font-weight: 300;\n  line-height: 1.4;\n  margin: 1em 0 0.2em;\n  color: #8A7A75;\n}\n\nh1 {\n  margin: 6px 0 4px;\n  color: #F2DB77;\n  font-family: 'DancingScript', 'Helvetica Neue', Arial, sans-serif;\n  font-size: 70px;\n  font-weight: 400;\n}\n\nh2 {\n  font-size: 1.8em;\n  margin: 0.7em 0 0.3em;\n}\n\nh3 {\n  font-size: 1.6em;\n  margin: 0.7em 0 0.38em;\n}\n\nh4 {\n  font-size: 1.4em;\n margin: 0.7em 0 0.43em;\n}\n\nh5 {\n  font-size: 1.2em;\n  margin: 0.7em 0 0.5em;\n}\n\nh6 {\n  font-size: 1.1em;\n  margin: 1.4em 0 0.55em;\n}\n\nh1 + h1, h1 + h2, h1 + h3, h1 + h4, h1 + h5, h1 + h6,\nh2 + h1, h2 + h2, h2 + h3, h2 + h4, h2 + h5, h2 + h6,\nh3 + h1, h3 + h2, h3 + h3, h3 + h4, h3 + h5, h3 + h6,\nh4 + h1, h4 + h2, h4 + h3, h4 + h4, h4 + h5, h4 + h6,\nh5 + h1, h5 + h2, h5 + h3, h5 + h4, h5 + h5, h5 + h6,\nh6 + h1, h6 + h2, h6 + h3, h6 + h4, h6 + h5, h6 + h6 {\n  margin-top: 0;\n}\n\nblockquote,\nblockquote cite,\nol,\np,\npre,\nul {\n  margin: 0.6em 0;\n}\n\nblockquote {\n  border-left: 4px solid #bbb;\n  padding: 1px 14px;\n}\n\nblockquote cite {\n  display: block;\n}\n\nblockquote cite:before {\n  content: '\\2014   ';\n}\n\nol ol,\nul ul,\nol ul,\nul ol {\n  margin: 0;\n}\n\nul {\n  list-style: disc;\n  padding: 0 0 0 26px;\n}\n\nol {\n  list-style: decimal;\n}\n\nol ul,\nul ul {\n  padding: 0 0 0 18px;\n}\n\nul ol,\nol ol {\n  padding: 0 0 0 34px;\n}\n\nul li,\nol li {\n  margin: 5px 0;\n}\n\nstrong, b {\n  font-weight: 400;\n}\n\n.Box {\n  margin: 40px 0;\n  text-align: left;\n}\n\n.Box--first {\n  margin: 0 0 60px;\n}\n\n.Title {\n  position: relative;\n}\n\n.Layout .Content,\n.Layout .Footer {\n  padding: 32px;\n  max-width: 700px;\n  margin: 0 auto;\n}\n\n.Layout .Footer {\n  padding-top: 0;\n}\n\n.Layout .Footer {\n  color: #636363;\n  font-size: 12px;\n  text-align: center;\n}\n\n.Picture {\n  border-radius: 250px;\n  margin-top: 30px;\n  width: 250px;\n}\n\n.Teapotio-logo,\n.Teapotio-symfonyLogo,\n.TwitterLogo,\n.PlanLogo {\n  margin: 15px 0;\n  width: 100px;\n}\n\n.Teapotio {\n  color: #343434;\n  font-size: 80px;\n  line-height: 1;\n}\n\n.Teapotio > * {\n  display: inline-block;\n  vertical-align: middle;\n}\n\n.ExternalLinkIcon {\n  display: inline-block;\n  font-size: 2em;\n  vertical-align: middle;\n}\n\n.Demo {\n  width: 100%;\n  text-align: left;\n}\n\n.Button {\n  display: inline-block;\n  background-color: #F5D7CD;\n  border-color: #DDBDB6;\n  color: #8A7A75;\n  font-weight: 500;\n  line-height: 1.25;\n  text-align: center;\n  white-space: nowrap;\n  vertical-align: middle;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  border: 1px solid transparent;\n  padding: 5px 12px;\n  margin-right: 20px;\n  font-size: 16px;\n  border-radius: .25rem;\n  cursor: pointer;\n  transition: all .3s ease-in-out;\n}\n\n.Button:hover {\n  color: #FDFBFA;\n  background-color: #F7E7A1;\n  border-color: #F2DB77;\n}\n", ""]);

// exports


/***/ }),

/***/ "../../../../css-loader/lib/css-base.js":
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),

/***/ "../../../../style-loader/addStyles.js":
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
var stylesInDom = {},
	memoize = function(fn) {
		var memo;
		return function () {
			if (typeof memo === "undefined") memo = fn.apply(this, arguments);
			return memo;
		};
	},
	isOldIE = memoize(function() {
		return /msie [6-9]\b/.test(self.navigator.userAgent.toLowerCase());
	}),
	getHeadElement = memoize(function () {
		return document.head || document.getElementsByTagName("head")[0];
	}),
	singletonElement = null,
	singletonCounter = 0,
	styleElementsInsertedAtTop = [];

module.exports = function(list, options) {
	if(typeof DEBUG !== "undefined" && DEBUG) {
		if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};
	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (typeof options.singleton === "undefined") options.singleton = isOldIE();

	// By default, add <style> tags to the bottom of <head>.
	if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

	var styles = listToStyles(list);
	addStylesToDom(styles, options);

	return function update(newList) {
		var mayRemove = [];
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			domStyle.refs--;
			mayRemove.push(domStyle);
		}
		if(newList) {
			var newStyles = listToStyles(newList);
			addStylesToDom(newStyles, options);
		}
		for(var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];
			if(domStyle.refs === 0) {
				for(var j = 0; j < domStyle.parts.length; j++)
					domStyle.parts[j]();
				delete stylesInDom[domStyle.id];
			}
		}
	};
}

function addStylesToDom(styles, options) {
	for(var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];
		if(domStyle) {
			domStyle.refs++;
			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}
			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];
			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}
			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles(list) {
	var styles = [];
	var newStyles = {};
	for(var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};
		if(!newStyles[id])
			styles.push(newStyles[id] = {id: id, parts: [part]});
		else
			newStyles[id].parts.push(part);
	}
	return styles;
}

function insertStyleElement(options, styleElement) {
	var head = getHeadElement();
	var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
	if (options.insertAt === "top") {
		if(!lastStyleElementInsertedAtTop) {
			head.insertBefore(styleElement, head.firstChild);
		} else if(lastStyleElementInsertedAtTop.nextSibling) {
			head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			head.appendChild(styleElement);
		}
		styleElementsInsertedAtTop.push(styleElement);
	} else if (options.insertAt === "bottom") {
		head.appendChild(styleElement);
	} else {
		throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
	}
}

function removeStyleElement(styleElement) {
	styleElement.parentNode.removeChild(styleElement);
	var idx = styleElementsInsertedAtTop.indexOf(styleElement);
	if(idx >= 0) {
		styleElementsInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement(options) {
	var styleElement = document.createElement("style");
	styleElement.type = "text/css";
	insertStyleElement(options, styleElement);
	return styleElement;
}

function createLinkElement(options) {
	var linkElement = document.createElement("link");
	linkElement.rel = "stylesheet";
	insertStyleElement(options, linkElement);
	return linkElement;
}

function addStyle(obj, options) {
	var styleElement, update, remove;

	if (options.singleton) {
		var styleIndex = singletonCounter++;
		styleElement = singletonElement || (singletonElement = createStyleElement(options));
		update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
		remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
	} else if(obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function") {
		styleElement = createLinkElement(options);
		update = updateLink.bind(null, styleElement);
		remove = function() {
			removeStyleElement(styleElement);
			if(styleElement.href)
				URL.revokeObjectURL(styleElement.href);
		};
	} else {
		styleElement = createStyleElement(options);
		update = applyToTag.bind(null, styleElement);
		remove = function() {
			removeStyleElement(styleElement);
		};
	}

	update(obj);

	return function updateStyle(newObj) {
		if(newObj) {
			if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
				return;
			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;
		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag(styleElement, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (styleElement.styleSheet) {
		styleElement.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = styleElement.childNodes;
		if (childNodes[index]) styleElement.removeChild(childNodes[index]);
		if (childNodes.length) {
			styleElement.insertBefore(cssNode, childNodes[index]);
		} else {
			styleElement.appendChild(cssNode);
		}
	}
}

function applyToTag(styleElement, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		styleElement.setAttribute("media", media)
	}

	if(styleElement.styleSheet) {
		styleElement.styleSheet.cssText = css;
	} else {
		while(styleElement.firstChild) {
			styleElement.removeChild(styleElement.firstChild);
		}
		styleElement.appendChild(document.createTextNode(css));
	}
}

function updateLink(linkElement, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	if(sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = linkElement.href;

	linkElement.href = URL.createObjectURL(blob);

	if(oldSrc)
		URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ 2:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/styles.css");


/***/ })

},[2]);
//# sourceMappingURL=styles.bundle.js.map