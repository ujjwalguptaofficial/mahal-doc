---
Title: 'reactive'
Keywords: 'reactive, state, mahal'
Description: 'A state can be made reactive by using a decorator - `reactive`. This allows to change the state value directly.'
---

# reactive

By default a component state are not reactive which means if you will change the value - it won't be updated in UI.

You can use `setState` method to trigger the update but this is not clean, increase the responsibility and code size ofcourse.

A state can be made reactive by using a decorator - `reactive`. This allows to change the state value directly.

```
<html>
    <div>My name is {{name}}</div>
    <button @click="changeName">Change name</button>
</html>

<script>
import {Component, reactive } from "mahal"
export default class MainComponent extends Component {

    @reactive
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
import {Component, reactive } from "mahal"
export default class MainComponent extends Component {

    @reactive
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