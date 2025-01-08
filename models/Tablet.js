import Phone from './Phone.js';

export default class Tablet extends Phone {
  #isExpanded = false;

  constructor(batteryLevel, capacityKWh) {
    super(batteryLevel, capacityKWh);
    
  }

  get isExpanded(){
    return this.#isExpanded;
  }

  expandScreen() {
    this.isExpanded = !this.isExpanded;
    return this.isExpanded ? "Screen expanded." : "Screen collapsed.";
  }
}