import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CoursesPage } from './courses';

/**
 * Ng module
 */
@NgModule({
  declarations: [
    CoursesPage,
  ],
  imports: [
    IonicPageModule.forChild(CoursesPage),
  ],
})
export class CoursesPageModule {}

//Implements CoursesPage Module