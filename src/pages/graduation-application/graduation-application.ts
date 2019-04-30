import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController, AlertController } from 'ionic-angular';
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
import 'rxjs/add/operator/map';

/**
 * Generated class for the GraduationApplicationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-graduation-application',
  templateUrl: 'graduation-application.html',
})
export class GraduationApplicationPage {
  username: any;
  items:any;
  no:any;


  @ViewChild("new_grade") new_grade;

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController, private http: Http, public loading: LoadingController, public menuCtrl: MenuController) {}
  
  /**
   * Ions view did enter
   */
  ionViewDidEnter() {
    this.menuCtrl.enable(true, 'filters-8')
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
    this.navCtrl.push(GraduationApplicationPage); 
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
  get_recheck(){
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
      this.http.post('http://127.0.0.1/ionicphp/admin_recheck.php', data, options)
        .map(res => res.json())
        .subscribe(res => {
          
          loader.dismiss()
          this.items = res.server_response;
          console.log(this.items); 
        });
    });
  }
 public Approved(course_code,username,no){{
 
  (this.items).splice(no, 1);

   var headers = new Headers();
       headers.append("Accept", 'application/json');
       headers.append('Content-Type', 'application/json' );
       let options = new RequestOptions({ headers: headers });
   
     let data = {
      new_grade: this.new_grade.value,
      username,
      course_code
     };
   
   
    let loader = this.loading.create({
       content: 'Processing please wait...',
     });
   
    loader.present().then(() => {
   this.http.post('http://127.0.0.1/ionicphp/grade_update.php',data, options)
   .map(res => res.json())
   .subscribe(res => {
   
    loader.dismiss()
   if(res=="Updated successfull"){
     let alert = this.alertCtrl.create({
       title:"CONGRATS",
       subTitle:(res),
       buttons: ['OK']
       });
      
       alert.present();
    //this.navCtrl.push(RecheckPage);
   
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
  public Disapproved(course_code,username,grade,no){{
    (this.items).splice(no, 1);
    var headers = new Headers();
        headers.append("Accept", 'application/json');
        headers.append('Content-Type', 'application/json' );
        let options = new RequestOptions({ headers: headers });
    
      let data = {
       grade,
       username,
       course_code
      };
    
    
     let loader = this.loading.create({
        content: 'Processing please wait...',
      });
    
     loader.present().then(() => {
    this.http.post('http://127.0.0.1/ionicphp/disaprove_grade.php',data, options)
    .map(res => res.json())
    .subscribe(res => {
    
     loader.dismiss()
    if(res=="Updated successfull"){
      let alert = this.alertCtrl.create({
        title:"CONGRATS",
        subTitle:(res),
        buttons: ['OK']
        });
       
        alert.present();
     //this.navCtrl.push(RecheckPage);
    
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
