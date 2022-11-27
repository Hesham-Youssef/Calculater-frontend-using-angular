import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-upper-screen',
  templateUrl: './upper-screen.component.html',
  styleUrls: ['./upper-screen.component.css']
})
export class UpperScreenComponent implements OnInit {
  @Input() expression: string  = '';

  constructor() { }

  ngOnInit(): void {
  }

}
