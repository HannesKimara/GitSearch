import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  query:string;
  users: any;
  constructor(private http:HttpClient) { }

  searchGitUser(){
     const promise = new Promise((resolve, reject) => {this.http.get(`${environment.SEARCH_URL}users?q=${this.query}`, {headers: {Authorization: `Bearer ${environment.API_KEY}`}}).toPromise().then(response => {
        this.users = response['items'];
        console.log(response);
        resolve();
       },
      error => {
        reject(error);
      });
    });
    return promise;
  }
  ngOnInit() {
  }

}
