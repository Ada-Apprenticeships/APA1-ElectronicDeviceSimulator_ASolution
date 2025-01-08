import BatteryPoweredDevice from './BatteryPoweredDevice.js';

export default class Laptop extends BatteryPoweredDevice {
    #isSleeping = false;

    constructor(batteryLevel, capacityKWh) {
        super(batteryLevel, capacityKWh);
    }

    get isSleeping(){
        return this.#isSleeping;
    }

    sleep() {
        if (!this.isBooted) {
            return 'Cannot sleep - laptop is not booted';
        }
        this.isSleeping = true;
        return 'Laptop entering sleep mode...';
    }

    wake() {
        if (!this.isBooted) {
            return 'Cannot wake - laptop is not booted';
        }
        if (!this.isSleeping) {
            return 'Laptop is already awake';
        }
        this.isSleeping = false;
        return 'Laptop waking from sleep mode...';
    }
}