---
id: timer
title: Timer
---

`Timer` class is used to create timers to trigger actions after certain interval, can be used to setup both one time trigger or regular intervals.

Import it using:
```C++
#include <prism/timer.hpp>
```

Create a `Timer` object using the default constructor
```C++
Timer timer;
```
Then, to start the timer, call
```C++
void timer.start(uint32_t delay);
```
for example, to start the timer for 500 milliseconds:
```C++
timer.start(500)
```
Once started, to check when the timer is over:
```C++
bool timer.isOver()
```
This will return `true` if timer is over, else will return `false`.

To set up timer to repeat at intervals, just call `start` with the same time period again when it gets over.
