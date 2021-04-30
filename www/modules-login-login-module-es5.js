(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-login-login-module"], {
    /***/
    "eCkg":
    /*!***********************************************!*\
      !*** ./src/app/modules/login/login.page.scss ***!
      \***********************************************/

    /*! exports provided: default */

    /***/
    function eCkg(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-header ion-toolbar {\n  --background: var(--ion-color-danger);\n}\n\n.my-custom-class {\n  --white-space: 70px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxsb2dpbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUU7RUFDRSxxQ0FBQTtBQURKOztBQU1BO0VBQ0UsbUJBQUE7QUFIRiIsImZpbGUiOiJsb2dpbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuaW9uLWhlYWRlciB7XHJcbiAgaW9uLXRvb2xiYXIge1xyXG4gICAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItZGFuZ2VyKTtcclxuICB9XHJcbn1cclxuXHJcblxyXG4ubXktY3VzdG9tLWNsYXNzIHtcclxuICAtLXdoaXRlLXNwYWNlOiA3MHB4O1xyXG59XHJcbiJdfQ== */";
      /***/
    },

    /***/
    "g7DB":
    /*!***********************************************!*\
      !*** ./src/app/modules/login/login.module.ts ***!
      \***********************************************/

    /*! exports provided: LoginPageModule */

    /***/
    function g7DB(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LoginPageModule", function () {
        return LoginPageModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _login_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./login.page */
      "uN2C");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var LoginPageModule = function LoginPageModule() {
        _classCallCheck(this, LoginPageModule);
      };

      LoginPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"].forChild([{
          path: '',
          component: _login_page__WEBPACK_IMPORTED_MODULE_5__["LoginPage"]
        }])],
        declarations: [_login_page__WEBPACK_IMPORTED_MODULE_5__["LoginPage"]]
      })], LoginPageModule);
      /***/
    },

    /***/
    "qt3+":
    /*!*************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/login/login.page.html ***!
      \*************************************************************************************/

    /*! exports provided: default */

    /***/
    function qt3(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header background=\"danger\">\n  <ion-toolbar>\n      <ion-title slot=\"start\">\n        <img\n            src=\"../../../assets/images/icon.jpg\" height=\"40px\"\n          />\n      </ion-title>\n    <ion-title slot=\"start\">\n        <img\n            src=\"../../../assets/images/letters.png\" height=\"20px\"\n          />\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content >\n  <form #form=\"ngForm\" (ngSubmit)=\"register()\">\n    <ion-grid>\n      <ion-row justify-content-center>\n        <ion-col align-self-center size-md=\"6\" size-lg=\"5\" size-xs=\"12\">\n          <div text-center>\n            <h3>El siguiente correo electrónico tendrá uso exclusivo para el estudio. Una vez terminado el mismo, se eliminarán de la base de datos.</h3>\n          </div>\n          <div padding>\n            <ion-item>\n              <ion-input name=\"email\" type=\"email\" placeholder=\"your@email.com\" [(ngModel)]=\"email\" required></ion-input>\n            </ion-item>\n          </div>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </form>\n</ion-content>\n<ion-footer>\n  <div padding>\n    <ion-button  size=\"large\" (click)=\"register()\" [disabled]=\"form.invalid\" expand=\"block\" >¡Empezar!</ion-button>\n  </div>\n</ion-footer>\n";
      /***/
    },

    /***/
    "uN2C":
    /*!*********************************************!*\
      !*** ./src/app/modules/login/login.page.ts ***!
      \*********************************************/

    /*! exports provided: LoginPage */

    /***/
    function uN2C(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LoginPage", function () {
        return LoginPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_login_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./login.page.html */
      "qt3+");
      /* harmony import */


      var _login_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./login.page.scss */
      "eCkg");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./auth.service */
      "GOjK");
      /* harmony import */


      var _checkout_checkout_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../checkout/checkout.service */
      "ZZSh");

      var LoginPage = /*#__PURE__*/function () {
        function LoginPage(router, authService, alertController, checkoutService, toastController) {
          _classCallCheck(this, LoginPage);

          this.router = router;
          this.authService = authService;
          this.alertController = alertController;
          this.checkoutService = checkoutService;
          this.toastController = toastController;
          this.email = '';
          this.url = 'https://docs.google.com/forms/d/e/1FAIpQLSfQkUY7lr72heFFt0wzwUWyAHVPYdwRDwBuZhu-K3B1JEKgJA/viewform';
        }

        _createClass(LoginPage, [{
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var _this = this;

              var t, alert;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      t = this.authService.getTransaction();
                      this.email = '';

                      if (!t) {
                        _context.next = 7;
                        break;
                      }

                      _context.next = 5;
                      return this.alertController.create({
                        cssClass: 'my-custom-class',
                        header: 'Muchas gracias!',
                        message: 'Puedes acceder a la encuesta a través de: <a>https://docs.google.com/forms/d/e/1FAIpQLSfQkUY7lr72heFFt0wzwUWyAHVPYdwRDwBuZhu-K3B1JEKgJA/viewform</a>. <br><br>También hemos enviado el link a tu correo.',
                        buttons: [{
                          text: 'Vamos a responderla!',
                          handler: function handler() {
                            window.open(_this.url, "_blank");
                          }
                        }]
                      });

                    case 5:
                      alert = _context.sent;
                      alert.present();

                    case 7:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "register",
          value: function register() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
              var _this2 = this;

              var alert;
              return regeneratorRuntime.wrap(function _callee5$(_context5) {
                while (1) {
                  switch (_context5.prev = _context5.next) {
                    case 0:
                      _context5.next = 2;
                      return this.alertController.create({
                        cssClass: 'my-custom-class',
                        header: 'Bienvenido!',
                        message: '<strong>1-</strong>Realiza una compra para ti y tus amigos <br><strong>2-</strong>No tienes limites de tiempo, ni dinero <br><strong>3-</strong>La prueba finaliza al ir al carrito y finalizar el pedido <br><strong>4-</strong>No requiere datos personales ni de pago es un prototipo<br><strong>5-</strong>Finalmente, contesta nuestra encuesta de satisfacción.',
                        buttons: [{
                          text: 'Cancelar',
                          role: 'cancel',
                          cssClass: 'secondary',
                          handler: function handler(blah) {
                            console.log('Confirm Cancel: blah');
                          }
                        }, {
                          text: 'Vamos!',
                          handler: function handler() {
                            console.log('Confirm Okay');

                            _this2.authService.login(_this2.email).subscribe(function (u) {
                              return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this2, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
                                var _this3 = this;

                                return regeneratorRuntime.wrap(function _callee3$(_context3) {
                                  while (1) {
                                    switch (_context3.prev = _context3.next) {
                                      case 0:
                                        this.checkoutService.newCart(u.pk).subscribe(function (c) {
                                          u.cartPk = c.pk;

                                          _this3.authService.setLocalUser(u).then(function (r) {
                                            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this3, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
                                              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                                                while (1) {
                                                  switch (_context2.prev = _context2.next) {
                                                    case 0:
                                                      this.router.navigate(['tabs', 'menu']);

                                                    case 1:
                                                    case "end":
                                                      return _context2.stop();
                                                  }
                                                }
                                              }, _callee2, this);
                                            }));
                                          });
                                        });

                                      case 1:
                                      case "end":
                                        return _context3.stop();
                                    }
                                  }
                                }, _callee3, this);
                              }));
                            }, function (err) {
                              return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this2, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
                                var toast;
                                return regeneratorRuntime.wrap(function _callee4$(_context4) {
                                  while (1) {
                                    switch (_context4.prev = _context4.next) {
                                      case 0:
                                        if (!(err && err.error && err.error.user && err.error.user.username)) {
                                          _context4.next = 5;
                                          break;
                                        }

                                        _context4.next = 3;
                                        return this.toastController.create({
                                          message: 'Parece que has realizado ya esta prueba! Si aún no has hecho la encuesta de invitamos a revisar el correo que te hemos enviado para completarla.',
                                          duration: 6500,
                                          color: 'success',
                                          position: 'middle'
                                        });

                                      case 3:
                                        toast = _context4.sent;
                                        toast.present();

                                      case 5:
                                      case "end":
                                        return _context4.stop();
                                    }
                                  }
                                }, _callee4, this);
                              }));
                            });
                          }
                        }]
                      });

                    case 2:
                      alert = _context5.sent;
                      alert.present();

                    case 4:
                    case "end":
                      return _context5.stop();
                  }
                }
              }, _callee5, this);
            }));
          }
        }]);

        return LoginPage;
      }();

      LoginPage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }, {
          type: _auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"]
        }, {
          type: _checkout_checkout_service__WEBPACK_IMPORTED_MODULE_7__["CheckoutService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ToastController"]
        }];
      };

      LoginPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-login',
        template: _raw_loader_login_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_login_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], LoginPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=modules-login-login-module-es5.js.map