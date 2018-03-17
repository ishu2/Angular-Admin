import {Component,OnInit,Input} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';
import {ProgrammesComponent} from '../programmes/programmes.component';
import {PROGRAMMES} from '../dummy-programmes'
import { Programme } from '../programe';

@Component({
    selector:'programme-details',
    templateUrl:'./detail.Component.html'

})
export class DetailComponent implements OnInit{
    public i:any;
    public id;
    public index:any;
    public data=PROGRAMMES;
    
  constructor(private route:ActivatedRoute){}
  ngOnInit(){
      let programme=this.route.params.subscribe((params)=>{
          programme=params['id'];
          this.id=programme;
      });
    

for(this.i=0;this.i<PROGRAMMES.length;this.i++){
    if(PROGRAMMES[this.i].id===this.id){
      this.index=this.i;
      break;
    }
}


    }
    
  }
