import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class LogService {
  log(text: string) {
    console.log(`Logging: ${text}`);
  }
}
