import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
    selector: 'app-login',
    templateUrl: './login.page.html',
    styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
    gradientForm: FormGroup;

    constructor(private fb: FormBuilder) {
        this.gradientForm = fb.group({
          gradientFormEmailEx: ['', [Validators.required, Validators.email]],
          gradientFormPasswordEx: ['', Validators.required],
        });
    }

    ngOnInit() {
    }

}
