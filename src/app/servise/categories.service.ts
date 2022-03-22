import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Category } from '../module/Category';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {
  allCategories:Category[];
  one:Category;
  getAllCategory() {
    //https://localhost:44378/api/recipe
    return this.MyHttp1.get<Category[]>("https://localhost:44376/api/category");

  }
  getCategoryById(id: string) {
    //https://localhost:44378/api/recipe?recipeCode=1
    return this.MyHttp1.get<Category>("https://localhost:44376/api/category?name=" + id);
  }
  constructor(public MyHttp1: HttpClient) {
    this.getAllCategory().subscribe((s)=>{
      this.allCategories=s;
      console.log(this.allCategories);

    },(e)=>{
      console.log(e);
    })
    
   }
   getOne(id:string){
      this.getCategoryById(id).subscribe((s)=>{this.one = s; console.log(s);},(e)=>{console.log(e);})
   }
}
