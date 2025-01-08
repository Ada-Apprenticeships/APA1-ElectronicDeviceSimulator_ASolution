import Device from './Device.js';

export default class MainsPoweredDevice extends Device {
    #isPluggedIn = false;
    
    constructor() {
      super();
    }

    get isPluggedIn() {
      return this.#isPluggedIn;
    }

    set isPluggedIn(_) {
      this.#isPluggedIn = true;
    }
  
    display() {
      if (!this.isPluggedIn) {
        return "Cannot display - device is not plugged in.";
      }
      return super.display();
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
