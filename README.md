
## Getting Started
First off we need to 

## Creating a new application

For this step you can choose to use Vue CLI or nuxt to create an app.

### Vue app
- choose default vue 2 install

Now  in the root newmont directory we are going to add our new workspace that we've created and link our components package to that application.

### Add application to workspaces
In the root newmont directory look for the workspaces array and add the newly created application path to that array.

    "workspaces": [
	    "packages/key-hero",
	    "packages/components",
		"packages/your-application-name"
	],
	
### Link components package to new app
Now we want to cd into our new application and link our components package.

    cd packages/your-application-name
    yarn link "@newmont/components"

This will allow for use to work locally on various packages/versions locally without having to re-compile each time we want to test changes.

### Add vuetify

    vue add vuetify
This will add vuetify as a dependency of your application and create the `plugins/vuetify.js` file.  Navigate to that file and add the below configuration.

    some code here

### Install dependencies

### Run the application


