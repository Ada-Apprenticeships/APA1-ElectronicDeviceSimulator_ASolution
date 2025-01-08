export default class Device {
    #isBooted = false;
    #isSleeping = false;

    get isBooted() {
        return this.#isBooted;
    }

    set isBooted(value) {
        this.#isBooted = value
    }
  
    get isSleeping() {
        return this.#isSleeping;
    }

    set isSleeping(value) {
        this.#isSleeping = value;
    }

    display() {
        if (!this.isBooted) {
            return `Cannot display - ${this.constructor.name} is not booted.`;
        }
        return "Device is displaying something.";
    }
    
    boot() {
        this.isBooted = true;
        return "Device booted up.";
    }
    
    shutdown() {
        this.isBooted = false;
        return "Device shut down.";
    }

    sleep() {
        if (!this.isBooted) {
            return 'Cannot sleep - device is not booted';
        }
        this.isSleeping = true;
        return `${this.constructor.name} entering sleep mode...`;
    }

    wake() {
        if (!this.isBooted) {
            return 'Cannot wake - device is not booted';
        }
        if (!this.isSleeping) {
            return `${this.constructor.name} is already awake`;
        }
        this.isSleeping = false;
        return `${this.constructor.name} waking from sleep mode...`;
    }
}
