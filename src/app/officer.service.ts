import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import {Http,Response} from '@angular/http';
import 'rxjs/add/operator/map';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {Officer} from './officer';

@Injectable()
export class OfficerService{

i:number;

officers=[
    {id:1,name:"Rohan",district:"Rohini",doj:"12/04/16",rtd:"12/11/80"},
    {id:2,name:"Rohit",district:"Rohini-12",doj:"12/04/16",rtd:"12/11/80"},
    {id:3,name:"Ronit",district:"Rohini-13",doj:"12/04/16",rtd:"12/11/80"},
    {id:4,name:"Rishi",district:"Rohini-35",doj:"12/04/16",rtd:"12/11/80"},
    {id:5,name:"Rinku",district:"Rohini-36",doj:"12/04/16",rtd:"12/11/80"},
    {id:6,name:"Rohan",district:"Rohini-15",doj:"12/04/16",rtd:"12/11/80"},
    {id:7,name:"Veer",district:"Rohini-16",doj:"12/04/16",rtd:"12/11/80"},
    {id:8,name:"Viraj",district:"Rohini-36",doj:"12/04/16",rtd:"12/11/80"} 
]

getOfficers(){
    return this.officers;
}

addOfficer(officer:Officer){
    this.officers.push(officer);
}

deleteOfficer(id:number){
  for(this.i=0;this.i<this.officers.length;this.i++){
      if(this.officers[this.i].id===id){
          this.officers.splice(this.i,1);
          break;
      }
  }
}

}