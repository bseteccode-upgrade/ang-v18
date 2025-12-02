import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';

import { ISlimScrollOptions } from '../ngx-slimscroll/classes/slimscroll-options.class';
import { SlimScrollState, ISlimScrollState } from '../ngx-slimscroll/classes/slimscroll-state.class';
@Component({
  selector: 'app-issuer',
  templateUrl: './issuer.component.html',
  styleUrls: ['./issuer.component.css']
})
export class IssuerComponent implements OnInit {
  options: ISlimScrollOptions;
  secondOptions: ISlimScrollOptions;
  slimScrollState = new SlimScrollState();

  constructor(private apiService: ApiService) {
    console.log("issuer component loaded");
    
    this.options = {
      barBackground: '#fcfcfc',
      gridBackground: '#f8f8f8',
      barBorderRadius: '10',
      barWidth: '6',
      gridWidth: '0',
      alwaysVisible: true
    };
  }

  ngOnInit() {
    console.log("issuer ngOnInit loaded");
    this.apiService.getUser();
  }

  scrollChanged($event: ISlimScrollState) {
    this.slimScrollState = $event;
  }

  onActivate(e) {
    console.log("issuer component route");
    
    window.scroll(0, 0);
  }

}
