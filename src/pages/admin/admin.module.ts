import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AdminPage } from './admin';

/**
 * Ng module
 */
@NgModule({
  declarations: [
    AdminPage,
  ],
  imports: [
    IonicPageModule.forChild(AdminPage),
  ],
})
export class AdminPageModule {}

//declares and defines the AdminPadeModule