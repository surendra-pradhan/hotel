(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./recipes/recipes.module": [
		"./src/app/recipes/recipes.module.ts",
		"recipes-recipes-module"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}
	return __webpack_require__.e(ids[1]).then(function() {
		var id = ids[0];
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-sm-12\">\n     <router-outlet></router-outlet>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_2__);



var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.loadedFeature = 'recipes';
    }
    AppComponent.prototype.Onnavigate = function (featured) {
        this.loadedFeature = featured;
    };
    AppComponent.prototype.ngOnInit = function () {
        firebase__WEBPACK_IMPORTED_MODULE_2__["initializeApp"]({
            apiKey: "AIzaSyDpDOPcKoKvwRZmKNkF-B6EjBNw1YM-AMg",
            authDomain: "recipebook-b80a7.firebaseapp.com",
        });
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _shoppinglist_shoppinglist_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./shoppinglist/shoppinglist.module */ "./src/app/shoppinglist/shoppinglist.module.ts");
/* harmony import */ var _auth_auth_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./auth/auth.module */ "./src/app/auth/auth.module.ts");
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./core/core.module */ "./src/app/core/core.module.ts");









var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_3__["HttpModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["sharedModules"],
                _shoppinglist_shoppinglist_module__WEBPACK_IMPORTED_MODULE_6__["shoppinglistmodule"],
                _auth_auth_module__WEBPACK_IMPORTED_MODULE_7__["authmodule"],
                _core_core_module__WEBPACK_IMPORTED_MODULE_8__["coreModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/approuting.module.ts":
/*!**************************************!*\
  !*** ./src/app/approuting.module.ts ***!
  \**************************************/
/*! exports provided: ApproutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApproutingModule", function() { return ApproutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shoppinglist_shoppinglist_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shoppinglist/shoppinglist.component */ "./src/app/shoppinglist/shoppinglist.component.ts");
/* harmony import */ var _core_home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./core/home/home.component */ "./src/app/core/home/home.component.ts");





var Approute = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: _core_home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"] },
    { path: 'recipes', loadChildren: './recipes/recipes.module#recipesModule' },
    { path: 'shopping-list', component: _shoppinglist_shoppinglist_component__WEBPACK_IMPORTED_MODULE_3__["ShoppinglistComponent"] },
];
var ApproutingModule = /** @class */ (function () {
    function ApproutingModule() {
    }
    ApproutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(Approute, { preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_2__["PreloadAllModules"] })],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], ApproutingModule);
    return ApproutingModule;
}());



/***/ }),

/***/ "./src/app/auth/auth.module.ts":
/*!*************************************!*\
  !*** ./src/app/auth/auth.module.ts ***!
  \*************************************/
/*! exports provided: authmodule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "authmodule", function() { return authmodule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _signin_signin_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./signin/signin.component */ "./src/app/auth/signin/signin.component.ts");
/* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./signup/signup.component */ "./src/app/auth/signup/signup.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _authroting_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./authroting.module */ "./src/app/auth/authroting.module.ts");






var authmodule = /** @class */ (function () {
    function authmodule() {
    }
    authmodule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _signin_signin_component__WEBPACK_IMPORTED_MODULE_2__["SigninComponent"],
                _signup_signup_component__WEBPACK_IMPORTED_MODULE_3__["SignupComponent"]
            ],
            imports: [
                _authroting_module__WEBPACK_IMPORTED_MODULE_5__["authroutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"]
            ]
        })
    ], authmodule);
    return authmodule;
}());



/***/ }),

