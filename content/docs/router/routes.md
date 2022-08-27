---
Title: 'Routes'
Keywords: 'mahal, router, mahal-router'
Description: 'mahal provides mahal-router for developing router based app.'
---

# routes

**routes** is a list of route as hashmap which is used to render the component based on different paths.

This is how a simple routes looks like - 

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

`createRoute` is used to create a single route. It takes different route prop and return a route.

The different arguments available for `createRoute` are - 

* path - specify location of a route
* name - specify name of a route
* component - target component against path
* children - children routes : useful for creating nested routes

## Route with parameters - 

In order to create a route with parameters - you will have to specify param in `path` using `{}` syntax.

```
import { createRoute } from "@mahaljs/router";
import Start from "./components/start.mahal";
import Start from "./components/user.mahal";

export const routes = {
    ...createRoute({
        path: "/",
        component: Start,
        name: "home",
    }),
    // parameterized route
    ...createRoute({
        path: "/user/{userId}",
        component: User,
        name: "user",
    }),
}
```

You can get the param value inside component by using `param` prop of `router` - 

```
const router = this.global.router;
const userId = router.param.userId;
```

## Nested routes

A nested route is a route inside a route, which means it will work only when the particular parent route renders. A nested route can be created by specifying route definition in `children` prop of `createRoute`.

```
import { createRoute } from "@mahaljs/router";
import Start from "./components/start.mahal";
import User from "./components/user.mahal";
import UserProfile from "./components/user_profile.mahal";


export const routes = {
    ...createRoute({
        path: "/",
        component: Start,
        name: "home",
    }),
    ...createRoute({
        path: "/user",
        component: User,
        name: "user",
        children:{
            ...createRoute({
                path: "/profile",
                component: UserProfile,
                name: "user-profile",
            }
        }
    }),
}
```

In order to render a nested route, you will have to add a `router-view` component inside parent component. In the above case - you need to add a `router-view` inside `User` component.


