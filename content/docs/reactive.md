---
Title: 'Component'
Keywords: 'mahal'
Description: 'Get started with mahal'
---

# Reactive

By default a component variable are not reactive which means if you will change the value - it won't be updated in the UI.

A variable can be made reactive by using a decorator - `Reactive`

```
<html>
    <div>My name is {{name}}</div>
</html>
<script>
import {Component, Reactive } from "mahal"
export default class MainComponent extends Component {

    @Reactive
    name = "ujjwal gupta"

    constructor(){
        setTimeout(()=>{
            this.changeName();
        },1000)
    }

    changeName(){
        this.name="DC is love."
    }
}
</script>
```