/***/ "./src/app/auth/auth.service.ts":
/*!**************************************!*\
  !*** ./src/app/auth/auth.service.ts ***!
  \**************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var AuthService = /** @class */ (function () {
    function AuthService(router) {
        this.router = router;
    }
    AuthService.prototype.signup = function (email, password) {
        firebase__WEBPACK_IMPORTED_MODULE_2__["auth"]().createUserWithEmailAndPassword(email, password)
            .catch(function (error) {
            console.log(error);
        });
    };
    AuthService.prototype.signin = function (email, password) {
        var _this = this;
        firebase__WEBPACK_IMPORTED_MODULE_2__["auth"]().signInWithEmailAndPassword(email, password)
            .then(function (res) {
            _this.router.navigate(['/']);
            firebase__WEBPACK_IMPORTED_MODULE_2__["auth"]().currentUser.getIdToken()
                .then(function (tokens) {
                _this.token = tokens;
            });
        }).catch(function (error) {
            console.log(error);
        });
    };
    AuthService.prototype.signout = function () {
        firebase__WEBPACK_IMPORTED_MODULE_2__["auth"]().signOut();
        this.token = null;
    };
    AuthService.prototype.gettokens = function () {
        var _this = this;
        firebase__WEBPACK_IMPORTED_MODULE_2__["auth"]().currentUser.getIdToken()
            .then(function (tokens) {
            _this.token = tokens;
        });
        return this.token;
    };
    AuthService.prototype.authentication = function () {
        return this.token != null;
    };
    AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/auth/authroting.module.ts":
/*!*******************************************!*\
  !*** ./src/app/auth/authroting.module.ts ***!
  \*******************************************/
/*! exports provided: authroutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "authroutingModule", function() { return authroutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _signin_signin_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./signin/signin.component */ "./src/app/auth/signin/signin.component.ts");
/* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./signup/signup.component */ "./src/app/auth/signup/signup.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var authrouting = [
    { path: "signin", component: _signin_signin_component__WEBPACK_IMPORTED_MODULE_2__["SigninComponent"] },
    { path: 'signup', component: _signup_signup_component__WEBPACK_IMPORTED_MODULE_3__["SignupComponent"] }
];
var authroutingModule = /** @class */ (function () {
    function authroutingModule() {
    }
    authroutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(authrouting)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"]]
        })
    ], authroutingModule);
    return authroutingModule;
}());



/***/ }),

/***/ "./src/app/auth/signin/signin.component.css":
/*!**************************************************!*\
  !*** ./src/app/auth/signin/signin.component.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2F1dGgvc2lnbmluL3NpZ25pbi5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/auth/signin/signin.component.html":
/*!***************************************************!*\
  !*** ./src/app/auth/signin/signin.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-sm-8\">\n        <div class=\"form-group\">\n          <form (ngSubmit)='onSignin(f)' #f='ngForm'>\n             <label for=\"email\">Email</label>\n             <input id=\"email\" class=\"form-control\" ngModel name=\"email\"> \n             <label for=\"password\">Password</label>\n             <input id=\"password\" class=\"form-control\" ngModel name=\"password\">\n             <br>\n             <div class=\"form-group\">\n             <button class=\"btn btn-primary\">Signin</button>\n            </div>\n          </form>\n        </div>\n      </div>\n    </div>\n  </div>"

/***/ }),

/***/ "./src/app/auth/signin/signin.component.ts":
/*!*************************************************!*\
  !*** ./src/app/auth/signin/signin.component.ts ***!
  \*************************************************/
/*! exports provided: SigninComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SigninComponent", function() { return SigninComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var SigninComponent = /** @class */ (function () {
    function SigninComponent(authservice, router) {
        this.authservice = authservice;
        this.router = router;
    }
    SigninComponent.prototype.ngOnInit = function () {
    };
    SigninComponent.prototype.onSignin = function (form) {
        var email = form.value.email;
        var password = form.value.password;
        this.authservice.signin(email, password);
    };
    SigninComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-signin',
            template: __webpack_require__(/*! ./signin.component.html */ "./src/app/auth/signin/signin.component.html"),
            styles: [__webpack_require__(/*! ./signin.component.css */ "./src/app/auth/signin/signin.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], SigninComponent);
    return SigninComponent;
}());



/***/ }),

