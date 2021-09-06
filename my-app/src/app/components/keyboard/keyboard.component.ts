import { Component, OnInit } from '@angular/core';
import {keys} from './keys';

@Component({
  selector: 'app-keyboard',
  templateUrl: './keyboard.component.html',
  styleUrls: ['./keyboard.component.css']
})
export class KeyboardComponent implements OnInit {
  pressed_key: string;
  array_of_keys: string[];
  sytle_of_key:any;
  toggle:boolean;

  constructor() { }

  ngOnInit(): void {
    this.pressed_key = '';
    this.array_of_keys = keys;
    this.sytle_of_key = '';
    this.toggle = true;
  }

  onKeypress(event: KeyboardEvent) {
    this.pressed_key += event.key;
    this.sytle_of_key = event.key;
        // console.log(event.key);
  }

  onButtonPress(key){
    this.pressed_key += key;   
  }
}
