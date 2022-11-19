import { UserService } from './../services/user.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from "@angular/router";

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent implements OnInit {
  userId;
  user;
  constructor(
    public route: ActivatedRoute,
    private userService: UserService,
    private router: Router
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe((paramMap: ParamMap) => {
      if (paramMap.has("userId")) {
        this.userId = paramMap.get("userId");
        this.user = this.userService.viewUser(this.userId);
        console.log(this.user);
        console.log(paramMap.get("userId"));
      }
    });

    if (!this.user) {
      this.router.navigate(['']);
    }
  }

}
