import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";

// RxJS
import { Observable } from "rxjs/Observable";

// Constants
import { REPOS_LIST } from "../../constants";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  repos: Observable<any>;
  hrepos = [
    { name: 'Static Data One' },
    { name: 'Static Data Two' },
    { name: 'Static Data Three' },
    { name: 'Static Data Four' },
    { name: 'Static Data Five' }
  ]

  constructor(private http: HttpClient) {
    this.repos = this.http.get(REPOS_LIST);
  }

  ngOnInit() {
  }

}
