webpackJsonp([1,4],{

/***/ 100:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_service_resource_service__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_service_user_service__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_app_service_login_service__ = __webpack_require__(18);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IndexComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var IndexComponent = (function () {
    function IndexComponent(router, resourceService, loginService, activatedRoute, userService) {
        var _this = this;
        this.router = router;
        this.resourceService = resourceService;
        this.loginService = loginService;
        this.userService = userService;
        this.resources2 = [];
        this.resources = [];
        this.actualPage = 0;
        this.nResources = 0;
        this.loadMore = false;
        //this.addResources(true);
        var id = activatedRoute.params.subscribe(function (params) {
            _this.resourceService.getResource(params['id']).subscribe(function (resource) {
                _this.resource = resource;
            }, function (error) { return console.error(error); });
        });
        /* let id = activatedRoute.snapshot.params['id'];
         resourceService.getResource(id).subscribe(
           resource => this.resource = resource,
           error => console.error(error)
     
         );
         this.resourceService.getRecommended().subscribe(
             resources2 => this.resources2 = resources2,
             error => console.error(error)
         );*/
        // this.resources = service.getResources();
    }
    IndexComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.resourceService.getResources().subscribe(function (resources) {
            _this.resources = resources.content,
                console.log(_this.resources);
        }, function (error) { return console.log(error); });
        this.resourceService.getAmountResources().subscribe(function (nResources) { return _this.nResources = nResources; }, function (error) { return console.error(error); });
    };
    IndexComponent.prototype.loadMoreResources = function () {
        var _this = this;
        this.actualPage += 1;
        this.resourceService.getResourcesPag('?page=' + this.actualPage + '&size=10').subscribe(function (resources) {
            var newResources = resources;
            for (var _i = 0, newResources_1 = newResources; _i < newResources_1.length; _i++) {
                var resource = newResources_1[_i];
                _this.resources.push(resource);
            }
            if (_this.resources.length == _this.nResources) {
                _this.loadMore = true;
            }
        }, function (error) { return console.log(error); });
    };
    IndexComponent.prototype.delete = function () {
        var _this = this;
        var okResponse = window.confirm("¿Quieres eliminar el vinilo?");
        if (okResponse) {
            this.resourceService.removeResource(this.resource).subscribe(function (_) { return _this.router.navigate(['']); }, function (error) { return console.error("error al eliminar el vinilo" + error); });
        }
    };
    IndexComponent.prototype.anadir = function () {
        this.router.navigate(['/perfil', this.resource.id]);
    };
    IndexComponent.prototype.editResource = function () {
        this.router.navigate(['/resource/editar', this.resource.id]);
    };
    return IndexComponent;
}());
IndexComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-index',
        template: __webpack_require__(230)
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_app_service_resource_service__["a" /* ResourceService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_app_service_resource_service__["a" /* ResourceService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4_app_service_login_service__["a" /* LoginService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_app_service_login_service__["a" /* LoginService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_3_app_service_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_app_service_user_service__["a" /* UserService */]) === "function" && _e || Object])
], IndexComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=index.component.js.map

/***/ }),

/***/ 101:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_service_login_service__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_service_user_service__ = __webpack_require__(19);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = (function () {
    function LoginComponent(loginService, router, userService) {
        var _this = this;
        this.loginService = loginService;
        this.router = router;
        this.userService = userService;
        this.userService.getUsers().subscribe(function (users) {
            _this.users = users;
            console.log(_this.users);
        }, function (error) { return console.error(error); });
    }
    LoginComponent.prototype.logIn = function (event, user, pass) {
        var _this = this;
        event.preventDefault();
        this.loginService.logIn(user, pass).subscribe(function (u) {
            console.log(u),
                _this.router.navigate(['']);
        }, function (error) { return alert('Invalid user or password'); });
    };
    LoginComponent.prototype.logOut = function () {
        this.loginService.logOut().subscribe(function (response) { }, function (error) { return console.log('Error when trying to log out: ' + error); });
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'login',
        template: __webpack_require__(231)
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_app_service_login_service__["a" /* LoginService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_app_service_login_service__["a" /* LoginService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_app_service_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_app_service_user_service__["a" /* UserService */]) === "function" && _c || Object])
], LoginComponent);

var _a, _b, _c;
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ 102:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_service_oferta_service__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_service_ofertaDescuento_service__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_app_service_login_service__ = __webpack_require__(18);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OfertasComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var OfertasComponent = (function () {
    function OfertasComponent(router, ofertaService, ofertaDescuentoService, activatedRoute, loginService) {
        var _this = this;
        this.router = router;
        this.ofertaService = ofertaService;
        this.ofertaDescuentoService = ofertaDescuentoService;
        this.loginService = loginService;
        var id = activatedRoute.snapshot.params['id'];
        ofertaService.getOferta(id).subscribe(function (oferta) { return _this.oferta = oferta; }, function (error) { return console.error(error); });
    }
    OfertasComponent.prototype.removeOferta = function () {
        var _this = this;
        var okResponse = window.confirm("Quieres eliminar la oferta");
        if (okResponse) {
            this.ofertaService.removeOferta(this.oferta).subscribe(function (oferta) { return _this.router.navigate(['']); }, function (error) { return console.error(error); });
        }
    };
    OfertasComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.ofertaService.getOfertas().subscribe(function (ofertas) { return _this.ofertas = ofertas; }, function (error) { return console.log(error); });
        this.ofertaDescuentoService.getOfertasDescuento().subscribe(function (ofertasDescuento) { return _this.ofertasDescuento = ofertasDescuento; }, function (error) { return console.log(error); });
    };
    return OfertasComponent;
}());
OfertasComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-ofertas',
        template: __webpack_require__(232)
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_app_service_oferta_service__["a" /* OfertaService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_app_service_oferta_service__["a" /* OfertaService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_app_service_ofertaDescuento_service__["a" /* OfertaDescuentoService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_app_service_ofertaDescuento_service__["a" /* OfertaDescuentoService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4_app_service_login_service__["a" /* LoginService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_app_service_login_service__["a" /* LoginService */]) === "function" && _e || Object])
], OfertasComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=ofertas.component.js.map

/***/ }),

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_service_user_service__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_service_login_service__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_app_service_purchase_service__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_app_service_resourceFavorito_service__ = __webpack_require__(108);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PerfilComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var PerfilComponent = (function () {
    function PerfilComponent(router, activatedRoute, userService, loginService, purchaseService, resourceFavoritoService) {
        var _this = this;
        this.router = router;
        this.userService = userService;
        this.loginService = loginService;
        this.purchaseService = purchaseService;
        this.resourceFavoritoService = resourceFavoritoService;
        var id = activatedRoute.params.subscribe(function (params) {
            var id = activatedRoute.snapshot.params['id'];
            _this.userService.getUserId(id).subscribe(function (user) {
                _this.user = user;
                console.log(_this.user);
            }, function (error) { return console.error(error); });
        });
    }
    PerfilComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userService.getUsers().subscribe(function (users) { return _this.users = users; }, function (error) { return console.log(error); });
        this.purchaseService.getPurchases().subscribe(function (purchases) { return _this.purchases = purchases; }, function (error) { return console.log(error); });
        this.resourceFavoritoService.getResourcesFavoritos().subscribe(function (resourcesFavoritos) { return _this.resourceFavorito = resourcesFavoritos; }, function (error) { return console.log(error); });
    };
    return PerfilComponent;
}());
PerfilComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-perfil',
        template: __webpack_require__(233)
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2_app_service_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_app_service_user_service__["a" /* UserService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3_app_service_login_service__["a" /* LoginService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_app_service_login_service__["a" /* LoginService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4_app_service_purchase_service__["a" /* PurchaseService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_app_service_purchase_service__["a" /* PurchaseService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_5_app_service_resourceFavorito_service__["a" /* ResourceFavoritoService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5_app_service_resourceFavorito_service__["a" /* ResourceFavoritoService */]) === "function" && _f || Object])
], PerfilComponent);

var _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=perfil.component.js.map

/***/ }),

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_service_user_service__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_service_login_service__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_app_service_purchase_service__ = __webpack_require__(47);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PerfilUserComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var PerfilUserComponent = (function () {
    function PerfilUserComponent(router, activatedRoute, userService, loginService, purchaseService) {
        var _this = this;
        this.router = router;
        this.userService = userService;
        this.loginService = loginService;
        this.purchaseService = purchaseService;
        var id = activatedRoute.params.subscribe(function (params) {
            var id = activatedRoute.snapshot.params['id'];
            _this.userService.getUserId(id).subscribe(function (user) {
                _this.user = user;
                console.log(_this.user);
            }, function (error) { return console.error(error); });
        });
    }
    PerfilUserComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userService.getUsers().subscribe(function (users) { return _this.users = users; }, function (error) { return console.log(error); });
    };
    return PerfilUserComponent;
}());
PerfilUserComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-perfilUser',
        template: __webpack_require__(234)
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2_app_service_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_app_service_user_service__["a" /* UserService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3_app_service_login_service__["a" /* LoginService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_app_service_login_service__["a" /* LoginService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4_app_service_purchase_service__["a" /* PurchaseService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_app_service_purchase_service__["a" /* PurchaseService */]) === "function" && _e || Object])
], PerfilUserComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=perfilUser.component.js.map

/***/ }),

/***/ 105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_service_registro_service__ = __webpack_require__(107);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegistroComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RegistroComponent = (function () {
    function RegistroComponent(registroService, router) {
        this.registroService = registroService;
        this.router = router;
    }
    RegistroComponent.prototype.register = function (name, surname, email, pais, descripcion, telephone, passwordHash, postalCode) {
        var _this = this;
        this.registroService.register(name, surname, email, pais, descripcion, telephone, passwordHash, postalCode).subscribe(function (user) { _this.router.navigate(['/login']); }, function (error) { return console.log("Fail trying to register new account"); });
    };
    return RegistroComponent;
}());
RegistroComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-registro',
        template: __webpack_require__(235)
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_app_service_registro_service__["a" /* RegistroService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_app_service_registro_service__["a" /* RegistroService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object])
], RegistroComponent);

var _a, _b;
//# sourceMappingURL=registro.component.js.map

/***/ }),

/***/ 106:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(4);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SomosComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var SomosComponent = (function () {
    function SomosComponent() {
    }
    return SomosComponent;
}());
SomosComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-somos',
        template: __webpack_require__(236)
    })
], SomosComponent);

//# sourceMappingURL=somos.component.js.map

/***/ }),

/***/ 107:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegistroService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BASE_URL = "https://localhost:8443/api/users/";
var RegistroService = (function () {
    function RegistroService(http) {
        this.http = http;
    }
    RegistroService.prototype.ngOnDestroy = function () {
        console.log("localStorage called ngOnDestroy");
        localStorage.clear();
    };
    RegistroService.prototype.register = function (name, surname, email, pais, descripcion, telefono, passwordHash, postalCode) {
        var newUser;
        newUser = { name: name, surname: surname, email: email, pais: pais, descripcion: descripcion, telephone: telefono, password: passwordHash, postalCode: postalCode };
        return this.http.post(BASE_URL, newUser);
    };
    return RegistroService;
}());
RegistroService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === "function" && _a || Object])
], RegistroService);

var _a;
//# sourceMappingURL=registro.service.js.map

/***/ }),

/***/ 108:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResourceFavoritoService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var BASE_URL = 'https://localhost:8443/api/favoritos/resources/';
var ResourceFavoritoService = (function () {
    function ResourceFavoritoService(http) {
        this.http = http;
    }
    ResourceFavoritoService.prototype.getResourcesFavoritos = function () {
        var _this = this;
        return this.http.get(BASE_URL)
            .map(function (response) { return response.json(); })
            .catch(function (error) { return _this.handleError(error); });
    };
    ResourceFavoritoService.prototype.handleError = function (error) {
        console.error(error);
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw("Server error (" + error.status + "): " + error.text());
    };
    return ResourceFavoritoService;
}());
ResourceFavoritoService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === "function" && _a || Object])
], ResourceFavoritoService);

var _a;
//# sourceMappingURL=resourceFavorito.service.js.map

/***/ }),

/***/ 158:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 158;


/***/ }),

/***/ 159:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(167);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 165:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_app_component_header_header_component__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_component_footer_footer_component__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_component_app_component__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_component_index_index_component__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_app_component_articulo_articulo_component__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_app_component_login_login_component__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_app_component_registro_registro_component__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_app_component_ofertas_ofertas_component__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_app_component_carrito_carrito_component__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_app_component_administrador_administrador_component__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_app_component_perfil_perfil_component__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_app_component_somos_somos_component__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_app_component_private_perfilUser_component__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_app_component_favoritos_favoritos_component__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_app_component_editar_editar_component__ = __webpack_require__(96);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routing; });
















