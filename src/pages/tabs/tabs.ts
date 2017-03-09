import { Component } from '@angular/core';
import { DepartmentsPage } from '../departments/departments';
import { StorePage } from "../store/store";

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: any = DepartmentsPage;
  tab2Root: any = StorePage;

  constructor() {}
}
