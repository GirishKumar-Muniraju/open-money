import { Component } from '@angular/core';

interface Month {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  autoTicks = false;
  disabled = false;
  invert = false;
  max = 100;
  min = 0;
  showTicks = false;
  step = 1;
  thumbLabel = false;
  monthlyIncome = 0;
  monthlyExpense = 0;
  vertical = false;
  tickInterval = 1;
  title = 'open-source';

  months: Month[] = [
    { value: '0', viewValue: '6 Months' },
    { value: '1', viewValue: '9 Months' },
    { value: '2', viewValue: '1 Year' },
  ];

  getSliderTickInterval(): number | 'auto' {
    if (this.showTicks) {
      return this.autoTicks ? 'auto' : this.tickInterval;
    }

    return 0;
  }
}
