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
       }.bind(this));
    }.bind(this));
 }

}
