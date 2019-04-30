import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpClientModule } from '@angular/common/http'; 
import { HttpModule } from '@angular/http';
import { IonicStorageModule,Storage } from '@ionic/storage';


import { MyApp } from './app.component';
import { LoginPage } from '../pages/login/login';
import { RegisterPage } from '../pages/register/register';
import { CoursesPage } from '../pages/courses/courses';
import { HomePage } from '../pages/home/home';
import { EnrollNowPage } from '../pages/enroll-now/enroll-now';
import { PersonalDetailsPage } from '../pages/personal-details/personal-details';
import { MyProgramPage } from '../pages/my-program/my-program';
import { AdminPage } from '../pages/admin/admin';
import { ChangeProgramPage } from '../pages/change-program/change-program';
import { RecheckPage } from '../pages/recheck/recheck';
import { GraduationApplicationPage } from '../pages/graduation-application/graduation-application';
import { TabsPage } from '../pages/tabs/tabs';
import { ProgramCalenderPage } from '../pages/program-calender/program-calender';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer/ngx';
import { AuthServiceProvider } from '../providers/auth-service/auth-service';

@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    RegisterPage,
    HomePage,
    TabsPage,
    CoursesPage,
    EnrollNowPage,
    PersonalDetailsPage,
    ProgramCalenderPage,
    MyProgramPage,
    AdminPage,
    ChangeProgramPage,
    RecheckPage,
    GraduationApplicationPage,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    RegisterPage,
    HomePage,
    TabsPage,
    CoursesPage,
    EnrollNowPage,
    PersonalDetailsPage,
    ProgramCalenderPage,
    MyProgramPage,
    AdminPage,
    ChangeProgramPage,
    RecheckPage,
    GraduationApplicationPage
  ],
  providers: [
    StatusBar,FileTransfer,
    SplashScreen,AuthServiceProvider,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthServiceProvider
  ]
})
export class AppModule {}
