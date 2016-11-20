import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-simple-binding',
  templateUrl: './simple-binding.component.html',
  styleUrls: ['./simple-binding.component.css']
})
export class SimpleBindingComponent implements OnInit {
  counter: number = 0;
  echoText: string;

  constructor() { }

  ngOnInit() {
  }

  increment() {
    this.counter++;
  }

  get square(): number {
    return this.counter * this.counter;
  }
}