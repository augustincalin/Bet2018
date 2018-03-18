webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var home_component_1 = __webpack_require__("./src/app/home/home.component.ts");
var help_component_1 = __webpack_require__("./src/app/help/help.component.ts");
var prize_component_1 = __webpack_require__("./src/app/prize/prize.component.ts");
var top_component_1 = __webpack_require__("./src/app/top/top.component.ts");
var user_component_1 = __webpack_require__("./src/app/user/user.component.ts");
var appRoutes = [
    { path: 'help', component: help_component_1.HelpComponent },
    { path: 'user/:username', component: user_component_1.UserComponent },
    { path: 'prize', component: prize_component_1.PrizeComponent },
    { path: 'top', component: top_component_1.TopComponent },
    { path: 'home', component: home_component_1.HomeComponent },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: '**', component: home_component_1.HomeComponent }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [
                router_1.RouterModule.forRoot(appRoutes, { enableTracing: true } // <-- debugging purposes only
                )
            ],
            exports: [
                router_1.RouterModule
            ]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;


/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"column\">\r\n    <mat-toolbar id=\"mainNavigation\" color=\"primary\">\r\n        <button mat-icon-button [matMenuTriggerFor]=\"appMenu\" fxHide.gt-xs=\"true\">\r\n            <mat-icon>menu</mat-icon>\r\n        </button>\r\n        <mat-menu #appMenu=\"matMenu\">\r\n            <button mat-menu-item (click)=\"navigateTo('/help')\">What is this?</button>\r\n            <button mat-menu-item (click)=\"navigateTo('/top')\">Top</button>\r\n            <button mat-menu-item (click)=\"navigateTo('/prize')\">Prizes</button>\r\n        </mat-menu>\r\n        <img src=\"../assets/2018.png\" fxHide.lt-sm=\"true\" (click)=\"navigateTo('/home')\"/>\r\n        <button mat-button class=\"title-big\" (click)=\"navigateTo('/home')\">2018 FIFA World Cup Russia</button>\r\n        <span class=\"fill-remaining-space\"></span>\r\n        <button mat-button (click)=\"navigateTo('/user', mainData.username)\">{{mainData?.username}}</button>\r\n    </mat-toolbar>\r\n    <div id=\"mainContent\">\r\n        <mat-sidenav-container>\r\n            <mat-sidenav class=\"sideNav\" mode=\"side\" [(opened)]=\"sideNavOpen\" fixedInViewport=\"true\" fixedTopGap=\"100\">\r\n                <h3>Top 5</h3>\r\n                <mat-list>\r\n                    <mat-list-item *ngFor=\"let user of mainData?.topUsers; let i=index\" role=\"listitem\" style=\"padding:0\">\r\n                        <button mat-button style=\"width:100%; margin:0; padding:0 10px\" (click)=\"navigateTo('/user', user.displayName)\">\r\n                            <div fxLayout=\"row\">\r\n                                <div fxFlex=\"30px\" style=\"text-align:left\">{{i+1}}.</div>\r\n                                <div fxFlex=\"75\" style=\"text-align:left\">{{user.displayName}}</div>\r\n                                <div fxFlex style=\"text-align:right\">{{user.points}}<mat-icon class=\"point\">grade</mat-icon></div>\r\n                            </div>\r\n                        </button>\r\n                    </mat-list-item>\r\n                </mat-list>\r\n                <button mat-button (click)=\"navigateTo('/top')\">see more...</button>\r\n                <h3>The algorithm</h3>\r\n                <p>The system is easy: place your bets for forthcoming matches. Guess the result ( 1 / X / 2 ) and you gain {{mainData?.settings.resultPoints}}<mat-icon class=\"point\">grade</mat-icon>. Guess the number of goals a team scores and you gain {{mainData?.settings.goalsPoints}}<mat-icon class=\"point\">grade</mat-icon>.</p>\r\n                <p>Watch out! In final stages the number of points you can win will double!</p>\r\n                <button mat-button (click)=\"navigateTo('/help')\">see more...</button>\r\n                <h3>Prizes</h3>\r\n                <p matLine>This are the prizes you can win if you'll be in the first 5 players at the end of the competition:</p>\r\n                <mat-list>\r\n                    <mat-list-item>\r\n                        <img matListAvatar src=\"../assets/prizes/1.png\" alt=\"...\">\r\n                        <h3 matLine> 1st Place </h3>\r\n                        <p matLine>\r\n                            <span>A description of the item.</span>\r\n                        </p>\r\n                    </mat-list-item>\r\n                    <mat-list-item>\r\n                        <img matListAvatar src=\"../assets/prizes/2.png\" alt=\"...\">\r\n                        <h3 matLine> 1st Place </h3>\r\n                        <p matLine>\r\n                            <span>A description of the item.</span>\r\n                        </p>\r\n                    </mat-list-item>\r\n                    <mat-list-item>\r\n                        <img matListAvatar src=\"../assets/prizes/3.png\" alt=\"...\">\r\n                        <h3 matLine> 1st Place </h3>\r\n                        <p matLine>\r\n                            <span>A description of the item.</span>\r\n                        </p>\r\n                    </mat-list-item>\r\n                </mat-list>\r\n                <button mat-button (click)=\"navigateTo('/prize')\">see more...</button>\r\n            </mat-sidenav>\r\n            <mat-sidenav-content id=\"content\">\r\n                <router-outlet></router-outlet>\r\n            </mat-sidenav-content>\r\n\r\n        </mat-sidenav-container>\r\n    </div>\r\n\r\n\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/***/ (function(module, exports) {

