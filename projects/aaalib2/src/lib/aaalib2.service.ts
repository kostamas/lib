import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Aaalib2Service {

  constructor() {
  }

  public static testFunc() {
    const y = [];
    y.push(3);
    return {t: y};
  }
}
