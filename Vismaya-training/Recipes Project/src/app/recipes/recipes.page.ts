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
      title: 'Burger',
      imageUrl:
        'https://upload.wikimedia.org/wikipedia/commons/7/77/Big_burger.jpg',
      ingredients: ['Bun', 'Meat Patty', 'Mayonaise']
    },
    {
      id: 'r2',
      title: 'Pasta',
      imageUrl:
        'https://upload.wikimedia.org/wikipedia/commons/5/54/Pasta-2802156_1920.jpg',
      ingredients: ['Penne Pasta', 'Meat', 'Tomatoes']
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
