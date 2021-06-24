import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Car } from '../../services/car-interface';
import { visibility } from '../../../spa/services/animations';
import { Http, Response } from '@angular/http';

@Component({
  selector: 'app-car-panel',
  templateUrl: './car-panel.component.html',
  styleUrls: ['./car-panel.component.css'],
  animations: [visibility]
})
export class CarPanelComponent implements OnInit {
  @Input() car!: Car;
  @Input() index = 1;
  url = 'http://localhost:3000/users/';
  userInfo: any;
  persons: any;
  arrayNewCars: number[] = [];
  
  constructor(public http: Http) {
  }
  ngOnInit() {
  }
 
  buyCar() {
    let user = JSON.parse(localStorage.getItem('user')!);
    console.log(this.url + JSON.parse(localStorage.getItem('user')!).id);
   
    this.arrayNewCars = user.myCars;

    if (user.myCars == '') {
      console.log("user.myCars = " + user.myCars);
      this.arrayNewCars.push(this.car.id);
      this.putRequest(this.arrayNewCars);
     
    } else {
      let currentCar = user.myCars.find( (value: number) => {
        return value === this.car.id;
      });
      
      if (currentCar === undefined) {
        this.arrayNewCars.push(this.car.id);
        this.putRequest(this.arrayNewCars)
      } else {
        alert("This is your car");
      }
      console.log("this.arrayNewCars  -> " + this.arrayNewCars);
    }
    console.log("this.car = " + this.car.id);
  }

  putRequest(myNewCar : any) {
    let user = JSON.parse(localStorage.getItem('user')!);
    let userJSON = {
      "name": user.name,
      "email": user.email,
      "adminRole": true,
      "password": user.password,
      "myCars": myNewCar,
      "id": user.id
    };

    return this.http.put(this.url + user.id, userJSON).subscribe(data => {
      alert("Congratulations with the purchase of a new car \"" + this.car.name + "\"");

     localStorage.setItem('user', JSON.stringify(userJSON));
      console.log("data = " + data)
    },
      error => {
        console.error('There was an error!', error);
      });
  }
}
