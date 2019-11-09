---
id: publish-your-app
title: Publish your app to Prism Store
---

## Compile app package

Once you have successfully written your app and tested it by running it on a local device,  
you can publish the app onto Prism Store so that anyone can install it onto their own devices.  
To publish, follow these steps:  
1. Compile an `apkg` file from your app, which you can do by running the following command from your app's source code directory:
```bash
prismtool build
```
This will create a `main.apkg` file in the same directory.  

2. Also make sure you take atleast one screenshot of your app by running `prismtool screenshot` while running the app on a connected device.

## Upload to Prism Store

Now go to your `Developer Dashboard` in [Prism Store](https://store.prismos.dev/) and click on the `+` button on the bottom right to Create a new app.  
This will open up a form, where you have to enter:
1. Basic details like name, description, category etc
2. The `main.apkg` file you compiled previously in [Compile app package](publish-your-app.md#compile-app-package)
3. One or more screenshots of your app taken using `prismtool screenshot` command, atleast 1 screenshot is necessary.
4. Once all details are entered and submitted, you will be taken back to the `Developer Dashboard` where you can keep track of the verification process of your recently uploaded app.
5. If the verification succeeds then the app will be made live on the store and `Show` link will show up next to your app on the `Developer Dashboard`.
6. If the verification fails then the errors would show up next to your app.
