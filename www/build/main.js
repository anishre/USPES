webpackJsonp([10],{

/***/ 126:
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
webpackEmptyAsyncContext.id = 126;

/***/ }),

/***/ 15:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__register_register__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_home__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__admin_admin__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








/**
 * Component
 */
var LoginPage = /** @class */ (function () {
    /**
     * Creates an instance of login page.
     * @param navCtrl
     * @param alertCtrl
     * @param http
     * @param loading
     */
    function LoginPage(navCtrl, alertCtrl, http, loading) {
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
        this.http = http;
        this.loading = loading;
    }
    /**
     * Signs up
     */
    LoginPage.prototype.signUp = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__register_register__["a" /* RegisterPage */]);
    };
    /**
     * Signs in
     */
    LoginPage.prototype.signIn = function () {
        //// check to confirm the username and password fields are filled
        var _this = this;
        if (this.username.value == "") {
            var alert_1 = this.alertCtrl.create({
                title: "ATTENTION",
                subTitle: "Username field is empty",
                buttons: ['OK']
            });
            alert_1.present();
        }
        else if (this.password.value == "") {
            var alert_2 = this.alertCtrl.create({
                title: "ATTENTION",
                subTitle: "Password field is empty",
                buttons: ['OK']
            });
            alert_2.present();
        }
        else {
            var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Headers */]();
            headers.append("Accept", 'application/json');
            headers.append('Content-Type', 'application/json');
            var options_1 = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["d" /* RequestOptions */]({
                headers: headers
            });
            var data_1 = {
                username: this.username.value,
                password: this.password.value,
            };
            var loader_1 = this.loading.create({
                content: 'Processing please wait...',
            });
            loader_1.present().then(function () {
                _this.http.post('http://localhost/ionicphp/login.php', data_1, options_1)
                    .map(function (res) { return res.json(); })
                    .subscribe(function (res) {
                    console.log(res);
                    loader_1.dismiss();
                    if (res == "Your Login success") {
                        var alert_3 = _this.alertCtrl.create({
                            title: "CONGRATS",
                            subTitle: (res),
                            buttons: ['OK']
                        });
                        alert_3.present();
                        _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__home_home__["a" /* HomePage */], data_1);
                    }
                    else if (res == "Your Login success as Admin") {
                        var alert_4 = _this.alertCtrl.create({
                            title: "CONGRATS",
                            subTitle: (res),
                            buttons: ['OK']
                        });
                        alert_4.present();
                        _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__admin_admin__["a" /* AdminPage */], data_1);
                    }
                    else if (res == "Your Account is on hold") {
                        var alert_5 = _this.alertCtrl.create({
                            title: "ERROR",
                            subTitle: "Your Account is on Hold",
                            buttons: ['OK']
                        });
                        alert_5.present();
                    }
                    else {
                        var alert_6 = _this.alertCtrl.create({
                            title: "ERROR",
                            subTitle: "Your Login Username or Password is invalid",
                            buttons: ['OK']
                        });
                        alert_6.present();
                    }
                });
            });
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])("username"),
        __metadata("design:type", Object)
    ], LoginPage.prototype, "username", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])("password"),
        __metadata("design:type", Object)
    ], LoginPage.prototype, "password", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])("role"),
        __metadata("design:type", Object)
    ], LoginPage.prototype, "role", void 0);
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"C:\Users\Mohammed Farhan\Ionic\USP_ES-v7\src\pages\login\login.html"*/'<ion-header>\n  <ion-navbar>\n      <img src="assets/imgs/USP_logo.jpg" width="40px" style="display:inline-block" height="80px" width="150px"/>\n    <ion-title>\n     Login\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list no-lines>\n    <ion-item  >\n      <ion-input  round type="text" placeholder="Username" name="username" #username></ion-input>\n    </ion-item>\n  \n    <ion-item>\n      <ion-input type="password" placeholder="Password" name="password" #password></ion-input>\n    </ion-item>\n\n    <button ion-button round block (click)="signIn()">Sign In</button>\n    <button ion-button round outline block (click)="signUp()">Register</button>\n  \n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Mohammed Farhan\Ionic\USP_ES-v7\src\pages\login\login.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 167:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/admin/admin.module": [
		424,
		9
	],
	"../pages/change-program/change-program.module": [
		425,
		8
	],
	"../pages/courses/courses.module": [
		426,
		7
	],
	"../pages/enroll-now/enroll-now.module": [
		427,
		6
	],
	"../pages/graduation-application/graduation-application.module": [
		428,
		5
	],
	"../pages/home/home.module": [
		429,
		4
	],
	"../pages/my-program/my-program.module": [
		430,
		3
	],
	"../pages/personal-details/personal-details.module": [
		431,
		2
	],
	"../pages/program-calender/program-calender.module": [
		432,
		1
	],
	"../pages/recheck/recheck.module": [
		433,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 167;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 168:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var RegisterPage = /** @class */ (function () {
    function RegisterPage(navCtrl, alertCtrl, http, loading) {
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
        this.http = http;
        this.loading = loading;
    }
    RegisterPage.prototype.Register = function () {
        //// check to confirm the username, email, telephone and password fields are filled
        var _this = this;
        if (this.username.value == "") {
            var alert_1 = this.alertCtrl.create({
                title: "ATTENTION",
                subTitle: "Username field is empty",
                buttons: ['OK']
            });
            alert_1.present();
        }
        else if (this.email.value == "") {
            var alert_2 = this.alertCtrl.create({
                title: "ATTENTION",
                subTitle: "Email field is empty",
                buttons: ['OK']
            });
            alert_2.present();
        }
        else if (this.mobile.value == "") {
            var alert_3 = this.alertCtrl.create({
                title: "ATTENTION",
                subTitle: "Mobile number field is empty",
                buttons: ['OK']
            });
            alert_3.present();
        }
        else if (this.password.value == "") {
            var alert_4 = this.alertCtrl.create({
                title: "ATTENTION",
                subTitle: "Password field is empty",
                buttons: ['OK']
            });
            alert_4.present();
        }
        else {
            var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Headers */]();
            headers.append("Accept", 'application/json');
            headers.append('Content-Type', 'application/json');
            var options_1 = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["d" /* RequestOptions */]({ headers: headers });
            var data_1 = {
                username: this.username.value,
                password: this.password.value,
                mobile: this.mobile.value,
                email: this.email.value
            };
            var loader_1 = this.loading.create({
                content: 'Processing please wait...',
            });
            loader_1.present().then(function () {
                _this.http.post('http://127.0.0.1/ionicphp/register.php', data_1, options_1)
                    .map(function (res) { return res.json(); })
                    .subscribe(function (res) {
                    loader_1.dismiss();
                    if (res == "Registration successfull") {
                        var alert_5 = _this.alertCtrl.create({
                            title: "CONGRATS",
                            subTitle: (res),
                            buttons: ['OK']
                        });
                        alert_5.present();
                        _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__login_login__["a" /* LoginPage */]);
                    }
                    else {
                        var alert_6 = _this.alertCtrl.create({
                            title: "ERROR",
                            subTitle: (res),
                            buttons: ['OK']
                        });
                        alert_6.present();
                    }
                });
            });
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])("email"),
        __metadata("design:type", Object)
    ], RegisterPage.prototype, "email", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])("username"),
        __metadata("design:type", Object)
    ], RegisterPage.prototype, "username", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])("mobile"),
        __metadata("design:type", Object)
    ], RegisterPage.prototype, "mobile", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])("password"),
        __metadata("design:type", Object)
    ], RegisterPage.prototype, "password", void 0);
    RegisterPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-register',template:/*ion-inline-start:"C:\Users\Mohammed Farhan\Ionic\USP_ES-v7\src\pages\register\register.html"*/'<!--\n  Generated template for the RegisterPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n      <img src="assets/imgs/USP_logo.jpg" width="40px" style="display:inline-block" height="100px" width="180px"/>\n    <ion-title>register</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-list no-line>\n\n    <ion-item>\n      <ion-input type="text" placeholder="Username" name="fullname" #username></ion-input>\n    </ion-item>\n  \n      <ion-item>\n      <ion-input type="email" placeholder="Email" name="email" #email></ion-input>\n    </ion-item>\n  \n      <ion-item>\n      <ion-input type="number" placeholder="Mobile Number" name="mobile" #mobile></ion-input>\n    </ion-item>\n  \n    <ion-item>\n      <ion-input type="password" placeholder="Password" name="password" #password></ion-input>\n    </ion-item> \n  \n  </ion-list>\n \n  <div padding>\n  <button ion-button  round outline block (click)="Register()">Register</button>\n  </div>\n  \n  </ion-content>\n\n'/*ion-inline-end:"C:\Users\Mohammed Farhan\Ionic\USP_ES-v7\src\pages\register\register.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */]])
    ], RegisterPage);
    return RegisterPage;
}());

//# sourceMappingURL=register.js.map

/***/ }),

/***/ 19:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CoursesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__enroll_now_enroll_now__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__personal_details_personal_details__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__change_program_change_program__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__recheck_recheck__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__graduation_application_graduation_application__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__login_login__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_add_operator_map__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











/**
 * Generated class for the CoursesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
/**
 * Ionic page
 */
