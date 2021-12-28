---
Title: 'Component'
Keywords: 'mahal'
Description: 'Get started with mahal'
---

A Component is reusable piece of UI code and acts as buliding block for your app. The component contains - 

1. Html - html code to represent UI.
2. Script - javascript code for handling logic
3. Style - css code for styling the UI.

Let's see an example of simple component - 

```
<html>
    <div class="name">My name is {{name}}</div>
</html>
<script>
import {Component} from "mahal"
export default class MainComponent extends Component {
    name = "ujjwal gupta"
}
</script>
<style>
.name{
    color:maroon;
    background:white;
}
</style>
```

The above code will render the value name from the script in the UI. 

A component have different lifecycle and an event is emitted for each lifecycle. You can subscribe to lifecycle events multiple times as per your need.

Here are list of events in order - 

## 1. Create

The `create` lifecycle occurs when the component is initiated. In this phase props value are setted but element has not rendered yet.

```
import {Component} from "mahal"
export default class MainComponent extends Component {

    constructor(){
        super();

        this.on("create",()=>{
            console.log("component is created");
        })
    }
}
```

## 2. Mount

The `mount` lifecycle event occurs after the element is rendered.

```
import {Component} from "mahal"
export default class MainComponent extends Component {

    constructor(){
        super();

        this.on("mount",this.mounted);
    }

    mounted(){
        console.log("component is mounted");
    }
}
```

## 3. Update

The `update` lifecycle event occurs after the element UI is updated. This occurs multiple times as UI can be updated multiple times with change in the component logic.


```
import {Component} from "mahal"
export default class MainComponent extends Component {

    constructor(){
        super();

        this.on("update",this.updated);
    }

    updated(){
        console.log("component is updated");
    }
}
```

## 4.Destroy

The `destroy` lifecycle event occurs after the component is destroyed. This event can be used to free the memory or event listener. 

By default framework removes all events at component level but if you have subscribed to any global events - then this is the place to remove those events and avoid any memory leak.

```
import {Component} from "mahal"
export default class MainComponent extends Component {

    constructor(){
        super();

        this.on("destroy",this.destroyed);
    }

    destroyed(){
        console.log("component is destroyed");
    }
}
```
