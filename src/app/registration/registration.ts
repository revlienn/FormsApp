import { Component, inject, KeyValueDiffers, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { passwordStrengthValidator } from '../../validators/password-strength.validator';
import { usernameCheck } from '../../validators/username-check.validator';
import { UserService } from '../services/user-service';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import { JsonPipe } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatCheckboxChange, MatCheckboxModule } from '@angular/material/checkbox'
import {MatSelectChange, MatSelectModule} from '@angular/material/select';
import { MemberService } from '../services/member-service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-registration',
  imports: [JsonPipe, ReactiveFormsModule, FontAwesomeModule
    , MatFormFieldModule, MatInputModule, MatDatepickerModule, MatNativeDateModule, MatCheckboxModule,MatSelectModule],
  templateUrl: './registration.html',
  styleUrl: './registration.css'
})
export class Registration implements OnInit {

  stepTwo: boolean = false;
  faCheck = faCheck;
  membershipTypes: string[] = [];

  userService = inject(UserService);
  memberService = inject(MemberService);
  router=inject(Router);

  email = new FormControl('Email', {
    validators: [Validators.email, Validators.required]
  });
  password = new FormControl('', {
    validators: [Validators.required, Validators.minLength(8), passwordStrengthValidator]
  })
  username = new FormControl('', {
    validators: [Validators.required, Validators.minLength(6)],
    asyncValidators: [usernameCheck(this.userService)],
    updateOn: 'blur'
  })
  startDate = new FormControl('', {
    validators: [Validators.required]
  })
  comment = new FormControl('', {
    validators: [Validators.minLength(8)]
  })
  annualCheck = new FormControl(false, { updateOn: 'change' })
  membershipType = new FormControl('', { validators: [Validators.required],updateOn:'change' })

  reactiveRegisterForm = new FormGroup({
    email: this.email,
    password: this.password,
    username: this.username,
    startDate: this.startDate,
    annualCheck: this.annualCheck,
    comment: this.comment,
    membershipType: this.membershipType
  })

  ngOnInit() {
    this.memberService.getMemberships().subscribe({
      next: (types) => this.membershipTypes=types
    }
    )
  }

  toggleStep() {
    this.stepTwo = !this.stepTwo;
  }

  reset() {
    this.reactiveRegisterForm.reset({
      email: 'Email',
      password: '',
      username: '',
    });
    console.log(this.reactiveRegisterForm.value);
  }

  register() {
    console.log(this.reactiveRegisterForm.value);
    this.reactiveRegisterForm.reset({
      email: '',
      password: '',
      username: '',
    });
  }

  annualToggle(event: MatCheckboxChange) {
    this.annualCheck.setValue(event.checked);
  }

  // confirmExit(nextUrl:string):boolean{
  //   const confirmLeave=confirm('Are you sure?');
  //   if(confirmLeave){
  //     this.router.navigateByUrl(nextUrl);
  //     return true;
  //   }
  //     return false
  // }

  confirmExit(): boolean {
  return confirm('You have unsaved changes. Leave this page?');
}
}
