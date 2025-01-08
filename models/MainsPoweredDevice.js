
import Device from './Device.js';

export default class MainsPoweredDevice extends Device {
    #isPluggedIn;
    
    constructor() {
      super();
      this.#isPluggedIn = false;
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
  
    plugIn() {
      this.#isPluggedIn = true;
      return "Device plugged in.";
    }
  
    unplug() {
      this.#isPluggedIn = false;
      return "Device unplugged.";
    }
  }
