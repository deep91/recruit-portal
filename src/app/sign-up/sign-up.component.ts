import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, NgForm } from '@angular/forms';
import { UserService } from '../user.service';
import { User } from '../user';


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  @ViewChild('signUpForm') formValues: NgForm;
  hide = true;
  user: User = new User;
  signUpForm: FormGroup;

  // first_name: string = '';
  // last_name: string = '';

  constructor(private fb: FormBuilder, private userService: UserService) {

  }

  ngOnInit() {
    this.signUpForm = this.fb.group(
      {
        'first_name': [],
        'last_name': [],
        'email': ['', [Validators.required, Validators.email]],
        'password': ['', [Validators.required, Validators.minLength(6)]]
      }
    );
  }

  get f() { return this.signUpForm.controls; }
  onFormSubmit() {

    this.user = this.signUpForm.value;
    this.userService.createUser(this.user).subscribe((u) => {
      this.signUpForm.reset(
        {}
      );
      
    },


      (error) => console.log('Api returning error' + error));

  }

  getErrorMsgForEmail() {
    return this.f.email.hasError('required') ? 'email is must' :
      this.f.email.hasError('email') ? 'Enter Valid email' : '';
  }

  getErrorMsgForPassword() {
    return this.f.password.hasError('required') ? 'password is must' :
      this.f.password.hasError('minLength') ? 'minimum length should be 6' : '';
  }



}
