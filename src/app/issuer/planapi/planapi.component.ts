// import { Component, OnInit } from '@angular/core';
// import { ActivatedRoute, Router } from '@angular/router';

// import { ApiService } from '../../service/api.service';
// import { CommonService } from '../../service/common.service';
// import { environment as env } from '../../../environments/environment';
// import { SafeResourceUrl, DomSanitizer } from '@angular/platform-browser';
// import SwaggerUI from "swagger-ui";



// @Component({
//   selector: 'app-planapi',
//   templateUrl: './planapi.component.html',
//   styleUrls: ['./planapi.component.css']
// })
// export class PlanapiComponent implements OnInit {
//   apiUrl: SafeResourceUrl = this.sanitizer.bypassSecurityTrustResourceUrl('https://certtun.vottun.com:8081/vottun-api/vottun-api?domain=' + env.baseUrl);
//   constructor(
//     public apiService: ApiService,
//     private common: CommonService,
//     private router: Router,
//     private sanitizer: DomSanitizer
//   ) { }

//   ngOnInit() {
//     setTimeout(() => {
//       if (!this.apiService.user.profile_details.allow_api) {
//         this.common.openSnackBar('dont_have_privillege', 'Close');
//         this.router.navigate(['/signin']);
//       }
//     }, 1500);
//   }

//   ngAfterViewInit() {
//     SwaggerUI({
//       url: this.apiUrl as string,
//       dom_id: '#swagger-ui'
//     });
//   }

// }

// import { Component, OnInit, AfterViewInit } from '@angular/core';
// import { Router } from '@angular/router';
// // import SwaggerUI from 'swagger-ui-dist';

// import { ApiService } from '../../service/api.service';
// import { CommonService } from '../../service/common.service';
// import { environment as env } from '../../../environments/environment';

// @Component({
//   selector: 'app-planapi',
//   templateUrl: './planapi.component.html',
//   styleUrls: ['./planapi.component.css']
// })
// export class PlanapiComponent implements OnInit, AfterViewInit {

//   apiUrl = 'https://certtun.vottun.com:8081/vottun-api/vottun-api?domain=' + env.baseUrl;

//   constructor(
//     public apiService: ApiService,
//     private common: CommonService,
//     private router: Router,
//   ) {}

//   ngOnInit() {
//     setTimeout(() => {
//       if (!this.apiService.user.profile_details.allow_api) {
//         this.common.openSnackBar('dont_have_privillege', 'Close');
//         this.router.navigate(['/signin']);
//       }
//     }, 1500);
//   }

//   ngAfterViewInit() {
//     SwaggerUI({
//       url: this.apiUrl,
//       dom_id: '#swagger-ui'
//     });
//   }
// }

declare var SwaggerUIBundle: any;
declare var SwaggerUIStandalonePreset: any;

// import SwaggerUI from 'swagger-ui-dist/swagger-ui-es-bundle.js';
// import SwaggerUIStandalonePreset from 'swagger-ui-dist/swagger-ui-standalone-preset.js';
//  import { SwaggerUIBundle, SwaggerUIStandalonePreset } from 'swagger-ui-dist';

import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../../service/api.service';
import { CommonService } from '../../service/common.service';
import { environment as env } from '../../../environments/environment';

@Component({
  selector: 'app-planapi',
  templateUrl: './planapi.component.html',
  styleUrls: ['./planapi.component.css']
})
export class PlanapiComponent implements OnInit, AfterViewInit {
 @ViewChild('swagger') swaggerDom!: ElementRef<HTMLDivElement>;
  apiUrl = 'https://certtun.vottun.com:8081/vottun-api/vottun-api?domain=' + env.baseUrl;

  constructor(
    public apiService: ApiService,
    private common: CommonService,
    private router: Router
  ) {}

  ngOnInit() {
    if (!this.apiService.user.profile_details.allow_api) {
      this.common.openSnackBar('dont_have_privillege', 'Close');
      this.router.navigate(['/signin']);
    }
  }

  // ngAfterViewInit() {
  //   SwaggerUIBundle({
  //     url: this.apiUrl,
  //     dom_id: '#swagger-ui',
  //     deepLinking: true,
  //     presets: [
  //       SwaggerUIBundle.presets.apis,
  //       SwaggerUIStandalonePreset
  //     ]
  //   });
  // }
    ngAfterViewInit() {
      console.log(this.swaggerDom,"this.swaggerDom.nativeElement");
      
      // if (this.swaggerDom) {
        SwaggerUIBundle({
          url: this.apiUrl,
          dom_id: '#swagger-container',
          deepLinking: true,
          presets: [
            SwaggerUIBundle.presets.apis,
            SwaggerUIStandalonePreset
          ],
          layout: 'StandaloneLayout'
        });
      // }
    }
}

