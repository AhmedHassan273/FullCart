import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { ItemService } from 'src/app/services/item.service';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css'],
})
export class AddItemComponent implements OnInit {
  itemForm: FormGroup = this.fb.group({});

  constructor(
    private itemService: ItemService,
    private fb: FormBuilder,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.initForm();
  }

  initForm(): void {
    this.itemForm = this.itemForm = this.fb.group({
      name: ['', Validators.required],
      description: [''],
      price: [null, Validators.required],
      quantity: [null],
      image: [''],
    });
  }

  submitForm(): void {
    let formValue = this.itemForm.getRawValue();

    if(this.itemForm.invalid) {
      alert('Invalid Form Submission');
      return;
    }

    this.itemService.addNewItem(formValue).subscribe(_ => {
      alert('success')
      this.router.navigate(['items']);
    });
  }
}
