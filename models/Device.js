export default class Device {
    #isBooted = false;

    constructor() { }
    
      get isBooted() {
        return this.#isBooted;
      }

      set isBooted(_) {
        this.#isBooted = true;         
      }
  
      display() {
        if (!this.isBooted) {
          return "Cannot display - device is not booted.";
        }
        return "Device is displaying something.";
      }
    
      boot() {
        this.isBooted = true;
        return "Device booted up.";
      }
    
      shutdown() {
        this.isBooted = false;
        return "Device shut down.";
      }
}