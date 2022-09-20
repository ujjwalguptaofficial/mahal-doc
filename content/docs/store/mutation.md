---
Title: 'Store Mutation'
Keywords: 'mahal, store, mutation'
Description: 'The Mutation decorator can be used to map the mutation value.'
---

# Mutation

The `mutation` decorator can be used to map the mutation value.

```
<html>
<div>
	<input type="text" :value="name" @input="onNameInput" />
    <div>{{name}}</div>
</div>
</html>

<script>
import { Component } from "mahal";
import { state, mutation } from "@mahaljs/store";

export default class extends Component {

    // map with `name` state
    @state('name') name;

    @mutation('name') setName;

    onNameInput(e){
        const value = e.target.value;
        this.setName(value);
    }
}
</script>

```