var appRoutes = [
    { path: 'app', component: __WEBPACK_IMPORTED_MODULE_2_app_component_app_component__["a" /* AppComponent */] },
    { path: '', component: __WEBPACK_IMPORTED_MODULE_3_app_component_index_index_component__["a" /* IndexComponent */] },
    { path: 'header', component: __WEBPACK_IMPORTED_MODULE_0_app_component_header_header_component__["a" /* HeaderComponent */] },
    { path: 'footer', component: __WEBPACK_IMPORTED_MODULE_1_app_component_footer_footer_component__["a" /* FooterComponent */] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_6_app_component_login_login_component__["a" /* LoginComponent */] },
    { path: 'resource', component: __WEBPACK_IMPORTED_MODULE_5_app_component_articulo_articulo_component__["a" /* ArticuloComponent */] },
    { path: 'resource/:id', component: __WEBPACK_IMPORTED_MODULE_5_app_component_articulo_articulo_component__["a" /* ArticuloComponent */] },
    { path: 'ofertas', component: __WEBPACK_IMPORTED_MODULE_8_app_component_ofertas_ofertas_component__["a" /* OfertasComponent */] },
    { path: 'registro', component: __WEBPACK_IMPORTED_MODULE_7_app_component_registro_registro_component__["a" /* RegistroComponent */] },
    { path: 'carrito/:id', component: __WEBPACK_IMPORTED_MODULE_9_app_component_carrito_carrito_component__["a" /* CarritoComponent */] },
    { path: 'carrito', component: __WEBPACK_IMPORTED_MODULE_9_app_component_carrito_carrito_component__["a" /* CarritoComponent */] },
    { path: 'admin', component: __WEBPACK_IMPORTED_MODULE_10_app_component_administrador_administrador_component__["a" /* AdministradorComponent */] },
    { path: 'admin/:name', component: __WEBPACK_IMPORTED_MODULE_10_app_component_administrador_administrador_component__["a" /* AdministradorComponent */] },
    { path: 'perfil', component: __WEBPACK_IMPORTED_MODULE_11_app_component_perfil_perfil_component__["a" /* PerfilComponent */] },
    { path: 'perfil/:id', component: __WEBPACK_IMPORTED_MODULE_11_app_component_perfil_perfil_component__["a" /* PerfilComponent */] },
    { path: 'somos', component: __WEBPACK_IMPORTED_MODULE_12_app_component_somos_somos_component__["a" /* SomosComponent */] },
    { path: 'perfilUser', component: __WEBPACK_IMPORTED_MODULE_13_app_component_private_perfilUser_component__["a" /* PerfilUserComponent */] },
    { path: 'favoritos', component: __WEBPACK_IMPORTED_MODULE_14_app_component_favoritos_favoritos_component__["a" /* FavoritosComponent */] },
    { path: 'editar/:id', component: __WEBPACK_IMPORTED_MODULE_15_app_component_editar_editar_component__["a" /* EditarComponent */] }
];
var routing = __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* RouterModule */].forRoot(appRoutes);
//# sourceMappingURL=app-routing.module.js.map

/***/ }),

/***/ 166:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__component_app_component__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__component_footer_footer_component__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__component_header_header_component__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__component_index_index_component__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__component_articulo_articulo_component__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__component_login_login_component__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_app_service_login_service__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_app_app_routing_module__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__component_registro_registro_component__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__component_ofertas_ofertas_component__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_app_service_oferta_service__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_app_service_ofertaDescuento_service__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_app_service_resource_service__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_app_service_registro_service__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_app_component_carrito_carrito_component__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19_app_service_user_service__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20_app_component_administrador_administrador_component__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21_app_service_purchase_service__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22_app_component_perfil_perfil_component__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23_app_component_somos_somos_component__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24_app_service_resourceFavorito_service__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25_app_component_private_perfilUser_component__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26_app_component_favoritos_favoritos_component__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27_app_component_editar_editar_component__ = __webpack_require__(96);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




//import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
























var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__component_app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_5__component_footer_footer_component__["a" /* FooterComponent */],
            __WEBPACK_IMPORTED_MODULE_6__component_header_header_component__["a" /* HeaderComponent */],
            __WEBPACK_IMPORTED_MODULE_7__component_index_index_component__["a" /* IndexComponent */],
            __WEBPACK_IMPORTED_MODULE_8__component_articulo_articulo_component__["a" /* ArticuloComponent */],
            __WEBPACK_IMPORTED_MODULE_9__component_login_login_component__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_12__component_registro_registro_component__["a" /* RegistroComponent */],
            __WEBPACK_IMPORTED_MODULE_13__component_ofertas_ofertas_component__["a" /* OfertasComponent */],
            __WEBPACK_IMPORTED_MODULE_18_app_component_carrito_carrito_component__["a" /* CarritoComponent */],
            __WEBPACK_IMPORTED_MODULE_20_app_component_administrador_administrador_component__["a" /* AdministradorComponent */],
            __WEBPACK_IMPORTED_MODULE_22_app_component_perfil_perfil_component__["a" /* PerfilComponent */],
            __WEBPACK_IMPORTED_MODULE_23_app_component_somos_somos_component__["a" /* SomosComponent */],
            __WEBPACK_IMPORTED_MODULE_25_app_component_private_perfilUser_component__["a" /* PerfilUserComponent */],
            __WEBPACK_IMPORTED_MODULE_26_app_component_favoritos_favoritos_component__["a" /* FavoritosComponent */],
            __WEBPACK_IMPORTED_MODULE_27_app_component_editar_editar_component__["a" /* EditarComponent */]
        ],
        imports: [
            //NgbModule.forRoot(),
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* JsonpModule */],
            __WEBPACK_IMPORTED_MODULE_11_app_app_routing_module__["a" /* routing */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_16_app_service_resource_service__["a" /* ResourceService */], __WEBPACK_IMPORTED_MODULE_10_app_service_login_service__["a" /* LoginService */], __WEBPACK_IMPORTED_MODULE_14_app_service_oferta_service__["a" /* OfertaService */], __WEBPACK_IMPORTED_MODULE_15_app_service_ofertaDescuento_service__["a" /* OfertaDescuentoService */], __WEBPACK_IMPORTED_MODULE_17_app_service_registro_service__["a" /* RegistroService */], __WEBPACK_IMPORTED_MODULE_19_app_service_user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_21_app_service_purchase_service__["a" /* PurchaseService */], __WEBPACK_IMPORTED_MODULE_24_app_service_resourceFavorito_service__["a" /* ResourceFavoritoService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_4__component_app_component__["a" /* AppComponent */], __WEBPACK_IMPORTED_MODULE_5__component_footer_footer_component__["a" /* FooterComponent */], __WEBPACK_IMPORTED_MODULE_6__component_header_header_component__["a" /* HeaderComponent */], __WEBPACK_IMPORTED_MODULE_8__component_articulo_articulo_component__["a" /* ArticuloComponent */], __WEBPACK_IMPORTED_MODULE_12__component_registro_registro_component__["a" /* RegistroComponent */], __WEBPACK_IMPORTED_MODULE_13__component_ofertas_ofertas_component__["a" /* OfertasComponent */], __WEBPACK_IMPORTED_MODULE_18_app_component_carrito_carrito_component__["a" /* CarritoComponent */], __WEBPACK_IMPORTED_MODULE_20_app_component_administrador_administrador_component__["a" /* AdministradorComponent */], __WEBPACK_IMPORTED_MODULE_22_app_component_perfil_perfil_component__["a" /* PerfilComponent */], __WEBPACK_IMPORTED_MODULE_23_app_component_somos_somos_component__["a" /* SomosComponent */], __WEBPACK_IMPORTED_MODULE_23_app_component_somos_somos_component__["a" /* SomosComponent */], __WEBPACK_IMPORTED_MODULE_25_app_component_private_perfilUser_component__["a" /* PerfilUserComponent */], __WEBPACK_IMPORTED_MODULE_26_app_component_favoritos_favoritos_component__["a" /* FavoritosComponent */], __WEBPACK_IMPORTED_MODULE_27_app_component_editar_editar_component__["a" /* EditarComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 167:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false,
    API_URL: 'https://localhost:8443/api/'
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 18:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var URL = 'https://localhost:8443/api';
var LoginService = (function () {
    function LoginService(http) {
        this.http = http;
        this.isLogged = false;
        this.isAdmin = false;
        this.isUser = false;
        this.reqIsLogged();
    }
    LoginService.prototype.reqIsLogged = function () {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Headers */]({
            'X-Requested-With': 'XMLHttpRequest'
        });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestOptions */]({});
        this.http.get(URL + '/logIn', options).subscribe(function (response) { return _this.processLogInResponse(response); }, function (error) {
            if (error.status !== 401) {
                console.error('Error when asking if logged: ' +
                    JSON.stringify(error));
            }
        });
    };
    LoginService.prototype.processLogInResponse = function (response) {
        this.isLogged = true;
        this.user = response.json();
        this.isAdmin = this.user.roles.indexOf('ROLE_ADMIN') !== -1;
        this.isUser = this.user.roles.indexOf('ROLE_USER') !== -1;
    };
    LoginService.prototype.logIn = function (user, pass) {
        var _this = this;
        var userPass = user + ':' + pass;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Headers */]({
            'Authorization': 'Basic ' + utf8_to_b64(userPass),
            'X-Requested-With': 'XMLHttpRequest'
        });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestOptions */]({ headers: headers });
        return this.http.get(URL + '/logIn', options).map(function (response) {
            _this.processLogInResponse(response);
            return _this.user;
        });
    };
    LoginService.prototype.logOut = function () {
        var _this = this;
        return this.http.get(URL + '/logOut', { withCredentials: true }).map(function (response) {
            _this.isLogged = false;
            _this.isAdmin = false;
            _this.isUser = false;
            return response;
        });
    };
    return LoginService;
}());
LoginService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === "function" && _a || Object])
], LoginService);

function utf8_to_b64(str) {
    return btoa(encodeURIComponent(str).replace(/%([0-9A-F]{2})/g, function (match, p1) {
        return String.fromCharCode('0x' + p1);
    }));
}
var _a;
//# sourceMappingURL=login.service.js.map

/***/ }),

/***/ 19:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var BASE_URL = "https://localhost:8443/api/users/";
var UserService = (function () {
    function UserService(http) {
        this.http = http;
    }
    UserService.prototype.getUsers = function () {
        var _this = this;
        return this.http.get(BASE_URL, {})
            .map(function (response) { return response.json(); })
            .catch(function (error) { return _this.handleError(error); });
    };
    UserService.prototype.getUserId = function (id) {
        var _this = this;
        return this.http.get(BASE_URL + id)
            .map(function (response) { return response.json; })
            .catch(function (error) { return _this.handleError(error); });
    };
    UserService.prototype.getUser = function (name) {
        var _this = this;
        return this.http.get(BASE_URL + name, {})
            .map(function (response) { return response.json(); })
            .catch(function (error) { return _this.handleError(error); });
    };
    UserService.prototype.addUser = function (user) {
        var _this = this;
        return this.http.post(BASE_URL, user, { withCredentials: true })
            .map(function (response) { return response.json(); })
            .catch(function (error) { return _this.handleError(error); });
    };
    UserService.prototype.handleError = function (error) {
        console.error(error);
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw("Server error (" + error.status + "): " + error.text());
    };
    return UserService;
}());
UserService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === "function" && _a || Object])
], UserService);

var _a;
//# sourceMappingURL=user.service.js.map

/***/ }),

