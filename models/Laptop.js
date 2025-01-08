import BatteryPoweredDevice from './BatteryPoweredDevice.js';

export default class Laptop extends BatteryPoweredDevice {
    
    constructor(batteryLevel, capacityKWh) {
        super(batteryLevel, capacityKWh);
    }

}