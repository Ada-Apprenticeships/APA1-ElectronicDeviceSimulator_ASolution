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
    additionalTests.forEach(test => console.log(test(device)));
}

console.log('Device Hierarchy Demonstration\n');

const devices = [
    { device: new Phone(70, 2.5), name: 'Basic Phone', tests: [(d) => d.call("555-1234")] },
    { device: new Laptop(90, 4.0), name: 'Laptop', tests: [(d) => d.charge(), (d) => d.sleep(), (d) => d.wake()] },
    { device: new Smartphone(60, 3.0), name: 'Smartphone', tests: [(d) => d.installApp("Cool App"), (d) => d.takePhoto()] },
    { device: new Tablet(100, 3.5), name: 'Tablet', tests: [(d) => d.expandScreen()] },
    { device: new SmartWatch(85, 0.5), name: 'Smartwatch', tests: [(d) => d.toggleHeartRate(), (d) => d.checkSteps()] },
    { device: new GamingConsole(), name: 'Gaming Console', tests: [(d) => d.plugIn(), (d) => d.loadGame("Awesome Game"), (d) => d.exitGame()] },
    { device: new SmartTV(), name: 'Smart TV', tests: [(d) => d.plugIn(), (d) => d.sleep(), (d) => d.wake()] }
];

devices.forEach(({ device, name, tests }) => {
    try {
        demonstrate(device, name, tests);
    } catch (error) {
        console.error(`${name} Error:`, error.message);
    }
});