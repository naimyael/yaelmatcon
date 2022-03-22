import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from '../module/Recipe';


@Component({
  selector: 'app-level',
  templateUrl: './level.component.html',
  styleUrls: ['./level.component.scss']
})
export class LevelComponent implements OnInit {
@Input()
i:number;


  constructor() { } 

  ngOnInit(): void {
    
  }

}
