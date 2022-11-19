import { UserService } from './../services/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  username: string = '';
  constructor(public userService: UserService) { }

  ngOnInit() {
  }

  search(username) {
    if (username.value !== '') {
      this.userService.getUser(username.value);
    }
  }
}