/***/ 221:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(82)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 222:
/***/ (function(module, exports) {

module.exports = " \r\n    <br>\r\n\r\n    <div class=\"container\">\r\n        <div class=\"row\">\r\n            <div class=\" col-xs-12 col-sm-12 col-md-12 col-lg-12 text-justify\">\r\n\r\n                <div class=\"row\">\r\n                    <div class=\"col-lg-12\">\r\n                        <div class=\"page-header\">\r\n                            <h1 id=\"forms\"> Administrador \r\n                              <small>Herramientas de control y configuración</small>\r\n                          </h1>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <!-- final cabecera -->\r\n        </div>\r\n\r\n        <!-- USER PROFILE ROW STARTS-->\r\n        <div class=\"row\">\r\n            \r\n            \r\n            <div class=\"col-lg-12\" id=\"miPerfil\">\r\n                <p class=\"lead\">Información de usuarios</p>\r\n                <div class=\"list-group\">\r\n                    <ul class=\"items\">\r\n                      <li *ngFor =\"let user of users\">\r\n                        <p class=\"list-group-item\">{{user.name}}</p>\r\n                        <p class=\"list-group-item\">{{user.surname}}</p>\r\n                        <p class=\"list-group-item\">{{user.email}}</p>\r\n                        <p class=\"list-group-item\">{{user.telephone}}</p>\r\n                        <p class=\"list-group-item\">{{user.postalCode}}</p>\r\n                        \r\n                        <br>\r\n                      </li>\r\n                    </ul>\r\n\r\n                </div>\r\n                <hr/>\r\n            </div> \r\n            <!--<div class=\"col-lg-6\" id=\"miPerfil\">\r\n                <p class=\"lead\">Información de contacto</p>\r\n                <div class=\"list-group\">\r\n                    <p class=\"list-group-item\"></p>\r\n                    <p class=\"list-group-item\"></p>\r\n                </div>\r\n                <hr />\r\n                <p class=\"lead\">Dirección de envío</p>\r\n                <div class=\"list-group\">\r\n                    <p class=\"list-group-item\"></p>\r\n                    \r\n                </div>\r\n            </div>-->\r\n            \r\n\r\n\r\n            \r\n\r\n\r\n\r\n\r\n             <div class=\"col-lg-6\" id=\"editarvinilos\">\r\n                <h3>Añadir Vinilos</h3>\r\n                <div *ngIf=\"resource\">\r\n                     <!--<h2>vinilos \"{{resource.title}}\"</h2>-->\r\n\r\n                  <div *ngIf=\"resource.id\">\r\n                    <label>Id: </label>{{resource.id}}\r\n                  </div>\r\n                  <div>\r\n                    <label>Titulo </label>\r\n                    <input [(ngModel)]=\"resource.title\"class=\"form-control\" placeholder=\"title\"/>\r\n                  </div>\r\n                  <div>\r\n                    <label>Subtitulo </label>\r\n                    <input [(ngModel)]=\"resource.subtitle\"class=\"form-control\" placeholder=\"subtitle\"/>\r\n                  </div>\r\n                  <div>\r\n                    <label>Interprete </label>\r\n                    <input [(ngModel)]=\"resource.interprete\"class=\"form-control\" placeholder=\"interprete\"/>\r\n                  </div>\r\n                  <div>\r\n                    <label>fecha </label>\r\n                    <input [(ngModel)]=\"resource.fecha\"class=\"form-control\" placeholder=\"fecha\"/>\r\n                  </div>\r\n                  <div>\r\n                    <label>Estado </label>\r\n                    <input [(ngModel)]=\"resource.estado\"class=\"form-control\" placeholder=\"estado\"/>\r\n                  </div>\r\n                  <div>\r\n                    <label>Album </label>\r\n                    <input [(ngModel)]=\"resource.album\"class=\"form-control\" placeholder=\"album\"/>\r\n                  </div>\r\n                  <div>\r\n                    <label>Precio </label>\r\n                    <input [(ngModel)]=\"resource.precio\" class=\"form-control\" placeholder=\"precio\"/>\r\n                  </div>\r\n                  <div>\r\n                    <label>Codigo </label>\r\n                    <input [(ngModel)]=\"resource.codigo\"  class=\"form-control\"  placeholder=\"codigo\"/>\r\n                  </div>\r\n    \r\n                  <p>\r\n                      <br/>\r\n                    <button (click)=\"cancel()\" class=\"btn btn-default\">Cancel</button>\r\n                    <button (click)=\"save()\" class=\"btn btn-default\">Save</button>\r\n                  </p>\r\n\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"col-lg-6\" id=\"editarvinilos\">\r\n                <h3>Añadir Usuarios</h3>\r\n                <div *ngIf=\"resource\">\r\n                     <!--<h2>vinilos \"{{user.name}}\"</h2>-->\r\n                  <div *ngIf=\"user.id\">\r\n                    <label>Id: </label>{{user.id}}\r\n                  </div>\r\n                  <div>\r\n                    <label>name </label>\r\n                    <input [(ngModel)]=\"user.name\"class=\"form-control\" placeholder=\"name\"/>\r\n                  </div>\r\n                  <div>\r\n                    <label>Surname </label>\r\n                    <input [(ngModel)]=\"user.surname\"class=\"form-control\" placeholder=\"surname\"/>\r\n                  </div>\r\n                  <div>\r\n                    <label>email </label>\r\n                    <input [(ngModel)]=\"user.email\"class=\"form-control\" placeholder=\"email\"/>\r\n                  </div>\r\n                  <div>\r\n                    <label>pais </label>\r\n                    <input [(ngModel)]=\"user.pais\"class=\"form-control\" placeholder=\"pais\"/>\r\n                  </div>\r\n                  <div>\r\n                    <label>descripcion </label>\r\n                    <input [(ngModel)]=\"user.descripcion\"class=\"form-control\" placeholder=\"descripcion\"/>\r\n                  </div>\r\n                  <div>\r\n                    <label>telephone </label>\r\n                    <input [(ngModel)]=\"user.telephone\"class=\"form-control\" placeholder=\"telephone\"/>\r\n                  </div>\r\n                  <div>\r\n                    <label>password </label>\r\n                    <input [(ngModel)]=\"user.password\" class=\"form-control\" placeholder=\"password\"/>\r\n                  </div>\r\n                  <div>\r\n                    <label>postalCode </label>\r\n                    <input [(ngModel)]=\"user.postalCode\"  class=\"form-control\"  placeholder=\"postalCode\"/>\r\n                  </div>\r\n                </div>\r\n    \r\n                <p>\r\n                    <br/>\r\n                  <button (click)=\"cancel()\" class=\"btn btn-default\">Cancel</button>\r\n                  <button (click)=\"saveUser()\" class=\"btn btn-default\">Save</button>\r\n                </p>\r\n\r\n            </div>\r\n\r\n\r\n            <div class=\"col-md-6\" id=\"editarvinilos\">\r\n                <h3>Añadir Ofertas</h3>\r\n                <div *ngIf=\"resource\">\r\n                     <!--<h2>ofertas \"{{oferta.name}}\"</h2>-->\r\n                  <div *ngIf=\"oferta.id\">\r\n                    <label>Id: </label>{{oferta.id}}\r\n                  </div>\r\n                  <div>\r\n                    <label>Nombre </label>\r\n                    <input [(ngModel)]=\"oferta.name\"class=\"form-control\" placeholder=\"name\"/>\r\n                  </div>\r\n                  <div>\r\n                    <label>Codigo </label>\r\n                    <input [(ngModel)]=\"oferta.code\"class=\"form-control\" placeholder=\"code\"/>\r\n                  </div>\r\n                  <div>\r\n                    <label>Descripcion</label>\r\n                    <input [(ngModel)]=\"oferta.description\"class=\"form-control\" placeholder=\"description\"/>\r\n                  </div>\r\n                  <div>\r\n                    <label>llevas </label>\r\n                    <input [(ngModel)]=\"oferta.llevas\"class=\"form-control\" placeholder=\"llevas \"/>\r\n                  </div>\r\n                  <div>\r\n                    <label>pagas </label>\r\n                    <input [(ngModel)]=\"oferta.pagas\"class=\"form-control\" placeholder=\"pagas\"/>\r\n                  </div>\r\n                </div>\r\n                    \r\n                  <p>\r\n                      <br/>\r\n                    <button (click)=\"cancel()\" class=\"btn btn-default\">Cancel</button>\r\n                    <button (click)=\"saveOferta()\" class=\"btn btn-default\">Save</button>\r\n                  </p>\r\n\r\n            </div>\r\n\r\n\r\n\r\n            <div class=\"col-lg-6\" id=\"editarvinilos\">\r\n                <h3>Añadir OfertasDescuento</h3>\r\n                <div *ngIf=\"resource\">\r\n                     <!--<h2>ofertas \"{{ofertaDescuento.name}}\"</h2>-->\r\n                  <div *ngIf=\"ofertaDescuento.id\">\r\n                    <label>Id: </label>{{ofertaDescuento.id}}\r\n                  </div>\r\n                  <div>\r\n                    <label>Nombre </label>\r\n                    <input [(ngModel)]=\"ofertaDescuento.name\"class=\"form-control\" placeholder=\"name\"/>\r\n                  </div>\r\n                  <div>\r\n                    <label>Codigo </label>\r\n                    <input [(ngModel)]=\"ofertaDescuento.code\"class=\"form-control\" placeholder=\"code\"/>\r\n                  </div>\r\n                  <div>\r\n                    <label>Descripcion</label>\r\n                    <input [(ngModel)]=\"ofertaDescuento.description\"class=\"form-control\" placeholder=\"description\"/>\r\n                  </div>\r\n                  <div>\r\n                    <label>porcentaje </label>\r\n                    <input [(ngModel)]=\"ofertaDescuento.porcentaje\"class=\"form-control\" placeholder=\"porcentaje \"/>\r\n                  </div>\r\n    \r\n                </div>\r\n      \r\n                <p>\r\n                    <br/>\r\n                  <button (click)=\"cancel()\" class=\"btn btn-default\">Cancel</button>\r\n                  <button (click)=\"saveOfertaDescuento()\" class=\"btn btn-default\">Save</button>\r\n                </p>\r\n\r\n            </div>\r\n\r\n            \r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n            <!--<div class=\"col-md-9 col-sm-9\" id=\"editarPerfil\">\r\n                <!-- Editar opciones del perfil -->\r\n                <!--<h3> Administrar perfil </h3>\r\n                <br>\r\n                <!-- <div class=\"description\"> -->\r\n          \r\n          \r\n                \r\n                \r\n                <!-- Eliminar cuenta  -->\r\n                <!--<div class=\"panel panel-danger text-center\">\r\n                    <div class=\"panel-heading\">\r\n                        Borrar cuenta\r\n                    </div>\r\n                    <form action=\"borrarPerfil\">\r\n                    <div class=\"panel-body text-center\">\r\n                        <p> Su cuenta será borrada para siempre y no podrá recuperarla. Al pulsar el botón de eliminar su cuenta será totalmente eliminada</p>\r\n                        <a href=\"/deleteUser\">\r\n\t                         <button type=\"button\"  class=\"btn btn-danger\">Eliminar</button>\r\n                           </a>\r\n                        \r\n                    </div>\r\n                    </form>\r\n                </div>\r\n            </div>\r\n        </div>-->\r\n        <!-- USER PROFILE ROW END-->\r\n    </div>\r\n"

/***/ }),

/***/ 223:
/***/ (function(module, exports) {

module.exports = "\n<!DOCTYPE html>\n<html lang=\"en\">\n\n<head>\n    <title>VirtualVinilo</title>\n    <meta charset=\"utf-8\">\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n    <link href=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css\" rel=\"stylesheet\">\n    <script src=\"https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js\"></script>\n    <script src=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js\"></script>\n    <link type=\"text/css\" rel=\"stylesheet\" href=\"/src/assets/css/bootstraptheme.css\" />\n    <script src=\"js/cookie.js\"></script>\n    <script src=\"js/addProducts.js\"></script>\n    <script src=\"js/editor.js\"></script>\n</head>\n\n<body>\n<br/>\n<br/>\n\n<app-header></app-header>  \n<router-outlet></router-outlet>\n<app-footer></app-footer>  \n\n</body>\n</html> "

/***/ }),

