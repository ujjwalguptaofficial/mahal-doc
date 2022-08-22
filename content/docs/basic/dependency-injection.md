---
Title: 'Dependency injection'
Keywords: 'dependency injection, component, mahal'
Description: 'You can pass any dependency to `Component` using `global` property of app instance.'
---

# Dependency injection

You can pass any dependency to `Component` using `global` property of app instance.

```
import { Mahal } from "mahal";
import Main from "./components/main.mahal";

export const app = new Mahal(Main, '#app');

// inject dependency `name`
app.global.name = 'ujjwal gupta';
app.global.appVersion = '1.0.0';

app.create();
```

The injected dependency can be accessed using `global` property of Component - 

```
import {Component} from "mahal"

export default class MainComponent extends Component {

    get name(){
        return this.global.name;
    }
}

```