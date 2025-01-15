import { Routes } from '@angular/router';
import { ItemsComponent } from './pages/items/items.component';
import { RecipesComponent } from './pages/recipes/recipes.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'ingredients', component: ItemsComponent},
  {path: 'recipes', component: RecipesComponent}
];
