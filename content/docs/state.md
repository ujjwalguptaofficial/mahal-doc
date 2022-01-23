---
Title: 'Component State'
Keywords: 'mahal'
Description: 'Get started with mahal'
---

# State

A state is a variable inside the component which is used in the UI. By default all variables inside the class are considered as **State**. 

```
<html>
    <div class="flex">My name is {{name}}</div>
</html>
<script>
import {Component} from "mahal"
export default class MainComponent extends Component {
    name = "ujjwal gupta"
}
</script>
```

In the above code - variable `name` is state which is used in UI to render the name value.

## setState

You can use `setState` method to change the state value.

```
<html>
    <div class="flex">My name is {{name}}</div>
    <button @click="changeName">Change name</button>
</html>

<script>
import { Component } from "mahal"

export default class MainComponent extends Component {
    name = "ujjwal gupta"

    changeName(){
        this.setState('name', "BATMAN")
    }
}
</script>
```