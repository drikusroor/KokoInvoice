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
var core_1 = require("@angular/core");
var ContentComponent = (function () {
    function ContentComponent() {
    }
    return ContentComponent;
}());
ContentComponent = __decorate([
    core_1.Component({
        selector: 'content',
        template: "\n    <div class=\"content\">\n      <div class=\"row\">\n        <div class=\"receiver\">\n          <div style=\"width: 20%; display: inline-block; float: left;\"><p style=\"margin: 0;\">Aan: </p></div>\n          <div style=\"width: 80%; display: inline-block; float: left;\">\n            <input type=\"text\"/>\n            <input type=\"text\"/>\n            <input type=\"text\"/>\n            <input type=\"text\"/>\n          </div>\n        </div>\n      </div>\n      <div class=\"row\">\n        <h2>Factuur</h2>\n        <hr>\n      </div>\n      <div class=\"row\">\n        <p>Betreft: <input type=\"text\"/></p>\n      </div>\n      <div class=\"row\">\n        <p>Factuurdatum: <input type=\"text\"/></p>\n      </div>\n      <div class=\"row\">\n        <p>Factuurnummer: <input type=\"text\"/></p>\n      </div>\n      <div class=\"row\">\n        <p>Deze factuur graag binnen 14 dagen betalen. <br>\n        Rek.nr: NL36 RABO 0313 2715 77, t.n.v. Koko Koding</p>\n      </div>\n      <div class=\"row\">\n        <receipt></receipt>\n      </div>\n    </div>",
        styles: [
            '.content { width: 80%; margin: auto;}',
            '.receiver { width: 40%; margin-left: 60%; margin-top: 10px; height: 100px; }'
        ]
    }),
    __metadata("design:paramtypes", [])
], ContentComponent);
exports.ContentComponent = ContentComponent;
//# sourceMappingURL=content.component.js.map