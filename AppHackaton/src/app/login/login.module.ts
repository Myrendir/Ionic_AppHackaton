import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoginPageRoutingModule } from './login-routing.module';

import { LoginPage } from './login.page';
import {ButtonsModule, CardsModule, CheckboxModule, IconsModule, InputsModule, WavesModule} from "angular-bootstrap-md";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        LoginPageRoutingModule,
        ButtonsModule,
        IconsModule,
        CheckboxModule,
        CardsModule,
        ReactiveFormsModule,
        InputsModule,
        WavesModule
    ],
  declarations: [LoginPage]
})
export class LoginPageModule {}
