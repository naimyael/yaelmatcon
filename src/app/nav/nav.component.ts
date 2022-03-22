import { Component, Input, OnInit, Output } from '@angular/core';
import { Category } from '../module/Category';
import { CategoriesService } from '../servise/categories.service';
import { RecipesService } from '../servise/recipes.service';
import { Recipe } from '../module/Recipe';
import { UsersService } from '../servise/users.service';
import { User } from '../module/User';
import swal from 'sweetalert';
import { MatDialog } from '@angular/material/dialog';
import { LoginComponent } from '../login/login.component';
@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit { 
user:User;
ca:Category;
allRecipes:Recipe[];
constructor(public dialog:MatDialog,public sc:CategoriesService, public r:RecipesService, public userS:UsersService) { }


  ngOnInit(): void {
    this.user = this.userS.oneUser;
  }
delete1(){
  this.r.de();
}
async deleteU(){
  await swal({
    title: "שים ♥️",
    text: "אתה בטוח שברצונך לעזוב?",
    icon: "../../assets/piccher/images.jpg",
     closeOnEsc:true,
   
    dangerMode: true,  
  })
  localStorage.removeItem('user');
  this.userS.oneUser = new User(null,null,null,null,null);
}
ifU(){
  return localStorage.getItem('user');
}
  
  

public openDialog(): void {
  const dialogRef = this.dialog.open(LoginComponent, {
    width: '250px',

  });}
  
  }
