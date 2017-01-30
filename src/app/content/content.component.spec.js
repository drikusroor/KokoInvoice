"use strict";
var content_component_1 = require('./content.component');
var testing_1 = require('@angular/core/testing');
var platform_browser_1 = require('@angular/platform-browser');
describe('ContentComponent', function () {
    var de;
    var comp;
    var fixture;
    beforeEach(testing_1.async(function () {
        testing_1.TestBed.configureTestingModule({
            declarations: [content_component_1.ContentComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = testing_1.TestBed.createComponent(content_component_1.ContentComponent);
        comp = fixture.componentInstance;
        de = fixture.debugElement.query(platform_browser_1.By.css('.content .row .receiver'));
    });
    it('should create component', function () { return expect(comp).toBeDefined(); });
    it('should have expected <p> text', function () {
        fixture.detectChanges();
        var div = de.nativeElement;
        expect(div.innerText).toMatch(/angular/i, '<pnpm> should say something about "Aan:"');
    });
});
//# sourceMappingURL=content.component.spec.js.map