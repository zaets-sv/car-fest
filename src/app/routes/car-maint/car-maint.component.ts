import { Component, OnInit } from '@angular/core';
import { Car } from '../../services/car-interface';
import { Router } from '@angular/router';
import { AppDataService } from '../../services/app-data.service';
@Component({
  selector: 'app-car-maint',
  templateUrl: './car-maint.component.html',
  styleUrls: ['./car-maint.component.css']
})
export class CarMaintComponent implements OnInit {
  CarList!: Array<Car>;
  deleteError!: string;
  deleteId!: number;
  isDeleting = false;
  constructor(private router: Router, private appDataService: AppDataService) {
    appDataService.getCars().subscribe((data) => { this.CarList = data; });
  }

  ngOnInit() {
  }
  createCar() {
    this.router.navigate(['/authenticated/car-detail', 0, 'create']);
  }
  showCarDetail(id: number) {
    this.router.navigate(['/authenticated/car-detail', id, 'details']);
  }
  editCar(id: number) {
    this.router.navigate(['/authenticated/car-detail', id, 'edit']);
  }
  deleteCarQuestion(id: number) {
    this.deleteError = '';
    this.deleteId = id;
  }
  deleteCar(id: number) {
    this.isDeleting = true;
    this.appDataService.deleteCar(id).subscribe(c => {
      this.cancelDelete();
      this.CarList = this.CarList.filter(carItem => carItem.id !== id);
    },
      error => {
        this.deleteError = error;
        this.isDeleting = false;
      });
  }
  cancelDelete() {
    this.isDeleting = false;
    this.deleteId = 0;
  }
}
