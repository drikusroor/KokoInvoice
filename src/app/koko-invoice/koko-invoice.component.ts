import { Component } from '@angular/core';

@Component({
  selector: 'invoice',
  template: `<div>
    <header></header>
    <content></content>
    </div>`
})

export class KokoInvoiceComponent  {
  name: string = "Teststring"
}
