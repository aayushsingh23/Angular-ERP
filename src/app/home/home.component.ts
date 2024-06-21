import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor(private fb: FormBuilder){}
  feedBackForm=this.fb.group({
    feedBack:[''],
    name:['']
  })

  feedBackinfo:feedback={feedback:'',name:''}

FEEDBACK:feedback[]=[];
  submit(){
    this.FEEDBACK.push(this.feedBackinfo);
    localStorage.setItem('FeedBack',JSON.stringify(this.FEEDBACK))
    this.feedBackinfo={feedback:'',name:''}
  }
  showme=false;
}

export interface feedback{
  feedback:string;
  name:string;
}
