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
    <div class="row relative" *ngFor="let cost of receiptService.costs; let i = index">
      <div class="column-left">
        <pre>{{cost.description}}</pre>
      </div>
      <div class="column-right">
        €{{cost.price | number : '1.2-2'}}
      </div>
      <fa (click)="deleteCost(i)" class="delete-cost" name="close"></fa>
    </div>
    <div class="row">
      <form (ngSubmit)="addCost()">
        <div class="column-left">
          <textarea  type="text" [(ngModel)]="newCost.description" name="description"></textarea>
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
    '.row { position: relative }',
    '.column-left { width: 75%; min-height: 1px; float: left; display: inline-block; text-align: left; }',
    '.column-right { width: 25%; float:left; display: inline-block; text-align: right;}',
    '.column-right input { text-align: right;  width: 50%;}',
    '.delete-cost { position: absolute; right: -25px; top: -1px; cursor: pointer}',
    'pre {    white-space: pre-wrap; white-space: -moz-pre-wrap;' +
    'white-space: -pre-wrap;' +
    'white-space: -o-pre-wrap;' +
    'word-wrap: break-word;' +
    '}'
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

  public deleteCost = (index: number): void => {
    this.receiptService.deleteCost(index);
  }

}
