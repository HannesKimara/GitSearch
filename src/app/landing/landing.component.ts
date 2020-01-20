import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import { environment } from '../../environments/environment';
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
  @Output() searchUser = new EventEmitter();

  constructor(private gitService : GitHTTPService) { 
    this.repos = []
  }

  ngOnInit() {
    this.gitService.userRequest();
    this.user = this.gitService.user;

    this.gitService.repositoryRequest();
    this.repos = this.gitService.repos;
    console.log(this.repos)
  }

}
