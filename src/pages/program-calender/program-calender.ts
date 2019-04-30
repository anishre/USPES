import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController,LoadingController,ToastController } from 'ionic-angular';
import { EnrollNowPage } from '../enroll-now/enroll-now';
import { PersonalDetailsPage } from '../personal-details/personal-details';
import { CoursesPage } from '../courses/courses';
import { LoginPage } from '../login/login';
import { Http, Headers, RequestOptions } from "@angular/http";
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer/ngx';
import { ChangeProgramPage } from '../change-program/change-program';
import { RecheckPage } from '../recheck/recheck';
import { GraduationApplicationPage } from '../graduation-application/graduation-application';
import * as papa from 'papaparse';
import 'rxjs/add/operator/map';



/**
 * Generated class for the ProgramCalenderPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

/**
 * Ionic page
 */
@IonicPage()
@Component({
  selector: 'page-program-calender',
  templateUrl: 'program-calender.html',
})
export class ProgramCalenderPage {

  csvData: any[] = [];
  headerRow: any[] = [];
  

  /**
   * Creates an instance of program calender page.
   * @param navCtrl 
   * @param loadingCtrl 
   * @param toastCtrl 
   * @param http 
   * @param navParams 
   * @param menuCtrl 
   * @param transfer 
   */
  constructor(public navCtrl: NavController,public loadingCtrl: LoadingController,public toastCtrl: ToastController,  private http: Http, public navParams: NavParams, public menuCtrl: MenuController,private transfer: FileTransfer,) 
  {
    // this.writeCsvData();
   
  }

  /**
   * Csvuploads program calender page
   */
  CSVUpload(){
    window.location.href='http://127.0.0.1:8080/csv/';
  }

  /* writeCsvData() {
    
    
      let data = this.extractData;

      var headers = new Headers();
      headers.append("Accept", 'application/json');
      headers.append('Content-Type', 'application/json' );
      let options = new RequestOptions({ headers: headers });
  
   
      this.http.post('http://127.0.0.1:8080/ionicphp/program_calender.php',data, options)
      .map(res => res.json())
      .subscribe( 
  
      );
}
  

  extractData(res){
    let csvData = res['_body'] || '';
    let parsedData = papa.parse(csvData).data;

    this.headerRow = parsedData[0];
    
    parsedData.splice(0, 1);
    this.csvData = parsedData;

  } */

  
  
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
  /**
   * Logins page
   */
  LoginPage() {
    this.navCtrl.push(LoginPage);
  }
  /**
   * Ions view did enter
   */
  ionViewDidEnter() {
    this.menuCtrl.enable(true, 'filters-5')
  }
  /**
   * Shows filters
   */
  showFilters() {
    this.menuCtrl.open('filters-5');
  }

  /**
   * Hides filters
   */
  hideFilters() {
    this.menuCtrl.close('filters-5');
  }
  /**
   * Ions view did load
   */
  ionViewDidLoad() {
    console.log('ionViewDidLoad CoursesPage');
  }

}