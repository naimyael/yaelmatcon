import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Recipe } from '../module/Recipe';
@Injectable({
  providedIn: 'root'
})
export class RecipesService {
  arrrecip: Recipe[];

  re: Recipe[];

  getAllRecipes() {
    //https://localhost:44378/api/recipe
    return this.MyHttp.get<Recipe[]>("https://localhost:44376/api/recipes");

  }
  getRecipeById(id: string) {
    //https://localhost:44378/api/recipe?recipeCode=1
    return this.MyHttp.get<Recipe>("https://localhost:44376/api/recipes?recipeCode=" + id);
  }
  constructor(public MyHttp: HttpClient) {
    this.getAllRecipes().subscribe((s) => {
      this.arrrecip = s;
      console.log(this.arrrecip);
      this.re = [...this.arrrecip];
      console.log(this.re);
      (err:any)=>{console.log(err);}
    })

  }
  de() {
    this.re = this.arrrecip;
  }
  addRecipe(s: Recipe) {
    return this.MyHttp.post<Recipe[]>("https://localhost:44376/api/recipes", s).subscribe((sa) => {
      this.arrrecip = sa;
      this.re = [...this.arrrecip];
    }, (e) => { console.log(e); });
  }
  deleteRecipe(id: string) {
    return this.MyHttp.delete<Recipe[]>("https://localhost:44376/api/recipes/"+id).subscribe((s)=>{
      this.arrrecip=s;
      this.re = [...this.arrrecip];
      console.log(this.arrrecip);
    },(e)=>{console.log(e)})
  }

}
