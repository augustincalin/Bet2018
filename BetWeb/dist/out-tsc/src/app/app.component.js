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
var core_1 = require("@angular/core");
var flex_layout_1 = require("@angular/flex-layout");
var router_1 = require("@angular/router");
var main_service_1 = require("./main.service");
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
            templateUrl: './app.component.html',
            styleUrls: ['./app.component.scss']
        }),
        __metadata("design:paramtypes", [flex_layout_1.ObservableMedia, router_1.Router, main_service_1.MainService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map