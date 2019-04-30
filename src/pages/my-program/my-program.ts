import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';
import { Http, Headers, RequestOptions } from "@angular/http";
import { LoadingController } from 'ionic-angular';
import { CoursesPage } from '../courses/courses';
import { EnrollNowPage } from '../enroll-now/enroll-now';
import { PersonalDetailsPage } from '../personal-details/personal-details';
import { LoginPage } from '../login/login';
import { ProgramCalenderPage } from '../program-calender/program-calender';
import { ChangeProgramPage } from '../change-program/change-program';
import { RecheckPage } from '../recheck/recheck';
import { GraduationApplicationPage } from '../graduation-application/graduation-application';
import { Chart } from 'chart.js';

/**
 * Generated class for the MyProgramPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

/**
 * Ionic page
 */
@IonicPage()
@Component({
  selector: 'page-my-program',
  templateUrl: 'my-program.html',
})
export class MyProgramPage {
  @ViewChild('doughnutCanvas') doughnutCanvas;
  doughnutChart: any;
  username: any;
  items: any;
  var_x: any;
  var_y: any;
  var_z: any;

  /**
   * Creates an instance of my program page.
   * @param navCtrl 
   * @param navParams 
   * @param http 
   * @param loading 
   * @param menuCtrl 
   */
  constructor(public navCtrl: NavController, public navParams: NavParams, private http: Http, public loading: LoadingController, public menuCtrl: MenuController) {}
  ionViewDidEnter() {
    this.menuCtrl.enable(true, 'filters-6')
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
  /**
   * program page
   */
  MyProgramPage() {
    this.navCtrl.push(MyProgramPage);
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
    this.menuCtrl.open('filters-6');
  }

  /**
   * Hides filters
   */
  hideFilters() {
    this.menuCtrl.close('filters-6');
  }
    

  /**
   * Ions view did load
   */
  ionViewDidLoad() {
    console.log('ionViewDidLoad MyProgramPage');
    var headers = new Headers();
      headers.append('Accept', 'application/json');
      headers.append('Content-Type', 'application/json' );
      let options = new RequestOptions({ headers: headers });

    let data = 
    {
        username: this.username,
    };
    
    let loader = this.loading.create({

      content: 'Processing please wait…',

    });
    

    loader.present().then(() => {

    this.http.post('http://127.0.0.1:8080/ionicphp/fetch_data_programs.php',data,options)

    .map(res => res.json())

    .subscribe(res => {

    loader.dismiss()

    this.items=res.server_response;

    this.var_x = this.items.map(item => item.course_code);

    this.var_y= this.items.map(item => item.course_code);
    this.var_z= this.items.map(item => item.prereq);
    this.doughnutChart = new Chart(this.doughnutCanvas.nativeElement, {

      type: 'doughnut',
      data: {
          labels:this.var_x, 
          datasets: [{
              data: [10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10],
              backgroundColor: [
                  'rgb(255,0,0)',
                  'rgb(255,0,0)',
                  'rgb(255,0,0)',
                  'rgb(255,0,0)',
                  'rgb(255,0,0)',
                  'rgb(255,0,0)',
                  'rgb(255,0,0)',
                  'rgb(255,0,0)',
                  'rgb(255,0,0)',
                  "rgb(255,0,0)",
                  'rgb(0,0,255)',
                  'rgb(0,0,255)',
                  'rgb(0,0,255)',
                  'rgb(0,0,255)',
                  'rgb(0,0,255)',
                  'rgb(0,0,255)',
                  'rgb(0,0,255)',
                  'rgb(0,0,255)',
                  'rgb(255,165,0)',
                  'rgb(255,165,0)',
                  'rgb(255,165,0)',
                  'rgb(255,165,0)',
                  'rgb(255,165,0)',
                  'rgb(255,165,0)',
                  'rgb(255,165,0)',
                  'rgba(0,100,0)',
                  'rgba(0,100,0)',
                  'rgba(0,100,0)',
              ],
              hoverBackgroundColor: [
                  "rgb(255,0,0)",
                  "rgb(255,0,0)",
                  "rgb(255,0,0)",
                  "rgb(255,0,0)",
                  "rgb(255,0,0)",
                  "rgb(255,0,0)",
                  "rgb(255,0,0)",
                  "rgb(255,0,0)",
                  "rgb(255,0,0)",
                  "rgb(255,0,0)",
                  "#36A2EB",
                  "#36A2EB",
                  "#36A2EB",
                  "#36A2EB",
                  "#36A2EB",
                  "#36A2EB",
                  "#36A2EB",
                  "#36A2EB",
                  "rgb(255,165,0)",
                  "rgb(255,165,0)",
                  "rgb(255,165,0)",
                  "rgb(255,165,0)",
                  "rgb(255,165,0)",
                  "rgb(255,165,0)",
                  "rgb(255,165,0)",
                  "rgba(0,100,0)",
                  "rgb(0,100,0)",
                  "rgba(0,100,0)",
              ]
          }]
      }
      

    });
  });
});
       
}
}
