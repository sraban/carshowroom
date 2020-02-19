webpackJsonp([0],{

/***/ 112:
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
webpackEmptyAsyncContext.id = 112;

/***/ }),

/***/ 155:
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
webpackEmptyAsyncContext.id = 155;

/***/ }),

/***/ 199:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(30);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomePage = (function () {
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/var/www/html/goa/client/src/pages/home/home.html"*/`<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Home</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding style="background-color: #4F8EF7;color: #FFF;">\n  <img src="assets/imgs/thank_you_card.jpg" width="100%">\n</ion-content>\n`/*ion-inline-end:"/var/www/html/goa/client/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 200:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ManufacturersComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_shared_service__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(30);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ManufacturersComponent = (function () {
    function ManufacturersComponent(_fb, shared, toastCtrl, loadingCtrl) {
        this._fb = _fb;
        this.shared = shared;
        this.toastCtrl = toastCtrl;
        this.loadingCtrl = loadingCtrl;
        this.toast = null;
    }
    ManufacturersComponent.prototype.ngOnInit = function () {
        this.saveForm = this._fb.group({
            name: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required]]
        });
        this.loadRecords();
    };
    ManufacturersComponent.prototype.loadRecords = function () {
        var _this = this;
        var loader = this.loadingCtrl.create({ content: "Loading..." });
        loader.present();
        var url = '/manufacturers';
        this.shared.getCurl(url).subscribe(function (output) {
            if (output.status) {
                _this.contentArray = output.response;
            }
            else {
                _this.presentToast("Api Error!!!");
            }
            loader.dismiss();
        });
    };
    ManufacturersComponent.prototype.saveFormSubmit = function () {
        var _this = this;
        var loader = this.loadingCtrl.create({ content: "Saving..." });
        loader.present();
        if (this.saveForm.valid) {
            var url = '/manufacturers/save';
            this.shared.postCurl(url, this.saveForm.value).subscribe(function (output) {
                if (output.status) {
                    _this.presentToast("Manufacturer added successfully");
                    _this.loadRecords();
                    _this.saveForm.reset();
                }
                else {
                    _this.presentToast(output.response.length ? output.response.join(" - ") : output.response);
                }
                loader.dismiss();
            });
        }
    };
    ManufacturersComponent.prototype.deleteRecord = function (id, $event) {
        var _this = this;
        if (id) {
            var record = { "id": id };
            var url = '/manufacturers/delete';
            this.shared.postCurl(url, record).subscribe(function (output) {
                if (output.status) {
                    var row = $event.target.parentNode.parentNode;
                    row.parentNode.removeChild(row);
                    _this.contentArray = _this.contentArray.filter(function (row) {
                        return row.id !== id;
                    });
                    _this.presentToast("Deleted Successfully");
                }
                else {
                    _this.presentToast("Api Error");
                }
            });
        }
    };
    ManufacturersComponent.prototype.presentToast = function (msg) {
        this.toast ? this.toast.dismiss() : false;
        this.toast = this.toastCtrl.create({
            message: msg,
            duration: 3000,
            position: 'top'
        });
        this.toast.present();
    };
    ManufacturersComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-manufacturers',template:/*ion-inline-start:"/var/www/html/goa/client/src/pages/manufacturers/manufacturers.component.html"*/`<ion-header>\n    <ion-navbar>\n        <button ion-button menuToggle>\n            <ion-icon name="menu"></ion-icon>\n        </button>\n        <ion-title>Manufacturers</ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n    <form [formGroup]="saveForm" (ngSubmit)="saveFormSubmit()">\n        <ion-item>\n            <ion-label floating>Name *</ion-label>\n            <ion-input formControlName="name" type="text" required></ion-input>\n        </ion-item>\n        <ion-item>\n            <button ion-button tertiary [disabled]="!saveForm.valid">Submit</button>\n        </ion-item>\n    </form>\n\n    <ion-grid *ngIf="contentArray?.length > 0">\n        <ion-list>\n            <ion-row class="nameClass" justify-content-center align-items-center>\n                <ion-col>                    \n                    <strong>No.</strong>                    \n                </ion-col>\n                <ion-col>                    \n                    <strong>Name</strong>                   \n                </ion-col>\n                <ion-col>                    \n                    <div text-center><strong>Action</strong></div>              \n                </ion-col>\n            </ion-row>\n        </ion-list>\n        <ion-list *ngFor="let row of contentArray; let i = index">\n            <ion-row justify-content-center align-items-center>\n                <ion-col>\n                    {{ i+1 }}\n                </ion-col>\n                <ion-col>\n                    {{ row.name }}\n                </ion-col>\n                <ion-col>\n                  <div text-center>\n                    <ion-icon name="remove-circle" (click)="deleteRecord(row.id, $event)"></ion-icon>\n                  </div>\n                </ion-col>\n            </ion-row>\n        </ion-list>\n    </ion-grid>\n\n</ion-content>`/*ion-inline-end:"/var/www/html/goa/client/src/pages/manufacturers/manufacturers.component.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_1__app_shared_service__["a" /* SharedService */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["h" /* ToastController */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["d" /* LoadingController */]])
    ], ManufacturersComponent);
    return ManufacturersComponent;
}());

