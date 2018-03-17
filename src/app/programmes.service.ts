import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import {Http,Response} from '@angular/http';
import 'rxjs/add/operator/map';
import {Programme} from './programe';
import {PROGRAMMES} from './dummy-programmes'
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Injectable()
export class ProgrammeService{

    i:any;

myProgrammes=PROGRAMMES;    
private _url:string="apidata/programmes.json"
constructor(private _http:Http){}
getProgrammes(){
    return PROGRAMMES;
}

addProgrammes(Programme:any){
this.myProgrammes.push(Programme);
}

delete(id:any){
        
    for(this.i=0;this.i<this.myProgrammes.length;this.i++){
        if(this.myProgrammes[this.i].id===id)
         break;
    }
    this.myProgrammes.splice(this.i,1);
}

}