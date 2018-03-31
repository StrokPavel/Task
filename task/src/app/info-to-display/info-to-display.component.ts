import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { User } from '../user_data';
import { Service } from '../service';
import { CardWithInfoComponent } from '../card-with-info/card-with-info.component'

@Component({
  selector: 'app-info-to-display',
  templateUrl: './info-to-display.component.html',
  styleUrls: ['./info-to-display.component.css']
})
export class InfoToDisplayComponent implements OnInit {

  user: User;
  users_list: User[];
  id: number;
  private subscription: Subscription

  constructor(private Service: Service, private route: ActivatedRoute) {
    this.subscription = route.queryParams.subscribe(
      (queryParam: any) => {
        this.id = queryParam['id'];
      }
    );
    this.getUser();
  }

//Получение массива с информацией о пользователях  и перебор этого массива.
//Почему перебор именно такой незнаю, но он работает.

  getUser(): void {
    this.Service.getUsers()
    .subscribe(users_list => {
      this.users_list = users_list;
      this.users_list.forEach(
        el => {
          if (el.id === +this.id) this.user = el;
        }
      )
    })
  }

  // closeWindow(): void {
  //   this.route.url="";
  // }

  ngOnInit() {
  }
}
