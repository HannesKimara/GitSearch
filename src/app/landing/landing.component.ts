import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { GitHTTPService } from '../git-http.service';
import { Repository } from '../repository';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {
  user: User;
  repos:any;
  repo: Repository;

  constructor(private gitService : GitHTTPService) { 
  }

  ngOnInit() {
    this.gitService.userRequest();
    this.user = this.gitService.user;
    console.log(this.user)

    this.gitService.repositoryRequest();
    this.repo = this.gitService.repo;
    console.log("Here too")
    console.log(this.repo)
  }

}
