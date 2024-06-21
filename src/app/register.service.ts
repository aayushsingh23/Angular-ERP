import { Injectable } from '@angular/core';
import { info } from './new-registeration/new-registeration.component';
import { phone } from './existing-user/existing-user.component';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  dummy: info[] = [
    { userName: "AS25", firstName: "Aayush", lastName: "Singh", phoneNumber: "9958467077", email: "aayush.singh@gmail.com", image: '' },
    { userName: "YS23", firstName: "Yuvika", lastName: "Sardana", phoneNumber: "8810752013", email: "yuvikasardana@gmail.com", image: '' },
    { userName: "PN16", firstName: "Parv", lastName: "Narula", phoneNumber: "8383054575", email: "parvnarula@gmail.com", image: '' },
    { userName: "PA18", firstName: "Pancham", lastName: "Agarwal", phoneNumber: "9810754457", email: "panchamagarwal@gmail.com", image: '' }
  ];

  fetchData(myphone: phone) {
    var i:number;
    for (i = 0; i < this.dummy.length; i++) {
      if (this.dummy[i].phoneNumber === myphone.phone) {
        console.log(this.dummy[i]);
       
        break;
      }
    }
    console.log(i);
    const displayData:info=this.dummy[i];

 return i;
  }
 

  insert(person:info) {
    this.dummy.push(person);
    console.log(this.dummy);

    localStorage.setItem('Employees',JSON.stringify(this.dummy))
  }

  constructor() { }


}
