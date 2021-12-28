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

A component have following features - 

* Formatter
* Reactive
* Computed
* Prop
* Event
* Model
* Conditional
* List
* Dynamic class
* Directive
* Slot
