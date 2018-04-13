import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  userName: string;
  userAge: number;

  constructor(private user: UserService) { }

  ngOnInit() {
    this.user.setUserName(`Juan Topo`);

    this.userName = this.user.getUserName();

    this.user.setUserAge(32);
    this.userAge = this.user.getUserNumber();
  }

}
