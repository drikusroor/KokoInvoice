import { Component } from '@angular/core';

@Component({
  selector: 'content',
  template: `
    <div class="content">
      <div class="row">
        <div class="receiver">
          <div style="width: 20%; display: inline-block; float: left;"><p style="margin: 0;">Aan: </p></div>
          <div style="width: 80%; display: inline-block; float: left;">
            <input type="text"/>
            <input type="text"/>
            <input type="text"/>
            <input type="text"/>
          </div>
        </div>
      </div>
      <div class="row">
        <h2>Factuur</h2>
        <hr>
      </div>
      <div class="row">
        <p>Betreft: <input type="text" style="width: 80%;"/></p>
      </div>
      <div class="row">
        <p>Factuurdatum: <input type="text"/></p>
      </div>
      <div class="row">
        <p>Factuurnummer: <input type="text"/></p>
      </div>
      <div class="row">
        <p>Deze factuur graag binnen 14 dagen betalen. <br>
        Rek.nr: NL36 RABO 0313 2715 77, t.n.v. Koko Koding</p>
      </div>
      <div class="row">
        <app-receipt-detail></app-receipt-detail>
      </div>
    </div>`,
  styles: [
    '.content { width: 80%; margin: auto;}',
    '.receiver { width: 40%; margin-left: 60%; margin-top: 10px; height: 100px; }',
    '.receiver input { width: 100% ;}'
  ]
})
export class ContentComponent  {
}
