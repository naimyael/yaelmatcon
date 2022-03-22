import { Component, Input, OnInit, Output } from '@angular/core';
import { Category } from '../module/Category';
import { CategoriesService } from '../servise/categories.service';
import { RecipesService } from '../servise/recipes.service';
import { EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from '../servise/users.service';
import swal from 'sweetalert';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-all-recipes',
  templateUrl: './all-recipes.component.html',
  styleUrls: ['./all-recipes.component.scss']
}) 
export class AllRecipesComponent implements OnInit {
  showFiller = false; allCategories: Category[];  names: string = "";
   time: number = null;  category: string = ""; level: number = null;
  size:number;  code: string = "";

 




  userName:string;
  @Output()
  mysearch: EventEmitter<string> = new EventEmitter<string>();
  constructor(public RecipeSer: RecipesService, public sc: CategoriesService, public myR:Router,public u:UsersService) {

  }

  ngOnInit(): void {
    this.allCategories = this.sc.allCategories;
  }
  cool() {
    this.sc.allCategories.forEach(i => {
      if (i.name === this.category) {
        this.code = i.code;
      }


    });
  
    this.RecipeSer.re = this.RecipeSer.arrrecip.filter((y) => { return ((this.names == "" || y.recipeName.includes(this.names)) && (this.level == null || y.level <= this.level) && (this.code == "" || this.category == "" || y.categoryCode == this.code) && (!this.time || this.time == null || y.preparationTime <= this.time)) });
 
    this.size = this.RecipeSer.re.length;
  }
  ifUU(x){
    
        this.myR.navigate(['detiles/'+x.recipeCode])
  
  }
  deleteR(recipeCode:string){
    this.RecipeSer.deleteRecipe(recipeCode); 
    swal({
      title:'אולי רצית לשפר?',
      text:'כנס להוספת מתכון',
      icon: "../../assets/piccher/םגם.png",
    })
  }
  public delete() {
    this.RecipeSer.re = this.RecipeSer.arrrecip;
    this.names = "";this.category = ""; this.code = "";
    this.level = null;    this.time = null; this.size=null;
  }

myControl = new FormControl();
options: Category[] =this.sc.allCategories;
filteredOptions: Observable<string[]>;



private _filter(value: Category): Category[] {
  const filterValue = value;

  return this.options.filter(option => option['toLowerCase']().includes(filterValue));
}




}