var CoursesPage = /** @class */ (function () {
    /**
     * Creates an instance of courses page.
     * @param navCtrl
     * @param alertCtrl
     * @param http
     * @param loading
     * @param navParams
     * @param menuCtrl
     */
    function CoursesPage(navCtrl, alertCtrl, http, loading, navParams, menuCtrl) {
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
        this.http = http;
        this.loading = loading;
        this.navParams = navParams;
        this.menuCtrl = menuCtrl;
        this.enrollement();
    }
    CoursesPage_1 = CoursesPage;
    /**
     * Courses page
     */
    CoursesPage.prototype.CoursesPage = function () {
        this.navCtrl.push(CoursesPage_1);
    };
    /**
     * Enrolls now page
     */
    CoursesPage.prototype.EnrollNowPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__enroll_now_enroll_now__["a" /* EnrollNowPage */]);
    };
    CoursesPage.prototype.ChangeProgramPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__change_program_change_program__["a" /* ChangeProgramPage */]);
    };
    CoursesPage.prototype.RecheckPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__recheck_recheck__["a" /* RecheckPage */]);
    };
    CoursesPage.prototype.GraduationApplicationPage = function () {
        var data = {
            username: this.username
        };
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__graduation_application_graduation_application__["a" /* GraduationApplicationPage */], data);
    };
    /**
     * Homes page
     */
    CoursesPage.prototype.HomePage = function () {
        this.navCtrl.popToRoot();
    };
    /**
     * Personals details page
     */
    CoursesPage.prototype.PersonalDetailsPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__personal_details_personal_details__["a" /* PersonalDetailsPage */]);
    };
    /**
     * Logins page
     */
    CoursesPage.prototype.LoginPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__login_login__["a" /* LoginPage */]);
    };
    /**
     * Ions view did enter
     */
    CoursesPage.prototype.ionViewDidEnter = function () {
        this.menuCtrl.enable(true, 'filters-4');
    };
    /**
     * Shows filters
     */
    CoursesPage.prototype.showFilters = function () {
        this.menuCtrl.open('filters-4');
    };
    /**
     * Hides filters
     */
    CoursesPage.prototype.hideFilters = function () {
        this.menuCtrl.close('filters-4');
    };
    /**
     * Ions view did load
     */
    CoursesPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CoursesPage');
    };
    /**
     * Enrollements courses page
     */
    //Course audit data from database is pulled using this function
    CoursesPage.prototype.enrollement = function () {
        var _this = this;
        this.username = this.navParams.get('username');
        this.program_name = this.navParams.get('program_name');
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append("Accept", 'application/json');
        headers.append('Content-Type', 'application/json');
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({
            headers: headers
        });
        //assigns variables and pushes data using studentID variabl through API
        var data = {
            username: this.username,
            program_name: this.program_name
        };
        var loader = this.loading.create({
            content: 'Processing please wait...',
        });
        loader.present().then(function () {
            _this.http.post('http://127.0.0.1/ionicphp/student_audit.php', data, options) //API call responsible for query
                .map(function (res) { return res.json(); })
                .subscribe(function (res) {
                loader.dismiss();
                _this.items = res.server_response; //assigns server response to items
                console.log(_this.items);
            });
        });
    };
    CoursesPage = CoursesPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-courses',template:/*ion-inline-start:"C:\Users\Mohammed Farhan\Ionic\USP_ES-v7\src\pages\courses\courses.html"*/'<!--\n  Generated template for the CoursesPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n      <img src="assets/imgs/USP_logo.jpg" width="40px" style="display:inline-block" height="100px" width="180px"/>\n    <ion-buttons end>\n      <button ion-button icon-only (click)="showFilters()">\n        <ion-icon name="funnel"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-menu [content]="content4" side="right" id="filters-4">\n  Menu\n  <ion-item>\n    <button  ion-button (click)="HomePage()">\n      Home\n    </button>\n  </ion-item>\n  <ion-item> \n      <button  ion-button (click)="hideFilters()">\n        Program Audit\n      </button>\n    </ion-item>\n    <ion-item>\n        <button  ion-button (click)="EnrollNowPage()">\n          Enroll Now\n        </button>\n      </ion-item>\n      <ion-item>\n        <button  ion-button (click)="PersonalDetailsPage()">\n          My Details\n        </button>\n      </ion-item>\n      <ion-item>\n        <button  ion-button (click)="ChangeProgramPage()">\n          Apply for Change Program\n        </button> \n      </ion-item>\n      <ion-item>\n        <button  ion-button (click)="RecheckPage()">\n          Apply for Recheck of Grades\n        </button>\n      </ion-item>\n      <ion-item>\n        <button  ion-button (click)="GraduationApplicationPage()">\n          Apply for Graduation\n        </button>\n      </ion-item>\n      <ion-item>\n          <button  ion-button (click)="LoginPage()">\n            Logout\n          </button>\n        </ion-item>\n</ion-menu>\n\n<!--Pulls student specific course details and displays it-->\n<ion-content padding #content4>\n\n  <h3> Course Audit </h3>\n  <!-- <div >\n <ion-item *ngFor = "let item of items">\n  <h5>Student ID :{{item.username}} </h5>\n</ion-item>\n</div> -->\n<div *ngFor = "let item of items">\n  <div class="row header" >\n    <div class="col col-1">Course code:</div>\n    <div class="col">{{item.course}} </div>\n  </div>\n  <div class="row header" >\n    <div class="col">Course Name:</div>\n    <div class="col">{{item.name}}</div>\n</div>\n<div class="row header" >\n    <div class="col">Course Status:</div>\n    <div class="col">{{item.status}}</div>\n  </div>\n  <div class="row header" >\n      <div class="col">Course grade:</div>\n      <div class="col">{{item.grade}} | <button  ion-button (click)="RecheckPage()">\n        Recheck\n      </button></div>\n    </div>\n</div>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Mohammed Farhan\Ionic\USP_ES-v7\src\pages\courses\courses.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* MenuController */]])
    ], CoursesPage);
    return CoursesPage;
    var CoursesPage_1;
}());

//# sourceMappingURL=courses.js.map

/***/ }),

/***/ 20:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EnrollNowPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__courses_courses__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__personal_details_personal_details__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__login_login__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__program_calender_program_calender__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__change_program_change_program__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__recheck_recheck__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__graduation_application_graduation_application__ = __webpack_require__(25);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












/**
 * Generated class for the EnrollNowPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
/**
 * Ionic page
 */
var EnrollNowPage = /** @class */ (function () {
    /**
     * Creates an instance of enroll now page.
     * @param navCtrl
     * @param alertCtrl
     * @param loading
     * @param navParams
     * @param http
     * @param menuCtrl
     */
    function EnrollNowPage(navCtrl, alertCtrl, loading, navParams, http, menuCtrl) {
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
        this.loading = loading;
        this.navParams = navParams;
        this.http = http;
        this.menuCtrl = menuCtrl;
        this.enrollement();
    }
    EnrollNowPage_1 = EnrollNowPage;
    EnrollNowPage.prototype.enrollement = function () {
        var _this = this;
        this.username = this.navParams.get('username');
        this.program_name = this.navParams.get('program_name');
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append("Accept", 'application/json');
        headers.append('Content-Type', 'application/json');
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({
            headers: headers
        });
        var data = {
            username: this.username,
            program_name: this.program_name
        };
        var loader = this.loading.create({
            content: 'Processing please wait...',
        });
        loader.present().then(function () {
            _this.http.post('http://127.0.0.1/ionicphp/course.php', data, options)
                .map(function (res) { return res.json(); })
                .subscribe(function (res) {
                loader.dismiss();
                _this.items = res.server_response;
                console.log(_this.items);
            });
        });
    };
    /**
     * Registers course
     * @param course_code
     * @param course_name
     */
    /**
     * Params enroll now page
     * @param course_code
     * @param course_name
     */
    EnrollNowPage.prototype.Register_course = function (course_code, course_name) {
        var _this = this;
        //assigns data to TS variables to enable student to register  
        this.username = this.navParams.get('username');
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append("Accept", 'application/json');
        headers.append('Content-Type', 'application/json');
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({ headers: headers });
        var data = {
            username: this.username,
            course_code: course_code,
            course_name: course_name
        };
        var loader = this.loading.create({
            content: 'Processing please wait...',
        });
        loader.present().then(function () {
            _this.http.post('http://127.0.0.1/ionicphp/course_register.php', data, options) //API call to register in courses
                .map(function (res) { return res.json(); })
                .subscribe(function (res) {
                loader.dismiss();
                if (res == "Successfully Enrolled") {
                    var alert_1 = _this.alertCtrl.create({
                        title: "Updated",
                        subTitle: (res),
                        buttons: ['OK']
                    });
                    alert_1.present();
                    _this.navCtrl.push(EnrollNowPage_1);
                }
                else {
                    var alert_2 = _this.alertCtrl.create({
                        title: "",
                        subTitle: (res),
                        buttons: ['OK']
                    });
                    alert_2.present();
                }
            });
        });
    };
    /**
     * Courses page
     */
    EnrollNowPage.prototype.CoursesPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__courses_courses__["a" /* CoursesPage */]);
    };
    /**
     * Programs calender page
     */
    EnrollNowPage.prototype.ProgramCalenderPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__program_calender_program_calender__["a" /* ProgramCalenderPage */]);
    };
    /**
     * Enrolls now page
     */
    EnrollNowPage.prototype.EnrollNowPage = function () {
        this.navCtrl.push(EnrollNowPage_1);
    };
    EnrollNowPage.prototype.ChangeProgramPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__change_program_change_program__["a" /* ChangeProgramPage */]);
    };
    EnrollNowPage.prototype.RecheckPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_9__recheck_recheck__["a" /* RecheckPage */]);
    };
    EnrollNowPage.prototype.GraduationApplicationPage = function () {
        var data = {
            username: this.username
        };
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_10__graduation_application_graduation_application__["a" /* GraduationApplicationPage */], data);
    };
    /**
     * Homes page
     */
    EnrollNowPage.prototype.HomePage = function () {
        this.navCtrl.popToRoot();
    };
    /**
     * Logins page
     */
    EnrollNowPage.prototype.LoginPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__login_login__["a" /* LoginPage */]);
    };
    /**
     * Personals details page
     */
    EnrollNowPage.prototype.PersonalDetailsPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__personal_details_personal_details__["a" /* PersonalDetailsPage */]);
    };
    /**
     * Ions view did enter
     */
    EnrollNowPage.prototype.ionViewDidEnter = function () {
        this.menuCtrl.enable(true, 'filters-4');
    };
    /**
     * Shows filters
     */
    EnrollNowPage.prototype.showFilters = function () {
        this.menuCtrl.open('filters-4');
    };
    /**
     * Hides filters
     */
    EnrollNowPage.prototype.hideFilters = function () {
        this.menuCtrl.close('filters-4');
    };
    /**
     * Ions view did load
     */
    EnrollNowPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad EnrollNowPage');
    };
    EnrollNowPage = EnrollNowPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-enroll-now',template:/*ion-inline-start:"C:\Users\Mohammed Farhan\Ionic\USP_ES-v7\src\pages\enroll-now\enroll-now.html"*/'<!--\n  Generated template for the EnrollNowPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n      <img src="assets/imgs/USP_logo.jpg" width="40px" style="display:inline-block" height="100px" width="180px"/>\n    <ion-buttons end>\n      <button ion-button icon-only (click)="showFilters()">\n        <ion-icon name="funnel"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header> \n\n<ion-menu [content]="content4" side="right" id="filters-4">\n  Menu\n  <ion-item>\n    <button  ion-button (click)="HomePage()">\n      Home\n    </button>\n  </ion-item>\n  <ion-item>\n      <button  ion-button (click)="CoursesPage()">\n        Program Audit\n      </button>\n    </ion-item>\n    <ion-item>\n        <button  ion-button (click)="hideFilters()">\n          Enroll Now\n        </button>\n      </ion-item>\n      <ion-item>\n        <button  ion-button (click)="PersonalDetailsPage()">\n          My Details\n        </button>\n      </ion-item>\n      <ion-item>\n        <button  ion-button (click)="ChangeProgramPage()">\n          Apply for Change Program\n        </button> \n      </ion-item>\n      <ion-item>\n        <button  ion-button (click)="RecheckPage()">\n          Apply for Recheck of Grades\n        </button>\n      </ion-item>\n      <ion-item>\n        <button  ion-button (click)="GraduationApplicationPage()">\n          Apply for Graduation\n        </button>\n      </ion-item>\n      <ion-item>\n          <button  ion-button (click)="LoginPage()">\n            Logout\n          </button>\n        </ion-item>\n</ion-menu>\n<!--Displays Enrolment Data -->\n<ion-content padding #content4>\n    <h2> Enrollment  </h2>\n    <div *ngFor = "let item of items" >\n    <div class="row header" >\n      <div class="col">Course code:</div>\n      <div class="col">{{item.course_code}}</div>\n    </div>\n    <div class="row header" >\n      <div class="col">Course Name:</div>\n      <div class="col">{{item.course_name}}</div>\n  </div>\n  <div class="row header" >\n      <div class="col">Semester Offered:</div>\n      <div class="col">{{item.sem_offered}}</div>\n    </div>\n    <div class="row header">\n        <a href="#" class="card-link" (click)="Register_course(item.course_code,item.course_name)">Enroll</a>\n    </div>\n  </div>\n  \n   \n    <!-- <div padding>\n        \n   <button ion-button  round outline block (click)="Register_course(item.course_code)">Enroll</button>\n    </div> --> \n\n</ion-content>\n'/*ion-inline-end:"C:\Users\Mohammed Farhan\Ionic\USP_ES-v7\src\pages\enroll-now\enroll-now.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* MenuController */]])
    ], EnrollNowPage);
    return EnrollNowPage;
    var EnrollNowPage_1;
}());

