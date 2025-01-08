import MainsPoweredDevice from "./MainsPoweredDevice.js";

export default class SmartTV extends MainsPoweredDevice {
    #currentChannel = 1;
    
    constructor() {
      super();  
    }

    get currentChannel(){
        return this.#currentChannel;
    }
  
    set currentChannel(channel) {
      this.#currentChannel = channel;
    }
  
    sleep() {
      return "TV is sleeping.";
    }
  
    wake() {
      return "TV is awake.";
    }
  }