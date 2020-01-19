import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { GitHTTPService } from '../git-http.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {
  user: User;
  constructor(private gitService : GitHTTPService) { 
  }

  ngOnInit() {
    this.gitService.userRequest();
    this.user = this.gitService.user;
  }

}
