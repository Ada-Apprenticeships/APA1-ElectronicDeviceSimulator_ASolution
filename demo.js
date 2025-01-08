import Device from './models/Device.js';
import Phone from './models/Phone.js';
import Laptop from './models/Laptop.js';
import Smartphone from './models/Smartphone.js';
import Tablet from './models/Tablet.js';
import SmartWatch from './models/SmartWatch.js'; 
import GamingConsole from './models/GamingConsole.js';
import SmartTV from './models/SmartTV.js'; 

function demonstrate(device, name, additionalTests = []) {
    console.log(`\n=== ${name} Demonstration ===`);
    console.log(device.display());
    console.log(device.boot());
    additionalTests.forEach(test => console.log(test()));
}

console.log('Device Hierarchy Demonstration\n');

const devices = [
    { device: new Device(), name: 'Basic Device', tests: [] },
    { device: new Phone(70, 2.5), name: 'Basic Phone', tests: [() => device.call("555-1234")] },
    { device: new Laptop(90, 4.0), name: 'Laptop', tests: [() => device.charge(), () => device.sleep(), () => device.wake()] },
    { device: new Smartphone(60, 3.0), name: 'Smartphone', tests: [() => device.installApp("Cool App"), () => device.takePhoto()] },
    { device: new Tablet(100, 3.5), name: 'Tablet', tests: [() => device.expandScreen()] },
    { device: new SmartWatch(85, 0.5), name: 'Smartwatch', tests: [() => device.toggleHeartRate(), () => device.checkSteps()] },
    { device: new GamingConsole(), name: 'Gaming Console', tests: [() => device.plugIn(), () => device.loadGame("Awesome Game"), () => device.exitGame()] },
    { device: new SmartTV(), name: 'Smart TV', tests: [() => device.plugIn(), () => device.sleep(), () => device.wake()] }
];

devices.forEach(({ device, name, tests }) => {
    try {
        demonstrate(device, name, tests);
    } catch (error) {
        console.error(`${name} Error:`, error.message);
    }
});