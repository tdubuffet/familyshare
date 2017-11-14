import { Component } from '@angular/core';

import { MoneyPage } from '../money/money';

@Component({
  templateUrl: '../../app/tabs.html'
})
export class Tabs {
  rootPage:any = MoneyPage;

  constructor() {

  }
}

