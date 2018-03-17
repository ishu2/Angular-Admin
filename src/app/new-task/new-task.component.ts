import {Component,OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {TaskService} from '../tasks.service';
import { Task } from '../task';

@Component({
    selector:'add-officer',
    templateUrl:'./new-task.component.html',
    styleUrls:['./new-task.component.css'],
    providers:[TaskService]
})

export class NewTaskComponent{
    public newTask:Task;

    constructor(private router:Router , private taskService:TaskService){}
    onSubmit(){
        this.taskService.addTask(this.newTask);
        this.router.navigateByUrl('/tasks')
    }
}