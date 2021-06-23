import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Car } from '../../services/car-interface';
import { visibility } from '../../../spa/services/animations';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-car-panel',
  templateUrl: './car-panel.component.html',
  styleUrls: ['./car-panel.component.css'],
  animations: [visibility]
})
export class CarPanelComponent implements OnInit {
  @Input() car!: Car;
  @Input() index = 1;
   userInfo: any;

  constructor() { }
  ngOnInit() {
  }

  buyCar() {
    //localStorage.setItem('user.myCars', "5");
    this.userInfo = localStorage.getItem('user');

    console.log("this.userInfo = " + this.userInfo);
    console.log("this.car = " + this.car.id);
  }

}
