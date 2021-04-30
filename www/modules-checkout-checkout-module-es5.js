(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-checkout-checkout-module"], {
    /***/
    "M56Z":
    /*!************************************************!*\
      !*** ./src/app/modules/checkout/class/cart.ts ***!
      \************************************************/

    /*! exports provided: Cart */

    /***/
    function M56Z(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Cart", function () {
        return Cart;
      });

      var Cart = function Cart() {
        _classCallCheck(this, Cart);

        this.pk = "";
        this.creation_date = null;
        this.cart_products = [];
        this.ddp_user = null;
        this.subtotal = 0;
        this.subtotalSinIva = 0;
        this.delivery = 2.5;
        this.discounts = 0.3;
        this.iva = 0.21;
      };
      /***/

    },

    /***/
    "Nl/n":
    /*!***************************************************!*\
      !*** ./src/app/modules/checkout/checkout.page.ts ***!
      \***************************************************/

    /*! exports provided: CheckoutPage */

    /***/
    function NlN(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CheckoutPage", function () {
        return CheckoutPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_checkout_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./checkout.page.html */
      "QiIZ");
      /* harmony import */


      var _checkout_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./checkout.page.scss */
      "lrHL");
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


      var _login_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../login/auth.service */
      "GOjK");
      /* harmony import */


      var _checkout_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./checkout.service */
      "ZZSh");
      /* harmony import */


      var _class_cart__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./class/cart */
      "M56Z");

      var CheckoutPage = /*#__PURE__*/function () {
        function CheckoutPage(checkoutService, authService, alertController, toastController, router) {
          _classCallCheck(this, CheckoutPage);

          this.checkoutService = checkoutService;
          this.authService = authService;
          this.alertController = alertController;
          this.toastController = toastController;
          this.router = router;
          this.user = null;
          this.cart = new _class_cart__WEBPACK_IMPORTED_MODULE_8__["Cart"]();
          this.cartProducts = [];
          this.delay = true;
        }

        _createClass(CheckoutPage, [{
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            var _this = this;

            this.authService.getLocalUser().then(function (u) {
              _this.user = u;
              console.log(_this.user);

              if (_this.user.cartPk) {
                _this.checkoutService.getCart(_this.user.cartPk).subscribe(function (c) {
                  _this.cart.subtotal = c.subtotal;
                  _this.cart.pk = c.pk;

                  _this.calculateCart();

                  _this.cartProducts = c.cart_products;
                  _this.delay = false;
                });
              }
            }, function (err) {
              _this.router.navigate(['']);
            });
          }
        }, {
          key: "ionViewDidLeave",
          value: function ionViewDidLeave() {
            this.cartProducts = [];
            this.cart = new _class_cart__WEBPACK_IMPORTED_MODULE_8__["Cart"]();
            this.delay = true;
          }
        }, {
          key: "calculateCart",
          value: function calculateCart() {
            var iva = 0.21;
            var discounts = 0.3;
            var delivery = 2.5;

            if (this.cart.subtotal > 0) {
              this.cart.subtotalSinIva = this.cart.subtotal - this.cart.subtotal * iva;
              this.cart.iva = this.cart.subtotal * iva;
              this.cart.discounts = this.cart.subtotal * discounts * -1.0;
              this.cart.delivery = delivery;
              this.cart.total = this.cart.subtotal - discounts * -1.0 + delivery;
            } else {
              this.cart.subtotalSinIva = 0;
              this.cart.iva = 0;
              this.cart.discounts = 0;
              this.cart.delivery = 0;
              this.cart.total = 0;
            }
          }
        }, {
          key: "modifyCart",
          value: function modifyCart(event, index) {
            this.cart.subtotal = event.cart.subtotal;
            this.cart.pk = event.cart.pk;

            if (event.cartProduct && event.cartProduct.count > 0) {
              this.cartProducts[index].count = event.cartProduct.count;
            } else {
              this.cartProducts.splice(index, 1);
            }

            this.calculateCart();
          }
        }, {
          key: "submit",
          value: function submit() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              var _this2 = this;

              var alert;
              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      _context3.next = 2;
                      return this.alertController.create({
                        cssClass: 'my-custom-class',
                        header: 'Ya estás casi listo!',
                        message: "\xBFSeguro que deseas realizar esta compra por un total de <strong>".concat(this.cart.total, " \u20AC</strong>?"),
                        buttons: [{
                          text: 'Todavía no',
                          role: 'cancel',
                          cssClass: 'secondary',
                          handler: function handler(blah) {}
                        }, {
                          text: 'Seguro!',
                          handler: function handler() {
                            _this2.checkoutService.makeTransaction(_this2.cart.pk).subscribe(function (t) {
                              return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this2, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                                var toast;
                                return regeneratorRuntime.wrap(function _callee$(_context) {
                                  while (1) {
                                    switch (_context.prev = _context.next) {
                                      case 0:
                                        _context.next = 2;
                                        return this.toastController.create({
                                          message: "\xA1Prueba finalizada! <strong>\xA1Muchisimas gracias!</strong> revisa tu correo y en cuanto puedas nos comentas qu\xE9 tal te pareci\xF3 nuestra propuesta!",
                                          duration: 10000
                                        });

                                      case 2:
                                        toast = _context.sent;
                                        this.authService.set('t', t.pk);
                                        _context.next = 6;
                                        return this.authService.clear();

                                      case 6:
                                        toast.present();
                                        this.router.navigate(['login']);

                                      case 8:
                                      case "end":
                                        return _context.stop();
                                    }
                                  }
                                }, _callee, this);
                              }));
                            }, function (err) {
                              return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this2, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
                                var toast;
                                return regeneratorRuntime.wrap(function _callee2$(_context2) {
                                  while (1) {
                                    switch (_context2.prev = _context2.next) {
                                      case 0:
                                        _context2.next = 2;
                                        return this.toastController.create({
                                          message: 'Estamos teniendo problemas técnicos. Por favor, intente nuevamente.',
                                          duration: 1000,
                                          color: 'danger'
                                        });

                                      case 2:
                                        toast = _context2.sent;
                                        toast.present();

                                      case 4:
                                      case "end":
                                        return _context2.stop();
                                    }
                                  }
                                }, _callee2, this);
                              }));
                            });
                          }
                        }]
                      });

                    case 2:
                      alert = _context3.sent;
                      alert.present();

                    case 4:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this);
            }));
          }
        }]);

        return CheckoutPage;
      }();

      CheckoutPage.ctorParameters = function () {
        return [{
          type: _checkout_service__WEBPACK_IMPORTED_MODULE_7__["CheckoutService"]
        }, {
          type: _login_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ToastController"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }];
      };

      CheckoutPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-checkout',
        template: _raw_loader_checkout_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_checkout_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], CheckoutPage);
      /***/
    },

    /***/
    "QiIZ":
    /*!*******************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/checkout/checkout.page.html ***!
      \*******************************************************************************************/

    /*! exports provided: default */

    /***/
    function QiIZ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header background=\"danger\">\n  <ion-toolbar>\n      <ion-title slot=\"start\">\n        <img\n            src=\"../../../assets/images/icon.jpg\" height=\"40px\"\n          />\n      </ion-title>\n    <ion-title slot=\"start\">\n        <img\n            src=\"../../../assets/images/letters.png\" height=\"20px\"\n          />\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content [fullscreen]=\"true\">\n  <ion-header collapse=\"condense\">\n    <ion-toolbar>\n      <ion-title size=\"large\">Checkout</ion-title>\n    </ion-toolbar>\n  </ion-header>\n  <ion-list *ngIf=\"cartProducts\" lines=\"none\">\n    <ion-item-group>\n      <ion-item-divider>\n        <ion-label>Resumen de compra</ion-label>\n      </ion-item-divider>\n      <list-item *ngFor=\"let item of cartProducts; let i = index\"\n        (cartChange)=\"modifyCart($event, i)\"\n        [cartProduct]= \"item\"\n        [cart]= \"cart\"\n        class=\"item animated delay-0{{ i+3 }}s\"\n        [angularShape]=\"user.angularShape\">\n      </list-item>\n      <ion-item lines=\"none\" *ngIf=\"cartProducts.length==0\" class=\"item animated delay-0{{ 3 }}s\">\n        <label color=\"light\" class=\"summary-label\" slot=\"primary\">Aún no has agregado ninguna pizza al carrito.</label>\n      </ion-item>\n    </ion-item-group>\n  </ion-list>\n\n</ion-content>\n<ion-footer *ngIf=\"cart && !delay\">\n  <ion-item-group>\n    <ion-item-divider>\n      <ion-label>Subtotal</ion-label>\n    </ion-item-divider>\n    <ion-item lines=\"none\">\n\n      <ion-label>Subtotal productos</ion-label>\n      <ion-label class=\"summary-label\">{{cart.subtotal | number: '1.0-2'}} €</ion-label>\n    </ion-item>\n    <ion-item lines=\"none\">\n\n      <ion-label>IVA</ion-label>\n      <ion-label class=\"summary-label\">{{cart.iva | number: '1.0-2'}} €</ion-label>\n    </ion-item>\n    <ion-item lines=\"none\">\n      <ion-label color=\"success\">Descuentos</ion-label>\n      <ion-label class=\"summary-label\" color=\"success\">{{cart.discounts | number: '1.0-2'}} €</ion-label>\n    </ion-item>\n\n    <ion-item lines=\"none\">\n      <ion-label>Envío</ion-label>\n      <ion-label class=\"summary-label\">{{cart.delivery }} €</ion-label>\n    </ion-item>\n\n    <ion-item lines=\"none\">\n      <ion-label><strong>TOTAL</strong></ion-label>\n      <ion-label class=\"summary-label\"><strong>{{ cart.total | number: '1.0-2'}} €</strong></ion-label>\n    </ion-item>\n    <ion-button *ngIf=\"user\"\n      [style.color]=\"secondary\"\n      [style.border]=\"secondary\"\n      expand=\"block\"\n      [class.rounded-shape]=\"!user.angularShape\" [class.angular-shape]=\"user.angularShape\"\n      (click)=\"submit()\"\n      >\n      Realizar el Pago y a Disfrutar!\n    </ion-button>\n  </ion-item-group>\n\n</ion-footer>\n";
      /***/
    },

    /***/
    "bqgV":
    /*!*****************************************************!*\
      !*** ./src/app/modules/checkout/checkout.module.ts ***!
      \*****************************************************/

    /*! exports provided: CheckoutPageModule */

    /***/
    function bqgV(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CheckoutPageModule", function () {
        return CheckoutPageModule;
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


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _checkout_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./checkout.page */
      "Nl/n");
      /* harmony import */


      var _shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../shared.module */
      "d2mR");

      var CheckoutPageModule = function CheckoutPageModule() {
        _classCallCheck(this, CheckoutPageModule);
      };

      CheckoutPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
        imports: [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([{
          path: '',
          component: _checkout_page__WEBPACK_IMPORTED_MODULE_6__["CheckoutPage"]
        }])],
        declarations: [_checkout_page__WEBPACK_IMPORTED_MODULE_6__["CheckoutPage"]]
      })], CheckoutPageModule);
      /***/
    },

    /***/
    "lrHL":
    /*!*****************************************************!*\
      !*** ./src/app/modules/checkout/checkout.page.scss ***!
      \*****************************************************/

    /*! exports provided: default */

    /***/
    function lrHL(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-header ion-toolbar {\n  --background: var(--ion-color-danger);\n}\n\n.item {\n  display: block;\n  cursor: pointer;\n  -webkit-animation-name: fadeInUp;\n  animation-name: fadeInUp;\n}\n\n.angular-shape {\n  --border-radius: 0px ;\n  border-radius: 0px;\n}\n\n.rounded-shape {\n  --border-radius: 40px ;\n  border-radius: 40px;\n}\n\n.summary-label {\n  text-align: right;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxjaGVja291dC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0U7RUFDRSxxQ0FBQTtBQUZKOztBQU1BO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSxnQ0FBQTtFQUNBLHdCQUFBO0FBSEY7O0FBTUE7RUFDRSxxQkFBQTtFQUNBLGtCQUFBO0FBSEY7O0FBTUE7RUFDRSxzQkFBQTtFQUNBLG1CQUFBO0FBSEY7O0FBTUE7RUFDRSxpQkFBQTtBQUhGIiwiZmlsZSI6ImNoZWNrb3V0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5cclxuaW9uLWhlYWRlciB7XHJcbiAgaW9uLXRvb2xiYXIge1xyXG4gICAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItZGFuZ2VyKTtcclxuICB9XHJcbn1cclxuXHJcbi5pdGVtIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgLXdlYmtpdC1hbmltYXRpb24tbmFtZTogZmFkZUluVXA7XHJcbiAgYW5pbWF0aW9uLW5hbWU6IGZhZGVJblVwO1xyXG59XHJcblxyXG4uYW5ndWxhci1zaGFwZSB7XHJcbiAgLS1ib3JkZXItcmFkaXVzOiAwcHggO1xyXG4gIGJvcmRlci1yYWRpdXM6IDBweCA7XHJcbn1cclxuXHJcbi5yb3VuZGVkLXNoYXBlIHtcclxuICAtLWJvcmRlci1yYWRpdXM6IDQwcHggO1xyXG4gIGJvcmRlci1yYWRpdXM6IDQwcHggO1xyXG59XHJcblxyXG4uc3VtbWFyeS1sYWJlbCB7XHJcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbn1cclxuIl19 */";
      /***/
    }
  }]);
})();
//# sourceMappingURL=modules-checkout-checkout-module-es5.js.map