//# sourceMappingURL=enroll-now.js.map

/***/ }),

/***/ 21:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PersonalDetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__courses_courses__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__enroll_now_enroll_now__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__login_login__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__program_calender_program_calender__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__change_program_change_program__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__recheck_recheck__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__graduation_application_graduation_application__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_rxjs_add_operator_map__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












/**
 * Generated class for the PersonalDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
/**
 * Ionic page
 */
var PersonalDetailsPage = /** @class */ (function () {
    /**
     * Creates an instance of personal details page.
     * @param navCtrl
     * @param http
     * @param loading
     * @param navParams
     * @param menuCtrl
     */
    function PersonalDetailsPage(navCtrl, http, loading, navParams, menuCtrl) {
        this.navCtrl = navCtrl;
        this.http = http;
        this.loading = loading;
        this.navParams = navParams;
        this.menuCtrl = menuCtrl;
        this.csvData = [];
        this.headerRow = [];
    }
    PersonalDetailsPage_1 = PersonalDetailsPage;
    /**
     * Ions view did load
     */
    PersonalDetailsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PersonalDetailsPage');
    };
    /**
     * Ions view did enter
     */
    PersonalDetailsPage.prototype.ionViewDidEnter = function () {
        this.menuCtrl.enable(true, 'filters-4');
    };
    /**
     * Courses page
     */
    PersonalDetailsPage.prototype.CoursesPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__courses_courses__["a" /* CoursesPage */]);
    };
    /**
     * Programs calender page
     */
    PersonalDetailsPage.prototype.ProgramCalenderPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__program_calender_program_calender__["a" /* ProgramCalenderPage */]);
    };
    PersonalDetailsPage.prototype.ChangeProgramPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__change_program_change_program__["a" /* ChangeProgramPage */]);
    };
    PersonalDetailsPage.prototype.RecheckPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__recheck_recheck__["a" /* RecheckPage */]);
    };
    PersonalDetailsPage.prototype.GraduationApplicationPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_9__graduation_application_graduation_application__["a" /* GraduationApplicationPage */]);
    };
    /**
     * Enrolls now page
     */
    PersonalDetailsPage.prototype.EnrollNowPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__enroll_now_enroll_now__["a" /* EnrollNowPage */]);
    };
    /**
     * Homes page
     */
    PersonalDetailsPage.prototype.HomePage = function () {
        this.navCtrl.popToRoot();
    };
    /**
     * Personals details page
     */
    PersonalDetailsPage.prototype.PersonalDetailsPage = function () {
        this.navCtrl.push(PersonalDetailsPage_1);
    };
    PersonalDetailsPage.prototype.LoginPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__login_login__["a" /* LoginPage */]);
    };
    PersonalDetailsPage.prototype.showFilters = function () {
        this.menuCtrl.open('filters-4');
    };
    PersonalDetailsPage.prototype.hideFilters = function () {
        this.menuCtrl.close('filters-4');
    };
    PersonalDetailsPage.prototype.ngOnInit = function () {
        var _this = this;
        this.username = this.navParams.get('username');
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append("Accept", 'application/json');
        headers.append('Content-Type', 'application/json');
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({
            headers: headers
        });
        var data = {
            username: this.username,
        };
        var loader = this.loading.create({
            content: 'Processing please wait...',
        });
        loader.present().then(function () {
            _this.http.post('http://127.0.0.1/ionicphp/users_details.php', data, options)
                .map(function (res) { return res.json(); })
                .subscribe(function (res) {
                loader.dismiss();
                _this.items = res.server_response;
                console.log(_this.items);
            });
        });
    };
    PersonalDetailsPage = PersonalDetailsPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-personal-details',template:/*ion-inline-start:"C:\Users\Mohammed Farhan\Ionic\USP_ES-v7\src\pages\personal-details\personal-details.html"*/'<!--\n  Generated template for the PersonalDetailsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <img src="assets/imgs/USP_logo.jpg" width="40px" style="display:inline-block" height="80px" width="150px"/>\n  <ion-buttons end>\n    <button ion-button icon-only (click)="showFilters()">\n      <ion-icon name="funnel"></ion-icon>\n    </button>\n  </ion-buttons>\n</ion-navbar>\n</ion-header>\n\n\n<ion-menu [content]="content4" side="right" id="filters-4">\n    Menu\n    <ion-item>\n      <button  ion-button (click)="HomePage()">\n        Home\n      </button>\n    </ion-item>\n    <ion-item>\n        <button  ion-button (click)="CoursesPage()">\n          Program Audit\n        </button>\n      </ion-item>\n      <ion-item>\n          <button  ion-button (click)="EnrollNowPage()">\n            Enroll Now\n          </button>\n        </ion-item>\n        <ion-item>\n          <button  ion-button (click)="hideFilters()">\n            My Details\n          </button>\n        </ion-item>\n        <ion-item>\n          <button  ion-button (click)="ChangeProgramPage()">\n            Apply for Change Program\n          </button> \n        </ion-item>\n        <ion-item>\n          <button  ion-button (click)="RecheckPage()">\n            Apply for Recheck of Grades\n          </button>\n        </ion-item>\n        <ion-item>\n          <button  ion-button (click)="GraduationApplicationPage()">\n            Apply for Graduation\n          </button>\n        </ion-item>\n        <ion-item>\n            <button  ion-button (click)="LoginPage()">\n              Logout\n            </button>\n          </ion-item>\n  </ion-menu>\n  \n  <ion-content padding #content4>\n      <div class="row header" *ngFor = "let item of items">\n        <div class="col">Student ID</div>\n        <div class="col">{{item.username}}</div>\n      </div>\n      <div class="row header" *ngFor = "let item of items">\n        <div class="col">Name :</div>\n        <div class="col">{{item.name}}</div>\n    </div>\n    <div class="row header" *ngFor = "let item of items">\n        <div class="col">Email Address :</div>\n        <div class="col">{{item.email}}</div>\n      </div>\n      <div class="row header" *ngFor = "let item of items">\n          <div class="col">Role :</div>\n          <div class="col">{{item.role}}</div>\n      </div>\n      <div class="row header" *ngFor = "let item of items">\n          <div class="col">DOB :</div>\n          <div class="col">{{item.DOB}}</div>\n      </div>\n      <div class="row header" *ngFor = "let item of items">\n          <div class="col">Gender :</div>\n          <div class="col">{{item.gender}}</div>\n      </div>\n      <div class="row header" *ngFor = "let item of items">\n          <div class="col">Citizenship :</div>\n          <div class="col">{{item.citizenship}}</div>\n      </div>\n      <div class="row header" *ngFor = "let item of items">\n          <div class="col">Campus :</div>\n          <div class="col">{{item.campus}}</div>\n      </div>\n      <div class="row header" *ngFor = "let item of items">\n          <div class="col">Program Enrolled In </div>\n          <div class="col">{{item.program_name}}</div>\n      </div>\n      <div class="row header" *ngFor = "let item of items">\n          <div class="col">Year You Started Your Program :</div>\n          <div class="col">{{item.year_joined}}</div>\n      </div>\n      <div class="row header" *ngFor = "let item of items">\n          <div class="col">Major Type :</div>\n          <div class="col">{{item.major_type}}</div>\n      </div>\n      <div class="row header" *ngFor = "let item of items">\n          <div class="col">Major One :</div>\n          <div class="col">{{item.major_one}}</div>\n      </div>\n      <div class="row header" *ngFor = "let item of items">\n          <div class="col">Major Two :</div>\n          <div class="col">{{item.major_two}}</div>\n      </div>\n      <div class="row header" *ngFor = "let item of items">\n          <div class="col">Minor One :</div>\n          <div class="col">{{item.minor_one}}</div>\n      </div>\n      <div class="row header" *ngFor = "let item of items">\n          <div class="col">Minor Two :</div>\n          <div class="col">{{item.minor_two}}</div>\n      </div>\n      <div class="row header" *ngFor = "let item of items">\n          <div class="col">Your Account Status :</div>\n          <div class="col">{{item.status}}</div>\n      </div>\n</ion-content>\n\n\n\n'/*ion-inline-end:"C:\Users\Mohammed Farhan\Ionic\USP_ES-v7\src\pages\personal-details\personal-details.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* MenuController */]])
    ], PersonalDetailsPage);
    return PersonalDetailsPage;
    var PersonalDetailsPage_1;
}());

//# sourceMappingURL=personal-details.js.map

/***/ }),

