import { Component } from '@angular/core';
import { ReceiptService } from './receipt.service';
import { ICost } from './receipt.service';

export interface IReceiptForm {
  newCost: number;
  vat: number;
}

@Component({
  selector: 'receipt',
  template: `
    <div class="row">
      <div class="column-left">
        <p>Omschrijving</p>
      </div>
      <div class="column-right">
        <p>Bedrag:</p>
      </div>
    </div>
    <hr>
    <div class="row" *ngFor="let cost of receiptService.costs">
      <div class="column-left">
        {{cost.description}}
      </div>
      <div class="column-right">
        €{{cost.price | number : '1.2-2'}}
      </div>
    </div>
    <div class="row">
      <form (ngSubmit)="addCost()">
        <div class="column-left">
          <input  type="text" [(ngModel)]="newCost.description" name="description"/>
        </div>
        <div class="column-right">
          <span [hidden]="!newCost.price">€</span>
          <input
            type="number" step="0.01"
            [(ngModel)]="newCost.price"
            name="newCost"
            />
          <button [hidden]="!newCost.description || !newCost.price" type="submit">Voeg toe</button>
        </div>
      </form>
    </div>
    <div class="row">
      <div class="column-left"></div>
      <div class="column-right">
        <p>
          Totaal: €{{receiptService.totalCostExVat | number : '1.2-2'}}
        </p>
        <hr>
        <p>
          21% BTW:€{{receiptService.totalVat | number : '1.2-2'}}
        </p>
        <hr>
        <hr>
        <p>
          Te betalen:
          €{{receiptService.totalCost | number : '1.2-2'}}
        </p>
      </div>
    </div>

    `,
  styles: [
    '.column-left { width: 75%; min-height: 1px; float: left; display: inline-block; text-align: left; }',
    '.column-right { width: 25%; float:left; display: inline-block; text-align: right;}',
    '.column-right input { text-align: right;  width: 50%;}'
  ],
  providers: [
    ReceiptService
  ]
})

export class ReceiptComponent  {
  newCost: ICost;
  showAddCostButton: boolean;

  constructor
  (
    private receiptService: ReceiptService
  )
  {
    this.showAddCostButton = false;
    this.newCost = {
      description: null,
      price: null
    }
  }

  public addCost = (): void => {
    var newCost: ICost = this.newCost;
    if (newCost.description !== null && newCost.price !== null) {
      this.receiptService.addCost(newCost);
      this.newCost = { description: null, price: null};
    }
  }

}