/***/ 224:
/***/ (function(module, exports) {

module.exports = "\r\n<br>\r\n<br>\r\n<div class=\"container\">\r\n    <div class=\"row\">\r\n            <div class=\"col-md-12 user-wrapper\">\r\n                <div class=\"alert alert-info\">\r\n                \t<h3>{{resource.interprete}}  </h3>\r\n                    <h3>{{resource.title}}  </h3>\r\n                    <p>\r\n                       {{resource.subtitle}}\r\n                    </p>\r\n                </div>\r\n                <hr />\r\n                <br>\r\n                <!-- <div class=\"description\"> -->\r\n                <div class=\"panel panel-default\">\r\n                    <div class=\"panel-heading\">\r\n                        <div class=\"text-muted bootstrap-admin-box-title\">Datos del Vinilo</div>\r\n                    </div>\r\n                    <div class=\"clearfix\">\r\n                        <div class=\"col-sm-4\">\r\n                            <h3>Intérprete</h3>\r\n                            <p>{{resource.interprete}}</p>\r\n                        </div>\r\n                        <div class=\"col-sm-4\">\r\n                            <h3>Fecha</h3>\r\n                            <p>{{resource.fecha}}</p>\r\n                        </div>\r\n                        <div class=\"col-sm-4\">\r\n                            <h3>Estado</h3>\r\n                            <p>{{resource.estado}}</p>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"clearfix\">\r\n                        <div class=\"col-sm-4\">\r\n                            <h3 class=\"text-left\">Album</h3>\r\n                            <p>{{resource.album}}</p>\r\n                        </div>\r\n                        <div class=\"col-sm-4\">\r\n                            <h3>Precio</h3>\r\n                            <p>{{resource.precio}}</p>\r\n                        </div>\r\n                        \r\n                        <div class=\"col-sm-4\">\r\n                            <h3>Código</h3>\r\n                            <p>{{resource.codigo}}</p>\r\n                        </div>\r\n                        <div *ngIf=\"loginService.isLogged\" class=\"col-sm-4\">\r\n                            <h3>Código</h3>\r\n                            <p><a [routerLink]=\"['/carrito',resource.id]\"><h4>Comprar Producto</h4></a> </p>\r\n                        </div>\r\n \r\n                    <br>\r\n                    </div>\r\n                </div>\r\n                <p><a routerLink=\"/registro\"> Si quieres comprar registrate</a></p>\r\n            </div>  \r\n                <br>\r\n            <div class=\"col-lg-12\">\r\n                    <div *ngIf=\"resource\">\r\n                        <p>\r\n                            <button *ngIf=\"loginService.isAdmin\" (click)=\"removeResource()\" class=\"btn btn-default\">Eliminar</button>\r\n                        </p>\r\n\r\n                    </div>\r\n            </div>\r\n               \r\n                <br>\r\n\r\n            <div class=\"col-lg-9\">\r\n                <span class=\"pull-left\"><h3>Escribe tu comentario</h3></span>\r\n                    <form class=\"form-horizontal\" action=\"{{id}}/addComment\" method=\"post\">\r\n                        <div class=\"col-lg-12\">\r\n                            <div class=\"form-group\">\r\n                                <label class=\"col-lg-2  col-md-2 col-sm-7 col-xs-12 control-label text-center\">\r\n                                    <button *ngIf=\"!loginService.isLogged\"(click)=\"goToLogin()\" class=\"btn btn-default\">Inicia Sesion para comentar</button>\r\n                                   <button *ngIf=\"loginService.isLogged\" (click)=\"addContent()\" class=\"btn btn-default\">Enviar comentario</button>\r\n                                </label>\r\n                            <div class=\"col-lg-12 col-md-12 col-xs-12\">\r\n                            \t<!--<input type=\"textarea\" name=\"asunto\" style=\"width:700px; height:25px\" class=\"form-control col-lg-10 col-md-10 col-xs-12\"[(ngModel)]=\"inputContent1\" placeholder=\"Asunto.\">-->           \r\n                                <input id=\"textarea-wysihtml5\" type=\"textarea\" name=\"message\" style=\"width:700px; height:50px\" class=\"form-control col-lg-10 col-md-10 col-xs-12\"[(ngModel)]=\"inputContent2\" placeholder=\"Introduce un comentario.\">\r\n                            </div>\r\n                            </div>\r\n                        </div>\r\n                    </form>\r\n            </div>\r\n            \r\n             <br>\r\n        \r\n        <!-- RATINGS ROW -->\r\n        <div class=\"well\">\r\n            <div class=\"row\">\r\n                <div class=\"col-md-12\">\r\n                    <span class=\"pull-left\"><h3>Comentarios</h3></span>\r\n                </div>\r\n            </div>\r\n            <hr>\r\n\t\t\t\r\n            <div class=\"row\">\r\n                <div class=\"col-md-12\">\r\n                    <ul>\r\n                    <!--<li *ngFor=\"let elem of asunto\"><h4>{{elem}}</h4></li>-->\r\n                    <li *ngFor=\"let elem1 of comentarios\"><p>{{elem1}}</p></li>\r\n                    </ul>                 \r\n                </div>\r\n            </div>\r\n            <hr>\r\n\t\t\r\n            \r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ 225:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n\t\t<div class=\"row\">\r\n\t\t\t<div class=\" col-xs-12 col-sm-12 col-md-12 col-lg-12 text-justify\">\r\n\r\n\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t<div class=\"col-lg-12\">\r\n\t\t\t\t\t\t<div class=\"page-header\">\r\n\t\t\t\t\t\t\t<h1 id=\"forms\">Carrito</h1>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<!-- final cabecera -->\r\n\t\t</div>\r\n\t\t<div class=\"row\">\r\n\t\t\t<div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\">\r\n\t\t\t\t<div class=\"panel panel-info\">\r\n\t\t\t\t\t<div class=\"panel-heading\">\r\n\t\t\t\t\t\t<div class=\"panel-title\">\r\n\t\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t\t\t<div class=\"col-xs-6\">\r\n\t\t\t\t\t\t\t\t\t<h5>Producto</h5>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"col-xs-6\">\r\n\t\t\t\t\t\t\t\t\t<a href=\"/\" class=\"btn btn-primary btn-sm btn-block\"\r\n\t\t\t\t\t\t\t\t\t\trole=\"button\">Continuar comprando</a>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"panel-body\">\r\n\t\t\t\t\t\t\r\n\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t\t<div class=\"col-xs-2\">\r\n\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"col-xs-4\">\r\n\t\t\t\t\t\t\t\t<h4 class=\"product-name\">\r\n\t\t\t\t\t\t\t\t\t<strong>{{resource.title}}</strong>\r\n\t\t\t\t\t\t\t\t</h4>\r\n\t\t\t\t\t\t\t\t<h4>\r\n\t\t\t\t\t\t\t\t\t<small>{{resource.subtitle}}</small>\r\n\t\t\t\t\t\t\t\t</h4>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"col-xs-6\">\r\n\t\t\t\t\t\t\t\t<div class=\"col-xs-6 text-right\">\r\n\t\t\t\t\t\t\t\t\t<h6>\r\n\t\t\t\t\t\t\t\t\t\t<strong>{{resource.precio}} €<span class=\"text-muted\">x</span></strong>\r\n\t\t\t\t\t\t\t\t\t</h6>\r\n\t\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t\t\t<div class=\"col-xs-2\">\r\n\t\t\t\t\t\t\t\t\t<form action=\"/borrarCarrito\" method=\"post\">\r\n\t\t\t\t\t\t\t\t\t<input name=\"title\" type=\"hidden\" value=\"{{title}}\"/>\r\n\t\t\t\t\t\t\t\t\t<p>\r\n\t\t\t\t\t\t\t\t\t<button (click)=\"removeResource()\">Remove</button>\r\n\t\t\t\t\t\t\t\t\t</p>\r\n\t\t\t\t\t\t\t\t\t</form>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<hr>\r\n\t\t\t\t\t\t\r\n\r\n\r\n\r\n\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t\t<form action=\"/aplicarCodigo\" method=\"post\">\r\n\t\t\t\t\t\t\t\t<div class=\"text-center\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"col-xs-9\">\r\n\t\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\t\t<input type=\"submit\" class=\"btn btn-default btn-sm btn-block\" value=\"Añadir\r\n\t\t\t\t\t\t\t\t\t\t\tcodigo oferta\" />\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t<div class=\"col-xs-3\">\r\n\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control input-sm\"\r\n\t\t\t\t\t\t\t\t\t\t\tplaceholder=\"Codigo\" name=\"code\">\r\n\r\n\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</form>\r\n\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"panel-footer\">\r\n\t\t\t\t\t\t<div class=\"row text-center\">\r\n\t\t\t\t\t\t\t<div class=\"col-xs-9\">\r\n\t\t\t\t\t\t\t\t<h4 class=\"text-right\">\r\n\t\t\t\t\t\t\t\t\tPrecio Total: <strong>{{resource.precio}} €</strong>\r\n\t\t\t\t\t\t\t\t</h4>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"col-xs-3\">\r\n\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t\r\n<div class=\"row\">\r\n\t<li *ngFor =\"let purchase of purchases\">\r\n\t\t\t<div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\">\r\n\t\t\t\t<div class=\"panel panel-info\">\r\n\t\t\t\t\t<div class=\"panel-heading\">\r\n\t\t\t\t\t\t<div class=\"panel-title\">\r\n\t\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t\t\t<div class=\"col-xs-6\">\r\n\t\t\t\t\t\t\t\t\t<h5>Lista de la compra</h5>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"col-xs-6\">\r\n\t\t\t\t\t\t\t\t\t<a href=\"/\" class=\"btn btn-primary btn-sm btn-block\"\r\n\t\t\t\t\t\t\t\t\t\trole=\"button\">Continuar comprando</a>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"panel-body\">\r\n\t\t\t\t\t\t\r\n\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t\t<div class=\"col-xs-2\">\r\n\t\t\t\t\t\t\t\t<img src=\"/imagenes/{{img}}\" class=\"img-responsive\">\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"col-xs-4\">\r\n\t\t\t\t\t\t\t\t<h4 class=\"product-name\">\r\n\t\t\t\t\t\t\t\t\t<strong>{{purchase.code}}</strong>\r\n\t\t\t\t\t\t\t\t</h4>\r\n\t\t\t\t\t\t\t\t<h4>\r\n\t\t\t\t\t\t\t\t\t<small>{{purchase.description}}</small>\r\n\t\t\t\t\t\t\t\t</h4>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"col-xs-6\">\r\n\t\t\t\t\t\t\t\t<div class=\"col-xs-6 text-right\">\r\n\t\t\t\t\t\t\t\t\t<h6>\r\n\t\t\t\t\t\t\t\t\t\t<strong>{{resource.precio}} €<span class=\"text-muted\">x</span></strong>\r\n\t\t\t\t\t\t\t\t\t</h6>\r\n\t\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t\t\t<div class=\"col-xs-2\">\r\n\t\t\t\t\t\t\t\t\t<form action=\"/borrarCarrito\" method=\"post\">\r\n\t\t\t\t\t\t\t\t\t<input name=\"title\" type=\"hidden\" value=\"{{title}}\"/>\r\n\t\t\t\t\t\t\t\t\t<button (click)=\"RemoveResource()\">Remove</button>\r\n\t\t\t\t\t\t\t\t\t</form>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<hr>\r\n\t\t\t\t\t\t\r\n\r\n\r\n\r\n\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t\t<form action=\"/aplicarCodigo\" method=\"post\">\r\n\t\t\t\t\t\t\t\t<div class=\"text-center\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"col-xs-9\">\r\n\t\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\t\t<input type=\"submit\" class=\"btn btn-default btn-sm btn-block\" value=\"Añadir\r\n\t\t\t\t\t\t\t\t\t\t\tcodigo oferta\" />\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t<div class=\"col-xs-3\">\r\n\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control input-sm\"\r\n\t\t\t\t\t\t\t\t\t\t\tplaceholder=\"Codigo\" name=\"code\">\r\n\r\n\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</form>\r\n\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"panel-footer\">\r\n\t\t\t\t\t\t<div class=\"row text-center\">\r\n\t\t\t\t\t\t\t<div class=\"col-xs-9\">\r\n\t\t\t\t\t\t\t\t<h4 class=\"text-right\">\r\n\t\t\t\t\t\t\t\t\tPrecio Total: <strong>{{precioTotal}} €</strong>\r\n\t\t\t\t\t\t\t\t</h4>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"col-xs-3\">\r\n\t\t\t\t\t\t\t\t<a href=\"\" class=\"btn btn-success btn-block\"\r\n\t\t\t\t\t\t\t\t\trole=\"button\">Terminar compra</a>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t</li>\r\n\t\t</div>\r\n\r\n\r\n\r\n\t\t\r\n\t</div>\r\n\t\t\r\n\t\r\n\t"

/***/ }),

/***/ 226:
/***/ (function(module, exports) {

module.exports = "\r\n\r\n<div *ngIf=\"resource\">\r\n  <h2>Book \"{{resource.title}}\"</h2>\r\n  <div *ngIf=\"resource.id\">\r\n    <label>Id: </label>{{resource.id}}\r\n  </div>\r\n  <div>\r\n    <label>Title: </label>\r\n    <input [(ngModel)]=\"resource.title\" placeholder=\"title\"/>\r\n  </div>\r\n  <div>\r\n    <label>Abstract: </label>\r\n    <textarea [(ngModel)]=\"resource.subtitle\" placeholder=\"description\"></textarea>\r\n  </div>\r\n  <div>\r\n    <label>Abstract: </label>\r\n    <textarea [(ngModel)]=\"resource.inteprete\" placeholder=\"description\"></textarea>\r\n  </div><div>\r\n    <label>Abstract: </label>\r\n    <textarea [(ngModel)]=\"resource.fecha\" placeholder=\"description\"></textarea>\r\n  </div><div>\r\n    <label>Abstract: </label>\r\n    <textarea [(ngModel)]=\"resource.estado\" placeholder=\"description\"></textarea>\r\n  </div>\r\n  <div>\r\n    <label>Abstract: </label>\r\n    <textarea [(ngModel)]=\"resource.album\" placeholder=\"description\"></textarea>\r\n  </div>\r\n  <div>\r\n    <label>Abstract: </label>\r\n    <textarea [(ngModel)]=\"resource.precio\" placeholder=\"description\"></textarea>\r\n  </div>\r\n  <div>\r\n    <label>Abstract: </label>\r\n    <textarea [(ngModel)]=\"resource.codigo\" placeholder=\"description\"></textarea>\r\n  </div>\r\n  <p>\r\n    <button (click)=\"cancel()\">Cancel</button>\r\n    <button (click)=\"save()\">Save</button>\r\n  </p>\r\n  </div>"

/***/ }),

/***/ 227:
/***/ (function(module, exports) {

module.exports = "\r\n\r\n<div class=\"container\">\r\n    <h3>MIS FAVORITOS</h3>\r\n    <br/>\r\n <div class=\"col-md-9\">\r\n                <div *ngFor =\"let resource of resources\" >\r\n                <div class=\"col-sm-4 col-lg-4 col-md-4\">\r\n                         <div class=\"thumbnail\">\r\n                            <a href=\"{{resource.id}}\" ><img src=\"../assets/img/avatar.png\" style=\"width: 320px; height: 280px\" alt=\"\"></a>\r\n                            <div class=\"caption\">\r\n                                <h4 class=\"pull-right\">{{resource.precio}} €</h4>\r\n                                <h4> <a [routerLink]=\"['/resource',resource.id]\"> {{resource.id}}</a></h4>\r\n                                \r\n                               <!-- <h4><a href=\"{{id}}\">{{interprete}}</a>\r\n                                </h4>-->\r\n                                <h5 class><a [routerLink]=\"['/resource',resource.id]\">{{resource.title}}</a></h5>\r\n                                <p>{{resource.subtitle}}</p>\r\n                            </div>\r\n                            <button (click)='removeResource()'*ngIf=\"loginService.isAdmin\" type=\"submit\">Remove</button>\r\n                            <button (click)=\"anadir()\"*ngIf=\"loginService.isUser\">Añadir a favoritos</button>\r\n                        </div>\r\n                         </div>\r\n               \r\n              \r\n                     \r\n                    </div>\r\n        \r\n                    \r\n           \r\n    </div>\r\n</div>"

/***/ }),

/***/ 228:
/***/ (function(module, exports) {

module.exports = "  <footer>\r\n            <div class=\"row\">\r\n                <div class=\"col-lg-12\">\r\n                    <p align=\"center\">Copyright &copy; VirtualVinilo</p>\r\n                    <p align=\"center\">Guillermo Urbano, Ilia Ramírez, Jorge Galindo, Daniel Camacho</p>\r\n                    <p align=\"center\" class=\"text-danger\"><a routerLink=\"/somos\" routerLinkActive=\"active\"> Somos</a></p>\r\n\r\n                </div>\r\n            </div>\r\n            <!-- /.row -->\r\n        </footer>"

/***/ }),

