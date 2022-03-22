import { Component, OnInit } from '@angular/core';
import { UsersService } from '../servise/users.service';
import { User } from '../module/User';
import { Router } from '@angular/router';
import swal from 'sweetalert';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  user: User = new User(null, null, null, null, null);
  name: string = "";
  password: string = "";
  path: string;
  constructor(public d: UsersService, public myrout: Router) { }

  ngOnInit(): void {

  }
  async function() {
    if (this.name != "" && this.password != "") {
     await this.d.getUserByNameAndPassword(this.name, this.password).subscribe((s) => {
        this.user = s;
        if (this.user == null) {
          swal({
               title: "שגיעה",
               text: "אינך רשום במערכת אנא הירשם",
               icon: "error",
             })
             this.myrout.navigate(['/register']);
           }
           else if(this.user.ID==-1){
            swal({
               title: "error",
               text: "הסיסמה שגויה",
               icon: "error",
             })
           }
           else {
             this.d.oneUser = this.user;
             localStorage.setItem("user", JSON.stringify(this.user))
             this.myrout.navigate(['/allRecipe']);
     
           }
      
      });
      
    }
  }

}
