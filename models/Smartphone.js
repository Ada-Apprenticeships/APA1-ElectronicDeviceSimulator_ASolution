import Phone from './Phone.js';

export default class Smartphone extends Phone {
    constructor(batteryLevel, capacityKWh) {
        super(batteryLevel, capacityKWh);
    }

    installApp() {
        if (this.batteryLevel < 15) {
            return 'Cannot install app - battery too low';
        }
        return 'Installing new app...';
    }

    takePhoto() {
        if (this.batteryLevel < 10) {
            return 'Cannot take photo - battery too low';
        }
        return 'Taking a photo with smartphone camera...';
    }
}