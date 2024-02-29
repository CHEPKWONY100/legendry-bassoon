import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { ProfileEditorComponent } from './profile-editor/profile-editor.component';
import { ReactiveFormsModule } from '@angular/forms';
import  {MatFormFieldModule} from '@angular/material/form-field';
import  {MatInputModule} from '@angular/material/input';
import  {MatRadioModule } from '@angular/material/radio'
import  {MatStepperModule} from '@angular/material/stepper'
import {MatDatepickerModule} from '@angular/material/datepicker'
import { MatNativeDateModule,  } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButton } from '@angular/material/button';

@NgModule({
  declarations: [
    AppComponent,
    ProfileEditorComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatRadioModule,
    MatStepperModule,
    MatDatepickerModule,
    MatNativeDateModule,
     MatIconModule,
     MatButton,
    
    
  
    AppRoutingModule
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
