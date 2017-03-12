export class Cost {
  description: string;
  price: number;
}

export class Receipt {
  costs: Cost[];
  vat: number;
  totalCostExVat: number;
  totalVat: number;
  totalCost: number;
}
