import { Component } from '@angular/core';

@Component({
  selector: 'invoice',
  template: `<div class="factuur">
    <header></header>
    <content></content>
    </div>`
})

export class KokoInvoiceComponent  {
  name: string = "Teststring"
}