/***/ 22:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProgramCalenderPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__enroll_now_enroll_now__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__personal_details_personal_details__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__courses_courses__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__login_login__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_http__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_file_transfer_ngx__ = __webpack_require__(169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_map__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









/**
 * Generated class for the ProgramCalenderPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
/**
 * Ionic page
 */
var ProgramCalenderPage = /** @class */ (function () {
    /**
     * Creates an instance of program calender page.
     * @param navCtrl
     * @param loadingCtrl
     * @param toastCtrl
     * @param http
     * @param navParams
     * @param menuCtrl
     * @param transfer
     */
    function ProgramCalenderPage(navCtrl, loadingCtrl, toastCtrl, http, navParams, menuCtrl, transfer) {
        // this.writeCsvData();
        this.navCtrl = navCtrl;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.http = http;
        this.navParams = navParams;
        this.menuCtrl = menuCtrl;
        this.transfer = transfer;
        this.csvData = [];
        this.headerRow = [];
    }
    ProgramCalenderPage_1 = ProgramCalenderPage;
    /**
     * Csvuploads program calender page
     */
    ProgramCalenderPage.prototype.CSVUpload = function () {
        window.location.href = 'http://127.0.0.1/csv/';
    };
    /* writeCsvData() {
      
      
        let data = this.extractData;
  
        var headers = new Headers();
        headers.append("Accept", 'application/json');
        headers.append('Content-Type', 'application/json' );
        let options = new RequestOptions({ headers: headers });
    
     
        this.http.post('http://127.0.0.1:8080/ionicphp/program_calender.php',data, options)
        .map(res => res.json())
        .subscribe(
    
        );
  }
    
  
    extractData(res){
      let csvData = res['_body'] || '';
      let parsedData = papa.parse(csvData).data;
  
      this.headerRow = parsedData[0];
      
      parsedData.splice(0, 1);
      this.csvData = parsedData;
  
    } */
    /**
     * Courses page
     */
    ProgramCalenderPage.prototype.CoursesPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__courses_courses__["a" /* CoursesPage */]);
    };
    /**
     * Programs calender page
     */
    ProgramCalenderPage.prototype.ProgramCalenderPage = function () {
        this.navCtrl.push(ProgramCalenderPage_1);
    };
    /**
     * Enrolls now page
     */
    ProgramCalenderPage.prototype.EnrollNowPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__enroll_now_enroll_now__["a" /* EnrollNowPage */]);
    };
    /**
     * Homes page
     */
    ProgramCalenderPage.prototype.HomePage = function () {
        this.navCtrl.popToRoot();
    };
    /**
     * Personals details page
     */
    ProgramCalenderPage.prototype.PersonalDetailsPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__personal_details_personal_details__["a" /* PersonalDetailsPage */]);
    };
    /**
     * Logins page
     */
    ProgramCalenderPage.prototype.LoginPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__login_login__["a" /* LoginPage */]);
    };
    /**
     * Ions view did enter
     */
    ProgramCalenderPage.prototype.ionViewDidEnter = function () {
        this.menuCtrl.enable(true, 'filters-5');
    };
    /**
     * Shows filters
     */
    ProgramCalenderPage.prototype.showFilters = function () {
        this.menuCtrl.open('filters-5');
    };
    /**
     * Hides filters
     */
    ProgramCalenderPage.prototype.hideFilters = function () {
        this.menuCtrl.close('filters-5');
    };
    /**
     * Ions view did load
     */
    ProgramCalenderPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CoursesPage');
    };
    ProgramCalenderPage = ProgramCalenderPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-program-calender',template:/*ion-inline-start:"C:\Users\Mohammed Farhan\Ionic\USP_ES-v7\src\pages\program-calender\program-calender.html"*/'<ion-header>\n\n    <ion-navbar>\n      <img src="assets/imgs/USP_logo.jpg" width="40px" style="display:inline-block" height="80px" width="150px"/>\n      <ion-buttons end>\n        <button ion-button icon-only (click)="showFilters()">\n          <ion-icon name="funnel"></ion-icon>\n        </button>\n      </ion-buttons>\n    </ion-navbar>\n  </ion-header>\n  \n  \n    <ion-menu [content]="content1" side="left" id="filters-5">\n        Menu\n        <ion-item>\n          <button  ion-button (click)="hideFilters()">\n            Home\n          </button>\n        </ion-item>\n        <ion-item>\n            <button  ion-button (click)="CoursesPage()">\n              Program Audit\n            </button>\n          </ion-item>\n          <ion-item>\n              <button  ion-button (click)="EnrollNowPage()">\n                Enroll Now\n              </button>\n            </ion-item>\n            <ion-item>\n              <button  ion-button (click)="hideFilters()">\n                My Details\n              </button>\n            </ion-item>\n                <ion-item>\n                    <button  ion-button (click)="ProgramCalenderPage()">\n                      Program Calender\n                    </button>\n                  </ion-item>\n                  <ion-item>\n                    <button  ion-button (click)="ChangeProgramPage()">\n                      Apply for Change Program\n                    </button> \n                  </ion-item>\n                  <ion-item>\n                    <button  ion-button (click)="RecheckPage()">\n                      Apply for Recheck of Grades\n                    </button>\n                  </ion-item>\n                  <ion-item>\n                    <button  ion-button (click)="GraduationApplicationPage()">\n                      Apply for Graduation\n                    </button>\n                  </ion-item>\n                  <ion-item>\n                <button  ion-button (click)="LoginPage()">\n                  Logout\n                </button>\n              </ion-item>\n      </ion-menu>\n  \n    <ion-content padding #content1>\n      <ion-item *ngFor = "let item of items">\n  \n      <h2> {{item.username}}  </h2>\n    </ion-item>\n<!-- \n    <label class="myFakeUploadButton" for="writeCsvData">Upload</label>\n    <input type="file" id="myFileInput"> -->\n    \n    <button  ion-button (click)="CSVUpload()">\n        Upload CSV\n      </button>\n  </ion-content>\n  '/*ion-inline-end:"C:\Users\Mohammed Farhan\Ionic\USP_ES-v7\src\pages\program-calender\program-calender.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */], __WEBPACK_IMPORTED_MODULE_6__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* MenuController */], __WEBPACK_IMPORTED_MODULE_7__ionic_native_file_transfer_ngx__["a" /* FileTransfer */]])
    ], ProgramCalenderPage);
    return ProgramCalenderPage;
    var ProgramCalenderPage_1;
}());

//# sourceMappingURL=program-calender.js.map

/***/ }),

/***/ 23:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChangeProgramPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__courses_courses__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__enroll_now_enroll_now__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__personal_details_personal_details__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__login_login__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__program_calender_program_calender__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__my_program_my_program__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__recheck_recheck__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__graduation_application_graduation_application__ = __webpack_require__(25);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












/**
 * Generated class for the ChangeProgramPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ChangeProgramPage = /** @class */ (function () {
    function ChangeProgramPage(navCtrl, navParams, http, loading, menuCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.loading = loading;
        this.menuCtrl = menuCtrl;
    }
    ChangeProgramPage_1 = ChangeProgramPage;
    ChangeProgramPage.prototype.ionViewDidEnter = function () {
        this.menuCtrl.enable(true, 'filters-9');
    };
    /**
     * Courses page
     */
    ChangeProgramPage.prototype.CoursesPage = function () {
        var data = {
            username: this.username
        };
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__courses_courses__["a" /* CoursesPage */], data);
    };
    /**
     * Programs calender page
     */
    ChangeProgramPage.prototype.ProgramCalenderPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__program_calender_program_calender__["a" /* ProgramCalenderPage */]);
    };
    ChangeProgramPage.prototype.ChangeProgramPage = function () {
        this.navCtrl.push(ChangeProgramPage_1);
    };
    ChangeProgramPage.prototype.RecheckPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_9__recheck_recheck__["a" /* RecheckPage */]);
    };
    ChangeProgramPage.prototype.GraduationApplicationPage = function () {
        var data = {
            username: this.username
        };
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_10__graduation_application_graduation_application__["a" /* GraduationApplicationPage */], data);
    };
    /**
     * program page
     */
    ChangeProgramPage.prototype.MyProgramPage = function () {
        var data = {
            username: this.username
        };
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__my_program_my_program__["a" /* MyProgramPage */], data);
    };
    /**
     * Enrolls now page
     */
    ChangeProgramPage.prototype.EnrollNowPage = function () {
        var data = {
            username: this.username
        };
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__enroll_now_enroll_now__["a" /* EnrollNowPage */], data);
    };
    /**
     * Homes page
     */
    ChangeProgramPage.prototype.HomePage = function () {
        this.navCtrl.popToRoot();
    };
    /**
     * Personals details page
     */
    ChangeProgramPage.prototype.PersonalDetailsPage = function () {
        var data = {
            username: this.username
        };
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__personal_details_personal_details__["a" /* PersonalDetailsPage */], data);
    };
    /**
     * Logins page
     */
    ChangeProgramPage.prototype.LoginPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__login_login__["a" /* LoginPage */]);
    };
    /**
     * Shows filters
     */
    ChangeProgramPage.prototype.showFilters = function () {
        this.menuCtrl.open('filters-9');
    };
    /**
     * Hides filters
     */
    ChangeProgramPage.prototype.hideFilters = function () {
        this.menuCtrl.close('filters-9');
    };
    /**
     * Ions view did load
     */
    ChangeProgramPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ChangeProgramPage');
    };
    ChangeProgramPage = ChangeProgramPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-change-program',template:/*ion-inline-start:"C:\Users\Mohammed Farhan\Ionic\USP_ES-v7\src\pages\change-program\change-program.html"*/'<!--\n  Generated template for the ChangeProgramPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <img src="assets/imgs/USP_logo.jpg" width="40px" style="display:inline-block" height="80px" width="150px"/>\n    <ion-buttons end>\n      <button ion-button icon-only (click)="showFilters()">\n        <ion-icon name="funnel"></ion-icon> \n      </button>\n    </ion-buttons>\n  </ion-navbar>  \n\n</ion-header>\n\n<ion-menu [content]="content9" side="right" id="filters-9">\n  Menu\n  <ion-item>\n    <button  ion-button (click)="HomePage()">\n      Home\n    </button>\n  </ion-item>\n  <ion-item>\n      <button  ion-button (click)="CoursesPage()">\n        Program Audit\n      </button>\n    </ion-item>\n    <ion-item>\n        <button  ion-button (click)="EnrollNowPage()"> \n          Enroll Now\n        </button>\n      </ion-item>\n      <ion-item>\n        <button  ion-button (click)="PersonalDetailsPage()">\n          My Details\n        </button>\n      </ion-item>\n          <ion-item>\n              <button  ion-button (click)="MyProgramPage()">\n                My Program\n              </button>\n            </ion-item>\n            <ion-item>\n              <button  ion-button (click)="hideFilters()">\n                Apply for Change Program\n              </button> \n            </ion-item>\n            <ion-item>\n              <button  ion-button (click)="RecheckPage()">\n                Apply for Recheck of Grades\n              </button>\n            </ion-item>\n            <ion-item>\n              <button  ion-button (click)="GraduationApplicationPage()">\n                Apply for Graduation\n              </button>\n            </ion-item>\n          <ion-item>\n          <button  ion-button (click)="LoginPage()">\n            Logout\n          </button>\n        </ion-item>\n</ion-menu>\n\n<ion-content padding #content9>\n\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\Mohammed Farhan\Ionic\USP_ES-v7\src\pages\change-program\change-program.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* MenuController */]])
    ], ChangeProgramPage);
    return ChangeProgramPage;
    var ChangeProgramPage_1;
}());

//# sourceMappingURL=change-program.js.map

/***/ }),

/***/ 24:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RecheckPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__courses_courses__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__enroll_now_enroll_now__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__personal_details_personal_details__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__login_login__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__program_calender_program_calender__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__my_program_my_program__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__change_program_change_program__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__graduation_application_graduation_application__ = __webpack_require__(25);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












