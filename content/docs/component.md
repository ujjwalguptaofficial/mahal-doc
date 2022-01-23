---
Title: 'Component'
Keywords: 'mahal'
Description: 'Get started with mahal'
---

# Component

A Component is reusable piece of UI code and acts as buliding block for your app. A single component contains - 

1. Html - html code to represent UI.
2. Script - javascript code for handling logic
3. Style - css code for styling the UI.

<br>
Let's see an example of simple component - 

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
<style>
.name{
    color:maroon;
    background:white;
}
</style>
```

The above code will render the variable `name` from the component script in the UI. 

👉 Let's understand some of regular usable concepts - 

## Attributes

You can set the attributes in the UI as you do regular in HTML.

```
<html>
    <div name="ujjwal">Ujjwal Gupta</div>
</html>
```

You can see we have setted the `data-name` similar to how we do in html.

#### Dynamic Attributes

Sometimes we need to set the attributes from the variable. You can use `:` syntax for setting dynamic attribute.

```
<html>
    <div :name="userName">Ujjwal Gupta</div>
</html>
<script>
import {Component} from "mahal"
export default class MainComponent extends Component {
    userName = "ujjwal gupta"
}
</script>
```

The `:` is known as `bind`. So when pronouncing you can call - **bind name attribute with userName state**

## onInit

every component has `onInit` method which is called just after the constructor. You can use the `onInit` method to subscribe to different events.

```
<html>
    <div data-name="ujjwal">Ujjwal Gupta</div>
</html>
<script>
import {Component} from "mahal"
export default class MainComponent extends Component {
    name = "ujjwal gupta"

    onInit(){
        console.log('on init called')
    }
}
</script>
```

## Text Binding

For binding a text with state - you can use double curly braces also known as mustache syntax.

```
<html>
    <div class="flex">My name is {{name}}</div>
    <div class="flex">I am from India.</div>
</html>
<script>
import {Component} from "mahal"
export default class MainComponent extends Component {
    name = "ujjwal gupta"
}
</script>
```

## Nested Components

A component can render another component or list of component. This allows us to reuse a component.

e.g - Let's say we have a `root` component, which wants to render the `home` component.

In order to render a component, you need to do following steps - 

1. Import the component
2. Use `Children` decorator to declare it as child.


```
<html>
   <Home/>
</html>

<script>
import { Component, Children } from "mahal"
import Home from "./components/home.mahal"

@Children({
   Home
})
export default class MainComponent extends Component {
    name = "ujjwal gupta"
}
</script>

```




