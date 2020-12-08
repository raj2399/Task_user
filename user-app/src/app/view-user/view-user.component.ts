import { AfterViewInit,Component, OnInit, ViewChild } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';


import { UserService } from '../user.service';
import { user_class } from '../user_class';

@Component({
  selector: 'app-view-user',
  templateUrl: './view-user.component.html',
  styleUrls: ['./view-user.component.css']
})
export class ViewUserComponent implements OnInit {
  flag:boolean;
  user_arr:user_class[]=[];
  displayedColumns: string[] = ['Email id', 'User name', 'Age', 'Children Name'];
  dataSource: MatTableDataSource<user_class>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;


  constructor(private _ser:UserService) { }


  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if(this.dataSource.filteredData.length==0)
    {
      this.flag=false;
    }
    else
    {
      this.flag=true;
    }
  }


  ngOnInit(): void {
    this.flag=true;
    this._ser.getAllUser().subscribe(
      (data:user_class[])=>{
        this.user_arr=data;
        this.dataSource = new MatTableDataSource(this.user_arr);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;


      }
    );
  }

}
