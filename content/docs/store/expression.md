---
Title: 'Store Mutation'
Keywords: 'mahal, store, mutation'
Description: 'The Task decorator can be used to map the store task.'
---

# Expression

The `expression` decorator can be used to map the store expression.

```
<html>
<div>
	<input type="text" :value="name" @input="onNameInput" />
    <div>{{name}}</div>
    <div>nameLength - {{nameLength}}</div>
</div>
</html>

<script>
import { Component } from "mahal";
import { state, mutation, task, expression } from "@mahaljs/store";

export default class extends Component {

    // map with `name` state
    @state('name') name;

    @mutation('name') setName;

    @expression('nameLength') nameLength;

    //map with expression fullName of room account
    @expression('fullName','account') fullName;

    onNameInput(e){
        const value = e.target.value;
        this.setName(value);
    }
}
</script>

```