/***/ 229:
/***/ (function(module, exports) {

module.exports = "<div class=\"navbar navbar-default navbar-fixed-top\">\r\n    <div class=\"navbar-header\">\r\n            <a id=\"logo-container\" routerLink=\"\" routerLinkActive=\"active\" class=\"brand-logo\" style=\"width: 180px; height: 64px\"><img src=\"src/assets/img/VirtualViniloLogo.png\" style=\"width: 180px; height: 58px; padding: 5px\"></a>\r\n            <button class=\"navbar-toggle\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbar-main\">\r\n                <span class=\"icon-bar\"></span>\r\n                <span class=\"icon-bar\"></span>\r\n                <span class=\"icon-bar\"></span>\r\n            </button>\r\n    </div>\r\n    <div class=\"container\">\r\n            <div class=\"navbar-collapse collapse\" id=\"navbar-main\">\r\n                <ul class=\"nav navbar-nav navbar-right\">\r\n                    \r\n                    <li>\r\n                        <form class=\"navbar-form\">\r\n                            <div *ngIf =\"loginService.isUser\">\r\n                            \r\n                            <button type=\"button\" class=\"btn btn-default\">\r\n                                <a class=\"glyphicon glyphicon-shopping-cart\" routerLink=\"/carrito\" routerLinkActive=\"active\"></a>\r\n                            </button>\r\n                            </div>\r\n                            \r\n                        </form>\r\n                    </li>\r\n                    \r\n                    <li>\r\n                       \r\n                        \r\n                        <a routerLink=\"/ofertas\" >OFERTAS</a>\r\n                        \r\n                       \r\n                    </li>\r\n                    <!--<li>\r\n                        <a *ngIf=\"loginService.isAdmin\">admin</a>\r\n                    </li>-->\r\n\r\n                       <!-- <li>\r\n                            <a *ngIf=\"loginService.isUser\" [routerLink]=\"['/perfil',user.name]\" routerLinkActive =\"active\">Perfil</a>\r\n                        </li>-->\r\n                        \r\n                    <li>\r\n                   \r\n                        <a *ngIf =\"loginService.isAdmin\">\r\n                        <a [routerLink]=\"['/admin', user.name]\" routerLinkActive=\"active\">ADMIN</a>\r\n                      <!--  <a routerLink = '/perfilUser'>perfil</a>-->\r\n                        </a>\r\n                    </li>\r\n                   <li>\r\n                  <div *ngIf=\"loginService.isLogged\" >\r\n\r\n\t<ul class=\"nav navbar-nav\">\r\n\t\t<li>\r\n\t\t\t<a href=\"#\">{{loginService.user.name}}</a>\r\n\t\t</li>\r\n\t\t\r\n\t</ul>\r\n\r\n</div>\r\n\r\n                  </li>\r\n                     \r\n                    <!--{{#unlogged}}-->\r\n                    <li class=\"dropdown\">\r\n                        <a class=\"dropdown-toggle\" data-toggle=\"dropdown\" href=\"#\" id=\"download\">menu <span class=\"caret\"></span></a>\r\n                        <ul class=\"dropdown-menu\" aria-labelledby=\"download\">\r\n                    <li> <a routerLink=\"/login\" routerLinkActive=\"active\"> IniciarSesion </a></li>\r\n\r\n                            <li class=\"divider\"></li>\r\n                            <li><a routerLink=\"/registro\" routerLinkActive =\"active\">Registrarse</a></li>\r\n                        </ul>\r\n                    </li>\r\n                    <!--{{/unlogged}}\r\n                    \r\n                    {{#logged}}\r\n                    <li class=\"dropdown\">\r\n                        <a class=\"dropdown-toggle\" data-toggle=\"dropdown\" href=\"#\" id=\"download\">{{#user}} {{ name }} {{/user}} <span class=\"caret\"></span></a>\r\n                        <ul class=\"dropdown-menu\" aria-labelledby=\"download\">\r\n                            <li><a href=\"/miperfil\">Mi Perfil</a></li>\r\n                            <li class=\"divider\"></li>\r\n                            {{#admin}}\r\n                            <li><a href=\"/administrador\">Administrador</a></li>\r\n                            <li class=\"divider\"></li>\r\n                            {{/admin}}\r\n                            <li><a href=\"/logout\">Cerrar sesion</a></li>\r\n                        </ul>\r\n                    </li>\r\n                    {{/logged}}-->\r\n                    \r\n                </ul>\r\n            </div>\r\n        </div>\r\n</div>"

/***/ }),

/***/ 230:
/***/ (function(module, exports) {

module.exports = "<br>\r\n<!carousel>\r\n\r\n    <div class=\"page\" id=\"banner\">\r\n        <div class=\"row\">\r\n            <div id=\"carousel-example-generic\" class=\"carousel slide\" data-ride=\"carousel\">\r\n                <!-- Indicators -->\r\n                <ol class=\"carousel-indicators\">\r\n                    <li data-target=\"#carousel-example-generic\" data-slide-to=\"0\" class=\"active\"></li>\r\n                    <li data-target=\"#carousel-example-generic\" data-slide-to=\"1\"></li>\r\n                    <li data-target=\"#carousel-example-generic\" data-slide-to=\"2\"></li>\r\n                </ol>\r\n\r\n                <!-- Wrapper for slides -->\r\n                <div class=\"carousel-inner\">\r\n                    <div class=\"item active\">\r\n                        <img src=\"src/assets/img/Caroussel1.png\" alt=\"...\">\r\n                        <div class=\"carousel-caption\">\r\n                            <h3>Bienvenido a Virtual Vinilo </h3>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"item\">\r\n                        <img src=\"src/assets/img/Caroussel2.png\" alt=\"...\">\r\n                        <div class=\"carousel-caption\">\r\n                            <h3>Tu web de vinilos</h3>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"item\">\r\n                        <img src=\"src/assets/img/Caroussel3.png\" alt=\"...\">\r\n                        <div class=\"carousel-caption\">\r\n                            <h3>Tu web por naturaleza</h3>\r\n                        </div>\r\n                    </div>\r\n                    \r\n                </div>\r\n\r\n                <!-- Controls -->\r\n                <a class=\"left carousel-control\" href=\"#carousel-example-generic\" role=\"button\" data-slide=\"prev\">\r\n                    <span class=\"glyphicon glyphicon-chevron-left\"></span>\r\n                </a>\r\n                <a class=\"right carousel-control\" href=\"#carousel-example-generic\" role=\"button\" data-slide=\"next\">\r\n                    <span class=\"glyphicon glyphicon-chevron-right\"></span>\r\n                </a>\r\n            </div>\r\n            <!-- Carousel -->\r\n        </div>\r\n    </div>\r\n    <br/>\r\n    <br/>\r\n    <!-- Page Content -->\r\n    <div class=\"container\">\r\n\r\n        <div class=\"row\">\r\n\r\n            <div class=\"col-md-3\">\r\n\r\n\r\n                <p class=\"lead\">Filtrar Productos</p>\r\n                <div class=\"list-group\">\r\n                    <p class=\"list-group-item\">Por interprete</p>\r\n                    <li *ngFor = \"let elem of resources\">\r\n                    <a href=\"#\" class=\"list-group-item\">{{elem.interprete}} <span class=\"badge\">10</span></a>\r\n                    </li>\r\n                </div>\r\n                <div class=\"list-group\">\r\n                    <p class=\"list-group-item\">Recomendados</p>\r\n                    <li *ngFor = \"let resource of resources2\">\r\n                    <a href=\"#\" class=\"list-group-item\">{{resource.title}} <span class=\"badge\">10</span></a>\r\n                    </li>\r\n                    \r\n                </div>\r\n                <div class=\"list-group\">\r\n                    <p class=\"list-group-item\">Por precio</p>\r\n                    <li *ngFor =\"let resource of resources2\">\r\n                          <a href=\"#\" class=\"list-group-item\">{{resource.precio}} <span class=\"badge\">10</span></a>\r\n                  \r\n                    \r\n                    </li>\r\n                </div>\r\n            </div>\r\n            \r\n            <div class=\"col-md-9\">\r\n                <div *ngFor =\"let resource of resources\" >\r\n                <div class=\"col-sm-4 col-lg-4 col-md-4\">\r\n                         <div class=\"thumbnail\">\r\n                            <a href=\"{{resource.id}}\" ><img src=\"../assets/img/avatar.png\" style=\"width: 320px; height: 280px\" alt=\"\"></a>\r\n                            <div class=\"caption\">\r\n                                <h4 class=\"pull-right\">{{resource.precio}} €</h4>\r\n                                <h4> <a [routerLink]=\"['/resource',resource.id]\"> {{resource.id}}</a></h4>\r\n                                \r\n                               <!-- <h4><a href=\"{{id}}\">{{interprete}}</a>\r\n                                </h4>-->\r\n                                <h5 class><a [routerLink]=\"['/resource',resource.id]\">{{resource.title}}</a></h5>\r\n                                <p>{{resource.subtitle}}</p>\r\n                            </div>\r\n                            <div>\r\n                                <p>\r\n                            <button *ngIf=\"loginService.isAdmin\" (click)=\"delete()\"  class=\"btn btn-default\">Remove</button>\r\n                                </p>\r\n                            </div>\r\n                         <div>\r\n                             <button *ngIf=\"loginService.isLogged && loginService.isAdmin\" (click)=\"editResource()\"  class=\"btn btn-default\">Edit</button>\r\n                         </div>\r\n                        </div>\r\n                         </div>\r\n               \r\n              \r\n                     \r\n                    </div>\r\n                    \r\n           \r\n    </div>\r\n    <br/>\r\n    <div >\r\n                   <button  [class.btn-disabled]=\"loadMore\"id=\"moreResources\" (click)=\"loadMoreResources()\" type=\"button\" class=\"btn btn-primary btn-lg btn-block btn-view-more\">Ver mas vinilos </button>\r\n             </div>\r\n    <br/>\r\n   \r\n   \r\n   \r\n   "

/***/ }),

/***/ 231:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n        <br>\r\n        <br>\r\n        <div class=\"page\" id=\"banner\">\r\n            <div class=\"row\">\r\n                <div class=\" col-xs-12 col-sm-12 col-md-12 col-lg-12 text-justify\">\r\n                    <!-- Título -->\r\n                    <div class=\"row\">\r\n                        <div class=\"col-lg-10\">\r\n                            <div class=\"page-header\">\r\n                                <h1 id=\"forms\">Inicio Sesion <small> Compra y vende vinilos en nuestro portal</small></h1>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <!-- Columna Izquierda -->\r\n                <div class=\" col-xs-12 col-sm-6 col-md-6 col-lg-6 text-justify\">\r\n                    <!-- Formulario -->\r\n                    <div class=\"row\">\r\n                        <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\">\r\n                            <div class=\"well bs-component\">\r\n                                <form class=\"form\">\r\n                                    <fieldset>\r\n                                        <legend>BIENVENIDOS</legend>\r\n                                        <div class=\"form-group\">\r\n                                            <label for=\"inputUser\" class=\"col-lg-12 control-label\"> ¡VIRTUAL VINILO!</label>\r\n                                            <div class=\"col-lg-12\">\r\n                                                <p class=\"news\">Bienvenido a Virtual vinilo la web de vinilos mas top del panorama español.Tenemos los último en vinilos a precios inreibles.Si ya formas parte de nuestra comunidad inicia sesion sino registrate haciendo click <a href=\"/registro\"><kbd>aqui</kbd></a></p>\r\n                                                <!--<p><img src=\"imagenes/VIrtualViniloLogo.png\" width=\"500\"></p>-->\r\n                                               \r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"col-lg-12\">\r\n                                            <br>\r\n                                        </div>\r\n                                        \r\n                                        \r\n                                    </fieldset>\r\n                                </form>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n\r\n                <!-- Columna Derecha -->\r\n                <div class=\" col-xs-12 col-sm-6 col-md-6 col-lg-6 text-justify\">\r\n                    <!-- Formulario -->\r\n                    <div class=\"row\">\r\n                        <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\">\r\n                            <div class=\"well bs-component\">\r\n                                <form class=\"form\" action=\"/login\" method=\"post\">\r\n                                    <fieldset>\r\n                                        <legend>Inicio Sesion</legend>\r\n                                     <form>\r\n                                        <div class=\"form-group\">\r\n\r\n                                            <label for=\"inputEmail\" class=\"col-lg-12\">Introduzca su nombre de usuario</label>\r\n                                            <div class=\"col-lg-12\">\r\n                                                <input #user type=\"text\" class=\"form-control\"  placeholder=\"Username\" name=\"username\">\r\n                                            </div>\r\n                                        </div>\r\n                                       \r\n                                        <div class=\"form-group\">\r\n                                            <label for=\"inputPassword\" class=\"col-lg-12\">Introduzca su password</label>\r\n                                            <div class=\"col-lg-12\">\r\n                                                <input #pass type=\"password\" class=\"form-control\"  placeholder=\"Password\" name=\"password\">\r\n                                                \r\n                       \t\t\t\t\t\t\t\t <!--<div class=\"errorLogin\">Datos erróneos. Por favor, inténtelo otra vez.</div>-->\r\n                        \t\t\t\t\t\t\t\r\n                                            </div>\r\n\r\n                                        </div>\r\n                                        <div class=\"form-group\">\r\n                                            <div class=\"col-lg-11\">\r\n                                                <span class=\"help-block\">Pulsándo el boton de \"Login\" (Iniciar Sesión) estás aceptando los Terminos de Servicio y la Política de Privacidad.</span>\r\n                                            </div>\r\n                                        </div>           \r\n                                               <button type =\"submit\" (click)=\"logIn($event, user.value, pass.value)\" class=\"btn btn-default\">Login</button>\r\n                                        </form>\r\n                                        <div class=\"col-lg-12\">\r\n                                            <br>\r\n                                        </div>\r\n                                        \r\n                                        <div class=\"form-group\">\r\n                                            <label class=\"col-lg-12\">\r\n                                           \r\n                                        </label>\r\n                                        </div>\r\n                                        <div *ngIf=\"loginService.isLogged\" class=\"nav navbar-nav navbar-right\">\r\n\r\n\t<ul class=\"nav navbar-nav\">\r\n\t\t<li>\r\n\t\t\t<a href=\"#\">{{loginService.user.name}}</a>\r\n\t\t</li>\r\n\t\t<li>\r\n\t\t\t<button class=\"btn btn-default navbar-btn\" (click)=\"logOut()\" type=\"button\">Log Out</button>\r\n\t\t</li>\r\n\t</ul>\r\n\r\n</div>\r\n\r\n                                    </fieldset>\r\n                                </form>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>"

