import { Component } from '@angular/core';
import { LocalServiceCounter } from '../services/local-counter.service';
import { AppCounterService } from '../services/app-counter.service';

@Component({
  selector: 'app-local',
  templateUrl: './app-local.component.html',
  styleUrls: ['./app-local.component.scss'],
  //если мы сервисы регистрируем в отдельные providers Для каждого компонента, то эти данные будут меняться
  //именно тут. Это что-то вроде заменитель редакса
  providers: [LocalServiceCounter],
})
export class LocalComponent {
  title = 'Local Components';

  constructor(
    protected localService: LocalServiceCounter,
    protected appService: AppCounterService
  ) {}
}
