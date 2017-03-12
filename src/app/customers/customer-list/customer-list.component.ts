import { Component, OnInit } from '@angular/core';
import { Customer } from '../customer';
import { CustomerService } from '../customer.service';

@Component({ 
  selector: 'app-customer-list',
  providers: [CustomerService],
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {

  customers: Customer[];
  newCustomer: {};

  constructor(private customerService: CustomerService) {
    this.newCustomer = {};
  }

  public addCustomer = ():void => {
    let customer = new Customer('Vraag maar aan oma!');
    this.customerService.addCustomer(customer);
  }

  ngOnInit() {
    this.customers = this.customerService.customers;
  }

}
