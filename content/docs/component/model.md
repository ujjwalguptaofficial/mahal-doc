---
Title: 'Component'
Keywords: 'mahal'
Description: 'Get started with mahal'
---

# Model

A Model is a directive which can be used as shorthand for input event. It is a two way binding which means - if you change the value in the code then UI will be automatically updated and vice versa.

```
<html>
    <input type="text" #model(value) />
</html>
<script>
import {Component, Reactive } from "mahal"

export default class NameComponent extends Component {

    @Reactive
    value;
}
</script>
```


