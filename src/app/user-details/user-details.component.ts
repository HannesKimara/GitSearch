import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
  repos:any;
  constructor(private route: ActivatedRoute, private http: HttpClient) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      const username = params.username;

      const promise = new Promise((resolve, reject) => {
        this.http.get(`${environment.BASE_URL}s/${username}/repos`, {headers: { Authorization: `Bearer ${environment.API_KEY}`}}).toPromise().then(response => {
          this.repos = response;
          console.log(this.repos);
          resolve();
        },
        error => {
        console.log('ERROR OCCURRED');
        reject(error);
        });
      })
  }
    )}
}
