export class House {
 description: string;
 picture_path:string; 
 price: number;

 constructor(description: string, picture_path: string, price: number) {
  this.description = description;
  this.picture_path = picture_path;
  this.price = price;
 }
}
