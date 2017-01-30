import { ContentComponent } from './content.component';

import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

describe('ContentComponent', function () {
  let de: DebugElement;
  let comp: ContentComponent;
  let fixture: ComponentFixture<ContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentComponent);
    comp = fixture.componentInstance;
    de = fixture.debugElement.query(By.css('.content .row .receiver'));
  });

  it('should create component', () => expect(comp).toBeDefined() );

  it('should have expected <p> text', () => {
    fixture.detectChanges();
    const div = de.nativeElement;
    expect(div.innerText).toMatch(/angular/i,
      '<pnpm> should say something about "Aan:"');
  });
});
