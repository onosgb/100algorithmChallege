import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-two-digits',
  templateUrl: './add-two-digits.component.html',
  styleUrls: ['./add-two-digits.component.css']
})
export class AddTwoDigitsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  addingTwoDigits(n: number): number {
    const digits = n.toString().split('');

    return parseInt(digits[0]) + parseInt(digits[1]);
  }
}
