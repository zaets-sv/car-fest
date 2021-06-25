import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { visibility } from '../../../spa/services/animations';
import { AppDataService } from '../../services/app-data.service';
import { Car } from '../../services/car-interface';

@Component({
  selector: 'app-my-cars',
  templateUrl: './my-cars.component.html',
  styleUrls: ['./my-cars.component.css'],
  animations: [visibility]
})
export class MyCarsComponent implements OnInit {
  allCars!: Array<Car>;
  myCars: Array<Car> = [];
  user = JSON.parse(localStorage.getItem('user')!);
  constructor(private appDataService: AppDataService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.appDataService.getCars().subscribe(allItems => {
      this.allCars = allItems;
      this.updateList()
    });
  }

  updateList() {
    for (let element in this.allCars) {
      let currentCar = this.user.myCars.find((value: number) => {
        return value === this.allCars[element].id;
      });

      if (currentCar === this.allCars[element].id) {
        this.myCars.push(this.allCars[element]);
      }
    }
  }
}
