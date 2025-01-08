# Device Hierarchy Project

## Overview
This project implements a basic device management system using JavaScript classes and inheritance. The system models different types of electronic devices and their behaviours.

## Class Structure

### Base Class: Device
The root class that defines core device functionality:
- Properties:
  - `batteryLevel`: Current battery percentage
  - `capacityKWh`: Battery capacity in kilowatt-hours
  - `isBooted`: Boolean indicating if device is turned on
- Methods:
  - `constructor(batteryLevel, capacityKWh)`
  - Getters for all properties
  - `display()`: Returns device information
  - `charge()`: Handles device charging
  - `boot()`: Powers on the device
  - `shutdown()`: Powers off the device

### Phone Class
Extends Device with calling capabilities:
- Additional Methods:
  - `call()`: Handles phone calls

### Laptop Class
Extends Device with sleep functionality:
- Additional Methods:
  - `sleep()`: Puts laptop in sleep mode
  - `wake()`: Wakes laptop from sleep mode

### Smartphone Class
Extends Phone with additional smart features:
- Additional Methods:
  - `installApp()`: Handles app installation
  - `takePhoto()`: Handles photo capture

### Tablet Class
Extends Phone with screen expansion features:
- Properties:
  - `isExpanded`: Tracks screen expansion state
- Additional Methods:
  - `expandScreen()`: Toggles screen expansion


## Challenges

Your task is to extend this system by implementing the following features:

1. Add functionality to change a device's battery capacity (simulating a battery replacement)
2. Add a new SmartWatch device class with appropriate properties and methods
3. Add a new GamingConsole device class with appropriate properties and methods
4. Add a new SmartTV device class with appropriate properties and methods

### Implementation Notes
- Consider where new classes should fit in the inheritance hierarchy - feel free to make changes as you deem appropriate. 
- Add appropriate properties and methods for each new device type

