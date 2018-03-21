import {Component,OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {graphService} from '../graph.service';
declare var google:any;

@Component({
    selector:'add-officer',
    templateUrl:'./graph.component.html',
    styleUrls:['./graph.component.css'],
    providers:[graphService]
})

export class GraphComponent {

    constructor(private router:Router , private graphService:graphService){}
    ngOnInit() {

        google.charts.load('current', {'packages':['corechart']});
        google.charts.setOnLoadCallback(drawChart);
      
        function drawChart() {
      
          var data = google.visualization.arrayToDataTable([
            ['Task', 'Hours per Day'],
            ['Work',     11],
            ['Eat',      2],
            ['Commute',  2],
            ['Watch TV', 2],
            ['Sleep',    7]
          ]);
      
          var options = {
            title: 'My Daily Activities'
          };
      
          var chart = new google.visualization.LineChart(document.getElementById('piechart'));
      
          chart.draw(data, options);
        }
      }
   
}
