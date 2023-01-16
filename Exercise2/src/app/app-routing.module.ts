import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {


  favoriteColor ?: string;
  displayColor? = "";


  submit() {
    console.log(this.favoriteColor);
    this.displayColor = this.favoriteColor;
  }
 }
