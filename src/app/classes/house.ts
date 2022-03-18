export class House {
 description: string;
 picture_path:string; 
 price: number;
 location:string;

 constructor(description: string, picture_path: string, price: number, location:string) {
  this.description = description;
  this.location = location;
  this.picture_path = picture_path;
  this.price = price;
 }
}
