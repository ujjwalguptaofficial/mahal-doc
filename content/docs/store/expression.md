---
Title: 'Store Mutation'
Keywords: 'mahal, store, mutation'
Description: 'The Task decorator can be used to map the store task.'
---

# Expression

The `Expression` decorator can be used to map the store expression.

```
<html>
<div>
	<input type="text" :value="name" @input="onNameInput" />
    <div>{{name}}</div>
    <div>nameLength - {{nameLength}}</div>
</div>
</html>

<script>
import { Component, Computed, Reactive } from "mahal";
import { State, Mutation, Task, Expression } from "@mahaljs/store";

export default class extends Component {

    // map with `name` state
    @State('name') name;

    @Mutation('name') setName;

    @Expression('nameLength') nameLength;

    onNameInput(e){
        const value = e.target.value;
        this.setName(value);
    }

    
}
</script>

```