//# sourceMappingURL=manufacturers.component.js.map

/***/ }),

/***/ 201:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VehiclesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_shared_service__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(30);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var VehiclesComponent = (function () {
    function VehiclesComponent(_fb, shared, toastCtrl, loadingCtrl) {
        this._fb = _fb;
        this.shared = shared;
        this.toastCtrl = toastCtrl;
        this.loadingCtrl = loadingCtrl;
        this.toast = null;
        this.showList = true;
    }
    VehiclesComponent.prototype.ngOnInit = function () {
        this.saveForm = this._fb.group({
            manufacture_id: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required]],
            name: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required]],
            reg_no: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required]],
            color: [''],
            date_manufactured: [''],
            filename: [''],
            oldFilePath: [''],
            note: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].maxLength(100), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].pattern(/[^<>?%&\"]*/)]]
        });
        this.loadRecords();
        this.loadManufacture();
    };
    VehiclesComponent.prototype.loadManufacture = function () {
        var _this = this;
        var url = '/manufacturers';
        this.shared.getCurl(url).subscribe(function (output) {
            if (output.status) {
                _this.manufacturers = output.response;
            }
            else {
                _this.presentToast(output.response.length ? output.response.join(" - ") : output.response);
            }
        });
    };
    VehiclesComponent.prototype.loadRecords = function () {
        var _this = this;
        var loader = this.loadingCtrl.create({ content: "Loading..." });
        loader.present();
        var url = '/vehicles';
        this.shared.getCurl(url).subscribe(function (output) {
            if (output.status) {
                _this.contentArray = output.response;
            }
            else {
                _this.presentToast("Api Error!!!");
            }
            loader.dismiss();
        });
    };
    VehiclesComponent.prototype.saveFormSubmit = function () {
        var _this = this;
        var loader = this.loadingCtrl.create({ content: "Saving..." });
        loader.present();
        if (this.saveForm.valid) {
            var url = '/vehicles/save';
            this.shared.postCurl(url, this.saveForm.value).subscribe(function (output) {
                if (output.status) {
                    _this.presentToast("Saved!!!");
                    _this.loadRecords();
                    _this.saveForm.reset();
                }
                else {
                    _this.presentToast(output.response.length ? output.response.join(" - ") : output.response);
                }
                loader.dismiss();
            });
        }
    };
    VehiclesComponent.prototype.deleteRecord = function (id, $event) {
        var _this = this;
        if (id) {
            var record = { "id": id };
            var url = '/vehicles/delete';
            this.shared.postCurl(url, record).subscribe(function (output) {
                if (output.status) {
                    var row = $event.target.parentNode.parentNode;
                    row.parentNode.removeChild(row);
                    _this.contentArray = _this.contentArray.filter(function (row) {
                        return row.id !== id;
                    });
                    _this.presentToast("Deleted Successfully");
                }
                else {
                    _this.presentToast("Api Error");
                }
            });
        }
    };
    VehiclesComponent.prototype.setFiles = function (event, field, oldFiles) {
        var _this = this;
        if (oldFiles === void 0) { oldFiles = ''; }
        var loader = this.loadingCtrl.create({ content: "Uploading..." });
        loader.present();
        var files = event.target.files || event.srcElement.files;
        var url = '/vehicles/upload';
        if (field.value == oldFiles) {
            var oldFilesBackUp = oldFiles;
            field.setValue("");
        }
        else {
            oldFiles = field.value;
        }
        if (!files) {
            loader.dismiss();
            return;
        }
        var totalFileSize = 0;
        for (var i = 0; i < files.length; i++) {
            var fileSize = files[i].size;
            fileSize = fileSize / 1048576; //size in mb
            totalFileSize += fileSize;
        }
        if (totalFileSize > 10) {
            this.presentToast("File size exceeding 10Mb");
            event.target.value = "";
            return false;
        }
        /*formData.append('file', files[0], files[0].name);*/ /*  +i.toString()  */
        var formData = new FormData();
        for (var i = 0; i < files.length; i++) {
            formData.append('files', files[i], files[i].name);
        }
        if (oldFilesBackUp) {
            formData.append("oldFiles", oldFilesBackUp); // before exists in selection
        }
        this.shared.uploadPic(url, formData).subscribe(function (output) {
            if (output.status) {
                oldFiles = oldFiles ? oldFiles + ':' + output.response : output.response;
                field.setValue(oldFiles);
            }
            else {
                event.target.value = "";
                field.setValue("");
                _this.presentToast("File uploading Error!!!");
            }
            loader.dismiss();
        });
    };
    VehiclesComponent.prototype.presentToast = function (msg) {
        this.toast ? this.toast.dismiss() : false;
        this.toast = this.toastCtrl.create({
            message: msg,
            duration: 3000,
            position: 'top'
        });
        this.toast.present();
    };
    VehiclesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-vehicles',template:/*ion-inline-start:"/var/www/html/goa/client/src/pages/vehicles/vehicles.component.html"*/`<ion-header>\n    <ion-navbar>\n        <button ion-button menuToggle>\n            <ion-icon name="menu"></ion-icon>\n        </button>\n        <ion-title>Cars</ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n    <button ion-item (click)="showList=false" *ngIf="showList">\n      <ion-icon name="add-circle" item-start></ion-icon> Add New\n    </button>\n\n    <button ion-item (click)="showList=true" *ngIf="!showList">\n        <ion-icon name="list-box" item-start></ion-icon> Show List\n    </button>\n\n    <div id="List" *ngIf="showList">\n        <ion-grid *ngIf="contentArray?.length > 0">\n            <ion-list>\n                <ion-row justify-content-center align-items-center>\n                    <ion-col>\n                        <strong>Manufacturer</strong>\n                    </ion-col>\n                    <ion-col>\n                        <strong>Model</strong>\n                    </ion-col>\n                    <ion-col>\n                        <strong>Color</strong>\n                    </ion-col>\n                    <ion-col>\n                        <strong>M.Date</strong>\n                    </ion-col>\n                    <ion-col>\n                        <div text-center><strong>Action</strong></div>                        \n                    </ion-col>\n                </ion-row>\n            </ion-list>\n            <ion-list *ngFor="let row of contentArray; let i = index">\n                <ion-row justify-content-center align-items-center>                    \n                    <ion-col>\n                        {{ row.name }}\n                    </ion-col>\n                    <ion-col>\n                        {{ row.manufacture }}\n                    </ion-col>\n                    <ion-col>\n                        {{ row.color }}\n                    </ion-col>\n                    <ion-col>\n                        {{ row.date_manufactured }}\n                    </ion-col>\n                    <ion-col>\n                      <div text-center>\n                        <ion-icon name="remove-circle" (click)="deleteRecord(row.id, $event)"></ion-icon>\n                      </div>\n                    </ion-col>\n                </ion-row>\n            </ion-list>\n        </ion-grid>\n    </div>\n\n    <div id="Add" *ngIf="!showList">\n        <form [formGroup]="saveForm" (ngSubmit)="saveFormSubmit()" enctype="multipart/form-data">\n            <ion-item>\n                <ion-label floating>Manufacturer</ion-label>\n                <ion-select formControlName="manufacture_id" required>\n                  <ion-option *ngFor="let obj of manufacturers" [value]="obj.id">{{obj.name}}</ion-option>\n                </ion-select>\n            </ion-item>\n            <ion-item>\n                <ion-label floating>Name *</ion-label>\n                <ion-input formControlName="name" type="text" required></ion-input>\n            </ion-item>\n            <ion-item>\n                <ion-label floating>Color</ion-label>\n                <ion-input formControlName="color" type="text"></ion-input>\n            </ion-item>\n            <ion-item>\n                <ion-label floating>Reg.No *</ion-label>\n                <ion-input formControlName="reg_no" type="number" required></ion-input>\n            </ion-item>\n            <ion-item>\n                <ion-label floating>M.Date *</ion-label>\n                <ion-datetime displayFormat="MM/DD/YYYY" formControlName="date_manufactured"></ion-datetime>\n            </ion-item>\n            <ion-item>\n                <ion-input name="filename" type="file" (change)="setFiles($event, saveForm.controls[\'filename\'], saveForm.controls[\'oldFilePath\'].value)" accept="image/*"></ion-input>\n            </ion-item>\n            <ion-item>\n                <ion-label floating>Note</ion-label>\n                <ion-textarea formControlName="note"></ion-textarea>\n            </ion-item>\n            <ion-item>\n                <button ion-button tertiary [disabled]="!saveForm.valid">Submit</button>\n            </ion-item>\n        </form>\n    </div>\n</ion-content>`/*ion-inline-end:"/var/www/html/goa/client/src/pages/vehicles/vehicles.component.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_1__app_shared_service__["a" /* SharedService */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["h" /* ToastController */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["d" /* LoadingController */]])
    ], VehiclesComponent);
    return VehiclesComponent;
}());

