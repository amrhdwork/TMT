import { Component } from '@angular/core';

import { appsPage } from '../apps/apps';
import { supportPage } from '../support/support';
import { HomePage } from '../home/home';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = appsPage;
  tab3Root = supportPage;

  constructor() {

  }
}
