---
Title: 'Model - two way binding'
Keywords: 'model, two way binding, mahal'
Description: 'A **model** is a special directive which can be used for two way binding'
---

# Model

A **model** is a special directive which can be used for two way binding, which means - if you change the value in the code then UI will be automatically updated and vice versa.

👉 A model is shorthand for `input` event.

```
<html>
    <input type="text" :model(value) />
</html>
<script>
import {Component, Reactive } from "mahal"

export default class NameComponent extends Component {

    @Reactive
    value;
}
</script>
```

In the above code - if you will enter something into the input field, the script state will be automatically updated and in the same way if you will change the value from the state then input field value will be automatically updated.
