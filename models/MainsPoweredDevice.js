import Device from './Device.js';

export default class MainsPoweredDevice extends Device {
    #isPluggedIn = false;

    constructor() {
      super();
    }

    boot() {
      if (!this.#isPluggedIn) {
        return "Cannot boot - device is not plugged in.";
      }
      return super.boot();
    }

    display() {
      if (!this.#isPluggedIn) {
        return "Cannot display - device is not plugged in.";
      }
      return super.display();
    }

    get isPluggedIn() {
      return this.#isPluggedIn;
    }

    set isPluggedIn(value) {
      this.#isPluggedIn = value;
    }

    plugIn() {
      this.isPluggedIn = true;
      return "Device plugged in.";
    }

    unplug() {
      this.isPluggedIn = false;
      return "Device unplugged.";
    }
  }