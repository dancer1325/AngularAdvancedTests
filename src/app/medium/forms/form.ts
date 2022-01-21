import { FormGroup, FormBuilder, Validators } from '@angular/forms';

export class FormRegister {
  form: FormGroup; // It could be initiated by ngOnInit, instead of via constructor

  constructor(fb: FormBuilder) {
    // === Inject a dependency
    this.form = fb.group({
      email: ['', [Validators.required, Validators.email]], // Initialize the field with ''. Angular validations added
      password: ['', Validators.required], // Initialize the field with ''
    });
  }
}