/**
 * Generated class for the RecheckPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var RecheckPage = /** @class */ (function () {
    function RecheckPage(navCtrl, navParams, http, loading, menuCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.loading = loading;
        this.menuCtrl = menuCtrl;
    }
    RecheckPage_1 = RecheckPage;
    RecheckPage.prototype.ionViewDidEnter = function () {
        this.menuCtrl.enable(true, 'filters-10');
    };
    /**
     * Courses page
     */
    RecheckPage.prototype.CoursesPage = function () {
        var data = {
            username: this.username
        };
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__courses_courses__["a" /* CoursesPage */], data);
    };
    /**
     * Programs calender page
     */
    RecheckPage.prototype.ProgramCalenderPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__program_calender_program_calender__["a" /* ProgramCalenderPage */]);
    };
    RecheckPage.prototype.ChangeProgramPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_9__change_program_change_program__["a" /* ChangeProgramPage */]);
    };
    RecheckPage.prototype.RecheckPage = function () {
        this.navCtrl.push(RecheckPage_1);
    };
    RecheckPage.prototype.GraduationApplicationPage = function () {
        var data = {
            username: this.username
        };
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_10__graduation_application_graduation_application__["a" /* GraduationApplicationPage */], data);
    };
    /**
     * program page
     */
    RecheckPage.prototype.MyProgramPage = function () {
        var data = {
            username: this.username
        };
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__my_program_my_program__["a" /* MyProgramPage */], data);
    };
    /**
     * Enrolls now page
     */
    RecheckPage.prototype.EnrollNowPage = function () {
        var data = {
            username: this.username
        };
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__enroll_now_enroll_now__["a" /* EnrollNowPage */], data);
    };
    /**
     * Homes page
     */
    RecheckPage.prototype.HomePage = function () {
        this.navCtrl.popToRoot();
    };
    /**
     * Personals details page
     */
    RecheckPage.prototype.PersonalDetailsPage = function () {
        var data = {
            username: this.username
        };
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__personal_details_personal_details__["a" /* PersonalDetailsPage */], data);
    };
    /**
     * Logins page
     */
    RecheckPage.prototype.LoginPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__login_login__["a" /* LoginPage */]);
    };
    /**
     * Shows filters
     */
    RecheckPage.prototype.showFilters = function () {
        this.menuCtrl.open('filters-10');
    };
    /**
     * Hides filters
     */
    RecheckPage.prototype.hideFilters = function () {
        this.menuCtrl.close('filters-10');
    };
    RecheckPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad RecheckPage');
    };
    RecheckPage = RecheckPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-recheck',template:/*ion-inline-start:"C:\Users\Mohammed Farhan\Ionic\USP_ES-v7\src\pages\recheck\recheck.html"*/'<ion-header>\n\n  <ion-navbar>\n    <img src="assets/imgs/USP_logo.jpg" width="40px" style="display:inline-block" height="80px" width="150px"/>\n    <ion-buttons end>\n      <button ion-button icon-only (click)="showFilters()">\n        <ion-icon name="funnel"></ion-icon> \n      </button>\n    </ion-buttons>\n  </ion-navbar>  \n\n</ion-header>\n\n<ion-menu [content]="content10" side="right" id="filters-10">\n  Menu\n  <ion-item>\n    <button  ion-button (click)="HomePage()">\n      Home\n    </button>\n  </ion-item>\n  <ion-item>\n      <button  ion-button (click)="CoursesPage()">\n        Program Audit\n      </button>\n    </ion-item>\n    <ion-item>\n        <button  ion-button (click)="EnrollNowPage()"> \n          Enroll Now\n        </button>\n      </ion-item>\n      <ion-item>\n        <button  ion-button (click)="PersonalDetailsPage()">\n          My Details\n        </button>\n      </ion-item>\n          <ion-item>\n              <button  ion-button (click)="MyProgramPage()">\n                My Program\n              </button>\n            </ion-item>\n            <ion-item>\n              <button  ion-button (click)="ChangeProgramPage()">\n                Apply for Change Program\n              </button> \n            </ion-item>\n            <ion-item>\n              <button  ion-button (click)="hideFilters()">\n                Apply for Recheck of Grades\n              </button>\n            </ion-item>\n            <ion-item>\n              <button  ion-button (click)="GraduationApplicationPage()">\n                Apply for Graduation\n              </button>\n            </ion-item>\n          <ion-item>\n          <button  ion-button (click)="LoginPage()">\n            Logout\n          </button>\n        </ion-item>\n</ion-menu>\n\n<ion-content padding #content10>\n\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\Mohammed Farhan\Ionic\USP_ES-v7\src\pages\recheck\recheck.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* MenuController */]])
    ], RecheckPage);
    return RecheckPage;
    var RecheckPage_1;
}());

//# sourceMappingURL=recheck.js.map

/***/ }),

/***/ 25:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GraduationApplicationPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__courses_courses__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__enroll_now_enroll_now__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__personal_details_personal_details__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__login_login__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__program_calender_program_calender__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__my_program_my_program__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__change_program_change_program__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__recheck_recheck__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_rxjs_add_operator_map__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};













/**
 * Generated class for the GraduationApplicationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var GraduationApplicationPage = /** @class */ (function () {
    function GraduationApplicationPage(navCtrl, navParams, alertCtrl, http, loading, menuCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.http = http;
        this.loading = loading;
        this.menuCtrl = menuCtrl;
    }
    GraduationApplicationPage_1 = GraduationApplicationPage;
    /**
     * Ions view did enter
     */
    GraduationApplicationPage.prototype.ionViewDidEnter = function () {
        this.menuCtrl.enable(true, 'filters-8');
    };
    /**
     * Courses page
     */
    GraduationApplicationPage.prototype.CoursesPage = function () {
        var data = {
            username: this.username
        };
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__courses_courses__["a" /* CoursesPage */], data);
    };
    /**
     * Programs calender page
     */
    GraduationApplicationPage.prototype.ProgramCalenderPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__program_calender_program_calender__["a" /* ProgramCalenderPage */]);
    };
    GraduationApplicationPage.prototype.ChangeProgramPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_9__change_program_change_program__["a" /* ChangeProgramPage */]);
    };
    GraduationApplicationPage.prototype.RecheckPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_10__recheck_recheck__["a" /* RecheckPage */]);
    };
    GraduationApplicationPage.prototype.GraduationApplicationPage = function () {
        this.navCtrl.push(GraduationApplicationPage_1);
    };
    /**
     * program page
     */
    GraduationApplicationPage.prototype.MyProgramPage = function () {
        var data = {
            username: this.username
        };
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__my_program_my_program__["a" /* MyProgramPage */], data);
    };
    /**
     * Enrolls now page
     */
    GraduationApplicationPage.prototype.EnrollNowPage = function () {
        var data = {
            username: this.username
        };
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__enroll_now_enroll_now__["a" /* EnrollNowPage */], data);
    };
    /**
     * Homes page
     */
    GraduationApplicationPage.prototype.HomePage = function () {
        this.navCtrl.popToRoot();
    };
    /**
     * Personals details page
     */
    GraduationApplicationPage.prototype.PersonalDetailsPage = function () {
        var data = {
            username: this.username
        };
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__personal_details_personal_details__["a" /* PersonalDetailsPage */], data);
    };
    /**
     * Logins page
     */
    GraduationApplicationPage.prototype.LoginPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__login_login__["a" /* LoginPage */]);
    };
    /**
     * Shows filters
     */
    GraduationApplicationPage.prototype.showFilters = function () {
        this.menuCtrl.open('filters-8');
    };
    /**
     * Hides filters
     */
    GraduationApplicationPage.prototype.hideFilters = function () {
        this.menuCtrl.close('filters-8');
    };
    /**
     * Ions view did load
     */
    GraduationApplicationPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad HomePage');
    };
    GraduationApplicationPage.prototype.Submit = function () {
        //// check to confirm the username, email, telephone and password fields are filled
        var _this = this;
        if (this.appname.value == "") {
            var alert_1 = this.alertCtrl.create({
                title: "ATTENTION",
                subTitle: "Application name field is empty",
                buttons: ['OK']
            });
            alert_1.present();
        }
        else if (this.options.value == "") {
            var alert_2 = this.alertCtrl.create({
                title: "ATTENTION",
                subTitle: "Options field is empty",
                buttons: ['OK']
            });
            alert_2.present();
        }
        else if (this.program.value == "") {
            var alert_3 = this.alertCtrl.create({
                title: "ATTENTION",
                subTitle: "Program field is empty",
                buttons: ['OK']
            });
            alert_3.present();
        }
        else if (this.yearjoined.value == "") {
            var alert_4 = this.alertCtrl.create({
                title: "ATTENTION",
                subTitle: "Year Joined field is empty",
                buttons: ['OK']
            });
            alert_4.present();
        }
        else if (this.reason.value == "") {
            var alert_5 = this.alertCtrl.create({
                title: "ATTENTION",
                subTitle: " Reason field is empty",
                buttons: ['OK']
            });
            alert_5.present();
        }
        else {
            var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
            headers.append("Accept", 'application/json');
            headers.append('Content-Type', 'application/json');
            var options_1 = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({ headers: headers });
            var data_1 = {
                username: this.navParams.get('username'),
                appname: this.appname.value,
                program: this.program.value,
                yearjoined: this.yearjoined.value,
                options: this.options.value,
                reason: this.reason.value,
            };
            var loader_1 = this.loading.create({
                content: 'Processing please wait...',
            });
            loader_1.present().then(function () {
                _this.http.post('http://127.0.0.1/ionicphp/insert_data.php', data_1, options_1)
                    .map(function (res) { return res.json(); })
                    .subscribe(function (res) {
                    loader_1.dismiss();
                    if (res == "Application Submitted") {
                        var alert_6 = _this.alertCtrl.create({
                            title: "CONGRATS",
                            subTitle: (res),
                            buttons: ['OK']
                        });
                        alert_6.present();
                        _this.navCtrl.push(GraduationApplicationPage_1);
                    }
                    else {
                        var alert_7 = _this.alertCtrl.create({
                            title: "ERROR",
                            subTitle: (res),
                            buttons: ['OK']
                        });
                        alert_7.present();
                    }
                });
            });
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])("appname"),
        __metadata("design:type", Object)
    ], GraduationApplicationPage.prototype, "appname", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])("program"),
        __metadata("design:type", Object)
    ], GraduationApplicationPage.prototype, "program", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])("yearjoined"),
        __metadata("design:type", Object)
    ], GraduationApplicationPage.prototype, "yearjoined", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])("options"),
        __metadata("design:type", Object)
    ], GraduationApplicationPage.prototype, "options", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])("options"),
        __metadata("design:type", Object)
    ], GraduationApplicationPage.prototype, "reason", void 0);
    GraduationApplicationPage = GraduationApplicationPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-graduation-application',template:/*ion-inline-start:"C:\Users\Mohammed Farhan\Ionic\USP_ES-v7\src\pages\graduation-application\graduation-application.html"*/'<!--\n  Generated template for the GraduationApplicationPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <img src="assets/imgs/USP_logo.jpg" width="40px" style="display:inline-block" height="80px" width="150px"/>\n    <ion-buttons end>\n      <button ion-button icon-only (click)="showFilters()">\n        <ion-icon name="funnel"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-menu [content]="content8" side="right" id="filters-8">\n  Menu\n  <ion-item>\n    <button  ion-button (click)="HomePage()">\n      Home\n    </button>\n  </ion-item>\n  <ion-item>\n      <button  ion-button (click)="CoursesPage()">\n        Program Audit\n      </button>\n    </ion-item> \n    <ion-item>\n        <button  ion-button (click)="EnrollNowPage()">\n          Enroll Now\n        </button>\n      </ion-item>\n      <ion-item>\n        <button  ion-button (click)="PersonalDetailsPage()">\n          My Details\n        </button>\n      </ion-item>\n          <ion-item>\n              <button  ion-button (click)="MyProgramPage()">\n                My Program\n              </button>\n            </ion-item>\n            <ion-item>\n              <button  ion-button (click)="ChangeProgramPage()">\n                Apply for Change Program\n              </button> \n            </ion-item>\n            <ion-item>\n              <button  ion-button (click)="RecheckPage()">\n                Apply for Recheck of Grades\n              </button>\n            </ion-item>\n            <ion-item>\n              <button  ion-button (click)="hideFilters()">\n                Apply for Graduation\n              </button>\n            </ion-item>\n          <ion-item>\n          <button  ion-button (click)="LoginPage()">\n            Logout\n          </button>\n        </ion-item>\n</ion-menu>\n\n<ion-content padding #content8>\n\n    <ion-list no-lines>\n        <ion-item  >\n          <ion-input  round type="text"  placeholder="Applicants Name" name="appname" #appname></ion-input>\n        </ion-item>\n\n        <ion-item  >\n          <ion-input  round type="text" placeholder="Application for" name="options" #options></ion-input>\n        </ion-item>\n\n        <ion-item  >\n            <ion-input  round type="text" placeholder="Program" name="program" #program></ion-input>\n          </ion-item>\n        \n          <ion-item  >\n              <ion-input  round type="text" placeholder="Year Joined" name="yearjoined" #yearjoined></ion-input>\n            </ion-item>\n\n            <ion-item >\n                <ion-input round type="text" placeholder="Reason" name="reason" #reason></ion-input>\n            </ion-item>\n          \n            <button ion-button (click)="Submit()"> Send For Approval </button>\n\n    </ion-list>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\Mohammed Farhan\Ionic\USP_ES-v7\src\pages\graduation-application\graduation-application.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* MenuController */]])
    ], GraduationApplicationPage);
    return GraduationApplicationPage;
    var GraduationApplicationPage_1;
}());