//# sourceMappingURL=vehicles.component.js.map

/***/ }),

/***/ 202:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReportsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_shared_service__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(30);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ReportsComponent = (function () {
    function ReportsComponent(shared, toastCtrl, loadingCtrl) {
        this.shared = shared;
        this.toastCtrl = toastCtrl;
        this.loadingCtrl = loadingCtrl;
        this.toast = null;
    }
    ReportsComponent.prototype.ngOnInit = function () {
        this.loadRecords();
    };
    ReportsComponent.prototype.loadRecords = function () {
        var _this = this;
        var loader = this.loadingCtrl.create({ content: "Loading..." });
        loader.present();
        var url = '/reports';
        this.shared.getCurl(url).subscribe(function (output) {
            if (output.status) {
                _this.contentArray = output.response;
            }
            else {
                _this.presentToast("Api Error!!!");
            }
            loader.dismiss();
        });
    };
    ReportsComponent.prototype.sell = function (manufacture_id, model, $event) {
        var _this = this;
        if (manufacture_id) {
            var record = { "id": manufacture_id, "name": model };
            var url = '/manufacturers/vehicles/sold';
            this.shared.postCurl(url, record).subscribe(function (output) {
                if (output.status) {
                    var row = $event.target.parentNode.parentNode;
                    row.parentNode.removeChild(row);
                    _this.contentArray = _this.contentArray.filter(function (row) {
                        return !(row.manufacture_id == manufacture_id && row.model == model);
                    });
                    _this.presentToast("Sold Successfully");
                }
                else {
                    _this.presentToast("Api Error");
                }
            });
        }
    };
    ReportsComponent.prototype.presentToast = function (msg) {
        this.toast ? this.toast.dismiss() : false;
        this.toast = this.toastCtrl.create({
            message: msg,
            duration: 3000,
            position: 'top'
        });
        this.toast.present();
    };
    ReportsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-reports',template:/*ion-inline-start:"/var/www/html/goa/client/src/pages/reports/reports.component.html"*/`<ion-header>\n    <ion-navbar>\n        <button ion-button menuToggle>\n            <ion-icon name="menu"></ion-icon>\n        </button>\n        <ion-title>Reports</ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n    <ion-grid *ngIf="contentArray?.length > 0">\n            <ion-list>\n                <ion-row justify-content-center align-items-center>\n                    <ion-col>\n                        <strong>No.</strong>\n                    </ion-col>\n                    <ion-col>\n                        <strong>Model Name</strong>\n                    </ion-col>                    \n                    <ion-col>\n                        <strong>Manufacturer</strong>\n                    </ion-col>\n                    <ion-col>\n                        <strong>Count</strong>\n                    </ion-col>\n                    \n                    <ion-col>\n                        <div text-center><strong>Action</strong></div>\n                    </ion-col>\n                </ion-row>\n            </ion-list>\n            <ion-list *ngFor="let row of contentArray; let i = index">\n                <ion-row justify-content-center align-items-center> \n                    <ion-col>\n                        {{ i+1 }}\n                    </ion-col>                  \n                    <ion-col>\n                        {{ row.model }}\n                    </ion-col>\n                    <ion-col>\n                        {{ row.manufacture }}\n                    </ion-col>\n                    <ion-col>\n                        <div text-center>{{ row.count }}</div>\n                    </ion-col>\n                    <ion-col>\n                      <div text-center><ion-icon name="cart" (click)="sell(row.manufacture_id,row.model, $event)"></ion-icon></div>\n                    </ion-col>\n                </ion-row>\n            </ion-list>\n        </ion-grid>\n\n</ion-content>\n`/*ion-inline-end:"/var/www/html/goa/client/src/pages/reports/reports.component.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__app_shared_service__["a" /* SharedService */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* ToastController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* LoadingController */]])
    ], ReportsComponent);
    return ReportsComponent;
}());