/***/ }),

/***/ 232:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n\r\n        <!-- Page Heading -->\r\n        <div class=\"row\">\r\n            <div class=\"col-lg-12\">\r\n                <h1 class=\"page-header\">Ofertas y cupones\r\n                    <small>Copia el código y utiliza nuestras ofertas y cupones</small>\r\n                </h1>\r\n            </div>\r\n        </div>\r\n        <!-- /.row -->\r\n\r\n        <!-- Project One -->\r\n        <div class=\"row\">\r\n       <div role =\"tabpanel\"class=\"tab-pane\"id=\"ofertas\">\r\n\r\n       <ul>\r\n           <li *ngFor =\"let oferta  of ofertas\">\r\n               <div class=\"col-md-7\">\r\n                   <img src =\"../assets/img/2x1.jpg\">\r\n                   <br/>\r\n               </div>\r\n               <div class=\"col-md-5\">\r\n                   <h3>{{oferta.name}}</h3>\r\n                   <h4>CODIGO:{{oferta.code}}</h4>\r\n                   <p>{{oferta.description}}</p>\r\n                \r\n                   <button *ngIf=\"loginService.isLogged\" (click) =\"removeOferta()\">Remove</button>\r\n                   \r\n               </div>\r\n              \r\n            \r\n            </li>\r\n            \r\n       </ul>\r\n\r\n       \r\n      \r\n       \r\n       </div>\r\n        </div>\r\n       <br/>\r\n       <br/>\r\n       <br/>\r\n       \r\n       \r\n        <!-- /.row -->\r\n        <div class=\"row\">\r\n        <div role=\"tabpanel\"class=\"tab-pane\"id=\"ofertasDescuento\">\r\n            <br/>\r\n           <ul>\r\n           <li *ngFor =\"let ofertaDescuento  of ofertasDescuento\">\r\n               <div class=\"col-md-7\">\r\n                   <img src =\"../assets/img/10.png\">\r\n                   <br/>\r\n               </div>\r\n               <div class=\"col-md-5\">\r\n                   <h3>{{ofertaDescuento.name}}</h3>\r\n                   <h4>CODIGO:{{ofertaDescuento.code}}</h4>\r\n                   <p>{{ofertaDescuento.description}}</p>\r\n                   \r\n               </div>\r\n              \r\n            \r\n            </li>\r\n            <br/>\r\n            \r\n       </ul>\r\n        \r\n        </div>\r\n        </div>\r\n        \r\n        \r\n        </div>\r\n\t\t \r\n        <!-- /.row -->\r\n      \r\n       <br/>\r\n    "

/***/ }),

/***/ 233:
/***/ (function(module, exports) {

module.exports = "\r\n\r\n     <div class=\"container\">\r\n        <div class=\"row\">\r\n            <div class=\" col-xs-12 col-sm-12 col-md-12 col-lg-12 text-justify\">\r\n\r\n                <div class=\"row\">\r\n                    <div class=\"col-lg-12\">\r\n                        <div class=\"page-header\">\r\n                            <h1 id=\"forms\"> Mi Perfil \r\n                              <small>  Visualice sus datos</small>\r\n                          </h1>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <!-- final cabecera -->\r\n        </div>\r\n\r\n        <!-- USER PROFILE ROW STARTS-->\r\n        <div  class=\"container-fluid\">\r\n        <div class=\"row\">\r\n\r\n\r\n\r\n     <div class=\"col-md-12 col-sm-12\">\r\n                <div class=\"user-wrapper\">\r\n                    <div class=\"description\">\r\n                        \r\n                       \r\n                        <div class=\"list-group\">\r\n                            <a routerLink=\"/favoritos\" class=\"list-group-item\" ><span class=\"glyphicon glyphicon-folder-open\"></span> Administrar perfil</a>\r\n                            <a id=\"miPerfilMenu\" href=\"#\" class=\"list-group-item\"><span class=\"glyphicon glyphicon-user\"></span> Mi Perfil </a>\r\n                           \r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n\r\n<\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n        \r\n            <div class=\"col-lg-12\" id=\"miPerfil\">\r\n                <p class=\"lead\">Información de usuario</p>\r\n                <div class=\"list-group\">\r\n                   <li *ngFor =\"let user of users\">\r\n                       \r\n                      \r\n                       \r\n                           <div class=\"row\">\r\n                    <p class=\"list-group-item\">{{user.name}}</p>\r\n                    <p class=\"list-group-item\">{{user.surname}}</p>\r\n                    <p class=\"list-group-item\">{{user.pais}}</p>\r\n                    <p class=\"list-group-item\">{{user.descripcion}}</p>\r\n                    <p class=\"list-group-item\">{{user.postalCode}}</p>\r\n                    <p class=\"list-group-item\">{{user.telephone}}</p>\r\n                      \r\n                       </div>\r\n                      \r\n                   \r\n                   </li> \r\n\r\n                      \r\n                      \r\n                   \r\n                    \r\n                </div>\r\n            </div>\r\n                \r\n                <li *ngFor =\"let purchase of purchases\">\r\n                <p class=\"lead\">Información de Pedido</p>\r\n                <div class=\"list-group\">\r\n                    <p class=\"list-group-item\">{{purchase.code}}</p>\r\n                    <p class=\"list-group-item\">{{purchase.description}}</p>\r\n                </div>\r\n                </li>\r\n                \r\n                <!--<p class=\"lead\">Dirección de envío</p>\r\n                <li *ngFor =\"let resourceFavorito of resourcesFavoritos\">\r\n                <div class=\"list-group\">\r\n                    <p class=\"list-group-item\">{{resourceFavorito.name}}</p>\r\n                    \r\n                </div>\r\n                </li>-->\r\n            </div>\r\n            <div class=\"col-lg-12\" id=\"editarPerfil\">\r\n                <!-- Editar opciones del perfil -->\r\n                <!--<h3> Mis vinilos Favoritos </h3>\r\n                <br>\r\n                <!-- <div class=\"description\"> -->\r\n              \r\n                <br>\r\n          \r\n                \r\n                \r\n                <!-- Eliminar cuenta  -->\r\n                <div class=\"panel panel-danger text-center\">\r\n                    <div class=\"panel-heading\">\r\n                        Borrar cuenta\r\n                    </div>\r\n                    <form action=\"borrarPerfil\">\r\n                    <div class=\"panel-body text-center\">\r\n                        <p> Su cuenta será borrada para siempre y no podrá recuperarla. Al pulsar el botón de eliminar su cuenta será totalmente eliminada</p>\r\n                        <a href=\"/deleteUser\">\r\n\t                         <button type=\"button\"  class=\"btn btn-danger\">Eliminar</button>\r\n                           </a>\r\n                        \r\n                    </div>\r\n                    </form>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        </div>\r\n        <!-- USER PROFILE ROW END-->\r\n    "

/***/ }),

/***/ 234:
/***/ (function(module, exports) {

module.exports = " <div class=\"container\">\r\n        <div class=\"row\">\r\n            <div class=\" col-xs-12 col-sm-12 col-md-12 col-lg-12 text-justify\">\r\n\r\n                <div class=\"row\">\r\n                    <div class=\"col-lg-12\">\r\n                        <div class=\"page-header\">\r\n                            <h1 id=\"forms\"> Mi Perfil \r\n                              <small>  Visualice sus datos</small>\r\n                          </h1>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <!-- final cabecera -->\r\n        </div>\r\n\r\n        <!-- USER PROFILE ROW STARTS-->\r\n        <div  class=\"container-fluid\">\r\n        <div class=\"row\">\r\n            <div class=\"col-md-3 col-sm-3\">\r\n                <div class=\"user-wrapper\">\r\n                    <div class=\"description\">\r\n                        <br>\r\n                        <h3> </h3>\r\n                       \r\n                        <div class=\"list-group\">\r\n                            <a id=\"miPerfilMenu\" href=\"#\" class=\"list-group-item\"><span class=\"glyphicon glyphicon-user\"></span> Mi Perfil </a>\r\n                            <a id=\"editarPerfilMenu\" href=\"#\" class=\"list-group-item\"><span class=\"glyphicon glyphicon-folder-open\"></span> Administrar perfil</a>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <br>\r\n        \r\n            <div class=\"col-lg-9 col-md-9\" id=\"miPerfil\">\r\n                <p class=\"lead\">Información de usuario</p>\r\n                <div class=\"list-group\">\r\n                   <li *ngFor =\"let user of users\">\r\n                       <div *ngIf=\"loginService.isAdmin\">\r\n                       \r\n                           <div class=\"row\">\r\n                    <p class=\"list-group-item\">{{user.name}}</p>\r\n                    <p class=\"list-group-item\">{{user.surname}}</p>\r\n                    <p class=\"list-group-item\">{{user.pais}}</p>\r\n                    <p class=\"list-group-item\">{{user.descripcion}}</p>\r\n                    <p class=\"list-group-item\">{{user.postalCode}}</p>\r\n                    <p class=\"list-group-item\"></p>\r\n                       </div>\r\n                       </div>\r\n                   \r\n                   </li>\r\n\r\n                      \r\n                      \r\n                   \r\n                    \r\n                </div>\r\n            </div>\r\n                \r\n                <li *ngFor =\"let purchase of purchases\">\r\n                <p class=\"lead\">Información de Pedido</p>\r\n                <div class=\"list-group\">\r\n                    <p class=\"list-group-item\">{{purchase.code}}</p>\r\n                    <p class=\"list-group-item\">{{purchase.description}}</p>\r\n                </div>\r\n                </li>\r\n                \r\n                <p class=\"lead\">Dirección de envío</p>\r\n                <li *ngFor =\"let resourceFavorito of resourcesFavoritos\">\r\n                <div class=\"list-group\">\r\n                    <p class=\"list-group-item\">{{resourceFavorito.name}}</p>\r\n                    \r\n                </div>\r\n                </li>\r\n            </div>\r\n            <div class=\"col-md-9 col-sm-9\" id=\"editarPerfil\">\r\n                <!-- Editar opciones del perfil -->\r\n                <h3> Administrar perfil </h3>\r\n                <br>\r\n                <!-- <div class=\"description\"> -->\r\n              \r\n                <br>\r\n          \r\n                \r\n                \r\n                <!-- Eliminar cuenta  -->\r\n                <div class=\"panel panel-danger text-center\">\r\n                    <div class=\"panel-heading\">\r\n                        Borrar cuenta\r\n                    </div>\r\n                    <form action=\"borrarPerfil\">\r\n                    <div class=\"panel-body text-center\">\r\n                        <p> Su cuenta será borrada para siempre y no podrá recuperarla. Al pulsar el botón de eliminar su cuenta será totalmente eliminada</p>\r\n                        <a href=\"/deleteUser\">\r\n\t                         <button type=\"button\"  class=\"btn btn-danger\">Eliminar</button>\r\n                           </a>\r\n                        \r\n                    </div>\r\n                    </form>\r\n                </div>\r\n            </div>\r\n\r\n\r\n\r\n            \r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n        </div>\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n        </div>"

/***/ }),

