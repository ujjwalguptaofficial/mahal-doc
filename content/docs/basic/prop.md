---
Title: 'Component'
Keywords: 'mahal'
Description: 'Get started with mahal'
---

# Props

Props (properties) can be used to pass value from one component to another component. Props are reactive.

Let's create a component which will take the `name` from the main component and render the message.

create a file - `name.mahal`

```
<html>
    <div>My name is {{name}}</div>
</html>
<script>
import {Component, Prop } from "mahal"

export default class NameComponent extends Component {

    @Prop()
    name;
}
</script>
```

In the above code - we have marked the variable `name` as Prop by using the decorator `Prop`.


Let's use the component `Name` inside `Main` Component

```
<html>
    <Name :name="name" />
</html>
<script>
import {Component, Reactive, Children } from "mahal"
import Name from "./name.mahal";

@Children({
    Name:Name
})
export default class MainComponent extends Component {

    @Reactive
    name = "ujjwal gupta"
}
</script>
```

## Options

Prop have following options - 

1. type - accepts data type of the prop. When provided it checks the provided data type.