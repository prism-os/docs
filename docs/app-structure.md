---
id: app-structure
title: App structure
---

A Prism OS app has the following basic structure:

```C++
#include <prism/app.hpp>

class sidevesh__notifications_demo : public App {
  public:
  sidevesh__notifications_demo();
  void draw(Graphics graphics);
  void mount(void);
  void unmount(void);
  void update(void);
  Notification notify(void);
};
```

An app is defined as a class which inherits publicly from `App` base class.  
An app implements 5 basic lifecycle methods:
1. `mount`: This function is called when the user switches onto the app in the widgets view and the app is about to start rendering.  
This can be used to make network calls, start timers etc.

2. `unmount`: This function is called right before the user switches away from the app in the widgets view. 
This can be used to do clean up like clearing any running timers, unfinished network calls etc.

3. `draw`: This function is the render loop for the app and is called whenever the OS is about to draw an update for your app.  
This is the only lifecycle method that is given access to `graphics` object which can be used to draw various graphics on the screen. See the [Graphics API](graphics.md) section for more info.  
This function should not be used to do any long running operations or to update any data, this should just be a bunch of graphics api calls.

4. `update`: This function is used to update any data, make or schedule api calls, start timer etc.  
This should also minimise any long running or blocking operations else your app might experience slowdown. 

5. `notify`: This function is used to send out any notifications. Whenver the OS polls the app for any new notification, `notify` function will be called.  
If there isn't any notification that has to be sent then return `Notification::empty()`, else use the `Notification` constructor to create and return a notification.

The `notify` method defined on the class is only invoked if the `manifest.json` sets `notification` in `abilities` section as `true`.  
`notify` method can be omitted if it is not required.  

Similarily, the `mount`, `unmount`, `draw` and `update` methods are only invoked if the `manifest.json` sets `widget` in `abilities` section as `true`.
These methods can also be omitted if not required.
