import {Component,OnInit} from '@angular/core';
import {Router} from '@angular/router';
import{Programme} from '../programe';
import { ProgrammeService } from '../programmes.service';
import {PROGRAMMES} from '../dummy-programmes';


@Component({
    selector:'app-programmes',
    templateUrl:'./programmes.component.html',
    styleUrls:['./programmes.component.css']
})
export class ProgrammesComponent {
    constructor(private router:Router , private _programmeService:ProgrammeService){}
    public programmes;

    onSelect(programmes){
        this.router.navigate(['/programmes',programmes]);
    }

    delete(id:any){
        this._programmeService.delete(id);
    }

    ngOnInit(){
       this.programmes= this._programmeService.getProgrammes()
     }
}