/***/ "./src/app/auth/signup/signup.component.css":
/*!**************************************************!*\
  !*** ./src/app/auth/signup/signup.component.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2F1dGgvc2lnbnVwL3NpZ251cC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/auth/signup/signup.component.html":
/*!***************************************************!*\
  !*** ./src/app/auth/signup/signup.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-sm-8\">\n      <div class=\"form-group\">\n        <form (ngSubmit)='onSignup(f)' #f='ngForm'>\n           <label for=\"email\">Email</label>\n           <input id=\"email\" class=\"form-control\" ngModel name=\"email\"> \n           <label for=\"password\">Password</label>\n           <input id=\"password\" class=\"form-control\" ngModel name=\"password\">\n           <br>\n           <div class=\"form-group\">\n           <button class=\"btn btn-primary\">Signup</button>\n          </div>\n        </form>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/auth/signup/signup.component.ts":
/*!*************************************************!*\
  !*** ./src/app/auth/signup/signup.component.ts ***!
  \*************************************************/
/*! exports provided: SignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupComponent", function() { return SignupComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../auth.service */ "./src/app/auth/auth.service.ts");



var SignupComponent = /** @class */ (function () {
    function SignupComponent(authservice) {
        this.authservice = authservice;
    }
    SignupComponent.prototype.ngOnInit = function () {
    };
    SignupComponent.prototype.onSignup = function (form) {
        var email = form.value.email;
        var password = form.value.password;
        this.authservice.signup(email, password);
    };
    SignupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-signup',
            template: __webpack_require__(/*! ./signup.component.html */ "./src/app/auth/signup/signup.component.html"),
            styles: [__webpack_require__(/*! ./signup.component.css */ "./src/app/auth/signup/signup.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
    ], SignupComponent);
    return SignupComponent;
}());



/***/ }),

/***/ "./src/app/core/core.module.ts":
/*!*************************************!*\
  !*** ./src/app/core/core.module.ts ***!
  \*************************************/
/*! exports provided: coreModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "coreModule", function() { return coreModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./header/header.component */ "./src/app/core/header/header.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home/home.component */ "./src/app/core/home/home.component.ts");
/* harmony import */ var _shoppinglist_shoppinglist_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shoppinglist/shoppinglist.service */ "./src/app/shoppinglist/shoppinglist.service.ts");
/* harmony import */ var _recipes_recipe_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../recipes/recipe.service */ "./src/app/recipes/recipe.service.ts");
/* harmony import */ var _shared_storagedata_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/storagedata.service */ "./src/app/shared/storagedata.service.ts");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../auth/auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var _approuting_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./../approuting.module */ "./src/app/approuting.module.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");










var coreModule = /** @class */ (function () {
    function coreModule() {
    }
    coreModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _header_header_component__WEBPACK_IMPORTED_MODULE_2__["HeaderComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"]
            ],
            imports: [
                _approuting_module__WEBPACK_IMPORTED_MODULE_8__["ApproutingModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_9__["sharedModules"],
            ],
            providers: [
                _shoppinglist_shoppinglist_service__WEBPACK_IMPORTED_MODULE_4__["ShoppingListService"],
                _recipes_recipe_service__WEBPACK_IMPORTED_MODULE_5__["Recipeservice"],
                _shared_storagedata_service__WEBPACK_IMPORTED_MODULE_6__["StoragedataService"],
                _auth_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"],
            ],
            exports: [_approuting_module__WEBPACK_IMPORTED_MODULE_8__["ApproutingModule"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_2__["HeaderComponent"]]
        })
    ], coreModule);
    return coreModule;
}());



/***/ }),

