import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { TabsPage } from '../pages/tabs/tabs';
import { DepartmentsPage } from '../pages/departments/departments';
import { StorePage } from '../pages/store/store';

@NgModule({
  declarations: [
    MyApp, 
    TabsPage,
    DepartmentsPage,
    StorePage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TabsPage,
    DepartmentsPage,
    StorePage
  ],
  providers: [{
    provide: ErrorHandler, useClass: IonicErrorHandler,
  }]
})
export class AppModule { }
