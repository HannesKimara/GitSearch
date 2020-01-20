import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';
import { User } from './user';
import { Repository } from './repository';

@Injectable({
  providedIn: 'root'
})

export class GitHTTPService {
  user: User;
  repos:any;
  repo: Repository;

  constructor(private http: HttpClient) {
    this.user = new User('', '', '', '');
    this.repo = new Repository('', '', '');
    this.repos = []
   }

  userRequest() {
    interface ApiResponse {
      login: string;
      avatar_url: string;
      html_url: string;
      repos_url: string;
    }
    const promise = new Promise((resolve, reject) => {
      this.http.get<ApiResponse>(environment.BASE_URL, {headers: { Authorization: `Bearer ${environment.API_KEY}`}}).toPromise().then(response => {
        this.user.login = response.login;
        this.user.avatarUrl = response.avatar_url;
        this.user.htmlUrl = response.html_url;
        this.user.reposUrl = response.repos_url;
        resolve();
      },
      error => {
      console.log('ERROR OCCURRED');
      reject(error);
      });
    })
    return promise;
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
}
