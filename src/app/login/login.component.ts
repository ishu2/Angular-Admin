import {Component,OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
    selector:'login',
    templateUrl:'./login.component.html',
    styleUrls:['./login.component.css']
})

export class LoginComponent{
    constructor(private router:Router){

    }

    onSubmit(value:any){
      this.router.navigateByUrl('/admin');
    }

}