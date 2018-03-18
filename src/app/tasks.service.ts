import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import {Http,Response} from '@angular/http';
import 'rxjs/add/operator/map';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {Task} from './task';

@Injectable()
export class TaskService{

i:number;

tasks=[
    
    {id:1,district:"abc",sid:1,start_date:"20-11-14",duration:"5 years",description:"hcvhgg cytdgcrsreaerztjjdc6e65w4anyfujvjf",deadline:"20-11-19"},
    {id:1,district:"snc",sid:1,start_date:"20-11-14",duration:"5 years",description:"hcvhgg cytdgcrsreaerztjjdc6e65w4anyfujvjf",deadline:"20-11-19"},
    {id:1,district:" dcc",sid:1,start_date:"20-11-14",duration:"5 years",description:"hcvhgg cytdgcrsreaerztjjdc6e65w4anyfujvjf",deadline:"20-11-19"},
    {id:1,district:"and",sid:1,start_date:"20-11-14",duration:"5 years",description:"hcvhgg cytdgcrsreaerztjjdc6e65w4anyfujvjf",deadline:"20-11-19"},
    {id:1,district:"hdn",sid:1,start_date:"20-11-14",duration:"5 years",description:"hcvhgg cytdgcrsreaerztjjdc6e65w4anyfujvjf",deadline:"20-11-19"},
    {id:1,district:"anc",sid:1,start_date:"20-11-14",duration:"5 years",description:"hcvhgg cytdgcrsreaerztjjdc6e65w4anyfujvjf",deadline:"20-11-19"},
    {id:1,district:"eud",sid:1,start_date:"20-11-14",duration:"5 years",description:"hcvhgg cytdgcrsreaerztjjdc6e65w4anyfujvjf",deadline:"20-11-19"},
    {id:1,district:"acb",sid:1,start_date:"20-11-14",duration:"5 years",description:"hcvhgg cytdgcrsreaerztjjdc6e65w4anyfujvjf",deadline:"20-11-19"}

]

getTasks(){
    return this.tasks;
}

addTask(task:Task){
    console.log(task);
    this.tasks.push(task);
}

deleteOfficer(id:number){
  for(this.i=0;this.i<this.tasks.length;this.i++){
      if(this.tasks[this.i].id===id){
          break;
      }
  }
  this.tasks.splice(this.i,1);
}

}