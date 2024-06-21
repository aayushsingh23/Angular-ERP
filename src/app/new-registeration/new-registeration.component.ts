import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms'
import { RegistrationService } from '../registration.service';
import { Observable, Subject } from 'rxjs';
import { WebcamImage, WebcamInitError, WebcamUtil } from 'ngx-webcam/public_api';
import { RegisterService } from '../register.service';
import { UrlCreationOptions } from '@angular/router';


@Component({
  selector: 'app-new-registeration',
  templateUrl: './new-registeration.component.html',
  styleUrls: ['./new-registeration.component.css']
})
export class NewRegisterationComponent implements OnInit {
  constructor(private fb: FormBuilder, private _registerationService: RegistrationService, private _register: RegisterService) { }
show=false;
  registrationForm = this.fb.group({

    userName: ['', Validators.required],
    firstName: ['', Validators.required],
    lastName: [''],
    phoneNumber: ['', Validators.required],
    email: ['', Validators.required],
    image: ['', Validators.required]
  })



  get userName() {
    return this.registrationForm.get('userName');
  }

  get firstName() {
    return this.registrationForm.get('firstName');
  }

  get phoneNumber() {
    return this.registrationForm.get('phoneNumber');
  }

  get email() {
    return this.registrationForm.get('email');
  }

  get image() {
    return this.registrationForm.get('image');
  }

  onSubmit() {
    console.log(this.registrationForm.value);

  }

  private trigger: Subject<any> = new Subject();
  public webcamImage!: WebcamImage;
  private nextWebcam: Subject<any> = new Subject();
  sysImage = '';
  ngOnInit() { }
  public getSnapshot(): void {
    this.trigger.next(void 0);
  }
  public captureImg(webcamImage: WebcamImage): void {
    this.webcamImage = webcamImage;
    this.forminfo.image = webcamImage.imageAsDataUrl;
  }
  public get invokeObservable(): Observable<any> {
    return this.trigger.asObservable();
  }
  public get nextWebcamObservable(): Observable<any> {
    return this.nextWebcam.asObservable();
  }

  forminfo: info = { userName: '', firstName: '', lastName: '', phoneNumber: '', email: '', image: "" }
  addPerson() {
    this._register.insert(this.forminfo);
    this.forminfo = { userName: '', firstName: '', lastName: '', phoneNumber: '', email: '', image: "" }
  }
}

export interface info {
  userName: string,
  firstName: string,
  lastName: string,
  phoneNumber: string,
  email: string,
  image: string | null | undefined
}
