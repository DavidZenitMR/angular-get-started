import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';


import { AppComponent } from './app.component';
//Created by CLI angular when I typed ng generate component !1!
import { PeopleListComponent } from './people-list/people-list.component';
import { PersonDetailsComponent } from './person-details/person-details.component';
import { PeopleService } from './people.service';

// ...lots of imports...

import { AppRoutingModule } from "./app-routing.module";
import { MinValidatorDirective } from './min-validator.directive';
import { MaxValidatorDirective } from './max-validator.directive';

@NgModule({
  declarations: [
    AppComponent,
    PeopleListComponent,
    PersonDetailsComponent,
    MinValidatorDirective,
    MaxValidatorDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,   // <=== HERE: new routing module
  ],
  providers: [PeopleService],
  bootstrap: [AppComponent]
})
export class AppModule { }

