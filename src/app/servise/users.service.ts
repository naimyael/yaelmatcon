import { getMultipleValuesInSingleSelectionError } from '@angular/cdk/collections';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../module/User';
@Injectable({
  providedIn: 'root'
})
export class UsersService {
checkU:User = new User(null,null,null,null,null);
oneUser:User=new User(null,null,null,null,null);
alluser:User[];
users:User[];
 getUserByNameAndPassword(name:string,password:string){
  return this.myHttp.get<User>(`https://localhost:44376/api/user?name=${name}&password=${password}`);
}
  constructor(public myHttp: HttpClient) { 
 this.getalluser().subscribe((s)=>{
   this.alluser=s;
   this.users=[...this.alluser]
 })
  }
 
  addUser(one:User){
    this.oneUser = one;
    return this.myHttp.post<User[]>("https://localhost:44376/api/user",one);
  }
  getalluser(){
    return this.myHttp.get<User[]>("https://localhost:44376/api/User")
  }
}

 


