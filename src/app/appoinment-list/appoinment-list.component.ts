import { Appoinment } from './../modules/appointInterface';
import { Component } from '@angular/core';

@Component({
  selector: 'app-appoinment-list',
  templateUrl: './appoinment-list.component.html',
  styleUrls: ['./appoinment-list.component.css'],
})
export class AppoinmentListComponent {
  name: String = '';
  date: Date = new Date();
  appoinment: Appoinment[] = [];
  addFunction() {
    if (this.name.trim().length > 0 || this.date) {
      let res: Appoinment = {
        id: Number(Math.floor(Math.random() * 9999)),
        name: this.name,
        date: this.date,
      };
      console.log(res);
      this.appoinment.push(res);
      this.name = '';
      this.date = new Date();
    }
  }
  deleteFunction(i: number) {
    this.appoinment.splice(i, 1);
  }
}
