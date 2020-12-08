import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import { user_class } from '../user_class';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  email_id:string;
  password:string;
  user_type:number=3;
  user_name:string;
  user:user_class;

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  passwordFormControl = new FormControl('', [
    Validators.required,
  ]);


  userFormControl = new FormControl('', [
    Validators.required,
  ]);
  constructor(private _ser:UserService,private _router:Router) { }

  onClickSignup()
  {
    this._ser.signup(new user_class(this.email_id,this.user_name,this.password,this.user_type)).subscribe(
      (data:any)=>{
        console.log(data);
        this._router.navigate(['']);
      }
    );
  }

  onClickCancel()
  {
    this._router.navigate(['']);
  }

  ngOnInit(): void {
  }

}
