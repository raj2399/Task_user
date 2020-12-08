import { trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { UserService } from '../user.service';
import { user_class } from '../user_class';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  age:number=0;
  gender:number=1;
  c_name:string="";
  flag:boolean=false;
  constructor(private _ser:UserService) { }


  cnameFormControl = new FormControl('', [
    Validators.required,
  ]);
  onClickAdd()
  {
    this._ser.addDetails(new user_class(localStorage.getItem("email_id"),"","",0,this.age,this.gender,this.c_name)).subscribe(
      (data:any)=>{
        console.log(data);
        this.flag=true;
      }
    );
  }

  plus_one()
  {
    this.age++;
    if(this.age>100)
    {
      this.age=100;
    }
  }
  minus_one()
  {
    this.age--;
    if(this.age<0)
    {
      this.age=0;
    }
  }
    ngOnInit(): void {
      this._ser.getUserById().subscribe(
        (data:user_class[])=>{
          console.log(data);

          if(data[0].age>0 && data[0].gender && data[0].children_name)
          {
            this.age=data[0].age;

            this.gender=data[0].gender;
            this.c_name=data[0].children_name;

              this.flag=true;
            }



        }
      );
  }

}
