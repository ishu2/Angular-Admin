import {Component,OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {TaskService} from '../tasks.service';
import { Task } from '../task';
import { NgForm } from '@angular/forms/src/directives/ng_form';

@Component({
    selector:'add-officer',
    templateUrl:'./new-task.component.html',
    styleUrls:['./new-task.component.css']
})

export class NewTaskComponent{
    public newTask:Task={id:0,district:"",sid:1,start_date:"123",duration:"1",description:"qqqqqqqqqqqqqqqqqqqq",deadline:"11111"};

    constructor(private router:Router , private taskService:TaskService){}
    onSubmit(form:NgForm){
        console.log(form.value);
        console.log("ID = "+form.value.id)
        this.newTask.id=form.value.id;
        this.newTask.district=form.value.district;
        this.newTask.sid=form.value.sid;
        this.newTask.start_date=form.value.start_date;
        this.newTask.duration=form.value.deadline;
        this.newTask.description=form.value.description;
        this.newTask.deadline=form.value.deadline;
        this.taskService.addTask(this.newTask);
        this.router.navigateByUrl('/home/tasks')
    }
}