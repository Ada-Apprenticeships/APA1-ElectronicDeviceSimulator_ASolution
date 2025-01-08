import Device from './models/Device.js';
import Phone from './models/Phone.js';
import Laptop from './models/Laptop.js';
import Smartphone from './models/Smartphone.js';
import Tablet from './models/Tablet.js';

// Helper function to print device operations
function demonstrateDevice(device, name) {
    console.log(`\n=== ${name} Demonstration ===`);
    console.log(device.display());
    console.log(device.charge());
    console.log(device.boot());  // Test booting for all devices
    
}

// Helper function to print phone operations
function demonstratePhone(phone, name) {
    demonstrateDevice(phone, name);
    console.log(phone.call());
}

// Main demonstration
console.log('Device Hierarchy Demonstration\n');

// Test Device
try {
    const device = new Device(80, 5.0);  // Generic device with 5.0 kWh battery
    demonstrateDevice(device, 'Basic Device');
    console.log(device.shutdown());
} catch (error) {
    console.error('Device Error:', error.message);
}

// Test Phone
try {
    const phone = new Phone(70, 2.5);  // Basic phone with 2.5 kWh battery
    demonstratePhone(phone, 'Basic Phone');
} catch (error) {
    console.error('Phone Error:', error.message);
}

// Test Laptop
try {
    const laptop = new Laptop(90, 4.0);  // Laptop with 4.0 kWh battery
    demonstrateDevice(laptop, 'Laptop');
    console.log(laptop.sleep());
    console.log(laptop.wake());
    console.log(laptop.shutdown());
} catch (error) {
    console.error('Laptop Error:', error.message);
}

// Test Smartphone
try {
    const smartphone = new Smartphone(60, 3.0);  // Smartphone with 3.0 kWh battery
    demonstratePhone(smartphone, 'Smartphone');
    console.log(smartphone.installApp());
    console.log(smartphone.takePhoto());
} catch (error) {
    console.error('Smartphone Error:', error.message);
}

// Test Tablet
try {
    const tablet = new Tablet(100, 3.5);  // Tablet phone with 3.5 kWh battery
    demonstrateDevice(tablet, 'Tablet');
    console.log(tablet.expandScreen());
    console.log(tablet.expandScreen());
} catch (error) {
    console.error('Tablet Error:', error.message);
}

// Test error handling with invalid battery level
try {
    const invalidDevice = new Device(-10, 1.0);
} catch (error) {
    console.log('\n=== Error Handling Demonstration ===');
    console.error('Error creating device with invalid battery:', error.message);
}

// Test error handling with invalid capacity
try {
    const invalidCapacityDevice = new Device(50, -1.0);
} catch (error) {
    console.log('Error creating device with invalid capacity:', error.message);
}

// Test boot with low battery
try {
    const lowBatteryDevice = new Device(5, 1.0);
    console.log('\n=== Low Battery Boot Test ===');
    console.log(lowBatteryDevice.boot());
} catch (error) {
    console.error('Low Battery Device Error:', error.message);
}