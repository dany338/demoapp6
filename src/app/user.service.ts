import { Injectable } from '@angular/core';

@Injectable()
export class UserService {

  userName: string;
  userAge: number;
  userEmail: string;
  userFeeling: any;

  constructor() { }

  // setters

  setUserName(name: string): void{
    this.userName = name; // asignamos nombre al atributo.
  }

  setUserAge(age:number): void{
    this.userAge = age; // asignamos edad al atributo.
  }

  // getters

  getUserName(): string{
    return this.userName;
  }

  getUserNumber(): number{
    return this.userAge;
  }

}
