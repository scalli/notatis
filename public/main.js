(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/addremark/addremark.component.css":
/*!***************************************************!*\
  !*** ./src/app/addremark/addremark.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkZHJlbWFyay9hZGRyZW1hcmsuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/addremark/addremark.component.html":
/*!****************************************************!*\
  !*** ./src/app/addremark/addremark.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n\n    <div class=\"w3-tiny w3-text-grey w3-padding\">Home -> {{HTMLtext[29]}}</div>\n      \n    <div class=\"w3-row\">\n    <div *ngIf=\"showUpper\" class=\"w3-col m6 l6\">\n\n      <div class=\"w3-card-4\">\n        <div class=\"w3-orange w3-padding\">\n          <i class=\"fa fa-filter\"></i>{{HTMLtext[1]}}\n        <input class=\"w3-input\" type=\"text\" #filter (keyup)=\"onFilterChange(filter.value)\">\n        </div>\n      </div>\n\n    \n     \n    \n     <ul class=\"w3-ul w3-border w3-hoverable\" style=\"height:25rem;overflow:scroll\">\n      <li [hidden]=\"!filterApplies(student) || !student.active\" *ngFor=\"let student of selectableStudents; let i = index\">\n          <div class=\"w3-medium\">\n              <button (click)='selectStudent(i)' class=\"w3-button w3-tiny w3-round w3-green\">\n                  <i class=\"fa fa-plus-circle\" ></i>\n              </button>\n            {{student.classSchoolyears[0].schoolClass}} | {{student.lastName}} {{student.firstName}} \n          </div>\n      </li>\n    </ul>\n     \n    <div>\n    <div class=\"w3-text-orange w3-medium\"><b>{{HTMLtext[30]}} ({{selectedStudents.length}})</b></div>\n    </div>\n\n    <div class=\"w3-center\">\n        <button (click)=\"toLower()\" class=\"w3-button w3-round w3-orange\">\n            {{HTMLtext[4]}}\n        </button>\n    </div>\n  </div>\n    \n     \n      <div *ngIf=\"showLower\" class=\"w3-col m6 l6 w3-padding\">\n\n      <div class=\"w3-row w3-padding-medium\">\n      <label class=\"w3-row-item w3-text-orange w3-medium\" style=\"width:30%\"><b>{{HTMLtext[31]}}</b></label>\n      <input class=\"w3-row-item w3-input w3-border w3-round w3-light-grey w3-small\" type=\"date\" [ngModel] =\"selectedDate | date:'yyyy-MM-dd'\" (ngModelChange)=\"selectedDateChanged($event)\"> \n    </div>\n\n      <div class=\"w3-row w3-margin-top\">      \n      <label class=\"w3-row-item w3-text-orange w3-medium\" style=\"width:30%\"><b>Remark</b></label>\n      <select [(ngModel)]=\"selectedOption\" (ngModelChange)=\"selectedOptionChanged($event)\" class=\"w3-bar-item w3-small w3-select w3-border w3-round w3-light-grey\" name=\"option\">\n        <option value=\"\" disabled selected>{{HTMLtext[32]}}</option>\n        <option *ngFor=\"let remark of remarkoptions\" [ngValue]=\"remark.option\">{{remark.option}}</option>\n      </select></div>\n      \n      <div class=\"w3-block\">\n      <label class=\"w3-text-orange w3-margin-right w3-medium\"><b>{{HTMLtext[33]}}</b></label>\n      <p class=\"w3-show-inline-block w3-green w3-center w3-padding-small\" style=\"width:15%\">\n      <input [(ngModel)]=\"severity\" (ngModelChange)=\"severityChanged($event)\" class=\"w3-radio\" type=\"radio\" name=\"severity\" value=\"1\">\n      </p>\n      <p class=\"w3-show-inline-block w3-yellow  w3-center w3-padding-small\" style=\"width:15%;\">\n      <input [(ngModel)]=\"severity\" (ngModelChange)=\"severityChanged($event)\" class=\"w3-radio\" type=\"radio\" name=\"severity\" value=\"2\">\n      </p>\n        <p class=\"w3-show-inline-block w3-orange  w3-center w3-padding-small\" style=\"width:15%;\">\n      <input [(ngModel)]=\"severity\" (ngModelChange)=\"severityChanged($event)\" class=\"w3-radio\" type=\"radio\" name=\"severity\" value=\"3\">\n      </p>\n      <p class=\"w3-show-inline-block w3-red  w3-center w3-padding-small\" style=\"width:15%;\">\n      <input [(ngModel)]=\"severity\" (ngModelChange)=\"severityChanged($event)\" class=\"w3-radio\" type=\"radio\" name=\"severity\" value=\"4\">\n      </p>\n      </div>\n      \n \n       <div class=\"w3-text-orange w3-half w3-medium\"><b>{{HTMLtext[30]}} ({{selectedStudents.length}})</b>\n       </div>\n       <div class=\"w3-row\">\n        <div (click)=\"toUpper()\" class=\"w3-right w3-border w3-border-green\">\n            {{HTMLtext[34]}}\n        </div>\n      </div>\n       <ul class=\"w3-ul w3-border w3-hoverable\" style=\"max-height:14rem; overflow:scroll\">\n          <li *ngFor=\"let student of selectedStudents; let i = index\">\n              <div class=\"w3-medium\">  \n                  <button (click)='unSelectStudent(i)' class=\"w3-button w3-tiny w3-round w3-red\">\n                      <i class=\"fa fa-window-close w3-padding-small\" aria-hidden=\"true\"></i>\n                  </button>\n                {{student.classSchoolyears[0].schoolClass}} | {{student.lastName}} {{student.firstName}}\n            </div>\n          </li>\n        </ul>\n \n    \n            <div class=\"w3-row w3-margin-top\"> \n          <label class=\"w3-row-item w3-text-orange w3-medium\"><b>Extra info</b></label>\n      <input [(ngModel)]=\"extraInfo\" (ngModelChange)=\"extraInfoChanged($event)\" class=\"w3-bar-item w3-input w3-border w3-round-xxlarge\" name=\"last\" type=\"text\">\n      </div>\n\n      <p class=\"w3-center\">\n      <button [disabled]=\"notAllFilledIn()\" (click)=\"saveRemarks()\" class=\"w3-btn w3-blue\">{{HTMLtext[35]}}</button></p>\n       \n     </div>\n     </div>\n     \n    </div> "

/***/ }),

/***/ "./src/app/addremark/addremark.component.ts":
/*!**************************************************!*\
  !*** ./src/app/addremark/addremark.component.ts ***!
  \**************************************************/
/*! exports provided: AddremarkComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddremarkComponent", function() { return AddremarkComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _model_repository_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../model/repository.model */ "./src/app/model/repository.model.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _model_remarksSaveForm_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../model/remarksSaveForm.model */ "./src/app/model/remarksSaveForm.model.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");







var AddremarkComponent = /** @class */ (function () {
    function AddremarkComponent(model, formBuilder, activeRoute, router) {
        this.model = model;
        this.formBuilder = formBuilder;
        this.router = router;
    }
    AddremarkComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.selectedStudents = [];
        localStorage.setItem('filterText', "");
        this.showUpper = true;
        this.showLower = false;
        this.HTMLtext = JSON.parse(localStorage.getItem('multiLangText'));
        this.remarkoptions = JSON.parse(localStorage.getItem('remarkoptions'));
        this.selectedDate = new Date();
        this.severity = 0;
        this.selectedOption = "";
        if (localStorage.getItem('students').length > 10) {
            this.selectableStudents = JSON.parse(localStorage.getItem('students'));
        }
        else {
            this.selectableStudents = this.model.getStudents();
        }
        this.model.remarksSaved.subscribe(function (data) {
            _this.selectedStudents = [];
            _this.severity = 0;
            _this.selectedOption = "";
            if (localStorage.getItem('students').length > 0) {
                _this.selectableStudents = JSON.parse(localStorage.getItem('students'));
            }
            else {
                _this.selectableStudents = _this.model.getStudents();
            }
        });
        // if( localStorage.getItem('students').length > 10){
        //   this.allStudents = JSON.parse(localStorage.getItem('students'));
        // }
        // else{
        //   this.allStudents = this.model.getStudents();
        // }
        this.model.studentsChangeDetected.subscribe(function (message) {
            // console.log("studentschangedetected in addremark. Students updated.")
            // console.log(localStorage.getItem('students').toString());
            // this.allStudents = JSON.parse(localStorage.getItem('students'));
            _this.selectableStudents = JSON.parse(localStorage.getItem('students'));
        });
    };
    AddremarkComponent.prototype.toLower = function () {
        this.showLower = true;
        this.showUpper = false;
    };
    AddremarkComponent.prototype.toUpper = function () {
        this.showUpper = true;
        this.showLower = false;
    };
    AddremarkComponent.prototype.selectedDateChanged = function (newDate) {
        this.selectedDate = newDate;
        console.log(this.selectedDate);
    };
    AddremarkComponent.prototype.selectedOptionChanged = function (newOption) {
        this.selectedOption = newOption;
        console.log(this.selectedOption);
    };
    AddremarkComponent.prototype.extraInfoChanged = function (newExtraInfo) {
        this.extraInfo = newExtraInfo;
        console.log(newExtraInfo);
    };
    AddremarkComponent.prototype.severityChanged = function (newSeverity) {
        this.severity = newSeverity;
        console.log(this.severity);
    };
    AddremarkComponent.prototype.saveRemarks = function () {
        var remark;
        remark = new _model_remarksSaveForm_model__WEBPACK_IMPORTED_MODULE_5__["RemarksSaveForm"]();
        remark.studentId = [];
        remark.date = Object(_angular_common__WEBPACK_IMPORTED_MODULE_6__["formatDate"])(this.selectedDate, 'yyyy-MM-dd', 'en');
        remark.extraInfo = this.extraInfo;
        remark.remark = this.selectedOption;
        remark.severity = this.severity;
        for (var i = 0; i < this.selectedStudents.length; i++) {
            remark.studentId.push(this.selectedStudents[i].id);
        }
        remark.teacherId = JSON.parse(localStorage.getItem('currentUser')).id;
        console.log("Remark made. Now saving.");
        //    for(var i=0; i< 100; i++){
        this.model.saveRemarks(remark);
        //    }
    };
    AddremarkComponent.prototype.notAllFilledIn = function () {
        if (this.selectedStudents.length == 0 || this.selectedOption == "" || this.severity == 0)
            return true;
        else
            return false;
    };
    AddremarkComponent.prototype.selectStudent = function (index) {
        this.selectedStudents.push(this.selectableStudents[index]);
        this.selectableStudents.splice(index, 1);
        // console.log("selectedStudents:");
        // console.log(this.selectedStudents);
        // console.log("selectableStudents");
        // console.log(this.selectableStudents);
    };
    AddremarkComponent.prototype.unSelectStudent = function (index) {
        this.selectableStudents.push(this.selectedStudents[index]);
        this.selectableStudents.sort(this.model.sortByclass);
        this.selectedStudents.splice(index, 1);
        // console.log("selectedStudents:");
        // console.log(this.selectedStudents);
        // console.log("selectableStudents");
        // console.log(this.selectableStudents);
    };
    AddremarkComponent.prototype.onFilterChange = function (value) {
        console.log(value);
        localStorage.setItem('filterText', value);
    };
    AddremarkComponent.prototype.filterApplies = function (student) {
        // console.log('filterText');
        // console.log(localStorage.getItem('filterText'));
        var filterText = localStorage.getItem('filterText');
        if (filterText.length > 0) {
            if (student.classSchoolyears[0].schoolClass.toLowerCase().includes(filterText.toLowerCase())
                || student.firstName.toLowerCase().includes(filterText.toLowerCase())
                || student.lastName.toLowerCase().includes(filterText.toLowerCase())) {
                return true;
            }
            else {
                return false;
            }
        }
        else {
            return true;
        }
    }; //end of filterApplies
    AddremarkComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-addremark',
            template: __webpack_require__(/*! ./addremark.component.html */ "./src/app/addremark/addremark.component.html"),
            styles: [__webpack_require__(/*! ./addremark.component.css */ "./src/app/addremark/addremark.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_model_repository_model__WEBPACK_IMPORTED_MODULE_3__["Model"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], AddremarkComponent);
    return AddremarkComponent;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".fa-list {\r\n    color: orange;\r\n    padding-right: 5px;\r\n  }\r\n  .fa-list-ol {\r\n    color: orange;\r\n    padding-right: 5px;\r\n  }\r\n  .fa-plus-circle {\r\n    color: lightgreen;\r\n    padding-right: 5px;\r\n  }\r\n  .fa-wrench {\r\n    color: orange;\r\n    padding-right: 5px;\r\n  }\r\n  .fa-address-card {\r\n    color: orange;\r\n    padding-right: 5px;\r\n  }\r\n  .fa-check-square {\r\n    color: green;\r\n  }\r\n  .fa-cog {\r\n    color: orange;\r\n    padding-right: 5px;\r\n  }\r\n  .fa-times-circle {\r\n    color: red;\r\n  }\r\n  .fa-window-close {\r\n    color: red;\r\n  }\r\n  .fa-pencil-square-o {\r\n    color: orange;\r\n  }\r\n  .full-height {\r\n    height: 80%;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0lBQ2Isa0JBQWtCO0VBQ3BCO0VBQ0E7SUFDRSxhQUFhO0lBQ2Isa0JBQWtCO0VBQ3BCO0VBQ0E7SUFDRSxpQkFBaUI7SUFDakIsa0JBQWtCO0VBQ3BCO0VBQ0E7SUFDRSxhQUFhO0lBQ2Isa0JBQWtCO0VBQ3BCO0VBQ0E7SUFDRSxhQUFhO0lBQ2Isa0JBQWtCO0VBQ3BCO0VBQ0E7SUFDRSxZQUFZO0VBQ2Q7RUFDQTtJQUNFLGFBQWE7SUFDYixrQkFBa0I7RUFDcEI7RUFDQTtJQUNFLFVBQVU7RUFDWjtFQUNBO0lBQ0UsVUFBVTtFQUNaO0VBQ0E7SUFDRSxhQUFhO0VBQ2Y7RUFDQTtJQUNFLFdBQVc7RUFDYiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZhLWxpc3Qge1xyXG4gICAgY29sb3I6IG9yYW5nZTtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDVweDtcclxuICB9XHJcbiAgLmZhLWxpc3Qtb2wge1xyXG4gICAgY29sb3I6IG9yYW5nZTtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDVweDtcclxuICB9XHJcbiAgLmZhLXBsdXMtY2lyY2xlIHtcclxuICAgIGNvbG9yOiBsaWdodGdyZWVuO1xyXG4gICAgcGFkZGluZy1yaWdodDogNXB4O1xyXG4gIH1cclxuICAuZmEtd3JlbmNoIHtcclxuICAgIGNvbG9yOiBvcmFuZ2U7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiA1cHg7XHJcbiAgfVxyXG4gIC5mYS1hZGRyZXNzLWNhcmQge1xyXG4gICAgY29sb3I6IG9yYW5nZTtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDVweDtcclxuICB9XHJcbiAgLmZhLWNoZWNrLXNxdWFyZSB7XHJcbiAgICBjb2xvcjogZ3JlZW47XHJcbiAgfVxyXG4gIC5mYS1jb2cge1xyXG4gICAgY29sb3I6IG9yYW5nZTtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDVweDtcclxuICB9XHJcbiAgLmZhLXRpbWVzLWNpcmNsZSB7XHJcbiAgICBjb2xvcjogcmVkO1xyXG4gIH1cclxuICAuZmEtd2luZG93LWNsb3NlIHtcclxuICAgIGNvbG9yOiByZWQ7XHJcbiAgfVxyXG4gIC5mYS1wZW5jaWwtc3F1YXJlLW8ge1xyXG4gICAgY29sb3I6IG9yYW5nZTtcclxuICB9XHJcbiAgLmZ1bGwtaGVpZ2h0IHtcclxuICAgIGhlaWdodDogODAlO1xyXG4gIH0iXX0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The page where everything will be displayed in our app.-->\n<!-- The header -->\n<!-- -------------------------------------------- TEACHER/ADMIN MENU  --------------------------------------------------------->\n\n<div *ngIf=\"isValidPath()\">\n    <div *ngIf='isAdmin() || isTeacher()' class=\"w3-bar w3-blue-grey\">\n        <div class=\"w3-bar-item w3-hide-medium w3-text-amber w3-large\"><b>NOTATIS</b></div>\n        <a [routerLink] = \"['/overview']\" onclick=\"closeSettingsDropdown(); closeUserDropdown()\" class=\"w3-bar-item w3-button w3-hide-small w3-border-right w3-large\"><i class=\"fa fa-list\" aria-hidden=\"true\"></i>{{HTMLtext[0]}}</a>\n        <a [routerLink] = \"['/addremark']\" onclick=\"closeSettingsDropdown(); closeUserDropdown()\" (click)=\"addRemarkURL()\" class=\"w3-bar-item w3-button w3-hide-small w3-border-right  w3-large\"><i class=\"fa fa-plus-circle\" aria-hidden=\"true\"></i>{{HTMLtext[29]}}</a>\n        <a [routerLink] = \"['/ranking']\" onclick=\"closeSettingsDropdown(); closeUserDropdown()\" class=\"w3-bar-item w3-button w3-hide-small w3-border-right w3-large\"><i class=\"fa fa-list-ol\" aria-hidden=\"true\"></i>Ranking</a>\n        \n        <div class=\"w3-dropdown-click w3-hide-small w3-border-right  w3-large\">\n          <button class=\"w3-button\" onclick=\"settingsDropdown()\">\n            <i class=\"fa fa-cog\" aria-hidden=\"true\"></i>{{HTMLtext[49]}} <i class=\"fa fa-caret-down\"></i>\n            </button>\n            <div id=\"settingsDropdown\" onclick=\"closeSettingsDropdown(); closeUserDropdown()\" class=\"w3-dropdown-content w3-bar-block w3-card\">\n              <a [routerLink] = \"['/settings']\" class=\"w3-bar-item w3-button w3-hide-small w3-border w3-large\" onclick=\"settingsDropdown()\">{{HTMLtext[44]}}</a>\n              <a *ngIf='isAdmin()' [routerLink] = \"['/schoolsettings']\" class=\"w3-bar-item w3-button w3-hide-small w3-border  w3-large\" onclick=\"settingsDropdown()\">{{HTMLtext[45]}}</a>\n              </div>\n        </div>\n       \n        <!-- *ngIf=\"currentUserRole == 4\" -->\n        <div *ngIf='isAdmin()' class=\"w3-dropdown-click w3-hide-small w3-border-right  w3-large\">\n          <button class=\"w3-button\" onclick=\"userDropdown()\">\n          <i class=\"fa fa-address-card\" aria-hidden=\"true\"></i>{{HTMLtext[46]}} <i class=\"fa fa-caret-down\"></i>\n          </button>\n          <div id=\"userDropdown\" onclick=\"closeSettingsDropdown(); closeUserDropdown()\" class=\"w3-dropdown-content w3-bar-block w3-card\">\n          <a [routerLink] = \"['/teachers']\" class=\"w3-bar-item w3-button w3-hide-small w3-border w3-large\" onclick=\"userDropdown()\">{{HTMLtext[47]}}</a>\n          <a [routerLink] = \"['/students']\" class=\"w3-bar-item w3-button w3-hide-small w3-border  w3-large\" onclick=\"userDropdown()\">{{HTMLtext[48]}}</a>\n          <a [routerLink] = \"['/parents']\" class=\"w3-bar-item w3-button w3-hide-small w3-border  w3-large\" onclick=\"userDropdown()\">{{HTMLtext[165]}}</a>\n        </div>\n         </div>\n        <button [routerLink] = \"['/login']\" (click)='logout()' class=\"w3-bar-item w3-button w3-hide-small w3-border-left w3-right  w3-large\"><i class=\"fa fa-sign-out\" aria-hidden=\"true\"></i></button>\n        <a href=\"javascript:void(0)\" class=\"w3-bar-item w3-button w3-right w3-hide-large w3-hide-medium\" onclick=\"headerToggleShow()\">&#9776;</a>\n      </div>\n      \n\n      <div *ngIf='isAdmin() || isTeacher()' id=\"demo\" class=\"w3-bar-block w3-border w3-light-grey w3-hide w3-hide-large w3-hide-medium\">\n        <a [routerLink] = \"['/overview']\" onclick=\"openFilter('demo')\" class=\"w3-bar-item w3-button  w3-large\"><i class=\"fa fa-list w3-padding-small\" aria-hidden=\"true\"></i>{{HTMLtext[0]}}</a>\n        <a [routerLink] = \"['/addremark']\" onclick=\"openFilter('demo')\" (click)=\"addRemarkURL()\" [ngClass]=\"{'w3-indigo': currentURL=='/addRemark'}\" class=\"w3-bar-item w3-button  w3-large\"><i class=\"fa fa-plus-circle w3-padding-small\" aria-hidden=\"true\"></i>{{HTMLtext[29]}}</a>\n        <a [routerLink] = \"['/ranking']\" onclick=\"openFilter('demo')\" class=\"w3-bar-item w3-button  w3-large\"><i class=\"fa fa-list-ol w3-padding-small\" aria-hidden=\"true\"></i>Ranking</a>\n        <a [routerLink] = \"['/settings']\" onclick=\"openFilter('demo')\" class=\"w3-bar-item w3-button  w3-large\"><i class=\"fa fa-wrench w3-padding-small\" aria-hidden=\"true\"></i>{{HTMLtext[49]}}</a>\n        <a [routerLink] = \"['/login']\" onclick=\"openFilter('demo')\" (click)='logout()' class=\"w3-bar-item w3-button  w3-large\"><i class=\"fa fa-sign-out\" aria-hidden=\"true\"></i>Logout</a>\n\n        <!--\n        <a [routerLink] = \"['/teachers']\" class=\"w3-bar-item w3-button\"><i class=\"fa fa-address-card w3-padding-small\" aria-hidden=\"true\"></i>User management</a>\n        <a [routerLink] = \"['/students']\" class=\"w3-bar-item w3-button\"><i class=\"fa fa-sign-out w3-padding-small\" aria-hidden=\"true\"></i></a>\n        -->\n      </div>\n</div>\n<!-- -------------------------------------------- STUDENT MENU  -------------------------------------------------------------->\n\n<div *ngIf=\"isValidPath()\">\n  <div *ngIf='isStudent() || isParent()' class=\"w3-bar w3-blue-grey\">\n      <div class=\"w3-bar-item w3-hide-medium w3-text-amber w3-large\"><b>NOTATIS</b></div>\n      <a [routerLink] = \"['/studentoverview']\" onclick=\"closeSettingsDropdown()\" class=\"w3-bar-item w3-button w3-hide-small w3-border-right w3-large\"><i class=\"fa fa-list\" aria-hidden=\"true\"></i>{{HTMLtext[0]}}</a>\n      <a [routerLink] = \"['/ranking']\" onclick=\"closeSettingsDropdown()\" class=\"w3-bar-item w3-button w3-hide-small w3-border-right w3-large\"><i class=\"fa fa-list-ol\" aria-hidden=\"true\"></i>Ranking</a>\n      \n      <div class=\"w3-dropdown-click w3-hide-small w3-border-right  w3-large\">\n        <button class=\"w3-button\" onclick=\"settingsDropdown()\">\n          <i class=\"fa fa-cog\" aria-hidden=\"true\"></i>{{HTMLtext[49]}} <i class=\"fa fa-caret-down\"></i>\n          </button>\n          <div id=\"settingsDropdown\" onclick=\"closeSettingsDropdown(); closeUserDropdown()\" class=\"w3-dropdown-content w3-bar-block w3-card\">\n            <a [routerLink] = \"['/settings']\" class=\"w3-bar-item w3-button w3-hide-small w3-border w3-large\" onclick=\"settingsDropdown()\">{{HTMLtext[44]}}</a>\n            </div>\n      </div>\n     \n      <button [routerLink] = \"['/login']\" (click)='logout()' class=\"w3-bar-item w3-button w3-hide-small w3-border-left w3-right  w3-large\"><i class=\"fa fa-sign-out\" aria-hidden=\"true\"></i></button>\n      <a href=\"javascript:void(0)\" class=\"w3-bar-item w3-button w3-right w3-hide-large w3-hide-medium\" onclick=\"headerToggleShow()\">&#9776;</a>\n    </div>\n    \n\n    <div *ngIf='isStudent()' id=\"demo\" class=\"w3-bar-block w3-border w3-light-grey w3-hide w3-hide-large w3-hide-medium\">\n      <a [routerLink] = \"['/studentoverview']\" onclick=\"openFilter('demo')\" class=\"w3-bar-item w3-button  w3-large\"><i class=\"fa fa-list w3-padding-small\" aria-hidden=\"true\"></i>{{HTMLtext[0]}}</a>\n      <a [routerLink] = \"['/ranking']\" onclick=\"openFilter('demo')\" class=\"w3-bar-item w3-button  w3-large\"><i class=\"fa fa-list w3-padding-small\" aria-hidden=\"true\"></i>Ranking</a>\n      <a [routerLink] = \"['/settings']\" onclick=\"openFilter('demo')\" class=\"w3-bar-item w3-button  w3-large\"><i class=\"fa fa-wrench w3-padding-small\" aria-hidden=\"true\"></i>{{HTMLtext[49]}}</a>\n      <a [routerLink] = \"['/login']\" onclick=\"openFilter('demo')\" (click)='logout()' class=\"w3-bar-item w3-button  w3-large\"><i class=\"fa fa-sign-out\" aria-hidden=\"true\"></i>Logout</a>\n\n      <!--\n      <a [routerLink] = \"['/teachers']\" class=\"w3-bar-item w3-button\"><i class=\"fa fa-address-card w3-padding-small\" aria-hidden=\"true\"></i>User management</a>\n      <a [routerLink] = \"['/students']\" class=\"w3-bar-item w3-button\"><i class=\"fa fa-sign-out w3-padding-small\" aria-hidden=\"true\"></i></a>\n      -->\n    </div>\n</div>\n<div class=\"w3-container\">\n  <paMessages></paMessages>\n</div>\n<!-- The main section of the page-->\n<div>\n<router-outlet></router-outlet>\n</div>\n<!-- End of main section of the page-->\n\n\n"

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
/* harmony import */ var _model_repository_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./model/repository.model */ "./src/app/model/repository.model.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");





var AppComponent = /** @class */ (function () {
    function AppComponent(model, router, meta) {
        var _this = this;
        this.model = model;
        this.router = router;
        this.meta = meta;
        this.title = 'remarko';
        meta.addTag({ name: 'apple-mobile-web-app-capable', content: 'yes' });
        meta.addTag({ name: 'mobile-web-app-capable', content: 'yes' });
        this.model.studentLoggedIn.subscribe(function (message) {
            _this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
            console.log("currentUser");
            console.log(_this.currentUser);
            console.log(_this.currentUser.roles[0].id);
            _this.currentUserRole = _this.currentUser.roles[0].id;
        });
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.currentUser = localStorage.getItem('currentUser');
        this.currentURL = this.router.url;
        // console.log(this.currentURL);
        //    this.HTMLtext = JSON.parse(localStorage.getItem('multiLangText'));
        this.router.events.subscribe(function (res) {
            // console.log(this.router.url,"Current URL");
            _this.currentURL = _this.router.url;
        });
        this.HTMLtext = JSON.parse(localStorage.getItem('multiLangText'));
        this.model.HTMLTextLoaded.subscribe(function (data) {
            _this.HTMLtext = JSON.parse(localStorage.getItem('multiLangText'));
        });
        // console.log("currentUser");
        // console.log(this.currentUser);
    };
    AppComponent.prototype.isValidPath = function () {
        if (this.currentURL == '/addremark'
            || this.currentURL == '/overview'
            || this.currentURL == '/settings'
            || this.currentURL == '/teachers'
            || this.currentURL == '/students'
            || this.currentURL == '/schoolsettings'
            || this.currentURL == '/studentoverview'
            || this.currentURL == '/studentranking'
            || this.currentURL == '/ranking'
            || this.currentURL == '/parents') {
            return true;
        }
        return false;
    };
    AppComponent.prototype.isAdmin = function () {
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if ( /*this.currentUserRole &&*/this.currentUser.roles[0].id == 4) {
            return true;
        }
        else {
            return false;
        }
    };
    AppComponent.prototype.isTeacher = function () {
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if ( /*this.currentUserRole &&*/this.currentUser.roles[0].id == 3) {
            return true;
        }
        else {
            return false;
        }
    };
    AppComponent.prototype.isStudent = function () {
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if ( /*this.currentUserRole &&*/this.currentUser.roles[0].id == 1) {
            return true;
        }
        else {
            return false;
        }
    };
    AppComponent.prototype.isParent = function () {
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if ( /*this.currentUserRole &&*/this.currentUser.roles[0].id == 2) {
            return true;
        }
        else {
            return false;
        }
    };
    AppComponent.prototype.logout = function () {
        var schoolcode;
        if (localStorage.getItem('schoolcode')) {
            schoolcode = localStorage.getItem('schoolcode');
        }
        var username;
        if (localStorage.getItem('username')) {
            username = localStorage.getItem('username');
        }
        localStorage.clear();
        if (schoolcode) {
            localStorage.setItem('schoolcode', schoolcode);
        }
        if (username) {
            localStorage.setItem('username', username);
        }
    };
    AppComponent.prototype.addRemarkURL = function () {
        this.currentURL = this.router.url;
        console.log(this.currentURL);
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_model_repository_model__WEBPACK_IMPORTED_MODULE_2__["Model"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["Meta"]])
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
/* harmony import */ var angular_font_awesome__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-font-awesome */ "./node_modules/angular-font-awesome/dist/angular-font-awesome.es5.js");
/* harmony import */ var _model_model_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./model/model.module */ "./src/app/model/model.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _app_routing__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app.routing */ "./src/app/app.routing.ts");
/* harmony import */ var _addremark_addremark_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./addremark/addremark.component */ "./src/app/addremark/addremark.component.ts");
/* harmony import */ var _overview_overview_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./overview/overview.component */ "./src/app/overview/overview.component.ts");
/* harmony import */ var _teachers_teachers_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./teachers/teachers.component */ "./src/app/teachers/teachers.component.ts");
/* harmony import */ var _students_students_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./students/students.component */ "./src/app/students/students.component.ts");
/* harmony import */ var _settings_settings_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./settings/settings.component */ "./src/app/settings/settings.component.ts");
/* harmony import */ var _messages_message_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./messages/message.module */ "./src/app/messages/message.module.ts");
/* harmony import */ var _messages_message_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./messages/message.component */ "./src/app/messages/message.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _schoolsettings_schoolsettings_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./schoolsettings/schoolsettings.component */ "./src/app/schoolsettings/schoolsettings.component.ts");
/* harmony import */ var _auth_loginactivate_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./auth/loginactivate.service */ "./src/app/auth/loginactivate.service.ts");
/* harmony import */ var _forgotpassword_forgotpassword_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./forgotpassword/forgotpassword.component */ "./src/app/forgotpassword/forgotpassword.component.ts");
/* harmony import */ var _forgotpassword2_forgotpassword2_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./forgotpassword2/forgotpassword2.component */ "./src/app/forgotpassword2/forgotpassword2.component.ts");
/* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./signup/signup.component */ "./src/app/signup/signup.component.ts");
/* harmony import */ var _confirmadminfinal_confirmadminfinal_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./confirmadminfinal/confirmadminfinal.component */ "./src/app/confirmadminfinal/confirmadminfinal.component.ts");
/* harmony import */ var _studentoverview_studentoverview_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./studentoverview/studentoverview.component */ "./src/app/studentoverview/studentoverview.component.ts");
/* harmony import */ var _ranking_ranking_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./ranking/ranking.component */ "./src/app/ranking/ranking.component.ts");
/* harmony import */ var _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @swimlane/ngx-charts */ "./node_modules/@swimlane/ngx-charts/release/esm.js");
/* harmony import */ var _parents_parents_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./parents/parents.component */ "./src/app/parents/parents.component.ts");
/* harmony import */ var angular2_csv__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! angular2-csv */ "./node_modules/angular2-csv/fesm5/angular2-csv.js");




























var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"],
                _addremark_addremark_component__WEBPACK_IMPORTED_MODULE_9__["AddremarkComponent"],
                _overview_overview_component__WEBPACK_IMPORTED_MODULE_10__["OverviewComponent"],
                _teachers_teachers_component__WEBPACK_IMPORTED_MODULE_11__["TeachersComponent"],
                _students_students_component__WEBPACK_IMPORTED_MODULE_12__["StudentsComponent"],
                _settings_settings_component__WEBPACK_IMPORTED_MODULE_13__["SettingsComponent"],
                _schoolsettings_schoolsettings_component__WEBPACK_IMPORTED_MODULE_17__["SchoolSettingsComponent"],
                _forgotpassword_forgotpassword_component__WEBPACK_IMPORTED_MODULE_19__["ForgotpasswordComponent"],
                _forgotpassword2_forgotpassword2_component__WEBPACK_IMPORTED_MODULE_20__["Forgotpassword2Component"],
                _signup_signup_component__WEBPACK_IMPORTED_MODULE_21__["SignupComponent"],
                _confirmadminfinal_confirmadminfinal_component__WEBPACK_IMPORTED_MODULE_22__["ConfirmadminfinalComponent"],
                _studentoverview_studentoverview_component__WEBPACK_IMPORTED_MODULE_23__["StudentoverviewComponent"],
                _ranking_ranking_component__WEBPACK_IMPORTED_MODULE_24__["RankingComponent"],
                _parents_parents_component__WEBPACK_IMPORTED_MODULE_26__["ParentsComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                angular_font_awesome__WEBPACK_IMPORTED_MODULE_3__["AngularFontAwesomeModule"],
                _model_model_module__WEBPACK_IMPORTED_MODULE_4__["ModelModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
                _messages_message_module__WEBPACK_IMPORTED_MODULE_14__["MessageModule"],
                _app_routing__WEBPACK_IMPORTED_MODULE_8__["routing"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_16__["BrowserAnimationsModule"],
                _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_25__["NgxChartsModule"],
                angular2_csv__WEBPACK_IMPORTED_MODULE_27__["Angular2CsvModule"]
            ],
            providers: [_auth_loginactivate_service__WEBPACK_IMPORTED_MODULE_18__["LoginActivate"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"], _messages_message_component__WEBPACK_IMPORTED_MODULE_15__["MessageComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routing.ts":
/*!********************************!*\
  !*** ./src/app/app.routing.ts ***!
  \********************************/
/*! exports provided: routing */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routing", function() { return routing; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _addremark_addremark_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./addremark/addremark.component */ "./src/app/addremark/addremark.component.ts");
/* harmony import */ var _overview_overview_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./overview/overview.component */ "./src/app/overview/overview.component.ts");
/* harmony import */ var _settings_settings_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./settings/settings.component */ "./src/app/settings/settings.component.ts");
/* harmony import */ var _schoolsettings_schoolsettings_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./schoolsettings/schoolsettings.component */ "./src/app/schoolsettings/schoolsettings.component.ts");
/* harmony import */ var _teachers_teachers_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./teachers/teachers.component */ "./src/app/teachers/teachers.component.ts");
/* harmony import */ var _students_students_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./students/students.component */ "./src/app/students/students.component.ts");
/* harmony import */ var _forgotpassword_forgotpassword_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./forgotpassword/forgotpassword.component */ "./src/app/forgotpassword/forgotpassword.component.ts");
/* harmony import */ var _forgotpassword2_forgotpassword2_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./forgotpassword2/forgotpassword2.component */ "./src/app/forgotpassword2/forgotpassword2.component.ts");
/* harmony import */ var _auth_loginactivate_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./auth/loginactivate.service */ "./src/app/auth/loginactivate.service.ts");
/* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./signup/signup.component */ "./src/app/signup/signup.component.ts");
/* harmony import */ var _confirmadminfinal_confirmadminfinal_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./confirmadminfinal/confirmadminfinal.component */ "./src/app/confirmadminfinal/confirmadminfinal.component.ts");
/* harmony import */ var _studentoverview_studentoverview_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./studentoverview/studentoverview.component */ "./src/app/studentoverview/studentoverview.component.ts");
/* harmony import */ var _ranking_ranking_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./ranking/ranking.component */ "./src/app/ranking/ranking.component.ts");
/* harmony import */ var _parents_parents_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./parents/parents.component */ "./src/app/parents/parents.component.ts");
















var routes = [
    { path: "login", component: _login_login_component__WEBPACK_IMPORTED_MODULE_1__["LoginComponent"] },
    { path: "addremark", component: _addremark_addremark_component__WEBPACK_IMPORTED_MODULE_2__["AddremarkComponent"], canActivate: [_auth_loginactivate_service__WEBPACK_IMPORTED_MODULE_10__["LoginActivate"]] },
    { path: "overview", component: _overview_overview_component__WEBPACK_IMPORTED_MODULE_3__["OverviewComponent"], canActivate: [_auth_loginactivate_service__WEBPACK_IMPORTED_MODULE_10__["LoginActivate"]] },
    { path: "ranking", component: _ranking_ranking_component__WEBPACK_IMPORTED_MODULE_14__["RankingComponent"], canActivate: [_auth_loginactivate_service__WEBPACK_IMPORTED_MODULE_10__["LoginActivate"]] },
    { path: "settings", component: _settings_settings_component__WEBPACK_IMPORTED_MODULE_4__["SettingsComponent"], canActivate: [_auth_loginactivate_service__WEBPACK_IMPORTED_MODULE_10__["LoginActivate"]] },
    { path: "teachers", component: _teachers_teachers_component__WEBPACK_IMPORTED_MODULE_6__["TeachersComponent"], canActivate: [_auth_loginactivate_service__WEBPACK_IMPORTED_MODULE_10__["LoginActivate"]] },
    { path: "students", component: _students_students_component__WEBPACK_IMPORTED_MODULE_7__["StudentsComponent"], canActivate: [_auth_loginactivate_service__WEBPACK_IMPORTED_MODULE_10__["LoginActivate"]] },
    { path: "parents", component: _parents_parents_component__WEBPACK_IMPORTED_MODULE_15__["ParentsComponent"], canActivate: [_auth_loginactivate_service__WEBPACK_IMPORTED_MODULE_10__["LoginActivate"]] },
    { path: "schoolsettings", component: _schoolsettings_schoolsettings_component__WEBPACK_IMPORTED_MODULE_5__["SchoolSettingsComponent"], canActivate: [_auth_loginactivate_service__WEBPACK_IMPORTED_MODULE_10__["LoginActivate"]] },
    { path: "forgotpassword", component: _forgotpassword_forgotpassword_component__WEBPACK_IMPORTED_MODULE_8__["ForgotpasswordComponent"] },
    { path: "forgotpassword2/:code/:schoolcode", component: _forgotpassword2_forgotpassword2_component__WEBPACK_IMPORTED_MODULE_9__["Forgotpassword2Component"] },
    { path: "signup", component: _signup_signup_component__WEBPACK_IMPORTED_MODULE_11__["SignupComponent"] },
    { path: "confirmadminfinal", component: _confirmadminfinal_confirmadminfinal_component__WEBPACK_IMPORTED_MODULE_12__["ConfirmadminfinalComponent"] },
    { path: "studentoverview", component: _studentoverview_studentoverview_component__WEBPACK_IMPORTED_MODULE_13__["StudentoverviewComponent"] },
    { path: "**", component: _login_login_component__WEBPACK_IMPORTED_MODULE_1__["LoginComponent"] }
];
var routing = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes, { onSameUrlNavigation: 'reload' });


/***/ }),

/***/ "./src/app/auth/loginactivate.service.ts":
/*!***********************************************!*\
  !*** ./src/app/auth/loginactivate.service.ts ***!
  \***********************************************/
/*! exports provided: LoginActivate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginActivate", function() { return LoginActivate; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var LoginActivate = /** @class */ (function () {
    function LoginActivate(router) {
        this.router = router;
    }
    /**
     * Check if the user is logged in before calling http
     *
     * @param route
     * @param state
     * @returns {boolean}
     */
    LoginActivate.prototype.canActivate = function (route, state) {
        if (localStorage.getItem('accessToken')) {
            return true;
        }
        this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
        return;
    };
    LoginActivate = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], LoginActivate);
    return LoginActivate;
}());



/***/ }),

/***/ "./src/app/confirmadminfinal/confirmadminfinal.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/confirmadminfinal/confirmadminfinal.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbmZpcm1hZG1pbmZpbmFsL2NvbmZpcm1hZG1pbmZpbmFsLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/confirmadminfinal/confirmadminfinal.component.html":
/*!********************************************************************!*\
  !*** ./src/app/confirmadminfinal/confirmadminfinal.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"w3-row\">\n  <h1 class=\"w3-text-orange w3-center w3-border-bottom w3-padding\"><b>NOTATIS</b></h1>\n</div>\n<div class=\"w3-row w3-center\">\n<p [innerHTML]=\"adminConfirmed\">\n</p>\n</div>\n"

/***/ }),

/***/ "./src/app/confirmadminfinal/confirmadminfinal.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/confirmadminfinal/confirmadminfinal.component.ts ***!
  \******************************************************************/
/*! exports provided: ConfirmadminfinalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmadminfinalComponent", function() { return ConfirmadminfinalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _model_repository_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../model/repository.model */ "./src/app/model/repository.model.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var ConfirmadminfinalComponent = /** @class */ (function () {
    function ConfirmadminfinalComponent(model, activeRoute, router) {
        this.model = model;
        this.activeRoute = activeRoute;
        this.router = router;
    }
    ConfirmadminfinalComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.adminConfirmed = "Waiting for confirmation...";
        this.activeRoute.queryParamMap.subscribe(function (queryParams) {
            _this.schoolcodeInternal = queryParams.get("schoolcodeInternal");
            _this.confirmationuid = queryParams.get("confirmationuid");
            console.log(_this.schoolcodeInternal);
            console.log(_this.confirmationuid);
            _this.model.confirmadmin2(_this.schoolcodeInternal, _this.confirmationuid);
        });
        this.model.adminConfirmed.subscribe(function (myresponse) {
            console.log(myresponse.text);
            // this.adminConfirmed = myresponse.text;
            if (myresponse.text == "Confirmed") {
                _this.adminConfirmed = "Congratulations, confirmation succeeded! You can now start using Notatis for your school!";
            }
            else {
                _this.adminConfirmed = "Oops! It seems like something went wrong.\n Please contact our helpdesk via info@notatis.com";
            }
        });
    };
    ConfirmadminfinalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-confirmadminfinal',
            template: __webpack_require__(/*! ./confirmadminfinal.component.html */ "./src/app/confirmadminfinal/confirmadminfinal.component.html"),
            styles: [__webpack_require__(/*! ./confirmadminfinal.component.css */ "./src/app/confirmadminfinal/confirmadminfinal.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_model_repository_model__WEBPACK_IMPORTED_MODULE_2__["Model"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], ConfirmadminfinalComponent);
    return ConfirmadminfinalComponent;
}());



/***/ }),

/***/ "./src/app/csvutils/file.util.ts":
/*!***************************************!*\
  !*** ./src/app/csvutils/file.util.ts ***!
  \***************************************/
/*! exports provided: FileUtil */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileUtil", function() { return FileUtil; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FileUtil = /** @class */ (function () {
    function FileUtil() {
    }
    FileUtil.prototype.isCSVFile = function (file) {
        return file.name.endsWith(".csv");
    };
    FileUtil.prototype.getHeaderArray = function (csvRecordsArr, tokenDelimeter) {
        var headers = csvRecordsArr[0].split(tokenDelimeter);
        var headerArray = [];
        for (var j = 0; j < headers.length; j++) {
            headerArray.push(headers[j]);
        }
        return headerArray;
    };
    FileUtil.prototype.validateHeaders = function (origHeaders, fileHeaaders) {
        if (origHeaders.length != fileHeaaders.length) {
            return false;
        }
        var fileHeaderMatchFlag = true;
        for (var j = 0; j < origHeaders.length; j++) {
            if (origHeaders[j] != fileHeaaders[j]) {
                fileHeaderMatchFlag = false;
                break;
            }
        }
        return fileHeaderMatchFlag;
    };
    FileUtil.prototype.getDataRecordsArrayFromCSVFile = function (csvRecordsArray, headerLength, validateHeaderAndRecordLengthFlag, tokenDelimeter) {
        var dataArr = [];
        for (var i = 0; i < csvRecordsArray.length; i++) {
            var data = csvRecordsArray[i].split(tokenDelimeter);
            if (validateHeaderAndRecordLengthFlag && data.length != headerLength) {
                if (data == "") {
                    alert("Extra blank line is present at line number " + i + ", please remove it.");
                    return null;
                }
                else {
                    alert("Record at line number " + i + " contain " + data.length + " tokens, and is not matching with header length of :" + headerLength);
                    return null;
                }
            }
            var col = [];
            for (var j = 0; j < data.length; j++) {
                col.push(data[j]);
            }
            dataArr.push(col);
        }
        return dataArr;
    };
    FileUtil = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FileUtil);
    return FileUtil;
}());



/***/ }),

/***/ "./src/app/csvutils/tests.constants.ts":
/*!*********************************************!*\
  !*** ./src/app/csvutils/tests.constants.ts ***!
  \*********************************************/
/*! exports provided: Constants */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Constants", function() { return Constants; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var Constants = /** @class */ (function () {
    function Constants() {
    }
    Constants.tokenDelimeter = ";";
    Constants.isHeaderPresentFlag = true;
    Constants.validateHeaderAndRecordLengthFlag = true;
    Constants.valildateFileExtenstionFlag = true;
    Constants = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], Constants);
    return Constants;
}());



/***/ }),

/***/ "./src/app/forgotpassword/forgotpassword.component.css":
/*!*************************************************************!*\
  !*** ./src/app/forgotpassword/forgotpassword.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZvcmdvdHBhc3N3b3JkL2ZvcmdvdHBhc3N3b3JkLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/forgotpassword/forgotpassword.component.html":
/*!**************************************************************!*\
  !*** ./src/app/forgotpassword/forgotpassword.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"w3-row\">\n  <h1 class=\"w3-text-orange w3-center w3-border-bottom w3-padding\"><b>NOTATIS</b></h1>\n</div>\n\n<div class=\"w3-row\">\n  <div class=\"w3-col m4 w3-container\">\n\n  </div>\n  <div class=\"w3-col m4 w3-container w3-light-grey w3-border w3-padding\">\n    <form class=\"w3-container\" [formGroup]=\"emailForm\" (ngSubmit)=\"sendMail()\">\n      <div><b>Wachtwoord vergeten?</b></div>\n\n      <label>Geef je e-mail adres in om een nieuw wachtwoord aan te vragen:</label>\n      <input class=\"w3-input\" [ngClass]=\"{'w3-border-red' : isNoSuchUserError()}\" type=\"text\" name=\"email\" formControlName=\"email\"><br>\n      <div class=\"w3-text-red\" *ngIf=\"emailForm.get('email').touched && emailForm.get('email').invalid\">\n        This must be a valid e-mail.\n      </div>\n      <div class=\"w3-text-red\" *ngIf=\"isNoSuchUserError()\">\n          Oeps, we konden geen gebruiker met deze e-mail terugvinden.\n        </div>\n      <label>Geef hier je schoolcode in:</label>\n      <input class=\"w3-input\" [ngClass]=\"{'w3-border-red' : NoSuchSchoolcodeError()}\" type=\"text\" name=\"schoolcode\" formControlName=\"schoolcode\"><br>\n      <div class=\"w3-text-red\" *ngIf=\"NoSuchSchoolcodeError()\">\n          Oeps, we konden deze schoolcode niet terugvinden.\n        </div>\n      <div class=\"w3-text-red\" *ngIf=\"emailForm.get('schoolcode').touched && emailForm.get('schoolcode').invalid\">\n        The schoolcode is required.\n      </div>\n\n      <p>Druk op 'E-mail verzenden' om een code te ontvangen waarmee je je wachtwoord opnieuw kan instellen.</p>\n      <div class=\"w3-center\"><button [disabled]=\"emailForm.invalid\" class=\"w3-button w3-blue\">E-mail verzenden</button>\n      </div>\n    </form>\n  </div>\n  <div class=\"w3-col m4 w3-container\">\n\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/forgotpassword/forgotpassword.component.ts":
/*!************************************************************!*\
  !*** ./src/app/forgotpassword/forgotpassword.component.ts ***!
  \************************************************************/
/*! exports provided: ForgotpasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotpasswordComponent", function() { return ForgotpasswordComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _model_repository_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../model/repository.model */ "./src/app/model/repository.model.ts");




var ForgotpasswordComponent = /** @class */ (function () {
    function ForgotpasswordComponent(model, formBuilder) {
        this.model = model;
        this.formBuilder = formBuilder;
    }
    ForgotpasswordComponent.prototype.ngOnInit = function () {
        this.emailForm = this.formBuilder.group({
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            schoolcode: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
        localStorage.setItem("NoSuchUserError", "0");
        localStorage.setItem("NoSuchSchoolcode", "0");
    };
    ForgotpasswordComponent.prototype.sendMail = function () {
        console.log(this.emailForm.get('email').value);
        console.log(this.emailForm.get('schoolcode').value);
        this.model.forgotpassword1(this.emailForm.get('email').value, this.emailForm.get('schoolcode').value);
    };
    ForgotpasswordComponent.prototype.isMailError = function () {
        if (localStorage.getItem('MailError') && localStorage.getItem('MailError') == "1") {
            return true;
        }
        return false;
    };
    ForgotpasswordComponent.prototype.isNoSuchUserError = function () {
        if (localStorage.getItem('NoSuchUserError') == "1") {
            return true;
        }
        return false;
    };
    ForgotpasswordComponent.prototype.NoSuchSchoolcodeError = function () {
        if (localStorage.getItem('NoSuchSchoolcode') == "1") {
            return true;
        }
        return false;
    };
    ForgotpasswordComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-forgotpassword',
            template: __webpack_require__(/*! ./forgotpassword.component.html */ "./src/app/forgotpassword/forgotpassword.component.html"),
            styles: [__webpack_require__(/*! ./forgotpassword.component.css */ "./src/app/forgotpassword/forgotpassword.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_model_repository_model__WEBPACK_IMPORTED_MODULE_3__["Model"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]])
    ], ForgotpasswordComponent);
    return ForgotpasswordComponent;
}());



/***/ }),

/***/ "./src/app/forgotpassword2/forgotpassword2.component.css":
/*!***************************************************************!*\
  !*** ./src/app/forgotpassword2/forgotpassword2.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZvcmdvdHBhc3N3b3JkMi9mb3Jnb3RwYXNzd29yZDIuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/forgotpassword2/forgotpassword2.component.html":
/*!****************************************************************!*\
  !*** ./src/app/forgotpassword2/forgotpassword2.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"w3-row\">\n  <h1 class=\"w3-text-orange w3-center w3-border-bottom w3-padding\"><b>NOTATIS</b></h1>\n</div>\n\n<div class=\"w3-row\">\n  <div class=\"w3-col m4 w3-container\">\n\n  </div>\n  <div class=\"w3-col m4 w3-container w3-light-grey w3-border w3-padding\">\n    <form class=\"w3-container\" [formGroup]=\"passwordForm\" (ngSubmit)=\"changePassword()\">\n      <div><b>Je kan hier je wachtwoord wijzigen:</b></div>\n      <p>\n      <label class=\"w3-text-orange\"><b>Password</b></label>\n      <input (input)=\"checkPasswordMatch()\" class=\"w3-input w3-border w3-lightgrey\" name=\"password\" type=\"text\"\n        formControlName=\"password\"></p>\n      <div class=\"w3-text-red\" *ngIf=\"passwordForm.get('password').touched && passwordForm.get('password').invalid\">\n        This is a required field.\n      </div>\n      <p>\n        <label class=\"w3-text-orange\"><b>Password again</b></label>\n        <input (input)=\"checkPasswordMatch()\" class=\"w3-input w3-border w3-lightgrey\" name=\"passwordagain\" type=\"text\"\n          formControlName=\"passwordagain\"></p>\n      <div class=\"w3-text-red\" *ngIf=\"!passwordsMatch\">\n        This is a required field that must match the password field.\n      </div>\n      <p class=\" w3-center\">\n          <button [disabled]=\"passwordForm.invalid\" type=\"submit\" class=\"w3-btn w3-blue\">Change password</button></p>\n    </form>\n  </div>\n  <div class=\"w3-col m4 w3-container\">\n\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/forgotpassword2/forgotpassword2.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/forgotpassword2/forgotpassword2.component.ts ***!
  \**************************************************************/
/*! exports provided: Forgotpassword2Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Forgotpassword2Component", function() { return Forgotpassword2Component; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _model_repository_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../model/repository.model */ "./src/app/model/repository.model.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");





var Forgotpassword2Component = /** @class */ (function () {
    function Forgotpassword2Component(_Activatedroute, _router, model, formBuilder) {
        this._Activatedroute = _Activatedroute;
        this._router = _router;
        this.model = model;
        this.formBuilder = formBuilder;
    }
    Forgotpassword2Component.prototype.ngOnInit = function () {
        this.code = this._Activatedroute.snapshot.params['code'];
        console.log(this.code);
        this.schoolcode = this._Activatedroute.snapshot.params['schoolcode'];
        console.log(this.schoolcode);
        this.passwordForm = this.formBuilder.group({
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            passwordagain: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]
        });
        this.passwordForm.setValidators(this.passwordMatchValidator);
    };
    //Our own custom validator for checking password and passwordagain match
    Forgotpassword2Component.prototype.passwordMatchValidator = function (group) {
        if (group) {
            // console.log("checking password match: ");
            // console.log("password: " + group.get("password").value);
            // console.log("passwordagain: " + group.get("passwordagain").value);
            if (group.get("password").value !== group.get("passwordagain").value) {
                return { notMatching: true };
            }
        }
        return null;
    };
    Forgotpassword2Component.prototype.checkPasswordMatch = function () {
        console.log("checking password match... ");
        if (this.passwordForm.get('password').value == this.passwordForm.get('passwordagain').value) {
            console.log("true");
            this.passwordsMatch = true;
        }
        else {
            console.log("false");
            this.passwordsMatch = false;
        }
    };
    Forgotpassword2Component.prototype.changePassword = function () {
        console.log("Entering change password");
        this.model.forgotpassword2(this.code, this.schoolcode, this.passwordForm.get('password').value);
    };
    Forgotpassword2Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-forgotpassword2',
            template: __webpack_require__(/*! ./forgotpassword2.component.html */ "./src/app/forgotpassword2/forgotpassword2.component.html"),
            styles: [__webpack_require__(/*! ./forgotpassword2.component.css */ "./src/app/forgotpassword2/forgotpassword2.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _model_repository_model__WEBPACK_IMPORTED_MODULE_3__["Model"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]])
    ], Forgotpassword2Component);
    return Forgotpassword2Component;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body {font-family: Arial, Helvetica, sans-serif;}\r\n\r\n/* Full-width input fields */\r\n\r\ninput[type=text], input[type=password] {\r\n  width: 100%;\r\n  padding: 12px 20px;\r\n  margin: 8px 0;\r\n  display: inline-block;\r\n  border: 1px solid #ccc;\r\n  box-sizing: border-box;\r\n}\r\n\r\n/* Set a style for all buttons */\r\n\r\nbutton {\r\n  background-color: #4CAF50;\r\n  color: white;\r\n  padding: 14px 20px;\r\n  margin: 8px 0;\r\n  border: none;\r\n  cursor: pointer;\r\n  width: 100%;\r\n}\r\n\r\nbutton:hover {\r\n  opacity: 0.8;\r\n}\r\n\r\n/* Extra styles for the cancel button */\r\n\r\n.cancelbtn {\r\n  width: auto;\r\n  padding: 10px 18px;\r\n  background-color: #f44336;\r\n}\r\n\r\n/* Center the image and position the close button */\r\n\r\n.imgcontainer {\r\n  text-align: center;\r\n  margin: 24px 0 12px 0;\r\n  position: relative;\r\n}\r\n\r\nimg.avatar {\r\n  width: 40%;\r\n  border-radius: 50%;\r\n}\r\n\r\n.container {\r\n  padding: 16px;\r\n}\r\n\r\nspan.psw {\r\n  float: right;\r\n  padding-top: 16px;\r\n}\r\n\r\n/* The Modal (background) */\r\n\r\n.modal {\r\n  display: none; /* Hidden by default */\r\n  position: fixed; /* Stay in place */\r\n  z-index: 1; /* Sit on top */\r\n  left: 0;\r\n  top: 0;\r\n  width: 100%; /* Full width */\r\n  height: 100%; /* Full height */\r\n  overflow: auto; /* Enable scroll if needed */\r\n  background-color: rgb(0,0,0); /* Fallback color */\r\n  background-color: rgba(0,0,0,0.4); /* Black w/ opacity */\r\n  padding-top: 60px;\r\n}\r\n\r\n/* Modal Content/Box */\r\n\r\n.modal-content {\r\n  background-color: #fefefe;\r\n  margin: 5% auto 15% auto; /* 5% from the top, 15% from the bottom and centered */\r\n  border: 1px solid #888;\r\n  width: 80%; /* Could be more or less, depending on screen size */\r\n}\r\n\r\n/* The Close Button (x) */\r\n\r\n.close {\r\n  position: absolute;\r\n  right: 25px;\r\n  top: 0;\r\n  color: #000;\r\n  font-size: 35px;\r\n  font-weight: bold;\r\n}\r\n\r\n.close:hover,\r\n.close:focus {\r\n  color: red;\r\n  cursor: pointer;\r\n}\r\n\r\n/* Add Zoom Animation */\r\n\r\n.animate {\r\n  -webkit-animation: animatezoom 0.6s;\r\n  animation: animatezoom 0.6s\r\n}\r\n\r\n@-webkit-keyframes animatezoom {\r\n  from {-webkit-transform: scale(0)} \r\n  to {-webkit-transform: scale(1)}\r\n}\r\n\r\n@keyframes animatezoom {\r\n  from {-webkit-transform: scale(0);transform: scale(0)} \r\n  to {-webkit-transform: scale(1);transform: scale(1)}\r\n}\r\n\r\n/* Change styles for span and cancel button on extra small screens */\r\n\r\n@media screen and (max-width: 300px) {\r\n  span.psw {\r\n     display: block;\r\n     float: none;\r\n  }\r\n  .cancelbtn {\r\n     width: 100%;\r\n  }\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxNQUFNLHlDQUF5QyxDQUFDOztBQUVoRCw0QkFBNEI7O0FBQzVCO0VBQ0UsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IscUJBQXFCO0VBQ3JCLHNCQUFzQjtFQUN0QixzQkFBc0I7QUFDeEI7O0FBRUEsZ0NBQWdDOztBQUNoQztFQUNFLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixZQUFZO0VBQ1osZUFBZTtFQUNmLFdBQVc7QUFDYjs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQSx1Q0FBdUM7O0FBQ3ZDO0VBQ0UsV0FBVztFQUNYLGtCQUFrQjtFQUNsQix5QkFBeUI7QUFDM0I7O0FBRUEsbURBQW1EOztBQUNuRDtFQUNFLGtCQUFrQjtFQUNsQixxQkFBcUI7RUFDckIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsVUFBVTtFQUNWLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLFlBQVk7RUFDWixpQkFBaUI7QUFDbkI7O0FBRUEsMkJBQTJCOztBQUMzQjtFQUNFLGFBQWEsRUFBRSxzQkFBc0I7RUFDckMsZUFBZSxFQUFFLGtCQUFrQjtFQUNuQyxVQUFVLEVBQUUsZUFBZTtFQUMzQixPQUFPO0VBQ1AsTUFBTTtFQUNOLFdBQVcsRUFBRSxlQUFlO0VBQzVCLFlBQVksRUFBRSxnQkFBZ0I7RUFDOUIsY0FBYyxFQUFFLDRCQUE0QjtFQUM1Qyw0QkFBNEIsRUFBRSxtQkFBbUI7RUFDakQsaUNBQWlDLEVBQUUscUJBQXFCO0VBQ3hELGlCQUFpQjtBQUNuQjs7QUFFQSxzQkFBc0I7O0FBQ3RCO0VBQ0UseUJBQXlCO0VBQ3pCLHdCQUF3QixFQUFFLHNEQUFzRDtFQUNoRixzQkFBc0I7RUFDdEIsVUFBVSxFQUFFLG9EQUFvRDtBQUNsRTs7QUFFQSx5QkFBeUI7O0FBQ3pCO0VBQ0Usa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxNQUFNO0VBQ04sV0FBVztFQUNYLGVBQWU7RUFDZixpQkFBaUI7QUFDbkI7O0FBRUE7O0VBRUUsVUFBVTtFQUNWLGVBQWU7QUFDakI7O0FBRUEsdUJBQXVCOztBQUN2QjtFQUNFLG1DQUFtQztFQUNuQztBQUNGOztBQUVBO0VBQ0UsTUFBTSwyQkFBMkI7RUFDakMsSUFBSSwyQkFBMkI7QUFDakM7O0FBRUE7RUFDRSxNQUFNLDJCQUFrQixDQUFsQixtQkFBbUI7RUFDekIsSUFBSSwyQkFBa0IsQ0FBbEIsbUJBQW1CO0FBQ3pCOztBQUVBLG9FQUFvRTs7QUFDcEU7RUFDRTtLQUNHLGNBQWM7S0FDZCxXQUFXO0VBQ2Q7RUFDQTtLQUNHLFdBQVc7RUFDZDtBQUNGIiwiZmlsZSI6InNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImJvZHkge2ZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO31cclxuXHJcbi8qIEZ1bGwtd2lkdGggaW5wdXQgZmllbGRzICovXHJcbmlucHV0W3R5cGU9dGV4dF0sIGlucHV0W3R5cGU9cGFzc3dvcmRdIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBwYWRkaW5nOiAxMnB4IDIwcHg7XHJcbiAgbWFyZ2luOiA4cHggMDtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG59XHJcblxyXG4vKiBTZXQgYSBzdHlsZSBmb3IgYWxsIGJ1dHRvbnMgKi9cclxuYnV0dG9uIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNENBRjUwO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBwYWRkaW5nOiAxNHB4IDIwcHg7XHJcbiAgbWFyZ2luOiA4cHggMDtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG5idXR0b246aG92ZXIge1xyXG4gIG9wYWNpdHk6IDAuODtcclxufVxyXG5cclxuLyogRXh0cmEgc3R5bGVzIGZvciB0aGUgY2FuY2VsIGJ1dHRvbiAqL1xyXG4uY2FuY2VsYnRuIHtcclxuICB3aWR0aDogYXV0bztcclxuICBwYWRkaW5nOiAxMHB4IDE4cHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y0NDMzNjtcclxufVxyXG5cclxuLyogQ2VudGVyIHRoZSBpbWFnZSBhbmQgcG9zaXRpb24gdGhlIGNsb3NlIGJ1dHRvbiAqL1xyXG4uaW1nY29udGFpbmVyIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgbWFyZ2luOiAyNHB4IDAgMTJweCAwO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuaW1nLmF2YXRhciB7XHJcbiAgd2lkdGg6IDQwJTtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbn1cclxuXHJcbi5jb250YWluZXIge1xyXG4gIHBhZGRpbmc6IDE2cHg7XHJcbn1cclxuXHJcbnNwYW4ucHN3IHtcclxuICBmbG9hdDogcmlnaHQ7XHJcbiAgcGFkZGluZy10b3A6IDE2cHg7XHJcbn1cclxuXHJcbi8qIFRoZSBNb2RhbCAoYmFja2dyb3VuZCkgKi9cclxuLm1vZGFsIHtcclxuICBkaXNwbGF5OiBub25lOyAvKiBIaWRkZW4gYnkgZGVmYXVsdCAqL1xyXG4gIHBvc2l0aW9uOiBmaXhlZDsgLyogU3RheSBpbiBwbGFjZSAqL1xyXG4gIHotaW5kZXg6IDE7IC8qIFNpdCBvbiB0b3AgKi9cclxuICBsZWZ0OiAwO1xyXG4gIHRvcDogMDtcclxuICB3aWR0aDogMTAwJTsgLyogRnVsbCB3aWR0aCAqL1xyXG4gIGhlaWdodDogMTAwJTsgLyogRnVsbCBoZWlnaHQgKi9cclxuICBvdmVyZmxvdzogYXV0bzsgLyogRW5hYmxlIHNjcm9sbCBpZiBuZWVkZWQgKi9cclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwwLDApOyAvKiBGYWxsYmFjayBjb2xvciAqL1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsMC40KTsgLyogQmxhY2sgdy8gb3BhY2l0eSAqL1xyXG4gIHBhZGRpbmctdG9wOiA2MHB4O1xyXG59XHJcblxyXG4vKiBNb2RhbCBDb250ZW50L0JveCAqL1xyXG4ubW9kYWwtY29udGVudCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZlZmVmZTtcclxuICBtYXJnaW46IDUlIGF1dG8gMTUlIGF1dG87IC8qIDUlIGZyb20gdGhlIHRvcCwgMTUlIGZyb20gdGhlIGJvdHRvbSBhbmQgY2VudGVyZWQgKi9cclxuICBib3JkZXI6IDFweCBzb2xpZCAjODg4O1xyXG4gIHdpZHRoOiA4MCU7IC8qIENvdWxkIGJlIG1vcmUgb3IgbGVzcywgZGVwZW5kaW5nIG9uIHNjcmVlbiBzaXplICovXHJcbn1cclxuXHJcbi8qIFRoZSBDbG9zZSBCdXR0b24gKHgpICovXHJcbi5jbG9zZSB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHJpZ2h0OiAyNXB4O1xyXG4gIHRvcDogMDtcclxuICBjb2xvcjogIzAwMDtcclxuICBmb250LXNpemU6IDM1cHg7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbi5jbG9zZTpob3ZlcixcclxuLmNsb3NlOmZvY3VzIHtcclxuICBjb2xvcjogcmVkO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLyogQWRkIFpvb20gQW5pbWF0aW9uICovXHJcbi5hbmltYXRlIHtcclxuICAtd2Via2l0LWFuaW1hdGlvbjogYW5pbWF0ZXpvb20gMC42cztcclxuICBhbmltYXRpb246IGFuaW1hdGV6b29tIDAuNnNcclxufVxyXG5cclxuQC13ZWJraXQta2V5ZnJhbWVzIGFuaW1hdGV6b29tIHtcclxuICBmcm9tIHstd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMCl9IFxyXG4gIHRvIHstd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMSl9XHJcbn1cclxuICBcclxuQGtleWZyYW1lcyBhbmltYXRlem9vbSB7XHJcbiAgZnJvbSB7dHJhbnNmb3JtOiBzY2FsZSgwKX0gXHJcbiAgdG8ge3RyYW5zZm9ybTogc2NhbGUoMSl9XHJcbn1cclxuXHJcbi8qIENoYW5nZSBzdHlsZXMgZm9yIHNwYW4gYW5kIGNhbmNlbCBidXR0b24gb24gZXh0cmEgc21hbGwgc2NyZWVucyAqL1xyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzMDBweCkge1xyXG4gIHNwYW4ucHN3IHtcclxuICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICBmbG9hdDogbm9uZTtcclxuICB9XHJcbiAgLmNhbmNlbGJ0biB7XHJcbiAgICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG59Il19 */"

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\n<html>\n<head>\n<meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n</head>\n<body class=\"w3-light-grey w3-display-container\" style=\"height:600px\">\n\n<div class=\"w3-display-middle\">\n    <div class=\"w3-center\">\n      <button class=\"w3-margin w3-orange w3-xlarge\" onclick=\"document.getElementById('login').style.display='block'\" style=\"width:auto;\"><b>Login</b></button>\n      <a [routerLink] = \"['/signup']\">Sign Up</a>\n    </div>\n</div>\n\n\n<div id=\"login\" class=\"modal\">\n  \n  <form class=\"modal-content animate\" [formGroup]=\"loginForm\">\n    <!--\n    <div class=\"imgcontainer\">\n      <span onclick=\"document.getElementById('login').style.display='none'\" class=\"close\" title=\"Close Modal\">&times;</span>\n      <img src=\"img_avatar2.png\" alt=\"Avatar\" class=\"avatar\">\n    </div>\n    -->\n\n    <div *ngIf=\"loginError\"\n      class=\"w3-panel w3-center new-message w3-red\"\n      [@EnterLeave]=\"'flyIn'\">\n      <h4>Error logging in.</h4>\n  </div>\n\n    <div class=\"w3-container w3-light-grey\">\n      <label for=\"username\" class=\"w3-text-orange\"><b>Username</b></label>\n      <input type=\"text\" (keyup.enter)=\"onLogin()\" placeholder=\"Enter Username\" name=\"username\" formControlName=\"username\" required>\n\n      <label for=\"password\" class=\"w3-text-orange\"><b>Password</b></label>\n      <input type=\"password\" (keyup.enter)=\"onLogin()\" placeholder=\"Enter Password\" name=\"password\" formControlName=\"password\" required>\n\t  \n\t  <label for=\"schoolcode\" class=\"w3-text-orange\"><b>Schoolcode</b></label>\n      <input type=\"text\" (keyup.enter)=\"onLogin()\" placeholder=\"Enter Schoolcode\" name=\"schoolcode\" formControlName=\"schoolcode\" required>\n        \n      <button (click)=\"onLogin()\" type=\"button\" class=\"w3-orange w3-xlarge\">Login</button>\n      <label>\n        <input type=\"checkbox\" checked=\"checked\" name=\"remember\"> Remember me\n      </label>\n    </div>\n\n    <div class=\"container\" style=\"background-color:#f1f1f1\">\n      <button type=\"button\" onclick=\"document.getElementById('login').style.display='none'\" class=\"cancelbtn w3-grey\">Cancel</button>\n      <span class=\"psw\">Forgot <a [routerLink] = \"['/forgotpassword']\">password?</a></span>\n    </div>\n  </form>\n</div>\n\n\n\n\n<script>\n// Get the modal\nvar modal = document.getElementById('id01');\n\n// When the user clicks anywhere outside of the modal, close it\nwindow.onclick = function(event) {\n  if (event.target == modal) {\n    modal.style.display = \"none\";\n  }\n}\n</script>\n\n\n\n<script>\n// Get the modal\nvar modal = document.getElementById('login');\n\n// When the user clicks anywhere outside of the modal, close it\nwindow.onclick = function(event) {\n    if (event.target == modal) {\n        modal.style.display = \"none\";\n    }\n}\n</script>\n\n</body>\n</html>\n"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _model_repository_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../model/repository.model */ "./src/app/model/repository.model.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");






var LoginComponent = /** @class */ (function () {
    // signUpForm: FormGroup;
    function LoginComponent(model, formBuilder, activeRoute, router) {
        this.model = model;
        this.formBuilder = formBuilder;
        this.router = router;
        this.loginError = false;
    }
    LoginComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.initForms();
        this.loginError = false;
        this.model.studentLoggedIn.subscribe(function (message) {
            //Student logged in
            if (JSON.parse(localStorage.getItem('currentUser')).roles[0].id < 3) {
                _this.router.navigate(['studentoverview']);
            }
            //Teacher or admin logged in
            else {
                _this.router.navigate(['overview']);
            }
        });
        this.model.loginFailed.subscribe(function (message) {
            _this.loginError = true;
            console.log("loginerror");
            setTimeout(function () { return _this.loginError = null; }, 2000);
            //this.router.navigate(['login']);
        });
    };
    LoginComponent.prototype.initForms = function () {
        this.loginForm = this.formBuilder.group({
            username: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            schoolcode: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
        if (localStorage.getItem('schoolcode') && localStorage.getItem('username')) {
            this.loginForm.setValue({
                schoolcode: localStorage.getItem('schoolcode'),
                password: "",
                username: localStorage.getItem('username')
            });
        }
    };
    LoginComponent.prototype.onLogin = function () {
        //localStorage.clear();
        console.log("username: " + this.loginForm.get('username').value);
        console.log("password: " + this.loginForm.get('password').value);
        console.log("schoolcode: " + this.loginForm.get('schoolcode').value);
        //   localStorage.setItem('schoolcode',this.loginForm.get('schoolcode').value);
        this.model.login(this.loginForm.get('username').value, this.loginForm.get('password').value, this.loginForm.get('schoolcode').value);
        // this.router.navigate(['overview']);
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["trigger"])('EnterLeave', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["state"])('flyIn', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["style"])({ transform: 'translateX(0)' })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["transition"])('void => *', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["style"])({ width: 10, transform: 'translateX(50px)', opacity: 0 }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["sequence"])([
                            // animate('0.3s 0.1s ease', style({
                            //   transform: 'translateX(0)',
                            //   width: 120
                            // })),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["animate"])('0.3s ease', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["style"])({
                                opacity: 1
                            }))
                        ])
                    ])
                ])
            ],
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_model_repository_model__WEBPACK_IMPORTED_MODULE_3__["Model"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/messages/message.component.html":
/*!*************************************************!*\
  !*** ./src/app/messages/message.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"lastMessage\"\r\n    class=\"w3-panel w3-center new-message\"\r\n    [class.w3-red]=\"lastMessage.error\"\r\n    [class.w3-green]=\"!lastMessage.error\"\r\n    [@EnterLeave]=\"'flyIn'\">\r\n    <h4>{{lastMessage.text}}</h4>\r\n</div>"

/***/ }),

/***/ "./src/app/messages/message.component.ts":
/*!***********************************************!*\
  !*** ./src/app/messages/message.component.ts ***!
  \***********************************************/
/*! exports provided: MessageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageComponent", function() { return MessageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _message_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./message.service */ "./src/app/messages/message.service.ts");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");




var MessageComponent = /** @class */ (function () {
    function MessageComponent(messageService) {
        var _this = this;
        messageService.messages.subscribe(function (m) {
            _this.lastMessage = m;
            setTimeout(function () { return _this.lastMessage = null; }, 2000);
        });
    }
    MessageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "paMessages",
            template: __webpack_require__(/*! ./message.component.html */ "./src/app/messages/message.component.html"),
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["trigger"])('EnterLeave', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["state"])('flyIn', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({ transform: 'translateX(0)' })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["transition"])('void => *', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({ width: 10, transform: 'translateX(50px)', opacity: 0 }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["sequence"])([
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["animate"])('0.3s 0.1s ease', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({
                                transform: 'translateX(0)',
                                width: 120
                            })),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["animate"])('0.3s ease', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({
                                opacity: 1
                            }))
                        ])
                    ]),
                ])
            ]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_message_service__WEBPACK_IMPORTED_MODULE_2__["MessageService"]])
    ], MessageComponent);
    return MessageComponent;
}());



/***/ }),

/***/ "./src/app/messages/message.model.ts":
/*!*******************************************!*\
  !*** ./src/app/messages/message.model.ts ***!
  \*******************************************/
/*! exports provided: Message */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Message", function() { return Message; });
var Message = /** @class */ (function () {
    function Message(text, error) {
        if (error === void 0) { error = false; }
        this.text = text;
        this.error = error;
    }
    return Message;
}());



/***/ }),

/***/ "./src/app/messages/message.module.ts":
/*!********************************************!*\
  !*** ./src/app/messages/message.module.ts ***!
  \********************************************/
/*! exports provided: MessageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageModule", function() { return MessageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _message_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./message.component */ "./src/app/messages/message.component.ts");
/* harmony import */ var _message_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./message.service */ "./src/app/messages/message.service.ts");





var MessageModule = /** @class */ (function () {
    function MessageModule() {
    }
    MessageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"]],
            declarations: [_message_component__WEBPACK_IMPORTED_MODULE_3__["MessageComponent"]],
            exports: [_message_component__WEBPACK_IMPORTED_MODULE_3__["MessageComponent"]],
            providers: [_message_service__WEBPACK_IMPORTED_MODULE_4__["MessageService"]]
        })
    ], MessageModule);
    return MessageModule;
}());

;


/***/ }),

/***/ "./src/app/messages/message.service.ts":
/*!*********************************************!*\
  !*** ./src/app/messages/message.service.ts ***!
  \*********************************************/
/*! exports provided: MessageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageService", function() { return MessageService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");



var MessageService = /** @class */ (function () {
    function MessageService() {
        this.subject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
    }
    MessageService.prototype.reportMessage = function (msg) {
        this.subject.next(msg);
    };
    Object.defineProperty(MessageService.prototype, "messages", {
        get: function () {
            return this.subject;
        },
        enumerable: true,
        configurable: true
    });
    MessageService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], MessageService);
    return MessageService;
}());



/***/ }),

/***/ "./src/app/model/EditPasswordForm.model.ts":
/*!*************************************************!*\
  !*** ./src/app/model/EditPasswordForm.model.ts ***!
  \*************************************************/
/*! exports provided: EditPasswordForm */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditPasswordForm", function() { return EditPasswordForm; });
var EditPasswordForm = /** @class */ (function () {
    function EditPasswordForm(id, password) {
        this.id = id;
        this.password = password;
    }
    return EditPasswordForm;
}());



/***/ }),

/***/ "./src/app/model/class_schoolyear.model.ts":
/*!*************************************************!*\
  !*** ./src/app/model/class_schoolyear.model.ts ***!
  \*************************************************/
/*! exports provided: Class_schoolyear */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Class_schoolyear", function() { return Class_schoolyear; });
var Class_schoolyear = /** @class */ (function () {
    function Class_schoolyear(class_schoolyear_id, schoolClass, schoolyear_id) {
        this.class_schoolyear_id = class_schoolyear_id;
        this.schoolClass = schoolClass;
        this.schoolyear_id = schoolyear_id;
    }
    return Class_schoolyear;
}());



/***/ }),

/***/ "./src/app/model/model.module.ts":
/*!***************************************!*\
  !*** ./src/app/model/model.module.ts ***!
  \***************************************/
/*! exports provided: ModelModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModelModule", function() { return ModelModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _repository_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./repository.model */ "./src/app/model/repository.model.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _rest_datasource__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./rest.datasource */ "./src/app/model/rest.datasource.ts");
/* harmony import */ var _csvutils_file_util__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../csvutils/file.util */ "./src/app/csvutils/file.util.ts");
/* harmony import */ var _csvutils_tests_constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../csvutils/tests.constants */ "./src/app/csvutils/tests.constants.ts");







var ModelModule = /** @class */ (function () {
    function ModelModule() {
    }
    ModelModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientJsonpModule"]],
            providers: [_repository_model__WEBPACK_IMPORTED_MODULE_2__["Model"], _rest_datasource__WEBPACK_IMPORTED_MODULE_4__["RestDataSource"], _csvutils_file_util__WEBPACK_IMPORTED_MODULE_5__["FileUtil"], _csvutils_tests_constants__WEBPACK_IMPORTED_MODULE_6__["Constants"],
                { provide: _rest_datasource__WEBPACK_IMPORTED_MODULE_4__["REST_URL"], useValue: "restfulapi.test" }]
            //https://notatis.org 
            //https://spring.remarko.net
            // http://localhost:8080
            //http://remarko.eu-central-1.elasticbeanstalk.com
        })
    ], ModelModule);
    return ModelModule;
}());



/***/ }),

/***/ "./src/app/model/rankingSettings.model.ts":
/*!************************************************!*\
  !*** ./src/app/model/rankingSettings.model.ts ***!
  \************************************************/
/*! exports provided: RankingSettings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RankingSettings", function() { return RankingSettings; });
var RankingSettings = /** @class */ (function () {
    function RankingSettings(ranking_settings_id, ranking_start_total, one_penalty, two_penalty, three_penalty, four_penalty, ranking_start_date, ranking_end_date, last_updated) {
        this.ranking_settings_id = ranking_settings_id;
        this.ranking_start_total = ranking_start_total;
        this.one_penalty = one_penalty;
        this.two_penalty = two_penalty;
        this.three_penalty = three_penalty;
        this.four_penalty = four_penalty;
        this.ranking_start_date = ranking_start_date;
        this.ranking_end_date = ranking_end_date;
        this.last_updated = last_updated;
    }
    return RankingSettings;
}());



/***/ }),

/***/ "./src/app/model/remarkFilterForm.model.ts":
/*!*************************************************!*\
  !*** ./src/app/model/remarkFilterForm.model.ts ***!
  \*************************************************/
/*! exports provided: RemarkFilterForm */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RemarkFilterForm", function() { return RemarkFilterForm; });
var RemarkFilterForm = /** @class */ (function () {
    function RemarkFilterForm(studentId, authorId, fromDate, toDate, severities, schoolClassId) {
        this.studentId = studentId;
        this.authorId = authorId;
        this.fromDate = fromDate;
        this.toDate = toDate;
        this.severities = severities;
        this.schoolClassId = schoolClassId;
    }
    return RemarkFilterForm;
}());



/***/ }),

/***/ "./src/app/model/remarkoptions.model.ts":
/*!**********************************************!*\
  !*** ./src/app/model/remarkoptions.model.ts ***!
  \**********************************************/
/*! exports provided: Remarkoptions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Remarkoptions", function() { return Remarkoptions; });
var Remarkoptions = /** @class */ (function () {
    function Remarkoptions(id, option) {
        this.id = id;
        this.option = option;
    }
    return Remarkoptions;
}());



/***/ }),

/***/ "./src/app/model/remarksSaveForm.model.ts":
/*!************************************************!*\
  !*** ./src/app/model/remarksSaveForm.model.ts ***!
  \************************************************/
/*! exports provided: RemarksSaveForm */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RemarksSaveForm", function() { return RemarksSaveForm; });
var RemarksSaveForm = /** @class */ (function () {
    function RemarksSaveForm(date, remark, extraInfo, severity, studentId, teacherId) {
        this.date = date;
        this.remark = remark;
        this.extraInfo = extraInfo;
        this.severity = severity;
        this.studentId = studentId;
        this.teacherId = teacherId;
    }
    return RemarksSaveForm;
}());



/***/ }),

/***/ "./src/app/model/repository.model.ts":
/*!*******************************************!*\
  !*** ./src/app/model/repository.model.ts ***!
  \*******************************************/
/*! exports provided: Model */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Model", function() { return Model; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _rest_datasource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./rest.datasource */ "./src/app/model/rest.datasource.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _messages_message_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../messages/message.service */ "./src/app/messages/message.service.ts");
/* harmony import */ var _messages_message_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../messages/message.model */ "./src/app/messages/message.model.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");







var Model = /** @class */ (function () {
    function Model(dataSource, messageService, activeRoute, router) {
        // this.dataSource.getSchoolyears().subscribe(
        //     data => {
        //         this.schoolyears = data
        //     },
        //     error => {
        //         this.loginFailed.next("login failed");
        //     }
        // );
        // this.dataSource.getClassSchoolyearBySchoolyear(this.currentSchoolyearId).subscribe(
        //     data => {
        //         this.classSchoolyears = data;
        //     },
        //     error => {
        //         this.loginFailed.next("login failed");
        //     }
        this.dataSource = dataSource;
        this.messageService = messageService;
        this.activeRoute = activeRoute;
        this.router = router;
        this.teachers = new Array();
        this.teachersChangeDetected = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.students = new Array();
        this.studentsChangeDetected = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.remarkoptionChangeDetected = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.schoolyearFilterUpdated = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.csChangeDetected = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.remarksSaved = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.remarkDeleted = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.filteredRemarksArrived = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.HTMLTextLoaded = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.classSchoolyearsLoaded = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.schoolInfoUpdated = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.adminCreated = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.adminConfirmed = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.studentPasswordUpdated = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.allRankingsLoaded = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.classRankingsLoaded = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.rankingSettingsLoaded = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.rankingSettingsUpdated = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.parentsLoaded = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.childLoaded = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.accountChanged = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.studentLoggedIn = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.loginFailed = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.passwordValid = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.schoolyears = new Array();
        this.classSchoolyears = new Array();
        this.currentSchoolyearId = 1;
        this.language = "nl";
        this.parsedCsv = [];
        this.locator = function (p, id) { return p.id == id; };
        // );
        // this.dataSource.getTeachers().subscribe(
        //     data => {
        //         this.teachers = data;
        //         this.teachersChangeDetected.next("teachers loaded");
        //     },
        //     error => {
        //         this.loginFailed.next("login failed");
        //     }
        // );
    }
    Model.prototype.ngOnInit = function () {
        var _this = this;
        //       this.HTMLText = JSON.parse(localStorage.getItem('multiLangText'));
        this.HTMLTextLoaded.subscribe(function (data) {
            _this.HTMLText = JSON.parse(localStorage.getItem('multiLangText'));
        });
    };
    //----------------------------------------------------- START OF TEACHER METHODS -----------------------------------------------
    Model.prototype.getTeachersFromRAM = function () {
        return this.teachers;
    };
    Model.prototype.getTeachers = function () {
        var _this = this;
        this.dataSource.getTeachers().subscribe(function (data) {
            _this.teachers = data;
            //this.messageService.reportMessage(new Message("Teachers loaded successfully.",false));
            localStorage.setItem('teachers', JSON.stringify(_this.teachers));
            _this.teachersChangeDetected.next(data);
            // console.log(this.teachers.length + " teachers in repository: " + this.teachers);
            // console.log(data.length + " data in repository: " + data);
        }, function (error) {
            _this.handleError(error, _this.HTMLText[50]);
            // this.messageService.reportMessage(new Message(this.HTMLText[50], true));
        });
        return this.teachers;
    };
    Model.prototype.getTeacher = function (id) {
        var _this = this;
        return this.teachers.find(function (p) { return _this.locator(p, id); });
    };
    Model.prototype.signUpTeacher = function (signup) {
        var _this = this;
        console.log("entering signUpTeacher in model");
        this.dataSource.saveTeacher(signup).subscribe(function (p) {
            _this.HTMLText = JSON.parse(localStorage.getItem('multiLangText'));
            _this.messageService.reportMessage(new _messages_message_model__WEBPACK_IMPORTED_MODULE_5__["Message"](_this.HTMLText[51] + " " + signup.firstName + " " + signup.lastName + " " + _this.HTMLText[61], false));
            console.log("Callback after signup user with name: " + p.firstName + " " + p.lastName);
            // this.teachersChangeDetected.next("Change detected");
            _this.getTeachers();
        }, function (error) {
            _this.handleError(error, _this.HTMLText[52]);
            // this.messageService.reportMessage(new Message(this.HTMLText[52] , true)) 
        });
    };
    Model.prototype.signUpTeachers = function (signups) {
        var _this = this;
        this.dataSource.saveTeachers(signups).subscribe(function (p) {
            _this.messageService.reportMessage(new _messages_message_model__WEBPACK_IMPORTED_MODULE_5__["Message"](signups.length + _this.HTMLText[53], false));
            _this.getTeachers();
            console.log("Callback after signing up " + signups.length + " users");
        }, function (error) {
            _this.handleError(error, _this.HTMLText[54]);
            // this.messageService.reportMessage(new Message(this.HTMLText[54] , true))
        });
    };
    Model.prototype.updateTeacherInfo = function (teacher) {
        var _this = this;
        this.dataSource.updateTeacherInfo(teacher).subscribe(function (p) {
            _this.messageService.reportMessage(new _messages_message_model__WEBPACK_IMPORTED_MODULE_5__["Message"](_this.HTMLText[55] + " " + teacher.firstName + " " + teacher.lastName + " updated.", false));
            _this.getTeachers();
            console.log("Callback after signing up " + teacher.lastName);
        }, function (error) {
            _this.getTeachers();
            _this.handleError(error, _this.HTMLText[56]);
            // this.messageService.reportMessage(new Message(this.HTMLText[56] , true));
        });
    };
    Model.prototype.updateTeacherPassword = function (editPasswordForm) {
        var _this = this;
        this.dataSource.updateTeacherPassword(editPasswordForm).subscribe(function (p) {
            _this.messageService.reportMessage(new _messages_message_model__WEBPACK_IMPORTED_MODULE_5__["Message"](_this.HTMLText[57], false));
            _this.getTeachers();
            console.log("Callback after changing password. ");
        }, function (error) {
            _this.handleError(error, _this.HTMLText[58]);
            // this.messageService.reportMessage(new Message(this.HTMLText[58] , true))
        });
    };
    Model.prototype.deleteTeacher = function (id) {
        var _this = this;
        this.dataSource.deleteTeacher(id).subscribe(function (p) {
            _this.messageService.reportMessage(new _messages_message_model__WEBPACK_IMPORTED_MODULE_5__["Message"](_this.HTMLText[59], false));
            _this.getTeachers();
            console.log("Callback after delete teacher for id: " + p.id);
        }, function (error) {
            _this.handleError(error, _this.HTMLText[60]);
            // this.messageService.reportMessage(new Message(this.HTMLText[60] , true));
            console.log(error);
        });
    };
    //--------------------------------------- END OF TEACHER METHODS -----------------------------------------------------------------
    //--------------------------------------- START OF PARENTS METHODS -----------------------------------------------------------------
    Model.prototype.getParents = function () {
        var _this = this;
        var infos;
        this.dataSource.getParents().subscribe(function (data) {
            // console.log(data);
            localStorage.setItem('parents', JSON.stringify(data));
            _this.parentsLoaded.next(data);
            return data;
        }, function (error) {
            _this.handleError(error, _this.HTMLText[164]);
        });
        return infos;
    };
    Model.prototype.getChildByParentId = function (parentId) {
        var _this = this;
        console.log("entering getChildByParentId " + parentId);
        this.dataSource.getChildByParentId(parentId).subscribe(function (data) {
            console.log("child data");
            console.log(data);
            localStorage.setItem('child', JSON.stringify(data));
            _this.childLoaded.next(data);
        }, function (error) {
            console.log("error getting child");
        });
    };
    Model.prototype.createParentAccountsForStudent = function (parent, studentid) {
        var _this = this;
        this.dataSource.createParentAccountsForStudent(parent, studentid).subscribe(function (data) {
            console.log("parent account is created");
            console.log(data);
            _this.accountChanged.next();
        }, function (error) {
            console.log("ERROR: parent account was not created");
            console.log(error);
        });
    };
    Model.prototype.updateParentPassword = function (editPasswordForm) {
        var _this = this;
        this.dataSource.updateStudentPassword(editPasswordForm).subscribe(function (p) {
            _this.studentPasswordUpdated.next(true);
            _this.messageService.reportMessage(new _messages_message_model__WEBPACK_IMPORTED_MODULE_5__["Message"](_this.HTMLText[69], false));
            console.log("Callback after changing password. ");
            _this.accountChanged.next();
        }, function (error) {
            _this.studentPasswordUpdated.next(false);
            _this.handleError(error, _this.HTMLText[73]);
            // this.messageService.reportMessage(new Message(this.HTMLText[73], true));
        });
    };
    //----------------------------------------------------- END OF PARENTS METHODS -----------------------------------------------
    //----------------------------------------------------- START OF STUDENT METHODS -----------------------------------------------
    Model.prototype.getStudentsFromRAM = function () {
        return this.students;
    };
    Model.prototype.getStudents = function () {
        var _this = this;
        this.dataSource.getStudents().subscribe(function (data) {
            _this.students = data;
            _this.students.sort(_this.sortByclass);
            //this.messageService.reportMessage(new Message("Teachers loaded successfully.",false));
            localStorage.setItem('students', JSON.stringify(_this.students));
            _this.studentsChangeDetected.next(data);
            // console.log(this.teachers.length + " teachers in repository: " + this.teachers);
            // console.log(data.length + " data in repository: " + data);
        }, function (error) {
            _this.handleError(error, _this.HTMLText[62]);
            // this.messageService.reportMessage(new Message(this.HTMLText[62], true))
            _this.loginFailed.next("login failed");
        });
        return this.students;
    };
    Model.prototype.sortByclass = function (stud1, stud2) {
        if (stud1.classSchoolyears[0].schoolClass == stud2.classSchoolyears[0].schoolClass) {
            if (stud1.lastName < stud2.lastName) {
                return -1;
            }
            else
                return 1;
        }
        if (stud1.classSchoolyears[0].schoolClass > stud2.classSchoolyears[0].schoolClass) {
            return 1;
        }
        if (stud1.classSchoolyears[0].schoolClass < stud2.classSchoolyears[0].schoolClass) {
            return -1;
        }
    };
    Model.prototype.getStudent = function (id) {
        var _this = this;
        return this.students.find(function (p) { return _this.locator(p, id); });
    };
    // getStudent(id: number): Student {
    //     for(var i=0; i<this.students.length; i++){
    //         if(this.students[i].id = id){
    //             return this.students[i];
    //         }
    //     }
    //     return null;
    // }
    Model.prototype.signUpStudent = function (signup) {
        var _this = this;
        this.dataSource.saveStudent(signup).subscribe(function (p) {
            _this.HTMLText = JSON.parse(localStorage.getItem('multiLangText'));
            _this.messageService.reportMessage(new _messages_message_model__WEBPACK_IMPORTED_MODULE_5__["Message"](_this.HTMLText[63] + " " + signup.firstName + " " + signup.lastName + _this.HTMLText[61], false));
            console.log("Callback after signup user with name: " + p.firstName + " " + p.lastName);
            // this.teachersChangeDetected.next("Change detected");
            _this.getStudents();
        }, function (error) {
            _this.handleError(error, _this.HTMLText[64] + error.error.text);
            // this.messageService.reportMessage(new Message(this.HTMLText[64] + error.error.text, true)) ;
            console.log("Error in signUpStudent: ");
            console.log("Network Error: " + error.statusText + " " + error.status);
            console.log(error);
        });
    };
    Model.prototype.signUpStudentNoGetStudents = function (signup) {
        var _this = this;
        this.dataSource.saveStudent(signup).subscribe(function (p) {
            _this.HTMLText = JSON.parse(localStorage.getItem('multiLangText'));
            _this.messageService.reportMessage(new _messages_message_model__WEBPACK_IMPORTED_MODULE_5__["Message"](_this.HTMLText[63] + signup.firstName + " " + signup.lastName + _this.HTMLText[61], false));
            console.log("Callback after signup user with name: " + p.firstName + " " + p.lastName);
            // this.teachersChangeDetected.next("Change detected");
            // this.getStudents();
        }, function (error) {
            _this.handleError(error, _this.HTMLText[64] + error.error.text);
            // this.messageService.reportMessage(new Message(this.HTMLText[64] + error.error.text, true)) ;
            console.log("Error in signUpStudent: ");
            console.log("Network Error: " + error.statusText + " " + error.status);
            console.log(error);
        });
    };
    Model.prototype.signUpStudents = function (signups) {
        var _this = this;
        this.dataSource.saveStudents(signups).subscribe(function (p) {
            _this.messageService.reportMessage(new _messages_message_model__WEBPACK_IMPORTED_MODULE_5__["Message"](signups.length + _this.HTMLText[65], false));
            _this.getStudents();
            console.log("Callback after signing up " + signups.length + " users");
            console.log(p);
        }, function (error) {
            _this.handleError(error, _this.HTMLText[66] + error.error.text);
            console.log("Error in signUpStudents: ");
            console.log("Network Error: " + error.statusText + " " + error.status);
            console.log(error);
            // this.messageService.reportMessage(new Message(this.HTMLText[66] + error.error.text, true));
        });
    };
    Model.prototype.updateStudent = function (student) {
        var _this = this;
        this.dataSource.updateStudent(student).subscribe(function (p) {
            _this.messageService.reportMessage(new _messages_message_model__WEBPACK_IMPORTED_MODULE_5__["Message"](_this.HTMLText[67] + student.firstName + " " + student.lastName + _this.HTMLText[68], false));
            _this.getStudents();
            console.log("Callback after updating " + student.lastName);
        }, function (error) {
            _this.handleError(error, _this.HTMLText[71]);
            // this.messageService.reportMessage(new Message(this.HTMLText[71], true));
        });
    };
    Model.prototype.updateStudentInfo = function (student) {
        var _this = this;
        this.dataSource.updateStudentInfo(student).subscribe(function (p) {
            _this.messageService.reportMessage(new _messages_message_model__WEBPACK_IMPORTED_MODULE_5__["Message"](_this.HTMLText[67] + student.firstName + " " + student.lastName + _this.HTMLText[68], false));
            _this.getStudents();
            console.log("Callback after signing up " + student.lastName);
        }, function (error) {
            _this.handleError(error, _this.HTMLText[72]);
            _this.getStudents();
            // this.messageService.reportMessage(new Message(this.HTMLText[72], true))
        });
    };
    Model.prototype.updateStudentPassword = function (editPasswordForm) {
        var _this = this;
        this.dataSource.updateStudentPassword(editPasswordForm).subscribe(function (p) {
            _this.studentPasswordUpdated.next(true);
            _this.messageService.reportMessage(new _messages_message_model__WEBPACK_IMPORTED_MODULE_5__["Message"](_this.HTMLText[69], false));
            //Only get students if user is no admin or teacher
            if (JSON.parse(localStorage.getItem('currentUser')).roles[0].id > 2) {
                _this.getStudents();
            }
            console.log("Callback after changing password. ");
        }, function (error) {
            _this.studentPasswordUpdated.next(false);
            _this.handleError(error, _this.HTMLText[73]);
            // this.messageService.reportMessage(new Message(this.HTMLText[73], true));
        });
    };
    Model.prototype.deleteStudent = function (id) {
        var _this = this;
        this.dataSource.deleteStudent(id).subscribe(function (p) {
            _this.messageService.reportMessage(new _messages_message_model__WEBPACK_IMPORTED_MODULE_5__["Message"](_this.HTMLText[70], false));
            _this.getStudents();
            console.log("Callback after delete student for id: " + p.id);
        }, function (error) {
            _this.handleError(error, _this.HTMLText[74]);
            // this.messageService.reportMessage(new Message(this.HTMLText[74], true));
            console.log(error);
        });
    };
    //--------------------------------------- END OF STUDENT METHODS -----------------------------------------------------------------
    //--------------------------------------- START OF SCHOOLYEAR METHODS -----------------------------------------------------------------
    Model.prototype.getSchoolyears = function () {
        var _this = this;
        this.dataSource.getSchoolyears().subscribe(function (data) {
            _this.schoolyears = data;
            localStorage.setItem('schoolyears', JSON.stringify(_this.schoolyears));
            return _this.schoolyears;
        }, function (error) {
            _this.handleError(error, _this.HTMLText[75]);
            // this.messageService.reportMessage(new Message(this.HTMLText[75], true))
            _this.loginFailed.next("login failed");
        });
        return this.schoolyears;
    };
    Model.prototype.getSchoolyearsFromRAM = function () {
        return this.schoolyears;
    };
    Model.prototype.getClassSchoolyearsFromRAM = function () {
        return this.classSchoolyears;
    };
    //--------------------------------------- END OF SCHOOLYEAR METHODS -----------------------------------------------------------------
    //--------------------------------------- START OF CLASSSCHOOLYEAR METHODS -----------------------------------------------------------------
    Model.prototype.getClassSchoolyearsBySchoolyear = function () {
        var _this = this;
        var currentCSid = JSON.parse(localStorage.getItem('currentSchoolyearId'));
        // this.dataSource.getClassSchoolyearBySchoolyear(this.currentSchoolyearId).subscribe(
        this.dataSource.getClassSchoolyearBySchoolyear(currentCSid).subscribe(function (data) {
            _this.classSchoolyears = data;
            localStorage.setItem('classSchoolyears', JSON.stringify(data));
            _this.classSchoolyearsLoaded.next(data);
            //            return this.classSchoolyears;
        }, function (error) {
            _this.handleError(error, _this.HTMLText[76]);
            // this.messageService.reportMessage(new Message(this.HTMLText[76], true));
            console.log(error);
        });
        return this.classSchoolyears;
    };
    Model.prototype.addClassSchoolyear = function (cs) {
        var _this = this;
        this.dataSource.addClassSchoolyear(cs).subscribe(function (data) {
            _this.getClassSchoolyearsBySchoolyear();
            _this.messageService.reportMessage(new _messages_message_model__WEBPACK_IMPORTED_MODULE_5__["Message"]("Class added", false));
            return data;
        }, function (error) {
            _this.messageService.reportMessage(new _messages_message_model__WEBPACK_IMPORTED_MODULE_5__["Message"]("Error adding class", true));
            console.log("error adding classschoolyear");
        });
    };
    Model.prototype.editClassSchoolyear = function (cs) {
        var _this = this;
        this.dataSource.editClassSchoolyear(cs).subscribe(function (data) {
            _this.getClassSchoolyearsBySchoolyear();
            _this.messageService.reportMessage(new _messages_message_model__WEBPACK_IMPORTED_MODULE_5__["Message"]("Class updated", false));
            return data;
        }, function (error) {
            _this.messageService.reportMessage(new _messages_message_model__WEBPACK_IMPORTED_MODULE_5__["Message"]("Error updating class", true));
            console.log("error adding classschoolyear");
        });
    };
    Model.prototype.deleteClassSchoolyear = function (csId) {
        var _this = this;
        this.dataSource.deleteClassSchoolyear(csId).subscribe(function (data) {
            _this.getClassSchoolyearsBySchoolyear();
            _this.messageService.reportMessage(new _messages_message_model__WEBPACK_IMPORTED_MODULE_5__["Message"]("Class deleted", false));
            return data;
        }, function (error) {
            _this.messageService.reportMessage(new _messages_message_model__WEBPACK_IMPORTED_MODULE_5__["Message"]("Error deleting class", true));
            console.log("error adding classschoolyear");
        });
    };
    //--------------------------------------- END OF CLASSSCHOOLYEAR METHODS -----------------------------------------------------------------
    //--------------------------------------- START OF SCHOOL METHODS -----------------------------------------------------------------
    Model.prototype.getCurrentSchool = function (externalcode) {
        var _this = this;
        this.dataSource.getSchoolInfoByExternalCode(externalcode).subscribe(function (data) {
            _this.currentSchool = data;
            console.log(_this.currentSchool);
            return _this.currentSchool;
        }, function (error) {
            _this.handleError(error, _this.HTMLText[77]);
            // this.messageService.reportMessage(new Message(this.HTMLText[77], true))
            _this.loginFailed.next("login failed");
        });
        return this.currentSchool;
    };
    Model.prototype.getCurrentSchoolFromRAM = function () {
        return this.currentSchool;
    };
    Model.prototype.updateSchoolLanguage = function (language, schoolId) {
        var _this = this;
        this.dataSource.updateSchoolLanguage(language, schoolId).subscribe(function (data) {
            _this.currentSchool = data;
            localStorage.setItem('currentSchool', JSON.stringify(_this.currentSchool));
            localStorage.setItem('language', data.language.toString());
            _this.messageService.reportMessage(new _messages_message_model__WEBPACK_IMPORTED_MODULE_5__["Message"](_this.HTMLText[80], false));
            return _this.currentSchool;
        }, function (error) {
            _this.handleError(error, _this.HTMLText[78]);
            // this.messageService.reportMessage(new Message(this.HTMLText[78],true));
        });
        return this.currentSchool;
    };
    Model.prototype.updateSchoolyearfilter = function (filter, schoolId) {
        var _this = this;
        this.dataSource.updateSchoolyearfilter(filter, schoolId).subscribe(function (data) {
            _this.currentSchool = data;
            localStorage.setItem('currentSchool', JSON.stringify(_this.currentSchool));
            localStorage.setItem('currentSchoolyearId', data.schoolyear_filter.toString());
            _this.schoolyearFilterUpdated.next("updated");
            _this.messageService.reportMessage(new _messages_message_model__WEBPACK_IMPORTED_MODULE_5__["Message"](_this.HTMLText[80], false));
            return _this.currentSchool;
        }, function (error) {
            _this.handleError(error, _this.HTMLText[79]);
            // this.messageService.reportMessage(new Message(this.HTMLText[79],true));
        });
        return this.currentSchool;
    };
    //--------------------------------------- END OF SCHOOL METHODS -----------------------------------------------------------------
    //--------------------------------------- START OF LOGIN METHODS -----------------------------------------------------------------
    Model.prototype.login = function (username, password, schoolcodeexternal) {
        var _this = this;
        localStorage.clear();
        // this.dataSource.getSchoolInfoByExternalCode(schoolcodeexternal).subscribe(
        //this.dataSource.getSchoolInfoByExternalCode(schoolcodeexternal).subscribe(
        console.log('first login');
        this.dataSource.login(username, password, 'msninove').subscribe(function (data) {
            console.log('first login');
            // this.currentSchool = data;
            // console.log(this.currentSchool);
            // localStorage.setItem('currentSchool',JSON.stringify(this.currentSchool));
            // // this.dataSource.setSchoolcodeInternal(this.currentSchool.schoolcodeInternal);
            // this.currentSchoolyearId = this.currentSchool.schoolyear_filter;
            // localStorage.setItem('currentSchoolyearId',this.currentSchoolyearId.toString());
            // this.language = this.currentSchool.language;
            // localStorage.setItem('language',this.language);
            // localStorage.setItem('schoolcode',this.currentSchool.schoolcodeExternal);
            // this.getLanguageText(this.language);
            _this.dataSource.login(username, password, 'msninove').subscribe(function (data1) {
                _this.accessToken = data1.accessToken;
                localStorage.setItem('accessToken', _this.accessToken);
                localStorage.setItem('username', username);
                console.log(_this.accessToken);
                _this.getRankingSettings();
                // this.getLanguageText(this.language);
                // this.getStudents();
                // //ONLY LOAD TEACHERS IF USER IS ADMIN -> happens in getUser method
                // // this.getTeachers();
                // this.getSchoolyears();
                // this.getClassSchoolyears();
                // this.getRemarkOptions();
                // this.getUser(username);
                _this.getUser(username);
                //                    this.messageService.reportMessage(new Message("Hi, " + " you are logged in.",false));
            }, function (error) {
                _this.messageService.reportMessage(new _messages_message_model__WEBPACK_IMPORTED_MODULE_5__["Message"](_this.HTMLText[81], true));
                _this.loginFailed.next("login failed");
            });
        }, function (error) {
            //           this.messageService.reportMessage(new Message("Error getting current school",true));
            _this.messageService.reportMessage(new _messages_message_model__WEBPACK_IMPORTED_MODULE_5__["Message"](_this.HTMLText[81], true));
            console.log(error);
            _this.loginFailed.next("login failed");
        });
    };
    Model.prototype.getUser = function (username) {
        var _this = this;
        this.dataSource.getUserByUsername(username).subscribe(function (data) {
            localStorage.setItem('currentUser', JSON.stringify(data));
            //ONLY LOAD TEACHERS IF USER IS ADMIN
            // if(JSON.parse(localStorage.getItem('currentUser')).roles[0].id == 4){
            //     this.getTeachers();
            // }
            console.log("User set in localStorage.");
            console.log(localStorage.getItem('currentUser'));
            //If it is a parent logging in, set the username of his/her child in localStorage
            if (JSON.parse(localStorage.getItem('currentUser')).roles[0].id == 2) {
                _this.getChildByParentId(JSON.parse(localStorage.getItem('currentUser')).id);
            }
            //           localStorage.getItem('currentUser');
            //TEST IF USER IS ACTIVE --> DOING THIS CLIENT SIDE IS UNSAFE, since user might change false to true on client!!           
            if (JSON.parse(localStorage.getItem('currentUser')).active == false) {
                _this.loginFailed.next("login failed");
            }
            else {
                //ONLY LOAD IF USER IS TEACHER OR ADMIN
                console.log(JSON.parse(localStorage.getItem('currentUser')).roles[0].id);
                if (JSON.parse(localStorage.getItem('currentUser')).roles[0].id > 2) {
                    console.log(JSON.parse(localStorage.getItem('currentUser')).roles[0].id);
                    _this.getStudents();
                    _this.getSchoolyears();
                    _this.getClassSchoolyearsBySchoolyear();
                    _this.getRemarkOptions();
                    // this.getRankingSettings(); //Moved one level up for students also
                }
                //ONLY LOAD TEACHERS IF USER IS ADMIN
                if (JSON.parse(localStorage.getItem('currentUser')).roles[0].id == 4) {
                    _this.getTeachers();
                    _this.getParents();
                }
                _this.messageService.reportMessage(new _messages_message_model__WEBPACK_IMPORTED_MODULE_5__["Message"](_this.HTMLText[82] + JSON.parse(localStorage.getItem('currentUser')).firstName + _this.HTMLText[83], false));
                _this.studentLoggedIn.next("Logged in user stored.");
                // this.router.navigate(['overview']);
            }
        }, function (error) {
            //            this.messageService.reportMessage(new Message("Error getting user",true));
            console.log("error in getting user");
            console.log(error);
            _this.loginFailed.next("login failed");
        });
    };
    //--------------------------------------- END OF LOGIN METHODS -----------------------------------------------------------------
    //--------------------------------------- START OF REMARKOPTIONS METHODS -----------------------------------------------------------------
    Model.prototype.getRemarkOptions = function () {
        var _this = this;
        this.dataSource.getRemarkoptions().subscribe(function (data) {
            localStorage.setItem('remarkoptions', JSON.stringify(data));
            _this.remarkoptionChangeDetected.next('remarkoptions changed');
        }, function (error) {
            _this.handleError(error, _this.HTMLText[84]);
            // this.messageService.reportMessage(new Message(this.HTMLText[84], true))
            _this.loginFailed.next("login failed");
        });
    };
    Model.prototype.addRemarkoption = function (remarkoption) {
        var _this = this;
        this.dataSource.addRemarkoption(remarkoption).subscribe(function (data) {
            _this.messageService.reportMessage(new _messages_message_model__WEBPACK_IMPORTED_MODULE_5__["Message"](_this.HTMLText[85], false));
            _this.getRemarkOptions();
        }, function (error) {
            _this.handleError(error, _this.HTMLText[86]);
            // this.messageService.reportMessage(new Message(this.HTMLText[86],true));
        });
    };
    Model.prototype.editRemarkoption = function (remarkoption) {
        var _this = this;
        this.dataSource.editRemarkoption(remarkoption).subscribe(function (data) {
            _this.messageService.reportMessage(new _messages_message_model__WEBPACK_IMPORTED_MODULE_5__["Message"](_this.HTMLText[87], false));
            _this.getRemarkOptions();
        }, function (error) {
            _this.handleError(error, _this.HTMLText[88]);
            // this.messageService.reportMessage(new Message(this.HTMLText[88],true));
        });
    };
    Model.prototype.deleteRemarkoption = function (remarkoption) {
        var _this = this;
        this.dataSource.deleteRemarkoption(remarkoption).subscribe(function (data) {
            _this.messageService.reportMessage(new _messages_message_model__WEBPACK_IMPORTED_MODULE_5__["Message"](_this.HTMLText[89], false));
            _this.getRemarkOptions();
        }, function (error) {
            _this.handleError(error, _this.HTMLText[90]);
            // this.messageService.reportMessage(new Message(this.HTMLText[90],true));
        });
    };
    //--------------------------------------- END OF REMARKOPTIONS METHODS -----------------------------------------------------------------
    //--------------------------------------- START OF PASSWORDFORGOT METHODS -----------------------------------------------------------------
    Model.prototype.forgotpassword1 = function (email, schoolcodeexternal) {
        var _this = this;
        localStorage.clear();
        localStorage.setItem("NoSuchUserError", "0");
        localStorage.setItem("NoSuchSchoolcode", "0");
        this.dataSource.getSchoolInfoByExternalCode(schoolcodeexternal).subscribe(function (data) {
            if (data != null) {
                _this.currentSchool = data;
                console.log(_this.currentSchool);
                localStorage.setItem('currentSchool', JSON.stringify(_this.currentSchool));
                _this.dataSource.forgotpassword1(email).subscribe(function (data) {
                    _this.messageService.reportMessage(new _messages_message_model__WEBPACK_IMPORTED_MODULE_5__["Message"](_this.HTMLText[152], false));
                }, function (error) {
                    console.log(error.error.text);
                    // if(error.error.text == "MailError"){
                    //     localStorage.setItem('MailError',"1");
                    //     this.messageService.reportMessage(new Message("Fout bij het versturen van de mail.", true));
                    // }
                    // if(error.error.text == "NoSuchUserError"){
                    //     localStorage.setItem("NoSuchUserError","1");
                    //     this.messageService.reportMessage(new Message("Er werd geen gebruiker met dit e-mailadres gevonden.", true));
                    // }
                    _this.handleError(error, "Oops, something went wrong! Please try again.");
                    // this.messageService.reportMessage(new Message(error.error, true));
                });
            }
            else {
                // localStorage.setItem("NoSuchSchoolcode","1");
                _this.messageService.reportMessage(new _messages_message_model__WEBPACK_IMPORTED_MODULE_5__["Message"](_this.HTMLText[150], true));
                // this.handleError("NoSuchSchoolcode","");
            }
        }, function (error) {
            _this.messageService.reportMessage(new _messages_message_model__WEBPACK_IMPORTED_MODULE_5__["Message"](_this.HTMLText[151], true));
            console.log(error.error);
        });
    };
    Model.prototype.forgotpassword2 = function (code, schoolcode, newpw) {
        var _this = this;
        localStorage.clear();
        localStorage.setItem("NoSuchUserError", "0");
        localStorage.setItem("NoSuchSchoolcode", "0");
        this.dataSource.forgotpassword2(code, schoolcode, newpw).subscribe(function (data) {
            _this.messageService.reportMessage(new _messages_message_model__WEBPACK_IMPORTED_MODULE_5__["Message"]("Je wachtwoord is gewijzigd.", false));
        }, function (error) {
            console.log(error);
            _this.handleError(error, "Oops, something went wrong. Please try again.");
            // if(error.error.text == "NoSuchUserError"){
            //     localStorage.setItem("NoSuchUserError","1");
            //     this.messageService.reportMessage(new Message("Er werd geen gebruiker met dit e-mailadres gevonden.", true));
            // }
            // if(error.error.text == "NoSuchSchoolcode"){
            //     localStorage.setItem("NoSuchSchoolcode","1");
            //     this.messageService.reportMessage(new Message("Deze schoolcode werd niet gevonden.", true));
            // }
        });
    };
    //--------------------------------------- END OF PASSWORDFORGOT METHODS -----------------------------------------------------------------
    //--------------------------------------- START OF REMARK METHODS -----------------------------------------------------------------
    Model.prototype.saveRemarks = function (remarks) {
        var _this = this;
        this.dataSource.saveRemarks(remarks).subscribe(function (data) {
            if (!_this.HTMLText) {
                _this.HTMLText = JSON.parse(localStorage.getItem('multiLangText'));
            }
            _this.messageService.reportMessage(new _messages_message_model__WEBPACK_IMPORTED_MODULE_5__["Message"](remarks.studentId.length + " " + _this.HTMLText[91], false));
            _this.remarksSaved.next('remarks saved');
            console.log("remarks saved.");
        }, function (error) {
            _this.handleError(error, _this.HTMLText[92]);
            // this.messageService.reportMessage(new Message(this.HTMLText[92],true));
            console.log("error saving remarks");
        });
    };
    Model.prototype.getFilteredRemarks = function (remarksFilter) {
        var _this = this;
        this.dataSource.getFilteredRemarks(remarksFilter).subscribe(function (data) {
            _this.filteredRemarks = data;
            _this.filteredRemarksArrived.next(data);
        }, function (error) {
            console.log(error.error.error);
            console.log("error getting filtered remarks.");
            _this.handleError(error, "error getting filtered remarks");
        });
    };
    Model.prototype.getStudentsOwnFilteredRemarks = function (remarksFilter) {
        var _this = this;
        this.dataSource.getStudentsOwnFilteredRemarks(remarksFilter).subscribe(function (data) {
            _this.filteredRemarks = data;
            _this.filteredRemarksArrived.next(data);
        }, function (error) {
            console.log(error.error.error);
            console.log("error getting filtered remarks.");
            _this.handleError(error, "error getting filtered remarks");
        });
    };
    Model.prototype.deleteRemark = function (remarkId) {
        var _this = this;
        this.dataSource.deleteRemark(remarkId).subscribe(function (data) {
            if (_this.HTMLText) {
                _this.messageService.reportMessage(new _messages_message_model__WEBPACK_IMPORTED_MODULE_5__["Message"](_this.HTMLText[89], false));
            }
            _this.remarkDeleted.next('remark deleted');
            console.log("remark deleted");
        }, function (error) {
            _this.handleError(error, _this.HTMLText[90]);
            // this.messageService.reportMessage(new Message(this.HTMLText[90],true));
            console.log("error deleting remark");
            console.log(error);
        });
    };
    //--------------------------------------- END OF REMARK METHODS -----------------------------------------------------------------
    //--------------------------------------- START OF PASSWORD METHODS -----------------------------------------------------------------
    Model.prototype.validatePassword = function (editPasswordForm) {
        var _this = this;
        console.log("entering validatePassword");
        console.log(editPasswordForm);
        this.dataSource.validatePassword(editPasswordForm).subscribe(function (data) {
            console.log("data in succes validatePassword in model: ");
            console.log(data);
            console.log(editPasswordForm);
            _this.passwordValid.next(true);
            // this.passwordValid.next(data);
            //            return true;
        }, function (error) {
            console.log("data in error validatePassword in model with error: ");
            console.log(editPasswordForm);
            _this.messageService.reportMessage(new _messages_message_model__WEBPACK_IMPORTED_MODULE_5__["Message"](_this.HTMLText[93], true));
            _this.passwordValid.next(false);
            //            return false;
        });
        //    return false;
    };
    //--------------------------------------- END OF PASSWORD METHODS -----------------------------------------------------------------
    //--------------------------------------- START OF MULTILANGUAGE METHODS -----------------------------------------------------------------
    Model.prototype.getLanguageText = function (langcode) {
        var _this = this;
        this.dataSource.getLanguageText(langcode).subscribe(function (data) {
            localStorage.setItem('multiLangText', JSON.stringify(data));
            _this.HTMLText = JSON.parse(localStorage.getItem('multiLangText'));
            // console.log(data);
            _this.HTMLTextLoaded.next(data);
        }, function (error) {
            _this.messageService.reportMessage(new _messages_message_model__WEBPACK_IMPORTED_MODULE_5__["Message"](_this.HTMLText[94], true));
            _this.loginFailed.next("login failed");
        });
    };
    //--------------------------------------- END OF MULTILANGUAGE METHODS -----------------------------------------------------------------
    //--------------------------------------- START OF SIGNUP SCHOOL METHODS -----------------------------------------------------------------
    Model.prototype.updateSchoolInfo = function (signupSchool) {
        var _this = this;
        this.dataSource.updateSchoolInfo(signupSchool).subscribe(function (data) {
            console.log(data);
            _this.schoolInfoUpdated.next(data);
        }, function (error) {
            console.log(error.error);
        });
    };
    Model.prototype.confirmadmin = function (admin, confirmationuid, schoolcodeInternal) {
        var _this = this;
        this.dataSource.confirmadmin(admin, confirmationuid, schoolcodeInternal).subscribe(function (data) {
            console.log(data);
            _this.adminCreated.next(data);
        }, function (error) {
            console.log(error);
        });
    };
    Model.prototype.confirmadmin2 = function (schoolcodeInternal, confirmationuid) {
        var _this = this;
        this.dataSource.confirmadmin2(schoolcodeInternal, confirmationuid).subscribe(function (data) {
            console.log(data);
            _this.adminConfirmed.next(data);
        }, function (error) {
            _this.messageService.reportMessage(new _messages_message_model__WEBPACK_IMPORTED_MODULE_5__["Message"]("Oops! It seems like something went wrong. \nPlease contact our helpdesk.", true));
            console.log(error);
            _this.adminConfirmed.next(error.error);
        });
    };
    //--------------------------------------- END OF SIGNUP SCHOOL METHODS -----------------------------------------------------------------
    //--------------------------------------- START OF RANKING METHODS -----------------------------------------------------------------
    Model.prototype.updateRanking = function () {
        this.dataSource.updateRanking().subscribe(function (data) {
            console.log("Rankings updated!");
        }, function (error) {
            console.log("ERROR updating rankings");
        });
    };
    Model.prototype.getAllRankings = function () {
        var _this = this;
        this.dataSource.getAllRankings().subscribe(function (data) {
            console.log("All rankings loaded");
            _this.allRankingsLoaded.next(data);
        }, function (error) {
            console.log("Error loading all rankings");
            _this.messageService.reportMessage(new _messages_message_model__WEBPACK_IMPORTED_MODULE_5__["Message"]("Error loading all ranking", true));
        });
    };
    Model.prototype.getRankingsSortedByClass = function () {
        var _this = this;
        this.dataSource.getRankingsSortedByClass().subscribe(function (data) {
            console.log("All rankings sorted by class loaded");
            _this.allRankingsLoaded.next(data);
        }, function (error) {
            console.log("Error loading all rankings");
            _this.messageService.reportMessage(new _messages_message_model__WEBPACK_IMPORTED_MODULE_5__["Message"]("Error loading all rankings ordered by class", true));
        });
    };
    Model.prototype.getClassRankings = function (classId) {
        var _this = this;
        this.dataSource.getClassRankings(classId).subscribe(function (data) {
            console.log("Class rankings loaded");
            _this.rankingSettingsLoaded.next(data);
            //this.classRankingsLoaded.next(data);
        }, function (error) {
            console.log("Error loading class rankings");
            _this.messageService.reportMessage(new _messages_message_model__WEBPACK_IMPORTED_MODULE_5__["Message"]("Error loading class ranking", true));
        });
    };
    Model.prototype.getRankingSettings = function () {
        var _this = this;
        this.dataSource.getRankingSettings().subscribe(function (data) {
            console.log("Rankingsettings loaded");
            localStorage.setItem("rankingSettings", JSON.stringify(data));
            //this.rankingSettingsLoaded.next(data);
            _this.classRankingsLoaded.next(data);
        }, function (error) {
            console.log("Error loading class rankings");
        });
    };
    Model.prototype.updateRankingSettings = function (settings) {
        var _this = this;
        this.dataSource.updateRankingSettings(settings).subscribe(function (data) {
            console.log("Rankingsettings updated");
            _this.rankingSettingsUpdated.next(data);
            localStorage.setItem("rankingSettings", JSON.stringify(data));
        }, function (error) {
            console.log("Error updating ranking settings");
        });
    };
    //--------------------------------------- END OF RANKING METHODS -----------------------------------------------------------------
    Model.prototype.handleError = function (error, message) {
        if (error.error.text == "MailError") {
            // localStorage.setItem('MailError',"1");
            this.messageService.reportMessage(new _messages_message_model__WEBPACK_IMPORTED_MODULE_5__["Message"]("Fout bij het versturen van de mail.", true));
        }
        if (error.error.text == "NoSuchUserError") {
            // localStorage.setItem("NoSuchUserError","1");
            this.messageService.reportMessage(new _messages_message_model__WEBPACK_IMPORTED_MODULE_5__["Message"]("Er werd geen gebruiker met dit e-mailadres gevonden.", true));
        }
        if (error.error.text == "NoSuchSchoolcode") {
            // localStorage.setItem("NoSuchSchoolcode","1");
            this.messageService.reportMessage(new _messages_message_model__WEBPACK_IMPORTED_MODULE_5__["Message"]("Deze schoolcode werd niet gevonden.", true));
        }
        if (error.error.error == "Unauthorized") {
            this.messageService.reportMessage(new _messages_message_model__WEBPACK_IMPORTED_MODULE_5__["Message"]("Oops! It seems like something went wrong. Please sign in to access this page.", true));
            this.router.navigate(['login']);
        }
        if (message != "") {
            this.messageService.reportMessage(new _messages_message_model__WEBPACK_IMPORTED_MODULE_5__["Message"](message, true));
        }
    };
    Model = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_rest_datasource__WEBPACK_IMPORTED_MODULE_2__["RestDataSource"],
            _messages_message_service__WEBPACK_IMPORTED_MODULE_4__["MessageService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]])
    ], Model);
    return Model;
}());



/***/ }),

/***/ "./src/app/model/rest.datasource.ts":
/*!******************************************!*\
  !*** ./src/app/model/rest.datasource.ts ***!
  \******************************************/
/*! exports provided: REST_URL, RestDataSource */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REST_URL", function() { return REST_URL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RestDataSource", function() { return RestDataSource; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! jwt-decode */ "./node_modules/jwt-decode/lib/index.js");
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(jwt_decode__WEBPACK_IMPORTED_MODULE_5__);





// import { MessageService } from '../messages/message.service';
// import { Message } from '../messages/message.model';

var REST_URL = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["InjectionToken"]("rest_url");
var RestDataSource = /** @class */ (function () {
    // private schoolcodeInternal: string; 
    function RestDataSource(http, url) {
        this.http = http;
        this.url = url;
    }
    // public setSchoolcodeInternal(schoolcode: string){
    //     this.schoolcodeInternal = schoolcode;
    // }
    //----------------------------------------------------- START OF USER METHODS ----------------------------------------------
    RestDataSource.prototype.getUserByUsername = function (username) {
        return this.sendRequest("GET", this.url + '/' + JSON.parse(localStorage.getItem('currentSchool')).schoolcodeInternal + '/user/username/' + username);
    };
    //----------------------------------------------------- END OF USER METHODS ----------------------------------------------
    //----------------------------------------------------- START OF TEACHER METHODS -----------------------------------------------
    RestDataSource.prototype.getTeachers = function () {
        return this.sendRequest("GET", this.url + '/' + JSON.parse(localStorage.getItem('currentSchool')).schoolcodeInternal + '/teachers');
    };
    RestDataSource.prototype.saveTeacher = function (teacher) {
        return this.sendRequest("POST", this.url + '/' + JSON.parse(localStorage.getItem('currentSchool')).schoolcodeInternal + '/user1', teacher);
    };
    RestDataSource.prototype.saveTeachers = function (teachers) {
        return this.sendRequests("POST", this.url + '/' + JSON.parse(localStorage.getItem('currentSchool')).schoolcodeInternal + '/users1', teachers);
    };
    RestDataSource.prototype.updateTeacherInfo = function (teacher) {
        return this.sendRequest("PUT", this.url + '/' + JSON.parse(localStorage.getItem('currentSchool')).schoolcodeInternal + '/updateuserinfo', teacher);
    };
    RestDataSource.prototype.updateTeacherPassword = function (editPasswordForm) {
        return this.sendRequest("PUT", this.url + '/' + JSON.parse(localStorage.getItem('currentSchool')).schoolcodeInternal + '/updateuserpassword', editPasswordForm);
    };
    RestDataSource.prototype.deleteTeacher = function (id) {
        return this.sendRequest("DELETE", this.url + '/' + JSON.parse(localStorage.getItem('currentSchool')).schoolcodeInternal + '/user/' + id);
    };
    //--------------------------------------- END OF TEACHER METHODS -----------------------------------------------------------------
    //--------------------------------------- START OF PARENTS METHODS -----------------------------------------------------------------
    RestDataSource.prototype.getParents = function () {
        var schoolyearfilter = JSON.parse(localStorage.getItem('currentSchool')).schoolyear_filter;
        return this.sendRequest("GET", this.url + '/' + JSON.parse(localStorage.getItem('currentSchool')).schoolcodeInternal + '/getParentsBySchoolyearAndCurrentClass/' + schoolyearfilter);
    };
    RestDataSource.prototype.createParentAccountsForStudent = function (parent, studentid) {
        return this.sendRequest("POST", this.url + '/' + JSON.parse(localStorage.getItem('currentSchool')).schoolcodeInternal + '/parent/' + studentid, parent);
    };
    RestDataSource.prototype.getChildByParentId = function (parentId) {
        return this.sendRequest("GET", this.url + '/' + JSON.parse(localStorage.getItem('currentSchool')).schoolcodeInternal + '/getUserByParentId/' + parentId);
    };
    //----------------------------------------------------- END OF PARENTS METHODS -----------------------------------------------
    //----------------------------------------------------- START OF STUDENT METHODS -----------------------------------------------
    RestDataSource.prototype.getStudents = function () {
        var schoolyearfilter = JSON.parse(localStorage.getItem('currentSchool')).schoolyear_filter;
        return this.sendRequest("GET", this.url + '/' + JSON.parse(localStorage.getItem('currentSchool')).schoolcodeInternal + '/getStudentsBySchoolyearAndCurrentClass/' + schoolyearfilter);
    };
    // getStudents(): Observable<Student[]> {
    //     return this.sendRequest<Student[]>("GET", this.url + '/' +  JSON.parse(localStorage.getItem('currentSchool')).schoolcodeInternal+'/students');
    // }
    RestDataSource.prototype.saveStudent = function (student) {
        return this.sendRequest("POST", this.url + '/' + JSON.parse(localStorage.getItem('currentSchool')).schoolcodeInternal + '/user1', student);
    };
    RestDataSource.prototype.saveStudents = function (students) {
        return this.sendRequests("POST", this.url + '/' + JSON.parse(localStorage.getItem('currentSchool')).schoolcodeInternal + '/users1', students);
    };
    RestDataSource.prototype.updateStudent = function (student) {
        return this.sendRequest("PUT", this.url + '/' + JSON.parse(localStorage.getItem('currentSchool')).schoolcodeInternal + '/update/user', student);
    };
    RestDataSource.prototype.updateStudentInfo = function (student) {
        return this.sendRequest("PUT", this.url + '/' + JSON.parse(localStorage.getItem('currentSchool')).schoolcodeInternal + '/updateuserinfo', student);
    };
    RestDataSource.prototype.updateStudentPassword = function (editPasswordForm) {
        return this.sendRequest("PUT", this.url + '/' + JSON.parse(localStorage.getItem('currentSchool')).schoolcodeInternal + '/updateuserpassword', editPasswordForm);
    };
    RestDataSource.prototype.deleteStudent = function (id) {
        return this.sendRequest("DELETE", this.url + '/' + JSON.parse(localStorage.getItem('currentSchool')).schoolcodeInternal + '/user/' + id);
    };
    RestDataSource.prototype.updateSchoolClass = function (student) {
        return this.sendRequest("PUT", this.url + '/' + JSON.parse(localStorage.getItem('currentSchool')).schoolcodeInternal + '/updateschoolclass', student);
    };
    //--------------------------------------- END OF STUDENT METHODS -----------------------------------------------------------------
    RestDataSource.prototype.getSchoolyears = function () {
        return this.sendRequest("GET", this.url + '/' + JSON.parse(localStorage.getItem('currentSchool')).schoolcodeInternal + '/getSchoolyears');
    };
    //--------------------------------------- START OF FORGOT PASSWROD METHODS -----------------------------------------------------------------
    RestDataSource.prototype.forgotpassword1 = function (email) {
        return this.sendRequest("POST", this.url + '/' + JSON.parse(localStorage.getItem('currentSchool')).schoolcodeInternal + '/forgotpassword1?email=' + email);
    };
    RestDataSource.prototype.forgotpassword2 = function (code, schoolcode, newpw) {
        console.log(this.url + '/' + schoolcode + '/forgotpassword2/' + code + '/' + newpw);
        return this.sendRequest("GET", this.url + '/' + schoolcode + '/forgotpassword2/' + code + '/' + newpw);
    };
    //--------------------------------------- END OF FORGOT PASSWROD METHODS -----------------------------------------------------------------
    //--------------------------------------- START OF RANKING METHODS -----------------------------------------------------------------
    RestDataSource.prototype.updateRanking = function () {
        return this.sendRequest("POST", this.url + '/' + JSON.parse(localStorage.getItem('currentSchool')).schoolcodeInternal + '/updateRanking');
    };
    RestDataSource.prototype.getAllRankings = function () {
        return this.sendRequest("GET", this.url + '/' + JSON.parse(localStorage.getItem('currentSchool')).schoolcodeInternal + '/allRankings');
    };
    RestDataSource.prototype.getRankingsSortedByClass = function () {
        return this.sendRequest("GET", this.url + '/' + JSON.parse(localStorage.getItem('currentSchool')).schoolcodeInternal + '/getRankingsSortedByClass');
    };
    RestDataSource.prototype.getClassRankings = function (classId) {
        return this.sendRequest("GET", this.url + '/' + JSON.parse(localStorage.getItem('currentSchool')).schoolcodeInternal + '/classRankings/' + classId);
    };
    RestDataSource.prototype.getRankingSettings = function () {
        return this.sendRequest("GET", this.url + '/' + JSON.parse(localStorage.getItem('currentSchool')).schoolcodeInternal + '/getRankingSettings');
    };
    RestDataSource.prototype.updateRankingSettings = function (settings) {
        return this.sendRequest("PUT", this.url + '/' + JSON.parse(localStorage.getItem('currentSchool')).schoolcodeInternal + '/updateRankingSettings', settings);
    };
    //--------------------------------------- END OF RANKING METHODS -----------------------------------------------------------------
    //--------------------------------------- START OF SCHOOL METHODS -----------------------------------------------------------------
    RestDataSource.prototype.getSchools = function () {
        return this.sendRequest("GET", this.url + '/schools' + '/schools');
    };
    RestDataSource.prototype.getSchoolInfoByExternalCode = function (externalcode) {
        return this.sendRequest("GET", this.url + '/schools' + '/getSchoolInfoByExternalCode/' + externalcode);
    };
    RestDataSource.prototype.updateSchoolLanguage = function (language, schoolId) {
        return this.sendRequest("PUT", this.url + '/schools/updatelanguage/' + language + '/' + schoolId);
    };
    RestDataSource.prototype.updateSchoolyearfilter = function (filter, schoolId) {
        return this.sendRequest("PUT", this.url + '/schools/updateschoolyearfilter/' + filter + '/' + schoolId);
    };
    //--------------------------------------- END OF SCHOOL METHODS -----------------------------------------------------------------
    //--------------------------------------- START OF LOGIN METHODS -----------------------------------------------------------------
    RestDataSource.prototype.getCSRFToken = function () {
        var requestOptions = {
            withCredentials: true
        };
        return this.http.get('http://msninove.restfulapi.test/sanctum/csrf-cookie', requestOptions);
    };
    RestDataSource.prototype.login = function (username, password, schoolcodeinternal) {
        var requestOptions = {
            withCredentials: true
        };
        return this.http.post('http://msninove.restfulapi.test/login', {
            "username": username,
            "password": password
        }, requestOptions);
        // return this.sendRequest<Loginresponse>("POST", 
        // 'msninove.restfulapi.test/login', // '' + schoolcodeinternal + '.' + this.url, 
        //     {
        //         "username": username,
        //         "password": password
        //     }
        // );
    };
    //--------------------------------------- END OF LOGIN METHODS -----------------------------------------------------------------
    //--------------------------------------- START OF REMARK METHODS -----------------------------------------------------------------
    RestDataSource.prototype.saveRemarks = function (remarks) {
        return this.sendRequest("POST", this.url + '/' + JSON.parse(localStorage.getItem('currentSchool')).schoolcodeInternal + '/remarks', remarks);
    };
    RestDataSource.prototype.getFilteredRemarks = function (remarkFilter) {
        return this.sendRequest("POST", this.url + '/' + JSON.parse(localStorage.getItem('currentSchool')).schoolcodeInternal + '/getFilteredRemarks', remarkFilter);
    };
    RestDataSource.prototype.getStudentsOwnFilteredRemarks = function (remarkFilter) {
        return this.sendRequest("POST", this.url + '/' + JSON.parse(localStorage.getItem('currentSchool')).schoolcodeInternal + '/getStudentsOwnFilteredRemarks', remarkFilter);
    };
    RestDataSource.prototype.deleteRemark = function (remarkId) {
        return this.sendRequest("DELETE", this.url + '/' + JSON.parse(localStorage.getItem('currentSchool')).schoolcodeInternal + '/remark/' + remarkId);
    };
    //--------------------------------------- END OF REMARK METHODS -----------------------------------------------------------------
    //--------------------------------------- START OF CLASSSCHOOLYEAR METHODS -----------------------------------------------------------------
    RestDataSource.prototype.addClassSchoolyear = function (cs) {
        return this.sendRequest("POST", this.url + '/' + JSON.parse(localStorage.getItem('currentSchool')).schoolcodeInternal + '/addClassSchoolyear', cs);
    };
    RestDataSource.prototype.editClassSchoolyear = function (cs) {
        return this.sendRequest("PUT", this.url + '/' + JSON.parse(localStorage.getItem('currentSchool')).schoolcodeInternal + '/editClassSchoolyear', cs);
    };
    RestDataSource.prototype.getClassSchoolyearBySchoolyear = function (schoolyear_id) {
        return this.sendRequest("GET", this.url + '/' + JSON.parse(localStorage.getItem('currentSchool')).schoolcodeInternal + '/getClassSchoolyearBySchoolyear/' + schoolyear_id);
    };
    RestDataSource.prototype.deleteClassSchoolyear = function (csId) {
        return this.sendRequest("DELETE", this.url + '/' + JSON.parse(localStorage.getItem('currentSchool')).schoolcodeInternal + '/deleteClassSchoolyear/' + csId);
    };
    //--------------------------------------- END OF CLASSSCHOOLYEAR METHODS -----------------------------------------------------------------
    //--------------------------------------- START OF REMARKOPTIONS METHODS -----------------------------------------------------------------
    RestDataSource.prototype.getRemarkoptions = function () {
        return this.sendRequest("GET", this.url + '/' + JSON.parse(localStorage.getItem('currentSchool')).schoolcodeInternal + '/remarkoptions');
    };
    RestDataSource.prototype.addRemarkoption = function (remarkoption) {
        return this.sendRequest("POST", this.url + '/' + JSON.parse(localStorage.getItem('currentSchool')).schoolcodeInternal + '/remarkoption', remarkoption);
    };
    RestDataSource.prototype.editRemarkoption = function (remarkoption) {
        return this.sendRequest("PUT", this.url + '/' + JSON.parse(localStorage.getItem('currentSchool')).schoolcodeInternal + '/remarkoption', remarkoption);
    };
    RestDataSource.prototype.deleteRemarkoption = function (remarkoption) {
        return this.sendRequest("DELETE", this.url + '/' + JSON.parse(localStorage.getItem('currentSchool')).schoolcodeInternal + '/remarkoption', remarkoption);
    };
    //--------------------------------------- END OF REMARKOPTIONS METHODS -----------------------------------------------------------------
    //--------------------------------------- START OF PERSONAL SETTINGS METHODS -----------------------------------------------------------------
    RestDataSource.prototype.validatePassword = function (editPasswordForm) {
        // console.log("Entering REST datasource");
        // console.log(editPasswordForm);
        return this.sendRequest("POST", this.url + '/' + JSON.parse(localStorage.getItem('currentSchool')).schoolcodeInternal + '/validatepassword', editPasswordForm);
    };
    //--------------------------------------- END OF PERSONAL SETTINGS METHODS -----------------------------------------------------------------
    //--------------------------------------- START OF LANGUAGE METHODS -----------------------------------------------------------------
    RestDataSource.prototype.getLanguageText = function (langcode) {
        return this.sendRequest("GET", this.url + '/schools' + '/getMultiLangText/' + langcode);
    };
    //--------------------------------------- END OF LANGUAGE METHODS -----------------------------------------------------------------
    //--------------------------------------- START OF SIGNUP SCHOOL METHODS -----------------------------------------------------------------
    RestDataSource.prototype.updateSchoolInfo = function (signupSchool) {
        return this.sendRequest("PUT", this.url + '/schools/updateschoolinfo', signupSchool);
    };
    RestDataSource.prototype.confirmadmin = function (admin, confirmationuid, schoolcodeInternal) {
        return this.sendRequest("POST", this.url + '/' + schoolcodeInternal + '/confirmadmin?confirmationuid=' + confirmationuid, admin);
    };
    RestDataSource.prototype.confirmadmin2 = function (schoolcodeInternal, confirmationuid) {
        return this.sendRequest("POST", this.url + '/schools/confirmadmin2?schoolcodeInternal=' +
            schoolcodeInternal + '&confirmationuid=' + confirmationuid);
    };
    //--------------------------------------- END OF SIGNUP SCHOOL METHODS  -----------------------------------------------------------------
    //--------------------------------------- START OF BASIC METHODS -----------------------------------------------------------------
    RestDataSource.prototype.sendRequest = function (verb, url, body) {
        var myHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        myHeaders = myHeaders.set("Access-Key", "<secret>");
        myHeaders = myHeaders.set("Application-Names", ["exampleApp", "proAngular"]);
        console.log(this.isJWTTokenValid());
        if (localStorage.getItem('accessToken')) {
            // if(this.isJWTTokenValid()){
            myHeaders = myHeaders.set("Authorization", "Bearer " + localStorage.getItem('accessToken'));
        }
        return this.http.request(verb, url, {
            body: body,
            headers: myHeaders
        }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (error) {
            //                   {
            //                       console.log(error.error);
            //                       console.error(error);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(error);
        }
        // throwError(`Network Error: ${error.statusText} (${error.status}): ${error.error}`)
        //                      return Observable.throw("Error in sendrequest: " + error.error);
        //               }                           
        ));
        // }
        // else {
        // this.messageService.reportMessage(new Message("Oops! It seems like something went wrong. Please sign in again.", true));
        // }
    };
    RestDataSource.prototype.sendRequests = function (verb, url, body) {
        var myHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        myHeaders = myHeaders.set("Access-Key", "<secret>");
        myHeaders = myHeaders.set("Application-Names", ["exampleApp", "proAngular"]);
        if (localStorage.getItem('accessToken')) {
            myHeaders = myHeaders.set("Authorization", "Bearer " + localStorage.getItem('accessToken'));
            // console.log("authorization header added");
        }
        return this.http.request(verb, url, {
            body: body,
            headers: myHeaders
        }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (error) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(error);
        }));
        // throwError(`Network Error: ${error.statusText} (${error.status})`)));
    };
    //------------------------------------ HELPER FUNCTIONS -------------------------------------------------------------
    RestDataSource.prototype.isJWTTokenValid = function () {
        try {
            if (!localStorage.getItem('accessToken')) {
                return false;
            }
            var token = localStorage.getItem('accessToken');
            var tokenInfo = jwt_decode__WEBPACK_IMPORTED_MODULE_5__(token); // decode token
            var expireDate = tokenInfo.exp; // get token expiration dateTime
            var today = Date.now();
            console.log(tokenInfo); // show decoded token object in console
            console.log(today);
            if (today > expireDate) {
                return false;
            }
            else
                return true;
        }
        catch (Error) {
            return null;
        }
    };
    RestDataSource.prototype.handleError = function (error) {
        if (error.status === 0) {
            // A client-side or network error occurred. Handle it accordingly.
            console.error('An error occurred:', error.error);
        }
        else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong.
            console.error("Backend returned code " + error.status + ", body was: ", error.error);
        }
        // Return an observable with a user-facing error message.
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(function () { return new Error('Something bad happened; please try again later.'); });
    };
    RestDataSource = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(REST_URL)),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], String])
    ], RestDataSource);
    return RestDataSource;
}());



/***/ }),

/***/ "./src/app/model/role.model.ts":
/*!*************************************!*\
  !*** ./src/app/model/role.model.ts ***!
  \*************************************/
/*! exports provided: Role */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Role", function() { return Role; });
var Role = /** @class */ (function () {
    function Role(id, name) {
        this.id = id;
        this.name = name;
    }
    return Role;
}());



/***/ }),

/***/ "./src/app/model/signupSchool.model.ts":
/*!*********************************************!*\
  !*** ./src/app/model/signupSchool.model.ts ***!
  \*********************************************/
/*! exports provided: SignupSchool */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupSchool", function() { return SignupSchool; });
var SignupSchool = /** @class */ (function () {
    function SignupSchool(firstName, lastName, language, email, password, schoolName, schoolCode, street, number, postalCode, city, country, phone) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.language = language;
        this.email = email;
        this.password = password;
        this.schoolName = schoolName;
        this.schoolCode = schoolCode;
        this.street = street;
        this.number = number;
        this.postalCode = postalCode;
        this.city = city;
        this.country = country;
        this.phone = phone;
    }
    return SignupSchool;
}());



/***/ }),

/***/ "./src/app/model/signupUser.model.ts":
/*!*******************************************!*\
  !*** ./src/app/model/signupUser.model.ts ***!
  \*******************************************/
/*! exports provided: SignupUser */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupUser", function() { return SignupUser; });
var SignupUser = /** @class */ (function () {
    function SignupUser(firstName, lastName, email, username, password, language, lastLoginDate, active, roles, classSchoolyears) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.username = username;
        this.password = password;
        this.language = language;
        this.lastLoginDate = lastLoginDate;
        this.active = active;
        this.roles = roles;
        this.classSchoolyears = classSchoolyears;
    }
    //Leave empty if it's a teacher
    //public schoolyear?: Schoolyear,
    //Leave empty if it's a teacher
    //public schoolClass?: string,
    //Place to add errors when signin up
    //public error?: string) {}
    SignupUser.prototype.toString = function () {
        return this.firstName;
    };
    return SignupUser;
}());



/***/ }),

/***/ "./src/app/model/student.model.ts":
/*!****************************************!*\
  !*** ./src/app/model/student.model.ts ***!
  \****************************************/
/*! exports provided: Student */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Student", function() { return Student; });
var Student = /** @class */ (function () {
    function Student(id, firstName, lastName, email, username, password, language, lastLoginDate, active, roles, classSchoolyears) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.username = username;
        this.password = password;
        this.language = language;
        this.lastLoginDate = lastLoginDate;
        this.active = active;
        this.roles = roles;
        this.classSchoolyears = classSchoolyears;
    }
    //Leave empty if it's a teacher
    //public schoolyear?: Schoolyear,
    //Leave empty if it's a teacher
    //public schoolClass?: string,
    //Place to add errors when signin up
    //public error?: string) {}
    Student.prototype.toString = function () {
        return this.firstName;
    };
    return Student;
}());



/***/ }),

/***/ "./src/app/overview/overview.component.css":
/*!*************************************************!*\
  !*** ./src/app/overview/overview.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL292ZXJ2aWV3L292ZXJ2aWV3LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/overview/overview.component.html":
/*!**************************************************!*\
  !*** ./src/app/overview/overview.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <div  class=\"w3-amber w3-padding-small w3-center w3-container\" style=\"width:100%\">\n    <span class=\"w3-margin-right\"><b>Vandaag:</b></span>\n    <span class=\"w3-green w3-border w3-margin-right w3-center\" style=\"display: inline-block; width:35px\">\n      {{todaysOnes}}\n    </span>\n    <span class=\"w3-yellow w3-border w3-margin-right w3-center\" style=\"display: inline-block; width:35px\">\n      {{todaysTwos}}\n    </span>\n    <span class=\" w3-orange w3-border w3-margin-right  w3-center\" style=\"display: inline-block; width:35px\">\n      {{todaysThrees}}\n    </span>\n    <span class=\"w3-red w3-border w3-margin-right w3-center\" style=\"display: inline-block; width:35px\">\n      {{todaysFours}}\n    </span>\n  </div>\n\n  <div class=\"w3-tiny w3-text-grey w3-padding\">Home -> {{HTMLtext[0]}}</div>\n\n  <div class=\"w3-row\">\n    <div *ngIf=\"showUpper\" class=\"w3-col m6 l6\">\n\n      <div class=\"w3-row w3-padding\">\n        <div class=\"w3-large w3-center w3-text-blue\">\n          {{HTMLtext[2]}}:\n        </div>\n      </div>\n\n      <div class=\"w3-row w3-padding\">\n        <div class=\"w3-large w3-center w3-text-blue\">\n          <b>\n            {{(selectedStudent) ? selectedStudent.firstName : \"\"}}\n            {{(selectedStudent) ? selectedStudent.lastName : \"\"}}\n            {{(selectedStudent) ? \"(\"  : \"\"}}\n            {{(selectedStudent) ? selectedStudent.classSchoolyears[0].schoolClass  : \"\"}}\n            {{(selectedStudent) ? \")\"  : \"\"}}\n          </b>\n          <b>\n            {{(selectedSchoolClass) ? selectedSchoolClass.schoolClass : \"\"}}\n          </b>\n          <b>\n            {{(!selectedSchoolClass) && (!selectedStudent) ? HTMLtext[8] : \"\"}}\n          </b>\n        </div>\n      </div>\n\n      <div onclick=\"openFilter('selecteer1')\" class=\"w3-panel w3-border-bottom w3-text-orange\">\n        <b class=\"w3-large\"><i class=\"fa fa-angle-double-down w3-right\"></i>\n          {{HTMLtext[97]}}\n          <i class=\"fa fa-angle-double-down w3-right\"></i>\n        </b>\n      </div>\n\n      <div id=\"selecteer1\" class=\"w3-hide\">\n        <div class=\"w3-card-4 w3-padding\">\n          <div class=\"w3-orange w3-padding\">\n            <i class=\"fa fa-filter\"></i>{{HTMLtext[1]}}\n            <input class=\"w3-input\" type=\"text\" #filter (keyup)=\"onFilterChange(filter.value)\">\n            <!--\n            <input class=\"w3-check w3-tiny\" type=\"checkbox\">\n            <label class=\"w3-tiny\">Show only students with remarks</label>\n            -->\n          </div>\n        </div>\n        <div>\n          <ul class=\"w3-ul w3-border w3-hoverable\" style=\"height:22rem;overflow:scroll\">\n            <li [hidden]=\"!filterApplies(student) || !student.active\"\n              *ngFor=\"let student of selectableStudents; let i = index\" (click)=\"onSelectStudent(student)\">\n              <div class=\"w3-medium\">\n                {{student.classSchoolyears[0].schoolClass}} | {{student.lastName}} {{student.firstName}}\n              </div>\n            </li>\n          </ul>\n\n        </div>\n      </div>\n\n      <div (click)=\"setSchoolClasses()\" onclick=\"openFilter('selectClass')\"\n        class=\"w3-panel w3-border-bottom w3-text-orange\">\n        <b class=\"w3-large\"><i class=\"fa fa-angle-double-down w3-right\"></i>\n          {{HTMLtext[98]}}\n          <i class=\"fa fa-angle-double-down w3-right\"></i>\n        </b>\n      </div>\n\n      <div id=\"selectClass\" class=\"w3-hide w3-border-bottom\">\n        <div class=\"w3-center w3-padding\">\n          <!--TODO input select options from schoolclass-->\n          <div class=\"w3-bar\">\n            <label class=\"w3-bar-item w3-text-orange\" style=\"width:30%\"><b>Class</b></label>\n            <select [(ngModel)]=\"selectedSchoolClass\" (ngModelChange)=\"selectedSchoolClassChanged($event)\"\n              class=\"w3-bar-item w3-select w3-border w3-round w3-light-grey\" name=\"option\">\n              <option value=\"\" disabled>Pick the class</option>\n              <option *ngFor=\"let schoolClass of classSchoolyears\" [ngValue]=\"schoolClass\">{{schoolClass.schoolClass}}\n              </option>\n            </select></div>\n        </div>\n      </div>\n\n      <div onclick=\"openFilter('selectAll')\" class=\"w3-panel w3-border-bottom w3-text-orange\">\n        <b class=\"w3-large\"><i class=\"fa fa-angle-double-down w3-right\"></i>\n          {{HTMLtext[99]}}\n          <i class=\"fa fa-angle-double-down w3-right\"></i>\n        </b>\n      </div>\n\n      <div id=\"selectAll\" class=\"w3-hide w3-border-bottom\">\n        <div class=\"w3-center w3-padding\">\n          <button (click)=\"allStudents()\" class=\"w3-button w3-round w3-orange\">\n            {{HTMLtext[3]}}\n          </button>\n        </div>\n      </div>\n\n\n      <div class=\"w3-center w3-margin-top\">\n        <button (click)=\"toLower()\" class=\"w3-button w3-round w3-orange\">\n          {{HTMLtext[4]}}\n        </button>\n      </div>\n\n    </div>\n\n\n    <div *ngIf=\"showLower\" class=\"w3-col m6 l6 w3-padding\">\n\n\n      <form [formGroup]=\"filterForm\">\n        <button onclick=\"openFilter('RemarkFilter')\" class=\"w3-btn w3-block w3-orange w3-left-align w3-border\">\n          <i class=\"fa fa-angle-double-down w3-right\"></i>{{HTMLtext[5]}}\n        </button>\n        <label [ngClass]=\"{'w3-text-blue' : !filterChangedNotApplied, 'w3-text-red' : filterChangedNotApplied}\"\n          class=\"w3-tiny\">\n          <b>Filters:\n            {{HTMLtext[7]}}:\n            {{(selectedStudent) ? selectedStudent.firstName : \"\"}}\n            {{(selectedStudent) ? \" \" : \" \"}}\n            {{(selectedStudent) ? selectedStudent.lastName : \"\"}}\n            {{(selectedStudent) ? \"(\"  : \"\"}}\n            {{(selectedStudent) ? selectedStudent.classSchoolyears[0].schoolClass  : \"\"}}\n            {{(selectedStudent) ? \")\"  : \"\"}}\n\n            {{(selectedSchoolClass) ? selectedSchoolClass.schoolClass : \"\"}}\n\n            {{(!selectedSchoolClass) && (!selectedStudent) ? HTMLtext[8] : \"\"}}\n\n            /\n\n            {{HTMLtext[9]}}: {{filterDateFrom}} {{HTMLtext[10]}}: {{filterDateTo}} /\n            {{HTMLtext[11]}}: {{(filterAuthorId != \"all\" ? HTMLtext[19] : HTMLtext[20])}} /\n            {{HTMLtext[13]}}: {{(filterSeverity1) ? \"1\" : \"\"}} {{(filterSeverity2) ? \"2\" : \"\"}}\n            {{(filterSeverity3) ? \"3\" : \"\"}} {{(filterSeverity4) ? \"4\" : \"\"}}\n          </b>\n        </label>\n        <div *ngIf=\"filterChangedNotApplied\" class=\"w3-tiny w3-red w3-text-white\">--> {{HTMLtext[25]}}</div>\n\n        <div id=\"RemarkFilter\" class=\"w3-container w3-hide w3-border w3-padding\">\n\n          <p class=\"w3-center\">\n            <button [disabled]=\"!filterForm.valid\" onclick=\"openFilter('RemarkFilter')\" type=\"button\"\n              (click)=\"applyFilter()\" class=\"w3-btn w3-blue\">\n              {{HTMLtext[14]}}\n            </button></p>\n\n\n          <div onclick=\"openFilter('dateFilter')\" class=\"w3-panel w3-border-bottom w3-text-orange\">\n            <b><i class=\"fa fa-angle-double-down w3-right\"></i>\n              {{HTMLtext[15]}}\n              <i class=\"fa fa-angle-double-down w3-right\"></i>\n            </b>\n          </div>\n          <div id=\"dateFilter\" class=\"w3-hide\">\n            <p class=\"w3-center\">\n              <button type=\"button\" class=\"w3-btn w3-orange\" onclick=\"openFilter('dateFilter')\"\n                (click)=h24()>1d</button>\n              <button type=\"button\" class=\"w3-btn w3-orange w3-margin\" onclick=\"openFilter('dateFilter')\"\n                (click)=\"h48()\">2d</button>\n              <button type=\"button\" class=\"w3-btn w3-orange\" onclick=\"openFilter('dateFilter')\"\n                (click)=\"h72()\">3d</button></p>\n            <p class=\"w3-center\">\n              <button type=\"button\" class=\"w3-btn w3-orange\" onclick=\"openFilter('dateFilter')\"\n                (click)=\"d7()\">7d</button>\n              <button type=\"button\" class=\"w3-btn w3-orange w3-margin\" onclick=\"openFilter('dateFilter')\"\n                (click)=\"d30()\">30d</button>\n              <button type=\"button\" class=\"w3-btn w3-orange\" onclick=\"openFilter('dateFilter')\"\n                (click)=\"d90()\">90d</button></p>\n\n            <div class=\"w3-center\">\n              <p class=\"w3-show-inline-block w3-margin\">\n                <label><b>{{HTMLtext[9]}}</b></label>\n                <input class=\"w3-input w3-border w3-round w3-light-grey\" onchange=\"openFilter('dateFilter')\"\n                  (change)=\"remarkFilterChanged()\" type=\"date\" name=\"filterDateFrom\" formControlName=\"filterDateFrom\">\n              </p>\n              <p class=\"w3-show-inline-block w3-margin\">\n                <label><b>{{HTMLtext[10]}}</b></label>\n                <input class=\"w3-input w3-border w3-round w3-light-grey\" onchange=\"openFilter('dateFilter')\"\n                  (change)=\"remarkFilterChanged()\" type=\"date\" name=\"filterDateTo\" formControlName=\"filterDateTo\">\n              </p>\n            </div>\n          </div>\n\n          <div onclick=\"openFilter('studentFilter')\" class=\"w3-panel w3-border-bottom w3-text-orange\">\n            <b><i class=\"fa fa-angle-double-down w3-right\"></i>\n              {{HTMLtext[16]}}\n              <i class=\"fa fa-angle-double-down w3-right\"></i>\n            </b>\n          </div>\n          <div id=\"studentFilter\" class=\"w3-hide\">\n            <div class=\"w3-center\">\n              <p class=\"w3-center w3-padding-small\">\n                Filters:\n                {{(selectedStudent) ? selectedStudent.firstName : HTMLtext[8]}}\n                {{(selectedStudent) ? selectedStudent.lastName : \"\"}}\n                {{(selectedStudent) ? \"(\"  : \"\"}}\n                {{(selectedStudent) ? selectedStudent.classSchoolyears[0].schoolClass  : \"\"}}\n                {{(selectedStudent) ? \")\"  : \"\"}}</p>\n              <p class=\"w3-center w3-padding-small\">\n                <button type=\"button\" onclick=\"openFilter('studentFilter')\" class=\"w3-btn w3-orange\"\n                  (click)=\"toUpper()\">{{HTMLtext[17]}}</button>\n                <button type=\"button\" onclick=\"openFilter('studentFilter')\" class=\"w3-btn w3-orange w3-margin\"\n                  (click)=\"allStudents()\">{{HTMLtext[8]}}</button></p>\n            </div>\n          </div>\n\n          <div onclick=\"openFilter('authorFilter')\" class=\"w3-panel w3-border-bottom w3-text-orange\">\n            <b><i class=\"fa fa-angle-double-down w3-right\"></i>\n              {{HTMLtext[18]}}\n              <i class=\"fa fa-angle-double-down w3-right\"></i>\n            </b>\n          </div>\n          <div id=\"authorFilter\" class=\"w3-hide\">\n            <div class=\"w3-block w3-center\">\n              <p class=\"w3-show-inline-block w3-center w3-padding-small\" style=\"width:40%;\">\n                <input class=\"w3-radio\" type=\"radio\" onchange=\"openFilter('authorFilter')\"\n                  (change)=\"setAuthorId();remarkFilterChanged();\" value=\"all\" name=\"filterAuthorId\"\n                  formControlName=\"filterAuthorId\">\n                <label>{{HTMLtext[20]}}</label></p>\n              <p class=\"w3-show-inline-block w3-center w3-padding-small\" style=\"width:40%;\">\n                <input class=\"w3-radio\" type=\"radio\" onchange=\"openFilter('authorFilter')\"\n                  (change)=\"setAuthorId();remarkFilterChanged();\" value=\"mineOnly\" name=\"filterAuthorId\"\n                  formControlName=\"filterAuthorId\">\n                <label>{{HTMLtext[19]}}</label></p>\n            </div>\n          </div>\n\n\n          <div onclick=\"openFilter('severityFilter')\" class=\"w3-panel w3-border-bottom w3-text-orange\">\n            <b><i class=\"fa fa-angle-double-down w3-right\"></i>\n              {{HTMLtext[21]}}\n              <i class=\"fa fa-angle-double-down w3-right\"></i>\n            </b>\n          </div>\n          <div id=\"severityFilter\" class=\"w3-hide\">\n            <div class=\"w3-block w3-center\">\n              <p class=\"w3-show-inline-block w3-green w3-center w3-padding-small\" style=\"width:15%;\">\n                <input (change)=\"setSeverity1();remarkFilterChanged()\" class=\"w3-check\" type=\"checkbox\"\n                  name=\"filterSeverity1\" value=\"1\" formControlName=\"filterSeverity1\">\n                <label>1</label></p>\n              <p class=\"w3-show-inline-block w3-yellow  w3-center w3-padding-small\" style=\"width:15%;\">\n                <input (change)=\"setSeverity2(); remarkFilterChanged()\" class=\"w3-check\" type=\"checkbox\"\n                  name=\"filterSeverity2\" value=\"2\" formControlName=\"filterSeverity2\">\n                <label>2</label></p>\n              <p class=\"w3-show-inline-block w3-orange  w3-center w3-padding-small\" style=\"width:15%;\">\n                <input (change)=\"setSeverity3(); remarkFilterChanged()\" class=\"w3-check\" type=\"checkbox\"\n                  name=\"filterSeverity3\" value=\"3\" formControlName=\"filterSeverity3\">\n                <label>3</label></p>\n              <p class=\"w3-show-inline-block w3-red  w3-center w3-padding-small\" style=\"width:15%;\">\n                <input (change)=\"setSeverity4(); remarkFilterChanged()\" class=\"w3-check\" type=\"checkbox\"\n                  name=\"filterSeverity4\" value=\"4\" formControlName=\"filterSeverity4\">\n                <label>4</label></p>\n            </div>\n          </div>\n\n          <p class=\"w3-center\">\n            <button [disabled]=\"!filterForm.valid\" onclick=\"openFilter('RemarkFilter')\" type=\"button\"\n              (click)=\"applyFilter()\" class=\"w3-btn w3-blue\">\n              {{HTMLtext[14]}}\n            </button></p>\n\n          <div class=\"w3-right w3-border w3-grey w3-medium w3-show-inline-block\" onclick=\"openFilter('RemarkFilter')\">\n            <span><i class=\"fa fa-angle-double-up\"></i></span>\n            <span class=\"w3-margin\">{{HTMLtext[22]}}</span>\n            <span><i class=\"fa fa-angle-double-up \"></i></span>\n          </div>\n        </div>\n      </form>\n\n      <div class=\"w3-center w3-margin-top\">\n        <button (click)=\"toUpper()\" class=\"w3-button w3-round w3-orange\">\n          {{HTMLtext[24]}}\n        </button>\n      </div>\n\n      <div class=\"w3-margin-top\">\n        <div class=\"w3-text-orange w3-container\"><b>{{HTMLtext[23]}}<span\n              *ngIf=\"filteredRemarks\">({{filteredRemarks.length}})</span></b>\n              <div (click)=\"selectListView()\" class=\"w3-xlarge w3-right w3-margin-left\"><i class=\"w3-amber fa fa-list\" aria-hidden=\"true\"></i></div>\n              <div (click)=\"selectGraphView()\" class=\"w3-xlarge w3-right w3-margin-left\"><i class=\"w3-teal fa fa-bar-chart\" aria-hidden=\"true\"></i></div>\n              <div class=\"w3-xlarge w3-right\" (click)=\"downloadWord()\"><i class=\"w3-indigo fa fa-file-word-o\" aria-hidden=\"true\"></i></div>\n            </div>\n              <!-- style=\"max-height:22rem;overflow:scroll\" bij ul voegen om ul te beperken in height-->\n        <ul *ngIf=\"listViewSelected\" class=\"w3-ul w3-border w3-hoverable\">\n          <li *ngFor=\"let remark of filteredRemarks\" class=\"w3-row\">\n            <div [ngClass]=\"{'w3-green' : remark[3] == 1, 'w3-yellow' : remark[3] == 2,\n                'w3-orange' : remark[3] == 3, 'w3-red' : remark[3] == 4}\" class=\"w3-col w3-center\" style=\"width:15%\">\n              {{remark[3]}}\n            </div>\n            <div (click)='onExtraInfo(remark[4])' class=\"w3-col w3-row-padding w3-rest\" style=\"width:70%\">\n              <div class=\"w3-medium\">\n                <span><b>{{remark[9]}}</b></span>\n                <span>&nbsp;</span>\n                <span><b>{{remark[8]}}</b></span>\n                <span>&nbsp;</span>\n                <span><b>({{remark[10]}})</b></span>\n              </div>\n              <div class=\"w3-small\">{{remark[2]}} <span *ngIf=\"remark[4] != null\">**</span></div>\n              <div class=\"w3-small\">{{remark[1]}}</div>\n              <div class=\"w3-small\">\n                <span>{{remark[6]}}</span>\n                <span>&nbsp;</span>\n                <span>{{remark[7]}}</span>\n              </div>\n            </div>\n            <div (click)='onDeleteRemark(remark[0])' onclick=\"document.getElementById('delete').style.display='block'\"\n              class=\"w3-col w3-center w3-red\" style=\"width:15%\"\n              *ngIf=\"(currentUserId == remark[5]) || currentUserRole == 4\">\n              <i class=\"fa fa-window-close\" aria-hidden=\"true\"></i>\n            </div>\n          </li>\n        </ul>\n\n        <div *ngIf=\"chartViewSelected\" class=\"w3-row\">\n          <ngx-charts-bar-horizontal-stacked\n          [view]=\"view\"\n          [scheme]=\"colorScheme\"\n          [results]=\"data\"\n          [gradient]=\"gradient\"\n          [xAxis]=\"showXAxis\"\n          [yAxis]=\"showYAxis\"\n          [legend]=\"showLegend\"\n          [showXAxisLabel]=\"showXAxisLabel\"\n          [showYAxisLabel]=\"showYAxisLabel\"\n          [xAxisLabel]=\"xAxisLabel\"\n          [yAxisLabel]=\"yAxisLabel\"\n          (select)=\"onSelect($event)\">\n        </ngx-charts-bar-horizontal-stacked>\n      </div>\n\n      </div>\n\n    </div>\n  </div>\n</div>\n\n<div id=\"extraInfo\" class=\"w3-modal\" [style.display]='displayExtraInfo'>\n  <div class=\"w3-modal-content w3-animate-top\">\n    <header class=\"w3-container w3-orange\">\n      <span (click)='hideExtraInfo()' class=\"w3-button w3-display-topright\">&times;</span>\n      <h4>{{HTMLtext[96]}}</h4>\n    </header>\n    <div class=\"w3-container w3-center\">\n      <p>{{extraInfoSelected}}</p>\n    </div>\n    <div class=\"w3-container w3-padding-small w3-center\">\n      <button (click)='hideExtraInfo()' class=\"w3-button w3-grey w3-margin\">{{HTMLtext[95]}}</button>\n    </div>\n  </div>\n</div>\n\n<div id=\"delete\" class=\"w3-modal\">\n  <div class=\"w3-modal-content w3-animate-top\">\n    <header class=\"w3-container w3-red\">\n      <span onclick=\"document.getElementById('delete').style.display='none'\"\n        class=\"w3-button w3-display-topright\">&times;</span>\n      <h2>Delete remark</h2>\n    </header>\n    <div class=\"w3-container w3-center\">\n      <p *ngIf(toDelete)>{{HTMLtext[26]}}\n    </div>\n    <div class=\"w3-container w3-padding-small w3-center\">\n      <button class=\"w3-button w3-red w3-margin\" (click)=\"onDeleteFinal()\"\n        onclick=\"document.getElementById('delete').style.display='none'\"> {{HTMLtext[27]}}</button>\n      <button onclick=\"document.getElementById('delete').style.display='none'\"\n        class=\"w3-button w3-grey w3-margin\">{{HTMLtext[28]}}</button>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/overview/overview.component.ts":
/*!************************************************!*\
  !*** ./src/app/overview/overview.component.ts ***!
  \************************************************/
/*! exports provided: OverviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OverviewComponent", function() { return OverviewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _model_repository_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../model/repository.model */ "./src/app/model/repository.model.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _model_remarkFilterForm_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../model/remarkFilterForm.model */ "./src/app/model/remarkFilterForm.model.ts");
/* harmony import */ var docx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! docx */ "./node_modules/docx/build/index.js");
/* harmony import */ var docx__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(docx__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! file-saver */ "./node_modules/file-saver/dist/FileSaver.min.js");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_8__);










var OverviewComponent = /** @class */ (function () {
    // ---------------------------------- END OF GRAPH PARAMETERS ---------------------------
    function OverviewComponent(model, formBuilder, activeRoute, router) {
        this.model = model;
        this.formBuilder = formBuilder;
        this.router = router;
        this.view = [320, 700];
        // options
        this.showXAxis = true;
        this.showYAxis = true;
        this.gradient = false;
        this.showLegend = false;
        this.showXAxisLabel = false;
        this.xAxisLabel = 'Country';
        this.showYAxisLabel = false;
        this.yAxisLabel = 'Population';
        this.colorScheme = {
            domain: ['#4CAF50', '#ffeb3b', '#ff9800', '#f44336']
        };
    }
    OverviewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.chartViewSelected = true;
        this.listViewSelected = false;
        this.today = new Date();
        this.UNIXTimeHour = 60 * 60 * 1000;
        this.selectedStudent = null;
        this.selectedSchoolClass = null;
        localStorage.setItem('filterText', "");
        // console.log(this.HTMLtext);
        this.HTMLtext = JSON.parse(localStorage.getItem('multiLangText'));
        this.model.HTMLTextLoaded.subscribe(function (data) {
            _this.HTMLtext = JSON.parse(localStorage.getItem('multiLangText'));
        });
        this.filterChangedNotApplied = false;
        this.currentUserId = JSON.parse(localStorage.getItem('currentUser')).id;
        this.currentUserRole = JSON.parse(localStorage.getItem('currentUser')).roles[0].id;
        this.initFilterForm();
        this.showUpper = true;
        this.showLower = false;
        this.model.filteredRemarksArrived.subscribe(function (data) {
            _this.filteredRemarks = data;
            console.log(_this.filteredRemarks);
            if (_this.showNotification) {
                _this.setTodayCounts();
                _this.showNotification = false;
            }
            _this.initGraph();
            console.log(_this.getDatesBetween(new Date(_this.filterDateFrom), new Date(_this.filterDateTo)));
        }, function (error) {
            console.log("error getting filtered remarks");
        });
        this.model.classSchoolyearsLoaded.subscribe(function (data) {
            _this.classSchoolyears = JSON.parse(localStorage.getItem('classSchoolyears'));
            console.log("classSchoolyears");
            console.log(_this.classSchoolyears);
        });
        this.model.remarkDeleted.subscribe(function (data) {
            console.log("remark deleted, now applying filter");
            _this.applyFilter();
        }, function (error) {
            console.log("error deleting remark");
        });
        if (localStorage.getItem('students')) {
            this.selectableStudents = JSON.parse(localStorage.getItem('students'));
        }
        else {
            this.selectableStudents = this.model.getStudents();
        }
        this.model.studentsChangeDetected.subscribe(function (message) {
            // console.log("studentschangedetected in addremark. Students updated.")
            // console.log(localStorage.getItem('students').toString());
            // this.allStudents = JSON.parse(localStorage.getItem('students'));
            _this.selectableStudents = JSON.parse(localStorage.getItem('students'));
        });
        //Get todays filtered remarks
        this.doUpdateNotification();
    }; //end of ngOnInit
    OverviewComponent.prototype.setSchoolClasses = function () {
        this.classSchoolyears = JSON.parse(localStorage.getItem('classSchoolyears'));
    };
    OverviewComponent.prototype.selectedSchoolClassChanged = function (newSchoolClass) {
        this.selectedSchoolClass = newSchoolClass;
        this.selectedStudent = null;
        console.log(this.selectedSchoolClass);
        //    console.log(this.selectedSchoolClass);
    };
    OverviewComponent.prototype.onDeleteRemark = function (remarkId) {
        this.remarkToDeleteId = remarkId;
        console.log("delete remark with id " + this.remarkToDeleteId);
    };
    OverviewComponent.prototype.onDeleteFinal = function () {
        console.log("Now deleting remark with id " + this.remarkToDeleteId);
        this.model.deleteRemark(this.remarkToDeleteId);
    };
    OverviewComponent.prototype.h24 = function () {
        this.setDates(0);
        this.filterChangedNotApplied = true;
    };
    OverviewComponent.prototype.h48 = function () {
        this.setDates(1);
        this.filterChangedNotApplied = true;
    };
    OverviewComponent.prototype.h72 = function () {
        this.setDates(2);
        this.filterChangedNotApplied = true;
    };
    OverviewComponent.prototype.d7 = function () {
        this.setDates(7);
        this.filterChangedNotApplied = true;
    };
    OverviewComponent.prototype.d30 = function () {
        this.setDates(30);
        this.filterChangedNotApplied = true;
    };
    OverviewComponent.prototype.d90 = function () {
        this.setDates(90);
        this.filterChangedNotApplied = true;
    };
    OverviewComponent.prototype.remarkFilterChanged = function () {
        this.filterChangedNotApplied = true;
        console.log(this.filterForm.get('filterSeverity1').value);
    };
    OverviewComponent.prototype.setAuthorId = function () {
        this.filterAuthorId = this.filterForm.get('filterAuthorId').value;
    };
    OverviewComponent.prototype.setSeverity1 = function () {
        this.filterSeverity1 = this.filterForm.get('filterSeverity1').value;
    };
    OverviewComponent.prototype.setSeverity2 = function () {
        this.filterSeverity2 = this.filterForm.get('filterSeverity2').value;
    };
    OverviewComponent.prototype.setSeverity3 = function () {
        this.filterSeverity3 = this.filterForm.get('filterSeverity3').value;
    };
    OverviewComponent.prototype.setSeverity4 = function () {
        this.filterSeverity4 = this.filterForm.get('filterSeverity4').value;
    };
    OverviewComponent.prototype.onSelectStudent = function (student) {
        this.selectedStudent = student;
        this.selectedSchoolClass = null;
        // console.log(this.selectedStudent);
    };
    OverviewComponent.prototype.onFilterChange = function (value) {
        // console.log(value);
        localStorage.setItem('filterText', value);
    };
    // doUpdateNotification1(){
    //   this.showNotification = false;
    //   let now :Date = new Date();
    //   if(localStorage.getItem('lastUpdateNotification')){
    //     this.lastUpdateNotification = new Date(JSON.parse(localStorage.getItem('lastUpdateNotification')));
    //     //If more than 6 hours time difference
    //     if((now.getTime() - this.lastUpdateNotification.getTime()) > 2* this.UNIXTimeHour){
    //       this.applyTodayFilter();
    //       console.log("applying today filter...");
    //       this.showNotification =true;
    //     }
    //   }
    //   else{
    //     localStorage.setItem('lastUpdateNotification',JSON.stringify(now));
    //     this.showNotification =true;
    //   }
    //   console.log(this.showNotification);
    // }
    OverviewComponent.prototype.doUpdateNotification = function () {
        this.applyTodayFilter();
    };
    OverviewComponent.prototype.setTodayCounts = function () {
        console.log("Entering setTodayCounts");
        this.todaysOnes = 0;
        this.todaysTwos = 0;
        this.todaysThrees = 0;
        this.todaysFours = 0;
        for (var i = 0; i < this.filteredRemarks.length; i++) {
            if (this.filteredRemarks[i][3] == 1) {
                this.todaysOnes++;
                console.log(this.todaysOnes);
            }
            if (this.filteredRemarks[i][3] == 2) {
                this.todaysTwos++;
            }
            if (this.filteredRemarks[i][3] == 3) {
                this.todaysThrees++;
            }
            if (this.filteredRemarks[i][3] == 4) {
                this.todaysFours++;
            }
        }
    };
    OverviewComponent.prototype.getFilteredStudents = function () {
        var toret;
        toret = "";
        if (this.selectedStudent) {
            toret += this.selectedStudent.lastName + " " + this.selectedStudent.firstName + " (" + this.selectedStudent.classSchoolyears[0].schoolClass + ")";
            return toret;
        }
        if (this.selectedSchoolClass) {
            toret += this.selectedSchoolClass.schoolClass;
            return toret;
        }
        toret += "Alle leerlingen";
        return toret;
    };
    OverviewComponent.prototype.getFilteredAuthors = function () {
        if (this.filterAuthorId != "all") {
            var current = JSON.parse(localStorage.getItem("currentUser"));
            return current.firstName + " " + current.lastName;
        }
        return "Alle leerkrachten";
    };
    OverviewComponent.prototype.getFilteredSeverities = function () {
        var toret;
        toret = "";
        if (this.filterSeverity1 == true) {
            toret += " 1 ";
        }
        if (this.filterSeverity2 == true) {
            toret += " 2 ";
        }
        if (this.filterSeverity3 == true) {
            toret += " 3 ";
        }
        if (this.filterSeverity4 == true) {
            toret += " 4 ";
        }
        return toret;
    };
    OverviewComponent.prototype.getRemarkColor = function (severity) {
        var toret;
        toret = "black";
        if (severity == 1) {
            toret = "green";
        }
        if (severity == 2) {
            toret = "yellow";
        }
        if (severity == 3) {
            toret = "orange";
        }
        if (severity == 4) {
            toret = "red";
        }
        console.log(toret);
        return toret;
    };
    OverviewComponent.prototype.createHeading = function (text) {
        return new docx__WEBPACK_IMPORTED_MODULE_7__["Paragraph"](text).heading1().thematicBreak();
    };
    OverviewComponent.prototype.downloadWord = function () {
        var document = new docx__WEBPACK_IMPORTED_MODULE_7__["Document"]();
        // document.addParagraph(new Paragraph("Rapport opmerkingen").title());
        document.addParagraph(this.createHeading("Rapport opmerkingen"));
        document.addParagraph(new docx__WEBPACK_IMPORTED_MODULE_7__["Paragraph"]().addRun(new docx__WEBPACK_IMPORTED_MODULE_7__["TextRun"]("Gegenereerd op: " + this.today.toLocaleString()).bold().break()));
        document.addParagraph(new docx__WEBPACK_IMPORTED_MODULE_7__["Paragraph"]("Toegepaste filters: "));
        document.addParagraph(new docx__WEBPACK_IMPORTED_MODULE_7__["Paragraph"]("leerling(en): " + this.getFilteredStudents()).bullet());
        document.addParagraph(new docx__WEBPACK_IMPORTED_MODULE_7__["Paragraph"]("van: " + this.filterDateFrom).bullet());
        document.addParagraph(new docx__WEBPACK_IMPORTED_MODULE_7__["Paragraph"]("tot: " + this.filterDateTo).bullet());
        document.addParagraph(new docx__WEBPACK_IMPORTED_MODULE_7__["Paragraph"]("door: " + this.getFilteredAuthors()).bullet());
        document.addParagraph(new docx__WEBPACK_IMPORTED_MODULE_7__["Paragraph"]("ernst: " + this.getFilteredSeverities()).bullet());
        document.addParagraph(new docx__WEBPACK_IMPORTED_MODULE_7__["Paragraph"]("Voor de opgegeven filters werden " + this.filteredRemarks.length + " opmerkingen gevonden."));
        var table = document.createTable(this.filteredRemarks.length, 5);
        table.getRow(0).getCell(0).CellProperties.setWidth(8, docx__WEBPACK_IMPORTED_MODULE_7__["WidthType"].PERCENTAGE);
        table.getRow(0).getCell(1).CellProperties.setWidth(25, docx__WEBPACK_IMPORTED_MODULE_7__["WidthType"].PERCENTAGE);
        table.getRow(0).getCell(2).CellProperties.setWidth(30, docx__WEBPACK_IMPORTED_MODULE_7__["WidthType"].PERCENTAGE);
        table.getRow(0).getCell(3).CellProperties.setWidth(12, docx__WEBPACK_IMPORTED_MODULE_7__["WidthType"].PERCENTAGE);
        table.getRow(0).getCell(4).CellProperties.setWidth(25, docx__WEBPACK_IMPORTED_MODULE_7__["WidthType"].PERCENTAGE);
        for (var i = 0; i < this.filteredRemarks.length; i++) {
            table.getRow(i).getCell(0).addContent(new docx__WEBPACK_IMPORTED_MODULE_7__["Paragraph"](this.filteredRemarks[i][10]));
            table.getRow(i).getCell(1).addContent(new docx__WEBPACK_IMPORTED_MODULE_7__["Paragraph"](this.filteredRemarks[i][9] + " " + this.filteredRemarks[i][8]));
            // table.getRow(i).getCell(2).addContent(new Paragraph(this.filteredRemarks[i][3] + " - " + this.filteredRemarks[i][2]));
            table.getRow(i).getCell(2).addContent(new docx__WEBPACK_IMPORTED_MODULE_7__["Paragraph"](this.filteredRemarks[i][3] + " - " + this.filteredRemarks[i][2]));
            var remarkColor = this.getRemarkColor(this.filteredRemarks[i][3]);
            table.getRow(i).getCell(2).CellProperties.Borders.addBottomBorder(docx__WEBPACK_IMPORTED_MODULE_7__["BorderStyle"].DOUBLE, 3, remarkColor);
            table.getRow(i).getCell(3).addContent(new docx__WEBPACK_IMPORTED_MODULE_7__["Paragraph"](this.filteredRemarks[i][1]));
            table.getRow(i).getCell(4).addContent(new docx__WEBPACK_IMPORTED_MODULE_7__["Paragraph"](this.filteredRemarks[i][6] + " " + this.filteredRemarks[i][7]));
        }
        var packer = new docx__WEBPACK_IMPORTED_MODULE_7__["Packer"]();
        packer.toBlob(document).then(function (blob) {
            console.log(blob);
            file_saver__WEBPACK_IMPORTED_MODULE_8__["saveAs"](blob, "scalliTest.docx");
            console.log("Document created successfully");
        });
    };
    OverviewComponent.prototype.filterApplies = function (student) {
        var filterText = localStorage.getItem('filterText');
        if (filterText.length > 0) {
            if (student.classSchoolyears[0].schoolClass.toLowerCase().includes(filterText.toLowerCase())
                || student.firstName.toLowerCase().includes(filterText.toLowerCase())
                || student.lastName.toLowerCase().includes(filterText.toLowerCase())) {
                return true;
            }
            else {
                return false;
            }
        }
        else {
            return true;
        }
    }; //end of filterApplies
    OverviewComponent.prototype.allStudents = function () {
        this.selectedStudent = null;
        this.selectedSchoolClass = null;
        this.filterChangedNotApplied = true;
    };
    OverviewComponent.prototype.applyFilter = function () {
        var remarksFilter;
        remarksFilter = new _model_remarkFilterForm_model__WEBPACK_IMPORTED_MODULE_6__["RemarkFilterForm"]();
        remarksFilter.fromDate = this.filterForm.get('filterDateFrom').value;
        remarksFilter.toDate = this.filterForm.get('filterDateTo').value;
        if (this.filterForm.get('filterAuthorId').value == "all") {
            remarksFilter.authorId = 0;
        }
        else {
            remarksFilter.authorId = JSON.parse(localStorage.getItem('currentUser')).id;
        }
        if (this.selectedStudent) {
            remarksFilter.studentId = this.selectedStudent.id;
        }
        else {
            remarksFilter.studentId = 0;
        }
        if (this.selectedSchoolClass) {
            remarksFilter.schoolClassId = this.selectedSchoolClass.class_schoolyear_id;
        }
        else {
            remarksFilter.schoolClassId = 0;
        }
        remarksFilter.severities = [];
        if (this.filterForm.get('filterSeverity1').value) {
            remarksFilter.severities.push(1);
        }
        else {
            remarksFilter.severities.push(0);
        }
        if (this.filterForm.get('filterSeverity2').value) {
            remarksFilter.severities.push(2);
        }
        else {
            remarksFilter.severities.push(0);
        }
        if (this.filterForm.get('filterSeverity3').value) {
            remarksFilter.severities.push(3);
        }
        else {
            remarksFilter.severities.push(0);
        }
        if (this.filterForm.get('filterSeverity4').value) {
            remarksFilter.severities.push(4);
        }
        else {
            remarksFilter.severities.push(0);
        }
        //    for(let i=0; i< 2000; i++ ){
        //console.log(i);
        this.model.getFilteredRemarks(remarksFilter);
        //    }
        this.filterChangedNotApplied = false;
    };
    OverviewComponent.prototype.applyTodayFilter = function () {
        var remarksFilter;
        remarksFilter = new _model_remarkFilterForm_model__WEBPACK_IMPORTED_MODULE_6__["RemarkFilterForm"]();
        remarksFilter.fromDate = this.filterForm.get('filterDateTo').value; //TODAY
        remarksFilter.toDate = this.filterForm.get('filterDateTo').value; //TODAY
        remarksFilter.authorId = 0;
        remarksFilter.studentId = 0;
        remarksFilter.schoolClassId = 0;
        remarksFilter.severities = [];
        remarksFilter.severities.push(1);
        remarksFilter.severities.push(2);
        remarksFilter.severities.push(3);
        remarksFilter.severities.push(4);
        //    for(let i=0; i< 2000; i++ ){
        //console.log(i);
        this.showNotification = true;
        this.model.getFilteredRemarks(remarksFilter);
        //    }
    };
    OverviewComponent.prototype.initFilterForm = function () {
        this.filterForm = this.formBuilder.group({
            filterDateFrom: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            filterDateTo: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            filterAuthorId: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            // filterStudentId: ['', Validators.required],
            filterSeverity1: [''],
            filterSeverity2: [''],
            filterSeverity3: [''],
            filterSeverity4: ['']
        });
        this.filterForm.setValidators(this.severityValidator);
        //init the start values
        this.h24();
        this.filterAuthorId = "all";
        // this.filterStudentId = "all";
        this.filterForm.controls['filterAuthorId'].setValue(this.filterAuthorId);
        // this.filterForm.controls['filterStudentId'].setValue(this.filterStudentId);
        this.filterSeverity1 = true;
        this.filterForm.controls['filterSeverity1'].setValue(this.filterSeverity1);
        this.filterSeverity2 = true;
        this.filterForm.controls['filterSeverity2'].setValue(this.filterSeverity2);
        this.filterSeverity3 = true;
        this.filterForm.controls['filterSeverity3'].setValue(this.filterSeverity3);
        this.filterSeverity4 = true;
        this.filterForm.controls['filterSeverity4'].setValue(this.filterSeverity4);
    };
    //Our own custom validator for checking at least one severity
    OverviewComponent.prototype.severityValidator = function (group) {
        if (group) {
            if ((!group.get("filterSeverity1").value && !group.get("filterSeverity2").value
                && !group.get("filterSeverity3").value && !group.get("filterSeverity4").value)
                || (group.get("filterDateFrom").value > group.get("filterDateTo").value)) {
                return { notMatching: true };
            }
        }
        return null;
    };
    OverviewComponent.prototype.toLower = function () {
        this.showLower = true;
        this.showUpper = false;
        this.applyFilter();
    };
    OverviewComponent.prototype.toUpper = function () {
        this.showUpper = true;
        this.showLower = false;
    };
    OverviewComponent.prototype.onExtraInfo = function (extra) {
        if (extra) {
            this.extraInfoSelected = extra;
            this.displayExtraInfo = 'block';
        }
    };
    OverviewComponent.prototype.hideExtraInfo = function () {
        this.displayExtraInfo = 'none';
    };
    OverviewComponent.prototype.setDates = function (startDateDays) {
        var start = new Date(this.today.getTime());
        start.setDate(this.today.getDate() - startDateDays);
        this.filterDateFrom = Object(_angular_common__WEBPACK_IMPORTED_MODULE_5__["formatDate"])(start, 'yyyy-MM-dd', 'en');
        this.filterDateTo = Object(_angular_common__WEBPACK_IMPORTED_MODULE_5__["formatDate"])(this.today, 'yyyy-MM-dd', 'en');
        this.filterForm.controls['filterDateFrom'].setValue(this.filterDateFrom);
        this.filterForm.controls['filterDateTo'].setValue(this.filterDateTo);
    };
    // Returns an array of dates between the two dates
    OverviewComponent.prototype.getDatesBetween = function (startDate, endDate) {
        var dates = [], currentDate = startDate, addDays = function (days) {
            var date = new Date(this.valueOf());
            date.setDate(date.getDate() + days);
            return date;
        };
        while (currentDate <= endDate) {
            dates.push(currentDate);
            currentDate = addDays.call(currentDate, 1);
        }
        console.log(dates);
        return dates;
    };
    ;
    OverviewComponent.prototype.initGraph = function () {
        var dates = this.getDatesBetween(new Date(this.filterDateFrom), new Date(this.filterDateTo));
        // console.log(dates);
        this.data = [];
        for (var i = 0; i < dates.length; i++) {
            var pair = void 0;
            pair = {};
            pair["name"] = Object(_angular_common__WEBPACK_IMPORTED_MODULE_5__["formatDate"])(dates[i], 'yyyy-MM-dd', 'en');
            ;
            // this.multi.push(pair);
            //  console.log(this.multi);
            pair["series"] = [];
            var seriespair1 = {};
            seriespair1["name"] = 1;
            seriespair1["value"] = 0;
            pair["series"].push(seriespair1);
            var seriespair2 = {};
            seriespair2["name"] = 2;
            seriespair2["value"] = 0;
            pair["series"].push(seriespair2);
            var seriespair3 = {};
            seriespair3["name"] = 3;
            seriespair3["value"] = 0;
            pair["series"].push(seriespair3);
            var seriespair4 = {};
            seriespair4["name"] = 4;
            seriespair4["value"] = 0;
            pair["series"].push(seriespair4);
            this.data.push(pair);
        }
        console.log(this.data);
        for (var i = 0; i < this.filteredRemarks.length; i++) {
            for (var j = 0; j < this.data.length; j++) {
                if (this.data[j]["name"] == this.filteredRemarks[i][1]) {
                    this.data[j]["series"][this.filteredRemarks[i][3] - 1]["value"]++;
                }
            }
        }
        console.log(this.data);
        this.view = [300, this.data.length * 20];
    }; //end of initGraph function
    OverviewComponent.prototype.selectListView = function () {
        this.chartViewSelected = false;
        this.listViewSelected = true;
    };
    OverviewComponent.prototype.selectGraphView = function () {
        this.chartViewSelected = true;
        this.listViewSelected = false;
    };
    OverviewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-overview',
            template: __webpack_require__(/*! ./overview.component.html */ "./src/app/overview/overview.component.html"),
            styles: [__webpack_require__(/*! ./overview.component.css */ "./src/app/overview/overview.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_model_repository_model__WEBPACK_IMPORTED_MODULE_3__["Model"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], OverviewComponent);
    return OverviewComponent;
}());



/***/ }),

/***/ "./src/app/parents/parents.component.css":
/*!***********************************************!*\
  !*** ./src/app/parents/parents.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhcmVudHMvcGFyZW50cy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/parents/parents.component.html":
/*!************************************************!*\
  !*** ./src/app/parents/parents.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"w3-container\">\n  <div class=\"w3-tiny w3-text-grey w3-padding\">{{HTMLtext[168]}}</div>\n\n  <div id=\"overview_students\" class=\"w3-row w3-container full-height city\">\n    <div class=\"w3-row w3-col m11 w3-right-align w3-padding-small\">\n      <button (click)=\"generate()\" onclick=\"document.getElementById('warning').style.display='block'\"\n        class=\"w3-button w3-green w3-padding w3-margin\"><i class=\"fa fa-plus-circle\" aria-hidden=\"true\"></i>\n        {{HTMLtext[166]}}</button>\n      <button (click)=\"selectAll()\" (click)=\"isSelected = !isSelected\"\n        class=\"w3-button w3-orange w3-padding w3-margin\"><i class=\"fa fa-plus-circle\" aria-hidden=\"true\"></i>\n        {{HTMLtext[167]}}</button>\n    </div>\n    <div class=\"w3-row\">\n      <div class=\"w3-col m11 w3-center\">\n        <div class=\"w3-responsive\">\n          <table class=\"w3-table-all w3-card-4\">\n            <tr>\n              <th>Select</th>\n              <th>Class</th>\n              <th>Student</th>\n              <th>Parent</th>\n              <th>Parent username</th>\n            </tr>\n            <tr *ngFor=\"let parent of parents\" [ngClass]=\"{'w3-text-grey': !parent.active}\">\n              <td *ngIf='parent.parentId == 0'><input class=\"w3-check\" type=\"checkbox\"\n                  (change)='onSelectNew($event,parent)' [checked]=\"isSelected\"></td>\n              <td *ngIf=\"parent.parentId != 0\"><input class=\"w3-check\" type=\"checkbox\"\n                  (change)='onSelectParent($event,parent)' [checked]=\"isSelected\"></td>\n              <td>{{parent.schoolClass}}</td>\n              <td>{{parent.studentFirstName}} &nbsp; {{parent.studentLastName}}</td>\n              <td>{{parent.parentFirstName}} &nbsp; {{parent.parentLastName}}</td>\n              <td>{{parent.parentEmail}}</td>\n            </tr>\n          </table>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n<div id=\"download\" class=\"w3-modal\">\n  <div class=\"w3-modal-content w3-animate-top\">\n    <header class=\"w3-container w3-orange\">\n      <span onclick=\"document.getElementById('download').style.display='none'\"\n        class=\"w3-button w3-display-topright\">&times;</span>\n      <h2>Download logins</h2>\n    </header>\n    <div class=\"w3-container w3-padding-small w3-center\">\n      <button class=\"w3-button w3-orange w3-padding w3-margin\"\n        onclick=\"document.getElementById('download').style.display='none'\">\n        <i class=\"fa fa-download\" aria-hidden=\"true\"></i>\n        <angular2csv [data]=\"lastCreatedOrChanged\" filename=\"test.csv\" [options]=\"options\"></angular2csv>\n      </button>\n      <button onclick=\"document.getElementById('download').style.display='none'\" class=\"w3-button w3-grey w3-margin\">\n        {{HTMLtext[28]}}\n      </button>\n    </div>\n  </div>\n</div>\n\n<div id=\"warning\" class=\"w3-modal\">\n  <div class=\"w3-modal-content w3-animate-top\">\n    <header class=\"w3-container w3-red\">\n      <span onclick=\"document.getElementById('warning').style.display='none'\"\n        class=\"w3-button w3-display-topright\">&times;</span>\n      <h2>Warning</h2>\n    </header>\n    <div class=\"w3-container w3-center\">\n      <p>Please, beware before you continue: </p>\n      <p>1. If you regenerate passwords for existing accounts, the old logins will be no longer valid!</p>\n      <p>2. This will be your only change to download the (re)generated passwords</p>\n    </div>\n    <div class=\"w3-container w3-padding-small w3-center\">\n      <button class=\"w3-button w3-red w3-margin\" onclick=\"document.getElementById('warning').style.display='none'; \n                      document.getElementById('download').style.display='block'\">\n        Yes, (re)generate\n      </button>\n      <button onclick=\"document.getElementById('warning').style.display='none'\" class=\"w3-button w3-grey w3-margin\">\n        {{HTMLtext[28]}}\n      </button>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/parents/parents.component.ts":
/*!**********************************************!*\
  !*** ./src/app/parents/parents.component.ts ***!
  \**********************************************/
/*! exports provided: ParentsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ParentsComponent", function() { return ParentsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _model_repository_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../model/repository.model */ "./src/app/model/repository.model.ts");
/* harmony import */ var _csvutils_file_util__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../csvutils/file.util */ "./src/app/csvutils/file.util.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _model_EditPasswordForm_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../model/EditPasswordForm.model */ "./src/app/model/EditPasswordForm.model.ts");







var ParentsComponent = /** @class */ (function () {
    // data = [
    //   {
    //     name: "Test, 1",
    //     age: 13,
    //     average: 8.2,
    //     approved: true,
    //     description: "using 'Content here, content here' "
    //   },
    //   {
    //     name: 'Test 2',
    //     age: 11,
    //     average: 8.2,
    //     approved: true,
    //     description: "using 'Content here, content here' "
    //   },
    //   {
    //     name: 'Test 3',
    //     age: 10,
    //     average: 8.2,
    //     approved: true,
    //     description: "using 'Content here, content here' "
    //   }
    // ]
    //data =[];
    function ParentsComponent(model, formBuilder, _fileUtil, activeRoute, router) {
        this.model = model;
        this.formBuilder = formBuilder;
        this._fileUtil = _fileUtil;
        this.router = router;
        this.options = {
            fieldSeparator: ',',
            quoteStrings: '"',
            decimalseparator: '.',
            showLabels: false,
            headers: ['naam', 'klas', 'gebruikersnaam', 'wachtwoord'],
            showTitle: true,
            title: 'account logins',
            useBom: false,
            removeNewLines: true,
            keys: ['student', 'schoolClass', 'username', 'password']
        };
    }
    ParentsComponent.prototype.ngOnInit = function () {
        var _this = this;
        // console.log(this.data);
        this.lastCreatedOrChanged = [];
        this.accountsChanged = 0;
        this.HTMLtext = JSON.parse(localStorage.getItem('multiLangText'));
        this.createNewParentAccountsForTheseStudentIds = [];
        this.generateNewCredentialsForTheseParentIds = [];
        this.model.accountChanged.subscribe(function (data) {
            _this.accountsChanged++;
            console.log("accountsChanged");
            console.log(_this.accountsChanged);
            if (_this.accountsChanged == _this.lastCreatedOrChanged.length) {
                _this.model.getParents();
                _this.accountsChanged = 0;
            }
        });
        if (localStorage.getItem('parents')) {
            this.parents = JSON.parse(localStorage.getItem('parents'));
        }
        else {
            this.parents = this.model.getParents();
        }
        this.model.parentsLoaded.subscribe(function (message) {
            _this.parents = JSON.parse(localStorage.getItem('parents'));
        });
    };
    ParentsComponent.prototype.onSelectNew = function (event, parent) {
        if (event.target.checked) {
            console.log(parent);
            this.createNewParentAccountsForTheseStudentIds.push(parent);
            console.log(this.createNewParentAccountsForTheseStudentIds);
        }
        //Was checked but not anymore
        else {
            console.log('unchechecked');
            console.log(parent);
            this.removeFromStudentIdsArray(parent);
        }
    };
    ParentsComponent.prototype.onSelectParent = function (event, parent) {
        if (event.target.checked) {
            console.log(parent);
            this.generateNewCredentialsForTheseParentIds.push(parent);
            console.log(this.generateNewCredentialsForTheseParentIds);
        }
        //Was checked but not anymore
        else {
            console.log('unchechecked');
            console.log(parent);
            this.removeFromParentIdsArray(parent);
        }
    };
    ParentsComponent.prototype.generate = function () {
        console.log("generate");
        this.updateParentsPasswords();
        this.createParentAccounts();
    };
    ParentsComponent.prototype.createParentAccounts = function () {
        // this.createdNewParentAccountsForTheseStudentIds = [];
        var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890,./;'[]\=-)(*&^%$#@!~`";
        var lengthOfCode = 6;
        for (var i = 0; i < this.createNewParentAccountsForTheseStudentIds.length; i++) {
            var randompw1 = this.makeRandom(lengthOfCode, possible);
            // this.createdNewParentAccountsForTheseStudentIds[i] = [];
            var parent1 = {};
            parent1 = this.createParent(randompw1, this.createNewParentAccountsForTheseStudentIds[i].studentId + "-father@msninove.be");
            this.model.createParentAccountsForStudent(parent1, this.createNewParentAccountsForTheseStudentIds[i].studentId);
            this.lastCreatedOrChanged.push({
                student: this.createNewParentAccountsForTheseStudentIds[i].studentFirstName + "" + this.createNewParentAccountsForTheseStudentIds[i].studentLastName,
                schoolClass: this.createNewParentAccountsForTheseStudentIds[i].schoolClass,
                username: this.createNewParentAccountsForTheseStudentIds[i].studentId + "-father@msninove.be",
                password: randompw1
            });
            var randompw2 = this.makeRandom(lengthOfCode, possible);
            var parent2 = {};
            parent2 = this.createParent(randompw2, this.createNewParentAccountsForTheseStudentIds[i].studentId + "-mother@msninove.be");
            this.model.createParentAccountsForStudent(parent2, this.createNewParentAccountsForTheseStudentIds[i].studentId);
            // this.createdNewParentAccountsForTheseStudentIds.push(
            this.lastCreatedOrChanged.push({
                student: this.createNewParentAccountsForTheseStudentIds[i].studentFirstName + "" + this.createNewParentAccountsForTheseStudentIds[i].studentLastName,
                schoolClass: this.createNewParentAccountsForTheseStudentIds[i].schoolClass,
                username: this.createNewParentAccountsForTheseStudentIds[i].studentId + "-mother@msninove.be",
                password: randompw2
            });
        }
        // console.log(this.createdNewParentAccountsForTheseStudentIds);
        // this.data = this.createdNewParentAccountsForTheseStudentIds;
    };
    ParentsComponent.prototype.createParent = function (randompw, username) {
        var parent1 = {};
        parent1.firstName = "";
        parent1.lastName = "";
        parent1.username = username; //this.createNewParentAccountsForTheseStudentIds[i] + "-father@msninove.be";
        parent1.email = username; //this.createNewParentAccountsForTheseStudentIds[i] + "-father@msninove.be";
        parent1.password = randompw;
        parent1.active = true;
        parent1.language = "nl";
        parent1.lastLoginDate = ""; //formatDate(new Date(), 'yyyy/MM/dd', 'en');
        parent1.roles = [
            {
                "id": 2,
                "name": "ROLE_PARENT1"
            }
        ];
        parent1.classSchoolyears = [];
        return parent1;
    };
    ParentsComponent.prototype.updateParentsPasswords = function () {
        // this.generatedNewCredentialsForTheseParentIds = [];
        var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890,./;'[]\=-)(*&^%$#@!~`";
        var lengthOfCode = 6;
        for (var i = 0; i < this.generateNewCredentialsForTheseParentIds.length; i++) {
            var randompw = this.makeRandom(lengthOfCode, possible);
            var editForm = void 0;
            editForm = new _model_EditPasswordForm_model__WEBPACK_IMPORTED_MODULE_6__["EditPasswordForm"]();
            editForm.id = this.generateNewCredentialsForTheseParentIds[i].parentId;
            editForm.password = randompw;
            console.log(randompw);
            this.model.updateParentPassword(editForm);
            this.lastCreatedOrChanged.push({
                student: this.generateNewCredentialsForTheseParentIds[i].studentFirstName + "" + this.generateNewCredentialsForTheseParentIds[i].studentLastName,
                schoolClass: this.generateNewCredentialsForTheseParentIds[i].schoolClass,
                username: this.generateNewCredentialsForTheseParentIds[i].parentEmail,
                password: randompw
            });
        }
        // console.log(this.generatedNewCredentialsForTheseParentIds);
        // this.data.push(this.generatedNewCredentialsForTheseParentIds);
    };
    ParentsComponent.prototype.makeRandom = function (lengthOfCode, possible) {
        var text = "";
        for (var i = 0; i < lengthOfCode; i++) {
            text += possible.charAt(Math.floor(Math.random() * possible.length));
        }
        return text;
    };
    ParentsComponent.prototype.selectAll = function () {
        console.log('selectAll');
    };
    ParentsComponent.prototype.removeFromStudentIdsArray = function (studid) {
        var index = this.createNewParentAccountsForTheseStudentIds.indexOf(studid);
        if (index !== -1) {
            this.createNewParentAccountsForTheseStudentIds.splice(index, 1);
        }
    };
    ParentsComponent.prototype.removeFromParentIdsArray = function (parentId) {
        var index = this.generateNewCredentialsForTheseParentIds.indexOf(parentId);
        if (index !== -1) {
            this.generateNewCredentialsForTheseParentIds.splice(index, 1);
        }
    };
    ParentsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-parents',
            template: __webpack_require__(/*! ./parents.component.html */ "./src/app/parents/parents.component.html"),
            styles: [__webpack_require__(/*! ./parents.component.css */ "./src/app/parents/parents.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_model_repository_model__WEBPACK_IMPORTED_MODULE_3__["Model"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"],
            _csvutils_file_util__WEBPACK_IMPORTED_MODULE_4__["FileUtil"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], ParentsComponent);
    return ParentsComponent;
}());



/***/ }),

/***/ "./src/app/ranking/ranking.component.css":
/*!***********************************************!*\
  !*** ./src/app/ranking/ranking.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JhbmtpbmcvcmFua2luZy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/ranking/ranking.component.html":
/*!************************************************!*\
  !*** ./src/app/ranking/ranking.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"w3-tiny w3-text-grey w3-padding\">Home -> {{HTMLtext[154]}}</div>\n\n<div class=\"w3-text-grey w3-padding\">{{HTMLtext[155]}} {{lastUpdated}}</div>\n\n<div class=\"w3-text-grey w3-padding\">Period from {{dateFrom}} to {{dateTo}}</div>\n\n<div class=\"w3-center w3-margin-bottom\">\n  <span class=\"w3-btn\" [ngClass]=\"{'w3-blue': allRankingsSelected, 'w3-light-grey': !allRankingsSelected}\"\n    (click)=\"allRankings()\">All</span>\n  <span class=\"w3-btn w3-margin-left\"\n    [ngClass]=\"{'w3-blue': !allRankingsSelected, 'w3-light-grey': allRankingsSelected}\"\n    (click)=\"allByClassRankings()\">By class</span>\n</div>\n\n<!--\n<div class=\"w3-responsive\">\n    <table class=\"w3-table-all\">\n        <tr class=\"w3-amber\">\n            <th>Position</th>\n          <th>Name</th>\n          <th>Class</th>\n          <th class=\"w3-green w3-border w3-margin-right w3-center\" style=\" width:35px\">\n              1\n          </th>\n            <th class=\"w3-yellow w3-border w3-margin-right w3-center\" style=\" width:35px\">\n              2\n            </th>\n            <th class=\" w3-orange w3-border w3-margin-right  w3-center\" style=\" width:35px\">\n              3\n            </th>\n            <th class=\"w3-red w3-border w3-margin-right w3-center\" style=\" width:35px\">\n              4\n            </th>\n            <th>\n                TOTAL\n            </th>\n      </tr>\n      <tr *ngFor=\"let rank of rankings; index as i\">\n        <td [ngClass]=\"{'w3-border-top w3-blue': (!allRankingsSelected) && (i == 0 || rankings[i][3] != rankings[i-1][3]), 'w3-green': currentUserId == rankings[i][0]}\"><div>{{rank[9]}}</div></td>\n        <td [ngClass]=\"{'w3-border-top w3-blue': (!allRankingsSelected) && (i == 0 || rankings[i][3] != rankings[i-1][3]), 'w3-green': currentUserId == rankings[i][0]}\"><span>{{rank[2]}}</span><span class=\"w3-margin-left\">{{rank[1]}}</span></td>\n        <td [ngClass]=\"{'w3-border-top w3-blue': (!allRankingsSelected) && (i == 0 || rankings[i][3] != rankings[i-1][3]), 'w3-green': currentUserId == rankings[i][0]}\">{{rank[3]}}</td>\n        <td [ngClass]=\"{'w3-border-top w3-blue': (!allRankingsSelected) && (i == 0 || rankings[i][3] != rankings[i-1][3]), 'w3-green': currentUserId == rankings[i][0]}\">{{rank[4]}}</td>\n        <td [ngClass]=\"{'w3-border-top w3-blue': (!allRankingsSelected) && (i == 0 || rankings[i][3] != rankings[i-1][3]), 'w3-green': currentUserId == rankings[i][0]}\">{{rank[5]}}</td>\n        <td [ngClass]=\"{'w3-border-top w3-blue': (!allRankingsSelected) && (i == 0 || rankings[i][3] != rankings[i-1][3]), 'w3-green': currentUserId == rankings[i][0]}\">{{rank[6]}}</td>\n        <td [ngClass]=\"{'w3-border-top w3-blue': (!allRankingsSelected) && (i == 0 || rankings[i][3] != rankings[i-1][3]), 'w3-green': currentUserId == rankings[i][0]}\">{{rank[7]}}</td>\n        <td [ngClass]=\"{'w3-border-top w3-blue': (!allRankingsSelected) && (i == 0 || rankings[i][3] != rankings[i-1][3]), 'w3-green': currentUserId == rankings[i][0]}\">{{rank[8]}}</td>\n      </tr>\n    </table>\n  </div>\n  -->\n<div class=\"w3-card-4\">\n  <div class=\"w3-orange w3-padding\">\n    <i class=\"fa fa-filter\"></i>{{HTMLtext[1]}}\n    <input class=\"w3-input\" type=\"text\" #filter (keyup)=\"onFilterChange(filter.value)\">\n  </div>\n</div>\n\n<div class=\"w3-responsive\">\n  <table class=\"w3-table-all\">\n    <tr class=\"w3-amber\">\n      <th>Pos.</th>\n      <th>Student</th>\n      <th>TOTAAL</th>\n    </tr>\n    <tr [hidden]=\"!filterApplies(rank)\" *ngFor=\"let rank of rankings; index as i\">\n      <td\n        [ngClass]=\"{'w3-border-top w3-blue': (!allRankingsSelected) && (i == 0 || rankings[i][3] != rankings[i-1][3]), 'w3-green': currentUserId == rankings[i][0]}\">\n        <div>{{rank[9]}}</div>\n      </td>\n      <td\n        [ngClass]=\"{'w3-border-top w3-blue': (!allRankingsSelected) && (i == 0 || rankings[i][3] != rankings[i-1][3]), 'w3-green': currentUserId == rankings[i][0]}\">\n        <div><span>{{rank[3]}} - {{rank[2]}}</span><span class=\"w3-margin-left\">{{rank[1]}}</span></div>\n        <div>\n          <span class=\"w3-green w3-border w3-margin-right w3-center\"\n            style=\"display: inline-block; width:30px\">{{rank[4]}}</span>\n          <span class=\"w3-yellow w3-border w3-margin-right w3-center\"\n            style=\"display: inline-block; width:30px\">{{rank[5]}}</span>\n          <span class=\" w3-orange w3-border w3-margin-right  w3-center\"\n            style=\"display: inline-block; width:30px\">{{rank[6]}}</span>\n          <span class=\"w3-red w3-border w3-margin-right w3-center\"\n            style=\"display: inline-block; width:30px\">{{rank[7]}}</span>\n        </div>\n      </td>\n      <td\n        [ngClass]=\"{'w3-border-top w3-blue': (!allRankingsSelected) && (i == 0 || rankings[i][3] != rankings[i-1][3]), 'w3-green': currentUserId == rankings[i][0]}\">\n        {{rank[8]}}</td>\n    </tr>\n  </table>\n</div>"

/***/ }),

/***/ "./src/app/ranking/ranking.component.ts":
/*!**********************************************!*\
  !*** ./src/app/ranking/ranking.component.ts ***!
  \**********************************************/
/*! exports provided: RankingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RankingComponent", function() { return RankingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _model_repository_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../model/repository.model */ "./src/app/model/repository.model.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");






var RankingComponent = /** @class */ (function () {
    function RankingComponent(model, formBuilder, activeRoute, router) {
        this.model = model;
        this.formBuilder = formBuilder;
        this.router = router;
    }
    RankingComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.HTMLtext = JSON.parse(localStorage.getItem('multiLangText'));
        this.currentUserRoleId = JSON.parse(localStorage.getItem('currentUser')).roles[0].id;
        this.currentUserId = JSON.parse(localStorage.getItem('currentUser')).id;
        // console.log(this.currentUserRoleId);
        this.positions = [0];
        this.allRankingsSelected = true;
        // //Dummy position 0
        // this.positions.push(0);
        this.getLastUpdatedDate();
        this.getStartDate();
        this.getEndDate();
        this.model.getAllRankings();
        this.model.allRankingsLoaded.subscribe(function (data) {
            _this.rankings = data;
            console.log(data);
            if (_this.allRankingsSelected) {
                _this.getAllPositions();
            }
            else { //rankings by class is selected
                _this.getAllPositionsSortedByClass();
            }
        }, function (error) {
        });
        localStorage.setItem('rankingFilterText', '');
    };
    RankingComponent.prototype.allRankings = function () {
        this.allRankingsSelected = true;
        this.model.getAllRankings();
    };
    RankingComponent.prototype.allByClassRankings = function () {
        this.allRankingsSelected = false;
        this.model.getRankingsSortedByClass();
    };
    //Add the postions to the end of the array when 'all' is selected
    RankingComponent.prototype.getAllPositions = function () {
        var currentPosition = 1;
        for (var i = 0; i < this.rankings.length; i++) {
            if (i == 0) {
                this.rankings[i][9] = currentPosition;
            }
            else {
                if (this.rankings[i][8] === this.rankings[i - 1][8]) {
                    this.rankings[i][9] = currentPosition;
                }
                else {
                    currentPosition = i + 1;
                    this.rankings[i][9] = currentPosition;
                }
            }
            //Obfuscate names if 
            //1. not teacher or admin logged in
            //2. not logged in user (=student can see  own result)
            //3. not position 1 (first is always shown)
            if ((this.currentUserRoleId < 3 && (this.currentUserId != this.rankings[i][0] && this.rankings[i][9] != 1))) {
                this.rankings[i][1] = this.stringToStar(this.rankings[i][1]);
                this.rankings[i][2] = this.stringToStar(this.rankings[i][2]);
            }
        }
    };
    //Add the positions to the end of the array when 'by class' is selected
    RankingComponent.prototype.getAllPositionsSortedByClass = function () {
        var currentPosition = 1;
        var classCount = 0;
        var startNewClass = true;
        for (var i = 0; i < this.rankings.length; i++) {
            classCount++;
            //Reset position to 1 for start of new class
            if (i === 0 || this.rankings[i][3] != this.rankings[i - 1][3]) {
                currentPosition = 1;
                startNewClass = true;
                classCount = 0;
            }
            if (i == 0 || startNewClass) {
                this.rankings[i][9] = currentPosition;
                startNewClass = false;
                currentPosition = 1;
                classCount = 0;
            }
            else {
                if (this.rankings[i][8] === this.rankings[i - 1][8]) {
                    this.rankings[i][9] = currentPosition;
                }
                else {
                    currentPosition = classCount + 1;
                    this.rankings[i][9] = currentPosition;
                }
            }
            //Obfuscate names if 
            //1. not teacher or admin logged in
            //2. not logged in user (=student can see  own result)
            //3. not position 1 (first is always shown)
            if ((this.currentUserRoleId < 3 && (this.currentUserId != this.rankings[i][0] && this.rankings[i][9] != 1))) {
                this.rankings[i][1] = this.stringToStar(this.rankings[i][1]);
                this.rankings[i][2] = this.stringToStar(this.rankings[i][2]);
            }
        }
    };
    RankingComponent.prototype.stringToStar = function (toOb) {
        return "*".repeat(toOb.length);
    };
    RankingComponent.prototype.getLastUpdatedDate = function () {
        // this.last_update = JSON.parse(localStorage.getItem('rankingSettings'))[0][8] * 1000;
        this.last_update = JSON.parse(localStorage.getItem('rankingSettings')).last_updated * 1000;
        this.lastUpdated = Object(_angular_common__WEBPACK_IMPORTED_MODULE_5__["formatDate"])(this.last_update, 'yyyy-MM-dd', 'en');
    };
    RankingComponent.prototype.getStartDate = function () {
        // this.start_date = JSON.parse(localStorage.getItem('rankingSettings'))[0][6] * 1000;
        this.start_date = JSON.parse(localStorage.getItem('rankingSettings')).ranking_start_date * 1000;
        this.dateFrom = Object(_angular_common__WEBPACK_IMPORTED_MODULE_5__["formatDate"])(this.start_date, 'yyyy-MM-dd', 'en');
    };
    RankingComponent.prototype.getEndDate = function () {
        // this.end_date = JSON.parse(localStorage.getItem('rankingSettings'))[0][7] * 1000;
        this.end_date = JSON.parse(localStorage.getItem('rankingSettings')).ranking_end_date * 1000;
        this.dateTo = Object(_angular_common__WEBPACK_IMPORTED_MODULE_5__["formatDate"])(this.end_date, 'yyyy-MM-dd', 'en');
    };
    RankingComponent.prototype.onFilterChange = function (value) {
        console.log(value);
        localStorage.setItem('rankingFilterText', value);
    };
    RankingComponent.prototype.filterApplies = function (ranking) {
        // console.log('filterText');
        // console.log(localStorage.getItem('filterText'));
        var filterText = localStorage.getItem('rankingFilterText');
        if (filterText.length > 0) {
            if (ranking[1].toLowerCase().includes(filterText.toLowerCase())
                || ranking[2].toLowerCase().includes(filterText.toLowerCase())
                || ranking[3].toLowerCase().includes(filterText.toLowerCase())) {
                return true;
            }
            else {
                return false;
            }
        }
        else {
            return true;
        }
    }; //end of filterApplies
    RankingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-ranking',
            template: __webpack_require__(/*! ./ranking.component.html */ "./src/app/ranking/ranking.component.html"),
            styles: [__webpack_require__(/*! ./ranking.component.css */ "./src/app/ranking/ranking.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_model_repository_model__WEBPACK_IMPORTED_MODULE_3__["Model"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], RankingComponent);
    return RankingComponent;
}());



/***/ }),

/***/ "./src/app/schoolsettings/schoolsettings.component.css":
/*!*************************************************************!*\
  !*** ./src/app/schoolsettings/schoolsettings.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NjaG9vbHNldHRpbmdzL3NjaG9vbHNldHRpbmdzLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/schoolsettings/schoolsettings.component.html":
/*!**************************************************************!*\
  !*** ./src/app/schoolsettings/schoolsettings.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"w3-container\">\n  <div class=\"w3-tiny w3-text-grey w3-padding\">{{HTMLtext[100]}}</div>\n  <p>{{HTMLtext[101]}}</p>\n\n  <div class=\"w3-row\">\n    <div class=\"w3-col l6\">\n      <div class=\"w3-card-4 w3-padding\">\n        <header class=\"w3-container w3-orange\">\n          <h3>{{HTMLtext[102]}}</h3>\n        </header>\n\n        <div class=\"w3-container\"> \n          <form class=\"w3-container\" [formGroup]=\"languageForm\" (ngSubmit)=\"updateLanguage()\">\n            <p>\n              <label class=\"w3-text-orange\"><b>{{HTMLtext[103]}}</b></label>\n              <select class=\"w3-select\" name=\"language\" formControlName=\"language\">\n                <option value=\"\" disabled selected>Choose the language</option>\n                <option value=\"en\" [selected]=\"language == 'en'\">English</option>\n                <option value=\"fr\" [selected]=\"language == 'fr'\">Français</option>\n                <option value=\"nl\" [selected]=\"language == 'nl'\">Nederlands</option>\n              </select></p>\n            <p class=\" w3-center\">\n              <button class=\"w3-btn w3-blue\" [disabled]=\"languageForm.invalid\">{{HTMLtext[104]}}</button></p>\n          </form>\n        </div>\n      </div>\n      <div class=\"w3-text-red\" *ngIf=\"languageForm.get('language').touched && languageForm.get('language').invalid\">\n        {{HTMLtext[105]}}\n      </div>\n    </div>\n  </div>\n\n  <div class=\"w3-row\">\n    <div class=\"w3-col l6\">\n      <div class=\"w3-card-4 w3-padding\">\n        <header class=\"w3-container w3-orange\">\n          <h3>{{HTMLtext[106]}}</h3>\n        </header>\n\n        <div id=\"remarkoptions\" class=\"w3-row w3-container full-height\">\n            <div class=\"w3-row w3-col m11 w3-right-align w3-padding-small\">\n                <button onclick=\"document.getElementById('addRemarkoption').style.display='block'\"\n                  class=\"w3-button w3-green w3-padding w3-margin\"><i class=\"fa fa-plus-circle\" aria-hidden=\"true\"></i>\n                  {{HTMLtext[107]}}\n                </button>\n              </div>\n          <div class=\"w3-row\">\n            <div class=\"w3-col m11 w3-center\">\n              <div class=\"w3-responsive\">\n                <table class=\"w3-table-all w3-card-4\">\n                  <tr>\n                    <th>{{HTMLtext[108]}}</th>\n                    <th>{{HTMLtext[109]}}</th>\n                    <th>{{HTMLtext[110]}}</th>\n                  </tr>\n                  <tr *ngFor=\"let remark of remarkoptions\">\n                    <td>{{remark.option}}</td>\n                    <td><button (click)=onEdit(remark.id) onclick=\"document.getElementById('editRemarkoption').style.display='block'\"><i\n                          class=\"fa fa-pencil-square-o\" aria-hidden=\"true\"></i></button></td>\n                    <td><button (click)=onDelete(remark.id) onclick=\"document.getElementById('deleteRemarkoption').style.display='block'\"><i\n                          class=\"fa fa-window-close\" aria-hidden=\"true\"></i></button></td>\n                  </tr>\n                </table>\n              </div>\n            </div>\n          </div>\n        </div>\n\n      </div>\n    </div>\n  </div>\n\n  <div class=\"w3-row\">\n    <div class=\"w3-col l6\">\n      <div class=\"w3-card-4 w3-padding\">\n        <header class=\"w3-container w3-orange\">\n          <h3>{{HTMLtext[111]}}</h3>\n        </header>\n\n        <div class=\"w3-container\">\n          <form class=\"w3-container\" [formGroup]=\"schoolyearfilterForm\" (ngSubmit)=\"updateSchoolyearfilter()\">\n            <div class=\"w3-row\">\n              <p class=\"w3-col l6 w3-padding\">\n                  <select [(ngModel)]=\"currentSchoolyearId\" class=\"w3-select\" name=\"schoolyearfilter\" formControlName=\"schoolyearfilter\" type=\"text\" >\n                    <option *ngFor=\"let schoolyear of schoolyears\" [value]=\"schoolyear.id\">\n                      {{schoolyear.schoolyear}}\n                    </option>\n                  </select></p>\n          </div>\n            <p class=\" w3-center\">\n              <button [disabled]=\"schoolyearfilterForm.invalid || !schoolyearfilterForm.touched\" class=\"w3-btn w3-blue\">{{HTMLtext[104]}}</button></p>\n          </form>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  \n  <div class=\"w3-row\">\n    <div class=\"w3-col l6\">\n      <div class=\"w3-card-4 w3-padding\">\n        <header class=\"w3-container w3-orange\">\n          <h3>{{HTMLtext[156]}}</h3>\n        </header>\n\n        <div class=\"w3-container\">\n          <form class=\"w3-container\" [formGroup]=\"rankingSettingsForm\" (ngSubmit)=\"updateRankingSettings()\">\n            <div class=\"w3-row\">\n              <div class=\"w3-col m4 w3-padding\">\n                <label class=\"w3-text-orange\"><b>{{HTMLtext[161]}}</b></label>\n                <input class=\"w3-input w3-border\"  name=\"ranking_start_total\" type=\"text\" formControlName=\"ranking_start_total\">\n              </div>\n            </div>\n            <div class=\"w3-row\">\n              <div class=\"w3-col m3 w3-padding\">\n                <label class=\"w3-text-orange\"><b>{{HTMLtext[157]}}</b></label>\n                <input class=\"w3-input w3-border\" name=\"one_penalty\" type=\"text\" formControlName=\"one_penalty\">\n              </div>\n              <div class=\"w3-col m3 w3-padding\">\n                <label class=\"w3-text-orange\"><b>{{HTMLtext[158]}}</b></label>\n                <input class=\"w3-input w3-border\" name=\"two_penalty\" type=\"text\" formControlName=\"two_penalty\">\n              </div>\n              <div class=\"w3-col m3 w3-padding\">\n                <label class=\"w3-text-orange\"><b>{{HTMLtext[159]}}</b></label>\n                <input class=\"w3-input w3-border\" name=\"three_penalty\" type=\"text\" formControlName=\"three_penalty\">\n              </div>\n              <div class=\"w3-col m3 w3-padding\">\n                <label class=\"w3-text-orange\"><b>{{HTMLtext[160]}}</b></label>\n                <input class=\"w3-input w3-border\" name=\"four_penalty\" type=\"text\" formControlName=\"four_penalty\">\n              </div>\n            </div>\n            <div class=\"w3-row\">\n              <div class=\"w3-col m6 w3-padding\">\n                <label class=\"w3-text-orange\"><b>{{HTMLtext[162]}}</b></label>\n                <input class=\"w3-input w3-border\" name=\"ranking_start_date\" type=\"date\" formControlName=\"ranking_start_date\">\n              </div>\n              <div class=\"w3-col m6 w3-padding\">\n                <label class=\"w3-text-orange\"><b>{{HTMLtext[163]}}</b></label>\n                <input class=\"w3-input w3-border\" name=\"ranking_end_date\" type=\"date\" formControlName=\"ranking_end_date\">\n              </div>\n            </div>\n            <p class=\" w3-center\">\n              <button [disabled]=\"rankingSettingsForm.invalid || !rankingSettingsForm.touched\" class=\"w3-btn w3-blue\">{{HTMLtext[104]}}</button></p>\n          </form>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"w3-row\">\n      <div class=\"w3-col l6\">\n        <div class=\"w3-card-4 w3-padding\">\n          <header class=\"w3-container w3-orange\">\n            <h3>Classes (current schoolyear {{currentSchoolyearText}} only!)</h3>\n          </header>\n  \n          <div id=\"classSchoolyears\" class=\"w3-row w3-container full-height\">\n              <div class=\"w3-row w3-col m11 w3-right-align w3-padding-small\">\n                  <button onclick=\"document.getElementById('addCs').style.display='block'\"\n                    class=\"w3-button w3-green w3-padding w3-margin\"><i class=\"fa fa-plus-circle\" aria-hidden=\"true\"></i>\n                    Add class\n                  </button>\n                </div>\n            <div class=\"w3-row\">\n              <div class=\"w3-col m11 w3-center\">\n                <div class=\"w3-responsive\">\n                  <table class=\"w3-table-all w3-card-4\">\n                    <tr>\n                      <th>Class name</th>\n                      <th>{{HTMLtext[109]}}</th>\n                      <th>{{HTMLtext[110]}}</th>\n                    </tr>\n                    <tr *ngFor=\"let cs of classSchoolyears\">\n                      <td>{{cs.schoolClass}}</td>\n                      <td><button (click)=onCSEdit(cs.class_schoolyear_id) onclick=\"document.getElementById('editCs').style.display='block'\"><i\n                            class=\"fa fa-pencil-square-o\" aria-hidden=\"true\"></i></button></td>\n                      <td><button (click)=onCSDelete(cs.class_schoolyear_id) onclick=\"document.getElementById('deleteCS').style.display='block'\"><i\n                            class=\"fa fa-window-close\" aria-hidden=\"true\"></i></button></td>\n                    </tr>\n                  </table>\n                </div>\n              </div>\n            </div>\n          </div>\n  \n        </div>\n      </div>\n    </div>\n\n</div>\n\n<div id=\"editRemarkoption\" class=\"w3-modal\">\n    <div class=\"w3-modal-content w3-animate-top\">\n      <form [formGroup]=\"editRemarkForm\" (ngSubmit)=\"saveEditedRemark()\">\n        <div class=\"w3-card-4 w3-light-grey\">\n          <header class=\"w3-container w3-orange\">\n            <span onclick=\"document.getElementById('editRemarkoption').style.display='none'\"\n              class=\"w3-button w3-display-topright\">&times;</span>\n            <h2>{{HTMLtext[112]}}</h2>\n          </header>\n          <div class=\"w3-container\">\n            <div class=\"w3-row\">\n              <div class=\"w3-container\">\n                <p class=\"w3-col l6 w3-padding\">\n                  <label class=\"w3-text-orange\"><b>{{HTMLtext[113]}}</b></label>\n                  <input class=\"w3-input w3-border\" name=\"remark\" type=\"text\" formControlName=\"remark\"></p>\n              </div>\n            </div>\n            <p class=\" w3-center\">\n              <button type=\"button\" (click)=\"saveEditedRemark()\" class=\"w3-btn w3-blue\"\n              onclick=\"document.getElementById('editRemarkoption').style.display='none'\">{{HTMLtext[114]}}</button></p>\n          </div>\n        </div>\n        </form>\n    </div>\n  </div>\n\n<div id=\"addRemarkoption\" class=\"w3-modal\">\n    <div class=\"w3-modal-content w3-animate-top\">\n        <div class=\"w3-card-4 w3-light-grey\">\n          <header class=\"w3-container w3-green\">\n            <span onclick=\"document.getElementById('addRemarkoption').style.display='none'\"\n              class=\"w3-button w3-display-topright\">&times;</span>\n            <h2>{{HTMLtext[115]}}</h2>\n          </header>\n          <div class=\"w3-container\">\n            <form class=\"w3-container\" [formGroup]=\"addRemarkForm\" (ngSubmit)=\"addRemark()\">\n              <p>\n                <label class=\"w3-text-orange\"><b>{{HTMLtext[116]}}</b></label>\n                <input class=\"w3-input w3-border\" name=\"remark\" type=\"text\" formControlName=\"remark\"></p>\n                <div class=\"w3-text-red\" *ngIf=\"addRemarkForm.get('remark').touched && addRemarkForm.get('remark').invalid\">\n                  {{HTMLtext[105]}}\n                </div>\n              <p class=\" w3-center\">\n                <button [disabled]=\"addRemarkForm.invalid\" type=\"button\" class=\"w3-btn w3-blue\" (click)=\"addRemark()\"\n                onclick=\"document.getElementById('addRemarkoption').style.display='none'\">{{HTMLtext[117]}}</button></p>\n            </form>\n          </div>\n        </div>\n    </div>\n  </div>\n\n<div id=\"deleteRemarkoption\" class=\"w3-modal\">\n    <div class=\"w3-modal-content w3-animate-top\">\n      <header class=\"w3-container w3-red\">\n        <span onclick=\"document.getElementById('deleteRemarkoption').style.display='none'\"\n          class=\"w3-button w3-display-topright\">&times;</span>\n        <h2>{{HTMLtext[118]}}</h2>\n      </header>\n      <div class=\"w3-container w3-center\">\n        <p *ngIf(toDelete)>{{HTMLtext[119]}}\n      </div>\n      <div class=\"w3-container w3-padding-small w3-center\">\n        <button class=\"w3-button w3-red w3-margin\" (click)=\"onDeleteFinal()\" \n          onclick=\"document.getElementById('deleteRemarkoption').style.display='none'\"> {{HTMLtext[27]}}</button>\n        <button onclick=\"document.getElementById('deleteRemarkoption').style.display='none'\" class=\"w3-button w3-grey w3-margin\"> \n          {{HTMLtext[28]}}\n        </button>\n      </div>\n    </div>\n  </div>\n\n  <div id=\"editCs\" class=\"w3-modal\">\n      <div class=\"w3-modal-content w3-animate-top\">\n        <form [formGroup]=\"editCSForm\" (ngSubmit)=\"saveEditedCS()\">\n          <div class=\"w3-card-4 w3-light-grey\">\n            <header class=\"w3-container w3-orange\">\n              <span onclick=\"document.getElementById('editCs').style.display='none'\"\n                class=\"w3-button w3-display-topright\">&times;</span>\n              <h2>Edit classes</h2>\n            </header>\n            <div class=\"w3-container\">\n              <div class=\"w3-row\">\n                <div class=\"w3-container\">\n                  <p class=\"w3-col l6 w3-padding\">\n                    <label class=\"w3-text-orange\"><b>Class</b></label>\n                    <input class=\"w3-input w3-border\" name=\"cs\" type=\"text\" formControlName=\"cs\"></p>\n                </div>\n              </div>\n              <p class=\" w3-center\">\n                <button type=\"button\" (click)=\"saveEditedCS()\" class=\"w3-btn w3-blue\"\n                onclick=\"document.getElementById('editCs').style.display='none'\">{{HTMLtext[114]}}</button></p>\n            </div>\n          </div>\n          </form>\n      </div>\n    </div>\n\n    <div id=\"addCs\" class=\"w3-modal\">\n        <div class=\"w3-modal-content w3-animate-top\">\n            <div class=\"w3-card-4 w3-light-grey\">\n              <header class=\"w3-container w3-green\">\n                <span onclick=\"document.getElementById('addCs').style.display='none'\"\n                  class=\"w3-button w3-display-topright\">&times;</span>\n                <h2>Add class</h2>\n              </header>\n              <div class=\"w3-container\">\n                <form class=\"w3-container\" [formGroup]=\"addCSForm\" (ngSubmit)=\"addCS()\">\n                  <p>\n                    <label class=\"w3-text-orange\"><b>Class to add</b></label>\n                    <input class=\"w3-input w3-border\" name=\"cs\" type=\"text\" formControlName=\"cs\"></p>\n                    <div class=\"w3-text-red\" *ngIf=\"addCSForm.get('cs').touched && addCSForm.get('cs').invalid\">\n                      This field must be valid\n                    </div>\n                  <p class=\" w3-center\">\n                    <button [disabled]=\"addCSForm.invalid\" type=\"button\" class=\"w3-btn w3-blue\" (click)=\"addCS()\"\n                    onclick=\"document.getElementById('addCs').style.display='none'\">{{HTMLtext[117]}}</button></p>\n                </form>\n              </div>\n            </div>\n        </div>\n      </div>\n\n      <div id=\"deleteCS\" class=\"w3-modal\">\n          <div class=\"w3-modal-content w3-animate-top\">\n            <header class=\"w3-container w3-red\">\n              <span onclick=\"document.getElementById('deleteCS').style.display='none'\"\n                class=\"w3-button w3-display-topright\">&times;</span>\n              <h2>{{HTMLtext[118]}}</h2>\n            </header>\n            <div class=\"w3-container w3-center\">\n              <p *ngIf(csToDelete)>{{HTMLtext[119]}}\n            </div>\n            <div class=\"w3-container w3-padding-small w3-center\">\n              <button class=\"w3-button w3-red w3-margin\" (click)=\"onDeleteCSFinal()\" \n                onclick=\"document.getElementById('deleteCS').style.display='none'\"> {{HTMLtext[27]}}</button>\n              <button onclick=\"document.getElementById('deleteCS').style.display='none'\" class=\"w3-button w3-grey w3-margin\"> \n                {{HTMLtext[28]}}\n              </button>\n            </div>\n          </div>\n        </div>"

/***/ }),

/***/ "./src/app/schoolsettings/schoolsettings.component.ts":
/*!************************************************************!*\
  !*** ./src/app/schoolsettings/schoolsettings.component.ts ***!
  \************************************************************/
/*! exports provided: SchoolSettingsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SchoolSettingsComponent", function() { return SchoolSettingsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _model_repository_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../model/repository.model */ "./src/app/model/repository.model.ts");
/* harmony import */ var _model_remarkoptions_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../model/remarkoptions.model */ "./src/app/model/remarkoptions.model.ts");
/* harmony import */ var _model_class_schoolyear_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../model/class_schoolyear.model */ "./src/app/model/class_schoolyear.model.ts");
/* harmony import */ var _model_rankingSettings_model__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../model/rankingSettings.model */ "./src/app/model/rankingSettings.model.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");









var SchoolSettingsComponent = /** @class */ (function () {
    function SchoolSettingsComponent(model, formBuilder, activeRoute, router) {
        this.model = model;
        this.formBuilder = formBuilder;
        this.router = router;
    }
    SchoolSettingsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.HTMLtext = JSON.parse(localStorage.getItem('multiLangText'));
        this.rankingSettings = new _model_rankingSettings_model__WEBPACK_IMPORTED_MODULE_7__["RankingSettings"]();
        this.initRankingSettings();
        this.model.remarkoptionChangeDetected.subscribe(function (data) {
            _this.remarkoptions = JSON.parse(localStorage.getItem('remarkoptions'));
        });
        this.model.rankingSettingsLoaded.subscribe(function (data) {
            _this.initRankingSettings();
            console.log("ranking settings loaded");
        }, function (error) {
            console.log("error loading rankingsettings...");
        });
        this.model.classSchoolyearsLoaded.subscribe(function (data) {
            _this.classSchoolyears = JSON.parse(localStorage.getItem('classSchoolyears'));
            if (localStorage.getItem('currentSchoolyearId')) {
                _this.currentSchoolyearId = JSON.parse(localStorage.getItem('currentSchoolyearId'));
                _this.setCurrentSchoolyearText();
            }
        });
        this.model.schoolyearFilterUpdated.subscribe(function (data) {
            _this.model.getClassSchoolyearsBySchoolyear();
        });
        this.schoolyears = JSON.parse(localStorage.getItem('schoolyears'));
        console.log("schoolyears in schoolsettings: " + this.schoolyears);
        if (localStorage.getItem('currentSchoolyearId')) {
            this.currentSchoolyearId = JSON.parse(localStorage.getItem('currentSchoolyearId'));
            this.setCurrentSchoolyearText();
        }
        if (localStorage.getItem('language')) {
            this.language = localStorage.getItem('language');
        }
        this.languageForm = this.formBuilder.group({
            language: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
        });
        this.schoolyearfilterForm = this.formBuilder.group({
            schoolyearfilter: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
        });
        if (localStorage.getItem('remarkoptions')) {
            this.remarkoptions = JSON.parse(localStorage.getItem('remarkoptions'));
        }
        if (localStorage.getItem('classSchoolyears')) {
            this.classSchoolyears = JSON.parse(localStorage.getItem('classSchoolyears'));
        }
        console.log('updating schoolyearfilter...');
        console.log("currentschoolyearid: " + this.currentSchoolyearId);
        this.initForms();
    };
    SchoolSettingsComponent.prototype.initRankingSettings = function () {
        // this.rankingSettings.ranking_settings_id = JSON.parse(localStorage.getItem('rankingSettings'))[0][0];
        //   this.rankingSettings.ranking_start_total = JSON.parse(localStorage.getItem('rankingSettings'))[0][1];
        //   this.rankingSettings.one_penalty = JSON.parse(localStorage.getItem('rankingSettings'))[0][2];
        //   this.rankingSettings.two_penalty = JSON.parse(localStorage.getItem('rankingSettings'))[0][3];
        //   this.rankingSettings.three_penalty = JSON.parse(localStorage.getItem('rankingSettings'))[0][4];
        //   this.rankingSettings.four_penalty = JSON.parse(localStorage.getItem('rankingSettings'))[0][5];
        //   // this.rankingSettings.ranking_start_date = formatDate(JSON.parse(localStorage.getItem('rankingSettings'))[0][6],"dd/MM/yyyy",'en-US');
        //   this.ranking_start_date = formatDate(JSON.parse(localStorage.getItem('rankingSettings'))[0][6]*1000,"yyyy-MM-dd",'en');
        //   // this.rankingSettings.ranking_end_date = JSON.parse(localStorage.getItem('rankingSettings'))[0][7];
        //   this.ranking_end_date = formatDate(JSON.parse(localStorage.getItem('rankingSettings'))[0][7]*1000,"yyyy-MM-dd",'en');
        //   this.rankingSettings.last_updated = JSON.parse(localStorage.getItem('rankingSettings'))[0][8];
        this.rankingSettings = JSON.parse(localStorage.getItem('rankingSettings'));
        this.ranking_start_date = Object(_angular_common__WEBPACK_IMPORTED_MODULE_8__["formatDate"])(this.rankingSettings.ranking_start_date * 1000, "yyyy-MM-dd", 'en');
        this.ranking_end_date = Object(_angular_common__WEBPACK_IMPORTED_MODULE_8__["formatDate"])(this.rankingSettings.ranking_end_date * 1000, "yyyy-MM-dd", 'en');
        console.log(this.ranking_start_date);
        console.log(this.rankingSettings.ranking_settings_id);
        console.log(this.rankingSettings.one_penalty);
    };
    SchoolSettingsComponent.prototype.initRankingSettingsForm = function () {
        this.rankingSettingsForm.controls['ranking_start_total'].setValue(this.rankingSettings.ranking_start_total);
        this.rankingSettingsForm.controls['one_penalty'].setValue(this.rankingSettings.one_penalty);
        this.rankingSettingsForm.controls['two_penalty'].setValue(this.rankingSettings.two_penalty);
        this.rankingSettingsForm.controls['three_penalty'].setValue(this.rankingSettings.three_penalty);
        this.rankingSettingsForm.controls['four_penalty'].setValue(this.rankingSettings.four_penalty);
        // this.rankingSettingsForm.controls['ranking_start_date'].setValue(this.rankingSettings.ranking_start_date);
        this.rankingSettingsForm.controls['ranking_start_date'].setValue(this.ranking_start_date);
        // this.rankingSettingsForm.controls['ranking_end_date'].setValue(this.rankingSettings.ranking_end_date);
        this.rankingSettingsForm.controls['ranking_end_date'].setValue(this.ranking_end_date);
    };
    SchoolSettingsComponent.prototype.updateLanguage = function () {
        console.log('updating language...');
        this.model.updateSchoolLanguage(this.languageForm.get('language').value, JSON.parse(localStorage.getItem('currentSchool')).id);
    };
    SchoolSettingsComponent.prototype.updateSchoolyearfilter = function () {
        // console.log('updating schoolyearfilter...');
        // console.log("currentschoolyearid: " + this.currentSchoolyearId);
        this.model.updateSchoolyearfilter(this.schoolyearfilterForm.get('schoolyearfilter').value, JSON.parse(localStorage.getItem('currentSchool')).id);
    };
    SchoolSettingsComponent.prototype.setCurrentSchoolyearText = function () {
        var _this = this;
        this.currentSchoolyearText = this.schoolyears.find(function (x) { return x.id === _this.currentSchoolyearId; }).schoolyear;
    };
    // ------------------------------- START OF CRUD OF REMARKOPTIONS ----------------------------------------------
    SchoolSettingsComponent.prototype.onEdit = function (remarkid) {
        // this.remarkoptions = JSON.parse(localStorage.getItem('remarkoptions'));
        this.toEdit = this.remarkoptions.find(function (x) { return x.id === remarkid; });
        console.log(this.toEdit);
        this.editRemarkForm.setValue({
            remark: this.toEdit.option
        });
    };
    SchoolSettingsComponent.prototype.saveEditedRemark = function () {
        this.toEdit.option = this.editRemarkForm.controls['remark'].value;
        this.model.editRemarkoption(this.toEdit);
        this.editRemarkForm.controls['remark'].setValue("");
    };
    SchoolSettingsComponent.prototype.addRemark = function () {
        var remarkoption = new _model_remarkoptions_model__WEBPACK_IMPORTED_MODULE_5__["Remarkoptions"]();
        remarkoption.option = this.addRemarkForm.controls['remark'].value;
        this.model.addRemarkoption(remarkoption);
        this.addRemarkForm.controls['remark'].setValue("");
    };
    SchoolSettingsComponent.prototype.onDelete = function (remarkid) {
        this.toDelete = this.remarkoptions.find(function (x) { return x.id === remarkid; });
    };
    SchoolSettingsComponent.prototype.onDeleteFinal = function () {
        this.model.deleteRemarkoption(this.toDelete);
    };
    // ------------------------------- END OF CRUD OF REMARKOPTIONS ----------------------------------------------
    // ------------------------------- START OF CRUD OF CLASS_SCHOOLYEARS ----------------------------------------------
    SchoolSettingsComponent.prototype.addCS = function () {
        var cs = new _model_class_schoolyear_model__WEBPACK_IMPORTED_MODULE_6__["Class_schoolyear"]();
        cs.schoolClass = this.addCSForm.controls['cs'].value;
        cs.schoolyear_id = JSON.parse(localStorage.getItem('currentSchoolyearId'));
        this.model.addClassSchoolyear(cs);
        this.addCSForm.controls['cs'].setValue("");
    };
    SchoolSettingsComponent.prototype.onCSEdit = function (CSid) {
        this.csToEdit = this.classSchoolyears.find(function (x) { return x.class_schoolyear_id === CSid; });
        console.log(this.csToEdit);
        this.editCSForm.setValue({
            cs: this.csToEdit.schoolClass
        });
    };
    SchoolSettingsComponent.prototype.saveEditedCS = function () {
        this.csToEdit.schoolClass = this.editCSForm.controls['cs'].value;
        this.model.editClassSchoolyear(this.csToEdit);
        this.editCSForm.controls['cs'].setValue("");
    };
    SchoolSettingsComponent.prototype.onCSDelete = function (CSid) {
        this.csToDelete = this.classSchoolyears.find(function (x) { return x.class_schoolyear_id === CSid; });
    };
    SchoolSettingsComponent.prototype.onDeleteCSFinal = function () {
        this.model.deleteClassSchoolyear(this.csToDelete.class_schoolyear_id);
    };
    // ------------------------------- END OF CRUD OF CLASS_SCHOOLYEARS ----------------------------------------------
    // ------------------------------- START OF UPDATE RANKINGSETTINGS ----------------------------------------------
    SchoolSettingsComponent.prototype.updateRankingSettings = function () {
        console.log("updateRankingSettings");
        var r = new _model_rankingSettings_model__WEBPACK_IMPORTED_MODULE_7__["RankingSettings"]();
        r.ranking_settings_id = 1;
        r.ranking_start_total = this.rankingSettingsForm.controls['ranking_start_total'].value;
        r.one_penalty = this.rankingSettingsForm.controls['one_penalty'].value;
        r.two_penalty = this.rankingSettingsForm.controls['two_penalty'].value;
        r.three_penalty = this.rankingSettingsForm.controls['three_penalty'].value;
        r.four_penalty = this.rankingSettingsForm.controls['four_penalty'].value;
        r.ranking_start_date = new Date(this.rankingSettingsForm.controls['ranking_start_date'].value).getTime() / 1000;
        r.ranking_end_date = new Date(this.rankingSettingsForm.controls['ranking_end_date'].value).getTime() / 1000;
        r.last_updated = new Date().getTime() / 1000;
        console.log(r);
        this.model.updateRankingSettings(r);
    };
    // ------------------------------- END OF UPDATE RANKINGSETTINGS ----------------------------------------------
    SchoolSettingsComponent.prototype.initForms = function () {
        this.addRemarkForm = this.formBuilder.group({
            remark: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
        });
        this.editRemarkForm = this.formBuilder.group({
            remark: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
        });
        this.addCSForm = this.formBuilder.group({
            cs: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
        });
        this.editCSForm = this.formBuilder.group({
            cs: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
        });
        this.rankingSettingsForm = this.formBuilder.group({
            ranking_start_total: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            one_penalty: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            two_penalty: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            three_penalty: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            four_penalty: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            ranking_start_date: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            ranking_end_date: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
        });
        this.initRankingSettingsForm();
        //    this.rankingSettingsForm.controls['ranking_start_total'].setValue(this.rankingSettings.ranking_start_total);
    };
    SchoolSettingsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-schoolsettings',
            template: __webpack_require__(/*! ./schoolsettings.component.html */ "./src/app/schoolsettings/schoolsettings.component.html"),
            styles: [__webpack_require__(/*! ./schoolsettings.component.css */ "./src/app/schoolsettings/schoolsettings.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_model_repository_model__WEBPACK_IMPORTED_MODULE_4__["Model"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], SchoolSettingsComponent);
    return SchoolSettingsComponent;
}());



/***/ }),

/***/ "./src/app/settings/settings.component.css":
/*!*************************************************!*\
  !*** ./src/app/settings/settings.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NldHRpbmdzL3NldHRpbmdzLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/settings/settings.component.html":
/*!**************************************************!*\
  !*** ./src/app/settings/settings.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"w3-container\">\n  <div class=\"w3-tiny w3-text-grey w3-padding\">Home -> {{HTMLtext[36]}}</div>\n  <p>{{HTMLtext[37]}}</p>\n\n  <div class=\"w3-row\">\n    <div class=\"w3-col l6\">\n      <div class=\"w3-card-4 w3-padding\">\n        <header class=\"w3-container w3-orange\">\n          <h3>{{HTMLtext[38]}}</h3>\n        </header>\n\n        <div class=\"w3-container\">\n          <form [formGroup]=\"passwordForm\" (ngSubmit)=\"saveEditedPassword()\">\n            <p>\n              <label class=\"w3-text-orange\"><b>{{HTMLtext[39]}}</b></label>\n              <input class=\"w3-input w3-border w3-lightgrey\" name=\"oldpassword\" type=\"text\"\n                name=\"oldpassword\" formControlName=\"oldpassword\"></p>\n                <div class=\"w3-text-red\" *ngIf=\"!oldPasswordCorrect\">\n                    {{HTMLtext[40]}}\n              </div>\n            <p>\n              <label class=\"w3-text-orange\"><b>{{HTMLtext[41]}} </b></label>\n              <input (input)=\"checkPasswordMatchEdit()\" class=\"w3-input w3-border w3-lightgrey\" \n                name=\"newpassword\" type=\"text\" formControlName=\"newpassword\"></p>\n            <p>\n              <label class=\"w3-text-orange\"><b>{{HTMLtext[42]}}</b></label>\n              <input (input)=\"checkPasswordMatchEdit()\" class=\"w3-input w3-border w3-lightgrey\" \n                name=\"newpasswordagain\" type=\"text\" formControlName=\"newpasswordagain\"></p>\n\n            <p class=\" w3-center\">\n              <button [disabled]=\"passwordForm.invalid\" class=\"w3-btn w3-blue\">{{HTMLtext[43]}}</button></p>\n          </form>\n        </div>\n      </div>\n\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/settings/settings.component.ts":
/*!************************************************!*\
  !*** ./src/app/settings/settings.component.ts ***!
  \************************************************/
/*! exports provided: SettingsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsComponent", function() { return SettingsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _model_repository_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../model/repository.model */ "./src/app/model/repository.model.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _model_EditPasswordForm_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../model/EditPasswordForm.model */ "./src/app/model/EditPasswordForm.model.ts");






var SettingsComponent = /** @class */ (function () {
    function SettingsComponent(model, formBuilder, activeRoute, router) {
        this.model = model;
        this.formBuilder = formBuilder;
        this.router = router;
    }
    SettingsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.initForms();
        this.oldPasswordCorrect = true;
        this.HTMLtext = JSON.parse(localStorage.getItem('multiLangText'));
        this.pwchanged = false;
        this.model.studentPasswordUpdated.subscribe(function (data) {
            //Password can now be changed again
            _this.pwchanged = false;
            console.log("studentPasswordUpdated");
        }, function (error) {
            //Password can now be changed again
            _this.pwchanged = false;
        });
        //Only try to save if old password is valid
        this.model.passwordValid.subscribe(function (data) {
            //        this.pwvalid = true;
            console.log("passwordvalid");
            console.log(data);
            if (data && !_this.pwchanged) {
                _this.saveEditedPassword2();
                _this.pwchanged = true;
            }
            else {
                if (!data) {
                    console.log("invalid password");
                }
                if (_this.pwchanged) {
                    console.log("Password was already changed");
                }
            }
        }, function (error) {
            console.log("Error while saving with valid old password.");
        });
    };
    SettingsComponent.prototype.saveEditedPassword2 = function () {
        //    if(this.pwvalid){
        console.log("saveEditedPassword2");
        var newpw = this.passwordForm.get('newpassword').value;
        var newpwagain = this.passwordForm.get('newpasswordagain').value;
        if (newpw == newpwagain && newpw.length > 0) {
            var userId = (JSON.parse(localStorage.getItem('currentUser'))).id;
            this.model.updateStudentPassword(new _model_EditPasswordForm_model__WEBPACK_IMPORTED_MODULE_5__["EditPasswordForm"](userId, newpw));
        }
        this.passwordForm.setValue({
            oldpassword: '',
            newpassword: '',
            newpasswordagain: ''
        });
        //Password can now be changed again
        // this.pwchanged = false;
        // this.oldPasswordCorrect = true;
        //      }
    };
    SettingsComponent.prototype.saveEditedPassword = function () {
        var userId = (JSON.parse(localStorage.getItem('currentUser'))).id;
        var pw = this.passwordForm.get('oldpassword').value;
        //    let correctPW = 
        this.model.validatePassword({
            id: userId,
            password: pw
        });
        //    console.log("correctPW: " + correctPW);
        // if(!correctPW){
        //   this.oldPasswordCorrect = false;
        // }
        // else {
        //   this.oldPasswordCorrect = true;
        // }
    };
    SettingsComponent.prototype.checkPasswordMatchEdit = function () {
        console.log("checking password match... ");
        if (this.passwordForm.get('newpassword').value == this.passwordForm.get('newpasswordagain').value) {
            console.log("checkPasswordMatchEdit: true");
            this.passwordsMatch = true;
        }
        else {
            console.log("false");
            this.passwordsMatch = false;
        }
    };
    //Our own custom validator for checking password and passwordagain match
    SettingsComponent.prototype.passwordMatchValidator = function (group) {
        if (group) {
            console.log("checking password match with validator: ");
            console.log("newpassword: " + group.get("newpassword").value);
            console.log("newpasswordagain: " + group.get("newpasswordagain").value);
            if (group.get("newpassword").value !== group.get("newpasswordagain").value) {
                return { notMatching: true };
            }
        }
        return null;
    };
    SettingsComponent.prototype.initForms = function () {
        this.passwordForm = this.formBuilder.group({
            oldpassword: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            newpassword: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            newpasswordagain: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
        this.passwordForm.setValidators(this.passwordMatchValidator);
    };
    SettingsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-settings',
            template: __webpack_require__(/*! ./settings.component.html */ "./src/app/settings/settings.component.html"),
            styles: [__webpack_require__(/*! ./settings.component.css */ "./src/app/settings/settings.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_model_repository_model__WEBPACK_IMPORTED_MODULE_3__["Model"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], SettingsComponent);
    return SettingsComponent;
}());



/***/ }),

/***/ "./src/app/signup/signup.component.css":
/*!*********************************************!*\
  !*** ./src/app/signup/signup.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NpZ251cC9zaWdudXAuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/signup/signup.component.html":
/*!**********************************************!*\
  !*** ./src/app/signup/signup.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"w3-row\">\n  <h1 class=\"w3-text-orange w3-center w3-border-bottom w3-padding\"><b>NOTATIS</b></h1>\n</div>\n\n<div>\n    <form class=\"w3-container\" [formGroup]=\"signupForm\" (ngSubmit)=\"signup()\">\n    <div class=\"w3-container\">\n      <h2>Maak een account voor jouw school. Het kost je minder dan 2 minuten!</h2>\n      <p>Gelieve het formulier met de schoolinformatie en beheerdersinformatie in te vullen om een account aan te maken.\n      </p>\n      <hr>\n\n        <h3 class=\"w3-text-white w3-orange w3-padding\">Beheerdersinformatie</h3>\n        <div class=\"w3-row\">\n          <div class=\"w3-col m2 w3-container\">\n\n          </div>\n\n          <div class=\"w3-col m8 w3-panel w3-light-grey w3-card w3-padding w3-container\">\n            <div class=\"w3-text-orange\"><b>Voornaam van de beheerder</b></div>\n            <div class=\"w3-margin-bottom\">\n              <input class=\"w3-input\" placeholder=\"Voornaam\" formControlName=\"firstName\" name=\"firstName\" required>\n            </div>\n\n            <div class=\"w3-text-orange\"><b>Familienaam van de beheerder</b></div>\n            <div class=\"w3-margin-bottom\">\n              <input class=\"w3-input\" placeholder=\"Familienaam\" formControlName=\"lastName\" name=\"lastName\" required>\n            </div>\n\n            <div class=\"w3-text-orange\"><b>Taal</b></div>\n            <div class=\"w3-margin-bottom\">\n              <select class=\"w3-select\" formControlName=\"language\" name=\"language\">\n                <option value=\"\" disabled selected>Kies de taal</option>\n                <option value=\"en\" [selected]=\"language == 'en'\">English</option>\n                <option value=\"fr\" [selected]=\"language == 'fr'\">Français</option>\n                <option value=\"nl\" [selected]=\"language == 'nl'\">Nederlands</option>\n              </select>\n            </div>\n\n            <div class=\"w3-text-orange\"><b>E-mailadres</b></div>\n            <div class=\"w3-margin-bottom\">\n              <input class=\"w3-input\" placeholder=\"e-mail\" formControlName=\"email\" name=\"email\" required>\n            </div>\n\n            <div class=\"w3-text-orange\"><b>Wachtwoord</b></div>\n            <div class=\"w3-margin-bottom\">\n              <input (input)=\"checkPasswordMatch()\" class=\"w3-input\" placeholder=\"Kies een wachtwoord\" formControlName=\"password\" name=\"password\" required>\n            </div>\n            <div class=\"w3-text-red\" *ngIf=\"signupForm.get('password').touched && signupForm.get('password').invalid\">\n                This is a required field.\n              </div>\n\n            <div class=\"w3-text-orange\"><b>Bevestig wachtwoord</b></div>\n            <div class=\"w3-margin-bottom\">\n              <input (input)=\"checkPasswordMatch()\" class=\"w3-input\" placeholder=\"Typ het gekozen wachtwoord opnieuw\" formControlName=\"passwordagain\" name=\"passwordagain\" required>\n            </div>\n            <div class=\"w3-text-red\" *ngIf=\"!passwordsMatch\">\n                This is a required field that must match the password field.\n              </div>\n          </div>\n\n          <div class=\"w3-col m2 w3-container\">\n\n          </div>\n        </div>\n\n        <h3 class=\"w3-text-white w3-orange w3-padding\">Schoolinformatie</h3>\n        <div class=\"w3-row\">\n          <div class=\"w3-col m2 w3-container\">\n\n          </div>\n\n          <div class=\"w3-col m8 w3-panel w3-light-grey w3-card w3-padding w3-container\">\n            <div class=\"w3-text-orange\"><b>Naam van de school: </b></div>\n            <div class=\"w3-margin-bottom\">\n              <input class=\"w3-input\" placeholder=\"Geef de schoolnaam in, bv. Koninklijk Atheneum Brussel\"\n                name=\"schoolName\" formControlName=\"schoolName\" required>\n            </div>\n\n            <div class=\"w3-text-orange\"><b>Schoolcode: </b></div>\n            <div class=\"w3-margin-bottom\">\n              <input class=\"w3-input\" placeholder=\"Kies een code om je school te identificeren, bv. KABrussel\"\n                name=\"schoolCode\" formControlName=\"schoolCode\" required>\n            </div>\n\n            <div class=\"w3-text-orange\"><b>Straat: </b></div>\n            <div class=\"w3-margin-bottom\">\n              <input class=\"w3-input\" placeholder=\"Vul hier de straat in\" formControlName=\"street\" name=\"street\" required>\n            </div>\n\n            <div class=\"w3-text-orange\"><b>Huisnummer: </b></div>\n            <div class=\"w3-margin-bottom\">\n              <input class=\"w3-input\" placeholder=\"Vul hier het huisnummer in\" formControlName=\"number\" name=\"number\" required>\n            </div>\n\n            <div class=\"w3-text-orange\"><b>Postcode: </b></div>\n            <div class=\"w3-margin-bottom\">\n              <input class=\"w3-input\" placeholder=\"Vul hier de postcode in\" formControlName=\"postalCode\" name=\"postalCode\" required>\n            </div>\n\n            <div class=\"w3-text-orange\"><b>Stad: </b></div>\n            <div class=\"w3-margin-bottom\">\n              <input class=\"w3-input\" placeholder=\"Vul hier de stad in\" formControlName=\"city\" name=\"city\" required>\n            </div>\n\n            <div class=\"w3-text-orange\"><b>Land: </b></div>\n            <div class=\"w3-margin-bottom\">\n              <input class=\"w3-input\" placeholder=\"Vul hier het land in\" formControlName=\"country\" name=\"country\" required>\n            </div>\n\n            <div class=\"w3-text-orange\"><b>Telefoonnumer: </b></div>\n            <div class=\"w3-margin-bottom\">\n              <input class=\"w3-input\" placeholder=\"Vul hier het telefoonnumer van de school in\" formControlName=\"phone\" name=\"phone\"\n                required>\n            </div>\n          </div>\n      <div class=\"w3-col m2 w3-container\">\n\n      </div>\n    </div>\n\n    <p>Door het aanmaken van een account verklaar je je akkoord met onze <a href=\"#\" style=\"color:dodgerblue\">Algemene\n        voorwaarden</a>.</p>\n\n    <div class=\"w3-center w3-margin-bottom\">\n      <button [disabled]=\"signupForm.invalid\" type=\"submit\" class=\"w3-button w3-margin-right w3-blue\">Maak Account</button>\n      <a href=\"#\" class=\"w3-button w3-grey\">Annuleer</a>\n    </div>\n\n</div>\n</form>\n</div>"

/***/ }),

/***/ "./src/app/signup/signup.component.ts":
/*!********************************************!*\
  !*** ./src/app/signup/signup.component.ts ***!
  \********************************************/
/*! exports provided: SignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupComponent", function() { return SignupComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _model_repository_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../model/repository.model */ "./src/app/model/repository.model.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _model_signupSchool_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../model/signupSchool.model */ "./src/app/model/signupSchool.model.ts");
/* harmony import */ var _model_signupUser_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../model/signupUser.model */ "./src/app/model/signupUser.model.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _model_role_model__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../model/role.model */ "./src/app/model/role.model.ts");









var SignupComponent = /** @class */ (function () {
    function SignupComponent(_Activatedroute, _router, model, formBuilder) {
        this._Activatedroute = _Activatedroute;
        this._router = _router;
        this.model = model;
        this.formBuilder = formBuilder;
    }
    SignupComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.initForm();
        //Second part of first signup step = actually creating the admin user for this school that just signed up 
        //This happens after below method signup() gets back a result
        this.model.schoolInfoUpdated.subscribe(function (school) {
            console.log('schoolInfoUpdated');
            console.log(school);
            var confirmationuid;
            confirmationuid = school.confirmationuid;
            var signupUser;
            signupUser = new _model_signupUser_model__WEBPACK_IMPORTED_MODULE_6__["SignupUser"]();
            signupUser.firstName = _this.signupForm.get("firstName").value;
            ;
            signupUser.lastName = _this.signupForm.get("lastName").value;
            signupUser.language = _this.signupForm.get("language").value;
            signupUser.email = _this.signupForm.get("email").value;
            signupUser.username = _this.signupForm.get("email").value;
            signupUser.password = _this.signupForm.get("password").value;
            signupUser.active = true;
            signupUser.classSchoolyears = [];
            signupUser.lastLoginDate = Object(_angular_common__WEBPACK_IMPORTED_MODULE_7__["formatDate"])(new Date(), 'yyyy/MM/dd', 'en');
            var r;
            r = new _model_role_model__WEBPACK_IMPORTED_MODULE_8__["Role"]();
            r.id = 4;
            r.name = "ROLE_ADMIN" + school.schoolcodeInternal.slice(-1); //Get last character
            signupUser.roles = [];
            signupUser.roles.push(r);
            _this.model.confirmadmin(signupUser, confirmationuid, school.schoolcodeInternal);
        });
        this.model.adminCreated.subscribe(function (data) {
            console.log(data);
        }, function (error) {
            console.log(error);
        });
    };
    SignupComponent.prototype.signup = function () {
        console.log("entering signup");
        console.log(this.signupForm.get("firstName").value);
        var signup = new _model_signupSchool_model__WEBPACK_IMPORTED_MODULE_5__["SignupSchool"]();
        signup.firstName = this.signupForm.get("firstName").value;
        signup.lastName = this.signupForm.get("lastName").value;
        signup.language = this.signupForm.get("language").value;
        signup.email = this.signupForm.get("email").value;
        signup.password = this.signupForm.get("password").value;
        signup.schoolName = this.signupForm.get("schoolName").value;
        signup.schoolCode = this.signupForm.get("schoolCode").value;
        signup.street = this.signupForm.get("street").value;
        signup.number = this.signupForm.get("number").value;
        signup.postalCode = this.signupForm.get("postalCode").value;
        signup.city = this.signupForm.get("city").value;
        signup.country = this.signupForm.get("country").value;
        signup.phone = this.signupForm.get("phone").value;
        this.model.updateSchoolInfo(signup);
    };
    SignupComponent.prototype.initForm = function () {
        this.signupForm = this.formBuilder.group({
            firstName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            lastName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            language: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            passwordagain: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            schoolName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            schoolCode: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            street: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            number: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            postalCode: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            city: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            country: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            phone: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]
        });
        this.signupForm.setValidators(this.passwordMatchValidator);
    };
    //Our own custom validator for checking password and passwordagain match
    SignupComponent.prototype.passwordMatchValidator = function (group) {
        if (group) {
            // console.log("checking password match: ");
            // console.log("password: " + group.get("password").value);
            // console.log("passwordagain: " + group.get("passwordagain").value);
            if (group.get("password").value !== group.get("passwordagain").value) {
                return { notMatching: true };
            }
        }
        return null;
    };
    SignupComponent.prototype.checkPasswordMatch = function () {
        console.log("checking password match... ");
        if (this.signupForm.get('password').value == this.signupForm.get('passwordagain').value) {
            console.log("true");
            this.passwordsMatch = true;
        }
        else {
            console.log("false");
            this.passwordsMatch = false;
        }
    };
    SignupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-signup',
            template: __webpack_require__(/*! ./signup.component.html */ "./src/app/signup/signup.component.html"),
            styles: [__webpack_require__(/*! ./signup.component.css */ "./src/app/signup/signup.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _model_repository_model__WEBPACK_IMPORTED_MODULE_3__["Model"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]])
    ], SignupComponent);
    return SignupComponent;
}());



/***/ }),

/***/ "./src/app/studentoverview/studentoverview.component.css":
/*!***************************************************************!*\
  !*** ./src/app/studentoverview/studentoverview.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N0dWRlbnRvdmVydmlldy9zdHVkZW50b3ZlcnZpZXcuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/studentoverview/studentoverview.component.html":
/*!****************************************************************!*\
  !*** ./src/app/studentoverview/studentoverview.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n    <div  class=\"w3-amber w3-padding-small w3-center w3-container\" style=\"width:100%\">\n        <span class=\"w3-margin-right\"><b>Vandaag:</b></span>\n        <span class=\"w3-green w3-border w3-margin-right w3-center\" style=\"display: inline-block; width:35px\">\n          {{todaysOnes}}\n        </span>\n        <span class=\"w3-yellow w3-border w3-margin-right w3-center\" style=\"display: inline-block; width:35px\">\n          {{todaysTwos}}\n        </span>\n        <span class=\" w3-orange w3-border w3-margin-right  w3-center\" style=\"display: inline-block; width:35px\">\n          {{todaysThrees}}\n        </span>\n        <span class=\"w3-red w3-border w3-margin-right w3-center\" style=\"display: inline-block; width:35px\">\n          {{todaysFours}}\n        </span>\n      </div>\n\n  <div class=\"w3-tiny w3-text-grey w3-padding\">Home -> {{HTMLtext[0]}}</div>\n\n  <div class=\"w3-col m6 l6 w3-padding\">\n\n\n    <form [formGroup]=\"filterForm\">\n      <button onclick=\"openFilter('RemarkFilter')\" class=\"w3-btn w3-block w3-orange w3-left-align w3-border\">\n        <i class=\"fa fa-angle-double-down w3-right\"></i>{{HTMLtext[5]}}\n      </button>\n      <label [ngClass]=\"{'w3-text-blue' : !filterChangedNotApplied, 'w3-text-red' : filterChangedNotApplied}\"\n        class=\"w3-tiny\">\n        <b>Filters:\n          {{HTMLtext[7]}}:\n          {{(selectedStudent) ? selectedStudent.firstName : \"\"}}\n          {{(selectedStudent) ? \" \" : \" \"}}\n          {{(selectedStudent) ? selectedStudent.lastName : \"\"}}\n          {{(selectedStudent) ? \"(\"  : \"\"}}\n          {{(selectedStudent) ? selectedStudent.classSchoolyears[0].schoolClass  : \"\"}}\n          {{(selectedStudent) ? \")\"  : \"\"}}\n\n          {{(selectedSchoolClass) ? selectedSchoolClass.schoolClass : \"\"}}\n\n          {{(!selectedSchoolClass) && (!selectedStudent) ? HTMLtext[8] : \"\"}}\n\n          /\n\n          {{HTMLtext[9]}}: {{filterDateFrom}} {{HTMLtext[10]}}: {{filterDateTo}} /\n          {{HTMLtext[11]}}: {{(filterAuthorId != \"all\" ? HTMLtext[19] : HTMLtext[20])}} /\n          {{HTMLtext[13]}}: {{(filterSeverity1) ? \"1\" : \"\"}} {{(filterSeverity2) ? \"2\" : \"\"}}\n          {{(filterSeverity3) ? \"3\" : \"\"}} {{(filterSeverity4) ? \"4\" : \"\"}}\n        </b>\n      </label>\n      <div *ngIf=\"filterChangedNotApplied\" class=\"w3-tiny w3-red w3-text-white\">--> {{HTMLtext[25]}}</div>\n\n      <div id=\"RemarkFilter\" class=\"w3-container w3-hide w3-border w3-padding\">\n\n        <p class=\"w3-center\">\n          <button [disabled]=\"!filterForm.valid\" onclick=\"openFilter('RemarkFilter')\" type=\"button\"\n            (click)=\"applyFilter()\" class=\"w3-btn w3-blue\">\n            {{HTMLtext[14]}}\n          </button></p>\n\n\n        <div onclick=\"openFilter('dateFilter')\" class=\"w3-panel w3-border-bottom w3-text-orange\">\n          <b><i class=\"fa fa-angle-double-down w3-right\"></i>\n            {{HTMLtext[15]}}\n            <i class=\"fa fa-angle-double-down w3-right\"></i>\n          </b>\n        </div>\n        <div id=\"dateFilter\" class=\"w3-hide\">\n          <p class=\"w3-center\">\n            <button type=\"button\" class=\"w3-btn w3-orange\" onclick=\"openFilter('dateFilter')\"\n              (click)=h24()>1d</button>\n            <button type=\"button\" class=\"w3-btn w3-orange w3-margin\" onclick=\"openFilter('dateFilter')\"\n              (click)=\"h48()\">2d</button>\n            <button type=\"button\" class=\"w3-btn w3-orange\" onclick=\"openFilter('dateFilter')\"\n              (click)=\"h72()\">3d</button></p>\n          <p class=\"w3-center\">\n            <button type=\"button\" class=\"w3-btn w3-orange\" onclick=\"openFilter('dateFilter')\"\n              (click)=\"d7()\">7d</button>\n            <button type=\"button\" class=\"w3-btn w3-orange w3-margin\" onclick=\"openFilter('dateFilter')\"\n              (click)=\"d30()\">30d</button>\n            <button type=\"button\" class=\"w3-btn w3-orange\" onclick=\"openFilter('dateFilter')\"\n              (click)=\"d90()\">90d</button></p>\n\n          <div class=\"w3-center\">\n            <p class=\"w3-show-inline-block w3-margin\">\n              <label><b>{{HTMLtext[9]}}</b></label>\n              <input class=\"w3-input w3-border w3-round w3-light-grey\" onchange=\"openFilter('dateFilter')\"\n                (change)=\"remarkFilterChanged()\" type=\"date\" name=\"filterDateFrom\" formControlName=\"filterDateFrom\">\n            </p>\n            <p class=\"w3-show-inline-block w3-margin\">\n              <label><b>{{HTMLtext[10]}}</b></label>\n              <input class=\"w3-input w3-border w3-round w3-light-grey\" onchange=\"openFilter('dateFilter')\"\n                (change)=\"remarkFilterChanged()\" type=\"date\" name=\"filterDateTo\" formControlName=\"filterDateTo\">\n            </p>\n          </div>\n        </div>\n\n\n        <div onclick=\"openFilter('severityFilter')\" class=\"w3-panel w3-border-bottom w3-text-orange\">\n          <b><i class=\"fa fa-angle-double-down w3-right\"></i>\n            {{HTMLtext[21]}}\n            <i class=\"fa fa-angle-double-down w3-right\"></i>\n          </b>\n        </div>\n        <div id=\"severityFilter\" class=\"w3-hide\">\n          <div class=\"w3-block w3-center\">\n            <p class=\"w3-show-inline-block w3-green w3-center w3-padding-small\" style=\"width:15%;\">\n              <input (change)=\"setSeverity1();remarkFilterChanged()\" class=\"w3-check\" type=\"checkbox\"\n                name=\"filterSeverity1\" value=\"1\" formControlName=\"filterSeverity1\">\n              <label>1</label></p>\n            <p class=\"w3-show-inline-block w3-yellow  w3-center w3-padding-small\" style=\"width:15%;\">\n              <input (change)=\"setSeverity2(); remarkFilterChanged()\" class=\"w3-check\" type=\"checkbox\"\n                name=\"filterSeverity2\" value=\"2\" formControlName=\"filterSeverity2\">\n              <label>2</label></p>\n            <p class=\"w3-show-inline-block w3-orange  w3-center w3-padding-small\" style=\"width:15%;\">\n              <input (change)=\"setSeverity3(); remarkFilterChanged()\" class=\"w3-check\" type=\"checkbox\"\n                name=\"filterSeverity3\" value=\"3\" formControlName=\"filterSeverity3\">\n              <label>3</label></p>\n            <p class=\"w3-show-inline-block w3-red  w3-center w3-padding-small\" style=\"width:15%;\">\n              <input (change)=\"setSeverity4(); remarkFilterChanged()\" class=\"w3-check\" type=\"checkbox\"\n                name=\"filterSeverity4\" value=\"4\" formControlName=\"filterSeverity4\">\n              <label>4</label></p>\n          </div>\n        </div>\n\n        <p class=\"w3-center\">\n          <button [disabled]=\"!filterForm.valid\" onclick=\"openFilter('RemarkFilter')\" type=\"button\"\n            (click)=\"applyFilter()\" class=\"w3-btn w3-blue\">\n            {{HTMLtext[14]}}\n          </button></p>\n\n        <div class=\"w3-right w3-border w3-grey w3-medium w3-show-inline-block\" onclick=\"openFilter('RemarkFilter')\">\n          <span><i class=\"fa fa-angle-double-up\"></i></span>\n          <span class=\"w3-margin\">{{HTMLtext[22]}}</span>\n          <span><i class=\"fa fa-angle-double-up \"></i></span>\n        </div>\n      </div>\n    </form>\n\n    <div class=\"w3-margin-top\">\n      <div class=\"w3-text-orange w3-container\"><b>{{HTMLtext[23]}}<span\n            *ngIf=\"filteredRemarks\">({{filteredRemarks.length}})</span></b>\n            <div class=\"w3-xlarge w3-right\" (click)=\"downloadWord()\"><i class=\"w3-indigo fa fa-file-word-o\" aria-hidden=\"true\"></i></div>\n          </div>\n            <!-- style=\"max-height:22rem;overflow:scroll\" bij ul voegen om ul te beperken in height-->\n      <ul class=\"w3-ul w3-border w3-hoverable\">\n        <li *ngFor=\"let remark of filteredRemarks\" class=\"w3-row\">\n          <div [ngClass]=\"{'w3-green' : remark[3] == 1, 'w3-yellow' : remark[3] == 2,\n              'w3-orange' : remark[3] == 3, 'w3-red' : remark[3] == 4}\" class=\"w3-col w3-center\" style=\"width:15%\">\n            {{remark[3]}}\n          </div>\n          <div (click)='onExtraInfo(remark[4])' class=\"w3-col w3-row-padding w3-rest\" style=\"width:70%\">\n            <div class=\"w3-medium\">\n              <span><b>{{remark[9]}}</b></span>\n              <span>&nbsp;</span>\n              <span><b>{{remark[8]}}</b></span>\n              <span>&nbsp;</span>\n              <span><b>({{remark[10]}})</b></span>\n            </div>\n            <div class=\"w3-small\">{{remark[2]}} <span *ngIf=\"remark[4] != null\">**</span></div>\n            <div class=\"w3-small\">{{remark[1]}}</div>\n            <div class=\"w3-small\">\n              <span>{{remark[6]}}</span>\n              <span>&nbsp;</span>\n              <span>{{remark[7]}}</span>\n            </div>\n          </div>\n        </li>\n      </ul>\n    </div>\n\n  </div>\n</div>\n\n\n<div id=\"extraInfo\" class=\"w3-modal\" [style.display]='displayExtraInfo'>\n  <div class=\"w3-modal-content w3-animate-top\">\n    <header class=\"w3-container w3-orange\">\n      <span (click)='hideExtraInfo()' class=\"w3-button w3-display-topright\">&times;</span>\n      <h4>{{HTMLtext[96]}}</h4>\n    </header>\n    <div class=\"w3-container w3-center\">\n      <p>{{extraInfoSelected}}</p>\n    </div>\n    <div class=\"w3-container w3-padding-small w3-center\">\n      <button (click)='hideExtraInfo()' class=\"w3-button w3-grey w3-margin\">{{HTMLtext[95]}}</button>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/studentoverview/studentoverview.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/studentoverview/studentoverview.component.ts ***!
  \**************************************************************/
/*! exports provided: StudentoverviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentoverviewComponent", function() { return StudentoverviewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _model_repository_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../model/repository.model */ "./src/app/model/repository.model.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _model_remarkFilterForm_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../model/remarkFilterForm.model */ "./src/app/model/remarkFilterForm.model.ts");
/* harmony import */ var _model_student_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../model/student.model */ "./src/app/model/student.model.ts");
/* harmony import */ var _model_class_schoolyear_model__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../model/class_schoolyear.model */ "./src/app/model/class_schoolyear.model.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _model_role_model__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../model/role.model */ "./src/app/model/role.model.ts");
/* harmony import */ var docx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! docx */ "./node_modules/docx/build/index.js");
/* harmony import */ var docx__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(docx__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! file-saver */ "./node_modules/file-saver/dist/FileSaver.min.js");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_11__);













var StudentoverviewComponent = /** @class */ (function () {
    function StudentoverviewComponent(model, formBuilder, activeRoute, router) {
        this.model = model;
        this.formBuilder = formBuilder;
        this.router = router;
    }
    StudentoverviewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.today = new Date();
        this.UNIXTimeHour = 60 * 60 * 1000;
        this.selectedStudent = null;
        this.selectedSchoolClass = null;
        localStorage.setItem('filterText', "");
        // console.log(this.HTMLtext);
        this.HTMLtext = JSON.parse(localStorage.getItem('multiLangText'));
        this.model.HTMLTextLoaded.subscribe(function (data) {
            _this.HTMLtext = JSON.parse(localStorage.getItem('multiLangText'));
        });
        this.filterChangedNotApplied = false;
        this.currentUserId = JSON.parse(localStorage.getItem('currentUser')).id;
        this.currentUserRole = JSON.parse(localStorage.getItem('currentUser')).roles[0].id;
        this.selectCurrentLoggedIn();
        this.initFilterForm();
        this.model.filteredRemarksArrived.subscribe(function (data) {
            _this.filteredRemarks = data;
            console.log(_this.filteredRemarks);
            if (_this.showNotification) {
                _this.setTodayCounts();
                _this.showNotification = false;
            }
        }, function (error) {
            console.log("error getting filtered remarks");
        });
        this.model.classSchoolyearsLoaded.subscribe(function (data) {
            _this.classSchoolyears = JSON.parse(localStorage.getItem('classSchoolyears'));
            console.log("classSchoolyears");
            console.log(_this.classSchoolyears);
        });
        this.model.childLoaded.subscribe(function (data) {
            _this.setSelectedStudent("child");
        });
        //Get todays filtered remarks
        this.doUpdateNotification();
    };
    StudentoverviewComponent.prototype.selectCurrentLoggedIn = function () {
        console.log("selectCurrentLoggedIn");
        console.log(JSON.parse(localStorage.getItem('currentUser')).roles[0]);
        //If the student himself is logged in 
        if (JSON.parse(localStorage.getItem('currentUser')).roles[0].id == 1) {
            this.setSelectedStudent("currentUser");
        }
        //  if the parent is logged in
        if (JSON.parse(localStorage.getItem('child')) != null) {
            this.setSelectedStudent("child");
        }
    };
    StudentoverviewComponent.prototype.setSelectedStudent = function (user) {
        console.log(user);
        this.selectedStudent = new _model_student_model__WEBPACK_IMPORTED_MODULE_6__["Student"]();
        this.selectedStudent.id = JSON.parse(localStorage.getItem(user)).id;
        this.selectedStudent.firstName = JSON.parse(localStorage.getItem(user)).firstName;
        this.selectedStudent.lastName = JSON.parse(localStorage.getItem(user)).lastName;
        this.selectedStudent.active = JSON.parse(localStorage.getItem(user)).active;
        this.selectedStudent.email = JSON.parse(localStorage.getItem(user)).email;
        this.selectedStudent.username = JSON.parse(localStorage.getItem(user)).username;
        this.selectedStudent.password = JSON.parse(localStorage.getItem(user)).password;
        this.selectedStudent.language = JSON.parse(localStorage.getItem(user)).language;
        this.selectedStudent.lastLoginDate = JSON.parse(localStorage.getItem(user)).lastLoginDate;
        //Add the role
        var role = new _model_role_model__WEBPACK_IMPORTED_MODULE_9__["Role"]();
        role.id = JSON.parse(localStorage.getItem(user)).roles[0].id;
        role.name = JSON.parse(localStorage.getItem(user)).roles[0].name;
        var roles;
        roles = [];
        roles.push(role);
        this.selectedStudent.roles = roles;
        //Add the class
        var cs = new _model_class_schoolyear_model__WEBPACK_IMPORTED_MODULE_7__["Class_schoolyear"]();
        cs.class_schoolyear_id = JSON.parse(localStorage.getItem(user)).classSchoolyears[0].class_schoolyear_id;
        cs.schoolClass = JSON.parse(localStorage.getItem(user)).classSchoolyears[0].schoolClass;
        cs.schoolyear_id = JSON.parse(localStorage.getItem(user)).classSchoolyears[0].schoolyear_id;
        var css;
        css = [];
        css.push(cs);
        this.selectedStudent.classSchoolyears = css;
    };
    StudentoverviewComponent.prototype.initFilterForm = function () {
        this.filterForm = this.formBuilder.group({
            filterDateFrom: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            filterDateTo: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            filterAuthorId: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            // filterStudentId: ['', Validators.required],
            filterSeverity1: [''],
            filterSeverity2: [''],
            filterSeverity3: [''],
            filterSeverity4: ['']
        });
        this.filterForm.setValidators(this.severityValidator);
        //init the start values
        this.h24();
        this.filterAuthorId = "all";
        // this.filterStudentId = "all";
        this.filterForm.controls['filterAuthorId'].setValue(this.filterAuthorId);
        // this.filterForm.controls['filterStudentId'].setValue(this.filterStudentId);
        this.filterSeverity1 = true;
        this.filterForm.controls['filterSeverity1'].setValue(this.filterSeverity1);
        this.filterSeverity2 = true;
        this.filterForm.controls['filterSeverity2'].setValue(this.filterSeverity2);
        this.filterSeverity3 = true;
        this.filterForm.controls['filterSeverity3'].setValue(this.filterSeverity3);
        this.filterSeverity4 = true;
        this.filterForm.controls['filterSeverity4'].setValue(this.filterSeverity4);
    };
    //Our own custom validator for checking at least one severity
    StudentoverviewComponent.prototype.severityValidator = function (group) {
        if (group) {
            if ((!group.get("filterSeverity1").value && !group.get("filterSeverity2").value
                && !group.get("filterSeverity3").value && !group.get("filterSeverity4").value)
                || (group.get("filterDateFrom").value > group.get("filterDateTo").value)) {
                return { notMatching: true };
            }
        }
        return null;
    };
    StudentoverviewComponent.prototype.setTodayCounts = function () {
        console.log("Entering setTodayCounts");
        this.todaysOnes = 0;
        this.todaysTwos = 0;
        this.todaysThrees = 0;
        this.todaysFours = 0;
        for (var i = 0; i < this.filteredRemarks.length; i++) {
            if (this.filteredRemarks[i][3] == 1) {
                this.todaysOnes++;
                console.log(this.todaysOnes);
            }
            if (this.filteredRemarks[i][3] == 2) {
                this.todaysTwos++;
            }
            if (this.filteredRemarks[i][3] == 3) {
                this.todaysThrees++;
            }
            if (this.filteredRemarks[i][3] == 4) {
                this.todaysFours++;
            }
        }
    };
    StudentoverviewComponent.prototype.getFilteredStudents = function () {
        var toret;
        toret = "";
        if (this.selectedStudent) {
            toret += this.selectedStudent.lastName + " " + this.selectedStudent.firstName + " (" + this.selectedStudent.classSchoolyears[0].schoolClass + ")";
            return toret;
        }
        if (this.selectedSchoolClass) {
            toret += this.selectedSchoolClass.schoolClass;
            return toret;
        }
        toret += "Alle leerlingen";
        return toret;
    };
    StudentoverviewComponent.prototype.getFilteredAuthors = function () {
        return "Alle leerkrachten";
    };
    StudentoverviewComponent.prototype.getFilteredSeverities = function () {
        var toret;
        toret = "";
        if (this.filterSeverity1 == true) {
            toret += " 1 ";
        }
        if (this.filterSeverity2 == true) {
            toret += " 2 ";
        }
        if (this.filterSeverity3 == true) {
            toret += " 3 ";
        }
        if (this.filterSeverity4 == true) {
            toret += " 4 ";
        }
        return toret;
    };
    StudentoverviewComponent.prototype.getRemarkColor = function (severity) {
        var toret;
        toret = "black";
        if (severity == 1) {
            toret = "green";
        }
        if (severity == 2) {
            toret = "yellow";
        }
        if (severity == 3) {
            toret = "orange";
        }
        if (severity == 4) {
            toret = "red";
        }
        console.log(toret);
        return toret;
    };
    StudentoverviewComponent.prototype.createHeading = function (text) {
        return new docx__WEBPACK_IMPORTED_MODULE_10__["Paragraph"](text).heading1().thematicBreak();
    };
    StudentoverviewComponent.prototype.downloadWord = function () {
        var document = new docx__WEBPACK_IMPORTED_MODULE_10__["Document"]();
        // document.addParagraph(new Paragraph("Rapport opmerkingen").title());
        document.addParagraph(this.createHeading("Rapport opmerkingen"));
        document.addParagraph(new docx__WEBPACK_IMPORTED_MODULE_10__["Paragraph"]().addRun(new docx__WEBPACK_IMPORTED_MODULE_10__["TextRun"]("Gegenereerd op: " + this.today.toLocaleString()).bold().break()));
        document.addParagraph(new docx__WEBPACK_IMPORTED_MODULE_10__["Paragraph"]("Toegepaste filters: "));
        document.addParagraph(new docx__WEBPACK_IMPORTED_MODULE_10__["Paragraph"]("leerling(en): " + this.getFilteredStudents()).bullet());
        document.addParagraph(new docx__WEBPACK_IMPORTED_MODULE_10__["Paragraph"]("van: " + this.filterDateFrom).bullet());
        document.addParagraph(new docx__WEBPACK_IMPORTED_MODULE_10__["Paragraph"]("tot: " + this.filterDateTo).bullet());
        document.addParagraph(new docx__WEBPACK_IMPORTED_MODULE_10__["Paragraph"]("door: " + this.getFilteredAuthors()).bullet());
        document.addParagraph(new docx__WEBPACK_IMPORTED_MODULE_10__["Paragraph"]("ernst: " + this.getFilteredSeverities()).bullet());
        document.addParagraph(new docx__WEBPACK_IMPORTED_MODULE_10__["Paragraph"]("Voor de opgegeven filters werden " + this.filteredRemarks.length + " opmerkingen gevonden."));
        var table = document.createTable(this.filteredRemarks.length, 5);
        table.getRow(0).getCell(0).CellProperties.setWidth(8, docx__WEBPACK_IMPORTED_MODULE_10__["WidthType"].PERCENTAGE);
        table.getRow(0).getCell(1).CellProperties.setWidth(25, docx__WEBPACK_IMPORTED_MODULE_10__["WidthType"].PERCENTAGE);
        table.getRow(0).getCell(2).CellProperties.setWidth(30, docx__WEBPACK_IMPORTED_MODULE_10__["WidthType"].PERCENTAGE);
        table.getRow(0).getCell(3).CellProperties.setWidth(12, docx__WEBPACK_IMPORTED_MODULE_10__["WidthType"].PERCENTAGE);
        table.getRow(0).getCell(4).CellProperties.setWidth(25, docx__WEBPACK_IMPORTED_MODULE_10__["WidthType"].PERCENTAGE);
        for (var i = 0; i < this.filteredRemarks.length; i++) {
            table.getRow(i).getCell(0).addContent(new docx__WEBPACK_IMPORTED_MODULE_10__["Paragraph"](this.filteredRemarks[i][10]));
            table.getRow(i).getCell(1).addContent(new docx__WEBPACK_IMPORTED_MODULE_10__["Paragraph"](this.filteredRemarks[i][9] + " " + this.filteredRemarks[i][8]));
            // table.getRow(i).getCell(2).addContent(new Paragraph(this.filteredRemarks[i][3] + " - " + this.filteredRemarks[i][2]));
            table.getRow(i).getCell(2).addContent(new docx__WEBPACK_IMPORTED_MODULE_10__["Paragraph"](this.filteredRemarks[i][3] + " - " + this.filteredRemarks[i][2]));
            var remarkColor = this.getRemarkColor(this.filteredRemarks[i][3]);
            table.getRow(i).getCell(2).CellProperties.Borders.addBottomBorder(docx__WEBPACK_IMPORTED_MODULE_10__["BorderStyle"].DOUBLE, 3, remarkColor);
            table.getRow(i).getCell(3).addContent(new docx__WEBPACK_IMPORTED_MODULE_10__["Paragraph"](this.filteredRemarks[i][1]));
            table.getRow(i).getCell(4).addContent(new docx__WEBPACK_IMPORTED_MODULE_10__["Paragraph"](this.filteredRemarks[i][6] + " " + this.filteredRemarks[i][7]));
        }
        var packer = new docx__WEBPACK_IMPORTED_MODULE_10__["Packer"]();
        packer.toBlob(document).then(function (blob) {
            console.log(blob);
            file_saver__WEBPACK_IMPORTED_MODULE_11__["saveAs"](blob, "scalliTest.docx");
            console.log("Document created successfully");
        });
    };
    StudentoverviewComponent.prototype.doUpdateNotification = function () {
        this.applyTodayFilter();
    };
    StudentoverviewComponent.prototype.applyTodayFilter = function () {
        var remarksFilter;
        remarksFilter = new _model_remarkFilterForm_model__WEBPACK_IMPORTED_MODULE_5__["RemarkFilterForm"]();
        remarksFilter.fromDate = this.filterForm.get('filterDateTo').value; //TODAY
        remarksFilter.toDate = this.filterForm.get('filterDateTo').value; //TODAY
        remarksFilter.authorId = 0;
        remarksFilter.studentId = JSON.parse(localStorage.getItem('currentUser')).id;
        remarksFilter.schoolClassId = 0;
        remarksFilter.severities = [];
        remarksFilter.severities.push(1);
        remarksFilter.severities.push(2);
        remarksFilter.severities.push(3);
        remarksFilter.severities.push(4);
        //    for(let i=0; i< 2000; i++ ){
        //console.log(i);
        this.showNotification = true;
        this.model.getStudentsOwnFilteredRemarks(remarksFilter);
        this.filterChangedNotApplied = false;
        //    }
    };
    StudentoverviewComponent.prototype.applyFilter = function () {
        var remarksFilter;
        remarksFilter = new _model_remarkFilterForm_model__WEBPACK_IMPORTED_MODULE_5__["RemarkFilterForm"]();
        remarksFilter.fromDate = this.filterForm.get('filterDateFrom').value;
        remarksFilter.toDate = this.filterForm.get('filterDateTo').value;
        remarksFilter.authorId = 0;
        remarksFilter.studentId = this.selectedStudent.id;
        remarksFilter.severities = [];
        if (this.filterForm.get('filterSeverity1').value) {
            remarksFilter.severities.push(1);
        }
        else {
            remarksFilter.severities.push(0);
        }
        if (this.filterForm.get('filterSeverity2').value) {
            remarksFilter.severities.push(2);
        }
        else {
            remarksFilter.severities.push(0);
        }
        if (this.filterForm.get('filterSeverity3').value) {
            remarksFilter.severities.push(3);
        }
        else {
            remarksFilter.severities.push(0);
        }
        if (this.filterForm.get('filterSeverity4').value) {
            remarksFilter.severities.push(4);
        }
        else {
            remarksFilter.severities.push(0);
        }
        //    for(let i=0; i< 2000; i++ ){
        //console.log(i);
        this.model.getStudentsOwnFilteredRemarks(remarksFilter);
        //    }
        this.filterChangedNotApplied = false;
    };
    StudentoverviewComponent.prototype.onExtraInfo = function (extra) {
        if (extra) {
            this.extraInfoSelected = extra;
            this.displayExtraInfo = 'block';
        }
    };
    StudentoverviewComponent.prototype.hideExtraInfo = function () {
        this.displayExtraInfo = 'none';
    };
    StudentoverviewComponent.prototype.h24 = function () {
        this.setDates(0);
        this.filterChangedNotApplied = true;
    };
    StudentoverviewComponent.prototype.h48 = function () {
        this.setDates(1);
        this.filterChangedNotApplied = true;
    };
    StudentoverviewComponent.prototype.h72 = function () {
        this.setDates(2);
        this.filterChangedNotApplied = true;
    };
    StudentoverviewComponent.prototype.d7 = function () {
        this.setDates(7);
        this.filterChangedNotApplied = true;
    };
    StudentoverviewComponent.prototype.d30 = function () {
        this.setDates(30);
        this.filterChangedNotApplied = true;
    };
    StudentoverviewComponent.prototype.d90 = function () {
        this.setDates(90);
        this.filterChangedNotApplied = true;
    };
    StudentoverviewComponent.prototype.remarkFilterChanged = function () {
        this.filterChangedNotApplied = true;
        console.log(this.filterForm.get('filterSeverity1').value);
    };
    StudentoverviewComponent.prototype.setSeverity1 = function () {
        this.filterSeverity1 = this.filterForm.get('filterSeverity1').value;
    };
    StudentoverviewComponent.prototype.setSeverity2 = function () {
        this.filterSeverity2 = this.filterForm.get('filterSeverity2').value;
    };
    StudentoverviewComponent.prototype.setSeverity3 = function () {
        this.filterSeverity3 = this.filterForm.get('filterSeverity3').value;
    };
    StudentoverviewComponent.prototype.setSeverity4 = function () {
        this.filterSeverity4 = this.filterForm.get('filterSeverity4').value;
    };
    StudentoverviewComponent.prototype.setDates = function (startDateDays) {
        var start = new Date(this.today.getTime());
        start.setDate(this.today.getDate() - startDateDays);
        this.filterDateFrom = Object(_angular_common__WEBPACK_IMPORTED_MODULE_8__["formatDate"])(start, 'yyyy-MM-dd', 'en');
        this.filterDateTo = Object(_angular_common__WEBPACK_IMPORTED_MODULE_8__["formatDate"])(this.today, 'yyyy-MM-dd', 'en');
        this.filterForm.controls['filterDateFrom'].setValue(this.filterDateFrom);
        this.filterForm.controls['filterDateTo'].setValue(this.filterDateTo);
    };
    StudentoverviewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-studentoverview',
            template: __webpack_require__(/*! ./studentoverview.component.html */ "./src/app/studentoverview/studentoverview.component.html"),
            styles: [__webpack_require__(/*! ./studentoverview.component.css */ "./src/app/studentoverview/studentoverview.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_model_repository_model__WEBPACK_IMPORTED_MODULE_3__["Model"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], StudentoverviewComponent);
    return StudentoverviewComponent;
}());



/***/ }),

/***/ "./src/app/students/students.component.css":
/*!*************************************************!*\
  !*** ./src/app/students/students.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N0dWRlbnRzL3N0dWRlbnRzLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/students/students.component.html":
/*!**************************************************!*\
  !*** ./src/app/students/students.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"w3-container\">\n  <div class=\"w3-tiny w3-text-grey w3-padding\">{{HTMLtext[136]}}</div>\n\n  <div id=\"overview_students\" class=\"w3-row w3-container full-height city\">\n    <div class=\"w3-row w3-col m11 w3-right-align w3-padding-small\">\n      <button onclick=\"document.getElementById('add').style.display='block'\" (click)=\"getSchoolyears()\"\n        class=\"w3-button w3-green w3-padding w3-margin\"><i class=\"fa fa-plus-circle\" aria-hidden=\"true\"></i>\n        {{HTMLtext[137]}}</button>\n      <button onclick=\"document.getElementById('add_bulk').style.display='block'\" (click)=\"getSchoolyears()\"\n        class=\"w3-button w3-green w3-padding w3-margin\"><i class=\"fa fa-plus-circle\" aria-hidden=\"true\"></i>\n        {{HTMLtext[138]}}</button>\n      <button (click)=\"refresh()\" class=\"w3-button w3-yellow w3-padding w3-margin\"><i class=\"fa fa-refresh\"\n          aria-hidden=\"true\"></i>\n          {{HTMLtext[122]}}</button>\n    </div>\n    <div class=\"w3-row\">\n      <div class=\"w3-col m11 w3-center\">\n        <div class=\"w3-responsive\">\n          <table class=\"w3-table-all w3-card-4\">\n            <tr>\n              <th>{{HTMLtext[139]}}</th>\n              <th>{{HTMLtext[124]}}</th>\n              <th>{{HTMLtext[125]}}</th>\n              <th>{{HTMLtext[126]}}</th>\n              <th>{{HTMLtext[127]}}</th>\n              <th>{{HTMLtext[109]}}</th>\n              <th>{{HTMLtext[110]}}</th>\n            </tr>\n            <tr *ngFor=\"let student of students\" [ngClass]=\"{'w3-text-grey': !student.active}\">\n              <td>{{student.classSchoolyears[0].schoolClass}}</td>\n              <td>{{student.lastName}}</td>\n              <td>{{student.firstName}}</td>\n              <td>{{student.email}}</td>\n              <td *ngIf=\"student.active\"><i class=\"fa fa-check-square w3-text-green\"></i></td>\n              <td *ngIf=\"!student.active\"><i class=\"fa fa-times w3-text-red\"></i></td>\n              <td><button (click)=onEdit(student.id) onclick=\"document.getElementById('edit').style.display='block'\"><i\n                    class=\"fa fa-pencil-square-o\" aria-hidden=\"true\"></i></button></td>\n              <td><button (click)=onDelete(student.id)\n                  onclick=\"document.getElementById('delete').style.display='block'\"><i class=\"fa fa-window-close\"\n                    aria-hidden=\"true\"></i></button></td>\n            </tr>\n          </table>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n<div id=\"edit\" class=\"w3-modal\">\n  <div class=\"w3-modal-content w3-animate-top\">\n    <form [formGroup]=\"editForm\" (ngSubmit)=\"saveEditedUser()\">\n      <div class=\"w3-card-4 w3-light-grey\">\n        <header class=\"w3-container w3-orange\">\n          <span onclick=\"document.getElementById('edit').style.display='none'\"\n            class=\"w3-button w3-display-topright\">&times;</span>\n          <h2>{{HTMLtext[140]}}</h2>\n        </header>\n        <div class=\"w3-container\">\n          <div class=\"w3-row\">\n            <div class=\"w3-container\">\n              <p class=\"w3-col l6 w3-padding\">\n                <label class=\"w3-text-orange\"><b>{{HTMLtext[124]}}</b></label>\n                <input class=\"w3-input w3-border\" name=\"last\" type=\"text\" formControlName=\"lastname\"></p>\n              <p class=\"w3-col l6 w3-padding\">\n                <label class=\"w3-text-orange\"><b>{{HTMLtext[125]}}</b></label>\n                <input class=\"w3-input w3-border w3-lightgrey\" name=\"first\" type=\"text\" formControlName=\"firstname\"></p>\n            </div>\n          </div>\n          <div class=\"w3-row\">\n            <p class=\"w3-col l6 w3-padding\">\n              <label class=\"w3-text-orange\"><b>{{HTMLtext[126]}}</b></label>\n              <input class=\"w3-input w3-border w3-lightgrey\" name=\"last\" type=\"text\" formControlName=\"email\"></p>\n            <p class=\"w3-col l6 w3-padding-large\">\n              <input class=\"w3-check\" type=\"checkbox\" name=\"active\" formControlName=\"active\" [checked]=\"toEdit.active\">\n              <label>{{HTMLtext[127]}}</label></p>\n          </div>\n          <p class=\" w3-center\">\n            <button type=\"button\" (click)=\"saveEditedUser()\" class=\"w3-btn w3-blue\"\n              onclick=\"document.getElementById('edit').style.display='none'\">{{HTMLtext[114]}}</button></p>\n        </div>\n      </div>\n    </form>\n\n    <form [formGroup]=\"classForm\" (ngSubmit)=\"saveEditedClass()\">\n      <div class=\"w3-card-4 w3-padding-small w3-light-grey\">\n        <div class=\"w3-container w3-orange\">\n          <h2>{{HTMLtext[141]}}</h2>\n        </div>\n        <div *ngIf=\"(toEdit | json) != '{}'\" class=\"w3-container\">\n          <p >\n            {{HTMLtext[142]}}: {{toEdit.firstName}} {{toEdit.lastName}}, {{HTMLtext[143]}} {{toEdit.classSchoolyears[0].schoolClass}}</p>\n          <div class=\"w3-row\">\n              <p class=\"w3-col l6 w3-padding\">\n                  <label class=\"w3-text-orange\"><b>{{HTMLtext[144]}}</b></label>\n                  <select class=\"w3-select\" name=\"class\" type=\"text\" formControlName=\"class\">\n                    <option *ngFor=\"let classSchoolyear of classSchoolyears\" [ngValue]=\"classSchoolyear.class_schoolyear_id\"\n                    [selected]=\"classSchoolyear.class_schoolyear_id == toEdit.classSchoolyears[0].class_schoolyear_id\">\n                      {{classSchoolyear.schoolClass}}\n                    </option>\n                  </select></p>\n          </div>\n          <p class=\" w3-center\">\n            <button class=\"w3-btn w3-blue\" onclick=\"document.getElementById('edit').style.display='none'\">\n              {{HTMLtext[145]}}\n            </button></p>\n        </div>\n      </div>\n    </form>\n\n    <form [formGroup]=\"passwordForm\" (ngSubmit)=\"saveEditedPassword()\">\n      <div class=\"w3-card-4 w3-padding-small w3-light-grey\">\n        <div class=\"w3-container w3-orange\">\n          <h2>{{HTMLtext[128]}}</h2>\n        </div>\n        <div class=\"w3-container\">\n          <p *ngIf=\"toEdit\">\n            {{HTMLtext[142]}}: {{toEdit.firstName}} {{toEdit.lastName}}</p>\n          <div class=\"w3-row\">\n            <p class=\"w3-col l6 w3-padding\">\n              <label class=\"w3-text-orange\"><b>{{HTMLtext[41]}}</b></label>\n              <input (input)=\"checkPasswordMatchEdit()\" class=\"w3-input w3-border\" name=\"password\" type=\"text\" formControlName=\"password\"></p>\n            <p class=\"w3-col l6 w3-padding\">\n              <label class=\"w3-text-orange\"><b>{{HTMLtext[42]}}</b></label>\n              <input (input)=\"checkPasswordMatchEdit()\" class=\"w3-input w3-border\" name=\"passwordagain\" type=\"text\" formControlName=\"passwordagain\"></p>\n          </div>\n          <p class=\" w3-center\">\n            <button [disabled]=\"passwordForm.invalid\" class=\"w3-btn w3-blue\" onclick=\"document.getElementById('edit').style.display='none'\">\n              {{HTMLtext[43]}}\n            </button></p>\n        </div>\n      </div>\n    </form>\n  </div>\n</div>\n\n<div id=\"add\" class=\"w3-modal\">\n  <div class=\"w3-modal-content w3-animate-top\">\n    <div class=\"w3-card-4 w3-light-grey\">\n      <header class=\"w3-container w3-green\">\n        <span onclick=\"document.getElementById('add').style.display='none'\"\n          class=\"w3-button w3-display-topright\">&times;</span>\n        <h2>{{HTMLtext[137]}}</h2>\n      </header>\n      <div class=\"w3-container\">\n        <form class=\"w3-container\" [formGroup]=\"addForm\" (ngSubmit)=\"signupUser()\">\n          <p class=\"w3-col l6 w3-padding\">\n            <label class=\"w3-text-orange\"><b>{{HTMLtext[139]}}</b></label>\n            <select class=\"w3-select\" name=\"class\" type=\"text\" formControlName=\"class\">\n              <option *ngFor=\"let classSchoolyear of classSchoolyears\" [value]=\"classSchoolyear.class_schoolyear_id\">\n                {{classSchoolyear.schoolClass}}\n              </option>\n            </select></p>\n          <div class=\"w3-text-red\" *ngIf=\"addForm.get('class').touched && addForm.get('class').invalid\">\n            {{HTMLtext[105]}}\n          </div>\n          <p>\n            <label class=\"w3-text-orange\"><b>{{HTMLtext[124]}}</b></label>\n            <input class=\"w3-input w3-border\" name=\"lastname\" type=\"text\" formControlName=\"lastname\"></p>\n          <div class=\"w3-text-red\" *ngIf=\"addForm.get('lastname').touched && addForm.get('lastname').invalid\">\n            {{HTMLtext[105]}}\n          </div>\n          <p>\n            <label class=\"w3-text-orange\"><b>{{HTMLtext[125]}}</b></label>\n            <input class=\"w3-input w3-border w3-lightgrey\" name=\"firstname\" type=\"text\" formControlName=\"firstname\"></p>\n          <div class=\"w3-text-red\" *ngIf=\"addForm.get('firstname').touched && addForm.get('firstname').invalid\">\n            {{HTMLtext[105]}}\n          </div>\n          <p>\n            <label class=\"w3-text-orange\"><b>{{HTMLtext[126]}}</b></label>\n            <input class=\"w3-input w3-border w3-lightgrey\" name=\"email\" type=\"text\" formControlName=\"email\"></p>\n          <div class=\"w3-text-red\" *ngIf=\"addForm.get('email').touched && addForm.get('email').invalid\">\n            {{HTMLtext[105]}}\n          </div>\n          <p>\n            <label class=\"w3-text-orange\"><b>{{HTMLtext[41]}}</b></label>\n            <input (input)=\"checkPasswordMatch()\" class=\"w3-input w3-border w3-lightgrey\" name=\"password\" type=\"text\" formControlName=\"password\"></p>\n          <div class=\"w3-text-red\" *ngIf=\"addForm.get('password').touched && addForm.get('password').invalid\">\n            {{HTMLtext[105]}}\n          </div>\n          <p>\n            <label class=\"w3-text-orange\"><b>{{HTMLtext[42]}}</b></label>\n            <input (input)=\"checkPasswordMatch()\" class=\"w3-input w3-border w3-lightgrey\" name=\"passwordagain\" type=\"text\"\n              formControlName=\"passwordagain\"></p>\n          <div class=\"w3-text-red\" *ngIf=\"!passwordsMatch\">\n            {{HTMLtext[146]}}\n          </div>\n          <p>\n            <input class=\"w3-check\" type=\"checkbox\" name=\"active\" checked=\"checked\" formControlName=\"active\">\n            <label>{{HTMLtext[127]}}</label></p>\n          <p class=\" w3-center\">\n            <button [disabled]=\"addForm.invalid\" type=\"button\" class=\"w3-btn w3-blue\" (click)=\"signupUser()\"\n              onclick=\"document.getElementById('add').style.display='none'\">{{HTMLtext[117]}}</button></p>\n        </form>\n      </div>\n    </div>\n  </div>\n</div>\n\n\n<div id=\"add_bulk\" class=\"w3-modal\">\n  <div class=\"w3-modal-content w3-animate-top\">\n    <form>\n      <div class=\"w3-card-4 w3-light-grey\">\n        <header class=\"w3-container w3-green\">\n          <span onclick=\"document.getElementById('add_bulk').style.display='none'\"\n            class=\"w3-button w3-display-topright\">&times;</span>\n          <h2>{{HTMLtext[138]}}</h2>\n        </header>\n        <div class=\"w3-container\">\n          <form class=\"w3-container\">\n            <p>\n              <label class=\"w3-text-orange\"><b>{{HTMLtext[153]}} {{getCurrentSchoolyearText()}}</b></label>\n            </p>\n              <p class=\" w3-center\">\n              <button class=\"w3-btn w3-blue\" (click)=\"downloadWord()\">\n                  <i class=\"w3-indigo fa fa-file-word-o\" aria-hidden=\"true\"></i>\n                Download classcodes\n              </button>\n            </p>\n            <p><label class=\"w3-text-orange\"><b>{{HTMLtext[133]}}</b></label>\n              <input type=\"file\" (change)=\"fileChangeListener($event)\" name=\"myfile\"></p>\n            <p class=\" w3-center\">\n              <button [disabled]=\"csvRecords.length == 0\" class=\"w3-btn w3-blue\" (click)=\"createBulkAccounts()\"\n                onclick=\"document.getElementById('add_bulk').style.display='none'\">{{HTMLtext[148]}}</button></p>\n          </form>\n        </div>\n      </div>\n    </form>\n  </div>\n</div>\n\n<div id=\"delete\" class=\"w3-modal\">\n  <div class=\"w3-modal-content w3-animate-top\">\n    <header class=\"w3-container w3-red\">\n      <span onclick=\"document.getElementById('delete').style.display='none'\"\n        class=\"w3-button w3-display-topright\">&times;</span>\n      <h2>{{HTMLtext[149]}}</h2>\n    </header>\n    <div class=\"w3-container w3-center\">\n      <p *ngIf(toDelete)>{{HTMLtext[135]}} {{toDelete.lastName}} {{toDelete.firstName}}?\n    </div>\n    <div class=\"w3-container w3-padding-small w3-center\">\n      <button class=\"w3-button w3-red w3-margin\" (click)=\"onDeleteFinal()\"\n        onclick=\"document.getElementById('delete').style.display='none'\"> {{HTMLtext[27]}}</button>\n      <button onclick=\"document.getElementById('delete').style.display='none'\" class=\"w3-button w3-grey w3-margin\"> \n        {{HTMLtext[28]}}\n      </button>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/students/students.component.ts":
/*!************************************************!*\
  !*** ./src/app/students/students.component.ts ***!
  \************************************************/
/*! exports provided: StudentsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentsComponent", function() { return StudentsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _model_repository_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../model/repository.model */ "./src/app/model/repository.model.ts");
/* harmony import */ var _csvutils_file_util__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../csvutils/file.util */ "./src/app/csvutils/file.util.ts");
/* harmony import */ var _csvutils_tests_constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../csvutils/tests.constants */ "./src/app/csvutils/tests.constants.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var docx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! docx */ "./node_modules/docx/build/index.js");
/* harmony import */ var docx__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(docx__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! file-saver */ "./node_modules/file-saver/dist/FileSaver.min.js");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_8__);










var StudentsComponent = /** @class */ (function () {
    function StudentsComponent(model, formBuilder, _fileUtil, activeRoute, router) {
        this.model = model;
        this.formBuilder = formBuilder;
        this._fileUtil = _fileUtil;
        this.router = router;
        this.signUps = [];
        this.csvRecords = [];
    }
    StudentsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.HTMLtext = JSON.parse(localStorage.getItem('multiLangText'));
        //    this.currentSchoolyear = this.initCurrentSchoolyear();
        this.parsedCsv = [];
        // this.students = this.model.getStudents();
        // this.schoolyears = this.model.getSchoolyears();
        // this.classSchoolyears = this.model.getClassSchoolyears();
        // if( this.model.getStudentsFromRAM().length > 0){
        //   this.students = this.model.getStudentsFromRAM();
        // }
        // else{
        //   this.students = this.model.getStudents();
        // }
        // this.students = JSON.parse(localStorage.getItem('students'));
        // if( this.model.getClassSchoolyearsFromRAM().length > 0){
        //   this.classSchoolyears = this.model.getClassSchoolyearsFromRAM();
        // }
        // else{
        //   this.classSchoolyears = this.model.getClassSchoolyears();
        // }
        // if( this.model.getSchoolyearsFromRAM().length > 0){
        //   this.schoolyears = this.model.getSchoolyearsFromRAM();
        // }
        // else{
        //   this.schoolyears = this.model.getSchoolyears();
        // }
        if (localStorage.getItem('schoolyears')) {
            this.schoolyears = JSON.parse(localStorage.getItem('schoolyears'));
            console.log("logging schoolyears");
            console.log("äébà");
            console.log(JSON.parse(localStorage.getItem('schoolyears')));
        }
        else {
            this.schoolyears = this.model.getSchoolyears();
        }
        if (localStorage.getItem('classSchoolyears')) {
            this.classSchoolyears = JSON.parse(localStorage.getItem('classSchoolyears'));
            console.log("logging classSchoolyears");
            console.log(JSON.parse(localStorage.getItem('classSchoolyears')));
        }
        else {
            // this.classSchoolyears = this.model.getClassSchoolyears();
            // if(localStorage.getItem('currentSchoolyearId')){
            this.classSchoolyears = this.model.getClassSchoolyearsBySchoolyear();
            // }
        }
        // this.model.classSchoolyearsLoaded.subscribe(
        //   data => {
        //     this.classSchoolyears = JSON.parse(localStorage.getItem('classSchoolyears'));
        //     console.log("data arrived");
        //     console.log(this.classSchoolyears[0].schoolClass);
        //   }
        // );
        // this.schoolyears = JSON.parse(localStorage.getItem('schoolyears'));
        this.classSchoolyears = this.model.getClassSchoolyearsFromRAM();
        this.signUp = {};
        console.log(this.students);
        this.toEdit = {};
        this.initForms();
        if (localStorage.getItem('students')) {
            this.students = JSON.parse(localStorage.getItem('students'));
        }
        else {
            this.students = this.model.getStudents();
        }
        this.model.studentsChangeDetected.subscribe(function (message) {
            // console.log("studentschangedetected in addremark. Students updated.")
            // console.log(localStorage.getItem('students').toString());
            // this.allStudents = JSON.parse(localStorage.getItem('students'));
            _this.students = JSON.parse(localStorage.getItem('students'));
        });
        // this.model.studentsChangeDetected.subscribe(
        //   (data: []) => {
        //     // this.students = this.model.getStudentsFromRAM();
        //     console.log(this.students);
        //     this.students = JSON.parse(localStorage.getItem('students'));
        //     //this.students = data;
        //     this.classSchoolyears = this.model.getClassSchoolyearsFromRAM();
        //     this.schoolyears = this.model.getSchoolyearsFromRAM();
        //   })
    };
    // ngDoCheck() {
    //   // this.refresh();
    // }
    StudentsComponent.prototype.refresh = function () {
        this.students = this.model.getStudents();
        // this.students = this.model.getStudentsFromRAM();
        // console.log(this.students);
    };
    StudentsComponent.prototype.getSchoolyears = function () {
        if (localStorage.getItem('classSchoolyears')) {
            this.classSchoolyears = JSON.parse(localStorage.getItem('classSchoolyears'));
            console.log("logging classSchoolyears");
            console.log(JSON.parse(localStorage.getItem('classSchoolyears')));
        }
        else {
            // this.classSchoolyears = this.model.getClassSchoolyears();
            // if(localStorage.getItem('currentSchoolyearId')){
            this.classSchoolyears = this.model.getClassSchoolyearsBySchoolyear();
            // }
        }
        // this.schoolyears = this.model.getSchoolyearsFromRAM();
        // if( this.model.getClassSchoolyearsFromRAM()){
        //   this.classSchoolyears = this.model.getClassSchoolyearsFromRAM();
        // }
    };
    StudentsComponent.prototype.signupUser = function () {
        //  for(var i=1; i<1400; i++){
        console.log("entering signupUser...");
        this.signUp.firstName = this.addForm.get('firstname').value;
        this.signUp.lastName = this.addForm.get('lastname').value;
        this.signUp.username = this.addForm.get('email').value;
        this.signUp.email = this.addForm.get('email').value;
        this.signUp.password = this.addForm.get('password').value;
        this.signUp.active = this.addForm.get('active').value;
        this.signUp.language = "nl";
        this.signUp.lastLoginDate = ""; //formatDate(new Date(), 'yyyy/MM/dd', 'en');
        this.signUp.roles = [
            {
                "id": 1,
                "name": "ROLE_STUDENT1"
            }
        ];
        // this.signUp.classSchoolyears = [];
        // this.signUp.classSchoolyears = this.getClassSchoolyearById(this.addForm.get('class').value);
        this.signUp.classSchoolyears = this.getClassSchoolyearById(this.addForm.get('class').value);
        console.log("this.signUp: ");
        console.log(this.signUp);
        //         this.signUp.error = "";
        //         this.signUp.schoolClass = "";
        //         this.signUp.schoolyear = {
        //           id: 1,
        //           schoolyear: "2017-2018"
        //  //       };
        //         };
        this.addForm.setValidators(this.passwordMatchValidator);
        this.addForm.updateValueAndValidity();
        if (this.addForm.valid) {
            console.log("AddForm is valid");
            this.model.signUpStudent(this.signUp);
            this.addForm.reset();
        }
        else {
            console.log("There is still an error in the form");
        }
        //    this.refresh();
    };
    // getClassSchoolyearByItsId(id): Class_schoolyear {
    //   return this.classSchoolyears.find(x => x.class_schoolyear_id === id);
    // }
    StudentsComponent.prototype.getCurrentSchoolyearText = function () {
        if (localStorage.getItem('currentSchoolyearId')) {
            return this.schoolyears.find(function (x) { return x.id === JSON.parse(localStorage.getItem('currentSchoolyearId')); }).schoolyear;
        }
        return "null";
    };
    StudentsComponent.prototype.checkPasswordMatch = function () {
        console.log("checking password match... ");
        if (this.addForm.get('password').value == this.addForm.get('passwordagain').value) {
            console.log("true");
            this.passwordsMatch = true;
        }
        else {
            console.log("false");
            this.passwordsMatch = false;
        }
    };
    StudentsComponent.prototype.checkPasswordMatchEdit = function () {
        console.log("checking password match... ");
        if (this.passwordForm.get('password').value == this.passwordForm.get('passwordagain').value) {
            console.log("true");
            this.passwordsMatch = true;
        }
        else {
            console.log("false");
            this.passwordsMatch = false;
        }
    };
    StudentsComponent.prototype.onEdit = function (i) {
        this.editForm.reset();
        this.passwordForm.reset();
        this.classForm.reset();
        this.getSchoolyears();
        console.log(i);
        this.toEdit = this.model.getStudent(i);
        console.log(this.toEdit);
        console.log('classSchoolyears in model:');
        console.log(this.model.getClassSchoolyearsFromRAM());
        console.log('class value in html: ');
        console.log(this.classForm.get('class').value);
        console.log("toEdit class_schoolyear_id" + this.toEdit.classSchoolyears[0].class_schoolyear_id);
        this.editForm.setValue({
            // schoolClass: this.getClassSchoolyearById(this.toEdit.classSchoolyears[0].class_schoolyear_id),
            lastname: this.toEdit.lastName,
            firstname: this.toEdit.firstName,
            email: this.toEdit.email,
            active: this.toEdit.active
        });
        this.classForm.setValue({
            class: this.toEdit.classSchoolyears[0].class_schoolyear_id
        });
    };
    StudentsComponent.prototype.onDelete = function (i) {
        console.log(i);
        this.toDelete = this.model.getStudent(i);
    };
    StudentsComponent.prototype.onDeleteFinal = function () {
        this.model.deleteStudent(this.toDelete.id);
        this.toDelete = {};
    };
    StudentsComponent.prototype.saveEditedUser = function () {
        this.editedStudent = this.toEdit;
        this.editedStudent.firstName = this.editForm.get('firstname').value;
        this.editedStudent.lastName = this.editForm.get('lastname').value;
        this.editedStudent.username = this.editForm.get('email').value;
        this.editedStudent.email = this.editForm.get('email').value;
        this.editedStudent.active = this.editForm.get('active').value;
        console.log(this.editedStudent);
        this.model.updateStudentInfo(this.editedStudent);
        this.toEdit = {};
    };
    StudentsComponent.prototype.saveEditedPassword = function () {
        this.model.updateStudentPassword({
            id: this.toEdit.id,
            password: this.passwordForm.get('password').value
        });
        this.toEdit = {};
        this.passwordForm.setValue({
            password: "",
            passwordagain: ""
        });
    };
    StudentsComponent.prototype.saveEditedClass = function () {
        this.toEdit.classSchoolyears = this.getClassSchoolyearById(this.classForm.get('class').value);
        this.model.updateStudent(this.toEdit);
        this.toEdit = {};
    };
    StudentsComponent.prototype.getClassSchoolyearById = function (id) {
        for (var i = 0; i < this.classSchoolyears.length; i++) {
            console.log("this.classSchoolyears[i].class_schoolyear_id: " + this.classSchoolyears[i].class_schoolyear_id);
            console.log("this.addForm.get('class').value: " + id);
            if (this.classSchoolyears[i].class_schoolyear_id == id) {
                return [{
                        "class_schoolyear_id": this.classSchoolyears[i].class_schoolyear_id,
                        "schoolClass": this.classSchoolyears[i].schoolClass,
                        "schoolyear_id": this.classSchoolyears[i].schoolyear_id
                    }
                ];
            } //end of if
        } //end of for
    };
    // METHOD CALLED WHEN CSV FILE IS IMPORTED
    StudentsComponent.prototype.fileChangeListener = function ($event) {
        var _this = this;
        var text = [];
        var files = $event.srcElement.files;
        if (_csvutils_tests_constants__WEBPACK_IMPORTED_MODULE_5__["Constants"].validateHeaderAndRecordLengthFlag) {
            if (!this._fileUtil.isCSVFile(files[0])) {
                alert("Please import valid .csv file.");
                this.fileReset();
            }
        }
        var input = $event.target;
        var reader = new FileReader();
        reader.readAsText(input.files[0]);
        reader.onload = function (data) {
            var csvData = reader.result;
            var csvRecordsArray = csvData.split(/\r\n|\n/);
            var headerLength = -1;
            if (_csvutils_tests_constants__WEBPACK_IMPORTED_MODULE_5__["Constants"].isHeaderPresentFlag) {
                var headersRow = _this._fileUtil.getHeaderArray(csvRecordsArray, _csvutils_tests_constants__WEBPACK_IMPORTED_MODULE_5__["Constants"].tokenDelimeter);
                // headerLength = headersRow.length; 
                headerLength = 6;
            }
            _this.csvRecords = _this._fileUtil.getDataRecordsArrayFromCSVFile(csvRecordsArray, headerLength, _csvutils_tests_constants__WEBPACK_IMPORTED_MODULE_5__["Constants"].validateHeaderAndRecordLengthFlag, _csvutils_tests_constants__WEBPACK_IMPORTED_MODULE_5__["Constants"].tokenDelimeter);
            console.log(_this.csvRecords);
            if (_this.csvRecords == null) {
                //If control reached here it means csv file contains error, reset file.
                _this.fileReset();
            }
        };
        reader.onerror = function () {
            alert('Unable to read ' + input.files[0]);
        };
    };
    ;
    StudentsComponent.prototype.fileReset = function () {
        //TODO
        //this.fileImportInput.nativeElement.value = "";
        this.csvRecords = [];
    };
    StudentsComponent.prototype.createBulkAccounts = function () {
        var _this = this;
        console.log("Entering createBulkAccounts...");
        console.log(this.csvRecords);
        // console.log(this.model.parsedCsv);
        // console.log("test: " + this.test);
        this.signUps = [];
        var i = 0;
        this.csvRecords.forEach(function (line) {
            //         console.log("adding new signupUser...");
            var newSignUp = {};
            newSignUp.firstName = line[0];
            newSignUp.lastName = line[1];
            newSignUp.username = line[2];
            newSignUp.email = line[2];
            newSignUp.password = line[3];
            if (line[4] == "0") {
                newSignUp.active = false;
            }
            else {
                newSignUp.active = true;
            }
            newSignUp.language = "nl";
            newSignUp.lastLoginDate = ""; //formatDate(new Date(), 'yyyy/MM/dd', 'en');
            newSignUp.roles = [
                {
                    "id": 1,
                    "name": "ROLE_STUDENT1"
                }
            ];
            newSignUp.classSchoolyears = _this.getClassSchoolyearById(line[5]);
            // newSignUp.error = "";
            //          newSignUp.schoolClass = "";
            //          newSignUp.schoolyear = {
            //   id: 1, 
            //   schoolyear: "2017-2018"
            // }
            _this.model.signUpStudentNoGetStudents(newSignUp);
            // if(i == (this.csvRecords.length-1)){
            //   this.model.getStudents();
            // }
            // i++;
            //USE THIS TO SIGNUP MULTIPLE WITH ONE METHOD (NOT WORKING!)
            //         this.signUps.push(newSignUp);
            //          this.model.signUpStudent(newSignUp);
            //console.log(newSignUp);
        });
        //USE THIS ALSO TO SIGNUP MULTIPLE WITH ONE METHOD (NOT WORKING!)
        //        this.model.signUpStudents(this.signUps);
        this.refresh();
        this.csvRecords = [];
    };
    //Our own custom validator for checking password and passwordagain match
    StudentsComponent.prototype.passwordMatchValidator = function (group) {
        if (group) {
            // console.log("checking password match: ");
            // console.log("password: " + group.get("password").value);
            // console.log("passwordagain: " + group.get("passwordagain").value);
            if (group.get("password").value !== group.get("passwordagain").value) {
                return { notMatching: true };
            }
        }
        return null;
    };
    StudentsComponent.prototype.createHeading = function (text) {
        return new docx__WEBPACK_IMPORTED_MODULE_7__["Paragraph"](text).heading1().thematicBreak();
    };
    StudentsComponent.prototype.downloadWord = function () {
        var document = new docx__WEBPACK_IMPORTED_MODULE_7__["Document"]();
        // document.addParagraph(new Paragraph("Rapport opmerkingen").title());
        document.addParagraph(this.createHeading("Klascodes (" + this.getCurrentSchoolyearText() + ")"));
        document.addParagraph(new docx__WEBPACK_IMPORTED_MODULE_7__["Paragraph"]().addRun(new docx__WEBPACK_IMPORTED_MODULE_7__["TextRun"]("Gegenereerd op: " + new Date().toLocaleString()).bold().break()));
        var table = document.createTable(this.classSchoolyears.length + 1, 2);
        table.getRow(0).getCell(0).CellProperties.setWidth(20, docx__WEBPACK_IMPORTED_MODULE_7__["WidthType"].PERCENTAGE);
        table.getRow(0).getCell(1).CellProperties.setWidth(25, docx__WEBPACK_IMPORTED_MODULE_7__["WidthType"].PERCENTAGE);
        table.getRow(0).getCell(0).addContent(new docx__WEBPACK_IMPORTED_MODULE_7__["Paragraph"]("code"));
        table.getRow(0).getCell(0).addContent(new docx__WEBPACK_IMPORTED_MODULE_7__["Paragraph"]("klas"));
        for (var i = 0; i < this.classSchoolyears.length; i++) {
            table.getRow(i + 1).getCell(0).addContent(new docx__WEBPACK_IMPORTED_MODULE_7__["Paragraph"](this.classSchoolyears[i].class_schoolyear_id.toString()));
            table.getRow(i + 1).getCell(1).addContent(new docx__WEBPACK_IMPORTED_MODULE_7__["Paragraph"](this.classSchoolyears[i].schoolClass));
        }
        var packer = new docx__WEBPACK_IMPORTED_MODULE_7__["Packer"]();
        packer.toBlob(document).then(function (blob) {
            console.log(blob);
            file_saver__WEBPACK_IMPORTED_MODULE_8__["saveAs"](blob, "classcodes.docx");
            console.log("Document created successfully");
        });
    };
    StudentsComponent.prototype.initForms = function () {
        this.addForm = this.formBuilder.group({
            class: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            lastname: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            firstname: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            passwordagain: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            active: ['']
        });
        this.addForm.setValidators(this.passwordMatchValidator);
        this.editForm = this.formBuilder.group({
            // schoolClass: ['', Validators.required],
            lastname: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            firstname: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            active: ['']
        });
        this.passwordForm = this.formBuilder.group({
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            passwordagain: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
        this.passwordForm.setValidators(this.passwordMatchValidator);
        this.classForm = this.formBuilder.group({
            class: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
    };
    StudentsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-students',
            template: __webpack_require__(/*! ./students.component.html */ "./src/app/students/students.component.html"),
            styles: [__webpack_require__(/*! ./students.component.css */ "./src/app/students/students.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_model_repository_model__WEBPACK_IMPORTED_MODULE_3__["Model"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _csvutils_file_util__WEBPACK_IMPORTED_MODULE_4__["FileUtil"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]])
    ], StudentsComponent);
    return StudentsComponent;
}());



/***/ }),

/***/ "./src/app/teachers/teachers.component.css":
/*!*************************************************!*\
  !*** ./src/app/teachers/teachers.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RlYWNoZXJzL3RlYWNoZXJzLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/teachers/teachers.component.html":
/*!**************************************************!*\
  !*** ./src/app/teachers/teachers.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"w3-container\">\n  <div class=\"w3-tiny w3-text-grey w3-padding\">{{HTMLtext[123]}}</div>\n\n  <div id=\"overview_teachers\" class=\"w3-row w3-container full-height city\">\n    <div class=\"w3-row w3-col m11 w3-right-align w3-padding-small\">\n      <button onclick=\"document.getElementById('add').style.display='block'\"\n        class=\"w3-button w3-green w3-padding w3-margin\"><i class=\"fa fa-plus-circle\" aria-hidden=\"true\"></i>\n        {{HTMLtext[120]}}\n      </button>\n      <button onclick=\"document.getElementById('add_bulk').style.display='block'\"\n        class=\"w3-button w3-green w3-padding w3-margin\"><i class=\"fa fa-plus-circle\" aria-hidden=\"true\"></i>\n        {{HTMLtext[121]}}\n      </button>\n        <button (click) = \"refresh()\" class=\"w3-button w3-yellow w3-padding w3-margin\"><i class=\"fa fa-refresh\" aria-hidden=\"true\"></i>\n          {{HTMLtext[122]}}</button>\n    </div>\n    <div class=\"w3-row\">\n      <div class=\"w3-col m11 w3-center\">\n        <div class=\"w3-responsive\">\n          <table class=\"w3-table-all w3-card-4\">\n            <tr>\n              <th>{{HTMLtext[124]}}</th>\n              <th>{{HTMLtext[125]}}</th>\n              <th>{{HTMLtext[126]}}</th>\n              <th>{{HTMLtext[127]}}</th>\n              <th>{{HTMLtext[109]}}</th>\n              <th>{{HTMLtext[110]}}</th>\n            </tr>\n            <tr *ngFor=\"let teacher of teachers\"  [ngClass]=\"{'w3-text-grey': !teacher.active}\">\n              <td>{{teacher.lastName}}</td>\n              <td>{{teacher.firstName}}</td>\n              <td>{{teacher.email}}</td>\n              <td *ngIf=\"teacher.active\"><i class=\"fa fa-check-square w3-text-green\"></i></td>\n              <td *ngIf=\"!teacher.active\"><i class=\"fa fa-times w3-text-red\"></i></td>\n              <td><button (click)=onEdit(teacher.id) onclick=\"document.getElementById('edit').style.display='block'\"><i\n                    class=\"fa fa-pencil-square-o\" aria-hidden=\"true\"></i></button></td>\n              <td><button (click)=onDelete(teacher.id) onclick=\"document.getElementById('delete').style.display='block'\"><i\n                    class=\"fa fa-window-close\" aria-hidden=\"true\"></i></button></td>\n            </tr>\n          </table>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n<div id=\"edit\" class=\"w3-modal\">\n  <div class=\"w3-modal-content w3-animate-top\">\n    <form [formGroup]=\"editForm\" (ngSubmit)=\"saveEditedUser()\">\n      <div class=\"w3-card-4 w3-light-grey\">\n        <header class=\"w3-container w3-orange\">\n          <span onclick=\"document.getElementById('edit').style.display='none'\"\n            class=\"w3-button w3-display-topright\">&times;</span>\n          <h2>{{HTMLtext[132]}}</h2>\n        </header>\n        <div class=\"w3-container\">\n          <div class=\"w3-row\">\n            <div class=\"w3-container\">\n              <p class=\"w3-col l6 w3-padding\">\n                <label class=\"w3-text-orange\"><b>{{HTMLtext[124]}}</b></label>\n                <input class=\"w3-input w3-border\" name=\"last\" type=\"text\" formControlName=\"lastname\"></p>\n              <p class=\"w3-col l6 w3-padding\">\n                <label class=\"w3-text-orange\"><b>{{HTMLtext[125]}}</b></label>\n                <input class=\"w3-input w3-border w3-lightgrey\" name=\"first\" type=\"text\" formControlName=\"firstname\"></p>\n            </div>\n          </div>\n          <div class=\"w3-row\">\n            <p class=\"w3-col l6 w3-padding\">\n              <label class=\"w3-text-orange\"><b>{{HTMLtext[126]}}</b></label>\n              <input class=\"w3-input w3-border w3-lightgrey\" name=\"last\" type=\"text\" formControlName=\"email\"></p>\n            <p class=\"w3-col l6 w3-padding-large\">\n              <input class=\"w3-check\" type=\"checkbox\" name=\"active\" formControlName=\"active\" [checked]=\"toEdit.active\">\n              <label>{{HTMLtext[127]}}</label></p>\n          </div>\n          <p class=\" w3-center\">\n            <button type=\"button\" (click)=\"saveEditedUser()\" class=\"w3-btn w3-blue\"\n            onclick=\"document.getElementById('edit').style.display='none'\">{{HTMLtext[114]}}</button></p>\n        </div>\n      </div>\n      </form>\n      <form [formGroup]=\"passwordForm\" (ngSubmit)=\"saveEditedPassword()\">\n      <div class=\"w3-card-4 w3-padding-small w3-light-grey\">\n          <div class=\"w3-container w3-orange\">\n            <h2>{{HTMLtext[128]}}</h2>\n          </div>\n          <div class=\"w3-container\">\n            <p *ngIf=\"toEdit\">\n              {{HTMLtext[129]}}: {{toEdit.firstName}} {{toEdit.lastName}}</p>\n              <div class=\"w3-row\">\n              <p class=\"w3-col l6 w3-padding\">\n                <label class=\"w3-text-orange\"><b>{{HTMLtext[41]}}</b></label>\n                <input (input)=\"checkPasswordMatchEdit()\" class=\"w3-input w3-border\" name=\"password\" type=\"text\" formControlName=\"password\"></p>\n              <p class=\"w3-col l6 w3-padding\">\n                <label class=\"w3-text-orange\"><b>{{HTMLtext[42]}}</b></label>\n                <input (input)=\"checkPasswordMatchEdit()\"  class=\"w3-input w3-border\" name=\"passwordagain\" type=\"text\" formControlName=\"passwordagain\"></p>\n            </div>\n            <p class=\" w3-center\">\n              <button  [disabled]=\"passwordForm.invalid\" class=\"w3-btn w3-blue\" onclick=\"document.getElementById('edit').style.display='none'\">{{HTMLtext[43]}}</button></p>\n            </div>\n        </div>\n    </form>\n  </div>\n</div>\n\n<div id=\"add\" class=\"w3-modal\">\n  <div class=\"w3-modal-content w3-animate-top\">\n      <div class=\"w3-card-4 w3-light-grey\">\n        <header class=\"w3-container w3-green\">\n          <span onclick=\"document.getElementById('add').style.display='none'\"\n            class=\"w3-button w3-display-topright\">&times;</span>\n          <h2>{{HTMLtext[120]}}</h2>\n        </header>\n        <div class=\"w3-container\">\n          <form class=\"w3-container\" [formGroup]=\"addForm\" (ngSubmit)=\"signupUser()\">\n            <p>\n              <label class=\"w3-text-orange\"><b>{{HTMLtext[124]}}</b></label>\n              <input class=\"w3-input w3-border\" name=\"lastname\" type=\"text\" formControlName=\"lastname\"></p>\n              <div class=\"w3-text-red\" *ngIf=\"addForm.get('lastname').touched && addForm.get('lastname').invalid\">\n                {{HTMLtext[105]}}\n              </div>\n            <p>\n              <label class=\"w3-text-orange\"><b>{{HTMLtext[125]}}</b></label>\n              <input class=\"w3-input w3-border w3-lightgrey\" name=\"firstname\" type=\"text\" formControlName=\"firstname\"></p>\n              <div class=\"w3-text-red\" *ngIf=\"addForm.get('lastname').touched && addForm.get('firstname').invalid\">\n                {{HTMLtext[105]}}\n              </div>\n            <p>\n              <label class=\"w3-text-orange\"><b>{{HTMLtext[126]}}</b></label>\n              <input class=\"w3-input w3-border w3-lightgrey\" name=\"email\" type=\"text\" formControlName=\"email\"></p>\n              <div class=\"w3-text-red\" *ngIf=\"addForm.get('lastname').touched && addForm.get('email').invalid\">\n                {{HTMLtext[105]}}\n              </div>\n            <p>\n              <label class=\"w3-text-orange\"><b>{{HTMLtext[130]}}</b></label>\n              <input (input)=\"checkPasswordMatch()\" class=\"w3-input w3-border w3-lightgrey\" name=\"password\" type=\"text\" formControlName=\"password\"></p>\n              <div class=\"w3-text-red\" *ngIf=\"addForm.get('password').touched && addForm.get('password').invalid\">\n                {{HTMLtext[105]}}\n              </div>\n            <p>\n              <label class=\"w3-text-orange\"><b>{{HTMLtext[131]}}</b></label>\n              <input (input)=\"checkPasswordMatch()\" class=\"w3-input w3-border w3-lightgrey\" name=\"passwordagain\" type=\"text\" formControlName=\"passwordagain\"></p>\n              <div class=\"w3-text-red\" *ngIf=\"!passwordsMatch\">\n                {{HTMLtext[146]}}\n              </div>\n            <p>\n              <input class=\"w3-check\" type=\"checkbox\" name=\"active\" checked=\"checked\" formControlName=\"active\">\n              <label>{{HTMLtext[127]}}</label></p>\n            <p class=\" w3-center\">\n              <button [disabled]=\"addForm.invalid\" type=\"button\" class=\"w3-btn w3-blue\" (click)=\"signupUser()\"\n              onclick=\"document.getElementById('add').style.display='none'\">{{HTMLtext[117]}}</button></p>\n          </form>\n        </div>\n      </div>\n  </div>\n</div>\n\n\n<div id=\"add_bulk\" class=\"w3-modal\">\n  <div class=\"w3-modal-content w3-animate-top\">\n    <form>\n      <div class=\"w3-card-4 w3-light-grey\">\n        <header class=\"w3-container w3-green\">\n          <span onclick=\"document.getElementById('add_bulk').style.display='none'\"\n            class=\"w3-button w3-display-topright\">&times;</span>\n          <h2>{{HTMLtext[121]}}</h2>\n        </header>\n        <div class=\"w3-container\">\n          <form class=\"w3-container\">\n            <p><label class=\"w3-text-orange\"><b>{{HTMLtext[133]}}</b></label>\n              <input type=\"file\" (change)=\"fileChangeListener($event)\" name=\"myfile\"></p>\n            <p class=\" w3-center\">\n              <button [disabled]=\"csvRecords.length == 0\" class=\"w3-btn w3-blue\" (click)=\"createBulkAccounts()\"\n              onclick=\"document.getElementById('add_bulk').style.display='none'\">Create accounts</button></p>\n          </form>\n        </div>\n      </div>\n    </form>\n  </div>\n</div>\n\n<div id=\"delete\" class=\"w3-modal\">\n  <div class=\"w3-modal-content w3-animate-top\">\n    <header class=\"w3-container w3-red\">\n      <span onclick=\"document.getElementById('delete').style.display='none'\"\n        class=\"w3-button w3-display-topright\">&times;</span>\n      <h2>{{HTMLtext[134]}}</h2>\n    </header>\n    <div class=\"w3-container w3-center\">\n      <p *ngIf(toDelete)>{{HTMLtext[135]}}: {{toDelete.lastName}} {{toDelete.firstName}}?\n    </div>\n    <div class=\"w3-container w3-padding-small w3-center\">\n      <button class=\"w3-button w3-red w3-margin\" (click)=\"onDeleteFinal()\" \n        onclick=\"document.getElementById('delete').style.display='none'\"> {{HTMLtext[27]}}</button>\n      <button onclick=\"document.getElementById('delete').style.display='none'\" class=\"w3-button w3-grey w3-margin\"> \n        {{HTMLtext[28]}}  \n      </button>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/teachers/teachers.component.ts":
/*!************************************************!*\
  !*** ./src/app/teachers/teachers.component.ts ***!
  \************************************************/
/*! exports provided: TeachersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeachersComponent", function() { return TeachersComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _model_repository_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../model/repository.model */ "./src/app/model/repository.model.ts");
/* harmony import */ var _csvutils_file_util__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../csvutils/file.util */ "./src/app/csvutils/file.util.ts");
/* harmony import */ var _csvutils_tests_constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../csvutils/tests.constants */ "./src/app/csvutils/tests.constants.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");







var TeachersComponent = /** @class */ (function () {
    function TeachersComponent(model, formBuilder, _fileUtil, activeRoute, router) {
        this.model = model;
        this.formBuilder = formBuilder;
        this._fileUtil = _fileUtil;
        this.router = router;
        this.signUps = [];
        this.csvRecords = [];
    }
    TeachersComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.HTMLtext = JSON.parse(localStorage.getItem('multiLangText'));
        this.parsedCsv = [];
        // this.teachers = this.model.getTeachers();
        // if( this.model.getTeachersFromRAM().length > 0){
        //   this.teachers = this.model.getStudentsFromRAM();
        // }
        // else{
        //   this.teachers = this.model.getTeachers();
        // }
        this.teachers = JSON.parse(localStorage.getItem('teachers'));
        this.signUp = {};
        console.log(this.teachers);
        this.toEdit = {};
        this.initForms();
        this.model.teachersChangeDetected.subscribe(function (data) {
            console.log("Now refreshing after ... ");
            // this.router.navigateByUrl("/teachers");
            // this.model.getTeachers();
            // this.teachers = this.model.getTeachersFromRAM();
            // this.teachers = JSON.parse(localStorage.getItem('teachers'));
            _this.teachers = data;
        });
    };
    // ngDoCheck() {
    //   // this.refresh();
    // }
    TeachersComponent.prototype.refresh = function () {
        this.model.getTeachers();
        // this.teachers = this.model.getTeachersFromRAM();
        console.log(this.teachers);
    };
    TeachersComponent.prototype.signupUser = function () {
        //  for(var i=1; i<1400; i++){
        console.log("entering signupUser...");
        this.signUp.firstName = this.addForm.get('firstname').value;
        this.signUp.lastName = this.addForm.get('lastname').value;
        this.signUp.username = this.addForm.get('email').value;
        this.signUp.email = this.addForm.get('email').value;
        this.signUp.password = this.addForm.get('password').value;
        this.signUp.active = this.addForm.get('active').value;
        this.signUp.language = "nl";
        this.signUp.lastLoginDate = ""; //formatDate(new Date(), 'yyyy/MM/dd', 'en');
        this.signUp.roles = [
            {
                "id": 3,
                "name": "ROLE_TEACHER1"
            }
        ];
        //Leave class_schoolyear empty when signin up a teacher (has no class)
        this.signUp.classSchoolyears = [];
        this.addForm.setValidators(this.passwordMatchValidator);
        this.addForm.updateValueAndValidity();
        if (this.addForm.valid) {
            console.log("AddForm is valid");
            // this.model.signUpStudent(this.signUp);
            this.model.signUpTeacher(this.signUp);
            this.addForm.reset();
        }
        else {
            console.log("There is still an error in the form");
        }
        //         this.signUp.error = "";
        //         this.signUp.schoolClass = "";
        //         this.signUp.schoolyear = {
        //           id: 1,
        //           schoolyear: "2017-2018"
        //  //       };
        //         }
        // this.model.signUpTeacher(this.signUp);
        //    this.refresh();
    };
    TeachersComponent.prototype.checkPasswordMatch = function () {
        console.log("checking password match... ");
        if (this.addForm.get('password').value == this.addForm.get('passwordagain').value) {
            console.log("true");
            this.passwordsMatch = true;
        }
        else {
            console.log("false");
            this.passwordsMatch = false;
        }
    };
    TeachersComponent.prototype.checkPasswordMatchEdit = function () {
        console.log("checking password match... ");
        if (this.passwordForm.get('password').value == this.passwordForm.get('passwordagain').value) {
            console.log("true");
            this.passwordsMatch = true;
        }
        else {
            console.log("false");
            this.passwordsMatch = false;
        }
    };
    TeachersComponent.prototype.onEdit = function (i) {
        console.log(i);
        this.toEdit = this.model.getTeacher(i);
        this.editForm.setValue({
            lastname: this.toEdit.lastName,
            firstname: this.toEdit.firstName,
            email: this.toEdit.email,
            active: this.toEdit.active
        });
    };
    TeachersComponent.prototype.onDelete = function (i) {
        console.log(i);
        this.toDelete = this.model.getTeacher(i);
    };
    TeachersComponent.prototype.onDeleteFinal = function () {
        this.model.deleteTeacher(this.toDelete.id);
        this.toDelete = {};
    };
    TeachersComponent.prototype.saveEditedUser = function () {
        this.editedTeacher = this.toEdit;
        this.editedTeacher.firstName = this.editForm.get('firstname').value;
        this.editedTeacher.lastName = this.editForm.get('lastname').value;
        this.editedTeacher.username = this.editForm.get('email').value;
        this.editedTeacher.email = this.editForm.get('email').value;
        this.editedTeacher.active = this.editForm.get('active').value;
        console.log(this.editedTeacher);
        this.model.updateTeacherInfo(this.editedTeacher);
        this.toEdit = {};
    };
    TeachersComponent.prototype.saveEditedPassword = function () {
        this.model.updateTeacherPassword({
            id: this.toEdit.id,
            password: this.passwordForm.get('password').value
        });
        this.toEdit = {};
        this.passwordForm.setValue({
            password: "",
            passwordagain: ""
        });
    };
    // METHOD CALLED WHEN CSV FILE IS IMPORTED
    TeachersComponent.prototype.fileChangeListener = function ($event) {
        var _this = this;
        var text = [];
        var files = $event.srcElement.files;
        if (_csvutils_tests_constants__WEBPACK_IMPORTED_MODULE_5__["Constants"].validateHeaderAndRecordLengthFlag) {
            if (!this._fileUtil.isCSVFile(files[0])) {
                alert("Please import valid .csv file.");
                this.fileReset();
            }
        }
        var input = $event.target;
        var reader = new FileReader();
        reader.readAsText(input.files[0]);
        reader.onload = function (data) {
            var csvData = reader.result;
            var csvRecordsArray = csvData.split(/\r\n|\n/);
            var headerLength = -1;
            if (_csvutils_tests_constants__WEBPACK_IMPORTED_MODULE_5__["Constants"].isHeaderPresentFlag) {
                var headersRow = _this._fileUtil.getHeaderArray(csvRecordsArray, _csvutils_tests_constants__WEBPACK_IMPORTED_MODULE_5__["Constants"].tokenDelimeter);
                //        headerLength = headersRow.length; 
                headerLength = 5;
            }
            _this.csvRecords = _this._fileUtil.getDataRecordsArrayFromCSVFile(csvRecordsArray, headerLength, _csvutils_tests_constants__WEBPACK_IMPORTED_MODULE_5__["Constants"].validateHeaderAndRecordLengthFlag, _csvutils_tests_constants__WEBPACK_IMPORTED_MODULE_5__["Constants"].tokenDelimeter);
            console.log(_this.csvRecords);
            if (_this.csvRecords == null) {
                //If control reached here it means csv file contains error, reset file.
                _this.fileReset();
            }
        };
        reader.onerror = function () {
            alert('Unable to read ' + input.files[0]);
        };
    };
    ;
    TeachersComponent.prototype.fileReset = function () {
        //TODO
        //this.fileImportInput.nativeElement.value = "";
        this.csvRecords = [];
    };
    //   onFileLoad(fileLoadedEvent) {
    //     const csvSeparator = ',';
    //     const textFromFileLoaded = fileLoadedEvent.target.result;
    //     this.csvContent = textFromFileLoaded;
    //     const txt = textFromFileLoaded;
    //     const csv = [];
    //     const lines = txt.split('\n');
    // //    console.log("lines: " + lines);
    //     lines.forEach(element => {
    // //      console.log("line: " + element);
    //       const cols: string[] = element.split(csvSeparator);
    // //      console.log("cols: " + cols);
    //       csv.push(cols);
    //       console.log("csv: " + csv);
    //     });
    //    this.parsedCsv = csv.copyWithin(0,csv.length);
    // this.model.parsedCsv = [];   
    // this.model.parsedCsv= csv;
    //     console.log( "parsedCsv in onFileLoad: " + this.parsedCsv);
    //     // demo output
    //     var output: string="";
    //     this.parsedCsv.forEach(row => {
    //       output += "\n";
    //       var colNo = 0;
    //       row.forEach(col => {
    //         if (colNo>0) output += " | ";
    //         output += col;
    //         colNo++;
    //       });
    //     });
    //     this.test = this.parsedCsv[0][0];
    //     console.log(output);
    //     console.log("test: " + this.test);
    //     console.log("parsedCsv: " + this.parsedCsv);
    //   }
    //   onFileSelect(input: HTMLInputElement) {
    //     const files = input.files;
    //     var content = this.csvContent;
    //    if (files && files.length) {
    //        /*
    //         console.log("Filename: " + files[0].name);
    //         console.log("Type: " + files[0].type);
    //         console.log("Size: " + files[0].size + " bytes");
    //         */
    //         const fileToRead = files[0];
    //         const fileReader = new FileReader();
    //         fileReader.onload = this.onFileLoad;
    //        fileReader.readAsText(fileToRead, "UTF-8");
    //    }
    //   }
    TeachersComponent.prototype.createBulkAccounts = function () {
        var _this = this;
        console.log("Entering createBulkAccounts...");
        console.log(this.csvRecords);
        // console.log(this.model.parsedCsv);
        // console.log("test: " + this.test);
        this.signUps = [];
        this.csvRecords.forEach(function (line) {
            //         console.log("adding new signupUser...");
            var newSignUp = {};
            newSignUp.firstName = line[0];
            newSignUp.lastName = line[1];
            newSignUp.username = line[2];
            newSignUp.email = line[2];
            newSignUp.password = line[3];
            if (line[4] == "0") {
                newSignUp.active = false;
            }
            else {
                newSignUp.active = true;
            }
            newSignUp.language = "nl";
            newSignUp.lastLoginDate = ""; //formatDate(new Date(), 'yyyy/MM/dd', 'en');
            newSignUp.roles = [
                {
                    "id": 3,
                    "name": "ROLE_TEACHER1"
                }
            ];
            newSignUp.classSchoolyears = [];
            // newSignUp.error = "";
            //          newSignUp.schoolClass = "";
            //          newSignUp.schoolyear = {
            //   id: 1,
            //   schoolyear: "2017-2018"
            // }
            _this.signUps.push(newSignUp);
            //          this.model.signUpTeacher(newSignUp);
            //console.log(newSignUp);
        });
        this.model.signUpTeachers(this.signUps);
        this.csvRecords = [];
    };
    //Our own custom validator for checking password and passwordagain match
    TeachersComponent.prototype.passwordMatchValidator = function (group) {
        if (group) {
            // console.log("checking password match: ");
            // console.log("password: " + group.get("password").value);
            // console.log("passwordagain: " + group.get("passwordagain").value);
            if (group.get("password").value !== group.get("passwordagain").value) {
                return { notMatching: true };
            }
        }
        return null;
    };
    TeachersComponent.prototype.initForms = function () {
        this.addForm = this.formBuilder.group({
            lastname: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            firstname: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            passwordagain: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            active: ['']
        });
        this.addForm.setValidators(this.passwordMatchValidator);
        this.editForm = this.formBuilder.group({
            lastname: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            firstname: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            active: ['']
        });
        this.passwordForm = this.formBuilder.group({
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            passwordagain: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
        this.passwordForm.setValidators(this.passwordMatchValidator);
    };
    TeachersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-teachers',
            template: __webpack_require__(/*! ./teachers.component.html */ "./src/app/teachers/teachers.component.html"),
            styles: [__webpack_require__(/*! ./teachers.component.css */ "./src/app/teachers/teachers.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_model_repository_model__WEBPACK_IMPORTED_MODULE_3__["Model"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _csvutils_file_util__WEBPACK_IMPORTED_MODULE_4__["FileUtil"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]])
    ], TeachersComponent);
    return TeachersComponent;
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

module.exports = __webpack_require__(/*! D:\RESTfulAPI\resources\remarko-Laravel\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map