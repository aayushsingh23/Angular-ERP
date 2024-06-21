import { Component, OnInit } from '@angular/core';
import { info } from '../new-registeration/new-registeration.component';
@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent  implements OnInit{
retrieveData:info[]=[];


ngOnInit(): void {
  if(localStorage.getItem('Employees')){
    let data: any = localStorage.getItem('Employees')
    this.retrieveData=JSON.parse(data);
  }; 
}
}