module.exports = "#mainNavigation {\n  position: fixed;\n  top: 0;\n  right: 0;\n  left: 0;\n  z-index: 9;\n  -webkit-box-shadow: 0 2px 4px rgba(0, 0, 0, 0.24);\n          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.24);\n  height: 100px; }\n\n.fill-remaining-space {\n  -webkit-box-flex: 1;\n      -ms-flex: 1 1 auto;\n          flex: 1 1 auto; }\n\n#mainContent {\n  margin-top: 100px; }\n\n#content {\n  padding: 10px; }\n\n.sideNav {\n  padding: 10px;\n  background-color: rgba(0, 0, 0, 0.03);\n  width: 300px;\n  -webkit-box-shadow: 0 10px 10px rgba(0, 0, 0, 0.24);\n          box-shadow: 0 10px 10px rgba(0, 0, 0, 0.24); }\n\n.point {\n  font-size: 1em;\n  color: #8c4cf0; }\n\n.match {\n  text-align: center; }\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var flex_layout_1 = __webpack_require__("./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var main_service_1 = __webpack_require__("./src/app/main.service.ts");
var AppComponent = /** @class */ (function () {
    function AppComponent(media, router, mainService) {
        var _this = this;
        this.media = media;
        this.router = router;
        this.mainService = mainService;
        this.sideNavOpen = true;
        this.activeMediaQuery = '';
        this.watcher = media.subscribe(function (change) {
            _this.sideNavOpen = !_this.media.isActive('xs');
        });
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.mainService.getMainData().subscribe(function (data) { return _this.mainData = __assign({}, data); });
    };
    AppComponent.prototype.ngOnDestroy = function () {
    };
    AppComponent.prototype.shouldSideNavOpened = function () {
        return this.sideNavOpen;
    };
    AppComponent.prototype.navigateTo = function (state, fragment) {
        var a = [];
        a.push(state);
        if (fragment) {
            a.push(fragment);
        }
        this.router.navigate(a);
    };
    __decorate([
        __param(1, core_1.Optional()),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String, String]),
        __metadata("design:returntype", void 0)
    ], AppComponent.prototype, "navigateTo", null);
    AppComponent = __decorate([
        core_1.Component({
            selector: 'bet-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.scss")]
        }),
        __metadata("design:paramtypes", [flex_layout_1.ObservableMedia, router_1.Router, main_service_1.MainService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;


/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_1 = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var http_1 = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var forms_1 = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
var animations_1 = __webpack_require__("./node_modules/@angular/platform-browser/esm5/animations.js");
var material_1 = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
var icon_1 = __webpack_require__("./node_modules/@angular/material/esm5/icon.es5.js");
var flex_layout_1 = __webpack_require__("./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
var menu_1 = __webpack_require__("./node_modules/@angular/material/esm5/menu.es5.js");
var toolbar_1 = __webpack_require__("./node_modules/@angular/material/esm5/toolbar.es5.js");
var sidenav_1 = __webpack_require__("./node_modules/@angular/material/esm5/sidenav.es5.js");
var input_1 = __webpack_require__("./node_modules/@angular/material/esm5/input.es5.js");
var list_1 = __webpack_require__("./node_modules/@angular/material/esm5/list.es5.js");
var app_component_1 = __webpack_require__("./src/app/app.component.ts");
var prize_component_1 = __webpack_require__("./src/app/prize/prize.component.ts");
var top_component_1 = __webpack_require__("./src/app/top/top.component.ts");
var user_component_1 = __webpack_require__("./src/app/user/user.component.ts");
var home_component_1 = __webpack_require__("./src/app/home/home.component.ts");
var help_component_1 = __webpack_require__("./src/app/help/help.component.ts");
var app_routing_module_1 = __webpack_require__("./src/app/app-routing.module.ts");
var main_service_1 = __webpack_require__("./src/app/main.service.ts");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                prize_component_1.PrizeComponent,
                top_component_1.TopComponent,
                user_component_1.UserComponent,
                home_component_1.HomeComponent,
                help_component_1.HelpComponent
            ],
            imports: [
                platform_browser_1.BrowserModule,
                http_1.HttpClientModule,
                forms_1.FormsModule,
                animations_1.BrowserAnimationsModule,
                material_1.MatButtonModule,
                icon_1.MatIconModule,
                flex_layout_1.FlexLayoutModule,
                menu_1.MatMenuModule,
                toolbar_1.MatToolbarModule,
                sidenav_1.MatSidenavModule,
                input_1.MatInputModule,
                list_1.MatListModule,
                app_routing_module_1.AppRoutingModule
            ],
            providers: [main_service_1.MainService],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;


/***/ }),

/***/ "./src/app/help/help.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  help works!\n</p>\n"

/***/ }),

