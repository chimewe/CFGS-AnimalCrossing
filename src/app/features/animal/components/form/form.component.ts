import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { Animal } from '../../interfaces/animal.interface';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  form: FormGroup;

  constructor(
    private readonly formBuilder: FormBuilder,
    public readonly dialogRef: MatDialogRef<FormComponent>,
    @Inject(MAT_DIALOG_DATA) private readonly animal: Animal
  ) {}

  ngOnInit() {
    this.setForm();
  }

  setForm() {
    this.form = this.formBuilder.group({
      name: [this.animal.name, [Validators.required]],
      description: [this.animal.description, [Validators.required]],
      imgUrl: [this.animal.imgUrl, [Validators.required]],
    });
  }

  submit() {
    this.dialogRef.close({ ...this.animal, ...this.form.value });
  }
}
