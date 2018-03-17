import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import {HttpModule} from '@angular/http';
import {ProgrammesComponent} from './programmes/programmes.component'
import {RouterModule} from '@angular/router';
import {DetailComponent} from './programmes-detail/detail.component';
import {PROGRAMMES} from './dummy-programmes';
import {NewProgrammeComponent} from './new-programme/new-programme.component';
import {ProgrammeService} from './programmes.service';
import { ReactiveFormsModule } from '@angular/forms';
import {NewOfficerComponent} from './new-officer/new-officer.component';
import { DlDateTimePickerDateModule } from 'angular-bootstrap-datetimepicker';

@NgModule({
  declarations: [
    AppComponent,ProgrammesComponent,DetailComponent,NewProgrammeComponent,NewOfficerComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    DlDateTimePickerDateModule,
    FormsModule,
    RouterModule.forRoot([
      {path:'',component:AppComponent},
      {path:'programmes',component:ProgrammesComponent},
      {path:'programmes/:id',component:DetailComponent},
      {path:'new',component:NewProgrammeComponent},
      {path:'newOfficer',component:NewOfficerComponent}
    ])
  ],
  providers: [ProgrammeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
