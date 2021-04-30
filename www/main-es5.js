(function () {
  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
    /***/
    0:
    /*!***************************!*\
      !*** multi ./src/main.ts ***!
      \***************************/

    /*! no static exports found */

    /***/
    function _(module, exports, __webpack_require__) {
      module.exports = __webpack_require__(
      /*! C:\Users\cochoa\Documents\Unizar\Periodo_4\Design\pd-ionic\src\main.ts */
      "zUnb");
      /***/
    },

    /***/
    "AytR":
    /*!*****************************************!*\
      !*** ./src/environments/environment.ts ***!
      \*****************************************/

    /*! exports provided: environment */

    /***/
    function AytR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "environment", function () {
        return environment;
      }); // This file can be replaced during build by using the `fileReplacements` array.
      // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
      // The list of file replacements can be found in `angular.json`.


      var environment = {
        production: false,
        apiUrl: 'https://ddp-backend.herokuapp.com/'
      };
      /*
       * For easier debugging in development mode, you can import the following file
       * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
       *
       * This import should be commented out in production mode because it will have a negative impact
       * on performance if an error is thrown.
       */
      // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

      /***/
    },

    /***/
    "IMy3":
    /*!*********************************************************************!*\
      !*** ./src/app/components/product-item/product-item.component.scss ***!
      \*********************************************************************/

    /*! exports provided: default */

    /***/
    function IMy3(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".angular-shape {\n  --border-radius: 0px ;\n  border-radius: 0px;\n}\n\n.rounded-shape {\n  --border-radius: 20px ;\n  border-radius: 20px;\n}\n\n.half-rounded-open {\n  --border-radius: 20px 0px 0px 20px ;\n  border-radius: 20px 0px 0px 20px;\n}\n\n.half-rounded-close {\n  --border-radius: 0px 20px 20px 0px ;\n  border-radius: 0px 20px 20px 0px;\n}\n\n.selected-label {\n  background-color: var(--ion-color-light);\n  min-width: 20px;\n  text-align: center;\n}\n\n.price-label {\n  text-align: right;\n}\n\nion-item {\n  --lines: \"none\";\n  color: \"transparent\";\n}\n\nimg {\n  -o-object-fit: cover;\n     object-fit: cover;\n  height: 120px;\n  width: 100%;\n}\n\n.selection-button {\n  --border-width: 100px ;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxwcm9kdWN0LWl0ZW0uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxxQkFBQTtFQUNBLGtCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxzQkFBQTtFQUNBLG1CQUFBO0FBQ0Y7O0FBRUE7RUFDRSxtQ0FBQTtFQUNBLGdDQUFBO0FBQ0Y7O0FBR0E7RUFDRSxtQ0FBQTtFQUNBLGdDQUFBO0FBQUY7O0FBR0E7RUFDRSx3Q0FBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQUFGOztBQUdBO0VBQ0UsaUJBQUE7QUFBRjs7QUFJQTtFQUNFLGVBQUE7RUFDQSxvQkFBQTtBQURGOztBQUlBO0VBQ0Usb0JBQUE7S0FBQSxpQkFBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0FBREY7O0FBSUE7RUFDRSxzQkFBQTtBQURGIiwiZmlsZSI6InByb2R1Y3QtaXRlbS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hbmd1bGFyLXNoYXBlIHtcclxuICAtLWJvcmRlci1yYWRpdXM6IDBweCA7XHJcbiAgYm9yZGVyLXJhZGl1czogMHB4IDtcclxufVxyXG5cclxuLnJvdW5kZWQtc2hhcGUge1xyXG4gIC0tYm9yZGVyLXJhZGl1czogMjBweCA7XHJcbiAgYm9yZGVyLXJhZGl1czogMjBweCA7XHJcbn1cclxuXHJcbi5oYWxmLXJvdW5kZWQtb3BlbiB7XHJcbiAgLS1ib3JkZXItcmFkaXVzOiAyMHB4IDBweCAwcHggMjBweCA7XHJcbiAgYm9yZGVyLXJhZGl1czogMjBweCAwcHggMHB4IDIwcHggO1xyXG5cclxufVxyXG5cclxuLmhhbGYtcm91bmRlZC1jbG9zZSB7XHJcbiAgLS1ib3JkZXItcmFkaXVzOiAwcHggMjBweCAyMHB4IDBweCA7XHJcbiAgYm9yZGVyLXJhZGl1czogMHB4IDIwcHggMjBweCAwcHggO1xyXG5cclxufVxyXG4uc2VsZWN0ZWQtbGFiZWwge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1saWdodCk7XHJcbiAgbWluLXdpZHRoOiAyMHB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLnByaWNlLWxhYmVsIHtcclxuICB0ZXh0LWFsaWduOiByaWdodDtcclxufVxyXG5cclxuXHJcbmlvbi1pdGVtIHtcclxuICAtLWxpbmVzOiBcIm5vbmVcIjtcclxuICBjb2xvcjogXCJ0cmFuc3BhcmVudFwiO1xyXG59XHJcblxyXG5pbWcge1xyXG4gIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gIGhlaWdodDogMTIwcHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5zZWxlY3Rpb24tYnV0dG9uIHtcclxuICAtLWJvcmRlci13aWR0aDogMTAwcHhcclxufVxyXG4iXX0= */";
      /***/
    },

    /***/
    "Sy1n":
    /*!**********************************!*\
      !*** ./src/app/app.component.ts ***!
      \**********************************/

    /*! exports provided: AppComponent */

    /***/
    function Sy1n(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
        return AppComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./app.component.html */
      "VzVu");
      /* harmony import */


      var _app_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app.component.scss */
      "ynWL");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/storage-angular */
      "jSNZ");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var AppComponent = /*#__PURE__*/function () {
        function AppComponent(storage, router) {
          _classCallCheck(this, AppComponent);

          this.storage = storage;
          this.router = router;
        }

        _createClass(AppComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      this.router.navigate(['login']);
                      _context.next = 3;
                      return this.storage.create();

                    case 3:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }]);

        return AppComponent;
      }();

      AppComponent.ctorParameters = function () {
        return [{
          type: _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_4__["Storage"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
        }];
      };

      AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-root',
        template: _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_app_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], AppComponent);
      /***/
    },

    /***/
    "VzVu":
    /*!**************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
      \**************************************************************************/

    /*! exports provided: default */

    /***/
    function VzVu(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-app>\n  <ion-router-outlet></ion-router-outlet>\n</ion-app>\n";
      /***/
    },

    /***/
    "ZAI4":
    /*!*******************************!*\
      !*** ./src/app/app.module.ts ***!
      \*******************************/

    /*! exports provided: AppModule */

    /***/
    function ZAI4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppModule", function () {
        return AppModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./app-routing.module */
      "vY5A");
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./app.component */
      "Sy1n");
      /* harmony import */


      var _shared_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./shared.module */
      "d2mR");
      /* harmony import */


      var _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @ionic/storage-angular */
      "jSNZ");

      var AppModule = function AppModule() {
        _classCallCheck(this, AppModule);
      };

      AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]],
        entryComponents: [],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"], _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_9__["IonicStorageModule"].forRoot(), _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"].forRoot(), _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"], _shared_module__WEBPACK_IMPORTED_MODULE_8__["SharedModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"]],
        providers: [{
          provide: _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouteReuseStrategy"],
          useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicRouteStrategy"]
        }],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
      })], AppModule);
      /***/
    },

    /***/
    "ZZSh":
    /*!******************************************************!*\
      !*** ./src/app/modules/checkout/checkout.service.ts ***!
      \******************************************************/

    /*! exports provided: CheckoutService */

    /***/
    function ZZSh(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CheckoutService", function () {
        return CheckoutService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../environments/environment */
      "AytR");

      var CheckoutService = /*#__PURE__*/function () {
        function CheckoutService(http) {
          _classCallCheck(this, CheckoutService);

          this.http = http;
        }

        _createClass(CheckoutService, [{
          key: "getCart",
          value: function getCart(cart) {
            return this.http.get("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl, "carts/").concat(cart));
          }
        }, {
          key: "newCart",
          value: function newCart(ddp_user) {
            return this.http.post("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl, "carts/"), {
              ddp_user: ddp_user
            });
          }
        }, {
          key: "addToCart",
          value: function addToCart(product, cart) {
            return this.http.post("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl, "carts/").concat(cart, "/add-product/"), {
              product: product
            });
          }
        }, {
          key: "removeFromCart",
          value: function removeFromCart(product, cart) {
            return this.http.post("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl, "carts/").concat(cart, "/remove-product/"), {
              product: product
            });
          }
        }, {
          key: "makeTransaction",
          value: function makeTransaction(cart) {
            return this.http.post("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl, "transactions/"), {
              cart: cart
            });
          }
        }]);

        return CheckoutService;
      }();

      CheckoutService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }];
      };

      CheckoutService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], CheckoutService);
      /***/
    },

    /***/
    "d2mR":
    /*!**********************************!*\
      !*** ./src/app/shared.module.ts ***!
      \**********************************/

    /*! exports provided: SharedModule */

    /***/
    function d2mR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SharedModule", function () {
        return SharedModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _components_product_item_product_item_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./components/product-item/product-item.component */
      "syk4");
      /* harmony import */


      var _components_list_item_list_item_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./components/list-item/list-item.component */
      "htI+");

      var SharedModule_1;

      var SharedModule = SharedModule_1 = /*#__PURE__*/function () {
        function SharedModule() {
          _classCallCheck(this, SharedModule);
        }

        _createClass(SharedModule, null, [{
          key: "forRoot",
          value: function forRoot() {
            return {
              ngModule: SharedModule_1,
              providers: []
            };
          }
        }]);

        return SharedModule;
      }();

      SharedModule = SharedModule_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [],
        exports: [_components_product_item_product_item_component__WEBPACK_IMPORTED_MODULE_2__["ProductItemComponent"], _components_list_item_list_item_component__WEBPACK_IMPORTED_MODULE_3__["ListItemComponent"]],
        entryComponents: [_components_product_item_product_item_component__WEBPACK_IMPORTED_MODULE_2__["ProductItemComponent"], _components_list_item_list_item_component__WEBPACK_IMPORTED_MODULE_3__["ListItemComponent"]],
        declarations: [_components_product_item_product_item_component__WEBPACK_IMPORTED_MODULE_2__["ProductItemComponent"], _components_list_item_list_item_component__WEBPACK_IMPORTED_MODULE_3__["ListItemComponent"]]
      })], SharedModule);
      /***/
    },

    /***/
    "htI+":
    /*!*************************************************************!*\
      !*** ./src/app/components/list-item/list-item.component.ts ***!
      \*************************************************************/

    /*! exports provided: ListItemComponent */

    /***/
    function htI(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ListItemComponent", function () {
        return ListItemComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_list_item_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./list-item.component.html */
      "vL3t");
      /* harmony import */


      var _list_item_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./list-item.component.scss */
      "pbh2");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _modules_checkout_checkout_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../modules/checkout/checkout.service */
      "ZZSh");

      var ListItemComponent = /*#__PURE__*/function () {
        function ListItemComponent(checkoutService, toastController) {
          _classCallCheck(this, ListItemComponent);

          this.checkoutService = checkoutService;
          this.toastController = toastController;
          this.disabled = false;
          this.visible = true;
          this.cartChange = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
          this.delayAdd = false;
          this.delayRemove = false;
        }

        _createClass(ListItemComponent, [{
          key: "increment",
          value: function increment() {
            var _this = this;

            this.delayAdd = true;
            console.log(this.cart);
            this.checkoutService.addToCart(this.cartProduct.product.pk, this.cart.pk).subscribe(function (r) {
              return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
                var _this2 = this;

                var toast;
                return regeneratorRuntime.wrap(function _callee2$(_context2) {
                  while (1) {
                    switch (_context2.prev = _context2.next) {
                      case 0:
                        this.cartChange.emit({
                          cart: r,
                          cartProduct: r.cart_products.find(function (x) {
                            return x.product.pk == _this2.cartProduct.product.pk;
                          })
                        });
                        this.delayAdd = false;
                        _context2.next = 4;
                        return this.toastController.create({
                          message: "Hecho! Subtotal de ".concat(r.subtotal, "\u20AC acumulados!"),
                          duration: 1000,
                          color: 'primary'
                        });

                      case 4:
                        toast = _context2.sent;
                        toast.present();

                      case 6:
                      case "end":
                        return _context2.stop();
                    }
                  }
                }, _callee2, this);
              }));
            }, function (err) {
              return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
                var toast;
                return regeneratorRuntime.wrap(function _callee3$(_context3) {
                  while (1) {
                    switch (_context3.prev = _context3.next) {
                      case 0:
                        this.delayAdd = false;
                        _context3.next = 3;
                        return this.toastController.create({
                          message: 'Estamos teniendo problemas técnicos. Por favor, intente nuevamente.',
                          duration: 1000,
                          color: 'danger'
                        });

                      case 3:
                        toast = _context3.sent;
                        toast.present();

                      case 5:
                      case "end":
                        return _context3.stop();
                    }
                  }
                }, _callee3, this);
              }));
            });
          }
        }, {
          key: "decrement",
          value: function decrement() {
            var _this3 = this;

            this.delayRemove = true;
            this.checkoutService.removeFromCart(this.cartProduct.product.pk, this.cart.pk).subscribe(function (r) {
              return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this3, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
                var _this4 = this;

                var toast;
                return regeneratorRuntime.wrap(function _callee4$(_context4) {
                  while (1) {
                    switch (_context4.prev = _context4.next) {
                      case 0:
                        this.cartChange.emit({
                          cart: r,
                          cartProduct: r.cart_products.find(function (x) {
                            return x.product.pk == _this4.cartProduct.product.pk;
                          })
                        });
                        this.delayRemove = false;
                        _context4.next = 4;
                        return this.toastController.create({
                          message: "Hecho! Subtotal de ".concat(r.subtotal, "\u20AC acumulados!"),
                          duration: 1000,
                          color: 'primary'
                        });

                      case 4:
                        toast = _context4.sent;
                        toast.present();

                      case 6:
                      case "end":
                        return _context4.stop();
                    }
                  }
                }, _callee4, this);
              }));
            }, function (err) {
              return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this3, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
                var toast;
                return regeneratorRuntime.wrap(function _callee5$(_context5) {
                  while (1) {
                    switch (_context5.prev = _context5.next) {
                      case 0:
                        this.delayRemove = false;
                        _context5.next = 3;
                        return this.toastController.create({
                          message: 'Estamos teniendo problemas técnicos. Por favor, intente nuevamente.',
                          duration: 1000,
                          color: 'danger'
                        });

                      case 3:
                        toast = _context5.sent;
                        toast.present();

                      case 5:
                      case "end":
                        return _context5.stop();
                    }
                  }
                }, _callee5, this);
              }));
            });
          }
        }]);

        return ListItemComponent;
      }();

      ListItemComponent.ctorParameters = function () {
        return [{
          type: _modules_checkout_checkout_service__WEBPACK_IMPORTED_MODULE_5__["CheckoutService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"]
        }];
      };

      ListItemComponent.propDecorators = {
        cartProduct: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        cart: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        disabled: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        visible: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        angularShape: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        cartChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
        }]
      };
      ListItemComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'list-item',
        template: _raw_loader_list_item_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_list_item_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], ListItemComponent);
      /***/
    },

    /***/
    "kLfG":
    /*!*****************************************************************************************************************************************!*\
      !*** ./node_modules/@ionic/core/dist/esm lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
      \*****************************************************************************************************************************************/

    /*! no static exports found */

    /***/
    function kLfG(module, exports, __webpack_require__) {
      var map = {
        "./ion-action-sheet.entry.js": ["dUtr", "common", 0],
        "./ion-alert.entry.js": ["Q8AI", "common", 1],
        "./ion-app_8.entry.js": ["hgI1", "common", 2],
        "./ion-avatar_3.entry.js": ["CfoV", "common", 3],
        "./ion-back-button.entry.js": ["Nt02", "common", 4],
        "./ion-backdrop.entry.js": ["Q2Bp", 5],
        "./ion-button_2.entry.js": ["0Pbj", "common", 6],
        "./ion-card_5.entry.js": ["ydQj", "common", 7],
        "./ion-checkbox.entry.js": ["4fMi", "common", 8],
        "./ion-chip.entry.js": ["czK9", "common", 9],
        "./ion-col_3.entry.js": ["/CAe", 10],
        "./ion-datetime_3.entry.js": ["WgF3", "common", 11],
        "./ion-fab_3.entry.js": ["uQcF", "common", 12],
        "./ion-img.entry.js": ["wHD8", 13],
        "./ion-infinite-scroll_2.entry.js": ["2lz6", 14],
        "./ion-input.entry.js": ["ercB", "common", 15],
        "./ion-item-option_3.entry.js": ["MGMP", "common", 16],
        "./ion-item_8.entry.js": ["9bur", "common", 17],
        "./ion-loading.entry.js": ["cABk", "common", 18],
        "./ion-menu_3.entry.js": ["kyFE", "common", 19],
        "./ion-modal.entry.js": ["TvZU", "common", 20],
        "./ion-nav_2.entry.js": ["vnES", "common", 21],
        "./ion-popover.entry.js": ["qCuA", "common", 22],
        "./ion-progress-bar.entry.js": ["0tOe", "common", 23],
        "./ion-radio_2.entry.js": ["h11V", "common", 24],
        "./ion-range.entry.js": ["XGij", "common", 25],
        "./ion-refresher_2.entry.js": ["nYbb", "common", 26],
        "./ion-reorder_2.entry.js": ["smMY", "common", 27],
        "./ion-ripple-effect.entry.js": ["STjf", 28],
        "./ion-route_4.entry.js": ["k5eQ", "common", 29],
        "./ion-searchbar.entry.js": ["OR5t", "common", 30],
        "./ion-segment_2.entry.js": ["fSgp", "common", 31],
        "./ion-select_3.entry.js": ["lfGF", "common", 32],
        "./ion-slide_2.entry.js": ["5xYT", 33],
        "./ion-spinner.entry.js": ["nI0H", "common", 34],
        "./ion-split-pane.entry.js": ["NAQR", 35],
        "./ion-tab-bar_2.entry.js": ["knkW", "common", 36],
        "./ion-tab_2.entry.js": ["TpdJ", "common", 37],
        "./ion-text.entry.js": ["ISmu", "common", 38],
        "./ion-textarea.entry.js": ["U7LX", "common", 39],
        "./ion-toast.entry.js": ["L3sA", "common", 40],
        "./ion-toggle.entry.js": ["IUOf", "common", 41],
        "./ion-virtual-scroll.entry.js": ["8Mb5", 42]
      };

      function webpackAsyncContext(req) {
        if (!__webpack_require__.o(map, req)) {
          return Promise.resolve().then(function () {
            var e = new Error("Cannot find module '" + req + "'");
            e.code = 'MODULE_NOT_FOUND';
            throw e;
          });
        }

        var ids = map[req],
            id = ids[0];
        return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function () {
          return __webpack_require__(id);
        });
      }

      webpackAsyncContext.keys = function webpackAsyncContextKeys() {
        return Object.keys(map);
      };

      webpackAsyncContext.id = "kLfG";
      module.exports = webpackAsyncContext;
      /***/
    },

    /***/
    "pbh2":
    /*!***************************************************************!*\
      !*** ./src/app/components/list-item/list-item.component.scss ***!
      \***************************************************************/

    /*! exports provided: default */

    /***/
    function pbh2(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".angular-shape {\n  --border-radius: 0px ;\n  border-radius: 0px;\n}\n\n.rounded-shape {\n  --border-radius: 40px ;\n  border-radius: 40px;\n}\n\n.half-rounded-open {\n  --border-radius: 40px 0px 0px 40px ;\n  border-radius: 40px 0px 0px 40px;\n}\n\n.half-rounded-close {\n  --border-radius: 0px 40px 40px 0px ;\n  border-radius: 0px 40px 40px 0px;\n}\n\n.selected-label {\n  background-color: var(--ion-color-light);\n  min-width: 40px;\n  text-align: center;\n}\n\n.selected-label {\n  text-align: center;\n}\n\nion-card-title {\n  margin-left: 16px;\n}\n\nion-item {\n  --lines:\"none\";\n}\n\nimg {\n  -o-object-fit: cover;\n     object-fit: cover;\n  height: 100px;\n  width: -webkit-max-content;\n  width: -moz-max-content;\n  width: max-content;\n}\n\n.selection-button {\n  --border-width: 100px ;\n}\n\n.price-label {\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxsaXN0LWl0ZW0uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxxQkFBQTtFQUNBLGtCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxzQkFBQTtFQUNBLG1CQUFBO0FBQ0Y7O0FBRUE7RUFDRSxtQ0FBQTtFQUNBLGdDQUFBO0FBQ0Y7O0FBR0E7RUFDRSxtQ0FBQTtFQUNBLGdDQUFBO0FBQUY7O0FBR0E7RUFDRSx3Q0FBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQUFGOztBQUdBO0VBQ0Usa0JBQUE7QUFBRjs7QUFJQTtFQUNFLGlCQUFBO0FBREY7O0FBSUE7RUFDRSxjQUFBO0FBREY7O0FBSUE7RUFDRSxvQkFBQTtLQUFBLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLDBCQUFBO0VBQUEsdUJBQUE7RUFBQSxrQkFBQTtBQURGOztBQUlBO0VBQ0Usc0JBQUE7QUFERjs7QUFJQTtFQUNFLGtCQUFBO0FBREYiLCJmaWxlIjoibGlzdC1pdGVtLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFuZ3VsYXItc2hhcGUge1xyXG4gIC0tYm9yZGVyLXJhZGl1czogMHB4IDtcclxuICBib3JkZXItcmFkaXVzOiAwcHggO1xyXG59XHJcblxyXG4ucm91bmRlZC1zaGFwZSB7XHJcbiAgLS1ib3JkZXItcmFkaXVzOiA0MHB4IDtcclxuICBib3JkZXItcmFkaXVzOiA0MHB4IDtcclxufVxyXG5cclxuLmhhbGYtcm91bmRlZC1vcGVuIHtcclxuICAtLWJvcmRlci1yYWRpdXM6IDQwcHggMHB4IDBweCA0MHB4IDtcclxuICBib3JkZXItcmFkaXVzOiA0MHB4IDBweCAwcHggNDBweCA7XHJcblxyXG59XHJcblxyXG4uaGFsZi1yb3VuZGVkLWNsb3NlIHtcclxuICAtLWJvcmRlci1yYWRpdXM6IDBweCA0MHB4IDQwcHggMHB4IDtcclxuICBib3JkZXItcmFkaXVzOiAwcHggNDBweCA0MHB4IDBweCA7XHJcblxyXG59XHJcbi5zZWxlY3RlZC1sYWJlbCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcclxuICBtaW4td2lkdGg6IDQwcHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uc2VsZWN0ZWQtbGFiZWwge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuXHJcbmlvbi1jYXJkLXRpdGxlIHtcclxuICBtYXJnaW4tbGVmdDogMTZweDtcclxufVxyXG5cclxuaW9uLWl0ZW0ge1xyXG4gIC0tbGluZXM6XCJub25lXCI7XHJcbn1cclxuXHJcbmltZyB7XHJcbiAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgaGVpZ2h0OiAxMDBweDtcclxuICB3aWR0aDogbWF4LWNvbnRlbnQ7XHJcbn1cclxuXHJcbi5zZWxlY3Rpb24tYnV0dG9uIHtcclxuICAtLWJvcmRlci13aWR0aDogMTAwcHhcclxufVxyXG5cclxuLnByaWNlLWxhYmVsIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuIl19 */";
      /***/
    },

    /***/
    "syk4":
    /*!*******************************************************************!*\
      !*** ./src/app/components/product-item/product-item.component.ts ***!
      \*******************************************************************/

    /*! exports provided: ProductItemComponent */

    /***/
    function syk4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProductItemComponent", function () {
        return ProductItemComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_product_item_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./product-item.component.html */
      "xS5k");
      /* harmony import */


      var _product_item_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./product-item.component.scss */
      "IMy3");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _list_item_list_item_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../list-item/list-item.component */
      "htI+");

      var ProductItemComponent = /*#__PURE__*/function (_list_item_list_item_) {
        _inherits(ProductItemComponent, _list_item_list_item_);

        var _super = _createSuper(ProductItemComponent);

        function ProductItemComponent() {
          _classCallCheck(this, ProductItemComponent);

          return _super.apply(this, arguments);
        }

        return ProductItemComponent;
      }(_list_item_list_item_component__WEBPACK_IMPORTED_MODULE_4__["ListItemComponent"]);

      ProductItemComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'product-item',
        template: _raw_loader_product_item_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_product_item_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], ProductItemComponent);
      /***/
    },

    /***/
    "vL3t":
    /*!*****************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/list-item/list-item.component.html ***!
      \*****************************************************************************************************/

    /*! exports provided: default */

    /***/
    function vL3t(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-item  lines=\"none\">\r\n  <ion-item lines=\"none\" >\r\n    <ion-label>{{cartProduct.product.name}}</ion-label>\r\n\r\n  </ion-item>\r\n\r\n  <ion-label class=\"price-label\">{{cartProduct.product.price}} €</ion-label>\r\n  <ion-item>\r\n      <ion-button (click)=\"decrement()\" color=\"danger\" [class.half-rounded-open]=\"!angularShape\" [class.angular-shape]=\"angularShape\" size=\"small\"\r\n      [disabled]=\"delayRemove || !cartProduct.count\">\r\n        <ion-icon name=\"remove\"></ion-icon>\r\n      </ion-button>\r\n      <ion-label class=\"selected-label\" >{{cartProduct.count ? cartProduct.count : 0}}</ion-label>\r\n      <ion-button (click)=\"increment()\" color=\"primary\" [class.half-rounded-close]=\"!angularShape\" [class.angular-shape]=\"angularShape\" size=\"small\"\r\n      [disabled]=\"delayAdd\">\r\n        <ion-icon name=\"add\"></ion-icon>\r\n      </ion-button>\r\n  </ion-item>\r\n</ion-item>\r\n";
      /***/
    },

    /***/
    "vY5A":
    /*!***************************************!*\
      !*** ./src/app/app-routing.module.ts ***!
      \***************************************/

    /*! exports provided: AppRoutingModule */

    /***/
    function vY5A(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
        return AppRoutingModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var routes = [{
        path: 'tabs',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | tabs-tabs-module */
          "tabs-tabs-module").then(__webpack_require__.bind(null,
          /*! ./tabs/tabs.module */
          "hO9l")).then(function (m) {
            return m.TabsPageModule;
          });
        }
      }, {
        path: 'login',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | modules-login-login-module */
          [__webpack_require__.e("default~modules-checkout-checkout-module~modules-login-login-module~modules-menu-menu-module"), __webpack_require__.e("modules-login-login-module")]).then(__webpack_require__.bind(null,
          /*! ./modules/login/login.module */
          "g7DB")).then(function (m) {
            return m.LoginPageModule;
          });
        }
      }, {
        path: 'error',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | modules-error-error-module */
          "modules-error-error-module").then(__webpack_require__.bind(null,
          /*! ./modules/error/error.module */
          "BA7n")).then(function (m) {
            return m.ErrorPageModule;
          });
        }
      }];

      var AppRoutingModule = function AppRoutingModule() {
        _classCallCheck(this, AppRoutingModule);
      };

      AppRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, {
          preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_2__["PreloadAllModules"]
        })],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], AppRoutingModule);
      /***/
    },

    /***/
    "xS5k":
    /*!***********************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/product-item/product-item.component.html ***!
      \***********************************************************************************************************/

    /*! exports provided: default */

    /***/
    function xS5k(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-item lines=\"none\">\r\n  <ion-card [class.rounded-shape]=\"!angularShape\" [class.angular-shape]=\"angularShape\">\r\n    <ion-card-header class=\"ion-no-padding rounded-shape\">\r\n      <img src=\"{{cartProduct.product.image_url}}\"/>\r\n      <ion-item lines=\"none\">\r\n        <ion-card-title>{{cartProduct.product.name}}</ion-card-title>\r\n        <ion-label class=\"price-label\">{{cartProduct.product.price}} €</ion-label>\r\n      </ion-item>\r\n\r\n\r\n    </ion-card-header>\r\n    <ion-card-content>\r\n      {{cartProduct.product.description}}\r\n      <ion-item lines=\"none\" >\r\n        <ion-item slot=\"end\"  lines=\"none\" >\r\n          <ion-button\r\n            (click)=\"decrement()\"\r\n            color=\"danger\"\r\n            [class.half-rounded-open]=\"!angularShape\"\r\n            [class.angular-shape]=\"angularShape\"\r\n            size=\"small\"\r\n            [disabled]=\"delayRemove || !cartProduct.count\">\r\n            <ion-icon name=\"remove\"></ion-icon>\r\n          </ion-button>\r\n          <ion-label class=\"selected-label\" >{{cartProduct.count ? cartProduct.count : 0}}</ion-label>\r\n          <ion-button\r\n            (click)=\"increment()\"\r\n            color=\"primary\"\r\n            [class.half-rounded-close]=\"!angularShape\"\r\n            [class.angular-shape]=\"angularShape\"\r\n            size=\"small\"\r\n            [disabled]=\"delayAdd\">\r\n            <ion-icon name=\"add\"></ion-icon>\r\n          </ion-button>\r\n        </ion-item>\r\n      </ion-item>\r\n    </ion-card-content>\r\n  </ion-card>\r\n</ion-item>\r\n";
      /***/
    },

    /***/
    "ynWL":
    /*!************************************!*\
      !*** ./src/app/app.component.scss ***!
      \************************************/

    /*! exports provided: default */

    /***/
    function ynWL(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */";
      /***/
    },

    /***/
    "zUnb":
    /*!*********************!*\
      !*** ./src/main.ts ***!
      \*********************/

    /*! no exports provided */

    /***/
    function zUnb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/platform-browser-dynamic */
      "a3Wg");
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app/app.module */
      "ZAI4");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./environments/environment */
      "AytR");

      if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
      }

      Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
        return console.log(err);
      });
      /***/
    },

    /***/
    "zn8P":
    /*!******************************************************!*\
      !*** ./$$_lazy_route_resource lazy namespace object ***!
      \******************************************************/

    /*! no static exports found */

    /***/
    function zn8P(module, exports) {
      function webpackEmptyAsyncContext(req) {
        // Here Promise.resolve().then() is used instead of new Promise() to prevent
        // uncaught exception popping up in devtools
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      webpackEmptyAsyncContext.keys = function () {
        return [];
      };

      webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
      module.exports = webpackEmptyAsyncContext;
      webpackEmptyAsyncContext.id = "zn8P";
      /***/
    }
  }, [[0, "runtime", "vendor"]]]);
})();
//# sourceMappingURL=main-es5.js.map