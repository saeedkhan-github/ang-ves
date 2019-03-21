import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { ModelFormComponent } from './model-form/model-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { EmpdataComponent } from './empdata/empdata.component';
import { EmdataService } from './emdata.service';



@NgModule({
  declarations: [
    AppComponent,
    ModelFormComponent,
    EmpdataComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule
  ],
  providers: [EmdataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
