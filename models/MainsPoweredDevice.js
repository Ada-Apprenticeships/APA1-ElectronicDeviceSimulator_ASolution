import Device from './Device.js';

export default class MainsPoweredDevice extends Device {
    #isPluggedIn = false;
    
    constructor() {
      super();
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
