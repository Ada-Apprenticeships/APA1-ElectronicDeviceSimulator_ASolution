import Device from "./Device.js";

export default class BatteryPoweredDevice extends Device {
    #batteryLevel;
    #capacityKWh;

    constructor(batteryLevel, capacityKWh) {
      super();
      this.#batteryLevel = batteryLevel;
      this.#capacityKWh = capacityKWh;
    }
  
    get batteryLevel() {
      return this.#batteryLevel;
    }
  
    get capacityKWh() {
      return this.#capacityKWh;
    }
  
    charge() {
      this.#batteryLevel = this.#capacityKWh;
      return "Device fully charged.";
    }
  
    replaceBattery(newCapacityKWh) {
      this.#capacityKWh = newCapacityKWh;
      this.#batteryLevel = newCapacityKWh;
      return "Battery replaced with a new one.";
    }
  }