import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AllCategoryComponent } from './all-category/all-category.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AddRecipeComponent } from './add-recipe/add-recipe.component';
import { LoginComponent } from './login/login.component';
import { MaterielModule}from'./matirial/materiel.module';
import { AllRecipesComponent } from './all-recipes/all-recipes.component';
import { LevelComponent } from './level/level.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SmallRecipeComponent } from './small-recipe/small-recipe.component';
import { RegisterComponent } from './register/register.component';
import { NavComponent } from './nav/nav.component';

@NgModule({
  declarations: [
    AppComponent,
    SmallRecipeComponent,
    RegisterComponent,
    NavComponent,
    LevelComponent,
    AllCategoryComponent,
    AddRecipeComponent,
    LoginComponent,
    AllRecipesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    MaterielModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
