import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { TabsPage } from '../pages/tabs/tabs';
import { DepartmentsPage } from '../pages/departments/departments';
import { StorePage } from '../pages/store/store';
import { ProductlistPage } from '../pages/productlist/productlist';
import {SublistPage} from '../pages/sublist/sublist';

@NgModule({
  declarations: [
    MyApp, 
    TabsPage,
    DepartmentsPage,
    StorePage,
    ProductlistPage,
    SublistPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TabsPage,
    DepartmentsPage,
    StorePage,
    ProductlistPage,
    SublistPage
  ],
  providers: [{
    provide: ErrorHandler, useClass: IonicErrorHandler,
  }]
})
export class AppModule { }


