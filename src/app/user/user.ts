export class User{
  id: number;
  username: string;
  password: string;
  email: string;
  roles: string[];


  constructor(id: number, username: string, password: string, email: string, roles: string[]){

    this.id = id;
    this.username = username;
    this.password = password;
    this.email = email;
    this.roles = roles;


  }






  // get id(){
  //   return this.id;
  // }
  // get username(){

  //   return this.username;
  // }
  // get password(){

  //     return this.password;
  //   }
  // get name(){
  //   return this.name;
  // }
  // get surname(){
  //   return this.surname;
  // }
  // get email(){
  //   return this.email;
  // }
  // get roles(){
  //   return this.roles;
  // }
  // set id(id : number){
  //   this.id = id;
  // }
  // set username(username : string){
  //   this.username = username;
  // }
  // set password(password : string){
  //   this.password = password;
  // }
  // set name(name : string){
  //   this.name = name;
  // }
  // set surname(surname : string){
  //   this.surname = surname;
  // }
  // set email(email : string){
  //   this.email = email;
  // }
  // set roles(roles : string[]){
  //   this.roles = roles;
  // }

}