/***/ "./src/app/core/header/header.component.css":
/*!**************************************************!*\
  !*** ./src/app/core/header/header.component.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvcmUvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/core/header/header.component.html":
/*!***************************************************!*\
  !*** ./src/app/core/header/header.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default\">\n  <div class=\"container-fluid\">\n    <div class=\"navbar-header\">\n      <a routerLink='/' class=\"navbar-brand\">Recipe Book</a>\n    </div>\n    <div class=\"collapse navbar-collapse\">\n      <ul class=\"nav navbar-nav\">\n        <li routerLinkActive='active'><a routerLink='/recipes'>Recipes</a></li>\n        <li routerLinkActive='active'><a routerLink='/shopping-list'>Shopping Lsit</a></li>\n      </ul>\n      <ul class=\"nav navbar-nav navbar-right\">\n        <ng-template [ngIf]=\"!authservice.authentication()\">\n  \n            <li>\n                <a routerLink=\"/signup\">Register</a>\n              </li>\n      \n              <li>\n                  <a routerLink=\"/signin\">login</a>\n                </li>\n        </ng-template>\n      \n          <li *ngIf='authservice.authentication()'>\n            <a (click)='logout()'>logout</a>\n          </li>\n          \n        <li class=\"dropdown\" appDropdownlist *ngIf='authservice.authentication()'>\n          <a style=\"cursor:pointer\" class=\"dropdown-toggle\" role=\"button\">Manage<span class=\"caret\"></span></a>\n          <ul class=\"dropdown-menu\">\n            <li><a style=\"cursor:pointer\" (click)='onstoragedata()'>Save Data</a></li>\n            <li><a style=\"cursor:pointer\" (click)='onfetchdata()'>Fetch Data</a></li>\n          </ul>\n        </li>\n      </ul>\n    </div>\n  </div>\n</nav>\n"

/***/ }),

/***/ "./src/app/core/header/header.component.ts":
/*!*************************************************!*\
  !*** ./src/app/core/header/header.component.ts ***!
  \*************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_storagedata_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/storagedata.service */ "./src/app/shared/storagedata.service.ts");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../auth/auth.service */ "./src/app/auth/auth.service.ts");




var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(datastorageservice, authservice) {
        this.datastorageservice = datastorageservice;
        this.authservice = authservice;
    }
    HeaderComponent.prototype.onstoragedata = function () {
        this.datastorageservice.storagedata()
            .subscribe(function (res) {
            console.log(res);
        });
    };
    HeaderComponent.prototype.onfetchdata = function () {
        this.datastorageservice.fetchdata();
    };
    HeaderComponent.prototype.logout = function () {
        this.authservice.signout();
    };
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/core/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/core/header/header.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_storagedata_service__WEBPACK_IMPORTED_MODULE_2__["StoragedataService"], _auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/core/home/home.component.css":
/*!**********************************************!*\
  !*** ./src/app/core/home/home.component.css ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvcmUvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/core/home/home.component.html":
/*!***********************************************!*\
  !*** ./src/app/core/home/home.component.html ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>Welcome book of recipe</h1>\n"

/***/ }),

/***/ "./src/app/core/home/home.component.ts":
/*!*********************************************!*\
  !*** ./src/app/core/home/home.component.ts ***!
  \*********************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/core/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/core/home/home.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/recipes/recipe.service.ts":
/*!*******************************************!*\
  !*** ./src/app/recipes/recipe.service.ts ***!
  \*******************************************/
/*! exports provided: Recipeservice */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Recipeservice", function() { return Recipeservice; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _recipes_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./recipes.model */ "./src/app/recipes/recipes.model.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_ingrediant_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/ingrediant.model */ "./src/app/shared/ingrediant.model.ts");
/* harmony import */ var _shoppinglist_shoppinglist_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../shoppinglist/shoppinglist.service */ "./src/app/shoppinglist/shoppinglist.service.ts");
/* harmony import */ var rxjs_Subject__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/Subject */ "./node_modules/rxjs-compat/_esm5/Subject.js");






