import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-wall-border',
  templateUrl: './add-wall-border.component.html',
  styleUrls: ['./add-wall-border.component.css']
})
export class AddWallBorderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  addWallBorder(picture: string[]) {
  const wall = '*'.repeat(picture[0].length + 2);
  picture.unshift(wall);
  picture.push(wall);

  for (let i = 1; i < picture.length - 1; i++) {
    picture[i] = '*'.concat(picture[i], '*');
  }
  return picture;
  }

}
