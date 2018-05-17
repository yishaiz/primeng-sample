import { Component, OnInit } from '@angular/core';
import { CarService }        from "../car.service";
import { Car }               from "../car";

@Component({
  selector : 'app-table',
  templateUrl : './table.component.html',
  styleUrls : [ './table.component.scss' ]
})
export class TableComponent implements OnInit {


  cars : Car[];

  cols : any[];

  constructor (private carService : CarService) {
  }

  ngOnInit () {
    this.carService.getCars().then(cars => this.cars = cars());

    /*
    this.carService.getCars().then(cars => {
console.log(cars);
// debugger
      this.cars = cars()
    });
*/

    this.cols = [
      { field : 'vin', header : 'Vin' },
      { field : 'year', header : 'Year' },
      { field : 'brand', header : 'Brand' },
      { field : 'color', header : 'Color' }
    ];
  }
}
