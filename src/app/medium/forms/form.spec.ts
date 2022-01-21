import { FormBuilder } from '@angular/forms';
import { FormRegister } from './form';

describe('Check Forms', () => {
  let formRegisterInstance: FormRegister;

  beforeEach(() => {
    formRegisterInstance = new FormRegister(new FormBuilder());
  });

  it('Check form contains the email and password with their corresponding validations', () => {
    let formToCheck = formRegisterInstance.form;

    expect(formToCheck.contains('email')).toBeTrue();
    expect(formToCheck.contains('password')).toBeTrue();
    expect(formToCheck.contains('fieldNotPresent')).toBeFalse(); // Check another field which doesn't exist

    const emailField = formToCheck.get('email'); // Get some field of the form
    if (emailField) {
      // Necessary to chek from Angular 4.11, because if not we get an error https://stackoverflow.com/questions/43800907/typescript-strictnullchecks-object-is-possibly-null

      emailField.setValue(null); //Set null value to check aftertwards if it's not valid since is required
      expect(emailField.valid).toBeFalse();

      emailField.setValue('a'); //Set random string
      expect(emailField.valid).toBeFalse();

      emailField.setValue('a@'); //Set random string
      expect(emailField.valid).toBeFalse();

      emailField.setValue('a@a'); //Letter after @
      expect(emailField.valid).toBeTrue();

      emailField.setValue('a@a.'); //Letter after @ + ., but missing after .
      expect(emailField.valid).toBeFalse();

      emailField.setValue('a@a.a');
      expect(emailField.valid).toBeTrue();

      emailField.setValue('a@.com'); //Set valid email
      expect(emailField.valid).toBeFalse();
    }

    const passwordField = formToCheck.get('password'); // Get some field of the form
    if (passwordField) {
      expect(passwordField.valid).toBeFalse();
    }
  });
});
