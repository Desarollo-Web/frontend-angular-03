import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms'
import { Router } from '@angular/router';
import { BaseFormService } from 'src/app/shared/utils/base-form.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public loginForm: FormGroup;

  constructor(private fb:FormBuilder, public baseForm:BaseFormService, public router:Router) {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required, Validators.minLength(3)]
    });
  }

  public onLogin() {
    this.router.navigate(["home"]);
  }

  ngOnInit(): void {
    
  }

}
