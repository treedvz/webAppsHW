import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { TicketComponent } from './ticket/ticket.component';
import { DupeCheckDirective } from './directives/dupe-check.directive';

@NgModule({
  declarations: [
    AppComponent,
    TicketComponent,
    DupeCheckDirective
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
