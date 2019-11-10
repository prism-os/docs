---
id: running-app-on-device
title: Running your app on device
---

Once you have created an app successfully,
its time to run it on an actual device and see the results!  
To run an app, follow these steps:
1. Connect a development board or device to your system.
2. Navigate to the source code directory of your app and run `prismtool run`.
3. A debug version of your app will be compiled on a base Prism OS image and flashed onto the device.
4. When the debug version of your app is compiled, you can use an `#ifdef` block like below to add debug specific code:
```C++
#ifdef DEBUG
  // Some debug code here
#endif
```

You can also use `Serial.print` or `Serial.println` functions to write some output to the serial console,  
Prism OS debug image connects to a serial terminal at baudrate 9600.  
You can also use `prismtool screenshot` command to capture and save the screenshot from a connected Prism OS device running a debug build.
