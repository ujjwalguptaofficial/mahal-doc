---
Title: 'Store Mutation'
Keywords: 'mahal, store, mutation'
Description: 'The Mutation decorator can be used to map the mutation value.'
---

# Mutation

The `Mutation` decorator can be used to map the mutation value.

```
<html>
<div>
	<input type="text" :value="name" @input="onNameInput" />
    <div>{{name}}</div>
</div>
</html>

<script>
import { Component, Computed, Reactive } from "mahal";
import { State, Mutation } from "mahal-store";

export default class extends Component {

    // map with `name` state
    @State('name') name;

    @Mutation('name') setName;

    onNameInput(e){
        const value = e.target.value;
        this.setName(value);
    }
}
</script>

```