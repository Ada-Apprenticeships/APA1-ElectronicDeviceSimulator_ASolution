import Device from "./Device.js";

export default class MainsPoweredDevice extends Device {
    #isPluggedIn;
    
    constructor() {
      super();
      this.#isPluggedIn = false;
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