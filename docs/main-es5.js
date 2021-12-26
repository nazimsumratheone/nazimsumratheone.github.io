function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
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
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var routes = [];

    var AppRoutingModule = /*#__PURE__*/_createClass(function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    });

    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _syncfusion_ej2_angular_treegrid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @syncfusion/ej2-angular-treegrid */
    "./node_modules/@syncfusion/ej2-angular-treegrid/@syncfusion/ej2-angular-treegrid.js");
    /* harmony import */


    var _syncfusion_ej2_popups__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @syncfusion/ej2-popups */
    "./node_modules/@syncfusion/ej2-popups/dist/es6/ej2-popups.es2015.js");
    /* harmony import */


    var _syncfusion_ej2_buttons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @syncfusion/ej2-buttons */
    "./node_modules/@syncfusion/ej2-buttons/dist/es6/ej2-buttons.es2015.js");
    /* harmony import */


    var _syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @syncfusion/ej2-base */
    "./node_modules/@syncfusion/ej2-base/dist/es6/ej2-base.es2015.js");
    /* harmony import */


    var _app_constant__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./app.constant */
    "./src/app/app.constant.ts");
    /* harmony import */


    var _services_user_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./services/user.service */
    "./src/app/services/user.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _syncfusion_ej2_angular_popups__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @syncfusion/ej2-angular-popups */
    "./node_modules/@syncfusion/ej2-angular-popups/@syncfusion/ej2-angular-popups.js");
    /* harmony import */


    var _syncfusion_ej2_angular_navigations__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @syncfusion/ej2-angular-navigations */
    "./node_modules/@syncfusion/ej2-angular-navigations/@syncfusion/ej2-angular-navigations.js");
    /* harmony import */


    var _syncfusion_ej2_angular_dropdowns__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @syncfusion/ej2-angular-dropdowns */
    "./node_modules/@syncfusion/ej2-angular-dropdowns/@syncfusion/ej2-angular-dropdowns.js");
    /* harmony import */


    var _syncfusion_ej2_angular_buttons__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @syncfusion/ej2-angular-buttons */
    "./node_modules/@syncfusion/ej2-angular-buttons/@syncfusion/ej2-angular-buttons.js");
    /* harmony import */


    var _syncfusion_ej2_angular_calendars__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @syncfusion/ej2-angular-calendars */
    "./node_modules/@syncfusion/ej2-angular-calendars/@syncfusion/ej2-angular-calendars.js");

    var _c0 = ["treegrid"];
    var _c1 = ["container"];
    var _c2 = ["ejDialog"];
    var _c3 = ["chooseColDialog"];

    function AppComponent_ejs_treegrid_3_Template(rf, ctx) {
      if (rf & 1) {
        var _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ejs-treegrid", 9, 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("actionComplete", function AppComponent_ejs_treegrid_3_Template_ejs_treegrid_actionComplete_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11);

          var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r10.actionHandler($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx_r0.data)("treeColumnIndex", 1)("columns", ctx_r0.columns)("selectionSettings", ctx_r0.selectionOptions)("allowResizing", true)("allowFiltering", ctx_r0.allowFiltering)("frozenColumns", ctx_r0.frozenColumns)("allowSorting", true)("sortSettings", ctx_r0.sortSettings)("enableInfiniteScrolling", true);
      }
    }

    function AppComponent_ejs_contextmenu_4_Template(rf, ctx) {
      if (rf & 1) {
        var _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ejs-contextmenu", 11, 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("beforeItemRender", function AppComponent_ejs_contextmenu_4_Template_ejs_contextmenu_beforeItemRender_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14);

          var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r13.colItemRender($event);
        })("beforeClose", function AppComponent_ejs_contextmenu_4_Template_ejs_contextmenu_beforeClose_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14);

          var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r15.colBeforeClose($event);
        })("select", function AppComponent_ejs_contextmenu_4_Template_ejs_contextmenu_select_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14);

          var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r16.colItemSelect($event);
        })("beforeOpen", function AppComponent_ejs_contextmenu_4_Template_ejs_contextmenu_beforeOpen_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14);

          var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r17.onColContextMenuBeforeOpen($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("target", ctx_r1.colTarget)("items", ctx_r1.colMenuItems);
      }
    }

    function AppComponent_ejs_contextmenu_5_Template(rf, ctx) {
      if (rf & 1) {
        var _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ejs-contextmenu", 13, 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("beforeItemRender", function AppComponent_ejs_contextmenu_5_Template_ejs_contextmenu_beforeItemRender_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r20);

          var ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r19.rowItemRender($event);
        })("beforeClose", function AppComponent_ejs_contextmenu_5_Template_ejs_contextmenu_beforeClose_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r20);

          var ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r21.rowBeforeClose($event);
        })("select", function AppComponent_ejs_contextmenu_5_Template_ejs_contextmenu_select_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r20);

          var ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r22.rowItemSelect($event);
        })("beforeOpen", function AppComponent_ejs_contextmenu_5_Template_ejs_contextmenu_beforeOpen_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r20);

          var ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r23.onRowContextMenuBeforeOpen($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("target", ctx_r2.rowTarget)("items", ctx_r2.rowMenuItems);
      }
    }

    function AppComponent_ng_template_8_span_8_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 44);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " *Column name is required ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function AppComponent_ng_template_8_div_13_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "input", 45);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "span", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "label", 46);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        var tmp_0_0 = null;
        var currVal_0 = (ctx_r25.addColumnForm == null ? null : (tmp_0_0 = ctx_r25.addColumnForm.get("colType")) == null ? null : tmp_0_0.value) == "string" ? "text" : "number";
        var tmp_1_0 = null;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("type", currVal_0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Enter ", (ctx_r25.addColumnForm == null ? null : (tmp_1_0 = ctx_r25.addColumnForm.get("colType")) == null ? null : tmp_1_0.value) == "string" ? "Text" : "Number", "");
      }
    }

    function AppComponent_ng_template_8_div_14_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "ejs-datepicker", 47, 48);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function AppComponent_ng_template_8_div_15_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul", 45);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "ejs-radiobutton", 49);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "li", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "ejs-radiobutton", 50);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function AppComponent_ng_template_8_div_16_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "ejs-dropdownlist", 51);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx_r28.dropDownSet);
      }
    }

    function AppComponent_ng_template_8_span_17_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 44);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " *Column default value is required ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function AppComponent_ng_template_8_Template(rf, ctx) {
      if (rf & 1) {
        var _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function AppComponent_ng_template_8_Template_form_ngSubmit_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r32);

          var ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r31.saveCol();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "input", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "input", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "span", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "label", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Column Name");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, AppComponent_ng_template_8_span_8_Template, 2, 0, "span", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "ejs-dropdownlist", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, AppComponent_ng_template_8_div_13_Template, 6, 2, "div", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, AppComponent_ng_template_8_div_14_Template, 3, 0, "div", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, AppComponent_ng_template_8_div_15_Template, 6, 0, "div", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, AppComponent_ng_template_8_div_16_Template, 2, 1, "div", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, AppComponent_ng_template_8_span_17_Template, 2, 0, "span", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "p", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Column Configurations");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "input", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "span", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "label", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, " Minimum Column Width");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "input", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "span", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "label", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, " Font Size");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "ejs-dropdownlist", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 36);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "ejs-checkbox", 37);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 36);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "input", 38);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "label", 39);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, " Font Color");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 36);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "input", 40);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "label", 39);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, " Background Color");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 41);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "button", 42);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Save");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "button", 43);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_ng_template_8_Template_button_click_49_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r32);

          var ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r33.cancelCol();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Cancel");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        var tmp_1_0 = null;
        var currVal_1 = (ctx_r5.addColumnForm == null ? null : (tmp_1_0 = ctx_r5.addColumnForm.get("colName")) == null ? null : tmp_1_0.hasError("required")) && (ctx_r5.addColumnForm == null ? null : (tmp_1_0 = ctx_r5.addColumnForm.get("colName")) == null ? null : tmp_1_0.touched);
        var tmp_4_0 = null;
        var currVal_4 = (ctx_r5.addColumnForm == null ? null : (tmp_4_0 = ctx_r5.addColumnForm.get("colType")) == null ? null : tmp_4_0.value) == "string" || (ctx_r5.addColumnForm == null ? null : (tmp_4_0 = ctx_r5.addColumnForm.get("colType")) == null ? null : tmp_4_0.value) == "number";
        var tmp_5_0 = null;
        var currVal_5 = (ctx_r5.addColumnForm == null ? null : (tmp_5_0 = ctx_r5.addColumnForm.get("colType")) == null ? null : tmp_5_0.value) == "Date";
        var tmp_6_0 = null;
        var currVal_6 = (ctx_r5.addColumnForm == null ? null : (tmp_6_0 = ctx_r5.addColumnForm.get("colType")) == null ? null : tmp_6_0.value) == "boolean";
        var tmp_7_0 = null;
        var currVal_7 = (ctx_r5.addColumnForm == null ? null : (tmp_7_0 = ctx_r5.addColumnForm.get("colType")) == null ? null : tmp_7_0.value) == "object";
        var tmp_8_0 = null;
        var currVal_8 = (ctx_r5.addColumnForm == null ? null : (tmp_8_0 = ctx_r5.addColumnForm.get("colValue")) == null ? null : tmp_8_0.hasError("required")) && (ctx_r5.addColumnForm == null ? null : (tmp_8_0 = ctx_r5.addColumnForm.get("colValue")) == null ? null : tmp_8_0.touched);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r5.addColumnForm);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", currVal_1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx_r5.colTypeSet)("fields", ctx_r5.fieldsvalues);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", currVal_4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", currVal_5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", currVal_6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", currVal_7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", currVal_8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx_r5.alignmentSet);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r5.addColumnForm.invalid);
      }
    }

    function AppComponent_ng_template_12_div_2_Template(rf, ctx) {
      if (rf & 1) {
        var _r37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 58);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "input", 59);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function AppComponent_ng_template_12_div_2_Template_input_change_2_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r37);

          var col_r35 = ctx.$implicit;

          var ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r36.changeChooseCol($event, col_r35);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "label", 60);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var col_r35 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", col_r35.field)("checked", col_r35.visible == true);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("for", col_r35.field);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](col_r35.headerText);
      }
    }

    function AppComponent_ng_template_12_Template(rf, ctx) {
      if (rf & 1) {
        var _r39 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 52);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function AppComponent_ng_template_12_Template_form_ngSubmit_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r39);

          var ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r38.chooseCol();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 53);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AppComponent_ng_template_12_div_2_Template, 5, 4, "div", 54);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 55);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 56);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Save");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 57);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_ng_template_12_Template_button_click_6_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r39);

          var ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r40.cancelChooseCol();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Cancel");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r8.columns);
      }
    }

    var AppComponent = /*#__PURE__*/function () {
      function AppComponent(fb, userService) {
        _classCallCheck(this, AppComponent);

        this.fb = fb;
        this.userService = userService;
        this.data = [];
        this.columns = [];
        this.display = false;
        this.rowContextMenuDisplay = false;
        this.colContextMenuDisplay = true;
        this.colTarget = '.e-headercell';
        this.rowTarget = '.e-rowcell';
        this.allowFiltering = false;
        this.frozenColumns = 0;
        this.addUpdateLabel = "";
        this.selectedRows = [];
        this.pasteMode = '';
        this.selectedMode = '';
        this.deleteMode = '';
        this.fieldsvalues = {
          value: "value",
          text: "text"
        };
      }

      _createClass(AppComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getUsers();
          this.selectionOptions = {
            type: 'Single'
          };
          this.colMenuItems = _app_constant__WEBPACK_IMPORTED_MODULE_6__["AppConst"].colMenuItems;
          this.rowMenuItems = _app_constant__WEBPACK_IMPORTED_MODULE_6__["AppConst"].rowMenuItems;
          this.sortSettings = {
            columns: []
          };
          this.colCheckBoxMenus = _app_constant__WEBPACK_IMPORTED_MODULE_6__["AppConst"].colCheckBoxMenus;
          this.rowCheckBoxMenus = _app_constant__WEBPACK_IMPORTED_MODULE_6__["AppConst"].rowCheckBoxMenus;
          this.colTypeSet = _app_constant__WEBPACK_IMPORTED_MODULE_6__["AppConst"].colTypeSet;
          this.dropDownSet = _app_constant__WEBPACK_IMPORTED_MODULE_6__["AppConst"].dropDownSet;
          this.alignmentSet = _app_constant__WEBPACK_IMPORTED_MODULE_6__["AppConst"].alignmentSet;
          this.initForms();
        }
      }, {
        key: "initForms",
        value: function initForms() {
          this.addColumnForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            colName: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            colValue: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            colType: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            colMinWidth: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            colFontSize: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            colFontColor: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('#000000'),
            colBgColor: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('#ffffff'),
            colAlignment: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            colTextWrap: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            isColAdd: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](true)
          });
          this.addRowForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            duration: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required])
          });
        }
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {}
      }, {
        key: "getUsers",
        value: function getUsers() {
          var _this = this;

          this.userService.getUsers().subscribe(function (response) {
            _this.data = response.payload.userData;
            _this.columns = response.payload.columns;
            _this.display = true;
            setTimeout(function () {
              _this.rowContextMenuDisplay = true;
            }, 100);
          }, function (err) {
            console.log('🚀 ~ this.userService.getUsers ~ err', err);
          });
        } // ? Check/Uncheck of column contextmenu items

      }, {
        key: "colBeforeClose",
        value: function colBeforeClose(args) {
          if (args.event && args.event.target.closest('.e-menu-item')) {
            var selectedElem = args.element.querySelectorAll('.e-selected');

            for (var i = 0; i < selectedElem.length; i++) {
              var ele = selectedElem[i];
              ele.classList.remove('e-selected');
            }

            var checkbox = Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_5__["closest"])(args.event.target, '.e-checkbox-wrapper');

            if (checkbox) {
              var frame = checkbox.querySelector('.e-frame');

              if (checkbox && frame.classList.contains('e-check')) {
                frame.classList.remove('e-check');
              } else if (checkbox) {
                frame.classList.add('e-check');
              }
            }
          }
        } // ? Check/Uncheck of row contextmenu items

      }, {
        key: "rowBeforeClose",
        value: function rowBeforeClose(args) {
          if (args.event.target.closest('.e-menu-item')) {
            var selectedElem = args.element.querySelectorAll('.e-selected');

            for (var i = 0; i < selectedElem.length; i++) {
              var ele = selectedElem[i];
              ele.classList.remove('e-selected');
            }

            var checkbox = Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_5__["closest"])(args.event.target, '.e-checkbox-wrapper');

            if (checkbox) {
              var frame = checkbox.querySelector('.e-frame');

              if (checkbox && frame.classList.contains('e-check')) {
                frame.classList.remove('e-check');
              } else if (checkbox) {
                frame.classList.add('e-check');
              }
            }
          }
        } // ? Add checkbox to column contextmenu items

      }, {
        key: "colItemRender",
        value: function colItemRender(args) {
          if (this.colCheckBoxMenus.includes(args.item.id)) {
            var check;

            if (args.item.id === 'freeze') {
              check = Object(_syncfusion_ej2_buttons__WEBPACK_IMPORTED_MODULE_4__["createCheckBox"])(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_5__["createElement"], false, {
                label: args.item.text,
                checked: this.frozenColumns > 0 ? true : false
              });
            } else {
              check = Object(_syncfusion_ej2_buttons__WEBPACK_IMPORTED_MODULE_4__["createCheckBox"])(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_5__["createElement"], false, {
                label: args.item.text,
                checked: false
              });
            }

            args.element.innerHTML = '';
            args.element.appendChild(check);
          }
        } // ? Add checkbox to row contextmenu items

      }, {
        key: "rowItemRender",
        value: function rowItemRender(args) {
          if (this.rowCheckBoxMenus.includes(args.item.id)) {
            var check = Object(_syncfusion_ej2_buttons__WEBPACK_IMPORTED_MODULE_4__["createCheckBox"])(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_5__["createElement"], false, {
              label: args.item.text,
              checked: this.selectionOptions.type == 'Multiple' ? true : false
            });
            args.element.innerHTML = '';
            args.element.appendChild(check);
          }
        } // ? On column context menu open

      }, {
        key: "onColContextMenuBeforeOpen",
        value: function onColContextMenuBeforeOpen(event) {
          var _this2 = this;

          var path = event.event.path;
          path.forEach(function (element) {
            if (element.classList && element.classList.contains('e-headercell')) {
              var headerCell = element.querySelector('span.e-headertext');
              var columnName = headerCell.innerText;
              _this2.selectedColumn = _this2.columns.find(function (col) {
                return col.headerText === columnName;
              });
            }
          });
          var menuItems = event.element;
          var multiSortItem = menuItems.querySelector('li#multiSort');
          var filterItem = menuItems.querySelector('li#filter');
          var multiSortCheckBox = multiSortItem.querySelector('.e-frame');
          var filterCheckBox = filterItem.querySelector('.e-frame');
          var index = this.sortSettings.columns.findIndex(function (col) {
            return col.field === _this2.selectedColumn.field;
          });

          if (this.treeGridObj.allowFiltering) {
            filterCheckBox.classList.add('e-check');
          } else {
            filterCheckBox.classList.remove('e-check');
          }

          if (index > -1) {
            multiSortCheckBox.classList.add('e-check');
          } else {
            multiSortCheckBox.classList.remove('e-check');
          }
        } // ? On row context menu open

      }, {
        key: "onRowContextMenuBeforeOpen",
        value: function onRowContextMenuBeforeOpen(event) {
          var _this3 = this;

          var path = event.event.path;
          path.forEach(function (element) {
            if (element.classList && element.classList.contains('e-row')) {
              var cells = element.children;
              var rowId = cells[0].innerText;
              _this3.selectedRow = _this3.data.find(function (row) {
                return row.id === rowId;
              });
              _this3.selectedRowIndex = _this3.data.map(function (e) {
                return e.id;
              }).indexOf(rowId);
            }
          });
        } // ? On column context menu item click

      }, {
        key: "colItemSelect",
        value: function colItemSelect(args) {
          switch (args.item.id) {
            case 'filter':
              this.changeFilter();
              break;

            case 'freeze':
              this.freezeColumns(args);
              break;

            case 'multiSort':
              this.multiSort(args);
              break;

            case 'addCol':
              this.addColumn(true);
              break;

            case 'editCol':
              this.addColumn(false);
              break;

            case 'deleteCol':
              this.deleteColumn();
              break;

            case 'choose':
              this.openChooseColDialog();
              break;
          }
        } // ? On row context menu item click

      }, {
        key: "rowItemSelect",
        value: function rowItemSelect(args) {
          switch (args.item.id) {
            case 'multiSelect':
              this.changeRowSelectionOption();
              break;

            case 'addNextRow':
              this.addNextRow(args);
              break;

            case 'copyRow':
              this.copyRow(args);
              break;

            case 'cutRow':
              this.cutRow(args);
              break;

            case 'pasteNext':
              this.pasteMode = 'Next';
              this.paste(args);
              break;

            case 'pasteChild':
              this.pasteMode = 'Child';
              this.paste(args);
              break;

            case 'deleteRow':
              this.deleteRow(args);
              break;
          }
        }
      }, {
        key: "changeFilter",
        value: function changeFilter() {
          this.hideContextMenus();
          this.treeGridObj.allowFiltering = !this.treeGridObj.allowFiltering;
          this.refreshTreeGrid();
        }
      }, {
        key: "freezeColumns",
        value: function freezeColumns(args) {
          this.display = false;
          this.hideContextMenus();
          var checkboxEle = args.element.querySelector('span.e-frame.e-icons');

          if (checkboxEle.classList.contains('e-check')) {
            this.frozenColumns = 0;
          } else {
            var colIndex = this.columns.map(function (i) {
              return i.field;
            }).indexOf(this.selectedColumn.field);
            this.frozenColumns = colIndex + 1;
          }

          this.hardRefreshTreeGrid();
        }
      }, {
        key: "multiSort",
        value: function multiSort(args) {
          var _this4 = this;

          this.hideContextMenus();
          this.display = false;
          var checkboxEle = args.element.querySelector('span.e-frame.e-icons');

          if (checkboxEle.classList.contains('e-check')) {
            this.treeGridObj.removeSortColumn(this.selectedColumn.field);
            this.sortSettings.columns = this.sortSettings.columns.filter(function (col) {
              return col.field != _this4.selectedColumn.field;
            });
          } else {
            this.treeGridObj.sortByColumn(this.selectedColumn.field, 'Ascending', true);
            this.sortSettings.columns.push({
              direction: 'Ascending',
              field: this.selectedColumn.field
            });
          }

          this.hardRefreshTreeGrid();
        }
      }, {
        key: "addColumn",
        value: function addColumn(isAdd) {
          var _a;

          this.hideContextMenus();
          (_a = this.DialogAlert) === null || _a === void 0 ? void 0 : _a.hide();
          this.addUpdateLabel = isAdd ? "Add New Column" : "Edit New Column";

          if (!isAdd) {
            this.addColumnForm.patchValue({
              colName: this.selectedColumn.headerText,
              colValue: '',
              colType: this.selectedColumn.type,
              isColAdd: isAdd
            });
          } else {
            this.addColumnForm.reset();
            this.addColumnForm.patchValue({
              colType: 'string',
              isColAdd: isAdd
            });
          }

          this.ejDialog.show();
        }
      }, {
        key: "saveCol",
        value: function saveCol() {
          var _this5 = this;

          var isAdd = this.addColumnForm.get('isColAdd').value;
          var colName = this.addColumnForm.get('colName').value;
          var noSpaceColName = colName.replace(/ /g, "");
          var colType = this.addColumnForm.get('colType').value;
          var colVal = this.addColumnForm.get('colValue').value;
          var minWidth = this.addColumnForm.get('colMinWidth').value;
          var fontSize = this.addColumnForm.get('colFontSize').value;
          var fontColor = this.addColumnForm.get('colFontColor').value;
          var bgColor = this.addColumnForm.get('colBgColor').value;
          var alignMent = this.addColumnForm.get('colAlignment').value;
          var textWrap = this.addColumnForm.get('colTextWrap').value;
          var style = document.createElement('style');
          style.innerHTML = ".".concat(noSpaceColName, "css { color: ").concat(fontColor, " !important; font-size: ").concat(fontSize, "px !important; background-color: ").concat(bgColor, " !important; min-width: ").concat(minWidth, "px !important; text-align: ").concat(alignMent, " !important; }");
          document.getElementsByTagName('head')[0].appendChild(style);

          if (isAdd) {
            if (!this.columns.some(function (x) {
              return x.field.toLowerCase() == noSpaceColName.toLowerCase();
            })) {
              var newCol = {
                field: noSpaceColName,
                headerText: colName,
                headerTextAlign: alignMent,
                type: colType,
                customAttributes: {
                  "class": "".concat(noSpaceColName, "css")
                }
              };
              var colObj = new _syncfusion_ej2_angular_treegrid__WEBPACK_IMPORTED_MODULE_2__["Column"](newCol);
              this.columns.push(colObj);
              console.log("🚀  ~ saveCol ~ this.columns", this.columns);
              this.data.forEach(function (x) {
                x[noSpaceColName] = colVal;
              });
            } else {
              this.DialogAlert = _syncfusion_ej2_popups__WEBPACK_IMPORTED_MODULE_3__["DialogUtility"].alert({
                content: "This column name is already exists. Please try again with different column name!",
                okButton: {
                  text: 'OK',
                  click: this.addColumn.bind(this, true)
                },
                animationSettings: {
                  effect: 'Zoom'
                }
              });
            }
          } else {
            var _newCol = {
              field: this.selectedColumn.field,
              headerText: colName,
              headerTextAlign: alignMent,
              type: colType,
              customAttributes: {
                "class": "".concat(noSpaceColName, "css")
              }
            };
            this.columns[this.selectedColumn.index] = new _syncfusion_ej2_angular_treegrid__WEBPACK_IMPORTED_MODULE_2__["Column"](_newCol);

            if (!!colVal) {
              this.data.forEach(function (x) {
                if (x.hasOwnProperty(_this5.selectedColumn.field)) {
                  x[_this5.selectedColumn.field] = colVal;
                }
              });
            }
          }

          this.cancelCol();
          this.addColumnForm.reset();
        }
      }, {
        key: "cancelCol",
        value: function cancelCol() {
          this.ejDialog.hide();
          this.refreshTreeGrid();
        }
      }, {
        key: "deleteColumn",
        value: function deleteColumn() {
          var _this6 = this;

          var index = this.treeGridObj.columns.findIndex(function (x) {
            return x.field == _this6.selectedColumn.field;
          });
          this.deleteMode = 'Column';
          this.onOpenDialog(index);
        }
      }, {
        key: "onOpenDialog",
        value: function onOpenDialog(index) {
          this.hideContextMenus();
          var title = 'Delete Column';
          var content = 'Are you sure you want to delete this column?';

          if (this.deleteMode == 'Row') {
            title = 'Delete Row';
            content = 'Are you sure you want to delete this row?';
          }

          this.DialogObj = _syncfusion_ej2_popups__WEBPACK_IMPORTED_MODULE_3__["DialogUtility"].confirm({
            title: title,
            content: content,
            isModal: true,
            okButton: {
              text: 'OK',
              click: this.okClick.bind(this, index)
            },
            cancelButton: {
              text: 'Cancel',
              click: this.cancelClick.bind(this)
            },
            animationSettings: {
              effect: 'Zoom'
            },
            position: {
              X: 'center',
              Y: 'center'
            }
          });
        }
      }, {
        key: "okClick",
        value: function okClick(index) {
          if (this.deleteMode == 'Column') {
            if (index > -1) {
              this.treeGridObj.columns.splice(index, 1);
              this.treeGridObj.refreshColumns();
            }
          }

          if (this.deleteMode == 'Row') {
            this.data.splice(this.selectedRowIndex, 1);
            this.treeGridObj.refresh();
          }

          this.refreshTreeGrid();
          this.cancelClick();
        }
      }, {
        key: "cancelClick",
        value: function cancelClick() {
          this.DialogObj.close();
        }
      }, {
        key: "openChooseColDialog",
        value: function openChooseColDialog() {
          this.hideContextMenus();
          this.chooseColumns = this.columns;
          this.chooseColDialog.show();
        }
      }, {
        key: "chooseCol",
        value: function chooseCol() {
          var _this7 = this;

          this.hideContextMenus();
          this.chooseColumns.forEach(function (col, index) {
            _this7.columns[index].visible = col.visible;
          });
          this.treeGridObj.refreshColumns();
          this.cancelChooseCol();
        }
      }, {
        key: "changeChooseCol",
        value: function changeChooseCol(event, column) {
          this.chooseColumns.forEach(function (col) {
            if (col.field == column.field) {
              col.visible = event.target.checked;
            }
          });
        }
      }, {
        key: "cancelChooseCol",
        value: function cancelChooseCol() {
          this.chooseColumns = [];
          this.chooseColDialog.hide();
          this.refreshTreeGrid();
        }
      }, {
        key: "changeRowSelectionOption",
        value: function changeRowSelectionOption() {
          this.display = false;
          this.hideContextMenus();
          this.selectionOptions.type = this.selectionOptions.type == 'Multiple' ? 'Single' : 'Multiple';
          this.hardRefreshTreeGrid();
        }
      }, {
        key: "addNextRow",
        value: function addNextRow(args) {
          console.log('🚀 ~ addNext ~ args', args);
        }
      }, {
        key: "copyRow",
        value: function copyRow(args) {
          var _this8 = this;

          this.selectedMode = 'Copy';
          var selectedRows = this.treeGridObj.getSelectedRecords();
          var selectedRowsIds = selectedRows.map(function (row) {
            return row.id;
          });
          this.selectedRows = selectedRowsIds.map(function (row) {
            var index = _this8.data.map(function (e) {
              return e.id;
            }).indexOf(row);

            var newRow = Object.assign({}, _this8.data[index]);
            newRow.id = _this8.userService.getUniqueId(4);
            return newRow;
          });
        }
      }, {
        key: "cutRow",
        value: function cutRow(args) {
          var _this9 = this;

          this.selectedMode = 'Cut';
          var selectedRows = this.treeGridObj.getSelectedRecords();
          var selectedRowsIds = selectedRows.map(function (row) {
            return row.id;
          });
          this.selectedRows = selectedRowsIds.map(function (row) {
            var index = _this9.data.map(function (e) {
              return e.id;
            }).indexOf(row);

            var newRow = Object.assign({}, _this9.data[index]);
            return newRow;
          });
        }
      }, {
        key: "paste",
        value: function paste(args) {
          switch (this.pasteMode) {
            case 'Child':
              this.pasteChild();
              break;

            case 'Next':
              this.pasteNext();
              break;

            default:
              return;
          }
        }
      }, {
        key: "pasteChild",
        value: function pasteChild() {
          var _this$data$this$selec,
              _this10 = this;

          if (this.selectedRows.length == 0) {
            return;
          }

          this.hideContextMenus();

          if (!this.data[this.selectedRowIndex].subUsers) {
            this.data[this.selectedRowIndex].subUsers = [];
          }

          (_this$data$this$selec = this.data[this.selectedRowIndex].subUsers).push.apply(_this$data$this$selec, _toConsumableArray(this.selectedRows));

          if (this.selectedMode == 'Cut') {
            this.selectedRows.forEach(function (row) {
              _this10.data = _this10.data.filter(function (item) {
                return item.id != row.id;
              });
            });
          }

          this.selectedRows = [];
          this.refreshTreeGrid();
        }
      }, {
        key: "pasteNext",
        value: function pasteNext() {
          var _this11 = this,
              _this$data;

          if (this.selectedRows.length == 0) {
            return;
          }

          this.hideContextMenus();
          var selectedRowsIndexes = [];

          if (this.selectedMode == 'Cut') {
            this.selectedRows.forEach(function (row) {
              var index = _this11.data.findIndex(function (x) {
                return x.id == row.id;
              });

              selectedRowsIndexes.push(index);
            });
            selectedRowsIndexes.forEach(function (index) {
              if (index < _this11.selectedRowIndex) {
                _this11.selectedRowIndex--;
              }
            });
            this.selectedRows.forEach(function (row, index) {
              _this11.data = _this11.data.filter(function (item) {
                return item.id != row.id;
              });
            });
          }

          (_this$data = this.data).splice.apply(_this$data, [this.selectedRowIndex + 1, 0].concat(_toConsumableArray(this.selectedRows)));

          this.selectedRows = [];
          this.refreshTreeGrid();
        }
      }, {
        key: "deleteRow",
        value: function deleteRow(args) {
          this.deleteMode = 'Row';
          this.onOpenDialog(null);
        }
      }, {
        key: "actionHandler",
        value: function actionHandler(args) {
          var _this12 = this;

          if (args.name === 'actionComplete' && args.requestType === 'sorting') {
            this.display = false;
            this.hideContextMenus();
            var sortedColumns = this.treeGridObj.sortSettings.columns;
            this.sortSettings.columns = [];
            sortedColumns.forEach(function (col) {
              _this12.sortSettings.columns.push({
                field: col.field,
                direction: col.direction
              });
            });
            this.hardRefreshTreeGrid();
          }
        }
      }, {
        key: "hideContextMenus",
        value: function hideContextMenus() {
          this.rowContextMenuDisplay = false;
          this.colContextMenuDisplay = false;
        }
      }, {
        key: "refreshTreeGrid",
        value: function refreshTreeGrid() {
          var _this13 = this;

          this.treeGridObj.refreshColumns();
          this.treeGridObj.refresh();
          setTimeout(function () {
            _this13.rowContextMenuDisplay = true;
            _this13.colContextMenuDisplay = true;
          }, 200);
        }
      }, {
        key: "hardRefreshTreeGrid",
        value: function hardRefreshTreeGrid() {
          var _this14 = this;

          setTimeout(function () {
            _this14.display = true;
          }, 100);
          setTimeout(function () {
            _this14.rowContextMenuDisplay = true;
            _this14.colContextMenuDisplay = true;
          }, 200);
        }
      }]);

      return AppComponent;
    }();

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_user_service__WEBPACK_IMPORTED_MODULE_7__["UserService"]));
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      viewQuery: function AppComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, true, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c2, true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c3, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.treeGridObj = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.container = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.ejDialog = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.chooseColDialog = _t.first);
        }
      },
      decls: 14,
      vars: 6,
      consts: [[1, "header", "text-center"], ["height", "100%", "childMapping", "subUsers", 3, "dataSource", "treeColumnIndex", "columns", "selectionSettings", "allowResizing", "allowFiltering", "frozenColumns", "allowSorting", "sortSettings", "enableInfiniteScrolling", "actionComplete", 4, "ngIf"], ["id", "colContextmenu", 3, "target", "items", "beforeItemRender", "beforeClose", "select", "beforeOpen", 4, "ngIf"], ["id", "rowContextmenu", 3, "target", "items", "beforeItemRender", "beforeClose", "select", "beforeOpen", 4, "ngIf"], ["id", "dialog", 3, "header", "visible"], ["ejDialog", ""], ["content", ""], ["id", "dialog2", "header", "Choose Column", 3, "visible"], ["chooseColDialog", ""], ["height", "100%", "childMapping", "subUsers", 3, "dataSource", "treeColumnIndex", "columns", "selectionSettings", "allowResizing", "allowFiltering", "frozenColumns", "allowSorting", "sortSettings", "enableInfiniteScrolling", "actionComplete"], ["treegrid", ""], ["id", "colContextmenu", 3, "target", "items", "beforeItemRender", "beforeClose", "select", "beforeOpen"], ["colContextmenu", ""], ["id", "rowContextmenu", 3, "target", "items", "beforeItemRender", "beforeClose", "select", "beforeOpen"], ["rowContextmenu", ""], [3, "formGroup", "ngSubmit"], ["type", "hidden", "formControlName", "isColAdd"], [1, "e-float-input", "e-control-wrapper"], ["formControlName", "colName", "type", "text"], [1, "e-float-line"], ["for", "ColName", 1, "e-float-text", "e-label-top"], ["class", "text-danger", "class", "text-danger", 4, "ngIf"], ["formControlName", "colType", "placeholder", "Select Column Type", "floatLabelType", "Auto", 3, "dataSource", "fields"], ["class", "mt-10", 4, "ngIf"], [1, "mt-10"], [1, "custom-card", "mt-15"], [1, "pb-1", "h6", "border-bottom"], [1, "pl-2"], [1, "form-row"], [1, "col-lg-4", "col-md-6", "col-sm-12", "e-float-input", "e-control-wrapper"], ["type", "number", "formControlName", "colMinWidth"], ["for", "ColMinWidth", 1, "e-float-text", "e-label-top"], ["type", "number", "formControlName", "colFontSize"], ["for", "ColFontSize", 1, "e-float-text", "e-label-top"], [1, "col-lg-4", "col-md-6", "col-sm-12"], ["formControlName", "colAlignment", "placeholder", "Select Alignment", "floatLabelType", "Auto", "showClearButton", "true", 3, "dataSource"], [1, "col-lg-4", "col-md-6", "col-sm-12", "mt-3"], ["label", "Text Wrap"], ["type", "color", "formControlName", "colFontColor"], ["for", "ColFontColor", 1, "ml-1"], ["type", "color", "formControlName", "colBgColor"], [1, "mt-15"], ["type", "submit", "ejs-button", "", "cssClass", "e-info", 3, "disabled"], ["type", "button", "ejs-button", "", "cssClass", "e-danger", 1, "ml-2", 3, "click"], [1, "text-danger"], ["formControlName", "colValue"], ["for", "ColValue", 1, "e-float-text", "e-label-top"], ["formControlName", "colValue", "name", "datepicker", "placeholder", "Select Date", "floatLabelType", "Auto"], ["ejDatePicker", ""], ["label", "True", "name", "bool", "type", "checkbox"], ["label", "False", "type", "checkbox", "name", "bool"], ["formControlName", "colValue", "placeholder", "Select Default Value", "floatLabelType", "Auto", "showClearButton", "true", 3, "dataSource"], [3, "ngSubmit"], [1, "row"], ["class", "form-group col-md-3", 4, "ngFor", "ngForOf"], [1, "margin-top"], ["type", "submit", "ejs-button", "", "cssClass", "e-info"], ["type", "button", "ejs-button", "", "cssClass", "e-danger", 1, "margin-left", 3, "click"], [1, "form-group", "col-md-3"], ["type", "checkbox", 3, "id", "checked", "change"], [1, "e-float-text", "e-label-top", 3, "for"]],
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Syncfusion EJ2 Angular TreeGrid");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, AppComponent_ejs_treegrid_3_Template, 2, 10, "ejs-treegrid", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, AppComponent_ejs_contextmenu_4_Template, 2, 2, "ejs-contextmenu", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, AppComponent_ejs_contextmenu_5_Template, 2, 2, "ejs-contextmenu", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ejs-dialog", 4, 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, AppComponent_ng_template_8_Template, 51, 11, "ng-template", null, 6, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "ejs-dialog", 7, 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, AppComponent_ng_template_12_Template, 8, 1, "ng-template", null, 6, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.display);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.display && ctx.colContextMenuDisplay);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.rowContextMenuDisplay && ctx.display);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("header", ctx.addUpdateLabel)("visible", false);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("visible", false);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _syncfusion_ej2_angular_popups__WEBPACK_IMPORTED_MODULE_9__["DialogComponent"], _syncfusion_ej2_angular_treegrid__WEBPACK_IMPORTED_MODULE_2__["TreeGridComponent"], _syncfusion_ej2_angular_navigations__WEBPACK_IMPORTED_MODULE_10__["ContextMenuComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _syncfusion_ej2_angular_dropdowns__WEBPACK_IMPORTED_MODULE_11__["DropDownListComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NumberValueAccessor"], _syncfusion_ej2_angular_buttons__WEBPACK_IMPORTED_MODULE_12__["CheckBoxComponent"], _syncfusion_ej2_angular_buttons__WEBPACK_IMPORTED_MODULE_12__["ButtonComponent"], _syncfusion_ej2_angular_calendars__WEBPACK_IMPORTED_MODULE_13__["DatePickerComponent"], _syncfusion_ej2_angular_buttons__WEBPACK_IMPORTED_MODULE_12__["RadioButtonComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgForm"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"]],
      styles: [".e-mastertext[_ngcontent-%COMP%] {\r\n    font-size: 15px;\r\n    font-family: Roboto;\r\n    opacity: 0.87;\r\n    padding: 1em;\r\n}\r\n\r\n\r\n\r\n.e-toolbar-item.e-ghidden[_ngcontent-%COMP%]   .e-btn[_ngcontent-%COMP%] {\r\n    background: rgba(0, 0, 0, 0.12);\r\n    border-color: rgba(0, 0, 0, 0.12);\r\n    color: #212121;\r\n}\r\n\r\n.text-danger[_ngcontent-%COMP%] {\r\n    color: red;\r\n}\r\n\r\n.mt-10[_ngcontent-%COMP%] {\r\n    margin-top: 10px;\r\n}\r\n\r\n.mt-15[_ngcontent-%COMP%] {\r\n    margin-top: 15px;\r\n}\r\n\r\nejs-dialog[_ngcontent-%COMP%] {\r\n    position: absolute !important;\r\n    top: 50% !important;\r\n    left: 50% !important;\r\n    transform: translate(-50%, -50%) !important;\r\n    width: 35% !important;\r\n}\r\n\r\nheader[_ngcontent-%COMP%] {\r\n    background: #eee;\r\n    padding: 0.5em;\r\n    border-bottom: 1px solid #e0e0e0;\r\n    text-align: center;\r\n    margin: 8px;\r\n}\r\n\r\n.custom-card[_ngcontent-%COMP%] {\r\n    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\r\n    transition: 0.3s;\r\n    padding: 15px;\r\n}\r\n\r\n.custom-card[_ngcontent-%COMP%]:hover {\r\n    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);\r\n}\r\n\r\n.col-6[_ngcontent-%COMP%] {\r\n    flex: 0 0 48%;\r\n    max-width: 48%;\r\n}\r\n\r\n.col-4[_ngcontent-%COMP%] {\r\n    flex: 0 0 32%;\r\n    max-width: 32%;\r\n}\r\n\r\n.custom-row[_ngcontent-%COMP%] {\r\n    display: flex;\r\n}\r\n\r\n.flex-center[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n\r\n@media only screen and (max-width: 600px) {\r\n    ejs-dialog[_ngcontent-%COMP%] {\r\n        width: 100% !important;\r\n    }\r\n\r\n    .col-4[_ngcontent-%COMP%] {\r\n        flex: 0 0 48%;\r\n        max-width: 48%;\r\n    }\r\n}\r\n\r\n@media (min-width: 601px) and (max-width: 900px) {\r\n    ejs-dialog[_ngcontent-%COMP%] {\r\n        width: 75% !important;\r\n    }\r\n}\r\n\r\n@media (min-width: 901px) and (max-width: 1200px) {\r\n    ejs-dialog[_ngcontent-%COMP%] {\r\n        width: 60% !important;\r\n    }\r\n}\r\n\r\n@media (min-width: 1201px) and (max-width: 1500px) {\r\n    ejs-dialog[_ngcontent-%COMP%] {\r\n        width: 50% !important;\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxlQUFlO0lBQ2YsbUJBQW1CO0lBQ25CLGFBQWE7SUFDYixZQUFZO0FBQ2hCOztBQUVBLHFCQUFxQjs7QUFDckI7SUFDSSwrQkFBK0I7SUFDL0IsaUNBQWlDO0lBQ2pDLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSw2QkFBNkI7SUFDN0IsbUJBQW1CO0lBQ25CLG9CQUFvQjtJQUNwQiwyQ0FBMkM7SUFDM0MscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGNBQWM7SUFDZCxnQ0FBZ0M7SUFDaEMsa0JBQWtCO0lBQ2xCLFdBQVc7QUFDZjs7QUFFQTtJQUNJLDBDQUEwQztJQUMxQyxnQkFBZ0I7SUFDaEIsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLDJDQUEyQztBQUMvQzs7QUFFQTtJQUNJLGFBQWE7SUFDYixjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSTtRQUNJLHNCQUFzQjtJQUMxQjs7SUFFQTtRQUNJLGFBQWE7UUFDYixjQUFjO0lBQ2xCO0FBQ0o7O0FBRUE7SUFDSTtRQUNJLHFCQUFxQjtJQUN6QjtBQUNKOztBQUVBO0lBQ0k7UUFDSSxxQkFBcUI7SUFDekI7QUFDSjs7QUFFQTtJQUNJO1FBQ0kscUJBQXFCO0lBQ3pCO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5lLW1hc3RlcnRleHQge1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgZm9udC1mYW1pbHk6IFJvYm90bztcclxuICAgIG9wYWNpdHk6IDAuODc7XHJcbiAgICBwYWRkaW5nOiAxZW07XHJcbn1cclxuXHJcbi8qIGN1c3RvbSBjb2RlIHN0YXJ0Ki9cclxuLmUtdG9vbGJhci1pdGVtLmUtZ2hpZGRlbiAuZS1idG4ge1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjEyKTtcclxuICAgIGJvcmRlci1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjEyKTtcclxuICAgIGNvbG9yOiAjMjEyMTIxO1xyXG59XHJcblxyXG4udGV4dC1kYW5nZXIge1xyXG4gICAgY29sb3I6IHJlZDtcclxufVxyXG5cclxuLm10LTEwIHtcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbn1cclxuXHJcbi5tdC0xNSB7XHJcbiAgICBtYXJnaW4tdG9wOiAxNXB4O1xyXG59XHJcblxyXG5lanMtZGlhbG9nIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZSAhaW1wb3J0YW50O1xyXG4gICAgdG9wOiA1MCUgIWltcG9ydGFudDtcclxuICAgIGxlZnQ6IDUwJSAhaW1wb3J0YW50O1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSkgIWltcG9ydGFudDtcclxuICAgIHdpZHRoOiAzNSUgIWltcG9ydGFudDtcclxufVxyXG5cclxuaGVhZGVyIHtcclxuICAgIGJhY2tncm91bmQ6ICNlZWU7XHJcbiAgICBwYWRkaW5nOiAwLjVlbTtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZTBlMGUwO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luOiA4cHg7XHJcbn1cclxuXHJcbi5jdXN0b20tY2FyZCB7XHJcbiAgICBib3gtc2hhZG93OiAwIDRweCA4cHggMCByZ2JhKDAsIDAsIDAsIDAuMik7XHJcbiAgICB0cmFuc2l0aW9uOiAwLjNzO1xyXG4gICAgcGFkZGluZzogMTVweDtcclxufVxyXG5cclxuLmN1c3RvbS1jYXJkOmhvdmVyIHtcclxuICAgIGJveC1zaGFkb3c6IDAgOHB4IDE2cHggMCByZ2JhKDAsIDAsIDAsIDAuMik7XHJcbn1cclxuXHJcbi5jb2wtNiB7XHJcbiAgICBmbGV4OiAwIDAgNDglO1xyXG4gICAgbWF4LXdpZHRoOiA0OCU7XHJcbn1cclxuXHJcbi5jb2wtNCB7XHJcbiAgICBmbGV4OiAwIDAgMzIlO1xyXG4gICAgbWF4LXdpZHRoOiAzMiU7XHJcbn1cclxuXHJcbi5jdXN0b20tcm93IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbn1cclxuXHJcbi5mbGV4LWNlbnRlciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XHJcbiAgICBlanMtZGlhbG9nIHtcclxuICAgICAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG5cclxuICAgIC5jb2wtNCB7XHJcbiAgICAgICAgZmxleDogMCAwIDQ4JTtcclxuICAgICAgICBtYXgtd2lkdGg6IDQ4JTtcclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIChtaW4td2lkdGg6IDYwMXB4KSBhbmQgKG1heC13aWR0aDogOTAwcHgpIHtcclxuICAgIGVqcy1kaWFsb2cge1xyXG4gICAgICAgIHdpZHRoOiA3NSUgIWltcG9ydGFudDtcclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIChtaW4td2lkdGg6IDkwMXB4KSBhbmQgKG1heC13aWR0aDogMTIwMHB4KSB7XHJcbiAgICBlanMtZGlhbG9nIHtcclxuICAgICAgICB3aWR0aDogNjAlICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWluLXdpZHRoOiAxMjAxcHgpIGFuZCAobWF4LXdpZHRoOiAxNTAwcHgpIHtcclxuICAgIGVqcy1kaWFsb2cge1xyXG4gICAgICAgIHdpZHRoOiA1MCUgIWltcG9ydGFudDtcclxuICAgIH1cclxufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.css']
        }]
      }], function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
        }, {
          type: _services_user_service__WEBPACK_IMPORTED_MODULE_7__["UserService"]
        }];
      }, {
        treeGridObj: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['treegrid']
        }],
        container: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['container', {
            read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
          }]
        }],
        ejDialog: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['ejDialog']
        }],
        chooseColDialog: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['chooseColDialog']
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/app.constant.ts":
  /*!*********************************!*\
    !*** ./src/app/app.constant.ts ***!
    \*********************************/

  /*! exports provided: AppConst */

  /***/
  function srcAppAppConstantTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppConst", function () {
      return AppConst;
    });

    var AppConst = /*#__PURE__*/_createClass(function AppConst() {
      _classCallCheck(this, AppConst);
    });

    AppConst.colMenuItems = [{
      text: 'Add Column',
      id: 'addCol'
    }, {
      text: 'Edit Column',
      id: 'editCol'
    }, {
      text: 'Delete Column',
      id: 'deleteCol'
    }, {
      text: 'Choose',
      id: 'choose'
    }, {
      text: 'Freeze',
      id: 'freeze'
    }, {
      text: 'Filter',
      id: 'filter'
    }, {
      text: 'Multi Sort',
      id: 'multiSort'
    }];
    AppConst.rowMenuItems = [{
      text: 'Add Next',
      id: 'addNextRow'
    }, {
      text: 'Add Child',
      id: 'addChildRow'
    }, {
      text: 'Delete Row',
      id: 'deleteRow'
    }, {
      text: 'Edit Row',
      id: 'editRow'
    }, {
      text: 'Copy Row',
      id: 'copyRow'
    }, {
      text: 'Cut Row',
      id: 'cutRow'
    }, {
      text: 'Paste Next',
      id: 'pasteNext'
    }, {
      text: 'Paste Child',
      id: 'pasteChild'
    }, {
      text: 'Multi Select',
      id: 'multiSelect'
    }];
    AppConst.colCheckBoxMenus = ['freeze', 'filter', 'multiSort'];
    AppConst.rowCheckBoxMenus = ['multiSelect'];
    AppConst.colTypeSet = [{
      value: 'string',
      text: 'Text'
    }, {
      value: 'number',
      text: 'Num'
    }, {
      value: 'Date',
      text: 'Date'
    }, {
      value: 'boolean',
      text: 'Boolean'
    }, {
      value: 'object',
      text: 'DropDownList'
    }];
    AppConst.dropDownSet = ['Default-1', 'Default-2', 'Default-3', 'Default-4', 'Default-5'];
    AppConst.alignmentSet = ['Left', 'Center', 'Right', 'Justify'];
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _syncfusion_ej2_angular_treegrid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @syncfusion/ej2-angular-treegrid */
    "./node_modules/@syncfusion/ej2-angular-treegrid/@syncfusion/ej2-angular-treegrid.js");
    /* harmony import */


    var _syncfusion_ej2_angular_dropdowns__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @syncfusion/ej2-angular-dropdowns */
    "./node_modules/@syncfusion/ej2-angular-dropdowns/@syncfusion/ej2-angular-dropdowns.js");
    /* harmony import */


    var _syncfusion_ej2_angular_popups__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @syncfusion/ej2-angular-popups */
    "./node_modules/@syncfusion/ej2-angular-popups/@syncfusion/ej2-angular-popups.js");
    /* harmony import */


    var _syncfusion_ej2_angular_navigations__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @syncfusion/ej2-angular-navigations */
    "./node_modules/@syncfusion/ej2-angular-navigations/@syncfusion/ej2-angular-navigations.js");
    /* harmony import */


    var _syncfusion_ej2_angular_buttons__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @syncfusion/ej2-angular-buttons */
    "./node_modules/@syncfusion/ej2-angular-buttons/@syncfusion/ej2-angular-buttons.js");
    /* harmony import */


    var _services_user_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./services/user.service */
    "./src/app/services/user.service.ts");
    /* harmony import */


    var _syncfusion_ej2_angular_calendars__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @syncfusion/ej2-angular-calendars */
    "./node_modules/@syncfusion/ej2-angular-calendars/@syncfusion/ej2-angular-calendars.js");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js"); // import { HttpModule } from '@angular/http';


    var AppModule = /*#__PURE__*/_createClass(function AppModule() {
      _classCallCheck(this, AppModule);
    });

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _services_user_service__WEBPACK_IMPORTED_MODULE_11__["UserService"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [_syncfusion_ej2_angular_treegrid__WEBPACK_IMPORTED_MODULE_6__["PageService"], _syncfusion_ej2_angular_treegrid__WEBPACK_IMPORTED_MODULE_6__["SortService"], _syncfusion_ej2_angular_treegrid__WEBPACK_IMPORTED_MODULE_6__["FilterService"], _syncfusion_ej2_angular_treegrid__WEBPACK_IMPORTED_MODULE_6__["EditService"], _syncfusion_ej2_angular_treegrid__WEBPACK_IMPORTED_MODULE_6__["SortService"], _syncfusion_ej2_angular_treegrid__WEBPACK_IMPORTED_MODULE_6__["ResizeService"], _syncfusion_ej2_angular_treegrid__WEBPACK_IMPORTED_MODULE_6__["ExcelExportService"], _syncfusion_ej2_angular_treegrid__WEBPACK_IMPORTED_MODULE_6__["PdfExportService"], _syncfusion_ej2_angular_treegrid__WEBPACK_IMPORTED_MODULE_6__["ContextMenuService"], _syncfusion_ej2_angular_treegrid__WEBPACK_IMPORTED_MODULE_6__["ToolbarService"], _syncfusion_ej2_angular_treegrid__WEBPACK_IMPORTED_MODULE_6__["FreezeService"], _syncfusion_ej2_angular_treegrid__WEBPACK_IMPORTED_MODULE_6__["InfiniteScrollService"]],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"], // HttpModule,
      _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"], _syncfusion_ej2_angular_treegrid__WEBPACK_IMPORTED_MODULE_6__["TreeGridModule"], _syncfusion_ej2_angular_dropdowns__WEBPACK_IMPORTED_MODULE_7__["DropDownListAllModule"], _syncfusion_ej2_angular_popups__WEBPACK_IMPORTED_MODULE_8__["DialogModule"], _syncfusion_ej2_angular_navigations__WEBPACK_IMPORTED_MODULE_9__["ContextMenuModule"], _syncfusion_ej2_angular_buttons__WEBPACK_IMPORTED_MODULE_10__["ButtonModule"], _syncfusion_ej2_angular_calendars__WEBPACK_IMPORTED_MODULE_12__["DatePickerModule"], _syncfusion_ej2_angular_buttons__WEBPACK_IMPORTED_MODULE_10__["RadioButtonModule"], _syncfusion_ej2_angular_buttons__WEBPACK_IMPORTED_MODULE_10__["CheckBoxModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_13__["NgbModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"], // HttpModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"], _syncfusion_ej2_angular_treegrid__WEBPACK_IMPORTED_MODULE_6__["TreeGridModule"], _syncfusion_ej2_angular_dropdowns__WEBPACK_IMPORTED_MODULE_7__["DropDownListAllModule"], _syncfusion_ej2_angular_popups__WEBPACK_IMPORTED_MODULE_8__["DialogModule"], _syncfusion_ej2_angular_navigations__WEBPACK_IMPORTED_MODULE_9__["ContextMenuModule"], _syncfusion_ej2_angular_buttons__WEBPACK_IMPORTED_MODULE_10__["ButtonModule"], _syncfusion_ej2_angular_calendars__WEBPACK_IMPORTED_MODULE_12__["DatePickerModule"], _syncfusion_ej2_angular_buttons__WEBPACK_IMPORTED_MODULE_10__["RadioButtonModule"], _syncfusion_ej2_angular_buttons__WEBPACK_IMPORTED_MODULE_10__["CheckBoxModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_13__["NgbModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"], // HttpModule,
          _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"], _syncfusion_ej2_angular_treegrid__WEBPACK_IMPORTED_MODULE_6__["TreeGridModule"], _syncfusion_ej2_angular_dropdowns__WEBPACK_IMPORTED_MODULE_7__["DropDownListAllModule"], _syncfusion_ej2_angular_popups__WEBPACK_IMPORTED_MODULE_8__["DialogModule"], _syncfusion_ej2_angular_navigations__WEBPACK_IMPORTED_MODULE_9__["ContextMenuModule"], _syncfusion_ej2_angular_buttons__WEBPACK_IMPORTED_MODULE_10__["ButtonModule"], _syncfusion_ej2_angular_calendars__WEBPACK_IMPORTED_MODULE_12__["DatePickerModule"], _syncfusion_ej2_angular_buttons__WEBPACK_IMPORTED_MODULE_10__["RadioButtonModule"], _syncfusion_ej2_angular_buttons__WEBPACK_IMPORTED_MODULE_10__["CheckBoxModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_13__["NgbModule"]],
          providers: [_syncfusion_ej2_angular_treegrid__WEBPACK_IMPORTED_MODULE_6__["PageService"], _syncfusion_ej2_angular_treegrid__WEBPACK_IMPORTED_MODULE_6__["SortService"], _syncfusion_ej2_angular_treegrid__WEBPACK_IMPORTED_MODULE_6__["FilterService"], _syncfusion_ej2_angular_treegrid__WEBPACK_IMPORTED_MODULE_6__["EditService"], _syncfusion_ej2_angular_treegrid__WEBPACK_IMPORTED_MODULE_6__["SortService"], _syncfusion_ej2_angular_treegrid__WEBPACK_IMPORTED_MODULE_6__["ResizeService"], _syncfusion_ej2_angular_treegrid__WEBPACK_IMPORTED_MODULE_6__["ExcelExportService"], _syncfusion_ej2_angular_treegrid__WEBPACK_IMPORTED_MODULE_6__["PdfExportService"], _syncfusion_ej2_angular_treegrid__WEBPACK_IMPORTED_MODULE_6__["ContextMenuService"], _syncfusion_ej2_angular_treegrid__WEBPACK_IMPORTED_MODULE_6__["ToolbarService"], _syncfusion_ej2_angular_treegrid__WEBPACK_IMPORTED_MODULE_6__["FreezeService"], _syncfusion_ej2_angular_treegrid__WEBPACK_IMPORTED_MODULE_6__["InfiniteScrollService"]],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _services_user_service__WEBPACK_IMPORTED_MODULE_11__["UserService"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/user.service.ts":
  /*!******************************************!*\
    !*** ./src/app/services/user.service.ts ***!
    \******************************************/

  /*! exports provided: UserService */

  /***/
  function srcAppServicesUserServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserService", function () {
      return UserService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/environments/environment */
    "./src/environments/environment.ts");

    var UserService = /*#__PURE__*/function () {
      function UserService(http) {
        _classCallCheck(this, UserService);

        this.http = http;
        this.url = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].API_URL;
      }

      _createClass(UserService, [{
        key: "getUsers",
        value: function getUsers() {
          var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
              "Access-Control-Allow-Origin": "*",
              'Content-Type': 'application/json',
              "Access-Control-Allow-Credentials": "true"
            })
          };
          var url = "".concat(this.url, "/users");
          return this.http.get(url, httpOptions);
        }
      }, {
        key: "getUniqueId",
        value: function getUniqueId(parts) {
          var stringArr = [];

          for (var i = 0; i < parts; i++) {
            var uniqueId = ((1 + Math.random()) * 0x10000 | 0).toString(16).substring(1);
            stringArr.push(uniqueId);
          }

          return stringArr.join('-');
        }
      }]);

      return UserService;
    }();

    UserService.ɵfac = function UserService_Factory(t) {
      return new (t || UserService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));
    };

    UserService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: UserService,
      factory: UserService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
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
      API_URL: "https://treegrid-node-api.herokuapp.com"
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
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! E:\Nazim-160\Projects\Angular Demo Projects\TreeGrid\syncfusion-treegrid\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map