/***/ 235:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n        <br>\r\n        <br>\r\n        <div class=\"page\" id=\"banner\">\r\n            <div class=\"row\">\r\n                <div class=\" col-xs-12 col-sm-12 col-md-12 col-lg-12 text-justify\">\r\n                    <!-- Título -->\r\n                    <div class=\"row\">\r\n                        <div class=\"col-lg-10\">\r\n                            <div class=\"page-header\">\r\n                                <h1 id=\"forms\">Regístrate ahora! <small> Compra y vende vinilos en nuestro portal</small></h1>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <!-- Columna -->\r\n                <div class=\" col-xs-12 col-sm-6 col-md-6 col-lg-6 col-md-offset-3 col-sm-offset-3 col-lg-offset-3 text-justify\">\r\n                    <!-- Formulario -->\r\n                    <div class=\"row\">\r\n                        <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\">\r\n                            <div class=\"well bs-component\">\r\n                                \r\n                                 <form action=\"registrarse\" method=\"post\">\r\n                                   \r\n                                        <legend>Datos personales</legend>\r\n                                        <div class=\"form-group\">\r\n                                            <label for=\"inputUser\" class=\"col-lg-12 control-label\">Nombre de usuario</label>\r\n                                            <div class=\"col-lg-12\">\r\n                                                <input #name type=\"text\" class=\"form-control\" name=\"name\" placeholder=\"Elige un nombre de usuario\">\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"col-lg-12\">\r\n                                            <br>\r\n                                        </div>\r\n                                        <div class=\"form-group\">\r\n                                            <label for=\"inputUser\" class=\"col-lg-12 control-label\">Nombre y apellidos</label>\r\n                                            <div class=\"col-lg-12\">\r\n                                                <input #surname type=\"text\" class=\"form-control\" name=\"surname\" placeholder=\"Introduce tu nombre y apellidos\">\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"col-lg-12\">\r\n                                            <br>\r\n                                        </div>\r\n                                        <div class=\"form-group\">\r\n                                            <label for=\"inputEmail\" class=\"col-lg-12 control-label\">Email</label>\r\n                                            <div class=\"col-lg-12\">\r\n                                                <input #email type=\"text\" class=\"form-control\" name=\"email\" placeholder=\"Introduce email\">\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"col-lg-12\">\r\n                                            <br>\r\n                                        </div>\r\n                                        <div class=\"form-group\">\r\n                                            <label for=\"inputEmail\" class=\"col-lg-12 control-label\">País</label>\r\n                                            <div class=\"col-lg-12\">\r\n                                                <input #pais type=\"text\" class=\"form-control\" name=\"pais\" placeholder=\"Introduce el país\">\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"col-lg-12\">\r\n                                            <br>\r\n                                        </div>\r\n                                        <div class=\"form-group\">\r\n                                            <label for=\"inputEmail\" class=\"col-lg-12 control-label\">Codigo Postal</label>\r\n                                            <div class=\"col-lg-12\">\r\n                                                <input #postalCode type=\"text\" class=\"form-control\" name=\"postalCode\" placeholder=\"Introduce el código postal\">\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"col-lg-12\">\r\n                                            <br>\r\n                                        </div>\r\n                                        <div class=\"form-group\">\r\n                                            <label for=\"inputEmail\" class=\"col-lg-12 control-label\">Dirección, población</label>\r\n                                            <div class=\"col-lg-12\">\r\n                                                <input #descripcion type=\"text\" class=\"form-control\" name=\"descripcion\" placeholder=\"Introduce una descripción que te defina\">\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"col-lg-12\">\r\n                                            <br>\r\n                                        </div>\r\n                                        <div class=\"form-group\">\r\n                                            <label for=\"inputEmail\" class=\"col-lg-12 control-label\">Número de teléfono</label>\r\n                                            <div class=\"col-lg-12\">\r\n                                                <input #telephone type=\"text\" class=\"form-control\" name=\"telephone\" placeholder=\"Introduce tu número de telefono\">\r\n                                            </div>\r\n                                        </div>\r\n                                         <div class=\"col-lg-12\">\r\n                                            <br>\r\n                                            </div>\r\n                                        \r\n                                         <div class=\"form-group\">\r\n                                            <label for=\"inputEmail\" class=\"col-lg-12 control-label\">Contraseña</label>\r\n                                            <div class=\"col-lg-12\">\r\n                                                <input #passwordHash type=\"password\" class=\"form-control\" name=\"contraseña\" placeholder=\"Elige una contraseña\">\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"col-lg-12\">\r\n                                        <br>\r\n                                        </div>\r\n           \r\n                                    <div class=\"form-group\">\r\n                                     \r\n                                   <button (click)=\"register(name.value,surname.value,email.value,pais.value,descripcion.value,telephone.value,passwordHash.value,postalCode.value)\" type=\"submit\" class=\"btn btn-primary btn-lg btn-block submitButton\">Registrarme</button>\r\n                                    </div>\r\n                                    <a routerLink='/login'>Si ya tiene una cuenta acceda a login</a>\r\n                                  \r\n                                </form>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n"

/***/ }),

/***/ 236:
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n            <div class=\"col-lg-12\">\r\n                <h1 class=\"page-header\">Sobre Nosotros\r\n                    <small>Bienvenido a Virtual Vinilo! Tu web de compra de vinilos.</small>\r\n                </h1>\r\n                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint, explicabo dolores ipsam aliquam inventore corrupti eveniet quisquam quod totam laudantium repudiandae obcaecati ea consectetur debitis velit facere nisi expedita vel?</p>\r\n            </div>\r\n        </div>\r\n\r\n        <!-- Team Members Row -->\r\n        <div class=\"row\">\r\n            <div class=\"col-lg-12\">\r\n                <h2 class=\"page-header\">¿Quien hace posible Virtual Vinilo?</h2>\r\n            </div>\r\n            <div class=\"col-lg-3 col-sm-6 text-center\">\r\n                <img class=\"img-circle img-responsive img-center\" src=\"imagenes/250x250.png\" alt=\"\">\r\n                <h3>Daniel Camacho\r\n                    <small>Desarrollador</small>\r\n                </h3>\r\n                <p>What does this team member to? Keep it short! This is also a great spot for social links!</p>\r\n            </div>\r\n            <div class=\"col-lg-3 col-sm-6 text-center\">\r\n                <img class=\"img-circle img-responsive img-center\" src=\"imagenes/250x250.png\" alt=\"\">\r\n                <h3>Guille Urbano\r\n                    <small>Desarrollador</small>\r\n                </h3>\r\n                <p>What does this team member to? Keep it short! This is also a great spot for social links!</p>\r\n            </div>\r\n            <div class=\"col-lg-3 col-sm-6 text-center\">\r\n                <img class=\"img-circle img-responsive img-center\" src=\"imagenes/250x250.png\" alt=\"\">\r\n                <h3>Jorge Galindo\r\n                    <small>Desarrollador</small>\r\n                </h3>\r\n                <p>What does this team member to? Keep it short! This is also a great spot for social links!</p>\r\n            </div>\r\n            <div class=\"col-lg-3 col-sm-6 text-center\">\r\n                <img class=\"img-circle img-responsive img-center\" src=\"imagenes/250x250.png\" alt=\"\">\r\n                <h3>Ilia Ramírez \r\n                    <small>Desarrollador</small>\r\n                </h3>\r\n                <p>What does this team member to? Keep it short! This is also a great spot for social links!</p>\r\n            </div>\r\n        </div>\r\n\r\n   \r\n    <!-- /.container -->\r\n\r\n    <div class=\"container\">\r\n        <br>\r\n        <hr>\r\n        <br>\r\n        <div class=\"row\">\r\n            <div class=\"col-md-12\">\r\n                <div class=\"panel panel-danger\">\r\n                    <div class=\"panel-heading\">\r\n                        <h3 class=\"panel-title\">Aqui podras comprobar nuestra forma de trabajar</h3>\r\n                    </div>\r\n                    <div class=\"video\">\r\n                        <div class=\"panel-body\">\r\n                            <div class=\"embed-responsive embed-responsive-16by9 margen\">\r\n                                <iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/Z2wzM5OqDbE\" frameborder=\"0\" allowfullscreen></iframe>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <br>\r\n"

/***/ }),

/***/ 29:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__);
/* unused harmony export Resources */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResourceService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




//import {Resource} from"app/models/resource.model";
var BASE_URL = "https://localhost:8443/api/resources/";
var Resources = (function () {
    function Resources(id, title, subtitule, interprete, fecha, estado, precio, código, img) {
        this.id = id;
        this.title = title;
        this.subtitule = subtitule;
        this.interprete = interprete;
        this.fecha = fecha;
        this.estado = estado;
        this.precio = precio;
        this.código = código;
        this.img = img;
    }
    return Resources;
}());

var ResourceService = (function () {
    /* private Resources=[
         new Resources(8,"La vida es bella","fjfjf","Bob marley","fffff","dddd",88999,999,""),
         new Resources(9,"Living","jgjg","QUEEN","Queen","dddd",88999,999,""),
         new Resources(10,"Luces de Bohemia","fjfjf","THE BEATLES","fffff","dddd",88999,999,""),
         new Resources(11,"Corazones","fjfjf","SERRAT","fffff","dddd",88999,999,""),
         new Resources(12,"Luces","fjfjf","Ffff","fffff","dddd",88999,999,""),
         new Resources(13,"Colores","fjfjf","Ffff","fffff","dddd",88999,999,""),
         new Resources(14,"dddd","fjfjf","Ffff","fffff","dddd",88999,999,"")
     
 
     ];
 
     getResources(){
         return this.Resources;
     }
     getResource(id:number|string){
         return this.Resources.find(resource => resource.id === +id);
     }*/
    function ResourceService(http) {
        this.http = http;
    }
    ResourceService.prototype.getResources = function () {
        var _this = this;
        return this.http.get(BASE_URL)
            .map(function (response) { return response.json(); })
            .catch(function (error) { return _this.handleError(error); });
    };
    ResourceService.prototype.getResourcesPag = function (page) {
        var _this = this;
        return this.http.get(BASE_URL + page).map(function (response) { return response.json().content; }).catch(function (error) { return _this.handleError(error); });
    };
    ResourceService.prototype.getAmountResources = function () {
        return this.http.get(BASE_URL + '').map(function (response) { return response.json().totalElements; }).catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw('Error:resource not found'); });
    };
    ResourceService.prototype.getResource = function (id) {
        var _this = this;
        return this.http.get(BASE_URL + id, {})
            .map(function (response) { return response.json(); })
            .catch(function (error) { return _this.handleError(error); });
    };
    ResourceService.prototype.getRecommended = function () {
        var _this = this;
        return this.http.get(BASE_URL + 'recommended', {})
            .map(function (response) { return response.json(); })
            .catch(function (error) { return _this.handleError(error); });
    };
    ResourceService.prototype.getFavoritos = function () {
        var _this = this;
        return this.http.get(BASE_URL + 'favoritos', {})
            .map(function (response) { return response.json(); })
            .catch(function (error) { return _this.handleError(error); });
    };
    ResourceService.prototype.newResource = function (resource) {
        return this.http.post(BASE_URL, resource)
            .map(function (response) { return response.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw('Server error'); });
    };
    ResourceService.prototype.removeResource = function (resource) {
        var _this = this;
        return this.http.delete(BASE_URL + resource.id)
            .map(function (response) { return undefined; })
            .catch(function (error) { return _this.handleError(error); });
    };
    ResourceService.prototype.gettAllResources = function (type, page) {
        var url = BASE_URL + '?type=' + type + '&page=' + page;
        return this.http.get(url)
            .map(function (response) { return response.json().content; })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw('Server error'); });
    };
    ResourceService.prototype.addResource = function (resource) {
        var _this = this;
        return this.http.post(BASE_URL, resource)
            .map(function (response) { return response.json(); })
            ._catch(function (error) { return _this.handleError(error); });
    };
    ResourceService.prototype.updateResource = function (resource) {
        var _this = this;
        return this.http.put(BASE_URL + resource.id, resource)
            .map(function (response) { return response.json(); })
            .catch(function (error) { return _this.handleError(error); });
    };
    ResourceService.prototype.saveBook = function (resource) {
        var _this = this;
        var body = JSON.stringify(resource);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Headers */]({
            'Content-Type': 'application/json',
            'X-Requested-With': 'XMLHttpRequest'
        });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestOptions */]({ headers: headers });
        if (!resource.id) {
            return this.http.post(BASE_URL, body, options)
                .map(function (response) { return response.json(); })
                .catch(function (error) { return _this.handleError(error); });
        }
        else {
            return this.http.put(BASE_URL + resource.id, body, options)
                .map(function (response) { return response.json(); })
                .catch(function (error) { return _this.handleError(error); });
        }
    };
    ResourceService.prototype.handleError = function (error) {
        console.error(error);
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw("Server error (" + error.status + "): " + error.text());
    };
    return ResourceService;
}());
ResourceService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === "function" && _a || Object])
], ResourceService);

var _a;
//# sourceMappingURL=resource.service.js.map

/***/ }),

/***/ 47:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PurchaseService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var BASE_URL = "https://localhost:8443/api/purchaseOrder/";
var PurchaseService = (function () {
    function PurchaseService(http) {
        this.http = http;
    }
    PurchaseService.prototype.getPurchases = function () {
        var _this = this;
        return this.http.get(BASE_URL)
            .map(function (response) { return response.json(); })
            .catch(function (error) { return _this.handleError(error); });
    };
    PurchaseService.prototype.getPurchase = function (code) {
        var _this = this;
        return this.http.get(BASE_URL + code)
            .map(function (response) { return response.json(); })
            .catch(function (error) { return _this.handleError(error); });
    };
    PurchaseService.prototype.addPurchase = function (purchase) {
        var _this = this;
        return this.http.post(BASE_URL, purchase)
            .map(function (response) { return response.json(); })
            .catch(function (error) { return _this.handleError(error); });
    };
    PurchaseService.prototype.handleError = function (error) {
        console.error(error);
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw("Server error (" + error.status + "): " + error.text());
    };
    return PurchaseService;
}());
PurchaseService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === "function" && _a || Object])
], PurchaseService);

var _a;
//# sourceMappingURL=purchase.service.js.map

/***/ }),

/***/ 504:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(159);


/***/ }),

/***/ 64:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OfertaService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var BASE_URL = "https://localhost:8443/api/ofertas/";
var OfertaService = (function () {
    function OfertaService(http) {
        this.http = http;
    }
    OfertaService.prototype.getOfertas = function () {
        var _this = this;
        return this.http.get(BASE_URL, {})
            .map(function (response) { return response.json(); })
            .catch(function (error) { return _this.handleError(error); });
    };
    OfertaService.prototype.getOferta = function (id) {
        var _this = this;
        return this.http.get(BASE_URL + id, {})
            .map(function (response) { return response.json(); })
            .catch(function (error) { return _this.handleError(error); });
    };
    OfertaService.prototype.addOferta = function (oferta) {
        var _this = this;
        return this.http.post(BASE_URL, oferta)
            .map(function (response) { return response.json(); })
            .catch(function (error) { return _this.handleError(error); });
    };
    OfertaService.prototype.removeOferta = function (oferta) {
        var _this = this;
        return this.http.delete(BASE_URL + oferta.id)
            .map(function (response) { return response.json(); })
            .catch(function (error) { return _this.handleError(error); });
    };
    OfertaService.prototype.handleError = function (error) {
        console.error(error);
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw("Server error (" + error.status + "): " + error.text());
    };
    return OfertaService;
}());
OfertaService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === "function" && _a || Object])
], OfertaService);

var _a;
//# sourceMappingURL=oferta.service.js.map

/***/ }),

