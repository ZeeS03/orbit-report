import { Component } from '@angular/core';
import { Satellite } from './satellite';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'orbit-report';
  sourceList: Satellite[];
  displayList: Satellite[];
  constructor() {
    this.sourceList = [];
    // tslint:disable-next-line: prefer-const
    let satellitesUrl = 'https://handlers.education.launchcode.org/static/satellites.json';
    window.fetch(satellitesUrl).then(function(response) {
       response.json().then(function(data) {
          // tslint:disable-next-line: prefer-const
          let fetchedSatellites = data.satellites;
          // tslint:disable-next-line: prefer-for-of
          for (let i = 0; i < fetchedSatellites.length; i++) {
            // tslint:disable-next-line: max-line-length
            // tslint:disable-next-line: prefer-const
            let satellite = {
              name: fetchedSatellites[i].name,
              orbitType: fetchedSatellites[i].orbitType,
              type: fetchedSatellites[i].type,
              operational: fetchedSatellites[i].operational,
              launchDate: fetchedSatellites[i].launchDate,
             };
            this.sourceList.push(satellite);
          }
          this.displayList = this.sourceList.slice(0);
        }.bind(this));
     }.bind(this));
    this.displayList = [];
 }
 search(searchTerm: string): void {
  // tslint:disable-next-line: prefer-const
  let matchingSatellites: Satellite[] = [];
  searchTerm = searchTerm.toLowerCase();
  // tslint:disable-next-line: prefer-for-of
  for (let i = 0; i < this.sourceList.length; i++) {
     // tslint:disable-next-line: prefer-const
     let name = this.sourceList[i].name.toLowerCase();
     if (name.indexOf(searchTerm) >= 0) {
        matchingSatellites.push(this.sourceList[i]);
     }
  }
  // assign this.displayList to be the the array of matching satellites
  // this will cause Angular to re-make the table, but now only containing matches
  this.displayList = matchingSatellites;
}
}
