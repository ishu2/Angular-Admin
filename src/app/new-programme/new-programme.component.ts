import {Component,OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {PROGRAMMES} from '../dummy-programmes';
import {Programme} from '../programe'
import {ProgrammeService} from '../programmes.service'

@Component({
    selector:'add-programmes',
    templateUrl:'./new-programme.component.html',
    styleUrls:['./new-programme.component.css'],
    providers:[ProgrammeService]
})
export class NewProgrammeComponent{

    constructor(private route:Router , private _programmeService:ProgrammeService){}

 onSubmit(value:Programme){
     console.log(value);
// this._programmeService.addProgrammes(value);
//this.route.navigate(['/programmes']);
this.route.navigateByUrl('/programmes')
 }


}