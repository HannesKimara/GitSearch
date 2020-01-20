import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-repo-search',
  templateUrl: './repo-search.component.html',
  styleUrls: ['./repo-search.component.css']
})
export class RepoSearchComponent implements OnInit {
  query:any;
  repos:any;
  constructor(private http:HttpClient) {}
  searchRepos(){
    const promise = new Promise((resolve, reject) => {this.http.get(`${environment.SEARCH_URL}repositories?q=${this.query}`, {headers: {Authorization: `Bearer ${environment.API_KEY}`}}).toPromise().then(response => {
       this.repos = response['items'];
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