/***/ 65:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OfertaDescuentoService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var URL = 'https://localhost:8443/api/ofertasDescuento/';
var OfertaDescuentoService = (function () {
    function OfertaDescuentoService(http) {
        this.http = http;
    }
    OfertaDescuentoService.prototype.getOfertasDescuento = function () {
        var _this = this;
        return this.http.get(URL, {})
            .map(function (response) { return response.json(); })
            .catch(function (error) { return _this.handleError(error); });
    };
    OfertaDescuentoService.prototype.getOfertaDescuento = function (id) {
        var _this = this;
        return this.http.get(URL + id, {})
            .map(function (response) { return response.json(); })
            .catch(function (error) { return _this.handleError(error); });
    };
    OfertaDescuentoService.prototype.addOfertaDescuento = function (ofertaDescuento) {
        var _this = this;
        return this.http.post(URL, ofertaDescuento, {})
            .map(function (response) { return response.json(); })
            .catch(function (error) { return _this.handleError(error); });
    };
    OfertaDescuentoService.prototype.handleError = function (error) {
        console.error(error);
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw('Server error (' + error.status + '): ' + error.text());
    };
    return OfertaDescuentoService;
}());
OfertaDescuentoService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === "function" && _a || Object])
], OfertaDescuentoService);

var _a;
//# sourceMappingURL=ofertaDescuento.service.js.map

/***/ }),

/***/ 92:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_service_user_service__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_service_resource_service__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_app_service_oferta_service__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_app_service_ofertaDescuento_service__ = __webpack_require__(65);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdministradorComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AdministradorComponent = (function () {
    function AdministradorComponent(router, activatedRoute, userService, resourceService, ofertaService, ofertaDescuentoService) {
        var _this = this;
        this.router = router;
        this.userService = userService;
        this.resourceService = resourceService;
        this.ofertaService = ofertaService;
        this.ofertaDescuentoService = ofertaDescuentoService;
        var id = activatedRoute.snapshot.params['id'];
        if (id) {
            resourceService.getResource(id).subscribe(function (resource) { return _this.resource = resource; }, function (error) { return console.error(error); });
            this.newResource = false;
        }
        else {
            this.resource = { id: 0, title: '', subtitle: '', interprete: '', fecha: '', estado: '', album: '', precio: 0, codigo: 0, img: '' };
            this.newResource = true;
        }
        var i = activatedRoute.snapshot.params['id'];
        if (i) {
            ofertaService.getOferta(i).subscribe(function (oferta) { return _this.oferta = oferta; }, function (error) { return console.error(error); });
            this.newOferta = false;
        }
        else {
            this.oferta = { id: 0, name: '', code: '', description: '', llevas: 0, pagas: 0, img: '' };
            this.newOferta = true;
        }
        var ii = activatedRoute.snapshot.params['id'];
        if (ii) {
            ofertaDescuentoService.getOfertaDescuento(id).subscribe(function (ofertaDescuento) { return _this.ofertaDescuento = ofertaDescuento; }, function (error) { return console.error(error); });
            this.newOfertaDescuento = false;
        }
        else {
            this.ofertaDescuento = { id: 0, name: '', code: '', description: '', porcentaje: 0, img: '' };
            this.newOfertaDescuento = true;
        }
        var idUser = activatedRoute.snapshot.params['id'];
        if (idUser) {
            userService.getUser(id).subscribe(function (user) { return _this.user = user; }, function (error) { return console.error(error); });
            this.newUser = true;
        }
        else {
            this.user = { id: 0, name: "", surname: "", pais: "", descripcion: "", telephone: "", password: "", postalCode: 0 };
            this.newUser = true;
        }
        /*  let name = activatedRoute.snapshot.params['id'];
          service.getUser(name).subscribe(
              user => this.user = user,
              error => console.error(error)
          )*/
    }
    AdministradorComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userService.getUsers().subscribe(function (users) { return _this.users = users; }, function (error) { return console.log(error); });
    };
    AdministradorComponent.prototype.cancel = function () {
        window.history.back();
    };
    AdministradorComponent.prototype.save = function () {
        this.resourceService.addResource(this.resource).subscribe(function (resource) { }, function (error) { return console.error('Error creating new resource' + error); });
        window.history.back();
    };
    AdministradorComponent.prototype.saveOferta = function () {
        this.ofertaService.addOferta(this.oferta).subscribe(function (oferta) { }, function (error) { return console.error('Error  creating new oferta' + error); });
        window.history.back();
    };
    AdministradorComponent.prototype.saveOfertaDescuento = function () {
        this.ofertaDescuentoService.addOfertaDescuento(this.ofertaDescuento).subscribe(function (OfertaDescuento) { }, function (error) { return console.error('Error creating new ofertaDescuento'); });
        window.history.back();
    };
    AdministradorComponent.prototype.saveUser = function () {
        this.userService.addUser(this.user).subscribe(function (user) { }, function (error) { return console.error('Error creating user'); });
        window.history.back();
    };
    return AdministradorComponent;
}());
AdministradorComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-administrador',
        template: __webpack_require__(222)
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2_app_service_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_app_service_user_service__["a" /* UserService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3_app_service_resource_service__["a" /* ResourceService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_app_service_resource_service__["a" /* ResourceService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4_app_service_oferta_service__["a" /* OfertaService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_app_service_oferta_service__["a" /* OfertaService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_5_app_service_ofertaDescuento_service__["a" /* OfertaDescuentoService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5_app_service_ofertaDescuento_service__["a" /* OfertaDescuentoService */]) === "function" && _f || Object])
], AdministradorComponent);

var _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=administrador.component.js.map

/***/ }),

/***/ 93:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(4);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__(223),
        styles: [__webpack_require__(221)]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 94:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_service_resource_service__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_service_login_service__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_app_service_user_service__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser__ = __webpack_require__(33);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ArticuloComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ArticuloComponent = (function () {
    function ArticuloComponent(router, sanitizer, activatedRoute, service, loginService, userService, resourceService) {
        var _this = this;
        this.router = router;
        this.sanitizer = sanitizer;
        this.service = service;
        this.loginService = loginService;
        this.userService = userService;
        this.resourceService = resourceService;
        this.resources = [];
        this.asunto = [];
        this.comentarios = [];
        this.thumbailA = '<div class ="thumbail-resource" style="background:url(';
        this.thumbailB = ') no repeat 50% fixed;background-size:100%;"></div>';
        var id = activatedRoute.params.subscribe(function (params) {
            _this.resourceService.getResource(params['id']).subscribe(function (resource) {
                _this.resource = resource;
            }, function (error) { return console.error(error); });
        });
    }
    /*  if(this.loginService.isLogged){
          this.userService.getUserId(this.loginService.user.id).subscribe(
              user =>{
                  this.user = user;
                  this.buttonFav= this.isFavourite();
              },
              error => console.error(error)
          );
      }
  });

     
 }

addCarrito(){
  this.user.carrito.push(this.resource);
  console.log(this.user)
  console.log(this.user.carrito);
}*/
    //  let id = activatedRoute.snapshot.params['id'];
    //  this.resource= service.getResource(id);
    /*   let id = activatedRoute.snapshot.params['id'];
       service.getResource(id).subscribe(
           resource=> this.resource = resource,
           error => console.error(error)
       );
        
   }*/
    ArticuloComponent.prototype.addContent = function () {
        this.asunto.push(this.inputContent1);
        this.comentarios.push(this.inputContent2);
        this.inputContent1 = "";
        this.inputContent2 = "";
    };
    ArticuloComponent.prototype.goToLogin = function () {
        this.router.navigate(['/login']);
    };
    return ArticuloComponent;
}());
ArticuloComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-articulo',
        template: __webpack_require__(224)
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser__["c" /* DomSanitizer */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser__["c" /* DomSanitizer */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2_app_service_resource_service__["a" /* ResourceService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_app_service_resource_service__["a" /* ResourceService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_3_app_service_login_service__["a" /* LoginService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_app_service_login_service__["a" /* LoginService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_4_app_service_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_app_service_user_service__["a" /* UserService */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_2_app_service_resource_service__["a" /* ResourceService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_app_service_resource_service__["a" /* ResourceService */]) === "function" && _g || Object])
], ArticuloComponent);

var _a, _b, _c, _d, _e, _f, _g;
//# sourceMappingURL=articulo.component.js.map

/***/ }),

/***/ 95:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_service_resource_service__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_service_purchase_service__ = __webpack_require__(47);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CarritoComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CarritoComponent = (function () {
    function CarritoComponent(router, activatedRouter, service, purchaseService) {
        var _this = this;
        this.router = router;
        this.service = service;
        this.purchaseService = purchaseService;
        var id = activatedRouter.snapshot.params['id'];
        service.getResource(id).subscribe(function (resource) { return _this.resource = resource; }, function (error) { return console.error(error); });
    }
    CarritoComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.purchaseService.getPurchases().subscribe(function (purchases) { return _this.purchases = purchases; }, function (error) { return console.log(error); });
    };
    return CarritoComponent;
}());
CarritoComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-carrito',
        template: __webpack_require__(225)
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2_app_service_resource_service__["a" /* ResourceService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_app_service_resource_service__["a" /* ResourceService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3_app_service_purchase_service__["a" /* PurchaseService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_app_service_purchase_service__["a" /* PurchaseService */]) === "function" && _d || Object])
], CarritoComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=carrito.component.js.map

/***/ }),

/***/ 96:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_service_resource_service__ = __webpack_require__(29);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditarComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EditarComponent = (function () {
    function EditarComponent(router, activatedRoute, resourceService) {
        var _this = this;
        this.router = router;
        this.resourceService = resourceService;
        var id = activatedRoute.snapshot.params['id'];
        if (id) {
            resourceService.getResource(id).subscribe(function (resource) { return _this.resource = resource; }, function (error) { return console.error(error); });
            this.newResource = false;
        }
        else {
            this.resource = { id: 0, title: '', subtitle: '', interprete: '', fecha: '', estado: '', album: '', precio: 0, codigo: 0, img: '' };
            this.newResource = true;
        }
    }
    EditarComponent.prototype.cancel = function () {
        window.history.back();
    };
    EditarComponent.prototype.save = function () {
        this.resourceService.saveBook(this.resource).subscribe(function (resource) { }, function (error) { return console.error('Error'); });
        window.history.back();
    };
    return EditarComponent;
}());
EditarComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-editar',
        template: __webpack_require__(226)
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2_app_service_resource_service__["a" /* ResourceService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_app_service_resource_service__["a" /* ResourceService */]) === "function" && _c || Object])
], EditarComponent);

var _a, _b, _c;
/* eventoNewTitle:any;
 editar:boolean;
 user:User;
 resource:Resource
 name: string="";

 
constructor(activatedRoute:ActivatedRoute,private router:Router,private  service:ResourceService,private loginService:LoginService,private userService:UserService, private resourceService:ResourceService){

  let id  = activatedRoute.snapshot.params['id'];
  if(id){
      this.editar=true;
      this.resourceService.getResource(id).subscribe(
          resource =>{
              this.resource = resource;
          },
          error => console.error(error)
      );
  }

}

editarVinilo(){
  this.resource.title = this.name;
  this.resourceService.updateResource(this.resource).subscribe(
      resource =>{

      }
  )
}
saveEvent(event:any){
  this.eventoNewTitle= event;
}

ngOnInit(){

}*/
//# sourceMappingURL=editar.component.js.map

/***/ }),

/***/ 97:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_service_resource_service__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_service_login_service__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_app_service_user_service__ = __webpack_require__(19);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FavoritosComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var FavoritosComponent = (function () {
    function FavoritosComponent(router, resourceService, loginService, activatedRoute, userService) {
        //this.addResources(true);
        var _this = this;
        this.router = router;
        this.resourceService = resourceService;
        this.loginService = loginService;
        this.userService = userService;
        this.resources = [];
        /* let id = activatedRoute.snapshot.params['id'];
         resourceService.getResource(id).subscribe(
           resource => this.resource = resource,
           error => console.error(error)
     
         );*/
        this.resourceService.getFavoritos().subscribe(function (resources) { return _this.resources = resources; }, function (error) { return console.error(error); });
    }
    return FavoritosComponent;
}());
FavoritosComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-favoritos',
        template: __webpack_require__(227)
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_app_service_resource_service__["a" /* ResourceService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_app_service_resource_service__["a" /* ResourceService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_app_service_login_service__["a" /* LoginService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_app_service_login_service__["a" /* LoginService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4_app_service_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_app_service_user_service__["a" /* UserService */]) === "function" && _e || Object])
], FavoritosComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=favoritos.component.js.map

/***/ }),

/***/ 98:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(4);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FooterComponent = (function () {
    function FooterComponent() {
    }
    return FooterComponent;
}());
FooterComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-footer',
        template: __webpack_require__(228)
    })
], FooterComponent);

//# sourceMappingURL=footer.component.js.map

/***/ }),

/***/ 99:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_service_login_service__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_service_user_service__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(14);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HeaderComponent = (function () {
    function HeaderComponent(router, loginService, service) {
        this.router = router;
        this.loginService = loginService;
        this.service = service;
        this.user = 'Jorge';
    }
    HeaderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.service.getUsers().subscribe(function (users) { return _this.users = users; }, function (error) { return console.log(error); });
    };
    return HeaderComponent;
}());
HeaderComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-header',
        template: __webpack_require__(229)
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_app_service_login_service__["a" /* LoginService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_app_service_login_service__["a" /* LoginService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2_app_service_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_app_service_user_service__["a" /* UserService */]) === "function" && _c || Object])
], HeaderComponent);

var _a, _b, _c;
//# sourceMappingURL=header.component.js.map

/***/ })

},[504]);
//# sourceMappingURL=main.bundle.js.map