import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-model-form',
  templateUrl: './model-form.component.html',
  styleUrls: ['./model-form.component.css']
})
export class ModelFormComponent implements OnInit {
  userForm: FormGroup;
  constructor(private _formBuilder: FormBuilder) {}

  ngOnInit() {
    this.userForm = this._formBuilder.group({
      name: ['Zaidi', [Validators.required, Validators.minLength(4)] ],
      email: [],
      address: this._formBuilder.group({
        street: [],
        city: [],
        postalcode: [null, [Validators.required, Validators.pattern('^[1-9][0-9]{4}$')]]
      })
    });

  }

  /*
  userForm =  new FormGroup({
    name : new FormControl('saeed khan', Validators.required),
    email : new FormControl(),

    address: new FormGroup({
      street: new FormControl(),
      city: new FormControl(),
      postalcode: new FormControl(),
    }),
  });
  */

  onSubmit() {
    console.log(this.userForm.value);
  }

}
