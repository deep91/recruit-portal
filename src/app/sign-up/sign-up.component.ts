import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../user.service';
import { User } from '../user';


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  user: User = new User;
  signUpForm: FormGroup;

  first_name: string = '';
  last_name: string = '';

  constructor(private fb: FormBuilder, private userService: UserService) {
    this.signUpForm = fb.group(
      {
        'first_name': [null],
        'last_name': [null]
      }
    );
  }


  onFormSubmit() {

    this.user = this.signUpForm.value;
    this.userService.createUser(this.user).subscribe((u) => {
    },
      (error) => console.log('Api returning error' + error));

  }
  ngOnInit() {
  }




}
