import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { user_class } from "../user_class";
import { UserService } from "../user.service";
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email_id:string;
  password:string;
  user:user_class;

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  passwordFormControl = new FormControl('', [
    Validators.required,
  ]);
  constructor(private _ser:UserService,private _router:Router) { }

  onClickLogIn(){

    this._ser.login(new user_class(this.email_id,"",this.password)).subscribe
    ((data:user_class[])=>{
      console.log(data);
      if(data.length>0){
      localStorage.setItem("email_id",data[0].email_id);
      localStorage.setItem("user_type",data[0].user_type+"");
      this._router.navigate(['/menu']);
      }
    });


  }

  onClickSignUp()
  {
    this._router.navigate(['/signup']);
  }

  ngOnInit(): void {
  }

}
