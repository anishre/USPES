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
import { RecheckPage } from '../recheck/recheck';
import { GraduationApplicationPage } from '../graduation-application/graduation-application';
import 'rxjs/add/operator/map';
/**
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

/**
 * Ionic page
 */
@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {
  data: any;
  app: any;
  username: any;
  password: any;
  items: any;


  /**
   * Creates an instance of home page.
   * @param navCtrl 
   * @param navParams 
   * @param http 
   * @param loading 
   * @param menuCtrl 
   */
  constructor(public navCtrl: NavController, public navParams: NavParams, private http: Http, public loading: LoadingController, public menuCtrl: MenuController) {}
  
  /**
   * Ions view did enter
   */
  ionViewDidEnter() {
    this.menuCtrl.enable(true, 'filters-1')
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
    this.menuCtrl.open('filters-1');
  }

  /**
   * Hides filters
   */
  hideFilters() {
    this.menuCtrl.close('filters-1');
  }
  /**
   * Ions view did load
   */
  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }
  /**
   * Backs to welcome
   */
  backToWelcome() {

    const root = this.app.getRootNav();

    root.popToRoot();

  }

 

  /**
   * Logouts home page
   */
  logout() {

    //Api Token Logout

 

    localStorage.clear();

    setTimeout(() => this.backToWelcome(), 1000);

  }
  /**
   * on init
   */
  ngOnInit() {
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
      this.http.post('http://127.0.0.1/ionicphp/fetch_data.php', data, options)
        .map(res => res.json())
        .subscribe(res => {

          loader.dismiss()
          this.items = res.server_response;
          console.log(this.items);
        });
    });
    
  }
}
