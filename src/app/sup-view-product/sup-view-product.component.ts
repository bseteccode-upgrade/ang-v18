/*
 * File : sup-view-product.component.ts
 * Use: Supply chain view the report of the product activity details
 * Copyright : vottun 2019
 */
import { Component, OnInit, AfterViewInit, Inject, ElementRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../service/api.service';
import { NgxSmartModalService } from 'ngx-smart-modal';
import { environment as env } from '../../environments/environment';
// import * as moment from 'moment';
import { waypoints } from '../../data/waypoints';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
import { DOCUMENT } from '@angular/common';
import { ActivityDetailsComponent } from '../activity-details/activity-details.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-sup-view-product',
  templateUrl: './sup-view-product.component.html',
  styleUrls: ['./sup-view-product.component.css']
})
export class SupViewProductComponent implements OnInit, AfterViewInit {
  searchForm: FormGroup;
  activityId: any;
  barcode: any = '';
  actDetail: any = {};
  subProductList: any = [];
  dataSubProductLists: any = [];
  baseUrl = env.baseUrl;

  // modelBatchId: any = '';
  resAcvityData: any;
  resultfound: any = false;
  isLoadingResults = true;

  lat: Number;
  lng: Number;
  origin: any;
  destination: any;
  public waypointsData: any = [];
  public waypointsRoadData: any = [];
  public markerOptions: any = waypoints;
  public renderOptions = {
    suppressMarkers: true,
  };
  mapType = '2';
  languages: any = [];
  selectedLangLists: any = [];
  selectedLang = 'EN';
  offset: any = '';
  errorMsg = '';
  compinecode = false;
  initial = true;
  reportPageContent: any = {
    report_top_content: '',
    report_bottom_content: '',
    search_bottun_color: '#29b'
  };
  logo_url: any = 'assets/images/logo-blue.png';
  constructor(
    private route: ActivatedRoute,
    public apiService: ApiService,
    public ngxSmartModalService: NgxSmartModalService,
    public formbuilder: FormBuilder,
    // private elementRef: ElementRef,
    public router: Router,
    public domSanitizer: DomSanitizer,
    @Inject(DOCUMENT) private document: HTMLDocument,
    private elementRef: ElementRef,
    public dialog: MatDialog
  ) {
    this.searchForm = this.formbuilder.group({
      'search': ['', Validators.compose([Validators.required, this.noWhitespaceValidator])]
    });
    this.route.params.subscribe(val => this.myInit());
  }

  convertStyle(content) {
    return this.domSanitizer.bypassSecurityTrustHtml(content);
  }

  public noWhitespaceValidator(control: FormControl) {
    const isWhitespace = (control.value || '').trim().length === 0;
    const isValid = !isWhitespace;
    return isValid ? null : { 'whitespace': true };
  }

  getErrorMessage(field) {
    return this.searchForm.controls[field].hasError('required')
      || this.searchForm.controls[field].hasError('whitespace') ? 'enter_a_value' : '';
  }

  searchFormSubmit(formData) {
    this.errorMsg = '';
    if (!this.searchForm.invalid) {
      this.isLoadingResults = true;
      // this.router.routeReuseStrategy.shouldReuseRoute = () => false;
      // this.router.onSameUrlNavigation = 'reload';
      // this.router.navigate([`/viewproduct/${formData.search}`]);
      this.callactivityBatchDetail(formData.search);
    } else {
      this.errorMsg = 'error';
    }
  }

  myInit() {
    this.apiService.changeTitle('Vottun');
    this.document.getElementById('appFavicon').setAttribute('href', 'assets/images/eduvot-favicon.svg');
    localStorage.removeItem('fromqrscanned');
    this.offset = new Date().getTimezoneOffset();
    this.initial = true;
    this.route.params.subscribe(params => {
      this.barcode = params['id'];
      localStorage.setItem('fromqrscanned', this.barcode);
      const find = this.barcode.search("-and-");
      if (find != -1) {
        this.compinecode = true;
        this.commonPageDesign();
      } else {
        this.compinecode = false;
        this.commonPageDesign();
      }
    });
    this.getLanguages();
  }

  commonPageDesign() {
    this.apiService.getReportPageContent(this.barcode).subscribe(data => {
      this.reportPageContent = data;
      console.log(this.reportPageContent);
      if (this.reportPageContent.is_sep_report_org_logo != '' && this.reportPageContent.is_sep_report_org_logo) {
        this.logo_url = this.reportPageContent.sep_report_logo;
        this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor = this.reportPageContent.page_bg_color;
      } else {
        this.logo_url = 'assets/images/logo-blue.png';
        this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor = '#fff';
      }
      this.apiService.changeTitle(this.reportPageContent.page_title);
      this.document.getElementById('appFavicon').setAttribute('href', this.reportPageContent.sep_report_favicon);
    });
  }

  ngOnInit() {
    localStorage.removeItem('fromqrscanned');
    localStorage.removeItem('selectedLanguage');
  }

  seconds_with_leading_zeros() {
    return /\((.*)\)/.exec(new Date().toString())[1];
  }

