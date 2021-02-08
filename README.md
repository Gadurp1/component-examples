
# Getting Started
First off we need to clone our repo

    git clone https://github.com/Gadurp1/component-examples.git

Now that we have our example repo `cd into our repo` and install dependencies in our base repository

    cd component-examples 
    yarn
What we've done is install dependencies for our packages and link and local workspaces.  By default the repo will have 3 workspaces.

 - components
 - vue
 - nuxt
 
## Components
Components is the library used to store and package any of the shared components within the repository.

## Vue Demo App
The vue package is a vue application with one page that implements the component in the component library.

    cd packages/vue
    yarn serve

![enter image description here](https://i.ibb.co/bsfxdT7/Screen-Shot-2021-02-08-at-3-29-32-PM.png)
![](https://i.ibb.co/yfHxVW6/Screen-Shot-2021-02-08-at-3-59-03-PM.png)
## Nuxt Demo App
The nuxt package is a nuxt application with one page that implements our component.

    cd packages/nuxt
    yarn dev
   This page is similar to the vue applicatio but is server side redered and has a bit of a different color sheme.
   ![enter image description here](https://i.ibb.co/zQThCgQ/Screen-Shot-2021-02-08-at-3-55-47-PM.png)
When a user reserves an item on this site they will be redirected to the next screen.
  ![enter image description here](https://i.ibb.co/CtBtBPp/Screen-Shot-2021-02-08-at-3-55-56-PM.png)
# Creating a new vue application

For this step you can choose to use Vue CLI or nuxt to create an app.

### Vue app
- choose default vue 2 install

```
cd component-examples/packages
vue create your-application-name
```
Now  in the root component-examples directory we are going to add our new workspace that we've created and link our components package to that application.

### Add application to workspaces
In the root component-examples directory look for the workspaces array and add the newly created application path to that array.

    "workspaces": [
	    "packages/vue",
	    "packages/nuxt",
	    "packages/components",
	    
	    // add new line for your app
		"packages/your-application-name"
	],
	
### Link components package to new app
Now we want to cd into our new application and link our components package.

    cd packages/your-application-name
    yarn link "@newmont/components"

This will allow for use to work on various packages/versions locally without having to re-compile all linked dependencies each time we want to test changes.

### Add vuetify

    vue add vuetify
This will add vuetify as a dependency to your application and create the `plugins/vuetify.js` file.  

### Customizing vuetify
Navigate to `your-application-name/src/plugins/vuetify.js`in your IDE and add the below configuration.
```js
    import Vue from 'vue';
    import Vuetify from 'vuetify/lib/framework';
    
    Vue.use(Vuetify);
    
    export default new Vuetify({
        theme: {
            themes: {
                light: {
                    primary: '#5D576B',
                    secondary: '#D496A7',
                    accent: '#F1DEDE',
                    error: '#FE938C',
                    success: '#6CD4FF'
                },
            },
        },
    });
```
The above  will add some custom vars for your applications theme.

### Install Dependencies and Run New Application
Now that vuetify is installed and we have a base for some customizations we can install dependencies and run the new application

    cd packages/your-application-name
    yarn
    yarn serve


# Creating a new nuxt application
 From the root component-examples directory
```
cd packages
yarn create nuxt-app your-application-name
```

 1. choose js
 2. choose yarn as package manager
 3. choose vuetify as UI library
 4. choose prettier for linting
 5. **Choose none for repo**

Now  in the root component-examples directory we are going to add our new workspace that we've created and link our components package to that application.

### Add application to workspaces
In the root component-examples directory in package.json look for the workspaces array and add the newly created application path to that array.
```json
    "workspaces": [
	    "packages/vue",
	    "packages/nuxt",
	    "packages/components",
	    
	    // add new line for your app
		"packages/your-application-name"
	],
```
### Link components package to new app
Now we want to cd into our new application and link our components package.
```bash
    cd packages/your-application-name
    yarn link "@newmont/components"
```

### Add library to nuxt
This will allow for use to work on various packages/versions locally without having to re-compile all linked dependencies each time we want to test changes.

In your IDE create a new file in your nuxt application: `src/plugins/component-library.js and add the below code.`
```js
    import { PageComponents } from  '@newmont/components'
	import  Vue  from  'vue'
	Object.keys(PageComponents).forEach((block) => {
	    Vue.component(block, PageComponents[block])
    })
```

This will register our components into nuxtjs.

Now add that plugin to `nuxt.config.js`
```js
    plugins: [
	    '~plugins/component-library.js'
    ],
```
### Add Vuetify
https://vuetifyjs.com/en/getting-started/installation/#nuxt-install
```bash
cd packages/your-application-name
yarn add @nuxtjs/vuetify -D
```
Once installed, update your nuxt.config.js file to include the Vuetify module in the build.

```js
// nuxt.config.js
{
  buildModules: [
    // Simple usage
    '@nuxtjs/vuetify',

    // With options
    ['@nuxtjs/vuetify', { /* module options */ }]
  ]
}
```

### Install Dependencies and Run New Application
Now that vuetify is installed and we have a base for some customizations we can install dependencies and run the new application

    cd packages/your-application-name
    yarn
    yarn serve
    
### Customize vuetify
Navigate to `your-application-name/src/nuxt.config.js`in your IDE and add the below configuration.

	  vuetify: {
        theme: {
            themes: {
                light: {
                    primary: '#5D576B',
                    secondary: '#D496A7',
                    accent: '#F1DEDE',
                    error: '#FE938C',
                    success: '#6CD4FF'
                },
            },
        },
      }
The above  will add some custom vars for your applications theme.
