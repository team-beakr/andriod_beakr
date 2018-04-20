import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { InboxItemPage } from './inbox-item';

@NgModule({
  declarations: [
    InboxItemPage,
  ],
  imports: [
    IonicPageModule.forChild(InboxItemPage),
  ],
})
export class InboxItemPageModule {}
