import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Car } from '../../services/car-interface';
import { visibility } from '../../../spa/services/animations';
import { Http, Response } from '@angular/http';
import { UserApi } from '../../../spa/users/user-api';

@Component({
  selector: 'app-car-panel',
  templateUrl: './car-panel.component.html',
  styleUrls: ['./car-panel.component.css'],
  animations: [visibility]
})
export class CarPanelComponent implements OnInit {
  @Input() car!: Car;
  @Input() index = 1;
  hideContentForAdmin!: boolean;
  userInfo: any;
  persons: any;
  arrayNewCars: number[] = [];
  
  constructor(public http: Http, private userApi: UserApi) {
    this.hideContentForAdmin = JSON.parse(localStorage.getItem('user')!).adminRole
  }
  ngOnInit() {
  }
 
  buyCar() {
    let user = JSON.parse(localStorage.getItem('user')!);
    //console.log(this.url + JSON.parse(localStorage.getItem('user')!).id);
    this.arrayNewCars = user.myCars;

    if (user.myCars == '') {
      this.arrayNewCars.push(this.car.id);
      this.userApi.addCar(this.arrayNewCars, this.car.name );
    } else {
      let currentCar = user.myCars.find( (value: number) => {
        return value === this.car.id;
      });
      
      if (currentCar === undefined) {
        this.arrayNewCars.push(this.car.id);
        this.userApi.addCar(this.arrayNewCars, this.car.name)
      } else {
        alert("This is your car");
      }
    }
  }
}