//# sourceMappingURL=graduation-application.js.map

/***/ }),

/***/ 341:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(342);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(362);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 362:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(337);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(338);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common_http__ = __webpack_require__(339);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_http__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_storage__ = __webpack_require__(419);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_component__ = __webpack_require__(421);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_login_login__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_register_register__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_courses_courses__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_home_home__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_enroll_now_enroll_now__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_personal_details_personal_details__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_my_program_my_program__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_admin_admin__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_change_program_change_program__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_recheck_recheck__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_graduation_application_graduation_application__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_tabs_tabs__ = __webpack_require__(422);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_program_calender_program_calender__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__ionic_native_file_transfer_ngx__ = __webpack_require__(169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__providers_auth_service_auth_service__ = __webpack_require__(423);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
























var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_9__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_register_register__["a" /* RegisterPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_courses_courses__["a" /* CoursesPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_enroll_now_enroll_now__["a" /* EnrollNowPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_personal_details_personal_details__["a" /* PersonalDetailsPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_program_calender_program_calender__["a" /* ProgramCalenderPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_my_program_my_program__["a" /* MyProgramPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_admin_admin__["a" /* AdminPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_change_program_change_program__["a" /* ChangeProgramPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_recheck_recheck__["a" /* RecheckPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_graduation_application_graduation_application__["a" /* GraduationApplicationPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/admin/admin.module#AdminPageModule', name: 'AdminPage', segment: 'admin', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/change-program/change-program.module#ChangeProgramPageModule', name: 'ChangeProgramPage', segment: 'change-program', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/courses/courses.module#CoursesPageModule', name: 'CoursesPage', segment: 'courses', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/enroll-now/enroll-now.module#EnrollNowPageModule', name: 'EnrollNowPage', segment: 'enroll-now', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/graduation-application/graduation-application.module#GraduationApplicationPageModule', name: 'GraduationApplicationPage', segment: 'graduation-application', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/home/home.module#HomePageModule', name: 'HomePage', segment: 'home', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/my-program/my-program.module#MyProgramPageModule', name: 'MyProgramPage', segment: 'my-program', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/personal-details/personal-details.module#PersonalDetailsPageModule', name: 'PersonalDetailsPage', segment: 'personal-details', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/program-calender/program-calender.module#ProgramCalenderPageModule', name: 'ProgramCalenderPage', segment: 'program-calender', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/recheck/recheck.module#RecheckPageModule', name: 'RecheckPage', segment: 'recheck', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_7__ionic_storage__["a" /* IonicStorageModule */].forRoot()
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_9__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_register_register__["a" /* RegisterPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_courses_courses__["a" /* CoursesPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_enroll_now_enroll_now__["a" /* EnrollNowPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_personal_details_personal_details__["a" /* PersonalDetailsPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_program_calender_program_calender__["a" /* ProgramCalenderPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_my_program_my_program__["a" /* MyProgramPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_admin_admin__["a" /* AdminPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_change_program_change_program__["a" /* ChangeProgramPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_recheck_recheck__["a" /* RecheckPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_graduation_application_graduation_application__["a" /* GraduationApplicationPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_22__ionic_native_file_transfer_ngx__["a" /* FileTransfer */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_23__providers_auth_service_auth_service__["a" /* AuthServiceProvider */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_23__providers_auth_service_auth_service__["a" /* AuthServiceProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 396:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 171,
	"./af.js": 171,
	"./ar": 172,
	"./ar-dz": 173,
	"./ar-dz.js": 173,
	"./ar-kw": 174,
	"./ar-kw.js": 174,
	"./ar-ly": 175,
	"./ar-ly.js": 175,
	"./ar-ma": 176,
	"./ar-ma.js": 176,
	"./ar-sa": 177,
	"./ar-sa.js": 177,
	"./ar-tn": 178,
	"./ar-tn.js": 178,
	"./ar.js": 172,
	"./az": 179,
	"./az.js": 179,
	"./be": 180,
	"./be.js": 180,
	"./bg": 181,
	"./bg.js": 181,
	"./bm": 182,
	"./bm.js": 182,
	"./bn": 183,
	"./bn.js": 183,
	"./bo": 184,
	"./bo.js": 184,
	"./br": 185,
	"./br.js": 185,
	"./bs": 186,
	"./bs.js": 186,
	"./ca": 187,
	"./ca.js": 187,
	"./cs": 188,
	"./cs.js": 188,
	"./cv": 189,
	"./cv.js": 189,
	"./cy": 190,
	"./cy.js": 190,
	"./da": 191,
	"./da.js": 191,
	"./de": 192,
	"./de-at": 193,
	"./de-at.js": 193,
	"./de-ch": 194,
	"./de-ch.js": 194,
	"./de.js": 192,
	"./dv": 195,
	"./dv.js": 195,
	"./el": 196,
	"./el.js": 196,
	"./en-SG": 197,
	"./en-SG.js": 197,
	"./en-au": 198,
	"./en-au.js": 198,
	"./en-ca": 199,
	"./en-ca.js": 199,
	"./en-gb": 200,
	"./en-gb.js": 200,
	"./en-ie": 201,
	"./en-ie.js": 201,
	"./en-il": 202,
	"./en-il.js": 202,
	"./en-nz": 203,
	"./en-nz.js": 203,
	"./eo": 204,
	"./eo.js": 204,
	"./es": 205,
	"./es-do": 206,
	"./es-do.js": 206,
	"./es-us": 207,
	"./es-us.js": 207,
	"./es.js": 205,
	"./et": 208,
	"./et.js": 208,
	"./eu": 209,
	"./eu.js": 209,
	"./fa": 210,
	"./fa.js": 210,
	"./fi": 211,
	"./fi.js": 211,
	"./fo": 212,
	"./fo.js": 212,
	"./fr": 213,
	"./fr-ca": 214,
	"./fr-ca.js": 214,
	"./fr-ch": 215,
	"./fr-ch.js": 215,
	"./fr.js": 213,
	"./fy": 216,
	"./fy.js": 216,
	"./ga": 217,
	"./ga.js": 217,
	"./gd": 218,
	"./gd.js": 218,
	"./gl": 219,
	"./gl.js": 219,
	"./gom-latn": 220,
	"./gom-latn.js": 220,
	"./gu": 221,
	"./gu.js": 221,
	"./he": 222,
	"./he.js": 222,
	"./hi": 223,
	"./hi.js": 223,
	"./hr": 224,
	"./hr.js": 224,
	"./hu": 225,
	"./hu.js": 225,
	"./hy-am": 226,
	"./hy-am.js": 226,
	"./id": 227,
	"./id.js": 227,
	"./is": 228,
	"./is.js": 228,
	"./it": 229,
	"./it-ch": 230,
	"./it-ch.js": 230,
	"./it.js": 229,
	"./ja": 231,
	"./ja.js": 231,
	"./jv": 232,
	"./jv.js": 232,
	"./ka": 233,
	"./ka.js": 233,
	"./kk": 234,
	"./kk.js": 234,
	"./km": 235,
	"./km.js": 235,
	"./kn": 236,
	"./kn.js": 236,
	"./ko": 237,
	"./ko.js": 237,
	"./ku": 238,
	"./ku.js": 238,
	"./ky": 239,
	"./ky.js": 239,
	"./lb": 240,
	"./lb.js": 240,
	"./lo": 241,
	"./lo.js": 241,
	"./lt": 242,
	"./lt.js": 242,
	"./lv": 243,
	"./lv.js": 243,
	"./me": 244,
	"./me.js": 244,
	"./mi": 245,
	"./mi.js": 245,
	"./mk": 246,
	"./mk.js": 246,
	"./ml": 247,
	"./ml.js": 247,
	"./mn": 248,
	"./mn.js": 248,
	"./mr": 249,
	"./mr.js": 249,
	"./ms": 250,
	"./ms-my": 251,
	"./ms-my.js": 251,
	"./ms.js": 250,
	"./mt": 252,
	"./mt.js": 252,
	"./my": 253,
	"./my.js": 253,
	"./nb": 254,
	"./nb.js": 254,
	"./ne": 255,
	"./ne.js": 255,
	"./nl": 256,
	"./nl-be": 257,
	"./nl-be.js": 257,
	"./nl.js": 256,
	"./nn": 258,
	"./nn.js": 258,
	"./pa-in": 259,
	"./pa-in.js": 259,
	"./pl": 260,
	"./pl.js": 260,
	"./pt": 261,
	"./pt-br": 262,
	"./pt-br.js": 262,
	"./pt.js": 261,
	"./ro": 263,
	"./ro.js": 263,
	"./ru": 264,
	"./ru.js": 264,
	"./sd": 265,
	"./sd.js": 265,
	"./se": 266,
	"./se.js": 266,
	"./si": 267,
	"./si.js": 267,
	"./sk": 268,
	"./sk.js": 268,
	"./sl": 269,
	"./sl.js": 269,
	"./sq": 270,
	"./sq.js": 270,
	"./sr": 271,
	"./sr-cyrl": 272,
	"./sr-cyrl.js": 272,
	"./sr.js": 271,
	"./ss": 273,
	"./ss.js": 273,
	"./sv": 274,
	"./sv.js": 274,
	"./sw": 275,
	"./sw.js": 275,
	"./ta": 276,
	"./ta.js": 276,
	"./te": 277,
	"./te.js": 277,
	"./tet": 278,
	"./tet.js": 278,
	"./tg": 279,
	"./tg.js": 279,
	"./th": 280,
	"./th.js": 280,
	"./tl-ph": 281,
	"./tl-ph.js": 281,
	"./tlh": 282,
	"./tlh.js": 282,
	"./tr": 283,
	"./tr.js": 283,
	"./tzl": 284,
	"./tzl.js": 284,
	"./tzm": 285,
	"./tzm-latn": 286,
	"./tzm-latn.js": 286,
	"./tzm.js": 285,
	"./ug-cn": 287,
	"./ug-cn.js": 287,
	"./uk": 288,
	"./uk.js": 288,
	"./ur": 289,
	"./ur.js": 289,
	"./uz": 290,
	"./uz-latn": 291,
	"./uz-latn.js": 291,
	"./uz.js": 290,
	"./vi": 292,
	"./vi.js": 292,
	"./x-pseudo": 293,
	"./x-pseudo.js": 293,
	"./yo": 294,
	"./yo.js": 294,
	"./zh-cn": 295,
	"./zh-cn.js": 295,
	"./zh-hk": 296,
	"./zh-hk.js": 296,
	"./zh-tw": 297,
	"./zh-tw.js": 297
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 396;

/***/ }),

/***/ 41:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyProgramPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__courses_courses__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__enroll_now_enroll_now__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__personal_details_personal_details__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__login_login__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__program_calender_program_calender__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__change_program_change_program__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__recheck_recheck__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__graduation_application_graduation_application__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_chart_js__ = __webpack_require__(394);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_chart_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_chart_js__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};













/**
 * Generated class for the MyProgramPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
/**
 * Ionic page
 */
var MyProgramPage = /** @class */ (function () {
    /**
     * Creates an instance of my program page.
     * @param navCtrl
     * @param navParams
     * @param http
     * @param loading
     * @param menuCtrl
     */
    function MyProgramPage(navCtrl, navParams, http, loading, menuCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.loading = loading;
        this.menuCtrl = menuCtrl;
    }
    MyProgramPage_1 = MyProgramPage;
    MyProgramPage.prototype.ionViewDidEnter = function () {
        this.menuCtrl.enable(true, 'filters-6');
    };
    /**
     * Courses page
     */
    MyProgramPage.prototype.CoursesPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__courses_courses__["a" /* CoursesPage */]);
    };
    /**
     * Programs calender page
     */
    MyProgramPage.prototype.ProgramCalenderPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__program_calender_program_calender__["a" /* ProgramCalenderPage */]);
    };
    /**
     * program page
     */
    MyProgramPage.prototype.MyProgramPage = function () {
        this.navCtrl.push(MyProgramPage_1);
    };
    MyProgramPage.prototype.ChangeProgramPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__change_program_change_program__["a" /* ChangeProgramPage */]);
    };
    MyProgramPage.prototype.RecheckPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_9__recheck_recheck__["a" /* RecheckPage */]);
    };
    MyProgramPage.prototype.GraduationApplicationPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_10__graduation_application_graduation_application__["a" /* GraduationApplicationPage */]);
    };
    /**
     * Enrolls now page
     */
    MyProgramPage.prototype.EnrollNowPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__enroll_now_enroll_now__["a" /* EnrollNowPage */]);
    };
    /**
     * Homes page
     */
    MyProgramPage.prototype.HomePage = function () {
        this.navCtrl.popToRoot();
    };
    /**
     * Personals details page
     */
    MyProgramPage.prototype.PersonalDetailsPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__personal_details_personal_details__["a" /* PersonalDetailsPage */]);
    };
    /**
     * Logins page
     */
    MyProgramPage.prototype.LoginPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__login_login__["a" /* LoginPage */]);
    };
    /**
     * Shows filters
     */
    MyProgramPage.prototype.showFilters = function () {
        this.menuCtrl.open('filters-6');
    };
    /**
     * Hides filters
     */
    MyProgramPage.prototype.hideFilters = function () {
        this.menuCtrl.close('filters-6');
    };
    /**
     * Ions view did load
     */
    MyProgramPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log('ionViewDidLoad MyProgramPage');
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append('Accept', 'application/json');
        headers.append('Content-Type', 'application/json');
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({ headers: headers });
        var data = {
            username: this.username,
        };
        var loader = this.loading.create({
            content: 'Processing please wait…',
        });
        loader.present().then(function () {
            _this.http.post('http://127.0.0.1/ionicphp/fetch_data_programs.php', data, options)
                .map(function (res) { return res.json(); })
                .subscribe(function (res) {
                loader.dismiss();
                _this.items = res.server_response;
                _this.var_x = _this.items.map(function (item) { return item.course_code; });
                _this.var_y = _this.items.map(function (item) { return item.course_code; });
                _this.var_z = _this.items.map(function (item) { return item.prereq; });
                _this.doughnutChart = new __WEBPACK_IMPORTED_MODULE_11_chart_js__["Chart"](_this.doughnutCanvas.nativeElement, {
                    type: 'doughnut',
                    data: {
                        labels: _this.var_x,
                        datasets: [{
                                data: [10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10],
                                backgroundColor: [
                                    'rgb(255,0,0)',
                                    'rgb(255,0,0)',
                                    'rgb(255,0,0)',
                                    'rgb(255,0,0)',
                                    'rgb(255,0,0)',
                                    'rgb(255,0,0)',
                                    'rgb(255,0,0)',
                                    'rgb(255,0,0)',
                                    'rgb(255,0,0)',
                                    "rgb(255,0,0)",
                                    'rgb(0,0,255)',
                                    'rgb(0,0,255)',
                                    'rgb(0,0,255)',
                                    'rgb(0,0,255)',
                                    'rgb(0,0,255)',
                                    'rgb(0,0,255)',
                                    'rgb(0,0,255)',
                                    'rgb(0,0,255)',
                                    'rgb(255,165,0)',
                                    'rgb(255,165,0)',
                                    'rgb(255,165,0)',
                                    'rgb(255,165,0)',
                                    'rgb(255,165,0)',
                                    'rgb(255,165,0)',
                                    'rgb(255,165,0)',
                                    'rgba(0,100,0)',
                                    'rgba(0,100,0)',
                                    'rgba(0,100,0)',
                                ],
                                hoverBackgroundColor: [
                                    "rgb(255,0,0)",
                                    "rgb(255,0,0)",
                                    "rgb(255,0,0)",
                                    "rgb(255,0,0)",
                                    "rgb(255,0,0)",
                                    "rgb(255,0,0)",
                                    "rgb(255,0,0)",
                                    "rgb(255,0,0)",
                                    "rgb(255,0,0)",
                                    "rgb(255,0,0)",
                                    "#36A2EB",
                                    "#36A2EB",
                                    "#36A2EB",
                                    "#36A2EB",
                                    "#36A2EB",
                                    "#36A2EB",
                                    "#36A2EB",
                                    "#36A2EB",
                                    "rgb(255,165,0)",
                                    "rgb(255,165,0)",
                                    "rgb(255,165,0)",
                                    "rgb(255,165,0)",
                                    "rgb(255,165,0)",
                                    "rgb(255,165,0)",
                                    "rgb(255,165,0)",
                                    "rgba(0,100,0)",
                                    "rgb(0,100,0)",
                                    "rgba(0,100,0)",
                                ]
                            }]
                    }
                });
            });
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('doughnutCanvas'),
        __metadata("design:type", Object)
    ], MyProgramPage.prototype, "doughnutCanvas", void 0);
    MyProgramPage = MyProgramPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-my-program',template:/*ion-inline-start:"C:\Users\Mohammed Farhan\Ionic\USP_ES-v7\src\pages\my-program\my-program.html"*/'<ion-header>\n\n    <ion-navbar>\n      <img src="assets/imgs/USP_logo.jpg" width="40px" style="display:inline-block" height="80px" width="150px"/>\n      <ion-buttons end>\n        <button ion-button icon-only (click)="showFilters()">\n          <ion-icon name="funnel"></ion-icon>\n        </button>\n      </ion-buttons>\n    </ion-navbar>\n  </ion-header>\n  \n  \n    <ion-menu [content]="content6" side="right" id="filters-6">\n        Menu\n        <ion-item>\n          <button  ion-button (click)="hideFilters()">\n            Home\n          </button>\n        </ion-item>\n        <ion-item>\n            <button  ion-button (click)="CoursesPage()">\n              Program Audit\n            </button>\n          </ion-item>\n          <ion-item>\n              <button  ion-button (click)="EnrollNowPage()">\n                Enroll Now\n              </button>\n            </ion-item>\n            <ion-item>\n              <button  ion-button (click)="PersonalDetailsPage()">\n                My Details\n              </button>\n            </ion-item>\n                <ion-item>\n                    <button  ion-button (click)="MyProgramPage()">\n                      My Program\n                    </button>\n                  </ion-item>\n                  <ion-item>\n                    <button  ion-button (click)="ChangeProgramPage()">\n                      Apply for Change Program\n                    </button> \n                  </ion-item>\n                  <ion-item>\n                    <button  ion-button (click)="RecheckPage()">\n                      Apply for Recheck of Grades\n                    </button>\n                  </ion-item>\n                  <ion-item>\n                    <button  ion-button (click)="GraduationApplicationPage()">\n                      Apply for Graduation\n                    </button>\n                  </ion-item>\n                <ion-item>\n                <button  ion-button (click)="LoginPage()">\n                  Logout\n                </button>\n              </ion-item>\n      </ion-menu>\n  \n    <ion-content padding #content6 >\n      <h2>Welcome to My Program Guide</h2>\n        <canvas height="500" #doughnutCanvas ></canvas>       \n    \n    </ion-content>'/*ion-inline-end:"C:\Users\Mohammed Farhan\Ionic\USP_ES-v7\src\pages\my-program\my-program.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* MenuController */]])
    ], MyProgramPage);
    return MyProgramPage;
    var MyProgramPage_1;
}());

