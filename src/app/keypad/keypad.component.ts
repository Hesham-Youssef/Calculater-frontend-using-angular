import { Key } from './../../models/Key';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-keypad',
  templateUrl: './keypad.component.html',
  styleUrls: ['./keypad.component.css']
})
export class KeypadComponent implements OnInit {
  keys: Key[];
  @Output() pressed: EventEmitter<Key> = new EventEmitter();

  constructor() {
    this.keys = [
      {value: '%', type: 'o'}, {value: 'CE', type: 'o'}, {value: 'C', type: 'o'},{value: 'BACK', type: 'o'},
      {value: '1/x', type: 'o'}, {value: 'x^2', type: 'o'}, {value: 'sqrt(x)', type: 'o'}, {value: '÷', type: 'o'},
      {value: '7', type: 'n'}, {value: '8', type: 'n'}, {value: '9', type: 'n'}, {value: 'x', type: 'o'},
      {value: '4', type: 'n'}, {value: '5', type: 'n'}, {value: '6', type: 'n'}, {value: '-', type: 'o'},
      {value: '1', type: 'n'}, {value: '2', type: 'n'}, {value: '3', type: 'n'}, {value: '+', type: 'o'},
      {value: 'neg', type: 'o'}, {value: '0', type: 'n'}, {value: '.', type: 'o'}, {value: '=', type: 'e'}
    ];
  }

  ngOnInit(): void {
  }

    
}
