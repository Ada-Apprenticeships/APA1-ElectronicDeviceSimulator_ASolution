export default class Device {
    #batteryLevel;
    #capacityKWh;
    #isBooted = false;

    constructor(batteryLevel, capacityKWh) {
        if (batteryLevel < 0 || batteryLevel > 100) {
            throw new Error('Battery level must be between 0 and 100');
        }
        if (capacityKWh <= 0) {
            throw new Error('Battery capacity must be greater than 0');
        }
        this.#batteryLevel = batteryLevel;
        this.#capacityKWh = capacityKWh;
    }

    get batteryLevel() {
        return this.#batteryLevel;
    }

    get capacityKWh() {
        return this.#capacityKWh;
    }

    get isBooted() {
        return this.#isBooted;
    }

    display() {
        return `Device display - Battery Level: ${this.#batteryLevel}%, Capacity: ${this.#capacityKWh}kWh`;
    }

    charge() {
        const oldLevel = this.#batteryLevel;
        this.#batteryLevel = Math.min(100, this.#batteryLevel + 20);
        return `Device charged from ${oldLevel}% to ${this.#batteryLevel}%`;
    }

    boot() {
        if (this.batteryLevel < 10) {
            return 'Cannot boot - battery too low';
        }
        this.#isBooted = true;
        return 'Device is booting up...';
    }

    shutdown() {
        if (!this.#isBooted) {
            return 'Device is already shut down';
        }
        this.#isBooted = false;
        return 'Device is shutting down...';
    }
}