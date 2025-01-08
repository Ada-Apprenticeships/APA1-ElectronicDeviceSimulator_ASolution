import BatteryPoweredDevice from './BatteryPoweredDevice.js';

export default class Phone extends BatteryPoweredDevice {
    constructor(batteryLevel, capacityKWh) {
      super(batteryLevel, capacityKWh);
    }
  
    call(number) {
      return `Calling ${number}...`;
    }
}
  
  