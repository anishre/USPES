import { Component } from '@angular/core';
import { IonicPage, NavController ,AlertController, NavParams, MenuController } from 'ionic-angular';
import {Http, Headers, RequestOptions}  from "@angular/http";

import { EnrollNowPage } from '../enroll-now/enroll-now';
import { PersonalDetailsPage } from '../personal-details/personal-details';
import { ChangeProgramPage } from '../change-program/change-program';
import { RecheckPage } from '../recheck/recheck';

import { GraduationApplicationPage } from '../graduation-application/graduation-application';

import { LoginPage } from '../login/login';
import { LoadingController } from 'ionic-angular';
import 'rxjs/add/operator/map';
import { HomePage } from '../home/home';

/**
 * Generated class for the CoursesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


/**
 * Ionic page
 */
@IonicPage()
@Component({
  selector: 'page-courses',
  templateUrl: 'courses.html',
})
export class CoursesPage {
items: any;
username:any;
program_name:any;


  /**
   * Creates an instance of courses page.
   * @param navCtrl 
   * @param alertCtrl 
   * @param http 
   * @param loading 
   * @param navParams 
   * @param menuCtrl 
   */
  constructor(public navCtrl: NavController,public alertCtrl: AlertController, public http:Http, public loading: LoadingController, public navParams: NavParams, public menuCtrl: MenuController) {
  this.enrollement();
  }
  /**
   * Courses page
   */
  CoursesPage() {
    this.navCtrl.push(CoursesPage);
  }

  /**
   * Enrolls now page
   */
  EnrollNowPage() {
    this.navCtrl.push(EnrollNowPage);
  }

  ChangeProgramPage() {
    this.navCtrl.push(ChangeProgramPage);
  }
  GraduationApplicationPage() {
    let data = {
      username: this.username
    }
    this.navCtrl.push(GraduationApplicationPage,data); 
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
    this.menuCtrl.enable(true, 'filters-4')
  }
  /**
   * Shows filters
   */
  showFilters() {
    this.menuCtrl.open('filters-4');
  }

  /**
   * Hides filters
   */
  hideFilters() {
    this.menuCtrl.close('filters-4');
  }
  /**
   * Ions view did load
   */
  ionViewDidLoad() {
    console.log('ionViewDidLoad CoursesPage');
  }


  RecheckPage() {
     this.navCtrl.push(RecheckPage);
   }
  /**
   * Enrollements courses page
   */
  //Course audit data from database is pulled using this function
  enrollement(){
    this.username = this.navParams.get('username');
    this.program_name = this.navParams.get('program_name');
    var headers = new Headers();
    headers.append("Accept", 'application/json');
    headers.append('Content-Type', 'application/json');
    let options = new RequestOptions({
      headers: headers
    });
    //assigns variables and pushes data using studentID variabl through API
    let data = {
    username: this.username,
    program_name: this.program_name
 
    };
    let loader = this.loading.create({
      content: 'Processing please wait...',
    });
    loader.present().then(() => { 
      this.http.post('http://127.0.0.1/ionicphp/student_audit.php', data, options)//API call responsible for query
        .map(res => res.json())
        .subscribe(res => {
          
          loader.dismiss()
          this.items = res.server_response;//assigns server response to items
          console.log(this.items); 
        });
    });
  }
  public Recheck_grade(course,grade){
    //assigns data to TS variables to enable student to register  
     this.username = this.navParams.get('username');
     var headers = new Headers();
     headers.append("Accept", 'application/json');
     headers.append('Content-Type', 'application/json');
     let options = new RequestOptions({headers: headers});
    

     let data = {
       username: this.username,
       course,
       grade
     }
 
     let loader = this.loading.create({
      content: 'Processing please wait...',
    });

    loader.present().then(() => {
      this.http.post('http://127.0.0.1/ionicphp/recheck_grade.php', data, options)//API call to register in courses
      .map(res => res.json())
      .subscribe(res => {
        
        loader.dismiss()
          if(res=="Note:$50 will charged for grade recheck"){
            let alert = this.alertCtrl.create({
              title:"",
              subTitle:(res),
              buttons: ['OK']
              });
              alert.present();
        //this.navCtrl.push(CoursesPage,data);
        }else
        {
         let alert = this.alertCtrl.create({
         title:"",
         subTitle:(res),
         buttons: ['OK']
         });
        
         alert.present();
          }       
        });
    });
  }
     
}