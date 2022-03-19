---
Title: 'Router'
Keywords: 'mahal, router, mahal-router'
Description: 'mahal provides mahal-router for developing router based app.'
---

# Router inside component

Once router is successfully integrated. `router` is available inside component as global variable.

## router

router is same variable which was provided while initiating the `mahal-router` in plugin. It has different props and api to help you with different scenario.

```
import { Component, Reactive } from "mahal";
export default class extends Component{

   onInit(){
       this.router = this.global.router;
   }
}
```

router has follwing props and api - 

* goto
* gotoPath
* currentRoute
* back
* go


### goto

`goto` allows you to change a route by route object.


```
const router =  this.global.router;
router.goto({
    name:'home',
    query:{

    },
    param:{

    }
})
```

The route has following options - 

* path - specify path for the route
* name - specify router name
* query - specify query string as object
* param - specify route params 

### gotoPath

`gotoPath` allows you to change a route by path. It internally uses `goto`.

```
const router =  this.global.router;
router.gotoPath("/")
```

### currentRoute

`currentRoute` is a prop on router which returns the information about current route.

```
const router =  this.global.router;
router.currentRoute;
```

It can be shorthand to `route`.

```
const route =  this.global.route;
```

It can be used to get the `params` or `query` from the current route.

```
const route =  this.global.route;
const id = route.query.id;
const userId = route.param.userId;
```

### back

`back` can be used to go to back route.

```
const router =  this.global.router;
router.back();
```

### go

`go` can be used to go to route by delta(number).

```
const router =  this.global.router;
router.go(-1);
```