import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from "@angular/router";

// Components
import { ReposComponent } from "./repos.component";
import { DetailsComponent } from "./details/details.component";
import { ListComponent } from "./list/list.component";

const repoRoutes: Routes = [
  { path: '', component: ListComponent },
  { path: 'details/:name', component: DetailsComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(repoRoutes)
  ],
  declarations: [],
  exports: [RouterModule]
})
export class ReposRoutingModule { }
