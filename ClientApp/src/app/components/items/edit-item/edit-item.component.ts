import { Component } from '@angular/core';
import {
  UntypedFormBuilder,
  UntypedFormGroup,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Item } from 'src/app/models/item.model';
import { ItemService } from 'src/app/services/item.service';

@Component({
  selector: 'app-edit-item',
  templateUrl: './edit-item.component.html',
  styleUrls: ['./edit-item.component.css'],
})
export class EditItemComponent {
  itemForm: UntypedFormGroup = this.fb.group({});
  item: Item = {};

  constructor(
    private itemService: ItemService,
    private fb: UntypedFormBuilder,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.data.subscribe((data) => {
      this.item = data['item'];
    });

    this.initForm();
  }

  initForm(): void {
    this.itemForm = this.itemForm = this.fb.group({
      name: [this.item?.name, Validators.required],
      description: [this.item?.description],
      price: [this.item?.price, Validators.required],
      quantity: [this.item?.quantity],
      image: [this.item?.image],
    });
  }

  submitForm(): void {
    let formValue = this.itemForm.getRawValue();

    if (this.itemForm.invalid) {
      alert('Invalid Form Submission');
      return;
    }

    this.itemService
      .updateItem(formValue, this.item?.id)
      .subscribe((_) => {
        alert('success');
        this.router.navigate(['items']);
      });
  }
}
