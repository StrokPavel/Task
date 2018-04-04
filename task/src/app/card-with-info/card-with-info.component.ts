import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../user_data';
import { Service } from '../service';
import { InfoToDisplayComponent } from '.././info-to-display/info-to-display.component';


@Component({
  selector: 'app-card-with-info',
  templateUrl: './card-with-info.component.html',
  styleUrls: ['./card-with-info.component.css']
})
export class CardWithInfoComponent implements OnInit {

  @Input() user: User;

  constructor(private route: Router) { }

//Метод который получает информацию по ID пользователя
//из маршрута info(если так можно выразиться) и выводит на модальное окно.
  showInfo() {
    this.route.navigate(['info'], {
      queryParams: {
        'id': this.user.id
      }
    })
  }

  ngOnInit() {

  }
}
