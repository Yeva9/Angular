import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {

  name: string;
  speed: number;
  model: string;

  colors: Colors;
  options: string[];
  test: any;
  isEdit:boolean;

  constructor() {
  }

  ngOnInit(): void {
    this.name = 'Audi';
    this.model = 'RS8';
    this.speed = 5000;
    this.colors = {
      car: 'White',
      salon: 'Black',
      weels: 'Silver'
    };
    this.options = [
      'ABS', 'Auto Parcing'
    ];
    this.test = 1;
    this.isEdit=false;
  }

  addOpt(value) {
    this.options.unshift(value);
    return false;
  }

  deleteOpt(opt) {
    for (let i = 0; i < this.options.length; i++) {
        if(this.options[i] == opt){
          this.options.splice(i,1);
          break;
        }
    }
  }
  showEdit(){
    this.isEdit = !this.isEdit;
  }

  carSelect(carName) {
    if (carName == 'Bmw') {
      this.name = carName;
      this.model = 'M5';
      this.speed = 500;
      this.colors = {
        car: 'White',
        salon: 'Black',
        weels: 'Silver'
      };
      this.options = [
        'ABS', 'Auto Parcing'
      ];
      this.test = 1;
    } else if (carName == 'Audi') {
      this.name = carName;
      this.model = 'A5';
      this.speed = 500;
      this.colors = {
        car: 'White',
        salon: 'Black',
        weels: 'Silver'
      };
      this.options = [
        'ABS', 'Auto Parcing'
      ];
      this.test = 1;
    } else {
      this.name = carName;
      this.model = 'C5';
      this.speed = 500;
      this.colors = {
        car: 'White',
        salon: 'Black',
        weels: 'Silver'
      };
      this.options = [
        'ABS', 'Auto Parcing'
      ];
      this.test = 1;
    }
  }

}


interface Colors {
  car: string,
  salon: string,
  weels: string
}