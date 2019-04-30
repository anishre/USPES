import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';
import { Http, Headers, RequestOptions } from "@angular/http";
import { LoadingController } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { ProgramCalenderPage } from '../program-calender/program-calender';
import { ChangeProgramPage } from '../change-program/change-program';
import { RecheckPage } from '../recheck/recheck';
import { GraduationApplicationPage } from '../graduation-application/graduation-application';


/**
 * Generated class for the AdminPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

/**
 * Ionic page
 * Ionic Component
 */
@IonicPage()
@Component({
  selector: 'page-admin',
  templateUrl: 'admin.html',
})
export class AdminPage {
  app: any;
  username: any;

  /**
   * Creates an instance of admin page.
   * @param navCtrl 
   * @param navParams 
   * @param http 
   * @param loading 
   * @param menuCtrl 
   */
  constructor(public navCtrl: NavController, public navParams: NavParams, private http: Http, public loading: LoadingController, public menuCtrl: MenuController) {}
  CSVUpload(){
    window.location.href='http://127.0.0.1:8080/csv/';
  }
  
  /**
   * Ions view did enter
   */
  ionViewDidEnter() {
    this.menuCtrl.enable(true, 'filters-7')
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
   * Logins page
   */
  LoginPage() {
    this.navCtrl.push(LoginPage);
  }

  /**
   * Shows filters
   */
  showFilters() {
    this.menuCtrl.open('filters-7');
  }

  /**
   * Hides filters
   */
  hideFilters() {
    this.menuCtrl.close('filters-7');
  }
  /**
   * Ions view did load
   */
  ionViewDidLoad() {
    console.log('ionViewDidLoad AdminPage');
  }
  /**
   * Backs to welcome
   */
  backToWelcome() {

    const root = this.app.getRootNav();

    root.popToRoot();

  }

  /**
   * Logouts admin page
   */
  logout() {

    //Api Token Logout

 

    localStorage.clear();

    setTimeout(() => this.backToWelcome(), 1000);

    
  
  }

  
}
