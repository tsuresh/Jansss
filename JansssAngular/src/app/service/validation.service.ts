import { AbstractControl } from '@angular/forms';
export class ValidationService {

  // function to set error messages
  static getValidatorErrorMessage(validatorName: string, validatorValue?: any) {
    const config = {
      invalidCreditCard: 'Is invalid credit card number',
      invalidPassword: 'New password and confirm password does not match',
    };

    return config[validatorName];
  }

  static creditCardValidator(control: AbstractControl) {
    // Visa, MasterCard, American Express, Diners Club, Discover, JCB
    // tslint:disable-next-line:max-line-length
    if (control.value.match(/^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$/)) {
      return null;
    } else {
      return {invalidCreditCard: true};
    }
  }
}
