import { Injectable } from '@angular/core';
import { UserService } from './user.service';
import { Car } from './car-interface';
import { Observable, of, throwError } from 'rxjs';
import { delay, map, catchError } from 'rxjs/operators';
import { Http, Response } from '@angular/http';

import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class AppDataService {
  private CarsCollection!: Array<Car>;
  private url = 'http://localhost:3000/cars';

  constructor(private userService: UserService, private http: Http, private httpClient: HttpClient) {
    this.sendGetRequest();
  }
 
  public sendGetRequest() {
    let requestGET = this.httpClient.get(this.url);
    console.log('requestGET -> ', requestGET);

    return this.httpClient.get(this.url);
  }


  getCars(): Observable<Car[]> {
    //this.http.get(this.url, {}).subscribe(res => console.log("getCar() -> ", res));
    return this.http.get(this.url).pipe(map((response: Response) => {

      this.CarsCollection = response.json();
      //console.log("this.CarsCollection -> " , this.CarsCollection);
      return this.CarsCollection;
    }), catchError((error: Response) => throwError('Server do not response')));
  }

  getCar(id: number): Observable<Car> {
    /*this.http.get(this.url, {}).subscribe(res => console.log("getCar(id: number) -> ", res));*/
    return this.http.get(this.url).pipe(map((response: Response) => {

      console.log("response -> ", response.json().filter((itemCar: Car) => itemCar.id === id));
      console.log("id -> ", id);

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
