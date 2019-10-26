---
id: datetime
title: DateTime
---

`DateTime` object can be used to access the current system time.

Import it using:
```C++
#include <prism/date_time.hpp>
```

The system time is the local time reported by the paired phone.  
After the initial sync the device tracks time on its own and does not require phone to be paired.  

The methods available on `DateTime` object are:  
1.  `second`
```C++
int second();
```
Return the seconds in current time.

2.  `minute`
```C++
int minute();
```
Return the minutes in current time.

3.  `hour`
```C++
int hour();
```
Return the seconds in current time.

4.  `day`
```C++
int day();
```
Return the day in current date.

5.  `month`
```C++
int month();
```
Return the month in current date.
January is month 1.

6.  `year`
```C++
int year();
```
Return the year in current date.

7.  `weekday`
```C++
int weekday();
```
Return the weekday of current date.
Sunday is 0 and so on.
