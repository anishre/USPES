import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';
import { Http, Headers, RequestOptions } from "@angular/http";
import { LoadingController } from 'ionic-angular';
import { CoursesPage } from '../courses/courses';
import { EnrollNowPage } from '../enroll-now/enroll-now';
import { PersonalDetailsPage } from '../personal-details/personal-details';
import { LoginPage } from '../login/login';
import { ProgramCalenderPage } from '../program-calender/program-calender';
import { MyProgramPage } from '../my-program/my-program';
import { ChangeProgramPage } from '../change-program/change-program';
import { GraduationApplicationPage } from '../graduation-application/graduation-application';

/**
 * Generated class for the RecheckPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-recheck',
  templateUrl: 'recheck.html',
})
export class RecheckPage {
  username: any;
  items: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private http: Http, public loading: LoadingController, public menuCtrl: MenuController) {}
  ionViewDidEnter() {
    this.menuCtrl.enable(true, 'filters-10')
    this.get_recheck();
  }

  /**
   * Courses page
   */
  CoursesPage() {
    let data = {
      username: this.username
    }
    this.navCtrl.push(CoursesPage,data);
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
    let data = {
      username: this.username
    } 
    this.navCtrl.push(GraduationApplicationPage,data); 
  }
  /**
   * program page
   */
  MyProgramPage() { 
    let data = {
      username: this.username
    }
    this.navCtrl.push(MyProgramPage,data);
  }
  /**
   * Enrolls now page
   */
  EnrollNowPage() {
    let data = {
      username: this.username
    }
    this.navCtrl.push(EnrollNowPage,data);
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
    let data = {
      username: this.username
    }
    this.navCtrl.push(PersonalDetailsPage,data);
  }
  /**
   * Logins page
   */
  LoginPage() {
    this.navCtrl.push(LoginPage);
  }

  /**
   * Shows filters
   */
  showFilters() {
    this.menuCtrl.open('filters-10');
  }

  /**
   * Hides filters
   */
  hideFilters() {
    this.menuCtrl.close('filters-10');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RecheckPage');
  }
  get_recheck(){
    this.username = this.navParams.get('username');
    var headers = new Headers();
    headers.append("Accept", 'application/json');
    headers.append('Content-Type', 'application/json');
    let options = new RequestOptions({
      headers: headers
    });

    let data = {
    username: this.username
    };
    let loader = this.loading.create({
      content: 'Processing please wait...',
    });
    loader.present().then(() => { 
      this.http.post('http://127.0.0.1:8080/ionicphp/user_recheck.php', data, options)
        .map(res => res.json())
        .subscribe(res => {
          
          loader.dismiss()
          this.items = res.server_response;
          console.log(this.items); 
        });
    });
  }

  
}
