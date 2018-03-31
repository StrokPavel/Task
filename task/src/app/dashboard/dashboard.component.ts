import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../user_data';
import { Service } from '../service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {
  users: User[];

  constructor(private Service: Service) { }

  ngOnInit() {
    this.getUsers();
  }
//Получает информацию о пользователе.
  getUsers(): void {
    this.Service.getUsers()
    .subscribe(users => this.users = users);
  }

}
