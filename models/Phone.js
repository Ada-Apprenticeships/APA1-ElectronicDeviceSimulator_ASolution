import Device from './Device.js';

export default class Phone extends Device {
    constructor(batteryLevel, capacityKWh) {
        super(batteryLevel, capacityKWh);
    }

    call() {
        if (this.batteryLevel < 5) {
            return 'Cannot make call - battery too low';
        }
        return 'Making a phone call...';
    }
}