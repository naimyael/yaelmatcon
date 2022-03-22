import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Category } from '../module/Category';
import { Recipe } from '../module/Recipe';
import { CategoriesService } from '../servise/categories.service';
import { RecipesService } from '../servise/recipes.service';
import { UsersService } from '../servise/users.service';
import swal from 'sweetalert';
import { FormControl } from '@angular/forms';
import { map, Observable, startWith } from 'rxjs';

@Component({
  selector: 'app-add-recipe',
  templateUrl: './add-recipe.component.html',
  styleUrls: ['./add-recipe.component.scss']
})
export class AddRecipeComponent implements OnInit {

  constructor(public activeraut: ActivatedRoute, public categoryservis: CategoriesService, public recipeser: RecipesService, public user: UsersService,public ro:Router) { }
    myControl = new FormControl();
  level: number;  time: number;  category: string = "";Categories: Category[];
  code: string = "";  generics: string[] = [];  material: string = null;  Instructions: string[] = [];instruction: string = null;
  codeadd: number = 16;  name: string = "";  imgUrl:string="";
  mosif1:boolean=false;  mosif2:boolean=false;

ngOnInit(): void {
  this.Categories = this.categoryservis.allCategories;
  this.filteredOptions = this.myControl.valueChanges.pipe(
    startWith(''),
    map(value => this._filter(value)),
  );

}
async add_recip(){
  this.codeadd++;
  this.categoryservis.allCategories.forEach(i => {
    if (i.name === this.category) {
      this.code = i.code;
    }
  });
  this.recipeser.addRecipe(new Recipe(this.codeadd.toString(), this.name, this.code, this.time, this.level, new Date(), 
  this.generics, this.Instructions, this.user.oneUser.ID, this.imgUrl));
  await swal({
    title: "תודה "+this.user.oneUser.name,
    text: "המתכון נוסף בהצלחה", 
    icon: "../../assets/piccher/מצויין.png"
   
  })
  this.ro.navigate(['/allRecipe']);

}

plusrecivim(event){
if(event.target.value!=null)
  this.mosif1=true;
else{
  this.mosif1=false;
}
}
cplusahana(event){
  if(event.target.value!=null)
    this.mosif2 =true;
  else{
    this.mosif2=false;
  }
}
aMat(event){
  this.material = event[1].value;
  this.generics.push(this.material);
  this.material = null;
  event[1].value = null;
  this.mosif1=false;
}
deMat(name){
  this.generics.indexOf(name);
  this.generics.splice(this.generics.indexOf(name), 1)
}
aIns(event){
  this.instruction = event[1].value;
  this.Instructions.push(this.instruction);
  this.instruction = null; 
  event[1].value = null;
  this.mosif2=false;
}
deIns(name){
  this.Instructions.indexOf(name);
  this.Instructions.splice(this.Instructions.indexOf(name), 1)
}
value = ' ';
options: Category[] =this.categoryservis.allCategories;
filteredOptions: Observable<Category[]>;
private _filter(value: Category): Category[] {
  const filterValue = value;

  return this.options.filter(option => option['toLowerCase']().includes(filterValue));
}





}








