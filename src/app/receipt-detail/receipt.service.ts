import { Injectable } from '@angular/core';
import { LocalStorageService } from 'angular-2-local-storage';
import { ILocalStorageServiceConfig } from 'angular-2-local-storage';
import { Cost, Receipt } from './receipt';

@Injectable()
export class ReceiptService {
  costs: Cost[];
  vat: number;
  totalCostExVat: number;
  totalVat: number;
  totalCost: number;
 
  constructor
  (
    private localStorageService: LocalStorageService
  )
  {
    var storedReceiptString: any = this.localStorageService.get('receipt');
    if (storedReceiptString) {
      var storedReceipt = JSON.parse(storedReceiptString)

      this.costs = storedReceipt.costs;
      // this.vat = storedReceipt.vat;
      this.totalCostExVat = storedReceipt.totalCostExVat;
      this.totalVat = storedReceipt.totalVat;
      this.totalCost = storedReceipt.totalCost  ;
    } else {
      this.costs = [];
      this.totalCostExVat = 0;
      this.totalVat = 0;
      this.totalCost = 0;
    }
    this.vat = 21;

  }

  public calcNewTotalCost = (costs: Cost[]): void => {
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

    this.saveReceipt();
  }

  public addCost = (newCost: Cost): void => {
    this.costs.push(newCost);

    this.calcNewTotalCost(this.costs);
  }

  public deleteCost = (index: number): void => {
    this.costs.splice(index, 1);
    this.calcNewTotalCost(this.costs);
  }

  public saveReceipt = (): void => {
    var totalReceipt: any = {
      costs: this.costs,
      // vat: this.vat,
      totalCostExVat: this.totalCostExVat,
      totalCost: this.totalCost
    }
    this.localStorageService.set('receipt', JSON.stringify(totalReceipt));
  }
}