var Recipeservice = /** @class */ (function () {
    function Recipeservice(slservice) {
        this.slservice = slservice;
        this.changerecipe = new rxjs_Subject__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
        this.recipe = [
            new _recipes_model__WEBPACK_IMPORTED_MODULE_1__["Recipes"]('A test Recipe', 'this is a simple test', 'https://media.defense.gov/2015/Nov/16/2001318253/-1/-1/0/151123-A-YG824-001.JPG', [
                new _shared_ingrediant_model__WEBPACK_IMPORTED_MODULE_3__["ingrediant"]('meat', 1),
                new _shared_ingrediant_model__WEBPACK_IMPORTED_MODULE_3__["ingrediant"]('frenchFrieis', 20)
            ]),
            new _recipes_model__WEBPACK_IMPORTED_MODULE_1__["Recipes"]('A test Recipe2', 'this is a simple test2', 'https://www.foodrepublic.com/wp-content/uploads/2012/02/OystersRockefeller.jpg', [
                new _shared_ingrediant_model__WEBPACK_IMPORTED_MODULE_3__["ingrediant"]('buns', 2),
                new _shared_ingrediant_model__WEBPACK_IMPORTED_MODULE_3__["ingrediant"]('meat', 1)
            ])
        ];
    }
    Recipeservice.prototype.getrecipe = function () {
        return this.recipe.slice();
    };
    Recipeservice.prototype.fetchrecipe = function (recipes) {
        this.recipe = recipes;
        return this.changerecipe.next(this.recipe.slice());
    };
    Recipeservice.prototype.getRecipes = function (index) {
        return this.recipe[index];
    };
    Recipeservice.prototype.addingrediantoshoppinglist = function (ingrediants) {
        this.slservice.addingrdiantlsit(ingrediants);
    };
    Recipeservice.prototype.addrecipe = function (newrecipe) {
        this.recipe.push(newrecipe);
        return this.changerecipe.next(this.recipe.slice());
    };
    Recipeservice.prototype.updaterecipe = function (index, newrecipe) {
        this.recipe[index] = newrecipe;
        return this.changerecipe.next(this.recipe.slice());
    };
    Recipeservice.prototype.deleterecipe = function (index) {
        this.recipe.splice(index, 1);
        return this.changerecipe.next(this.recipe.slice());
    };
    Recipeservice = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shoppinglist_shoppinglist_service__WEBPACK_IMPORTED_MODULE_4__["ShoppingListService"]])
    ], Recipeservice);
    return Recipeservice;
}());



/***/ }),

/***/ "./src/app/recipes/recipes.model.ts":
/*!******************************************!*\
  !*** ./src/app/recipes/recipes.model.ts ***!
  \******************************************/
/*! exports provided: Recipes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Recipes", function() { return Recipes; });
var Recipes = /** @class */ (function () {
    function Recipes(name, descpription, image, ingrediants) {
        this.name = name;
        this.descpription = descpription;
        this.image = image;
        this.ingrediants = ingrediants;
    }
    return Recipes;
}());



/***/ }),

/***/ "./src/app/shared/dropdownlist.directive.ts":
/*!**************************************************!*\
  !*** ./src/app/shared/dropdownlist.directive.ts ***!
  \**************************************************/
/*! exports provided: DropdownlistDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DropdownlistDirective", function() { return DropdownlistDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var DropdownlistDirective = /** @class */ (function () {
    function DropdownlistDirective() {
        this.isOpen = false;
    }
    DropdownlistDirective.prototype.toggelclass = function () {
        this.isOpen = !this.isOpen;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class.open'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], DropdownlistDirective.prototype, "isOpen", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('click'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", []),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], DropdownlistDirective.prototype, "toggelclass", null);
    DropdownlistDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: '[appDropdownlist]'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], DropdownlistDirective);
    return DropdownlistDirective;
}());



/***/ }),

/***/ "./src/app/shared/ingrediant.model.ts":
/*!********************************************!*\
  !*** ./src/app/shared/ingrediant.model.ts ***!
  \********************************************/
/*! exports provided: ingrediant */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ingrediant", function() { return ingrediant; });
var ingrediant = /** @class */ (function () {
    function ingrediant(name, number) {
        this.name = name;
        this.number = number;
    }
    return ingrediant;
}());



/***/ }),

