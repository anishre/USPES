import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MyProgramPage } from './my-program';

/**
 * Ng module
 */
@NgModule({
  declarations: [
    MyProgramPage,
  ],
  imports: [
    IonicPageModule.forChild(MyProgramPage),
  ],
})
export class MyProgramPageModule {}
