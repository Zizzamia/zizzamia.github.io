webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\nh1 {\n  margin: 6px 0 4px;\n  color: #F2DB77;\n  font-family: 'Dancing Script', cursive;\n  font-size: 70px;\n  font-weight: 400;\n}\n\nh2 {\n  padding: 0;\n  margin: 0 0 20px;\n  font-size: 30px;\n  font-weight: 400;\n  line-height: 40px;\n}\n\nh3 {\n  font-size: 1.6em;\n  margin: 0.7em 0 0.38em;\n}\n\n.Box {\n  margin: 60px 0 40px;\n  text-align: left;\n}\n\n.Box b {\n  font-weight: 600;\n}\n\n.Box--first {\n  font-family: 'Open Sans', sans-serif;\n  margin: 0 0 60px;\n}\n\n.Box img {\n  width: 680px;\n  border: 1px solid #ccc;\n  margin: 0 auto;\n  display: block;\n  border-radius: 2px;\n}\n\n.Title {\n  position: relative;\n}\n\n.Layout .Content,\n.Layout .Footer {\n  padding: 32px;\n  max-width: 760px;\n  margin: 0 auto;\n}\n\n.Layout .Footer {\n  padding-top: 0;\n}\n\n.Layout .Footer {\n  color: #636363;\n  font-size: 12px;\n  text-align: center;\n}\n\n.Picture {\n  border-radius: 250px;\n  margin-top: 30px;\n  width: 250px;\n}\n\n.Teapotio-logo,\n.Teapotio-symfonyLogo,\n.TwitterLogo,\n.PlanLogo {\n  margin: 15px 0;\n  width: 100px;\n}\n\n.Teapotio {\n  color: #343434;\n  font-size: 80px;\n  line-height: 1;\n}\n\n.Teapotio > * {\n  display: inline-block;\n  vertical-align: middle;\n}\n\n.ExternalLinkIcon {\n  display: inline-block;\n  font-size: 2em;\n  vertical-align: middle;\n}\n\n.Demo {\n  width: 100%;\n  text-align: left;\n}\n\n.Button {\n  display: inline-block;\n  background-color: #F5D7CD;\n  border-color: #DDBDB6;\n  color: #8A7A75;\n  font-weight: 500;\n  line-height: 1.25;\n  text-align: center;\n  white-space: nowrap;\n  vertical-align: middle;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  border: 1px solid transparent;\n  padding: 5px 12px;\n  margin-right: 20px;\n  font-size: 16px;\n  border-radius: .25rem;\n  cursor: pointer;\n  transition: all .3s ease-in-out;\n}\n\n.Button:hover {\n  color: #FDFBFA;\n  background-color: #F7E7A1;\n  border-color: #F2DB77;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"Layout\">\n  <div class=\"Content\">\n    <div class=\"Box Box--first\">\n      <h1>Perfume.js</h1>\n      <p>A JavaScript library for <b>measuring</b> Short and Long Script, <b>First Contentful Paint</b> (<a href=\"https://developers.google.com/web/updates/2017/06/user-centric-performance-metrics#first_paint_and_first_contentful_paint\" target=\"_blank\">FCP</a>), <b>Time to Interactive</b> (<a href=\"https://developers.google.com/web/tools/lighthouse/audits/time-to-interactive\" target=\"_blank\">TTI</a>), <b>Component First Paint</b> (CFM), annotating them to the DevTools timeline and reporting the results to <b>Google Analytics</b>.</p>\n      <a class=\"github-button\" href=\"https://github.com/zizzamia/perfume.js\" data-size=\"large\" data-show-count=\"true\" aria-label=\"Star zizzamia/perfume.js on GitHub\">Star</a>\n    </div>\n    <div class=\"Box\">\n      <h2 class=\"Title\">User-centric performance metrics</h2>\n      <p>When a user navigates to a web page, they're typically looking for visual feedback to reassure them that everything is going to work as expected.</p>\n      <p>Is it happening? Is it useful? Is it usable? Is it delightful?<br />\n      To understand when a page delivers this feedback to its users, we've defined several new metrics:</p>\n      <ul>\n        <li>First Contentful Paint (FCP)</li>\n        <li>Time to Interactive (TTI)</li>\n        <li>Component First Paint (CFP)</li>\n      </ul>\n      <p>Luckily, with the addition of a few new browser APIs, measuring these metrics on real devices is finally possible without a lot of hacks or workarounds that can make performance worse.</p>\n      <p><b>Perfume</b> leverage these new APIs for measuring performance that matters! ⚡️ </p>\n    </div>\n\n    <div class=\"Box\">\n      <h2 class=\"Title\">Installing and Imports</h2>\n      <p>NPM <a href=\"https://www.npmjs.com/package/perfume.js\" target=\"_blank\">https://www.npmjs.com/package/perfume.js</a></p>\n      <app-gist [gistId]=\"'Zizzamia/6ab4c33d749ae74d240ebace2cf944f8'\"></app-gist>\n    </div>\n\n    <div class=\"Box\">\n      <h2 class=\"Title\">First Contentful Paint (FCP)</h2>\n      <p>This metric mark the point, immediately after navigation, when the browser renders pixels to the screen. This is important to the user because it answers the question: is it happening?</p>\n      <p><b>FCP</b> marks the point when the browser renders the first bit of content from the DOM, which may be text, an image, SVG, or even a element.</p>\n      <p class=\"Demo\">\n        Result: ⚡️ Perfume.js: First Contentful Paint {{ perfume.firstContentfulPaintDuration.toFixed(2) }} ms\n      </p>\n      <app-gist [gistId]=\"'Zizzamia/15e965213aa87a5588a6756fef612f45'\"></app-gist>\n    </div>\n\n    <div class=\"Box\">\n      <h2 class=\"Title\">Time to Interactive (TTI)</h2>\n      <p>The metric marks the point at which your application is both visually rendered and capable of reliably responding to user input. An application could be unable to respond to user input for a couple of reasons:</p>\n      <ul>\n        <li>The JavaScript needed to make the components on the page work hasn't yet loaded;</li>\n        <li>There are long tasks blocking the main thread.</li>\n      </ul>\n      <p>The <b>TTI</b> metric identifies the point at which the page's initial JavaScript is loaded and the main thread is idle (free of long tasks). See the <a href=\"https://docs.google.com/document/d/1GGiI9-7KeY3TPqS3YT271upUVimo-XiL5mwWorDUD4c/preview#\" target=\"_blank\">metric definition</a> for in-depth implementation details.</p>\n      <p class=\"Demo\">\n        Result: ⚡️ Perfume.js: Time to interactive {{ perfume.timeToInteractiveDuration.toFixed(2) }} ms\n      </p>\n      <app-gist [gistId]=\"'Zizzamia/9c971fb35b898871953cc272924ce58d'\"></app-gist>\n    </div>\n\n    <div class=\"Box\">\n      <h2 class=\"Title\">Annotate metrics in the DevTools</h2>\n      <p><b>Performance.mark</b> (<a href=\"https://developer.mozilla.org/en-US/docs/Web/API/User_Timing_API\" target=\"_blank\">User Timing API</a>) is used to create an application-defined peformance entry in the browser's performance entry buffer.</p>\n      <p class=\"Demo\">\n        <button class=\"Button\" \n        (click)=\"measureFibonacci()\">Run Fibonacci</button>\n        <span>Result: {{ logFibonacci }}</span>\n      </p>\n      <app-gist [gistId]=\"'Zizzamia/e680d4f2f9f2bf9ba15b13207264f7bc'\"></app-gist>\n      <img src=\"{{ path }}assets/performance-mark.png\" />\n    </div>\n\n    <div class=\"Box\">\n      <h2 class=\"Title\">Component First Paint (CFP)</h2>\n      <p>This metric mark the point, immediately after creating a <b>new component</b>, when the browser renders pixels to the screen.</p>\n      <p class=\"Demo\">\n        <button type=\"button\" class=\"Button\"  #elBtn\n        data-toggle=\"popover\" title=\"Popover\" \n        data-placement=\"top\" data-content=\"And here's some amazing content.\"\n        (click)=\"togglePopover(elBtn)\">Click to toggle popover</button>\n        <span>Result: {{ logTogglePopover }}</span>\n      </p>\n      <app-gist [gistId]=\"'Zizzamia/ee3ec5ab7bb04822ff7535d18c7d9e96'\"></app-gist>\n      <img src=\"{{ path }}assets/performance-cfp.png\" />\n    </div>\n\n    <div class=\"Box\">\n      <h2 class=\"Title\">Custom Logging</h2>\n      <p>Save the duration and print it out exactly the way you want it.</p>\n      <p class=\"Demo\">\n        <button class=\"Button\" \n        (click)=\"customLogging()\">Run custom logging</button>\n        <span>Result: {{ logCustom }}</span>\n      </p>\n      <app-gist [gistId]=\"'Zizzamia/b16edc8b4052ac4186ebc62151de7dca'\"></app-gist>\n    </div>\n\n    <div class=\"Box\">\n      <h2 class=\"Title\">Google Analytics</h2>\n      <p>To enable Perfume to send your measures to Google Analytics User timing, set the option <b>enable:true</b> and a custom <a href=\"https://developers.google.com/analytics/devguides/collection/analyticsjs/field-reference#timingVar\" target=\"_blank\">user timing variable</a> <b>timingVar:\"name\"</b>.</p>\n      <app-gist [gistId]=\"'Zizzamia/221227bf333b0f6304a89fcd4f7038c4'\"></app-gist>\n      <img src=\"{{ path }}assets/performance-analytics.png\" />\n    </div>\n\n    <div class=\"Box\">\n      <h2 class=\"Title\">Copyright and license</h2>\n      <p>Code and documentation copyright 2018 <a href=\"https://twitter.com/Zizzamia\" target=\"_blank\">Leonardo Zizzamia</a>. Code released under the <a href=\"https://github.com/Zizzamia/perfume.js/blob/master/LICENSE\" target=\"_blank\">MIT license</a>. Docs released under Creative Commons.</p>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_perfume_js__ = __webpack_require__("../../../../perfume.js/dist/perfume.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// Angular & Third Party


var AppComponent = (function () {
    function AppComponent() {
        var perfume = new __WEBPACK_IMPORTED_MODULE_1_perfume_js__["a" /* default */]();
        perfume.googleAnalytics.enable = true;
        perfume.googleAnalytics.timingVar = 'userId';
        this.perfume = perfume;
        this.perfume.firstContentfulPaint();
        this.perfume.timeToInteractive();
        this.path = window.location.href;
    }
    AppComponent.prototype.fibonacci = function (num, memo) {
        if (memo === void 0) { memo = {}; }
        if (memo[num]) {
            return memo[num];
        }
        if (num <= 1) {
            return 1;
        }
        return memo[num] = this.fibonacci(num - 1, memo) + this.fibonacci(num - 2, memo);
    };
    AppComponent.prototype.measureFibonacci = function () {
        this.perfume.start('fibonacci');
        this.fibonacci(400);
        var duration = this.perfume.end('fibonacci', true);
        this.logFibonacci = "\u26A1\uFE0F Perfume.js: fibonacci " + duration.toFixed(2) + " ms";
    };
    AppComponent.prototype.togglePopover = function (element) {
        var _this = this;
        this.perfume.start('togglePopover');
        $(element).popover('toggle');
        this.perfume.endPaint('togglePopover', true)
            .then(function (duration) {
            _this.logTogglePopover = "\u26A1\uFE0F Perfume.js: togglePopover " + duration.toFixed(2) + " ms";
        });
    };
    AppComponent.prototype.customLogging = function () {
        this.perfume.start('fibonacci');
        this.fibonacci(400);
        var duration = this.perfume.end('fibonacci');
        this.perfume.log('Custom logging', duration);
        this.logCustom = "\u26A1\uFE0F Perfume.js: Custom logging " + duration.toFixed(2) + " ms";
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__gist_gist_component__ = __webpack_require__("../../../../../src/app/gist/gist.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// Angular


// Componentes


var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["E" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_3__gist_gist_component__["a" /* GistComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */]
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/gist/gist.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/gist/gist.component.html":
/***/ (function(module, exports) {

module.exports = "<iframe #iframe type=\"text/javascript\" width=\"100%\" frameborder=\"0\"></iframe>\n"

/***/ }),

/***/ "../../../../../src/app/gist/gist.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GistComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var GistComponent = (function () {
    function GistComponent() {
    }
    GistComponent.prototype.ngAfterViewInit = function () {
        this.iframe.nativeElement.id = 'gist-' + this.gistId;
        var doc = this.iframe.nativeElement.contentDocument || this.iframe.nativeElement.contentElement.contentWindow;
        var content = "\n      <html>\n        <head>\n          <base target=\"_parent\">\n        </head>\n        <body onload=\"parent.document.getElementById('" + this.iframe.nativeElement.id + "')\n        .style.height=document.body.scrollHeight + 'px'\">\n        <script type=\"text/javascript\" src=\"https://gist.github.com/" + this.gistId + ".js\"></script>\n        </body>\n      </html>\n    ";
        doc.open();
        doc.write(content);
        doc.close();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_1" /* ViewChild */])('iframe'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["r" /* ElementRef */])
    ], GistComponent.prototype, "iframe", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Input */])(),
        __metadata("design:type", Object)
    ], GistComponent.prototype, "gistId", void 0);
    GistComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-gist',
            template: __webpack_require__("../../../../../src/app/gist/gist.component.html"),
            styles: [__webpack_require__("../../../../../src/app/gist/gist.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], GistComponent);
    return GistComponent;
}());



/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");



Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* enableProdMode */])();
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map