/***/ "./src/app/shared/shared.module.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: sharedModules */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sharedModules", function() { return sharedModules; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _dropdownlist_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dropdownlist.directive */ "./src/app/shared/dropdownlist.directive.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");




var sharedModules = /** @class */ (function () {
    function sharedModules() {
    }
    sharedModules = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_dropdownlist_directive__WEBPACK_IMPORTED_MODULE_2__["DropdownlistDirective"]],
            exports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                _dropdownlist_directive__WEBPACK_IMPORTED_MODULE_2__["DropdownlistDirective"]
            ]
        })
    ], sharedModules);
    return sharedModules;
}());



/***/ }),

/***/ "./src/app/shared/storagedata.service.ts":
/*!***********************************************!*\
  !*** ./src/app/shared/storagedata.service.ts ***!
  \***********************************************/
/*! exports provided: StoragedataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StoragedataService", function() { return StoragedataService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _recipes_recipe_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../recipes/recipe.service */ "./src/app/recipes/recipe.service.ts");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var rxjs_Rx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/Rx */ "./node_modules/rxjs-compat/_esm5/Rx.js");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../auth/auth.service */ "./src/app/auth/auth.service.ts");






var StoragedataService = /** @class */ (function () {
    function StoragedataService(http, recipeservice, authservice) {
        this.http = http;
        this.recipeservice = recipeservice;
        this.authservice = authservice;
    }
    StoragedataService.prototype.storagedata = function () {
        var token = this.authservice.gettokens();
        return this.http.put('https://recipebook-b80a7.firebaseio.com/recipe.json?auth=' + token, this.recipeservice.getrecipe());
    };
    StoragedataService.prototype.fetchdata = function () {
        var _this = this;
        var token = this.authservice.gettokens();
        this.http.get('https://recipebook-b80a7.firebaseio.com/recipe.json?auth=' + token)
            .map(function (response) {
            var recipes = response.json();
            for (var _i = 0, recipes_1 = recipes; _i < recipes_1.length; _i++) {
                var recipe = recipes_1[_i];
                if (!recipe['ingrediants']) {
                    recipe['ingrediants'] = [];
                }
            }
            return recipes;
        })
            .subscribe(function (recipe) {
            _this.recipeservice.fetchrecipe(recipe);
        });
    };
    StoragedataService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_3__["Http"], _recipes_recipe_service__WEBPACK_IMPORTED_MODULE_2__["Recipeservice"], _auth_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]])
    ], StoragedataService);
    return StoragedataService;
}());



/***/ }),

/***/ "./src/app/shoppinglist/shopping-edit/shopping-edit.component.css":
/*!************************************************************************!*\
  !*** ./src/app/shoppinglist/shopping-edit/shopping-edit.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Nob3BwaW5nbGlzdC9zaG9wcGluZy1lZGl0L3Nob3BwaW5nLWVkaXQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/shoppinglist/shopping-edit/shopping-edit.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/shoppinglist/shopping-edit/shopping-edit.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-sm-12\">\n    <form (ngSubmit)='Additem(f)' #f='ngForm'>\n      <div class=\"row\">\n        <div class=\"col-sm-5 form-group\">\n          <label for=\"name\">Name</label>\n          <input class=\"form-control\" id=\"name\" type=\"text\" ngModel name='itemname' required>\n        </div>\n        <div class=\"col-sm-2 form-group\">\n          <label for=\"amount\">Amount</label>\n          <input class=\"form-control\" id=\"amount\" type=\"number\" ngModel name='itemamount' required>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-sm-12\">\n          <button class=\"btn btn-success\" type=\"submit\" [disabled]=\"!f.valid\" >{{ editmode ? 'update' : 'add'}}</button>\n          <button class=\"btn btn-danger\" type=\"button\" (click)='onRemove()' *ngIf='editmode'>Delete</button>\n          <button class=\"btn btn-primary\" type=\"button\" (click)='onClear()'>Clear</button>\n        </div>\n      </div>\n    </form>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/shoppinglist/shopping-edit/shopping-edit.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/shoppinglist/shopping-edit/shopping-edit.component.ts ***!
  \***********************************************************************/
