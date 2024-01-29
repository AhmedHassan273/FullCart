import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup = this.formBuilder.group({});
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
    this.registerForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  submitForm() {
    let formValue = this.registerForm.getRawValue();
    this.registerForm.markAllAsTouched();

    if (this.registerForm.invalid) {
      this.invalidForm = true;
      return;
    }
    this.invalidForm = false;

    formValue.role = 'admin';
    formValue.token = 'ok';

    this.authService.signUp(formValue).subscribe({
      next: (data) => {
        if (data) {
          alert('User Created Successfully!');
        }
        this.router.navigate(['login']);
      },
      error: (err) => {
        alert(err);
      },
    });
  }
}
