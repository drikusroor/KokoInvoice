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
var ReceiptService = (function () {
    function ReceiptService() {
        var _this = this;
        this.calcNewTotalCost = function (costs) {
            var newTotalCost = 0;
            for (var i = 0; i < costs.length; i++) {
                newTotalCost = newTotalCost + costs[i].price;
            }
            var vat = _this.vat / 100;
            var totalCostExVat = newTotalCost;
            var totalVat = newTotalCost * (vat);
            var totalCost = totalCostExVat + totalVat;
            _this.totalCostExVat = totalCostExVat;
            _this.totalVat = totalVat;
            _this.totalCost = totalCost;
        };
        this.addCost = function (newCost) {
            _this.costs.push(newCost);
            _this.calcNewTotalCost(_this.costs);
        };
        this.costs = [];
        this.vat = 21;
        this.totalCostExVat = 0;
        this.totalVat = 0;
        this.totalCost = 0;
    }
    ReceiptService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], ReceiptService);
    return ReceiptService;
}());
exports.ReceiptService = ReceiptService;
//# sourceMappingURL=receipt.service.js.map