import { Injectable } from '@angular/core';
import { LogService } from './log.service';

//если есть такой декоратор с его объектом, со
//свойством providedIn: 'root', то
//ангуляр сам автоматически регистрирует наш сервис в app.module.ts
@Injectable({ providedIn: 'root' })
export class AppCounterService {
  counter: number = 0;

  constructor(private logServise: LogService) {}
  increase() {
    this.counter++;
    this.logServise.log('This is AppCounterService increase');
  }

  decrease() {
    this.counter--;
    this.logServise.log('This is AppCounterService decrease');
  }
}
