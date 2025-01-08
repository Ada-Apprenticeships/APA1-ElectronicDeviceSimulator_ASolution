export default class Device {
    #isBooted = false;

    constructor() { }
    
      get isBooted() {
        return this.#isBooted;
      }
    
      display() {
        return "Device is displaying something.";
      }
    
      boot() {
        this.#isBooted = true;
        return "Device booted up.";
      }
    
      shutdown() {
        this.#isBooted = false;
        return "Device shut down.";
      }
}