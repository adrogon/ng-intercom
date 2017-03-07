import { Injectable } from '@angular/core';

// Abstract Class to Catch implementations
export class IntercomEnvironment {
  init(data: object): any {
    throw new Error('Error init IntercomEnvironment')
  }
  boot(data: object): any {
    throw new Error('Error boot IntercomEnvironment')
  }
  update(data: object): any {
    throw new Error('Error update IntercomEnvironment')
  }
  shutdown() {
    throw new Error('Error shutdown IntercomEnvironment')
  }
}
// Intercom -> IntercomEnvironment
@Injectable()
export class Intercom {
  constructor(public intercom: IntercomEnvironment) { }

  init(data: object) {
    return this.intercom.init(data);
  }
  boot(data: object) {
    return this.intercom.boot(data);
  }
  update(data: object) {
    return this.intercom.update(data);
  }
  shutdown() {
    return this.intercom.shutdown();
  }
}