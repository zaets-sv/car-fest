import { Component, OnInit } from '@angular/core';
import { Car } from '../../services/car-interface';
import { AppDataService } from '../../services/app-data.service';
import { ActivatedRoute } from '../../../../node_modules/@angular/router';
import { Params } from '@angular/router';

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.css']
})
export class CarListComponent implements OnInit {
  allCars!: Array<Car>;
  cars!: Array<Car>;
  count = 0;
  constructor(private appDataService: AppDataService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.appDataService.getCars().subscribe(allItems => {
      this.allCars = allItems;
      //console.log("this.allCars" + this.allCars);
      this.count = +this.route.snapshot.params['count'];
      this.updateList();
      this.route.params.forEach((params: Params) => {
        this.count = +params['count'];
        this.updateList();
      });
    });
  }

  updateList() {
    const AllCarsCopy = this.allCars.slice().sort(this.compareSort);
    this.cars = (this.count > 0) ? AllCarsCopy.slice(0, this.count) : this.allCars;

    if (this.count === 7) {
      const cheapCarsCopy = this.allCars.slice().sort(this.compareCheapSort);
      this.cars = (this.count > 0) ? cheapCarsCopy.slice(0, this.allCars.length) : this.allCars;
    }
  }

  compareCheapSort(carA: { price: number; }, carB: { price: number; }) {
    return carA.price - carB.price;
  }

  compareSort(carA: { price: number; }, carB: { price: number; }) {
    return carB.price - carA.price;
  }
}
