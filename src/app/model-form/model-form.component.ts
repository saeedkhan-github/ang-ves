import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-model-form',
  templateUrl: './model-form.component.html',
  styleUrls: ['./model-form.component.css']
})
export class ModelFormComponent {

  userForm =  new FormGroup({
    name : new FormControl('saeed khan', Validators.required),
    email : new FormControl(),

    address: new FormGroup({
      street: new FormControl(),
      city: new FormControl(),
      postalcode: new FormControl(),
    }),
  });

  onSubmit() {
    console.log(this.userForm.value);
  }

}
