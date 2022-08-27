---
Title: 'Router'
Keywords: 'mahal, router, mahal-router'
Description: 'mahal provides mahal-router for developing router based app.'
---

# Router

mahal provides [mahal-router](https://github.com/ujjwalguptaofficial/mahal-router) for developing router based app.

## Installation

```
npm i @mahaljs/router
```

## Setup

The router needs **routes** (route information) in order to render components based on different paths. Let's create routes -

### create routes

**routes** is a list as hashmap which is used to render the component based on different paths.

A simple routes looks like - 

```
import { createRoute } from "@mahaljs/router";
import Start from "./components/start.mahal";
export const routes = {
    ...createRoute({
        path: "/",
        component: Start,
        name: "home",
    }),
}
```

In the above code - there is a single route with path `/` with target component `Start` and name `home`. These information will be used by router to render the `Start` component when path is `/`.

For more information about routes, please read [routes doc](/docs/router/routes)

### create router

A Router can be created by creating instance of `Router` class;

```
import { Router } from "@mahaljs/router";

const router = new Router(routes, {
    mode: "history"
});
```

### use router

`mahal-router` is exported as plugin for mahal. So you need to add it in plugin using `extend`. It takes `routes` list as arguments.

```
import { Mahal } from "mahal";
import Main from "./components/main.mahal";
import { RouterPlugin } from "@mahaljs/router";
import { routes } from "../routes";

export const app = new Mahal(Main, '#app');
// install router plugin
app.extend.plugin(RouterPlugin, routes);

app.create();
```

now router has been added into your mahal app. But we need to configure where to load the router component inside our main component.

### Configure router place

mahal-store provider `router-view` component which is used to render the router component.

Let's add `router-view` in main component - 

```

<html>
    <div>
        Main page
        <router-view />
    </div>
</html>
<script>
import { Component } from "mahal";
export default class Root extends Component{
        
}
</script>
```

Now open your app in browser and you will see the route is rendered.

