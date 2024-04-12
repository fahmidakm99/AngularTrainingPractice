import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.page.html',
  styleUrls: ['./recipes.page.scss'],
})
export class RecipesPage implements OnInit {
  recipes: Recipe[] = [
    {
      id: 'r1',
      title: 'Biriyani',
      imageUrl:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/%22Hyderabadi_Dum_Biryani%22.jpg/220px-%22Hyderabadi_Dum_Biryani%22.jpg',
      ingredients: ['Chicken', 'Biriyani rice', 'onion']
    },
    {
      id: 'r2',
      title: 'French Fries',
      imageUrl:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/French_Fries.JPG/250px-French_Fries.JPG',
      ingredients: ['Potato', 'Oil', 'Salt']
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
