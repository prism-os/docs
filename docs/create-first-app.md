---
id: create-first-app
title: Creating your first app
---

## Register developer account

To be able to publish apps onto the Prism Store you will need create a developer account first,  
to do that follow the below steps:
1. Head to [Prism Store](https://store.prismos.dev/), create a new account or log in.
2. Then from the top right drop down, click on `Developer Dashboard`.
3. The first time you open that, you will be asked to enter a unique developer username, which will be needed for creating and publishing apps.
4. Once you enter a developer username, you will be taken to the `Developer Dashboard` where you can see all your published apps, and publish new apps or edit or update existing apps.


## Create app from CLI

1. To create a new app, go to a suitable location and type `prismtool new my_new_app`, where `my_new_app` is the name of your app source directory.  

2. The CLI will prompt you to enter the `developer_name`, enter the name you registered in the [Register developer account](create-first-app.md#register-developer-account) section.
```bash
developer_name: The unique developer name registered on the Prism Store
>my_developer_name
```

3. Then the CLI will prompt you to enter the application name that will be shown in the UI.
```bash
name: Application name to be displayed, must be less than 14 characters
> (My new app)
```

4. Next, the CLI will prompt you to enter the `class_name_app_section` for your app, this should be a valid C++ variable name and is used as part of your app's unique classname.
```bash
class_name_app_section: Underscore separated valid variable name, to be used as part of the application's unique classname
> (my_new_app)
```

5. You will then get a directory with the source code of your new app. Congratulations!

6. Open the folder and check out the files that have been created.

7. The app created using the above command will have both widget and notification abilities,  
to create an app with only widget or only notification ability, add `--widget` or `--notification` flag to the above command.
