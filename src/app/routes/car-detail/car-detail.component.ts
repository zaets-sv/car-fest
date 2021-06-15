import { Component, OnInit } from '@angular/core';
import { FieldInput } from '../../../spa/dynamicForms/field-interface';
import { Car } from '../../services/car-interface';
import { AppDataService } from '../../services/app-data.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.css']
})
export class CarDetailComponent implements OnInit {
  car!: Car;
  carDefinitionInput: Array<FieldInput> = [
    {
      key: 'id',
      type: 'number',
      isId: true,
      label: 'Id',
      required: true
    },
    {
      key: 'name',
      type: 'string',
      isId: false,
      label: 'Car name',
      required: true
    },
    {
      key: 'model',
      type: 'string',
      isId: false,
      label: 'Car model',
      required: true
    },
    {
      key: 'price',
      type: 'number',
      isId: false,
      label: 'Car price value',
      required: true
    }
  ];
  operation!: string; // edit/ read/ create
  errorMessage!: string;
  constructor(
    public router: Router, public route: ActivatedRoute, public appDataService: AppDataService
  ) { }

  ngOnInit() {
    this.operation = this.route.snapshot.params['operation'];
    if (this.operation === 'create') {
      this.car = { id: 0, name: '', model: '', price: 0 };
    } else {
      this.appDataService.getCar(+this.route.snapshot.params['id']).subscribe((car: Car) => this.car = car);
    }
  }
  createCar(car: Car) {
    car.id = 0;
    this.errorMessage = '';
    this.appDataService.createCar(car).subscribe(
      c => this.router.navigate(['/authenticated/car-maint']),
      error => this.errorMessage = 'Error creating car'
    );
  }
  updateCar(car: Car) {
    this.errorMessage = '';
    this.appDataService.updateCar(car).subscribe(
      c => this.router.navigate(['/authenticated/car-maint']),
      error => this.errorMessage = 'Error updating car'
    );

  }
}
