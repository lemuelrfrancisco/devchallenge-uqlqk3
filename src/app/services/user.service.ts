import { User } from './../model/user.model';
import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { map, take } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  users = [];
  constructor(private http: HttpClient) { }

  getUser(username) {
    this.http.get<User>('https://api.github.com/users/' + username)
      .pipe(
        take(1),
        map(resultData => {
          return {
            id: resultData.id,
            avatar_url: resultData.avatar_url,
            name: resultData.name,
            login: resultData.login,
            company: resultData.company,
            followers: resultData.followers,
            public_repos: resultData.public_repos,
            location: resultData.location,
            bio: resultData.bio
          }
        })
      )
      .subscribe(result => {
        const isIncluded = this.users.find(x => x.id == result.id);
        if (!isIncluded) {
          this.users = [...this.users, result];
        } else {
          alert('Username already added.');
        }
      },
        error => {
          alert('Username not found.');
        });
  }

  viewUser(userId) {
    return this.users[userId];
  }

  removeUser(userId) {
    return this.users.splice(userId, 1)
  }
}
