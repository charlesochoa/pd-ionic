(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-checkout-checkout-module"],{

/***/ "M56Z":
/*!************************************************!*\
  !*** ./src/app/modules/checkout/class/cart.ts ***!
  \************************************************/
/*! exports provided: Cart */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Cart", function() { return Cart; });
class Cart {
    constructor() {
        this.pk = "";
        this.creation_date = null;
        this.cart_products = [];
        this.ddp_user = null;
        this.subtotal = 0;
        this.subtotalSinIva = 0;
        this.delivery = 2.5;
        this.discounts = 0.3;
        this.iva = 0.21;
    }
}


/***/ }),

/***/ "Nl/n":
/*!***************************************************!*\
  !*** ./src/app/modules/checkout/checkout.page.ts ***!
  \***************************************************/
/*! exports provided: CheckoutPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckoutPage", function() { return CheckoutPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_checkout_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./checkout.page.html */ "QiIZ");
/* harmony import */ var _checkout_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./checkout.page.scss */ "lrHL");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _login_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../login/auth.service */ "GOjK");
/* harmony import */ var _checkout_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./checkout.service */ "ZZSh");
/* harmony import */ var _class_cart__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./class/cart */ "M56Z");









let CheckoutPage = class CheckoutPage {
    constructor(checkoutService, authService, alertController, toastController, router) {
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
    ionViewWillEnter() {
        this.authService.getLocalUser().then(u => {
            this.user = u;
            console.log(this.user);
            if (this.user.cartPk) {
                this.checkoutService.getCart(this.user.cartPk).subscribe(c => {
                    this.cart.subtotal = c.subtotal;
                    this.cart.pk = c.pk;
                    this.calculateCart();
                    this.cartProducts = c.cart_products;
                    this.delay = false;
                });
            }
        }, err => {
            this.router.navigate(['']);
        });
    }
    ionViewDidLeave() {
        this.cartProducts = [];
        this.cart = new _class_cart__WEBPACK_IMPORTED_MODULE_8__["Cart"]();
        this.delay = true;
    }
    calculateCart() {
        const iva = 0.21;
        const discounts = 0.3;
        const delivery = 2.5;
        if (this.cart.subtotal > 0) {
            this.cart.subtotalSinIva = this.cart.subtotal - this.cart.subtotal * iva;
            this.cart.iva = this.cart.subtotal * iva;
            this.cart.discounts = this.cart.subtotal * discounts * (-1.0);
            this.cart.delivery = delivery;
            this.cart.total = this.cart.subtotal - discounts * (-1.0) + delivery;
        }
        else {
            this.cart.subtotalSinIva = 0;
            this.cart.iva = 0;
            this.cart.discounts = 0;
            this.cart.delivery = 0;
            this.cart.total = 0;
        }
    }
    modifyCart(event, index) {
        this.cart.subtotal = event.cart.subtotal;
        this.cart.pk = event.cart.pk;
        if (event.cartProduct && event.cartProduct.count > 0) {
            this.cartProducts[index].count = event.cartProduct.count;
        }
        else {
            this.cartProducts.splice(index, 1);
        }
        this.calculateCart();
    }
    submit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                cssClass: 'my-custom-class',
                header: 'Ya estás casi listo!',
                message: `¿Seguro que deseas realizar esta compra por un total de <strong>${this.cart.total} €</strong>?`,
                buttons: [
                    {
                        text: 'Todavía no',
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: (blah) => {
                        }
                    },
                    {
                        text: 'Seguro!',
                        handler: () => {
                            this.checkoutService.makeTransaction(this.cart.pk).subscribe((t) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                                const toast = yield this.toastController.create({
                                    message: `¡Prueba finalizada! <strong>¡Muchisimas gracias!</strong> revisa tu correo y en cuanto puedas nos comentas qué tal te pareció nuestra propuesta!`,
                                    duration: 10000,
                                    position: 'middle'
                                });
                                yield this.authService.clear();
                                toast.present();
                                this.router.navigate(['']);
                            }), (err) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                                const toast = yield this.toastController.create({
                                    message: 'Estamos teniendo problemas técnicos. Por favor, intente nuevamente.',
                                    duration: 1000,
                                    color: 'danger'
                                });
                                toast.present();
                            }));
                        }
                    }
                ]
            });
            alert.present();
        });
    }
};
CheckoutPage.ctorParameters = () => [
    { type: _checkout_service__WEBPACK_IMPORTED_MODULE_7__["CheckoutService"] },
    { type: _login_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ToastController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
CheckoutPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-checkout',
        template: _raw_loader_checkout_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_checkout_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], CheckoutPage);



/***/ }),

