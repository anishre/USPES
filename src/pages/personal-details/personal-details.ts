import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';
import { Http, Headers, RequestOptions } from "@angular/http";
import { CoursesPage } from '../courses/courses';
import { EnrollNowPage } from '../enroll-now/enroll-now';
import { LoadingController } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { ProgramCalenderPage } from '../program-calender/program-calender';
import { ChangeProgramPage } from '../change-program/change-program';
import { RecheckPage } from '../recheck/recheck';
import { GraduationApplicationPage } from '../graduation-application/graduation-application';

import 'rxjs/add/operator/map';

/**
 * Generated class for the PersonalDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


/**
 * Ionic page
 */
@IonicPage()
@Component({
  selector: 'page-personal-details',
  templateUrl: 'personal-details.html',
})
export class PersonalDetailsPage {
  csvData: any[] = [];
  headerRow: any[] = [];
  data: any;
  username: any;
  name: any;
  items: any;
  

  /**
   * Creates an instance of personal details page.
   * @param navCtrl 
   * @param http 
   * @param loading 
   * @param navParams 
   * @param menuCtrl 
   */
  constructor(public navCtrl: NavController, private http: Http, public loading: LoadingController, public navParams: NavParams, public menuCtrl: MenuController) {
    
  }
  

  /**
   * Ions view did load
   */
  ionViewDidLoad() {
    console.log('ionViewDidLoad PersonalDetailsPage');
  }
  /**
   * Ions view did enter
   */
  ionViewDidEnter() {
    this.menuCtrl.enable(true, 'filters-4')
  }

  /**
   * Courses page
   */
  CoursesPage() {
    this.navCtrl.push(CoursesPage);
  }
  /**
   * Programs calender page
   */
  ProgramCalenderPage() {
    this.navCtrl.push(ProgramCalenderPage);
  }

  ChangeProgramPage() {
    this.navCtrl.push(ChangeProgramPage);
  }

  RecheckPage() {
    this.navCtrl.push(RecheckPage);
  }
  
  GraduationApplicationPage() {
    this.navCtrl.push(GraduationApplicationPage); 
  }
  /**
   * Enrolls now page
   */
  EnrollNowPage() {
    this.navCtrl.push(EnrollNowPage);
  }

  /**
   * Homes page
   */
  HomePage() {
    this.navCtrl.popToRoot();
  }
  /**
   * Personals details page
   */
  PersonalDetailsPage(){
    this.navCtrl.push(PersonalDetailsPage);
  }
  LoginPage() {
    this.navCtrl.push(LoginPage);
  }

  showFilters() {
    this.menuCtrl.open('filters-4');
  }

  hideFilters() {
    this.menuCtrl.close('filters-4');
  }
  
  ngOnInit() {
    this.username = this.navParams.get('username');

    var headers = new Headers();
    headers.append("Accept", 'application/json');
    headers.append('Content-Type', 'application/json');
    let options = new RequestOptions({
      headers: headers
    });

    let data = {
      username: this.username,
    };

    let loader = this.loading.create({
      content: 'Processing please wait...',
    });

    loader.present().then(() => {
      this.http.post('http://127.0.0.1:8080/ionicphp/users_details.php', data, options)
        .map(res => res.json())
        .subscribe(res => {

          loader.dismiss()
          this.items = res.server_response;

          console.log(this.items);
        });
    });
  }


}
