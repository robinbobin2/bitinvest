webpackJsonp(["main"],{

/***/ "./angular/$$_gendir lazy recursive":
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
webpackEmptyAsyncContext.id = "./angular/$$_gendir lazy recursive";

/***/ }),

/***/ "./angular/app/analytics-categories/analytics-categories.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n        <div class=\"col-md-4\" style=\"padding-left:20px;\">\n        <h3 style=\"float:left; margin-top: 3px;\">Аналитика</h3>\n  <h6 style=\"color:#9b9b9b;margin-top:10px;float:left;width:10%;text-align:center\">228</h6>\n      </div>\n\n    \n      <div class=\"col-md-8\">\n        <ul class=\"tags\">\n          <li><a routerLinkActive=\"active\"  routerLink=\"/analytics/all\">Новое за сегодня</a></li>\n          <li><a routerLinkActive=\"active\" href=\"#\">Самое популярное</a></li>\n          <li><a routerLinkActive=\"active\" href=\"#\">Самое обсуждаемое</a></li>\n        </ul>\n      </div>\n </div>\n\n <div class=\"main-block\" style=\"width: 48%;float:left;margin:1%;\" *ngFor=\"let main_item of main_news\">\n        <div class=\"block\" style=\"background-size: cover; width: 100%; height: 240px; box-sizing: border-box;\">\n          <div style=\"position: absolute; z-index: 2; background: rgba(0,0,0,.5); top: 0; right: 0; left: 0; bottom: 0;\"></div>\n          <img style=\"z-index: 1; position: absolute; top: 0; left: 0; right: 0;\n          bottom: 0;\" src=\"{{main_item.photo}}\">\n          <div class=\"block-content\">\n            <span class=\"tag\"><a href=\"#\">{{main_item.category}}</a></span>\n            <table style=\"height: 140px;\"><tr><td valign=\"bottom\">\n            \n            <h2 style=\"position: relative; z-index: 999\"><a (click)=\"loadMore(main_item.id)\">{{main_item.title}}</a></h2>\n          </td></tr></table>\n\n            <div class=\"meta\" style=\"z-index: 99\">\n              <span class=\"date\">{{main_item.created_at}}</span>\n              <span class=\"spy\">0</span>\n              <span class=\"chat\">0</span>\n            </div>\n          </div>\n        </div>\n        <p>{{main_item.desc}} <a (click)=\"loadMore(main_item.id)\">Подробнее</a></p>\n      </div>\n\n<masonry class=\"masonry\" [options]=\"myOptions\" style=\"float:left;\">\n        \n\t\n\t  \n\t  \t  \t\t<masonry-brick class=\"masonry-item\" *ngFor=\"let item of news\">\n        <div class=\"grid-item-bg\" style=\" position: relative; background-size: cover; box-sizing: border-box;\">\n          <div style=\"position: absolute; z-index: 2; background: rgba(0,0,0,.5); top: 0; right: 0; left: 0; bottom: 0;\"></div>\n          <img style=\"z-index: 1; position: absolute; top: 0; left: 0; right: 0;\n          bottom: 0;\" src=\"{{item.photo}}\">\n          <div class=\"block-content\" style=\"z-index: 99\">\n            <span class=\"tag\"><a href=\"#\">{{item.category}}</a></span>\n            \n            <div class=\"meta\" style=\"z-index: 99\">\n              <span class=\"date\">{{item.created_at}}</span>\n            </div>\n          </div>\n        </div>\n        <h3><a  (click)=\"loadMore(item.id)\" >{{item.title}}</a></h3>\n      </masonry-brick>\n      \n\t  \n      </masonry>"

/***/ }),

/***/ "./angular/app/analytics-categories/analytics-categories.component.scss":
/***/ (function(module, exports) {

module.exports = "body {\n  background: #f9f9f9;\n  font-family: \"PT Sans\"; }\n\n.container {\n  max-width: 1180px !important; }\n\n.navbar {\n  background: #1d1f24;\n  padding: 15px 0; }\n\n#searchform, #searchform input {\n  width: 100%;\n  border-radius: 20px;\n  border: none;\n  height: 40px; }\n\n.menubar {\n  background: #383c46; }\n\n.navbar-nav-ul a {\n  font-family: \"PT Sans\";\n  font-weight: bold;\n  color: #fff;\n  text-transform: uppercase;\n  display: block;\n  padding: 7px 14px;\n  font-size: 14px;\n  border-top: 2px solid #383c46;\n  border-right: 1px solid #1d1f24; }\n\n.navbar-nav-ul li:last-of-type a {\n  margin-right: 0;\n  border-right: none; }\n\n.navbar-nav-ul a:hover, .navbar-nav-ul a.active {\n  background: #fff;\n  color: #f58c1b;\n  border-top: 2px solid #f58c1b;\n  text-decoration: none; }\n\n.navbar-nav-ul, .tags {\n  overflow: hidden;\n  list-style: none;\n  padding-left: 0; }\n\n.navbar-nav-ul li, .tags li {\n  float: left; }\n\n.tag {\n  z-index: 99;\n  position: relative; }\n\n.tags li {\n  margin-right: 15px; }\n\n.tags a {\n  display: block;\n  float: left;\n  padding: 9px 17px;\n  border-radius: 120px;\n  background: #e5e5e5;\n  color: #3e4468;\n  font-size: 13px;\n  font-family: \"PT Sans\"; }\n\n.tags a:hover, .tags a.active {\n  background: #f58c1b;\n  color: #fff;\n  text-decoration: none; }\n\n.block {\n  height: 230px !important;\n  margin-bottom: 13px !important; }\n\n.block-content {\n  padding: 24px 0 0 24px; }\n\n.block-content span a {\n  background: #fff;\n  color: #1d1f24;\n  padding: 7px;\n  text-decoration: none;\n  font-size: 12px;\n  /*display: block;*/\n  margin-right: 10px; }\n\n.block-content h2 {\n  font-size: 25px;\n  color: #fff;\n  line-height: 32px;\n  margin-top: 30px; }\n\n.meta {\n  position: absolute;\n  bottom: 20px;\n  left: 24px;\n  color: #fff;\n  font-family: \"Myriad Pro\", sans-serif;\n  font-weight: 100;\n  font-size: 10px; }\n\n.main-block p {\n  color: #002026;\n  font-size: 13px;\n  margin-top: 20px;\n  width: 85%;\n  line-height: 17px; }\n\n.main-block p a {\n  color: #002026;\n  text-decoration: underline; }\n\n.masonry-item {\n  width: 33.33%;\n  /*margin: 10px;*/\n  min-height: 170px;\n  padding: 10px; }\n\n.masonry-item img {\n  width: 100%; }\n\n.masonry {\n  width: 100%;\n  /*margin-left: -10px;*/\n  margin-top: 20px; }\n\n.left-block {\n  width: 880px; }\n\n.masonry-item h3 {\n  line-height: 23px; }\n\n.masonry-item h3 a {\n  color: #000000;\n  font-size: 18px;\n  font-weight: bold;\n  font-family: \"PT Sans\";\n  text-decoration: none;\n  line-height: 23px; }\n\n.masonry-item h3 a:hover {\n  color: #f58c1b; }\n\n.grid-item-bg {\n  min-height: 170px;\n  position: relative;\n  overflow: hidden; }\n\n.left-block {\n  padding-left: 0;\n  float: left; }\n\n.left-block .row {\n  margin-left: 0 !important; }\n\n.right-block {\n  max-width: 270px;\n  float: right;\n  width: 250px; }\n\n.categories a {\n  background: #cfcfcf;\n  border-radius: 20px;\n  font-size: 12px;\n  color: #000;\n  text-decoration: none;\n  padding: 7px 10px;\n  margin-right: 10px;\n  margin-bottom: 10px; }\n\n.categories a:hover, .categories .active {\n  background: #383c46;\n  color: #fff; }\n\n.row b {\n  padding: 4px 5px !important;\n  font-size: 12px; }\n\n.quotations {\n  width: 100%;\n  float: left;\n  min-height: 5px;\n  background: #fff; }\n\n.footer {\n  width: 100%;\n  background: #eee;\n  text-align: center;\n  float: left;\n  min-height: 5px;\n  padding: 50px; }\n\n.top {\n  width: 100%;\n  height: 100px;\n  background: black; }\n\n.block {\n  float: left;\n  margin-bottom: 25px;\n  width: calc(33.33% - 17px);\n  position: relative !important; }\n\n.block img {\n  width: 100%;\n  height: auto; }\n\n.quotations h5 {\n  color: #383c46;\n  text-align: left !important;\n  font-size: 16px;\n  font-weight: bold;\n  padding-left: 10px; }\n\n.quotations th {\n  padding-left: 10px; }\n\n.top5 {\n  font-weight: 100;\n  font-size: 13px;\n  text-align: right;\n  padding: 15px !important; }\n\n.top5 .all-cot {\n  text-align: left; }\n\n.top5 th {\n  font-weight: bold;\n  text-align: left; }\n\n.all-cot {\n  width: 100%;\n  color: #4a4a4a;\n  padding: 10px;\n  float: left;\n  text-decoration: underline;\n  font-weight: bold;\n  font-size: 13px;\n  padding-bottom: 0px; }\n\ni.fa {\n  padding: 0 !important; }\n\ni {\n  padding: 5px;\n  border: 1px solid #9b9b9b;\n  color: #9b9b9b;\n  border-radius: 50%;\n  width: 30px;\n  height: 30px;\n  line-height: 30px;\n  text-align: center; }\n\ni:hover {\n  color: #f58c1b;\n  border: 1px solid #f58c1b;\n  cursor: pointer; }\n\n.row .col-md-9 .row .col-md-3 {\n  padding-left: 22px !important;\n  padding-top: 5px; }\n\n.col-md-3 > h3 {\n  font-size: 35px; }\n\nh3 + h6 {\n  color: #9b9b9b;\n  margin-top: 13px !important;\n  float: left;\n  width: 50%;\n  text-align: center;\n  padding-left: 20px; }\n\n.tags li {\n  margin-top: 7px; }\n\n.rightbar {\n  padding-left: 0;\n  padding-right: 36px; }\n\n.categories {\n  margin-top: 15px; }\n\n.price {\n  font-weight: bold !important;\n  font-size: 13px;\n  color: #919191;\n  padding-top: 7px !important;\n  margin-bottom: -10px; }\n\n.login a {\n  font-size: 13px; }\n\n.spy {\n  background: url(/dist/assets/spy.png) top left no-repeat;\n  color: #fff;\n  padding-left: 25px;\n  margin-left: 20px; }\n\n.chat {\n  background: url(/dist/assets/chat.png) top left no-repeat;\n  color: #fff;\n  padding-left: 20px;\n  margin-left: 20px; }\n\n.main-block h2 a {\n  color: #fff;\n  text-decoration: none; }\n\n.main-block h2 a:hover {\n  text-decoration: underline; }\n"

/***/ }),

/***/ "./angular/app/analytics-categories/analytics-categories.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export NewsRaw */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AnalyticsCategoriesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/@angular/common/http.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// import { interval } from 'rxjs/Observable/interval';


var NewsRaw = (function () {
    function NewsRaw() {
    }
    return NewsRaw;
}());

var AnalyticsCategoriesComponent = (function () {
    function AnalyticsCategoriesComponent(http, router, route) {
        this.http = http;
        this.router = router;
        this.route = route;
        this.news = [];
        this.main_news = [];
    }
    AnalyticsCategoriesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.id = params['id'];
            _this.news.length = 0;
            _this.main_news.length = 0;
            _this.path = "/analyticsbycat/" + _this.id;
            _this.info = _this.http.get(_this.path);
            _this.info.subscribe(function (response) {
                // console.log(response['news']);
                // this.news = response['news'];
                for (var _i = 0, _a = response['news']; _i < _a.length; _i++) {
                    var item = _a[_i];
                    console.log(item.photos[0].file);
                    _this.news.push({
                        id: item.id,
                        title: item.title,
                        desc: item.desc,
                        main: item.main,
                        created_at: item.created_at,
                        category: item.category.name,
                        photo: item.photos[0].file
                    });
                }
                for (var _b = 0, _c = response['main_news']; _b < _c.length; _b++) {
                    var item = _c[_b];
                    console.log(item);
                    _this.main_news.push({
                        id: item.id,
                        title: item.title,
                        desc: item.desc,
                        main: item.main,
                        category: item.category.name,
                        created_at: item.created_at,
                        photo: item.photos[0].file
                    });
                }
                // this.news.push(response['news']);
                //   this.main_news.push(response['main_news']);
                // console.log(response['news']);
            });
        });
    };
    AnalyticsCategoriesComponent.prototype.loadMore = function (id) {
        this.router.navigate(['/analytics/item', id]);
    };
    return AnalyticsCategoriesComponent;
}());
AnalyticsCategoriesComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-analytics-categories',
        template: __webpack_require__("./angular/app/analytics-categories/analytics-categories.component.html"),
        styles: [__webpack_require__("./angular/app/analytics-categories/analytics-categories.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _c || Object])
], AnalyticsCategoriesComponent);

var _a, _b, _c;
//# sourceMappingURL=analytics-categories.component.js.map

/***/ }),

/***/ "./angular/app/analytics/all-analytics/all-analytics.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n        <div class=\"col-md-4\" style=\"padding-left:20px;\">\n        <h3 style=\"float:left; margin-top: 3px;\">Аналитика</h3>\n\t<h6 style=\"color:#9b9b9b;margin-top:10px;float:left;width:10%;text-align:center\">228</h6>\n      </div>\n\t  \n\n\t  \n      <div class=\"col-md-8\">\n        <ul class=\"tags\">\n          <li><a routerLinkActive=\"active\"  routerLink=\"/analytics/all\">Новое за сегодня</a></li>\n          <li><a routerLinkActive=\"active\" href=\"#\">Самое популярное</a></li>\n          <li><a routerLinkActive=\"active\" href=\"#\">Самое обсуждаемое</a></li>\n        </ul>\n      </div>\n </div>\n\n <div class=\"main-block\" style=\"width: 48%;float:left;margin:1%;\" *ngFor=\"let main_item of main_news\">\n        <div class=\"block\" style=\"background-size: cover; width: 100%; height: 240px; box-sizing: border-box;\">\n          <div style=\"position: absolute; z-index: 2; background: rgba(0,0,0,.5); top: 0; right: 0; left: 0; bottom: 0;\"></div>\n          <img style=\"z-index: 1; position: absolute; top: 0; left: 0; right: 0;\n          bottom: 0;\" src=\"{{main_item.photo}}\">\n          <div class=\"block-content\">\n            <span class=\"tag\"><a href=\"#\">{{main_item.category}}</a></span>\n            <table style=\"height: 140px;\"><tr><td valign=\"bottom\">\n            \n            <h2 style=\"position: relative; z-index: 999\"><a (click)=\"loadMore(main_item.id)\">{{main_item.title}}</a></h2>\n          </td></tr></table>\n\n            <div class=\"meta\" style=\"z-index: 99\">\n              <span class=\"date\">{{main_item.created_at}}</span>\n              <span class=\"spy\">0</span>\n              <span class=\"chat\">0</span>\n            </div>\n          </div>\n        </div>\n        <p>{{main_item.desc}} <a (click)=\"loadMore(main_item.id)\">Подробнее</a></p>\n      </div>\n\n<masonry [options]=\"myOptions\" class=\"masonry\" style=\"float:left; transition: none !important;\">\n        \n\t\n\t  \n\t  \t  \t\t<masonry-brick style=\"transition: none !important;\" class=\"masonry-item\" *ngFor=\"let item of news\">\n        <div class=\"grid-item-bg\" style=\" position: relative; background-size: cover; box-sizing: border-box;\">\n          <div style=\"position: absolute; z-index: 2; background: rgba(0,0,0,.5); top: 0; right: 0; left: 0; bottom: 0;\"></div>\n          <img style=\"z-index: 1; position: absolute; top: 0; left: 0; right: 0;\n          bottom: 0;\" src=\"{{item.photo}}\">\n          <div class=\"block-content\" style=\"z-index: 99\">\n            <span class=\"tag\"><a href=\"#\">{{item.category}}</a></span>\n            \n            <div class=\"meta\" style=\"z-index: 99\">\n              <span class=\"date\">{{item.created_at}}</span>\n            </div>\n          </div>\n        </div>\n        <h3><a  (click)=\"loadMore(item.id)\" >{{item.title}}</a></h3>\n      </masonry-brick>\n      \n\t  \n      </masonry>"

/***/ }),

/***/ "./angular/app/analytics/all-analytics/all-analytics.component.scss":
/***/ (function(module, exports) {

module.exports = "body {\n  background: #f9f9f9;\n  font-family: \"PT Sans\"; }\n\n.container {\n  max-width: 1180px !important; }\n\n.navbar {\n  background: #1d1f24;\n  padding: 15px 0; }\n\n#searchform, #searchform input {\n  width: 100%;\n  border-radius: 20px;\n  border: none;\n  height: 40px; }\n\n.menubar {\n  background: #383c46; }\n\n.navbar-nav-ul a {\n  font-family: \"PT Sans\";\n  font-weight: bold;\n  color: #fff;\n  text-transform: uppercase;\n  display: block;\n  padding: 7px 14px;\n  font-size: 14px;\n  border-top: 2px solid #383c46;\n  border-right: 1px solid #1d1f24; }\n\n.navbar-nav-ul li:last-of-type a {\n  margin-right: 0;\n  border-right: none; }\n\n.navbar-nav-ul a:hover, .navbar-nav-ul a.active {\n  background: #fff;\n  color: #f58c1b;\n  border-top: 2px solid #f58c1b;\n  text-decoration: none; }\n\n.navbar-nav-ul, .tags {\n  overflow: hidden;\n  list-style: none;\n  padding-left: 0; }\n\n.navbar-nav-ul li, .tags li {\n  float: left; }\n\n.tag {\n  z-index: 99;\n  position: relative; }\n\n.tags li {\n  margin-right: 15px; }\n\n.tags a {\n  display: block;\n  float: left;\n  padding: 9px 17px;\n  border-radius: 120px;\n  background: #e5e5e5;\n  color: #3e4468;\n  font-size: 13px;\n  font-family: \"PT Sans\"; }\n\n.tags a:hover, .tags a.active {\n  background: #f58c1b;\n  color: #fff;\n  text-decoration: none; }\n\n.block {\n  height: 230px !important;\n  margin-bottom: 13px !important; }\n\n.block-content {\n  padding: 24px 0 0 24px; }\n\n.block-content span a {\n  background: #fff;\n  color: #1d1f24;\n  padding: 7px;\n  text-decoration: none;\n  font-size: 12px;\n  /*display: block;*/\n  margin-right: 10px; }\n\n.block-content h2 {\n  font-size: 25px;\n  color: #fff;\n  line-height: 32px;\n  margin-top: 30px; }\n\n.meta {\n  position: absolute;\n  bottom: 20px;\n  left: 24px;\n  color: #fff;\n  font-family: \"Myriad Pro\", sans-serif;\n  font-weight: 100;\n  font-size: 10px; }\n\n.main-block p {\n  color: #002026;\n  font-size: 13px;\n  margin-top: 20px;\n  width: 85%;\n  line-height: 17px; }\n\n.main-block p a {\n  color: #002026;\n  text-decoration: underline; }\n\n.masonry-item {\n  width: 33.33%;\n  /*margin: 10px;*/\n  min-height: 170px;\n  padding: 10px; }\n\n.masonry-item img {\n  width: 100%; }\n\n.masonry {\n  width: 100%;\n  /*margin-left: -10px;*/\n  margin-top: 20px; }\n\n.left-block {\n  width: 880px; }\n\n.masonry-item h3 {\n  line-height: 23px; }\n\n.masonry-item h3 a {\n  color: #000000;\n  font-size: 18px;\n  font-weight: bold;\n  font-family: \"PT Sans\";\n  text-decoration: none;\n  line-height: 23px; }\n\n.masonry-item h3 a:hover {\n  color: #f58c1b; }\n\n.grid-item-bg {\n  min-height: 170px;\n  position: relative;\n  overflow: hidden; }\n\n.left-block {\n  padding-left: 0;\n  float: left; }\n\n.left-block .row {\n  margin-left: 0 !important; }\n\n.right-block {\n  max-width: 270px;\n  float: right;\n  width: 250px; }\n\n.categories a {\n  background: #cfcfcf;\n  border-radius: 20px;\n  font-size: 12px;\n  color: #000;\n  text-decoration: none;\n  padding: 7px 10px;\n  margin-right: 10px;\n  margin-bottom: 10px; }\n\n.categories a:hover, .categories .active {\n  background: #383c46;\n  color: #fff; }\n\n.row b {\n  padding: 4px 5px !important;\n  font-size: 12px; }\n\n.quotations {\n  width: 100%;\n  float: left;\n  min-height: 5px;\n  background: #fff; }\n\n.footer {\n  width: 100%;\n  background: #eee;\n  text-align: center;\n  float: left;\n  min-height: 5px;\n  padding: 50px; }\n\n.top {\n  width: 100%;\n  height: 100px;\n  background: black; }\n\n.block {\n  float: left;\n  margin-bottom: 25px;\n  width: calc(33.33% - 17px);\n  position: relative !important; }\n\n.block img {\n  width: 100%;\n  height: auto; }\n\n.quotations h5 {\n  color: #383c46;\n  text-align: left !important;\n  font-size: 16px;\n  font-weight: bold;\n  padding-left: 10px; }\n\n.quotations th {\n  padding-left: 10px; }\n\n.top5 {\n  font-weight: 100;\n  font-size: 13px;\n  text-align: right;\n  padding: 15px !important; }\n\n.top5 .all-cot {\n  text-align: left; }\n\n.top5 th {\n  font-weight: bold;\n  text-align: left; }\n\n.all-cot {\n  width: 100%;\n  color: #4a4a4a;\n  padding: 10px;\n  float: left;\n  text-decoration: underline;\n  font-weight: bold;\n  font-size: 13px;\n  padding-bottom: 0px; }\n\ni.fa {\n  padding: 0 !important; }\n\ni {\n  padding: 5px;\n  border: 1px solid #9b9b9b;\n  color: #9b9b9b;\n  border-radius: 50%;\n  width: 30px;\n  height: 30px;\n  line-height: 30px;\n  text-align: center; }\n\ni:hover {\n  color: #f58c1b;\n  border: 1px solid #f58c1b;\n  cursor: pointer; }\n\n.row .col-md-9 .row .col-md-3 {\n  padding-left: 22px !important;\n  padding-top: 5px; }\n\n.col-md-3 > h3 {\n  font-size: 35px; }\n\nh3 + h6 {\n  color: #9b9b9b;\n  margin-top: 13px !important;\n  float: left;\n  width: 50%;\n  text-align: center;\n  padding-left: 20px; }\n\n.tags li {\n  margin-top: 7px; }\n\n.rightbar {\n  padding-left: 0;\n  padding-right: 36px; }\n\n.categories {\n  margin-top: 15px; }\n\n.price {\n  font-weight: bold !important;\n  font-size: 13px;\n  color: #919191;\n  padding-top: 7px !important;\n  margin-bottom: -10px; }\n\n.login a {\n  font-size: 13px; }\n\n.spy {\n  background: url(/dist/assets/spy.png) top left no-repeat;\n  color: #fff;\n  padding-left: 25px;\n  margin-left: 20px; }\n\n.chat {\n  background: url(/dist/assets/chat.png) top left no-repeat;\n  color: #fff;\n  padding-left: 20px;\n  margin-left: 20px; }\n\n.main-block h2 a {\n  color: #fff;\n  text-decoration: none; }\n\n.main-block h2 a:hover {\n  text-decoration: underline; }\n"

/***/ }),

/***/ "./angular/app/analytics/all-analytics/all-analytics.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export NewsRaw */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AllAnalyticsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/@angular/common/http.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// import { interval } from 'rxjs/Observable/interval';


var scr = 'http://ppql.ru/masonry.js';
var NewsRaw = (function () {
    function NewsRaw() {
    }
    return NewsRaw;
}());

var AllAnalyticsComponent = (function () {
    function AllAnalyticsComponent(http, router, route) {
        var _this = this;
        this.http = http;
        this.router = router;
        this.route = route;
        this.myOptions = {
            transitionDuration: '0'
        };
        this.news = [];
        this.main_news = [];
        var path = "/analyticsraw";
        var info = http.get(path);
        info.subscribe(function (response) {
            // console.log(response['news']);
            // this.news = response['news'];
            for (var _i = 0, _a = response['news']; _i < _a.length; _i++) {
                var item = _a[_i];
                console.log(item.photos[0].file);
                _this.news.push({
                    id: item.id,
                    title: item.title,
                    desc: item.desc,
                    main: item.main,
                    created_at: item.created_at,
                    category: item.category.name,
                    photo: item.photos[0].file
                });
            }
            for (var _b = 0, _c = response['main_news']; _b < _c.length; _b++) {
                var item = _c[_b];
                console.log(item);
                _this.main_news.push({
                    id: item.id,
                    title: item.title,
                    desc: item.desc,
                    main: item.main,
                    category: item.category.name,
                    created_at: item.created_at,
                    photo: item.photos[0].file
                });
            }
            // this.news.push(response['news']);
            //   this.main_news.push(response['main_news']);
            // console.log(response['news']);
            // console.log(this.news);
            // console.log(this.news[0].photo);
            // console.log(this.main_news);
        });
    }
    AllAnalyticsComponent.prototype.ngOnInit = function () {
    };
    AllAnalyticsComponent.prototype.loadMore = function (id) {
        this.router.navigate(['/analytics/item', id]);
    };
    return AllAnalyticsComponent;
}());
AllAnalyticsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-all-analytics',
        template: __webpack_require__("./angular/app/analytics/all-analytics/all-analytics.component.html"),
        styles: [__webpack_require__("./angular/app/analytics/all-analytics/all-analytics.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _c || Object])
], AllAnalyticsComponent);

var _a, _b, _c;
//# sourceMappingURL=all-analytics.component.js.map

/***/ }),

/***/ "./angular/app/analytics/analytics-detail/analytics-detail.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n<div class=\"col-lg-12\">\n<h2>{{news?.title}}</h2>\n</div>\n<div class=\"col-lg-12\" [innerHTML]=\"news?.desc\">\n\n\t</div>\n<div class=\"col-lg-12\">\n\t<h3>Оставить комментарий</h3>\n<form (ngSubmit)=\"submitComment(f, news.id, 'App\\\\Analytics')\" #f=\"ngForm\">\n\t<div class=\"form-group\">\n\t<input type=\"hidden\" ngModel name=\"post_id\" value=\"{{news?.id}}\">\n\t<input type=\"hidden\" ngModel name=\"commentable_type\" value=\"App\\Analytics\">\n\n\t<!-- <input type=\"hidden\" > -->\n\t<textarea ngModel name=\"body\" class=\"form-control\"></textarea>\n\t<button type=\"submit\" class=\"btn btn-success\">Опубликовать</button>\n</div>\n</form>\n\n<h3>Комментарии</h3>\n       <div class=\"container\">\n        <div class=\"row\">\n\n                <div *ngFor=\"let item of comments\" class=\"col-lg-12\" style=\"margin-top:20px;\">\n                <div class=\"media\">\n                    <a class=\"pull-left\" href=\"#\">\n                        <img class=\"media-object\" height=\"64\" src=\"http://placehold.it/64x64\" alt=\"\">\n                    </a>\n                    <div class=\"media-body\">\n                        <h6 class=\"media-heading\">{{item.author}}\n                            <!-- <small>{{$comment->created_at->diffForHumans()}}</small>  -->\n                        </h6>\n                        <p>{{item.body}}</p>\n                        </div>\n                    </div>\n                </div>\n</div>\n</div>\n</div>\n</div>"

/***/ }),

/***/ "./angular/app/analytics/analytics-detail/analytics-detail.component.scss":
/***/ (function(module, exports) {

module.exports = "body {\n  background: #f9f9f9;\n  font-family: \"PT Sans\"; }\n\n.container {\n  max-width: 1180px !important; }\n\n.navbar {\n  background: #1d1f24;\n  padding: 15px 0; }\n\n#searchform, #searchform input {\n  width: 100%;\n  border-radius: 20px;\n  border: none;\n  height: 40px; }\n\n.menubar {\n  background: #383c46; }\n\n.navbar-nav-ul a {\n  font-family: \"PT Sans\";\n  font-weight: bold;\n  color: #fff;\n  text-transform: uppercase;\n  display: block;\n  padding: 7px 14px;\n  font-size: 14px;\n  border-top: 2px solid #383c46;\n  border-right: 1px solid #1d1f24; }\n\n.navbar-nav-ul li:last-of-type a {\n  margin-right: 0;\n  border-right: none; }\n\n.navbar-nav-ul a:hover, .navbar-nav-ul a.active {\n  background: #fff;\n  color: #f58c1b;\n  border-top: 2px solid #f58c1b;\n  text-decoration: none; }\n\n.navbar-nav-ul, .tags {\n  overflow: hidden;\n  list-style: none;\n  padding-left: 0; }\n\n.navbar-nav-ul li, .tags li {\n  float: left; }\n\n.tag {\n  z-index: 99;\n  position: relative; }\n\n.tags li {\n  margin-right: 15px; }\n\n.tags a {\n  display: block;\n  float: left;\n  padding: 9px 17px;\n  border-radius: 120px;\n  background: #e5e5e5;\n  color: #3e4468;\n  font-size: 13px;\n  font-family: \"PT Sans\"; }\n\n.tags a:hover, .tags a.active {\n  background: #f58c1b;\n  color: #fff;\n  text-decoration: none; }\n\n.block {\n  height: 230px !important;\n  margin-bottom: 13px !important; }\n\n.block-content {\n  padding: 24px 0 0 24px; }\n\n.block-content span a {\n  background: #fff;\n  color: #1d1f24;\n  padding: 7px;\n  text-decoration: none;\n  font-size: 12px;\n  /*display: block;*/\n  margin-right: 10px; }\n\n.block-content h2 {\n  font-size: 25px;\n  color: #fff;\n  line-height: 32px;\n  margin-top: 30px; }\n\n.meta {\n  position: absolute;\n  bottom: 20px;\n  left: 24px;\n  color: #fff;\n  font-family: \"Myriad Pro\", sans-serif;\n  font-weight: 100;\n  font-size: 10px; }\n\n.main-block p {\n  color: #002026;\n  font-size: 13px;\n  margin-top: 20px;\n  width: 85%;\n  line-height: 17px; }\n\n.main-block p a {\n  color: #002026;\n  text-decoration: underline; }\n\n.masonry-item {\n  width: 33.33%;\n  /*margin: 10px;*/\n  min-height: 170px;\n  padding: 10px; }\n\n.masonry-item img {\n  width: 100%; }\n\n.masonry {\n  width: 100%;\n  /*margin-left: -10px;*/\n  margin-top: 20px; }\n\n.left-block {\n  width: 880px; }\n\n.masonry-item h3 {\n  line-height: 23px; }\n\n.masonry-item h3 a {\n  color: #000000;\n  font-size: 18px;\n  font-weight: bold;\n  font-family: \"PT Sans\";\n  text-decoration: none;\n  line-height: 23px; }\n\n.masonry-item h3 a:hover {\n  color: #f58c1b; }\n\n.grid-item-bg {\n  min-height: 170px;\n  position: relative;\n  overflow: hidden; }\n\n.left-block {\n  padding-left: 0;\n  float: left; }\n\n.left-block .row {\n  margin-left: 0 !important; }\n\n.right-block {\n  max-width: 270px;\n  float: right;\n  width: 250px; }\n\n.categories a {\n  background: #cfcfcf;\n  border-radius: 20px;\n  font-size: 12px;\n  color: #000;\n  text-decoration: none;\n  padding: 7px 10px;\n  margin-right: 10px;\n  margin-bottom: 10px; }\n\n.categories a:hover, .categories .active {\n  background: #383c46;\n  color: #fff; }\n\n.row b {\n  padding: 4px 5px !important;\n  font-size: 12px; }\n\n.quotations {\n  width: 100%;\n  float: left;\n  min-height: 5px;\n  background: #fff; }\n\n.footer {\n  width: 100%;\n  background: #eee;\n  text-align: center;\n  float: left;\n  min-height: 5px;\n  padding: 50px; }\n\n.top {\n  width: 100%;\n  height: 100px;\n  background: black; }\n\n.block {\n  float: left;\n  margin-bottom: 25px;\n  width: calc(33.33% - 17px);\n  position: relative !important; }\n\n.block img {\n  width: 100%;\n  height: auto; }\n\n.quotations h5 {\n  color: #383c46;\n  text-align: left !important;\n  font-size: 16px;\n  font-weight: bold;\n  padding-left: 10px; }\n\n.quotations th {\n  padding-left: 10px; }\n\n.top5 {\n  font-weight: 100;\n  font-size: 13px;\n  text-align: right;\n  padding: 15px !important; }\n\n.top5 .all-cot {\n  text-align: left; }\n\n.top5 th {\n  font-weight: bold;\n  text-align: left; }\n\n.all-cot {\n  width: 100%;\n  color: #4a4a4a;\n  padding: 10px;\n  float: left;\n  text-decoration: underline;\n  font-weight: bold;\n  font-size: 13px;\n  padding-bottom: 0px; }\n\ni.fa {\n  padding: 0 !important; }\n\ni {\n  padding: 5px;\n  border: 1px solid #9b9b9b;\n  color: #9b9b9b;\n  border-radius: 50%;\n  width: 30px;\n  height: 30px;\n  line-height: 30px;\n  text-align: center; }\n\ni:hover {\n  color: #f58c1b;\n  border: 1px solid #f58c1b;\n  cursor: pointer; }\n\n.row .col-md-9 .row .col-md-3 {\n  padding-left: 22px !important;\n  padding-top: 5px; }\n\n.col-md-3 > h3 {\n  font-size: 35px; }\n\nh3 + h6 {\n  color: #9b9b9b;\n  margin-top: 13px !important;\n  float: left;\n  width: 50%;\n  text-align: center;\n  padding-left: 20px; }\n\n.tags li {\n  margin-top: 7px; }\n\n.rightbar {\n  padding-left: 0;\n  padding-right: 36px; }\n\n.categories {\n  margin-top: 15px; }\n\n.price {\n  font-weight: bold !important;\n  font-size: 13px;\n  color: #919191;\n  padding-top: 7px !important;\n  margin-bottom: -10px; }\n\n.login a {\n  font-size: 13px; }\n\n.spy {\n  background: url(/dist/assets/spy.png) top left no-repeat;\n  color: #fff;\n  padding-left: 25px;\n  margin-left: 20px; }\n\n.chat {\n  background: url(/dist/assets/chat.png) top left no-repeat;\n  color: #fff;\n  padding-left: 20px;\n  margin-left: 20px; }\n\n.main-block h2 a {\n  color: #fff;\n  text-decoration: none; }\n\n.main-block h2 a:hover {\n  text-decoration: underline; }\n"

/***/ }),

/***/ "./angular/app/analytics/analytics-detail/analytics-detail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export News */
/* unused harmony export CommentRaw */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AnalyticsDetailComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/@angular/common/http.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// import { interval } from 'rxjs/Observable/interval';


var News = (function () {
    function News() {
    }
    return News;
}());

var CommentRaw = (function () {
    function CommentRaw() {
    }
    return CommentRaw;
}());

var AnalyticsDetailComponent = (function () {
    function AnalyticsDetailComponent(http, router, route) {
        var _this = this;
        this.http = http;
        this.router = router;
        this.route = route;
        this.comments = [];
        this.comment = {
            'post_id': '',
            'body': '',
            'commentable_id': '',
            'commentable_type': ''
        };
        var id = route.snapshot.params['id'];
        var path = "/analyticsraw/" + id;
        var info = http.get(path);
        info.subscribe(function (response) {
            _this.news = {
                id: response['news'][0]['id'],
                title: response['news'][0]['title'],
                desc: response['news'][0]['desc'],
                created_at: response['news'][0]['created_at']
            };
            for (var _i = 0, _a = response['comments']; _i < _a.length; _i++) {
                var item = _a[_i];
                _this.comments.push({
                    id: item['id'],
                    email: item['email'],
                    author: item['author'],
                    body: item['body'],
                    commentable_id: item['commentable_id'],
                    photo: item['photo']
                });
            }
            console.log(response['news'][0]['id']);
            console.log(_this.news);
            console.log(_this.comments);
        });
    }
    AnalyticsDetailComponent.prototype.ngOnInit = function () {
        this.router.events.subscribe(function (evt) {
            if (!(evt instanceof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* NavigationEnd */])) {
                return;
            }
            window.scrollTo(0, 0);
        });
    };
    // @ViewChild('f') Form:NgForm;
    AnalyticsDetailComponent.prototype.submitComment = function (form, post_id, type) {
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["c" /* HttpHeaders */]({ 'Content-type': 'Application/json ' });
        this.http.post('/storecomment', {
            'post_id': post_id,
            'body': form.value.body,
            'commentable_id': post_id,
            'commentable_type': type
        }, { headers: headers }).subscribe(function (response) { return console.log(response); }, function (error) { return console.log(error); });
        console.log(post_id + " " + form.value.body + " " + type);
    };
    return AnalyticsDetailComponent;
}());
AnalyticsDetailComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-analytics-detail',
        template: __webpack_require__("./angular/app/analytics/analytics-detail/analytics-detail.component.html"),
        styles: [__webpack_require__("./angular/app/analytics/analytics-detail/analytics-detail.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _c || Object])
], AnalyticsDetailComponent);

var _a, _b, _c;
//# sourceMappingURL=analytics-detail.component.js.map

/***/ }),

/***/ "./angular/app/analytics/analytics.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"top\" class=\"container\">\n      <div class=\"row\">\n\t          <div class=\"col-md-9\">\n<router-outlet></router-outlet>\n</div>\n\n  <div class=\"col-md-3 rightbar\">\n    <div class=\"categories\">\n\n<a *ngFor=\"let category of categories\"  style=\"display: inline-block\"\n [routerLink]=\"['category', category.id]\" routerLinkActive=\"active\">{{category.name}}({{category.count}})</a>\n    </div>\n  \n  \n  \n  \n    <div class=\"quotations\" style=\"margin-top:20px; border:1px solid #dee2e6;\">\n  \n  <h5 style=\"margin-bottom:0px;padding:10px;padding-right:0;text-align:left;width:100%;padding-right:2px;float:left; background-color: rgba(0,0,0,.05);\">Котировки криптовалют</h5>\n  \n  <table class=\"table table-striped table-sm\" style=\"margin-bottom:0px;float:left; padding-left: 10px;\">\n\n  <tbody>\n    <tr>\n      <th scope=\"row\" ><b style=\"background:#4a4a4a;color:white;padding:2px\">BCC</b></th>\n      <td style=\"color:red\">$100</td>\n      <td class=\"price\">P 32 001</td>\n      <td style=\"color:green\">+15%</td>\n    </tr>\n    <tr>\n      <th scope=\"row\"><b style=\"background:#4a4a4a;color:white;padding:2px\">BCC</b></th>\n      <td style=\"color:red\">$100</td>\n      <td class=\"price\">P 32 001</td>\n      <td style=\"color:green\">+15%</td>\n    </tr>\n    <tr>\n      <th scope=\"row\"><b style=\"background:#4a4a4a;color:white;padding:2px\">BCC</b></th>\n      <td style=\"color:red\">$100</td>\n      <td class=\"price\">P 32 001</td>\n      <td style=\"color:red\">-15%</td>\n    </tr>\n      <tr>\n      <th scope=\"row\"><b style=\"background:#4a4a4a;color:white;padding:2px\">BCC</b></th>\n      <td style=\"color:red\">$100</td>\n      <td class=\"price\">P 32 001</td>\n      <td style=\"color:green\">+15%</td>\n    </tr>\n  \n      <tr>\n      <th scope=\"row\"><b style=\"background:#4a4a4a;color:white;padding:2px\">BCC</b></th>\n      <td style=\"color:green\">$100</td>\n      <td class=\"price\">P 32 001</td>\n      <td style=\"color:green\">+15%</td>\n    </tr>\n  </tbody>\n</table>\n\n<a href=\"\" style=\"background-color: rgba(0,0,0,.05);\" class=\"all-cot\">Показать все котировки</a>\n<p style=\"width:100%;color:#5b5b5b;padding:10px;background-color: rgba(0,0,0,.05);margin-bottom:0px;font-size:12px;float:left; padding-top: 0; ma\">Последнее обновление</p>\n\n\n</div>\n  \n  \n  \n  \n  \n      <div class=\"quotations top5\" style=\"margin-top:20px; padding: 5px;\">\n  \n  <h5 style=\"margin-bottom:0px;padding:10px;padding-right:0;text-align:center;width:100%; padding-right:2px;float:left;\">ТОП 5 Криптовалют (% роста)</h5>\n  \n  <table class=\"table table-sm\" style=\"margin-bottom:0px;float:left\">\n\n  <tbody>\n    <tr>\n      <th style=\"border-top:none;\" scope=\"row\">Bitcoin</th>\n      <td style=\"border-top:none;\">$1231231232</td>\n      <td style=\"border-top:none;\">15%</td>\n\n    </tr>\n    <tr>\n      <th style=\"border-top:none;\" scope=\"row\">Ethereum</th>\n      <td style=\"border-top:none;\">$1231231232</td>\n      <td style=\"border-top:none;\">15%</td>\n\n    </tr>\n    <tr>\n      <th style=\"border-top:none;\" scope=\"row\">BitcoinCash</th>\n      <td style=\"border-top:none;\">$1231231232</td>\n      <td style=\"border-top:none;\">15%</td>\n\n    </tr>\n      <tr>\n      <th style=\"border-top:none;\" scope=\"row\">Ripple</th>\n      <td style=\"border-top:none;\">$1231231232</td>\n      <td style=\"border-top:none;\">15%</td>\n\n    </tr>\n  \n      <tr>\n      <th style=\"border-top:none;\" scope=\"row\">KickCoin</th>\n      <td style=\"border-top:none;\">$1231231232</td>\n      <td style=\"border-top:none;\">15%</td>\n\n    </tr>\n  </tbody>\n</table>\n\n<a href=\"\" style=\"float:left;width:100%;color:#4a4a4a;padding:10px;margin-top:5px;height:50px;\" class=\"all-cot\">Подробный рейтинг</a>\n\n\n\n</div>\n  \n  \n  <div class=\"quotations\" style=\"margin-top:40px;height:360px;background:#4a4a4a;text-align:center; margin-bottom: 40px;\">\n  \n  \n  <h4 style=\"color:#f58c1b;margin-top:100px;padding:20px\">Желаете инвестировать в Bitcoin?</h4>\n  \n  <a class=\"btn btn-outline\" style=\"background: #f58c1b;\n    color: #fff;\n    text-decoration: none;width:140px;border-radius:0\">Нажми на меня</a>\n    \n  </div>\n  \n  \n  \n  \n  \n        <div class=\"quotations\" style=\"margin-top:20px;padding:10px;\">\n  \n  <h5 style=\"margin-bottom:0px;padding:10px;padding-right:0;text-align:center;width:100%; padding-right:2px;float:left;\">ТОП 5 сервисов облачного майнинга</h5>\n  \n  <table class=\"table table-sm\" style=\"margin-bottom:0px;float:left\">\n\n  <tbody>\n    <tr>\n      <th style=\"border-top:none;\" scope=\"row\">HashFlare <p style=\"color:green;margin-bottom:0;font-size:12px;\">ПЛАТИТ</p></th>\n      <td style=\"border-top:none;text-align:right\">489% <p style=\"color:#ddd;margin-bottom:0;font-size:12px;\">111 дней</p></td>\n    </tr>\n <tr>\n      <th style=\"border-top:none;\" scope=\"row\">HashFlare <p style=\"color:green;margin-bottom:0;font-size:12px;\">ПЛАТИТ</p></th>\n      <td style=\"border-top:none;text-align:right\">489% <p style=\"color:#ddd;margin-bottom:0;font-size:12px;\">111 дней</p></td>\n    </tr>\n <tr>\n      <th style=\"border-top:none;\" scope=\"row\">HashFlare <p style=\"color:green;margin-bottom:0;font-size:12px;\">ПЛАТИТ</p></th>\n      <td style=\"border-top:none;text-align:right\">489% <p style=\"color:#ddd;margin-bottom:0;font-size:12px;\">111 дней</p></td>\n    </tr>\n <tr>\n      <th style=\"border-top:none;\" scope=\"row\">HashFlare <p style=\"color:green;margin-bottom:0;font-size:12px;\">ПЛАТИТ</p></th>\n      <td style=\"border-top:none;text-align:right\">489% <p style=\"color:#ddd;margin-bottom:0;font-size:12px;\">111 дней</p></td>\n    </tr>\n  \n <tr>\n      <th style=\"border-top:none;\" scope=\"row\">HashFlare <p style=\"color:green;margin-bottom:0;font-size:12px;\">ПЛАТИТ</p></th>\n      <td style=\"border-top:none;text-align:right\">489% <p style=\"color:#ddd;margin-bottom:0;font-size:12px;\">111 дней</p></td>\n    </tr>\n  </tbody>\n</table>\n\n<a href=\"\" style=\"float:left;width:100%;color:#4a4a4a;padding:10px;margin-top:5px;height:50px;\"  class=\"all-cot\">Все проекты (987)</a>\n\n\n\n</div>\n  \n  \n  \n  \n  \n  \n  \n  \n  \n   <div class=\"quotations\" style=\"margin-top:20px;border:none;text-align:center;padding-bottom: 20px;\">\n  <h4 style=\"margin-top:20px;margin-bottom:20px;\">Мы в соц. сетях</h4>\n  \n  \n  <i class=\"fa fa-vk\"></i>\n  <i class=\"fa fa-instagram\"></i>\n  <i class=\"fa fa-twitter\"></i>\n  <i class=\"fa fa-facebook\"></i>\n  </div>\n  \n  \n  \n  \n  \n  \n            <div class=\"quotations\" style=\"margin-top:20px;padding:10px;margin-bottom:20px;\">\n  \n  <h5 style=\"margin-bottom:0px;padding:10px;padding-right:0;text-align:center;width:100%; padding-right:2px;float:left;\">ТОП 5 фондов</h5>\n  \n  <table class=\"table table-sm\" style=\"margin-bottom:0px;float:left\">\n\n  <tbody>\n    <tr>\n      <th style=\"border-top:none;\" scope=\"row\">HashFlare <p style=\"color:#f58c1b;margin-bottom:0;font-size:12px;\">ОЖИДАНИЕ ВЫПЛАТЫ!</p></th>\n      <td style=\"border-top:none;text-align:right\">489% <p style=\"color:#ddd;margin-bottom:0;font-size:12px;\">489 дней</p></td>\n    </tr>\n <tr>\n      <th style=\"border-top:none;\" scope=\"row\">HashFlare <p style=\"color:green;margin-bottom:0;font-size:12px;\">ПЛАТИТ</p></th>\n      <td style=\"border-top:none;text-align:right\">489% <p style=\"color:#ddd;margin-bottom:0;font-size:12px;\">111 дней</p></td>\n    </tr>\n <tr>\n      <th style=\"border-top:none;\" scope=\"row\">HashFlare <p style=\"color:green;margin-bottom:0;font-size:12px;\">ПЛАТИТ</p></th>\n      <td style=\"border-top:none;text-align:right\">489% <p style=\"color:#ddd;margin-bottom:0;font-size:12px;\">111 дней</p></td>\n    </tr>\n <tr>\n      <th style=\"border-top:none;\" scope=\"row\">HashFlare <p style=\"color:green;margin-bottom:0;font-size:12px;\">ПЛАТИТ</p></th>\n      <td style=\"border-top:none;text-align:right\">489% <p style=\"color:#ddd;margin-bottom:0;font-size:12px;\">111 дней</p></td>\n    </tr>\n  \n <tr>\n      <th style=\"border-top:none;\" scope=\"row\">HashFlare <p style=\"color:green;margin-bottom:0;font-size:12px;\">ПЛАТИТ</p></th>\n      <td style=\"border-top:none;text-align:right\">489% <p style=\"color:#ddd;margin-bottom:0;font-size:12px;\">111 дней</p></td>\n    </tr>\n  </tbody>\n</table>\n\n<a href=\"\" style=\"float:left;width:100%;color:#4a4a4a;padding:10px;margin-top:5px;height:50px;\"  class=\"all-cot\">Все фонды (981)</a>\n\n\n\n</div>\n</div>\n</div>\n</div>\n\n<div class=\"footer\">\n  <div class=\"container\">\n  \n  \n  <p style=\"font-size: 13px; font-weight: bold\">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. \n  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. \n  Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>\n  \n  \n  <div style=\"width:500px;height:70px;padding:15px;background:white;border-radius:50px;margin:0 auto\">\n  \n  <input type=\"text\" style=\"background:white;border:none;width:300px;float:left;height:40px;\"/>\n  \n<a class=\"btn btn-outline\" style=\"background: #f58c1b;\n    color: #fff;\n    text-decoration: none;border-radius:50px;width:120px;float:right;\">Подписаться</a>\n</div>\n  \n  <h4 style=\"margin-top:40px;margin-bottom:30px; font-size: 16px; font-weight: bold\">Мы в соц. сетях</h4>\n  \n  \n  <i class=\"fa fa-vk\"></i>\n  <i class=\"fa fa-instagram\"></i>\n  <i class=\"fa fa-twitter\"></i>\n  <i class=\"fa fa-facebook\"></i>\n  \n  \n  \n   <h6 style=\"margin-top:20px; margin-bottom: 20px;  font-size: 16px; font-weight: bold\">2017- Все права защищены</h6>\n   <a href=\"/posts/all#top\" style=\" font-size: 15px; font-weight: bold; color: #000; margin-top: 20px; text-decoration: underline;\">Вернуться наверх</a>\n   \n   \n   \n   \n  \n  </div>\n  </div>"

/***/ }),

/***/ "./angular/app/analytics/analytics.component.scss":
/***/ (function(module, exports) {

module.exports = "body {\n  background: #f9f9f9;\n  font-family: \"PT Sans\"; }\n\n.container {\n  max-width: 1180px !important; }\n\n.navbar {\n  background: #1d1f24;\n  padding: 15px 0; }\n\n#searchform, #searchform input {\n  width: 100%;\n  border-radius: 20px;\n  border: none;\n  height: 40px; }\n\n.menubar {\n  background: #383c46; }\n\n.navbar-nav-ul a {\n  font-family: \"PT Sans\";\n  font-weight: bold;\n  color: #fff;\n  text-transform: uppercase;\n  display: block;\n  padding: 7px 14px;\n  font-size: 14px;\n  border-top: 2px solid #383c46;\n  border-right: 1px solid #1d1f24; }\n\n.navbar-nav-ul li:last-of-type a {\n  margin-right: 0;\n  border-right: none; }\n\n.navbar-nav-ul a:hover, .navbar-nav-ul a.active {\n  background: #fff;\n  color: #f58c1b;\n  border-top: 2px solid #f58c1b;\n  text-decoration: none; }\n\n.navbar-nav-ul, .tags {\n  overflow: hidden;\n  list-style: none;\n  padding-left: 0; }\n\n.navbar-nav-ul li, .tags li {\n  float: left; }\n\n.tag {\n  z-index: 99;\n  position: relative; }\n\n.tags li {\n  margin-right: 15px; }\n\n.tags a {\n  display: block;\n  float: left;\n  padding: 9px 17px;\n  border-radius: 120px;\n  background: #e5e5e5;\n  color: #3e4468;\n  font-size: 13px;\n  font-family: \"PT Sans\"; }\n\n.tags a:hover, .tags a.active {\n  background: #f58c1b;\n  color: #fff;\n  text-decoration: none; }\n\n.block {\n  height: 230px !important;\n  margin-bottom: 13px !important; }\n\n.block-content {\n  padding: 24px 0 0 24px; }\n\n.block-content span a {\n  background: #fff;\n  color: #1d1f24;\n  padding: 7px;\n  text-decoration: none;\n  font-size: 12px;\n  /*display: block;*/\n  margin-right: 10px; }\n\n.block-content h2 {\n  font-size: 25px;\n  color: #fff;\n  line-height: 32px;\n  margin-top: 30px; }\n\n.meta {\n  position: absolute;\n  bottom: 20px;\n  left: 24px;\n  color: #fff;\n  font-family: \"Myriad Pro\", sans-serif;\n  font-weight: 100;\n  font-size: 10px; }\n\n.main-block p {\n  color: #002026;\n  font-size: 13px;\n  margin-top: 20px;\n  width: 85%;\n  line-height: 17px; }\n\n.main-block p a {\n  color: #002026;\n  text-decoration: underline; }\n\n.masonry-item {\n  width: 33.33%;\n  /*margin: 10px;*/\n  min-height: 170px;\n  padding: 10px; }\n\n.masonry-item img {\n  width: 100%; }\n\n.masonry {\n  width: 100%;\n  /*margin-left: -10px;*/\n  margin-top: 20px; }\n\n.left-block {\n  width: 880px; }\n\n.masonry-item h3 {\n  line-height: 23px; }\n\n.masonry-item h3 a {\n  color: #000000;\n  font-size: 18px;\n  font-weight: bold;\n  font-family: \"PT Sans\";\n  text-decoration: none;\n  line-height: 23px; }\n\n.masonry-item h3 a:hover {\n  color: #f58c1b; }\n\n.grid-item-bg {\n  min-height: 170px;\n  position: relative;\n  overflow: hidden; }\n\n.left-block {\n  padding-left: 0;\n  float: left; }\n\n.left-block .row {\n  margin-left: 0 !important; }\n\n.right-block {\n  max-width: 270px;\n  float: right;\n  width: 250px; }\n\n.categories a {\n  background: #cfcfcf;\n  border-radius: 20px;\n  font-size: 12px;\n  color: #000;\n  text-decoration: none;\n  padding: 7px 10px;\n  margin-right: 10px;\n  margin-bottom: 10px; }\n\n.categories a:hover, .categories .active {\n  background: #383c46;\n  color: #fff; }\n\n.row b {\n  padding: 4px 5px !important;\n  font-size: 12px; }\n\n.quotations {\n  width: 100%;\n  float: left;\n  min-height: 5px;\n  background: #fff; }\n\n.footer {\n  width: 100%;\n  background: #eee;\n  text-align: center;\n  float: left;\n  min-height: 5px;\n  padding: 50px; }\n\n.top {\n  width: 100%;\n  height: 100px;\n  background: black; }\n\n.block {\n  float: left;\n  margin-bottom: 25px;\n  width: calc(33.33% - 17px);\n  position: relative !important; }\n\n.block img {\n  width: 100%;\n  height: auto; }\n\n.quotations h5 {\n  color: #383c46;\n  text-align: left !important;\n  font-size: 16px;\n  font-weight: bold;\n  padding-left: 10px; }\n\n.quotations th {\n  padding-left: 10px; }\n\n.top5 {\n  font-weight: 100;\n  font-size: 13px;\n  text-align: right;\n  padding: 15px !important; }\n\n.top5 .all-cot {\n  text-align: left; }\n\n.top5 th {\n  font-weight: bold;\n  text-align: left; }\n\n.all-cot {\n  width: 100%;\n  color: #4a4a4a;\n  padding: 10px;\n  float: left;\n  text-decoration: underline;\n  font-weight: bold;\n  font-size: 13px;\n  padding-bottom: 0px; }\n\ni.fa {\n  padding: 0 !important; }\n\ni {\n  padding: 5px;\n  border: 1px solid #9b9b9b;\n  color: #9b9b9b;\n  border-radius: 50%;\n  width: 30px;\n  height: 30px;\n  line-height: 30px;\n  text-align: center; }\n\ni:hover {\n  color: #f58c1b;\n  border: 1px solid #f58c1b;\n  cursor: pointer; }\n\n.row .col-md-9 .row .col-md-3 {\n  padding-left: 22px !important;\n  padding-top: 5px; }\n\n.col-md-3 > h3 {\n  font-size: 35px; }\n\nh3 + h6 {\n  color: #9b9b9b;\n  margin-top: 13px !important;\n  float: left;\n  width: 50%;\n  text-align: center;\n  padding-left: 20px; }\n\n.tags li {\n  margin-top: 7px; }\n\n.rightbar {\n  padding-left: 0;\n  padding-right: 36px; }\n\n.categories {\n  margin-top: 15px; }\n\n.price {\n  font-weight: bold !important;\n  font-size: 13px;\n  color: #919191;\n  padding-top: 7px !important;\n  margin-bottom: -10px; }\n\n.login a {\n  font-size: 13px; }\n\n.spy {\n  background: url(/dist/assets/spy.png) top left no-repeat;\n  color: #fff;\n  padding-left: 25px;\n  margin-left: 20px; }\n\n.chat {\n  background: url(/dist/assets/chat.png) top left no-repeat;\n  color: #fff;\n  padding-left: 20px;\n  margin-left: 20px; }\n\n.main-block h2 a {\n  color: #fff;\n  text-decoration: none; }\n\n.main-block h2 a:hover {\n  text-decoration: underline; }\n"

/***/ }),

/***/ "./angular/app/analytics/analytics.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AnalyticsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/@angular/common/http.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// import { interval } from 'rxjs/Observable/interval';


var AnalyticsComponent = (function () {
    function AnalyticsComponent(http, router, route) {
        var _this = this;
        this.http = http;
        this.router = router;
        this.route = route;
        this.categories = [];
        var path = "/categoriesraw/3";
        var info = http.get(path);
        info.subscribe(function (response) {
            for (var _i = 0, _a = response['cats']; _i < _a.length; _i++) {
                var item = _a[_i];
                _this.categories.push({
                    id: item['id'],
                    name: item['name'],
                    count: item['count']
                });
            }
            console.log(_this.categories);
        });
    }
    AnalyticsComponent.prototype.ngOnInit = function () {
    };
    AnalyticsComponent.prototype.loadCat = function (id) {
        this.router.navigate(['/analytics/category', id]);
        // console.log('snap');
    };
    return AnalyticsComponent;
}());
AnalyticsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-analytics',
        template: __webpack_require__("./angular/app/analytics/analytics.component.html"),
        styles: [__webpack_require__("./angular/app/analytics/analytics.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _c || Object])
], AnalyticsComponent);

var _a, _b, _c;
//# sourceMappingURL=analytics.component.js.map

/***/ }),

/***/ "./angular/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ".logo-block {\n\tmargin-left:10px;\n}\ninput.ng-invalid.ng-touched {\n\tbackground: #ffcfcf !important;\n    border-color: #cf1c1c !important;\n}\ninput:disabled {\n\tbackground: #fabc7a !important;\n}\nb {\n\tfont-weight: bold !important;\n}"

/***/ }),

/***/ "./angular/app/app.component.html":
/***/ (function(module, exports) {

module.exports = " <header>\n    <div class=\"top-head\">\n      <div class=\"wrapper\">\n        <div class=\"logo-block\">\n          <a href=\"home.html\" class=\"logo\"><img src=\"img/logo.png\" alt=\"\"><span>ВСЕ О РЫНКЕ КРИПТОВАЛЮТ</span></a>\n        </div>\n        <form class=\"top-search\" style=\"position: relative;\">\n          <div class=\"easy-autocomplete\">\n          <input type=\"text\" placeholder=\"Поиск по названию криптовалюты, биржи, ICO, хайпа и др...\" [value]=\"searchAll\" (keyup)=\"searchTerm$.next($event.target.value)\">\n\n          <div class=\"easy-autocomplete-container\" *ngIf=\"results\">\n            <ul>\n              <ng-template ngFor let-result [ngForOf]=\"results\">\n                <li *ngIf=\"result.symbol\" [routerLink]=\"['/crypto', result.symbol]\" style=\"cursor: pointer\">\n                  ({{result.symbol}}) {{ result?.name }}\n                </li>\n                <li *ngIf=\"result.depo\" [routerLink]=\"['/cloud-mining/item', result.id]\" style=\"cursor: pointer\">\n                  {{ result?.name }}\n                </li>\n              </ng-template>\n            </ul>\n          </div>\n          </div>\n          <input type=\"submit\">\n        </form>\n        <ul class=\"login\"  *ngIf=\"!checkUser()\">\n          <li class=\"login-link\"><a href=\"#login-popup\" class=\"popup-link log-in\" data-effect=\"mfp-zoom-in\"><span>Вход</span></a></li>\n          <li><a href=\"#check-popup\" class=\"popup-link sign-up\" data-effect=\"mfp-zoom-in\"><span>Регистрация</span></a></li>\n        </ul>\n        <div class=\"setting-top-block\" *ngIf=\"checkUser()\">\n          <a routerLink=\"/profile/edit\"><img src=\"/img/settings-icon.png\" alt=\"\"></a>\n          <div class=\"img-wrap\" style=\"background: none; overflow: hidden\"><img style=\"width: 100%; height: 100%;\" \n            src=\"{{user.photo ? user.photo.file : 'http://aiyd.org/wp-content/uploads/2016/09/no-image-icon-hi.png'}}\" alt=\"\"></div>\n          <div class=\"select-wrap\">\n            <select>\n              <option value=\"all\">{{user.name}}</option>\n              <option value=\"usd\">{{user.email}}</option>\n              <!-- <option value=\"eur\">irinaivanova</option> -->\n            </select>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"top-menu-wrap\">\n      <div class=\"wrapper\">\n        <ul class=\"top-menu\">\n          <li routerLinkActive=\"active\" [ngClass]=\"rla.isActive?'active':''\" #rla=\"routerLinkActive\"><a [routerLink]=\"['/posts/all']\" >Новости</a></li>\n          <li routerLinkActive=\"active\"><a [routerLink]=\"['/review/all']\">Обзоры</a></li>\n          <li routerLinkActive=\"active\"><a [routerLink]=\"['/interview/all']\">Интервью</a></li>\n          <li routerLinkActive=\"active\"><a [routerLink]=\"['/analytics/all']\">Аналитика</a></li>\n          <li><a >Вопрос-ответ</a></li>\n          <li routerLinkActive=\"active\"><a routerLink=\"/cryptocurrency/all\">Криптовалюты</a></li>\n          <li routerLinkActive=\"active\"  [routerLinkActiveOptions]=\"{exact: false}\"><a  routerLink=\"/cloud-mining/all\">Облачный майнинг</a></li>\n          <li routerLinkActive=\"active\"><a  routerLink=\"/ico/all\">ICO</a></li>\n          <li><a>Фонды и хайпы</a></li>\n          <li routerLinkActive=\"active\"  [routerLinkActiveOptions]=\"{exact: false}\"><a routerLink=\"/exchanges\">Биржи</a></li>\n          <li><a >Пулы</a></li>\n        </ul>\n      </div>\n    </div>\n  </header>\n<router-outlet></router-outlet>\n  <footer>\n    <div class=\"footer-wrap\">\n      <p class=\"footer-text\">\n        Это помощник и проводник по рынку крипто-валют, в первую очередь это набор бесплатных инструментов для анализа рынка крипто-валюты: <br> Всегда актуальные новости о крипто-валютах, биржах и новых сервисах в мире криптовалют. Новости собираются автоматически с огромного количества новостных, <br> русскоязычных и англоязычных тематических сайтов с круглосуточным обновлением. <a href=\"#\">Полный текст</a>\n      </p>\n      <form class=\"subscribe\">\n        <input type=\"text\" placeholder=\"Укажите свой e-mail и получайте новости на почту\">\n        <button type=\"button\" class=\"subscribe-btn\">Подписаться</button>\n      </form>\n      <div class=\"social-block\">\n        <h3>Мы в соц. сетях</h3>\n        <ul>\n          <li><a href=\"#\"><i class=\"fa fa-vk\" aria-hidden=\"true\"></i></a></li>\n          <li><a href=\"#\"><i class=\"fa fa-facebook\" aria-hidden=\"true\"></i></a></li>\n          <li><a href=\"#\"><i class=\"fa fa-twitter\" aria-hidden=\"true\"></i></a></li>\n          <li><a href=\"#\"><i class=\"fa fa-instagram\" aria-hidden=\"true\"></i></a></li>\n        </ul>\n      </div>\n      <p class=\"copyright\">\n        &copy;2017 - Все права защищены. BitInvest.ru - Рынок криптовалют онлайн! <br> О сервисе Контактная информация Реклама Пользовательское соглашение Политика конфиденциальности\n      </p>\n      <a href=\"#\" class=\"anchor\">Вернуться наверх</a>\n    </div>\n  </footer>\n  <div id=\"check-popup\" class=\"popup mfp-with-anim mfp-hide\">\n    <div class=\"popup-body\">\n      <h2>Регистрация</h2>\n      <p>Зарегистрируйтесь и получите <br> полный доступ к функционалу проекта</p>\n      <form (ngSubmit)=\"onSignup(signup)\" #signup=\"ngForm\">\n        <input type=\"text\" name=\"email\" ngModel placeholder=\"Напишите свой email\" email required >\n        <input type=\"password\" name=\"password\" ngModel placeholder=\"Придумайте себе пароль\" required minlength='6'>\n        <input type=\"password\" name=\"password_repeat\" ngModel placeholder=\"Повторите пароль\" required minlength='6' validateEqual=\"password\">\n        <input [disabled]=\"!signup.valid\" type=\"submit\" value=\"Зарегистрироваться\" >\n      </form>\n    </div>\n    <div class=\"popup-footer\">\n      <p>Авторизация через социальные сети</p>\n      <div class=\"social\">\n        <ul>\n          <li><a href=\"#\"><i class=\"fa fa-vk\" aria-hidden=\"true\"></i></a></li>\n          <li><a href=\"#\"><i class=\"fa fa-facebook\" aria-hidden=\"true\"></i></a></li>\n          <li><a href=\"#\"><i class=\"fa fa-twitter\" aria-hidden=\"true\"></i></a></li>\n          <li><a href=\"#\"><i class=\"fa fa-instagram\" aria-hidden=\"true\"></i></a></li>\n        </ul>\n      </div>\n    </div>\n    <a href=\"#login-popup\" class=\"popup-link\" data-effect=\"mfp-zoom-in\">У меня уже есть аккаунт</a>\n  </div>\n  <div id=\"login-popup\" class=\"popup mfp-with-anim mfp-hide\">\n    <div class=\"popup-body\">\n      <h2>Вход</h2>\n      <form  (ngSubmit)=\"onSingin(f)\" #f=\"ngForm\">\n        <input type=\"text\" ngModel name=\"email\" placeholder=\"Ваш адрес электронной почты\" email required>\n        <input type=\"password\" ngModel name=\"password\" placeholder=\"Ваш пароль\" required \n        minlength='6'>\n        <p *ngIf=\"loginError\">{{loginError}}</p>\n        <input [disabled]=\"!f.valid\" type=\"submit\" value=\"Выполнить вход\">\n      </form>\n      <a href=\"#password-popup\" class=\"forgot-password popup-link\" data-effect=\"mfp-zoom-in\">Я забыл пароль</a>\n    </div>\n    <div class=\"popup-footer\">\n      <p>Авторизация через социальные сети</p>\n      <div class=\"social\">\n        <ul>\n          <li><a href=\"#\"><i class=\"fa fa-vk\" aria-hidden=\"true\"></i></a></li>\n          <li><a href=\"#\"><i class=\"fa fa-facebook\" aria-hidden=\"true\"></i></a></li>\n          <li><a href=\"#\"><i class=\"fa fa-twitter\" aria-hidden=\"true\"></i></a></li>\n          <li><a href=\"#\"><i class=\"fa fa-instagram\" aria-hidden=\"true\"></i></a></li>\n        </ul>\n      </div>\n    </div>\n    <a href=\"#check-popup\" class=\"popup-link\" data-effect=\"mfp-zoom-in\">Новая регистрация</a>\n  </div>\n  <div id=\"password-popup\" class=\"popup mfp-with-anim mfp-hide\">\n    <div class=\"popup-body\" *ngIf=\"lostPassSuccess == false\">\n      <h2>Я забыл пароль!</h2>\n      <p *ngIf=\"errorLostPass==''\">Для восстановления пароля введите адрес <br> электронной почты, указанный при регистрации</p>\n      <p *ngIf=\"errorLostPass!=''\">{{errorLostPass}}</p>\n      <form  (ngSubmit)=\"onRestore(lostPass)\" #lostPass=\"ngForm\">\n        <input type=\"text\" name=\"email\" ngModel placeholder=\"Ваш адрес электронной почты\" email required>\n        <button [disabled]=\"!lostPass.valid\" type=\"submit\" style=\"width:100%;\">Восстановить пароль</button>\n      </form>\n      <a href=\"#\" class=\"close-text\">Отменить</a>\n    </div>\n    <div class=\"popup-body\"  *ngIf=\"lostPassSuccess == true\">\n      <h2>Готово!</h2>\n      <p>Ваш новый пароль отправлен на указанный <br> адрес электронной почты</p>\n      <a href=\"#login-popup\" class=\"sign-in popup-link\" data-effect=\"mfp-zoom-in\">Выполнить вход</a><br>\n      <a href=\"#\" class=\"close-notification close-text\">Закрыть уведомление</a>\n    </div>\n  </div>\n  <div id=\"done-popup\" class=\"popup mfp-with-anim mfp-hide\">\n    \n  </div>\n<!-- <app-crypto></app-crypto> -->\n<!-- <app-exmo></app-exmo> -->\n<!-- <app-markets></app-markets> -->\n<!-- <app-cmc></app-cmc> -->"

/***/ }),

/***/ "./angular/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Login */
/* unused harmony export LostPass */
/* unused harmony export Registration */
/* unused harmony export User */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth_service__ = __webpack_require__("./angular/app/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__search_service__ = __webpack_require__("./angular/app/search.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_Subject__ = __webpack_require__("./node_modules/rxjs/_esm5/Subject.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var url = 'script.js';
var Login = (function () {
    function Login() {
    }
    return Login;
}());

var LostPass = (function () {
    function LostPass() {
    }
    return LostPass;
}());

var Registration = (function () {
    function Registration() {
    }
    return Registration;
}());

var User = (function () {
    function User() {
    }
    return User;
}());

;
var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["c" /* HttpHeaders */]({ 'Content-type': 'Application/json ' });
var AppComponent = (function () {
    function AppComponent(auth, http, router, activatedRoute, searchService) {
        var _this = this;
        this.auth = auth;
        this.http = http;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.searchService = searchService;
        this.user = {
            id: 0,
            name: '',
            email: '',
            photo_id: 0,
            role_id: 0,
            telegram: '',
            photo: 0,
            error: 0,
        };
        this.loginError = '';
        this.lostPassSuccess = false;
        this.errorLostPass = '';
        this.searchTerm$ = new __WEBPACK_IMPORTED_MODULE_5_rxjs_Subject__["b" /* Subject */]();
        this.search = '';
        this.searchAll = '';
        this.searchService.mainSearch(this.searchTerm$)
            .subscribe(function (results) {
            if (results['error']) {
                _this.results = undefined;
            }
            else {
                _this.results = results;
            }
            console.log(results);
        });
        console.log(this.user);
        console.log('user');
        // auth.getUser();
    }
    AppComponent.prototype.checkAuth = function () {
        if (this.user.id != undefined) {
            return true;
        }
        else {
            return false;
        }
    };
    AppComponent.prototype.onSingin = function (form) {
        var _this = this;
        this.login = {
            email: form.value.email,
            password: form.value.password,
        };
        // const headers = new HttpHeaders({'Content-type': 'Application/json '});
        this.http.post('/profile/login', this.login, { headers: headers }).subscribe(function (response) {
            console.log(response);
            if (response['status'] == 'denied') {
                console.log(response);
                _this.loginError = 'Неправильные логин или пароль';
            }
            else if (response['status'] == 'success') {
                _this.auth
                    .getUser()
                    .subscribe(function (response) {
                    _this.user = response;
                    _this.auth.setUser(_this.user);
                    console.log(_this.user);
                });
                _this.router.navigate(['/profile/edit']);
            }
        }, function (error) { return console.log(error); });
        // console.log
        form.reset();
    };
    AppComponent.prototype.onSignup = function (form) {
        this.registration = {
            email: form.value.email,
            password: form.value.password,
            password_repeat: form.value.password_repeat
        };
        this.http.post('/profile/register', this.registration, { headers: headers }).subscribe(function (response) {
            return window.location.replace("/profile/portfolio");
        }, function (error) { return console.log(error); });
        // console.log
        console.log(this.registration);
        form.reset();
    };
    AppComponent.prototype.onRestore = function (form) {
        var _this = this;
        this.lostPass = {
            email: form.value.email
        };
        this.http.post('/profile/restorepass', this.lostPass, { headers: headers }).subscribe(function (response) { return _this.lostPassSuccess = true; }, function (error) {
            console.log(error);
            _this.errorLostPass = 'Данного email-адреса нет в базе';
        });
    };
    AppComponent.prototype.checkUser = function () {
        // console.log(this.user.error);
        if (this.user.error == 'User not loggined') {
            return false;
        }
        else {
            return true;
        }
    };
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.auth
            .getUser()
            .subscribe(function (response) {
            _this.user = response;
            _this.auth.setUser(_this.user);
            console.log(_this.user);
        });
        this.router.events
            .filter(function (event) { return event instanceof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* NavigationEnd */]; })
            .map(function () { return _this.activatedRoute; })
            .subscribe(function (event) {
            $.getScript('/js/script.js');
        });
        // this.user = this.auth.getUser();
    };
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("./angular/app/app.component.html"),
        styles: [__webpack_require__("./angular/app/app.component.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_1__auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_4__search_service__["a" /* SearchService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__search_service__["a" /* SearchService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__search_service__["a" /* SearchService */]) === "function" && _e || Object])
], AppComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "./angular/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__("./node_modules/@angular/http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__crypto_crypto_component__ = __webpack_require__("./angular/app/crypto/crypto.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__cmc_cmc_component__ = __webpack_require__("./angular/app/cmc/cmc.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__exmo_exmo_component__ = __webpack_require__("./angular/app/exmo/exmo.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_component__ = __webpack_require__("./angular/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__news_header_header_component__ = __webpack_require__("./angular/app/news/header/header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__news_news_component__ = __webpack_require__("./angular/app/news/news.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__news_news_detail_news_detail_component__ = __webpack_require__("./angular/app/news/news-detail/news-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__news_all_news_all_news_component__ = __webpack_require__("./angular/app/news/all-news/all-news.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__categories_categories_component__ = __webpack_require__("./angular/app/categories/categories.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_angular2_masonry__ = __webpack_require__("./node_modules/angular2-masonry/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__analytics_analytics_component__ = __webpack_require__("./angular/app/analytics/analytics.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__analytics_all_analytics_all_analytics_component__ = __webpack_require__("./angular/app/analytics/all-analytics/all-analytics.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__analytics_analytics_detail_analytics_detail_component__ = __webpack_require__("./angular/app/analytics/analytics-detail/analytics-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__analytics_categories_analytics_categories_component__ = __webpack_require__("./angular/app/analytics-categories/analytics-categories.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__interview_interview_component__ = __webpack_require__("./angular/app/interview/interview.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__interview_all_interview_all_interview_component__ = __webpack_require__("./angular/app/interview/all-interview/all-interview.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__interview_interview_details_interview_details_component__ = __webpack_require__("./angular/app/interview/interview-details/interview-details.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__interview_interview_categories_interview_categories_component__ = __webpack_require__("./angular/app/interview/interview-categories/interview-categories.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__review_review_component__ = __webpack_require__("./angular/app/review/review.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__review_all_review_all_review_component__ = __webpack_require__("./angular/app/review/all-review/all-review.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__review_review_detail_review_detail_component__ = __webpack_require__("./angular/app/review/review-detail/review-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__review_review_categories_review_categories_component__ = __webpack_require__("./angular/app/review/review-categories/review-categories.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__cloud_mining_cloud_mining_component__ = __webpack_require__("./angular/app/cloud-mining/cloud-mining.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__cloud_mining_all_cloud_mining_all_cloud_mining_component__ = __webpack_require__("./angular/app/cloud-mining/all-cloud-mining/all-cloud-mining.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__cloud_mining_cloud_mining_detail_cloud_mining_detail_component__ = __webpack_require__("./angular/app/cloud-mining/cloud-mining-detail/cloud-mining-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__crypto_all_crypto_all_component__ = __webpack_require__("./angular/app/crypto-all/crypto-all.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__crypto_root_crypto_root_component__ = __webpack_require__("./angular/app/crypto-root/crypto-root.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__order_pipe_ngx_order_pipe__ = __webpack_require__("./angular/app/order-pipe/ngx-order.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__filter_name_pipe__ = __webpack_require__("./angular/app/filter-name.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__ico_project_ico_project_component__ = __webpack_require__("./angular/app/ico-project/ico-project.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__ico_project_ico_project_all_ico_project_all_component__ = __webpack_require__("./angular/app/ico-project/ico-project-all/ico-project-all.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__ico_project_ico_project_detail_ico_project_detail_component__ = __webpack_require__("./angular/app/ico-project/ico-project-detail/ico-project-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__ico_project_ico_project_categories_ico_project_categories_component__ = __webpack_require__("./angular/app/ico-project/ico-project-categories/ico-project-categories.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__shorten_pipe_pipe__ = __webpack_require__("./angular/app/shorten-pipe.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__filter_name_active_pipe__ = __webpack_require__("./angular/app/filter-name-active.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42__cloud_mining_cloud_mining_categories_cloud_mining_categories_component__ = __webpack_require__("./angular/app/cloud-mining/cloud-mining-categories/cloud-mining-categories.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43__edit_profile_edit_profile_component__ = __webpack_require__("./angular/app/edit-profile/edit-profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_44__filter_name_age_pipe__ = __webpack_require__("./angular/app/filter-name-age.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_45__crypto_chart_chart_component__ = __webpack_require__("./angular/app/crypto/chart/chart.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_46__sidebar_sidebar_component__ = __webpack_require__("./angular/app/sidebar/sidebar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_47__sidebar_cloud_mining_top_cloud_mining_top_component__ = __webpack_require__("./angular/app/sidebar/cloud-mining-top/cloud-mining-top.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_48__sidebar_stocks_sidebar_stocks_sidebar_component__ = __webpack_require__("./angular/app/sidebar/stocks-sidebar/stocks-sidebar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_49__profile_profile_component__ = __webpack_require__("./angular/app/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_50__profile_portfolio_portfolio_component__ = __webpack_require__("./angular/app/profile/portfolio/portfolio.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_51__import_pipe__ = __webpack_require__("./angular/app/import.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_52__safe_html_pipe__ = __webpack_require__("./angular/app/safe-html.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_53__striphtml_pipe__ = __webpack_require__("./angular/app/striphtml.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_54__excerpt_pipe__ = __webpack_require__("./angular/app/excerpt.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_55__sidebar_resolver_service__ = __webpack_require__("./angular/app/sidebar-resolver.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_56__exchanges_exchanges_component__ = __webpack_require__("./angular/app/exchanges/exchanges.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_57__exchange_exchange_component__ = __webpack_require__("./angular/app/exchange/exchange.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_58__sidebar_top_ico_top_ico_component__ = __webpack_require__("./angular/app/sidebar/top-ico/top-ico.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_59__comments_service__ = __webpack_require__("./angular/app/comments.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';




























































var appRoutes = [
    {
        path: 'crypto/:sym', component: __WEBPACK_IMPORTED_MODULE_6__crypto_crypto_component__["a" /* CryptoComponent */]
    },
    {
        path: 'posts', component: __WEBPACK_IMPORTED_MODULE_12__news_news_component__["a" /* NewsComponent */], children: [
            {
                path: 'post/:id', component: __WEBPACK_IMPORTED_MODULE_13__news_news_detail_news_detail_component__["a" /* NewsDetailComponent */]
            },
            {
                path: 'category/:id', component: __WEBPACK_IMPORTED_MODULE_15__categories_categories_component__["a" /* CategoriesComponent */]
            },
            {
                path: 'all', component: __WEBPACK_IMPORTED_MODULE_14__news_all_news_all_news_component__["a" /* AllNewsComponent */]
            }
        ]
    },
    {
        path: 'analytics', component: __WEBPACK_IMPORTED_MODULE_17__analytics_analytics_component__["a" /* AnalyticsComponent */], children: [
            {
                path: 'item/:id', component: __WEBPACK_IMPORTED_MODULE_19__analytics_analytics_detail_analytics_detail_component__["a" /* AnalyticsDetailComponent */]
            },
            {
                path: 'category/:id', component: __WEBPACK_IMPORTED_MODULE_20__analytics_categories_analytics_categories_component__["a" /* AnalyticsCategoriesComponent */]
            },
            {
                path: 'all', component: __WEBPACK_IMPORTED_MODULE_18__analytics_all_analytics_all_analytics_component__["a" /* AllAnalyticsComponent */]
            }
        ]
    },
    {
        path: 'interview', component: __WEBPACK_IMPORTED_MODULE_21__interview_interview_component__["a" /* InterviewComponent */], children: [
            {
                path: 'item/:id', component: __WEBPACK_IMPORTED_MODULE_23__interview_interview_details_interview_details_component__["a" /* InterviewDetailsComponent */]
            },
            {
                path: 'category/:id', component: __WEBPACK_IMPORTED_MODULE_24__interview_interview_categories_interview_categories_component__["a" /* InterviewCategoriesComponent */]
            },
            {
                path: 'all', component: __WEBPACK_IMPORTED_MODULE_22__interview_all_interview_all_interview_component__["a" /* AllInterviewComponent */]
            }
        ]
    },
    {
        path: 'review', component: __WEBPACK_IMPORTED_MODULE_25__review_review_component__["a" /* ReviewComponent */], children: [
            {
                path: 'item/:id', component: __WEBPACK_IMPORTED_MODULE_27__review_review_detail_review_detail_component__["a" /* ReviewDetailComponent */]
            },
            {
                path: 'category/:id', component: __WEBPACK_IMPORTED_MODULE_28__review_review_categories_review_categories_component__["a" /* ReviewCategoriesComponent */]
            },
            {
                path: 'all', component: __WEBPACK_IMPORTED_MODULE_26__review_all_review_all_review_component__["a" /* AllReviewComponent */]
            }
        ]
    },
    {
        path: 'ico', component: __WEBPACK_IMPORTED_MODULE_36__ico_project_ico_project_component__["a" /* IcoProjectComponent */], children: [
            {
                path: 'item/:id', component: __WEBPACK_IMPORTED_MODULE_38__ico_project_ico_project_detail_ico_project_detail_component__["a" /* IcoProjectDetailComponent */]
            },
            {
                path: 'category/:id', component: __WEBPACK_IMPORTED_MODULE_39__ico_project_ico_project_categories_ico_project_categories_component__["a" /* IcoProjectCategoriesComponent */]
            },
            {
                path: 'all', component: __WEBPACK_IMPORTED_MODULE_37__ico_project_ico_project_all_ico_project_all_component__["a" /* IcoProjectAllComponent */]
            }
        ]
    },
    {
        path: 'cloud-mining', component: __WEBPACK_IMPORTED_MODULE_29__cloud_mining_cloud_mining_component__["a" /* CloudMiningComponent */], children: [
            {
                path: 'item/:id', component: __WEBPACK_IMPORTED_MODULE_31__cloud_mining_cloud_mining_detail_cloud_mining_detail_component__["a" /* CloudMiningDetailComponent */]
            },
            {
                path: 'category/:id', component: __WEBPACK_IMPORTED_MODULE_42__cloud_mining_cloud_mining_categories_cloud_mining_categories_component__["a" /* CloudMiningCategoriesComponent */]
            },
            {
                path: 'all', component: __WEBPACK_IMPORTED_MODULE_30__cloud_mining_all_cloud_mining_all_cloud_mining_component__["a" /* AllCloudMiningComponent */]
            }
        ]
    },
    {
        path: 'cryptocurrency', component: __WEBPACK_IMPORTED_MODULE_33__crypto_root_crypto_root_component__["a" /* CryptoRootComponent */], children: [
            {
                path: 'all', component: __WEBPACK_IMPORTED_MODULE_32__crypto_all_crypto_all_component__["a" /* CryptoAllComponent */]
            },
            {
                path: 'cmc', component: __WEBPACK_IMPORTED_MODULE_7__cmc_cmc_component__["a" /* CmcComponent */]
            },
            {
                path: 'exmo', component: __WEBPACK_IMPORTED_MODULE_8__exmo_exmo_component__["a" /* ExmoComponent */]
            },
            {
                path: 'crypto', component: __WEBPACK_IMPORTED_MODULE_6__crypto_crypto_component__["a" /* CryptoComponent */]
            }
        ]
    },
    {
        path: 'profile', component: __WEBPACK_IMPORTED_MODULE_49__profile_profile_component__["a" /* ProfileComponent */], children: [
            {
                path: 'edit', component: __WEBPACK_IMPORTED_MODULE_43__edit_profile_edit_profile_component__["a" /* EditProfileComponent */]
            },
            {
                path: 'portfolio', component: __WEBPACK_IMPORTED_MODULE_50__profile_portfolio_portfolio_component__["a" /* PortfolioComponent */]
            },
        ]
    },
    {
        path: 'exchanges', component: __WEBPACK_IMPORTED_MODULE_56__exchanges_exchanges_component__["a" /* ExchangesComponent */]
    },
    {
        path: 'exchange/:name', component: __WEBPACK_IMPORTED_MODULE_57__exchange_exchange_component__["a" /* ExchangeComponent */]
    },
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["M" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_6__crypto_crypto_component__["a" /* CryptoComponent */],
            __WEBPACK_IMPORTED_MODULE_7__cmc_cmc_component__["a" /* CmcComponent */],
            __WEBPACK_IMPORTED_MODULE_8__exmo_exmo_component__["a" /* ExmoComponent */],
            __WEBPACK_IMPORTED_MODULE_11__news_header_header_component__["a" /* HeaderComponent */],
            __WEBPACK_IMPORTED_MODULE_12__news_news_component__["a" /* NewsComponent */],
            __WEBPACK_IMPORTED_MODULE_13__news_news_detail_news_detail_component__["a" /* NewsDetailComponent */],
            __WEBPACK_IMPORTED_MODULE_14__news_all_news_all_news_component__["a" /* AllNewsComponent */],
            __WEBPACK_IMPORTED_MODULE_15__categories_categories_component__["a" /* CategoriesComponent */],
            __WEBPACK_IMPORTED_MODULE_17__analytics_analytics_component__["a" /* AnalyticsComponent */],
            __WEBPACK_IMPORTED_MODULE_18__analytics_all_analytics_all_analytics_component__["a" /* AllAnalyticsComponent */],
            __WEBPACK_IMPORTED_MODULE_19__analytics_analytics_detail_analytics_detail_component__["a" /* AnalyticsDetailComponent */],
            __WEBPACK_IMPORTED_MODULE_20__analytics_categories_analytics_categories_component__["a" /* AnalyticsCategoriesComponent */],
            __WEBPACK_IMPORTED_MODULE_21__interview_interview_component__["a" /* InterviewComponent */],
            __WEBPACK_IMPORTED_MODULE_22__interview_all_interview_all_interview_component__["a" /* AllInterviewComponent */],
            __WEBPACK_IMPORTED_MODULE_23__interview_interview_details_interview_details_component__["a" /* InterviewDetailsComponent */],
            __WEBPACK_IMPORTED_MODULE_24__interview_interview_categories_interview_categories_component__["a" /* InterviewCategoriesComponent */],
            __WEBPACK_IMPORTED_MODULE_25__review_review_component__["a" /* ReviewComponent */],
            __WEBPACK_IMPORTED_MODULE_26__review_all_review_all_review_component__["a" /* AllReviewComponent */],
            __WEBPACK_IMPORTED_MODULE_27__review_review_detail_review_detail_component__["a" /* ReviewDetailComponent */],
            __WEBPACK_IMPORTED_MODULE_28__review_review_categories_review_categories_component__["a" /* ReviewCategoriesComponent */],
            __WEBPACK_IMPORTED_MODULE_29__cloud_mining_cloud_mining_component__["a" /* CloudMiningComponent */],
            __WEBPACK_IMPORTED_MODULE_30__cloud_mining_all_cloud_mining_all_cloud_mining_component__["a" /* AllCloudMiningComponent */],
            __WEBPACK_IMPORTED_MODULE_31__cloud_mining_cloud_mining_detail_cloud_mining_detail_component__["a" /* CloudMiningDetailComponent */],
            __WEBPACK_IMPORTED_MODULE_32__crypto_all_crypto_all_component__["a" /* CryptoAllComponent */],
            __WEBPACK_IMPORTED_MODULE_33__crypto_root_crypto_root_component__["a" /* CryptoRootComponent */],
            __WEBPACK_IMPORTED_MODULE_34__order_pipe_ngx_order_pipe__["a" /* OrderPipe */],
            __WEBPACK_IMPORTED_MODULE_35__filter_name_pipe__["a" /* FilterNamePipe */],
            __WEBPACK_IMPORTED_MODULE_36__ico_project_ico_project_component__["a" /* IcoProjectComponent */],
            __WEBPACK_IMPORTED_MODULE_37__ico_project_ico_project_all_ico_project_all_component__["a" /* IcoProjectAllComponent */],
            __WEBPACK_IMPORTED_MODULE_38__ico_project_ico_project_detail_ico_project_detail_component__["a" /* IcoProjectDetailComponent */],
            __WEBPACK_IMPORTED_MODULE_39__ico_project_ico_project_categories_ico_project_categories_component__["a" /* IcoProjectCategoriesComponent */],
            __WEBPACK_IMPORTED_MODULE_40__shorten_pipe_pipe__["a" /* ShortenPipePipe */],
            __WEBPACK_IMPORTED_MODULE_41__filter_name_active_pipe__["a" /* FilterNameActivePipe */],
            __WEBPACK_IMPORTED_MODULE_42__cloud_mining_cloud_mining_categories_cloud_mining_categories_component__["a" /* CloudMiningCategoriesComponent */],
            __WEBPACK_IMPORTED_MODULE_43__edit_profile_edit_profile_component__["a" /* EditProfileComponent */],
            __WEBPACK_IMPORTED_MODULE_44__filter_name_age_pipe__["a" /* FilterNameAgePipe */],
            __WEBPACK_IMPORTED_MODULE_45__crypto_chart_chart_component__["a" /* ChartComponent */],
            __WEBPACK_IMPORTED_MODULE_46__sidebar_sidebar_component__["a" /* SidebarComponent */],
            __WEBPACK_IMPORTED_MODULE_47__sidebar_cloud_mining_top_cloud_mining_top_component__["a" /* CloudMiningTopComponent */],
            __WEBPACK_IMPORTED_MODULE_48__sidebar_stocks_sidebar_stocks_sidebar_component__["a" /* StocksSidebarComponent */],
            __WEBPACK_IMPORTED_MODULE_49__profile_profile_component__["a" /* ProfileComponent */],
            __WEBPACK_IMPORTED_MODULE_50__profile_portfolio_portfolio_component__["a" /* PortfolioComponent */],
            __WEBPACK_IMPORTED_MODULE_51__import_pipe__["a" /* ImportPipe */],
            __WEBPACK_IMPORTED_MODULE_52__safe_html_pipe__["a" /* SafeHtmlPipe */],
            __WEBPACK_IMPORTED_MODULE_53__striphtml_pipe__["a" /* StriphtmlPipe */],
            __WEBPACK_IMPORTED_MODULE_54__excerpt_pipe__["a" /* ExcerptPipe */],
            __WEBPACK_IMPORTED_MODULE_56__exchanges_exchanges_component__["a" /* ExchangesComponent */],
            __WEBPACK_IMPORTED_MODULE_57__exchange_exchange_component__["a" /* ExchangeComponent */],
            __WEBPACK_IMPORTED_MODULE_58__sidebar_top_ico_top_ico_component__["a" /* TopIcoComponent */]
        ],
        imports: [
            // BrowserAnimationsModule,
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_http__["b" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["a" /* MatButtonModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["b" /* MatCheckboxModule */],
            __WEBPACK_IMPORTED_MODULE_10__angular_common_http__["b" /* HttpClientModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_router__["d" /* RouterModule */].forRoot(appRoutes),
            __WEBPACK_IMPORTED_MODULE_16_angular2_masonry__["a" /* MasonryModule */],
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["a" /* MatButtonModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["b" /* MatCheckboxModule */],
            __WEBPACK_IMPORTED_MODULE_34__order_pipe_ngx_order_pipe__["a" /* OrderPipe */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_10__angular_common_http__["b" /* HttpClientModule */], __WEBPACK_IMPORTED_MODULE_34__order_pipe_ngx_order_pipe__["a" /* OrderPipe */], __WEBPACK_IMPORTED_MODULE_55__sidebar_resolver_service__["a" /* SidebarResolverService */], __WEBPACK_IMPORTED_MODULE_59__comments_service__["a" /* CommentsService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "./angular/app/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export User */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/@angular/common/http.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var User = (function () {
    function User() {
    }
    return User;
}());

var AuthService = (function () {
    function AuthService(http) {
        this.http = http;
        this.error = '';
        this.user = {
            id: 0,
            name: '',
            email: '',
            photo_id: 0,
            role_id: 0,
            telegram: '',
            photo: [],
            error: '',
        };
    }
    AuthService.prototype.uploadPhoto = function (photo) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]();
        headers.append('Content-Type', 'multipart/form-data');
        var path = '/profile/updatephoto';
        var formData = new FormData();
        formData.append('photo', photo);
        // console.log(formData.get('photo'));
        // console.log(formData.get('photo'));
        return this.http.post(path, formData);
    };
    AuthService.prototype.getUser = function () {
        var _this = this;
        return this.http
            .get('/angular/user')
            .map(function (response) {
            _this.user = response;
            return _this.user;
        });
    };
    AuthService.prototype.setUser = function (user) {
        this.user = user;
    };
    AuthService.prototype.getUserInfo = function () {
        if (this.user.id != undefined) {
            return true;
        }
        return false;
    };
    AuthService.prototype.isLogged = function () {
        if (this.user.id == 0) {
            return false;
        }
        else {
            return true;
        }
    };
    return AuthService;
}());
AuthService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]) === "function" && _a || Object])
], AuthService);

var _a;
//# sourceMappingURL=auth.service.js.map

/***/ }),

/***/ "./angular/app/categories/categories.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"news-content\">\n        <div class=\"news-head\">\n          <h1>Новости<span>{{countAll}}</span></h1>\n          <ul class=\"news-tabs\">\n            <li class=\"active\"><a (click)=\"setOrder('id')\">Новое за сегодня</a></li>\n            <li><a (click)=\"setOrder('views_count')\">Самое популярное</a></li>\n            <li><a  (click)=\"setOrder('comments_count')\">Самое обсуждаемое</a></li>\n          </ul>\n        </div>\n        <div class=\"news-body\">\n          <div class=\"news-tab-content active\">\n            <div class=\"main-news\">\n              <div class=\"news\" *ngFor=\"let item of main_news | orderBy: order:reverse:'case-insensitive'\">\n                <div class=\"img\" [ngStyle]=\"{'background-image':'url('+item.photo+')'}\">\n                  <a routerLink=\"/posts/category/{{item.cat_id}}\" class=\"news-btn\">{{item.category}}</a>\n                  <a routerLink=\"/posts/post/{{item.id}}\" class=\"title-link\">{{item.title}}</a>\n                  <div class=\"info\">\n                    <span class=\"date\">{{item.created_at}}</span>\n                    <span class=\"views\"><i class=\"fa fa-eye\" aria-hidden=\"true\"></i>0</span>\n                    <a href=\"/posts/post/{{item.id}}#comment-block\" class=\"comments\"><i class=\"fa fa-comment\" aria-hidden=\"true\"></i>{{item.comments_count}}</a>\n                  </div>\n                </div>\n                <div class=\"text\">\n                  <p>{{item.desc | striphtml |excerpt:80}}  <a routerLink=\"/posts/post/{{item.id}}\">Подробнее</a></p>\n                </div>\n              </div>\n            </div>\n            <div class=\"news-list\">\n              <div class=\"news\" *ngFor=\"let item of news | orderBy: order:reverse:'case-insensitive'\">\n                <div class=\"img\" [ngStyle]=\"{'background-image':'url('+item.photo+')' }\">\n                  <a routerLink=\"/posts/category/{{item.cat_id}}\" class=\"news-btn\">{{item.category}}</a>\n                  <div class=\"info\">\n                    <span class=\"date\">{{item.created_at}}</span>\n                  </div>\n                </div>\n                <div class=\"text\">\n                  <h3>\n                    <a routerLink=\"/posts/post/{{item.id}}\">{{item.title}}</a>\n                  </h3>\n                </div>\n                <div class=\"text2\">\n                  <p>{{item.desc | striphtml |excerpt:80}}</p>\n                </div>\n              </div>\n            </div>\n          </div>\n          \n            </div>\n          </div>\n\n"

/***/ }),

/***/ "./angular/app/categories/categories.component.scss":
/***/ (function(module, exports) {

module.exports = ".news-content {\n  width: 880px !important;\n  /*width: 100%;*/\n  margin-left: -10px; }\n\n.main-news .news:nth-child(even) {\n  max-width: 424px; }\n\nbody {\n  background: #f9f9f9;\n  font-family: \"PT Sans\"; }\n\n.container {\n  max-width: 1180px !important; }\n\n.navbar {\n  background: #1d1f24;\n  padding: 15px 0; }\n\n#searchform, #searchform input {\n  width: 100%;\n  border-radius: 20px;\n  border: none;\n  height: 40px; }\n\n.menubar {\n  background: #383c46; }\n\n.navbar-nav-ul a {\n  font-family: \"PT Sans\";\n  font-weight: bold;\n  color: #fff;\n  text-transform: uppercase;\n  display: block;\n  padding: 7px 14px;\n  font-size: 14px;\n  border-top: 2px solid #383c46;\n  border-right: 1px solid #1d1f24; }\n\n.navbar-nav-ul li:last-of-type a {\n  margin-right: 0;\n  border-right: none; }\n\n.navbar-nav-ul a:hover, .navbar-nav-ul a.active {\n  background: #fff;\n  color: #f58c1b;\n  border-top: 2px solid #f58c1b;\n  text-decoration: none; }\n\n.navbar-nav-ul, .tags {\n  overflow: hidden;\n  list-style: none;\n  padding-left: 0; }\n\n.navbar-nav-ul li, .tags li {\n  float: left; }\n\n.tag {\n  z-index: 99;\n  position: relative; }\n\n.tags li {\n  margin-right: 15px; }\n\n.tags a {\n  display: block;\n  float: left;\n  padding: 9px 17px;\n  border-radius: 120px;\n  background: #e5e5e5;\n  color: #3e4468;\n  font-size: 13px;\n  font-family: \"PT Sans\"; }\n\n.tags a:hover, .tags a.active {\n  background: #f58c1b;\n  color: #fff;\n  text-decoration: none; }\n\n.block {\n  height: 230px !important;\n  margin-bottom: 13px !important; }\n\n.block-content {\n  padding: 24px 0 0 24px; }\n\n.block-content span a {\n  background: #fff;\n  color: #1d1f24;\n  padding: 7px;\n  text-decoration: none;\n  font-size: 12px;\n  /*display: block;*/\n  margin-right: 10px; }\n\n.block-content h2 {\n  font-size: 25px;\n  color: #fff;\n  line-height: 32px;\n  margin-top: 30px; }\n\n.meta {\n  position: absolute;\n  bottom: 20px;\n  left: 24px;\n  color: #fff;\n  font-family: \"Myriad Pro\", sans-serif;\n  font-weight: 100;\n  font-size: 10px; }\n\n.main-block p {\n  color: #002026;\n  font-size: 13px;\n  margin-top: 20px;\n  width: 85%;\n  line-height: 17px; }\n\n.main-block p a {\n  color: #002026;\n  text-decoration: underline; }\n\n.masonry-item {\n  width: 33.33%;\n  /*margin: 10px;*/\n  min-height: 170px;\n  padding: 10px; }\n\n.masonry-item img {\n  width: 100%; }\n\n.masonry {\n  width: 100%;\n  /*margin-left: -10px;*/\n  margin-top: 20px; }\n\n.left-block {\n  width: 880px; }\n\n.masonry-item h3 {\n  line-height: 23px; }\n\n.masonry-item h3 a {\n  color: #000000;\n  font-size: 18px;\n  font-weight: bold;\n  font-family: \"PT Sans\";\n  text-decoration: none;\n  line-height: 23px; }\n\n.masonry-item h3 a:hover {\n  color: #f58c1b; }\n\n.grid-item-bg {\n  min-height: 170px;\n  position: relative;\n  overflow: hidden; }\n\n.left-block {\n  padding-left: 0;\n  float: left; }\n\n.left-block .row {\n  margin-left: 0 !important; }\n\n.right-block {\n  max-width: 270px;\n  float: right;\n  width: 250px; }\n\n.categories a {\n  background: #cfcfcf;\n  border-radius: 20px;\n  font-size: 12px;\n  color: #000;\n  text-decoration: none;\n  padding: 7px 10px;\n  margin-right: 10px;\n  margin-bottom: 10px; }\n\n.categories a:hover, .categories .active {\n  background: #383c46;\n  color: #fff; }\n\n.row b {\n  padding: 4px 5px !important;\n  font-size: 12px; }\n\n.quotations {\n  width: 100%;\n  float: left;\n  min-height: 5px;\n  background: #fff; }\n\n.footer {\n  width: 100%;\n  background: #eee;\n  text-align: center;\n  float: left;\n  min-height: 5px;\n  padding: 50px; }\n\n.top {\n  width: 100%;\n  height: 100px;\n  background: black; }\n\n.block {\n  float: left;\n  margin-bottom: 25px;\n  width: calc(33.33% - 17px);\n  position: relative !important; }\n\n.block img {\n  width: 100%;\n  height: auto; }\n\n.quotations h5 {\n  color: #383c46;\n  text-align: left !important;\n  font-size: 16px;\n  font-weight: bold;\n  padding-left: 10px; }\n\n.quotations th {\n  padding-left: 10px; }\n\n.top5 {\n  font-weight: 100;\n  font-size: 13px;\n  text-align: right;\n  padding: 15px !important; }\n\n.top5 .all-cot {\n  text-align: left; }\n\n.top5 th {\n  font-weight: bold;\n  text-align: left; }\n\n.all-cot {\n  width: 100%;\n  color: #4a4a4a;\n  padding: 10px;\n  float: left;\n  text-decoration: underline;\n  font-weight: bold;\n  font-size: 13px;\n  padding-bottom: 0px; }\n\ni.fa {\n  padding: 0 !important; }\n\ni {\n  padding: 5px;\n  border: 1px solid #9b9b9b;\n  color: #9b9b9b;\n  border-radius: 50%;\n  width: 30px;\n  height: 30px;\n  line-height: 30px;\n  text-align: center; }\n\ni:hover {\n  color: #f58c1b;\n  border: 1px solid #f58c1b;\n  cursor: pointer; }\n\n.row .col-md-9 .row .col-md-3 {\n  padding-left: 22px !important;\n  padding-top: 5px; }\n\n.col-md-3 > h3 {\n  font-size: 35px; }\n\nh3 + h6 {\n  color: #9b9b9b;\n  margin-top: 13px !important;\n  float: left;\n  width: 50%;\n  text-align: center;\n  padding-left: 20px; }\n\n.tags li {\n  margin-top: 7px; }\n\n.rightbar {\n  padding-left: 0;\n  padding-right: 36px; }\n\n.categories {\n  margin-top: 15px; }\n\n.price {\n  font-weight: bold !important;\n  font-size: 13px;\n  color: #919191;\n  padding-top: 7px !important;\n  margin-bottom: -10px; }\n\n.login a {\n  font-size: 13px; }\n\n.spy {\n  background: url(/dist/assets/spy.png) top left no-repeat;\n  color: #fff;\n  padding-left: 25px;\n  margin-left: 20px; }\n\n.chat {\n  background: url(/dist/assets/chat.png) top left no-repeat;\n  color: #fff;\n  padding-left: 20px;\n  margin-left: 20px; }\n\n.main-block h2 a {\n  color: #fff;\n  text-decoration: none; }\n\n.main-block h2 a:hover {\n  text-decoration: underline; }\n"

/***/ }),

/***/ "./angular/app/categories/categories.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export NewsRaw */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CategoriesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__order_pipe_ngx_order_pipe__ = __webpack_require__("./angular/app/order-pipe/ngx-order.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/@angular/common/http.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// import { interval } from 'rxjs/Observable/interval';



var NewsRaw = (function () {
    function NewsRaw() {
    }
    return NewsRaw;
}());

var CategoriesComponent = (function () {
    /**
       * @param {OrderPipe}
       */
    function CategoriesComponent(orderPipe, http, router, route) {
        this.orderPipe = orderPipe;
        this.http = http;
        this.router = router;
        this.route = route;
        this.countAll = 0;
        this.news = [];
        this.main_news = [];
        this.order = 'id';
        this.reverse = true;
    }
    CategoriesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.id = params['id'];
            _this.news.length = 0;
            _this.main_news.length = 0;
            _this.path = "/postsbycat/" + _this.id;
            _this.info = _this.http.get(_this.path);
            _this.info.subscribe(function (response) {
                // console.log(response['news']);
                // this.news = response['news'];
                for (var _i = 0, _a = response['news']; _i < _a.length; _i++) {
                    var item = _a[_i];
                    console.log(item.photos[0].file);
                    _this.news.push({
                        id: item.id,
                        title: item.title,
                        desc: item.desc,
                        main: item.main,
                        created_at: item.created_at,
                        category: item.category.name,
                        photo: item.photos[0].file,
                        comments_count: item.comments_count
                    });
                }
                for (var _b = 0, _c = response['main_news']; _b < _c.length; _b++) {
                    var item = _c[_b];
                    console.log(item);
                    _this.main_news.push({
                        id: item.id,
                        title: item.title,
                        desc: item.desc,
                        main: item.main,
                        category: item.category.name,
                        created_at: item.created_at,
                        photo: item.photos[0].file,
                        comments_count: item.comments_count
                    });
                }
                _this.countAll = _this.news.length + _this.main_news.length;
            });
        });
    };
    CategoriesComponent.prototype.setOrder = function (value) {
        if (this.order === value) {
            this.reverse = !this.reverse;
        }
        this.order = value;
        console.log(this.order);
    };
    return CategoriesComponent;
}());
CategoriesComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-categories',
        template: __webpack_require__("./angular/app/categories/categories.component.html"),
        styles: [__webpack_require__("./angular/app/categories/categories.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__order_pipe_ngx_order_pipe__["a" /* OrderPipe */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__order_pipe_ngx_order_pipe__["a" /* OrderPipe */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["a" /* HttpClient */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _d || Object])
], CategoriesComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=categories.component.js.map

/***/ }),

/***/ "./angular/app/cloud-mining.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CloudMiningService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/@angular/common/http.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CloudMiningService = (function () {
    function CloudMiningService(http) {
        this.http = http;
        this.path = '/miningraw/top';
        this.pathIco = '/icoraw/top';
    }
    CloudMiningService.prototype.getTop = function () {
        return this.http.get(this.path);
    };
    CloudMiningService.prototype.getIcoTop = function () {
        return this.http.get(this.pathIco);
    };
    return CloudMiningService;
}());
CloudMiningService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]) === "function" && _a || Object])
], CloudMiningService);

var _a;
//# sourceMappingURL=cloud-mining.service.js.map

/***/ }),

/***/ "./angular/app/cloud-mining/all-cloud-mining/all-cloud-mining.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"mining-content\">\n        <div class=\"mining-head\">\n          <h1>Облачный майнинг<span>{{allCount}}</span></h1>\n          <ul class=\"mining-tabs\">\n            <li><label for=\"filter1\"><input type=\"radio\" id=\"filter1\" value=\"1\" [(ngModel)]=\"status\" name=\"status\"><a>Платит/Ожидание ({{active}})</a></label></li>\n            <li><label for=\"filter2\"><input type=\"radio\" id=\"filter2\" value=\"2\" [(ngModel)]=\"status\" name=\"status\"><a>Не платит ({{inactive}})</a></label></li>\n          </ul>\n          <form>\n            <input type=\"text\" placeholder=\"Поиск по названию\" [(ngModel)]=\"filteredName\" name=\"filteredName\">\n            <button type=\"button\"><img src=\"img/search-icon.png\" alt=\"\"></button>\n          </form>\n        </div>\n<!--         <div class=\"select-wrap select-wrap-mining\">\n          <select [(ngModel)]=\"order\" name=\"order\">\n            <option [value]=\"'name'\"><span (click)=\"setOrder('name')\">Фильтрация: По</span></option>\n            <option [value]=\"'percentage'\">Фильтрация: По сумме собраных средств</option>\n          </select>\n          <button  (click)=\"setOrder('name')\">по алфавиту</button>\n          <button  (click)=\"setOrder('percentage')\">по сумме</button>\n        </div> -->\n   <div class=\"select-wrapper\">\n     <div class=\"select\">\n      <span class=\"text\"><span style=\"padding-top: 12px;\">{{order == 'name' ? 'По алфавиту' : 'По сумме собранных средств'}}</span></span>\n      <a href=\"#\"><img src=\"/img/select-drop-icon.png\" alt=\"\"></a>\n     </div>\n     <ul class=\"select-items\">\n      <li (click)=\"setOrder('name')\"><a >Фильтрация: По алфавиту</a></li>\n      <li (click)=\"setOrder('percentage')\"><a >Фильтрация: По сумме собранных средств</a></li>\n     </ul>\n    </div>\n        <div class=\"project-wrapper active\">\n          <div class=\"project-block\" *ngFor=\"let item of news | filterNameActive:status:'status' | filterName:filteredName:'name' | orderBy: order:reverse:'case-insensitive'\">\n            <div class=\"img-wrap\">\n              <a href=\"balant-mining-card.html\"><img src=\"{{item.logo}}\" alt=\"\" style=\"width: 97px; height: 97px\"></a>\n            </div>\n            <div class=\"text-wrap\">\n              <div class=\"text-info\">\n                <p><a href=\"/cloud-mining/item/{{item.id}}\" class=\"project-title\">{{item.name}}</a><a href=\"/cloud-mining/item/{{item.id}}#comment-block\" class=\"comments\"><i class=\"fa fa-comment\" aria-hidden=\"true\"></i>{{item.comments_count}}</a></p>\n              </div>\n              <div class=\"project-info-content\">\n                <ul class=\"info-list\">\n                  <li><span>Статус:</span><span class=\"bold active\">{{item.status == 1 ? 'Платит' : 'Не платит'}}</span></li>\n                  <li><span>Доход в год:</span><span class=\"bold\">{{item.proc}}%</span></li>\n                  <li><span>Существует:</span><span class=\"bold\">{{item.start_days}} дней</span></li>\n                  <li><span>Активность депозита:</span><span class=\"bold\">{{item.depo_date}}</span></li>\n                  <li><span class=\"last-updated\">Последняя выплата: 21.02.2017 в 21:01</span></li>\n                </ul>\n                <div class=\"progress-bar\">\n                  <div class=\"progress\">\n                    <span [ngStyle]=\"{'width':item.percentage+'%'}\"></span>\n                    <p>Депозит: <b>{{item.depo}}$ ({{item.percentage}}%)</b></p>\n                  </div>\n                  <a href=\"#login-popup\" *ngIf=\"!checkAuth()\" class=\"popup-link follow\" data-effect=\"mfp-zoom-in\"><span class=\"plus\">+</span><span class=\"text\">Следить</span></a>\n                  <a href=\"#follow-popup\" *ngIf=\"!checkInPortfolio(item.id) && checkAuth()\" (click)=\"selectedItem = item\" class=\"popup-link follow\" data-effect=\"mfp-zoom-in\"><span class=\"plus\">+</span><span class=\"text\">Следить</span></a>\n\n                  <a class=\"follow\"  *ngIf=\"checkInPortfolio(item.id) && checkAuth()\"  (click)=\"removePortfolio(item.id)\"><span class=\"minus\"><img src=\"img/minus.png\" alt=\"\"></span><span class=\"text text-red\">Следить</span></a>\n                </div>\n              </div>\n            </div>\n            <p class=\"more-project\">{{item.desc}}\n              <a >Подробнее о проекте</a></p>\n          </div>\n          \n        <a href=\"#\" class=\"show-more\">Показать еще</a>\n      </div>\n    </div>\n    <div id=\"follow-popup\" class=\"popup mfp-with-anim mfp-hide\">\n    <div class=\"popup-body\">\n      <h2>Следить за {{selectedItem?.name}}</h2>\n      <p>Выберите портфель для сохранения {{selectedItem?.name}}</p>\n      <div class=\"checkbox-list\">\n        <div class=\"checkbox-wrap\" *ngFor=\"let portfolio of getUserPortfolio; let i = index\">\n          <input type=\"radio\" name=\"id\" [(ngModel)]=\"addPortfolio\" value=\"{{portfolio.id}}\" checked=\"checked\" id=\"{{i}}\">\n          <label for=\"{{i}}\">\n            <span></span>{{portfolio.name}}\n          </label>\n        </div>\n      </div>\n      <a href=\"#\" class=\"add-portfolio\">+Добавить портфель</a>\n      <form class=\"hidden\" #f=\"ngForm\">\n        <input type=\"text\" ngModel name=\"name\" required=\"\" placeholder=\"Введите название...\">\n        <button (click)=\"createPortfolio(f)\" type=\"submit\">Добавить</button>\n      </form>\n    </div>\n    <div class=\"save-block\">\n      <a (click)=\"submitPortfolio(selectedItem?.id, 'App\\\\CloudMining')\" class=\"save-settings\">Сохранить настройки</a>\n      <a href=\"#\" class=\"close-text\">Отменить и закрыть</a>\n    </div>\n  </div>"

/***/ }),

/***/ "./angular/app/cloud-mining/all-cloud-mining/all-cloud-mining.component.scss":
/***/ (function(module, exports) {

module.exports = ".select-wrapper {\n  margin-bottom: 20px;\n  width: 205px;\n  position: relative; }\n  .select-wrapper .select {\n    border-radius: 18px;\n    background: #fff;\n    height: 40px;\n    padding: 0 18px 0 13px;\n    cursor: pointer;\n    -webkit-box-shadow: 0px 5px 30px 0px rgba(0, 0, 1, 0.1);\n    box-shadow: 0px 5px 30px 0px rgba(0, 0, 1, 0.1); }\n  .select-wrapper .select .text {\n      margin: 0;\n      margin-right: 45px;\n      color: #666;\n      font-size: 14px; }\n  .select-wrapper .select.open {\n      border-bottom-left-radius: 0;\n      border-bottom-right-radius: 0; }\n  .select-wrapper .select.open > a {\n        -webkit-transform: rotate(-180deg);\n                transform: rotate(-180deg); }\n  .select-wrapper .select-items {\n    background: #fff;\n    position: absolute;\n    left: 0;\n    top: 40px;\n    width: 100%;\n    border-bottom-left-radius: 18px;\n    border-bottom-right-radius: 18px;\n    display: none; }\n  .select-wrapper .select-items li {\n      color: #666;\n      font-size: 14px;\n      padding: 10px 13px;\n      background: #fff;\n      display: block; }\n  .select-wrapper .select-items li:hover {\n        background: #dbdbdb; }\n  .select-wrapper .select-items.open {\n      display: block; }\n  .open {\n  display: block; }\n  .mining-head form {\n  margin-top: 12px; }\n  .mining-content {\n  width: 880px !important;\n  margin-left: -20px !important; }\n"

/***/ }),

/***/ "./angular/app/cloud-mining/all-cloud-mining/all-cloud-mining.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export NewsRaw */
/* unused harmony export Portfolio */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AllCloudMiningComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__order_pipe_ngx_order_pipe__ = __webpack_require__("./angular/app/order-pipe/ngx-order.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__auth_service__ = __webpack_require__("./angular/app/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// import { interval } from 'rxjs/Observable/interval';




var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["c" /* HttpHeaders */]({ 'Content-type': 'Application/json ' });
var NewsRaw = (function () {
    function NewsRaw() {
    }
    return NewsRaw;
}());

var Portfolio = (function () {
    function Portfolio() {
    }
    return Portfolio;
}());

var AllCloudMiningComponent = (function () {
    function AllCloudMiningComponent(authService, orderPipe, http, router, route) {
        var _this = this;
        this.authService = authService;
        this.orderPipe = orderPipe;
        this.http = http;
        this.router = router;
        this.route = route;
        this.order = '';
        this.reverse = false;
        this.news = [];
        this.main_news = [];
        this.portfolios = [];
        this.allCount = 0;
        this.active = 0;
        this.inactive = 0;
        this.portfoliosInfo = [];
        this.portfolioAdded = false;
        this.getUserPortfolio = [];
        this.checkPortfolio = false;
        this.removed = false;
        this.show = false;
        this.portfolio = {
            'id': '',
            'name': '',
            'user_portfolio_type_id': '',
            'user_id': 4,
        };
        var path = "/miningraw";
        var portfolioUrl = '/angular/userportfolio';
        this.portfolioInfo = http.get(portfolioUrl);
        this.portfolioInfo.subscribe(function (response) {
            if (response['error']) {
                // code...
            }
            else {
                _this.portfoliosInfo = response['mining'];
                console.log(_this.portfoliosInfo);
            }
        });
        var info = http.get(path);
        info.subscribe(function (response) {
            // for (let portfolio of response['portfolios']) {
            //   this.portfolios.push({
            //        id: portfolio['id'],
            //        name:portfolio['name'],
            //        user_portfolio_type_id: portfolio['user_portfolio_type_id'],
            //        user_id: portfolio['user_id']
            //   })
            // }
            for (var _i = 0, _a = response['news']; _i < _a.length; _i++) {
                var item = _a[_i];
                _this.news.push({
                    id: item.id,
                    name: item.name,
                    depo: item.depo,
                    proc: item.proc,
                    status: item.status,
                    recieved: item.recieved,
                    logo: item.logo,
                    desc: item.desc,
                    depo_date: item.depo_date,
                    start: item.start,
                    website: item.website,
                    lang: item.lang,
                    ref: item.ref,
                    ref_about: item.ref_about,
                    latest_date: item.latest_date,
                    percentage: item.percentage,
                    start_days: item.start_days,
                    comments_count: item.comments_count,
                });
            }
            // console.log(this.news);
            _this.allCount = _this.news.length;
            for (var _b = 0, _c = _this.news; _b < _c.length; _b++) {
                var item = _c[_b];
                if (item.status == 1) {
                    _this.active++;
                }
                else {
                    _this.inactive++;
                }
            }
        });
    }
    AllCloudMiningComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.getUser().subscribe(function (response) { return _this.getUserPortfolio = response['portfolio']; });
    };
    AllCloudMiningComponent.prototype.checkAuth = function () {
        if (this.authService.getUserInfo()) {
            console.log(true);
            return true;
        }
        console.log(false);
        return (false);
    };
    AllCloudMiningComponent.prototype.loadMore = function (id) {
        this.router.navigate(['/cloud-mining/item', id]);
    };
    AllCloudMiningComponent.prototype.callCheck = function (id) {
        if (this.checkInPortfolio(id)) {
            this.checkPortfolio = true;
        }
        this.checkPortfolio = false;
    };
    AllCloudMiningComponent.prototype.checkInPortfolio = function (id) {
        if (this.portfoliosInfo == undefined) {
            return false;
        }
        for (var _i = 0, _a = this.portfoliosInfo; _i < _a.length; _i++) {
            var item = _a[_i];
            for (var _b = 0, item_1 = item; _b < item_1.length; _b++) {
                var it = item_1[_b];
                if (it.id) {
                    if (it.id == id) {
                        return true;
                    }
                }
            }
        }
        return false;
    };
    AllCloudMiningComponent.prototype.removePortfolio = function (id) {
        var _this = this;
        var removeUrl = '/angular/userportfolio/remove/';
        var removePost = this.http.get(removeUrl + id);
        removePost.subscribe(function (response) {
            _this.portfolioInfo.subscribe(function (res) {
                if (res['error']) {
                    // code...
                }
                else {
                    _this.portfoliosInfo = res['mining'];
                    console.log(_this.portfoliosInfo);
                }
            }),
                _this.checkInPortfolio(id);
        }, function (error) { return console.log(error); });
    };
    AllCloudMiningComponent.prototype.setOrder = function (value) {
        if (this.order === value) {
            this.reverse = !this.reverse;
        }
        this.order = value;
        console.log(this.order);
    };
    AllCloudMiningComponent.prototype.createPortfolio = function (form) {
        var _this = this;
        this.http.post('/angular/userportfolio/create', { 'name': form.value.name, 'user_portfolio_type_id': 1 }, { headers: headers })
            .subscribe(function (response) { _this.getUserPortfolio.push(response); form.reset(); }, function (error) { return console.log(error); });
    };
    AllCloudMiningComponent.prototype.submitPortfolio = function (post_id, type) {
        var _this = this;
        this.http.post('/storeportfolio', {
            'user_portfollable_id': post_id,
            'user_portfolio_id': this.addPortfolio,
            'user_portfollable_type': type
        }, { headers: headers }).subscribe(function (response) { return _this.router.navigate(['/profile/portfolio']); }, function (error) { return console.log(error); });
    };
    return AllCloudMiningComponent;
}());
AllCloudMiningComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-all-cloud-mining',
        template: __webpack_require__("./angular/app/cloud-mining/all-cloud-mining/all-cloud-mining.component.html"),
        styles: [__webpack_require__("./angular/app/cloud-mining/all-cloud-mining/all-cloud-mining.component.scss")],
        providers: [__WEBPACK_IMPORTED_MODULE_4__auth_service__["a" /* AuthService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__order_pipe_ngx_order_pipe__["a" /* OrderPipe */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__order_pipe_ngx_order_pipe__["a" /* OrderPipe */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _e || Object])
], AllCloudMiningComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=all-cloud-mining.component.js.map

/***/ }),

/***/ "./angular/app/cloud-mining/cloud-mining-categories/cloud-mining-categories.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"mining-content\">\n        <div class=\"mining-head\">\n          <h1>Облачный майнинг<span>{{allCount}}</span></h1>\n          <ul class=\"mining-tabs\">\n            <li><label for=\"filter1\"><input type=\"radio\" id=\"filter1\" value=\"1\" [(ngModel)]=\"status\" name=\"status\"><a>Платит/Ожидание ({{active}})</a></label></li>\n            <li><label for=\"filter2\"><input type=\"radio\" id=\"filter2\" value=\"2\" [(ngModel)]=\"status\" name=\"status\"><a>Не платит ({{inactive}})</a></label></li>\n          </ul>\n          <form>\n            <input type=\"text\" placeholder=\"Поиск по названию\" [(ngModel)]=\"filteredName\" name=\"filteredName\">\n            <button type=\"button\"><img src=\"img/search-icon.png\" alt=\"\"></button>\n          </form>\n        </div>\n        <div class=\"select-wrap select-wrap-mining\">\n          <select>\n            <option value=\"alphabet\">Фильтрация: По алфавиту</option>\n            <option value=\"money\">Фильтрация: По сумме собраных средств</option>\n          </select>\n        </div>\n\n        <div class=\"project-wrapper active\">\n          <div class=\"project-block\" *ngFor=\"let item of news | filterNameActive:status:'status' | filterName:filteredName:'name'\">\n            <div class=\"img-wrap\">\n              <a href=\"balant-mining-card.html\"><img src=\"{{item.logo}}\" alt=\"\" style=\"width: 97px; height: 97px\"></a>\n            </div>\n            <div class=\"text-wrap\">\n              <div class=\"text-info\">\n                <p><a href=\"/cloud-mining/item/{{item.id}}\" class=\"project-title\">{{item.name}}</a><a href=\"#\" class=\"comments\"><i class=\"fa fa-comment\" aria-hidden=\"true\"></i>{{item.comments_count}}</a></p>\n              </div>\n              <div class=\"project-info-content\">\n                <ul class=\"info-list\">\n                  <li><span>Статус:</span><span class=\"bold active\">{{item.status == 1 ? 'Платит' : 'Не платит'}}</span></li>\n                  <li><span>Доход в год:</span><span class=\"bold\">{{item.proc}}%</span></li>\n                  <li><span>Существует:</span><span class=\"bold\">{{item.start_days}} дней</span></li>\n                  <li><span>Активность депозита:</span><span class=\"bold\">{{item.depo_date}}</span></li>\n                  <li><span class=\"last-updated\">Последняя выплата: 21.02.2017 в 21:01</span></li>\n                </ul>\n                <div class=\"progress-bar\">\n                  <div class=\"progress\">\n                    <span [ngStyle]=\"{'width':item.percentage+'%'}\"></span>\n                    <p>Депозит: <b>{{item.depo}}$ ({{item.percentage}}%)</b></p>\n                  </div>\n                  <a href=\"#follow-popup\" class=\"popup-link follow\" data-effect=\"mfp-zoom-in\"><span class=\"plus\">+</span><span class=\"text\">Следить</span></a>\n                </div>\n              </div>\n            </div>\n            <p class=\"more-project\">{{item.desc}}\n              <a href=\"balant-mining-card.html\">Подробнее о проекте</a></p>\n          </div>\n          \n        <a href=\"#\" class=\"show-more\">Показать еще</a>\n      </div>\n    </div>\n<!-- <table  style=\"width: 100%\">\n\t<tr>\n\t<td><img src=\"{{item.logo}}\" class=\"img-responsive\" width=\"50\"></td>\n\t<td>\n\t\t<h3><a href=\"#\">{{item.name}}</a></h3> -->\n<!-- \t\t<table><tr><td>\n\t\t\t<table>\n\t\t\t\t<tr>\n\t\t\t\t\t<td><p>Статус: <strong>{{item.status == 1 ? 'Платит' : 'Не платит'}}</strong></p>\n\t\t\t\t\t\t<p><strong>Доходность: {{item.proc}}%</strong>/год</p>\n\t\t</td>\n\t\t<td><p>Существует: <strong>{{item.start_days}}</strong> дней</p><p>Активность депозита:<strong> {{item.depo_date}}</strong> дней</p></td>\n\n\t\t\t\t</tr>\n\t\t\t</table>\n\t\t\n\t\t\n\n\t\t</td>\n<td><div style=\"width: 200px;\"><div class=\"progress\" style=\"margin: 5px 0 0\">\n\t\t  <div class=\"progress-bar bg-danger\" role=\"progressbar\" style=\"width: {{item.percentage}}%;\" aria-valuenow=\"100\" aria-valuemin=\"0\" aria-valuemax=\"100\">Депозит: <strong>{{item.depo}}</strong> (<strong>{{item.percentage}}%</strong>)</div>\n\t\t\t</div>\n\t\t</div></td>\n\t</tr></table> -->\n\t\t\n\t\t\n\t\t<!-- <p>Последняя выплата:<strong> {{item.latest_date}}</strong> дней назад</p> -->\n<!--  <form (ngSubmit)=\"submitPortfolio(f, item.id, 'App\\\\CloudMining')\" #f=\"ngForm\">\n        \t<label *ngFor=\"let portfolio of portfolios\"><input ngModel name=\"portfolio_id\" type=\"radio\" value=\"{{portfolio.id}}\"> {{portfolio.name}}</label>\n\n        \t<button type=\"submit\" class=\"btn btn-success\">Следить</button>\n        </form>\n</td>\n\n\n\t</tr>\n\t<tr colspan=\"3\"><td>{{item.desc}}</td></tr> -->\n<!-- Button trigger modal -->\n\n"

/***/ }),

/***/ "./angular/app/cloud-mining/cloud-mining-categories/cloud-mining-categories.component.scss":
/***/ (function(module, exports) {

module.exports = "div.mining-content {\n  margin-left: -10px; }\n"

/***/ }),

/***/ "./angular/app/cloud-mining/cloud-mining-categories/cloud-mining-categories.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export NewsRaw */
/* unused harmony export Portfolio */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CloudMiningCategoriesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/@angular/common/http.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// import { interval } from 'rxjs/Observable/interval';


var NewsRaw = (function () {
    function NewsRaw() {
    }
    return NewsRaw;
}());

var Portfolio = (function () {
    function Portfolio() {
    }
    return Portfolio;
}());

var CloudMiningCategoriesComponent = (function () {
    function CloudMiningCategoriesComponent(http, router, route) {
        this.http = http;
        this.router = router;
        this.route = route;
        this.active = 0;
        this.inactive = 0;
        this.allCount = 0;
        this.news = [];
        this.portfolio = {
            'id': '',
            'name': '',
            'user_portfolio_type_id': '',
            'user_id': 4,
        };
    }
    CloudMiningCategoriesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.active = 0;
            _this.inactive = 0;
            _this.allCount = 0;
            _this.id = params['id'];
            _this.news.length = 0;
            _this.path = "/miningbycat/" + _this.id;
            _this.info = _this.http.get(_this.path);
            _this.info.subscribe(function (response) {
                for (var _i = 0, _a = response['news']; _i < _a.length; _i++) {
                    var item = _a[_i];
                    _this.news.push({
                        id: item.id,
                        name: item.name,
                        depo: item.depo,
                        proc: item.proc,
                        status: item.status,
                        recieved: item.recieved,
                        logo: item.logo,
                        desc: item.desc,
                        depo_date: item.depo_date,
                        start: item.start,
                        website: item.website,
                        lang: item.lang,
                        ref: item.ref,
                        ref_about: item.ref_about,
                        latest_date: item.latest_date,
                        percentage: item.percentage,
                        start_days: item.start_days,
                        comments_count: item.comments_count,
                    });
                }
                console.log(_this.news);
                _this.allCount = _this.news.length;
                for (var _b = 0, _c = _this.news; _b < _c.length; _b++) {
                    var item = _c[_b];
                    if (item.status == 1) {
                        _this.active++;
                    }
                    else {
                        _this.inactive++;
                    }
                }
            });
        });
    };
    CloudMiningCategoriesComponent.prototype.loadMore = function (id) {
        this.router.navigate(['/cloud-mining/item', id]);
    };
    return CloudMiningCategoriesComponent;
}());
CloudMiningCategoriesComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-cloud-mining-categories',
        template: __webpack_require__("./angular/app/cloud-mining/cloud-mining-categories/cloud-mining-categories.component.html"),
        styles: [__webpack_require__("./angular/app/cloud-mining/cloud-mining-categories/cloud-mining-categories.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _c || Object])
], CloudMiningCategoriesComponent);

var _a, _b, _c;
//# sourceMappingURL=cloud-mining-categories.component.js.map

/***/ }),

/***/ "./angular/app/cloud-mining/cloud-mining-detail/cloud-mining-detail.component.html":
/***/ (function(module, exports) {

module.exports = "\t\t\t<div class=\"ico-card-content mining-card-content\">\n\t\t\t\t<a href=\"/cloud-mining/all\" class=\"return\"><span>&#60;</span>Вернуться к списку проектов</a>\n\t\t\t\t<div class=\"project-block\">\n\t\t\t\t\t<div class=\"img-wrap\">\n\t\t\t\t\t\t<img src=\"{{news.logo}}\" alt=\"\" style=\"width: 97px; height: 97px;\">\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"text-wrap\">\n\t\t\t\t\t\t<div class=\"text-info\">\n\t\t\t\t\t\t\t<p class=\"project-title\">{{news.name}}<a href=\"#comment-block\" class=\"comments\"><i class=\"fa fa-comment\" aria-hidden=\"true\"></i>{{commentcount}}</a></p>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"project-info-content\">\n\t\t\t\t\t\t\t<ul class=\"info-list\">\n\t\t\t\t\t\t\t\t<li><span>Статус:</span><span class=\"bold active\">{{news.status == 1 ? 'Платит' : 'Не платит'}}</span></li>\n\t\t\t\t\t\t\t\t<li><span>Доход в год:</span><span class=\"bold\">{{news.proc}}%</span></li>\n\t\t\t\t\t\t\t\t<li><span>Существует:</span><span class=\"bold\">{{news.start_days}} дней</span></li>\n\t\t\t\t\t\t\t\t<li><span>Активность депозита:</span><span class=\"bold\">{{news.depo_date}} дней</span></li>\n\t\t\t\t\t\t\t\t<li><span class=\"last-updated\">Последняя выплата: 21.02.2017 в 21:01</span></li>\n\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t<div class=\"progress-bar\">\n\t\t\t\t\t\t\t\t<a href=\"#follow-popup\" class=\"popup-link follow\" data-effect=\"mfp-zoom-in\"><span class=\"plus\">+</span><span class=\"text\">Следить</span></a>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<ul class=\"card-menu\">\n\t\t\t\t\t<li><a  [routerLink]=\"['/cloud-mining/item', news.id]\" fragment=\"basic-information\">Основа</a></li>\n\t\t\t\t\t<li><a [routerLink]=\"['/cloud-mining/item', news.id]\" fragment=\"history-table\">История операций</a></li>\n\t\t\t\t\t<li><a [routerLink]=\"['/cloud-mining/item', news.id]\" fragment=\"comment-block\">Комментарии ({{commentcount}})</a></li>\n\t\t\t\t\t<li><a [routerLink]=\"['/cloud-mining/item', news.id]\" fragment=\"related-projects\">Похожие проекты (0)</a></li>\n\t\t\t\t</ul>\n\t\t\t\t<div class=\"basic-information\" id=\"basic-information\">\n\t\t\t\t\t<div class=\"basic-information-wrap\">\n\t\t\t\t\t\t<div class=\"left\">\n\t\t\t\t\t\t\t<h3 class=\"ico-title\">Основная информация</h3>\n\t\t\t\t\t\t\t<ul>\n\t\t\t\t\t\t\t\t<li><span class=\"gray\">Официальный сайт: </span> <span class=\"black\"><a href=\"#\">{{news.website}}</a></span></li>\n\t\t\t\t\t\t\t\t<li><span class=\"gray\">Язык сайта:</span><span class=\"black\">{{news.lang}}</span> </li>\n\t\t\t\t\t\t\t\t<li><span class=\"gray\">Рефферальная система:</span><span class=\"black\">{{news.ref==0 ? 'Нет': 'Да'}}</span></li>\n\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"right\">\n\t\t\t\t\t\t\t<div class=\"progress\">\n\t\t\t                    <span [ngStyle]=\"{'width':news.percentage+'%'}\"></span>\n\t\t\t                    <p>Депозит: <b>{{news.depo}}$ ({{news.percentage | number:'1.0-0'}}%)</b></p>\n\t\t\t                  </div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"text-wrap\">\n\t\t\t\t\t\t<p>{{news.desc}}</p>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"history-table\" id=\"history-table\">\n\t\t\t\t\t<div class=\"history-title-block\">\n\t\t\t\t\t\t<h2>История операций с тестовым депозитом</h2>\n\t\t\t\t\t</div>\n\t\t\t\t\t<table>\n\t\t\t\t\t\t<thead>\n\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t<th width=\"14%\"><span>Сумма</span></th>\n\t\t\t\t\t\t\t\t<th width=\"22%\"><span>Операция</span></th>\n\t\t\t\t\t\t\t\t<th width=\"48%\"><span>Комментарий</span></th>\n\t\t\t\t\t\t\t\t<th width=\"16%\"><span>Дата</span></th>\n\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t</thead>\n\t\t\t\t\t\t<tbody>\n\t\t\t\t\t\t\t<tr *ngFor=\"let item of histories\">\n\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\t<span class=\"price\">{{item.price}}$</span>\n\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\t<span class=\"operation\" [ngClass]=\"item.type==2? 'operation-green':'operation-red'\">{{item.type==1 ? 'Пополнение' : 'Вывод средств'}}</span>\n\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\t<span class=\"comment\">{{item.comment}}</span>\n\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\t<span class=\"date\">{{item.datetime}}</span>\n\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\n\t\t\t\t\t\t</tbody>\n\t\t\t\t\t</table>\n\t\t\t\t\t<!-- <a href=\"#\" class=\"show-btn\">Показать еще</a> -->\n\t\t\t\t</div>\n\t\t\t\t<div class=\"comment-block\" id=\"comment-block\">\n\t\t\t\t\t<div class=\"comment-top\" *ngIf=\"user.id != undefined\">\n\t\t\t\t\t\t\t\t<h3>Добавить новый комментарий</h3>\n\t\t\t\t\t\t\t\t<form (ngSubmit)=\"submitComment(f, news.id, 'App\\\\CloudMining')\" #f=\"ngForm\">\n\t\t\t\t\t\t\t\t\t<input type=\"hidden\" ngModel name=\"post_id\" value=\"{{news?.id}}\">\n\t\t\t\t\t\t\t\t\t<input type=\"hidden\" ngModel name=\"commentable_type\" value=\"App\\News\">\n\t\t\t\t\t\t\t\t\t<textarea ngModel name=\"body\" placeholder=\"Начните вводить комментарий...\"></textarea>\n\t\t\t\t\t\t\t\t\t<button type=\"submit\">Добавить</button>\n\t\t\t\t\t\t\t\t</form>\n\t\t\t\t\t\t\t\t<p *ngIf=\"submitted\">Комментарий успешно добавлен</p>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"comment-top\" *ngIf=\"user.id == undefined\" style=\"background: none !important; border: none !important\">\n\t\t\t\t\t\t<h3>Комментарии ({{commentcount}})</h3>\n\t\t\t\t\t\t<p>Для того чтобы добавить свой комментарий - Вам необходимо <a href=\"#login-popup\" class=\"popup-link\">авторизоваться</a> или <a href=\"#check-popup\" class=\"popup-link\">пройти регистрацию.</a></p>\n\t\t\t\t\t</div>\n\t\t\t\t\t\n\t\t\t\t\t<div *ngIf=\"user.id != undefined\" style=\"background: none !important; border: none !important\" class=\"comment-top\">\n\t\t\t\t\t\t<h3 >Комментарии ({{commentcount}})</h3>\n\t\t\t\t\t\t<!-- <p>Для того чтобы добавить свой комментарий - Вам необходимо <a href=\"#login-popup\" class=\"popup-link\">авторизоваться</a> или <a href=\"#check-popup\" class=\"popup-link\">пройти регистрацию.</a></p> -->\n\n\t\t\t\t\t\n\t\t\t\t\t</div>\n          <ul class=\"comment-items\">\n            <!--  -->\n            <li *ngFor=\"let item of comments\">\n             <div class=\"left\">\n              <div class=\"info\">\n               <div class=\"img-wrap\">\n                <img src=\"{{item.photo}}\" style=\"max-width: 35px; height: auto;\" alt=\"\">\n              </div>\n              <div class=\"text-wrap\">\n                <p>{{item.author}}</p>\n                <span>Добавлен {{item.created_at}}</span>\n              </div>\n            </div>\n            <p class=\"comment-text\">{{item.body}}</p>\n          </div>\n          <div class=\"right\">\n            <div class=\"img-wrap\"></div>\n            <div class=\"btn-block\">\n             <span class=\"number-green\">0</span>\n             <div class=\"buttons\">\n              <a href=\"#\" class=\"plus\">+</a>\n              <a href=\"#\" class=\"minus\">-</a>\n            </div>\n          </div>\n        </div>\n      </li>\n\n    </ul>\n\t\t\t\t\t<!-- <a href=\"#\" class=\"show-comments\">Показать все комментарии (22)</a> -->\n\t\t\t\t</div>\n\t\t\t\t<!-- <div class=\"related-projects\" id=\"related-projects\">\n\t\t\t\t\t<h3 class=\"ico-title\">Похожие проекты (2)</h3>\n\t\t\t\t\t<div class=\"project-block\">\n\t\t\t\t\t\t<div class=\"img-wrap\">\n\t\t\t\t\t\t\t<a href=\"#\"><img src=\"img/project-img1.jpg\" alt=\"\"></a>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"text-wrap\">\n\t\t\t\t\t\t\t<div class=\"text-info\">\n\t\t\t\t\t\t\t\t<p><a href=\"#\" class=\"project-title\">Genesis (Дженезис) Mining</a><a href=\"#\" class=\"comments\"><i class=\"fa fa-comment\" aria-hidden=\"true\"></i>5</a></p>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"project-info-content\">\n\t\t\t\t\t\t\t\t<ul class=\"info-list\">\n\t\t\t\t\t\t\t\t\t<li><span>Статус:</span><span class=\"bold active\">Платит</span></li>\n\t\t\t\t\t\t\t\t\t<li><span>Доход в год:</span><span class=\"bold\">350%</span></li>\n\t\t\t\t\t\t\t\t\t<li><span>Существует:</span><span class=\"bold\">189 дней</span></li>\n\t\t\t\t\t\t\t\t\t<li><span>Активность депозита:</span><span class=\"bold\">5 дней</span></li>\n\t\t\t\t\t\t\t\t\t<li><span class=\"last-updated\">Последняя выплата: 21.02.2017 в 21:01</span></li>\n\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t<div class=\"progress-bar\">\n\t\t\t\t\t\t\t\t\t<div class=\"progress\">\n\t\t\t\t\t\t\t\t\t\t<span style=\"width: 19%\"></span>\n\t\t\t\t\t\t\t\t\t\t<p class=\"bold\">Депозит: 190$ (19%)</p>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<a href=\"#follow-popup\" class=\"popup-link follow\" data-effect=\"mfp-zoom-in\"><span class=\"plus\">+</span><span class=\"text\">Следить</span></a>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<p class=\"more-project\">Криптовалюты для облачного майнинга, предоставляемые сервисом Genesis Mining: По алгоритму SHA-256: Bitcoin (BTC)\n\t\t\t\t\t\t\t<a href=\"#\">Подробнее о проекте</a></p>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"project-block\">\n\t\t\t\t\t\t<div class=\"img-wrap\">\n\t\t\t\t\t\t\t<a href=\"#\"><img src=\"img/project-img1.jpg\" alt=\"\"></a>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"text-wrap\">\n\t\t\t\t\t\t\t<div class=\"text-info\">\n\t\t\t\t\t\t\t\t<p><a href=\"#\" class=\"project-title\">Genesis (Дженезис)</a><a href=\"#\" class=\"comments\"><i class=\"fa fa-comment\" aria-hidden=\"true\"></i>5</a></p>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"project-info-content\">\n\t\t\t\t\t\t\t\t<ul class=\"info-list\">\n\t\t\t\t\t\t\t\t\t<li><span>Статус:</span><span class=\"bold active\">Платит</span></li>\n\t\t\t\t\t\t\t\t\t<li><span>Доход в год:</span><span class=\"bold\">350%</span></li>\n\t\t\t\t\t\t\t\t\t<li><span>Существует:</span><span class=\"bold\">189 дней</span></li>\n\t\t\t\t\t\t\t\t\t<li><span>Активность депозита:</span><span class=\"bold\">5 дней</span></li>\n\t\t\t\t\t\t\t\t\t<li><span class=\"last-updated\">Последняя выплата: 21.02.2017 в 21:01</span></li>\n\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t<div class=\"progress-bar\">\n\t\t\t\t\t\t\t\t\t<div class=\"progress\">\n\t\t\t\t\t\t\t\t\t\t<span style=\"width: 19%\"></span>\n\t\t\t\t\t\t\t\t\t\t<p class=\"bold\">Депозит: 190$ (19%)</p>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<a href=\"#\" class=\"follow\"><span class=\"minus\"><img src=\"img/minus.png\" alt=\"\"></span><span class=\"text text-red\">Следить</span></a>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<p class=\"more-project\">Криптовалюты для облачного майнинга, предоставляемые сервисом Genesis Mining: По алгоритму SHA-256: Bitcoin (BTC)\n\t\t\t\t\t\t\t<a href=\"#\">Подробнее о проекте</a></p>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"project-block\">\n\t\t\t\t\t\t<div class=\"img-wrap\">\n\t\t\t\t\t\t\t<a href=\"#\"><img src=\"img/project-img1.jpg\" alt=\"\"></a>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"text-wrap\">\n\t\t\t\t\t\t\t<div class=\"text-info\">\n\t\t\t\t\t\t\t\t<p><a href=\"#\" class=\"project-title\">Genesis (Дженезис) Mining</a><a href=\"#\" class=\"comments\"><i class=\"fa fa-comment\" aria-hidden=\"true\"></i>5</a></p>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"project-info-content\">\n\t\t\t\t\t\t\t\t<ul class=\"info-list\">\n\t\t\t\t\t\t\t\t\t<li><span>Статус:</span><span class=\"bold active\">Платит</span></li>\n\t\t\t\t\t\t\t\t\t<li><span>Доход в год:</span><span class=\"bold\">350%</span></li>\n\t\t\t\t\t\t\t\t\t<li><span>Существует:</span><span class=\"bold\">189 дней</span></li>\n\t\t\t\t\t\t\t\t\t<li><span>Активность депозита:</span><span class=\"bold\">5 дней</span></li>\n\t\t\t\t\t\t\t\t\t<li><span class=\"last-updated\">Последняя выплата: 21.02.2017 в 21:01</span></li>\n\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t<div class=\"progress-bar\">\n\t\t\t\t\t\t\t\t\t<p class=\"no-deposite\">Депозита нет</p>\n\t\t\t\t\t\t\t\t\t<a href=\"#follow-popup\" class=\"popup-link follow\" data-effect=\"mfp-zoom-in\"><span class=\"plus\">+</span><span class=\"text\">Следить</span></a>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<p class=\"more-project\">Криптовалюты для облачного майнинга, предоставляемые сервисом Genesis Mining: По алгоритму SHA-256: Bitcoin (BTC)\n\t\t\t\t\t\t\t<a href=\"#\">Подробнее о проекте</a></p>\n\t\t\t\t\t</div>\n\t\t\t\t</div> -->\n\t\t\t</div>"

/***/ }),

/***/ "./angular/app/cloud-mining/cloud-mining-detail/cloud-mining-detail.component.scss":
/***/ (function(module, exports) {

module.exports = ".ico-wrap {\n  padding-top: 22px;\n  padding-bottom: 44px;\n  background: #f5f5f5; }\n\n.ico-wrap .wrapper {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n  -ms-flex-pack: justify;\n  justify-content: space-between; }\n\n.ico-card-content {\n  max-width: 880px;\n  width: 100%; }\n\n.ico-card-content .comment-top {\n  background-color: transparent;\n  border: none; }\n\n.ico-card-content .related-projects {\n  margin-top: 30px; }\n\n.ico-card-content .related-projects > h3 {\n  margin-bottom: 18px;\n  padding-left: 22px; }\n\n.ico-card-content .history-project {\n  border-bottom: 1px solid #e3e3e3;\n  border-left: 1px solid #eee;\n  border-right: 1px solid #eee;\n  background: #fff;\n  padding: 30px 19px 0; }\n\n.ico-card-content .history-project h3 {\n  margin-bottom: 20px; }\n\n.ico-card-content .history-project ul {\n  text-align: center; }\n\n.ico-card-content .history-project ul li {\n  padding-bottom: 35px;\n  position: relative; }\n\n.ico-card-content .history-project ul li:after {\n  content: '';\n  position: absolute;\n  bottom: 8px;\n  left: 50%;\n  margin-left: -1px;\n  width: 2px;\n  height: 17px;\n  background: #aeaeae; }\n\n.ico-card-content .history-project ul li span {\n  font-size: 14px;\n  font-weight: bold;\n  color: #000;\n  display: inline-block;\n  margin-bottom: 5px; }\n\n.ico-card-content .history-project ul li p {\n  font-size: 18px;\n  color: #000; }\n\n.ico-card-content .history-project ul li.gray p,\n.ico-card-content .history-project ul li.gray span {\n  color: #a1a1a1; }\n\n.ico-card-content .history-project ul li.green p,\n.ico-card-content .history-project ul li.green span {\n  color: #396c19; }\n\n.ico-card-content .history-project ul li:last-child:after {\n  content: none; }\n\n.ico-card-content .team-genesis {\n  padding: 30px 0 40px 20px; }\n\n.ico-card-content .team-genesis h3 {\n  margin-bottom: 20px; }\n\n.ico-card-content .team-genesis ul {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex; }\n\n.ico-card-content .team-genesis ul li {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n  -ms-flex-direction: column;\n  flex-direction: column;\n  margin-right: 25px; }\n\n.ico-card-content .team-genesis ul li .img-wrap {\n  width: 96px;\n  height: 96px;\n  margin-bottom: 16px; }\n\n.ico-card-content .team-genesis ul li .img-wrap img {\n  width: 100%; }\n\n.ico-card-content .team-genesis ul li span {\n  font-size: 14px;\n  color: #000; }\n\n.ico-card-content .team-genesis ul li span.bold {\n  font-weight: bold;\n  margin-bottom: 5px; }\n\n.ico-card-content .distribution-funds {\n  border-bottom: 1px solid #e3e3e3;\n  border-left: 1px solid #eee;\n  border-right: 1px solid #eee;\n  background: #fff;\n  padding: 30px 18px; }\n\n.ico-card-content .distribution-funds .persent {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  margin: 17px 0 10px; }\n\n.ico-card-content .distribution-funds .persent li {\n  font-size: 18px;\n  font-weight: bold;\n  color: #fff;\n  height: 46px;\n  padding-left: 13px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n  -ms-flex-align: center;\n  align-items: center; }\n\n.ico-card-content .distribution-funds .persent li.gray {\n  background: #383c46; }\n\n.ico-card-content .distribution-funds .persent li.blue {\n  background: #298fd7; }\n\n.ico-card-content .distribution-funds .persent li.purple {\n  background: #bb3ee4; }\n\n.ico-card-content .distribution-funds .persent li.green {\n  background: #84bf58; }\n\n.ico-card-content .distribution-funds .persent-text li {\n  margin-bottom: 10px; }\n\n.ico-card-content .distribution-funds .persent-text li:last-child {\n  margin-bottom: 0; }\n\n.ico-card-content .distribution-funds .persent-text li .bg {\n  display: inline-block;\n  width: 10px;\n  height: 10px;\n  margin-right: 4px; }\n\n.ico-card-content .distribution-funds .persent-text li .bg.bg-gray {\n  background: #383c46; }\n\n.ico-card-content .distribution-funds .persent-text li .bg.bg-blue {\n  background: #298fd7; }\n\n.ico-card-content .distribution-funds .persent-text li .bg.bg-purple {\n  background: #bb3ee4; }\n\n.ico-card-content .distribution-funds .persent-text li .bg.bg-green {\n  background: #84bf58; }\n\n.ico-card-content .distribution-funds .persent-text li .text {\n  font-size: 14px; }\n\n.ico-card-content .distribution-funds .persent-text li .text.text-gray {\n  color: #383c46; }\n\n.ico-card-content .distribution-funds .persent-text li .text.text-blue {\n  color: #298fd7; }\n\n.ico-card-content .distribution-funds .persent-text li .text.text-purple {\n  color: #bb3ee4; }\n\n.ico-card-content .distribution-funds .persent-text li .text.text-green {\n  color: #84bf58; }\n\n.ico-card-content .basic-information {\n  border-bottom: 1px solid #e3e3e3;\n  border-left: 1px solid #eee;\n  border-right: 1px solid #eee;\n  background: #fff;\n  padding: 24px 20px 28px; }\n\n.ico-card-content .basic-information .basic-information-wrap {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n  -ms-flex-pack: justify;\n  justify-content: space-between;\n  margin-bottom: 28px; }\n\n.ico-card-content .basic-information .basic-information-wrap .left h3 {\n  margin-bottom: 24px; }\n\n.ico-card-content .basic-information .basic-information-wrap .left ul li {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex; }\n\n.ico-card-content .basic-information .basic-information-wrap .left ul li .gray {\n  font-size: 16px;\n  color: #8f8f8f;\n  display: inline-block;\n  margin-bottom: 5px;\n  min-width: 294px; }\n\n.ico-card-content .basic-information .basic-information-wrap .left ul li .black {\n  font-size: 16px;\n  color: #1d1f24;\n  display: inline-block;\n  text-align: left; }\n\n.ico-card-content .basic-information .basic-information-wrap .left ul li .black a {\n  font-size: 16px;\n  color: #1d1f24; }\n\n.ico-card-content .basic-information .basic-information-wrap .right h3 {\n  margin-bottom: 15px; }\n\n.ico-card-content .basic-information .basic-information-wrap .right ul {\n  padding: 12px;\n  background: #f5f5f5;\n  margin-top: 1px; }\n\n.ico-card-content .basic-information .basic-information-wrap .right ul li {\n  margin-bottom: 5px; }\n\n.ico-card-content .basic-information .basic-information-wrap .right ul li:last-child {\n  margin-bottom: 0; }\n\n.ico-card-content .basic-information .basic-information-wrap .right ul li span {\n  font-weight: bold;\n  font-size: 14px;\n  color: #6e6e6e; }\n\n.ico-card-content .basic-information .text-wrap p {\n  color: #1d1f24;\n  font-size: 16px;\n  line-height: 18px; }\n\n.ico-card-content .basic-information .text-wrap a {\n  margin-top: 22px;\n  color: #1d1f24;\n  font-size: 16px;\n  text-decoration: underline; }\n\n.ico-card-content .card-menu {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  margin-bottom: 10px;\n  margin-top: 24px; }\n\n.ico-card-content .card-menu li {\n  margin-right: 1px; }\n\n.ico-card-content .card-menu li:last-child {\n  margin-right: 0; }\n\n.ico-card-content .card-menu li a {\n  height: 32px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n  -ms-flex-align: center;\n  align-items: center;\n  -webkit-box-pack: center;\n  -ms-flex-pack: center;\n  justify-content: center;\n  background: #c1c1c1;\n  font-size: 14px;\n  font-weight: bold;\n  color: #666;\n  padding: 0 17px; }\n\n.ico-card-content .card-menu li a:hover {\n  color: #dc7f1c; }\n\n.ico-card-content .card-menu li a img {\n  margin-left: 4px; }\n\n.ico-card-content > .project-block {\n  padding: 0;\n  padding-left: 22px;\n  background-color: transparent;\n  border: none; }\n\n.ico-card-content > .project-block .project-title {\n  font-size: 32px;\n  margin-bottom: 8px; }\n\n.ico-card-content > .project-block .project-title .comments {\n  margin-left: 13px;\n  margin-top: 2px; }\n\n.ico-card-content > .project-block .status {\n  margin-bottom: 4px; }\n\n.ico-card-content > .project-block .year {\n  margin-bottom: 12px; }\n\n.ico-card-content > .project-block .progress-bar {\n  margin-right: 25px; }\n\n.ico-wrapper {\n  background: #f9f9f9;\n  padding-top: 20px;\n  padding-bottom: 44px; }\n\n.ico-wrapper .categories-ico-title {\n  margin-top: 11px; }\n\n.ico-wrapper .wrapper {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n  -ms-flex-pack: justify;\n  justify-content: space-between; }\n\n.ico-wrapper .wrapper .ico-content {\n  max-width: 880px;\n  width: 100%; }\n\n.ico-wrapper .wrapper .ico-content .ico-head {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  padding-bottom: 12px;\n  -webkit-box-align: center;\n  -ms-flex-align: center;\n  align-items: center; }\n\n.ico-wrapper .wrapper .ico-content .ico-head h1 {\n  font-size: 36px;\n  color: #1d1f24;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n  -ms-flex-align: center;\n  align-items: center;\n  margin-right: 24px; }\n\n.ico-wrapper .wrapper .ico-content .ico-head h1 span {\n  display: inline-block;\n  margin-left: 12px;\n  font-size: 14px;\n  color: #595959; }\n\n.ico-wrapper .wrapper .ico-content .ico-head .ico-tabs {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex; }\n\n.ico-wrapper .wrapper .ico-content .ico-head .ico-tabs li {\n  margin-right: 8px; }\n\n.ico-wrapper .wrapper .ico-content .ico-head .ico-tabs li a {\n  padding: 0 12px;\n  border-radius: 18px;\n  height: 39px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n  -ms-flex-align: center;\n  align-items: center;\n  background: #e5e5e5;\n  color: #010a3b;\n  font-size: 14px; }\n\n.ico-wrapper .wrapper .ico-content .ico-head .ico-tabs li.active a, .ico-wrapper .wrapper .ico-content .ico-head .ico-tabs li:hover a {\n  color: #fff;\n  background: #f58c1b; }\n\n.ico-wrapper .wrapper .ico-content .ico-head form {\n  max-width: 244px;\n  width: 100%;\n  height: 44px;\n  border: 1px solid #ebebeb;\n  border-radius: 20px;\n  position: relative;\n  margin-left: auto; }\n\n.ico-wrapper .wrapper .ico-content .ico-head form input {\n  border-radius: 20px;\n  border: none;\n  height: 100%;\n  width: 100%;\n  padding: 0 52px 0 14px;\n  font-size: 14px;\n  color: #010a3b; }\n\n.ico-wrapper .wrapper .ico-content .ico-head form input::-webkit-input-placeholder {\n  color: #010a3b; }\n\n.ico-wrapper .wrapper .ico-content .ico-head form input::-moz-placeholder {\n  color: #010a3b; }\n\n.ico-wrapper .wrapper .ico-content .ico-head form input:-ms-input-placeholder {\n  color: #010a3b; }\n\n.ico-wrapper .wrapper .ico-content .ico-head form input:-moz-placeholder {\n  color: #010a3b; }\n\n.ico-wrapper .wrapper .ico-content .ico-head form button {\n  position: absolute;\n  top: 50%;\n  -webkit-transform: translateY(-50%);\n          transform: translateY(-50%);\n  right: 22px;\n  background: none;\n  border: none;\n  height: 100%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex; }\n\n.ico-wrapper .wrapper .ico-content .ico-head form button img {\n  opacity: .5; }\n\n.ico-wrapper .wrapper .ico-content .project-block {\n  border-top: 1px solid #eaeaea;\n  border-right: 1px solid #eee;\n  border-left: 1px solid #eee; }\n\n.ico-wrapper .wrapper .ico-content .project-block.no-bg {\n  background-color: transparent;\n  border: none; }\n\n.ico-wrapper .wrapper .ico-content .project-block .no-deposite {\n  background: #fff;\n  border: 1px solid #efefef;\n  width: 196px;\n  height: 33px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n  -ms-flex-align: center;\n  align-items: center;\n  padding-left: 12px;\n  font-size: 14px;\n  color: #818181;\n  font-weight: bold; }\n\n.ico-wrapper .wrapper .ico-content .project-block.hidden {\n  display: none; }\n\n.project-wrapper {\n  display: none; }\n\n.project-wrapper.active {\n  display: block; }\n\n.popup {\n  position: relative;\n  max-width: 433px;\n  height: 449px;\n  margin: auto auto;\n  padding: 40px 38px 34px;\n  -webkit-box-shadow: 0px 5px 30px 0px rgba(0, 0, 0, 0.1);\n  box-shadow: 0px 5px 30px 0px rgba(0, 0, 0, 0.1); }\n\n.popup h2 {\n  font-size: 30px;\n  color: #000;\n  margin-bottom: 18px; }\n\n.popup p {\n  font-size: 14px;\n  color: #707070;\n  margin-bottom: 20px; }\n\n.popup .add-portfolio {\n  font-size: 14px;\n  color: #58a721;\n  display: inline-block;\n  margin: 14px 0 10px;\n  position: relative;\n  padding-bottom: 5px; }\n\n.popup .add-portfolio:after {\n  content: '';\n  border: 1px dashed #58a721;\n  position: absolute;\n  bottom: 0px;\n  left: 0;\n  width: 100%; }\n\nbody .mfp-zoom-in.mfp-ready.mfp-bg {\n  background: #fff;\n  opacity: 1; }\n\n.mfp-zoom-in .mfp-with-anim {\n  opacity: 0;\n  -webkit-transition: all 0.2s ease-in-out;\n  transition: all 0.2s ease-in-out;\n  -webkit-transform: scale(0.8);\n          transform: scale(0.8); }\n\n.mfp-zoom-in.mfp-bg {\n  opacity: 0;\n  -webkit-transition: all 0.3s ease-out;\n  transition: all 0.3s ease-out; }\n\n.mfp-zoom-in.mfp-ready .mfp-with-anim {\n  opacity: 1;\n  -webkit-transform: scale(1);\n          transform: scale(1); }\n\n.mfp-zoom-in.mfp-ready.mfp-bg {\n  opacity: 0.8; }\n\n.mfp-zoom-in.mfp-removing .mfp-with-anim {\n  -webkit-transform: scale(0.8);\n          transform: scale(0.8);\n  opacity: 0; }\n\n.mfp-zoom-in.mfp-removing.mfp-bg {\n  opacity: 0; }\n\n.ico-card-content {\n  max-width: 880px;\n  margin-left: -40px; }\n\n.project-block .text-wrap .text-info > p .comments {\n  margin-left: 10px !important; }\n\n.ico-card-content {\n  max-width: 880px;\n  min-width: 880px;\n  margin-left: -40px; }\n\n.project-block .text-wrap .text-info > p .comments {\n  margin-left: 10px !important; }\n\n.mining-wrapper {\n  padding-top: 22px;\n  padding-bottom: 44px;\n  background: #f5f5f5; }\n\n.mining-wrapper .wrapper {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n  -ms-flex-pack: justify;\n  justify-content: space-between; }\n\n.sidebar {\n  margin-top: 10px; }\n\n.mining-content {\n  max-width: 880px;\n  width: 100%; }\n\n.mining-content .select-wrap-ico .select2, .mining-content .select-wrap-mining .select2 {\n  max-width: 205px !important; }\n\n.mining-content .mining-head {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  padding-bottom: 12px;\n  -webkit-box-align: center;\n  -ms-flex-align: center;\n  align-items: center; }\n\n.mining-content .mining-head h1 {\n  font-size: 36px;\n  color: #1d1f24;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n  -ms-flex-align: center;\n  align-items: center;\n  margin-right: 24px; }\n\n.mining-content .mining-head h1 span {\n  display: inline-block;\n  margin-left: 12px;\n  font-size: 14px;\n  color: #595959;\n  margin-top: 6px; }\n\n.mining-content .mining-head .mining-tabs {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex; }\n\n.mining-content .mining-head .mining-tabs li {\n  margin-right: 8px; }\n\n.mining-content .mining-head .mining-tabs li a {\n  padding: 0 12px;\n  border-radius: 18px;\n  height: 39px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n  -ms-flex-align: center;\n  align-items: center;\n  background: #e5e5e5;\n  color: #010a3b;\n  font-size: 14px; }\n\n.mining-content .mining-head .mining-tabs li.active a, .mining-content .mining-head .mining-tabs li:hover a {\n  color: #fff;\n  background: #f58c1b; }\n\n.mining-content .mining-head form {\n  max-width: 244px;\n  width: 100%;\n  height: 44px;\n  border: 1px solid #ebebeb;\n  border-radius: 20px;\n  position: relative;\n  margin-left: auto; }\n\n.mining-content .mining-head form input {\n  border-radius: 20px;\n  border: none;\n  height: 100%;\n  width: 100%;\n  padding: 0 52px 0 14px;\n  font-size: 14px;\n  color: #010a3b; }\n\n.mining-content .mining-head form input::-webkit-input-placeholder {\n  color: #010a3b; }\n\n.mining-content .mining-head form input::-moz-placeholder {\n  color: #010a3b; }\n\n.mining-content .mining-head form input:-ms-input-placeholder {\n  color: #010a3b; }\n\n.mining-content .mining-head form input:-moz-placeholder {\n  color: #010a3b; }\n\n.mining-content .mining-head form button {\n  position: absolute;\n  top: 50%;\n  -webkit-transform: translateY(-50%);\n          transform: translateY(-50%);\n  right: 22px;\n  background: none;\n  border: none;\n  height: 100%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex; }\n\n.mining-content .mining-head form button img {\n  opacity: .5; }\n\n.mining-content .project-info-content .progress p {\n  color: #383c46;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  font-weight: normal; }\n\n.mining-content .project-info-content .progress p b {\n  display: inline-block;\n  font-weight: bold;\n  margin-left: 5px; }\n\n.show-more {\n  margin-top: 35px; }\n\n.project-block.hidden {\n  display: none; }\n\n.progress .bold {\n  font-weight: bold;\n  color: #000; }\n\n.basic-information .right {\n  margin-top: 26px; }\n\n.basic-information .right p {\n  font-weight: bold;\n  color: #000; }\n\n.history-table {\n  margin: 22px 0 24px; }\n\n.history-table .history-title-block {\n  height: 43px;\n  width: 100%;\n  background: #e5e5e5;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n  -ms-flex-align: center;\n  align-items: center; }\n\n.history-table .history-title-block h2 {\n  margin-left: 20px;\n  font-size: 18px;\n  color: #1d1f24;\n  font-weight: bold; }\n\n.history-table table {\n  width: 100%;\n  border: 1px solid #fff; }\n\n.history-table table thead tr {\n  height: 30px;\n  background: #f7f7f7; }\n\n.history-table table thead tr th:first-child {\n  padding-left: 18px; }\n\n.history-table table thead tr th span {\n  font-size: 12px;\n  color: #555; }\n\n.history-table table tbody tr {\n  background: #fff;\n  height: 35px;\n  border-bottom: 1px solid #e5e5e5; }\n\n.history-table table tbody tr.hidden {\n  display: none; }\n\n.history-table table td:first-child {\n  padding-left: 18px; }\n\n.history-table table td .price {\n  font-size: 14px;\n  font-weight: bold;\n  color: #1d1f24; }\n\n.history-table table td .operation {\n  font-size: 14px; }\n\n.history-table table td .operation.operation-green {\n  color: #529127; }\n\n.history-table table td .operation.operation-red {\n  color: #f00; }\n\n.history-table table td .comment {\n  font-size: 14px;\n  color: #1d1f24; }\n\n.history-table table td .date {\n  font-size: 14px;\n  color: #1d1f24; }\n\n.ico-card-content {\n  max-width: 880px;\n  margin-left: -40px; }\n\n.project-block .text-wrap .text-info > p .comments {\n  margin-left: 10px !important; }\n\n.comment-block {\n  margin-top: 30px; }\n\n.comment-block .comment-top {\n  border-bottom: 1px solid #e3e3e3;\n  background: #fff;\n  padding: 20px 19px 19px 20px; }\n\n.comment-block .comment-top h3 {\n  font-size: 18px;\n  font-weight: bold;\n  color: #000;\n  margin-bottom: 10px; }\n\n.comment-block .comment-top p {\n  font-size: 14px;\n  font-weight: bold;\n  color: #fa5252; }\n\n.comment-block .comment-top p a {\n  color: #fa5252;\n  text-decoration: underline; }\n\n.comment-block .comment-items {\n  padding: 0 22px 0 18px; }\n\n.comment-block .comment-items li {\n  padding: 20px 0;\n  border-bottom: 1px solid #a4a4a4;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n  -ms-flex-pack: justify;\n  justify-content: space-between;\n  width: 100%; }\n\n.comment-block .comment-items li:last-child {\n  border: none; }\n\n.comment-block .comment-items li.hidden {\n  display: none; }\n\n.comment-block .comment-items li .left .info {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n  -ms-flex-align: center;\n  align-items: center;\n  margin-bottom: 8px; }\n\n.comment-block .comment-items li .left .info .img-wrap {\n  width: 35px;\n  height: 35px;\n  margin-right: 12px; }\n\n.comment-block .comment-items li .left .info .img-wrap img {\n  width: 100%;\n  border-radius: 50%; }\n\n.comment-block .comment-items li .left .info .text-wrap p {\n  font-size: 11px;\n  font-weight: bold;\n  color: #000; }\n\n.comment-block .comment-items li .left .info .text-wrap span {\n  display: inline-block;\n  font-weight: bold;\n  font-size: 11px;\n  color: #777; }\n\n.comment-block .comment-items li .left .comment-text {\n  color: #000;\n  font-size: 16px; }\n\n.comment-block .comment-items li .right {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n  -ms-flex-align: center;\n  align-items: center;\n  -webkit-box-pack: justify;\n  -ms-flex-pack: justify;\n  justify-content: space-between;\n  min-width: 78px; }\n\n.comment-block .comment-items li .right .btn-block {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n  -ms-flex-align: center;\n  align-items: center; }\n\n.comment-block .comment-items li .right .btn-block .number-green {\n  font-size: 24px;\n  color: #8cc863; }\n\n.comment-block .comment-items li .right .btn-block .number-red {\n  font-size: 24px;\n  color: #fa5252; }\n\n.comment-block .comment-items li .right .btn-block .buttons {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n  -ms-flex-direction: column;\n  flex-direction: column;\n  margin-left: 9px; }\n\n.comment-block .comment-items li .right .btn-block .buttons a {\n  width: 20px;\n  height: 20px;\n  border-radius: 50%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n  -ms-flex-align: center;\n  align-items: center;\n  -webkit-box-pack: center;\n  -ms-flex-pack: center;\n  justify-content: center; }\n\n.comment-block .comment-items li .right .btn-block .buttons .plus {\n  margin-bottom: 4px;\n  color: #fff;\n  font-size: 18px;\n  background: #8cc863; }\n\n.comment-block .comment-items li .right .btn-block .buttons .plus:hover {\n  background: #c0deac; }\n\n.comment-block .comment-items li .right .btn-block .buttons .minus {\n  color: #fff;\n  font-size: 18px;\n  background: #fa5252; }\n\n.comment-block .comment-items li .right .btn-block .buttons .minus:hover {\n  background: #f8a3a3; }\n\n.comment-block .show-comments {\n  width: 100%;\n  height: 42px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n  -ms-flex-align: center;\n  align-items: center;\n  -webkit-box-pack: center;\n  -ms-flex-pack: center;\n  justify-content: center;\n  font-weight: bold;\n  font-size: 14px;\n  margin-top: -1px;\n  color: #383c46;\n  background: #c1c1c1; }\n\n.comment-block .show-comments:hover {\n  background: #383c46;\n  color: #fff; }\n\n.comment-block .total-comments {\n  font-size: 18px;\n  font-weight: bold;\n  color: #000;\n  margin-left: 18px;\n  margin-top: 24px; }\n\n.comment-wrap {\n  margin-top: -15px;\n  margin-bottom: 25px; }\n\n.comment-items li:last-child {\n  border: none; }\n\n.comment-top {\n  padding: 18px 25px 21px 15px; }\n\n.comment-top form textarea {\n  height: 54px;\n  border: 1px solid #e4e4e4;\n  width: 100%;\n  resize: none;\n  font-size: 14px;\n  color: #949494;\n  padding: 10px;\n  margin-bottom: 10px; }\n\n.comment-top form textarea::-webkit-input-placeholder {\n  color: #949494; }\n\n.comment-top form textarea::-moz-placeholder {\n  color: #949494; }\n\n.comment-top form textarea:-ms-input-placeholder {\n  color: #949494; }\n\n.comment-top form textarea:-moz-placeholder {\n  color: #949494; }\n\n.comment-top form textarea:focus {\n  outline: none; }\n\n.comment-top form button {\n  height: 34px;\n  background: #f58c1b;\n  color: #fff;\n  font-size: 14px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n  -ms-flex-align: center;\n  align-items: center;\n  padding: 0px 17px;\n  border: none;\n  font-weight: bold; }\n"

/***/ }),

/***/ "./angular/app/cloud-mining/cloud-mining-detail/cloud-mining-detail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export NewsRaw */
/* unused harmony export User */
/* unused harmony export History */
/* unused harmony export CommentRaw */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CloudMiningDetailComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__order_pipe_ngx_order_pipe__ = __webpack_require__("./angular/app/order-pipe/ngx-order.pipe.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// import { interval } from 'rxjs/Observable/interval';



var NewsRaw = (function () {
    function NewsRaw() {
    }
    return NewsRaw;
}());

var User = (function () {
    function User() {
    }
    return User;
}());

var History = (function () {
    function History() {
    }
    return History;
}());

var CommentRaw = (function () {
    function CommentRaw() {
    }
    return CommentRaw;
}());

var CloudMiningDetailComponent = (function () {
    function CloudMiningDetailComponent(orderPipe, http, router, route) {
        var _this = this;
        this.orderPipe = orderPipe;
        this.http = http;
        this.router = router;
        this.route = route;
        this.comments = [];
        this.histories = [];
        this.commentcount = 0;
        this.submitted = false;
        var id = route.snapshot.params['id'];
        var path = "/miningraw/" + id;
        var info = http.get(path);
        info.subscribe(function (response) {
            // console.log(response['news']);
            _this.news = {
                id: response['news'].id,
                name: response['news'].name,
                depo: response['news'].depo,
                proc: response['news'].proc,
                status: response['news'].status,
                recieved: response['news'].recieved,
                logo: response['news'].logo,
                desc: response['news'].desc,
                depo_date: response['news'].depo_date,
                start: response['news'].start,
                website: response['news'].website,
                lang: response['news'].lang,
                ref: response['news'].ref,
                ref_about: response['news'].ref_about,
                latest_date: response['news'].latest_date,
                percentage: response['news'].percentage,
                start_days: response['news'].start_days,
            };
            console.log(response['news']['history']);
            for (var _i = 0, _a = response['news'].history; _i < _a.length; _i++) {
                var item = _a[_i];
                _this.histories.push({
                    id: item.id,
                    price: item.price,
                    type: item.type,
                    comment: item.comment,
                    datetime: item.datetime,
                });
            }
            if (response['news'].comments.length > 0) {
                for (var _b = 0, _c = response['news'].comments; _b < _c.length; _b++) {
                    var item = _c[_b];
                    _this.comments.push({
                        id: item['id'],
                        email: item['email'],
                        author: item['author'],
                        body: item['body'],
                        commentable_id: item['commentable_id'],
                        photo: item['photo'],
                        created_at: item['created_at']
                    });
                    _this.commentcount = _this.commentcount + 1;
                }
                // this.commentcount = response['comments'].length;
            }
        });
    }
    CloudMiningDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.fragment.subscribe(function (fragment) { _this.fragment = fragment; });
        try {
            document.querySelector('#' + this.fragment).scrollIntoView();
        }
        catch (e) { }
        this.router.events.subscribe(function (evt) {
            if (!(evt instanceof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* NavigationEnd */])) {
                return;
            }
            window.scrollTo(0, 0);
        });
        var userpath = "/angular/user";
        var userinfo = this.http.get(userpath);
        userinfo.subscribe(function (response) {
            _this.user = {
                id: response.id,
                name: response.name,
                email: response.email,
                photo_id: response.photo_id,
                role_id: response.role_id
            };
        });
    };
    CloudMiningDetailComponent.prototype.submitComment = function (form, post_id, type) {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["c" /* HttpHeaders */]({ 'Content-type': 'Application/json ' });
        this.http.post('/storecomment', {
            'post_id': post_id,
            'body': form.value.body,
            'commentable_id': post_id,
            'commentable_type': type
        }, { headers: headers }).subscribe(function (response) {
            return _this.comments.unshift({
                id: response['id'],
                email: response['email'],
                author: response['author'],
                body: response['body'],
                commentable_id: response['commentable_id'],
                photo: response['photo'],
                created_at: response['created_at']
            });
        }, function (error) { return console.log(error); });
        form.reset();
        this.submitted = true;
        this.commentcount = this.commentcount + 1;
        // console.log(post_id + " " + form.value.body + " " + type); 
    };
    CloudMiningDetailComponent.prototype.goBack = function () {
        this.router.navigateByUrl('/mining/all');
    };
    return CloudMiningDetailComponent;
}());
CloudMiningDetailComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-cloud-mining-detail',
        template: __webpack_require__("./angular/app/cloud-mining/cloud-mining-detail/cloud-mining-detail.component.html"),
        styles: [__webpack_require__("./angular/app/cloud-mining/cloud-mining-detail/cloud-mining-detail.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__order_pipe_ngx_order_pipe__["a" /* OrderPipe */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__order_pipe_ngx_order_pipe__["a" /* OrderPipe */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _d || Object])
], CloudMiningDetailComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=cloud-mining-detail.component.js.map

/***/ }),

/***/ "./angular/app/cloud-mining/cloud-mining.component.html":
/***/ (function(module, exports) {

module.exports = "  <section class=\"mining-wrapper\">\n    <div class=\"wrapper\">\n<router-outlet></router-outlet>\n<aside class=\"sidebar\">\n  <h2 class=\"categories-ico-title\">Категории Облачный Майнинг</h2>\n        <ul class=\"tag-list\">\n          <li routerLinkActive=\"active\"><a routerLink=\"/cloud-mining/all\" >Все</a></li>\n          <li *ngFor=\"let category of categories\">\n          <a routerLinkActive=\"active\"\n           [routerLink]=\"['/cloud-mining/category', category.id]\" >{{category.name}}({{category.count}})</a>\n          </li>\n        </ul>\n        <app-sidebar></app-sidebar>\n      </aside>\n      </div>\n  </section>"

/***/ }),

/***/ "./angular/app/cloud-mining/cloud-mining.component.scss":
/***/ (function(module, exports) {

module.exports = "aside {\n  margin-right: -10px !important; }\n"

/***/ }),

/***/ "./angular/app/cloud-mining/cloud-mining.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CloudMiningComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/@angular/common/http.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// import { interval } from 'rxjs/Observable/interval';


var CloudMiningComponent = (function () {
    function CloudMiningComponent(http, router, route) {
        var _this = this;
        this.http = http;
        this.router = router;
        this.route = route;
        this.categories = [];
        var path = "/categoriesraw/6";
        var info = http.get(path);
        info.subscribe(function (response) {
            for (var _i = 0, _a = response['cats']; _i < _a.length; _i++) {
                var item = _a[_i];
                if (item['count'] > 0) {
                    _this.categories.push({
                        id: item['id'],
                        name: item['name'],
                        count: item['count']
                    });
                }
            }
            console.log(_this.categories);
        });
    }
    CloudMiningComponent.prototype.ngOnInit = function () {
    };
    CloudMiningComponent.prototype.loadCat = function (id) {
        var _this = this;
        this.router.navigate(['/posts/category', id]);
        console.log('snap');
        this.route.url.subscribe(function () {
            console.log(_this.route.snapshot.firstChild.data);
        });
    };
    return CloudMiningComponent;
}());
CloudMiningComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-cloud-mining',
        template: __webpack_require__("./angular/app/cloud-mining/cloud-mining.component.html"),
        styles: [__webpack_require__("./angular/app/cloud-mining/cloud-mining.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _c || Object])
], CloudMiningComponent);

var _a, _b, _c;
//# sourceMappingURL=cloud-mining.component.js.map

/***/ }),

/***/ "./angular/app/cmc/cmc.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./angular/app/cmc/cmc.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\t<h1 style=\"font-weight: bold\"><img src=\"http://pngimg.com/uploads/bitcoin/bitcoin_PNG48.png\" height=\"60\">Bitcoin</h1>\n\t<!--   -->\n<!-- \t<div class=\"rub\">\n\t<div class=\"row\">\n\t\t<div class=\"col-lg-12\">\n\t\t\t<h2>{{dataRub.price}}</h2><pre>{{dataRub.lastupdate}}</pre>\n\t\t</div>\t\n\t</div>\n\t<table class=\"table\">\n\t\t<thead><tr><th>Капитализация</th><th>Об. 24ч</th><th>Откр. 24ч</th><th>Low/High 24ч</th><th>Последняя сделка</th></tr></thead>\n\t\t<tr>\n\t\t\t<td>\n\t\t\t\t{{dataRub.mktcap}}\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t\t{{dataRub.vol24hours}}\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t\t{{dataRub.open24hours}}\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t\t{{dataRub.low24hours}} / {{dataRub.high24hours}}\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t\t{{dataRub.lasttrade}}\n\t\t\t</td>\n\t\t</tr>\n\t</table>\n\n</div> -->\n\n\t<div class=\"usd\">\n\t<div class=\"row\">\n\t\t<div class=\"col-lg-12\">\n\t\t\t<h2>{{dataUsd?.price_usd}}</h2>\n\t\t</div>\t\n\t</div>\n\t<table class=\"table\">\n\t\t<thead><tr><th>Капитализация</th><th>Изменение за 7 дней и 24 за часа</th><th>Объем торгов за 24 часа</th><!-- <th>Откр. 24ч</th> --><!-- <th>Low/High 24ч</th> --><!-- <th>Последняя сделка</th> --></tr></thead>\n\t\t<tr>\n\t\t\t<td>\n\t\t\t\t${{dataUsd?.market_cap_usd}} \n\t\t\t</td>\n\t\t\t<td>\n\t\t\t\t{{dataUsd?.percent_change_7d}}% {{dataUsd?.percent_change_24h}}% \n\t\t\t</td>\n\t\t\t<td>${{dataUsd?.h24_volume_usd}}</td>\n\t\t\t<!-- <td>\n\t\t\t\t{{dataUsd.open24hours}}\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t\t{{dataUsd.low24hours}} / {{dataUsd.high24hours}}\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t\t{{dataUsd.lasttrade}}\n\t\t\t</td> -->\n\t\t</tr>\n\t</table>\n\t<table class=\"table\">\n\t\t<h3>Markets</h3>\n\t\t<tr *ngFor=\"let item of dataMarket\">\n\t\t\t<td>\n\t\t\t\t{{item.name}}\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t\t${{item.price_usd}}\n\t\t\t</td>\n\n\t\t</tr>\n\n\t</table>\n\n</div>\n\n\t<!-- <div class=\"eur\">\n\t<div class=\"row\">\n\t\t<div class=\"col-lg-12\">\n\t\t\t<h2>{{dataEur.price}}</h2><pre>{{dataEur.lastupdate}}</pre>\n\t\t</div>\t\n\t</div>\n\t<table class=\"table\">\n\t\t<thead><tr><th>Капитализация</th><th>Об. 24ч</th><th>Откр. 24ч</th><th>Low/High 24ч</th><th>Последняя сделка</th></tr></thead>\n\t\t<tr>\n\t\t\t<td>\n\t\t\t\t{{dataEur.mktcap}}\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t\t{{dataEur.vol24hours}}\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t\t{{dataEur.open24hours}}\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t\t{{dataEur.low24hours}} / {{dataEur.high24hours}}\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t\t{{dataEur.lasttrade}}\n\t\t\t</td>\n\t\t</tr>\n\t</table>\n\n</div>\n</div> -->\n<p>\n  \n</p>\n"

/***/ }),

/***/ "./angular/app/cmc/cmc.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export DataUsd */
/* unused harmony export DataMarket */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CmcComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__ = __webpack_require__("./node_modules/rxjs/_esm5/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/@angular/common/http.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DataUsd = (function () {
    function DataUsd() {
    }
    return DataUsd;
}());

var DataMarket = (function () {
    function DataMarket() {
    }
    return DataMarket;
}());

// var h: string;
var CmcComponent = (function () {
    function CmcComponent(http) {
        var _this = this;
        this.http = http;
        this.dataMarket = [];
        var item;
        var info = http.get("https://api.coinmarketcap.com/v1/ticker/bitcoin/");
        var market = http.get("https://api.coinmarketcap.com/v1/ticker/?limit=100");
        market.subscribe(function (response) {
            console.log('asd');
            console.log(response);
            for (var _i = 0, response_1 = response; _i < response_1.length; _i++) {
                var item_1 = response_1[_i];
                // console.log(item);
                _this.dataMarket.push({
                    id: item_1.id,
                    name: item_1.name,
                    price_usd: item_1.price_usd
                });
            }
            console.log(_this.dataMarket);
        });
        info.subscribe(function (response) {
            // console.log(response[0]);
            // console.log(h);
            _this.dataUsd = {
                id: response[0].id,
                name: response[0].name,
                symbol: response[0].symbol,
                rank: response[0].rank,
                price_usd: response[0].price_usd,
                price_btc: response[0].price_btc,
                h24_volume_usd: response[0]['24h_volume_usd'],
                market_cap_usd: response[0].market_cap_usd,
                available_supply: response[0].available_supply,
                total_supply: response[0].total_supply,
                max_supply: response[0].max_supply,
                percent_change_1h: response[0].percent_change_1h,
                percent_change_24h: response[0].percent_change_24h,
                percent_change_7d: response[0].percent_change_7d,
                last_updated: response[0].last_updated
            };
            console.log(_this.dataUsd);
        });
        __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__["a" /* Observable */].interval(2000).subscribe(function (wait) {
            info.subscribe(function (response) {
                // console.log(response[0].id);
                _this.dataUsd = {
                    id: response[0].id,
                    name: response[0].name,
                    symbol: response[0].symbol,
                    rank: response[0].rank,
                    price_usd: response[0].price_usd,
                    price_btc: response[0].price_btc,
                    h24_volume_usd: response[0]['24h_volume_usd'],
                    market_cap_usd: response[0].market_cap_usd,
                    available_supply: response[0].available_supply,
                    total_supply: response[0].total_supply,
                    max_supply: response[0].max_supply,
                    percent_change_1h: response[0].percent_change_1h,
                    percent_change_24h: response[0].percent_change_24h,
                    percent_change_7d: response[0].percent_change_7d,
                    last_updated: response[0].last_updated
                };
            });
        });
    }
    CmcComponent.prototype.ngOnInit = function () {
    };
    return CmcComponent;
}());
CmcComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-cmc',
        template: __webpack_require__("./angular/app/cmc/cmc.component.html"),
        styles: [__webpack_require__("./angular/app/cmc/cmc.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */]) === "function" && _a || Object])
], CmcComponent);

var _a;
//# sourceMappingURL=cmc.component.js.map

/***/ }),

/***/ "./angular/app/comments.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CommentsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/@angular/common/http.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CommentsService = (function () {
    function CommentsService(http) {
        this.http = http;
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]({ 'Content-type': 'Application/json ' });
    }
    CommentsService.prototype.addVote = function (comment_id, positive) {
        return this.http.post('angular/vote', {
            'comment_id': comment_id,
            'positive': positive
        }, { headers: this.headers });
    };
    return CommentsService;
}());
CommentsService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]) === "function" && _a || Object])
], CommentsService);

var _a;
//# sourceMappingURL=comments.service.js.map

/***/ }),

/***/ "./angular/app/crypto-all/crypto-all.component.html":
/***/ (function(module, exports) {

module.exports = "\t<!--<section class=\"crypto-active\">-->\n\t\t<!--<div class=\"wrapper\">-->\n\t\t\t<!--<div class=\"select-block\">-->\n\t\t\t\t<!--<h1 class=\"table-title-big\">Криптовалюты<span>195</span><a href=\"balant-mining-filter.html\"><img src=\"img/mining-icon.png\" alt=\"\"></a></h1>-->\n\t\t\t\t<!--<div class=\"filters\">-->\n\t\t\t\t\t<!--<form>-->\n\t\t\t\t\t\t<!--<div class=\"select-wrap\">-->\n\t\t\t\t\t\t\t<!--<select>-->\n\t\t\t\t\t\t\t\t<!--<option value=\"all\">Валюта: Любая</option>-->\n\t\t\t\t\t\t\t\t<!--<option value=\"usd\">Валюта: USD</option>-->\n\t\t\t\t\t\t\t\t<!--<option value=\"eur\">Валюта: EUR</option>-->\n\t\t\t\t\t\t\t<!--</select>-->\n\t\t\t\t\t\t<!--</div>-->\n\t\t\t\t\t\t<!--<div class=\"select-wrapper1\" id=\"select-algo\">-->\n              <!--<div class=\"select\">-->\n               <!--<span class=\"text\"><span style=\"padding-top: 12px;\">{{algorithm !='' ? algorithm : 'Алгоритм: Все'}}</span></span>-->\n               <!--<a href=\"#\"><img src=\"/img/select-drop-icon.png\" alt=\"\"></a>-->\n             <!--</div>-->\n             <!--<ul class=\"select-items\">-->\n               <!--<li (click)=\"algorithm=''\"> <a >Алгоритм: Все</a></li>-->\n               <!--<li *ngFor=\"let data of dataUsd\" (click)=\"algorithm=data?.algo\"><a >Алгоритм: {{data?.algo}}</a></li>-->\n               <!--&lt;!&ndash; <li (click)=\"setOrder('percentage')\"><a >Фильтрация: По сумме собранных средств</a></li> &ndash;&gt;-->\n             <!--</ul>-->\n\t\t\t\t\t    <!--</div>-->\n\t\t\t\t\t\t<!--<div class=\"select-wrapper1\" id=\"select-age\">-->\n              <!--<div class=\"select\">-->\n               <!--<span class=\"text\"><span style=\"padding-top: 12px;\">{{age !='' ? age : 'Возраст: Все'}}</span></span>-->\n               <!--<a href=\"#\"><img src=\"/img/select-drop-icon.png\" alt=\"\"></a>-->\n             <!--</div>-->\n             <!--<ul class=\"select-items\">-->\n               <!--<li (click)=\"age=''\"> <a >Возраст: Все</a></li>-->\n               <!--<li *ngFor=\"let data of dataUsd\" (click)=\"age=data?.year\"><a >Возраст: {{data?.year}}</a></li>-->\n               <!--&lt;!&ndash; <li (click)=\"setOrder('percentage')\"><a >Фильтрация: По сумме собранных средств</a></li> &ndash;&gt;-->\n             <!--</ul>-->\n           <!--</div>-->\n           <!--<div class=\"select-wrap select-big\">-->\n             <!--<select>-->\n              <!--<option value=\"all\">Рейтинг: Лидер роста</option>-->\n              <!--<option value=\"all\">Рейтинг: Лидер роста</option>-->\n              <!--<option value=\"all\">Рейтинг: Лидер роста</option>-->\n            <!--</select>-->\n          <!--</div>-->\n          <!--<div class=\"crypto-select-wrap\">-->\n          <!--<input type=\"text\" placeholder=\"Поиск по названию монеты...\" [(ngModel)]=\"filteredName\" name=\"filteredName\" value=\"\">-->\n          <!--</div>-->\n        <!--</form>-->\n      <!--</div>-->\n    <!--</div>-->\n    <section class=\"crypto-active\">\n        <div class=\"wrapper\">\n            <div class=\"select-block\">\n                <h1 class=\"table-title-big\">Криптовалюты<span>195</span><a href=\"balant-mining-filter.html\"><img src=\"img/mining-icon.png\" alt=\"\"></a></h1>\n                <div class=\"crypto-select-wrap\">\n                    <div class=\"select-wrap select-wrap-ico\">\n                        <select>\n                            <option value=\"all\">Пара: Все</option>\n                            <option value=\"usd\">Пара: Все</option>\n                            <option value=\"eur\">Пара: Все</option>\n                        </select>\n                    </div>\n                    <div class=\"select-wrap select-wrap-ico\">\n                        <select>\n                            <option value=\"all\">Алгоритм: Все</option>\n                            <option value=\"usd\">Алгоритм: Все</option>\n                            <option value=\"eur\">Алгоритм: Все</option>\n                        </select>\n                    </div>\n                    <div class=\"select-wrap select-wrap-ico\">\n                        <select>\n                            <option value=\"all\">Возраст: Любой</option>\n                            <option value=\"usd\">Возраст: Любой</option>\n                            <option value=\"eur\">Возраст: Любой</option>\n                        </select>\n                    </div>\n                    <div class=\"select-wrap select-wrap-ico\">\n                        <select>\n                            <option value=\"all\">Рейтинг: Лидер роста</option>\n                            <option value=\"usd\">Рейтинг: Лидер роста</option>\n                            <option value=\"eur\">Рейтинг: Лидер роста</option>\n                        </select>\n                    </div>\n                    <input type=\"text\" placeholder=\"Поиск по названию монеты...\">\n                </div>\n            </div>\n    <div class=\"table-wrap\" style=\"margin-bottom: 20px;\">\n      <table class=\"table crypto-table\">\n       <thead>\n        <tr>\n         <th width=\"4.4%\">\n          <span>#</span>\n          <img src=\"img/arr-top-table.png\" alt=\"\">\n        </th>\n        <th [class.active]=\"order === 'sym'\"\n        (click)=\"setOrder('sym')\"\n        width=\"12.9%\">\n        <span>Название</span>\n        <img src=\"img/arr-top-table.png\" alt=\"\">\n      </th>\n      <th [class.active]=\"order === 'now'\"\n      (click)=\"setOrder('now')\"\n      width=\"15%\">\n      <span>Стоимость</span>\n\n      <img src=\"img/arr-top-table.png\" alt=\"\">\n    </th>\n    <th\n\n    width=\"15%\">\n    <span>Капитализация</span>\n    <img src=\"img/arr-top-table.png\" alt=\"\">\n  </th>\n<th [class.active]=\"order === 'value'\"\n(click)=\"setOrder('value')\"\n\nwidth=\"12.4%\">\n<span>Объем BTC (за 24 ч.)</span>\n<img src=\"img/arr-top-table.png\" alt=\"\">\n</th>\n<th \n[class.active]=\"order === 'algo'\"\n(click)=\"setOrder('algo')\"\nwidth=\"6.3%\">\n<span>Алгоритм</span>\n<img src=\"img/arr-top-table.png\" alt=\"\">\n</th>\n<th [class.active]=\"order === 'year'\"\n(click)=\"setOrder('year')\"\nwidth=\"4.7%\">\n<span>Год</span>\n<img src=\"img/arr-top-table.png\" alt=\"\">\n</th>\n<th \nwidth=\"11%\">\n<span>Изм. за 24ч</span>\n<img src=\"img/arr-top-table.png\" alt=\"\">\n</th>\n<th \nwidth=\"18.3%\">\n<span>Изм. за 7д</span>\n<img src=\"img/arr-top-table.png\" alt=\"\">\n</th>\n</tr>\n</thead>\n<tbody style=\"position: relative;\" *ngIf=\"load == false\">\n\n  <tr *ngFor=\"let data of dataUsd  | orderBy: order:reverse:'case-insensitive' | filterName:filteredName:'sym' | filterNameActive:age:'year' | filterNameActive:algorithm:'algo'; let i = index\">\n   <td>\n    <span>{{i+1}}</span>\n  </td>\n  <td>\n    <div class=\"img-wrap\" [routerLink]=\"['/crypto', data.sym]\">\n     <!-- <img src=\"img/bitcoin-icon.png\" alt=\"\"> -->\n   </div>\n   <span [routerLink]=\"['/crypto', data.sym]\">{{data.sym}}</span>\n </td>\n <td [ngStyle]=\"{ 'background': 'white', 'animation': animtype[i]+' 2s', '-webkit-animation': animtype[i]+' 2s'  }\">\n  <span class=\"price\">${{data.now | number: '1.2'}}</span>\n  <span *ngIf=\"diff[i] >0 || diff[i] < 0\" [ngClass]=\"isNegative(diff[i])==true ? 'change-red' : 'change'\">(${{diff[i] | number: '1.2'}})</span>\n</td>\n<td>\n  <span class=\"capitalization\">${{data.marketCapUsd| number: '1.0-3'}}</span>\n</td>\n<td>\n  <span class=\"bargaining\">{{data.volume | number: '1.3'}}</span>\n</td>\n<td>\n  <span class=\"algorithm\">{{data?.algo}}</span>\n</td>\n<td>\n  <span class=\"year\">{{data?.year}}</span>\n</td>\n<td>\n  <span [ngClass]=\"isNegativePercent(data.now, data.day)==true ? 'change-red' : 'change-green'\">{{ countPercent(data.now, data.day) | number: '1.2'}}%</span>\n\n</td>\n<td>\n  <div class=\"difference\">\n   <span [ngClass]=\"isNegativePercent(data.now, data.week)==true ? 'change-red' : 'change-green'\">{{ countPercent(data.now, data.week) | number: '1.2'}}%</span>\n   <div class=\"buttons\">\n    <button class=\"right\" [routerLink]=\"['/crypto', data.sym]\">></button>\n    <button class=\"plus\">+</button>\n  </div>\n</div>\n</td>\n</tr>\n<tr class=\"hidden\">\n <td>\n  <span>122</span>\n</td>\n<td>\n  <div class=\"img-wrap\">\n   <img src=\"img/bitcoin-icon.png\" alt=\"\">\n </div>\n <span>Bitcoin (BTC)</span>\n</td>\n<td>\n  <span class=\"price\">$9,200</span>\n\n</td>\n<td>\n  <span class=\"capitalization\">$95,113,177,098</span>\n</td>\n<td>\n  ><span class=\"total\">21 000 000 000</span>\n  <span class=\"received\">890 910</span>\n</td>\n<td>\n  <span class=\"bargaining\">$95,113,177</span>\n</td>\n<td>\n  <span class=\"algorithm\">SHA-256</span>\n</td>\n<td>\n  <span class=\"year\">2009</span>\n</td>\n<td>\n  <span class=\"change-green\">+ 3,5% (+200,09)</span>\n\n</td>\n<td>\n  <div class=\"difference\">\n   <span class=\"change-red\">-2,3% (-201,11)</span>\n   <div class=\"buttons\">\n    <button class=\"right\">></button>\n    <button class=\"plus\">+</button>\n  </div>\n</div>\n</td>\n</tr>\n</tbody>\n</table>\n        <div style=\"width: 50px; height: 50px; margin: 40px auto;\" *ngIf=\"load == true\">\n            <img src=\"/img/load.gif\" *ngIf=\"load == true\" style=\" width: 50px; height: 50px; text-align: center\">\n        </div>\n</div>\n<!-- <a href=\"#\" class=\"show-more\">Показать еще</a> -->\n</div>\n</section>"

/***/ }),

/***/ "./angular/app/crypto-all/crypto-all.component.scss":
/***/ (function(module, exports) {

module.exports = ".select-wrapper1 {\n  width: 144px;\n  position: relative;\n  margin-right: 14px; }\n  .select-wrapper1 .select {\n    border-radius: 18px;\n    background: #fff;\n    height: 40px;\n    padding: 0 18px 0 13px;\n    cursor: pointer;\n    -webkit-box-shadow: 0px 5px 30px 0px rgba(0, 0, 1, 0.1);\n    box-shadow: 0px 5px 30px 0px rgba(0, 0, 1, 0.1); }\n  .select-wrapper1 .select .text {\n      margin: 0;\n      margin-right: 45px;\n      color: #666;\n      font-size: 14px; }\n  .select-wrapper1 .select.open {\n      border-bottom-left-radius: 0;\n      border-bottom-right-radius: 0; }\n  .select-wrapper1 .select.open > a {\n        -webkit-transform: rotate(-180deg);\n                transform: rotate(-180deg); }\n  .select-wrapper1 .select-items {\n    background: #fff;\n    position: absolute;\n    left: 0;\n    top: 40px;\n    width: 100%;\n    border-bottom-left-radius: 18px;\n    border-bottom-right-radius: 18px;\n    display: none; }\n  .select-wrapper1 .select-items li {\n      color: #666;\n      font-size: 14px;\n      padding: 10px 13px;\n      background: #fff;\n      display: block; }\n  .select-wrapper1 .select-items li:hover {\n        background: #dbdbdb; }\n  .select-wrapper1 .select-items.open {\n      display: block; }\n  .open {\n  display: block; }\n"

/***/ }),

/***/ "./angular/app/crypto-all/crypto-all.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Cripto */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CryptoAllComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__ = __webpack_require__("./node_modules/rxjs/_esm5/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__stocks_service__ = __webpack_require__("./angular/app/stocks.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__order_pipe_ngx_order_pipe__ = __webpack_require__("./angular/app/order-pipe/ngx-order.pipe.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var Cripto = (function () {
    function Cripto() {
    }
    return Cripto;
}());

var CryptoAllComponent = (function () {
    /**
     * Example: Use Order pipe in the component
     *
     * @param {OrderPipe} orderPipe
     */
    function CryptoAllComponent(orderPipe, http, router, route, StockService) {
        this.orderPipe = orderPipe;
        this.http = http;
        this.router = router;
        this.route = route;
        this.StockService = StockService;
        this.load = true;
        // admin= new Array;
        this.dataUsd = [];
        this.order = 'now';
        this.algorithm = '';
        this.age = '';
        this.first_time = true;
        this.reverse = true;
        this.animtype = [];
        this.diff = [];
    }
    CryptoAllComponent.prototype.setOrder = function (value) {
        if (this.order === value) {
            this.reverse = !this.reverse;
        }
        this.order = value;
    };
    CryptoAllComponent.prototype.ngOnInit = function () {
        var _this = this;
        var alldata = this.http.get('/allcrypto');
        if (localStorage.getItem('data')) {
            this.dataUsd = JSON.parse(localStorage.getItem('data'));
            this.load = false;
        }
        this.StockService.getCrypto()
            .subscribe(function (response) {
            _this.resp = response;
            _this.data = alldata.subscribe(function (response) {
                var admin = response;
                for (var _i = 0; _i < admin.length; ++_i) {
                    // console.log(this.admin[i].symbol);
                    var index = _i;
                    var symbol = admin[index].symbol;
                    var year = admin[index].year;
                    var algo = admin[index].algo;
                    var desc = 'DESC';
                    if (_this.dataUsd[index]) {
                        _this.dataUsd[index].sym = symbol;
                        _this.dataUsd[index].algo = algo;
                        _this.dataUsd[index].year = year;
                        _this.dataUsd[index].last = _this.resp[symbol + '/USDT']['last'];
                        _this.dataUsd[index].now = _this.resp[symbol + '/USDT']['now'];
                        _this.dataUsd[index].min = _this.resp[symbol + '/USDT']['min'];
                        _this.dataUsd[index].max = _this.resp[symbol + '/USDT']['max'];
                        _this.dataUsd[index].volume = _this.resp[symbol + '/USDT']['volume'];
                        _this.dataUsd[index].day = _this.resp[symbol + "/USDT"]['day'];
                        _this.dataUsd[index].week = _this.resp[symbol + "/USDT"]['week'];
                        _this.dataUsd[index].marketCapUsd = _this.resp[symbol + "/USDT"]['marketCapUsd'];
                    }
                    else {
                        _this.dataUsd[index] = {
                            sym: '',
                            last: 0,
                            now: 0,
                            min: 0,
                            max: 0,
                            volume: 0,
                            year: 0,
                            algo: '',
                            week: 0,
                            day: 0,
                            marketCapUsd: 0
                        };
                    }
                    _this.load = false;
                    localStorage.removeItem('data');
                    localStorage.setItem('data', JSON.stringify(_this.dataUsd));
                }
            });
        });
        this.data = alldata.subscribe(function (response) {
            _this.cryptoData = __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__["a" /* Observable */].interval(1000).concatMap(function () { return _this.StockService.getCrypto(); })
                .map(function (response) { _this.resp = response; }).subscribe(function () {
                var admin = response;
                for (var _i = 0; _i < admin.length; ++_i) {
                    // console.log(this.admin[i].symbol);
                    var index = _i;
                    var symbol = admin[index].symbol;
                    var year = admin[index].year;
                    var algo = admin[index].algo;
                    var desc = 'DESC';
                    _this.animtype[index] = '';
                    _this.diff[index] = 0;
                    if (_this.dataUsd[index].now != _this.resp[symbol + '/USDT']['now']) {
                        _this.first_time = false;
                        _this.diff[index] = _this.resp[symbol + '/USDT']['now'] - _this.dataUsd[index].now;
                        if (_this.dataUsd[index].now > _this.resp[symbol + '/USDT']['now']) {
                            _this.animtype[index] = 'redbg';
                        }
                        else {
                            _this.animtype[index] = 'greenbg';
                        }
                    }
                    _this.dataUsd[index].sym = symbol;
                    _this.dataUsd[index].algo = algo;
                    _this.dataUsd[index].year = year;
                    _this.dataUsd[index].last = _this.resp[symbol + '/USDT']['last'];
                    _this.dataUsd[index].now = _this.resp[symbol + '/USDT']['now'];
                    _this.dataUsd[index].min = _this.resp[symbol + '/USDT']['min'];
                    _this.dataUsd[index].max = _this.resp[symbol + '/USDT']['max'];
                    _this.dataUsd[index].volume = _this.resp[symbol + '/USDT']['volume'];
                    _this.dataUsd[index].day = _this.resp[symbol + "/USDT"]['day'];
                    _this.dataUsd[index].week = _this.resp[symbol + "/USDT"]['week'];
                    _this.dataUsd[index].marketCapUsd = _this.resp[symbol + "/USDT"]['marketCapUsd'];
                    localStorage.removeItem('data');
                    localStorage.setItem('data', JSON.stringify(_this.dataUsd));
                }
            });
        });
    };
    CryptoAllComponent.prototype.isNegative = function (now) {
        if (now >= 0) {
            return false;
        }
        return true;
    };
    CryptoAllComponent.prototype.countPercent = function (now, last) {
        return (now - last) / (now + last) * 100;
    };
    CryptoAllComponent.prototype.isNegativePercent = function (now, last) {
        if (((parseInt(now) - parseInt(last)) / ((parseInt(now) + parseInt(last)) / 2) * 100) >= 0) {
            return false;
        }
        return true;
    };
    CryptoAllComponent.prototype.isNegativeMath = function (now, last) {
        this.object = "{'background': 'white'}";
        if (this.first_time == false) {
            if ((parseInt(now) - parseInt(last)) >= 0) {
                this.object = "{ 'background': 'white', 'animation': 'greenbg 2s', '-webkit-animation': 'greenbg 2s'  }";
            }
            else if (parseInt(now) - parseInt(last) == 0) {
            }
            else {
                this.object = "{ 'background': 'white', 'animation': 'redbg 2s', '-webkit-animation': 'redbg 2s'  }";
            }
        }
        return this.object;
    };
    CryptoAllComponent.prototype.ngOnDestroy = function () {
        // this.data.unsubscribe();
        this.cryptoData.unsubscribe();
    };
    return CryptoAllComponent;
}());
CryptoAllComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-crypto-all',
        template: __webpack_require__("./angular/app/crypto-all/crypto-all.component.html"),
        styles: [__webpack_require__("./angular/app/crypto-all/crypto-all.component.scss")],
        providers: [__WEBPACK_IMPORTED_MODULE_4__stocks_service__["a" /* StocksService */]],
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_5__order_pipe_ngx_order_pipe__["a" /* OrderPipe */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__order_pipe_ngx_order_pipe__["a" /* OrderPipe */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["a" /* HttpClient */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__stocks_service__["a" /* StocksService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__stocks_service__["a" /* StocksService */]) === "function" && _e || Object])
], CryptoAllComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=crypto-all.component.js.map

/***/ }),

/***/ "./angular/app/crypto-root/crypto-root.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "./angular/app/crypto-root/crypto-root.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./angular/app/crypto-root/crypto-root.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CryptoRootComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/@angular/common/http.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// import { interval } from 'rxjs/Observable/interval';


var CryptoRootComponent = (function () {
    function CryptoRootComponent(http, router, route) {
        this.http = http;
        this.router = router;
        this.route = route;
    }
    CryptoRootComponent.prototype.ngOnInit = function () {
    };
    return CryptoRootComponent;
}());
CryptoRootComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-crypto-root',
        template: __webpack_require__("./angular/app/crypto-root/crypto-root.component.html"),
        styles: [__webpack_require__("./angular/app/crypto-root/crypto-root.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _c || Object])
], CryptoRootComponent);

var _a, _b, _c;
//# sourceMappingURL=crypto-root.component.js.map

/***/ }),

/***/ "./angular/app/crypto/chart/chart.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- TradingView Widget BEGIN -->\n\t\t\t\t\t\t\t\t\t<div class=\"tradingview-widget-container\">\n\t\t\t\t\t\t\t\t\t  <div id=\"tradingview_4e1cc\"></div>\n\t\t\t\t\t\t\t\t\t  <div class=\"tradingview-widget-copyright\"><a href=\"https://ru.tradingview.com/symbols/BITSTAMP-BTCUSD/\" rel=\"noopener\" target=\"_blank\"><span class=\"blue-text\">График</span> <span class=\"blue-text\">BTCUSD</span> предоставлен TradingView</a></div>\n\t\t\t\t\t\t\t\t\t  \n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<!-- TradingView Widget END -->"

/***/ }),

/***/ "./angular/app/crypto/chart/chart.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./angular/app/crypto/chart/chart.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChartComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ChartComponent = (function () {
    function ChartComponent() {
    }
    ChartComponent.prototype.ngOnInit = function () {
        setTimeout(function () {
            new TradingView.widget({
                "width": 881,
                "height": 393,
                "symbol": "BITSTAMP:BTCUSD",
                "interval": "D",
                "timezone": "Etc/UTC",
                "theme": "Light",
                "style": "1",
                "locale": "ru",
                "toolbar_bg": "#f1f3f6",
                "enable_publishing": false,
                "allow_symbol_change": true,
                "container_id": "tradingview_4e1cc"
            });
        }, 200);
    };
    return ChartComponent;
}());
ChartComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-chart',
        template: __webpack_require__("./angular/app/crypto/chart/chart.component.html"),
        styles: [__webpack_require__("./angular/app/crypto/chart/chart.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], ChartComponent);

//# sourceMappingURL=chart.component.js.map

/***/ }),

/***/ "./angular/app/crypto/crypto.component.css":
/***/ (function(module, exports) {

module.exports = ".comment-block {\n  margin-top: 30px;\n}\n.comment-block .comment-top {\n  border-bottom: 1px solid #e3e3e3;\n  background: #fff;\n  padding: 20px 19px 19px 20px;\n}\n.comment-block .comment-top h3 {\n  font-size: 18px;\n  font-weight: bold;\n  color: #000;\n  margin-bottom: 10px;\n}\n.comment-block .comment-top p {\n  font-size: 14px;\n  font-weight: bold;\n  color: #fa5252;\n}\n.comment-block .comment-top p a {\n  color: #fa5252;\n  text-decoration: underline;\n}\n.comment-block .comment-items {\n  padding: 0 22px 0 18px;\n}\n.comment-block .comment-items li {\n  padding: 20px 0;\n  border-bottom: 1px solid #a4a4a4;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n  -ms-flex-pack: justify;\n  justify-content: space-between;\n  width: 100%;\n}\n.comment-block .comment-items li:last-child {\n  border: none;\n}\n.comment-block .comment-items li.hidden {\n  display: none;\n}\n.comment-block .comment-items li .left .info {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n  -ms-flex-align: center;\n  align-items: center;\n  margin-bottom: 8px;\n}\n.comment-block .comment-items li .left .info .img-wrap {\n  width: 35px;\n  height: 35px;\n  margin-right: 12px;\n}\n.comment-block .comment-items li .left .info .img-wrap img {\n  width: 100%;\n  border-radius: 50%;\n}\n.comment-block .comment-items li .left .info .text-wrap p {\n  font-size: 11px;\n  font-weight: bold;\n  color: #000;\n}\n.comment-block .comment-items li .left .info .text-wrap span {\n  display: inline-block;\n  font-weight: bold;\n  font-size: 11px;\n  color: #777;\n}\n.comment-block .comment-items li .left .comment-text {\n  color: #000;\n  font-size: 16px;\n}\n.comment-block .comment-items li .right {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n  -ms-flex-align: center;\n  align-items: center;\n  -webkit-box-pack: justify;\n  -ms-flex-pack: justify;\n  justify-content: space-between;\n  min-width: 78px;\n}\n.comment-block .comment-items li .right .btn-block {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n  -ms-flex-align: center;\n  align-items: center;\n}\n.comment-block .comment-items li .right .btn-block .number-green {\n  font-size: 24px;\n  color: #8cc863;\n}\n.comment-block .comment-items li .right .btn-block .number-red {\n  font-size: 24px;\n  color: #fa5252;\n}\n.comment-block .comment-items li .right .btn-block .buttons {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n  -ms-flex-direction: column;\n  flex-direction: column;\n  margin-left: 9px;\n}\n.comment-block .comment-items li .right .btn-block .buttons a {\n  width: 20px;\n  height: 20px;\n  border-radius: 50%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n  -ms-flex-align: center;\n  align-items: center;\n  -webkit-box-pack: center;\n  -ms-flex-pack: center;\n  justify-content: center;\n}\n.comment-block .comment-items li .right .btn-block .buttons .plus {\n  margin-bottom: 4px;\n  color: #fff;\n  font-size: 18px;\n  background: #8cc863;\n}\n.comment-block .comment-items li .right .btn-block .buttons .plus:hover {\n  background: #c0deac;\n}\n.comment-block .comment-items li .right .btn-block .buttons .minus {\n  color: #fff;\n  font-size: 18px;\n  background: #fa5252;\n}\n.comment-block .comment-items li .right .btn-block .buttons .minus:hover {\n  background: #f8a3a3;\n}\n.comment-block .show-comments {\n  width: 100%;\n  height: 42px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n  -ms-flex-align: center;\n  align-items: center;\n  -webkit-box-pack: center;\n  -ms-flex-pack: center;\n  justify-content: center;\n  font-weight: bold;\n  font-size: 14px;\n  margin-top: -1px;\n  color: #383c46;\n  background: #c1c1c1;\n}\n.comment-block .show-comments:hover {\n  background: #383c46;\n  color: #fff;\n}\n.comment-block .total-comments {\n  font-size: 18px;\n  font-weight: bold;\n  color: #000;\n  margin-left: 18px;\n  margin-top: 24px;\n}\n.comment-wrap {\n  margin-top: -15px;\n  margin-bottom: 25px;\n}\n.comment-items li:last-child {\n  border: none;\n}\n.comment-top {\n  padding: 18px 25px 21px 15px;\n}\n.comment-top form textarea {\n  height: 54px;\n  border: 1px solid #e4e4e4;\n  width: 100%;\n  resize: none;\n  font-size: 14px;\n  color: #949494;\n  padding: 10px;\n  margin-bottom: 10px;\n}\n.comment-top form textarea::-webkit-input-placeholder {\n  color: #949494;\n}\n.comment-top form textarea::-moz-placeholder {\n  color: #949494;\n}\n.comment-top form textarea:-ms-input-placeholder {\n  color: #949494;\n}\n.comment-top form textarea:-moz-placeholder {\n  color: #949494;\n}\n.comment-top form textarea:focus {\n  outline: none;\n}\n.comment-top form button {\n  height: 34px;\n  background: #f58c1b;\n  color: #fff;\n  font-size: 14px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n  -ms-flex-align: center;\n  align-items: center;\n  padding: 0px 17px;\n  border: none;\n  font-weight: bold;\n}\n.comment-block .comment-items {\n  padding: 0 22px 0 18px;\n}\n.comment-block .comment-items li {\n  padding: 20px 0;\n  border-bottom: 1px solid #a4a4a4;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n  -ms-flex-pack: justify;\n  justify-content: space-between;\n  width: 100%;\n}\n.comment-block .comment-items li:last-child {\n  border: none;\n}\n.comment-block .comment-items li.hidden {\n  display: none;\n}\n.comment-block .comment-items li .left .info {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n  -ms-flex-align: center;\n  align-items: center;\n  margin-bottom: 8px;\n}\n.comment-block .comment-items li .left .info .img-wrap {\n  width: 35px;\n  height: 35px;\n  margin-right: 12px;\n}\n.comment-block .comment-items li .left .info .img-wrap img {\n  width: 100%;\n  border-radius: 50%;\n}\n.comment-block .comment-items li .left .info .text-wrap p {\n  font-size: 11px;\n  font-weight: bold;\n  color: #000;\n}\n.comment-block .comment-items li .left .info .text-wrap span {\n  display: inline-block;\n  font-weight: bold;\n  font-size: 11px;\n  color: #777;\n}\n.comment-block .comment-items li .left .comment-text {\n  color: #000;\n  font-size: 16px;\n}\n.comment-block .comment-items li .right {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n  -ms-flex-align: center;\n  align-items: center;\n  -webkit-box-pack: justify;\n  -ms-flex-pack: justify;\n  justify-content: space-between;\n  min-width: 78px;\n}\n.comment-block .comment-items li .right .btn-block {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n  -ms-flex-align: center;\n  align-items: center;\n}\n.comment-block .comment-items li .right .btn-block .number-green {\n  font-size: 24px;\n  color: #8cc863;\n}\n.comment-block .comment-items li .right .btn-block .number-red {\n  font-size: 24px;\n  color: #fa5252;\n}\n.comment-block .comment-items li .right .btn-block .buttons {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n  -ms-flex-direction: column;\n  flex-direction: column;\n  margin-left: 9px;\n}\n.comment-block .comment-items li .right .btn-block .buttons a {\n  width: 20px;\n  height: 20px;\n  border-radius: 50%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n  -ms-flex-align: center;\n  align-items: center;\n  -webkit-box-pack: center;\n  -ms-flex-pack: center;\n  justify-content: center;\n}\n.comment-block .comment-items li .right .btn-block .buttons .plus {\n  margin-bottom: 4px;\n  color: #fff;\n  font-size: 18px;\n  background: #8cc863;\n}\n.comment-block .comment-items li .right .btn-block .buttons .plus:hover {\n  background: #c0deac;\n}\n.comment-block .comment-items li .right .btn-block .buttons .minus {\n  color: #fff;\n  font-size: 18px;\n  background: #fa5252;\n}\n.comment-block .comment-items li .right .btn-block .buttons .minus:hover {\n  background: #f8a3a3;\n}\n.comment-block .show-comments {\n  width: 100%;\n  height: 42px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n  -ms-flex-align: center;\n  align-items: center;\n  -webkit-box-pack: center;\n  -ms-flex-pack: center;\n  justify-content: center;\n  font-weight: bold;\n  font-size: 14px;\n  margin-top: -1px;\n  color: #383c46;\n  background: #c1c1c1;\n}\n.comment-block .show-comments:hover {\n  background: #383c46;\n  color: #fff;\n}\n.comment-block .total-comments {\n  font-size: 18px;\n  font-weight: bold;\n  color: #000;\n  margin-left: 18px;\n  margin-top: 24px;\n}"

/***/ }),

/***/ "./angular/app/crypto/crypto.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"single-top-block\">\n  <div class=\"wrapper\" style=\"max-width: 1150px;\">\n    <a routerLink=\"/cryptocurrency/all\" class=\"return\"><span>&#60;</span>Вернуться к списку криптовалют</a>\n    <div class=\"currency\">\n      <h2>{{data?.symbol}}/USD - {{data?.name}} Доллар США</h2>\n      <ul>\n          <li class=\"active\"><a href=\"#\">USD</a></li><!-- \n          <li><a href=\"#\">EUR</a></li>\n          <li><a href=\"#\">RUR</a></li> -->\n          <li>\n            <div id=\"select-currency\" class=\"select-wrap select-gray\">\n          <!--     <select>\n                <option value=\"all\">Еще</option>\n                <option value=\"gbp\">GBP</option>\n                <option value=\"gel\">GEL</option>\n              </select> -->\n            </div>\n          </li>\n          <li class=\"follow\"><a href=\"#login-popup\" *ngIf=\"!checkAuth()\" class=\"popup-link follow\" data-effect=\"mfp-zoom-in\"><span class=\"plus\">+</span><span class=\"text\">Следить</span></a>\n            <a href=\"#follow-popup\" *ngIf=\"!checkInPortfolio(data?.id) && checkAuth()\" (click)=\"selectedItem = data\" class=\"popup-link follow\" data-effect=\"mfp-zoom-in\"><span class=\"plus\">+</span><span class=\"text\">Следить</span></a>\n\n            <a class=\"follow\"  *ngIf=\"checkInPortfolio(data?.id) && checkAuth()\"  (click)=\"removePortfolio(data?.id)\"><span class=\"minus\"><img src=\"img/minus.png\" alt=\"\"></span><span class=\"text text-red\">Следить</span></a>\n          </li>\n        </ul>\n      </div>\n      <div class=\"price-block\">\n        <div class=\"last-update\">\n          <div class=\"prices-wrap\">\n            <span class=\"price\" [ngStyle]=\"{ 'animation': animtype+' 2s', '-webkit-animation': animtype+' 2s'  }\">${{dataUsd?.now | number:'1.0-1'}}</span>\n            <span [ngClass]=\"diff > 0 ? 'green-price' : 'red-price'\">{{diff | number:'1.0-5'}}</span>\n            <span [ngClass]=\"diff > 0 ? 'bg-price-green' : 'bg-price'\">{{countPercent(dataUsd.now, prev) | number:'1.2-3'}}%</span>\n          </div>\n          <p>Последнее обновление {{time_value*1000 | date:'HH:mm:ss'}}</p>\n        </div>\n        <ul>\n          <li><span>Объем за 24ч.</span><span class=\"black\">{{volume | number:'1.0-1'}}</span></li>\n          <li><span>Спрос / Предложение</span><span class=\"black\">{{bid_ask.ask | number:'1.0-2'}} / {{bid_ask.bid | number:'1.0-2'}}</span></li>\n          <li><span>Дневной диапазон</span><span><span class=\"red\">{{min_value | number:'1.0-1'}}</span> <span class=\"black\">/</span> <span class=\"green\">{{max_value | number:'1.0-1'}}</span></span>\n          </li>\n          <li><span>Капитализация</span><span class=\"black\">${{dataUsd.marketCapUsd| number:'1.0-2'}}</span></li>\n          <li><span>Алгоритм</span><span class=\"black\">{{data?.algo}}</span></li>\n          <!-- <li><span>Всего монет / Получено</span><span class=\"black\">21 000 000 000 / 89 000 891 (52%)</span></li> -->\n        </ul>\n      </div>\n    </div>\n  </div>\n\n<section class=\"crypto-single-wrap\">\n    <div class=\"wrapper\">\n      <div class=\"crypto-single-content\">\n        <ul class=\"crypto-tab-menu\">\n          <li class=\"active\"><a href=\"#\">Обзор</a></li>\n          <li><a href=\"javascript:;\">График</a></li>\n          <li><a href=\"javascript:;\">Новости</a></li>\n          <li><a href=\"javascript:;\">Комментарии ({{commentcount}})</a></li>\n          <li><a href=\"javascript:;\">Аналитика</a></li>\n          <li class=\"desc\"><a href=\"javascript:;\" >Описание</a></li>\n        </ul>\n        <div class=\"tab-content-wrap\">\n          <div class=\"tab-content active\">\n            <div class=\"overview-content\">\n              <ul class=\"overview-list\">\n                 <li><span>Объем за 24ч.</span><span class=\"black\">{{volume | number:'1.0-1'}}</span></li>\n          <li><span>Спрос / Предложение</span><span class=\"black\">{{bid_ask.ask | number:'1.0-2'}} / {{bid_ask.bid | number:'1.0-2'}}</span></li>\n          <li><span>Дневной диапазон</span><span><span class=\"red\">{{min_value | number:'1.0-1'}}</span> <span class=\"black\">/</span> <span class=\"green\">{{max_value | number:'1.0-1'}}</span></span>\n          </li>\n          <li><span>Капитализация</span><span class=\"black\">${{dataUsd.marketCapUsd| number:'1.0-2'}}</span></li>\n          <li><span>Алгоритм</span><span class=\"black\">{{data?.algo}}</span></li>\n              </ul>\n              <div class=\"overview-block\">\n                <h3>{{data?.symbol}}/USD График криптовалюты</h3>\n                <app-chart></app-chart>\n              </div>\n              <div class=\"overview-table-wrap\">\n                <div class=\"overview-title-block\">\n                  <h2>Котировки {{data?.symbol}}/USD на различных биржах</h2>\n                </div>\n                <table>\n                  <thead>\n                    <tr>\n                      <th width=\"17%\"><span>Биржа</span></th>\n                      <th width=\"10%\"><span>Стоимость</span></th>\n                      <th width=\"10%\"><span>Спрос</span></th>\n                      <th width=\"13%\"><span>Предложение</span></th>\n                      <th width=\"13%\"><span>Объем за 24ч. (BTC)</span></th>\n                      <th width=\"13%\"><span>Объем за 24ч. </span></th>\n                      <th width=\"11%\"><span>Изм. за 24 ч.</span></th>\n                      <th width=\"14%\"><span>Обновлено</span></th>\n                    </tr>\n                  </thead>\n                  <tbody *ngIf=\"load==false\" style=\"position: relative; min-height: 65px;\">\n\n                    <tr *ngFor=\"let stock of stocks; let i = index\">\n                      <td>\n                        <a href=\"#\">\n                          <!-- <span class=\"img-wrap\"><img src=\"img/bitfinex-icon.png\" alt=\"\"></span> -->\n                          <span class=\"text\">{{stock.name}}</span>\n                        </a>\n                      </td>\n                      <td>\n                        <span class=\"cost\" \n                        [ngStyle]=\"{ 'animation': animstock[i]+' 2s', '-webkit-animation': animstock[i]+' 2s'}\">${{stock.value | number:'1.0-1'}}</span>\n                      </td>\n                      <td>\n                        <span class=\"demand\" *ngIf=\"stock.ask\">${{stock.ask | number:'1.0-1'}}</span>\n                        <span class=\"demand\" *ngIf=\"!stock.ask\">-</span>\n                      </td>\n                      <td>\n                        <span class=\"sentence\" *ngIf=\"stock.bid\">${{stock.bid | number:'1.0-1'}}</span>\n                        <span class=\"sentence\" *ngIf=\"!stock.bid\">-</span>\n                      </td>\n                      <td>\n                        <span class=\"amount\">{{stock.volume | number:'1.0-2'}}</span>\n                      </td>\n                      <td>\n                        <span class=\"amount\">${{stock.volumeCommon | number:'1.0-2'}}</span>\n                      </td>\n                      <td>\n                        <span class=\"growth-green\" [ngStyle]=\"{ 'animation': animstock[i]+' 2s', '-webkit-animation': animstock[i]+' 2s', 'color': 'black'}\">{{stock.percent | number:'1.0-3'}}%</span>\n                      </td>\n                      <td>\n                        <span class=\"updated\">{{stock.time * 1000  | date:'HH:mm:ss'}}</span>\n                      </td>\n                    </tr>\n                    \n                  </tbody>\n                </table>\n                <div style=\"width: 50px; height: 50px; margin: 40px auto;\" *ngIf=\"load == true\">\n                  <img src=\"/img/load.gif\" *ngIf=\"load == true\" style=\" width: 50px; height: 50px; text-align: center\">\n                </div>\n                <!-- <a href=\"#\" class=\"show-exchange\">Показать все биржи (105)</a> -->\n              </div>\n              <div class=\"desc-wrap\">\n                <div class=\"description\">\n                  <h5>Описание {{data?.symbol}} ({{data?.name}})</h5>\n                  <div [innerHTML]='data?.desc'></div>\n                </div>\n                <a href=\"#\" class=\"banner-black banner-black-top\"><img src=\"img/banner-black-small.jpg\" alt=\"\"></a>\n              </div>\n            </div>\n            <div class=\"comment-block\">\n              <div class=\"comment-top\"  *ngIf=\"!user.id\">\n                <h3>Комментарии ({{commentcount}})</h3>\n                <p>Для того чтобы добавить свой комментарий - Вам необходимо <a href=\"#login-popup\" class=\"popup-link\">авторизоваться</a> или <a href=\"#check-popup\" class=\"popup-link\">пройти регистрацию.</a></p>\n              </div>\n              <div class=\"comment-top\"  *ngIf=\"user.id\">\n                <h3>Добавить новый комментарий</h3>\n                <form (ngSubmit)=\"submitComment(f,data.id, 'App\\\\CryptoStat')\" #f=\"ngForm\">\n                  <input type=\"hidden\" ngModel name=\"post_id\" value=\"{{dataUsd?.id}}\">\n                  <input type=\"hidden\" ngModel name=\"type\" value=\"App\\CryptoStat\">\n                  <textarea ngModel name=\"body\" placeholder=\"Начните вводить комментарий...\"></textarea>\n                  <button type=\"submit\">Добавить</button>\n                </form>\n              </div>\n              <h3 class=\"total-comments\"  *ngIf=\"user.id\">Всего комментариев ({{commentcount}})</h3>\n              <ul class=\"comment-items\">\n                <!--  -->\n                <li *ngFor=\"let item of comments\">\n                  <div class=\"left\">\n                    <div class=\"info\">\n                      <div class=\"img-wrap\">\n                        <img src=\"img/comment-img2.jpg\" style=\"max-width: 35px; height: auto;\" alt=\"\">\n                      </div>\n                      <div class=\"text-wrap\">\n                        <p>{{item.email}}</p>\n                        <span>Добавлен </span>\n                      </div>\n                    </div>\n                    <p class=\"comment-text\">{{item.body}}</p>\n                  </div>\n                  <div class=\"right\">\n                    <div class=\"img-wrap\"></div>\n                    <div class=\"btn-block\">\n                      <span class=\"number-green\">0</span>\n                      <div class=\"buttons\">\n                        <a href=\"#\" class=\"plus\">+</a>\n                        <a href=\"#\" class=\"minus\">-</a>\n                      </div>\n                    </div>\n                  </div>\n                </li>\n\n              </ul>\n              <!-- <a href=\"#\" class=\"show-comments\">Показать все комментарии (22)</a> -->\n            </div>\n          </div>\n\n          <div class=\"tab-content\">\n            <div class=\"overview-block\">\n              <h3>Потоковый график {{data?.symbol}}/USD</h3>\n              <app-chart></app-chart>\n            </div>\n            <div class=\"overview-block overview-block-2\">\n              <h3>Интерактивный график {{data?.symbol}}/USD</h3>\n              <app-chart></app-chart>\n            </div>\n          </div>\n\n          <div class=\"tab-content news-wrapper\">\n            <div class=\"news-body\">\n              <div class=\"news-tab-content active\">\n                <div class=\"main-news\">\n                  <div class=\"news\" *ngFor=\"let item of main_news\">\n                    <div class=\"img\" [ngStyle]=\"{'background-image':'url('+item.photos[0].file+')'}\">\n                      <a href=\"#\" class=\"news-btn\">{{item.category.name}}</a>\n                      <a href=\"/posts/post/{{item.id}}\" class=\"title-link\">{{item.title}}</a>\n                      <div class=\"info\">\n                        <span class=\"date\">{{item.created_at}}</span>\n                        <span class=\"views\"><i class=\"fa fa-eye\" aria-hidden=\"true\"></i>0</span>\n                        <a href=\"/posts/post/{{item.id}}#comment-block\" class=\"comments\"><i class=\"fa fa-comment\" aria-hidden=\"true\"></i>0</a>\n                      </div>\n                    </div>\n                    <div class=\"text\">\n                      <p>{{item.desc | striphtml | excerpt:140}}<a routerLink=\"/posts/post/{{item.id}}\">Подробнее</a></p>\n                    </div>\n                  </div>\n                </div>\n                <div class=\"news-list\">\n                  <div class=\"news\" *ngFor=\"let item of news\">\n                    <div class=\"img\" [ngStyle]=\"{'background-image':'url('+item.photos[0].file+')' }\">\n                      <a href=\"#\" class=\"news-btn\">{{item.category.name}}</a>\n                      <div class=\"info\">\n                        <span class=\"date\">{{item.created_at}}</span>\n                      </div>\n                    </div>\n                    <div class=\"text\">\n                      <h3>\n                        <a routerLink=\"/posts/post/{{item.id}}\">{{item.title}}</a>\n                      </h3>\n                    </div>\n                    <div class=\"text2\">\n                      <p>{{item.desc | striphtml |excerpt:80}}</p>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n\n          <div class=\"tab-content comment-wrap\">\n            <div class=\"comment-block\">\n              <div class=\"comment-top\"  *ngIf=\"!user.id\">\n                <h3>Комментарии ({{commentcount}})</h3>\n                <p>Для того чтобы добавить свой комментарий - Вам необходимо <a href=\"#login-popup\" class=\"popup-link\">авторизоваться</a> или <a href=\"#check-popup\" class=\"popup-link\">пройти регистрацию.</a></p>\n              </div>\n              <div class=\"comment-top\"  *ngIf=\"user.id\">\n                <h3>Добавить новый комментарий</h3>\n                <form (ngSubmit)=\"submitComment(f,data.id, 'App\\\\CryptoStat')\" #f=\"ngForm\">\n                  <input type=\"hidden\" ngModel name=\"post_id\" value=\"{{dataUsd?.id}}\">\n                  <input type=\"hidden\" ngModel name=\"type\" value=\"App\\CryptoStat\">\n                  <textarea ngModel name=\"body\" placeholder=\"Начните вводить комментарий...\"></textarea>\n                  <button type=\"submit\">Добавить</button>\n                </form>\n              </div>\n              <h3 class=\"total-comments\"  *ngIf=\"user.id\">Всего комментариев ({{commentcount}})</h3>\n              <ul class=\"comment-items\">\n                <!--  -->\n                <li *ngFor=\"let item of comments\">\n                  <div class=\"left\">\n                    <div class=\"info\">\n                      <div class=\"img-wrap\">\n                        <img src=\"img/comment-img2.jpg\" style=\"max-width: 35px; height: auto;\" alt=\"\">\n                      </div>\n                      <div class=\"text-wrap\">\n                        <p>{{item.email}}</p>\n                        <span>Добавлен </span>\n                      </div>\n                    </div>\n                    <p class=\"comment-text\">{{item.body}}</p>\n                  </div>\n                  <div class=\"right\">\n                    <div class=\"img-wrap\"></div>\n                    <div class=\"btn-block\">\n                      <span class=\"number-green\">0</span>\n                      <div class=\"buttons\">\n                        <a href=\"#\" class=\"plus\">+</a>\n                        <a href=\"#\" class=\"minus\">-</a>\n                      </div>\n                    </div>\n                  </div>\n                </li>\n\n              </ul>\n            </div>\n          </div>\n\n          <div class=\"tab-content news-wrapper\">\n            <div class=\"news-body\">\n              <div class=\"news-tab-content active\">\n                <div class=\"main-news\">\n                  <div class=\"news\" *ngFor=\"let item of main_news\">\n                    <div class=\"img\" [ngStyle]=\"{'background-image':'url('+item.photos[0].file+')'}\">\n                      <a href=\"#\" class=\"news-btn\">{{item.category.name}}</a>\n                      <a href=\"/posts/post/{{item.id}}\" class=\"title-link\">{{item.title}}</a>\n                      <div class=\"info\">\n                        <span class=\"date\">{{item.created_at}}</span>\n                        <span class=\"views\"><i class=\"fa fa-eye\" aria-hidden=\"true\"></i>0</span>\n                        <a href=\"/posts/post/{{item.id}}#comment-block\" class=\"comments\"><i class=\"fa fa-comment\" aria-hidden=\"true\"></i>0</a>\n                      </div>\n                    </div>\n                    <div class=\"text\">\n                      <p>{{item.desc | striphtml | excerpt:140}}<a routerLink=\"/posts/post/{{item.id}}\">Подробнее</a></p>\n                    </div>\n                  </div>\n                </div>\n                <div class=\"news-list\">\n                  <div class=\"news\" *ngFor=\"let item of news\">\n                    <div class=\"img\" [ngStyle]=\"{'background-image':'url('+item.photos[0].file+')' }\">\n                      <a href=\"#\" class=\"news-btn\">{{item.category.name}}</a>\n                      <div class=\"info\">\n                        <span class=\"date\">{{item.created_at}}</span>\n                      </div>\n                    </div>\n                    <div class=\"text\">\n                      <h3>\n                        <a routerLink=\"/posts/post/{{item.id}}\">{{item.title}}</a>\n                      </h3>\n                    </div>\n                    <div class=\"text2\">\n                      <p>{{item.desc | striphtml |excerpt:80}}</p>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n\n          <div class=\"tab-content description-content\">\n            <h2>Описание {{data?.symbol}} ({{data?.name}})</h2>\n            <div [innerHTML]='data?.desc'></div>\n          </div>\n\n        </div>\n      </div>\n      <aside class=\"sidebar\">\n        <div class=\"description\">\n          <h5 class=\"titles\">Описание {{data?.symbol}} ({{data?.name}})</h5>\n          <div [innerHTML]='data?.desc'></div>\n          <br> <p><a class=\"more-sidebar\" href=\"javascript:;\">Подробнее</a><p>\n          </div>\n          <div class=\"top-crypto\">\n            <h5 class=\"titles\"><span>ТОП 5</span>криптовалют (% роста)</h5>\n            <div class=\"periods\">\n              <ul class=\"period-tabs\">\n                <li class=\"active\"><a href=\"#\">День</a></li>\n                <li><a href=\"#\">Неделя</a></li>\n                <li><a href=\"#\">Месяц</a></li>\n                <li><a href=\"#\">Год</a></li>\n              </ul>\n              <div class=\"period-content\">\n                <div class=\"tab-content active\">\n                  <ul>\n                    <li>\n                      <a href=\"\" class=\"name\">Bitcoin</a>\n                      <span class=\"price\">$2829101929191</span>\n                      <span class=\"percent\">11%</span>\n                    </li>\n                    <li>\n                      <a href=\"\" class=\"name\">Ethereum</a>\n                      <span class=\"price\">$2829101929191</span>\n                      <span class=\"percent\">11%</span>\n                    </li>\n                    <li>\n                      <a href=\"\" class=\"name\">BitcoinCash</a>\n                      <span class=\"price\">$90819201</span>\n                      <span class=\"percent\">8%</span>\n                    </li>\n                    <li>\n                      <a href=\"\" class=\"name\">EthereumClassic</a>\n                      <span class=\"price\">$8790899</span>\n                      <span class=\"percent\">7,2%</span>\n                    </li>\n                    <li>\n                      <a href=\"\" class=\"name\">Ripple</a>\n                      <span class=\"price\">$2829</span>\n                      <span class=\"percent\">2%</span>\n                    </li>\n                  </ul>\n                </div>\n                <div class=\"tab-content\">\n                  <ul>\n                    <li>\n                      <a href=\"\" class=\"name\">Bitcoin</a>\n                      <span class=\"price\">$2829101929191</span>\n                      <span class=\"percent\">11%</span>\n                    </li>\n                    <li>\n                      <a href=\"\" class=\"name\">Ethereum</a>\n                      <span class=\"price\">$2829101929191</span>\n                      <span class=\"percent\">11%</span>\n                    </li>\n                    <li>\n                      <a href=\"\" class=\"name\">BitcoinCash</a>\n                      <span class=\"price\">$90819201</span>\n                      <span class=\"percent\">8%</span>\n                    </li>\n                    <li>\n                      <a href=\"\" class=\"name\">EthereumClassic</a>\n                      <span class=\"price\">$8790899</span>\n                      <span class=\"percent\">7,2%</span>\n                    </li>\n                    <li>\n                      <a href=\"\" class=\"name\">Ripple</a>\n                      <span class=\"price\">$2829</span>\n                      <span class=\"percent\">2%</span>\n                    </li>\n                  </ul>\n                </div>\n                <div class=\"tab-content\">\n                  <ul>\n                    <li>\n                      <a href=\"\" class=\"name\">Bitcoin</a>\n                      <span class=\"price\">$2829101929191</span>\n                      <span class=\"percent\">11%</span>\n                    </li>\n                    <li>\n                      <a href=\"\" class=\"name\">Ethereum</a>\n                      <span class=\"price\">$2829101929191</span>\n                      <span class=\"percent\">11%</span>\n                    </li>\n                    <li>\n                      <a href=\"\" class=\"name\">BitcoinCash</a>\n                      <span class=\"price\">$90819201</span>\n                      <span class=\"percent\">8%</span>\n                    </li>\n                    <li>\n                      <a href=\"\" class=\"name\">EthereumClassic</a>\n                      <span class=\"price\">$8790899</span>\n                      <span class=\"percent\">7,2%</span>\n                    </li>\n                    <li>\n                      <a href=\"\" class=\"name\">Ripple</a>\n                      <span class=\"price\">$2829</span>\n                      <span class=\"percent\">2%</span>\n                    </li>\n                  </ul>\n                </div>\n                <div class=\"tab-content\">\n                  <ul>\n                    <li>\n                      <a href=\"\" class=\"name\">Bitcoin</a>\n                      <span class=\"price\">$2829101929191</span>\n                      <span class=\"percent\">11%</span>\n                    </li>\n                    <li>\n                      <a href=\"\" class=\"name\">Ethereum</a>\n                      <span class=\"price\">$2829101929191</span>\n                      <span class=\"percent\">11%</span>\n                    </li>\n                    <li>\n                      <a href=\"\" class=\"name\">BitcoinCash</a>\n                      <span class=\"price\">$90819201</span>\n                      <span class=\"percent\">8%</span>\n                    </li>\n                    <li>\n                      <a href=\"\" class=\"name\">EthereumClassic</a>\n                      <span class=\"price\">$8790899</span>\n                      <span class=\"percent\">7,2%</span>\n                    </li>\n                    <li>\n                      <a href=\"\" class=\"name\">Ripple</a>\n                      <span class=\"price\">$2829</span>\n                      <span class=\"percent\">2%</span>\n                    </li>\n                  </ul>\n                </div>\n              </div>\n            </div>\n            <a href=\"#\" class=\"details\">Подробный рейтинг</a>\n          </div>\n          <a href=\"#\" class=\"banner-black\"><img src=\"img/banner-black.jpg\" alt=\"\"></a>\n          <app-cloud-mining-top></app-cloud-mining-top>\n          <div class=\"social\">\n            <h5 class=\"titles\">Мы в соц.сетях</h5>\n            <ul>\n              <li><a href=\"#\"><i class=\"fa fa-vk\" aria-hidden=\"true\"></i></a></li>\n              <li><a href=\"#\"><i class=\"fa fa-facebook\" aria-hidden=\"true\"></i></a></li>\n              <li><a href=\"#\"><i class=\"fa fa-twitter\" aria-hidden=\"true\"></i></a></li>\n              <li><a href=\"#\"><i class=\"fa fa-instagram\" aria-hidden=\"true\"></i></a></li>\n              <li><a href=\"#\"><i class=\"fa fa-vk\" aria-hidden=\"true\"></i></a></li>\n              <li><a href=\"#\"><i class=\"fa fa-facebook\" aria-hidden=\"true\"></i></a></li>\n            </ul>\n          </div>\n          <div class=\"top-fonds\">\n            <h5 class=\"titles\"><span>ТОП 5</span> фондов</h5>\n            <ul class=\"top-ul\">\n              <li>\n                <div class=\"left\">\n                  <a href=\"\">HashFlare SHA-256 2017</a>\n                  <span class=\"paying\">ПЛАТИТ!</span>\n                </div>\n                <div class=\"right\">\n                  <span class=\"persent\">489%</span>\n                  <span class=\"days\">489 дней</span>\n                </div>\n              </li>\n              <li>\n                <div class=\"left\">\n                  <a href=\"\">Bitmakler CMS</a>\n                  <span class=\"paying\">ПЛАТИТ!</span>\n                </div>\n                <div class=\"right\">\n                  <span class=\"persent\">11%</span>\n                  <span class=\"days\">489 дней</span>\n                </div>\n              </li>\n              <li>\n                <div class=\"left\">\n                  <a href=\"\">Bitmakler CMS</a>\n                  <span class=\"payment\">ОЖИДАНИЕ ВЫПЛАТЫ</span>\n                </div>\n                <div class=\"right\">\n                  <span class=\"persent\">11%</span>\n                  <span class=\"days\">489 дней</span>\n                </div>\n              </li>\n              <li>\n                <div class=\"left\">\n                  <a href=\"\">CMSHP</a>\n                  <span class=\"paying\">ПЛАТИТ!</span>\n                </div>\n                <div class=\"right\">\n                  <span class=\"persent\">11%</span>\n                  <span class=\"days\">489 дней</span>\n                </div>\n              </li>\n              <li>\n                <div class=\"left\">\n                  <a href=\"\">Bitmakler CMS</a>\n                  <span class=\"payment\">ОЖИДАНИЕ ВЫПЛАТЫ</span>\n                </div>\n                <div class=\"right\">\n                  <span class=\"persent\">11%</span>\n                  <span class=\"days\">489 дней</span>\n                </div>\n              </li>\n            </ul>\n            <a href=\"#\" class=\"all-fonds\">Все фонды (981)</a>\n          </div>\n        </aside>\n      </div>\n    </section>\n<div id=\"follow-popup\" class=\"popup mfp-with-anim mfp-hide\">\n  <div class=\"popup-body\">\n    <h2>Следить за {{selectedItem?.name}}</h2>\n    <p>Выберите портфель для сохранения {{selectedItem?.name}}</p>\n    <div class=\"checkbox-list\">\n      <div class=\"checkbox-wrap\" *ngFor=\"let portfolio of getUserPortfolio; let i = index\">\n        <input type=\"radio\" name=\"id\" [(ngModel)]=\"addPortfolio\" value=\"{{portfolio.id}}\" checked=\"checked\" id=\"{{i}}\">\n        <label for=\"{{i}}\">\n          <span></span>{{portfolio.name}}\n        </label>\n      </div>\n    </div>\n    <a href=\"#\" class=\"add-portfolio\">+Добавить портфель</a>\n    <form class=\"hidden\" #f=\"ngForm\">\n      <input type=\"text\" ngModel name=\"name\" required=\"\" placeholder=\"Введите название...\">\n      <button (click)=\"createPortfolio(f)\" type=\"submit\">Добавить</button>\n    </form>\n  </div>\n  <div class=\"save-block\">\n    <a (click)=\"submitPortfolio(selectedItem?.id, 'App\\\\CryptoStat')\" class=\"save-settings\">Сохранить настройки</a>\n    <a href=\"#\" class=\"close-text\">Отменить и закрыть</a>\n  </div>\n</div>"

/***/ }),

/***/ "./angular/app/crypto/crypto.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export User */
/* unused harmony export CommentRaw */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CryptoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__ = __webpack_require__("./node_modules/rxjs/_esm5/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__auth_service__ = __webpack_require__("./angular/app/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__stocks_service__ = __webpack_require__("./angular/app/stocks.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var User = (function () {
    function User() {
    }
    return User;
}());

;
var CommentRaw = (function () {
    function CommentRaw() {
    }
    return CommentRaw;
}());

var CryptoComponent = (function () {
    function CryptoComponent(http, stocksService, router, route, auth) {
        this.http = http;
        this.stocksService = stocksService;
        this.router = router;
        this.route = route;
        this.auth = auth;
        this.comments = [];
        this.load = true;
        this.user = {
            id: 0,
            name: '',
            email: '',
            photo_id: 0,
            role_id: 0,
            telegram: '',
        };
        this.commentcount = 0;
        this.stocks = [];
        this.bid_ask = { bid: 0, ask: 0 };
        this.animtype = '';
        this.animtypebg = '';
        this.diff = 0;
        this.volume = 0;
        this.animstock = [];
        this.prev = 0;
        this.min = [];
        this.min_value = 0;
        this.max_value = 0;
        this.max = [];
        this.time = [];
        this.time_value = 0;
        this.portfoliosInfo = [];
        this.getUserPortfolio = [];
        this.checkPortfolio = false;
    }
    CryptoComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.auth.getUser().subscribe(function (response) { _this.getUserPortfolio = response['portfolio']; console.log(_this.getUserPortfolio); });
        var portfolioUrl = '/angular/userportfolio';
        this.portfolioInfo = this.http.get(portfolioUrl);
        this.portfolioInfo.subscribe(function (response) {
            if (response['error']) {
                // code...
            }
            else {
                _this.portfoliosInfo = response['crypto'];
                console.log(_this.portfoliosInfo);
            }
        });
        var symbol = this.route.snapshot.params['sym'];
        if (localStorage.getItem(symbol)) {
            this.dataUsd = JSON.parse(localStorage.getItem(symbol));
            this.diff = this.dataUsd.now - this.dataUsd.last;
            this.prev = this.dataUsd.last;
        }
        if (localStorage.getItem(symbol + 'bid')) {
            this.bid_ask.bid = JSON.parse(localStorage.getItem('bid'));
        }
        if (localStorage.getItem(symbol + 'ask')) {
            this.bid_ask.ask = JSON.parse(localStorage.getItem('ask'));
        }
        if (localStorage.getItem(symbol + 'USD stocks')) {
            this.stocks = JSON.parse(localStorage.getItem(symbol + 'USD stocks'));
            this.load = false;
            if (this.volume === 0) {
                for (var _a = 0, _b = this.stocks; _a < _b.length; _a++) {
                    var item = _b[_a];
                    this.volume = this.volume + item.volume;
                }
            }
        }
        this.stocksService.getStocks(symbol + '/USDT').subscribe(function (response) {
            _this.load = true;
            _this.stocks = response;
            _this.load = false;
            _this.diff = _this.dataUsd.now - _this.dataUsd.last;
            localStorage.setItem(symbol + 'USD stocks', JSON.stringify(_this.stocks));
            for (var _a = 0, _b = _this.stocks; _a < _b.length; _a++) {
                var item = _b[_a];
                if (item.ask > 0) {
                    _this.min.push(item.ask);
                }
                if (item.bid) {
                    _this.max.push(item.bid);
                }
                if (_this.volume === 0) {
                    _this.volume = _this.volume + item.volume;
                }
                else {
                    _this.volume = 0;
                    _this.volume = _this.volume + item.volume;
                }
                if (_this.bid_ask.ask < item.ask) {
                    _this.bid_ask.ask = item.ask;
                    localStorage.removeItem(symbol + 'ask');
                    localStorage.setItem(symbol + 'ask', JSON.stringify(_this.bid_ask.ask));
                }
                if (_this.bid_ask.bid < item.bid) {
                    _this.bid_ask.bid = item.bid;
                    localStorage.removeItem(symbol + 'bid');
                    localStorage.setItem(symbol + 'bid', JSON.stringify(_this.bid_ask.bid));
                }
            }
            console.log(_this.min);
            _this.min_value = Math.min.apply(null, _this.min);
            console.log('min val');
            console.log(_this.min_value);
            _this.max_value = Math.max.apply(null, _this.max);
        });
        this.stocksData = __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__["a" /* Observable */].interval(2000).concatMap(function () {
            return _this.stocksService.getStocks(symbol + '/USDT');
        })
            .map(function (response) {
            for (var _i = 0; _i < _this.stocks.length; ++_i) {
                _this.time.push(_this.stocks[_i].time);
                _this.animstock[_i] = '';
                if (_this.stocks[_i].value > response[_i].value) {
                    _this.animstock[_i] = 'greencolor';
                    _this.stocks[_i].value = response[_i].value;
                    _this.stocks[_i].percent = response[_i].percent;
                    _this.stocks[_i].bid = response[_i].bid;
                    _this.stocks[_i].ask = response[_i].ask;
                    _this.stocks[_i].time = response[_i].time;
                    _this.stocks[_i].volume = response[_i].volume;
                }
                else if (_this.stocks[_i].value < response[_i].value) {
                    _this.animstock[_i] = 'redcolor';
                    _this.stocks[_i].percent = response[_i].percent;
                    _this.stocks[_i].value = response[_i].value;
                    _this.stocks[_i].bid = response[_i].bid;
                    _this.stocks[_i].ask = response[_i].ask;
                    _this.stocks[_i].time = response[_i].time;
                    _this.stocks[_i].volume = response[_i].volume;
                }
            }
            _this.time_value = Math.max.apply(null, _this.time);
            _this.load = false;
            localStorage.removeItem(symbol + 'USD stocks');
            localStorage.setItem(symbol + 'USD stocks', JSON.stringify(_this.stocks));
            for (var _a = 0, _b = _this.stocks; _a < _b.length; _a++) {
                var item = _b[_a];
                if (_this.volume === 0) {
                    for (var _c = 0, _d = _this.stocks; _c < _d.length; _c++) {
                        var item_1 = _d[_c];
                        _this.volume = _this.volume + item_1.volume;
                    }
                }
                else {
                    _this.volume = 0;
                    for (var _e = 0, _f = _this.stocks; _e < _f.length; _e++) {
                        var item_2 = _f[_e];
                        _this.volume = _this.volume + item_2.volume;
                    }
                }
                if (_this.bid_ask.ask < item.ask) {
                    _this.bid_ask.ask = item.ask;
                    localStorage.removeItem('ask');
                    localStorage.setItem('ask', JSON.stringify(_this.bid_ask.ask));
                }
                if (_this.bid_ask.bid < item.bid) {
                    _this.bid_ask.bid = item.bid;
                    localStorage.removeItem('bid');
                    localStorage.setItem('bid', JSON.stringify(_this.bid_ask.bid));
                }
            }
        }).subscribe();
        this.cryptoFirst = this.stocksService.getCrypto()
            .map(function (response) {
            _this.dataUsd = response[symbol + '/USDT'];
            localStorage.removeItem(symbol);
            localStorage.setItem(symbol, JSON.stringify(_this.dataUsd));
        }).subscribe();
        var infoCryptoPath = "/allcrypto/" + symbol;
        this.infoCrypto = this.http.get(infoCryptoPath).publishReplay(1).refCount();
        this.infoCrypto.subscribe(function (response) {
            _this.data = response;
            for (var _a = 0, _b = response['comments']; _a < _b.length; _a++) {
                var item = _b[_a];
                _this.comments.push({
                    id: item.id,
                    author: item.author,
                    body: item.body,
                    email: item.email,
                    commentable_id: item.commentable_id,
                    photo: item.photo
                });
            }
            _this.commentcount = response['comments_count'];
            var newsUrl = "/postsbycat/" + _this.data.cat_id_news;
            var newsInfo = _this.http.get(newsUrl).publishReplay(1).refCount();
            newsInfo.subscribe(function (response) {
                _this.main_news = response['main_news'];
                _this.news = response['news'];
                console.log(_this.news);
                console.log(_this.main_news);
            });
        });
        this.cryptoData = __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__["a" /* Observable */].interval(1200).concatMap(function () { return _this.stocksService.getCrypto(); })
            .map(function (response) {
            _this.animtype = '';
            if (_this.dataUsd.now != response[symbol + '/USDT'].now) {
                _this.diff = response[symbol + '/USDT'].now - _this.dataUsd.now;
                _this.prev = _this.dataUsd.now;
                if (_this.dataUsd.now > response[symbol + '/USDT'].now) {
                    _this.animtype = 'redcolor';
                }
                else {
                    _this.animtype = 'greencolor';
                }
            }
            _this.dataUsd = response[symbol + '/USDT'];
            localStorage.removeItem(symbol);
            localStorage.setItem(symbol, JSON.stringify(_this.dataUsd));
        }).subscribe();
        this.auth
            .getUser()
            .subscribe(function (response) {
            _this.user = response;
            _this.auth.setUser(_this.user);
        });
    };
    CryptoComponent.prototype.submitComment = function (form, post_id, type) {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["c" /* HttpHeaders */]({ 'Content-type': 'Application/json ' });
        this.http.post('/storecomment', {
            'post_id': post_id,
            'body': form.value.body,
            'commentable_id': post_id,
            'commentable_type': type
        }, { headers: headers }).subscribe(function (response) {
            return _this.comments.unshift({
                id: response['id'],
                email: response['email'],
                author: response['author'],
                body: response['body'],
                commentable_id: response['commentable_id'],
                photo: response['photo']
            });
        }, function (error) { return console.log(error); });
        form.reset();
        console.log(form);
        this.commentcount = this.commentcount + 1;
    };
    CryptoComponent.prototype.isNegative = function (now) {
        if (now >= 0) {
            return false;
        }
        return true;
    };
    CryptoComponent.prototype.isNegativeMath = function (now, last) {
        if ((parseInt(now) - parseInt(last)) >= 0) {
            return false;
        }
        return true;
    };
    CryptoComponent.prototype.comparePrice = function (now, last) {
        if (parseInt(now) > parseInt(last)) {
            return true;
        }
        return false;
    };
    CryptoComponent.prototype.countPercent = function (now, last) {
        return (now - last) / (now + last) * 100;
    };
    CryptoComponent.prototype.isNegativePercent = function (now, last) {
        if (((parseInt(now) - parseInt(last)) / ((parseInt(now) + parseInt(last)) / 2) * 100) >= 0) {
            return false;
        }
        return true;
    };
    CryptoComponent.prototype.createPortfolio = function (form) {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["c" /* HttpHeaders */]({ 'Content-type': 'Application/json ' });
        this.http.post('/angular/userportfolio/create', { 'name': form.value.name, 'user_portfolio_type_id': 1 }, { headers: headers })
            .subscribe(function (response) { _this.getUserPortfolio.push(response); form.reset(); }, function (error) { return console.log(error); });
    };
    CryptoComponent.prototype.submitPortfolio = function (post_id, type) {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["c" /* HttpHeaders */]({ 'Content-type': 'Application/json ' });
        this.http.post('/storeportfolio', {
            'user_portfollable_id': post_id,
            'user_portfolio_id': this.addPortfolio,
            'user_portfollable_type': type
        }, { headers: headers }).subscribe(function (response) { return _this.router.navigate(['/profile/portfolio']); }, function (error) { return console.log(error); });
    };
    CryptoComponent.prototype.callCheck = function (id) {
        if (this.checkInPortfolio(id)) {
            this.checkPortfolio = true;
        }
        this.checkPortfolio = false;
    };
    CryptoComponent.prototype.checkInPortfolio = function (id) {
        if (this.portfoliosInfo == undefined) {
            return false;
        }
        for (var _a = 0, _b = this.portfoliosInfo; _a < _b.length; _a++) {
            var item = _b[_a];
            for (var _c = 0, item_3 = item; _c < item_3.length; _c++) {
                var it = item_3[_c];
                if (it.id) {
                    if (it.id == id) {
                        return true;
                    }
                }
            }
        }
        return false;
    };
    CryptoComponent.prototype.checkAuth = function () {
        if (this.auth.getUserInfo()) {
            return true;
        }
        return (false);
    };
    CryptoComponent.prototype.removePortfolio = function (id) {
        var _this = this;
        var removeUrl = '/angular/userportfolio/crypto/remove/';
        var removePost = this.http.get(removeUrl + id);
        removePost.subscribe(function (response) {
            _this.portfolioInfo.subscribe(function (res) {
                if (res['error']) {
                    // code...
                }
                else {
                    _this.portfoliosInfo = res['crypto'];
                }
            }),
                _this.checkInPortfolio(id);
        }, function (error) { return console.log(error); });
    };
    CryptoComponent.prototype.ngOnDestroy = function () {
        this.cryptoData.unsubscribe();
        this.stocksData.unsubscribe();
        this.cryptoFirst.unsubscribe();
    };
    return CryptoComponent;
}());
CryptoComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-crypto',
        template: __webpack_require__("./angular/app/crypto/crypto.component.html"),
        styles: [__webpack_require__("./angular/app/crypto/crypto.component.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_5__stocks_service__["a" /* StocksService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["a" /* HttpClient */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_5__stocks_service__["a" /* StocksService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__stocks_service__["a" /* StocksService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__auth_service__["a" /* AuthService */]) === "function" && _e || Object])
], CryptoComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=crypto.component.js.map

/***/ }),

/***/ "./angular/app/edit-profile/edit-profile.component.html":
/***/ (function(module, exports) {

module.exports = "\t<section class=\"setting-wrap\">\n\t\t<div class=\"wrapper\">\n\t\t\t<h2>Настройки аккаунта</h2>\n\t\t\t<ul class=\"setting-tabs\">\n\t\t\t\t<li class=\"active\"><a href=\"#\">Личные данные и пароль</a></li>\n\t\t\t\t<li><a href=\"#\">Настройка уведомлений</a></li>\n\t\t\t</ul>\n\t\t\t<div class=\"setting-content\">\n\t\t\t\t<div class=\"left\">\n\t\t\t\t\t<form (ngSubmit)=\"onUpdate(update)\" #update=\"ngForm\">\n\t\t\t\t\t\t<div class=\"input-wrap\">\n\t\t\t\t\t\t\t<label>Электронная почта для уведомлений</label>\n\t\t\t\t\t\t\t<input type=\"text\" [(ngModel)]=\"user.email\" name=\"email\" placeholder=\"irinaivanova@mail.ru\" required email>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"input-wrap\">\n\t\t\t\t\t\t\t<label>Аккаунт telegram (для уведомлений)</label>\n\t\t\t\t\t\t\t<input type=\"text\" [(ngModel)]=\"user.telegram\"  name=\"telegram\" placeholder=\"irinaivanova\">\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"input-wrap\">\n\t\t\t\t\t\t\t<label>Никнейм </label>\n\t\t\t\t\t\t\t<input type=\"text\" [(ngModel)]=\"user.name\"  name=\"name\" placeholder=\"irinaivanova\">\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<button type=\"submit\">Сохранить</button>\n            <p *ngIf=\"submitted\">Изменения успешно сохранены</p>\n\t\t\t\t\t</form>\n\t\t\t\t\t<form (ngSubmit)=\"onUpdatePass(updatePass)\" #updatePass=\"ngForm\">\n\t\t\t\t\t\t<div class=\"input-wrap\">\n\t\t\t\t\t\t\t<label>Ваш старый пароль</label>\n\t\t\t\t\t\t\t<input type=\"password\" ngModel name=\"oldpassword\" required>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"input-wrap\">\n\t\t\t\t\t\t\t<label>Новый пароль</label>\n\t\t\t\t\t\t\t<input type=\"password\" ngModel name=\"password\"  required>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"input-wrap\">\n\t\t\t\t\t\t\t<div >\n\t\t\t\t\t\t\t\t<label>Повторите Ваш новый пароль</label>\n\t\t\t\t\t\t\t\t<input type=\"password\" name=\"password_repeat\"  ngModel required>\n\t\t\t\t\t\t\t\t<!-- <p><img src=\"img/close-password.png\" alt=\"\">Пароли не совпадают</p> -->\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<button type=\"submit\" >Изменить</button>\n            <p *ngIf=\"submittedPass\">Пароль успешно изменен</p>\n            <p *ngIf=\"error !=''\">{{error}}</p>\n\n\t\t\t\t\t</form>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"right\">\n          <div class=\"img-wrap\"><img src=\"{{user.photo ? user.photo.file : 'http://aiyd.org/wp-content/uploads/2016/09/no-image-icon-hi.png'}}\" alt=\"\"></div>\n          <form class=\"upload\">\n            <div class=\"input-wrap\">\n              <input type=\"file\" id=\"file\" #fileInput name=\"file\" class=\"input-file ng-pristine ng-valid ng-touched\" files-model=\"\" ng-model=\"project.fileList\" (change)=\"handleFileInput($event.target.files)\">\n              <label for=\"files\">\n                <span class=\"add-image\">\n                Выбрать и загрузить фото\n                </span>\n                <output id=\"list\"></output>\n              </label>\n            </div>\n            <a href=\"#\"><img src=\"img/basket-icon.png\" alt=\"\">Удалить фото</a>\n          </form>\n        </div>\n\t\t\t</div>\n\t\t</div>\n\t</section>"

/***/ }),

/***/ "./angular/app/edit-profile/edit-profile.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./angular/app/edit-profile/edit-profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export User */
/* unused harmony export NewData */
/* unused harmony export NewPass */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditProfileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth_service__ = __webpack_require__("./angular/app/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("./node_modules/@angular/http/@angular/http.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var User = (function () {
    function User() {
    }
    return User;
}());

;
var NewData = (function () {
    function NewData() {
    }
    return NewData;
}());

;
var NewPass = (function () {
    function NewPass() {
    }
    return NewPass;
}());

;
var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["c" /* HttpHeaders */]({ 'Content-type': 'Application/json ' });
var EditProfileComponent = (function () {
    function EditProfileComponent(auth, http, _http) {
        this.auth = auth;
        this.http = http;
        this._http = _http;
        this.error = '';
        this.submitted = false;
        this.submittedPass = false;
    }
    EditProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.auth
            .getUser()
            .subscribe(function (response) {
            _this.user = response;
            _this.auth.setUser(_this.user);
        });
    };
    EditProfileComponent.prototype.uploadFileToActivity = function (photo) {
    };
    EditProfileComponent.prototype.handleFileInput = function () {
        var _this = this;
        var image = this.fileInput.nativeElement;
        console.log(image.files);
        var pathUrl = '/profile/updatephoto';
        this.fileToUpload = image.files[0];
        console.log(this.fileToUpload);
        var formData = new FormData();
        formData.append('photo', this.fileToUpload, this.fileToUpload.name);
        // console.log(formData.get('photo'));
        // console.log(formData.get('photo'));
        var header = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
        this.http.post(pathUrl, formData).subscribe(function (data) {
            console.log(data);
            _this.auth
                .getUser()
                .subscribe(function (response) {
                _this.user = response;
                _this.auth.setUser(_this.user);
            });
        }, function (error) {
            console.log(error);
        });
    };
    EditProfileComponent.prototype.onUpdate = function (form) {
        var _this = this;
        this.newData = {
            email: form.value.email,
            telegram: form.value.telegram,
            name: form.value.name
        };
        this.http.patch('/users/' + this.user.id + '/update', this.newData, { headers: headers }).subscribe(function (response) { return response; }, function (error) { return console.log(error); });
        this.submitted = true;
        this.auth
            .getUser()
            .subscribe(function (response) {
            _this.user = response;
            _this.auth.setUser(_this.user);
        });
    };
    EditProfileComponent.prototype.onUpdatePass = function (form) {
        var _this = this;
        this.newPass = {
            oldpassword: form.value.oldpassword,
            password: form.value.password,
            password_repeat: form.value.password_repeat
        };
        this.http.patch('users/' + this.user.id + '/updatepass', this.newPass, { headers: headers }).subscribe(function (response) { _this.submittedPass = true; _this.error = ''; }, function (error) { return _this.error = 'Неправильный пароль'; });
        console.log(this.user);
        console.log(this.newPass);
    };
    return EditProfileComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('fileInput'),
    __metadata("design:type", Object)
], EditProfileComponent.prototype, "fileInput", void 0);
EditProfileComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-edit-profile',
        template: __webpack_require__("./angular/app/edit-profile/edit-profile.component.html"),
        styles: [__webpack_require__("./angular/app/edit-profile/edit-profile.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Http */]) === "function" && _c || Object])
], EditProfileComponent);

var _a, _b, _c;
//# sourceMappingURL=edit-profile.component.js.map

/***/ }),

/***/ "./angular/app/excerpt.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExcerptPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ExcerptPipe = (function () {
    function ExcerptPipe() {
    }
    ExcerptPipe.prototype.transform = function (text, length) {
        if (!text || !length) {
            return text;
        }
        if (text.length > length) {
            return text.substr(0, length) + '...';
        }
        return text;
    };
    return ExcerptPipe;
}());
ExcerptPipe = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["X" /* Pipe */])({
        name: 'excerpt',
        pure: false
    })
], ExcerptPipe);

//# sourceMappingURL=excerpt.pipe.js.map

/***/ }),

/***/ "./angular/app/exchange/exchange.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"ico-wrap exchanges-card-wrap\">\n    <div class=\"wrapper\">\n      <div class=\"ico-card-content\">\n        <a [routerLink]=\"['/exchanges']\" class=\"return\"><span>&#60;</span>Вернуться к списку бирж</a>\n        <div class=\"project-block\">\n          <div class=\"img-wrap\" style=\"width: 97px;\">\n            <img src=\"/images/{{exchange.logo}}\" alt=\"\" style=\"max-width: 100%\">\n          </div>\n          <div class=\"text-wrap\">\n            <div class=\"text-info\">\n              <p class=\"project-title\">Биржа {{exchange.name}}</p>\n            </div>\n            <div class=\"project-info-content\">\n              <div class=\"info\">\n                <!-- <div class=\"rating-wrap\">\n                  <fieldset class=\"rating\">\n                    <input type=\"radio\" id=\"star5\" name=\"rating\" value=\"5\" /><label class=\"full\" for=\"star5\" title=\"Awesome - 5 stars\"></label>\n                    <input type=\"radio\" id=\"star4half\" name=\"rating\" value=\"4 and a half\" /><label class=\"half\" for=\"star4half\" title=\"Pretty good - 4.5 stars\"></label>\n                    <input type=\"radio\" id=\"star4\" name=\"rating\" value=\"4\" /><label class=\"full\" for=\"star4\" title=\"Pretty good - 4 stars\"></label>\n                    <input type=\"radio\" id=\"star3half\" name=\"rating\" value=\"3 and a half\" /><label class=\"half\" for=\"star3half\" title=\"Meh - 3.5 stars\"></label>\n                    <input type=\"radio\" id=\"star3\" name=\"rating\" value=\"3\" /><label class=\"full\" for=\"star3\" title=\"Meh - 3 stars\"></label>\n                    <input type=\"radio\" id=\"star2half\" name=\"rating\" value=\"2 and a half\" /><label class=\"half\" for=\"star2half\" title=\"Kinda bad - 2.5 stars\"></label>\n                    <input type=\"radio\" id=\"star2\" name=\"rating\" value=\"2\" /><label class=\"full\" for=\"star2\" title=\"Kinda bad - 2 stars\"></label>\n                    <input type=\"radio\" id=\"star1half\" name=\"rating\" value=\"1 and a half\" /><label class=\"half\" for=\"star1half\" title=\"Meh - 1.5 stars\"></label>\n                    <input type=\"radio\" id=\"star1\" name=\"rating\" value=\"1\" /><label class=\"full\" for=\"star1\" title=\"Sucks big time - 1 star\"></label>\n                    <input type=\"radio\" id=\"starhalf\" name=\"rating\" value=\"half\" /><label class=\"half\" for=\"starhalf\" title=\"Sucks big time - 0.5 stars\"></label>\n                  </fieldset>\n                  <span class=\"number\">135</span>\n                </div>\n                <p class=\"last-updated\">Для того чтобы оставить оценку бирже, Вам необходимо авторзоваться или зарегистрироваться.</p> -->\n              </div>\n              <div class=\"progress-bar\">\n                <a href=\"#login-popup\" *ngIf=\"!checkAuth()\" class=\"popup-link follow\" data-effect=\"mfp-zoom-in\"><span class=\"plus\">+</span><span class=\"text\">Следить</span></a>\n            <a href=\"#follow-popup\" *ngIf=\"!checkInPortfolio(exchange?.id) && checkAuth()\" (click)=\"selectedItem = exchange\" class=\"popup-link follow\" data-effect=\"mfp-zoom-in\"><span class=\"plus\">+</span><span class=\"text\">Следить</span></a>\n\n            <a class=\"follow\"  *ngIf=\"checkInPortfolio(exchange?.id) && checkAuth()\"  (click)=\"removePortfolio(exchange?.id)\"><span class=\"minus\"><img src=\"img/minus.png\" alt=\"\"></span><span class=\"text text-red\">Следить</span></a>\n              </div>\n            </div>\n          </div>\n        </div>\n        <ul class=\"card-menu\">\n          <li><a [routerLink]=\"['/exchange', exchange.name]\" fragment=\"general\" (click)=\"onAnchorClick()\">Общее</a></li>\n          <li><a [routerLink]=\"['/exchange', exchange.name]\" fragment=\"coins\" (click)=\"onAnchorClick()\">Доступные монеты ({{exchange.coins_count}})</a></li>\n          <li><a [routerLink]=\"['/exchange', exchange.name]\" fragment=\"output\" (click)=\"onAnchorClick()\">Способы вывода</a></li>\n          <li><a [routerLink]=\"['/exchange', exchange.name]\" fragment=\"exchanges-table\" (click)=\"onAnchorClick()\">Доступные пары ({{count_pairs}})</a></li>\n          <li><a [routerLink]=\"['/exchange', exchange.name]\" fragment=\"comment-block\" (click)=\"onAnchorClick()\">Комментарии ({{commentcount}})</a></li>\n          <li><a [routerLink]=\"['/exchange', exchange.name]\" fragment=\"news\" (click)=\"onAnchorClick()\">Новости</a></li>\n        </ul>\n        <div class=\"basic-information\" id=\"general\">\n          <div class=\"basic-information-wrap\">\n            <div class=\"left\">\n              <h3 class=\"ico-title\">Информация о бирже</h3>\n              <ul>\n                <li><span class=\"gray\">Официальный сайт:</span> <span class=\"black\"><a href=\"{{exchange.logo}}\">{{exchange.website}}</a></span></li>\n                <li><span class=\"gray\">Рефферальная система:</span><span class=\"black\">{{exchange.ref}}</span> </li>\n                <li><span class=\"gray\">Год основания биржи:</span><span class=\"black\">{{exchange.year}}</span></li>\n                <li><span class=\"gray\">Язык интерфейса:</span>\n                  <span class=\"black\">\n                    <p>{{exchange.languages}}</p>\n                    <!-- <div class=\"img-wrap-small\">\n                      <img src=\"img/rus-icon.png\" alt=\"\">\n                      <img src=\"img/usa-icon.png\" alt=\"\">\n                      <img src=\"img/usa-icon.png\" alt=\"\">\n                      <img src=\"img/usa-icon.png\" alt=\"\">\n                      <img src=\"img/usa-icon.png\" alt=\"\">\n                    </div> -->\n                  </span>\n                </li>\n              </ul>\n            </div>\n          </div>\n          <div class=\"text-wrap\">\n            <p>{{exchange.desc}}</p>\n          </div>\n        </div>\n        <div class=\"distribution-funds\" id=\"coins\">\n          <h3 class=\"ico-title\">Доступные монеты ({{exchange.coins_count}})</h3>\n          <ul *ngIf=\"exchange.coins\" >\n            <li *ngFor=\"let coin of exchange.coins\">\n              <div class=\"img-wrap\"><img src=\"img/coins-icon.png\" alt=\"\"></div><span>{{coin.name}} ({{coin.symbol}})</span></li>\n            \n          </ul>\n          <div class=\"footer-text\" id=\"output\">\n            <h3 class=\"ico-title\">Способы вывода средств</h3>\n            <p>{{exchange.exchange}}</p>\n          </div>\n        </div>\n        <div class=\"history-table exchanges-table\" id=\"exchanges-table\">\n          <div class=\"history-title-block exchanges-title-block\">\n            <h2>Доступные пары ({{count_pairs}})</h2>\n            <form><input type=\"text\" placeholder=\"Введите монету, например: BTC\" [(ngModel)]=\"filteredName\" name=\"filteredName\"></form>\n            <span>Обновлено: 10.11.2017 в 12:45</span>\n          </div>\n          <table>\n            <thead>\n              <tr>\n                <th width=\"22%\"><span>Пара</span></th>\n                <th width=\"15%\"><span>Курс</span></th>\n                <th width=\"16%\"><span>Рост за 24ч.</span></th>\n                <th width=\"18%\"><span>Объем BTC за 24ч.</span></th>\n                <th width=\"29%\"><span>Рост за 24 ч.</span></th>\n              </tr>\n            </thead>\n              <tbody style=\"position:relative; min-height: 160px;\" *ngIf=\"load == false\">\n              <tr *ngFor=\"let pair of pairs | orderBy: order:reverse:'case-insensitive' | filterName:filteredName:'currency'; let i = index\" [ngClass]=\"i > 14 ? 'hidden' : 'visible'\" >\n                <td>\n                  <span class=\"price\" >{{pair.currency}}</span>\n                </td>\n                <td>\n                  <span [ngStyle]=\"{ 'animation': animtype[i]+' 2s', '-webkit-animation': animtype[i]+' 2s'  }\"> {{pair.bid | number:'1.1-6'}}</span>\n                </td>\n                <td>\n                  <span [ngStyle]=\"{ 'animation': animtype[i]+' 2s', '-webkit-animation': animtype[i]+' 2s'  }\" >{{pair.percent | number:'1.2-8'}}%</span>\n                </td>\n                <td>\n                  <span>{{pair.volume | number:'1.2-5'}}</span>\n                </td>\n                <td>\n                  <span [ngStyle]=\"{ 'animation': animtype[i]+' 2s', '-webkit-animation': animtype[i]+' 2s'  }\" >{{pair.value | number:'1.2-8'}}%</span>\n                </td>\n              </tr>\n              \n            </tbody>\n          </table>\n            <div style=\"width: 50px; height: 50px; margin: 40px auto;\" *ngIf=\"load == true\">\n                <img src=\"/img/load.gif\" *ngIf=\"load == true\" style=\" width: 50px; height: 50px; text-align: center\">\n            </div>\n          <a href=\"#\" class=\"show-btn\" *ngIf=\"i > 10\">Показать еще пары</a>\n          </div>\n        <div class=\"comment-block\" id=\"comment-block\">\n                    <div class=\"comment-top\" *ngIf=\"user.id != undefined\">\n                                <h3>Добавить новый комментарий</h3>\n                                <form (ngSubmit)=\"submitComment(f, exchange.id, 'App\\\\Stock')\" #f=\"ngForm\">\n                                    <textarea ngModel name=\"body\" placeholder=\"Начните вводить комментарий...\"></textarea>\n                                    <button type=\"submit\">Добавить</button>\n                                </form>\n                    </div>\n                    <div class=\"comment-top\" *ngIf=\"user.id == undefined\">\n                        <h3>Комментарии ({{news.comments_count}})</h3>\n                        <p>Для того чтобы добавить свой комментарий - Вам необходимо <a href=\"#login-popup\" class=\"popup-link\">авторизоваться</a> или <a href=\"#check-popup\" class=\"popup-link\">пройти регистрацию.</a></p>\n                    </div>\n                    \n                    <div *ngIf=\"user.id != undefined\" style=\"background: none !important; border: none !important\" class=\"comment-top\">\n                        <h3 >Комментарии ({{commentcount}})</h3>\n                        <!-- <p>Для того чтобы добавить свой комментарий - Вам необходимо <a href=\"#login-popup\" class=\"popup-link\">авторизоваться</a> или <a href=\"#check-popup\" class=\"popup-link\">пройти регистрацию.</a></p> -->\n\n                    \n                    </div>\n                    <ul class=\"comment-items\">\n                        <!--  -->\n                        <li *ngFor=\"let item of comments\">\n                            <div class=\"left\">\n                                <div class=\"info\">\n                                    <div class=\"img-wrap\">\n                                        <img src=\"{{item.photo}}\" style=\"max-width: 35px; height: auto;\" alt=\"\">\n                                    </div>\n                                    <div class=\"text-wrap\">\n                                        <p>{{item.author}}</p>\n                                        <span>Добавлен {{item.created_at}}</span>\n                                    </div>\n                                </div>\n                                <p class=\"comment-text\">{{item.body}}</p>\n                            </div>\n                            <div class=\"right\">\n                                <div class=\"img-wrap\"></div>\n                                <div class=\"btn-block\">\n                                    <span class=\"number-green\">0</span>\n                                    <div class=\"buttons\">\n                                        <a href=\"#\" class=\"plus\">+</a>\n                                        <a href=\"#\" class=\"minus\">-</a>\n                                    </div>\n                                </div>\n                            </div>\n                        </li>\n\n                    </ul>\n          <!-- <a href=\"#\" class=\"show-comments\">Показать все комментарии (22)</a> -->\n        </div>\n        <div class=\"news-block\" id=\"news\">\n          <h2>#{{exchange.name}} новости по тегу</h2>\n          <div class=\"news-wrap\">\n                  <div class=\"news\" *ngFor=\"let item of news\">\n                    <div class=\"img\" [ngStyle]=\"{'background-image':'url('+item.photos[0].file+')' }\">\n                      <a href=\"#\" class=\"news-btn\">{{item.category.name}}</a>\n                      <div class=\"info\">\n                        <span class=\"date\">{{item.created_at}}</span>\n                      </div>\n                    </div>\n                    <div class=\"text\">\n                      <h3>\n                        <a routerLink=\"/posts/post/{{item.id}}\">{{item.title}}</a>\n                      </h3>\n                    </div>\n                    <div class=\"text2\">\n                      <p>{{item.desc | striphtml |excerpt:80}}</p>\n                    </div>\n                  </div>\n          </div>\n        </div>\n      </div>\n      <aside class=\"sidebar\">\n      <app-sidebar></app-sidebar>\n      </aside>\n    </div>\n  </section>\n  <div id=\"follow-popup\" class=\"popup mfp-with-anim mfp-hide\">\n  <div class=\"popup-body\">\n    <h2>Следить за {{selectedItem?.name}}</h2>\n    <p>Выберите портфель для сохранения {{selectedItem?.name}}</p>\n    <div class=\"checkbox-list\">\n      <div class=\"checkbox-wrap\" *ngFor=\"let portfolio of getUserPortfolio; let i = index\">\n        <input type=\"radio\" name=\"id\" [(ngModel)]=\"addPortfolio\" value=\"{{portfolio.id}}\" checked=\"checked\" id=\"{{i}}\">\n        <label for=\"{{i}}\">\n          <span></span>{{portfolio.name}}\n        </label>\n      </div>\n    </div>\n    <a href=\"#\" class=\"add-portfolio\">+Добавить портфель</a>\n    <form class=\"hidden\" #f=\"ngForm\">\n      <input type=\"text\" ngModel name=\"name\" required=\"\" placeholder=\"Введите название...\">\n      <button (click)=\"createPortfolio(f)\" type=\"submit\">Добавить</button>\n    </form>\n  </div>\n  <div class=\"save-block\">\n    <a (click)=\"submitPortfolio(selectedItem?.id, 'App\\\\Stock')\" class=\"save-settings\">Сохранить настройки</a>\n    <a href=\"#\" class=\"close-text\">Отменить и закрыть</a>\n  </div>\n</div>"

/***/ }),

/***/ "./angular/app/exchange/exchange.component.scss":
/***/ (function(module, exports) {

module.exports = ".comment-block {\n  margin-top: 30px; }\n\n.comment-block .comment-top {\n  border-bottom: 1px solid #e3e3e3;\n  background: #fff;\n  padding: 20px 19px 19px 20px; }\n\n.comment-block .comment-top h3 {\n  font-size: 18px;\n  font-weight: bold;\n  color: #000;\n  margin-bottom: 10px; }\n\n.comment-block .comment-top p {\n  font-size: 14px;\n  font-weight: bold;\n  color: #fa5252; }\n\n.comment-block .comment-top p a {\n  color: #fa5252;\n  text-decoration: underline; }\n\n.comment-block .comment-items {\n  padding: 0 22px 0 18px; }\n\n.comment-block .comment-items li {\n  padding: 20px 0;\n  border-bottom: 1px solid #a4a4a4;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n  -ms-flex-pack: justify;\n  justify-content: space-between;\n  width: 100%; }\n\n.comment-block .comment-items li:last-child {\n  border: none; }\n\n.comment-block .comment-items li.hidden {\n  display: none; }\n\n.comment-block .comment-items li .left .info {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n  -ms-flex-align: center;\n  align-items: center;\n  margin-bottom: 8px; }\n\n.comment-block .comment-items li .left .info .img-wrap {\n  width: 35px;\n  height: 35px;\n  margin-right: 12px; }\n\n.comment-block .comment-items li .left .info .img-wrap img {\n  width: 100%;\n  border-radius: 50%; }\n\n.comment-block .comment-items li .left .info .text-wrap p {\n  font-size: 11px;\n  font-weight: bold;\n  color: #000; }\n\n.comment-block .comment-items li .left .info .text-wrap span {\n  display: inline-block;\n  font-weight: bold;\n  font-size: 11px;\n  color: #777; }\n\n.comment-block .comment-items li .left .comment-text {\n  color: #000;\n  font-size: 16px; }\n\n.comment-block .comment-items li .right {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n  -ms-flex-align: center;\n  align-items: center;\n  -webkit-box-pack: justify;\n  -ms-flex-pack: justify;\n  justify-content: space-between;\n  min-width: 78px; }\n\n.comment-block .comment-items li .right .btn-block {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n  -ms-flex-align: center;\n  align-items: center; }\n\n.comment-block .comment-items li .right .btn-block .number-green {\n  font-size: 24px;\n  color: #8cc863; }\n\n.comment-block .comment-items li .right .btn-block .number-red {\n  font-size: 24px;\n  color: #fa5252; }\n\n.comment-block .comment-items li .right .btn-block .buttons {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n  -ms-flex-direction: column;\n  flex-direction: column;\n  margin-left: 9px; }\n\n.comment-block .comment-items li .right .btn-block .buttons a {\n  width: 20px;\n  height: 20px;\n  border-radius: 50%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n  -ms-flex-align: center;\n  align-items: center;\n  -webkit-box-pack: center;\n  -ms-flex-pack: center;\n  justify-content: center; }\n\n.comment-block .comment-items li .right .btn-block .buttons .plus {\n  margin-bottom: 4px;\n  color: #fff;\n  font-size: 18px;\n  background: #8cc863; }\n\n.comment-block .comment-items li .right .btn-block .buttons .plus:hover {\n  background: #c0deac; }\n\n.comment-block .comment-items li .right .btn-block .buttons .minus {\n  color: #fff;\n  font-size: 18px;\n  background: #fa5252; }\n\n.comment-block .comment-items li .right .btn-block .buttons .minus:hover {\n  background: #f8a3a3; }\n\n.comment-block .show-comments {\n  width: 100%;\n  height: 42px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n  -ms-flex-align: center;\n  align-items: center;\n  -webkit-box-pack: center;\n  -ms-flex-pack: center;\n  justify-content: center;\n  font-weight: bold;\n  font-size: 14px;\n  margin-top: -1px;\n  color: #383c46;\n  background: #c1c1c1; }\n\n.comment-block .show-comments:hover {\n  background: #383c46;\n  color: #fff; }\n\n.comment-block .total-comments {\n  font-size: 18px;\n  font-weight: bold;\n  color: #000;\n  margin-left: 18px;\n  margin-top: 24px; }\n\n.comment-wrap {\n  margin-top: -15px;\n  margin-bottom: 25px; }\n\n.comment-items li:last-child {\n  border: none; }\n\n.comment-top {\n  padding: 18px 25px 21px 15px; }\n\n.comment-top form textarea {\n  height: 54px;\n  border: 1px solid #e4e4e4;\n  width: 100%;\n  resize: none;\n  font-size: 14px;\n  color: #949494;\n  padding: 10px;\n  margin-bottom: 10px; }\n\n.comment-top form textarea::-webkit-input-placeholder {\n  color: #949494; }\n\n.comment-top form textarea::-moz-placeholder {\n  color: #949494; }\n\n.comment-top form textarea:-ms-input-placeholder {\n  color: #949494; }\n\n.comment-top form textarea:-moz-placeholder {\n  color: #949494; }\n\n.comment-top form textarea:focus {\n  outline: none; }\n\n.comment-top form button {\n  height: 34px;\n  background: #f58c1b;\n  color: #fff;\n  font-size: 14px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n  -ms-flex-align: center;\n  align-items: center;\n  padding: 0px 17px;\n  border: none;\n  font-weight: bold; }\n\n.comment-block .comment-items {\n  padding: 0 22px 0 18px; }\n\n.comment-block .comment-items li {\n  padding: 20px 0;\n  border-bottom: 1px solid #a4a4a4;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n  -ms-flex-pack: justify;\n  justify-content: space-between;\n  width: 100%; }\n\n.comment-block .comment-items li:last-child {\n  border: none; }\n\n.comment-block .comment-items li.hidden {\n  display: none; }\n\n.comment-block .comment-items li .left .info {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n  -ms-flex-align: center;\n  align-items: center;\n  margin-bottom: 8px; }\n\n.comment-block .comment-items li .left .info .img-wrap {\n  width: 35px;\n  height: 35px;\n  margin-right: 12px; }\n\n.comment-block .comment-items li .left .info .img-wrap img {\n  width: 100%;\n  border-radius: 50%; }\n\n.comment-block .comment-items li .left .info .text-wrap p {\n  font-size: 11px;\n  font-weight: bold;\n  color: #000; }\n\n.comment-block .comment-items li .left .info .text-wrap span {\n  display: inline-block;\n  font-weight: bold;\n  font-size: 11px;\n  color: #777; }\n\n.comment-block .comment-items li .left .comment-text {\n  color: #000;\n  font-size: 16px; }\n\n.comment-block .comment-items li .right {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n  -ms-flex-align: center;\n  align-items: center;\n  -webkit-box-pack: justify;\n  -ms-flex-pack: justify;\n  justify-content: space-between;\n  min-width: 78px; }\n\n.comment-block .comment-items li .right .btn-block {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n  -ms-flex-align: center;\n  align-items: center; }\n\n.comment-block .comment-items li .right .btn-block .number-green {\n  font-size: 24px;\n  color: #8cc863; }\n\n.comment-block .comment-items li .right .btn-block .number-red {\n  font-size: 24px;\n  color: #fa5252; }\n\n.comment-block .comment-items li .right .btn-block .buttons {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n  -ms-flex-direction: column;\n  flex-direction: column;\n  margin-left: 9px; }\n\n.comment-block .comment-items li .right .btn-block .buttons a {\n  width: 20px;\n  height: 20px;\n  border-radius: 50%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n  -ms-flex-align: center;\n  align-items: center;\n  -webkit-box-pack: center;\n  -ms-flex-pack: center;\n  justify-content: center; }\n\n.comment-block .comment-items li .right .btn-block .buttons .plus {\n  margin-bottom: 4px;\n  color: #fff;\n  font-size: 18px;\n  background: #8cc863; }\n\n.comment-block .comment-items li .right .btn-block .buttons .plus:hover {\n  background: #c0deac; }\n\n.comment-block .comment-items li .right .btn-block .buttons .minus {\n  color: #fff;\n  font-size: 18px;\n  background: #fa5252; }\n\n.comment-block .comment-items li .right .btn-block .buttons .minus:hover {\n  background: #f8a3a3; }\n\n.comment-block .show-comments {\n  width: 100%;\n  height: 42px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n  -ms-flex-align: center;\n  align-items: center;\n  -webkit-box-pack: center;\n  -ms-flex-pack: center;\n  justify-content: center;\n  font-weight: bold;\n  font-size: 14px;\n  margin-top: -1px;\n  color: #383c46;\n  background: #c1c1c1; }\n\n.comment-block .show-comments:hover {\n  background: #383c46;\n  color: #fff; }\n\n.comment-block .total-comments {\n  font-size: 18px;\n  font-weight: bold;\n  color: #000;\n  margin-left: 18px;\n  margin-top: 24px; }\n\n.analytics-block .comment-block {\n  margin-top: 0;\n  margin-bottom: 28px;\n  border-top: 9px solid #e5e5e5;\n  border-bottom: 9px solid #e5e5e5; }\n\n.analytics-block .comment-block .comment-top {\n  border: none;\n  padding: 0;\n  padding-top: 28px;\n  background-color: transparent; }\n\n.analytics-block .comment-block .comment-items {\n  padding: 0;\n  padding-bottom: 8px; }\n\n.analytics-block .comment-block .comment-items li {\n  border: none; }\n\n.innertext {\n  margin-bottom: 20px; }\n\n.blockquote-block {\n  border: 3px solid #e5e5e5;\n  padding: 35px;\n  margin-bottom: 25px; }\n\n@media (max-width: 600px) {\n  .blockquote-block {\n    padding: 30px; } }\n\n.blockquote-block p {\n  text-align: center;\n  font-size: 24px;\n  color: #000;\n  line-height: 28px; }\n\n@media (max-width: 600px) {\n  .blockquote-block p {\n    font-size: 16px;\n    line-height: 20px; }\n  .blockquote-block p br {\n    display: none; } }\n\n@media (max-width: 600px) {\n  .blockquote-block p img {\n    position: absolute; }\n  .blockquote-block p img:first-child {\n    left: 25px; } }\n\n.rating {\n  border: none;\n  float: left; }\n\n.rating > input {\n  display: none; }\n\n.rating > label:before {\n  margin: 1px;\n  font-size: 1.25em;\n  font-family: FontAwesome;\n  display: inline-block;\n  content: \"\\f005\"; }\n\n.rating > .half:before {\n  content: \"\\f089\";\n  position: absolute; }\n\n.rating > label {\n  color: #ddd;\n  float: right; }\n\n.rating > input:checked ~ label,\n.rating:not(:checked) > label:hover,\n.rating:not(:checked) > label:hover ~ label {\n  color: #f6b10b; }\n\n.rating > input:checked + label:hover,\n.rating > input:checked ~ label:hover,\n.rating > label:hover ~ input:checked ~ label,\n.rating > input:checked ~ label:hover ~ label {\n  color: #f6b10b; }\n\n.exchanges-card-wrap .project-info-content .info {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n  -ms-flex-direction: column;\n  flex-direction: column; }\n\n.exchanges-card-wrap .project-info-content .info .last-updated {\n  color: #848484 !important; }\n\n.exchanges-card-wrap .project-info-content .info .rating-wrap {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n  -ms-flex-align: center;\n  align-items: center;\n  margin-bottom: 7px; }\n\n@media (max-width: 600px) {\n  .exchanges-card-wrap .project-info-content .info .rating-wrap {\n    -webkit-box-pack: center;\n    -ms-flex-pack: center;\n    justify-content: center; } }\n\n.exchanges-card-wrap .project-info-content .info .rating-wrap span {\n  font-size: 14px;\n  color: #f58c1b;\n  display: inline-block;\n  margin-left: 7px; }\n\n.exchanges-card-wrap #general {\n  margin-bottom: 13px;\n  padding-bottom: 20px; }\n\n.exchanges-card-wrap #general .basic-information-wrap {\n  margin-bottom: 24px; }\n\n.exchanges-card-wrap #general .basic-information-wrap .left ul li:last-child {\n  margin-top: 22px; }\n\n.exchanges-card-wrap #coins ul {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: wrap;\n  flex-wrap: wrap;\n  width: 100%;\n  margin: 15px 0; }\n\n.exchanges-card-wrap #coins ul li {\n  margin-bottom: 10px;\n  width: 25%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n  -ms-flex-align: center;\n  align-items: center; }\n\n@media (max-width: 600px) {\n  .exchanges-card-wrap #coins ul li {\n    width: 50%; } }\n\n@media (max-width: 400px) {\n  .exchanges-card-wrap #coins ul li {\n    width: 100%; } }\n\n.exchanges-card-wrap #coins ul li .img-wrap {\n  margin-right: 8px;\n  width: 30px;\n  height: 30px; }\n\n.exchanges-card-wrap #coins ul li .img-wrap img {\n  width: 100%; }\n\n.exchanges-card-wrap #coins ul li span {\n  font-size: 14px;\n  color: #010a3b; }\n\n.exchanges-card-wrap #coins .footer-text p {\n  font-size: 14px;\n  color: #010a3b;\n  margin-top: 10px; }\n\n@media (max-width: 600px) {\n  .exchanges-card-wrap .exchanges-table {\n    overflow-x: auto;\n    max-width: calc(880px + 28px);\n    margin-left: -14px; } }\n\n@media (max-width: 600px) {\n  .exchanges-card-wrap .exchanges-table table {\n    width: 880px;\n    overflow-x: auto; } }\n\n.exchanges-card-wrap .exchanges-table table .green {\n  color: #529127; }\n\n.exchanges-card-wrap .exchanges-table table .red {\n  color: #f00; }\n\n.exchanges-card-wrap .exchanges-table .show-btn {\n  width: 100%;\n  height: 42px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n  -ms-flex-align: center;\n  align-items: center;\n  -webkit-box-pack: center;\n  -ms-flex-pack: center;\n  justify-content: center;\n  font-weight: bold;\n  font-size: 14px;\n  color: #383c46;\n  background: #c1c1c1;\n  margin-top: -1px; }\n\n@media (max-width: 600px) {\n  .exchanges-card-wrap .exchanges-table .show-btn {\n    display: none; } }\n\n.exchanges-card-wrap .exchanges-table .show-btn:hover {\n  background: #383c46;\n  color: #fff; }\n\n.exchanges-title-block {\n  padding-right: 23px; }\n\n@media (max-width: 600px) {\n  .exchanges-title-block {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    width: 880px;\n    overflow-x: auto; } }\n\n.exchanges-title-block h2 {\n  margin-right: 15px; }\n\n.exchanges-title-block form {\n  min-width: 230px;\n  height: 27px;\n  border-radius: 22px; }\n\n.exchanges-title-block form input {\n  width: 100%;\n  height: 100%;\n  border-radius: 22px;\n  border: none;\n  font-size: 12px;\n  color: #737373;\n  padding: 0 15px; }\n\n.exchanges-title-block form input::-webkit-input-placeholder {\n  color: #737373; }\n\n.exchanges-title-block form input::-moz-placeholder {\n  color: #737373; }\n\n.exchanges-title-block form input:-ms-input-placeholder {\n  color: #737373; }\n\n.exchanges-title-block form input:-moz-placeholder {\n  color: #737373; }\n\n.exchanges-title-block span {\n  margin-left: auto;\n  font-size: 12px;\n  color: #545454; }\n\n.exchanges-card-wrap #news {\n  margin-top: 30px; }\n\n.exchanges-card-wrap #news h2 {\n  margin-left: 22px;\n  font-size: 18px;\n  font-weight: bold;\n  color: #000; }\n\n@media (max-width: 600px) {\n  .exchanges-card-wrap #news.news-block {\n    display: none; } }\n\n.exchanges-card-wrap #news.news-block h3 {\n  font-size: 18px;\n  color: #000;\n  font-weight: bold; }\n\n.exchanges-card-wrap #news.news-block .news-wrap {\n  width: 100%;\n  margin-right: -14px; }\n\n.exchanges-card-wrap #news.news-block .news-wrap .news {\n  width: 281px;\n  margin-right: 14px;\n  display: inline-block; }\n\n.exchanges-card-wrap #news.news-block .news-wrap .news:nth-child(3n) {\n  margin-right: 0; }\n\n.exchanges-card-wrap #comment-block {\n  margin-top: 15px; }\n"

/***/ }),

/***/ "./angular/app/exchange/exchange.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExchangeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__ = __webpack_require__("./node_modules/rxjs/_esm5/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__order_pipe_ngx_order_pipe__ = __webpack_require__("./angular/app/order-pipe/ngx-order.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__stocks_service__ = __webpack_require__("./angular/app/stocks.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__auth_service__ = __webpack_require__("./angular/app/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// import { interval } from 'rxjs/Observable/interval';





var ExchangeComponent = (function () {
    function ExchangeComponent(http, stockService, router, orderPipe, route, auth) {
        this.http = http;
        this.stockService = stockService;
        this.router = router;
        this.orderPipe = orderPipe;
        this.route = route;
        this.auth = auth;
        this.order = 'bid';
        this.reverse = true;
        this.name = '';
        this.comments = [];
        this.commentcount = 0;
        this.pairs = [];
        this.Observable = __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__["a" /* Observable */];
        this.stocks = [];
        this.news = [];
        this.count_pairs = 0;
        this.filteredName = '';
        this.animtype = [];
        this.load = true;
        this.portfoliosInfo = [];
        this.getUserPortfolio = [];
        this.checkPortfolio = false;
        this.name = route.snapshot.params['name'];
    }
    ExchangeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.auth.getUser().subscribe(function (response) { _this.getUserPortfolio = response['portfolio']; console.log(_this.getUserPortfolio); });
        this.router.events.subscribe(function (s) {
            if (s instanceof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* NavigationEnd */]) {
                var tree = _this.router.parseUrl(_this.router.url);
                if (tree.fragment) {
                    var element = document.querySelector("#" + tree.fragment);
                    if (element) {
                        element.scrollIntoView(element);
                    }
                }
            }
        });
        this.stockService.getExchange(this.name).subscribe(function (res) {
            _this.exchange = res;
            _this.commentcount = _this.exchange.comments_count;
            _this.comments = _this.exchange.comments;
            for (var _a = 0, _b = _this.exchange.categories; _a < _b.length; _a++) {
                var item = _b[_a];
                var newsUrl = "/postsbycat/" + item.id;
                var newsInfo = _this.http.get(newsUrl).publishReplay(1).refCount();
                newsInfo.subscribe(function (response) {
                    for (var _a = 0, _b = response['news']; _a < _b.length; _a++) {
                        var news_item = _b[_a];
                        _this.news.push(news_item);
                    }
                    console.log(_this.news);
                });
            }
        });
        var userpath = "/angular/user";
        var userinfo = this.http.get(userpath);
        userinfo.subscribe(function (response) {
            _this.user = {
                id: response.id,
                name: response.name,
                email: response.email,
                photo_id: response.photo_id,
                role_id: response.role_id
            };
        });
        this.stockService.getExchangePairs(this.name).subscribe(function (res) {
            _this.pairs = res;
            _this.load = false;
            _this.count_pairs = _this.pairs.length;
        });
        this.stock_data = __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__["a" /* Observable */].interval(1000).concatMap(function () { return _this.stockService.getExchangePairs(_this.name); })
            .map(function (res) {
            for (var _i = 0; _i < _this.pairs.length; ++_i) {
                _this.animtype[_i] = '';
                if (_this.pairs[_i].value > res[_i]['value']) {
                    _this.animtype[_i] = 'greencolor';
                }
                else if (_this.pairs[_i].value < res[_i]['value']) {
                    _this.animtype[_i] = 'redcolor';
                }
                else {
                    _this.animtype[_i] = '';
                }
            }
            _this.pairs = res;
            _this.count_pairs = _this.pairs.length;
        }).subscribe();
    };
    ExchangeComponent.prototype.submitComment = function (form, post_id, type) {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["c" /* HttpHeaders */]({ 'Content-type': 'Application/json ' });
        this.http.post('/storecomment', {
            'post_id': post_id,
            'body': form.value.body,
            'commentable_id': post_id,
            'commentable_type': type
        }, { headers: headers }).subscribe(function (response) {
            _this.comments.unshift({
                id: response['id'],
                email: response['email'],
                author: response['author'],
                body: response['body'],
                commentable_id: response['commentable_id'],
                photo: response['photo']
            });
            _this.commentcount = _this.commentcount + 1;
        }, function (error) { return console.log(error); });
        form.reset();
    };
    ExchangeComponent.prototype.onAnchorClick = function () {
        this.route.fragment.subscribe(function (f) {
            var element = document.querySelector("#" + f);
            if (element)
                element.scrollIntoView(element);
        });
    };
    ExchangeComponent.prototype.createPortfolio = function (form) {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["c" /* HttpHeaders */]({ 'Content-type': 'Application/json ' });
        this.http.post('/angular/userportfolio/create', { 'name': form.value.name, 'user_portfolio_type_id': 1 }, { headers: headers })
            .subscribe(function (response) { _this.getUserPortfolio.push(response); form.reset(); }, function (error) { return console.log(error); });
    };
    ExchangeComponent.prototype.submitPortfolio = function (post_id, type) {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["c" /* HttpHeaders */]({ 'Content-type': 'Application/json ' });
        this.http.post('/storeportfolio', {
            'user_portfollable_id': post_id,
            'user_portfolio_id': this.addPortfolio,
            'user_portfollable_type': type
        }, { headers: headers }).subscribe(function (response) { return _this.router.navigate(['/profile/portfolio']); }, function (error) { return console.log(error); });
    };
    ExchangeComponent.prototype.callCheck = function (id) {
        if (this.checkInPortfolio(id)) {
            this.checkPortfolio = true;
        }
        this.checkPortfolio = false;
    };
    ExchangeComponent.prototype.checkInPortfolio = function (id) {
        if (this.portfoliosInfo == undefined) {
            return false;
        }
        for (var _a = 0, _b = this.portfoliosInfo; _a < _b.length; _a++) {
            var item = _b[_a];
            for (var _c = 0, item_1 = item; _c < item_1.length; _c++) {
                var it = item_1[_c];
                if (it.id) {
                    if (it.id == id) {
                        return true;
                    }
                }
            }
        }
        return false;
    };
    ExchangeComponent.prototype.checkAuth = function () {
        if (this.auth.getUserInfo()) {
            return true;
        }
        return (false);
    };
    ExchangeComponent.prototype.removePortfolio = function (id) {
        var _this = this;
        var removeUrl = '/angular/userportfolio/stocks/remove/';
        var removePost = this.http.get(removeUrl + id);
        removePost.subscribe(function (response) {
            _this.portfolioInfo.subscribe(function (res) {
                if (res['error']) {
                    // code...
                }
                else {
                    _this.portfoliosInfo = res['stocks'];
                }
            }),
                _this.checkInPortfolio(id);
        }, function (error) { return console.log(error); });
    };
    ExchangeComponent.prototype.ngAfterViewInit = function () {
        try {
            document.querySelector('#' + this.fragment).scrollIntoView();
        }
        catch (e) { }
    };
    return ExchangeComponent;
}());
ExchangeComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-exchange',
        template: __webpack_require__("./angular/app/exchange/exchange.component.html"),
        styles: [__webpack_require__("./angular/app/exchange/exchange.component.scss")],
        providers: [__WEBPACK_IMPORTED_MODULE_5__stocks_service__["a" /* StocksService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["a" /* HttpClient */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_5__stocks_service__["a" /* StocksService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__stocks_service__["a" /* StocksService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__order_pipe_ngx_order_pipe__["a" /* OrderPipe */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__order_pipe_ngx_order_pipe__["a" /* OrderPipe */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_6__auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__auth_service__["a" /* AuthService */]) === "function" && _f || Object])
], ExchangeComponent);

var _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=exchange.component.js.map

/***/ }),

/***/ "./angular/app/exchanges/exchanges.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"crypto-active exchanges\">\n    <div class=\"wrapper\">\n      <div class=\"select-block\">\n      <h1 class=\"table-title-big\">Биржи<span>{{count}}</span><a href=\"balant-mining-filter.html\"><img src=\"img/mining-icon.png\" alt=\"\"></a></h1>\n\n        <div class=\"filters\">\n          <!-- <div class=\"select-wrap\">\n            <div class=\"select\">\n              <span class=\"text\">Пара: Все</span>\n              <a href=\"#\"><img src=\"img/select-drop-icon.png\" alt=\"\"></a>\n            </div>\n            <ul class=\"select-items\">\n              <li><a href=\"#\">Пара: Все</a></li>\n              <li><a href=\"#\">Пара: Все</a></li>\n              <li><a href=\"#\">Пара: Все</a></li>\n            </ul>\n          </div> -->\n          <div class=\"select-wrapper1\" id=\"select-algo\">\n              <div class=\"select\">\n               <span class=\"text\"><span style=\"padding-top: 12px;\">{{language !='' ? language : 'Язык: Все'}}</span></span>\n               <a href=\"#\"><img src=\"/img/select-drop-icon.png\" alt=\"\"></a>\n             </div>\n             <ul class=\"select-items\">\n               <li (click)=\"language=''\"> <a >Язык: Все</a></li>\n               <li *ngFor=\"let item of exchanges\" (click)=\"language=item?.languages\"><a >{{item?.languages}}</a></li>\n               <!-- <li (click)=\"setOrder('percentage')\"><a >Фильтрация: По сумме собранных средств</a></li> -->\n             </ul>\n              </div>\n        </div>\n      </div>\n      <div class=\"table-wrap\">\n        <table class=\"table crypto-table\">\n          <thead>\n            <tr>\n              <th width=\"4.4%\" [class.active]=\"order === 'id'\"\n        (click)=\"setOrder('id')\">\n                <span>#</span>\n                <img src=\"img/arr-top-table.png\" alt=\"\">\n              </th>\n              <th width=\"12.9%\" [class.active]=\"order === 'name'\"\n        (click)=\"setOrder('name')\">\n                <span>Название</span>\n                <img src=\"img/arr-top-table.png\" alt=\"\">\n              </th>\n              <th width=\"10%\" [class.active]=\"order === 'usd'\"\n        (click)=\"setOrder('usd')\">\n                <span>Объем ( $ за 24 ч.)</span>\n                <img src=\"img/arr-top-table.png\" alt=\"\">\n              </th>\n              <th width=\"10.8%\" [class.active]=\"order === 'btc'\"\n        (click)=\"setOrder('btc')\">\n                <span>Объем BTC (за 24ч.)</span>\n                <img src=\"img/arr-top-table.png\" alt=\"\">\n              </th>\n              <th width=\"7.1%\" >\n                <span>Кол-во пар</span>\n                <img src=\"img/arr-top-table.png\" alt=\"\">\n              </th>\n              <th width=\"12.5%\" [class.active]=\"order === 'languages'\"\n        (click)=\"setOrder('languages')\">\n                <span>Поддержка языков</span>\n                <img src=\"img/arr-top-table.png\" alt=\"\">\n              </th>\n              <th width=\"4.7%\" [class.active]=\"order === 'year'\"\n        (click)=\"setOrder('year')\">\n                <span>Год</span>\n                <img src=\"img/arr-top-table.png\" alt=\"\">\n              </th>\n              <th width=\"17%\" [class.active]=\"order === 'country'\"\n        (click)=\"setOrder('country')\">\n                <span>Страна</span>\n                <img src=\"img/arr-top-table.png\" alt=\"\">\n              </th>\n              <th width=\"20.6%\">\n                <span>Рейтинг</span>\n                <img src=\"img/arr-top-table.png\" alt=\"\">\n              </th>\n            </tr>\n          </thead>\n\n          <tbody *ngIf=\"load == false\">\n\n            <tr *ngFor=\"let item of exchanges; let i = index\">\n              <td>\n                <span>{{i}}</span>\n              </td>\n              <td>\n                <a >\n                  <div class=\"img-wrap\">\n                    <img src=\"/images/{{item.logo}}\" style=\"width: 100%; height: 100%;\" alt=\"\">\n                  </div>\n                  <span>{{item.name}}</span>\n                </a>\n              </td>\n              <td>\n                <span class=\"amount-bold\" *ngIf=\"exchange_volumes[item.name] != undefined\">{{exchange_volumes[item.name].usd | number:'1.0-3'}}</span>\n              </td>\n              <td>\n                <span *ngIf=\"exchange_volumes[item.name] != undefined\">{{exchange_volumes[item.name].btc | number:'1.0-3'}}</span>\n              </td>\n              <td>\n\n                <span>{{item.count}}</span>\n              </td>\n              <td>\n                <div class=\"img-wrap-small\">\n                  <!-- <img src=\"img/rus-icon.png\" alt=\"\">\n                  <img src=\"img/usa-icon.png\" alt=\"\">\n                  <img src=\"img/usa-icon.png\" alt=\"\">\n                  <img src=\"img/usa-icon.png\" alt=\"\">\n                  <img src=\"img/usa-icon.png\" alt=\"\">\n                  <span class=\"text\">+5</span> -->\n                  {{item.languages}}\n                </div>\n              </td>\n              <td>\n                <span class=\"year\">{{item.year}}</span>\n              </td>\n              <td>\n                <span class=\"sity\">{{item.country}}</span>\n              </td>\n              <td>\n                <div class=\"difference\">\n                  <!-- <div class=\"stars-wrap\">\n                    <img src=\"img/stars.png\" alt=\"\">\n                    <span>135</span>\n                  </div> -->\n                  <p class=\"no-ratings\">Оценок еще нет</p>\n                  <div class=\"buttons\">\n                    <button class=\"right\" [routerLink]=\"['/exchange', item.name]\">></button>\n                    <button class=\"plus\">+</button>\n                  </div>\n                </div>\n              </td>\n            </tr>\n          </tbody>\n        </table>\n        <div style=\"width: 50px; height: 50px; margin: 40px auto;\">\n          <img src=\"/img/load.gif\" *ngIf=\"load == true\" style=\" width: 50px; height: 50px; text-align: center\">\n        </div>\n      </div>\n     <!--  <div class=\"table-wrap-mobile\">\n        <table class=\"table\">\n          <thead>\n            <th width=\"43%\">\n              <span>Название</span>\n            </th>\n            <th width=\"43%\">\n              <span>Объем</span>\n            </th>\n            <th width=\"14%\">\n              <span>Пар</span>\n            </th>\n          </thead>\n          <tbody>\n            \n          </tbody>\n        </table>\n        <a href=\"#\" class=\"show-exchanges\">Показать еще биржи</a>\n      </div>\n      <a href=\"#\" class=\"show-more\">Показать еще</a> -->\n    </div>\n  </section>"

/***/ }),

/***/ "./angular/app/exchanges/exchanges.component.scss":
/***/ (function(module, exports) {

module.exports = ".select-wrapper1 {\n  width: 144px;\n  position: relative;\n  margin-right: 14px; }\n  .select-wrapper1 .select {\n    border-radius: 18px;\n    background: #fff;\n    height: 40px;\n    padding: 0 18px 0 13px;\n    cursor: pointer;\n    -webkit-box-shadow: 0px 5px 30px 0px rgba(0, 0, 1, 0.1);\n    box-shadow: 0px 5px 30px 0px rgba(0, 0, 1, 0.1); }\n  .select-wrapper1 .select .text {\n      margin: 0;\n      margin-right: 45px;\n      color: #666;\n      font-size: 14px; }\n  .select-wrapper1 .select.open {\n      border-bottom-left-radius: 0;\n      border-bottom-right-radius: 0; }\n  .select-wrapper1 .select.open > a {\n        -webkit-transform: rotate(-180deg);\n                transform: rotate(-180deg); }\n  .select-wrapper1 .select-items {\n    background: #fff;\n    position: absolute;\n    left: 0;\n    top: 40px;\n    width: 100%;\n    border-bottom-left-radius: 18px;\n    border-bottom-right-radius: 18px;\n    display: none; }\n  .select-wrapper1 .select-items li {\n      color: #666;\n      font-size: 14px;\n      padding: 10px 13px;\n      background: #fff;\n      display: block; }\n  .select-wrapper1 .select-items li:hover {\n        background: #dbdbdb; }\n  .select-wrapper1 .select-items.open {\n      display: block; }\n  .open {\n  display: block; }\n"

/***/ }),

/***/ "./angular/app/exchanges/exchanges.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExchangesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__order_pipe_ngx_order_pipe__ = __webpack_require__("./angular/app/order-pipe/ngx-order.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__stocks_service__ = __webpack_require__("./angular/app/stocks.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__ = __webpack_require__("./node_modules/rxjs/_esm5/Rx.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ExchangesComponent = (function () {
    function ExchangesComponent(http, stockService, orderPipe) {
        this.http = http;
        this.stockService = stockService;
        this.orderPipe = orderPipe;
        this.exchanges = [];
        this.count = 0;
        this.volumes = [];
        this.exchange_volumes = [];
        this.language = '';
        this.reverse = true;
        this.order = 'id';
        this.pairs_count = [];
        this.alive = true;
        this.stocks = [];
        this.load = true;
    }
    ExchangesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.stockService.getExchanges().subscribe(function (res) {
            _this.exchanges = res;
            _this.count = _this.exchanges.length;
            // for(let item of this.exchanges) {
            //     item.load = false;
            //     this.stocks.push(
            //     this.stockService.getExchangePairs(item.name).takeWhile(() => this.alive).map(
            //     pairs => {item.count=pairs.length; item.load = true;}
            // )
            // );
            // }
            //   this.observale_pairs = Observable.from(this.stocks)
            //       .concatAll()
            //       .subscribe();
        });
        this.stockService.getVolumes().subscribe(function (res) {
            _this.load = false;
            _this.volumes = res;
            for (var _i = 0, _a = _this.volumes; _i < _a.length; _i++) {
                var item = _a[_i];
                _this.exchange_volumes[item.name] = {
                    'btc': item.btc,
                    'usd': item.usd
                };
            }
        });
        this.volume_data = __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__["a" /* Observable */].interval(2000).concatMap(function () { return _this.stockService.getVolumes(); })
            .map(function (response) {
            _this.volumes = response;
        }).subscribe(function () {
            for (var _i = 0, _a = _this.volumes; _i < _a.length; _i++) {
                var item = _a[_i];
                _this.exchange_volumes[item.name] = {
                    'btc': item.btc,
                    'usd': item.usd
                };
            }
        });
    };
    ExchangesComponent.prototype.setOrder = function (value) {
        if (this.order === value) {
            this.reverse = !this.reverse;
        }
        this.order = value;
    };
    ExchangesComponent.prototype.ngOnDestroy = function () {
        this.alive = false;
        this.volume_data.unsubscribe();
        // this.observale_pairs.unsubscribe();
    };
    return ExchangesComponent;
}());
ExchangesComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-exchanges',
        template: __webpack_require__("./angular/app/exchanges/exchanges.component.html"),
        styles: [__webpack_require__("./angular/app/exchanges/exchanges.component.scss")],
        providers: [__WEBPACK_IMPORTED_MODULE_3__stocks_service__["a" /* StocksService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__stocks_service__["a" /* StocksService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__stocks_service__["a" /* StocksService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__order_pipe_ngx_order_pipe__["a" /* OrderPipe */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__order_pipe_ngx_order_pipe__["a" /* OrderPipe */]) === "function" && _c || Object])
], ExchangesComponent);

var _a, _b, _c;
//# sourceMappingURL=exchanges.component.js.map

/***/ }),

/***/ "./angular/app/exmo/exmo.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./angular/app/exmo/exmo.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n<div class=\"row\">\n\t<h3 style=\"font-weight: bold\">Exmo BTC/USD</h3><br>\n\t<h3>${{arith(exmodata?.buy_price,bittrex?.last,wex?.last)}}</h3>\n<table class=\"table\">\n\t<tr>\n\t\t<th>Биржа</th>\n\t\t<th>High</th>\n\t\t<th>Low</th>\n\t\t<th>Vol</th>\n\t\t<th>Цена покупки</th>\n\t</tr>\n\t<tr>\n\t\t<td>Exmo</td>\n\t\t<td>${{exmodata?.high}}</td>\n\t\t<td>${{exmodata?.low}}</td>\n\t\t<td>${{exmodata?.vol}}</td>\n\t\t<td>${{exmodata?.buy_price}}</td>\n\t</tr>\n\t<tr>\n\t\t<td>Bittrex</td>\n\t\t<td>${{bittrex?.high}}</td>\n\t\t<td>${{bittrex?.low}}</td>\n\t\t<td>${{bittrex?.vol}}</td>\n\t\t<td>${{bittrex?.last}}</td>\n\t</tr>\n\n\t<tr>\n\t\t<td>Poloniex</td>\n\t\t<td>${{poloniex?.high}}</td>\n\t\t<td>${{poloniex?.low}}</td>\n\t\t<td><!-- ${{poloniex?.vol}} --></td>\n\t\t<td>${{poloniex?.last}}</td>\n\t</tr>\n\t<tr>\n\t\t<td>Okex</td>\n\t\t<td>${{okex?.high}}</td>\n\t\t<td>${{okex?.low}}</td>\n\t\t<td><!-- ${{poloniex?.vol}} --></td>\n\t\t<td>${{okex?.last}}</td>\n\t</tr>\n\t<tr>\n\t\t<td>Wex</td>\n\t\t<td>${{wex?.high}}</td>\n\t\t<td>${{wex?.low}}</td>\n\t\t<td>${{wex?.vol}}</td>\n\t\t<td>${{wex?.last}}</td>\n\t</tr>\n\t<!-- <tr>\n\t\t<td>Bitfinex</td>\n\t\t<td>${{bitfinex?.high}}</td>\n\t\t<td>${{bitfinex?.low}}</td>\n\t\t<td>${{bitfinex?.baseVolume}}</td>\n\t\t<td>${{bitfinex?.last}}</td>\n\t</tr> -->\n\t<tr>\n\t\t<td>HitBTC</td>\n\t\t<td>${{hitbtc?.high}}</td>\n\t\t<td>${{hitbtc?.low}}</td>\n\t\t<td>${{hitbtc?.baseVolume}}</td>\n\t\t<td>${{hitbtc?.last}}</td>\n\t</tr>\n\t<tr>\n\t\t<td>Kraken</td>\n\t\t<td>${{kraken?.high}}</td>\n\t\t<td>${{kraken?.low}}</td>\n\t\t<td>${{kraken?.baseVolume}}</td>\n\t\t<td>${{kraken?.last}}</td>\n\t</tr>\n\t<tr>\n\t\t<td>Gdax</td>\n\t\t<td>${{gdax?.high}}</td>\n\t\t<td>${{gdax?.low}}</td>\n\t\t<td>${{gdax?.baseVolume}}</td>\n\t\t<td>${{gdax?.last}}</td>\n\t</tr>\n\t<tr>\n\t\t<td>BitFlyer</td>\n\t\t<td>${{bitflyer?.high}}</td>\n\t\t<td>${{bitflyer?.low}}</td>\n\t\t<td>${{bitflyer?.baseVolume}}</td>\n\t\t<td>${{bitflyer?.last}}</td>\n\t</tr>\n\n\t<tr>\n\t\t<td>Bitstamp</td>\n\t\t<td>${{bitstamp?.high}}</td>\n\t\t<td>${{bitstamp?.low}}</td>\n\t\t<td>${{bitstamp?.baseVolume}}</td>\n\t\t<td>${{bitstamp?.last}}</td>\n\t</tr>\n\t<tr>\n\t\t<td>Lbank</td>\n\t\t<td>${{lbank?.high}}</td>\n\t\t<td>${{lbank?.low}}</td>\n\t\t<td>${{lbank?.baseVolume}}</td>\n\t\t<td>${{lbank?.last}}</td>\n\t</tr>\n\t<tr>\n\t\t<td>Gemini</td>\n\t\t<td>${{gemini?.high}}</td>\n\t\t<td>${{gemini?.low}}</td>\n\t\t<td>${{gemini?.baseVolume}}</td>\n\t\t<td>${{gemini?.last}}</td>\n\t</tr>\n\t<tr>\n\t\t<td>Gate.io</td>\n\t\t<td>${{gateio?.high}}</td>\n\t\t<td>${{gateio?.low}}</td>\n\t\t<td>${{gateio?.baseVolume}}</td>\n\t\t<td>${{gateio?.last}}</td>\n\t</tr>\n\t<!-- <tr>\n\t\t<td>Zb.com</td>\n\t\t<td>${{zb?.high}}</td>\n\t\t<td>${{zb?.low}}</td>\n\t\t<td>${{zb?.baseVolume}}</td>\n\t\t<td>${{zb?.last}}</td>\n\t</tr>\n\t<tr>\n\t\t<td>EXX</td>\n\t\t<td>${{exx?.high}}</td>\n\t\t<td>${{exx?.low}}</td>\n\t\t<td>${{exx?.baseVolume}}</td>\n\t\t<td>${{exx?.last}}</td>\n\t</tr> -->\n<!-- \t<tr>\n\t\t<td>Liqui</td>\n\t\t<td>${{liqui?.high}}</td>\n\t\t<td>${{liqui?.low}}</td>\n\t\t<td>${{liqui?.baseVolume}}</td>\n\t\t<td>${{liqui?.last}}</td>\n\t</tr>\n\t<tr>\n\t\t<td>Kucoin</td>\n\t\t<td>${{kucoin?.high}}</td>\n\t\t<td>${{kucoin?.low}}</td>\n\t\t<td>${{kucoin?.baseVolume}}</td>\n\t\t<td>${{kucoin?.last}}</td>\n\t</tr> -->\n\t<!-- <tr>\n\t\t<td>Livecoin</td>\n\t\t<td>${{livecoin?.high}}</td>\n\t\t<td>${{livecoin?.low}}</td>\n\t\t<td>${{livecoin?.baseVolume}}</td>\n\t\t<td>${{livecoin?.last}}</td>\n\t</tr>\n\t<tr>\n\t\t<td>Yobit</td>\n\t\t<td>${{yobit?.high}}</td>\n\t\t<td>${{yobit?.low}}</td>\n\t\t<td>${{yobit?.baseVolume}}</td>\n\t\t<td>${{yobit?.last}}</td>\n\t</tr> -->\n\t<!-- <tr>\n\t<td>{{markets['Bitfinex']?.MARKET}}</td>\n\t<td>${{markets['Bitfinex']?.HIGH24HOUR}}</td>\n\t<td>${{markets['Bitfinex']?.LOW24HOUR}}</td>\n\t<td>${{markets['Bitfinex']?.LASTVOLUME}}</td>\n\t<td>${{markets['Bitfinex']?.PRICE}}</td>\n\t</tr>\n\t<tr>\n\t<td>{{markets['Coinbase']?.MARKET}}</td>\n\t<td>${{markets['Coinbase']?.HIGH24HOUR}}</td>\n\t<td>${{markets['Coinbase']?.LOW24HOUR}}</td>\n\t<td>${{markets['Coinbase']?.LASTVOLUME}}</td>\n\t<td>${{markets['Coinbase']?.PRICE}}</td>\n\t</tr>\n\t<tr>\n\t<td>{{markets['Bitstamp']?.MARKET}}</td>\n\t<td>${{markets['Bitstamp']?.HIGH24HOUR}}</td>\n\t<td>${{markets['Bitstamp']?.LOW24HOUR}}</td>\n\t<td>${{markets['Bitstamp']?.LASTVOLUME}}</td>\n\t<td>${{markets['Bitstamp']?.PRICE}}</td>\n\t</tr>\n\t<tr>\n\t<td>{{markets['Kraken']?.MARKET}}</td>\n\t<td>${{markets['Kraken']?.HIGH24HOUR}}</td>\n\t<td>${{markets['Kraken']?.LOW24HOUR}}</td>\n\t<td>${{markets['Kraken']?.LASTVOLUME}}</td>\n\t<td>${{markets['Kraken']?.PRICE}}</td>\n\t</tr>\n\t<tr>\n\t<td>{{markets['Gemini']?.MARKET}}</td>\n\t<td>${{markets['Gemini']?.HIGH24HOUR}}</td>\n\t<td>${{markets['Gemini']?.LOW24HOUR}}</td>\n\t<td>${{markets['Gemini']?.LASTVOLUME}}</td>\n\t<td>${{markets['Gemini']?.PRICE}}</td>\n\t</tr>\n\t<tr>\n\t<td>{{markets['HitBTC']?.MARKET}}</td>\n\t<td>${{markets['HitBTC']?.HIGH24HOUR}}</td>\n\t<td>${{markets['HitBTC']?.LOW24HOUR}}</td>\n\t<td>${{markets['HitBTC']?.LASTVOLUME}}</td>\n\t<td>${{markets['HitBTC']?.PRICE}}</td>\n\t</tr>\n\t<tr>\n\t<td>{{markets['TrustDEX']?.MARKET}}</td>\n\t<td>${{markets['TrustDEX']?.HIGH24HOUR}}</td>\n\t<td>${{markets['TrustDEX']?.LOW24HOUR}}</td>\n\t<td>${{markets['TrustDEX']?.LASTVOLUME}}</td>\n\t<td>${{markets['TrustDEX']?.PRICE}}</td>\n\t</tr>\n\t<tr>\n\t<td>{{markets['BitTrex']?.MARKET}}</td>\n\t<td>${{markets['BitTrex']?.HIGH24HOUR}}</td>\n\t<td>${{markets['BitTrex']?.LOW24HOUR}}</td>\n\t<td>${{markets['BitTrex']?.LASTVOLUME}}</td>\n\t<td>${{markets['BitTrex']?.PRICE}}</td>\n\t</tr>\n\t<tr>\n\t<td>{{markets['Poloniex']?.MARKET}}</td>\n\t<td>${{markets['Poloniex']?.HIGH24HOUR}}</td>\n\t<td>${{markets['Poloniex']?.LOW24HOUR}}</td>\n\t<td>${{markets['Poloniex']?.LASTVOLUME}}</td>\n\t<td>${{markets['Poloniex']?.PRICE}}</td>\n\t</tr>\n\t<tr>\n\t<td>{{markets['Cexio']?.MARKET}}</td>\n\t<td>${{markets['Cexio']?.HIGH24HOUR}}</td>\n\t<td>${{markets['Cexio']?.LOW24HOUR}}</td>\n\t<td>${{markets['Cexio']?.LASTVOLUME}}</td>\n\t<td>${{markets['Cexio']?.PRICE}}</td>\n\t</tr>\n\t<tr>\n\t<td>{{markets['LiveCoin']?.MARKET}}</td>\n\t<td>${{markets['LiveCoin']?.HIGH24HOUR}}</td>\n\t<td>${{markets['LiveCoin']?.LOW24HOUR}}</td>\n\t<td>${{markets['LiveCoin']?.LASTVOLUME}}</td>\n\t<td>${{markets['LiveCoin']?.PRICE}}</td>\n\t</tr>\n\t<tr>\n\t<td>{{markets['LakeBTC']?.MARKET}}</td>\n\t<td>${{markets['LakeBTC']?.HIGH24HOUR}}</td>\n\t<td>${{markets['LakeBTC']?.LOW24HOUR}}</td>\n\t<td>${{markets['LakeBTC']?.LASTVOLUME}}</td>\n\t<td>${{markets['LakeBTC']?.PRICE}}</td>\n\t</tr>\n\t<tr>\n\t<td>{{markets['Quoine']?.MARKET}}</td>\n\t<td>${{markets['Quoine']?.HIGH24HOUR}}</td>\n\t<td>${{markets['Quoine']?.LOW24HOUR}}</td>\n\t<td>${{markets['Quoine']?.LASTVOLUME}}</td>\n\t<td>${{markets['Quoine']?.PRICE}}</td>\n\t</tr>\n\t<tr>\n\t<td>{{markets['Exmo']?.MARKET}}</td>\n\t<td>${{markets['Exmo']?.HIGH24HOUR}}</td>\n\t<td>${{markets['Exmo']?.LOW24HOUR}}</td>\n\t<td>${{markets['Exmo']?.LASTVOLUME}}</td>\n\t<td>${{markets['Exmo']?.PRICE}}</td>\n\t</tr>\n\t<tr>\n\t<td>{{markets['bitFlyer']?.MARKET}}</td>\n\t<td>${{markets['bitFlyer']?.HIGH24HOUR}}</td>\n\t<td>${{markets['bitFlyer']?.LOW24HOUR}}</td>\n\t<td>${{markets['bitFlyer']?.LASTVOLUME}}</td>\n\t<td>${{markets['bitFlyer']?.PRICE}}</td>\n\t</tr>\n\t<tr>\n\t<td>{{markets['Coinroom']?.MARKET}}</td>\n\t<td>${{markets['Coinroom']?.HIGH24HOUR}}</td>\n\t<td>${{markets['Coinroom']?.LOW24HOUR}}</td>\n\t<td>${{markets['Coinroom']?.LASTVOLUME}}</td>\n\t<td>${{markets['Coinroom']?.PRICE}}</td>\n\t</tr>\n\t<tr>\n\t<td>{{markets['LocalBitcoins']?.MARKET}}</td>\n\t<td>${{markets['LocalBitcoins']?.HIGH24HOUR}}</td>\n\t<td>${{markets['LocalBitcoins']?.LOW24HOUR}}</td>\n\t<td>${{markets['LocalBitcoins']?.LASTVOLUME}}</td>\n\t<td>${{markets['LocalBitcoins']?.PRICE}}</td>\n\t</tr>\n\t<tr>\n\t<td>{{markets['Yobit']?.MARKET}}</td>\n\t<td>${{markets['Yobit']?.HIGH24HOUR}}</td>\n\t<td>${{markets['Yobit']?.LOW24HOUR}}</td>\n\t<td>${{markets['Yobit']?.LASTVOLUME}}</td>\n\t<td>${{markets['Yobit']?.PRICE}}</td>\n\t</tr>\n\t<tr>\n\t<td>{{markets['QuadrigaCX']?.MARKET}}</td>\n\t<td>${{markets['QuadrigaCX']?.HIGH24HOUR}}</td>\n\t<td>${{markets['QuadrigaCX']?.LOW24HOUR}}</td>\n\t<td>${{markets['QuadrigaCX']?.LASTVOLUME}}</td>\n\t<td>${{markets['QuadrigaCX']?.PRICE}}</td>\n\t</tr>\n\t<tr>\n\t<td>{{markets['ExtStock']?.MARKET}}</td>\n\t<td>${{markets['ExtStock']?.HIGH24HOUR}}</td>\n\t<td>${{markets['ExtStock']?.LOW24HOUR}}</td>\n\t<td>${{markets['ExtStock']?.LASTVOLUME}}</td>\n\t<td>${{markets['ExtStock']?.PRICE}}</td>\n\t</tr>\n\t<tr>\n\t<td>{{markets['Coincap']?.MARKET}}</td>\n\t<td>${{markets['Coincap']?.HIGH24HOUR}}</td>\n\t<td>${{markets['Coincap']?.LOW24HOUR}}</td>\n\t<td>${{markets['Coincap']?.LASTVOLUME}}</td>\n\t<td>${{markets['Coincap']?.PRICE}}</td>\n\t</tr>\n\t<tr>\n\t<td>{{markets['Gatecoin']?.MARKET}}</td>\n\t<td>${{markets['Gatecoin']?.HIGH24HOUR}}</td>\n\t<td>${{markets['Gatecoin']?.LOW24HOUR}}</td>\n\t<td>${{markets['Gatecoin']?.LASTVOLUME}}</td>\n\t<td>${{markets['Gatecoin']?.PRICE}}</td>\n\t</tr>\n\t<tr>\n\t<td>{{markets['BTCChina']?.MARKET}}</td>\n\t<td>${{markets['BTCChina']?.HIGH24HOUR}}</td>\n\t<td>${{markets['BTCChina']?.LOW24HOUR}}</td>\n\t<td>${{markets['BTCChina']?.LASTVOLUME}}</td>\n\t<td>${{markets['BTCChina']?.PRICE}}</td>\n\t</tr>\n\t<tr>\n\t<td>{{markets['Lykke']?.MARKET}}</td>\n\t<td>${{markets['Lykke']?.HIGH24HOUR}}</td>\n\t<td>${{markets['Lykke']?.LOW24HOUR}}</td>\n\t<td>${{markets['Lykke']?.LASTVOLUME}}</td>\n\t<td>${{markets['Lykke']?.PRICE}}</td>\n\t</tr>\n\t<tr>\n\t<td>{{markets['BitBay']?.MARKET}}</td>\n\t<td>${{markets['BitBay']?.HIGH24HOUR}}</td>\n\t<td>${{markets['BitBay']?.LOW24HOUR}}</td>\n\t<td>${{markets['BitBay']?.LASTVOLUME}}</td>\n\t<td>${{markets['BitBay']?.PRICE}}</td>\n\t</tr>\n\t<tr>\n\t<td>{{markets['BitFlip']?.MARKET}}</td>\n\t<td>${{markets['BitFlip']?.HIGH24HOUR}}</td>\n\t<td>${{markets['BitFlip']?.LOW24HOUR}}</td>\n\t<td>${{markets['BitFlip']?.LASTVOLUME}}</td>\n\t<td>${{markets['BitFlip']?.PRICE}}</td>\n\t</tr>\n\t<tr>\n\t<td>{{markets['WavesDEX']?.MARKET}}</td>\n\t<td>${{markets['WavesDEX']?.HIGH24HOUR}}</td>\n\t<td>${{markets['WavesDEX']?.LOW24HOUR}}</td>\n\t<td>${{markets['WavesDEX']?.LASTVOLUME}}</td>\n\t<td>${{markets['WavesDEX']?.PRICE}}</td>\n\t</tr>\n\t<tr>\n\t<td>{{markets['Coinfloor']?.MARKET}}</td>\n\t<td>${{markets['Coinfloor']?.HIGH24HOUR}}</td>\n\t<td>${{markets['Coinfloor']?.LOW24HOUR}}</td>\n\t<td>${{markets['Coinfloor']?.LASTVOLUME}}</td>\n\t<td>${{markets['Coinfloor']?.PRICE}}</td>\n\t</tr>\n\t<tr>\n\t<td>{{markets['BitSquare']?.MARKET}}</td>\n\t<td>${{markets['BitSquare']?.HIGH24HOUR}}</td>\n\t<td>${{markets['BitSquare']?.LOW24HOUR}}</td>\n\t<td>${{markets['BitSquare']?.LASTVOLUME}}</td>\n\t<td>${{markets['BitSquare']?.PRICE}}</td>\n\t</tr>\n\t<tr>\n\t<td>{{markets['Abucoins']?.MARKET}}</td>\n\t<td>${{markets['Abucoins']?.HIGH24HOUR}}</td>\n\t<td>${{markets['Abucoins']?.LOW24HOUR}}</td>\n\t<td>${{markets['Abucoins']?.LASTVOLUME}}</td>\n\t<td>${{markets['Abucoins']?.PRICE}}</td>\n\t</tr>\n\t<tr>\n\t<td>{{markets['Remitano']?.MARKET}}</td>\n\t<td>${{markets['Remitano']?.HIGH24HOUR}}</td>\n\t<td>${{markets['Remitano']?.LOW24HOUR}}</td>\n\t<td>${{markets['Remitano']?.LASTVOLUME}}</td>\n\t<td>${{markets['Remitano']?.PRICE}}</td>\n\t</tr>\n\t<tr>\n\t<td>{{markets['Coinsetter']?.MARKET}}</td>\n\t<td>${{markets['Coinsetter']?.HIGH24HOUR}}</td>\n\t<td>${{markets['Coinsetter']?.LOW24HOUR}}</td>\n\t<td>${{markets['Coinsetter']?.LASTVOLUME}}</td>\n\t<td>${{markets['Coinsetter']?.PRICE}}</td>\n\t</tr>\n\t<tr>\n\t<td>{{markets['CCEDK']?.MARKET}}</td>\n\t<td>${{markets['CCEDK']?.HIGH24HOUR}}</td>\n\t<td>${{markets['CCEDK']?.LOW24HOUR}}</td>\n\t<td>${{markets['CCEDK']?.LASTVOLUME}}</td>\n\t<td>${{markets['CCEDK']?.PRICE}}</td>\n\t</tr>\n\t<tr>\n\t<td>{{markets['MonetaGo']?.MARKET}}</td>\n\t<td>${{markets['MonetaGo']?.HIGH24HOUR}}</td>\n\t<td>${{markets['MonetaGo']?.LOW24HOUR}}</td>\n\t<td>${{markets['MonetaGo']?.LASTVOLUME}}</td>\n\t<td>${{markets['MonetaGo']?.PRICE}}</td>\n\t</tr>\n\t<tr>\n\t<td>{{markets['BTCE']?.MARKET}}</td>\n\t<td>${{markets['BTCE']?.HIGH24HOUR}}</td>\n\t<td>${{markets['BTCE']?.LOW24HOUR}}</td>\n\t<td>${{markets['BTCE']?.LASTVOLUME}}</td>\n\t<td>${{markets['BTCE']?.PRICE}}</td>\n\t</tr>\n\t<tr>\n\t<td>{{markets['TheRockTrading']?.MARKET}}</td>\n\t<td>${{markets['TheRockTrading']?.HIGH24HOUR}}</td>\n\t<td>${{markets['TheRockTrading']?.LOW24HOUR}}</td>\n\t<td>${{markets['TheRockTrading']?.LASTVOLUME}}</td>\n\t<td>${{markets['TheRockTrading']?.PRICE}}</td>\n\t</tr>\n\t<tr>\n\t<td>{{markets['CCEX']?.MARKET}}</td>\n\t<td>${{markets['CCEX']?.HIGH24HOUR}}</td>\n\t<td>${{markets['CCEX']?.LOW24HOUR}}</td>\n\t<td>${{markets['CCEX']?.LASTVOLUME}}</td>\n\t<td>${{markets['CCEX']?.PRICE}}</td>\n\t</tr>\n\t<tr>\n\t<td>{{markets['Cryptsy']?.MARKET}}</td>\n\t<td>${{markets['Cryptsy']?.HIGH24HOUR}}</td>\n\t<td>${{markets['Cryptsy']?.LOW24HOUR}}</td>\n\t<td>${{markets['Cryptsy']?.LASTVOLUME}}</td>\n\t<td>${{markets['Cryptsy']?.PRICE}}</td>\n\t</tr>\n\t<tr>\n\t<td>{{markets['OKCoin']?.MARKET}}</td>\n\t<td>${{markets['OKCoin']?.HIGH24HOUR}}</td>\n\t<td>${{markets['OKCoin']?.LOW24HOUR}}</td>\n\t<td>${{markets['OKCoin']?.LASTVOLUME}}</td>\n\t<td>${{markets['OKCoin']?.PRICE}}</td>\n\t</tr> -->\n<!-- \t<tr> \n\t<td>{{markets['Huobi']?.MARKET}}</td>\n\t<td>${{markets['Huobi']?.HIGH24HOUR}}</td>\n\t<td>${{markets['Huobi']?.LOW24HOUR}}</td>\n\t<td>${{markets['Huobi']?.LASTVOLUME}}</td>\n\t<td>${{markets['Huobi']?.PRICE}}</td>\n\t</tr>\n -->\n</table>\n</div>\n</div>\n<!-- {{markets?.0?.MARKET}} -->\n"

/***/ }),

/***/ "./angular/app/exmo/exmo.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export ExmoBtcUsd */
/* unused harmony export Bittrex */
/* unused harmony export Wex */
/* unused harmony export Poloniex */
/* unused harmony export Okex */
/* unused harmony export MarketRaw */
/* unused harmony export Hitbtc */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExmoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__ = __webpack_require__("./node_modules/rxjs/_esm5/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/@angular/common/http.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ExmoBtcUsd = (function () {
    function ExmoBtcUsd() {
    }
    return ExmoBtcUsd;
}());

var Bittrex = (function () {
    function Bittrex() {
    }
    return Bittrex;
}());

var Wex = (function () {
    function Wex() {
    }
    return Wex;
}());

var Poloniex = (function () {
    function Poloniex() {
    }
    return Poloniex;
}());

var Okex = (function () {
    function Okex() {
    }
    return Okex;
}());

var MarketRaw = (function () {
    function MarketRaw() {
    }
    return MarketRaw;
}());

var Hitbtc = (function () {
    function Hitbtc() {
    }
    return Hitbtc;
}());

var exmodata;
var ExmoComponent = (function () {
    function ExmoComponent(http) {
        var _this = this;
        this.http = http;
        this.markets = [];
        var info = http.get("https://api.exmo.me/v1/ticker/");
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["c" /* HttpHeaders */]().
            set('Content-Type', 'application/json').
            set('Accept', 'application/json').
            set('Access-Control-Allow-Headers', 'Content-Type').
            set('Access-Control-Allow-Origin', '*');
        // const binance = http.get('/cryptocompar', {headers: headers});
        var bittrexurl = http.get('/bittrex/btcusd.php', { headers: headers });
        var wexurl = http.get('/wex/btcusd.php', { headers: headers });
        var poloniexurl = http.get('/ccxt/vendor/ccxt/ccxt/mas.php?market=poloniex&syms=BTC/USDT', { headers: headers });
        var okexurl = http.get('/ccxt/vendor/ccxt/ccxt/mas.php?market=okex&syms=BTC/USDT', { headers: headers });
        var bitfinexurl = http.get('/ccxt/vendor/ccxt/ccxt/mas.php?market=bitfinex&syms=BTC/USD', { headers: headers });
        var hitbtcurl = http.get('/ccxt/vendor/ccxt/ccxt/mas.php?market=hitbtc&syms=BTC/USDT', { headers: headers });
        var krakenurl = http.get('/ccxt/vendor/ccxt/ccxt/mas.php?market=kraken&syms=BTC/USD', { headers: headers });
        var gdaxurl = http.get('/ccxt/vendor/ccxt/ccxt/mas.php?market=gdax&syms=BTC/USD', { headers: headers });
        var bitflyerurl = http.get('/ccxt/vendor/ccxt/ccxt/mas.php?market=bitflyer&syms=BTC/USD', { headers: headers });
        var bitstampurl = http.get('/ccxt/vendor/ccxt/ccxt/mas.php?market=bitstamp&syms=BTC/USD', { headers: headers });
        var lbankurl = http.get('/ccxt/vendor/ccxt/ccxt/mas.php?market=lbank&syms=BTC/USDT', { headers: headers });
        var gateiourl = http.get('/ccxt/vendor/ccxt/ccxt/mas.php?market=gateio&syms=BTC/USDT', { headers: headers });
        var geminiurl = http.get('/ccxt/vendor/ccxt/ccxt/mas.php?market=gemini&syms=BTC/USD', { headers: headers });
        // const livecoinurl = http.get<MarketRaw>('/ccxt/vendor/ccxt/ccxt/mas.php?market=livecoin&syms=BTC/USD', {headers: headers});
        // const yobiturl = http.get<MarketRaw>('/ccxt/vendor/ccxt/ccxt/mas.php?market=yobit&syms=BTC/USD', {headers: headers});
        // const zburl = http.get<MarketRaw>('/ccxt/vendor/ccxt/ccxt/mas.php?market=zb&syms=BTC/USDT', {headers: headers});
        // const exxurl = http.get<MarketRaw>('/ccxt/vendor/ccxt/ccxt/mas.php?market=exx&syms=BTC/USDT', {headers: headers});
        // const liquiurl = http.get<MarketRaw>('/ccxt/vendor/ccxt/ccxt/mas.php?market=liqui&syms=BTC/USDT', {headers: headers});
        // const kucoinurl = http.get<MarketRaw>('/ccxt/vendor/ccxt/ccxt/mas.php?market=liqui&syms=BTC/USDT', {headers: headers});
        bitstampurl.subscribe(function (response) {
            _this.bitstamp = response;
        });
        // yobiturl.subscribe(response => {
        //   this.yobit = response;
        // });
        // livecoinurl.subscribe(response => {
        //   this.livecoin = response;
        // });
        // kucoinurl.subscribe(response => {
        //   this.kucoin = response;
        // });
        // liquiurl.subscribe(response => {
        //   this.liqui = response;
        // });
        // zburl.subscribe(response => {
        //   this.zb = response;
        // });
        // exxurl.subscribe(response => {
        //   this.exx = response;
        // });
        lbankurl.subscribe(function (response) {
            _this.lbank = response;
        });
        gateiourl.subscribe(function (response) {
            _this.gateio = response;
        });
        geminiurl.subscribe(function (response) {
            _this.gemini = response;
        });
        bitflyerurl.subscribe(function (response) {
            _this.bitflyer = response;
        });
        gdaxurl.subscribe(function (response) {
            _this.gdax = response;
        });
        krakenurl.subscribe(function (response) {
            _this.kraken = response;
        });
        hitbtcurl.subscribe(function (response) {
            _this.hitbtc = response;
        });
        // bitfinexurl.subscribe(response => {
        //   this.bitfinex = response;
        // });
        okexurl.subscribe(function (response) {
            _this.okex = response;
        });
        poloniexurl.subscribe(function (polraw) {
            _this.poloniex = polraw;
        });
        bittrexurl.subscribe(function (bitraw) {
            _this.bittrex = {
                high: bitraw[0]['High'],
                low: bitraw[0]['Low'],
                vol: bitraw[0]['Volume'],
                last: bitraw[0]['Last'],
            };
        });
        wexurl.subscribe(function (wexraw) {
            _this.wex = {
                high: wexraw['btc_usd']['high'],
                low: wexraw['btc_usd']['low'],
                vol: wexraw['btc_usd']['vol'],
                last: wexraw['btc_usd']['last'],
            };
        });
        info.subscribe(function (response) {
            _this.exmodata = {
                high: response['BTC_USD'].high,
                low: response['BTC_USD'].low,
                avg: response['BTC_USD'].avg,
                vol: response['BTC_USD'].vol,
                vol_curr: response['BTC_USD'].vol_curr,
                last_trade: response['BTC_USD'].last_trade,
                buy_price: response['BTC_USD'].buy_price,
                sell_price: response['BTC_USD'].sell_price,
                updated: response['BTC_USD'].updated,
            };
        });
        // binance.subscribe(crypto => {
        //   for (let item of crypto['Data']['Exchanges']) {
        //    this.markets[item['MARKET']] = {
        //       CHANGE24HOUR: item['CHANGE24HOUR'],
        //       CHANGEDAY: item['CHANGEDAY'],
        //       CHANGEPCT24HOUR: item['CHANGEPCT24HOUR'],
        //       CHANGEPCTDAY: item['CHANGEPCTDAY'],
        //       HIGH24HOUR: item['HIGH24HOUR'],
        //       LASTUPDATE: item['LASTUPDATE'],
        //       LASTVOLUME: item['LASTVOLUME'],
        //       LASTVOLUMETO: item['LASTVOLUMETO'],
        //       LOW24HOUR: item['LOW24HOUR'],
        //       MARKET: item['MARKET'],
        //       OPEN24HOUR: item['OPEN24HOUR'],
        //       VOLUME24HOUR: item['VOLUME24HOUR'],
        //       PRICE: item['PRICE'],
        //    }
        //   }
        // });
        __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__["a" /* Observable */].interval(2300).subscribe(function (wait) {
            bitstampurl.subscribe(function (response) {
                _this.bitstamp = response;
            });
            // yobiturl.subscribe(response => {
            //   this.yobit = response;
            // });
            // livecoinurl.subscribe(response => {
            //   this.livecoin = response;
            // });
            // kucoinurl.subscribe(response => {
            //   this.kucoin = response;
            // });
            // liquiurl.subscribe(response => {
            //   this.liqui = response;
            // });
            // zburl.subscribe(response => {
            //   this.zb = response;
            // });
            // exxurl.subscribe(response => {
            //   this.exx = response;
            // });
            lbankurl.subscribe(function (response) {
                _this.lbank = response;
            });
            gateiourl.subscribe(function (response) {
                _this.gateio = response;
            });
            geminiurl.subscribe(function (response) {
                _this.gemini = response;
            });
            bitflyerurl.subscribe(function (response) {
                _this.bitflyer = response;
            });
            gdaxurl.subscribe(function (response) {
                _this.gdax = response;
            });
            krakenurl.subscribe(function (response) {
                _this.kraken = response;
            });
            hitbtcurl.subscribe(function (response) {
                _this.hitbtc = response;
            });
            // bitfinexurl.subscribe(response => {
            //   this.bitfinex = response;
            // });
            okexurl.subscribe(function (response) {
                _this.okex = response;
            });
            poloniexurl.subscribe(function (polraw) {
                _this.poloniex = polraw;
            });
            bittrexurl.subscribe(function (bitraw) {
                _this.bittrex = {
                    high: bitraw[0]['High'],
                    low: bitraw[0]['Low'],
                    vol: bitraw[0]['Volume'],
                    last: bitraw[0]['Last'],
                };
            });
            wexurl.subscribe(function (wexraw) {
                _this.wex = {
                    high: wexraw['btc_usd']['high'],
                    low: wexraw['btc_usd']['low'],
                    vol: wexraw['btc_usd']['vol'],
                    last: wexraw['btc_usd']['last'],
                };
            });
            info.subscribe(function (response) {
                _this.exmodata = {
                    high: response['BTC_USD'].high,
                    low: response['BTC_USD'].low,
                    avg: response['BTC_USD'].avg,
                    vol: response['BTC_USD'].vol,
                    vol_curr: response['BTC_USD'].vol_curr,
                    last_trade: response['BTC_USD'].last_trade,
                    buy_price: response['BTC_USD'].buy_price,
                    sell_price: response['BTC_USD'].sell_price,
                    updated: response['BTC_USD'].updated,
                };
            });
            // binance.subscribe(crypto => {
            //   for (let item of crypto['Data']['Exchanges']) {
            //    this.markets[item['MARKET']] = {
            //       CHANGE24HOUR: item['CHANGE24HOUR'],
            //       CHANGEDAY: item['CHANGEDAY'],
            //       CHANGEPCT24HOUR: item['CHANGEPCT24HOUR'],
            //       CHANGEPCTDAY: item['CHANGEPCTDAY'],
            //       HIGH24HOUR: item['HIGH24HOUR'],
            //       LASTUPDATE: item['LASTUPDATE'],
            //       LASTVOLUME: item['LASTVOLUME'],
            //       LASTVOLUMETO: item['LASTVOLUMETO'],
            //       LOW24HOUR: item['LOW24HOUR'],
            //       MARKET: item['MARKET'],
            //       OPEN24HOUR: item['OPEN24HOUR'],
            //       VOLUME24HOUR: item['VOLUME24HOUR'],
            //       PRICE: item['PRICE'],
            //    }
            //   }
            // });
        });
    }
    ExmoComponent.prototype.ngOnInit = function () {
    };
    ExmoComponent.prototype.arith = function (n, m, c) {
        n = parseInt(n, 10);
        m = parseInt(m, 10);
        c = parseInt(c, 10);
        var sum = n + m + c;
        // console.log(sum/3)
        return sum / 3;
    };
    return ExmoComponent;
}());
ExmoComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-exmo',
        template: __webpack_require__("./angular/app/exmo/exmo.component.html"),
        styles: [__webpack_require__("./angular/app/exmo/exmo.component.css")],
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */]) === "function" && _a || Object])
], ExmoComponent);

var _a;
//# sourceMappingURL=exmo.component.js.map

/***/ }),

/***/ "./angular/app/filter-name-active.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FilterNameActivePipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FilterNameActivePipe = (function () {
    function FilterNameActivePipe() {
    }
    FilterNameActivePipe.prototype.transform = function (value, filterString, propName) {
        if (filterString === undefined || value.length === 0 || filterString === '') {
            return value;
        }
        var resultArray = [];
        for (var _i = 0, value_1 = value; _i < value_1.length; _i++) {
            var item = value_1[_i];
            if (item[propName] == filterString) {
                resultArray.push(item);
            }
        }
        return resultArray;
    };
    return FilterNameActivePipe;
}());
FilterNameActivePipe = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["X" /* Pipe */])({
        name: 'filterNameActive',
        pure: false
    })
], FilterNameActivePipe);

//# sourceMappingURL=filter-name-active.pipe.js.map

/***/ }),

/***/ "./angular/app/filter-name-age.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FilterNameAgePipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FilterNameAgePipe = (function () {
    function FilterNameAgePipe() {
    }
    FilterNameAgePipe.prototype.transform = function (value, args) {
        return null;
    };
    return FilterNameAgePipe;
}());
FilterNameAgePipe = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["X" /* Pipe */])({
        name: 'filterNameAge'
    })
], FilterNameAgePipe);

//# sourceMappingURL=filter-name-age.pipe.js.map

/***/ }),

/***/ "./angular/app/filter-name.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FilterNamePipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FilterNamePipe = (function () {
    function FilterNamePipe() {
    }
    FilterNamePipe.prototype.transform = function (value, filterString, propName) {
        if (filterString === undefined || value.length === 0 || filterString === '') {
            return value;
        }
        var resultArray = [];
        for (var _i = 0, value_1 = value; _i < value_1.length; _i++) {
            var item = value_1[_i];
            if (item[propName].toLowerCase().includes(filterString.toLowerCase())) {
                resultArray.push(item);
            }
        }
        return resultArray;
    };
    return FilterNamePipe;
}());
FilterNamePipe = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["X" /* Pipe */])({
        name: 'filterName',
        pure: false
    })
], FilterNamePipe);

//# sourceMappingURL=filter-name.pipe.js.map

/***/ }),

/***/ "./angular/app/ico-project/ico-project-all/ico-project-all.component.html":
/***/ (function(module, exports) {

module.exports = "<!--<div class=\"ico-content\">-->\n\t\t\t\t<!--<div class=\"ico-head\">-->\n\t\t\t\t\t<!--<h1>ICO<span>{{icoCount}}</span></h1>-->\n\t\t\t\t\t<!--<ul class=\"ico-tabs\">-->\n\t\t\t\t\t\t<!--<li><label for=\"filter1\"><input type=\"radio\" id=\"filter1\" value=\"1\" [(ngModel)]=\"status\" name=\"status\"><a>Активные ({{activeCount}})</a></label></li>-->\n\t\t\t\t\t\t<!--<li><label for=\"filter2\"><input type=\"radio\" id=\"filter2\" value=\"2\" [(ngModel)]=\"status\" name=\"status\"><a>Завершенные ({{inactiveCount}})</a></label></li>-->\n\t\t\t\t\t<!--</ul>-->\n\t\t\t\t\t<!--<form>-->\n\t\t\t\t\t\t<!--<input [(ngModel)]=\"filteredName\" name=\"filteredName\" type=\"text\" placeholder=\"Поиск по названию\">-->\n\t\t\t\t\t\t<!--<button type=\"button\"><img src=\"/img/search-icon.png\" alt=\"\"></button>-->\n\t\t\t\t\t<!--</form>-->\n\t\t\t\t<!--</div>-->\n\t\t\t\t   <!--<div class=\"select-wrapper\">-->\n\t\t\t\t     <!--<div class=\"select\">-->\n\t\t\t\t      <!--<span class=\"text\"><span style=\"padding-top: 12px;\">{{order == 'name' ? 'По алфавиту' : 'По сумме собранных средств'}}</span></span>-->\n\t\t\t\t      <!--<a href=\"#\"><img src=\"/img/select-drop-icon.png\" alt=\"\"></a>-->\n\t\t\t\t     <!--</div>-->\n\t\t\t\t     <!--<ul class=\"select-items\">-->\n\t\t\t\t      <!--<li (click)=\"setOrder('name')\"><a >Фильтрация: По алфавиту</a></li>-->\n\t\t\t\t      <!--<li (click)=\"setOrder('percentage')\"><a >Фильтрация: По сумме собранных средств</a></li>-->\n\t\t\t\t     <!--</ul>-->\n\t\t\t\t    <!--</div>-->\n\t\t<div class=\"ico-content\">\n\t\t\t<div class=\"ico-head\">\n\t\t\t\t<h1>ICO<span>872</span><a href=\"balant-mining-filter.html\"><img src=\"img/mining-icon.png\" alt=\"\"></a></h1>\n\t\t\t\t<ul class=\"ico-tabs\">\n\t\t\t\t\t<li class=\"active\"><a href=\"#\">Активные (145)</a></li>\n\t\t\t\t\t<li><a href=\"#\">Завершенные (55)</a></li>\n\t\t\t\t</ul>\n\t\t\t\t<form>\n\t\t\t\t\t<input type=\"text\" placeholder=\"Поиск по названию\">\n\t\t\t\t</form>\n\t\t\t</div>\n\t\t\t<div class=\"select-content\">\n\t\t\t\t<div class=\"select-head\">\n\t\t\t\t\t<p>Доход от большего к меньшему</p>\n\t\t\t\t\t<span class=\"curret\"></span>\n\t\t\t\t</div>\n\t\t\t\t<ul class=\"select-body\">\n\t\t\t\t\t<li><a href=\"#\">Доход на уменьшение</a></li>\n\t\t\t\t\t<li><a href=\"#\">Депозит на уменьшение</a></li>\n\t\t\t\t\t<li><a href=\"#\">Депозит на увеличение</a></li>\n\t\t\t\t</ul>\n\t\t\t</div>\n\t\t\t\t<div class=\"project-wrapper active\">\n\t\t\t\t\t<div *ngFor=\"let item of news | filterNameActive:status:'status' | filterName:filteredName:'name' | orderBy: order:reverse:'case-insensitive'\" class=\"project-block\" [ngClass]=\"item.status==1 ? ' ' : 'no-bg'\">\n\t\t\t\t\t\t<div class=\"img-wrap\">\n\t\t\t\t\t\t\t<a href=\"/ico/item/{{item.id}}\"><img [src]=\"item.logo\" style=\"width: 97px; height: 97px\" alt=\"\"></a>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"text-wrap\">\n\t\t\t\t\t\t\t<div class=\"text-info\">\n\t\t\t\t\t\t\t\t<p><a href=\"/ico/item/{{item.id}}\" class=\"project-title\">{{item.name}}</a><a href=\"/ico/item/{{item.id}}#comment-block\" class=\"comments\"><i class=\"fa fa-comment\" aria-hidden=\"true\"></i>{{item.comments_count}}</a></p>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"project-info-content\">\n\t\t\t\t\t\t\t\t<div class=\"info\">\n\t\t\t\t\t\t\t\t\t<p class=\"status\" [ngClass]=\"item.status==1 ? 'active-status' : 'inactive-status'\">Статус: <span>{{item.status == 1? 'Активен': 'Завершен'}}</span></p>\n\t\t\t\t\t\t\t\t\t<p class=\"year\">от {{item.money_start}} до {{item.money_end}}</p>\n\t\t\t\t\t\t\t\t\t<p class=\"last-updated\">Последнее обновление: {{item.updated_at}}</p>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"progress-bar\">\n\t\t\t\t\t\t\t\t\t<a [routerLink]=\"['/ico/category', item.cat_id]\" class=\"product-gray-btn\">{{item.category}}</a>\n\t\t\t\t\t\t\t\t\t<div class=\"progress\">\n\t\t\t\t\t\t\t\t\t\t<span [ngStyle]=\"{'width': item.current_money/(item.money / 100)+'%' }\"></span>\n\t\t\t\t\t\t\t\t\t\t<p>${{item.current_money}} из {{item.money}}</p>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<a href=\"#login-popup\" *ngIf=\"!checkAuth()\" class=\"popup-link follow\" data-effect=\"mfp-zoom-in\"><span class=\"plus\">+</span><span class=\"text\">Следить</span></a>\n                  <a href=\"#follow-popup\" *ngIf=\"!checkInPortfolio(item.id) && checkAuth()\" (click)=\"selectedItem = item\" class=\"popup-link follow\" data-effect=\"mfp-zoom-in\"><span class=\"plus\">+</span><span class=\"text\">Следить</span></a>\n\n                  <a class=\"follow\"  *ngIf=\"checkInPortfolio(item.id) && checkAuth()\"  (click)=\"removePortfolio(item.id, 'App\\\\IcoProject')\"><span class=\"minus\"><img src=\"img/minus.png\" alt=\"\"></span><span class=\"text text-red\">Следить</span></a>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<p class=\"more-project\">\n              {{item.about | striphtml |excerpt:80}} <a  href=\"/ico/item/{{item.id}}\"> Подробнее о проекте</a></p>\n\t\t\t\t\t</div>\n\n\t\t\t\t</div>\n\t\t\t\t<!-- <a href=\"#\" class=\"show-more\">Показать еще</a> -->\n\t\t\t</div>\n<div id=\"follow-popup\" class=\"popup mfp-with-anim mfp-hide\">\n    <div class=\"popup-body\">\n      <h2>Следить за {{selectedItem?.name}}</h2>\n      <p>Выберите портфель для сохранения {{selectedItem?.name}}</p>\n      <div class=\"checkbox-list\">\n        <div class=\"checkbox-wrap\" *ngFor=\"let portfolio of getUserPortfolio; let i = index\">\n          <input type=\"radio\" name=\"id\" [(ngModel)]=\"addPortfolio\" value=\"{{portfolio.id}}\" checked=\"checked\" id=\"{{i}}\">\n          <label for=\"{{i}}\">\n            <span></span>{{portfolio.name}}\n          </label>\n        </div>\n      </div>\n      <a href=\"#\" class=\"add-portfolio\">+Добавить портфель</a>\n      <form class=\"hidden\" #f=\"ngForm\">\n        <input type=\"text\" ngModel name=\"name\" required=\"\" placeholder=\"Введите название...\">\n        <button (click)=\"createPortfolio(f)\" type=\"submit\">Добавить</button>\n      </form>\n    </div>\n    <div class=\"save-block\">\n      <a (click)=\"submitPortfolio(selectedItem?.id, 'App\\\\IcoProject')\" class=\"save-settings\">Сохранить настройки</a>\n      <a href=\"#\" class=\"close-text\">Отменить и закрыть</a>\n    </div>\n</div>"

/***/ }),

/***/ "./angular/app/ico-project/ico-project-all/ico-project-all.component.scss":
/***/ (function(module, exports) {

module.exports = "div.ico-content {\n  width: 860px !important;\n  margin-left: -30px; }\n\n#filter1, #filter2 {\n  display: none; }\n\n.select-wrapper {\n  margin-bottom: 20px;\n  width: 205px;\n  position: relative; }\n\n.select-wrapper .select {\n    border-radius: 18px;\n    background: #fff;\n    height: 40px;\n    padding: 0 18px 0 13px;\n    cursor: pointer;\n    -webkit-box-shadow: 0px 5px 30px 0px rgba(0, 0, 1, 0.1);\n    box-shadow: 0px 5px 30px 0px rgba(0, 0, 1, 0.1); }\n\n.select-wrapper .select .text {\n      margin: 0;\n      margin-right: 45px;\n      color: #666;\n      font-size: 14px; }\n\n.select-wrapper .select.open {\n      border-bottom-left-radius: 0;\n      border-bottom-right-radius: 0; }\n\n.select-wrapper .select.open > a {\n        -webkit-transform: rotate(-180deg);\n                transform: rotate(-180deg); }\n\n.select-wrapper .select-items {\n    background: #fff;\n    position: absolute;\n    left: 0;\n    top: 40px;\n    width: 100%;\n    border-bottom-left-radius: 18px;\n    border-bottom-right-radius: 18px;\n    display: none; }\n\n.select-wrapper .select-items li {\n      color: #666;\n      font-size: 14px;\n      padding: 10px 13px;\n      background: #fff;\n      display: block; }\n\n.select-wrapper .select-items li:hover {\n        background: #dbdbdb; }\n\n.select-wrapper .select-items.open {\n      display: block; }\n\n.open {\n  display: block; }\n"

/***/ }),

/***/ "./angular/app/ico-project/ico-project-all/ico-project-all.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export NewsRaw */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IcoProjectAllComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__order_pipe_ngx_order_pipe__ = __webpack_require__("./angular/app/order-pipe/ngx-order.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__portfolio_service__ = __webpack_require__("./angular/app/portfolio.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__auth_service__ = __webpack_require__("./angular/app/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["c" /* HttpHeaders */]({ 'Content-type': 'Application/json ' });
var NewsRaw = (function () {
    function NewsRaw() {
    }
    return NewsRaw;
}());

var IcoProjectAllComponent = (function () {
    /**
     * @param {OrderPipe}
     */
    function IcoProjectAllComponent(authService, portfolioService, orderPipe, http, router, route) {
        this.authService = authService;
        this.portfolioService = portfolioService;
        this.orderPipe = orderPipe;
        this.http = http;
        this.router = router;
        this.route = route;
        this.news = [];
        this.activeCount = 0;
        this.inactiveCount = 0;
        this.icoCount = 0;
        this.order = '';
        this.reverse = false;
        this.portfolios = [];
        this.allCount = 0;
        this.active = 0;
        this.inactive = 0;
        this.portfoliosInfo = [];
        this.portfolioAdded = false;
        this.getUserPortfolio = [];
        this.checkPortfolio = false;
        this.removed = false;
        this.show = false;
    }
    IcoProjectAllComponent.prototype.ngOnInit = function () {
        var _this = this;
        var path = "/icoraw";
        var info = this.http.get(path);
        info.subscribe(function (response) {
            for (var _i = 0, _a = response['news']; _i < _a.length; _i++) {
                var item = _a[_i];
                _this.news.push({
                    id: item.id,
                    name: item.name,
                    status: item.status,
                    website: item.website,
                    cat_id: item.cat_id,
                    escrow: item.escrow,
                    type: item.type,
                    white_paper: item.white_paper,
                    currencies: item.currencies,
                    platform: item.platform,
                    place: item.place,
                    about: item.about,
                    money: item.money,
                    money_start: item.money_start,
                    money_end: item.money_end,
                    current_money: item.current_money,
                    number_people: item.number_people,
                    updated_at: item.updated_at,
                    category: item.category['name'],
                    logo: item.logo,
                    comments_count: item.comments_count,
                });
            }
            _this.icoCount = _this.news.length;
            for (var _b = 0, _c = _this.news; _b < _c.length; _b++) {
                var item = _c[_b];
                if (item.status == 1) {
                    _this.activeCount++;
                }
                else {
                    _this.inactiveCount++;
                }
            }
            console.log(_this.news.length);
        });
        var portfolioUrl = '/angular/userportfolio';
        this.portfolioInfo = this.http.get(portfolioUrl);
        this.portfolioInfo.subscribe(function (response) {
            if (response['error']) {
                // code...
            }
            else {
                _this.portfoliosInfo = response['ico'];
                console.log(_this.portfoliosInfo);
            }
        });
        this.authService.getUser().subscribe(function (response) { return _this.getUserPortfolio = response['portfolio']; });
    };
    IcoProjectAllComponent.prototype.checkAuth = function () {
        if (this.authService.getUserInfo()) {
            console.log(true);
            return true;
        }
        console.log(false);
        return (false);
    };
    IcoProjectAllComponent.prototype.removePortfolio = function (id, type) {
        var _this = this;
        var removeUrl;
        if (type == 'App\\IcoProject') {
            removeUrl = '/angular/userportfolio/ico/remove/';
        }
        else {
            removeUrl = '/angular/userportfolio/remove/';
        }
        var removePost = this.http.get(removeUrl + id);
        removePost.subscribe(function (response) {
            _this.portfolioInfo.subscribe(function (res) {
                if (res['error']) {
                    // code...
                }
                else {
                    _this.portfoliosInfo = res['ico'];
                    console.log(_this.portfoliosInfo);
                }
            }),
                _this.checkInPortfolio(id);
        }, function (error) { return console.log(error); });
    };
    IcoProjectAllComponent.prototype.setOrder = function (value) {
        if (this.order === value) {
            this.reverse = !this.reverse;
        }
        this.order = value;
        console.log(this.order);
    };
    IcoProjectAllComponent.prototype.loadMore = function (id) {
        this.router.navigate(['/ico/item', id]);
    };
    IcoProjectAllComponent.prototype.checkInPortfolio = function (id) {
        if (this.portfoliosInfo == undefined) {
            return false;
        }
        for (var _i = 0, _a = this.portfoliosInfo; _i < _a.length; _i++) {
            var item = _a[_i];
            for (var _b = 0, item_1 = item; _b < item_1.length; _b++) {
                var it = item_1[_b];
                if (it.id) {
                    if (it.id == id) {
                        return true;
                    }
                }
            }
        }
        return false;
    };
    IcoProjectAllComponent.prototype.createPortfolio = function (form) {
        var _this = this;
        this.http.post('/angular/userportfolio/create', { 'name': form.value.name, 'user_portfolio_type_id': 2 }, { headers: headers })
            .subscribe(function (response) { _this.getUserPortfolio.push(response); form.reset(); }, function (error) { return console.log(error); });
    };
    IcoProjectAllComponent.prototype.submitPortfolio = function (post_id, type) {
        var _this = this;
        this.portfolioService.submitPortfolio(this.addPortfolio, post_id, type).subscribe(function (response) { return _this.router.navigate(['/profile/portfolio']); }, function (error) { return console.log(error); });
    };
    return IcoProjectAllComponent;
}());
IcoProjectAllComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-ico-project-all',
        template: __webpack_require__("./angular/app/ico-project/ico-project-all/ico-project-all.component.html"),
        styles: [__webpack_require__("./angular/app/ico-project/ico-project-all/ico-project-all.component.scss")],
        providers: [__WEBPACK_IMPORTED_MODULE_4__portfolio_service__["a" /* PortfolioService */], __WEBPACK_IMPORTED_MODULE_5__auth_service__["a" /* AuthService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_5__auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__portfolio_service__["a" /* PortfolioService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__portfolio_service__["a" /* PortfolioService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__order_pipe_ngx_order_pipe__["a" /* OrderPipe */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__order_pipe_ngx_order_pipe__["a" /* OrderPipe */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _f || Object])
], IcoProjectAllComponent);

var _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=ico-project-all.component.js.map

/***/ }),

/***/ "./angular/app/ico-project/ico-project-categories/ico-project-categories.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"ico-content\">\n\t\t\t\t<div class=\"ico-head\">\n\t\t\t\t\t<h1>ICO<span>{{icoCount}}</span></h1>\n\t\t\t\t\t<ul class=\"ico-tabs\">\n\t\t\t\t\t\t<li><label for=\"filter1\"><input type=\"radio\" id=\"filter1\" value=\"1\" [(ngModel)]=\"status\" name=\"status\"><a>Активные ({{activeCount}})</a></label></li>\n\t\t\t\t\t\t<li><label for=\"filter2\"><input type=\"radio\" id=\"filter2\" value=\"2\" [(ngModel)]=\"status\" name=\"status\"><a>Завершенные ({{inactiveCount}})</a></label></li>\n\t\t\t\t\t</ul>\n\t\t\t\t\t<form>\n\t\t\t\t\t\t<input [(ngModel)]=\"filteredName\" name=\"filteredName\" type=\"text\" placeholder=\"Поиск по названию\">\n\t\t\t\t\t\t<button type=\"button\"><img src=\"/img/search-icon.png\" alt=\"\"></button>\n\t\t\t\t\t</form>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"select-wrap select-wrap-ico\">\n\t\t\t\t\t<select>\n\t\t\t\t\t\t<option value=\"all\">Фильтрация: По алфавиту</option>\n\t\t\t\t\t\t<option value=\"usd\">Фильтрация: По алфавиту</option>\n\t\t\t\t\t\t<option value=\"eur\">Фильтрация: По алфавиту</option>\n\t\t\t\t\t</select>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"project-wrapper active\">\n\t\t\t\t\t<div *ngFor=\"let item of news | filterNameActive:status:'status' | filterName:filteredName:'name'\" class=\"project-block\" [ngClass]=\"item.status==1 ? ' ' : 'no-bg'\">\n\t\t\t\t\t\t<div class=\"img-wrap\">\n\t\t\t\t\t\t\t<a href=\"/ico/item/{{item.id}}\"><img [src]=\"item.logo\" style=\"width: 97px; height: 97px\" alt=\"\"></a>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"text-wrap\">\n\t\t\t\t\t\t\t<div class=\"text-info\">\n\t\t\t\t\t\t\t\t<p><a href=\"/ico/item/{{item.id}}\" class=\"project-title\">{{item.name}}</a><a href=\"#\" class=\"comments\"><i class=\"fa fa-comment\" aria-hidden=\"true\"></i>{{item.comments_count}}</a></p>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"project-info-content\">\n\t\t\t\t\t\t\t\t<div class=\"info\">\n\t\t\t\t\t\t\t\t\t<p class=\"status\" [ngClass]=\"item.status==1 ? 'active-status' : 'inactive-status'\">Статус: <span>{{item.status == 1? 'Активен': 'Завершен'}}</span></p>\n\t\t\t\t\t\t\t\t\t<p class=\"year\">от {{item.money_start}} до {{item.money_end}}</p>\n\t\t\t\t\t\t\t\t\t<p class=\"last-updated\">Последнее обновление: {{item.updated_at}}</p>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"progress-bar\">\n\t\t\t\t\t\t\t\t\t<a href=\"#\" class=\"product-gray-btn\">{{item.category.name}}</a>\n\t\t\t\t\t\t\t\t\t<div class=\"progress\">\n\t\t\t\t\t\t\t\t\t\t<span [ngStyle]=\"{'width': item.current_money/(item.money / 100)+'%' }\"></span>\n\t\t\t\t\t\t\t\t\t\t<p>${{item.current_money}} из {{item.money}}</p>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<a href=\"#\" class=\"follow\"><span class=\"plus\">+</span><span class=\"text\">Следить</span></a>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<p class=\"more-project\" [innerHTML]=\"item.about\">\n\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t<p class=\"more-project\"><a  href=\"/ico/item/{{item.id}}\">Подробнее о проекте</a></p>\n\t\t\t\t\t</div>\n\n\t\t\t\t</div>\n\t\t\t\t<!-- <a href=\"#\" class=\"show-more\">Показать еще</a> -->\n\t\t\t</div>\n"

/***/ }),

/***/ "./angular/app/ico-project/ico-project-categories/ico-project-categories.component.scss":
/***/ (function(module, exports) {

module.exports = "div.ico-content {\n  width: 860px !important;\n  margin-left: -30px; }\n"

/***/ }),

/***/ "./angular/app/ico-project/ico-project-categories/ico-project-categories.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export NewsRaw */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IcoProjectCategoriesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/@angular/common/http.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// import { interval } from 'rxjs/Observable/interval';


var NewsRaw = (function () {
    function NewsRaw() {
    }
    return NewsRaw;
}());

var IcoProjectCategoriesComponent = (function () {
    // main_news: NewsRaw[] = [];
    function IcoProjectCategoriesComponent(http, router, route) {
        this.http = http;
        this.router = router;
        this.route = route;
        this.activeCount = 0;
        this.inactiveCount = 0;
        this.icoCount = 0;
        this.news = [];
    }
    IcoProjectCategoriesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.activeCount = 0;
            _this.inactiveCount = 0;
            _this.icoCount = 0;
            _this.id = params['id'];
            _this.news.length = 0;
            _this.path = "/icobycat/" + _this.id;
            _this.info = _this.http.get(_this.path);
            _this.info.subscribe(function (response) {
                _this.news = response;
                _this.icoCount = _this.news.length;
                for (var _i = 0, _a = _this.news; _i < _a.length; _i++) {
                    var item = _a[_i];
                    if (item.status == 1) {
                        _this.activeCount++;
                    }
                    else {
                        _this.inactiveCount++;
                    }
                }
            });
        });
    };
    IcoProjectCategoriesComponent.prototype.loadMore = function (id) {
        this.router.navigate(['/ico/item', id]);
    };
    return IcoProjectCategoriesComponent;
}());
IcoProjectCategoriesComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-ico-project-categories',
        template: __webpack_require__("./angular/app/ico-project/ico-project-categories/ico-project-categories.component.html"),
        styles: [__webpack_require__("./angular/app/ico-project/ico-project-categories/ico-project-categories.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _c || Object])
], IcoProjectCategoriesComponent);

var _a, _b, _c;
//# sourceMappingURL=ico-project-categories.component.js.map

/***/ }),

/***/ "./angular/app/ico-project/ico-project-detail/ico-project-detail.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"ico-card-content\">\n\t\t\t\t<a href=\"/ico/all\" class=\"return\"><span>&#60;</span>Вернуться к списку проектов</a>\n\t\t\t\t<div class=\"project-block\">\n\t\t\t\t\t<div class=\"img-wrap\">\n\t\t\t\t\t\t<img src=\"{{news.logo}}\" style=\"width: 97px; height: 97px;\" alt=\"\">\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"text-wrap\">\n\t\t\t\t\t\t<div class=\"text-info\">\n\t\t\t\t\t\t\t<p class=\"project-title\">{{news.name}}<a href=\"#comment-block\" class=\"comments\"><i class=\"fa fa-comment\" aria-hidden=\"true\"></i>{{commentcount}}</a></p>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"project-info-content\">\n\t\t\t\t\t\t\t<div class=\"info\">\n\t\t\t\t\t\t\t\t<p class=\"status\" [ngClass]=\"news.status==1 ? 'active-status' : 'inactive-status'\">Статус: <span>{{news.status == 1? 'Активен': 'Завершен'}}</span></p>\n\t\t\t\t\t\t\t\t<p class=\"year\">от {{news.money_start}} до {{news.money_end}}</p>\n\t\t\t\t\t\t\t\t<p class=\"last-updated\">Последнее обновление: {{news.updated_at}}</p>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"progress-bar\">\n\t\t\t\t\t\t\t\t<a href=\"#test-popup\" class=\"follow\" data-effect=\"mfp-zoom-in\"><span class=\"plus\">+</span><span class=\"text\">Следить</span></a>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<ul class=\"card-menu\">\n\t\t\t\t\t<li><a [routerLink]=\"['/ico/item', news.id]\" fragment=\"basic-information\" >Основа</a></li>\n\t\t\t\t\t<li><a [routerLink]=\"['/ico/item', news.id]\" fragment=\"distribution-funds\">Распределение средств</a></li>\n\t\t\t\t\t<li><a [routerLink]=\"['/ico/item', news.id]\" fragment=\"team-genesis\">Команда</a></li>\n\t\t\t\t\t<li><a [routerLink]=\"['/ico/item', news.id]\" fragment=\"history-project\">История</a></li>\n\t\t\t\t\t<li><a href=\"{{news.white_paper}}\" target=\"_blank\">White paper <img src=\"img/pdf-icon.png\" alt=\"\"></a></li>\n\t\t\t\t\t<li><a [routerLink]=\"['/ico/item', news.id]\" fragment=\"comment-block\">Комментарии ({{commentcount}})</a></li>\n\t\t\t\t\t<!-- <li><a [routerLink]=\"['/ico/item', news.id]\" fragment=\"related-projects\">Похожие проекты (0)</a></li> -->\n\t\t\t\t</ul>\n\t\t\t\t<div class=\"basic-information\" id=\"basic-information\">\n\t\t\t\t\t<div class=\"basic-information-wrap\">\n\t\t\t\t\t\t<div class=\"left\">\n\t\t\t\t\t\t\t<h3 class=\"ico-title\">Основная информация</h3>\n\t\t\t\t\t\t\t<ul>\n\t\t\t\t\t\t\t\t<li><span class=\"gray\">Сайт:</span> <span class=\"black\"><a href=\"{{news.website}}\">{{news.website}}</a></span></li>\n\t\t\t\t\t\t\t\t<li><span class=\"gray\">Тип ICO</span><span class=\"black\">{{news.type==1 ? 'ICO' : 'Pre-ICO'}}</span> </li>\n\t\t\t\t\t\t\t\t<li><span class=\"gray\">Категория:</span><span class=\"black\">{{news.category}}</span></li>\n\t\t\t\t\t\t\t\t<li><span class=\"gray\">Цель сборов:</span><span class=\"black\">${{news.money}}</span></li>\n\t\t\t\t\t\t\t\t<li><span class=\"gray\">Наличие Эскроу:</span><span class=\"black\">{{news.escrow ==1? 'Да':'Нет'}}</span></li>\n\t\t\t\t\t\t\t\t<li><span class=\"gray\">Наличие рабочего прототипа:</span> <span class=\"black\">Нет</span></li>\n\t\t\t\t\t\t\t\t<li><span class=\"gray\">White paper:</span><span class=\"black\">{{news.white_paper ==2 ? 'Есть': 'Нет'}}</span> </li>\n\t\t\t\t\t\t\t\t<li><span class=\"gray\">Валюты:</span><span class=\"black\">{{news.currencies}}</span> </li>\n\t\t\t\t\t\t\t\t<li><span class=\"gray\">Платформа:</span><span class=\"black\">{{news.platform}}</span> </li>\n\t\t\t\t\t\t\t\t<li><span class=\"gray\">Местоположение:</span><span class=\"black\">{{news.place}}</span> </li>\n\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"right\">\n\t\t\t\t\t\t\t<h3 class=\"ico-title\">Статистика</h3>\n\t\t\t\t\t\t\t<div class=\"progress\">\n\t\t\t\t\t\t\t\t\t\t<span [ngStyle]=\"{'width': news.current_money/(news.money / 100)+'%' }\"></span>\n\t\t\t\t\t\t\t\t\t\t<p>${{news.current_money}} из {{news.money}}</p>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<ul>\n\t\t\t\t\t\t\t\t<li><span>Собрано {{news.current_money/(news.money / 100)  | number:'1.0-0'}}%</span></li>\n\t\t\t\t\t\t\t\t<li><span>Участвуют {{news.number_people}} чел.</span></li>\n\t\t\t\t\t\t\t\t<li><span>Осталось 25 дней</span></li>\n\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"text-wrap\" [innerHTML]=\"news.about\">\n\t\t\t\t\t\t\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"distribution-funds\" id=\"distribution-funds\">\n\t\t\t\t\t<h3 class=\"ico-title\">Распределение средств</h3>\n\t\t\t\t\t<ul class=\"persent\">\n\t\t\t\t\t\t<li *ngFor=\"let percent of percents\" style=\"width: 40%\" [ngStyle]=\"{'width':percent.percent+'%'}\"  [ngClass]=\"percentClass(percent.percent, 'first')\">{{percent.percent}}%</li>\n\t\t\t\t\t</ul>\n\t\t\t\t\t<ul class=\"persent-text\">\n\t\t\t\t\t\t<li *ngFor=\"let percent of percents\"><span class=\"bg\" [ngClass]=\"percentClass(percent.percent, 'second')\"></span><span class=\"text\" [ngClass]=\"percentClass(percent.percent, 'third')\">{{percent.percent}}% {{percent.name}}</span></li>\n\t\t\t\t\t</ul>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"team-genesis\" id=\"team-genesis\">\n\t\t\t\t\t<h3 class=\"ico-title\">Команда {{news.name}}</h3>\n\t\t\t\t\t<ul>\n\t\t\t\t\t\t<li *ngFor=\"let member of team\">\n\t\t\t\t\t\t\t<div class=\"img-wrap\">\n\t\t\t\t\t\t\t\t<img src=\"{{member.photo}}\" alt=\"\">\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<span class=\"bold\">{{member.name}}</span>\n\t\t\t\t\t\t\t<span>{{member.workplace}}</span>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t</ul>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"history-project\" id=\"history-project\">\n\t\t\t\t\t<h3 class=\"ico-title\">История развития проекта</h3>\n\t\t\t\t\t<ul>\n\t\t\t\t\t\t<!-- <li class=\"gray\">\n\t\t\t\t\t\t\t<span>Январь, 2017</span>\n\t\t\t\t\t\t\t<p>Start of development</p>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\t<li class=\"green\">\n\t\t\t\t\t\t\t<span>Январь, 2018</span>\n\t\t\t\t\t\t\t<p>Начало приватной продажи токенов</p>\n\t\t\t\t\t\t</li> -->\n\t\t\t\t\t\t<li [ngClass]=\"onState(map.state)\" *ngFor=\"let map of roadMap\">\n\t\t\t\t\t\t\t<span>{{map.date}}</span>\n\t\t\t\t\t\t\t<p [innerHTML]=\"map.desc\"></p>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\n\t\t\t\t\t</ul>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"comment-block\" id=\"comment-block\">\n\t\t\t\t\t<div class=\"comment-top\" *ngIf=\"user.id != undefined\">\n\t\t\t\t\t\t\t\t<h3>Добавить новый комментарий</h3>\n\t\t\t\t\t\t\t\t<form (ngSubmit)=\"submitComment(f, news.id, 'App\\\\IcoProject')\" #f=\"ngForm\">\n\t\t\t\t\t\t\t\t\t<input type=\"hidden\" ngModel name=\"post_id\" value=\"{{news?.id}}\">\n\t\t\t\t\t\t\t\t\t<input type=\"hidden\" ngModel name=\"commentable_type\" value=\"App\\News\">\n\t\t\t\t\t\t\t\t\t<textarea ngModel name=\"body\" placeholder=\"Начните вводить комментарий...\"></textarea>\n\t\t\t\t\t\t\t\t\t<button type=\"submit\">Добавить</button>\n\t\t\t\t\t\t\t\t</form>\n\t\t\t\t\t\t\t\t<p *ngIf=\"submitted\">Комментарий успешно добавлен</p>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"comment-top\" *ngIf=\"user.id == undefined\" style=\"background: none !important; border: none !important\">\n\t\t\t\t\t\t<h3>Комментарии ({{commentcount}})</h3>\n\t\t\t\t\t\t<p>Для того чтобы добавить свой комментарий - Вам необходимо <a href=\"#login-popup\" class=\"popup-link\">авторизоваться</a> или <a href=\"#check-popup\" class=\"popup-link\">пройти регистрацию.</a></p>\n\t\t\t\t\t</div>\n\t\t\t\t\t\n\t\t\t\t\t<div *ngIf=\"user.id != undefined\" style=\"background: none !important; border: none !important\" class=\"comment-top\">\n\t\t\t\t\t\t<h3 >Комментарии ({{commentcount}})</h3>\n\t\t\t\t\t\t<!-- <p>Для того чтобы добавить свой комментарий - Вам необходимо <a href=\"#login-popup\" class=\"popup-link\">авторизоваться</a> или <a href=\"#check-popup\" class=\"popup-link\">пройти регистрацию.</a></p> -->\n\n\t\t\t\t\t\n\t\t\t\t\t</div>\n\t\t\t\t\t<ul class=\"comment-items\">\n\t\t\t\t\t\t<!--  -->\n\t\t\t\t\t\t<li *ngFor=\"let item of comments\">\n\t\t\t\t\t\t\t<div class=\"left\">\n\t\t\t\t\t\t\t\t<div class=\"info\">\n\t\t\t\t\t\t\t\t\t<div class=\"img-wrap\">\n\t\t\t\t\t\t\t\t\t\t<img src=\"{{item.photo}}\" style=\"max-width: 35px; height: auto;\" alt=\"\">\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"text-wrap\">\n\t\t\t\t\t\t\t\t\t\t<p>{{item.author}}</p>\n\t\t\t\t\t\t\t\t\t\t<span>Добавлен {{item.created_at}}</span>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<p class=\"comment-text\">{{item.body}}</p>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"right\">\n\t\t\t\t\t\t\t\t<div class=\"img-wrap\"></div>\n\t\t\t\t\t\t\t\t<div class=\"btn-block\">\n\t\t\t\t\t\t\t\t\t<span class=\"number-green\">0</span>\n\t\t\t\t\t\t\t\t\t<div class=\"buttons\">\n\t\t\t\t\t\t\t\t\t\t<a href=\"#\" class=\"plus\">+</a>\n\t\t\t\t\t\t\t\t\t\t<a href=\"#\" class=\"minus\">-</a>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</li>\n\n\t\t\t\t\t</ul>\n\t\t\t\t\t<!-- <a href=\"#\" class=\"show-comments\">Показать все комментарии (22)</a> -->\n\t\t\t\t</div>\n\t\t\t\t<!-- <div class=\"related-projects\" id=\"related-projects\">\n\t\t\t\t\t<h3 class=\"ico-title\">Похожие проекты (2)</h3>\n\t\t\t\t\t<div class=\"project-block\">\n\t\t\t\t\t\t<div class=\"img-wrap\">\n\t\t\t\t\t\t\t<a href=\"#\"><img src=\"img/project-img1.jpg\" alt=\"\"></a>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"text-wrap\">\n\t\t\t\t\t\t\t<div class=\"text-info\">\n\t\t\t\t\t\t\t\t<p><a href=\"#\" class=\"project-title\">Genesis (Дженезис) Mining</a><a href=\"#\" class=\"comments\"><i class=\"fa fa-comment\" aria-hidden=\"true\"></i>5</a></p>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"project-info-content\">\n\t\t\t\t\t\t\t\t<div class=\"info\">\n\t\t\t\t\t\t\t\t\t<p class=\"status active-status\">Статус: <span>Активен</span></p>\n\t\t\t\t\t\t\t\t\t<p class=\"year\">от 21.10.2017 до 11.04.2018</p>\n\t\t\t\t\t\t\t\t\t<p class=\"last-updated\">Последнее обновление: 11.11.2017</p>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"progress-bar\">\n\t\t\t\t\t\t\t\t\t<a href=\"#\" class=\"product-gray-btn\">Недвижимость</a>\n\t\t\t\t\t\t\t\t\t<div class=\"progress\">\n\t\t\t\t\t\t\t\t\t\t<span style=\"width: 15%\"></span>\n\t\t\t\t\t\t\t\t\t\t<p>$45 000 из 12 110 000</p>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<a href=\"#\" class=\"follow\"><span class=\"plus\">+</span><span class=\"text\">Следить</span></a>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<p class=\"more-project\">Криптовалюты для облачного майнинга, предоставляемые сервисом Genesis Mining: По алгоритму SHA-256: Bitcoin (BTC)\n\t\t\t\t\t\t\t<a href=\"#\">Подробнее о проекте</a></p>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"project-block\">\n\t\t\t\t\t\t<div class=\"img-wrap\">\n\t\t\t\t\t\t\t<a href=\"#\"><img src=\"img/project-img1.jpg\" alt=\"\"></a>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"text-wrap\">\n\t\t\t\t\t\t\t<div class=\"text-info\">\n\t\t\t\t\t\t\t\t<p><a href=\"#\" class=\"project-title\">Genesis (Дженезис)</a><a href=\"#\" class=\"comments\"><i class=\"fa fa-comment\" aria-hidden=\"true\"></i>5</a></p>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"project-info-content\">\n\t\t\t\t\t\t\t\t<div class=\"info\">\n\t\t\t\t\t\t\t\t\t<p class=\"status inactive-status\">Статус: <span>Не активен</span></p>\n\t\t\t\t\t\t\t\t\t<p class=\"year\">от 21.10.2017 до 11.04.2018</p>\n\t\t\t\t\t\t\t\t\t<p class=\"last-updated\">Последнее обновление: Вчера в 13:45</p>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"progress-bar\">\n\t\t\t\t\t\t\t\t\t<a href=\"#\" class=\"product-gray-btn\">Технологии</a>\n\t\t\t\t\t\t\t\t\t<div class=\"progress\">\n\t\t\t\t\t\t\t\t\t\t<span style=\"width: 15%\"></span>\n\t\t\t\t\t\t\t\t\t\t<p>$45 000 из 12 110 000</p>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<a href=\"#\" class=\"follow\"><span class=\"minus\"><img src=\"img/minus.png\" alt=\"\"></span><span class=\"text text-red\">Следить</span></a>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<p class=\"more-project\">Криптовалюты для облачного майнинга, предоставляемые сервисом Genesis Mining: По алгоритму SHA-256: Bitcoin (BTC)\n\t\t\t\t\t\t\t<a href=\"#\">Подробнее о проекте</a></p>\n\t\t\t\t\t</div>\n\t\t\t\t</div> -->\n\t\t\t</div>"

/***/ }),

/***/ "./angular/app/ico-project/ico-project-detail/ico-project-detail.component.scss":
/***/ (function(module, exports) {

module.exports = ".ico-wrap {\n  padding-top: 22px;\n  padding-bottom: 44px;\n  background: #f5f5f5; }\n\n.ico-wrap .wrapper {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n  -ms-flex-pack: justify;\n  justify-content: space-between; }\n\n.ico-card-content {\n  max-width: 880px;\n  width: 100%; }\n\n.ico-card-content .comment-top {\n  background-color: transparent;\n  border: none; }\n\n.ico-card-content .related-projects {\n  margin-top: 30px; }\n\n.ico-card-content .related-projects > h3 {\n  margin-bottom: 18px;\n  padding-left: 22px; }\n\n.ico-card-content .history-project {\n  border-bottom: 1px solid #e3e3e3;\n  border-left: 1px solid #eee;\n  border-right: 1px solid #eee;\n  background: #fff;\n  padding: 30px 19px 0; }\n\n.ico-card-content .history-project h3 {\n  margin-bottom: 20px; }\n\n.ico-card-content .history-project ul {\n  text-align: center; }\n\n.ico-card-content .history-project ul li {\n  padding-bottom: 35px;\n  position: relative; }\n\n.ico-card-content .history-project ul li:after {\n  content: '';\n  position: absolute;\n  bottom: 8px;\n  left: 50%;\n  margin-left: -1px;\n  width: 2px;\n  height: 17px;\n  background: #aeaeae; }\n\n.ico-card-content .history-project ul li span {\n  font-size: 14px;\n  font-weight: bold;\n  color: #000;\n  display: inline-block;\n  margin-bottom: 5px; }\n\n.ico-card-content .history-project ul li p {\n  font-size: 18px;\n  color: #000; }\n\n.ico-card-content .history-project ul li.gray p,\n.ico-card-content .history-project ul li.gray span {\n  color: #a1a1a1; }\n\n.ico-card-content .history-project ul li.green p,\n.ico-card-content .history-project ul li.green span {\n  color: #396c19; }\n\n.ico-card-content .history-project ul li:last-child:after {\n  content: none; }\n\n.ico-card-content .team-genesis {\n  padding: 30px 0 40px 20px; }\n\n.ico-card-content .team-genesis h3 {\n  margin-bottom: 20px; }\n\n.ico-card-content .team-genesis ul {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex; }\n\n.ico-card-content .team-genesis ul li {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n  -ms-flex-direction: column;\n  flex-direction: column;\n  margin-right: 25px; }\n\n.ico-card-content .team-genesis ul li .img-wrap {\n  width: 96px;\n  height: 96px;\n  margin-bottom: 16px; }\n\n.ico-card-content .team-genesis ul li .img-wrap img {\n  width: 100%; }\n\n.ico-card-content .team-genesis ul li span {\n  font-size: 14px;\n  color: #000; }\n\n.ico-card-content .team-genesis ul li span.bold {\n  font-weight: bold;\n  margin-bottom: 5px; }\n\n.ico-card-content .distribution-funds {\n  border-bottom: 1px solid #e3e3e3;\n  border-left: 1px solid #eee;\n  border-right: 1px solid #eee;\n  background: #fff;\n  padding: 30px 18px; }\n\n.ico-card-content .distribution-funds .persent {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  margin: 17px 0 10px; }\n\n.ico-card-content .distribution-funds .persent li {\n  font-size: 18px;\n  font-weight: bold;\n  color: #fff;\n  height: 46px;\n  padding-left: 13px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n  -ms-flex-align: center;\n  align-items: center; }\n\n.ico-card-content .distribution-funds .persent li.gray {\n  background: #383c46; }\n\n.ico-card-content .distribution-funds .persent li.blue {\n  background: #298fd7; }\n\n.ico-card-content .distribution-funds .persent li.purple {\n  background: #bb3ee4; }\n\n.ico-card-content .distribution-funds .persent li.green {\n  background: #84bf58; }\n\n.ico-card-content .distribution-funds .persent-text li {\n  margin-bottom: 10px; }\n\n.ico-card-content .distribution-funds .persent-text li:last-child {\n  margin-bottom: 0; }\n\n.ico-card-content .distribution-funds .persent-text li .bg {\n  display: inline-block;\n  width: 10px;\n  height: 10px;\n  margin-right: 4px; }\n\n.ico-card-content .distribution-funds .persent-text li .bg.bg-gray {\n  background: #383c46; }\n\n.ico-card-content .distribution-funds .persent-text li .bg.bg-blue {\n  background: #298fd7; }\n\n.ico-card-content .distribution-funds .persent-text li .bg.bg-purple {\n  background: #bb3ee4; }\n\n.ico-card-content .distribution-funds .persent-text li .bg.bg-green {\n  background: #84bf58; }\n\n.ico-card-content .distribution-funds .persent-text li .text {\n  font-size: 14px; }\n\n.ico-card-content .distribution-funds .persent-text li .text.text-gray {\n  color: #383c46; }\n\n.ico-card-content .distribution-funds .persent-text li .text.text-blue {\n  color: #298fd7; }\n\n.ico-card-content .distribution-funds .persent-text li .text.text-purple {\n  color: #bb3ee4; }\n\n.ico-card-content .distribution-funds .persent-text li .text.text-green {\n  color: #84bf58; }\n\n.ico-card-content .basic-information {\n  border-bottom: 1px solid #e3e3e3;\n  border-left: 1px solid #eee;\n  border-right: 1px solid #eee;\n  background: #fff;\n  padding: 24px 20px 28px; }\n\n.ico-card-content .basic-information .basic-information-wrap {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n  -ms-flex-pack: justify;\n  justify-content: space-between;\n  margin-bottom: 28px; }\n\n.ico-card-content .basic-information .basic-information-wrap .left h3 {\n  margin-bottom: 24px; }\n\n.ico-card-content .basic-information .basic-information-wrap .left ul li {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex; }\n\n.ico-card-content .basic-information .basic-information-wrap .left ul li .gray {\n  font-size: 16px;\n  color: #8f8f8f;\n  display: inline-block;\n  margin-bottom: 5px;\n  min-width: 294px; }\n\n.ico-card-content .basic-information .basic-information-wrap .left ul li .black {\n  font-size: 16px;\n  color: #1d1f24;\n  display: inline-block;\n  text-align: left; }\n\n.ico-card-content .basic-information .basic-information-wrap .left ul li .black a {\n  font-size: 16px;\n  color: #1d1f24; }\n\n.ico-card-content .basic-information .basic-information-wrap .right h3 {\n  margin-bottom: 15px; }\n\n.ico-card-content .basic-information .basic-information-wrap .right ul {\n  padding: 12px;\n  background: #f5f5f5;\n  margin-top: 1px; }\n\n.ico-card-content .basic-information .basic-information-wrap .right ul li {\n  margin-bottom: 5px; }\n\n.ico-card-content .basic-information .basic-information-wrap .right ul li:last-child {\n  margin-bottom: 0; }\n\n.ico-card-content .basic-information .basic-information-wrap .right ul li span {\n  font-weight: bold;\n  font-size: 14px;\n  color: #6e6e6e; }\n\n.ico-card-content .basic-information .text-wrap p {\n  color: #1d1f24;\n  font-size: 16px;\n  line-height: 18px; }\n\n.ico-card-content .basic-information .text-wrap a {\n  margin-top: 22px;\n  color: #1d1f24;\n  font-size: 16px;\n  text-decoration: underline; }\n\n.ico-card-content .card-menu {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  margin-bottom: 10px;\n  margin-top: 24px; }\n\n.ico-card-content .card-menu li {\n  margin-right: 1px; }\n\n.ico-card-content .card-menu li:last-child {\n  margin-right: 0; }\n\n.ico-card-content .card-menu li a {\n  height: 32px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n  -ms-flex-align: center;\n  align-items: center;\n  -webkit-box-pack: center;\n  -ms-flex-pack: center;\n  justify-content: center;\n  background: #c1c1c1;\n  font-size: 14px;\n  font-weight: bold;\n  color: #666;\n  padding: 0 17px; }\n\n.ico-card-content .card-menu li a:hover {\n  color: #dc7f1c; }\n\n.ico-card-content .card-menu li a img {\n  margin-left: 4px; }\n\n.ico-card-content > .project-block {\n  padding: 0;\n  padding-left: 22px;\n  background-color: transparent;\n  border: none; }\n\n.ico-card-content > .project-block .project-title {\n  font-size: 32px;\n  margin-bottom: 8px; }\n\n.ico-card-content > .project-block .project-title .comments {\n  margin-left: 13px;\n  margin-top: 2px; }\n\n.ico-card-content > .project-block .status {\n  margin-bottom: 4px; }\n\n.ico-card-content > .project-block .year {\n  margin-bottom: 12px; }\n\n.ico-card-content > .project-block .progress-bar {\n  margin-right: 25px; }\n\n.ico-wrapper {\n  background: #f9f9f9;\n  padding-top: 20px;\n  padding-bottom: 44px; }\n\n.ico-wrapper .categories-ico-title {\n  margin-top: 11px; }\n\n.ico-wrapper .wrapper {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n  -ms-flex-pack: justify;\n  justify-content: space-between; }\n\n.ico-wrapper .wrapper .ico-content {\n  max-width: 880px;\n  width: 100%; }\n\n.ico-wrapper .wrapper .ico-content .ico-head {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  padding-bottom: 12px;\n  -webkit-box-align: center;\n  -ms-flex-align: center;\n  align-items: center; }\n\n.ico-wrapper .wrapper .ico-content .ico-head h1 {\n  font-size: 36px;\n  color: #1d1f24;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n  -ms-flex-align: center;\n  align-items: center;\n  margin-right: 24px; }\n\n.ico-wrapper .wrapper .ico-content .ico-head h1 span {\n  display: inline-block;\n  margin-left: 12px;\n  font-size: 14px;\n  color: #595959; }\n\n.ico-wrapper .wrapper .ico-content .ico-head .ico-tabs {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex; }\n\n.ico-wrapper .wrapper .ico-content .ico-head .ico-tabs li {\n  margin-right: 8px; }\n\n.ico-wrapper .wrapper .ico-content .ico-head .ico-tabs li a {\n  padding: 0 12px;\n  border-radius: 18px;\n  height: 39px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n  -ms-flex-align: center;\n  align-items: center;\n  background: #e5e5e5;\n  color: #010a3b;\n  font-size: 14px; }\n\n.ico-wrapper .wrapper .ico-content .ico-head .ico-tabs li.active a, .ico-wrapper .wrapper .ico-content .ico-head .ico-tabs li:hover a {\n  color: #fff;\n  background: #f58c1b; }\n\n.ico-wrapper .wrapper .ico-content .ico-head form {\n  max-width: 244px;\n  width: 100%;\n  height: 44px;\n  border: 1px solid #ebebeb;\n  border-radius: 20px;\n  position: relative;\n  margin-left: auto; }\n\n.ico-wrapper .wrapper .ico-content .ico-head form input {\n  border-radius: 20px;\n  border: none;\n  height: 100%;\n  width: 100%;\n  padding: 0 52px 0 14px;\n  font-size: 14px;\n  color: #010a3b; }\n\n.ico-wrapper .wrapper .ico-content .ico-head form input::-webkit-input-placeholder {\n  color: #010a3b; }\n\n.ico-wrapper .wrapper .ico-content .ico-head form input::-moz-placeholder {\n  color: #010a3b; }\n\n.ico-wrapper .wrapper .ico-content .ico-head form input:-ms-input-placeholder {\n  color: #010a3b; }\n\n.ico-wrapper .wrapper .ico-content .ico-head form input:-moz-placeholder {\n  color: #010a3b; }\n\n.ico-wrapper .wrapper .ico-content .ico-head form button {\n  position: absolute;\n  top: 50%;\n  -webkit-transform: translateY(-50%);\n          transform: translateY(-50%);\n  right: 22px;\n  background: none;\n  border: none;\n  height: 100%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex; }\n\n.ico-wrapper .wrapper .ico-content .ico-head form button img {\n  opacity: .5; }\n\n.ico-wrapper .wrapper .ico-content .project-block {\n  border-top: 1px solid #eaeaea;\n  border-right: 1px solid #eee;\n  border-left: 1px solid #eee; }\n\n.ico-wrapper .wrapper .ico-content .project-block.no-bg {\n  background-color: transparent;\n  border: none; }\n\n.ico-wrapper .wrapper .ico-content .project-block .no-deposite {\n  background: #fff;\n  border: 1px solid #efefef;\n  width: 196px;\n  height: 33px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n  -ms-flex-align: center;\n  align-items: center;\n  padding-left: 12px;\n  font-size: 14px;\n  color: #818181;\n  font-weight: bold; }\n\n.ico-wrapper .wrapper .ico-content .project-block.hidden {\n  display: none; }\n\n.project-wrapper {\n  display: none; }\n\n.project-wrapper.active {\n  display: block; }\n\n.popup {\n  position: relative;\n  max-width: 433px;\n  height: 449px;\n  margin: auto auto;\n  padding: 40px 38px 34px;\n  -webkit-box-shadow: 0px 5px 30px 0px rgba(0, 0, 0, 0.1);\n  box-shadow: 0px 5px 30px 0px rgba(0, 0, 0, 0.1); }\n\n.popup h2 {\n  font-size: 30px;\n  color: #000;\n  margin-bottom: 18px; }\n\n.popup p {\n  font-size: 14px;\n  color: #707070;\n  margin-bottom: 20px; }\n\n.popup .add-portfolio {\n  font-size: 14px;\n  color: #58a721;\n  display: inline-block;\n  margin: 14px 0 10px;\n  position: relative;\n  padding-bottom: 5px; }\n\n.popup .add-portfolio:after {\n  content: '';\n  border: 1px dashed #58a721;\n  position: absolute;\n  bottom: 0px;\n  left: 0;\n  width: 100%; }\n\nbody .mfp-zoom-in.mfp-ready.mfp-bg {\n  background: #fff;\n  opacity: 1; }\n\n.mfp-zoom-in .mfp-with-anim {\n  opacity: 0;\n  -webkit-transition: all 0.2s ease-in-out;\n  transition: all 0.2s ease-in-out;\n  -webkit-transform: scale(0.8);\n          transform: scale(0.8); }\n\n.mfp-zoom-in.mfp-bg {\n  opacity: 0;\n  -webkit-transition: all 0.3s ease-out;\n  transition: all 0.3s ease-out; }\n\n.mfp-zoom-in.mfp-ready .mfp-with-anim {\n  opacity: 1;\n  -webkit-transform: scale(1);\n          transform: scale(1); }\n\n.mfp-zoom-in.mfp-ready.mfp-bg {\n  opacity: 0.8; }\n\n.mfp-zoom-in.mfp-removing .mfp-with-anim {\n  -webkit-transform: scale(0.8);\n          transform: scale(0.8);\n  opacity: 0; }\n\n.mfp-zoom-in.mfp-removing.mfp-bg {\n  opacity: 0; }\n\n.ico-card-content {\n  max-width: 880px;\n  margin-left: -40px; }\n\n.project-block .text-wrap .text-info > p .comments {\n  margin-left: 10px !important; }\n\n.ico-card-content {\n  max-width: 880px;\n  min-width: 880px;\n  margin-left: -40px; }\n\n.project-block .text-wrap .text-info > p .comments {\n  margin-left: 10px !important; }\n\n.mining-wrapper {\n  padding-top: 22px;\n  padding-bottom: 44px;\n  background: #f5f5f5; }\n\n.mining-wrapper .wrapper {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n  -ms-flex-pack: justify;\n  justify-content: space-between; }\n\n.sidebar {\n  margin-top: 10px; }\n\n.mining-content {\n  max-width: 880px;\n  width: 100%; }\n\n.mining-content .select-wrap-ico .select2, .mining-content .select-wrap-mining .select2 {\n  max-width: 205px !important; }\n\n.mining-content .mining-head {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  padding-bottom: 12px;\n  -webkit-box-align: center;\n  -ms-flex-align: center;\n  align-items: center; }\n\n.mining-content .mining-head h1 {\n  font-size: 36px;\n  color: #1d1f24;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n  -ms-flex-align: center;\n  align-items: center;\n  margin-right: 24px; }\n\n.mining-content .mining-head h1 span {\n  display: inline-block;\n  margin-left: 12px;\n  font-size: 14px;\n  color: #595959;\n  margin-top: 6px; }\n\n.mining-content .mining-head .mining-tabs {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex; }\n\n.mining-content .mining-head .mining-tabs li {\n  margin-right: 8px; }\n\n.mining-content .mining-head .mining-tabs li a {\n  padding: 0 12px;\n  border-radius: 18px;\n  height: 39px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n  -ms-flex-align: center;\n  align-items: center;\n  background: #e5e5e5;\n  color: #010a3b;\n  font-size: 14px; }\n\n.mining-content .mining-head .mining-tabs li.active a, .mining-content .mining-head .mining-tabs li:hover a {\n  color: #fff;\n  background: #f58c1b; }\n\n.mining-content .mining-head form {\n  max-width: 244px;\n  width: 100%;\n  height: 44px;\n  border: 1px solid #ebebeb;\n  border-radius: 20px;\n  position: relative;\n  margin-left: auto; }\n\n.mining-content .mining-head form input {\n  border-radius: 20px;\n  border: none;\n  height: 100%;\n  width: 100%;\n  padding: 0 52px 0 14px;\n  font-size: 14px;\n  color: #010a3b; }\n\n.mining-content .mining-head form input::-webkit-input-placeholder {\n  color: #010a3b; }\n\n.mining-content .mining-head form input::-moz-placeholder {\n  color: #010a3b; }\n\n.mining-content .mining-head form input:-ms-input-placeholder {\n  color: #010a3b; }\n\n.mining-content .mining-head form input:-moz-placeholder {\n  color: #010a3b; }\n\n.mining-content .mining-head form button {\n  position: absolute;\n  top: 50%;\n  -webkit-transform: translateY(-50%);\n          transform: translateY(-50%);\n  right: 22px;\n  background: none;\n  border: none;\n  height: 100%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex; }\n\n.mining-content .mining-head form button img {\n  opacity: .5; }\n\n.mining-content .project-info-content .progress p {\n  color: #383c46;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  font-weight: normal; }\n\n.mining-content .project-info-content .progress p b {\n  display: inline-block;\n  font-weight: bold;\n  margin-left: 5px; }\n\n.show-more {\n  margin-top: 35px; }\n\n.project-block.hidden {\n  display: none; }\n\n.progress .bold {\n  font-weight: bold;\n  color: #000; }\n\n.basic-information .right {\n  margin-top: 26px; }\n\n.basic-information .right p {\n  font-weight: bold;\n  color: #000; }\n\n.history-table {\n  margin: 22px 0 24px; }\n\n.history-table .history-title-block {\n  height: 43px;\n  width: 100%;\n  background: #e5e5e5;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n  -ms-flex-align: center;\n  align-items: center; }\n\n.history-table .history-title-block h2 {\n  margin-left: 20px;\n  font-size: 18px;\n  color: #1d1f24;\n  font-weight: bold; }\n\n.history-table table {\n  width: 100%;\n  border: 1px solid #fff; }\n\n.history-table table thead tr {\n  height: 30px;\n  background: #f7f7f7; }\n\n.history-table table thead tr th:first-child {\n  padding-left: 18px; }\n\n.history-table table thead tr th span {\n  font-size: 12px;\n  color: #555; }\n\n.history-table table tbody tr {\n  background: #fff;\n  height: 35px;\n  border-bottom: 1px solid #e5e5e5; }\n\n.history-table table tbody tr.hidden {\n  display: none; }\n\n.history-table table td:first-child {\n  padding-left: 18px; }\n\n.history-table table td .price {\n  font-size: 14px;\n  font-weight: bold;\n  color: #1d1f24; }\n\n.history-table table td .operation {\n  font-size: 14px; }\n\n.history-table table td .operation.operation-green {\n  color: #529127; }\n\n.history-table table td .operation.operation-red {\n  color: #f00; }\n\n.history-table table td .comment {\n  font-size: 14px;\n  color: #1d1f24; }\n\n.history-table table td .date {\n  font-size: 14px;\n  color: #1d1f24; }\n\n.ico-card-content {\n  max-width: 880px;\n  margin-left: -40px; }\n\n.project-block .text-wrap .text-info > p .comments {\n  margin-left: 10px !important; }\n\n.comment-block {\n  margin-top: 30px; }\n\n.comment-block .comment-top {\n  border-bottom: 1px solid #e3e3e3;\n  background: #fff;\n  padding: 20px 19px 19px 20px; }\n\n.comment-block .comment-top h3 {\n  font-size: 18px;\n  font-weight: bold;\n  color: #000;\n  margin-bottom: 10px; }\n\n.comment-block .comment-top p {\n  font-size: 14px;\n  font-weight: bold;\n  color: #fa5252; }\n\n.comment-block .comment-top p a {\n  color: #fa5252;\n  text-decoration: underline; }\n\n.comment-block .comment-items {\n  padding: 0 22px 0 18px; }\n\n.comment-block .comment-items li {\n  padding: 20px 0;\n  border-bottom: 1px solid #a4a4a4;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n  -ms-flex-pack: justify;\n  justify-content: space-between;\n  width: 100%; }\n\n.comment-block .comment-items li:last-child {\n  border: none; }\n\n.comment-block .comment-items li.hidden {\n  display: none; }\n\n.comment-block .comment-items li .left .info {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n  -ms-flex-align: center;\n  align-items: center;\n  margin-bottom: 8px; }\n\n.comment-block .comment-items li .left .info .img-wrap {\n  width: 35px;\n  height: 35px;\n  margin-right: 12px; }\n\n.comment-block .comment-items li .left .info .img-wrap img {\n  width: 100%;\n  border-radius: 50%; }\n\n.comment-block .comment-items li .left .info .text-wrap p {\n  font-size: 11px;\n  font-weight: bold;\n  color: #000; }\n\n.comment-block .comment-items li .left .info .text-wrap span {\n  display: inline-block;\n  font-weight: bold;\n  font-size: 11px;\n  color: #777; }\n\n.comment-block .comment-items li .left .comment-text {\n  color: #000;\n  font-size: 16px; }\n\n.comment-block .comment-items li .right {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n  -ms-flex-align: center;\n  align-items: center;\n  -webkit-box-pack: justify;\n  -ms-flex-pack: justify;\n  justify-content: space-between;\n  min-width: 78px; }\n\n.comment-block .comment-items li .right .btn-block {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n  -ms-flex-align: center;\n  align-items: center; }\n\n.comment-block .comment-items li .right .btn-block .number-green {\n  font-size: 24px;\n  color: #8cc863; }\n\n.comment-block .comment-items li .right .btn-block .number-red {\n  font-size: 24px;\n  color: #fa5252; }\n\n.comment-block .comment-items li .right .btn-block .buttons {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n  -ms-flex-direction: column;\n  flex-direction: column;\n  margin-left: 9px; }\n\n.comment-block .comment-items li .right .btn-block .buttons a {\n  width: 20px;\n  height: 20px;\n  border-radius: 50%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n  -ms-flex-align: center;\n  align-items: center;\n  -webkit-box-pack: center;\n  -ms-flex-pack: center;\n  justify-content: center; }\n\n.comment-block .comment-items li .right .btn-block .buttons .plus {\n  margin-bottom: 4px;\n  color: #fff;\n  font-size: 18px;\n  background: #8cc863; }\n\n.comment-block .comment-items li .right .btn-block .buttons .plus:hover {\n  background: #c0deac; }\n\n.comment-block .comment-items li .right .btn-block .buttons .minus {\n  color: #fff;\n  font-size: 18px;\n  background: #fa5252; }\n\n.comment-block .comment-items li .right .btn-block .buttons .minus:hover {\n  background: #f8a3a3; }\n\n.comment-block .show-comments {\n  width: 100%;\n  height: 42px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n  -ms-flex-align: center;\n  align-items: center;\n  -webkit-box-pack: center;\n  -ms-flex-pack: center;\n  justify-content: center;\n  font-weight: bold;\n  font-size: 14px;\n  margin-top: -1px;\n  color: #383c46;\n  background: #c1c1c1; }\n\n.comment-block .show-comments:hover {\n  background: #383c46;\n  color: #fff; }\n\n.comment-block .total-comments {\n  font-size: 18px;\n  font-weight: bold;\n  color: #000;\n  margin-left: 18px;\n  margin-top: 24px; }\n\n.comment-wrap {\n  margin-top: -15px;\n  margin-bottom: 25px; }\n\n.comment-items li:last-child {\n  border: none; }\n\n.comment-top {\n  padding: 18px 25px 21px 15px; }\n\n.comment-top form textarea {\n  height: 54px;\n  border: 1px solid #e4e4e4;\n  width: 100%;\n  resize: none;\n  font-size: 14px;\n  color: #949494;\n  padding: 10px;\n  margin-bottom: 10px; }\n\n.comment-top form textarea::-webkit-input-placeholder {\n  color: #949494; }\n\n.comment-top form textarea::-moz-placeholder {\n  color: #949494; }\n\n.comment-top form textarea:-ms-input-placeholder {\n  color: #949494; }\n\n.comment-top form textarea:-moz-placeholder {\n  color: #949494; }\n\n.comment-top form textarea:focus {\n  outline: none; }\n\n.comment-top form button {\n  height: 34px;\n  background: #f58c1b;\n  color: #fff;\n  font-size: 14px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n  -ms-flex-align: center;\n  align-items: center;\n  padding: 0px 17px;\n  border: none;\n  font-weight: bold; }\n"

/***/ }),

/***/ "./angular/app/ico-project/ico-project-detail/ico-project-detail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export NewsRaw */
/* unused harmony export User */
/* unused harmony export CommentRaw */
/* unused harmony export Team */
/* unused harmony export RoadMap */
/* unused harmony export Percent */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IcoProjectDetailComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/@angular/common/http.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// import { interval } from 'rxjs/Observable/interval';


var NewsRaw = (function () {
    function NewsRaw() {
    }
    return NewsRaw;
}());

var User = (function () {
    function User() {
    }
    return User;
}());

var CommentRaw = (function () {
    function CommentRaw() {
    }
    return CommentRaw;
}());

var Team = (function () {
    function Team() {
    }
    return Team;
}());

var RoadMap = (function () {
    function RoadMap() {
    }
    return RoadMap;
}());

var Percent = (function () {
    function Percent() {
    }
    return Percent;
}());

var IcoProjectDetailComponent = (function () {
    function IcoProjectDetailComponent(http, router, route) {
        this.http = http;
        this.router = router;
        this.route = route;
        this.comments = [];
        this.submitted = false;
        this.commentcount = 0;
        this.percents = [];
    }
    IcoProjectDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        var id = this.route.snapshot.params['id'];
        var path = "/icoraw/" + id;
        var info = this.http.get(path);
        info.subscribe(function (response) {
            console.log(response['news']);
            console.log(response);
            _this.news = response['news'][0];
            _this.news.category = response.category.name;
            console.log(_this.news);
            for (var _i = 0, _a = response['comments']; _i < _a.length; _i++) {
                var item = _a[_i];
                _this.comments.push({
                    id: item['id'],
                    email: item['email'],
                    author: item['author'],
                    body: item['body'],
                    commentable_id: item['commentable_id'],
                    photo: item['photo']
                });
                _this.commentcount = _this.commentcount + 1;
            }
            _this.team = response['team'];
            _this.roadMap = response['roadmap'];
        });
        this.route.fragment.subscribe(function (fragment) { _this.fragment = fragment; });
        try {
            document.querySelector('#' + this.fragment).scrollIntoView();
        }
        catch (e) { }
        this.router.events.subscribe(function (evt) {
            if (!(evt instanceof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* NavigationEnd */])) {
                return;
            }
            window.scrollTo(0, 0);
        });
        var userpath = "/angular/user";
        var userinfo = this.http.get(userpath);
        userinfo.subscribe(function (response) {
            _this.user = {
                id: response.id,
                name: response.name,
                email: response.email,
                photo_id: response.photo_id,
                role_id: response.role_id
            };
        });
        var percentpath = "/angular/funds/" + id;
        var percentinfo = this.http.get(percentpath);
        percentinfo.subscribe(function (response) {
            for (var _i = 0, response_1 = response; _i < response_1.length; _i++) {
                var item = response_1[_i];
                _this.percents.push({
                    id: item['id'],
                    percent: item['percent'],
                    name: item['name']
                });
            }
            console.log(_this.percents);
        });
    };
    // @ViewChild('f') Form:NgForm;
    IcoProjectDetailComponent.prototype.submitComment = function (form, post_id, type) {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["c" /* HttpHeaders */]({ 'Content-type': 'Application/json ' });
        this.http.post('/storecomment', {
            'post_id': post_id,
            'body': form.value.body,
            'commentable_id': post_id,
            'commentable_type': type
        }, { headers: headers }).subscribe(function (response) {
            return _this.comments.unshift({
                id: response['id'],
                email: response['email'],
                author: response['author'],
                body: response['body'],
                commentable_id: response['commentable_id'],
                photo: response['photo']
            });
        }, function (error) { return console.log(error); });
        form.reset();
        this.submitted = true;
        this.commentcount = this.commentcount + 1;
    };
    IcoProjectDetailComponent.prototype.goBack = function () {
        this.router.navigateByUrl('/ico/all');
    };
    IcoProjectDetailComponent.prototype.percentClass = function (percent, type) {
        if (type == 'first') {
            if (percent >= 40) {
                return 'gray';
            }
            else if (percent >= 30) {
                return 'blue';
            }
            else if (percent >= 20) {
                return 'purple';
            }
            else if (percent >= 10) {
                return 'green';
            }
        }
        if (type == 'second') {
            if (percent >= 40) {
                return 'bg-gray';
            }
            else if (percent >= 30) {
                return 'bg-blue';
            }
            else if (percent >= 20) {
                return 'bg-purple';
            }
            else if (percent >= 10) {
                return 'bg-green';
            }
        }
        if (type == 'third') {
            if (percent >= 40) {
                return 'text-grya';
            }
            else if (percent >= 30) {
                return 'text-blue';
            }
            else if (percent >= 20) {
                return 'text-purple';
            }
            else if (percent >= 10) {
                return 'text-green';
            }
        }
    };
    IcoProjectDetailComponent.prototype.onState = function (state) {
        if (state == 'past') {
            return 'gray';
        }
        else if (state == 'current') {
            return 'green';
        }
        else {
            return 'ok';
        }
    };
    return IcoProjectDetailComponent;
}());
IcoProjectDetailComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-ico-project-detail',
        template: __webpack_require__("./angular/app/ico-project/ico-project-detail/ico-project-detail.component.html"),
        styles: [__webpack_require__("./angular/app/ico-project/ico-project-detail/ico-project-detail.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _c || Object])
], IcoProjectDetailComponent);

var _a, _b, _c;
//# sourceMappingURL=ico-project-detail.component.js.map

/***/ }),

/***/ "./angular/app/ico-project/ico-project.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"ico-wrapper\">\n    <div class=\"wrapper\">\n    \t<router-outlet></router-outlet>\n<aside class=\"sidebar\">\n\t\t\t\t<h2 class=\"categories-ico-title\">Категории ICO </h2>\n\t\t\t\t<ul class=\"tag-list\">\n\t\t\t\t\t<li><a routerLink=\"/ico/all\" routerLinkActive=\"active\" >Все</a></li>\n          \n\t\t\t\t\t<li *ngFor=\"let category of categories\">\n\t\t\t\t\t<a\n\t\t\t\t\t [routerLink]=\"['/ico/category', category.id]\" routerLinkActive=\"active\">{{category.name}}({{category.count}})</a>\n\t\t\t\t\t</li>\n\t\t\t\t</ul>\n\t\t\t\t<app-sidebar></app-sidebar>\n\t\t\t</aside>\n\t\t</div>\n\t</section>"

/***/ }),

/***/ "./angular/app/ico-project/ico-project.component.scss":
/***/ (function(module, exports) {

module.exports = ".tag-list li a.active {\n  color: #fff;\n  background: #383c46; }\n"

/***/ }),

/***/ "./angular/app/ico-project/ico-project.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IcoProjectComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/@angular/common/http.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// import { interval } from 'rxjs/Observable/interval';


var IcoProjectComponent = (function () {
    function IcoProjectComponent(http, router, route) {
        this.http = http;
        this.router = router;
        this.route = route;
        this.categories = [];
    }
    IcoProjectComponent.prototype.ngOnInit = function () {
        var _this = this;
        var path = "/categoriesraw/5";
        var info = this.http.get(path);
        info.subscribe(function (response) {
            for (var _i = 0, _a = response['cats']; _i < _a.length; _i++) {
                var item = _a[_i];
                if (item['count'] > 0) {
                    _this.categories.push({
                        id: item['id'],
                        name: item['name'],
                        count: item['count']
                    });
                }
            }
        });
    };
    IcoProjectComponent.prototype.loadCat = function (id) {
        this.router.navigate(['/ico/category', id]);
        //  console.log('snap');
        //  this.route.url.subscribe(() => {
        //  console.log(this.route.snapshot.firstChild.data);
        // });
    };
    return IcoProjectComponent;
}());
IcoProjectComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-ico-project',
        template: __webpack_require__("./angular/app/ico-project/ico-project.component.html"),
        styles: [__webpack_require__("./angular/app/ico-project/ico-project.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _c || Object])
], IcoProjectComponent);

var _a, _b, _c;
//# sourceMappingURL=ico-project.component.js.map

/***/ }),

/***/ "./angular/app/import.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ImportPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ImportPipe = (function () {
    function ImportPipe() {
    }
    ImportPipe.prototype.transform = function (value, args) {
        return null;
    };
    return ImportPipe;
}());
ImportPipe = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["X" /* Pipe */])({
        name: 'import'
    })
], ImportPipe);

//# sourceMappingURL=import.pipe.js.map

/***/ }),

/***/ "./angular/app/interview/all-interview/all-interview.component.html":
/***/ (function(module, exports) {

module.exports = "          <div class=\"interview-content\">\n        <div class=\"interview-head\">\n          <h1>Интервью<span>{{allCount}}</span></h1>\n          <ul class=\"interview-tabs\">\n            <li class=\"active\"><a href=\"#\">Новое за сегодня</a></li>\n            <li><a href=\"#\">Самое популярное</a></li>\n            <li><a href=\"#\">Самое обсуждаемое</a></li>\n          </ul>\n        </div>\n        <div class=\"interview-body\">\n          <div class=\"interview-tab-content active\">\n            <div class=\"interview-blocks\">\n              <div class=\"interview-item\" *ngFor=\"let main_item of main_news\">\n                <div class=\"info\">\n                  <span class=\"views\"><i class=\"fa fa-eye\" aria-hidden=\"true\"></i>0</span>\n                  <a [routerLink]=\"['/interview/item', main_item.id]\" class=\"comments\"><i class=\"fa fa-comment\" aria-hidden=\"true\"></i>{{main_item.comments_count}}</a>\n                </div>\n                <div class=\"img-wrap\">\n                  <a [routerLink]=\"['/interview/item', main_item.id]\">\n                    <img src=\"{{main_item.photo}}\" alt=\"\">\n                  </a>\n                </div>\n                <h2><a [routerLink]=\"['/interview/item', main_item.id]\">{{main_item.title}}</a></h2>\n                <p class=\"name\"><a [routerLink]=\"['/interview/item', main_item.id]\">{{main_item.name_credits}}</a></p>\n                <p class=\"seo\">{{main_item.workplace}}</p>\n                <div class=\"orange-wrap\">\n                  <p class=\"orange\">{{main_item.category}}</p>\n                </div>\n              </div>\n            </div>\n            <div class=\"interview-comments\">\n              <div class=\"comment\" *ngFor=\"let item of news\">\n                <div class=\"img-wrap\">\n                  <a [routerLink]=\"['/interview/item', item.id]\"><img src=\"{{item.photo}}\" alt=\"\"></a>\n                </div>\n                <div class=\"text-wrap\">\n                  <a [routerLink]=\"['/interview/item', item.id]\" class=\"title\">{{item.title}}</a>\n                  <p [innerHTML]='item.desc'>\n                    \n                  </p>\n                  <div class=\"comment-footer\">\n                    <a href=\"interview-card.html\" class=\"name\">{{item.name_credits}}</a>\n                    <div class=\"date-wrap\">\n                      <span>{{item.workplace}}</span>\n                      <div class=\"info\">\n                        <span class=\"date\">{{item.created_at}}</span>\n                        <span class=\"views\"><i class=\"fa fa-eye\" aria-hidden=\"true\"></i>0</span>\n                        <a href=\"interview-card.html\" class=\"comments\"><i class=\"fa fa-comment\" aria-hidden=\"true\"></i>{{item?.comments_count}}</a>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n              </div>\n              \n            </div>\n            <a href=\"#\" class=\"show-more\">Показать еще</a>\n          </div>\n          \n        </div>\n      </div><!-- \n\n<div class=\"row\">\n        <div class=\"col-md-4\" style=\"padding-left:20px;\">\n        <h3 style=\"float:left;\">Интервью</h3>\n\t<h6 style=\"color:#9b9b9b;margin-top:10px;float:left;width:10%;text-align:center\">228</h6>\n      </div>\n\t  \n\n\t  \n      <div class=\"col-md-8\">\n        <ul class=\"tags\">\n          <li><a routerLinkActive=\"active\"  routerLink=\"/interview/all\">Новое за сегодня</a></li>\n          <li><a routerLinkActive=\"active\" href=\"#\">Самое популярное</a></li>\n          <li><a routerLinkActive=\"active\" href=\"#\">Самое обсуждаемое</a></li>\n        </ul>\n      </div>\n </div>\n\n <div class=\"main-block\" style=\"width: 48%;float:left;margin:1%;\" *ngFor=\"let main_item of main_news\">\n        <div class=\"block\" style=\"background-size: cover; width: 100%; height: 240px; box-sizing: border-box;\">\n          <div style=\"position: absolute; z-index: 2; background: rgba(0,0,0,.5); top: 0; right: 0; left: 0; bottom: 0;\"></div>\n          <img style=\"z-index: 1; position: absolute; top: 0; left: 0; right: 0;\n          bottom: 0;\" src=\"{{main_item.photo}}\">\n          <div class=\"block-content\">\n            <span class=\"tag\"><a href=\"#\">{{main_item.category}}</a></span>\n            <table style=\"height: 140px;\"><tr><td valign=\"bottom\">\n            \n            <h2 style=\"position: relative; z-index: 999\"><a (click)=\"loadMore(main_item.id)\">{{main_item.title}}</a></h2>\n          </td></tr></table>\n\n            <div class=\"meta\" style=\"z-index: 99\">\n              <span class=\"date\">{{main_item.created_at}}</span>\n              <span class=\"spy\">0</span>\n              <span class=\"chat\">0</span>\n            </div>\n          </div>\n        </div>\n        <p>{{main_item.desc}} <a (click)=\"loadMore(main_item.id)\">Подробнее</a></p>\n      </div>\n\n<masonry [options]=\"myOptions\" class=\"masonry\" style=\"float:left; transition: none !important;\">\n        \n\t\n\t  \n\t  \t  \t\t<masonry-brick style=\"transition: none !important;\" class=\"masonry-item\" *ngFor=\"let item of news\">\n        <div class=\"grid-item-bg\" style=\" position: relative; background-size: cover; box-sizing: border-box;\">\n          <div style=\"position: absolute; z-index: 2; background: rgba(0,0,0,.5); top: 0; right: 0; left: 0; bottom: 0;\"></div>\n          <img style=\"z-index: 1; position: absolute; top: 0; left: 0; right: 0;\n          bottom: 0;\" src=\"{{item.photo}}\">\n          <div class=\"block-content\" style=\"z-index: 99\">\n            <span class=\"tag\"><a href=\"#\">{{item.category}}</a></span>\n            \n            <div class=\"meta\" style=\"z-index: 99\">\n              <span class=\"date\">{{item.created_at}}</span>\n            </div>\n          </div>\n        </div>\n        <h3><a  (click)=\"loadMore(item.id)\" >{{item.title}}</a></h3>\n      </masonry-brick>\n      \n\t  \n      </masonry> -->"

/***/ }),

/***/ "./angular/app/interview/all-interview/all-interview.component.scss":
/***/ (function(module, exports) {

module.exports = ".interview-content {\n  width: 880px !important;\n  margin-left: -40px; }\n\naside {\n  margin-right: -20px; }\n"

/***/ }),

/***/ "./angular/app/interview/all-interview/all-interview.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export NewsRaw */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AllInterviewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/@angular/common/http.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// import { interval } from 'rxjs/Observable/interval';


var scr = 'http://ppql.ru/masonry.js';
var NewsRaw = (function () {
    function NewsRaw() {
    }
    return NewsRaw;
}());

var AllInterviewComponent = (function () {
    function AllInterviewComponent(http, router, route) {
        var _this = this;
        this.http = http;
        this.router = router;
        this.route = route;
        this.myOptions = {
            transitionDuration: '0'
        };
        this.news = [];
        this.main_news = [];
        this.allCount = 0;
        var path = "/interviewraw";
        var info = http.get(path);
        info.subscribe(function (response) {
            // console.log(response['news']);
            // this.news = response['news'];
            for (var _i = 0, _a = response['news']; _i < _a.length; _i++) {
                var item = _a[_i];
                console.log(item.photos[0].file);
                _this.news.push({
                    id: item.id,
                    title: item.title,
                    desc: item.desc,
                    main: item.main,
                    created_at: item.created_at,
                    category: item.category.name,
                    photo: item.photos[0].file,
                    name_credits: item.name_credits,
                    workplace: item.workplace,
                    comments_count: item.comments_count
                });
            }
            for (var _b = 0, _c = response['main_news']; _b < _c.length; _b++) {
                var item = _c[_b];
                console.log(item);
                _this.main_news.push({
                    id: item.id,
                    title: item.title,
                    desc: item.desc,
                    main: item.main,
                    category: item.category.name,
                    created_at: item.created_at,
                    photo: item.photos[0].file,
                    name_credits: item.name_credits,
                    workplace: item.workplace,
                    comments_count: item.comments_count
                });
            }
            // this.news.push(response['news']);
            //   this.main_news.push(response['main_news']);
            // console.log(response['news']);
            console.log(_this.news);
            console.log(_this.news[0].photo);
            console.log(_this.main_news);
            _this.allCount = _this.main_news.length + _this.news.length;
        });
    }
    AllInterviewComponent.prototype.ngOnInit = function () {
    };
    AllInterviewComponent.prototype.loadMore = function (id) {
        this.router.navigate(['/interview/item', id]);
    };
    return AllInterviewComponent;
}());
AllInterviewComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-all-interview',
        template: __webpack_require__("./angular/app/interview/all-interview/all-interview.component.html"),
        styles: [__webpack_require__("./angular/app/interview/all-interview/all-interview.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _c || Object])
], AllInterviewComponent);

var _a, _b, _c;
//# sourceMappingURL=all-interview.component.js.map

/***/ }),

/***/ "./angular/app/interview/interview-categories/interview-categories.component.html":
/***/ (function(module, exports) {

module.exports = "          <div class=\"interview-content\">\n        <div class=\"interview-head\">\n          <h1>Интервью<span>{{allCount}}</span></h1>\n          <ul class=\"interview-tabs\">\n            <li class=\"active\"><a href=\"#\">Новое за сегодня</a></li>\n            <li><a href=\"#\">Самое популярное</a></li>\n            <li><a href=\"#\">Самое обсуждаемое</a></li>\n          </ul>\n        </div>\n        <div class=\"interview-body\">\n          <div class=\"interview-tab-content active\">\n            <div class=\"interview-blocks\">\n              <div class=\"interview-item\" *ngFor=\"let main_item of main_news\">\n                <div class=\"info\">\n                  <span class=\"views\"><i class=\"fa fa-eye\" aria-hidden=\"true\"></i>0</span>\n                  <a [routerLink]=\"['/interview/item', main_item.id]\" class=\"comments\"><i class=\"fa fa-comment\" aria-hidden=\"true\"></i>{{main_item.comments_count}}</a>\n                </div>\n                <div class=\"img-wrap\">\n                  <a [routerLink]=\"['/interview/item', main_item.id]\">\n                    <img src=\"{{main_item.photo}}\" alt=\"\">\n                  </a>\n                </div>\n                <h2><a [routerLink]=\"['/interview/item', main_item.id]\">{{main_item.title}}</a></h2>\n                <p class=\"name\"><a [routerLink]=\"['/interview/item', main_item.id]\">{{main_item.name_credits}}</a></p>\n                <p class=\"seo\">{{main_item.workplace}}</p>\n                <div class=\"orange-wrap\">\n                  <p class=\"orange\">{{main_item.category}}</p>\n                </div>\n              </div>\n            </div>\n            <div class=\"interview-comments\">\n              <div class=\"comment\" *ngFor=\"let item of news\">\n                <div class=\"img-wrap\">\n                  <a [routerLink]=\"['/interview/item', item.id]\"><img src=\"{{item.photo}}\" alt=\"\"></a>\n                </div>\n                <div class=\"text-wrap\">\n                  <a [routerLink]=\"['/interview/item', item.id]\" class=\"title\">{{item.title}}</a>\n                  <p [innerHTML]='item.desc'>\n                    \n                  </p>\n                  <div class=\"comment-footer\">\n                    <a href=\"interview-card.html\" class=\"name\">{{item.name_credits}}</a>\n                    <div class=\"date-wrap\">\n                      <span>{{item.workplace}}</span>\n                      <div class=\"info\">\n                        <span class=\"date\">{{item.created_at}}</span>\n                        <span class=\"views\"><i class=\"fa fa-eye\" aria-hidden=\"true\"></i>0</span>\n                        <a href=\"interview-card.html\" class=\"comments\"><i class=\"fa fa-comment\" aria-hidden=\"true\"></i>{{item?.comments_count}}</a>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n              </div>\n              \n            </div>\n            <a href=\"#\" class=\"show-more\">Показать еще</a>\n          </div>\n          \n        </div>\n      </div><!-- \n\n<div class=\"row\">\n        <div class=\"col-md-4\" style=\"padding-left:20px;\">\n        <h3 style=\"float:left;\">Интервью</h3>\n  <h6 style=\"color:#9b9b9b;margin-top:10px;float:left;width:10%;text-align:center\">228</h6>\n      </div>\n    \n\n    \n      <div class=\"col-md-8\">\n        <ul class=\"tags\">\n          <li><a routerLinkActive=\"active\"  routerLink=\"/interview/all\">Новое за сегодня</a></li>\n          <li><a routerLinkActive=\"active\" href=\"#\">Самое популярное</a></li>\n          <li><a routerLinkActive=\"active\" href=\"#\">Самое обсуждаемое</a></li>\n        </ul>\n      </div>\n </div>\n\n <div class=\"main-block\" style=\"width: 48%;float:left;margin:1%;\" *ngFor=\"let main_item of main_news\">\n        <div class=\"block\" style=\"background-size: cover; width: 100%; height: 240px; box-sizing: border-box;\">\n          <div style=\"position: absolute; z-index: 2; background: rgba(0,0,0,.5); top: 0; right: 0; left: 0; bottom: 0;\"></div>\n          <img style=\"z-index: 1; position: absolute; top: 0; left: 0; right: 0;\n          bottom: 0;\" src=\"{{main_item.photo}}\">\n          <div class=\"block-content\">\n            <span class=\"tag\"><a href=\"#\">{{main_item.category}}</a></span>\n            <table style=\"height: 140px;\"><tr><td valign=\"bottom\">\n            \n            <h2 style=\"position: relative; z-index: 999\"><a (click)=\"loadMore(main_item.id)\">{{main_item.title}}</a></h2>\n          </td></tr></table>\n\n            <div class=\"meta\" style=\"z-index: 99\">\n              <span class=\"date\">{{main_item.created_at}}</span>\n              <span class=\"spy\">0</span>\n              <span class=\"chat\">0</span>\n            </div>\n          </div>\n        </div>\n        <p>{{main_item.desc}} <a (click)=\"loadMore(main_item.id)\">Подробнее</a></p>\n      </div>\n\n<masonry [options]=\"myOptions\" class=\"masonry\" style=\"float:left; transition: none !important;\">\n        \n  \n    \n            <masonry-brick style=\"transition: none !important;\" class=\"masonry-item\" *ngFor=\"let item of news\">\n        <div class=\"grid-item-bg\" style=\" position: relative; background-size: cover; box-sizing: border-box;\">\n          <div style=\"position: absolute; z-index: 2; background: rgba(0,0,0,.5); top: 0; right: 0; left: 0; bottom: 0;\"></div>\n          <img style=\"z-index: 1; position: absolute; top: 0; left: 0; right: 0;\n          bottom: 0;\" src=\"{{item.photo}}\">\n          <div class=\"block-content\" style=\"z-index: 99\">\n            <span class=\"tag\"><a href=\"#\">{{item.category}}</a></span>\n            \n            <div class=\"meta\" style=\"z-index: 99\">\n              <span class=\"date\">{{item.created_at}}</span>\n            </div>\n          </div>\n        </div>\n        <h3><a  (click)=\"loadMore(item.id)\" >{{item.title}}</a></h3>\n      </masonry-brick>\n      \n    \n      </masonry> -->"

/***/ }),

/***/ "./angular/app/interview/interview-categories/interview-categories.component.scss":
/***/ (function(module, exports) {

module.exports = ".interview-content {\n  width: 880px !important;\n  margin-left: -40px; }\n\naside {\n  margin-right: -20px; }\n"

/***/ }),

/***/ "./angular/app/interview/interview-categories/interview-categories.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export NewsRaw */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InterviewCategoriesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/@angular/common/http.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// import { interval } from 'rxjs/Observable/interval';


var scr = 'http://ppql.ru/masonry.js';
var NewsRaw = (function () {
    function NewsRaw() {
    }
    return NewsRaw;
}());

var InterviewCategoriesComponent = (function () {
    function InterviewCategoriesComponent(http, router, route) {
        this.http = http;
        this.router = router;
        this.route = route;
        this.myOptions = {
            transitionDuration: '0'
        };
        this.news = [];
        this.main_news = [];
        this.allCount = 0;
    }
    InterviewCategoriesComponent.prototype.loadScript = function () {
        console.log('preparing to load...');
        var node = document.createElement('script');
        node.src = scr;
        node.type = 'text/javascript';
        node.async = false;
        node.charset = 'utf-8';
        document.getElementsByTagName('body')[0].appendChild(node);
    };
    InterviewCategoriesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.id = params['id'];
            _this.news.length = 0;
            _this.main_news.length = 0;
            _this.path = "/interviewsbycat/" + _this.id;
            _this.info = _this.http.get(_this.path);
            _this.allCount = 0;
            _this.info.subscribe(function (response) {
                // console.log(response['news']);
                // this.news = response['news'];
                for (var _i = 0, _a = response['news']; _i < _a.length; _i++) {
                    var item = _a[_i];
                    console.log(item.photos[0].file);
                    _this.news.push({
                        id: item.id,
                        title: item.title,
                        desc: item.desc,
                        main: item.main,
                        created_at: item.created_at,
                        category: item.category.name,
                        photo: item.photos[0].file,
                        name_credits: item.name_credits,
                        workplace: item.workplace,
                        comments_count: item.comments_count
                    });
                }
                for (var _b = 0, _c = response['main_news']; _b < _c.length; _b++) {
                    var item = _c[_b];
                    console.log(item);
                    _this.main_news.push({
                        id: item.id,
                        title: item.title,
                        desc: item.desc,
                        main: item.main,
                        created_at: item.created_at,
                        category: item.category.name,
                        photo: item.photos[0].file,
                        name_credits: item.name_credits,
                        workplace: item.workplace,
                        comments_count: item.comments_count
                    });
                }
                // this.news.push(response['news']);
                //   this.main_news.push(response['main_news']);
                // console.log(response['news']);
                _this.allCount = _this.main_news.length + _this.news.length;
            });
        });
    };
    InterviewCategoriesComponent.prototype.loadMore = function (id) {
        this.router.navigate(['/interview/item', id]);
    };
    return InterviewCategoriesComponent;
}());
InterviewCategoriesComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-interview-categories',
        template: __webpack_require__("./angular/app/interview/interview-categories/interview-categories.component.html"),
        styles: [__webpack_require__("./angular/app/interview/interview-categories/interview-categories.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _c || Object])
], InterviewCategoriesComponent);

var _a, _b, _c;
//# sourceMappingURL=interview-categories.component.js.map

/***/ }),

/***/ "./angular/app/interview/interview-details/interview-details.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- <div class=\"row\">\n\n<div class=\"col-lg-4\">\n<img *ngFor=\"let photo of photos\" src=\"{{photo.file}}\" style=\"max-width: 100%; border-radius: 1200px;\" />\n</div>\n    <div class=\"col-lg-8\">\n        <h2>{{news?.title}}</h2>\n    <strong>{{news.name_credits}}</strong>\n    <p>{{news.workplace}}</p>\n    <p>{{news.created_at}}</p>\n    <p>0 комментариев </p>\n    </div>\n<div class=\"col-lg-12\" [innerHTML]=\"news?.desc\">\n\n</div>\n<div class=\"col-lg-12\">\n\t<h3>Оставить комментарий</h3>\n<form (ngSubmit)=\"submitComment(f, news.id, 'App\\\\Interview')\" #f=\"ngForm\">\n\t<div class=\"form-group\">\n\t<input type=\"hidden\" ngModel name=\"post_id\" value=\"{{news?.id}}\">\n\t<input type=\"hidden\" ngModel name=\"commentable_type\" value=\"App\\News\">\n\n\t<input type=\"hidden\" >\n\t<textarea ngModel name=\"body\" class=\"form-control\"></textarea>\n\t<button type=\"submit\" class=\"btn btn-success\">Опубликовать</button>\n</div>\n</form>\n\n<h3>Комментарии</h3>\n       <div class=\"container\">\n        <div class=\"row\">\n\n                <div *ngFor=\"let item of comments\" class=\"col-lg-12\" style=\"margin-top:20px;\">\n                <div class=\"media\">\n                    <a class=\"pull-left\" href=\"#\">\n                        <img class=\"media-object\" height=\"64\" src=\"http://placehold.it/64x64\" alt=\"\">\n                    </a>\n                    <div class=\"media-body\">\n                        <h6 class=\"media-heading\">{{item.author}} -->\n                            <!-- <small>{{$comment->created_at->diffForHumans()}}</small> \n                       </h6>\n                        <p>{{item.body}}</p>\n                        </div>\n                    </div>\n                </div>\n</div>\n</div>\n</div>\n</div> -->\n<div class=\"interview-card-content\">\n                <a routerLink='/interview/all' class=\"return\"><span>&lt;</span>Вернуться к списку интервью</a>\n                <div class=\"top-block\">\n                    <h2>{{news?.title}}</h2>\n                    <div class=\"info\">\n                        <span class=\"date\">{{news?.created_at}}</span>\n                        <span class=\"views\"><i class=\"fa fa-eye\" aria-hidden=\"true\"></i>0</span>\n                        <a href=\"#\" class=\"comments\"><i class=\"fa fa-comment\" aria-hidden=\"true\"></i>{{news.comments_count}}</a>\n                    </div>\n                </div>\n                <div class=\"comment comment-card\">\n                    <div class=\"img-wrap\">\n                        <a *ngFor=\"let photo of photos\" href=\"#\"><img style=\"width: 100px; height: 100px;\" src=\"{{photo.file}}\" alt=\"\"></a>\n                    </div>\n                    <div class=\"text-wrap\">\n                        <a href=\"#\" class=\"name\">{{news?.name_credits}}</a>\n                        <span>{{news?.workplace}}</span>\n                        <p></p>\n                    </div>\n                </div>\n                <div class=\"text-wrap\" [innerHTML]=\"news.desc\">\n                    \n                </div>\n    \n                   <!--  -->\n                    <!-- <a href=\"#\" class=\"show-comments\">Показать все комментарии (22)</a> -->\n                    <div class=\"comment-block\" id=\"comment-block\">\n                    <div class=\"comment-top\" *ngIf=\"user.id != undefined\">\n                                <h3>Добавить новый комментарий</h3>\n                                <form (ngSubmit)=\"submitComment(f, news.id, 'App\\\\Interview')\" #f=\"ngForm\">\n                                    <input type=\"hidden\" ngModel name=\"post_id\" value=\"{{news?.id}}\">\n                                    <input type=\"hidden\" ngModel name=\"commentable_type\" value=\"App\\News\">\n                                    <textarea ngModel name=\"body\" placeholder=\"Начните вводить комментарий...\"></textarea>\n                                    <button type=\"submit\">Добавить</button>\n                                </form>\n                                <p *ngIf=\"submitted\">Комментарий успешно добавлен</p>\n                    </div>\n                    <div class=\"comment-top\" *ngIf=\"user.id == undefined\">\n                        <h3>Комментарии ({{news.comments_count}})</h3>\n                        <p>Для того чтобы добавить свой комментарий - Вам необходимо <a href=\"#login-popup\" class=\"popup-link\">авторизоваться</a> или <a href=\"#check-popup\" class=\"popup-link\">пройти регистрацию.</a></p>\n                    </div>\n                    \n                    <div *ngIf=\"user.id != undefined\" style=\"background: none !important; border: none !important\" class=\"comment-top\">\n                        <h3 >Комментарии ({{news.comments_count}})</h3>\n                        <!-- <p>Для того чтобы добавить свой комментарий - Вам необходимо <a href=\"#login-popup\" class=\"popup-link\">авторизоваться</a> или <a href=\"#check-popup\" class=\"popup-link\">пройти регистрацию.</a></p> -->\n\n                    \n                    </div>\n                    <ul class=\"comment-items\">\n                        <!--  -->\n                        <li *ngFor=\"let item of comments\">\n                            <div class=\"left\">\n                                <div class=\"info\">\n                                    <div class=\"img-wrap\">\n                                        <img src=\"img/comment-img2.jpg\" style=\"max-width: 35px; height: auto;\" alt=\"\">\n                                    </div>\n                                    <div class=\"text-wrap\">\n                                        <p>{{item.email}}</p>\n                                        <span>Добавлен </span>\n                                    </div>\n                                </div>\n                                <p class=\"comment-text\">{{item.body}}</p>\n                            </div>\n                            <div class=\"right\">\n                                <div class=\"img-wrap\"></div>\n                                <div class=\"btn-block\">\n                                    <span class=\"number-green\">0</span>\n                                    <div class=\"buttons\">\n                                        <a href=\"#\" class=\"plus\">+</a>\n                                        <a href=\"#\" class=\"minus\">-</a>\n                                    </div>\n                                </div>\n                            </div>\n                        </li>\n\n                    </ul>\n                    <!-- <a href=\"#\" class=\"show-comments\">Показать все комментарии (22)</a> -->\n                </div>\n                </div>"

/***/ }),

/***/ "./angular/app/interview/interview-details/interview-details.component.scss":
/***/ (function(module, exports) {

module.exports = ".interview-card-content {\n  margin-left: -40px;\n  width: 880px !important; }\n\n.sidebar {\n  padding-top: 22px; }\n\n.analytics-block {\n  width: 880px;\n  margin-left: -20px;\n  margin-top: -24px; }\n\n.analytics-block .news-big {\n  padding: 22px 22px 18px 22px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n  -ms-flex-direction: column;\n  flex-direction: column;\n  margin-bottom: 22px;\n  height: 302px;\n  background-position: center center;\n  background-repeat: no-repeat;\n  background-size: cover; }\n\n.analytics-block .return {\n  color: #Fff;\n  margin-bottom: 85px; }\n\n.analytics-block h2 {\n  font-size: 34px;\n  color: #fff;\n  font-weight: bold;\n  line-height: 40px;\n  margin-top: -5px; }\n\n.analytics-block .bottom-line {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n  -ms-flex-align: center;\n  align-items: center;\n  margin-top: auto; }\n\n.analytics-block .bottom-line .news-btn {\n  margin-right: 15px; }\n\n.analytics-block .images-wrap {\n  width: 100%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n  -ms-flex-pack: justify;\n  justify-content: space-between;\n  margin-bottom: 20px; }\n\n.analytics-block .images-wrap img {\n  display: inline-block;\n  width: calc(50% - 7px); }\n\n.analytics-block .comment-block .comment-items {\n  padding: 0;\n  padding-bottom: 8px; }\n\n.analytics-block .comment-block .comment-items li {\n  border: none; }\n\n.analytics-block .news-block h3 {\n  font-size: 18px;\n  color: #000;\n  font-weight: bold; }\n\n.analytics-block .news-block .news-wrap {\n  width: 100%;\n  margin-right: -14px; }\n\n.analytics-block .news-block .news-wrap .news {\n  width: 281px;\n  margin-right: 14px;\n  display: inline-block; }\n\n.analytics-block .news-block .news-wrap .news:nth-child(3n) {\n  margin-right: 0; }\n\n.analytics-wrap .sidebar .tag-list {\n  margin-top: 12px; }\n\n.blockquote-block {\n  border: 3px solid #e5e5e5;\n  padding: 35px;\n  margin-bottom: 25px; }\n\n.blockquote-block p {\n  text-align: center;\n  font-size: 24px;\n  color: #000;\n  line-height: 28px; }\n\n.text {\n  color: #002026;\n  font-size: 16px;\n  line-height: 18px;\n  margin-bottom: 20px; }\n\n.text.text-big {\n  font-size: 18px;\n  line-height: 22px; }\n\n.text .bold {\n  font-weight: bold; }\n\n.news-wrap, .interview-wrap {\n  padding-top: 0 !important; }\n\n.comment-block {\n  margin-top: 30px; }\n\n.comment-block .comment-top {\n  border-bottom: 1px solid #e3e3e3;\n  background: #fff;\n  padding: 20px 19px 19px 20px; }\n\n.comment-block .comment-top h3 {\n  font-size: 18px;\n  font-weight: bold;\n  color: #000;\n  margin-bottom: 10px; }\n\n.comment-block .comment-top p {\n  font-size: 14px;\n  font-weight: bold;\n  color: #fa5252; }\n\n.comment-block .comment-top p a {\n  color: #fa5252;\n  text-decoration: underline; }\n\n.comment-block .comment-items {\n  padding: 0 22px 0 18px; }\n\n.comment-block .comment-items li {\n  padding: 20px 0;\n  border-bottom: 1px solid #a4a4a4;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n  -ms-flex-pack: justify;\n  justify-content: space-between;\n  width: 100%; }\n\n.comment-block .comment-items li:last-child {\n  border: none; }\n\n.comment-block .comment-items li.hidden {\n  display: none; }\n\n.comment-block .comment-items li .left .info {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n  -ms-flex-align: center;\n  align-items: center;\n  margin-bottom: 8px; }\n\n.comment-block .comment-items li .left .info .img-wrap {\n  width: 35px;\n  height: 35px;\n  margin-right: 12px; }\n\n.comment-block .comment-items li .left .info .img-wrap img {\n  width: 100%;\n  border-radius: 50%; }\n\n.comment-block .comment-items li .left .info .text-wrap p {\n  font-size: 11px;\n  font-weight: bold;\n  color: #000; }\n\n.comment-block .comment-items li .left .info .text-wrap span {\n  display: inline-block;\n  font-weight: bold;\n  font-size: 11px;\n  color: #777; }\n\n.comment-block .comment-items li .left .comment-text {\n  color: #000;\n  font-size: 16px; }\n\n.comment-block .comment-items li .right {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n  -ms-flex-align: center;\n  align-items: center;\n  -webkit-box-pack: justify;\n  -ms-flex-pack: justify;\n  justify-content: space-between;\n  min-width: 78px; }\n\n.comment-block .comment-items li .right .btn-block {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n  -ms-flex-align: center;\n  align-items: center; }\n\n.comment-block .comment-items li .right .btn-block .number-green {\n  font-size: 24px;\n  color: #8cc863; }\n\n.comment-block .comment-items li .right .btn-block .number-red {\n  font-size: 24px;\n  color: #fa5252; }\n\n.comment-block .comment-items li .right .btn-block .buttons {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n  -ms-flex-direction: column;\n  flex-direction: column;\n  margin-left: 9px; }\n\n.comment-block .comment-items li .right .btn-block .buttons a {\n  width: 20px;\n  height: 20px;\n  border-radius: 50%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n  -ms-flex-align: center;\n  align-items: center;\n  -webkit-box-pack: center;\n  -ms-flex-pack: center;\n  justify-content: center; }\n\n.comment-block .comment-items li .right .btn-block .buttons .plus {\n  margin-bottom: 4px;\n  color: #fff;\n  font-size: 18px;\n  background: #8cc863; }\n\n.comment-block .comment-items li .right .btn-block .buttons .plus:hover {\n  background: #c0deac; }\n\n.comment-block .comment-items li .right .btn-block .buttons .minus {\n  color: #fff;\n  font-size: 18px;\n  background: #fa5252; }\n\n.comment-block .comment-items li .right .btn-block .buttons .minus:hover {\n  background: #f8a3a3; }\n\n.comment-block .show-comments {\n  width: 100%;\n  height: 42px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n  -ms-flex-align: center;\n  align-items: center;\n  -webkit-box-pack: center;\n  -ms-flex-pack: center;\n  justify-content: center;\n  font-weight: bold;\n  font-size: 14px;\n  margin-top: -1px;\n  color: #383c46;\n  background: #c1c1c1; }\n\n.comment-block .show-comments:hover {\n  background: #383c46;\n  color: #fff; }\n\n.comment-block .total-comments {\n  font-size: 18px;\n  font-weight: bold;\n  color: #000;\n  margin-left: 18px;\n  margin-top: 24px; }\n\n.comment-wrap {\n  margin-top: -15px;\n  margin-bottom: 25px; }\n\n.comment-items li:last-child {\n  border: none; }\n\n.comment-top {\n  padding: 18px 25px 21px 15px; }\n\n.comment-top form textarea {\n  height: 54px;\n  border: 1px solid #e4e4e4;\n  width: 100%;\n  resize: none;\n  font-size: 14px;\n  color: #949494;\n  padding: 10px;\n  margin-bottom: 10px; }\n\n.comment-top form textarea::-webkit-input-placeholder {\n  color: #949494; }\n\n.comment-top form textarea::-moz-placeholder {\n  color: #949494; }\n\n.comment-top form textarea:-ms-input-placeholder {\n  color: #949494; }\n\n.comment-top form textarea:-moz-placeholder {\n  color: #949494; }\n\n.comment-top form textarea:focus {\n  outline: none; }\n\n.comment-top form button {\n  height: 34px;\n  background: #f58c1b;\n  color: #fff;\n  font-size: 14px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n  -ms-flex-align: center;\n  align-items: center;\n  padding: 0px 17px;\n  border: none;\n  font-weight: bold; }\n\n.comment-block .comment-items {\n  padding: 0 22px 0 18px; }\n\n.comment-block .comment-items li {\n  padding: 20px 0;\n  border-bottom: 1px solid #a4a4a4;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n  -ms-flex-pack: justify;\n  justify-content: space-between;\n  width: 100%; }\n\n.comment-block .comment-items li:last-child {\n  border: none; }\n\n.comment-block .comment-items li.hidden {\n  display: none; }\n\n.comment-block .comment-items li .left .info {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n  -ms-flex-align: center;\n  align-items: center;\n  margin-bottom: 8px; }\n\n.comment-block .comment-items li .left .info .img-wrap {\n  width: 35px;\n  height: 35px;\n  margin-right: 12px; }\n\n.comment-block .comment-items li .left .info .img-wrap img {\n  width: 100%;\n  border-radius: 50%; }\n\n.comment-block .comment-items li .left .info .text-wrap p {\n  font-size: 11px;\n  font-weight: bold;\n  color: #000; }\n\n.comment-block .comment-items li .left .info .text-wrap span {\n  display: inline-block;\n  font-weight: bold;\n  font-size: 11px;\n  color: #777; }\n\n.comment-block .comment-items li .left .comment-text {\n  color: #000;\n  font-size: 16px; }\n\n.comment-block .comment-items li .right {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n  -ms-flex-align: center;\n  align-items: center;\n  -webkit-box-pack: justify;\n  -ms-flex-pack: justify;\n  justify-content: space-between;\n  min-width: 78px; }\n\n.comment-block .comment-items li .right .btn-block {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n  -ms-flex-align: center;\n  align-items: center; }\n\n.comment-block .comment-items li .right .btn-block .number-green {\n  font-size: 24px;\n  color: #8cc863; }\n\n.comment-block .comment-items li .right .btn-block .number-red {\n  font-size: 24px;\n  color: #fa5252; }\n\n.comment-block .comment-items li .right .btn-block .buttons {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n  -ms-flex-direction: column;\n  flex-direction: column;\n  margin-left: 9px; }\n\n.comment-block .comment-items li .right .btn-block .buttons a {\n  width: 20px;\n  height: 20px;\n  border-radius: 50%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n  -ms-flex-align: center;\n  align-items: center;\n  -webkit-box-pack: center;\n  -ms-flex-pack: center;\n  justify-content: center; }\n\n.comment-block .comment-items li .right .btn-block .buttons .plus {\n  margin-bottom: 4px;\n  color: #fff;\n  font-size: 18px;\n  background: #8cc863; }\n\n.comment-block .comment-items li .right .btn-block .buttons .plus:hover {\n  background: #c0deac; }\n\n.comment-block .comment-items li .right .btn-block .buttons .minus {\n  color: #fff;\n  font-size: 18px;\n  background: #fa5252; }\n\n.comment-block .comment-items li .right .btn-block .buttons .minus:hover {\n  background: #f8a3a3; }\n\n.comment-block .show-comments {\n  width: 100%;\n  height: 42px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n  -ms-flex-align: center;\n  align-items: center;\n  -webkit-box-pack: center;\n  -ms-flex-pack: center;\n  justify-content: center;\n  font-weight: bold;\n  font-size: 14px;\n  margin-top: -1px;\n  color: #383c46;\n  background: #c1c1c1; }\n\n.comment-block .show-comments:hover {\n  background: #383c46;\n  color: #fff; }\n\n.comment-block .total-comments {\n  font-size: 18px;\n  font-weight: bold;\n  color: #000;\n  margin-left: 18px;\n  margin-top: 24px; }\n\n.analytics-block .comment-block {\n  margin-top: 0;\n  margin-bottom: 28px;\n  border-top: 9px solid #e5e5e5;\n  border-bottom: 9px solid #e5e5e5; }\n\n.analytics-block .comment-block .comment-top {\n  border: none;\n  padding: 0;\n  padding-top: 28px;\n  background-color: transparent; }\n\n.analytics-block .comment-block .comment-items {\n  padding: 0;\n  padding-bottom: 8px; }\n\n.analytics-block .comment-block .comment-items li {\n  border: none; }\n\n.innertext {\n  margin-bottom: 20px; }\n"

/***/ }),

/***/ "./angular/app/interview/interview-details/interview-details.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export News */
/* unused harmony export CommentRaw */
/* unused harmony export Photos */
/* unused harmony export User */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InterviewDetailsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/@angular/common/http.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// import { interval } from 'rxjs/Observable/interval';


var News = (function () {
    function News() {
    }
    return News;
}());

var CommentRaw = (function () {
    function CommentRaw() {
    }
    return CommentRaw;
}());

var Photos = (function () {
    function Photos() {
    }
    return Photos;
}());

var User = (function () {
    function User() {
    }
    return User;
}());

var InterviewDetailsComponent = (function () {
    function InterviewDetailsComponent(http, router, route) {
        var _this = this;
        this.http = http;
        this.router = router;
        this.route = route;
        this.comments = [];
        this.photos = [];
        this.commentcount = 0;
        this.comment = {
            'post_id': '',
            'body': '',
            'commentable_id': '',
            'commentable_type': ''
        };
        var id = route.snapshot.params['id'];
        var path = "/interviewraw/" + id;
        var info = http.get(path);
        info.subscribe(function (response) {
            _this.news = {
                id: response['news'][0]['id'],
                title: response['news'][0]['title'],
                desc: response['news'][0]['desc'],
                name_credits: response['news'][0]['name_credits'],
                workplace: response['news'][0]['workplace'],
                created_at: response['news'][0]['created_at'],
                // photo:response['news'][0]['photos']['file'],
                comments_count: response['comments_count'],
            };
            for (var _i = 0, _a = response['comments']; _i < _a.length; _i++) {
                var item = _a[_i];
                _this.comments.push({
                    id: item['id'],
                    email: item['email'],
                    author: item['author'],
                    body: item['body'],
                    commentable_id: item['commentable_id'],
                    photo: item['photo']
                });
            }
            for (var _b = 0, _c = response['photos']; _b < _c.length; _b++) {
                var item = _c[_b];
                _this.photos.push({
                    id: item['id'],
                    file: item['file']
                });
            }
            console.log(response['news'][0]['id']);
            console.log(_this.news);
            console.log(_this.comments);
        });
    }
    InterviewDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        var userpath = "/angular/user";
        var userinfo = this.http.get(userpath);
        userinfo.subscribe(function (response) {
            _this.user = {
                id: response.id,
                name: response.name,
                email: response.email,
                photo_id: response.photo_id,
                role_id: response.role_id
            };
        });
        this.router.events.subscribe(function (evt) {
            if (!(evt instanceof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* NavigationEnd */])) {
                return;
            }
            window.scrollTo(0, 0);
        });
    };
    // @ViewChild('f') Form:NgForm;
    InterviewDetailsComponent.prototype.submitComment = function (form, post_id, type) {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["c" /* HttpHeaders */]({ 'Content-type': 'Application/json ' });
        this.http.post('/storecomment', {
            'post_id': post_id,
            'body': form.value.body,
            'commentable_id': post_id,
            'commentable_type': type
        }, { headers: headers }).subscribe(function (response) { return _this.comments.unshift({
            id: response['id'],
            email: response['email'],
            author: response['author'],
            body: response['body'],
            commentable_id: response['commentable_id'],
            photo: response['photo']
        }); }, function (error) { return console.log(error); });
        this.news.comments_count++;
    };
    return InterviewDetailsComponent;
}());
InterviewDetailsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-interview-details',
        template: __webpack_require__("./angular/app/interview/interview-details/interview-details.component.html"),
        styles: [__webpack_require__("./angular/app/interview/interview-details/interview-details.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _c || Object])
], InterviewDetailsComponent);

var _a, _b, _c;
//# sourceMappingURL=interview-details.component.js.map

/***/ }),

/***/ "./angular/app/interview/interview.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"interview-wrap\">\n    <div class=\"wrapper\">\n<router-outlet></router-outlet>\n  <aside class=\"sidebar\">\n        <ul class=\"tag-list\">\n          \n<li><a *ngFor=\"let category of categories\"\n [routerLink]=\"['category', category.id]\" routerLinkActive=\"active\">{{category.name}}({{category.count}})</a></li>\n        </ul>\n        <app-sidebar></app-sidebar>\n      </aside>\n    </div>\n  </section>"

/***/ }),

/***/ "./angular/app/interview/interview.component.scss":
/***/ (function(module, exports) {

module.exports = "body {\n  background: #f9f9f9;\n  font-family: \"PT Sans\"; }\n\n.container {\n  max-width: 1180px !important; }\n\n.navbar {\n  background: #1d1f24;\n  padding: 15px 0; }\n\n#searchform, #searchform input {\n  width: 100%;\n  border-radius: 20px;\n  border: none;\n  height: 40px; }\n\n.menubar {\n  background: #383c46; }\n\n.navbar-nav-ul a {\n  font-family: \"PT Sans\";\n  font-weight: bold;\n  color: #fff;\n  text-transform: uppercase;\n  display: block;\n  padding: 7px 14px;\n  font-size: 14px;\n  border-top: 2px solid #383c46;\n  border-right: 1px solid #1d1f24; }\n\n.navbar-nav-ul li:last-of-type a {\n  margin-right: 0;\n  border-right: none; }\n\n.navbar-nav-ul a:hover, .navbar-nav-ul a.active {\n  background: #fff;\n  color: #f58c1b;\n  border-top: 2px solid #f58c1b;\n  text-decoration: none; }\n\n.navbar-nav-ul, .tags {\n  overflow: hidden;\n  list-style: none;\n  padding-left: 0; }\n\n.navbar-nav-ul li, .tags li {\n  float: left; }\n\n.tag {\n  z-index: 99;\n  position: relative; }\n\n.tags li {\n  margin-right: 15px; }\n\n.tags a {\n  display: block;\n  float: left;\n  padding: 9px 17px;\n  border-radius: 120px;\n  background: #e5e5e5;\n  color: #3e4468;\n  font-size: 13px;\n  font-family: \"PT Sans\"; }\n\n.tags a:hover, .tags a.active {\n  background: #f58c1b;\n  color: #fff;\n  text-decoration: none; }\n\n.block {\n  height: 230px !important;\n  margin-bottom: 13px !important; }\n\n.block-content {\n  padding: 24px 0 0 24px; }\n\n.block-content span a {\n  background: #fff;\n  color: #1d1f24;\n  padding: 7px;\n  text-decoration: none;\n  font-size: 12px;\n  /*display: block;*/\n  margin-right: 10px; }\n\n.block-content h2 {\n  font-size: 25px;\n  color: #fff;\n  line-height: 32px;\n  margin-top: 30px; }\n\n.meta {\n  position: absolute;\n  bottom: 20px;\n  left: 24px;\n  color: #fff;\n  font-family: \"Myriad Pro\", sans-serif;\n  font-weight: 100;\n  font-size: 10px; }\n\n.main-block p {\n  color: #002026;\n  font-size: 13px;\n  margin-top: 20px;\n  width: 85%;\n  line-height: 17px; }\n\n.main-block p a {\n  color: #002026;\n  text-decoration: underline; }\n\n.masonry-item {\n  width: 33.33%;\n  /*margin: 10px;*/\n  min-height: 170px;\n  padding: 10px; }\n\n.masonry-item img {\n  width: 100%; }\n\n.masonry {\n  width: 100%;\n  /*margin-left: -10px;*/\n  margin-top: 20px; }\n\n.left-block {\n  width: 880px; }\n\n.masonry-item h3 {\n  line-height: 23px; }\n\n.masonry-item h3 a {\n  color: #000000;\n  font-size: 18px;\n  font-weight: bold;\n  font-family: \"PT Sans\";\n  text-decoration: none;\n  line-height: 23px; }\n\n.masonry-item h3 a:hover {\n  color: #f58c1b; }\n\n.grid-item-bg {\n  min-height: 170px;\n  position: relative;\n  overflow: hidden; }\n\n.left-block {\n  padding-left: 0;\n  float: left; }\n\n.left-block .row {\n  margin-left: 0 !important; }\n\n.right-block {\n  max-width: 270px;\n  float: right;\n  width: 250px; }\n\n.categories a {\n  background: #cfcfcf;\n  border-radius: 20px;\n  font-size: 12px;\n  color: #000;\n  text-decoration: none;\n  padding: 7px 10px;\n  margin-right: 10px;\n  margin-bottom: 10px; }\n\n.categories a:hover, .categories .active {\n  background: #383c46;\n  color: #fff; }\n\n.row b {\n  padding: 4px 5px !important;\n  font-size: 11px; }\n\n.quotations {\n  width: 100%;\n  float: left;\n  min-height: 5px;\n  background: #fff; }\n\n.quotations h5 {\n  font-family: \"PT Sans\"; }\n\n.footer {\n  width: 100%;\n  background: #eee;\n  text-align: center;\n  float: left;\n  min-height: 5px;\n  padding: 50px; }\n\n.top {\n  width: 100%;\n  height: 100px;\n  background: black; }\n\n.block {\n  float: left;\n  margin-bottom: 25px;\n  width: calc(33.33% - 17px);\n  position: relative !important; }\n\n.block img {\n  width: 100%;\n  height: auto; }\n\n.quotations h5 {\n  color: #383c46;\n  text-align: left !important;\n  font-size: 15px;\n  font-weight: bold;\n  padding-left: 10px;\n  line-height: 18px; }\n\n.quotations th {\n  padding-left: 10px; }\n\n.top5 {\n  font-weight: 100;\n  font-size: 13px;\n  text-align: right;\n  padding: 15px !important; }\n\n.top5 .all-cot {\n  text-align: left; }\n\n.top5 th {\n  font-weight: bold;\n  text-align: left; }\n\n.all-cot {\n  width: 100%;\n  color: #4a4a4a;\n  padding: 0 10px;\n  float: left;\n  text-decoration: underline;\n  font-weight: bold;\n  font-size: 11px;\n  padding-bottom: 0px; }\n\ni.fa {\n  padding: 0 !important; }\n\ni {\n  padding: 5px;\n  border: 1px solid #9b9b9b;\n  color: #9b9b9b;\n  border-radius: 50%;\n  width: 30px;\n  height: 30px;\n  line-height: 30px;\n  text-align: center; }\n\ni:hover {\n  color: #f58c1b;\n  border: 1px solid #f58c1b;\n  cursor: pointer; }\n\n.row .col-md-9 .row .col-md-3 {\n  padding-left: 22px !important;\n  padding-top: 5px; }\n\n.col-md-3 > h3 {\n  font-size: 35px; }\n\nh3 + h6 {\n  color: #9b9b9b;\n  margin-top: 13px !important;\n  float: left;\n  width: 50%;\n  text-align: center;\n  padding-left: 20px; }\n\n.tags li {\n  margin-top: 7px; }\n\n.rightbar {\n  padding-left: 0;\n  padding-right: 36px; }\n\n.categories {\n  margin-top: 15px; }\n\n.price {\n  font-weight: bold !important;\n  font-size: 13px;\n  color: #919191;\n  padding-top: 7px !important;\n  margin-bottom: -10px; }\n\n.login a {\n  font-size: 13px; }\n\n.spy {\n  background: url(/dist/assets/spy.png) top left no-repeat;\n  color: #fff;\n  padding-left: 25px;\n  margin-left: 20px; }\n\n.chat {\n  background: url(/dist/assets/chat.png) top left no-repeat;\n  color: #fff;\n  padding-left: 20px;\n  margin-left: 20px; }\n\n.main-block h2 a {\n  color: #fff;\n  text-decoration: none; }\n\n.main-block h2 a:hover {\n  text-decoration: underline; }\n\ntbody > tr > th {\n  font-size: 13px; }\n\n.masonry-item h3 {\n  margin-top: 13px !important; }\n"

/***/ }),

/***/ "./angular/app/interview/interview.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InterviewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/@angular/common/http.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// import { interval } from 'rxjs/Observable/interval';


var InterviewComponent = (function () {
    function InterviewComponent(http, router, route) {
        var _this = this;
        this.http = http;
        this.router = router;
        this.route = route;
        this.categories = [];
        var path = "/categoriesraw/2";
        var info = http.get(path);
        info.subscribe(function (response) {
            for (var _i = 0, _a = response['cats']; _i < _a.length; _i++) {
                var item = _a[_i];
                _this.categories.push({
                    id: item['id'],
                    name: item['name'],
                    count: item['count']
                });
            }
            console.log(_this.categories);
        });
    }
    InterviewComponent.prototype.ngOnInit = function () {
    };
    InterviewComponent.prototype.loadCat = function (id) {
        var _this = this;
        this.router.navigate(['/interview/category', id]);
        console.log('snap');
        this.route.url.subscribe(function () {
            console.log(_this.route.snapshot.firstChild.data);
        });
    };
    return InterviewComponent;
}());
InterviewComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-interview',
        template: __webpack_require__("./angular/app/interview/interview.component.html"),
        styles: [__webpack_require__("./angular/app/interview/interview.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _c || Object])
], InterviewComponent);

var _a, _b, _c;
//# sourceMappingURL=interview.component.js.map

/***/ }),

/***/ "./angular/app/news/all-news/all-news.component.css":
/***/ (function(module, exports) {

module.exports = ".news-content {\nwidth: 880px !important;\n}\n.main-news .news:nth-child(even) {\n\tmax-width: 424px;\n}"

/***/ }),

/***/ "./angular/app/news/all-news/all-news.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"news-content\">\n        <div class=\"news-head\">\n          <h1>Новости<span>{{countAll}}</span></h1>\n          <ul class=\"news-tabs\">\n            <li class=\"active\"><a (click)=\"setOrder('id')\">Новое за сегодня</a></li>\n            <li><a (click)=\"setOrder('views_count')\">Самое популярное</a></li>\n            <li><a  (click)=\"setOrder('comments_count')\">Самое обсуждаемое</a></li>\n          </ul>\n        </div>\n        <div class=\"news-body\">\n          <div class=\"news-tab-content active\">\n            <div class=\"main-news\">\n              <div  *ngFor=\"let item of main_news | orderBy: order:reverse:'case-insensitive'\" [ngClass]=\"item.workplace ? 'news trust' : 'news'\">\n                <div class=\"img\" [ngStyle]=\"{'background-image':'url('+item.photos[0].file+')'}\">\n                  <a [routerLink]=\"['/posts/category', item.cat_id]\" class=\"news-btn\">{{item.category.name}}</a>\n                  <a href=\"/posts/post/{{item.id}}\" class=\"title-link\">{{item.title}}</a>\n                  <div class=\"info\">\n                    <span class=\"date\">{{item.created_at}}</span>\n                    <span class=\"views\"><i class=\"fa fa-eye\" aria-hidden=\"true\"></i>0</span>\n                    <a  href=\"/posts/post/{{item.id}}#comment-block\"  class=\"comments\"><i class=\"fa fa-comment\" aria-hidden=\"true\"></i>{{item.comments_count}}</a>\n                  </div>\n                </div>\n                <div class=\"text\">\n                  <p>{{item.desc | striphtml | excerpt:140}} <a routerLink=\"/posts/post/{{item.id}}\">Подробнее</a></p> \n                </div>\n              </div>\n            </div>\n            <div class=\"news-list\">\n              <div *ngFor=\"let item of news | orderBy: order:reverse:'case-insensitive'\" [ngClass]=\"item.name_credits ? 'trust' : 'news'\" [routerLink]=\"item.name_credits ? ['/interview/item', item.id] : null\">\n                <div *ngIf=\"item.name_credits\" class=\"img-wrap\"><img src=\"img/trust.png\" alt=\"\"></div>\n                <h4 *ngIf=\"item.name_credits\">{{item.title}}</h4>\n                <p *ngIf=\"item.name_credits\" class=\"name\">{{item.name_credits}}</p>\n                <span *ngIf=\"item.name_credits\">{{item.workplace}}</span>\n                <div *ngIf=\"!item.name_credits\" class=\"img\" [ngStyle]=\"{'background-image':'url('+item.photos[0].file+')' }\">\n                  <a [routerLink]=\"['/posts/category', item.cat_id]\" class=\"news-btn\">{{item.category.name}}</a>\n                  <div class=\"info\">\n                    <span class=\"date\">{{item.created_at}}</span>\n                  </div>\n                </div>\n                <div *ngIf=\"!item.name_credits\" class=\"text\">\n                  <h3>\n                    <a [routerLink]=\"['/posts/post', item.id]\">{{item.title}}</a>\n                  </h3>\n                </div>\n\n                <div *ngIf=\"!item.name_credits\" class=\"text2\">\n                  <p>{{item.desc | striphtml |excerpt:80}}</p>\n                </div>\n              </div>\n              \n            </div>\n            <!-- <a href=\"#\" class=\"show-more\">Показать еще</a> -->\n          </div>\n          \n            </div>\n            <!-- <a href=\"#\" class=\"show-more\">Показать еще</a> -->\n          </div>\n\n"

/***/ }),

/***/ "./angular/app/news/all-news/all-news.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AllNewsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__order_pipe_ngx_order_pipe__ = __webpack_require__("./angular/app/order-pipe/ngx-order.pipe.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// import { interval } from 'rxjs/Observable/interval';



var AllNewsComponent = (function () {
    /**
     * @param {OrderPipe}
     */
    function AllNewsComponent(orderPipe, http, router, route) {
        var _this = this;
        this.orderPipe = orderPipe;
        this.http = http;
        this.router = router;
        this.route = route;
        this.news = [];
        this.main_news = [];
        this.countAll = 0;
        this.order = 'position';
        this.reverse = false;
        var path = "/newsraw";
        var info = http.get(path);
        info.subscribe(function (response) {
            _this.news = response['news'];
            _this.main_news = response['main_news'];
            console.log(_this.news);
            console.log(_this.main_news);
            _this.countAll = _this.news.length + _this.main_news.length;
        });
    }
    AllNewsComponent.prototype.getBack = function (image) {
        return 'url(' + image + ')';
    };
    AllNewsComponent.prototype.ngOnInit = function () {
    };
    AllNewsComponent.prototype.setOrder = function (value) {
        if (this.order === value) {
            this.reverse = !this.reverse;
        }
        this.order = value;
        console.log(this.order);
    };
    AllNewsComponent.prototype.loadMore = function (id) {
        this.router.navigate(['/posts/post', id]);
    };
    return AllNewsComponent;
}());
AllNewsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-all-news',
        template: __webpack_require__("./angular/app/news/all-news/all-news.component.html"),
        styles: [__webpack_require__("./angular/app/news/all-news/all-news.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__order_pipe_ngx_order_pipe__["a" /* OrderPipe */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__order_pipe_ngx_order_pipe__["a" /* OrderPipe */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _d || Object])
], AllNewsComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=all-news.component.js.map

/***/ }),

/***/ "./angular/app/news/header/header.component.css":
/***/ (function(module, exports) {

module.exports = ".navbar {\n        background: #1d1f24;\n        padding: 15px 0;\n      }\n      #searchform, #searchform input {\n        width: 100%;\n      }\n      .menubar {\n        background: #383c46;\n      }\n      .navbar-nav-ul a {\n        font-family: \"PT Sans\";\n        font-weight: bold;\n        color: #fff;\n        text-transform: uppercase;\n        display: block;\n        padding: 7px 14px;\n        font-size: 14px;\n        border-top: 2px solid #383c46;\n        border-right: 1px solid #1d1f24;\n      }\n      .navbar-nav-ul li:last-of-type a {\n        margin-right: 0;\n        border-right: none;\n      }\n      .navbar-nav-ul a:hover, .navbar-nav-ul a.active {\n        background: #fff;\n        color: #f58c1b;\n        border-top: 2px solid #f58c1b;\n        text-decoration: none;\n      }\n      .navbar-nav-ul, .tags {\n        overflow: hidden;\n        list-style: none;\n        padding-left: 0;\n      }\n      .navbar-nav-ul li, .tags li {\n        float: left;\n      }\n      .tags li {\n        margin-right: 15px;\n       }\n      .tags a {\n        display: block;\n        float: left;\n        padding: 10px 20px;\n        border-radius: 120px;\n        background: #e5e5e5;\n        color: #3e4468;\n        font-size: 13px;\n        font-family: \"PT Sans\";\n      }\n      .tags a:hover {\n        background: #f58c1b;\n        color: #fff;\n        text-decoration: none;\n      }"

/***/ }),

/***/ "./angular/app/news/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"navbar\">\n\n    <div class=\"container\">\n      <div class=\"col-lg-2\">\n  <a href=\"/\"><img src=\"img/logo.png\" /></a>\n</div>\n<div class=\"col-lg-7\">\n  <form action=\"/\" id=\"searchform\">\n    <input type=\"text\" name=\"search\" id=\"search\">\n  </form>\n</div>\n  <div class=\"col-lg-3 login\">\n<a href=\"#\">Войти</a>\n<a href=\"#\">Зарегистрироваться</a>\n</div>\n</div>\n</div>\n<nav class=\"menubar\">\n<div class=\"container \">\n\n<ul class=\"navbar-nav-ul\">\n   <li class=\" \">\n        <a class=\"\" href=\"#\">Home <span class=\"sr-only\">(current)</span></a>\n      </li>\n      <li class=\" \">\n        <a class=\"\" href=\"#\">Link</a>\n      </li>\n      <li class=\" \">\n        <a class=\" disabled\" href=\"#\">Disabled</a>\n      </li>\n</ul>\n\n\n</div>\n</nav>\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col-lg-3\">\n        <h3>Новости</h3>\n      </div>\n      <div class=\"col-lg-9\">\n        <ul class=\"tags\">\n          <li><a href=\"#\">Новое за сегодня</a></li>\n          <li><a href=\"#\">Самое популярное</a></li>\n          <li><a href=\"#\">Самое обсуждаемое</a></li>\n        </ul>\n      </div>\n        <p class=\"lead\">Use this document as a way to quickly start any new project.<br> All you get is this text and a mostly barebones HTML document.</p>\n      </div>\n    </div><!-- /.container -->"

/***/ }),

/***/ "./angular/app/news/header/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeaderComponent = (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    return HeaderComponent;
}());
HeaderComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-header',
        template: __webpack_require__("./angular/app/news/header/header.component.html"),
        styles: [__webpack_require__("./angular/app/news/header/header.component.css")]
    }),
    __metadata("design:paramtypes", [])
], HeaderComponent);

//# sourceMappingURL=header.component.js.map

/***/ }),

/***/ "./angular/app/news/news-detail/news-detail.component.html":
/***/ (function(module, exports) {

module.exports = "            <div class=\"analytics-block\">\n                <div class=\"news-big\" [ngStyle]=\"{'background-image':'url('+news.photo+')' }\">\n                    <a href=\"/posts/all\" class=\"return\"><span>&#60;</span>Вернуться к списку новостей</a>\n                    <table style=\"width: 100%\"><tr><td style=\" height: 120px; vertical-align: bottom;\" height=\"120\" valign=\"bottom\"><h2>{{news?.title}}</h2></td></tr></table>\n                    <div class=\"bottom-line\">\n                        <a href=\"#\" class=\"news-btn\">{{news.category}}</a>\n                        <div class=\"info\">\n                            <span class=\"date\">{{news.created_at}}</span>\n                            <span class=\"views\"><i class=\"fa fa-eye\" aria-hidden=\"true\"></i></span>\n                            <a href=\"#comments-block\" class=\"comments\"><i class=\"fa fa-comment\" aria-hidden=\"true\"></i>{{commentcount}}</a>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"innertext\"  [innerHTML]='news?.desc | safeHtml'>\n            </div>\n            <div class=\"comment-block\" id=\"comment-block\">\n                    <div class=\"comment-top\" *ngIf=\"user.id != undefined\">\n                                <h3>Добавить новый комментарий</h3>\n                                <form (ngSubmit)=\"submitComment(f, news.id, 'App\\\\News')\" #f=\"ngForm\">\n                                    <input type=\"hidden\" ngModel name=\"post_id\" value=\"{{news?.id}}\">\n                                    <input type=\"hidden\" ngModel name=\"commentable_type\" value=\"App\\News\">\n                                    <textarea ngModel name=\"body\" placeholder=\"Начните вводить комментарий...\"></textarea>\n                                    <button type=\"submit\">Добавить</button>\n                                </form>\n                    </div>\n                    <div class=\"comment-top\" *ngIf=\"user.id == undefined\">\n                        <h3>Комментарии ({{news.comments_count}})</h3>\n                        <p>Для того чтобы добавить свой комментарий - Вам необходимо <a href=\"#login-popup\" class=\"popup-link\">авторизоваться</a> или <a href=\"#check-popup\" class=\"popup-link\">пройти регистрацию.</a></p>\n                    </div>\n                    \n                    <div *ngIf=\"user.id != undefined\" style=\"background: none !important; border: none !important\" class=\"comment-top\">\n                        <h3 >Комментарии ({{commentcount}})</h3>\n                        <!-- <p>Для того чтобы добавить свой комментарий - Вам необходимо <a href=\"#login-popup\" class=\"popup-link\">авторизоваться</a> или <a href=\"#check-popup\" class=\"popup-link\">пройти регистрацию.</a></p> -->\n\n                    \n                    </div>\n                    <ul class=\"comment-items\">\n                        <!--  -->\n                        <li *ngFor=\"let item of comments\">\n                            <div class=\"left\">\n                                <div class=\"info\">\n                                    <div class=\"img-wrap\">\n                                        <img src=\"{{item.photo}}\" style=\"max-width: 35px; height: auto;\" alt=\"\">\n                                    </div>\n                                    <div class=\"text-wrap\">\n                                        <p>{{item.author}}</p>\n                                        <span>Добавлен {{item.created_at}}</span>\n                                    </div>\n                                </div>\n                                <p class=\"comment-text\">{{item.body}}</p>\n                            </div>\n                            <div class=\"right\">\n                                <div class=\"img-wrap\"></div>\n                                <div class=\"btn-block\">\n                                    <span class=\"number-green\">{{rating_count[item.id]}}</span>\n                                    <div class=\"buttons\">\n                                        <a (click)=\"onVote(item.id, 1)\" class=\"plus\">+</a>\n                                        <a (click)=\"onVote(item.id, 0)\" class=\"minus\">-</a>\n                                    </div>\n                                </div>\n                            </div>\n                        </li>\n\n                    </ul>\n                    <!-- <a href=\"#\" class=\"show-comments\">Показать все комментарии (22)</a> -->\n                </div>"

/***/ }),

/***/ "./angular/app/news/news-detail/news-detail.component.scss":
/***/ (function(module, exports) {

module.exports = ".sidebar {\n  padding-top: 22px; }\n\n.analytics-block {\n  width: 880px;\n  margin-left: -20px;\n  margin-top: -24px; }\n\n.analytics-block .news-big {\n  padding: 22px 22px 18px 22px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n  -ms-flex-direction: column;\n  flex-direction: column;\n  margin-bottom: 22px;\n  height: 302px;\n  background-position: center center;\n  background-repeat: no-repeat;\n  background-size: cover; }\n\n.analytics-block .return {\n  color: #Fff;\n  margin-bottom: 85px; }\n\n.analytics-block h2 {\n  font-size: 34px;\n  color: #fff;\n  font-weight: bold;\n  line-height: 40px;\n  margin-top: -5px; }\n\n.analytics-block .bottom-line {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n  -ms-flex-align: center;\n  align-items: center;\n  margin-top: auto; }\n\n.analytics-block .bottom-line .news-btn {\n  margin-right: 15px; }\n\n.analytics-block .images-wrap {\n  width: 100%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n  -ms-flex-pack: justify;\n  justify-content: space-between;\n  margin-bottom: 20px; }\n\n.analytics-block .images-wrap img {\n  display: inline-block;\n  width: calc(50% - 7px); }\n\n.analytics-block .comment-block .comment-items {\n  padding: 0;\n  padding-bottom: 8px; }\n\n.analytics-block .comment-block .comment-items li {\n  border: none; }\n\n.analytics-block .news-block h3 {\n  font-size: 18px;\n  color: #000;\n  font-weight: bold; }\n\n.analytics-block .news-block .news-wrap {\n  width: 100%;\n  margin-right: -14px; }\n\n.analytics-block .news-block .news-wrap .news {\n  width: 281px;\n  margin-right: 14px;\n  display: inline-block; }\n\n.analytics-block .news-block .news-wrap .news:nth-child(3n) {\n  margin-right: 0; }\n\n.analytics-wrap .sidebar .tag-list {\n  margin-top: 12px; }\n\n.blockquote-block {\n  border: 3px solid #e5e5e5;\n  padding: 35px;\n  margin-bottom: 25px; }\n\n.blockquote-block p {\n  text-align: center;\n  font-size: 24px;\n  color: #000;\n  line-height: 28px; }\n\n.text {\n  color: #002026;\n  font-size: 16px;\n  line-height: 18px;\n  margin-bottom: 20px; }\n\n.text.text-big {\n  font-size: 18px;\n  line-height: 22px; }\n\n.text .bold {\n  font-weight: bold; }\n\n.news-wrap, .interview-wrap {\n  padding-top: 0 !important; }\n\n.comment-block {\n  margin-top: 30px; }\n\n.comment-block .comment-top {\n  border-bottom: 1px solid #e3e3e3;\n  background: #fff;\n  padding: 20px 19px 19px 20px; }\n\n.comment-block .comment-top h3 {\n  font-size: 18px;\n  font-weight: bold;\n  color: #000;\n  margin-bottom: 10px; }\n\n.comment-block .comment-top p {\n  font-size: 14px;\n  font-weight: bold;\n  color: #fa5252; }\n\n.comment-block .comment-top p a {\n  color: #fa5252;\n  text-decoration: underline; }\n\n.comment-block .comment-items {\n  padding: 0 22px 0 18px; }\n\n.comment-block .comment-items li {\n  padding: 20px 0;\n  border-bottom: 1px solid #a4a4a4;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n  -ms-flex-pack: justify;\n  justify-content: space-between;\n  width: 100%; }\n\n.comment-block .comment-items li:last-child {\n  border: none; }\n\n.comment-block .comment-items li.hidden {\n  display: none; }\n\n.comment-block .comment-items li .left .info {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n  -ms-flex-align: center;\n  align-items: center;\n  margin-bottom: 8px; }\n\n.comment-block .comment-items li .left .info .img-wrap {\n  width: 35px;\n  height: 35px;\n  margin-right: 12px; }\n\n.comment-block .comment-items li .left .info .img-wrap img {\n  width: 100%;\n  border-radius: 50%; }\n\n.comment-block .comment-items li .left .info .text-wrap p {\n  font-size: 11px;\n  font-weight: bold;\n  color: #000; }\n\n.comment-block .comment-items li .left .info .text-wrap span {\n  display: inline-block;\n  font-weight: bold;\n  font-size: 11px;\n  color: #777; }\n\n.comment-block .comment-items li .left .comment-text {\n  color: #000;\n  font-size: 16px; }\n\n.comment-block .comment-items li .right {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n  -ms-flex-align: center;\n  align-items: center;\n  -webkit-box-pack: justify;\n  -ms-flex-pack: justify;\n  justify-content: space-between;\n  min-width: 78px; }\n\n.comment-block .comment-items li .right .btn-block {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n  -ms-flex-align: center;\n  align-items: center; }\n\n.comment-block .comment-items li .right .btn-block .number-green {\n  font-size: 24px;\n  color: #8cc863; }\n\n.comment-block .comment-items li .right .btn-block .number-red {\n  font-size: 24px;\n  color: #fa5252; }\n\n.comment-block .comment-items li .right .btn-block .buttons {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n  -ms-flex-direction: column;\n  flex-direction: column;\n  margin-left: 9px; }\n\n.comment-block .comment-items li .right .btn-block .buttons a {\n  width: 20px;\n  height: 20px;\n  border-radius: 50%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n  -ms-flex-align: center;\n  align-items: center;\n  -webkit-box-pack: center;\n  -ms-flex-pack: center;\n  justify-content: center; }\n\n.comment-block .comment-items li .right .btn-block .buttons .plus {\n  margin-bottom: 4px;\n  color: #fff;\n  font-size: 18px;\n  background: #8cc863; }\n\n.comment-block .comment-items li .right .btn-block .buttons .plus:hover {\n  background: #c0deac; }\n\n.comment-block .comment-items li .right .btn-block .buttons .minus {\n  color: #fff;\n  font-size: 18px;\n  background: #fa5252; }\n\n.comment-block .comment-items li .right .btn-block .buttons .minus:hover {\n  background: #f8a3a3; }\n\n.comment-block .show-comments {\n  width: 100%;\n  height: 42px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n  -ms-flex-align: center;\n  align-items: center;\n  -webkit-box-pack: center;\n  -ms-flex-pack: center;\n  justify-content: center;\n  font-weight: bold;\n  font-size: 14px;\n  margin-top: -1px;\n  color: #383c46;\n  background: #c1c1c1; }\n\n.comment-block .show-comments:hover {\n  background: #383c46;\n  color: #fff; }\n\n.comment-block .total-comments {\n  font-size: 18px;\n  font-weight: bold;\n  color: #000;\n  margin-left: 18px;\n  margin-top: 24px; }\n\n.comment-wrap {\n  margin-top: -15px;\n  margin-bottom: 25px; }\n\n.comment-items li:last-child {\n  border: none; }\n\n.comment-top {\n  padding: 18px 25px 21px 15px; }\n\n.comment-top form textarea {\n  height: 54px;\n  border: 1px solid #e4e4e4;\n  width: 100%;\n  resize: none;\n  font-size: 14px;\n  color: #949494;\n  padding: 10px;\n  margin-bottom: 10px; }\n\n.comment-top form textarea::-webkit-input-placeholder {\n  color: #949494; }\n\n.comment-top form textarea::-moz-placeholder {\n  color: #949494; }\n\n.comment-top form textarea:-ms-input-placeholder {\n  color: #949494; }\n\n.comment-top form textarea:-moz-placeholder {\n  color: #949494; }\n\n.comment-top form textarea:focus {\n  outline: none; }\n\n.comment-top form button {\n  height: 34px;\n  background: #f58c1b;\n  color: #fff;\n  font-size: 14px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n  -ms-flex-align: center;\n  align-items: center;\n  padding: 0px 17px;\n  border: none;\n  font-weight: bold; }\n\n.comment-block .comment-items {\n  padding: 0 22px 0 18px; }\n\n.comment-block .comment-items li {\n  padding: 20px 0;\n  border-bottom: 1px solid #a4a4a4;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n  -ms-flex-pack: justify;\n  justify-content: space-between;\n  width: 100%; }\n\n.comment-block .comment-items li:last-child {\n  border: none; }\n\n.comment-block .comment-items li.hidden {\n  display: none; }\n\n.comment-block .comment-items li .left .info {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n  -ms-flex-align: center;\n  align-items: center;\n  margin-bottom: 8px; }\n\n.comment-block .comment-items li .left .info .img-wrap {\n  width: 35px;\n  height: 35px;\n  margin-right: 12px; }\n\n.comment-block .comment-items li .left .info .img-wrap img {\n  width: 100%;\n  border-radius: 50%; }\n\n.comment-block .comment-items li .left .info .text-wrap p {\n  font-size: 11px;\n  font-weight: bold;\n  color: #000; }\n\n.comment-block .comment-items li .left .info .text-wrap span {\n  display: inline-block;\n  font-weight: bold;\n  font-size: 11px;\n  color: #777; }\n\n.comment-block .comment-items li .left .comment-text {\n  color: #000;\n  font-size: 16px; }\n\n.comment-block .comment-items li .right {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n  -ms-flex-align: center;\n  align-items: center;\n  -webkit-box-pack: justify;\n  -ms-flex-pack: justify;\n  justify-content: space-between;\n  min-width: 78px; }\n\n.comment-block .comment-items li .right .btn-block {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n  -ms-flex-align: center;\n  align-items: center; }\n\n.comment-block .comment-items li .right .btn-block .number-green {\n  font-size: 24px;\n  color: #8cc863; }\n\n.comment-block .comment-items li .right .btn-block .number-red {\n  font-size: 24px;\n  color: #fa5252; }\n\n.comment-block .comment-items li .right .btn-block .buttons {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n  -ms-flex-direction: column;\n  flex-direction: column;\n  margin-left: 9px; }\n\n.comment-block .comment-items li .right .btn-block .buttons a {\n  width: 20px;\n  height: 20px;\n  border-radius: 50%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n  -ms-flex-align: center;\n  align-items: center;\n  -webkit-box-pack: center;\n  -ms-flex-pack: center;\n  justify-content: center; }\n\n.comment-block .comment-items li .right .btn-block .buttons .plus {\n  margin-bottom: 4px;\n  color: #fff;\n  font-size: 18px;\n  background: #8cc863; }\n\n.comment-block .comment-items li .right .btn-block .buttons .plus:hover {\n  background: #c0deac; }\n\n.comment-block .comment-items li .right .btn-block .buttons .minus {\n  color: #fff;\n  font-size: 18px;\n  background: #fa5252; }\n\n.comment-block .comment-items li .right .btn-block .buttons .minus:hover {\n  background: #f8a3a3; }\n\n.comment-block .show-comments {\n  width: 100%;\n  height: 42px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n  -ms-flex-align: center;\n  align-items: center;\n  -webkit-box-pack: center;\n  -ms-flex-pack: center;\n  justify-content: center;\n  font-weight: bold;\n  font-size: 14px;\n  margin-top: -1px;\n  color: #383c46;\n  background: #c1c1c1; }\n\n.comment-block .show-comments:hover {\n  background: #383c46;\n  color: #fff; }\n\n.comment-block .total-comments {\n  font-size: 18px;\n  font-weight: bold;\n  color: #000;\n  margin-left: 18px;\n  margin-top: 24px; }\n\n.analytics-block .comment-block {\n  margin-top: 0;\n  margin-bottom: 28px;\n  border-top: 9px solid #e5e5e5;\n  border-bottom: 9px solid #e5e5e5; }\n\n.analytics-block .comment-block .comment-top {\n  border: none;\n  padding: 0;\n  padding-top: 28px;\n  background-color: transparent; }\n\n.analytics-block .comment-block .comment-items {\n  padding: 0;\n  padding-bottom: 8px; }\n\n.analytics-block .comment-block .comment-items li {\n  border: none; }\n\n.innertext {\n  margin-bottom: 20px; }\n\n.blockquote-block {\n  border: 3px solid #e5e5e5;\n  padding: 35px;\n  margin-bottom: 25px; }\n\n@media (max-width: 600px) {\n  .blockquote-block {\n    padding: 30px; } }\n\n.blockquote-block p {\n  text-align: center;\n  font-size: 24px;\n  color: #000;\n  line-height: 28px; }\n\n@media (max-width: 600px) {\n  .blockquote-block p {\n    font-size: 16px;\n    line-height: 20px; }\n  .blockquote-block p br {\n    display: none; } }\n\n@media (max-width: 600px) {\n  .blockquote-block p img {\n    position: absolute; }\n  .blockquote-block p img:first-child {\n    left: 25px; } }\n"

/***/ }),

/***/ "./angular/app/news/news-detail/news-detail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export News */
/* unused harmony export CommentRaw */
/* unused harmony export User */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewsDetailComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__comments_service__ = __webpack_require__("./angular/app/comments.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var News = (function () {
    function News() {
    }
    return News;
}());

var CommentRaw = (function () {
    function CommentRaw() {
    }
    return CommentRaw;
}());

var User = (function () {
    function User() {
    }
    return User;
}());

var NewsDetailComponent = (function () {
    function NewsDetailComponent(http, router, route, commentService) {
        var _this = this;
        this.http = http;
        this.router = router;
        this.route = route;
        this.commentService = commentService;
        this.comments = [];
        this.submitted = false;
        this.commentcount = 0;
        this.rating_count = [];
        this.comment = {
            'post_id': '',
            'body': '',
            'commentable_id': '',
            'commentable_type': ''
        };
        var id = route.snapshot.params['id'];
        var path = "/newsraw/" + id;
        var info = http.get(path);
        info.subscribe(function (response) {
            _this.news = {
                id: response['news'][0]['id'],
                title: response['news'][0]['title'],
                desc: response['news'][0]['desc'],
                created_at: response['news'][0]['created_at'],
                category: response['category'].name,
                photo: response['photos'][0].file,
                comments_count: response['comments_count']
            };
            _this.commentcount = response['comments_count'];
            (_a = _this.comments).push.apply(_a, response['news'][0]['comments']);
            for (var _i = 0, _b = response['news'][0]['comments']; _i < _b.length; _i++) {
                var item = _b[_i];
                _this.rating_count[item['id']] = 0;
                for (var _c = 0, _d = item.rating; _c < _d.length; _c++) {
                    var rating_item = _d[_c];
                    if (rating_item.positive == 1) {
                        _this.rating_count[item['id']] += 1;
                    }
                    else {
                        _this.rating_count[item['id']] -= 1;
                    }
                }
            }
            console.log(response['news'][0]['id']);
            console.log(_this.news);
            console.log(_this.comments);
            var _a;
        });
    }
    NewsDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.router.events.subscribe(function (evt) {
            if (!(evt instanceof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* NavigationEnd */])) {
                return;
            }
            window.scrollTo(0, 0);
        });
        var userpath = "/angular/user";
        var userinfo = this.http.get(userpath);
        userinfo.subscribe(function (response) {
            _this.user = {
                id: response.id,
                name: response.name,
                email: response.email,
                photo_id: response.photo_id,
                role_id: response.role_id
            };
        });
    };
    // @ViewChild('f') Form:NgForm;
    NewsDetailComponent.prototype.onVote = function (comment_id, positive) {
        var _this = this;
        this.commentService.addVote(comment_id, positive).subscribe(function (res) {
            console.log(res);
            if (positive == 1) {
                _this.rating_count[comment_id] += 1;
            }
            else {
                _this.rating_count[comment_id] -= 1;
            }
        }, function (error) { return console.log(error); });
    };
    NewsDetailComponent.prototype.submitComment = function (form, post_id, type) {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["c" /* HttpHeaders */]({ 'Content-type': 'Application/json ' });
        this.http.post('/storecomment', {
            'post_id': post_id,
            'body': form.value.body,
            'commentable_id': post_id,
            'commentable_type': type
        }, { headers: headers }).subscribe(function (response) {
            _this.comments.unshift({
                id: response['id'],
                email: response['email'],
                author: response['author'],
                body: response['body'],
                commentable_id: response['commentable_id'],
                photo: response['photo'],
                created_at: response['created_at']
            });
            _this.submitted = true;
            _this.commentcount = _this.commentcount + 1;
        }, function (error) { return console.log(error); });
        form.reset();
    };
    return NewsDetailComponent;
}());
NewsDetailComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-news-detail',
        template: __webpack_require__("./angular/app/news/news-detail/news-detail.component.html"),
        styles: [__webpack_require__("./angular/app/news/news-detail/news-detail.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__comments_service__["a" /* CommentsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__comments_service__["a" /* CommentsService */]) === "function" && _d || Object])
], NewsDetailComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=news-detail.component.js.map

/***/ }),

/***/ "./angular/app/news/news.component.css":
/***/ (function(module, exports) {

module.exports = "   body{\n  background: #f9f9f9;\n    font-family: \"PT Sans\";\n  }\n  aside {\n    margin-right:-20px;\n  }\n  .container {\n        max-width: 1180px !important;\n      }\n  .navbar {\n        background: #1d1f24;\n        padding: 15px 0;\n      }\n  #searchform, #searchform input {\n        width: 100%;\n    border-radius:20px;\n    border:none;\n    height:40px;\n      }\n  .menubar {\n        background: #383c46;\n      }\n  .navbar-nav-ul a {\n        font-family: \"PT Sans\";\n        font-weight: bold;\n        color: #fff;\n        text-transform: uppercase;\n        display: block;\n        padding: 7px 14px;\n        font-size: 14px;\n        border-top: 2px solid #383c46;\n        border-right: 1px solid #1d1f24;\n      }\n  .navbar-nav-ul li:last-of-type a {\n        margin-right: 0;\n        border-right: none;\n      }\n  .navbar-nav-ul a:hover, .navbar-nav-ul a.active {\n        background: #fff;\n        color: #f58c1b;\n        border-top: 2px solid #f58c1b;\n        text-decoration: none;\n      }\n  .navbar-nav-ul, .tags {\n        overflow: hidden;\n        list-style: none;\n        padding-left: 0;\n      }\n  .navbar-nav-ul li, .tags li {\n        float: left;\n      }\n  .tag {\n        z-index: 99;\n        position: relative\n      }\n  .tags li {\n        margin-right: 15px;\n       }\n  .tags-min li {\n        margin-right: 4px;\n       }\n  .tags a {\n        display: block;\n        float: left;\n        padding: 9px 17px;\n        border-radius: 120px;\n        background: #e5e5e5;\n        color: #3e4468;\n        font-size: 13px;\n        font-family: \"PT Sans\";\n      }\n  .tags-min a {\n        font-size: 10px;\n        padding: 5px 10px;\n        /*border-radius: 10px;*/\n      }\n  .tags a:hover, .tags a.active {\n        background: #f58c1b;\n        color: #fff;\n        text-decoration: none;\n      }\n  .block {\n        height: 230px !important;\n        margin-bottom: 13px !important;\n      }\n  .block-content {\n        padding: 24px 0 0 24px;\n      }\n  .block-content span a {\n        background: #fff;\n        color: #1d1f24;\n        padding: 7px;\n        text-decoration: none;\n        font-size: 12px;\n        /*display: block;*/\n        margin-right:10px;\n      }\n  .block-content h2 {\n        font-size: 25px;\n        color: #fff;\n        line-height: 32px;\n        margin-top: 30px;\n      }\n  .meta {\n        position: absolute;\n        bottom: 20px;\n        left: 24px;\n        color: #fff;\n        font-family: \"Myriad Pro\", sans-serif;\n        font-weight: 100;\n        font-size: 10px;\n      }\n  .main-block p {\n        color: #002026;\n        font-size: 13px;\n        margin-top: 20px;\n        width: 85%;\n        line-height: 17px;\n      }\n  .main-block p a {\n        color: #002026;\n        text-decoration: underline;\n      }\n  .masonry-item {\n        width: 33.33%;\n        /*margin: 10px;*/\n        min-height: 170px;\n    padding:10px;\n      }\n  .masonry-item img {\n        width: 100%;\n      }\n  .masonry {\n        width: 100%;\n        /*margin-left: -10px;*/\n        margin-top: 20px;\n      }\n  .left-block {\n        width: 880px;\n      }\n  .masonry-item h3 {\n        line-height: 19px !important;\n        margin-top: 10px !important;\n      }\n  .masonry-item h3 a {\n        color: #000000;\n        font-size: 18px;\n        font-weight: bold;\n        font-family: \"PT Sans\";\n        text-decoration: none;\n      }\n  .masonry-item h3 a:hover {\n        color: #f58c1b;\n      }\n  .grid-item-bg {\n        min-height: 170px;\n        position: relative;\n        overflow: hidden;\n      }\n  .left-block {\n        padding-left: 0;\n        float: left;\n      }\n  .left-block .row {\n        margin-left: 0 !important;\n      }\n  .right-block {\n        max-width: 270px;\n        float: right;\n        width: 250px;\n\n      }\n  .categories a {\n        background: #cfcfcf;\n        border-radius: 20px;\n        font-size: 12px;\n        color: #000;\n        text-decoration: none;\n        padding: 7px 10px;\n        margin-right: 10px;\n        margin-bottom: 10px;\n      }\n  .categories a:hover, .categories .active {\n        background:#383c46;\n        color: #fff;\n      }\n  .row b {\n        padding: 4px 5px !important;\n        font-size: 11px;\n      }\n  .quotations{width:100%;float:left;min-height:5px; background: #fff }\n  .quotations h5{\n  font-family:\"PT Sans\";\n  }\n  .footer{width:100%;background:#eee;text-align:center;float:left;min-height:5px;padding:50px;}\n  .top{width:100%;height:100px;background:black}\n  .block {\n    float: left;\n    margin-bottom: 25px;\n    width: calc(33.33% - 17px);\n    position:relative !important;\n}\n  .block img {\n    width: 100%;\n    height: auto;\n}\n  .quotations h5 {\n  color: #383c46;\n  text-align: left !important;\n  font-size: 15px;\n  font-weight: bold;\n  padding-left: 10px;\n  line-height:18px;\n}\n  .quotations th {\n  padding-left: 10px;\n}\n  .top5 {\n  font-weight: 100;\n  font-size: 13px;\n  text-align: right;\n  padding: 15px !important;\n\n}\n  .top5 .all-cot {\n  text-align: left;\n}\n  .top5 th {\n  font-weight: bold;\n  text-align: left;\n}\n  .all-cot {\n  width:100%;color:#4a4a4a;padding:0 10px;float:left; text-decoration: underline; font-weight: bold; font-size: 11px; padding-bottom: 0px;\n}\n  i.fa {\n  padding: 0 !important;\n}\n  i{padding:5px;border:1px solid #9b9b9b;color:#9b9b9b;border-radius:50%;width:30px;height:30px;line-height:30px;text-align:center}\n  i:hover{color:#f58c1b;border:1px solid #f58c1b;cursor:pointer;}\n  .row .col-md-9 .row .col-md-3 {\n  padding-left: 22px !important;\n    padding-top: 5px;\n}\n  .col-md-3 > h3 {\n  font-size: 35px;\n}\n  h3+h6 {\n  color: #9b9b9b;\n    margin-top: 13px !important;\n    float: left;\n    width: 50%;\n    text-align: center;\n    padding-left: 20px;\n}\n  .tags li {\n  margin-top: 7px;\n}\n  .tags-min li {\n  margin-top: 0px;\n}\n  .rightbar {\n  padding-left: 0;\n  padding-right: 36px;\n}\n  .categories {\n  margin-top: 15px;\n\n}\n  .price {\n  font-weight: bold !important;\n  font-size: 13px;\n  color: #919191;\n  padding-top: 7px !important;\n  margin-bottom: -10px;\n}\n  .login a {\n  font-size: 13px;\n}\n  .spy {\n  background: url(/dist/assets/spy.png) top left no-repeat;\n  color: #fff;\n  padding-left: 25px;\n  margin-left: 20px;\n}\n  .chat {\n    background: url(/dist/assets/chat.png) top left no-repeat;\n  color: #fff;\n  padding-left: 20px;\n  margin-left: 20px;\n}\n  .main-block h2 a {\n  color: #fff;\n  text-decoration: none;\n}\n  .main-block h2 a:hover {\n  text-decoration: underline;\n}\n  tbody>tr>th {\n  font-size:13px;\n}\n  .masonry-item h3 {\n  margin-top:13px !important;\n  \n}"

/***/ }),

/***/ "./angular/app/news/news.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"news-wrap\">\n    <div class=\"wrapper\">\n<router-outlet></router-outlet>\n<aside class=\"sidebar\">\n        <ul class=\"tag-list\">\n          <li> <a\n           [routerLink]=\"['/posts/all']\" routerLinkActive=\"active\">Все новости</a></li>\n          <li *ngFor=\"let category of categories\">\n            <a\n           [routerLink]=\"['/posts/category', category.id]\" routerLinkActive=\"active\">{{category.name}}({{category.count}})</a>\n          </li>\n        </ul>\n        <app-sidebar></app-sidebar>\n      </aside>\n    </div>\n  </section>"

/***/ }),

/***/ "./angular/app/news/news.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/@angular/common/http.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// import { interval } from 'rxjs/Observable/interval';


var NewsComponent = (function () {
    function NewsComponent(http, router, route) {
        var _this = this;
        this.http = http;
        this.router = router;
        this.route = route;
        this.categories = [];
        var path = "/categoriesraw/1";
        var info = http.get(path);
        info.subscribe(function (response) {
            for (var _i = 0, _a = response['cats']; _i < _a.length; _i++) {
                var item = _a[_i];
                if (item['count'] > 0) {
                    _this.categories.push({
                        id: item['id'],
                        name: item['name'],
                        count: item['count']
                    });
                }
            }
            console.log(_this.categories);
        });
    }
    NewsComponent.prototype.ngOnInit = function () {
    };
    NewsComponent.prototype.loadCat = function (id) {
        this.router.navigate(['/posts/category', id]);
        //  console.log('snap');
        //  this.route.url.subscribe(() => {
        //  console.log(this.route.snapshot.firstChild.data);
        // });
    };
    return NewsComponent;
}());
NewsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-news',
        template: __webpack_require__("./angular/app/news/news.component.html"),
        styles: [__webpack_require__("./angular/app/news/news.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _c || Object])
], NewsComponent);

var _a, _b, _c;
//# sourceMappingURL=news.component.js.map

/***/ }),

/***/ "./angular/app/order-pipe/ngx-order.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrderPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var OrderPipe = OrderPipe_1 = (function () {
    function OrderPipe() {
    }
    /**
     * Check if a value is a string
     *
     * @param value
     */
    OrderPipe.isString = function (value) {
        return typeof value === 'string' || value instanceof String;
    };
    /**
     * Sorts values ignoring the case
     *
     * @param a
     * @param b
     */
    OrderPipe.caseInsensitiveSort = function (a, b) {
        if (OrderPipe_1.isString(a) && OrderPipe_1.isString(b)) {
            return a.localeCompare(b);
        }
        return OrderPipe_1.defaultCompare(a, b);
    };
    /**
     * Default compare method
     *
     * @param a
     * @param b
     */
    OrderPipe.defaultCompare = function (a, b) {
        if (a === b) {
            return 0;
        }
        if (a == null) {
            return 1;
        }
        if (b == null) {
            return -1;
        }
        return a > b ? 1 : -1;
    };
    /**
     * Parse expression, split into items
     * @param expression
     * @returns {string[]}
     */
    OrderPipe.parseExpression = function (expression) {
        expression = expression.replace(/\[(\w+)\]/g, '.$1');
        expression = expression.replace(/^\./, '');
        return expression.split('.');
    };
    /**
     * Get value by expression
     *
     * @param object
     * @param expression
     * @returns {any}
     */
    OrderPipe.getValue = function (object, expression) {
        for (var i = 0, n = expression.length; i < n; ++i) {
            var k = expression[i];
            if (!(k in object)) {
                return;
            }
            object = object[k];
        }
        return object;
    };
    /**
     * Set value by expression
     *
     * @param object
     * @param value
     * @param expression
     */
    OrderPipe.setValue = function (object, value, expression) {
        var i;
        for (i = 0; i < expression.length - 1; i++) {
            object = object[expression[i]];
        }
        object[expression[i]] = value;
    };
    OrderPipe.prototype.transform = function (value, expression, reverse, isCaseInsensitive, comparator) {
        if (isCaseInsensitive === void 0) { isCaseInsensitive = false; }
        if (!value) {
            return value;
        }
        if (Array.isArray(expression)) {
            return this.multiExpressionTransform(value, expression, reverse, isCaseInsensitive, comparator);
        }
        if (Array.isArray(value)) {
            return this.sortArray(value.slice(), expression, reverse, isCaseInsensitive, comparator);
        }
        if (typeof value === 'object') {
            return this.transformObject(Object.assign({}, value), expression, reverse, isCaseInsensitive, comparator);
        }
        return value;
    };
    /**
     * Sort array
     *
     * @param value
     * @param expression
     * @param reverse
     * @param isCaseInsensitive
     * @param comparator
     * @returns {any[]}
     */
    OrderPipe.prototype.sortArray = function (value, expression, reverse, isCaseInsensitive, comparator) {
        var isDeepLink = expression && expression.indexOf('.') !== -1;
        if (isDeepLink) {
            expression = OrderPipe_1.parseExpression(expression);
        }
        var compareFn;
        if (comparator && typeof comparator === 'function') {
            compareFn = comparator;
        }
        else {
            compareFn = isCaseInsensitive ? OrderPipe_1.caseInsensitiveSort : OrderPipe_1.defaultCompare;
        }
        var array = value.sort(function (a, b) {
            if (!expression) {
                return compareFn(a, b);
            }
            if (!isDeepLink) {
                if (a && b) {
                    return compareFn(a[expression], b[expression]);
                }
                return compareFn(a, b);
            }
            return compareFn(OrderPipe_1.getValue(a, expression), OrderPipe_1.getValue(b, expression));
        });
        if (reverse) {
            return array.reverse();
        }
        return array;
    };
    /**
     * Transform Object
     *
     * @param value
     * @param expression
     * @param reverse
     * @param isCaseInsensitive
     * @param comparator
     * @returns {any[]}
     */
    OrderPipe.prototype.transformObject = function (value, expression, reverse, isCaseInsensitive, comparator) {
        var parsedExpression = OrderPipe_1.parseExpression(expression);
        var lastPredicate = parsedExpression.pop();
        var oldValue = OrderPipe_1.getValue(value, parsedExpression);
        if (!Array.isArray(oldValue)) {
            parsedExpression.push(lastPredicate);
            lastPredicate = null;
            oldValue = OrderPipe_1.getValue(value, parsedExpression);
        }
        if (!oldValue) {
            return value;
        }
        OrderPipe_1.setValue(value, this.transform(oldValue, lastPredicate, reverse, isCaseInsensitive), parsedExpression);
        return value;
    };
    /**
     * Apply multiple expressions
     *
     * @param value
     * @param {any[]} expressions
     * @param {boolean} reverse
     * @param {boolean} isCaseInsensitive
     * @param {Function} comparator
     * @returns {any}
     */
    OrderPipe.prototype.multiExpressionTransform = function (value, expressions, reverse, isCaseInsensitive, comparator) {
        var _this = this;
        if (isCaseInsensitive === void 0) { isCaseInsensitive = false; }
        return expressions.reverse().reduce(function (result, expression) {
            return _this.transform(result, expression, reverse, isCaseInsensitive, comparator);
        }, value);
    };
    return OrderPipe;
}());
OrderPipe = OrderPipe_1 = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["X" /* Pipe */])({
        name: 'orderBy',
        pure: false
    })
], OrderPipe);

var OrderPipe_1;
//# sourceMappingURL=ngx-order.pipe.js.map

/***/ }),

/***/ "./angular/app/portfolio.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PortfolioService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/@angular/common/http.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]({ 'Content-type': 'Application/json ' });
var PortfolioService = (function () {
    function PortfolioService(http) {
        this.http = http;
        this.portfolios = [];
    }
    // public getUser() {
    // return this.http
    //   .get<any>('/angular/user');
    // }
    PortfolioService.prototype.getPortfolioNames = function () {
        return this.http
            .get('/angular/user');
    };
    PortfolioService.prototype.getPortfolioById = function (id) {
        return this.http
            .get('/angular/userportfolio/' + id);
    };
    PortfolioService.prototype.deletePortfolioCat = function (id) {
        return this.http
            .get('/angular/userportfolio/deletecat/' + id);
    };
    PortfolioService.prototype.createPortfolioCat = function (name, type) {
        return this.http
            .post('/angular/userportfolio/create', { 'name': name, 'user_portfolio_type_id': type }, { headers: headers });
    };
    PortfolioService.prototype.removePortfolio = function (id) {
        return this.http.get('/angular/userportfolio/remove/' + id);
    };
    PortfolioService.prototype.submitPortfolio = function (post_id, id, type) {
        return this.http.post('/storeportfolio', {
            'user_portfollable_id': id,
            'user_portfolio_id': post_id,
            'user_portfollable_type': type
        }, { headers: headers });
    };
    return PortfolioService;
}());
PortfolioService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]) === "function" && _a || Object])
], PortfolioService);

var _a;
//# sourceMappingURL=portfolio.service.js.map

/***/ }),

/***/ "./angular/app/profile/portfolio/portfolio.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"my-portfolio\">\n    <div class=\"wrapper\">\n      <div class=\"portfolio-head\">\n        <h2>Мой портфель<a href=\"#\">+</a></h2>\n        <p>Отслеживайте все важные изменения по монетам, биржам, майнингу, ico проектам и др. Вся информация в одном месте! <br>\nНастраивайте индивидуальные уведомления...</p>\n      </div>\n      <div class=\"table-wrap img-table\" *ngFor=\"let item of portfolioNames; let i = index\">\n        <div class=\"table-title\">\n          <h3>{{item.name}}</h3>\n          <div class=\"buttons\">\n            <a href=\"#\"><img src=\"/img/setting-icon-table.png\" alt=\"\"></a>\n            <a (click)=\"onDelete(item.id, i)\" class=\"basket\"><img src=\"/img/basket-white.png\" alt=\"\"></a>\n          </div>\n        </div>\n        <table class=\"table crypto-table\">\n          <thead>\n            <tr>\n              <th width=\"27%\" [class.active]=\"order === 'name'\"\n                            (click)=\"setOrder('name')\">\n                <span>Название</span>\n                <img src=\"img/arr-top-table.png\" alt=\"\">\n              </th>\n              <th width=\"13%\" class=\"active\" [class.active]=\"order === 'proc'\"\n                            (click)=\"setOrder('proc')\">\n                <span>Доходность</span>\n                <img src=\"img/arr-top-table.png\" alt=\"\">\n              </th>\n              <th width=\"13%\" >\n                <span>Существует</span>\n                <img src=\"img/arr-top-table.png\" alt=\"\">\n              </th>\n              <th width=\"13%\" [class.active]=\"order === 'depo'\"\n                            (click)=\"setOrder('depo')\">\n                <span>Депозит</span>\n                <img src=\"img/arr-top-table.png\" alt=\"\">\n              </th>\n              <th width=\"13%\">\n                <span>Получено</span>\n                <img src=\"img/arr-top-table.png\" alt=\"\">\n              </th>\n              <th width=\"21%\" [class.active]=\"order === 'status'\"\n                            (click)=\"setOrder('status')\">\n                <span>Статус</span>\n                <img src=\"img/arr-top-table.png\" alt=\"\">\n              </th>\n            </tr>\n          </thead>\n          <tbody>\n            <tr *ngFor=\"let portfolioItem of portfolios[item.id] | orderBy: order:reverse:'case-insensitive'; let in = index\">\n              <td>\n                <a href=\"crypto-single.html\">\n                  <div class=\"img-wrap\">\n                    <img src=\"{{portfolioItem.logo}}\" alt=\"\">\n                  </div>\n                  <span>{{portfolioItem.name}}</span>\n                </a>\n              </td>\n              <td>\n                <!-- <p><span class=\"bold\">{{portfolioItem.proc}}% / год</span></p> -->\n              </td>\n              <td>\n                <span>189 дней</span>\n              </td>\n              <td>\n                <!-- <span class=\"bold\">${{portfolioItem.depo}}</span> -->\n              </td>\n              <td>\n                <span>$ 90 (15%)</span>\n              </td>           \n              <td>\n                <div class=\"difference\">\n                <!--   <span [ngClass]=\"portfolioItem.status == 1 ? 'green' : 'red'\">{{portfolioItem.status == 1 ? 'Платит' : 'Не платит'}}</span> -->\n                  <div class=\"buttons\">\n                    <a href=\"#\" class=\"setting\"><img src=\"/img/setting-icon-table.png\" alt=\"\"></a>\n                    <a (click)=\"onRemove(item.id, portfolioItem.id, in)\" class=\"minus\"><img src=\"/img/minus.png\" alt=\"\"></a>\n                  </div>\n                </div>\n              </td>\n            </tr>\n            <tr class=\"no-bg\">\n              <td colspan=\"3\" class=\"no-border\">\n                <a class=\"add\">+Добавить облачный майнинг в портфель</a>\n                <form>\n                  <input type=\"text\" placeholder=\"Введите название...\" [value]=\"searchLine\" (keyup)=\"searchTerm$.next($event.target.value)\" >\n                  <button type=\"submit\" (click)=\"onAdd(item.id, result_id)\">Добавить</button>\n                </form>\n                <ul *ngIf=\"results\">\n                <li *ngFor=\"let result of results | slice:0:9\">\n                  <a (click)=\"searchLine = result.name; result_id=result.id\" target=\"_blank\">\n                   {{ result.name }}\n                  </a>\n                </li>\n              </ul>\n              </td>\n              <td class=\"no-border\">\n                <span class=\"bold\">$178</span>\n              </td>           \n              <td class=\"no-border\">\n                <span class=\"red\">$1370</span>\n              </td>\n            </tr>\n          </tbody>\n        </table>\n      </div>\n    </div>\n  </section>"

/***/ }),

/***/ "./angular/app/profile/portfolio/portfolio.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./angular/app/profile/portfolio/portfolio.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PortfolioComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__portfolio_service__ = __webpack_require__("./angular/app/portfolio.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__order_pipe_ngx_order_pipe__ = __webpack_require__("./angular/app/order-pipe/ngx-order.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__search_service__ = __webpack_require__("./angular/app/search.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Subject__ = __webpack_require__("./node_modules/rxjs/_esm5/Subject.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var PortfolioComponent = (function () {
    /**
     * Example: Use Order pipe in the component
     *
     * @param {OrderPipe} orderPipe
     */
    function PortfolioComponent(orderPipe, portfolioService, searchService) {
        var _this = this;
        this.orderPipe = orderPipe;
        this.portfolioService = portfolioService;
        this.searchService = searchService;
        this.order = 'proc';
        this.portfolioNames = [];
        this.portfolios = [];
        this.reverse = false;
        this.searchTerm$ = new __WEBPACK_IMPORTED_MODULE_4_rxjs_Subject__["b" /* Subject */]();
        this.searchLine = '';
        this.result_id = 0;
        this.searchService.mainSearch(this.searchTerm$)
            .subscribe(function (results) {
            _this.results = results;
            console.log(results);
        });
    }
    PortfolioComponent.prototype.getPorts = function (type) {
        var _this = this;
        this.portfolioService.getPortfolioNames().subscribe(function (res) {
            _this.portfolioNames = res['portfolio'];
            console.log(_this.portfolioNames);
            var _loop_1 = function (item) {
                console.log('asd');
                _this.portfolioService.getPortfolioById(item.id)
                    .subscribe(function (res) {
                    if (res[type].length > 0) {
                        _this.portfolios[item.id] = res[type];
                    }
                    console.log(res);
                    console.log(_this.portfolios);
                });
            };
            for (var _i = 0, _a = _this.portfolioNames; _i < _a.length; _i++) {
                var item = _a[_i];
                _loop_1(item);
            }
        });
    };
    PortfolioComponent.prototype.setOrder = function (value) {
        if (this.order === value) {
            this.reverse = !this.reverse;
        }
        this.order = value;
    };
    PortfolioComponent.prototype.onDelete = function (id, index) {
        var _this = this;
        this.portfolioService.deletePortfolioCat(id).subscribe(function (res) {
            if (index > -1) {
                _this.portfolioNames.splice(index, 1);
            }
        });
    };
    PortfolioComponent.prototype.onAdd = function (port_id, id) {
        var _this = this;
        this.portfolioService.submitPortfolio(port_id, id, 'App\\CloudMining').subscribe(function (result) {
            _this.portfolioService.getPortfolioById(port_id)
                .subscribe(function (res) { if (res.length > 0) {
                _this.portfolios[port_id] = res;
                console.log(res);
            } });
            console.log(result);
        });
    };
    PortfolioComponent.prototype.onRemove = function (itemid, id, index) {
        var _this = this;
        this.portfolioService.removePortfolio(id).subscribe(function (res) {
            if (index > -1) {
                _this.portfolios[itemid].splice(index, 1);
            }
        });
    };
    PortfolioComponent.prototype.ngOnInit = function () {
        this.getPorts('mining');
        this.getPorts('ico');
        this.getPorts('crypto');
        this.getPorts('stocks');
    };
    return PortfolioComponent;
}());
PortfolioComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-portfolio',
        template: __webpack_require__("./angular/app/profile/portfolio/portfolio.component.html"),
        styles: [__webpack_require__("./angular/app/profile/portfolio/portfolio.component.scss")],
        providers: [__WEBPACK_IMPORTED_MODULE_1__portfolio_service__["a" /* PortfolioService */], __WEBPACK_IMPORTED_MODULE_3__search_service__["a" /* SearchService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__order_pipe_ngx_order_pipe__["a" /* OrderPipe */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__order_pipe_ngx_order_pipe__["a" /* OrderPipe */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__portfolio_service__["a" /* PortfolioService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__portfolio_service__["a" /* PortfolioService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__search_service__["a" /* SearchService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__search_service__["a" /* SearchService */]) === "function" && _c || Object])
], PortfolioComponent);

var _a, _b, _c;
//# sourceMappingURL=portfolio.component.js.map

/***/ }),

/***/ "./angular/app/profile/profile.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "./angular/app/profile/profile.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./angular/app/profile/profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ProfileComponent = (function () {
    function ProfileComponent() {
    }
    ProfileComponent.prototype.ngOnInit = function () {
    };
    return ProfileComponent;
}());
ProfileComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-profile',
        template: __webpack_require__("./angular/app/profile/profile.component.html"),
        styles: [__webpack_require__("./angular/app/profile/profile.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], ProfileComponent);

//# sourceMappingURL=profile.component.js.map

/***/ }),

/***/ "./angular/app/review/all-review/all-review.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n        <div class=\"col-md-4\" style=\"padding-left:20px;\">\n        <h3 style=\"float:left; margin-top: 3px;\">Обзоры</h3>\n\t<h6 style=\"color:#9b9b9b;margin-top:10px;float:left;width:10%;text-align:center\">228</h6>\n      </div>\n\t  \n\n\t  \n      <div class=\"col-md-8\">\n        <ul class=\"tags\">\n          <li><a routerLinkActive=\"active\"  routerLink=\"/review/all\">Новое за сегодня</a></li>\n          <li><a routerLinkActive=\"active\" href=\"#\">Самое популярное</a></li>\n          <li><a routerLinkActive=\"active\" href=\"#\">Самое обсуждаемое</a></li>\n        </ul>\n      </div>\n </div>\n\n <div class=\"main-block\" style=\"width: 48%;float:left;margin:1%;\" *ngFor=\"let main_item of main_news\">\n        <div class=\"block\" style=\"background-size: cover; width: 100%; height: 240px; box-sizing: border-box;\">\n          <div style=\"position: absolute; z-index: 2; background: rgba(0,0,0,.5); top: 0; right: 0; left: 0; bottom: 0;\"></div>\n          <img style=\"z-index: 1; position: absolute; top: 0; left: 0; right: 0;\n          bottom: 0;\" src=\"{{main_item.photo}}\">\n          <div class=\"block-content\">\n            <span class=\"tag\"><a href=\"#\">{{main_item.category}}</a></span>\n            <table style=\"height: 140px;\"><tr><td valign=\"bottom\">\n            \n            <h2 style=\"position: relative; z-index: 999\"><a (click)=\"loadMore(main_item.id)\">{{main_item.title}}</a></h2>\n          </td></tr></table>\n\n            <div class=\"meta\" style=\"z-index: 99\">\n              <span class=\"date\">{{main_item.created_at}}</span>\n              <span class=\"spy\">0</span>\n              <span class=\"chat\">0</span>\n            </div>\n          </div>\n        </div>\n        <p>{{main_item.desc}} <a (click)=\"loadMore(main_item.id)\">Подробнее</a></p>\n      </div>\n\n<masonry [options]=\"myOptions\" class=\"masonry\" style=\"float:left; transition: none !important;\">\n        \n\t\n\t  \n\t  \t  \t\t<masonry-brick style=\"transition: none !important;\" class=\"masonry-item\" *ngFor=\"let item of news\">\n        <div class=\"grid-item-bg\" style=\" position: relative; background-size: cover; box-sizing: border-box;\">\n          <div style=\"position: absolute; z-index: 2; background: rgba(0,0,0,.5); top: 0; right: 0; left: 0; bottom: 0;\"></div>\n          <img style=\"z-index: 1; position: absolute; top: 0; left: 0; right: 0;\n          bottom: 0;\" src=\"{{item.photo}}\">\n          <div class=\"block-content\" style=\"z-index: 99\">\n            <span class=\"tag\"><a href=\"#\">{{item.category}}</a></span>\n            \n            <div class=\"meta\" style=\"z-index: 99\">\n              <span class=\"date\">{{item.created_at}}</span>\n            </div>\n          </div>\n        </div>\n        <h3><a  (click)=\"loadMore(item.id)\" >{{item.title}}</a></h3>\n      </masonry-brick>\n      \n\t  \n      </masonry>"

/***/ }),

/***/ "./angular/app/review/all-review/all-review.component.scss":
/***/ (function(module, exports) {

module.exports = "body {\n  background: #f9f9f9;\n  font-family: \"PT Sans\"; }\n\n.container {\n  max-width: 1180px !important; }\n\n.navbar {\n  background: #1d1f24;\n  padding: 15px 0; }\n\n#searchform, #searchform input {\n  width: 100%;\n  border-radius: 20px;\n  border: none;\n  height: 40px; }\n\n.menubar {\n  background: #383c46; }\n\n.navbar-nav-ul a {\n  font-family: \"PT Sans\";\n  font-weight: bold;\n  color: #fff;\n  text-transform: uppercase;\n  display: block;\n  padding: 7px 14px;\n  font-size: 14px;\n  border-top: 2px solid #383c46;\n  border-right: 1px solid #1d1f24; }\n\n.navbar-nav-ul li:last-of-type a {\n  margin-right: 0;\n  border-right: none; }\n\n.navbar-nav-ul a:hover, .navbar-nav-ul a.active {\n  background: #fff;\n  color: #f58c1b;\n  border-top: 2px solid #f58c1b;\n  text-decoration: none; }\n\n.navbar-nav-ul, .tags {\n  overflow: hidden;\n  list-style: none;\n  padding-left: 0; }\n\n.navbar-nav-ul li, .tags li {\n  float: left; }\n\n.tag {\n  z-index: 99;\n  position: relative; }\n\n.tags li {\n  margin-right: 15px; }\n\n.tags a {\n  display: block;\n  float: left;\n  padding: 9px 17px;\n  border-radius: 120px;\n  background: #e5e5e5;\n  color: #3e4468;\n  font-size: 13px;\n  font-family: \"PT Sans\"; }\n\n.tags a:hover, .tags a.active {\n  background: #f58c1b;\n  color: #fff;\n  text-decoration: none; }\n\n.block {\n  height: 230px !important;\n  margin-bottom: 13px !important; }\n\n.block-content {\n  padding: 24px 0 0 24px; }\n\n.block-content span a {\n  background: #fff;\n  color: #1d1f24;\n  padding: 7px;\n  text-decoration: none;\n  font-size: 12px;\n  /*display: block;*/\n  margin-right: 10px; }\n\n.block-content h2 {\n  font-size: 25px;\n  color: #fff;\n  line-height: 32px;\n  margin-top: 30px; }\n\n.meta {\n  position: absolute;\n  bottom: 20px;\n  left: 24px;\n  color: #fff;\n  font-family: \"Myriad Pro\", sans-serif;\n  font-weight: 100;\n  font-size: 10px; }\n\n.main-block p {\n  color: #002026;\n  font-size: 13px;\n  margin-top: 20px;\n  width: 85%;\n  line-height: 17px; }\n\n.main-block p a {\n  color: #002026;\n  text-decoration: underline; }\n\n.masonry-item {\n  width: 33.33%;\n  /*margin: 10px;*/\n  min-height: 170px;\n  padding: 10px; }\n\n.masonry-item img {\n  width: 100%; }\n\n.masonry {\n  width: 100%;\n  /*margin-left: -10px;*/\n  margin-top: 20px; }\n\n.left-block {\n  width: 880px; }\n\n.masonry-item h3 {\n  line-height: 23px; }\n\n.masonry-item h3 a {\n  color: #000000;\n  font-size: 18px;\n  font-weight: bold;\n  font-family: \"PT Sans\";\n  text-decoration: none;\n  line-height: 23px; }\n\n.masonry-item h3 a:hover {\n  color: #f58c1b; }\n\n.grid-item-bg {\n  min-height: 170px;\n  position: relative;\n  overflow: hidden; }\n\n.left-block {\n  padding-left: 0;\n  float: left; }\n\n.left-block .row {\n  margin-left: 0 !important; }\n\n.right-block {\n  max-width: 270px;\n  float: right;\n  width: 250px; }\n\n.categories a {\n  background: #cfcfcf;\n  border-radius: 20px;\n  font-size: 12px;\n  color: #000;\n  text-decoration: none;\n  padding: 7px 10px;\n  margin-right: 10px;\n  margin-bottom: 10px; }\n\n.categories a:hover, .categories .active {\n  background: #383c46;\n  color: #fff; }\n\n.row b {\n  padding: 4px 5px !important;\n  font-size: 12px; }\n\n.quotations {\n  width: 100%;\n  float: left;\n  min-height: 5px;\n  background: #fff; }\n\n.footer {\n  width: 100%;\n  background: #eee;\n  text-align: center;\n  float: left;\n  min-height: 5px;\n  padding: 50px; }\n\n.top {\n  width: 100%;\n  height: 100px;\n  background: black; }\n\n.block {\n  float: left;\n  margin-bottom: 25px;\n  width: calc(33.33% - 17px);\n  position: relative !important; }\n\n.block img {\n  width: 100%;\n  height: auto; }\n\n.quotations h5 {\n  color: #383c46;\n  text-align: left !important;\n  font-size: 16px;\n  font-weight: bold;\n  padding-left: 10px; }\n\n.quotations th {\n  padding-left: 10px; }\n\n.top5 {\n  font-weight: 100;\n  font-size: 13px;\n  text-align: right;\n  padding: 15px !important; }\n\n.top5 .all-cot {\n  text-align: left; }\n\n.top5 th {\n  font-weight: bold;\n  text-align: left; }\n\n.all-cot {\n  width: 100%;\n  color: #4a4a4a;\n  padding: 10px;\n  float: left;\n  text-decoration: underline;\n  font-weight: bold;\n  font-size: 13px;\n  padding-bottom: 0px; }\n\ni.fa {\n  padding: 0 !important; }\n\ni {\n  padding: 5px;\n  border: 1px solid #9b9b9b;\n  color: #9b9b9b;\n  border-radius: 50%;\n  width: 30px;\n  height: 30px;\n  line-height: 30px;\n  text-align: center; }\n\ni:hover {\n  color: #f58c1b;\n  border: 1px solid #f58c1b;\n  cursor: pointer; }\n\n.row .col-md-9 .row .col-md-3 {\n  padding-left: 22px !important;\n  padding-top: 5px; }\n\n.col-md-3 > h3 {\n  font-size: 35px; }\n\nh3 + h6 {\n  color: #9b9b9b;\n  margin-top: 13px !important;\n  float: left;\n  width: 50%;\n  text-align: center;\n  padding-left: 20px; }\n\n.tags li {\n  margin-top: 7px; }\n\n.rightbar {\n  padding-left: 0;\n  padding-right: 36px; }\n\n.categories {\n  margin-top: 15px; }\n\n.price {\n  font-weight: bold !important;\n  font-size: 13px;\n  color: #919191;\n  padding-top: 7px !important;\n  margin-bottom: -10px; }\n\n.login a {\n  font-size: 13px; }\n\n.spy {\n  background: url(/dist/assets/spy.png) top left no-repeat;\n  color: #fff;\n  padding-left: 25px;\n  margin-left: 20px; }\n\n.chat {\n  background: url(/dist/assets/chat.png) top left no-repeat;\n  color: #fff;\n  padding-left: 20px;\n  margin-left: 20px; }\n\n.main-block h2 a {\n  color: #fff;\n  text-decoration: none; }\n\n.main-block h2 a:hover {\n  text-decoration: underline; }\n"

/***/ }),

/***/ "./angular/app/review/all-review/all-review.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export NewsRaw */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AllReviewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/@angular/common/http.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// import { interval } from 'rxjs/Observable/interval';


var scr = 'http://ppql.ru/masonry.js';
var NewsRaw = (function () {
    function NewsRaw() {
    }
    return NewsRaw;
}());

var AllReviewComponent = (function () {
    function AllReviewComponent(http, router, route) {
        var _this = this;
        this.http = http;
        this.router = router;
        this.route = route;
        this.myOptions = {
            transitionDuration: '0'
        };
        this.news = [];
        this.main_news = [];
        var path = "/reviewraw";
        var info = http.get(path);
        info.subscribe(function (response) {
            // console.log(response['news']);
            // this.news = response['news'];
            for (var _i = 0, _a = response['news']; _i < _a.length; _i++) {
                var item = _a[_i];
                console.log(item.photos[0].file);
                _this.news.push({
                    id: item.id,
                    title: item.title,
                    desc: item.desc,
                    main: item.main,
                    created_at: item.created_at,
                    category: item.category.name,
                    photo: item.photos[0].file
                });
            }
            for (var _b = 0, _c = response['main_news']; _b < _c.length; _b++) {
                var item = _c[_b];
                console.log(item);
                _this.main_news.push({
                    id: item.id,
                    title: item.title,
                    desc: item.desc,
                    main: item.main,
                    category: item.category.name,
                    created_at: item.created_at,
                    photo: item.photos[0].file
                });
            }
            // this.news.push(response['news']);
            //   this.main_news.push(response['main_news']);
            // console.log(response['news']);
            // console.log(this.news);
            // console.log(this.news[0].photo);
            // console.log(this.main_news);
        });
    }
    AllReviewComponent.prototype.ngOnInit = function () {
    };
    AllReviewComponent.prototype.loadMore = function (id) {
        this.router.navigate(['/review/item', id]);
    };
    return AllReviewComponent;
}());
AllReviewComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-all-review',
        template: __webpack_require__("./angular/app/review/all-review/all-review.component.html"),
        styles: [__webpack_require__("./angular/app/review/all-review/all-review.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _c || Object])
], AllReviewComponent);

var _a, _b, _c;
//# sourceMappingURL=all-review.component.js.map

/***/ }),

/***/ "./angular/app/review/review-categories/review-categories.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n        <div class=\"col-md-4\" style=\"padding-left:20px;\">\n        <h3 style=\"float:left; margin-top: 3px;\">Обзоры</h3>\n  <h6 style=\"color:#9b9b9b;margin-top:10px;float:left;width:10%;text-align:center\">228</h6>\n      </div>\n\n    \n      <div class=\"col-md-8\">\n        <ul class=\"tags\">\n          <li><a routerLinkActive=\"active\"  routerLink=\"/review/all\">Новое за сегодня</a></li>\n          <li><a routerLinkActive=\"active\" href=\"#\">Самое популярное</a></li>\n          <li><a routerLinkActive=\"active\" href=\"#\">Самое обсуждаемое</a></li>\n        </ul>\n      </div>\n </div>\n\n <div class=\"main-block\" style=\"width: 48%;float:left;margin:1%;\" *ngFor=\"let main_item of main_news\">\n        <div class=\"block\" style=\"background-size: cover; width: 100%; height: 240px; box-sizing: border-box;\">\n          <div style=\"position: absolute; z-index: 2; background: rgba(0,0,0,.5); top: 0; right: 0; left: 0; bottom: 0;\"></div>\n          <img style=\"z-index: 1; position: absolute; top: 0; left: 0; right: 0;\n          bottom: 0;\" src=\"{{main_item.photo}}\">\n          <div class=\"block-content\">\n            <span class=\"tag\"><a href=\"#\">{{main_item.category}}</a></span>\n            <table style=\"height: 140px;\"><tr><td valign=\"bottom\">\n            \n            <h2 style=\"position: relative; z-index: 999\"><a (click)=\"loadMore(main_item.id)\">{{main_item.title}}</a></h2>\n          </td></tr></table>\n\n            <div class=\"meta\" style=\"z-index: 99\">\n              <span class=\"date\">{{main_item.created_at}}</span>\n              <span class=\"spy\">0</span>\n              <span class=\"chat\">0</span>\n            </div>\n          </div>\n        </div>\n        <p>{{main_item.desc}} <a (click)=\"loadMore(main_item.id)\">Подробнее</a></p>\n      </div>\n\n<masonry class=\"masonry\" [options]=\"myOptions\" style=\"float:left;\">\n        \n\t\n\t  \n\t  \t  \t\t<masonry-brick class=\"masonry-item\" *ngFor=\"let item of news\">\n        <div class=\"grid-item-bg\" style=\" position: relative; background-size: cover; box-sizing: border-box;\">\n          <div style=\"position: absolute; z-index: 2; background: rgba(0,0,0,.5); top: 0; right: 0; left: 0; bottom: 0;\"></div>\n          <img style=\"z-index: 1; position: absolute; top: 0; left: 0; right: 0;\n          bottom: 0;\" src=\"{{item.photo}}\">\n          <div class=\"block-content\" style=\"z-index: 99\">\n            <span class=\"tag\"><a href=\"#\">{{item.category}}</a></span>\n            \n            <div class=\"meta\" style=\"z-index: 99\">\n              <span class=\"date\">{{item.created_at}}</span>\n            </div>\n          </div>\n        </div>\n        <h3><a  (click)=\"loadMore(item.id)\" >{{item.title}}</a></h3>\n      </masonry-brick>\n      \n\t  \n      </masonry>"

/***/ }),

/***/ "./angular/app/review/review-categories/review-categories.component.scss":
/***/ (function(module, exports) {

module.exports = "body {\n  background: #f9f9f9;\n  font-family: \"PT Sans\"; }\n\n.container {\n  max-width: 1180px !important; }\n\n.navbar {\n  background: #1d1f24;\n  padding: 15px 0; }\n\n#searchform, #searchform input {\n  width: 100%;\n  border-radius: 20px;\n  border: none;\n  height: 40px; }\n\n.menubar {\n  background: #383c46; }\n\n.navbar-nav-ul a {\n  font-family: \"PT Sans\";\n  font-weight: bold;\n  color: #fff;\n  text-transform: uppercase;\n  display: block;\n  padding: 7px 14px;\n  font-size: 14px;\n  border-top: 2px solid #383c46;\n  border-right: 1px solid #1d1f24; }\n\n.navbar-nav-ul li:last-of-type a {\n  margin-right: 0;\n  border-right: none; }\n\n.navbar-nav-ul a:hover, .navbar-nav-ul a.active {\n  background: #fff;\n  color: #f58c1b;\n  border-top: 2px solid #f58c1b;\n  text-decoration: none; }\n\n.navbar-nav-ul, .tags {\n  overflow: hidden;\n  list-style: none;\n  padding-left: 0; }\n\n.navbar-nav-ul li, .tags li {\n  float: left; }\n\n.tag {\n  z-index: 99;\n  position: relative; }\n\n.tags li {\n  margin-right: 15px; }\n\n.tags a {\n  display: block;\n  float: left;\n  padding: 9px 17px;\n  border-radius: 120px;\n  background: #e5e5e5;\n  color: #3e4468;\n  font-size: 13px;\n  font-family: \"PT Sans\"; }\n\n.tags a:hover, .tags a.active {\n  background: #f58c1b;\n  color: #fff;\n  text-decoration: none; }\n\n.block {\n  height: 230px !important;\n  margin-bottom: 13px !important; }\n\n.block-content {\n  padding: 24px 0 0 24px; }\n\n.block-content span a {\n  background: #fff;\n  color: #1d1f24;\n  padding: 7px;\n  text-decoration: none;\n  font-size: 12px;\n  /*display: block;*/\n  margin-right: 10px; }\n\n.block-content h2 {\n  font-size: 25px;\n  color: #fff;\n  line-height: 32px;\n  margin-top: 30px; }\n\n.meta {\n  position: absolute;\n  bottom: 20px;\n  left: 24px;\n  color: #fff;\n  font-family: \"Myriad Pro\", sans-serif;\n  font-weight: 100;\n  font-size: 10px; }\n\n.main-block p {\n  color: #002026;\n  font-size: 13px;\n  margin-top: 20px;\n  width: 85%;\n  line-height: 17px; }\n\n.main-block p a {\n  color: #002026;\n  text-decoration: underline; }\n\n.masonry-item {\n  width: 33.33%;\n  /*margin: 10px;*/\n  min-height: 170px;\n  padding: 10px; }\n\n.masonry-item img {\n  width: 100%; }\n\n.masonry {\n  width: 100%;\n  /*margin-left: -10px;*/\n  margin-top: 20px; }\n\n.left-block {\n  width: 880px; }\n\n.masonry-item h3 {\n  line-height: 23px; }\n\n.masonry-item h3 a {\n  color: #000000;\n  font-size: 18px;\n  font-weight: bold;\n  font-family: \"PT Sans\";\n  text-decoration: none;\n  line-height: 23px; }\n\n.masonry-item h3 a:hover {\n  color: #f58c1b; }\n\n.grid-item-bg {\n  min-height: 170px;\n  position: relative;\n  overflow: hidden; }\n\n.left-block {\n  padding-left: 0;\n  float: left; }\n\n.left-block .row {\n  margin-left: 0 !important; }\n\n.right-block {\n  max-width: 270px;\n  float: right;\n  width: 250px; }\n\n.categories a {\n  background: #cfcfcf;\n  border-radius: 20px;\n  font-size: 12px;\n  color: #000;\n  text-decoration: none;\n  padding: 7px 10px;\n  margin-right: 10px;\n  margin-bottom: 10px; }\n\n.categories a:hover, .categories .active {\n  background: #383c46;\n  color: #fff; }\n\n.row b {\n  padding: 4px 5px !important;\n  font-size: 12px; }\n\n.quotations {\n  width: 100%;\n  float: left;\n  min-height: 5px;\n  background: #fff; }\n\n.footer {\n  width: 100%;\n  background: #eee;\n  text-align: center;\n  float: left;\n  min-height: 5px;\n  padding: 50px; }\n\n.top {\n  width: 100%;\n  height: 100px;\n  background: black; }\n\n.block {\n  float: left;\n  margin-bottom: 25px;\n  width: calc(33.33% - 17px);\n  position: relative !important; }\n\n.block img {\n  width: 100%;\n  height: auto; }\n\n.quotations h5 {\n  color: #383c46;\n  text-align: left !important;\n  font-size: 16px;\n  font-weight: bold;\n  padding-left: 10px; }\n\n.quotations th {\n  padding-left: 10px; }\n\n.top5 {\n  font-weight: 100;\n  font-size: 13px;\n  text-align: right;\n  padding: 15px !important; }\n\n.top5 .all-cot {\n  text-align: left; }\n\n.top5 th {\n  font-weight: bold;\n  text-align: left; }\n\n.all-cot {\n  width: 100%;\n  color: #4a4a4a;\n  padding: 10px;\n  float: left;\n  text-decoration: underline;\n  font-weight: bold;\n  font-size: 13px;\n  padding-bottom: 0px; }\n\ni.fa {\n  padding: 0 !important; }\n\ni {\n  padding: 5px;\n  border: 1px solid #9b9b9b;\n  color: #9b9b9b;\n  border-radius: 50%;\n  width: 30px;\n  height: 30px;\n  line-height: 30px;\n  text-align: center; }\n\ni:hover {\n  color: #f58c1b;\n  border: 1px solid #f58c1b;\n  cursor: pointer; }\n\n.row .col-md-9 .row .col-md-3 {\n  padding-left: 22px !important;\n  padding-top: 5px; }\n\n.col-md-3 > h3 {\n  font-size: 35px; }\n\nh3 + h6 {\n  color: #9b9b9b;\n  margin-top: 13px !important;\n  float: left;\n  width: 50%;\n  text-align: center;\n  padding-left: 20px; }\n\n.tags li {\n  margin-top: 7px; }\n\n.rightbar {\n  padding-left: 0;\n  padding-right: 36px; }\n\n.categories {\n  margin-top: 15px; }\n\n.price {\n  font-weight: bold !important;\n  font-size: 13px;\n  color: #919191;\n  padding-top: 7px !important;\n  margin-bottom: -10px; }\n\n.login a {\n  font-size: 13px; }\n\n.spy {\n  background: url(/dist/assets/spy.png) top left no-repeat;\n  color: #fff;\n  padding-left: 25px;\n  margin-left: 20px; }\n\n.chat {\n  background: url(/dist/assets/chat.png) top left no-repeat;\n  color: #fff;\n  padding-left: 20px;\n  margin-left: 20px; }\n\n.main-block h2 a {\n  color: #fff;\n  text-decoration: none; }\n\n.main-block h2 a:hover {\n  text-decoration: underline; }\n"

/***/ }),

/***/ "./angular/app/review/review-categories/review-categories.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export NewsRaw */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReviewCategoriesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/@angular/common/http.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// import { interval } from 'rxjs/Observable/interval';


var scr = 'http://ppql.ru/masonry.js';
var NewsRaw = (function () {
    function NewsRaw() {
    }
    return NewsRaw;
}());

var ReviewCategoriesComponent = (function () {
    function ReviewCategoriesComponent(http, router, route) {
        this.http = http;
        this.router = router;
        this.route = route;
        this.myOptions = {
            transitionDuration: '0'
        };
        this.news = [];
        this.main_news = [];
    }
    ReviewCategoriesComponent.prototype.loadScript = function () {
        console.log('preparing to load...');
        var node = document.createElement('script');
        node.src = scr;
        node.type = 'text/javascript';
        node.async = false;
        node.charset = 'utf-8';
        document.getElementsByTagName('body')[0].appendChild(node);
    };
    ReviewCategoriesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.id = params['id'];
            _this.news.length = 0;
            _this.main_news.length = 0;
            _this.path = "/reviewbycat/" + _this.id;
            _this.info = _this.http.get(_this.path);
            _this.info.subscribe(function (response) {
                // console.log(response['news']);
                // this.news = response['news'];
                for (var _i = 0, _a = response['news']; _i < _a.length; _i++) {
                    var item = _a[_i];
                    console.log(item.photos[0].file);
                    _this.news.push({
                        id: item.id,
                        title: item.title,
                        desc: item.desc,
                        main: item.main,
                        created_at: item.created_at,
                        category: item.category.name,
                        photo: item.photos[0].file
                    });
                }
                for (var _b = 0, _c = response['main_news']; _b < _c.length; _b++) {
                    var item = _c[_b];
                    console.log(item);
                    _this.main_news.push({
                        id: item.id,
                        title: item.title,
                        desc: item.desc,
                        main: item.main,
                        category: item.category.name,
                        created_at: item.created_at,
                        photo: item.photos[0].file
                    });
                }
                // this.news.push(response['news']);
                //   this.main_news.push(response['main_news']);
                // console.log(response['news']);
            });
        });
    };
    ReviewCategoriesComponent.prototype.loadMore = function (id) {
        this.router.navigate(['/review/item', id]);
    };
    return ReviewCategoriesComponent;
}());
ReviewCategoriesComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-review-categories',
        template: __webpack_require__("./angular/app/review/review-categories/review-categories.component.html"),
        styles: [__webpack_require__("./angular/app/review/review-categories/review-categories.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _c || Object])
], ReviewCategoriesComponent);

var _a, _b, _c;
//# sourceMappingURL=review-categories.component.js.map

/***/ }),

/***/ "./angular/app/review/review-detail/review-detail.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n<div class=\"col-lg-12\">\n<h2>{{news?.title}}</h2>\n</div>\n<div class=\"col-lg-12\" [innerHTML]=\"news?.desc\">\n\n\t</div>\n<div class=\"col-lg-12\">\n\t<h3>Оставить комментарий</h3>\n<form (ngSubmit)=\"submitComment(f, news.id, 'App\\\\Review')\" #f=\"ngForm\">\n\t<div class=\"form-group\">\n\t<input type=\"hidden\" ngModel name=\"post_id\" value=\"{{news?.id}}\">\n\t<input type=\"hidden\" ngModel name=\"commentable_type\" value=\"App\\Review\">\n\n\t<!-- <input type=\"hidden\" > -->\n\t<textarea ngModel name=\"body\" class=\"form-control\"></textarea>\n\t<button type=\"submit\" class=\"btn btn-success\">Опубликовать</button>\n</div>\n</form>\n\n<h3>Комментарии</h3>\n       <div class=\"container\">\n        <div class=\"row\">\n\n                <div *ngFor=\"let item of comments\" class=\"col-lg-12\" style=\"margin-top:20px;\">\n                <div class=\"media\">\n                    <a class=\"pull-left\" href=\"#\">\n                        <img class=\"media-object\" height=\"64\" src=\"http://placehold.it/64x64\" alt=\"\">\n                    </a>\n                    <div class=\"media-body\">\n                        <h6 class=\"media-heading\">{{item.author}}\n                            <!-- <small>{{$comment->created_at->diffForHumans()}}</small>  -->\n                        </h6>\n                        <p>{{item.body}}</p>\n                        </div>\n                    </div>\n                </div>\n</div>\n</div>\n</div>\n</div>"

/***/ }),

/***/ "./angular/app/review/review-detail/review-detail.component.scss":
/***/ (function(module, exports) {

module.exports = "body {\n  background: #f9f9f9;\n  font-family: \"PT Sans\"; }\n\n.container {\n  max-width: 1180px !important; }\n\n.navbar {\n  background: #1d1f24;\n  padding: 15px 0; }\n\n#searchform, #searchform input {\n  width: 100%;\n  border-radius: 20px;\n  border: none;\n  height: 40px; }\n\n.menubar {\n  background: #383c46; }\n\n.navbar-nav-ul a {\n  font-family: \"PT Sans\";\n  font-weight: bold;\n  color: #fff;\n  text-transform: uppercase;\n  display: block;\n  padding: 7px 14px;\n  font-size: 14px;\n  border-top: 2px solid #383c46;\n  border-right: 1px solid #1d1f24; }\n\n.navbar-nav-ul li:last-of-type a {\n  margin-right: 0;\n  border-right: none; }\n\n.navbar-nav-ul a:hover, .navbar-nav-ul a.active {\n  background: #fff;\n  color: #f58c1b;\n  border-top: 2px solid #f58c1b;\n  text-decoration: none; }\n\n.navbar-nav-ul, .tags {\n  overflow: hidden;\n  list-style: none;\n  padding-left: 0; }\n\n.navbar-nav-ul li, .tags li {\n  float: left; }\n\n.tag {\n  z-index: 99;\n  position: relative; }\n\n.tags li {\n  margin-right: 15px; }\n\n.tags a {\n  display: block;\n  float: left;\n  padding: 9px 17px;\n  border-radius: 120px;\n  background: #e5e5e5;\n  color: #3e4468;\n  font-size: 13px;\n  font-family: \"PT Sans\"; }\n\n.tags a:hover, .tags a.active {\n  background: #f58c1b;\n  color: #fff;\n  text-decoration: none; }\n\n.block {\n  height: 230px !important;\n  margin-bottom: 13px !important; }\n\n.block-content {\n  padding: 24px 0 0 24px; }\n\n.block-content span a {\n  background: #fff;\n  color: #1d1f24;\n  padding: 7px;\n  text-decoration: none;\n  font-size: 12px;\n  /*display: block;*/\n  margin-right: 10px; }\n\n.block-content h2 {\n  font-size: 25px;\n  color: #fff;\n  line-height: 32px;\n  margin-top: 30px; }\n\n.meta {\n  position: absolute;\n  bottom: 20px;\n  left: 24px;\n  color: #fff;\n  font-family: \"Myriad Pro\", sans-serif;\n  font-weight: 100;\n  font-size: 10px; }\n\n.main-block p {\n  color: #002026;\n  font-size: 13px;\n  margin-top: 20px;\n  width: 85%;\n  line-height: 17px; }\n\n.main-block p a {\n  color: #002026;\n  text-decoration: underline; }\n\n.masonry-item {\n  width: 33.33%;\n  /*margin: 10px;*/\n  min-height: 170px;\n  padding: 10px; }\n\n.masonry-item img {\n  width: 100%; }\n\n.masonry {\n  width: 100%;\n  /*margin-left: -10px;*/\n  margin-top: 20px; }\n\n.left-block {\n  width: 880px; }\n\n.masonry-item h3 {\n  line-height: 23px; }\n\n.masonry-item h3 a {\n  color: #000000;\n  font-size: 18px;\n  font-weight: bold;\n  font-family: \"PT Sans\";\n  text-decoration: none;\n  line-height: 23px; }\n\n.masonry-item h3 a:hover {\n  color: #f58c1b; }\n\n.grid-item-bg {\n  min-height: 170px;\n  position: relative;\n  overflow: hidden; }\n\n.left-block {\n  padding-left: 0;\n  float: left; }\n\n.left-block .row {\n  margin-left: 0 !important; }\n\n.right-block {\n  max-width: 270px;\n  float: right;\n  width: 250px; }\n\n.categories a {\n  background: #cfcfcf;\n  border-radius: 20px;\n  font-size: 12px;\n  color: #000;\n  text-decoration: none;\n  padding: 7px 10px;\n  margin-right: 10px;\n  margin-bottom: 10px; }\n\n.categories a:hover, .categories .active {\n  background: #383c46;\n  color: #fff; }\n\n.row b {\n  padding: 4px 5px !important;\n  font-size: 12px; }\n\n.quotations {\n  width: 100%;\n  float: left;\n  min-height: 5px;\n  background: #fff; }\n\n.footer {\n  width: 100%;\n  background: #eee;\n  text-align: center;\n  float: left;\n  min-height: 5px;\n  padding: 50px; }\n\n.top {\n  width: 100%;\n  height: 100px;\n  background: black; }\n\n.block {\n  float: left;\n  margin-bottom: 25px;\n  width: calc(33.33% - 17px);\n  position: relative !important; }\n\n.block img {\n  width: 100%;\n  height: auto; }\n\n.quotations h5 {\n  color: #383c46;\n  text-align: left !important;\n  font-size: 16px;\n  font-weight: bold;\n  padding-left: 10px; }\n\n.quotations th {\n  padding-left: 10px; }\n\n.top5 {\n  font-weight: 100;\n  font-size: 13px;\n  text-align: right;\n  padding: 15px !important; }\n\n.top5 .all-cot {\n  text-align: left; }\n\n.top5 th {\n  font-weight: bold;\n  text-align: left; }\n\n.all-cot {\n  width: 100%;\n  color: #4a4a4a;\n  padding: 10px;\n  float: left;\n  text-decoration: underline;\n  font-weight: bold;\n  font-size: 13px;\n  padding-bottom: 0px; }\n\ni.fa {\n  padding: 0 !important; }\n\ni {\n  padding: 5px;\n  border: 1px solid #9b9b9b;\n  color: #9b9b9b;\n  border-radius: 50%;\n  width: 30px;\n  height: 30px;\n  line-height: 30px;\n  text-align: center; }\n\ni:hover {\n  color: #f58c1b;\n  border: 1px solid #f58c1b;\n  cursor: pointer; }\n\n.row .col-md-9 .row .col-md-3 {\n  padding-left: 22px !important;\n  padding-top: 5px; }\n\n.col-md-3 > h3 {\n  font-size: 35px; }\n\nh3 + h6 {\n  color: #9b9b9b;\n  margin-top: 13px !important;\n  float: left;\n  width: 50%;\n  text-align: center;\n  padding-left: 20px; }\n\n.tags li {\n  margin-top: 7px; }\n\n.rightbar {\n  padding-left: 0;\n  padding-right: 36px; }\n\n.categories {\n  margin-top: 15px; }\n\n.price {\n  font-weight: bold !important;\n  font-size: 13px;\n  color: #919191;\n  padding-top: 7px !important;\n  margin-bottom: -10px; }\n\n.login a {\n  font-size: 13px; }\n\n.spy {\n  background: url(/dist/assets/spy.png) top left no-repeat;\n  color: #fff;\n  padding-left: 25px;\n  margin-left: 20px; }\n\n.chat {\n  background: url(/dist/assets/chat.png) top left no-repeat;\n  color: #fff;\n  padding-left: 20px;\n  margin-left: 20px; }\n\n.main-block h2 a {\n  color: #fff;\n  text-decoration: none; }\n\n.main-block h2 a:hover {\n  text-decoration: underline; }\n"

/***/ }),

/***/ "./angular/app/review/review-detail/review-detail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export News */
/* unused harmony export CommentRaw */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReviewDetailComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/@angular/common/http.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// import { interval } from 'rxjs/Observable/interval';


var News = (function () {
    function News() {
    }
    return News;
}());

var CommentRaw = (function () {
    function CommentRaw() {
    }
    return CommentRaw;
}());

var ReviewDetailComponent = (function () {
    function ReviewDetailComponent(http, router, route) {
        var _this = this;
        this.http = http;
        this.router = router;
        this.route = route;
        this.comments = [];
        this.comment = {
            'post_id': '',
            'body': '',
            'commentable_id': '',
            'commentable_type': ''
        };
        var id = route.snapshot.params['id'];
        var path = "/reviewraw/" + id;
        var info = http.get(path);
        info.subscribe(function (response) {
            _this.news = {
                id: response['news'][0]['id'],
                title: response['news'][0]['title'],
                desc: response['news'][0]['desc'],
                created_at: response['news'][0]['created_at']
            };
            for (var _i = 0, _a = response['comments']; _i < _a.length; _i++) {
                var item = _a[_i];
                _this.comments.push({
                    id: item['id'],
                    email: item['email'],
                    author: item['author'],
                    body: item['body'],
                    commentable_id: item['commentable_id'],
                    photo: item['photo']
                });
            }
            // console.log(response['news'][0]['id']);
            // console.log(this.news);
            //    console.log(this.comments);
        });
    }
    ReviewDetailComponent.prototype.ngOnInit = function () {
        this.router.events.subscribe(function (evt) {
            if (!(evt instanceof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* NavigationEnd */])) {
                return;
            }
            window.scrollTo(0, 0);
        });
    };
    // @ViewChild('f') Form:NgForm;
    ReviewDetailComponent.prototype.submitComment = function (form, post_id, type) {
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["c" /* HttpHeaders */]({ 'Content-type': 'Application/json ' });
        this.http.post('/storecomment', {
            'post_id': post_id,
            'body': form.value.body,
            'commentable_id': post_id,
            'commentable_type': type
        }, { headers: headers }).subscribe(function (response) { return console.log(response); }, function (error) { return console.log(error); });
        // console.log(post_id + " " + form.value.body + " " + type); 
    };
    return ReviewDetailComponent;
}());
ReviewDetailComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-review-detail',
        template: __webpack_require__("./angular/app/review/review-detail/review-detail.component.html"),
        styles: [__webpack_require__("./angular/app/review/review-detail/review-detail.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _c || Object])
], ReviewDetailComponent);

var _a, _b, _c;
//# sourceMappingURL=review-detail.component.js.map

/***/ }),

/***/ "./angular/app/review/review.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"top\" class=\"container\">\n      <div class=\"row\">\n\t          <div class=\"col-md-9\">\n<router-outlet></router-outlet>\n</div>\n\n  <div class=\"col-md-3 rightbar\">\n    <div class=\"categories\">\n\n<a *ngFor=\"let category of categories\"  style=\"display: inline-block\"\n [routerLink]=\"['category', category.id]\" routerLinkActive=\"active\">{{category.name}}({{category.count}})</a>\n    </div>\n  \n  \n  \n  \n    <div class=\"quotations\" style=\"margin-top:20px; border:1px solid #dee2e6;\">\n  \n  <h5 style=\"margin-bottom:0px;padding:10px;padding-right:0;text-align:left;width:100%;padding-right:2px;float:left; background-color: rgba(0,0,0,.05);\">Котировки криптовалют</h5>\n  \n  <table class=\"table table-striped table-sm\" style=\"margin-bottom:0px;float:left; padding-left: 10px;\">\n\n  <tbody>\n    <tr>\n      <th scope=\"row\" ><b style=\"background:#4a4a4a;color:white;padding:2px\">BCC</b></th>\n      <td style=\"color:red\">$100</td>\n      <td class=\"price\">P 32 001</td>\n      <td style=\"color:green\">+15%</td>\n    </tr>\n    <tr>\n      <th scope=\"row\"><b style=\"background:#4a4a4a;color:white;padding:2px\">BCC</b></th>\n      <td style=\"color:red\">$100</td>\n      <td class=\"price\">P 32 001</td>\n      <td style=\"color:green\">+15%</td>\n    </tr>\n    <tr>\n      <th scope=\"row\"><b style=\"background:#4a4a4a;color:white;padding:2px\">BCC</b></th>\n      <td style=\"color:red\">$100</td>\n      <td class=\"price\">P 32 001</td>\n      <td style=\"color:red\">-15%</td>\n    </tr>\n      <tr>\n      <th scope=\"row\"><b style=\"background:#4a4a4a;color:white;padding:2px\">BCC</b></th>\n      <td style=\"color:red\">$100</td>\n      <td class=\"price\">P 32 001</td>\n      <td style=\"color:green\">+15%</td>\n    </tr>\n  \n      <tr>\n      <th scope=\"row\"><b style=\"background:#4a4a4a;color:white;padding:2px\">BCC</b></th>\n      <td style=\"color:green\">$100</td>\n      <td class=\"price\">P 32 001</td>\n      <td style=\"color:green\">+15%</td>\n    </tr>\n  </tbody>\n</table>\n\n<a href=\"\" style=\"background-color: rgba(0,0,0,.05);\" class=\"all-cot\">Показать все котировки</a>\n<p style=\"width:100%;color:#5b5b5b;padding:10px;background-color: rgba(0,0,0,.05);margin-bottom:0px;font-size:12px;float:left; padding-top: 0; ma\">Последнее обновление</p>\n\n\n</div>\n  \n  \n  \n  \n  \n      <div class=\"quotations top5\" style=\"margin-top:20px; padding: 5px;\">\n  \n  <h5 style=\"margin-bottom:0px;padding:10px;padding-right:0;text-align:center;width:100%; padding-right:2px;float:left;\">ТОП 5 Криптовалют (% роста)</h5>\n  \n  <table class=\"table table-sm\" style=\"margin-bottom:0px;float:left\">\n\n  <tbody>\n    <tr>\n      <th style=\"border-top:none;\" scope=\"row\">Bitcoin</th>\n      <td style=\"border-top:none;\">$1231231232</td>\n      <td style=\"border-top:none;\">15%</td>\n\n    </tr>\n    <tr>\n      <th style=\"border-top:none;\" scope=\"row\">Ethereum</th>\n      <td style=\"border-top:none;\">$1231231232</td>\n      <td style=\"border-top:none;\">15%</td>\n\n    </tr>\n    <tr>\n      <th style=\"border-top:none;\" scope=\"row\">BitcoinCash</th>\n      <td style=\"border-top:none;\">$1231231232</td>\n      <td style=\"border-top:none;\">15%</td>\n\n    </tr>\n      <tr>\n      <th style=\"border-top:none;\" scope=\"row\">Ripple</th>\n      <td style=\"border-top:none;\">$1231231232</td>\n      <td style=\"border-top:none;\">15%</td>\n\n    </tr>\n  \n      <tr>\n      <th style=\"border-top:none;\" scope=\"row\">KickCoin</th>\n      <td style=\"border-top:none;\">$1231231232</td>\n      <td style=\"border-top:none;\">15%</td>\n\n    </tr>\n  </tbody>\n</table>\n\n<a href=\"\" style=\"float:left;width:100%;color:#4a4a4a;padding:10px;margin-top:5px;height:50px;\" class=\"all-cot\">Подробный рейтинг</a>\n\n\n\n</div>\n  \n  \n  <div class=\"quotations\" style=\"margin-top:40px;height:360px;background:#4a4a4a;text-align:center; margin-bottom: 40px;\">\n  \n  \n  <h4 style=\"color:#f58c1b;margin-top:100px;padding:20px\">Желаете инвестировать в Bitcoin?</h4>\n  \n  <a class=\"btn btn-outline\" style=\"background: #f58c1b;\n    color: #fff;\n    text-decoration: none;width:140px;border-radius:0\">Нажми на меня</a>\n    \n  </div>\n  \n  \n  \n  \n  \n        <div class=\"quotations\" style=\"margin-top:20px;padding:10px;\">\n  \n  <h5 style=\"margin-bottom:0px;padding:10px;padding-right:0;text-align:center;width:100%; padding-right:2px;float:left;\">ТОП 5 сервисов облачного майнинга</h5>\n  \n  <table class=\"table table-sm\" style=\"margin-bottom:0px;float:left\">\n\n  <tbody>\n    <tr>\n      <th style=\"border-top:none;\" scope=\"row\">HashFlare <p style=\"color:green;margin-bottom:0;font-size:12px;\">ПЛАТИТ</p></th>\n      <td style=\"border-top:none;text-align:right\">489% <p style=\"color:#ddd;margin-bottom:0;font-size:12px;\">111 дней</p></td>\n    </tr>\n <tr>\n      <th style=\"border-top:none;\" scope=\"row\">HashFlare <p style=\"color:green;margin-bottom:0;font-size:12px;\">ПЛАТИТ</p></th>\n      <td style=\"border-top:none;text-align:right\">489% <p style=\"color:#ddd;margin-bottom:0;font-size:12px;\">111 дней</p></td>\n    </tr>\n <tr>\n      <th style=\"border-top:none;\" scope=\"row\">HashFlare <p style=\"color:green;margin-bottom:0;font-size:12px;\">ПЛАТИТ</p></th>\n      <td style=\"border-top:none;text-align:right\">489% <p style=\"color:#ddd;margin-bottom:0;font-size:12px;\">111 дней</p></td>\n    </tr>\n <tr>\n      <th style=\"border-top:none;\" scope=\"row\">HashFlare <p style=\"color:green;margin-bottom:0;font-size:12px;\">ПЛАТИТ</p></th>\n      <td style=\"border-top:none;text-align:right\">489% <p style=\"color:#ddd;margin-bottom:0;font-size:12px;\">111 дней</p></td>\n    </tr>\n  \n <tr>\n      <th style=\"border-top:none;\" scope=\"row\">HashFlare <p style=\"color:green;margin-bottom:0;font-size:12px;\">ПЛАТИТ</p></th>\n      <td style=\"border-top:none;text-align:right\">489% <p style=\"color:#ddd;margin-bottom:0;font-size:12px;\">111 дней</p></td>\n    </tr>\n  </tbody>\n</table>\n\n<a href=\"\" style=\"float:left;width:100%;color:#4a4a4a;padding:10px;margin-top:5px;height:50px;\"  class=\"all-cot\">Все проекты (987)</a>\n\n\n\n</div>\n  \n  \n  \n  \n  \n  \n  \n  \n  \n   <div class=\"quotations\" style=\"margin-top:20px;border:none;text-align:center;padding-bottom: 20px;\">\n  <h4 style=\"margin-top:20px;margin-bottom:20px;\">Мы в соц. сетях</h4>\n  \n  \n  <i class=\"fa fa-vk\"></i>\n  <i class=\"fa fa-instagram\"></i>\n  <i class=\"fa fa-twitter\"></i>\n  <i class=\"fa fa-facebook\"></i>\n  </div>\n  \n  \n  \n  \n  \n  \n            <div class=\"quotations\" style=\"margin-top:20px;padding:10px;margin-bottom:20px;\">\n  \n  <h5 style=\"margin-bottom:0px;padding:10px;padding-right:0;text-align:center;width:100%; padding-right:2px;float:left;\">ТОП 5 фондов</h5>\n  \n  <table class=\"table table-sm\" style=\"margin-bottom:0px;float:left\">\n\n  <tbody>\n    <tr>\n      <th style=\"border-top:none;\" scope=\"row\">HashFlare <p style=\"color:#f58c1b;margin-bottom:0;font-size:12px;\">ОЖИДАНИЕ ВЫПЛАТЫ!</p></th>\n      <td style=\"border-top:none;text-align:right\">489% <p style=\"color:#ddd;margin-bottom:0;font-size:12px;\">489 дней</p></td>\n    </tr>\n <tr>\n      <th style=\"border-top:none;\" scope=\"row\">HashFlare <p style=\"color:green;margin-bottom:0;font-size:12px;\">ПЛАТИТ</p></th>\n      <td style=\"border-top:none;text-align:right\">489% <p style=\"color:#ddd;margin-bottom:0;font-size:12px;\">111 дней</p></td>\n    </tr>\n <tr>\n      <th style=\"border-top:none;\" scope=\"row\">HashFlare <p style=\"color:green;margin-bottom:0;font-size:12px;\">ПЛАТИТ</p></th>\n      <td style=\"border-top:none;text-align:right\">489% <p style=\"color:#ddd;margin-bottom:0;font-size:12px;\">111 дней</p></td>\n    </tr>\n <tr>\n      <th style=\"border-top:none;\" scope=\"row\">HashFlare <p style=\"color:green;margin-bottom:0;font-size:12px;\">ПЛАТИТ</p></th>\n      <td style=\"border-top:none;text-align:right\">489% <p style=\"color:#ddd;margin-bottom:0;font-size:12px;\">111 дней</p></td>\n    </tr>\n  \n <tr>\n      <th style=\"border-top:none;\" scope=\"row\">HashFlare <p style=\"color:green;margin-bottom:0;font-size:12px;\">ПЛАТИТ</p></th>\n      <td style=\"border-top:none;text-align:right\">489% <p style=\"color:#ddd;margin-bottom:0;font-size:12px;\">111 дней</p></td>\n    </tr>\n  </tbody>\n</table>\n\n<a href=\"\" style=\"float:left;width:100%;color:#4a4a4a;padding:10px;margin-top:5px;height:50px;\"  class=\"all-cot\">Все фонды (981)</a>\n\n\n\n</div>\n</div>\n</div>\n</div>\n\n<div class=\"footer\">\n  <div class=\"container\">\n  \n  \n  <p style=\"font-size: 13px; font-weight: bold\">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. \n  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. \n  Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>\n  \n  \n  <div style=\"width:500px;height:70px;padding:15px;background:white;border-radius:50px;margin:0 auto\">\n  \n  <input type=\"text\" style=\"background:white;border:none;width:300px;float:left;height:40px;\"/>\n  \n<a class=\"btn btn-outline\" style=\"background: #f58c1b;\n    color: #fff;\n    text-decoration: none;border-radius:50px;width:120px;float:right;\">Подписаться</a>\n</div>\n  \n  <h4 style=\"margin-top:40px;margin-bottom:30px; font-size: 16px; font-weight: bold\">Мы в соц. сетях</h4>\n  \n  \n  <i class=\"fa fa-vk\"></i>\n  <i class=\"fa fa-instagram\"></i>\n  <i class=\"fa fa-twitter\"></i>\n  <i class=\"fa fa-facebook\"></i>\n  \n  \n  \n   <h6 style=\"margin-top:20px; margin-bottom: 20px;  font-size: 16px; font-weight: bold\">2017- Все права защищены</h6>\n   <a href=\"/posts/all#top\" style=\" font-size: 15px; font-weight: bold; color: #000; margin-top: 20px; text-decoration: underline;\">Вернуться наверх</a>\n   \n   \n   \n   \n  \n  </div>\n  </div>"

/***/ }),

/***/ "./angular/app/review/review.component.scss":
/***/ (function(module, exports) {

module.exports = "body {\n  background: #f9f9f9;\n  font-family: \"PT Sans\"; }\n\n.container {\n  max-width: 1180px !important; }\n\n.navbar {\n  background: #1d1f24;\n  padding: 15px 0; }\n\n#searchform, #searchform input {\n  width: 100%;\n  border-radius: 20px;\n  border: none;\n  height: 40px; }\n\n.menubar {\n  background: #383c46; }\n\n.navbar-nav-ul a {\n  font-family: \"PT Sans\";\n  font-weight: bold;\n  color: #fff;\n  text-transform: uppercase;\n  display: block;\n  padding: 7px 14px;\n  font-size: 14px;\n  border-top: 2px solid #383c46;\n  border-right: 1px solid #1d1f24; }\n\n.navbar-nav-ul li:last-of-type a {\n  margin-right: 0;\n  border-right: none; }\n\n.navbar-nav-ul a:hover, .navbar-nav-ul a.active {\n  background: #fff;\n  color: #f58c1b;\n  border-top: 2px solid #f58c1b;\n  text-decoration: none; }\n\n.navbar-nav-ul, .tags {\n  overflow: hidden;\n  list-style: none;\n  padding-left: 0; }\n\n.navbar-nav-ul li, .tags li {\n  float: left; }\n\n.tag {\n  z-index: 99;\n  position: relative; }\n\n.tags li {\n  margin-right: 15px; }\n\n.tags a {\n  display: block;\n  float: left;\n  padding: 9px 17px;\n  border-radius: 120px;\n  background: #e5e5e5;\n  color: #3e4468;\n  font-size: 13px;\n  font-family: \"PT Sans\"; }\n\n.tags a:hover, .tags a.active {\n  background: #f58c1b;\n  color: #fff;\n  text-decoration: none; }\n\n.block {\n  height: 230px !important;\n  margin-bottom: 13px !important; }\n\n.block-content {\n  padding: 24px 0 0 24px; }\n\n.block-content span a {\n  background: #fff;\n  color: #1d1f24;\n  padding: 7px;\n  text-decoration: none;\n  font-size: 12px;\n  /*display: block;*/\n  margin-right: 10px; }\n\n.block-content h2 {\n  font-size: 25px;\n  color: #fff;\n  line-height: 32px;\n  margin-top: 30px; }\n\n.meta {\n  position: absolute;\n  bottom: 20px;\n  left: 24px;\n  color: #fff;\n  font-family: \"Myriad Pro\", sans-serif;\n  font-weight: 100;\n  font-size: 10px; }\n\n.main-block p {\n  color: #002026;\n  font-size: 13px;\n  margin-top: 20px;\n  width: 85%;\n  line-height: 17px; }\n\n.main-block p a {\n  color: #002026;\n  text-decoration: underline; }\n\n.masonry-item {\n  width: 33.33%;\n  /*margin: 10px;*/\n  min-height: 170px;\n  padding: 10px; }\n\n.masonry-item img {\n  width: 100%; }\n\n.masonry {\n  width: 100%;\n  /*margin-left: -10px;*/\n  margin-top: 20px; }\n\n.left-block {\n  width: 880px; }\n\n.masonry-item h3 {\n  line-height: 23px; }\n\n.masonry-item h3 a {\n  color: #000000;\n  font-size: 18px;\n  font-weight: bold;\n  font-family: \"PT Sans\";\n  text-decoration: none;\n  line-height: 23px; }\n\n.masonry-item h3 a:hover {\n  color: #f58c1b; }\n\n.grid-item-bg {\n  min-height: 170px;\n  position: relative;\n  overflow: hidden; }\n\n.left-block {\n  padding-left: 0;\n  float: left; }\n\n.left-block .row {\n  margin-left: 0 !important; }\n\n.right-block {\n  max-width: 270px;\n  float: right;\n  width: 250px; }\n\n.categories a {\n  background: #cfcfcf;\n  border-radius: 20px;\n  font-size: 12px;\n  color: #000;\n  text-decoration: none;\n  padding: 7px 10px;\n  margin-right: 10px;\n  margin-bottom: 10px; }\n\n.categories a:hover, .categories .active {\n  background: #383c46;\n  color: #fff; }\n\n.row b {\n  padding: 4px 5px !important;\n  font-size: 12px; }\n\n.quotations {\n  width: 100%;\n  float: left;\n  min-height: 5px;\n  background: #fff; }\n\n.footer {\n  width: 100%;\n  background: #eee;\n  text-align: center;\n  float: left;\n  min-height: 5px;\n  padding: 50px; }\n\n.top {\n  width: 100%;\n  height: 100px;\n  background: black; }\n\n.block {\n  float: left;\n  margin-bottom: 25px;\n  width: calc(33.33% - 17px);\n  position: relative !important; }\n\n.block img {\n  width: 100%;\n  height: auto; }\n\n.quotations h5 {\n  color: #383c46;\n  text-align: left !important;\n  font-size: 16px;\n  font-weight: bold;\n  padding-left: 10px; }\n\n.quotations th {\n  padding-left: 10px; }\n\n.top5 {\n  font-weight: 100;\n  font-size: 13px;\n  text-align: right;\n  padding: 15px !important; }\n\n.top5 .all-cot {\n  text-align: left; }\n\n.top5 th {\n  font-weight: bold;\n  text-align: left; }\n\n.all-cot {\n  width: 100%;\n  color: #4a4a4a;\n  padding: 10px;\n  float: left;\n  text-decoration: underline;\n  font-weight: bold;\n  font-size: 13px;\n  padding-bottom: 0px; }\n\ni.fa {\n  padding: 0 !important; }\n\ni {\n  padding: 5px;\n  border: 1px solid #9b9b9b;\n  color: #9b9b9b;\n  border-radius: 50%;\n  width: 30px;\n  height: 30px;\n  line-height: 30px;\n  text-align: center; }\n\ni:hover {\n  color: #f58c1b;\n  border: 1px solid #f58c1b;\n  cursor: pointer; }\n\n.row .col-md-9 .row .col-md-3 {\n  padding-left: 22px !important;\n  padding-top: 5px; }\n\n.col-md-3 > h3 {\n  font-size: 35px; }\n\nh3 + h6 {\n  color: #9b9b9b;\n  margin-top: 13px !important;\n  float: left;\n  width: 50%;\n  text-align: center;\n  padding-left: 20px; }\n\n.tags li {\n  margin-top: 7px; }\n\n.rightbar {\n  padding-left: 0;\n  padding-right: 36px; }\n\n.categories {\n  margin-top: 15px; }\n\n.price {\n  font-weight: bold !important;\n  font-size: 13px;\n  color: #919191;\n  padding-top: 7px !important;\n  margin-bottom: -10px; }\n\n.login a {\n  font-size: 13px; }\n\n.spy {\n  background: url(/dist/assets/spy.png) top left no-repeat;\n  color: #fff;\n  padding-left: 25px;\n  margin-left: 20px; }\n\n.chat {\n  background: url(/dist/assets/chat.png) top left no-repeat;\n  color: #fff;\n  padding-left: 20px;\n  margin-left: 20px; }\n\n.main-block h2 a {\n  color: #fff;\n  text-decoration: none; }\n\n.main-block h2 a:hover {\n  text-decoration: underline; }\n"

/***/ }),

/***/ "./angular/app/review/review.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReviewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/@angular/common/http.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// import { interval } from 'rxjs/Observable/interval';


var ReviewComponent = (function () {
    function ReviewComponent(http, router, route) {
        var _this = this;
        this.http = http;
        this.router = router;
        this.route = route;
        this.categories = [];
        var path = "/categoriesraw/4";
        var info = http.get(path);
        info.subscribe(function (response) {
            for (var _i = 0, _a = response['cats']; _i < _a.length; _i++) {
                var item = _a[_i];
                _this.categories.push({
                    id: item['id'],
                    name: item['name'],
                    count: item['count']
                });
            }
            console.log(_this.categories);
        });
    }
    ReviewComponent.prototype.ngOnInit = function () {
    };
    ReviewComponent.prototype.loadCat = function (id) {
        this.router.navigate(['/review/category', id]);
        // console.log('snap');
    };
    return ReviewComponent;
}());
ReviewComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-review',
        template: __webpack_require__("./angular/app/review/review.component.html"),
        styles: [__webpack_require__("./angular/app/review/review.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _c || Object])
], ReviewComponent);

var _a, _b, _c;
//# sourceMappingURL=review.component.js.map

/***/ }),

/***/ "./angular/app/safe-html.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SafeHtmlPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/@angular/platform-browser.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SafeHtmlPipe = (function () {
    function SafeHtmlPipe(sanitized) {
        this.sanitized = sanitized;
    }
    SafeHtmlPipe.prototype.transform = function (value) {
        return this.sanitized.bypassSecurityTrustHtml(value);
    };
    return SafeHtmlPipe;
}());
SafeHtmlPipe = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["X" /* Pipe */])({ name: 'safeHtml' }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["c" /* DomSanitizer */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["c" /* DomSanitizer */]) === "function" && _a || Object])
], SafeHtmlPipe);

var _a;
//# sourceMappingURL=safe-html.pipe.js.map

/***/ }),

/***/ "./angular/app/search.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_debounceTime__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/debounceTime.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_distinctUntilChanged__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/distinctUntilChanged.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_switchMap__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/switchMap.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var SearchService = (function () {
    function SearchService(http) {
        this.http = http;
        this.baseUrl = '/miningraw/search';
        this.queryUrl = '?search=';
        this.mainUrl = '/angular/search';
        this.mainQueryUrl = '?q=';
    }
    SearchService.prototype.search = function (terms) {
        var _this = this;
        return terms.debounceTime(400)
            .distinctUntilChanged()
            .switchMap(function (term) { return _this.searchEntries(term); });
    };
    SearchService.prototype.mainSearch = function (terms) {
        var _this = this;
        return terms.debounceTime(400)
            .distinctUntilChanged()
            .switchMap(function (term) { return _this.mainSearchEntries(term); });
    };
    SearchService.prototype.searchEntries = function (term) {
        return this.http
            .get(this.baseUrl + this.queryUrl + term);
    };
    SearchService.prototype.mainSearchEntries = function (term) {
        return this.http
            .get(this.mainUrl + this.mainQueryUrl + term);
    };
    return SearchService;
}());
SearchService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]) === "function" && _a || Object])
], SearchService);

var _a;
//# sourceMappingURL=search.service.js.map

/***/ }),

/***/ "./angular/app/shorten-pipe.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShortenPipePipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ShortenPipePipe = (function () {
    function ShortenPipePipe() {
    }
    ShortenPipePipe.prototype.transform = function (value) {
        return value.substr(0, 100);
    };
    return ShortenPipePipe;
}());
ShortenPipePipe = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["X" /* Pipe */])({
        name: 'shortenPipe'
    })
], ShortenPipePipe);

//# sourceMappingURL=shorten-pipe.pipe.js.map

/***/ }),

/***/ "./angular/app/sidebar-resolver.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export DataRub */
/* unused harmony export Cripto */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SidebarResolverService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/@angular/common/http.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DataRub = (function () {
    function DataRub() {
    }
    return DataRub;
}());

var Cripto = (function () {
    function Cripto() {
    }
    return Cripto;
}());

var dataRub;
var dataEur;
var SidebarResolverService = (function () {
    function SidebarResolverService(http) {
        this.http = http;
        this.dataUsd = [];
    }
    SidebarResolverService.prototype.resolve = function (route) {
        var _this = this;
        var alldata = this.http.get('/allcrypto');
        alldata.subscribe(function (response) {
            // console.log(response);
            var admin = response;
            var _loop_1 = function () {
                // console.log(this.admin[i].symbol);
                var index = _i;
                var symbol = admin[index].symbol;
                var year = admin[index].year;
                var algo = admin[index].algo;
                var desc = 'DESC';
                var path = "/bit/pair?pair=" + symbol + "/USDT";
                var info = _this.http.get(path);
                info.subscribe(function (response) {
                    console.log(response);
                    //  var usd_data = response;
                    _this.dataUsd[index] = {
                        sym: '',
                        last: 0,
                        now: 0,
                        min: 0,
                        max: 0,
                        value: 0,
                        year: 0,
                        algo: '',
                        week: 0,
                        day: 0,
                    };
                    _this.dataUsd[index].sym = symbol;
                    _this.dataUsd[index].algo = algo;
                    _this.dataUsd[index].year = year;
                    _this.dataUsd[index].last = response['last'];
                    _this.dataUsd[index].now = response['now'];
                    _this.dataUsd[index].min = response['min'];
                    _this.dataUsd[index].max = response['max'];
                    _this.dataUsd[index].value = response['value'];
                });
                var bitpath = "/bit";
                var bitinfo = _this.http.get(bitpath);
                bitinfo.subscribe(function (response) {
                    // console.log(response);
                    //  var usd_data = response;
                    _this.dataUsd[index].day = response[symbol + "/USDT"]['day'];
                    _this.dataUsd[index].week = response[symbol + "/USDT"]['week'];
                });
            };
            for (var _i = 0; _i < admin.length; ++_i) {
                _loop_1();
            }
        });
    };
    return SidebarResolverService;
}());
SidebarResolverService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]) === "function" && _a || Object])
], SidebarResolverService);

var _a;
//# sourceMappingURL=sidebar-resolver.service.js.map

/***/ }),

/***/ "./angular/app/sidebar/cloud-mining-top/cloud-mining-top.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"top-services\">\n          <h5 class=\"titles\"><span>ТОП 5</span> сервисов <br> облачного майнинга</h5>\n          <ul class=\"top-ul\">\n            <li *ngFor=\"let item of topfive\">\n              <div class=\"left\">\n                <a routerLink=\"/cloud-mining/item/{{item.id}}\">{{item.name}}</a>\n                <span class=\"paying\">ПЛАТИТ!</span>\n              </div>\n              <div class=\"right\">\n                <span class=\"persent\">{{item.proc}}%</span>\n                <span class=\"days\">24 дней</span>\n              </div>\n            </li>\n            \n          </ul>\n          <a routerLink=\"/cloud-mining/all\" class=\"all-projects\">Все проекты (981)</a>\n        </div>"

/***/ }),

/***/ "./angular/app/sidebar/cloud-mining-top/cloud-mining-top.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./angular/app/sidebar/cloud-mining-top/cloud-mining-top.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CloudMiningTopComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__cloud_mining_service__ = __webpack_require__("./angular/app/cloud-mining.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CloudMiningTopComponent = (function () {
    function CloudMiningTopComponent(cloudMining) {
        this.cloudMining = cloudMining;
        this.topfive = [];
    }
    CloudMiningTopComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.cloudMining.getTop().subscribe(function (response) { return _this.topfive = response; }, function (error) { return console.log(error); });
    };
    return CloudMiningTopComponent;
}());
CloudMiningTopComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-cloud-mining-top',
        template: __webpack_require__("./angular/app/sidebar/cloud-mining-top/cloud-mining-top.component.html"),
        styles: [__webpack_require__("./angular/app/sidebar/cloud-mining-top/cloud-mining-top.component.scss")],
        providers: [__WEBPACK_IMPORTED_MODULE_1__cloud_mining_service__["a" /* CloudMiningService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__cloud_mining_service__["a" /* CloudMiningService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__cloud_mining_service__["a" /* CloudMiningService */]) === "function" && _a || Object])
], CloudMiningTopComponent);

var _a;
//# sourceMappingURL=cloud-mining-top.component.js.map

/***/ }),

/***/ "./angular/app/sidebar/sidebar.component.html":
/***/ (function(module, exports) {

module.exports = "      <app-stocks-sidebar>Загрузка</app-stocks-sidebar>\n\n        <a href=\"#\" class=\"banner-black\"><img src=\"img/banner-black.jpg\" alt=\"\"></a>\n        <app-cloud-mining-top></app-cloud-mining-top>\n        <div class=\"social\">\n          <h5 class=\"titles\">Мы в соц.сетях</h5>\n          <ul>\n            <li><a href=\"#\"><i class=\"fa fa-vk\" aria-hidden=\"true\"></i></a></li>\n            <li><a href=\"#\"><i class=\"fa fa-facebook\" aria-hidden=\"true\"></i></a></li>\n            <li><a href=\"#\"><i class=\"fa fa-twitter\" aria-hidden=\"true\"></i></a></li>\n            <li><a href=\"#\"><i class=\"fa fa-instagram\" aria-hidden=\"true\"></i></a></li>\n            <li><a href=\"#\"><i class=\"fa fa-vk\" aria-hidden=\"true\"></i></a></li>\n            <li><a href=\"#\"><i class=\"fa fa-facebook\" aria-hidden=\"true\"></i></a></li>\n          </ul>\n        </div>\n        <app-top-ico></app-top-ico>"

/***/ }),

/***/ "./angular/app/sidebar/sidebar.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./angular/app/sidebar/sidebar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SidebarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SidebarComponent = (function () {
    function SidebarComponent() {
    }
    SidebarComponent.prototype.ngOnInit = function () {
    };
    return SidebarComponent;
}());
SidebarComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-sidebar',
        template: __webpack_require__("./angular/app/sidebar/sidebar.component.html"),
        styles: [__webpack_require__("./angular/app/sidebar/sidebar.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], SidebarComponent);

//# sourceMappingURL=sidebar.component.js.map

/***/ }),

/***/ "./angular/app/sidebar/stocks-sidebar/stocks-sidebar.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"quotes\">\n          <h5 class=\"titles\">Котировки криптовалют</h5>\n          <ul>\n            <img src=\"/img/load.gif\" *ngIf=\"load==true\" style=\"display: block;\n            margin: 10px auto; width: 25px; height: 25px;\">\n              <ng-template ngFor let-item [ngForOf]=\"dataUsd\" let-i=\"index\">\n            <li *ngIf=\"i < 5\">\n              <a *ngIf=\"i < 5\" routerLink=\"/crypto/{{item.sym}}\">\n                <span *ngIf=\"i < 5\" class=\"crypto\" >{{item.sym}}</span>\n                <span *ngIf=\"i < 5\" class=\"usd\" [ngStyle]=\"{ 'animation': animtype[i]+' 2s', '-webkit-animation': animtype[i]+' 2s'  }\">${{item.now | number:'1.0-1'}}</span>\n                <span *ngIf=\"i < 5\" class=\"rub\" [ngStyle]=\"{ 'animation': animtype[i]+' 2s', '-webkit-animation': animtype[i]+' 2s'  }\">₽{{item.now*60 | number:'1.0-1'}}</span>\n                <span *ngIf=\"i < 5\" class=\"change\" style=\"color: #000;\" [ngStyle]=\"{ 'animation': animtype[i]+' 2s', '-webkit-animation': animtype[i]+' 2s'  }\">{{item.now-item.last | number:'1.0-1'}}</span>\n              </a>\n            </li>\n              </ng-template>\n          </ul>\n          <a routerLink=\"/cryptocurrency/all\" class=\"show-all\">Показать все котировки</a>\n          <!--<p class=\"updated\">Последнее обновление: 26.10.17, 12:42</p>-->\n        </div>\n<div class=\"top-crypto\">\n    <h5 class=\"titles\"><span>ТОП 5</span>криптовалют (% роста)</h5>\n    <div class=\"periods\">\n        <ul class=\"period-tabs\">\n            <li class=\"active\"><a href=\"#\">День</a></li>\n            <li><a href=\"#\">Неделя</a></li>\n            <li><a href=\"#\">Месяц</a></li>\n            <li><a href=\"#\">Год</a></li>\n        </ul>\n        <div class=\"period-content\">\n            <div class=\"tab-content active\">\n                <ul>\n                    <li *ngFor=\"let item of dataUsd | orderBy: order:reverse:'case-insensitive'; let i = index\">\n                        <a *ngIf=\"i < 5\" href=\"\" class=\"name\">{{item.sym}}</a>\n                        <span *ngIf=\"i < 5\" class=\"price\"> ${{item.marketCapUsd| number: '1.0-3'}}</span>\n                        <span *ngIf=\"i < 5\" class=\"percent\">{{ item.percentDay | number: '1.2'}}%</span>\n                    </li>\n\n                </ul>\n            </div>\n            <div class=\"tab-content\">\n                <ul>\n                    <li>\n                        <a href=\"\" class=\"name\">Bitcoin</a>\n                        <span class=\"price\">$2829101929191</span>\n                        <span class=\"percent\">11%</span>\n                    </li>\n                    <li>\n                        <a href=\"\" class=\"name\">Ethereum</a>\n                        <span class=\"price\">$2829101929191</span>\n                        <span class=\"percent\">11%</span>\n                    </li>\n                    <li>\n                        <a href=\"\" class=\"name\">BitcoinCash</a>\n                        <span class=\"price\">$90819201</span>\n                        <span class=\"percent\">8%</span>\n                    </li>\n                    <li>\n                        <a href=\"\" class=\"name\">EthereumClassic</a>\n                        <span class=\"price\">$8790899</span>\n                        <span class=\"percent\">7,2%</span>\n                    </li>\n                    <li>\n                        <a href=\"\" class=\"name\">Ripple</a>\n                        <span class=\"price\">$2829</span>\n                        <span class=\"percent\">2%</span>\n                    </li>\n                </ul>\n            </div>\n            <div class=\"tab-content\">\n                <ul>\n                    <li>\n                        <a href=\"\" class=\"name\">Bitcoin</a>\n                        <span class=\"price\">$2829101929191</span>\n                        <span class=\"percent\">11%</span>\n                    </li>\n                    <li>\n                        <a href=\"\" class=\"name\">Ethereum</a>\n                        <span class=\"price\">$2829101929191</span>\n                        <span class=\"percent\">11%</span>\n                    </li>\n                    <li>\n                        <a href=\"\" class=\"name\">BitcoinCash</a>\n                        <span class=\"price\">$90819201</span>\n                        <span class=\"percent\">8%</span>\n                    </li>\n                    <li>\n                        <a href=\"\" class=\"name\">EthereumClassic</a>\n                        <span class=\"price\">$8790899</span>\n                        <span class=\"percent\">7,2%</span>\n                    </li>\n                    <li>\n                        <a href=\"\" class=\"name\">Ripple</a>\n                        <span class=\"price\">$2829</span>\n                        <span class=\"percent\">2%</span>\n                    </li>\n                </ul>\n            </div>\n            <div class=\"tab-content\">\n                <ul>\n                    <li>\n                        <a href=\"\" class=\"name\">Bitcoin</a>\n                        <span class=\"price\">$2829101929191</span>\n                        <span class=\"percent\">11%</span>\n                    </li>\n                    <li>\n                        <a href=\"\" class=\"name\">Ethereum</a>\n                        <span class=\"price\">$2829101929191</span>\n                        <span class=\"percent\">11%</span>\n                    </li>\n                    <li>\n                        <a href=\"\" class=\"name\">BitcoinCash</a>\n                        <span class=\"price\">$90819201</span>\n                        <span class=\"percent\">8%</span>\n                    </li>\n                    <li>\n                        <a href=\"\" class=\"name\">EthereumClassic</a>\n                        <span class=\"price\">$8790899</span>\n                        <span class=\"percent\">7,2%</span>\n                    </li>\n                    <li>\n                        <a href=\"\" class=\"name\">Ripple</a>\n                        <span class=\"price\">$2829</span>\n                        <span class=\"percent\">2%</span>\n                    </li>\n                </ul>\n            </div>\n        </div>\n    </div>\n    <a href=\"#\" class=\"details\">Подробный рейтинг</a>\n</div>"

/***/ }),

/***/ "./angular/app/sidebar/stocks-sidebar/stocks-sidebar.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./angular/app/sidebar/stocks-sidebar/stocks-sidebar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Cripto */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StocksSidebarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__stocks_service__ = __webpack_require__("./angular/app/stocks.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__ = __webpack_require__("./node_modules/rxjs/_esm5/Rx.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var Cripto = (function () {
    function Cripto() {
    }
    return Cripto;
}());

var StocksSidebarComponent = (function () {
    function StocksSidebarComponent(http, stocksService) {
        this.http = http;
        this.stocksService = stocksService;
        this.order = 'percentDay';
        this.reverse = true;
        this.dataUsd = [];
        this.load = true;
        this.animtype = [];
        this.alldata = this.http.get('/allcrypto');
    }
    StocksSidebarComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.stocksService.getCrypto()
            .subscribe(function (response) {
            _this.resp = response;
            _this.data = _this.alldata.subscribe(function (response) {
                _this.cryptoData = __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__["a" /* Observable */].interval(3000).take(10).concatMap(function () { return _this.stocksService.getCrypto(); })
                    .map(function (response) { _this.resp = response; }).subscribe(function () {
                    var admin = response;
                    for (var _i = 0; _i < admin.length; ++_i) {
                        var index = _i;
                        var symbol = admin[index].symbol;
                        var year = admin[index].year;
                        var algo = admin[index].algo;
                        _this.animtype[index] = '';
                        if (_this.dataUsd[index].now != _this.resp[symbol + '/USDT']['now']) {
                            if (_this.dataUsd[index].now > _this.resp[symbol + '/USDT']['now']) {
                                _this.animtype[index] = 'redcolor';
                            }
                            else {
                                _this.animtype[index] = 'greencolor';
                            }
                        }
                        if (_this.dataUsd[index]) {
                            _this.dataUsd[index].sym = symbol;
                            _this.dataUsd[index].algo = algo;
                            _this.dataUsd[index].year = year;
                            _this.dataUsd[index].last = _this.resp[symbol + '/USDT']['last'];
                            _this.dataUsd[index].now = _this.resp[symbol + '/USDT']['now'];
                            _this.dataUsd[index].min = _this.resp[symbol + '/USDT']['min'];
                            _this.dataUsd[index].max = _this.resp[symbol + '/USDT']['max'];
                            _this.dataUsd[index].value = _this.resp[symbol + '/USDT']['value'];
                            _this.dataUsd[index].day = _this.resp[symbol + "/USDT"]['day'];
                            _this.dataUsd[index].week = _this.resp[symbol + "/USDT"]['week'];
                            _this.dataUsd[index].changePercent = _this.resp[symbol + "/USDT"]['changePercent'];
                            _this.dataUsd[index].marketCapUsd = _this.resp[symbol + "/USDT"]['marketCapUsd'];
                            _this.dataUsd[index].percentDay = _this.countPercent(_this.dataUsd[index].now, _this.dataUsd[index].day);
                        }
                        else {
                            _this.dataUsd[index] = {
                                sym: '',
                                last: 0,
                                now: 0,
                                min: 0,
                                max: 0,
                                value: 0,
                                year: 0,
                                algo: '',
                                week: 0,
                                day: 0,
                            };
                        }
                        console.log(_this.dataUsd);
                        _this.load = false;
                        localStorage.removeItem('data');
                        localStorage.setItem('data', JSON.stringify(_this.dataUsd));
                    }
                });
            });
        });
    };
    StocksSidebarComponent.prototype.ngOnInit = function () {
        if (localStorage.getItem('data')) {
            this.load = false;
            this.dataUsd = JSON.parse(localStorage.getItem('data'));
        }
    };
    StocksSidebarComponent.prototype.countPercent = function (now, last) {
        return (now - last) / (now + last) * 100;
    };
    StocksSidebarComponent.prototype.ngOnDestroy = function () {
        // this.data.unsubscribe();
        this.cryptoData.unsubscribe();
    };
    return StocksSidebarComponent;
}());
StocksSidebarComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-stocks-sidebar',
        template: __webpack_require__("./angular/app/sidebar/stocks-sidebar/stocks-sidebar.component.html"),
        styles: [__webpack_require__("./angular/app/sidebar/stocks-sidebar/stocks-sidebar.component.scss")],
        providers: [__WEBPACK_IMPORTED_MODULE_2__stocks_service__["a" /* StocksService */]],
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__stocks_service__["a" /* StocksService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__stocks_service__["a" /* StocksService */]) === "function" && _b || Object])
], StocksSidebarComponent);

var _a, _b;
//# sourceMappingURL=stocks-sidebar.component.js.map

/***/ }),

/***/ "./angular/app/sidebar/top-ico/top-ico.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"top-fonds\">\n  <h5 class=\"titles\"><span>ТОП 5</span> ICO проектов</h5>\n  <ul class=\"top-ul\">\n    <li *ngFor=\"let ico of ico_top\">\n      <div class=\"left\">\n        <a [routerLink]=\"['ico/item', ico.id]\">{{ico.name}}</a>\n        <!--<span class=\"paying\">ПЛАТИТ!</span>-->\n      </div>\n      <!--<div class=\"right\">-->\n        <!--<span class=\"persent\">489%</span>-->\n        <!--<span class=\"days\">489 дней</span>-->\n      <!--</div>-->\n    </li>\n  </ul>\n  <a href=\"#\" class=\"all-fonds\">Все фонды ({{ico_count}})</a>\n</div>"

/***/ }),

/***/ "./angular/app/sidebar/top-ico/top-ico.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./angular/app/sidebar/top-ico/top-ico.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TopIcoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__cloud_mining_service__ = __webpack_require__("./angular/app/cloud-mining.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TopIcoComponent = (function () {
    function TopIcoComponent(cloudMining) {
        this.cloudMining = cloudMining;
        this.ico_top = [];
        this.ico_count = 0;
    }
    TopIcoComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.cloudMining.getIcoTop().subscribe(function (res) {
            _this.ico_top = res[0];
            _this.ico_count = res.count;
        });
    };
    return TopIcoComponent;
}());
TopIcoComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-top-ico',
        template: __webpack_require__("./angular/app/sidebar/top-ico/top-ico.component.html"),
        styles: [__webpack_require__("./angular/app/sidebar/top-ico/top-ico.component.scss")],
        providers: [__WEBPACK_IMPORTED_MODULE_1__cloud_mining_service__["a" /* CloudMiningService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__cloud_mining_service__["a" /* CloudMiningService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__cloud_mining_service__["a" /* CloudMiningService */]) === "function" && _a || Object])
], TopIcoComponent);

var _a;
//# sourceMappingURL=top-ico.component.js.map

/***/ }),

/***/ "./angular/app/stocks.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StocksService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/@angular/common/http.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var StocksService = (function () {
    function StocksService(http) {
        this.http = http;
        this.path = '/bit/info';
        this.bitPath = '/bit';
        this.exchangePath = '/angular/exchange/';
        this.exchangePairsPath = '/bit/pair/name?exchange=';
    }
    StocksService.prototype.getStocks = function (pairs) {
        return this.http.get(this.path + '?pair=' + pairs).publishReplay(1).refCount();
    };
    StocksService.prototype.getCrypto = function () {
        return this.returnPath = this.http.get(this.bitPath).publishReplay(1).refCount();
    };
    StocksService.prototype.getExchanges = function () {
        return this.http.get('/angular/exchanges').publishReplay(1).refCount();
    };
    StocksService.prototype.getVolumes = function () {
        return this.http.get('/bit/volumes').publishReplay(1).refCount();
    };
    StocksService.prototype.getExchange = function (name) {
        return this.http.get(this.exchangePath + name).publishReplay(1).refCount();
    };
    StocksService.prototype.getExchangePairs = function (name) {
        return this.http.get(this.exchangePairsPath + name).publishReplay(1).refCount();
    };
    return StocksService;
}());
StocksService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]) === "function" && _a || Object])
], StocksService);

var _a;
//# sourceMappingURL=stocks.service.js.map

/***/ }),

/***/ "./angular/app/striphtml.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StriphtmlPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var StriphtmlPipe = (function () {
    function StriphtmlPipe() {
    }
    StriphtmlPipe.prototype.transform = function (value) {
        return value.replace(/<.*?>/g, ''); // replace tags
    };
    return StriphtmlPipe;
}());
StriphtmlPipe = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["X" /* Pipe */])({
        name: 'striphtml'
    })
], StriphtmlPipe);

//# sourceMappingURL=striphtml.pipe.js.map

/***/ }),

/***/ "./angular/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "./angular/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./angular/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./angular/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_23" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./angular/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map