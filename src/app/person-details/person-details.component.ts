import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router"; //new

import { PeopleService } from "../people.service";
import { Person } from "../person";

@Component({
  selector: 'app-person-details',
  templateUrl: './person-details.component.html', //<===HERE!
  styles: []
})
export class PersonDetailsComponent implements OnInit {
  person: Person;
  sub:any; //new
  professions: string[] = ['jedi', 'bounty hunter', 'princess', 'sith lord'];

  constructor(private route:ActivatedRoute,
              private peopleService:PeopleService,
              private router: Router) { } //new
//new
  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      let id = Number.parseInt(params['id']);
      this.person = this.peopleService.get(id);
    });
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  gotoPeopleList(){
    let link = ['/persons'];
    this.router.navigate(link);
  }

  savePersonDetails(){
    this.peopleService.save(this.person);
  }
}

