"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_1 = require("@angular/platform-browser");
var core_1 = require("@angular/core");
var http_1 = require("@angular/common/http");
var forms_1 = require("@angular/forms");
var animations_1 = require("@angular/platform-browser/animations");
var material_1 = require("@angular/material");
var icon_1 = require("@angular/material/icon");
var flex_layout_1 = require("@angular/flex-layout");
var menu_1 = require("@angular/material/menu");
var toolbar_1 = require("@angular/material/toolbar");
var sidenav_1 = require("@angular/material/sidenav");
var input_1 = require("@angular/material/input");
var list_1 = require("@angular/material/list");
var app_component_1 = require("./app.component");
var prize_component_1 = require("./prize/prize.component");
var top_component_1 = require("./top/top.component");
var user_component_1 = require("./user/user.component");
var home_component_1 = require("./home/home.component");
var help_component_1 = require("./help/help.component");
var app_routing_module_1 = require("./app-routing.module");
var main_service_1 = require("./main.service");
var home_service_1 = require("./home/home.service");
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
            providers: [main_service_1.MainService, home_service_1.HomeService],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map