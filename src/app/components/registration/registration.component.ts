import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { User } from 'src/app/model/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  user:User|any;

  registrationForm=new FormGroup({
    loginId:new FormControl(''),
    firstName:new FormControl(''),
    lastName:new FormControl(''),
    email:new FormControl(''),
    password:new FormControl(''),
    confirmPassword:new FormControl(''),
    contactNumber:new FormControl(''),
    roles:new FormControl({value:"Customer",disabled:true}),
    secretQuestion:new FormControl(''),
    answer:new FormControl('')
  });

  getRegistrationFormData(){
    console.log(this.registrationForm.value)
  }

  constructor(private userService:UserService) { }

  ngOnInit(): void {
  }
  registerUser(){
    this.userService.registerUser(this.registrationForm.value).subscribe(data=>{
      console.log(data)
    })
  }
Customer=true
  

}
