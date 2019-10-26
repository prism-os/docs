---
id: buttons
title: Buttons
---

`Buttons` object can be used to check for user keypresses.  
Prism OS uses a directional pad with select button as the main input method.  
Although it can run on devices with various kinds of physical input options, from devices with full directional pad to once with no physical directional pad.  
Even if any directional input or select input is missing physically from the device, the mobile app has a Remote option that provides the complete directional pad with select button.  
Prism allows for apps to be developed without worrying about the input options on the device as it will gracefully handle all these variations.

Import it using:
```C++
#include <prism/buttons.hpp>
```
The following methods are available on the `Buttons` object:
1. `leftPressed`:
```C++
bool leftPressed(void)
```
Returns true if left button is pressed, else false.

1. `rightPressed`:
```C++
bool rightPressed(void)
```
Returns true if right button is pressed, else false.

1. `upPressed`:
```C++
bool upPressed(void)
```
Returns true if up button is pressed, else false.

1. `downPressed`:
```C++
bool downPressed(void)
```
Returns true if down button is pressed, else false.

1. `enterPressed`:
```C++
bool enterPressed(void)
```
Returns true if select button is pressed, else false.
