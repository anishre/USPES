import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProgramCalenderPage } from './program-calender';

/**
 * Ng module
 */
@NgModule({
  declarations: [
    ProgramCalenderPage,
  ],
  imports: [
    IonicPageModule.forChild(ProgramCalenderPage),
  ],
})
export class ProgramCalenderPageModule {}
