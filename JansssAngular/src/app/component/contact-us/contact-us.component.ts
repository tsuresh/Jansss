import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {ErrorStateMatcher} from '@angular/material/core';
import {AuthorizationService} from '../../service/authorization.service';
import {MatSnackBar} from '@angular/material/snack-bar';

// Error when invalid control is dirty, touched, or submitted
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: [
    './contact-us.component.scss',
    '../../../../node_modules/hover.css/css/hover-min.css'
  ],
  providers: [AuthorizationService]
})
export class ContactUsComponent implements OnInit {
  public form: FormGroup;
  matcher = new MyErrorStateMatcher();

  createForm(): FormGroup {
    return this.formBuilder.group(
      {
        firstName: ['', Validators.required],
        surname: [''],
        email: ['', Validators.required, Validators.email],
        phone: ['', Validators.required, Validators.pattern(/^[0-9]{9}$/)],
        message: ['', Validators.required],
        accept: ['', Validators.required]
      }
    );
  }

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authService: AuthorizationService,
    // tslint:disable-next-line:variable-name
    private _snackBar: MatSnackBar
  ) {
    this.form = this.createForm();
  }
  ngOnInit() { }

  onSubmit() {
    if (this.form.invalid === true) {
      return;
    } else {
      const data: any = Object.assign(this.form.value);
      this.authService.sendMessage(data).subscribe(() => {
        this._snackBar.open('Message sent.', '' , {duration: 3000});
      }, error => {
        this._snackBar.open('An error occurred', JSON.stringify(error.error), {duration: 3000});
      });
    }
  }
}