//# sourceMappingURL=my-program.js.map

/***/ }),

/***/ 421:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(338);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(337);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_login_login__ = __webpack_require__(15);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen, app, menu) {
        this.app = app;
        this.menu = menu;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_login_login__["a" /* LoginPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp.prototype.backToWelcome = function () {
        var root = this.app.getRootNav();
        root.popToRoot();
    };
    MyApp.prototype.logout = function () {
        //Api Token Logout 
        var _this = this;
        localStorage.clear();
        this.menu.enable(false);
        setTimeout(function () { return _this.backToWelcome(); }, 1000);
    };
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\Mohammed Farhan\Ionic\USP_ES-v7\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n\n'/*ion-inline-end:"C:\Users\Mohammed Farhan\Ionic\USP_ES-v7\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* MenuController */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 422:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__courses_courses__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__enroll_now_enroll_now__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__personal_details_personal_details__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__program_calender_program_calender__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__my_program_my_program__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__admin_admin__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__change_program_change_program__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__recheck_recheck__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__graduation_application_graduation_application__ = __webpack_require__(25);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











/**
 * Component
 */
var TabsPage = /** @class */ (function () {
    /**
     * Creates an instance of tabs page.
     */
    function TabsPage() {
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_1__courses_courses__["a" /* CoursesPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_2__enroll_now_enroll_now__["a" /* EnrollNowPage */];
        this.tab4Root = __WEBPACK_IMPORTED_MODULE_4__personal_details_personal_details__["a" /* PersonalDetailsPage */];
        this.tab5Root = __WEBPACK_IMPORTED_MODULE_5__program_calender_program_calender__["a" /* ProgramCalenderPage */];
        this.tab6Root = __WEBPACK_IMPORTED_MODULE_6__my_program_my_program__["a" /* MyProgramPage */];
        this.tab7Root = __WEBPACK_IMPORTED_MODULE_7__admin_admin__["a" /* AdminPage */];
        this.tab8Root = __WEBPACK_IMPORTED_MODULE_8__change_program_change_program__["a" /* ChangeProgramPage */];
        this.tab9Root = __WEBPACK_IMPORTED_MODULE_9__recheck_recheck__["a" /* RecheckPage */];
        this.tab10Root = __WEBPACK_IMPORTED_MODULE_10__graduation_application_graduation_application__["a" /* GraduationApplicationPage */];
    }
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\Mohammed Farhan\Ionic\USP_ES-v7\src\pages\tabs\tabs.html"*/'<ion-tabs>\n  <ion-tab [root]="tab1Root" tabTitle="Home" tabIcon="home"></ion-tab>\n  <ion-tab [root]="tab2Root" tabTitle="Courses" tabIcon="information-circle"></ion-tab>\n  <ion-tab [root]="tab3Root" tabTitle="Enroll Now" tabIcon="contacts"></ion-tab>\n  <ion-tab [root]="tab4Root" tabTitle="Personal Details" tabIcon="details"></ion-tab>\n  <ion-tab [root]="tab5Root" tabTitle="Program Calender" tabIcon="Calender"></ion-tab>\n  <ion-tab [root]="tab6Root" tabTitle="My Program" tabIcon="Program"></ion-tab>\n  <ion-tab [root]="tab7Root" tabTitle="Admin" tabIcon="Admin"></ion-tab>\n  <ion-tab [root]="tab8Root" tabTitle="GraduationApplication" tabIcon="GraduationApplication"></ion-tab>\n  <ion-tab [root]="tab9Root" tabTitle="Recheck" tabIcon="Recheck"></ion-tab>\n  <ion-tab [root]="tab10Root" tabTitle="ChangeProgram" tabIcon="ChangeProgram"></ion-tab>\n</ion-tabs>'/*ion-inline-end:"C:\Users\Mohammed Farhan\Ionic\USP_ES-v7\src\pages\tabs\tabs.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 423:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(339);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/*
  Generated class for the AuthServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var AuthServiceProvider = /** @class */ (function () {
    function AuthServiceProvider(http) {
        this.http = http;
        console.log('Hello AuthServiceProvider Provider');
    }
    AuthServiceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], AuthServiceProvider);
    return AuthServiceProvider;
}());

//# sourceMappingURL=auth-service.js.map

/***/ }),

