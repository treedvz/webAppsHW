//Tyler Reed
//CSC436 Online
//HW3

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { TicketComponent } from './ticket/ticket.component';
import { AboutComponent } from  './about/about.component';
import { DupeCheckDirective } from './directives/dupe-check.directive';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: 'ticket', component:TicketComponent},
  {path: 'about', component:AboutComponent},
  {path: '', redirectTo: '/about', pathMatch: 'full'}
]

@NgModule({
  declarations: [
    AppComponent,
    TicketComponent,
    DupeCheckDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
