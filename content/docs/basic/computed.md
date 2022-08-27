---
Title: 'Computed'
Keywords: 'mahal, computed, state, component'
Description: 'A computed is derived property from reactive property. The computed property is automatically evaluated when the target reactive property changes.'
---

# Computed

A computed is derived property from a property. The computed property is automatically evaluated when the target reactive property changes.

For making a property `computed` you will have to use decorator - `Computed` which will take the list of props to depend on. 

A simple example of computed property is evaluating full name from first name and last name. 

```
<html>
    <div>My name is {{fullName}}</div>
</html>
<script>
import { Component, Computed, Reactive } from "mahal";

export default class extends Component {

    @Reactive
    firstName = "ujjwal";

    @Reactive
    lastName = "gupta";

    @Computed("firstName", "lastName")
    get fullName() {
        return this.firstName + " " + this.lastName;
    }
}
</script>
```