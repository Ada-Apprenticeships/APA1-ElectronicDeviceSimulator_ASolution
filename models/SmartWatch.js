
import BatteryPoweredDevice from './BatteryPoweredDevice.js';

export default class SmartWatch extends BatteryPoweredDevice {
    #isHeartRateOn = false;

    constructor(batteryLevel, capacityKWh) {
      super(batteryLevel, capacityKWh);
    }
  
    toggleHeartRate() {
      this.#isHeartRateOn = !this.#isHeartRateOn;
      return this.#isHeartRateOn
        ? "Heart rate monitoring started."
        : "Heart rate monitoring stopped.";
    }
  
    checkSteps() {
      return "Checking steps...";
    }
  }
