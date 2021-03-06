import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
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
import {OfficersComponent} from './officers/officers.component'
import {TasksComponent} from './tasks/tasks.component';
import {NewTaskComponent} from './new-task/new-task.component';
import {LoginComponent} from './login/login.component';
import {GraphComponent} from './graph/graph.component';
import { graphService } from './graph.service';
import {TaskService} from './tasks.service';
import {HomeComponent} from './home/home.component'
import { OfficerService } from './officer.service';


@NgModule({
  declarations: [
    AppComponent,GraphComponent,LoginComponent,ProgrammesComponent,DetailComponent,NewProgrammeComponent,NewOfficerComponent,OfficersComponent,TasksComponent,NewTaskComponent,HomeComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,

    DlDateTimePickerDateModule,
    FormsModule,
    RouterModule.forRoot([
      
      {
        path:'home',
        component:HomeComponent,
        children: [
          {path:'programmes',component:ProgrammesComponent},
          {path:'programmes/:id',component:DetailComponent},
          {path:'new',component:NewProgrammeComponent},
          {path:'newOfficer',component:NewOfficerComponent},
          {path:'officers',component:OfficersComponent},
          {path:'tasks',component:TasksComponent},
          {path:'newTask',component:NewTaskComponent},
          {path:'login',component:LoginComponent},
          {path:'graph',component:GraphComponent}
        ]
      },
      {
        path:"login",
        component: LoginComponent
      },
      {
        path: '',
        redirectTo: "home",
        pathMatch: "full"
      }
    ])
  ],
  providers: [ProgrammeService,graphService,TaskService,OfficerService],
  bootstrap: [AppComponent]
})

export class AppModule { }