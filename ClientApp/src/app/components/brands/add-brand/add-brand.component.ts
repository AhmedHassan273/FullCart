import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-brand',
  templateUrl: './add-brand.component.html',
  styleUrls: ['./add-brand.component.css'],
})
export class AddBrandComponent implements OnInit {
  brandForm: FormGroup = this.formBuilder.group({});

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.brandForm = this.formBuilder.group({
      name: ['', Validators.required],
      image: ['', Validators.required],
    });
  }

  save() {
    let formValue = this.brandForm.getRawValue();

    if (this.brandForm?.invalid) {
      return;
    }

    console.log(formValue);
    
    // Save brand logic here
  }
}
