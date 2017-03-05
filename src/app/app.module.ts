import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { LocalStorageModule } from 'angular-2-local-storage';
import { Angular2FontawesomeModule } from 'angular2-fontawesome/angular2-fontawesome'

import { AppComponent } from './app.component';
import { KokoInvoiceComponent } from './koko-invoice/koko-invoice.component'
import { HeaderComponent} from './header/header.component'
import { ContentComponent} from './content/content.component'
import { OverviewComponent } from './overview/overview.component'
import { CustomerListComponent} from './customers/customer-list/customer-list.component'
import { CustomerDetailComponent} from './customers/customer-detail/customer-detail.component'
import { ReceiptListComponent} from './receipt-list/receipt-list.component'
import { ReceiptDetailComponent} from './receipt-detail/receipt-detail.component'
import { PageNotFoundComponent } from './page-not-found/page-not-found.component'

const appRoutes: Routes = [
  { path: 'overview', component: OverviewComponent },
  { path: 'customers', component: CustomerListComponent },
  { path: 'customers/:id', component: CustomerDetailComponent },
  { path: 'receipts', component: ReceiptListComponent },
  { path: 'receipts/:id', component: ReceiptDetailComponent },
  { path: '',
    redirectTo: '/overview',
    pathMatch: 'full'
  },
  { path: '**', component: PageNotFoundComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    KokoInvoiceComponent,
    HeaderComponent,
    ContentComponent,
    ReceiptDetailComponent,
    OverviewComponent,
    CustomerListComponent,
    CustomerDetailComponent,
    ReceiptListComponent,
    ReceiptDetailComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    HttpModule,
    LocalStorageModule.withConfig({
      prefix: 'my-app',
      storageType: 'localStorage'
    }),
    Angular2FontawesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