/***/ 62:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_login__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__program_calender_program_calender__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__change_program_change_program__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__recheck_recheck__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__graduation_application_graduation_application__ = __webpack_require__(25);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









/**
 * Generated class for the AdminPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
/**
 * Ionic page
 * Ionic Component
 */
var AdminPage = /** @class */ (function () {
    /**
     * Creates an instance of admin page.
     * @param navCtrl
     * @param navParams
     * @param http
     * @param loading
     * @param menuCtrl
     */
    function AdminPage(navCtrl, navParams, http, loading, menuCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.loading = loading;
        this.menuCtrl = menuCtrl;
    }
    AdminPage.prototype.CSVUpload = function () {
        window.location.href = 'http://127.0.0.1/csv/';
    };
    /**
     * Ions view did enter
     */
    AdminPage.prototype.ionViewDidEnter = function () {
        this.menuCtrl.enable(true, 'filters-7');
    };
    /**
     * Programs calender page
     */
    AdminPage.prototype.ProgramCalenderPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__program_calender_program_calender__["a" /* ProgramCalenderPage */]);
    };
    AdminPage.prototype.ChangeProgramPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__change_program_change_program__["a" /* ChangeProgramPage */]);
    };
    AdminPage.prototype.RecheckPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__recheck_recheck__["a" /* RecheckPage */]);
    };
    AdminPage.prototype.GraduationApplicationPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__graduation_application_graduation_application__["a" /* GraduationApplicationPage */]);
    };
    /**
     * Logins page
     */
    AdminPage.prototype.LoginPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__login_login__["a" /* LoginPage */]);
    };
    /**
     * Shows filters
     */
    AdminPage.prototype.showFilters = function () {
        this.menuCtrl.open('filters-7');
    };
    /**
     * Hides filters
     */
    AdminPage.prototype.hideFilters = function () {
        this.menuCtrl.close('filters-7');
    };
    /**
     * Ions view did load
     */
    AdminPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AdminPage');
    };
    /**
     * Backs to welcome
     */
    AdminPage.prototype.backToWelcome = function () {
        var root = this.app.getRootNav();
        root.popToRoot();
    };
    /**
     * Logouts admin page
     */
    AdminPage.prototype.logout = function () {
        //Api Token Logout
        var _this = this;
        localStorage.clear();
        setTimeout(function () { return _this.backToWelcome(); }, 1000);
    };
    AdminPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-admin',template:/*ion-inline-start:"C:\Users\Mohammed Farhan\Ionic\USP_ES-v7\src\pages\admin\admin.html"*/'<!--\n  Generated template for the AdminPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n      <img src="assets/imgs/USP_logo.jpg" width="40px" style="display:inline-block" height="80px" width="150px"/>\n      <ion-buttons end>\n        <button ion-button icon-only (click)="showFilters()">\n          <ion-icon name="funnel"></ion-icon>\n        </button>\n      </ion-buttons>\n    </ion-navbar>\n\n</ion-header>\n\n<ion-menu [content]="content7" side="right" id="filters-7">\n    Menu\n        <ion-item>\n            <button  ion-button (click)="ProgramCalenderPage()">\n              Program Calender\n            </button>\n          </ion-item>\n          <ion-item>\n            <button  ion-button (click)="ChangeProgramPage()">\n              Applications for Change Program\n            </button> \n          </ion-item>\n          <ion-item>\n            <button  ion-button (click)="RecheckPage()">\n              Applications for Recheck of Grades\n            </button>\n          </ion-item>\n          <ion-item>\n            <button  ion-button (click)="GraduationApplicationPage()">\n              Applications for Graduation\n            </button>\n          </ion-item>\n        <ion-item>\n            <button  ion-button (click)="LoginPage()">\n              Logout\n            </button>\n          </ion-item>\n  </ion-menu>\n<!--Calls CSVUpload function -->\n<ion-content padding #content7>\n    <h2>Welcome to Admin Page </h2>\n    <button  ion-button (click)="CSVUpload()">\n      Upload CSV\n    </button>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\Mohammed Farhan\Ionic\USP_ES-v7\src\pages\admin\admin.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* MenuController */]])
    ], AdminPage);
    return AdminPage;
}());

//# sourceMappingURL=admin.js.map

/***/ }),

/***/ 63:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__courses_courses__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__enroll_now_enroll_now__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__personal_details_personal_details__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__login_login__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__program_calender_program_calender__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__my_program_my_program__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__change_program_change_program__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__recheck_recheck__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__graduation_application_graduation_application__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_rxjs_add_operator_map__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};














/**
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
/**
 * Ionic page
 */
var HomePage = /** @class */ (function () {
    /**
     * Creates an instance of home page.
     * @param navCtrl
     * @param navParams
     * @param http
     * @param loading
     * @param menuCtrl
     */
    function HomePage(navCtrl, navParams, http, loading, menuCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.loading = loading;
        this.menuCtrl = menuCtrl;
    }
    /**
     * Ions view did enter
     */
    HomePage.prototype.ionViewDidEnter = function () {
        this.menuCtrl.enable(true, 'filters-1');
    };
    /**
     * Courses page
     */
    HomePage.prototype.CoursesPage = function () {
        var data = {
            username: this.username
        };
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__courses_courses__["a" /* CoursesPage */], data);
    };
    /**
     * Programs calender page
     */
    HomePage.prototype.ProgramCalenderPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__program_calender_program_calender__["a" /* ProgramCalenderPage */]);
    };
    HomePage.prototype.ChangeProgramPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_9__change_program_change_program__["a" /* ChangeProgramPage */]);
    };
    HomePage.prototype.RecheckPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_10__recheck_recheck__["a" /* RecheckPage */]);
    };
    HomePage.prototype.GraduationApplicationPage = function () {
        var data = {
            username: this.username
        };
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_11__graduation_application_graduation_application__["a" /* GraduationApplicationPage */], data);
    };
    /**
     * program page
     */
    HomePage.prototype.MyProgramPage = function () {
        var data = {
            username: this.username
        };
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__my_program_my_program__["a" /* MyProgramPage */], data);
    };
    /**
     * Enrolls now page
     */
    HomePage.prototype.EnrollNowPage = function () {
        var data = {
            username: this.username
        };
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__enroll_now_enroll_now__["a" /* EnrollNowPage */], data);
    };
    /**
     * Homes page
     */
    HomePage.prototype.HomePage = function () {
        this.navCtrl.popToRoot();
    };
    /**
     * Personals details page
     */
    HomePage.prototype.PersonalDetailsPage = function () {
        var data = {
            username: this.username
        };
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__personal_details_personal_details__["a" /* PersonalDetailsPage */], data);
    };
    /**
     * Logins page
     */
    HomePage.prototype.LoginPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__login_login__["a" /* LoginPage */]);
    };
    /**
     * Shows filters
     */
    HomePage.prototype.showFilters = function () {
        this.menuCtrl.open('filters-1');
    };
    /**
     * Hides filters
     */
    HomePage.prototype.hideFilters = function () {
        this.menuCtrl.close('filters-1');
    };
    /**
     * Ions view did load
     */
    HomePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad HomePage');
    };
    /**
     * Backs to welcome
     */
    HomePage.prototype.backToWelcome = function () {
        var root = this.app.getRootNav();
        root.popToRoot();
    };
    /**
     * Logouts home page
     */
    HomePage.prototype.logout = function () {
        //Api Token Logout
        var _this = this;
        localStorage.clear();
        setTimeout(function () { return _this.backToWelcome(); }, 1000);
    };
    /**
     * on init
     */
    HomePage.prototype.ngOnInit = function () {
        var _this = this;
        this.username = this.navParams.get('username');
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append("Accept", 'application/json');
        headers.append('Content-Type', 'application/json');
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({
            headers: headers
        });
        var data = {
            username: this.username
        };
        var loader = this.loading.create({
            content: 'Processing please wait...',
        });
        loader.present().then(function () {
            _this.http.post('http://127.0.0.1/ionicphp/fetch_data.php', data, options)
                .map(function (res) { return res.json(); })
                .subscribe(function (res) {
                loader.dismiss();
                _this.items = res.server_response;
                console.log(_this.items);
            });
        });
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\Users\Mohammed Farhan\Ionic\USP_ES-v7\src\pages\home\home.html"*/'<!--\n  Generated template for HomePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <img src="assets/imgs/USP_logo.jpg" width="40px" style="display:inline-block" height="80px" width="150px"/>\n    <ion-buttons end>\n      <button ion-button icon-only (click)="showFilters()">\n        <ion-icon name="funnel"></ion-icon> \n      </button>\n    </ion-buttons>\n  </ion-navbar>  \n</ion-header>\n\n\n  <ion-menu [content]="content1" side="right" id="filters-1">\n      Menu\n      <ion-item>\n        <button  ion-button (click)="hideFilters()">\n          Home\n        </button>\n      </ion-item>\n      <ion-item>\n          <button  ion-button (click)="CoursesPage()">\n            Program Audit\n          </button>\n        </ion-item>\n        <ion-item>\n            <button  ion-button (click)="EnrollNowPage()"> \n              Enroll Now\n            </button>\n          </ion-item>\n          <ion-item>\n            <button  ion-button (click)="PersonalDetailsPage()">\n              My Details\n            </button>\n          </ion-item>\n              <ion-item>\n                  <button  ion-button (click)="MyProgramPage()">\n                    My Program\n                  </button>\n                </ion-item>\n                <ion-item>\n                  <button  ion-button (click)="ChangeProgramPage()">\n                    Apply for Change Program\n                  </button> \n                </ion-item>\n                <ion-item>\n                  <button  ion-button (click)="RecheckPage()">\n                    Apply for Recheck of Grades\n                  </button>\n                </ion-item>\n                <ion-item>\n                  <button  ion-button (click)="GraduationApplicationPage()">\n                    Apply for Graduation\n                  </button>\n                </ion-item>\n              <ion-item>\n              <button  ion-button (click)="LoginPage()">\n                Logout\n              </button>\n            </ion-item>\n    </ion-menu>\n\n  <ion-content padding #content1>\n    <ion-item *ngFor = "let item of items">\n\n    <h2>Welcome {{item.username}}  </h2>\n  </ion-item>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Mohammed Farhan\Ionic\USP_ES-v7\src\pages\home\home.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* MenuController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ })

},[341]);
//# sourceMappingURL=main.js.map