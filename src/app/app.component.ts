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

  constructor(private http: HttpClient) {
    this.repos = this.http.get(REPOS_LIST);
  }
}
