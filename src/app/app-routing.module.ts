import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddRecipeComponent } from './add-recipe/add-recipe.component';
import { AllRecipesComponent } from './all-recipes/all-recipes.component';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { SmallRecipeComponent } from './small-recipe/small-recipe.component';

const routes: Routes = [
  {path:"allRecipe",component:AllRecipesComponent,children:[{path:"allRecipe/:addRecipe",component:AddRecipeComponent}]},
  {path:"addRecipe",component:AddRecipeComponent},
  {path:"login",component:LoginComponent},
  {path:"register",component:RegisterComponent},
  {path:"detiles/:t",component:SmallRecipeComponent},
  {path:"**",component:AllRecipesComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
