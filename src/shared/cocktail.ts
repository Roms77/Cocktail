export class Cocktail{
    id:	string;
    drinkNumber: number;
    drinkName: string;
    alcohol: boolean;
    drinkCategory: string;
    /*Enum: Beer, Cocktail, Cocoa, Homemade Liqueur, Milk / Float / Shake, Ordinary Drink, Other/Unknown, Punch / Party Drink, Shot, Soft Drink / Soda, Coffee / Tea*/
    drinkThumb:	string;
/*example: http://www.thecocktaildb.com/images/media/drink/bje5401485619578.jpg*/
    drinkGlass: string;
/*Enum: Beer, Cocktail, Cocoa, Homemade Liqueur, Milk / Float / Shake, Ordinary Drink, Other/Unknown, Punch / Party Drink, Shot, Soft Drink / Soda, Coffee / Tea*/
    drinkIngredients: string[];	
    drinkMeasures: string[];
    drinkInstructions: string;
}