import { Injectable } from '@angular/core';

@Injectable()
export class GuidService {

  constructor() { }

  private s4 = (): string => {
    return Math.floor((1 + Math.random()) * 0x10000)
          .toString(16)
          .substring(1);
  }

  public generateGuid = (): AAGUID => {
    return this.s4() + this.s4() + '-' + this.s4() + '-' + this.s4() + '-' +
      this.s4() + '-' + this.s4() + this.s4() + this.s4();
  }

}
