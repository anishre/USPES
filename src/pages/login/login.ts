import { Component,ViewChild } from '@angular/core';
import { NavController,AlertController } from 'ionic-angular';
import { RegisterPage } from '../register/register';
import { Http, Headers, RequestOptions } from "@angular/http";
import { HomePage } from './../home/home';
import { AdminPage } from '../admin/admin';
import { LoadingController } from 'ionic-angular';
import 'rxjs/add/operator/map';

/**
 * Component
 */
@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  @ViewChild("username") username;
  @ViewChild("password") password;
  @ViewChild("role") role;
  data: string;
  items: any;

  /**
   * Creates an instance of login page.
   * @param navCtrl 
   * @param alertCtrl 
   * @param http 
   * @param loading 
   */
  constructor( public navCtrl: NavController, public alertCtrl: AlertController,
    private http: Http, public loading: LoadingController) {

  }
 
 
  /**
   * Signs up
   */
  signUp() {
    this.navCtrl.push(RegisterPage);
  }
 

 
  /**
   * Signs in
   */
  signIn() {

    //// check to confirm the username and password fields are filled
    
    if (this.username.value == "") {

      let alert = this.alertCtrl.create({

        title: "ATTENTION",
        subTitle: "Username field is empty",
        buttons: ['OK']
      });

      alert.present();
    } else

    if (this.password.value == "") {

      let alert = this.alertCtrl.create({

        title: "ATTENTION",
        subTitle: "Password field is empty",
        buttons: ['OK']
      });

      alert.present();

    } else
     {

      var headers = new Headers();
      headers.append("Accept", 'application/json');
      headers.append('Content-Type', 'application/json');
      let options = new RequestOptions({
        headers: headers
      });

      let data = {
        username: this.username.value,
        password: this.password.value,
        
      };

      let loader = this.loading.create({
        content: 'Processing please wait...',
      });

      loader.present().then(() => {

        this.http.post('http://localhost/ionicphp/login.php', data, options)
          .map(res => res.json())
          .subscribe(res => {
            console.log(res)
            loader.dismiss()
            if (res == "Your Login success") {

              let alert = this.alertCtrl.create({
                title: "CONGRATS",
                subTitle: (res),
                buttons: ['OK']
              });

              alert.present();
              this.navCtrl.setRoot(HomePage,data);
            
            } 
            
            else if (res == "Your Login success as Admin") {

              let alert = this.alertCtrl.create({
                title: "CONGRATS",
                subTitle: (res),
                buttons: ['OK']
              });

              alert.present();
              this.navCtrl.setRoot(AdminPage,data);
            
            }


            else if (res == "Your Account is on hold") {
              let alert = this.alertCtrl.create({
                title: "ERROR",
                subTitle: "Your Account is on Hold",
                buttons: ['OK']
              });

              alert.present();
            }

            else {
              let alert = this.alertCtrl.create({
                title: "ERROR",
                subTitle: "Your Login Username or Password is invalid",
                buttons: ['OK']
              });

              alert.present();
            }
          }
        );
      });
    }

  }

}
