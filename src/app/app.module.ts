import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";

// Modules
import { AppRoutingModule } from "./app-routing.module";

// Components
import { AppComponent } from './app.component';
import { HomeComponent } from "./home/home.component";
import { AppInfoComponent } from "./app-info/app-info.component";
import { HeaderComponent } from "./shared/header/header.component";
import { FooterComponent } from "./shared/footer/footer.component";
import { Error404Component } from "./error-404/error-404.component";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AppInfoComponent,
    HeaderComponent,
    FooterComponent,
    Error404Component
  ],
  imports: [
    BrowserModule.withServerTransition({appId: 'MyGitRepos-with-AngularUniversal'}),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
