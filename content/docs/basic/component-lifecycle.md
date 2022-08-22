---
Title: 'Component Lifecycle'
Keywords: 'lifecycle, component, mahal'
Description: 'A component have different lifecycle and an event is emitted for each lifecycle'
---

# Component LifeCycle

A component have different lifecycle and an **event** is emitted for each lifecycle. You can subscribe to lifecycle events multiple times as per your need.

Here are list of events in order - 

### 1. Create

The `create` lifecycle occurs when the component is initiated. In this phase **computed** value, **props** value are setted but element has not rendered yet.

```javascript
import { Component } from "mahal"
export default class MainComponent extends Component {

    onInit(){
        this.on("create",()=>{
            console.log("component is created");
        })
    }
}
```

### 2. Mount

The `mount` lifecycle event occurs after the component is rendered (element has been inserted into DOM and ui is visible).

```
import {Component} from "mahal"
export default class MainComponent extends Component {

    onInit(){
        this.on("mount",this.mounted);
    }

    mounted(){
        console.log("component is mounted");
    }
}
```

### 3. Update

The `update` lifecycle event occurs whenever the UI is updated. This occurs multiple times as UI can be updated multiple times with change in the component state.


```
import { Component } from "mahal"
export default class MainComponent extends Component {

    onInit(){
        this.on("update",this.updated);
    }

    updated(){
        console.log("component is updated");
    }
}
```

### 4.Destroy

The `destroy` lifecycle event occurs after the component is destroyed. This event can be used to 
free the memory being used like removing events listeners.

By default framework removes all events at component level but if you have subscribed to any global events - then this is the place to remove those events and avoid any memory leak.

```
import {Component} from "mahal"
export default class MainComponent extends Component {

    onInit(){
        this.on("destroy", this.destroyed);
    }

    destroyed(){
        console.log("component is destroyed");
    }
}
```
