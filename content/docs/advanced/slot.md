---
Title: 'Slot'
Keywords: 'slot, mahal'
Description: 'Slot can be used for injecting content inside a component. It is an alternative of using `prop`'
---

# Slot

Slot can be used for injecting content inside a component. It is an alternative of using `prop`.

Consider a `StandardButton` component which takes the content through prop

```
<html>
<div>
    <StandardButton :text="Submit" />
</div>
</html>
```

Now let's use slot to inject the content -

create a file `button.mahal`

```
<html>
    <button>
        <slot></slot>
    </button>
</html>
<script>
import {Component } from "mahal"

export default class MyBtnComponent extends Component {

}
</script>
```

let's use the `MyBtnComponent` - 

```
<html>
<div>
    <MyBtnComponent>
        Submit
    </MyBtnComponent>
</div>
</html>
```

## Named slot

Slot can be named in order to target a particular slot when there are multiple slot.

```
<html>
<div class="user-comp">
    User info
    <div class="name">
        My name is <slot></slot>.
    </div>
    <div class="gender">
        I am <slot name="gender"></slot>.
    </div>
</div>
</html>
<script>
import {Component } from "mahal"

export default class extends Component {

}
</script>
```

In the above code - you can see there are two slots : one default slot and other named slot with `name=gender`

Let's use the above Component -

```
<html>
<div>
     <User class="users" :for(user in users)>
        <target>{{user.name}}</target>
        <target name="gender">{{user.gender}}</target>
    </User>
</div>
</html>
```