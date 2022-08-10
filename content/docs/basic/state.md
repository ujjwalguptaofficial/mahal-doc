---
Title: 'Component State'
Keywords: 'mahal'
Description: 'Get started with mahal'
---

# State

A state is a property inside the component class. A state is accessible in UI section.

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
```

In the above code - property `name` is state which is used in UI to render the name value.

## setState

You can use `setState` method to change the state value. It will trigger update in UI.

```
<html>
    <div class="flex">My name is {{name}}</div>
    <button @click="changeName">Change name</button>
</html>

<script>
import { Component } from "mahal"

export default class MainComponent extends Component {
    name = "ujjwal gupta"

    changeName(){
        this.setState('name', "BATMAN")
    }
}
</script>
```

**some other examples of using setState - **

### Object
```

// set or update an object property value
// equivalent to -  this.profile.name = 'BATMAN'
this.setState('profile.name', "BATMAN"); 

// eq to - this.profile.firstName = 'BATMAN'
this.setState('profile.name.firstName', "Bruce"); 
this.setState('profile.name.lastName', "Wayne"); 

```

### Array

```
// update value at index 0
this.setState('profile[0]', "BATMAN");

// push value
this.setState('profile.push', "BATMAN");

// push multiple value
this.setState('profile.push', "SUPERMAN", "SHAJAM");

// splice value
this.setState('profile.splice', 0,1);

this.setState('profile.splice', 0,1, "SUPERMAN");


// pop value
this.setState('profile.pop');

```

