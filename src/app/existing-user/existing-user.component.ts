import { Component } from '@angular/core';
import { RegisterService } from '../register.service';
import { info } from '../new-registeration/new-registeration.component';

@Component({
  selector: 'app-existing-user',
  templateUrl: './existing-user.component.html',
  styleUrls: ['./existing-user.component.css']
})
export class ExistingUserComponent {

  personPhone:phone={phone:''}

constructor(public _register:RegisterService){}

compare(){
this._register.fetchData(this.personPhone)
}


}



export interface phone{
  phone:string;
}
