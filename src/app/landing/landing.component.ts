import { Component, OnInit } from '@angular/core';
import { environment } from '../../environments/environment';
import { User } from '../user';
import { GitHTTPService } from '../git-http.service';
import { Repository } from '../repository';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {
  user: User;
  repos:any;
  repo: Repository;

  constructor(private gitService : GitHTTPService, private http:HttpClient) { 
  }

  repositoryRequest() {
    const promise = new Promise((resolve, reject) => {
      this.http.get(`${environment.BASE_URL}/repos`, {headers: {Authorization: `Bearer ${environment.API_KEY}`}}).toPromise().then(response => {
          this.repos = response;
          resolve();
      },
      error => {
        console.log('ERROR OCCURRED');
        reject(error);
      });
    });
    return promise;
  }

  ngOnInit() {
    this.gitService.userRequest();
    this.user = this.gitService.user;

    this.repositoryRequest();
    console.log(this.repos)
  }

}
