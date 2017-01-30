import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

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
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
