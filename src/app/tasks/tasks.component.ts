import {Component,OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {TaskService} from '../tasks.service';
import {Task} from '../task';


@Component({
    selector:'app-officers',
    templateUrl:'./tasks.component.html',
    styleUrls:['./tasks.component.css'],
    providers:[TaskService]
})

export class TasksComponent{

    public tasks;
    constructor(private router:Router , private taskService:TaskService){}

    delete(id:any){
        this.taskService.deleteOfficer(id);
    }

    ngOnInit(){
       this.tasks= this.taskService.getTasks()
     }

}