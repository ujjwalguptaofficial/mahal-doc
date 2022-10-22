---
Title: 'Model - two way binding'
Keywords: 'model, two way binding, mahal'
Description: 'A **model** is a special directive which can be used for two way binding'
---

# Model

A **model** is a special directive which can be used for two way binding on input element, which means - if you change the value in the code then UI will be automatically updated and vice versa.

👉 A model is shorthand for `input` event and `value` attribute.

```
<html>
    <input type="text" :model(value) />
</html>
<script>
import {Component, reactive } from "mahal"

export default class NameComponent extends Component {

    @reactive
    value;
}
</script>
```

In the above code - if you will enter something into the input field, the script state will be automatically updated and in the same way if you will change the value of the state from code then input field value will be automatically updated.

Let's see how we can use `model` for other input types

## Checkbox

```
<html>
<div>
    What is your super power ? 
    Can fly -  <input type="checkbox" :model(canFly) /> 
    Can run super fast - <input type="checkbox" :model(canRunSuperFast) />
    Immortal - <input type="checkbox" :model(isImmortal) />
</div>
</html>
<script>
import {Component, reactive } from "mahal"

export default class NameComponent extends Component {

    @reactive
    canFly;

    @reactive
    canRunSuperFast;

    @reactive
    isImmortal;
}
</script>
```

## Radio button

In case of radio button - 

* Radio button will be automatically checked if the value from the state matches the value of radio button.
* The value of state will be updated to the value of checked radio button.

```
<html>
<div>
  <p>
    <span>Male</span>
    <input type="radio" :model(gender) name="gender" value="male" />
  </p>
  <p>
    <span>Female</span>
    <input type="radio" :model(gender) name="gender" value="female" />
  </p>
</div>
</html>
<script>
import {Component, reactive } from "mahal"

export default class NameComponent extends Component {

    @reactive
    gender;
}
</script>
```