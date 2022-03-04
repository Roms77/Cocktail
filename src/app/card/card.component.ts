import { Component, OnInit } from '@angular/core';
import { HttpService  } from '../http.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})

export class CardComponent implements OnInit {
  
  items = "";
  // results: Array<CardComponent>;

  constructor(private http: HttpService) {}

  ngOnInit(): void {
    this.http.getApiData<Cocktail[]>(UrlManager.GET_DRINKS).subscribe(
      data => {
          this.items = JSON.stringify(data);
      }
    );
    console.log(this.items);
  }

}

enum UrlManager {
  GET_DRINKS = "https://cocktail-recipes-tully4school.herokuapp.com/drinks"
}

class Cocktail {
  private _id: string;
  private drinkName: string;

  constructor(id:string, drinkName:string) {
      this._id = id;
      this.drinkName = drinkName;
  }

  getId() { return this._id; }
  getName() { return this.drinkName; }
}