/*! exports provided: ShoppingEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShoppingEditComponent", function() { return ShoppingEditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_shared_ingrediant_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/ingrediant.model */ "./src/app/shared/ingrediant.model.ts");
/* harmony import */ var _shoppinglist_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../shoppinglist.service */ "./src/app/shoppinglist/shoppinglist.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");





var ShoppingEditComponent = /** @class */ (function () {
    function ShoppingEditComponent(slservice) {
        this.slservice = slservice;
        this.editmode = false;
    }
    ShoppingEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.slservice.editIngrediant
            .subscribe(function (ind) {
            _this.index = +ind;
            _this.editmode = true;
            _this.editingrediants = _this.slservice.editshoppinlist(_this.index);
            _this.formvalue.setValue({
                itemname: _this.editingrediants.name,
                itemamount: _this.editingrediants.number
            });
        });
    };
    ShoppingEditComponent.prototype.Additem = function (form) {
        var value = form.value;
        var newIngrediant = new src_app_shared_ingrediant_model__WEBPACK_IMPORTED_MODULE_2__["ingrediant"](value.itemname, value.itemamount);
        if (this.editmode) {
            this.slservice.updateshoppinglist(this.index, newIngrediant);
        }
        else {
            this.slservice.addIngrediant(newIngrediant);
        }
        this.editmode = false;
        form.reset();
    };
    ShoppingEditComponent.prototype.onClear = function () {
        this.formvalue.reset();
        this.editmode = false;
    };
    ShoppingEditComponent.prototype.onRemove = function () {
        if (this.editmode) {
            this.slservice.removeshoppinglist(this.index);
            this.editmode = false;
            this.formvalue.reset();
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('f'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"])
    ], ShoppingEditComponent.prototype, "formvalue", void 0);
    ShoppingEditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-shopping-edit',
            template: __webpack_require__(/*! ./shopping-edit.component.html */ "./src/app/shoppinglist/shopping-edit/shopping-edit.component.html"),
            styles: [__webpack_require__(/*! ./shopping-edit.component.css */ "./src/app/shoppinglist/shopping-edit/shopping-edit.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shoppinglist_service__WEBPACK_IMPORTED_MODULE_3__["ShoppingListService"]])
    ], ShoppingEditComponent);
    return ShoppingEditComponent;
}());



/***/ }),

/***/ "./src/app/shoppinglist/shoppinglist.component.css":
/*!*********************************************************!*\
  !*** ./src/app/shoppinglist/shoppinglist.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Nob3BwaW5nbGlzdC9zaG9wcGluZ2xpc3QuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/shoppinglist/shoppinglist.component.html":
/*!**********************************************************!*\
  !*** ./src/app/shoppinglist/shoppinglist.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-sm-10\">\n    <app-shopping-edit></app-shopping-edit>\n    <hr>\n    <ul class=\"list-group\">\n      <a \n       class=\"list-group-item\" \n      *ngFor='let ingrediant of ingrediants; let i = index' (click)='Onedit(i)'>{{ ingrediant.name }}({{ ingrediant.number }})</a>\n    </ul>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/shoppinglist/shoppinglist.component.ts":
/*!********************************************************!*\
  !*** ./src/app/shoppinglist/shoppinglist.component.ts ***!
  \********************************************************/
/*! exports provided: ShoppinglistComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShoppinglistComponent", function() { return ShoppinglistComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shoppinglist_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shoppinglist.service */ "./src/app/shoppinglist/shoppinglist.service.ts");



