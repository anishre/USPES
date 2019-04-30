import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EnrollNowPage } from './enroll-now';

/**
 * Ng module
 */
@NgModule({
  declarations: [
    EnrollNowPage,
  ],
  imports: [
    IonicPageModule.forChild(EnrollNowPage),
  ],
})
export class EnrollNowPageModule {}
//Implements EnrollPage Module