---
Title: 'Reactive'
Keywords: 'reactive, mahal'
Description: 'Mahal provides Reactive decorator which can be used for two way binding.'
---

# Reactive

By default a component variable are not reactive which means if you will change the value - it won't be updated in the UI.

You can use `setState` method to trigger the update but this increase the responsibility and code size ofcourse.

A variable can be made reactive by using a decorator - `Reactive`

```
<html>
    <div>My name is {{name}}</div>
    <button @click="changeName">Change name</button>
</html>

<script>
import {Component, Reactive } from "mahal"
export default class MainComponent extends Component {

    @Reactive
    name = "ujjwal gupta"

    changeName(){
        this.name="DC is love."
    }
}
</script>
```

## Limitation

There are few limitation to reactivity - 

### 1. Object inside array

Object inside array are not tracked due to performance reasons.

```
import {Component, Reactive } from "mahal"
export default class MainComponent extends Component {

    @Reactive
    users = [{
        name:'ujjwal',
        gender:'male'
    }]

    // Invalid
    changeName(){
        // won't work
        this.users[0].name = 'batman'; 
    }

    // valid
    changeNameByReplacingArray(){
        this.users[0] = {
            ...this.users[0],
            ...{
                name: 'batman'
            }
        }
    }
}
</script>
```