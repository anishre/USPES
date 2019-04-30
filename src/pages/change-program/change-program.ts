import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController, AlertController } from 'ionic-angular';
import { Http, Headers, RequestOptions } from "@angular/http";
import { LoadingController } from 'ionic-angular';
import { CoursesPage } from '../courses/courses';
import { EnrollNowPage } from '../enroll-now/enroll-now';
import { PersonalDetailsPage } from '../personal-details/personal-details';
import { LoginPage } from '../login/login';
import { ProgramCalenderPage } from '../program-calender/program-calender';
import { MyProgramPage } from '../my-program/my-program'
import { RecheckPage } from '../recheck/recheck';
import 'rxjs/add/operator/map';

/**
 * Generated class for the GraduationApplicationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'change-program-application',
  templateUrl: 'change-program.html',
})
export class ChangeProgramPage {
  username: any;

  @ViewChild("new_program") new_program;

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController, private http: Http, public loading: LoadingController, public menuCtrl: MenuController) {}
  
  /**
   * Ions view did enter
   */
  ionViewDidEnter() {
    this.menuCtrl.enable(true, 'filters-8')
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
    this.menuCtrl.open('filters-8');
  }

  /**
   * Hides filters
   */
  hideFilters() {
    this.menuCtrl.close('filters-8');
  }
  /**
   * Ions view did load
   */
  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }
  Submit(){
    //// check to confirm the username, email, telephone and password fields are filled
   
     if(this.new_program.value=="" ){
   
    let alert = this.alertCtrl.create({
   
    title:"ATTENTION",
    subTitle:"Application name field is empty",
    buttons: ['OK']
    });
   
    alert.present();
     } 
    else 
    {
   var headers = new Headers();
       headers.append("Accept", 'application/json');
       headers.append('Content-Type', 'application/json' );
       let options = new RequestOptions({ headers: headers });
   
     let data = {
        username: this.navParams.get('username'),
        new_program: this.new_program.value,
         };
   
   
    let loader = this.loading.create({
       content: 'Processing please wait...',
     });
   
    loader.present().then(() => {
   this.http.post('http://127.0.0.1/ionicphp/course_change_insert.php',data, options)
   .map(res => res.json())
   .subscribe(res => {
   
    loader.dismiss()
   if(res=="Change Successfull"){
     let alert = this.alertCtrl.create({
       title:"CONGRATS",
       subTitle:(res),
       buttons: ['OK']
       });
      
       alert.present();
    this.navCtrl.push(ChangeProgramPage);
   
   }else
   {
    let alert = this.alertCtrl.create({
    title:"ERROR",
    subTitle:(res),
    buttons: ['OK']
    });
   
    alert.present();
     } 
   });
   });
    }
  }
}
