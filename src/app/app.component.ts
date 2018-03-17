import { Component } from '@angular/core';
import { ProgrammeService } from './programmes.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[ProgrammeService]
})
export class AppComponent {
  title = 'WELCOME';
}
