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

In the above code - we have marked the class property `name` as Prop by using the decorator `prop`.


Let's use the component `Name` inside `Main` Component and pass input value name.

```
<html>
    <Name :name="name" />
</html>
<script>
import {Component, reactive, children } from "mahal"
import Name from "./name.mahal";

@children({
    Name:Name
})
export default class MainComponent extends Component {

    @reactive
    name = "ujjwal gupta"
}
</script>
```

## default value

You can assign default value to class property which will be considered as default value when prop value is not passed from the parent component. 

Let's assign a default name to our component - 

```
<html>
    <div>My name is {{name}}</div>
</html>
<script>
import {Component, prop } from "mahal"

export default class NameComponent extends Component {

    @prop()
    name = "Batman";
}
</script>
```

## Options

prop decorator have following options - 

1. type - accepts data type of the prop. When provided it checks the provided data type.