import Phone from './Phone.js';

export default class Tablet extends Phone {
    #isExpanded = false;

    constructor(batteryLevel, capacityKWh) {
        super(batteryLevel, capacityKWh);
    }

    expandScreen() {
        if (this.batteryLevel < 20) {
            return 'Cannot expand screen - battery too low';
        }
        this.#isExpanded = !this.#isExpanded;
        return `Screen ${this.#isExpanded ? 'expanded' : 'collapsed'}`;
    }
}