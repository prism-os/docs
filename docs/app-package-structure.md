---
id: app-package-structure
title: Structure of app package
---

The source code of your app created in the [Creating your first app](create-first-app.md) section will consist of the following files:
1. `manifest.json`
2. `main.hpp`
3. `main.cpp`

The `main.hpp` file is the main header file of your app and it contains the declaration of your app's main class.
Where as, the `main.cpp` file contains the implementation of all the methods declared in your class.  

You can learn more about the member functions of your app class and the app structure in [App structure](app-structure.md) section.  

The `manifest.json` contains basic info about your app, including the name, the composite unique name of your app's class and the abilities that it requests.
```json
{
  "name": "Weather",
  "abilities": {
    "widget": true,
    "notification": false
  },
  "version": "1.0",
  "class_name": "sidevesh__weather"
}

```

The `class_name` defined in `manifest.json` should be the same that is declared in your `main.hpp` and implemented in `main.cpp`.

You can add more files as your app's source grows and to structure your app better.
