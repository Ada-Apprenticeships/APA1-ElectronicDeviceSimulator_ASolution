import BatteryPoweredDevice  from "./BatteryPoweredDevice.js";

export default class SmartWatch extends BatteryPoweredDevice {
    constructor(batteryLevel, capacityKWh) {
      super(batteryLevel, capacityKWh);
      this.isHeartRateOn = false;
    }
  
    toggleHeartRate() {
      this.isHeartRateOn = !this.isHeartRateOn;
      return this.isHeartRateOn
        ? "Heart rate monitoring started."
        : "Heart rate monitoring stopped.";
    }
  
    checkSteps() {
      return "Checking steps..."; // This would need further implementation to actually track steps
    }
  }
  