import { Component, OnInit } from '@angular/core';
import { UsersService } from '../servise/users.service';
import { Router } from '@angular/router';
import swal from 'sweetalert';
import { User } from '../module/User';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  id: number;
  iid=4;
  name: string = "";
  address: string = "";
  mail: string = "";
  password1: string = "";
  password2: string = "";
  flag: boolean = false;
  flag1: boolean = false;
  path:string;
  us: User = new User(null, null, null, null, null);
  constructor(public u: UsersService,public myRout:Router) { 
  }
  user: User;
  flag10: boolean = false;

  ngOnInit(): void {
  }
  

  
async addUser(){

   if (this.password1 == this.password2) {
      this.flag = false;
    }
    else {
      this.flag = true;
    }
    if (this.mail.indexOf('@') == -1) {  
      this.flag1 = true;
    }  else {
      this.flag1 = false;
    }
    if(this.flag==false&&this.flag1==false){
  this.u.addUser(new User(this.iid++,this.name,this.address,this.mail,this.password1) );

  this.u.oneUser=new User(this.iid,this.name,this.address,this.mail,this.password1);
          swal({
            title:this.u.oneUser.name,
            text: "נרשמת בהצלחה",
            icon: "../../assets/piccher/םגם.png",
           
          })
          this.myRout.navigate(['/allRecipe']);
          localStorage.setItem('user',JSON.stringify(this.u.oneUser));
          console.log(this.u.oneUser);
          
}
}





 
}