  getLanguages() {
    this.apiService.getLanguageSeparate(this.barcode).subscribe(data => {
      this.languages = data;
      console.log(this.languages);
      // this.languages.map((element, i) => {
      //   if (element.language_code == 'EN' || element.language_code == 'CAT' || element.language_code == 'ESP') {
      //     this.selectedLangLists.push(element);
      //   }
      // });
      if (localStorage.getItem('selectedLanguage') != null) {
        const langVal: any = JSON.parse(localStorage.getItem('selectedLanguage'));
        this.selectedLang = langVal.language_code;
        this.apiService.setSeparateLanguage(langVal);
      } else {
        const index = this.languages.findIndex(e => e.language_code === 'EN');
        console.log(index);
        if (index == -1) {
          this.selectedLang = this.languages[0].language_code;
          this.apiService.setSeparateLanguage(this.languages[0]);
        } else {
          this.selectedLang = this.languages[index].language_code;
          this.apiService.setSeparateLanguage(this.languages[index]);
        }

      }
      console.log(this.compinecode);
      if (this.compinecode) {
        this.initial = true;
        this.callactivityBatchDetailOne(this.barcode, this.selectedLang);
      } else {
        this.isLoadingResults = false;
      }
    });
  }

  selectLang(lang) {
    this.selectedLang = lang.language_code;
    localStorage.setItem('selectedLanguage', JSON.stringify(lang));
    this.apiService.setSeparateLanguage(lang);
    if (this.compinecode) {
      this.callactivityBatchDetailOne(this.barcode, this.selectedLang);
    }
    if (this.searchForm.controls['search'].value != '') {
      this.callactivityBatchDetail(this.searchForm.controls['search'].value);
    }
  }

  selectedMap(val) {
    this.mapType = val && val != 'null' ? val : '1';
  }

  callactivityBatchDetail(batchId, lang = '') {
    console.log(this.selectedLang);
    const language_code = lang != '' ? lang : this.selectedLang;
    const selLang = this.languages.find(e => e.language_code.toLowerCase() === language_code.toLowerCase());
    this.searchForm.controls['search'].setValue(batchId);
    this.apiService.activityBatchDetailWithoutToken(batchId, this.offset, selLang.id).subscribe(res => {
      this.resultfound = true;
      this.initial = false;
      this.isLoadingResults = false;
      this.actDetail = res;
      if (typeof this.actDetail.activity_status != 'undefined' && !this.actDetail.activity_status) {
        this.router.navigate([`/404`]);
      } else {
        if (this.actDetail.localtion_list.length > 0) {
          this.lat = this.actDetail.localtion_list['0'].location.lat;
          this.lng = this.actDetail.localtion_list['0'].location.lng;
          this.origin = { lat: this.actDetail.localtion_list['0'].location.lat, lng: this.actDetail.localtion_list['0'].location.lng };
          this.destination = { lat: this.actDetail.localtion_list[this.actDetail.localtion_list.length - 1].location.lat, lng: this.actDetail.localtion_list[this.actDetail.localtion_list.length - 1].location.lng };
          this.waypointsData = this.actDetail.localtion_list;
          this.waypointsRoadData = this.actDetail.localtion_list_road;
        }
      }
    }, err => {
      this.initial = false;
      this.isLoadingResults = false;
      this.resultfound = false;
    });
  }

  callactivityBatchDetailOne(batchId, lang = '') {
    const language_code = lang != '' ? lang : 'en';
    const selLang = this.languages.find(e => e.language_code.toLowerCase() === language_code.toLowerCase());
    this.apiService.activityBatchDetailWithoutTokenFull(batchId, this.offset, selLang.id).subscribe(res => {
      this.resultfound = true;
      this.isLoadingResults = false;
      this.initial = false;
      this.actDetail = res;
      if (typeof this.actDetail.activity_status != 'undefined' && !this.actDetail.activity_status) {
        this.router.navigate([`/404`]);
      } else {
        if (this.actDetail.localtion_list.length > 0) {
          this.lat = this.actDetail.localtion_list['0'].location.lat;
          this.lng = this.actDetail.localtion_list['0'].location.lng;
          this.origin = { lat: this.actDetail.localtion_list['0'].location.lat, lng: this.actDetail.localtion_list['0'].location.lng };
          this.destination = { lat: this.actDetail.localtion_list[this.actDetail.localtion_list.length - 1].location.lat, lng: this.actDetail.localtion_list[this.actDetail.localtion_list.length - 1].location.lng };
          this.waypointsData = this.actDetail.localtion_list;
          this.waypointsRoadData = this.actDetail.localtion_list_road;
        }
      }
    }, err => {
      this.initial = false;
      this.isLoadingResults = false;
      this.resultfound = false;
      this.logo_url = 'assets/images/logo-blue.png';
      this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor = '#fff';
      this.apiService.changeTitle('Vottun');
      this.document.getElementById('appFavicon').setAttribute('href', 'assets/images/eduvot-favicon.svg');
    });
  }

  convertDateToString(dateToBeConverted) {
    // return moment(dateToBeConverted, 'DD-MM-YYYY HH:mm A').format('DD/MM/YYYY HH:mm A');
  }

  convertDateToStringMM(dateToBeConverted) {
    // return moment(dateToBeConverted, 'DD-MM-YYYY HH:mm A').format('MM/DD/YYYY HH:mm A');
  }

  ngAfterViewInit() {
    // var v = document.createElement('script');
    //     v.type = 'text/javascript';
    //     v.innerHTML = "function googleTranslateElementInit() { new google.translate.TranslateElement({ pageLanguage: 'en' }, 'google_translate_element'); } ";
    //     this.elementRef.nativeElement.appendChild(v);
    //     var s = document.createElement('script');
    //     s.type = 'text/javascript';
    //     s.src = "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
    //     this.elementRef.nativeElement.appendChild(s);
  }

  onActivityDetails(certificateDetails) {
    const dialogRef = this.dialog.open(ActivityDetailsComponent, {
      autoFocus: false,
      data: {
        certData: certificateDetails,
        title: this.actDetail.title
      }
    });
  }

}

