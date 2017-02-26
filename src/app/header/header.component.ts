import { Component } from '@angular/core';
import { ReceiptService } from '.././receipt-detail/receipt.service';

@Component({
  providers: [ReceiptService],
  selector: 'header',
  template: `
    <div class="header">
      <img (click)="receiptService.saveReceipt()" src="assets/images/kokokodinglogoround.png"/>
      <div class="address">Drikus Roor <br>Laan der Techniek 2-705 <br>3903 AT Veenendaal <br>06 25 101 948 <br>drikusroor@gmail.com</div>
    </div>`,
  styles: [
    '.header { position: relative; background: #009aa3; width: 100%; height: 200px; font-size: 10pt; text-align: right; color: white;}',
    'img { width: 21%; top: 15px; left: 15px; position: absolute;}',
    '.address { position: absolute; width: 300px; right: 15px; bottom: 15px }'
  ]
})

export class HeaderComponent  {

  receiptService: ReceiptService;

  constructor (
    receiptService: ReceiptService
  ) {
    this.receiptService = receiptService;
  }


}
