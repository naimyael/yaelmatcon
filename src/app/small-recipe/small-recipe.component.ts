import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from '../module/Recipe';
import { Category } from '../module/Category';
import { CategoriesService } from '../servise/categories.service';
import { ActivatedRoute } from '@angular/router';
import { RecipesService } from '../servise/recipes.service';
import { UsersService } from '../servise/users.service';
@Component({
  selector: 'app-small-recipe',
  templateUrl: './small-recipe.component.html',
  styleUrls: ['./small-recipe.component.scss']
})
export class SmallRecipeComponent implements OnInit {
detilesRecipe:Recipe;
allCategories:Category[];
imgUrl:string;
name:string;
code:string;
o:string;
nameU:string; 
time:number;

  constructor(public myRoute:ActivatedRoute,public d:CategoriesService,public s:RecipesService,public w:UsersService) {
  this.myRoute.params.subscribe((myParams)=>{
    console.log(myParams['t']);
    this.o = myParams['t'];
  }) 
  }

  ngOnInit(): void {
    this.allCategories = this.d.allCategories;
    this.s.arrrecip.forEach(a => {
      if(a.recipeCode == this.o){console.log(this.s.arrrecip);
        this.detilesRecipe = a;
      }
    });
    this.allCategories.forEach(a => {
      if(a.code == this.detilesRecipe.categoryCode){
          this.name = a.name;
          this.imgUrl = a.routing;
        
      }
    });
  }

}
