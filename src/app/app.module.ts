import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Ng2SearchPipeModule } from 'ng2-search-filter'
import {FormsModule } from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentsComponent } from './students/students.component';
import { DetailStudentComponent } from './detail-student/detail-student.component';
import { WrongPathComponent } from './wrong-path/wrong-path.component';

@NgModule({
  declarations: [
    AppComponent,
    StudentsComponent,
    DetailStudentComponent,
    WrongPathComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    Ng2SearchPipeModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
