import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-absolute-value-sum-minimization',
  templateUrl: './absolute-value-sum-minimization.component.html',
  styleUrls: ['./absolute-value-sum-minimization.component.css']
})
export class AbsoluteValueSumMinimizationComponent implements OnInit {

  constructor() { }

  ngOnInit() {

  }

  // Given a sorted array of interger x from a such that the volume of
// abs(a[0] - x) + ... + abs(a[a.length - 1] - x);
// is the smallest possible (here abs denotes the absolute value)
// if there are several possible answers. output the smallest one.

// Example
// For a = [2,4,7] the output sum minimization is = 4
// for a = [2,4,7,6] output is = 4;
// for a = [2,4,7,6,6] output is = 7
// for a = [2,4,7,6,6,8] output is = 7

// Hints.
// Math.floor();

absoluteSumMinimization(a: number[]): number {
  const isEven = a[a.length] % 2 === 0;
  return isEven ? a[a.length / 2 - 1] : a[Math.floor(a.length / 2)];
  }
}
