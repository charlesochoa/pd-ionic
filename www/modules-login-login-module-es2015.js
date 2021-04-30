(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-login-login-module"],{

/***/ "eCkg":
/*!***********************************************!*\
  !*** ./src/app/modules/login/login.page.scss ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-header ion-toolbar {\n  --background: var(--ion-color-danger);\n}\n\n.my-custom-class {\n  --white-space: 70px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxsb2dpbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUU7RUFDRSxxQ0FBQTtBQURKOztBQU1BO0VBQ0UsbUJBQUE7QUFIRiIsImZpbGUiOiJsb2dpbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuaW9uLWhlYWRlciB7XHJcbiAgaW9uLXRvb2xiYXIge1xyXG4gICAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItZGFuZ2VyKTtcclxuICB9XHJcbn1cclxuXHJcblxyXG4ubXktY3VzdG9tLWNsYXNzIHtcclxuICAtLXdoaXRlLXNwYWNlOiA3MHB4O1xyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ "g7DB":
/*!***********************************************!*\
  !*** ./src/app/modules/login/login.module.ts ***!
  \***********************************************/
/*! exports provided: LoginPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login.page */ "uN2C");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");







let LoginPageModule = class LoginPageModule {
};
LoginPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"].forChild([{ path: '', component: _login_page__WEBPACK_IMPORTED_MODULE_5__["LoginPage"] }])
        ],
        declarations: [_login_page__WEBPACK_IMPORTED_MODULE_5__["LoginPage"]]
    })
], LoginPageModule);



/***/ }),

/***/ "qt3+":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/login/login.page.html ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header background=\"danger\">\n  <ion-toolbar>\n      <ion-title slot=\"start\">\n        <img\n            src=\"../../../assets/images/icon.jpg\" height=\"40px\"\n          />\n      </ion-title>\n    <ion-title slot=\"start\">\n        <img\n            src=\"../../../assets/images/letters.png\" height=\"20px\"\n          />\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content >\n  <form #form=\"ngForm\" (ngSubmit)=\"register()\">\n    <ion-grid>\n      <ion-row justify-content-center>\n        <ion-col align-self-center size-md=\"6\" size-lg=\"5\" size-xs=\"12\">\n          <div text-center>\n            <h3>El siguiente correo electrónico tendrá uso exclusivo para el estudio. Una vez terminado el mismo, se eliminarán de la base de datos.</h3>\n          </div>\n          <div padding>\n            <ion-item>\n              <ion-input name=\"email\" type=\"email\" placeholder=\"your@email.com\" [(ngModel)]=\"email\" required></ion-input>\n            </ion-item>\n          </div>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </form>\n</ion-content>\n<ion-footer>\n  <div padding>\n    <ion-button  size=\"large\" (click)=\"register()\" [disabled]=\"form.invalid\" expand=\"block\" >¡Empezar!</ion-button>\n  </div>\n</ion-footer>\n");

/***/ }),

/***/ "uN2C":
/*!*********************************************!*\
  !*** ./src/app/modules/login/login.page.ts ***!
  \*********************************************/
/*! exports provided: LoginPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPage", function() { return LoginPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_login_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./login.page.html */ "qt3+");
/* harmony import */ var _login_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login.page.scss */ "eCkg");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./auth.service */ "GOjK");
/* harmony import */ var _checkout_checkout_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../checkout/checkout.service */ "ZZSh");








let LoginPage = class LoginPage {
    constructor(router, authService, alertController, checkoutService, toastController) {
        this.router = router;
        this.authService = authService;
        this.alertController = alertController;
        this.checkoutService = checkoutService;
        this.toastController = toastController;
        this.email = '';
    }
    register() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            // console.log('Device Model0: ' + this.device);
            // console.log('Device Model1: ' + this.device.cordova);
            // console.log('Device Model2: ' + this.device.isVirtual);
            // console.log('Device Model3: ' + this.device.manufacturer);
            // console.log('Device Model4: ' + this.device.model);
            // console.log('Device Model5: ' + this.device.platform);
            // console.log('Device Model6: ' + this.device.serial);
            // console.log('Device Model7: ' + this.device.uuid);
            // console.log('Device Model8: ' + this.device.version);
            const alert = yield this.alertController.create({
                cssClass: 'my-custom-class',
                header: 'Bienvenido!',
                message: '- Realiza una compra para ti y tus amigos -No tienes limites de tiempo, ni dinero.\n-La prueba finaliza al ir al carrito y finalizar el pedido.\n\nNo requiere datos personales ni de pago es un prototipo.',
                buttons: [
                    {
                        text: 'Cancelar',
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: (blah) => {
                            console.log('Confirm Cancel: blah');
                        }
                    },
                    {
                        text: 'Vamos!',
                        handler: () => {
                            console.log('Confirm Okay');
                            this.authService.login(this.email).subscribe((u) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                                this.checkoutService.newCart(u.pk).subscribe(c => {
                                    u.cartPk = c.pk;
                                    this.authService.setLocalUser(u).then((r) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                                        this.router.navigate(['tabs', 'menu']);
                                    }));
                                });
                            }), (err) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                                if (err && err.error && err.error.user && err.error.user.username) {
                                    const toast = yield this.toastController.create({
                                        message: 'Parece que has realizado ya esta prueba! Si aún no has hecho la encuesta de invitamos a revisar el correo que te hemos enviado para completarla.',
                                        duration: 6500,
                                        color: 'success',
                                        position: 'middle'
                                    });
                                    toast.present();
                                }
                            }));
                        }
                    }
                ]
            });
            alert.present();
        });
    }
};
LoginPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"] },
    { type: _checkout_checkout_service__WEBPACK_IMPORTED_MODULE_7__["CheckoutService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ToastController"] }
];
LoginPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-login',
        template: _raw_loader_login_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_login_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], LoginPage);



/***/ })

}]);
//# sourceMappingURL=modules-login-login-module-es2015.js.map