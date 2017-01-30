import { Injectable } from '@angular/core';

export interface ICost {
  description: string;
  price: number;
}

@Injectable()
export class ReceiptService {
  costs: ICost[];
  vat: number;
  totalCostExVat: number;
  totalVat: number;
  totalCost: number;

  constructor
  (

  )
  {
    this.costs = [];
    this.vat = 21;
    this.totalCostExVat = 0;
    this.totalVat = 0;
    this.totalCost = 0;
  }

  public calcNewTotalCost = (costs: ICost[]): void => {
    var newTotalCost: number = 0;
    for(var i=0; i < costs.length; i++) {
      newTotalCost = newTotalCost + costs[i].price;
    }
    var vat = this.vat / 100;

    var totalCostExVat = newTotalCost;
    var totalVat = newTotalCost * (vat);
    var totalCost = totalCostExVat + totalVat;
    this.totalCostExVat = totalCostExVat;
    this.totalVat = totalVat;
    this.totalCost = totalCost;
  }

  public addCost = (newCost: ICost): void => {
    this.costs.push(newCost);

    this.calcNewTotalCost(this.costs);
  }
}