/***/ "./src/app/help/help.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/help/help.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var HelpComponent = /** @class */ (function () {
    function HelpComponent() {
    }
    HelpComponent.prototype.ngOnInit = function () {
    };
    HelpComponent = __decorate([
        core_1.Component({
            selector: 'bet-help',
            template: __webpack_require__("./src/app/help/help.component.html"),
            styles: [__webpack_require__("./src/app/help/help.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], HelpComponent);
    return HelpComponent;
}());
exports.HelpComponent = HelpComponent;


/***/ }),

/***/ "./src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<h1 style=\"text-align:center\">Place your bets</h1>\r\n<h2 style=\"text-align:center\">Previous matches</h2>\r\n<div fxLayout=\"column\" class=\"match\">\r\n    <div>21:00</div>\r\n    <div fxLayout=\"row\" fxLayoutAlign=\"center center\">\r\n        <div fxFlex=\"49\" fxLayout=\"row\" fxLayoutAlign=\"end center\">\r\n            <img src=\"../assets/1.png\" style=\"padding-right:30px\" />\r\n            <div fxLayout=\"column\" fxLayoutAlign=\"center center\">\r\n                <h3 style=\"margin:5px 0 0 0\">KOREA REP CHI</h3>\r\n                <h1 style=\"margin:30px\">3</h1>\r\n            </div>\r\n        </div>\r\n        <div fxFlex=\"2\"></div>\r\n        <div fxFlex=\"49\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\r\n            <div fxLayout=\"column\" fxLayoutAlign=\"center center\">\r\n                <h3 style=\"margin:5px 0 0 0\">KOREA REPUBLIK</h3>\r\n                <h1 style=\"margin:30px\">3</h1>\r\n            </div>\r\n            <img src=\"../assets/1.png\" style=\"padding-left:30px\" />\r\n        </div>\r\n    </div>\r\n    <div>Your bet was Korea - Russia 2:0. You won 3<mat-icon class=\"point\">grade</mat-icon>.</div>\r\n</div>\r\n<h2 style=\"text-align:center\">Next matches</h2>\r\n<div fxLayout=\"column\" class=\"match\">\r\n    <div>21:00</div>\r\n    <div fxLayout=\"row\" fxLayoutAlign=\"center center\">\r\n        <div fxFlex=\"49\" fxLayout=\"row\" fxLayoutAlign=\"end center\">\r\n            <img src=\"../assets/1.png\" style=\"padding-right:30px\" />\r\n            <div fxLayout=\"column\" fxLayoutAlign=\"center center\">\r\n                <h3 style=\"margin:5px 0 0 0\">KOREA REP CHI</h3>\r\n                <h1 style=\"margin:0\">\r\n                    <mat-form-field style=\"width:50px; text-align:center; padding-bottom:0\">\r\n                        <input matInput type=\"number\">\r\n                    </mat-form-field>\r\n                </h1>\r\n            </div>\r\n        </div>\r\n        <div fxFlex=\"2\"></div>\r\n        <div fxFlex=\"49\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\r\n            <div fxLayout=\"column\" fxLayoutAlign=\"center center\">\r\n                <h3 style=\"margin:5px 0 0 0\">KOREA REPUBLIK</h3>\r\n                <h1 style=\"margin:0\">\r\n                    <mat-form-field style=\"width:50px; text-align:center; padding-bottom:0\">\r\n                        <input matInput type=\"number\">\r\n                    </mat-form-field>\r\n                </h1>\r\n            </div>\r\n            <img src=\"../assets/1.png\" style=\"padding-left:30px\" />\r\n        </div>\r\n    </div>\r\n    <div>Place your bets above.</div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/home/home.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/home/home.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        core_1.Component({
            selector: 'bet-home',
            template: __webpack_require__("./src/app/home/home.component.html"),
            styles: [__webpack_require__("./src/app/home/home.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;


/***/ }),

/***/ "./src/app/main.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var http_1 = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var MainService = /** @class */ (function () {
    function MainService(http) {
        this.http = http;
    }
    MainService.prototype.getMainData = function () {
        return this.http.get('/api/main/getmaindata');
    };
    MainService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], MainService);
    return MainService;
}());
exports.MainService = MainService;


