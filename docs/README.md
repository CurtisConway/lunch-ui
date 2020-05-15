# Usage Guide

Lunch UI is a simple, opinionated, effective, efficient, and responsive component library.
It's purpose is to create a seamless developer experience for building, managing, and 
maintaining a Front-End UI.

The main build is exposed as a Vue plugin, allowing us to leverage the `Vue.use()` method
to load our code into the application.

## Installation

Lunch UI isn't deployed to any package manager yet. However, you can still use 
NPM in conjunction with your repository URL to create a private package for consumption
in your application.

In your package.json:
```json
{
    "dependencies": {
      "lunch-ui": "https://github.com/CurtisConway/lunch-ui.git"
    }
}
```

NPM will now download the package just like any other package served from the package
manager.

## Usage

```js
import LunchUI from 'lunch-ui';

Vue.use(LunchUI);

new Vue({
    el: '#app',
});
```
