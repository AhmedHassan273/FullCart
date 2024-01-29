import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css'],
})
export class LoginPageComponent implements OnInit {
  loginForm: FormGroup = this.formBuilder.group({});
  invalidForm: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  submitCredentials() {
    let formValue = this.loginForm.getRawValue();
    this.loginForm.markAllAsTouched();

    if (this.loginForm.invalid) {
      this.invalidForm = true;
      return;
    }
    this.invalidForm = false;
    
    this.authService.signIn(formValue).subscribe({
      next: (data) => {
        console.log(data);
        
      },
      error: (err) => {
        alert(err?.message);
      },
    })
  }
}
