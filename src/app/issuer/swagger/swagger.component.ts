// import { Component, OnInit, AfterViewInit, ElementRef } from '@angular/core';

// import SwaggerUI from 'swagger-ui';
// import { environment as env } from '../../../environments/environment';

// @Component({
//   selector: 'app-swagger',
//   templateUrl: './swagger.component.html',
//   styleUrls: ['./swagger.component.css']
// })
// export class SwaggerComponent implements OnInit, AfterViewInit {

//   constructor(
//     private el: ElementRef
//   ) {
//   }

//   ngAfterViewInit() {
//     var url:any;
//     var email = localStorage.getItem('user_email')                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              
//     console.log("emaillll====", email)
//     if (email === "a.ruzafa@gpaseabots.com") {
//       url = env.baseUrl + '/media/doc_sebot.json'
//       console.log("url===", url)
//     } else if (email === "corporate@tecfys.us") {
//       url = env.baseUrl + '/media/doc_tecfys.json'
//     } else {
//       url = env.baseUrl + '/media/doc_credential.json'
//     }
//     const ui = SwaggerUI({
//       url,
//       // url: env.baseUrl + '/media/doc_credential.json',
//       // url: env.baseUrl + '/media/doc_seabot.json',
//       domNode: this.el.nativeElement.querySelector('.swagger-container'),
//       deepLinking: true,
//       presets: [
//         SwaggerUI.presets.apis
//       ],
//     });
//   }

//   ngOnInit() {
//   }

// }

// import { Component, OnInit, AfterViewInit, ElementRef } from '@angular/core';
// import SwaggerUI from 'swagger-ui-dist';
// import { environment as env } from '../../../environments/environment';

// @Component({
//   selector: 'app-swagger',
//   templateUrl: './swagger.component.html',
//   styleUrls: ['./swagger.component.css']
// })
// export class SwaggerComponent implements OnInit, AfterViewInit {

//   constructor(private el: ElementRef) {}

//   ngAfterViewInit() {
//     let url: any;
//     const email = localStorage.getItem('user_email');

//     if (email === "a.ruzafa@gpaseabots.com") {
//       url = env.baseUrl + '/media/doc_sebot.json';
//     } else if (email === "corporate@tecfys.us") {
//       url = env.baseUrl + '/media/doc_tecfys.json';
//     } else {
//       url = env.baseUrl + '/media/doc_credential.json';
//     }

//     SwaggerUI({
//       url,
//       domNode: this.el.nativeElement.querySelector('.swagger-container'),
//       deepLinking: true,
//       presets: [
//         SwaggerUI.presets.apis
//       ]
//     });
//   }

//   ngOnInit() {}
// }


declare global { 
  interface Window {
    SwaggerUIBundle: any;
    SwaggerUIStandalonePreset: any;
  }
}

import { Component, AfterViewInit, ElementRef } from '@angular/core';
import { environment as env } from '../../../environments/environment';

@Component({
  selector: 'app-swagger',
  templateUrl: './swagger.component.html',
  styleUrls: ['./swagger.component.css']
})
export class SwaggerComponent implements AfterViewInit {

  constructor(private el: ElementRef) {}

  ngAfterViewInit(): void {

    if (!(window as any).SwaggerUIBundle) {
      console.error("SwaggerUIBundle not found. Ensure scripts are added in angular.json");
      return;
    }

    const email = localStorage.getItem('user_email');
    let swaggerUrl = env.baseUrl + '/media/doc_credential.json';

    if (email === 'a.ruzafa@gpaseabots.com') {
      swaggerUrl = env.baseUrl + '/media/doc_sebot.json';
    } else if (email === 'corporate@tecfys.us') {
      swaggerUrl = env.baseUrl + '/media/doc_tecfys.json';
    }

    // 3️⃣ Initialize Swagger UI 
    (window as any).SwaggerUIBundle({
      url: swaggerUrl,
      dom_id: '#swagger-container',
      deepLinking: true,
      presets: [
        (window as any).SwaggerUIBundle.presets.apis,
        (window as any).SwaggerUIStandalonePreset
      ]
    });
  }
}

