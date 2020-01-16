import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  addTwoNumbers(param1: number, param2: number): number {
    return param1 + param2;
  }

  sumOfAllNumbers(...params: number[]): number {
    let total = 0;
    params.forEach((num) => {
      total += num;
    });
    return total;
  }
}

