import { Component } from '@angular/core';
import { AppCounterService } from './services/app-counter.service';
import { LocalServiceCounter } from './services/local-counter.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [LocalServiceCounter],
})
export class AppComponent {
  title = 'Angular Services';

  constructor(
    public counterService: AppCounterService,
    public localCounterService: LocalServiceCounter
  ) {}
}