/***/ }),

/***/ "./src/app/prize/prize.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  prize works!\n</p>\n"

/***/ }),

/***/ "./src/app/prize/prize.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/prize/prize.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var PrizeComponent = /** @class */ (function () {
    function PrizeComponent() {
    }
    PrizeComponent.prototype.ngOnInit = function () {
    };
    PrizeComponent = __decorate([
        core_1.Component({
            selector: 'bet-prize',
            template: __webpack_require__("./src/app/prize/prize.component.html"),
            styles: [__webpack_require__("./src/app/prize/prize.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], PrizeComponent);
    return PrizeComponent;
}());
exports.PrizeComponent = PrizeComponent;


/***/ }),

/***/ "./src/app/top/top.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  top works!\n</p>\n"

/***/ }),

/***/ "./src/app/top/top.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/top/top.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var TopComponent = /** @class */ (function () {
    function TopComponent() {
    }
    TopComponent.prototype.ngOnInit = function () {
    };
    TopComponent = __decorate([
        core_1.Component({
            selector: 'bet-top',
            template: __webpack_require__("./src/app/top/top.component.html"),
            styles: [__webpack_require__("./src/app/top/top.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], TopComponent);
    return TopComponent;
}());
exports.TopComponent = TopComponent;


/***/ }),

/***/ "./src/app/user/user.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  user works!\n</p>\n"

/***/ }),

/***/ "./src/app/user/user.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/user/user.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var UserComponent = /** @class */ (function () {
    function UserComponent() {
    }
    UserComponent.prototype.ngOnInit = function () {
    };
    UserComponent = __decorate([
        core_1.Component({
            selector: 'bet-user',
            template: __webpack_require__("./src/app/user/user.component.html"),
            styles: [__webpack_require__("./src/app/user/user.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], UserComponent);
    return UserComponent;
}());
exports.UserComponent = UserComponent;


/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
Object.defineProperty(exports, "__esModule", { value: true });
exports.environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var platform_browser_dynamic_1 = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
var app_module_1 = __webpack_require__("./src/app/app.module.ts");
var environment_1 = __webpack_require__("./src/environments/environment.ts");
if (environment_1.environment.production) {
    core_1.enableProdMode();
}
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule)
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map