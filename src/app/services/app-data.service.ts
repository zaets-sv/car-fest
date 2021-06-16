import { Injectable } from '@angular/core';
import { UserService } from './user.service';
import { Car } from './car-interface';
import { Observable, of, throwError } from 'rxjs';
import { delay, map, catchError } from 'rxjs/operators';
import { Http, Response } from '@angular/http';
@Injectable()
export class AppDataService {
  private CarsCollection!: Array<Car>;
  private url = 'http://localhost:3000/cars';

  constructor(private userService: UserService, private http: Http) {

  }
  getCars(): Observable<Car[]> {
    return this.http.get(this.url).pipe(map((response: Response) => {
      this.CarsCollection = response.json();
      return this.CarsCollection;
    }), catchError((error: Response) => throwError('Server do not response')));
  }

  getCar(id: number): Observable<Car> {
    return this.http.get(this.url).pipe(map((response: Response) => {
      return response.json().filter((itemCar: Car) => itemCar.id === id);
    }), catchError((error: Response) => throwError('Server do not response')));
  }

  deleteCar(id: number): Observable<any> {
    return this.http.delete(this.url + '/' + id).pipe(map((response: Response) => {
      response.json();
    }), delay(1200));
  }


  createCar(newCar: Car): Observable<any> {
    return this.http.post(this.url, newCar).pipe(map((response: Response) => {
      response.json();
    }), delay(1000));
  }


  updateCar(CarForUpdating: Car): Observable<any> {
    return this.http.put(this.url + '/' + CarForUpdating.id, CarForUpdating).pipe(map((response: Response) => {
      response.json();
    }), delay(1000));
  }
}
