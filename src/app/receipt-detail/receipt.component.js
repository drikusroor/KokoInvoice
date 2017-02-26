"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var receipt_service_1 = require('./receipt.service');
var ReceiptComponent = (function () {
    function ReceiptComponent(receiptService) {
        var _this = this;
        this.receiptService = receiptService;
        this.addCost = function () {
            var newCost = _this.newCost;
            if (newCost.description !== null && newCost.price !== null) {
                _this.receiptService.addCost(newCost);
                _this.newCost = { description: null, price: null };
            }
        };
        this.showAddCostButton = false;
        this.newCost = {
            description: null,
            price: null
        };
    }
    ReceiptComponent = __decorate([
        core_1.Component({
            selector: 'receipt',
            template: "\n    <div class=\"row\">\n      <div class=\"column-left\">\n        <p>Omschrijving</p>\n      </div>\n      <div class=\"column-right\">\n        <p>Bedrag:</p>\n      </div>\n    </div>\n    <hr>\n    <div class=\"row\" *ngFor=\"let cost of receiptService.costs\">\n      <div class=\"column-left\">\n        {{cost.description}}\n      </div>\n      <div class=\"column-right\">\n        \u20AC{{cost.price | number : '1.2-2'}}\n      </div>\n    </div>\n    <div class=\"row\">\n      <form (ngSubmit)=\"addCost()\">\n        <div class=\"column-left\">\n          <input  type=\"text\" [(ngModel)]=\"newCost.description\" name=\"description\"/>\n        </div>\n        <div class=\"column-right\">\n          <span [hidden]=\"!newCost.price\">\u20AC</span>\n          <input\n            type=\"number\" step=\"0.01\"\n            [(ngModel)]=\"newCost.price\"\n            name=\"newCost\"\n            />\n          <button [hidden]=\"!newCost.description || !newCost.price\" type=\"submit\">Voeg toe</button>\n        </div>\n      </form>\n    </div>\n    <div class=\"row\">\n      <div class=\"column-left\"></div>\n      <div class=\"column-right\">\n        <p>\n          Totaal: \u20AC{{receiptService.totalCostExVat | number : '1.2-2'}}\n        </p>\n        <hr>\n        <p>\n          21% BTW:\u20AC{{receiptService.totalVat | number : '1.2-2'}}\n        </p>\n        <hr>\n        <hr>\n        <p>\n          Te betalen:\n          \u20AC{{receiptService.totalCost | number : '1.2-2'}}\n        </p>\n      </div>\n    </div>\n\n    ",
            styles: [
                '.column-left { width: 75%; min-height: 1px; float: left; display: inline-block; text-align: left; }',
                '.column-right { width: 25%; float:left; display: inline-block; text-align: right;}',
                '.column-right input { text-align: right;  width: 50%;}'
            ],
            providers: [
                receipt_service_1.ReceiptService
            ]
        }), 
        __metadata('design:paramtypes', [receipt_service_1.ReceiptService])
    ], ReceiptComponent);
    return ReceiptComponent;
}());
exports.ReceiptComponent = ReceiptComponent;
//# sourceMappingURL=receipt.component.js.map