var ShoppinglistComponent = /** @class */ (function () {
    function ShoppinglistComponent(slService) {
        this.slService = slService;
    }
    ShoppinglistComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.ingrediants = this.slService.getShoppinglist();
        this.subscription = this.slService.changeIngredian
            .subscribe(function (ingrediant) {
            _this.ingrediants = ingrediant;
        });
    };
    ShoppinglistComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    ShoppinglistComponent.prototype.Onedit = function (index) {
        this.slService.editIngrediant.next(index);
    };
    ShoppinglistComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-shoppinglist',
            template: __webpack_require__(/*! ./shoppinglist.component.html */ "./src/app/shoppinglist/shoppinglist.component.html"),
            styles: [__webpack_require__(/*! ./shoppinglist.component.css */ "./src/app/shoppinglist/shoppinglist.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shoppinglist_service__WEBPACK_IMPORTED_MODULE_2__["ShoppingListService"]])
    ], ShoppinglistComponent);
    return ShoppinglistComponent;
}());



/***/ }),

/***/ "./src/app/shoppinglist/shoppinglist.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/shoppinglist/shoppinglist.module.ts ***!
  \*****************************************************/
/*! exports provided: shoppinglistmodule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "shoppinglistmodule", function() { return shoppinglistmodule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shoppinglist_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shoppinglist.component */ "./src/app/shoppinglist/shoppinglist.component.ts");
/* harmony import */ var _shopping_edit_shopping_edit_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shopping-edit/shopping-edit.component */ "./src/app/shoppinglist/shopping-edit/shopping-edit.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");






var shoppinglistmodule = /** @class */ (function () {
    function shoppinglistmodule() {
    }
    shoppinglistmodule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _shoppinglist_component__WEBPACK_IMPORTED_MODULE_2__["ShoppinglistComponent"],
                _shopping_edit_shopping_edit_component__WEBPACK_IMPORTED_MODULE_3__["ShoppingEditComponent"],
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            ],
            exports: []
        })
    ], shoppinglistmodule);
    return shoppinglistmodule;
}());



/***/ }),

/***/ "./src/app/shoppinglist/shoppinglist.service.ts":
/*!******************************************************!*\
  !*** ./src/app/shoppinglist/shoppinglist.service.ts ***!
  \******************************************************/
/*! exports provided: ShoppingListService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShoppingListService", function() { return ShoppingListService; });
/* harmony import */ var _shared_ingrediant_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/ingrediant.model */ "./src/app/shared/ingrediant.model.ts");
/* harmony import */ var rxjs_Subject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/Subject */ "./node_modules/rxjs-compat/_esm5/Subject.js");


var ShoppingListService = /** @class */ (function () {
    function ShoppingListService() {
        this.ingrediants = [
            new _shared_ingrediant_model__WEBPACK_IMPORTED_MODULE_0__["ingrediant"]('apple', 10),
            new _shared_ingrediant_model__WEBPACK_IMPORTED_MODULE_0__["ingrediant"]('Tomato', 5)
        ];
        this.changeIngredian = new rxjs_Subject__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.editIngrediant = new rxjs_Subject__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
    }
    ShoppingListService.prototype.getShoppinglist = function () {
        return this.ingrediants.slice();
    };
    ShoppingListService.prototype.addIngrediant = function (ingrdeiant) {
        this.ingrediants.push(ingrdeiant);
        this.changeIngredian.next(this.ingrediants.slice());
    };
    ShoppingListService.prototype.addingrdiantlsit = function (ingrediant) {
        var _a;
        (_a = this.ingrediants).push.apply(_a, ingrediant);
        this.changeIngredian.next(this.ingrediants.slice());
    };
    ShoppingListService.prototype.editshoppinlist = function (index) {
        return this.ingrediants[index];
    };
    ShoppingListService.prototype.updateshoppinglist = function (index, newingredian) {
        this.ingrediants[index] = newingredian;
        this.changeIngredian.next(this.ingrediants.slice());
    };
    ShoppingListService.prototype.removeshoppinglist = function (index) {
        this.ingrediants.splice(index, 1);
        this.changeIngredian.next(this.ingrediants.slice());
    };
    return ShoppingListService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\finalapp\hotel\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map