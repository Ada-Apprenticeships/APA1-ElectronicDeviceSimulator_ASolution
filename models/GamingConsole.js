
import MainsPoweredDevice from './MainsPoweredDevice.js';

export default class GamingConsole extends MainsPoweredDevice { 
    #isGameRunning = false;
    
    constructor() {
      super();
    }

    get isGameRunning() {
        return this.#isGameRunning;
    }

    set isGameRunning(value) {
        this.#isGameRunning = value;
    }
  
    loadGame(gameName) {
      this.isGameRunning = true;
      return `${gameName} loaded.`;
    }
  
    exitGame() {
      this.isGameRunning = false;
      return "Exiting game.";
    }
  
    sleep() {
      return "Console is sleeping.";
    }
  
    wake() {
      return "Console is awake.";
    }
}
