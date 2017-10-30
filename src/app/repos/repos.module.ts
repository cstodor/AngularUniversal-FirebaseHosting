import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from "@angular/common/http";

// Modules
import { ReposRoutingModule } from "./repos-routing.module";

// Components
import { ReposComponent } from './repos.component';
import { ListComponent } from './list/list.component';
import { DetailsComponent } from './details/details.component';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    ReposRoutingModule
  ],
  declarations: [
    ReposComponent,
    ListComponent,
    DetailsComponent
  ]
})
export class ReposModule { }
