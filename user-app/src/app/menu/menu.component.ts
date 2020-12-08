import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { Router } from '@angular/router';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {

  user_type:number;
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

    role:number=0;
    email:string="";
  constructor(private breakpointObserver: BreakpointObserver,private _router:Router) {}

  onLogOut()
  {
    localStorage.clear();
    this._router.navigate([""]);
  }


  ngOnInit(): void {
    this.user_type=Number(localStorage.getItem("user_type"));
  }

}
