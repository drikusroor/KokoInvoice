import { Injectable } from '@angular/core';
import { Customer } from './customer';
import { LocalStorageService } from 'angular-2-local-storage';

@Injectable()
export class CustomerService {

  customers: Customer[];

  constructor(
    private localStorageService: LocalStorageService
  ) {
    let customersString: any = this.localStorageService.get('customers');
    if (customersString) {
      this.customers = JSON.parse(customersString)
    } else {
      this.customers = [];
    }
   }

   public saveCustomers = (customers: Customer[]): void => {
     this.localStorageService.set('customers', customers);
   }

   public addCustomer = (customer: Customer):void => {
     this.customers.push(customer);
     this.saveCustomers(this.customers);
   }

   public deleteCustomer = (customerId: AAGUID): void => {
     this.customers = this.customers.map((customer) => {
       if(customerId !== customer.id) {
         return customer;
       }
     })
     this.saveCustomers(this.customers);
   }

}