//# sourceMappingURL=reports.component.js.map

/***/ }),

/***/ 203:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(225);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 225:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_service__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ionic_angular__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(272);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_home_home__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_manufacturers_manufacturers_component__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_vehicles_vehicles_component__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_reports_reports_component__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_status_bar__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_splash_screen__ = __webpack_require__(198);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

 // ngModel issue will come if not imported











var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_4__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_manufacturers_manufacturers_component__["a" /* ManufacturersComponent */],
                __WEBPACK_IMPORTED_MODULE_9__pages_vehicles_vehicles_component__["a" /* VehiclesComponent */],
                __WEBPACK_IMPORTED_MODULE_10__pages_reports_reports_component__["a" /* ReportsComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */], {}, {
                    links: []
                }),
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_manufacturers_manufacturers_component__["a" /* ManufacturersComponent */],
                __WEBPACK_IMPORTED_MODULE_9__pages_vehicles_vehicles_component__["a" /* VehiclesComponent */],
                __WEBPACK_IMPORTED_MODULE_10__pages_reports_reports_component__["a" /* ReportsComponent */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_11__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_12__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_3__shared_service__["a" /* SharedService */],
                { provide: __WEBPACK_IMPORTED_MODULE_4__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["b" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 272:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_manufacturers_manufacturers_component__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_vehicles_vehicles_component__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_reports_reports_component__ = __webpack_require__(202);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        this.initializeApp();
        // used for an example of ngFor and navigation
        this.pages = [
            { title: 'Home', component: __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */] },
            { title: 'Manufacturers', component: __WEBPACK_IMPORTED_MODULE_5__pages_manufacturers_manufacturers_component__["a" /* ManufacturersComponent */] },
            { title: 'Cars', component: __WEBPACK_IMPORTED_MODULE_6__pages_vehicles_vehicles_component__["a" /* VehiclesComponent */] },
            { title: 'Reports', component: __WEBPACK_IMPORTED_MODULE_7__pages_reports_reports_component__["a" /* ReportsComponent */] },
        ];
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/var/www/html/goa/client/src/app/app.html"*/`<ion-menu [content]="content">\n  <ion-header>\n    <ion-toolbar>\n      <ion-title>Menu</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n    <ion-list>\n      <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n        {{p.title}}\n      </button>\n    </ion-list>\n  </ion-content>\n\n</ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>`/*ion-inline-end:"/var/www/html/goa/client/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 41:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SharedService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(114);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SharedService = (function () {
    function SharedService(http) {
        this.http = http;
        this.public_path = 'http://127.0.0.1:8000/api';
    }
    SharedService.prototype.postCurl = function (url, data) {
        var httpOptions = {
            headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]({
                'Content-Type': 'application/json'
            })
        };
        return this.http.post(this.public_path + url, data, httpOptions);
    };
    SharedService.prototype.getCurl = function (url) {
        var httpOptions = {
            headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]({
                'Content-Type': 'application/json'
            })
        };
        return this.http.get(this.public_path + url, httpOptions);
    };
    SharedService.prototype.uploadPic = function (url, data) {
        return this.http.post(this.public_path + url, data);
    };
    SharedService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], SharedService);
    return SharedService;
}());

//# sourceMappingURL=shared.service.js.map

/***/ })

},[203]);
//# sourceMappingURL=main.js.map