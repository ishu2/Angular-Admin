import {Component,OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {OfficerService} from '../officer.service';
import { Officer } from '../officer';

@Component({
    selector:'add-officer',
    templateUrl:'./new-officer.component.html',
    styleUrls:['./new-officer.component.css'],
    providers:[OfficerService]
})

export class NewOfficerComponent{

    public newOfficer:Officer;

    constructor(private router:Router , private officerService:OfficerService){}
    onSubmit(){
        this.officerService.addOfficer(this.newOfficer);
        this.router.navigateByUrl('/officers')
    }
    
}