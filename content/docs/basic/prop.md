---
Title: 'Component Props'
Keywords: 'props, input, component, mahal'
Description: 'Props (properties) can be used to pass **input** to component.'
---

# Props

Props (properties) can be used to pass **input** to component. Props are reactive.

Let's create a component which take input `name` and render the message.

create a file - `name.mahal`

```
<html>
    <div>My name is {{name}}</div>
</html>
<script>
import {Component, prop } from "mahal"

export default class NameComponent extends Component {

    @prop()
    name;
}
</script>
```

In the above code - we have marked the property `name` as Prop by using the decorator `Prop`.


Let's use the component `Name` inside `Main` Component and pass input value name.

```
<html>
    <Name :name="name" />
</html>
<script>
import {Component, reactive, Children } from "mahal"
import Name from "./name.mahal";

@Children({
    Name:Name
})
export default class MainComponent extends Component {

    @reactive
    name = "ujjwal gupta"
}
</script>
```

## Options

Prop have following options - 

1. type - accepts data type of the prop. When provided it checks the provided data type.