import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,FormBuilder, Validators} from '@angular/forms';
import { UserService } from '../user.service';
import { User } from '../user';
 

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  user :User = new User;
  signUpForm:FormGroup;

  firstName:string='';
  lastName:string='';
  email:string='';

  constructor(private fb :FormBuilder,private userService:UserService) { 
    this.signUpForm= fb.group(
      {
      'firstName':[null],
      'lastName':[null],
      'email':[null,Validators.email]
      }
    );
  }


  onFormSubmit()
  {
       
    this.user =this.signUpForm.value;
    console.log(this.user);
    this.userService.createUser(this.user)
    
  }
  ngOnInit() {
  }




}
