import Device from './models/Device.js';
import Phone from './models/Phone.js';
import Laptop from './models/Laptop.js';
import Smartphone from './models/Smartphone.js';
import Tablet from './models/Tablet.js';
import SmartWatch from './models/SmartWatch.js'; 
import GamingConsole from './models/GamingConsole.js';
import SmartTV from './models/SmartTV.js'; 

// Helper function to print device operations
function demonstrateDevice(device, name) {
    console.log(`\n=== ${name} Demonstration ===`);
    console.log(device.display());
    console.log(device.boot());  // Test booting for all devices
}

// Helper function to print phone operations
function demonstratePhone(phone, name) {
    demonstrateDevice(phone, name);
    console.log(phone.call("555-1234")); 
}

// Helper function to print battery powered device operations
function demonstrateBatteryPoweredDevice(device, name) {
    demonstrateDevice(device, name);
    console.log(device.charge());
}

// Main demonstration
console.log('Device Hierarchy Demonstration\n');

// Test Device
try {
    const device = new Device(); 
    demonstrateDevice(device, 'Basic Device');
    console.log(device.shutdown());
} catch (error) {
    console.error('Device Error:', error.message);
}

// Test Phone
try {
    const phone = new Phone(70, 2.5);  
    demonstratePhone(phone, 'Basic Phone');
} catch (error) {
    console.error('Phone Error:', error.message);
}

// Test Laptop
try {
    const laptop = new Laptop(90, 4.0);  
    demonstrateBatteryPoweredDevice(laptop, 'Laptop');
    console.log(laptop.sleep());
    console.log(laptop.wake());
    console.log(laptop.shutdown());
} catch (error) {
    console.error('Laptop Error:', error.message);
}

// Test Smartphone
try {
    const smartphone = new Smartphone(60, 3.0);  
    demonstratePhone(smartphone, 'Smartphone');
    console.log(smartphone.installApp("Cool App"));
    console.log(smartphone.takePhoto());
} catch (error) {
    console.error('Smartphone Error:', error.message);
}

// Test Tablet
try {
    const tablet = new Tablet(100, 3.5);  
    demonstratePhone(tablet, 'Tablet'); 
    console.log(tablet.expandScreen());
    console.log(tablet.expandScreen());
} catch (error) {
    console.error('Tablet Error:', error.message);
}

// Test SmartWatch
try {
    const smartwatch = new SmartWatch(85, 0.5);
    demonstrateBatteryPoweredDevice(smartwatch, 'Smartwatch');
    console.log(smartwatch.toggleHeartRate());
    console.log(smartwatch.checkSteps());
} catch (error) {
    console.error('Smartwatch Error:', error.message);
}

// Test GamingConsole
try {
    const gamingConsole = new GamingConsole(); 
    demonstrateDevice(gamingConsole, 'Gaming Console');
    console.log(gamingConsole.plugIn()); 
    console.log(gamingConsole.loadGame("Awesome Game"));
    console.log(gamingConsole.exitGame());
} catch (error) {
    console.error('GamingConsole Error:', error.message);
}


// Test SmartTV
try {
    const smartTV = new SmartTV();
    demonstrateDevice(smartTV, 'Smart TV');
    console.log(smartTV.plugIn()); 
    console.log(smartTV.currentChannel = 5);
    console.log(smartTV.sleep());
    console.log(smartTV.wake());
} catch (error) {
    console.error('SmartTV Error:', error.message);
}