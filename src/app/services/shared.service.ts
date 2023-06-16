import { Injectable } from '@angular/core';

@Injectable()
export class SharedService {
  private logueado: boolean = false;

  setVariable(value: boolean) {
    this.logueado = value;
  }

  getVariable(): boolean {
    return this.logueado;
  }
}
