import { Component, OnInit } from '@angular/core';
import { Cost } from './receipt';
import { ReceiptService } from '../receipt.service'

export interface IReceiptForm {
  newCost: number;
  vat: number;
}

@Component({
  selector: 'app-receipt-detail',
  templateUrl: './receipt-detail.component.html',
  styleUrls: ['./receipt-detail.component.css'],
  providers: [
    ReceiptService
  ]
})
export class ReceiptDetailComponent implements OnInit {

  newCost: Cost;
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
    var newCost: Cost = this.newCost;
    if (newCost.description !== null && newCost.price !== null) {
      console.log(newCost);
      this.receiptService.addCost(newCost);
      this.newCost = { description: null, price: null};
    }
  }

  public deleteCost = (index: number): void => {
    this.receiptService.deleteCost(index);
  }

  //constructor() { }

  ngOnInit() {
  }

}
