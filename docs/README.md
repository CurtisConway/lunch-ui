# Usage Guide

LetUs UI is a simple, opinionated, effective, efficient, and responsive component library.
It's purpose is to create a seamless developer experience for building, managing, and 
maintaining the Front-End UI of the LetUs platform.

The main build is exposed as a Vue plugin, allowing us to leverage the `Vue.use()` method
to load our code into the application.

## Installation

LetUs UI isn't deployed to any package manager yet. However, you can still use 
NPM in conjunction with your repository URL to create a private package for consumption
in your application.

In your package.json:
```json
{
    "dependencies": {
      "@letus/ui": "git+https://bitbucket.org/CurtConway/letus-ui.git"
    }
}
```

NPM will now download the package just like any other package served from the package
manager.

## Usage

```js
import LetUsUI from '@letus/ui';

Vue.use(LetUsUI);

new Vue({
    el: '#app',
});
```