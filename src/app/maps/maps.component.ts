import { Component, OnInit } from '@angular/core';
import { AppcontextService } from '../appcontext.service';

@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.less']
})
export class MapsComponent implements OnInit {
  lat: number = 22.579650;
  lng: number = 88.438020;

  locations:Array<any>=[{lat:22.579694,lng:88.438046},
                        {lat:22.579795,lng:88.438147},
                        {lat:22.579896,lng:88.438248},
                        {lat:22.579997,lng:88.438349},
                        {lat:22.579598,lng:88.438444},
                        {lat:22.579499,lng:88.438543}];
  constructor(private appContext: AppcontextService) { }

  ngOnInit() {
    this.appContext.currentPage = 'Maps';
  }

}
