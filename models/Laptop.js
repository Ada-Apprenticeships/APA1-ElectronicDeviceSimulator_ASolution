import Device from './Device.js';

export default class Laptop extends Device {
    #isSleeping = false;

    constructor(batteryLevel, capacityKWh) {
        super(batteryLevel, capacityKWh);
    }

    sleep() {
        if (!this.isBooted) {
            return 'Cannot sleep - laptop is not booted';
        }
        this.#isSleeping = true;
        return 'Laptop entering sleep mode...';
    }

    wake() {
        if (!this.isBooted) {
            return 'Cannot wake - laptop is not booted';
        }
        if (!this.#isSleeping) {
            return 'Laptop is already awake';
        }
        this.#isSleeping = false;
        return 'Laptop waking from sleep mode...';
    }
}