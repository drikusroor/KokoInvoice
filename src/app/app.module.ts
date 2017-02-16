import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { LocalStorageModule } from 'angular-2-local-storage';
import { Angular2FontawesomeModule } from 'angular2-fontawesome/angular2-fontawesome'

import { AppComponent } from './app.component';
import { KokoInvoiceComponent } from './koko-invoice/koko-invoice.component'
import { HeaderComponent} from './header/header.component'
import { ContentComponent} from './content/content.component'
import { ReceiptComponent} from './receipt/receipt.component'

@NgModule({
  declarations: [
    AppComponent,
    KokoInvoiceComponent,
    HeaderComponent,
    ContentComponent,
    ReceiptComponent
  ],
  imports: [
    BrowserModule,
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
