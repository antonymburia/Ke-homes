export class User {
 username: string;
 role:string;
 created_at: Date;
 email: string;
 login: any;

 constructor(username: string, role: string, email:string, login: any, created_at: Date,) {
  this.username = username;
  this.role = role;
  this.created_at = created_at;
  this.email = email;
  this.login = login;
 }
}
