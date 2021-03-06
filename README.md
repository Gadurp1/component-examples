
# Getting Started
First off we need to clone our repo

    git clone https://github.com/Gadurp1/component-examples.git

Now that we have our example repo `cd into our repo` and install dependencies in our base repository

    cd component-examples 
    yarn bootstrap
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
- copy pasta vue directory in /packages
- use vue clie and choose default vue 2 install

```bash
    cd component-examples/packages
    vue create your-application-name
```
Now  in the root component-examples directory we are going to add our new workspace that we've created and link our components package to that application.

### Add application to workspaces
In the root component-examples directory look for the workspaces array in your package.json file and add the newly created application path to that array.

``` json
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

    cd packages/your-application-name
    yarn link "@newmont/components"

This will allow for use to work on various packages/versions locally without having to re-compile all linked dependencies each time we want to test changes.

### Add vuetify

vue add vuetify
This will add vuetify as a dependency to your application and create the `plugins/vuetify.js` file.  

### Add library to main.js

    ```
    import Vue from "vue";
    import App from "./App.vue";
    import { PageComponents } from '@newmont/components'
    import vuetify from './plugins/vuetify';

    Vue.config.productionTip = false;

    Object.keys(PageComponents).forEach((block) => {
        Vue.component(block, PageComponents[block])
    })

    new Vue({
        vuetify,
        render: h => h(App)
    }).$mount("#app");

    ```
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

### Add this to you App.vue file in your application
```vue
<template>
  <v-app>
    <v-content>
      <v-row justify="center">
        <v-col cols="4" class="text-center my-4 ">
          <h2>Vue Sample App</h2>
          <v-alert outlined color="primary" class="mt-10" v-if="result">
            <div class="title text-uppercase">
              {{ result }}
            </div>
            <div>
              Maecenas ullamcorper, dui et placerat feugiat, eros pede varius
              nisi, condimentum viverra felis nunc et lorem. Duis vel nibh at
              velit scelerisque suscipit. Praesent blandit laoreet nibh. Aenean
              posuere, tortor sed cursus feugiat, nunc augue blandit nunc, eu
              sollicitudin urna dolor sagittis lacus. Etiam sollicitudin, ipsum
              eu pulvinar rutrum, tellus ipsum laoreet sapien, quis venenatis
              ante odio sit amet eros.
            </div>
            <v-btn class="primary" @click="result = null">
              Back
            </v-btn>
          </v-alert>
          <ReservationCard :loading="loading" v-if="!result">
            <template #image>
              <v-img
                height="250"
                src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
              ></v-img>
            </template>
            <template #title=""> My Blue Restaurant Theme </template>
            <template #buttons>
              <v-chip-group
                v-model="selection"
                active-class="primary accent-4 white--text"
                color="accent"
                column
              >
                <v-chip v-for="(item,index) in items" v-bind:key="index" :value="item">
                  {{item}}
                </v-chip>
              </v-chip-group>
            </template>
            <template #card-action>
              <v-btn color="secondary lighten-2" text @click="runQuery()">
                Reserve
              </v-btn>
            </template>
          </ReservationCard>
        </v-col>
      </v-row>
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: "App",
  data: () => ({
    selection: null,
    loading: false,
    items: [
      'item 1',
      'item 2',
      'item 3',
      'item 4'
    ],
    result: null
  }),
  methods: {
    runQuery() {
      this.loading = true;
      setTimeout(() => {
        this.loading = false;
        this.result = `You clicked ${this.selection}`;
      }, 2000);
    },
  },
};
</script>

```
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
