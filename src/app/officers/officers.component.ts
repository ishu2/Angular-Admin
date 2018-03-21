import {Component,OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {OfficerService} from '../officer.service';
import {Officer} from '../officer';

@Component({
    selector:'app-officers',
    templateUrl:'./officers.component.html',
    styleUrls:['./officers.component.css']
})

export class OfficersComponent{
    constructor(private router:Router , private officerService:OfficerService){}
    public officers:Officer[]=this.officerService.getOfficers();

    delete(id:any){
        this.officerService.deleteOfficer(id);
    }

    ngOnInit(){
      this.officerService.officersSubject.subscribe(officers => {
          console.log("officers in component",officers)
          this.officers = officers;
      })
     }

}