/***/ "QiIZ":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/checkout/checkout.page.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header background=\"danger\">\n  <ion-toolbar>\n      <ion-title slot=\"start\">\n        <img\n            src=\"../../../assets/images/icon.jpg\" height=\"40px\"\n          />\n      </ion-title>\n    <ion-title slot=\"start\">\n        <img\n            src=\"../../../assets/images/letters.png\" height=\"20px\"\n          />\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content [fullscreen]=\"true\">\n  <ion-header collapse=\"condense\">\n    <ion-toolbar>\n      <ion-title size=\"large\">Checkout</ion-title>\n    </ion-toolbar>\n  </ion-header>\n  <ion-list *ngIf=\"cartProducts\" lines=\"none\">\n    <ion-item-group>\n      <ion-item-divider>\n        <ion-label>Resumen de compra</ion-label>\n      </ion-item-divider>\n      <list-item *ngFor=\"let item of cartProducts; let i = index\"\n        (cartChange)=\"modifyCart($event, i)\"\n        [cartProduct]= \"item\"\n        [cart]= \"cart\"\n        class=\"item animated delay-0{{ i+3 }}s\"\n        [angularShape]=\"user.angularShape\">\n      </list-item>\n      <ion-item lines=\"none\" *ngIf=\"cartProducts.length==0\" class=\"item animated delay-0{{ 3 }}s\">\n        <label color=\"light\" class=\"summary-label\" slot=\"primary\">Aún no has agregado ninguna pizza al carrito.</label>\n      </ion-item>\n    </ion-item-group>\n  </ion-list>\n\n</ion-content>\n<ion-footer *ngIf=\"cart && !delay\">\n  <ion-item-group>\n    <ion-item-divider>\n      <ion-label>Subtotal</ion-label>\n    </ion-item-divider>\n    <ion-item lines=\"none\">\n\n      <ion-label>Subtotal productos</ion-label>\n      <ion-label class=\"summary-label\">{{cart.subtotal | number: '1.0-2'}} €</ion-label>\n    </ion-item>\n    <ion-item lines=\"none\">\n\n      <ion-label>IVA</ion-label>\n      <ion-label class=\"summary-label\">{{cart.iva | number: '1.0-2'}} €</ion-label>\n    </ion-item>\n    <ion-item lines=\"none\">\n      <ion-label color=\"success\">Descuentos</ion-label>\n      <ion-label class=\"summary-label\" color=\"success\">{{cart.discounts | number: '1.0-2'}} €</ion-label>\n    </ion-item>\n\n    <ion-item lines=\"none\">\n      <ion-label>Envío</ion-label>\n      <ion-label class=\"summary-label\">{{cart.delivery }} €</ion-label>\n    </ion-item>\n\n    <ion-item lines=\"none\">\n      <ion-label><strong>TOTAL</strong></ion-label>\n      <ion-label class=\"summary-label\"><strong>{{ cart.total | number: '1.0-2'}} €</strong></ion-label>\n    </ion-item>\n    <ion-button *ngIf=\"user\"\n      [style.color]=\"secondary\"\n      [style.border]=\"secondary\"\n      expand=\"block\"\n      [class.rounded-shape]=\"!user.angularShape\" [class.angular-shape]=\"user.angularShape\"\n      (click)=\"submit()\"\n      >\n      Realizar el Pago y a Disfrutar!\n    </ion-button>\n  </ion-item-group>\n\n</ion-footer>\n");

/***/ }),

/***/ "bqgV":
/*!*****************************************************!*\
  !*** ./src/app/modules/checkout/checkout.module.ts ***!
  \*****************************************************/
/*! exports provided: CheckoutPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckoutPageModule", function() { return CheckoutPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _checkout_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./checkout.page */ "Nl/n");
/* harmony import */ var _shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shared.module */ "d2mR");








let CheckoutPageModule = class CheckoutPageModule {
};
CheckoutPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
            _shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([{ path: '', component: _checkout_page__WEBPACK_IMPORTED_MODULE_6__["CheckoutPage"] }])
        ],
        declarations: [_checkout_page__WEBPACK_IMPORTED_MODULE_6__["CheckoutPage"]]
    })
], CheckoutPageModule);



/***/ }),

/***/ "lrHL":
/*!*****************************************************!*\
  !*** ./src/app/modules/checkout/checkout.page.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-header ion-toolbar {\n  --background: var(--ion-color-danger);\n}\n\n.item {\n  display: block;\n  cursor: pointer;\n  -webkit-animation-name: fadeInUp;\n  animation-name: fadeInUp;\n}\n\n.angular-shape {\n  --border-radius: 0px ;\n  border-radius: 0px;\n}\n\n.rounded-shape {\n  --border-radius: 40px ;\n  border-radius: 40px;\n}\n\n.summary-label {\n  text-align: right;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxjaGVja291dC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0U7RUFDRSxxQ0FBQTtBQUZKOztBQU1BO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSxnQ0FBQTtFQUNBLHdCQUFBO0FBSEY7O0FBTUE7RUFDRSxxQkFBQTtFQUNBLGtCQUFBO0FBSEY7O0FBTUE7RUFDRSxzQkFBQTtFQUNBLG1CQUFBO0FBSEY7O0FBTUE7RUFDRSxpQkFBQTtBQUhGIiwiZmlsZSI6ImNoZWNrb3V0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5cclxuaW9uLWhlYWRlciB7XHJcbiAgaW9uLXRvb2xiYXIge1xyXG4gICAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItZGFuZ2VyKTtcclxuICB9XHJcbn1cclxuXHJcbi5pdGVtIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgLXdlYmtpdC1hbmltYXRpb24tbmFtZTogZmFkZUluVXA7XHJcbiAgYW5pbWF0aW9uLW5hbWU6IGZhZGVJblVwO1xyXG59XHJcblxyXG4uYW5ndWxhci1zaGFwZSB7XHJcbiAgLS1ib3JkZXItcmFkaXVzOiAwcHggO1xyXG4gIGJvcmRlci1yYWRpdXM6IDBweCA7XHJcbn1cclxuXHJcbi5yb3VuZGVkLXNoYXBlIHtcclxuICAtLWJvcmRlci1yYWRpdXM6IDQwcHggO1xyXG4gIGJvcmRlci1yYWRpdXM6IDQwcHggO1xyXG59XHJcblxyXG4uc3VtbWFyeS1sYWJlbCB7XHJcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbn1cclxuIl19 */");

/***/ })

}]);
//# sourceMappingURL=modules-checkout-checkout-module-es2015.js.map