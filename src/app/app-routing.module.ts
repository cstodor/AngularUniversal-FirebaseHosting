import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from "@angular/router";

// Components
import { HomeComponent } from "./home/home.component";
import { AppInfoComponent } from "./app-info/app-info.component";
import { Error404Component } from "./error-404/error-404.component";

const appRoutes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'my-repositories', loadChildren: 'app/repos/repos.module#ReposModule' },
  { path: 'app-info', component: AppInfoComponent },
  { path: '**', component: Error404Component }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [],
  exports: [RouterModule]
})
export class AppRoutingModule { }