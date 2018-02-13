import { Component } from '@angular/core';
import { PeopleService } from './people.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [PeopleService] //I can put MY SERVICES HERE!!!
})
export class AppComponent {
  title = 'Star Wars PPlz!!!';
}
