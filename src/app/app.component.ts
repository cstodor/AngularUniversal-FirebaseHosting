import { Component } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import { REPOS_LIST } from "./constants";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  repos: Observable<any>;
  hrepos = [
    { name: 'Static Data One'},
    { name: 'Static Data Two'},
    { name: 'Static Data Three'},
    { name: 'Static Data Four'},
    { name: 'Static Data Five'}
  ]

  constructor(private http: HttpClient) {
    this.repos = this.http.get(REPOS_LIST);
  }
}
